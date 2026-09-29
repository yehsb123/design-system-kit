# -*- coding: utf-8 -*-
"""킷 화면 자체를 monopo saigon 규칙으로 칠한다.

규칙은 monopo 시스템 상세의 원문 스펙에 그대로 들어 있다. 요약하면 이렇다.
무채색만 쓰고, 버튼·태그는 75px 알약, 카드·이미지·입력은 0px 직각,
그림자 없이 1px 헤어라인, 큰 글자는 300~400 굵기, 모션은 cubic-bezier(0.19,1,0.22,1).
유채색은 히어로 한 곳에만 쓴다.

미리보기 영역은 각 시스템 고유 토큰을 보여줘야 하므로 건드리지 않는다.
그래서 요소 선택자(button, input, .btn, .tag, .card…)를 쓰지 않고
셸 클래스만 하나씩 지정한다.
"""
import io, os

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')

IRI = 'linear-gradient(90deg,rgb(160,224,171),rgb(255,172,46) 50%,rgb(165,45,37))'

# 5개 화면이 공유하는 토큰·타이포·모션
CORE = u"""
/* ===================== monopo saigon skin =====================
   무채색 · 알약 75px 대 직각 0px · 그림자 없음 · 헤어라인 1px
   유채색은 히어로 한 곳에만. 미리보기 영역은 각 시스템 토큰을 그대로 쓴다.
   ============================================================ */
:root,:root[data-theme="light"],:root[data-ui="light"]{
  --ui-canvas:#FFFFFF;--ui-panel:#FFFFFF;--ui-panel-2:#F4F4F4;
  --ui-fg:#000000;--ui-fg-strong:#000000;--ui-fg-lower:#6D6D6D;--ui-fg-dim:#9A9A9A;
  --ui-border:#E3E3E3;--ui-border-low:#F0F0F0;--ui-line:#000000;--ui-accent:#000000;
  --ui-shadow-sm:none;--ui-shadow-md:none;--ui-shadow-lg:none;--ui-sh:none;--ui-sh-md:none;
  --m-ease:cubic-bezier(.19,1,.22,1);--m-pill:75px;--m-max:1078px;--m-gap:46px;--m-pad:34px;
}
:root[data-theme="dark"],:root[data-ui="dark"]{
  --ui-canvas:#000000;--ui-panel:#000000;--ui-panel-2:#181818;
  --ui-fg:#FFFFFF;--ui-fg-strong:#FFFFFF;--ui-fg-lower:#9A9A9A;--ui-fg-dim:#6D6D6D;
  --ui-border:rgba(255,255,255,.22);--ui-border-low:rgba(255,255,255,.12);
  --ui-line:rgba(255,255,255,.75);--ui-accent:#FFFFFF;
  --ui-shadow-sm:none;--ui-shadow-md:none;--ui-shadow-lg:none;--ui-sh:none;--ui-sh-md:none;
}
body{font-family:"Inter","Pretendard Variable",Pretendard,-apple-system,system-ui,sans-serif;
  letter-spacing:-.005em;}
.mono,.specview,.specta{font-family:"Roboto Mono",ui-monospace,Consolas,monospace;}

/* 로고는 검은 사각형 하나. 그라디언트 마크를 쓰지 않는다. */
.mk{border-radius:0 !important;background:var(--ui-fg-strong) !important;}
.logo{font-family:"Inter",Pretendard,sans-serif !important;font-weight:400 !important;
  letter-spacing:-.02em !important;}

/* 상단 바와 내비. 알약 안에서만 움직인다. */
.top,.topbar{border-bottom:1px solid var(--ui-border) !important;backdrop-filter:none !important;
  background:var(--ui-canvas) !important;}
.appnav{background:transparent !important;border:0 !important;border-radius:0 !important;padding:0 !important;gap:6px !important;}
.appnav a{border:1px solid transparent !important;border-radius:var(--m-pill) !important;
  font-weight:400 !important;padding:7px 16px !important;transition:color .4s ease,border-color .4s ease;}
.appnav a:hover{background:transparent !important;border-color:var(--ui-border) !important;color:var(--ui-fg-strong) !important;}
.appnav a.on{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;border-color:transparent !important;}

/* 알약으로 두는 조작부 */
.tbtn,.filterchip,.iconbtn,.count,.backbtn,.cgo,.gbtn,.gobtn,.pill,.morebtn,.cbtn,.copy,
.tabs button,.dtabs button,.seg button,.exbtns button,.stats span{
  border-radius:var(--m-pill) !important;box-shadow:none !important;font-weight:400 !important;}
.tbtn,.filterchip,.backbtn,.tabs button,.dtabs button,.seg button,.exbtns button{
  padding:9px 20px !important;transition:color .4s ease,border-color .4s ease,background .4s ease;}
.filterchip:hover,.tbtn:hover,.backbtn:hover{border-color:var(--ui-line) !important;color:var(--ui-fg-strong) !important;}
.cgo,.gbtn,.gobtn{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;
  border:1px solid var(--ui-fg-strong) !important;padding:11px 33px !important;}

/* 직각으로 두는 면 */
.card,.panel,.out,.stage,.frame,.search,.searchbar,.composer,.cout,.export,.note,.infobox,
.dscard,.addcard,.lcard,.rec,.recs>*,.foldbody,.specview,.specta,.rulebox,.myrules,
.qa,.case,.file,.c,.st,.preview,.gcard,.layprev,.brief,.autoinfo{
  border-radius:0 !important;box-shadow:none !important;}
.dscard,.lcard,.rec,.c,.file{transition:border-color .8s var(--m-ease),transform .8s var(--m-ease);}
.dscard:hover,.lcard:hover,.rec:hover,.c:hover,.file:hover{
  transform:none !important;border-color:var(--ui-line) !important;}
.dscard .cover,.dscard .body{border-radius:0 !important;}

/* 제목은 크기로 위계를 세운다. 45px 위로는 굵게 쓰지 않는다. */
h1,.hero h1,.gtitle{font-family:"Inter",Pretendard,sans-serif !important;font-weight:300 !important;
  letter-spacing:-.035em !important;line-height:1.06 !important;}
h2,.sectitle,.dt2{font-weight:400 !important;letter-spacing:-.02em !important;}
.sectitle,.dt2{font-family:"Inter",Pretendard,sans-serif !important;}
.en{font-weight:400 !important;color:var(--ui-fg-dim) !important;letter-spacing:.12em !important;
  text-transform:uppercase !important;font-size:11px !important;}

/* 밑줄 없는 링크. 여백과 색으로만 구분한다. */
a{text-decoration:none !important;}

@media(prefers-reduced-motion:reduce){*{transition-duration:.01ms !important;animation-duration:.01ms !important;}}
"""

