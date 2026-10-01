# -*- coding: utf-8 -*-
"""README 에 쓰는 그림을 지금 화면으로 다시 찍는다.

디자인이 바뀌면 그림도 같이 바꾼다. 옛 그림이 남아 있으면 README 가 거짓말을 한다.
"""
import os, io
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'design-system.html').replace('\\', '/')
DOC = "document.getElementById('stage').contentDocument"
SH = os.path.join(D, 'docs/screenshots')

MAT = (u"용량: 50ml\n가격: 38,000원\n핵심성분: 세라마이드NP 5%, 판테놀\n"
       u"임상: 4주 후 수분 42% 증가\n만족도: 32명 중 29명\n타깃: 건성·민감성")

# 시스템마다 생김새가 다른 것을 보여 줄 네 가지
COMPARE = ['monopo', 'carbon', 'airbnb', 'm3']


def shot(pg, path, clip=None, full=False):
    pg.screenshot(path=os.path.join(SH, path), full_page=full, clip=clip)


with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1360, 'height': 900}, device_scale_factor=2)

    # 시작 화면
    pg.goto(URL); pg.wait_for_timeout(1800)
    shot(pg, 'index.png')

    # 모음집
    pg.goto(URL + '#library'); pg.wait_for_timeout(1900)
    shot(pg, 'library.png')

    # 시스템 상세
    pg.goto(URL + '#library?sys=monopo'); pg.wait_for_timeout(1900)
    shot(pg, 'system-detail.png')

    # 원문 스펙 칸
    pg.evaluate("""(()=>{const D=%s; const s=D.querySelector('#s-spec');
      D.defaultView.scrollTo(0, s.getBoundingClientRect().top + D.defaultView.scrollY - 16);})()""" % DOC)
    pg.wait_for_timeout(800)
    shot(pg, 'source-spec.png')

    # 조립기, 생성기, 설명서
    for name, slug in [('builder', 'builder.png'), ('guide', 'guide.png')]:
        pg.goto(URL + '#' + name); pg.wait_for_timeout(1800)
        shot(pg, slug)

    # 생성기는 자료를 채운 상태로
    pg.goto(URL + '#generator'); pg.wait_for_timeout(1900)
    pg.evaluate("""(mat)=>{const D=%s;
      D.querySelector('#bName').value='루미에르 세라마이드 에센스';
      D.querySelector('#bTag').value='무너진 장벽을 4주 만에';
      D.querySelector('#bMat').value=mat;
      ['#bName','#bTag','#bMat'].forEach(s=>D.querySelector(s)
        .dispatchEvent(new Event('input',{bubbles:true})));
      const sp=D.querySelector('#selPage'); sp.value='0';
      sp.dispatchEvent(new Event('change',{bubbles:true}));}""" % DOC, MAT)
    pg.wait_for_timeout(2200)
    shot(pg, 'generator.png')
    html = pg.evaluate("(()=>{const D=%s; return D.querySelector('#codeBody').textContent||'';})()" % DOC)

    # 생성된 페이지 자체
    pg2 = b.new_page(viewport={'width': 1280, 'height': 900}, device_scale_factor=2)
    pg2.set_content(html); pg2.wait_for_timeout(900)
    pg2.screenshot(path=os.path.join(SH, 'page-beauty.png'), full_page=True)
    pg3 = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    pg3.set_content(html); pg3.wait_for_timeout(700)
    pg3.screenshot(path=os.path.join(SH, 'page-beauty-mobile.png'), full_page=True)
    pg2.close(); pg3.close()

    # 시스템마다 다른 생김새
    for sid in COMPARE:
        pg.goto(URL + '#library?sys=' + sid); pg.wait_for_timeout(1700)
        el = pg.query_selector('#stage')
        box = pg.evaluate("""(()=>{const D=%s; const d=D.querySelector('#s-sig .demo');
          if(!d) return null;
          d.scrollIntoView({block:'center'});
          const f=document.getElementById('stage').getBoundingClientRect();
          const r=d.getBoundingClientRect();
          return {x:f.x+r.x-10, y:f.y+r.y-10, width:r.width+20, height:r.height+20};})()""" % DOC)
        pg.wait_for_timeout(600)
        box = pg.evaluate("""(()=>{const D=%s; const d=D.querySelector('#s-sig .demo');
          const f=document.getElementById('stage').getBoundingClientRect();
          const r=d.getBoundingClientRect();
          return {x:f.x+r.x-10, y:f.y+r.y-10, width:r.width+20, height:r.height+20};})()""" % DOC)
        if box and box['height'] > 20:
            shot(pg, 'comp-%s.png' % sid, clip=box)

    b.close()
print('shots done')
