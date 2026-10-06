# -*- coding: utf-8 -*-
"""src/ 의 화면 5개를 index.html 한 파일로 합친다.

각 화면은 자기 CSS 와 스크립트를 그대로 들고 있다. 합치면서 이름이 부딪히지 않도록
샌드박스 없는 iframe 에 srcdoc 으로 띄운다. 문서가 따로 서니 :root 변수도, 전역 변수도,
id 도 섞이지 않는다. 대신 화면 사이 이동과 테마는 shim 이 부모를 거쳐 이어준다.
"""
import io, os, re, json

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')
OUT = os.path.join(D, 'index.html')

TOOLS = [
    ('index',     'index.html'),
    ('library',   'library.html'),
    ('builder',   'builder.html'),
    ('generator', 'generator.html'),
    ('guide',     'guide.html'),
]

# 화면 사이 이동은 부모가 맡는다. 앵커는 shim 이 가로채지만 location.href 대입은 못 가로채서
# 여기서 직접 바꾼다. iframe 안에서는 location.search 가 비어 있어 쿼리도 부모에서 받는다.
REWRITE = [
    ("location.href='generator.html?sys=mine';",
     "parent.dsk.go('generator','sys=mine');"),
    ("/[?&]sys=mine/.test(location.search)",
     "/[?&]sys=mine/.test(dskQuery())"),
]

SHIM = u"""<script>
/* 한 파일로 합치면서 붙는 다리. 화면 이동·테마·쿼리를 부모와 주고받는다. */
(function(){
  var r=document.documentElement;
  window.dskQuery=function(){ try{ return '?'+parent.dsk.q(); }catch(e){ return ''; } };
  // 모음집은 data-theme 으로, 나머지 화면은 data-ui 로 테마를 잡는다.
  // 화면마다 이름이 달라 그대로 두면 모음집만 따로 논다. 쓰는 이름에 맞춰 옮긴다.
  var ATTR = r.hasAttribute('data-theme') ? 'data-theme' : 'data-ui';
  try{ var t=localStorage.getItem('dsk_ui'); if(t) r.setAttribute(ATTR,t); }catch(e){}
  try{
    new MutationObserver(function(){
      try{ localStorage.setItem('dsk_ui', r.getAttribute(ATTR)||'light'); }catch(e){}
    }).observe(r,{attributes:true,attributeFilter:['data-ui','data-theme']});
  }catch(e){}
  var MAP={'index.html':'index','library.html':'library','builder.html':'builder',
           'generator.html':'generator','guide.html':'guide'};
  document.addEventListener('click',function(e){
    var el=e.target; if(!el||!el.closest) el=el.parentElement;
    var a=el&&el.closest?el.closest('a[href]'):null; if(!a) return;
    var h=a.getAttribute('href')||''; if(!h||h.charAt(0)==='#') return;
    var m=h.match(/([A-Za-z]+\\.html)(\\?[^#]*)?/); if(!m) return;
    var name=MAP[m[1].toLowerCase()]; if(!name) return;
    e.preventDefault(); e.stopPropagation();
    try{ parent.dsk.go(name,(m[2]||'').replace(/^\\?/,'')); }catch(err){}
  },true);
})();
</script>
"""


# </script> 가 담는 블록을 조기에 닫지 않도록 표식으로 바꿔 넣고 읽을 때 되돌린다.
# generator 는 결과 페이지를 만들면서 소스 안에 이미 <\/script> 를 들고 있다.
# 그래서 표식을 <\/script> 로 쓰면 복원할 때 원본의 이스케이프까지 풀려 스크립트가 깨진다.
# 소스 어디에도 없는 사용자 정의 영역 문자를 쓴다.
MARK = u''


def embed(html):
    """srcdoc 로 넣을 문서를 text/html 블록에 담을 수 있게 만든다."""
    assert MARK not in html, '표식 문자가 소스에 이미 있습니다'
    return html.replace('</script', MARK)


KIT_LINK = u'<link rel="stylesheet" href="kit.css">'

def _grab(s, name):
    """const NAME=[ ... ] 블록의 본문을 통째로 가져온다."""
    i = s.index('const %s=[' % name)
    j = i + len('const %s=' % name)
    depth, k = 0, j
    while k < len(s):
        if s[k] == '[':
            depth += 1
        elif s[k] == ']':
            depth -= 1
            if depth == 0:
                return s[j:k + 1]
        k += 1
    raise AssertionError(name)


def showcase():
    """시작 화면이 쓸 재료를 모음집에서 꺼낸다.

    데이터는 library.html 한 곳에만 둔다. 두 곳에 적으면 한쪽이 낡는다.
    """
    lib = io.open(os.path.join(SRC, 'library.html'), encoding='utf-8').read()
    rows, seen = [], set()
    for m in re.finditer(r'id:"([a-z0-9]+)",name:"([^"]+)",cat:"([^"]+)"', lib):
        sid = m.group(1)
        if sid in seen:
            continue
        seg = lib[m.end():m.end() + 900]
        cv = re.search(r'cover:\[([^\]]+)\]', seg)
        if not cv:
            continue
        seen.add(sid)
        rows.append({'id': sid, 'n': m.group(2), 'c': m.group(3),
                     'cv': re.findall(r'"(#[0-9A-Fa-f]{6})"', cv.group(1))})
    assert len(rows) >= 17, '시스템을 다 못 찾았습니다: %d' % len(rows)
    return ('<script>\nwindow.SHOWCASE={sys:'
            + json.dumps(rows, ensure_ascii=False)
            + ',lay:' + _grab(lib, 'LAYOUTS')
            + ',ico:' + _grab(lib, 'ICONS')
            + '};\n</' + 'script>')




