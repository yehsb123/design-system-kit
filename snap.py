# -*- coding: utf-8 -*-
"""화면의 계산값을 떠 둔다. CSS 를 지운 뒤 같은 값인지 대조한다."""
import os, json, io, sys
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'index.html').replace(os.sep, '/')
DOC = "document.getElementById('stage').contentDocument"
OUT = sys.argv[1] if len(sys.argv) > 1 else '_snap_before.json'

PROPS = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing',
         'color', 'backgroundColor', 'borderRadius', 'borderTopWidth', 'borderTopColor',
         'padding', 'margin', 'boxShadow', 'display', 'gap', 'maxWidth', 'textAlign',
         'width', 'height', 'flexDirection', 'gridTemplateColumns']

SCREENS = {
 'index': ['body', '.top', '.logo', '.mk', '.tbtn', '.hero', '.hero .in h1', '.hero .in p',
           '.counts b', '.head', '.head h2', '.sub', '.sysgrid', '.syscard', '.syscard .strip',
           '.syscard .nm', '.laygrid', '.laycard', '.laycard .wire', '.icorow', '.icorow i',
           '.steps', '.step', '.step .n', '.step .t', '.tools', '.tool', '.tool .nm', 'footer'],
 'library': ['body', '.topbar', '.topbar .logo', '.mk', '.appnav', '.appnav a', '.appnav a.on',
             '.count', '.iconbtn', '.wrap', '.hero h1', '.hero p', '.composer', '.composer h3',
             '.csub', '.cwrap', '#cTabs button', '#cTabs button.on', '.cout', '.cgo',
             '.filterchip', '.search', '.sectitle', '.secsub', '.dscard', '.dscard .cover',
             '.dscard .body', '.dscard h3', '.dscard .desc', '.lcard', '.rec', '.pill'],
 'builder': ['body', '.top', '.top .logo', '.tbtn', '.panel', '.panel h2', '.preview',
             '.seg', '.seg button', '.out', '.hint', '.wrap', '.card'],
 'generator': ['body', '.top', '.top .logo', '.tbtn', '.panel', '.step', '.lbl', '.sel',
               '.stage', '.frame', '.out', '.tabs button', '.hint', '.wrap'],
 'guide': ['body', '.top', '.top .logo', '.tbtn', '.wrap', 'h1', 'h2', 'h3', '.file',
           '.fn', '.fd', '.case', '.ct', '.cw', '.qa', '.q', '.a', '.warn', '.tip'],
}

snap = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1360, 'height': 900})
    for name, sels in SCREENS.items():
        pg.goto(URL + '#' + name); pg.wait_for_timeout(1800)
        snap[name] = pg.evaluate("""(sels)=>{const D=%s; const o={};
          for(const s of sels){
            const e=D.querySelector(s);
            if(!e){ o[s]='(없음)'; continue; }
            const c=getComputedStyle(e);
            o[s]=%s.map(k=>c[k]).join(' | ');
          }
          return o;}""" % (DOC, json.dumps(PROPS)), sels)
    b.close()
io.open(os.path.join(D, OUT), 'w', encoding='utf-8').write(
    json.dumps(snap, ensure_ascii=False, indent=1))
print('saved', OUT, sum(len(v) for v in snap.values()), '자리')
