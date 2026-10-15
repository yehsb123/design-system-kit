# -*- coding: utf-8 -*-
"""API 파일이 화면과 같은 값을 들고 있는지 본다.

API 를 따로 계산해서 만들면 화면과 달라진다. 그래서 만들 때 화면 함수를 그대로
불렀는데, 그래도 한 번 더 대조한다. 화면을 고치고 API 를 안 만들면 낡기 때문이다.
"""
import os, io, json, re
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
API = os.path.join(D, 'v1')
URL = 'file:///' + os.path.join(D, 'index.html').replace(os.sep, '/')
DOC = "document.getElementById('stage').contentDocument"

res = []


def ok(name, cond, got=''):
    res.append({'name': name, 'ok': bool(cond), 'got': str(got)[:160]})


def jread(path):
    return json.load(io.open(os.path.join(API, path), encoding='utf-8'))


# ---- 파일이 다 있는가 ----
ok('v1/systems.json 이 있다', os.path.exists(os.path.join(API, 'systems.json')))
idx = jread('systems.json')
ids = [s['id'] for s in idx['systems']]
ok('목록에 38종이 있다', idx['count'] == len(ids) == 38, '%d / %d' % (idx['count'], len(ids)))

missing = []
for sid in ids:
    for f in ['systems/%s.json' % sid, 'systems/%s/tokens.css' % sid,
              'systems/%s/tokens.dark.css' % sid, 'systems/%s/theme.css' % sid,
              'systems/%s/tailwind.js' % sid,
              'systems/%s/spec.md' % sid]:
        if not os.path.exists(os.path.join(API, f)):
            missing.append(f)
ok('시스템마다 파일 여섯 개가 다 있다', not missing, missing[:4])

# ---- theme.css 는 링크 한 줄로 끝나야 한다 ----
# tokens.css 와 tokens.dark.css 는 둘 다 :root 라 같이 걸면 다크가 고정된다.
# theme.css 는 다크를 선택자 안에 넣어 그 사고를 막는 파일이다.
bad = []
for sid in ids:
    css = io.open(os.path.join(API, 'systems/%s/theme.css' % sid), encoding='utf-8').read()
    if css.count(':root{') != 1:
        bad.append('%s root=%d' % (sid, css.count(':root{')))
    if '[data-theme="dark"]{' not in css:
        bad.append('%s 다크선택자없음' % sid)
    if 'prefers-color-scheme: dark' not in css:
        bad.append('%s 기기설정없음' % sid)
    light = io.open(os.path.join(API, 'systems/%s/tokens.css' % sid), encoding='utf-8').read()
    n_light = light.count(';')
    if css[:css.index('}')].count(';') != n_light:
        bad.append('%s 라이트토큰수 다름' % sid)
ok('theme.css 가 라이트와 다크를 한 파일에 담는다', not bad, bad[:4])

# ---- 내용이 비지 않았는가 ----
thin = []
for sid in ids:
    s = jread('systems/%s.json' % sid)
    for key in ['ramps', 'semantic', 'tokens', 'ui', 'radius']:
        if not s.get(key):
            thin.append('%s.%s' % (sid, key))
    if len(s['ramps']) != 6:
        thin.append('%s.ramps=%d' % (sid, len(s['ramps'])))
    for n, arr in s['ramps'].items():
        if len(arr) != 11:
            thin.append('%s.%s=%d' % (sid, n, len(arr)))
    spec = io.open(os.path.join(API, 'systems/%s/spec.md' % sid), encoding='utf-8').read()
    if len(spec) < 2000:
        thin.append('%s.spec=%d' % (sid, len(spec)))
ok('램프 6종 11단계와 스펙이 다 차 있다', not thin, thin[:4])

# ---- 화면 값과 같은가 ----
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1280, 'height': 900})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:160]))

    diffs = []
    for sid in ids:
        pg.goto(URL + '#library?sys=' + sid)
        pg.wait_for_timeout(900)
        shown = pg.evaluate("""(()=>{const D=%s;
          const m=D.querySelector('#dMore'); if(m) m.open=true;
          const tabs=D.querySelector('#exportTabs [data-fmt="css"]');
          if(tabs) tabs.click();
          return D.querySelector('#exportBody').textContent;})()""" % DOC)
        want = io.open(os.path.join(API, 'systems/%s/theme.css' % sid), encoding='utf-8').read()
        want_body = want.split('\n', 2)[2].strip()
        if shown.strip() != want_body:
            diffs.append(sid)
    ok('tokens.css 가 화면 내보내기와 같다', not diffs, diffs[:5])

    # 스펙도 대조
    sdiff = []
    for sid in ids[:5]:
        pg.goto(URL + '#library?sys=' + sid)
        pg.wait_for_timeout(900)
        n = pg.evaluate("(()=>{const D=%s; return D.querySelector('#specView').textContent.length;})()" % DOC)
        want = io.open(os.path.join(API, 'systems/%s/spec.md' % sid), encoding='utf-8').read()
        if n != len(want):
            sdiff.append('%s %d != %d' % (sid, n, len(want)))
    ok('스펙 문서가 화면과 같다', not sdiff, sdiff[:3])

    ok('JS 오류 없음', not errs, '; '.join(errs[:2]))
    b.close()

# ---- 곁들인 목록 ----
lay = jread('layouts.json')
pgs = jread('pages.json')
ico = jread('icons.json')
ok('레이아웃 38종', lay['count'] == 38, lay['count'])
ok('콘텐츠 구조 9종', pgs['count'] == 9, pgs['count'])
ok('아이콘 48개', ico['count'] == 48, ico['count'])

lines = [('통과 ' if r['ok'] else '실패 ') + r['name'] + ('' if r['ok'] else '\n     ' + r['got'])
         for r in res]
n = sum(1 for r in res if r['ok'])
lines.append('%d/%d' % (n, len(res)))
io.open(os.path.join(D, '_api.txt'), 'w', encoding='utf-8').write('\n'.join(lines))
print('%d/%d' % (n, len(res)))
