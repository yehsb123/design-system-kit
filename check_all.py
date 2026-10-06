# -*- coding: utf-8 -*-
"""정합성을 한 번에 잰다. 숫자, 스펙 출처, 토큰이 화면과 API 와 문서에서 같은지 본다."""
import os, io, json, re
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'index.html').replace(os.sep, '/')
DOC = "document.getElementById('stage').contentDocument"
rows = []


def say(name, ok, got=''):
    rows.append(('통과 ' if ok else '실패 ') + name + ('' if ok else '\n     ' + str(got)[:200]))
    return ok


with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1360, 'height': 900})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:160]))

    # 1. 화면이 세는 수
    pg.goto(URL + '#library'); pg.wait_for_timeout(1900)
    n_cards = pg.evaluate("(()=>{const D=%s; return D.querySelectorAll('#cards .dscard').length;})()" % DOC)
    count_txt = pg.evaluate("(()=>{const D=%s; return D.querySelector('#count').textContent;})()" % DOC)
    ids = pg.evaluate("""(()=>{const D=%s;
        return [...D.querySelectorAll('#cards .dscard')]
          .map(c=>(c.getAttribute('onclick')||'').match(/'([^']+)'/)[1]);})()""" % DOC)

    pg.goto(URL); pg.wait_for_timeout(1700)
    n_hero = pg.evaluate("(()=>{const D=%s; return parseInt(D.querySelector('#cSys').textContent,10);})()" % DOC)
    n_grid = pg.evaluate("(()=>{const D=%s; return D.querySelectorAll('#sysGrid .syscard').length;})()" % DOC)

    api = json.load(io.open(os.path.join(D, 'v1', 'systems.json'), encoding='utf-8'))
    rd = io.open(os.path.join(D, 'README.md'), encoding='utf-8').read()
    gd = io.open(os.path.join(D, 'src', 'guide.html'), encoding='utf-8').read()

    nums = {'모음집 카드': n_cards, '모음집 개수표시': int(re.search(r'(\d+)개 시스템', count_txt).group(1)),
            '시작화면 숫자': n_hero, '시작화면 카드': n_grid,
            'API count': api['count'], 'API 배열': len(api['systems']),
            'README 표': int(re.search(r'\| 디자인 시스템 \| (\d+)종', rd).group(1)),
            '설명서': int(re.search(r'디자인 시스템 (\d+)종', gd).group(1))}
    say('시스템 수가 여덟 곳에서 같다', len(set(nums.values())) == 1, nums)

    # 2. 스펙 출처와 길이
    src, lens = {}, {}
    for sid in ids:
        pg.goto(URL + '#library?sys=' + sid); pg.wait_for_timeout(950)
        st = pg.evaluate("(()=>{const D=%s; return D.querySelector('#specState').textContent;})()" % DOC)
        ln = pg.evaluate("(()=>{const D=%s; return D.querySelector('#specView').textContent.length;})()" % DOC)
        src[sid] = st.split('·')[0].strip()
        lens[sid] = ln
    say('모든 시스템에 스펙이 있다', all(v > 2000 for v in lens.values()),
        {k: v for k, v in lens.items() if v <= 2000})
    kinds = {}
    for k, v in src.items():
        kinds.setdefault(v, []).append(k)
    rows.append('      스펙 출처: ' + ', '.join('%s %d종(%s)' % (k, len(v), ','.join(v)) for k, v in kinds.items()))

    # 3. API 스펙이 화면과 같은 길이인가
    bad = []
    for sid in ids:
        f = os.path.join(D, 'v1', 'systems', sid, 'spec.md')
        if not os.path.exists(f):
            bad.append(sid + ' 없음'); continue
        n = len(io.open(f, encoding='utf-8').read())
        if n != lens[sid]:
            bad.append('%s %d != %d' % (sid, n, lens[sid]))
    say('API 스펙이 화면 스펙과 같다', not bad, bad[:4])

    # 4. API 토큰이 화면 내보내기와 같은가
    diff = []
    for sid in ids:
        pg.goto(URL + '#library?sys=' + sid); pg.wait_for_timeout(900)
        shown = pg.evaluate("""(()=>{const D=%s;
            const t=D.querySelector('#exportTabs [data-fmt="css"]'); if(t) t.click();
            return D.querySelector('#exportBody').textContent;})()""" % DOC)
        want = io.open(os.path.join(D, 'v1', 'systems', sid, 'tokens.css'), encoding='utf-8').read()
        if shown.strip() != want.split('\n', 1)[1].strip():
            diff.append(sid)
    say('API 토큰이 화면 내보내기와 같다', not diff, diff[:5])

    # 5. 램프와 시맨틱이 다 차 있는가
    thin = []
    for sid in ids:
        s = json.load(io.open(os.path.join(D, 'v1', 'systems', sid + '.json'), encoding='utf-8'))
        if len(s['ramps']) != 6:
            thin.append('%s ramps %d' % (sid, len(s['ramps'])))
        for n, arr in s['ramps'].items():
            if len(arr) != 11:
                thin.append('%s %s %d' % (sid, n, len(arr)))
        for t in ['light', 'dark']:
            if len(s['semantic'][t]) < 30:
                thin.append('%s semantic.%s %d' % (sid, t, len(s['semantic'][t])))
    say('램프 6종 11단계와 시맨틱이 다 차 있다', not thin, thin[:4])

    # 6. primary 500 이 안 겹치는가
    p500 = {}
    dup = []
    for sid in ids:
        s = json.load(io.open(os.path.join(D, 'v1', 'systems', sid + '.json'), encoding='utf-8'))
        c = dict(s['ramps']['primary'])['500'].upper()
        if c in p500:
            dup.append('%s = %s (%s)' % (sid, p500[c], c))
        p500[c] = sid
    say('주된 색 500 이 겹치지 않는다', not dup, dup)

    # 7. 주된 버튼 대비
    def lum(h):
        h = h.lstrip('#')
        r, g, bb = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
        f = lambda v: v / 12.92 if v <= .03928 else ((v + .055) / 1.055) ** 2.4
        return .2126 * f(r) + .7152 * f(g) + .0722 * f(bb)
    # 실제 시스템이 쓰는 조합은 그대로 둔다. 다만 기준에 못 미치면 킷이 알려야 한다.
    unread, silent = [], []
    for sid in ids:
        pg.goto(URL + '#library?sys=' + sid); pg.wait_for_timeout(900)
        pair = pg.evaluate("""(()=>{const D=%s; const e=D.querySelector('#detail .btn-primary');
            const c=getComputedStyle(e); return c.backgroundColor+'|'+c.color;})()""" % DOC)
        warn = pg.evaluate("(()=>{const D=%s; return !!D.querySelector('#s-a11y .warnbox');})()" % DOC)
        hexes = []
        for part in pair.split('|'):
            v = [int(x) for x in part.replace('rgb(', '').replace(')', '').split(',')[:3]]
            hexes.append('#%02X%02X%02X' % tuple(v))
        L = [lum(hexes[0]), lum(hexes[1])]
        r = (max(L) + .05) / (min(L) + .05)
        if r < 3:
            unread.append('%s %.2f' % (sid, r))
        if r < 4.5 and not warn:
            silent.append('%s %.2f' % (sid, r))
    say('읽을 수 없는 버튼이 없다 (3 대 1 미만)', not unread, unread)
    say('기준에 못 미치면 화면이 알려 준다', not silent, silent)

    # 생성기도 모음집과 같은 수를 들고 있어야 한다
    pg.goto(URL + '#generator'); pg.wait_for_timeout(2000)
    n_gen = pg.evaluate("(()=>{const D=%s; return D.querySelectorAll('#selSys option').length;})()" % DOC)
    say('생성기가 모음집과 같은 수를 쓴다', n_gen == n_cards, '%s / %s' % (n_gen, n_cards))

    say('JS 오류 없음', not errs, '; '.join(errs[:2]))
    b.close()

n = sum(1 for r in rows if r.startswith('통과'))
tot = sum(1 for r in rows if r.startswith(('통과', '실패')))
rows.append('%d/%d' % (n, tot))
io.open(os.path.join(D, '_check.txt'), 'w', encoding='utf-8').write('\n'.join(rows))
print('%d/%d' % (n, tot))
