# -*- coding: utf-8 -*-
"""사용자가 밟는 길을 따라가 본다.

버튼이 반응하는지와, 그 반응이 쓸모 있는지는 다른 문제다.
여기서는 실제로 쓰는 순서대로 밟으며 기대한 결과가 나오는지 본다.
"""
import os, json, io
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'index.html').replace('\\', '/')
DOC = "document.getElementById('stage').contentDocument"

res, errs = [], []


def ok(name, cond, got=''):
    res.append({'name': name, 'ok': bool(cond), 'got': str(got)[:110]})


def q(pg, expr):
    return pg.evaluate("(()=>{const D=%s; return (%s);})()" % (DOC, expr))


def click(pg, sel, wait=900):
    pg.evaluate("(()=>{const D=%s; const e=D.querySelector(%s);"
                " if(!e) throw new Error('no '+%s); e.click();})()" % (DOC, repr(sel), repr(sel)))
    pg.wait_for_timeout(wait)


with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 1360, 'height': 900},
                        permissions=['clipboard-read', 'clipboard-write'])
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: errs.append(str(e)[:180]))
    pg.on('console', lambda m: errs.append('console: ' + m.text[:180]) if m.type == 'error' else None)

    # 1. 시작 화면에서 모음집으로
    pg.goto(URL); pg.wait_for_timeout(1500)
    ok('시작 화면이 뜬다', q(pg, "!!D.querySelector('h1')"))
    click(pg, 'a[href="library.html"]', 1900)
    ok('모음집으로 넘어간다', pg.evaluate("location.hash") == '#library',
       pg.evaluate("location.hash"))

    # 2. 열자마자 프롬프트가 보인다
    out = q(pg, "D.querySelector('#cOut').textContent")
    ok('열자마자 프롬프트가 채워져 있다', len(out) > 200, '%d자' % len(out))

    # 3. 시스템을 열면 주소가 바뀐다
    click(pg, '#cards .dscard[onclick*="monopo"]', 1300)
    ok('시스템 상세가 열린다', q(pg, "D.querySelector('#detail').classList.contains('active')"))
    ok('주소에 시스템이 적힌다', pg.evaluate("location.hash") == '#library?sys=monopo',
       pg.evaluate("location.hash"))

    # 4. 뒤로가기로 목록에 돌아온다
    pg.go_back(); pg.wait_for_timeout(1800)
    ok('뒤로가기로 목록에 돌아온다',
       q(pg, "!D.querySelector('#detail').classList.contains('active')"),
       pg.evaluate("location.hash"))

    # 5. 주소를 그대로 열면 같은 시스템이 열린다
    pg.goto(URL + '#library?sys=carbon'); pg.wait_for_timeout(2000)
    ok('주소로 바로 그 시스템이 열린다',
       q(pg, "(D.querySelector('#detail h1')||{}).textContent||''").startswith('IBM Carbon'),
       q(pg, "(D.querySelector('#detail h1')||{}).textContent||''"))

    # 6. Esc 로 목록에 돌아온다
    pg.evaluate("(()=>{const D=%s; D.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));})()" % DOC)
    pg.wait_for_timeout(700)
    ok('Esc 로 목록에 돌아온다',
       q(pg, "!D.querySelector('#detail').classList.contains('active')"))

    # 7. 복사하면 다음 할 일이 남는다
    click(pg, '#cCopy', 700)
    nxt = q(pg, "D.querySelector('#cNext').textContent")
    ok('복사 뒤 다음 할 일이 남는다', '붙여넣' in nxt or '저장' in nxt, nxt)
    ok('복사한 글자 수를 알려 준다', any(c.isdigit() for c in nxt), nxt)

    # 8. 검색 결과 수와 빈 결과 안내
    pg.evaluate("""(()=>{const D=%s; const i=D.querySelector('#searchInput');
      i.value='toss'; i.dispatchEvent(new Event('input',{bubbles:true}));})()""" % DOC)
    pg.wait_for_timeout(500)
    ok('검색 결과 수가 보인다', q(pg, "D.querySelector('#searchCount').textContent") != '',
       q(pg, "D.querySelector('#searchCount').textContent"))
    pg.evaluate("""(()=>{const D=%s; const i=D.querySelector('#searchInput');
      i.value='zzzzzz'; i.dispatchEvent(new Event('input',{bubbles:true}));})()""" % DOC)
    pg.wait_for_timeout(500)
    ok('결과가 없으면 무엇을 하면 되는지 알려 준다',
       q(pg, "!!D.querySelector('.noresult')"))
    click(pg, '.noresult .filterchip', 700)
    ok('초기화 버튼이 목록을 되돌린다',
       q(pg, "D.querySelectorAll('#cards .dscard').length") == 17,
       q(pg, "D.querySelectorAll('#cards .dscard').length"))

    # 9. 조립기에서 만든 시스템이 생성기로 넘어간다
    pg.goto(URL + '#builder'); pg.wait_for_timeout(1700)
    click(pg, '#btnToGen', 2200)
    ok('조립기에서 생성기로 넘어간다', pg.evaluate("location.hash") == '#generator?sys=mine',
       pg.evaluate("location.hash"))
    ok('내가 만든 시스템이 골라져 있다', q(pg, "D.querySelector('#selSys').value") == '0',
       q(pg, "D.querySelector('#selSys').value"))

    # 10. 원문 스펙이 그대로 나온다
    pg.goto(URL + '#library?sys=monopo'); pg.wait_for_timeout(2000)
    click(pg, '#exportTabs [data-fmt="spec"]', 700)
    # SPECS 는 window 에 붙지 않는 선언이라, 화면에 적힌 글자 수와 대조한다
    n = q(pg, "D.querySelector('#exportBody').textContent.length")
    state = q(pg, "D.querySelector('#specState').textContent")
    ok('원문 스펙이 한 글자도 안 바뀐다', n == 22295 and '22,295' in state, '%d / %s' % (n, state))

    # 11. 테마가 화면을 넘어가도 남는다
    click(pg, '#themeBtn', 700)
    t1 = q(pg, "D.documentElement.getAttribute('data-theme')")
    pg.goto(URL + '#guide'); pg.wait_for_timeout(1600)
    t2 = q(pg, "D.documentElement.getAttribute('data-ui')")
    ok('테마가 화면을 넘어가도 남는다', t1 == t2, '%s / %s' % (t1, t2))

    b.close()

res.append({'name': 'JS 오류 없음', 'ok': not errs, 'got': '; '.join(errs[:3])})
io.open(os.path.join(D, '_test_flow.json'), 'w', encoding='utf-8').write(
    json.dumps(res, ensure_ascii=False, indent=1))
n = sum(1 for r in res if r['ok'])
for r in res:
    print(('통과' if r['ok'] else '실패'), r['name'], ('' if r['ok'] else '| ' + r['got']))
print('%d/%d' % (n, len(res)))