# 화면마다 다른 부분
PER = {
    'index.html': u"""
.wrap{max-width:var(--m-max) !important;}
h1{font-size:clamp(40px,8vw,94px) !important;line-height:.9 !important;}
.lead{font-size:18px !important;line-height:1.5 !important;color:var(--ui-fg-lower) !important;}
.stats span{border-radius:var(--m-pill) !important;font-weight:400 !important;background:transparent !important;}
.cards{gap:14px !important;}
.c{padding:var(--m-pad) !important;border:1px solid var(--ui-border) !important;}
.c .n{font-weight:400 !important;font-size:20px !important;letter-spacing:-.02em !important;}
.c .go{color:var(--ui-fg-lower) !important;font-weight:400 !important;}
/* 페이지에 유채색은 여기 하나. 히어로 자리의 이리데센트 그라디언트. */
.c.main{background:%(IRI)s !important;border-color:transparent !important;}
.c.main .n,.c.main .d,.c.main .go,.c.main .ic{color:#fff !important;}
.c.main:hover{border-color:transparent !important;}
h2{border-bottom:1px solid var(--ui-line) !important;font-size:20px !important;}
.st{padding:var(--m-pad) !important;border:1px solid var(--ui-border) !important;}
.st .n{border-radius:var(--m-pill) !important;background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;}
.steps{gap:14px !important;}
""" % {'IRI': IRI},

    'guide.html': u"""
.wrap{max-width:var(--m-max) !important;}
h1{font-size:clamp(34px,6vw,78px) !important;}
.file,.qa,.case{padding:var(--m-pad) !important;border:1px solid var(--ui-border) !important;}
.ct{font-weight:400 !important;font-size:19px !important;letter-spacing:-.02em !important;}
.warn,.tip{border-radius:0 !important;}
""",

    'builder.html': u"""
.wrap{max-width:var(--m-max) !important;}
.panel,.preview,.stage{border-radius:0 !important;}
.sec h2,.gtitle{font-weight:400 !important;}
.swatchpick,.ramp,.rl{border-radius:0 !important;}
.seg{border-radius:var(--m-pill) !important;padding:3px !important;}
.tabs button.on,.seg button.on{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;}
""",

    'generator.html': u"""
.wrap{max-width:var(--m-max) !important;}
.panel,.stage,.frame,.out{border-radius:0 !important;}
.step{border-radius:0 !important;}
.tabs button.on{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;}
.layprev,.infobox,.autoinfo{border-radius:0 !important;}
""",

    'library.html': u"""
.wrap{max-width:var(--m-max) !important;}
.hero h1{font-size:clamp(34px,6vw,78px) !important;}
.hero p{font-size:18px !important;line-height:1.5 !important;}
.composer{padding:var(--m-pad) !important;border:1px solid var(--ui-border) !important;}
.cards{gap:14px !important;}
.dscard{border:1px solid var(--ui-border) !important;}
.dscard .body{padding:var(--m-pad) !important;}
.dscard h3{font-weight:400 !important;font-size:20px !important;letter-spacing:-.02em !important;}
.sectitle{margin-top:var(--m-gap) !important;font-size:20px !important;}
.tabs button.on,.dtabs button.on{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;
  border-color:transparent !important;}
.backbar{border-bottom:1px solid var(--ui-border) !important;}
.dsec{border-radius:0 !important;}
.specbar .filterchip{padding:8px 18px !important;}
/* 미리보기 영역 안쪽은 각 시스템 토큰이 지배한다. 셸이 끼어들지 않게 되돌린다. */
#detail .demo *,#sview .demo *{border-radius:revert;}
""",
}

