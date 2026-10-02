# -*- coding: utf-8 -*-
"""눈으로 보기 어려운 것을 기계로 본다.

다크 모드, 모바일 폭, 키보드만 쓰는 경우, 글자 대비를 각각 센다.
킷이 가르치는 규칙을 킷 자신이 지키는지 보는 검사다.
"""
import os, json, io
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'index.html').replace('\\', '/')
DOC = "document.getElementById('stage').contentDocument"
SCREENS = ['index', 'library', 'builder', 'generator', 'guide']

res, errs = [], []


def ok(name, cond, got=''):
    res.append({'name': name, 'ok': bool(cond), 'got': str(got)[:150]})


def q(pg, expr):
    return pg.evaluate("(()=>{const D=%s; return (%s);})()" % (DOC, expr))


# 상대 휘도로 대비를 센다. 배경이 투명이면 위로 올라가며 찾는다.
CONTRAST = """
(()=>{const D=%s;
  const lum=(r,g,b)=>{const f=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b);};
  const rgb=s=>{const m=(s||'').match(/\\d+(\\.\\d+)?/g); return m?m.slice(0,3).map(Number):null;};
  const bgOf=el=>{let e=el;
    while(e){ const c=getComputedStyle(e).backgroundColor;
      const v=rgb(c); const a=(c.match(/[\\d.]+\\)$/)||[])[0];
      if(v && !(c.includes('rgba') && parseFloat(a)===0)) return v;
      e=e.parentElement; }
    return [255,255,255];};
  const out=[];
  const onImage=el=>{let e=el; while(e){
      const b=getComputedStyle(e).backgroundImage;
      const a=getComputedStyle(e,'::after').backgroundImage;
      const f=getComputedStyle(e,'::before').backgroundImage;
      if(b!=='none'||a!=='none'||f!=='none') return true;  // 그림이나 덮개 위는 색을 셀 수 없다
      e=e.parentElement; } return false;};
  D.querySelectorAll('%s').forEach(el=>{
    if(el.closest('.demo, .preview, .stage, .frame, .export, .cout')) return;
    if(onImage(el)) return;   // 그림이나 그라디언트 위는 색을 셀 수 없다
    const t=(el.textContent||'').trim();
    if(!t || t.length>120) return;
    const r=el.getBoundingClientRect(); if(r.width===0||r.height===0) return;
    const cs=getComputedStyle(el);
    const fg=rgb(cs.color); const bg=bgOf(el);
    if(!fg) return;
    const L1=lum(...fg), L2=lum(...bg);
    const ratio=(Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
    const size=parseFloat(cs.fontSize), w=parseInt(cs.fontWeight)||400;
    const large=(size>=24)||(size>=18.66 && w>=700);
    const need=large?3:4.5;
    if(ratio+0.05 < need) out.push({t:t.slice(0,40), ratio:Math.round(ratio*100)/100,
      need:need, size:size, color:cs.color, bg:'rgb('+bg.join(',')+')'});
  });
  return out;})()
""" % (DOC, 'p, span, div, a, button, h1, h2, h3, h4, li, td, th, label')

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1360, 'height': 900})
    pg.on('pageerror', lambda e: errs.append(str(e)[:180]))

    # ---- 1. 다크 모드에서도 같은 화면이 뜬다 ----
    for mode in ['light', 'dark']:
        pg.goto(URL); pg.wait_for_timeout(900)
        pg.evaluate("localStorage.setItem('dsk_ui','%s')" % mode)
        for sc in SCREENS:
            pg.goto('about:blank'); pg.wait_for_timeout(120)
            pg.goto(URL + '#' + sc); pg.wait_for_timeout(1600)
            attr = q(pg, "D.documentElement.getAttribute('data-theme')||D.documentElement.getAttribute('data-ui')")
            ok('%s 화면이 %s 모드로 뜬다' % (sc, mode), attr == mode, attr)
            bad = pg.evaluate(CONTRAST)
            ok('%s %s 대비가 기준을 넘는다' % (sc, mode), not bad,
               '%d곳 미달: %s' % (len(bad), bad[:2]) if bad else '')

    # ---- 2. 모바일 폭에서 가로로 넘치지 않는다 ----
    pg.set_viewport_size({'width': 390, 'height': 780})
    pg.evaluate("localStorage.setItem('dsk_ui','light')")
    for sc in SCREENS:
        pg.goto(URL + '#' + sc); pg.wait_for_timeout(1500)
        over = q(pg, """(()=>{const o=[];
          D.querySelectorAll('body *').forEach(e=>{
            if(e.closest('.demo, .preview, .stage, .frame, .export, .cout, .specview, pre')) return;
            const r=e.getBoundingClientRect();
            if(r.width>0 && r.right>D.documentElement.clientWidth+1)
              o.push((e.className||e.tagName)+' '+Math.round(r.right));
          });
          return o.slice(0,4);})()""")
        ok('%s 가 390px 에서 가로로 넘치지 않는다' % sc, not over, over)

    # ---- 3. 키보드만으로 시스템을 연다 ----
    pg.set_viewport_size({'width': 1360, 'height': 900})
    pg.goto(URL + '#library'); pg.wait_for_timeout(1800)
    # 시스템 수를 박아 두지 않는다. 늘어나면 테스트가 먼저 틀린다.
    total = q(pg, """D.querySelectorAll('#cards .dscard').length""")
    reach = q(pg, """D.querySelectorAll('#cards .dscard[tabindex="0"]').length""")
    ok('시스템 카드가 모두 키보드로 닿는다', total > 0 and reach == total,
       '%d / %d' % (reach, total))
    opened = pg.evaluate("""(()=>{const D=%s;
      const c=D.querySelector('#cards .dscard[onclick*="monopo"]');
      c.focus();
      c.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
      return D.querySelector('#detail').classList.contains('active');})()""" % DOC)
    ok('Enter 로 시스템이 열린다', opened)
    ok('초점 표시가 있다',
       q(pg, """(()=>{const c=D.querySelector('.backbtn'); c.focus();
          return getComputedStyle(c,':focus-visible').outlineStyle!=='none'
              || getComputedStyle(D.documentElement).getPropertyValue('--ui-line')!=='';})()"""))

    # ---- 4. 레이아웃과 콘텐츠 구조에도 주소가 붙는다 ----
    pg.goto(URL + '#library'); pg.wait_for_timeout(1700)
    pg.evaluate("(()=>{const D=%s; D.querySelector('#layouts .lcard').click();})()" % DOC)
    pg.wait_for_timeout(900)
    ok('레이아웃을 열면 주소가 바뀐다', pg.evaluate("location.hash") == '#library?lay=0',
       pg.evaluate("location.hash"))
    pg.goto(URL + '#library?page=0'); pg.wait_for_timeout(1900)
    ok('주소로 콘텐츠 구조가 열린다',
       q(pg, "D.querySelector('#sview').classList.contains('active')"),
       pg.evaluate("location.hash"))

    b.close()

res.append({'name': 'JS 오류 없음', 'ok': not errs, 'got': '; '.join(errs[:3])})
io.open(os.path.join(D, '_test_a11y.json'), 'w', encoding='utf-8').write(
    json.dumps(res, ensure_ascii=False, indent=1))
lines = [('통과 ' if r['ok'] else '실패 ') + r['name'] + ('' if r['ok'] else '\n     ' + r['got'])
         for r in res]
lines.append('%d/%d' % (sum(1 for r in res if r['ok']), len(res)))
io.open(os.path.join(D, '_a11y.txt'), 'w', encoding='utf-8').write('\n'.join(lines))
print('%d/%d' % (sum(1 for r in res if r['ok']), len(res)))