def main():
    blocks = []
    done = set()
    # srcdoc 안에서는 상대 경로가 풀리지 않는다. 셸 스타일시트를 통째로 심는다.
    kit = io.open(os.path.join(SRC, 'kit.css'), encoding='utf-8').read()
    kit_tag = u'<style>\n/* src/kit.css */\n' + kit + u'</style>'

    # 먼저 v1/ 을 만든다. 화면에 심을 데이터를 거기서 읽기 때문이다.
    import build_api
    build_api.main()
    import gensys

    show = showcase()
    gen = gensys.tag()

    for name, fn in TOOLS:
        p = os.path.join(SRC, fn)
        s = io.open(p, encoding='utf-8').read()
        if '<!-- SHOWCASE_DATA -->' in s:
            s = s.replace('<!-- SHOWCASE_DATA -->', show, 1)
        if '<!-- GENSYS_DATA -->' in s:
            s = s.replace('<!-- GENSYS_DATA -->', gen, 1)
        assert s.count(KIT_LINK) == 1, fn + ': kit.css 연결을 찾지 못했습니다'
        s = s.replace(KIT_LINK, kit_tag)
        for a, b in REWRITE:
            if a in s:
                s = s.replace(a, b)
                done.add(a)
        # generator 는 결과 페이지를 만드는 템플릿 안에도 <body> 를 들고 있어서
        # 줄바꿈까지 맞춰 진짜 여는 태그만 집는다.
        assert s.count('\n<body>\n') == 1, fn + ': body 태그를 찾지 못했습니다'
        s = s.replace('\n<body>\n', '\n<body>\n' + SHIM, 1)
        blocks.append(u'<script type="text/html" id="f-%s">%s</script>' % (name, embed(s)))
        print(fn, len(s))

    shell = SHELL.replace('__BLOCKS__', '\n'.join(blocks))
    io.open(OUT, 'w', encoding='utf-8').write(shell)
    print('->', os.path.basename(OUT), len(shell))


SHELL = u"""<!doctype html>
<!--
  Design System Kit
  Copyright (C) 2026 yehsb123
  Licensed under the GNU Affero General Public License v3.0.
  See LICENSE for the full text.
-->
<html lang="ko" data-ui="light">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Design System Kit</title>
<meta name="description" content="디자인 시스템 17종, 레이아웃 22종, 콘텐츠 구조 9종을 보관하고 AI 프롬프트·CLAUDE.md·CSS 토큰·실제 페이지까지 만들어내는 한 파일짜리 도구.">
<style>
  html,body{margin:0;padding:0;height:100%;overflow:hidden;background:#F6F5F2;}
  html[data-ui="dark"],html[data-ui="dark"] body{background:#141317;}
  #stage{position:fixed;inset:0;width:100%;height:100%;border:0;display:block;}
  #boot{position:fixed;inset:0;display:grid;place-items:center;font:14px/1.6 system-ui,sans-serif;color:#5E5A63;}
</style>
</head>
<body>
<div id="boot">여는 중…</div>
<iframe id="stage" title="Design System Kit"></iframe>
__BLOCKS__
<script>
(function(){
  var NAMES=['index','library','builder','generator','guide'];
  var stage=document.getElementById('stage'), boot=document.getElementById('boot');
  var cur='', curQ='';

  function read(name){
    var el=document.getElementById('f-'+name);
    return el ? el.textContent.split('\\ue000').join('<\\/script') : '';
  }
  function parseHash(){
    var h=(location.hash||'').replace(/^#/,'');
    var i=h.indexOf('?');
    var n=i<0?h:h.slice(0,i), q=i<0?'':h.slice(i+1);
    if(NAMES.indexOf(n)<0) n='index';
    return [n,q];
  }
  function show(name,q,push){
    if(NAMES.indexOf(name)<0) name='index';
    cur=name; curQ=q||'';
    var html=read(name);
    if(!html){ boot.textContent='화면을 찾지 못했습니다: '+name; return; }
    stage.srcdoc=html;
    if(boot) boot.style.display='none';
    var hash='#'+name+(curQ?'?'+curQ:'');
    if(push!==false && location.hash!==hash) location.hash=hash;
    document.title=({index:'Design System Kit',library:'모음집',builder:'조립기',
                     generator:'생성기',guide:'사용설명서'}[name])
                   +(name==='index'?'':' · Design System Kit');
  }

  var skipNext=false;

  window.dsk={
    go:function(name,q){ show(name,q,true); },
    q:function(){ return curQ; },
    current:function(){ return cur; },
    // 화면 안에서 보던 자리가 바뀌었을 때 주소만 갱신한다.
    // 화면을 다시 싣지 않아 스크롤과 입력이 남는다.
    setQuery:function(q){
      curQ=q||'';
      var h='#'+cur+(curQ?'?'+curQ:'');
      if(location.hash!==h){ skipNext=true; location.hash=h; }
    }
  };

  window.addEventListener('hashchange',function(){
    if(skipNext){ skipNext=false; return; }
    var p=parseHash();
    if(p[0]!==cur||p[1]!==curQ) show(p[0],p[1],false);
  });

  try{ var t=localStorage.getItem('dsk_ui'); if(t) document.documentElement.setAttribute('data-ui',t); }catch(e){}
  var p=parseHash(); show(p[0],p[1],false);
})();
</script>
</body>
</html>
"""

if __name__ == '__main__':
    main()