MARK = u'<!-- monopo skin -->'


def main():
    for fn, extra in PER.items():
        p = os.path.join(SRC, fn)
        s = io.open(p, encoding='utf-8').read()
        # 이미 입혀져 있으면 그 블록만 갈아끼운다
        if MARK in s:
            i = s.index(MARK)
            j = s.index(u'</style>', i)
            s = s[:i] + s[j:]
        skin = MARK + u'\n<style>\n' + CORE + extra + u'</style>\n'
        # generator 는 결과 페이지 템플릿 안에도 </head> 를 들고 있어 줄바꿈까지 맞춘다
        HEAD = u'\n</head>\n'
        assert s.count(HEAD) == 1, fn + ': head 를 찾지 못했습니다'
        s = s.replace(HEAD, u'\n' + skin + u'</head>\n', 1)

        # Inter 300 과 Raleway 를 아직 안 불러오는 화면에 추가한다
        if 'family=Inter:wght@300' not in s:
            if 'fonts.googleapis.com/css2?' in s:
                s = s.replace('family=Inter:wght@400;500;600;700',
                              'family=Inter:wght@300;400;500;600;700')
                if 'family=Inter:wght@300' not in s:
                    s = s.replace('<link href="https://fonts.googleapis.com/css2?',
                                  '<link href="https://fonts.googleapis.com/css2?'
                                  'family=Inter:wght@300;400;500;600&')
            else:
                s = s.replace(u'</head>\n',
                              u'<link href="https://fonts.googleapis.com/css2?'
                              u'family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">\n</head>\n', 1)
        io.open(p, 'w', encoding='utf-8').write(s)
        print(fn, 'skinned', len(s))


if __name__ == '__main__':
    main()
