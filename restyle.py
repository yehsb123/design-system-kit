# -*- coding: utf-8 -*-
"""킷 화면 자체를 monopo saigon 토큰으로 칠한다.

색·타이포·간격·모서리 값은 refero 에서 뽑은 monopo 토큰 원본을 그대로 쓴다.
다만 행간은 두 군데만 다르게 잡았다. 스펙의 본문 행간 1.15~1.21 은 라틴 기준이라
한글에서는 줄이 붙어 읽기 어렵다. 제목은 스펙대로 두고 본문만 1.6 으로 연다.

미리보기 영역은 각 시스템 고유 토큰을 보여줘야 하므로 건드리지 않는다.
그래서 요소 선택자(button, input, .btn, .tag, .card…)를 쓰지 않고 셸 클래스만 지정한다.
"""
import io, os

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')

CORE = u"""
/* ================= monopo saigon skin =================
   토큰 원본: refero 추출본 (monopo.vn)
   무채색만 · 버튼/태그 75px · 카드/이미지/입력 0px
   그림자 없음 · 1px 헤어라인 · 45px 위로는 굵게 쓰지 않음
   유채색은 페이지당 히어로 한 곳에만
   ====================================================== */
:root{
  --obsidian:#000000;--paper:#ffffff;--inkstone:#181818;
  --felt-gray:#6d6d6d;--slate-pill:#636363;--ash-mist:#9a9a9a;--pewter:#808080;
  --iridescent:linear-gradient(90deg,rgb(160,224,171),rgb(255,172,46) 50%,rgb(165,45,37));

  --sp-8:8px;--sp-12:12px;--sp-28:28px;--sp-40:40px;--sp-48:48px;
  --sp-64:64px;--sp-68:68px;--sp-152:152px;
  --page-max:1078px;--section-gap:46px;--card-pad:34px;--el-gap:14px;

  --r-pill:75px;--r-flat:0px;
  --ease:cubic-bezier(.19,1,.22,1);

  /* 타이포 스케일. 제목 행간은 스펙 값, 본문은 한글에 맞춰 연다. */
  --t-eyebrow:11px; --lh-eyebrow:1.36;
  --t-caption:12px; --lh-caption:1.5;
  --t-small:14px;   --lh-small:1.6;
  --t-body:16px;    --lh-body:1.6;
  --t-lead:18px;    --lh-lead:1.6;
  --t-card:20px;    --lh-card:1.35;
  --t-sub:29px;     --lh-sub:1.3;
  --t-sec:39px;     --lh-sec:1.19;
  --t-head:78px;    --lh-head:1.1;
}
:root,:root[data-theme="light"],:root[data-ui="light"]{
  --ui-canvas:var(--paper);--ui-panel:var(--paper);--ui-panel-2:#F4F4F4;
  --ui-fg:var(--obsidian);--ui-fg-strong:var(--obsidian);
  --ui-fg-lower:var(--felt-gray);--ui-fg-dim:var(--ash-mist);
  --ui-border:#E3E3E3;--ui-border-low:#F0F0F0;--ui-line:var(--obsidian);--ui-accent:var(--obsidian);
  --ui-shadow-sm:none;--ui-shadow-md:none;--ui-shadow-lg:none;--ui-sh:none;--ui-sh-md:none;
}
:root[data-theme="dark"],:root[data-ui="dark"]{
  --ui-canvas:var(--obsidian);--ui-panel:var(--obsidian);--ui-panel-2:var(--inkstone);
  --ui-fg:var(--paper);--ui-fg-strong:var(--paper);
  --ui-fg-lower:var(--ash-mist);--ui-fg-dim:var(--felt-gray);
  --ui-border:rgba(255,255,255,.22);--ui-border-low:rgba(255,255,255,.12);
  --ui-line:rgba(255,255,255,.75);--ui-accent:var(--paper);
  --ui-shadow-sm:none;--ui-shadow-md:none;--ui-shadow-lg:none;--ui-sh:none;--ui-sh-md:none;
}

/* ---- 바탕 ---- */
body{font-family:"Inter","Pretendard Variable",Pretendard,-apple-system,system-ui,sans-serif !important;
  font-size:var(--t-body) !important;line-height:var(--lh-body) !important;
  letter-spacing:-.005em;word-break:keep-all;}
.mono,.specview,.specta,code,pre{font-family:"Roboto Mono",ui-monospace,Consolas,monospace !important;}
a{text-decoration:none !important;}

/* 이모지는 이 시스템에 없는 유채색이다. 회색으로 낮춰 글리프처럼 쓴다. */
.appnav a,.tbtn,.cgo,.gbtn,.gobtn,.filterchip,.tabs button,.dtabs button,.iconbtn,
.copy,.ic,.em,.fd,.search,.searchbar,.morebtn,.cbtn,.exbtns button,.file,.st .t{
  -webkit-font-feature-settings:normal;}
.appnav a::first-letter,.tbtn::first-letter{}
.ic,.em,.appnav a,.tbtn,.cgo,.filterchip,.tabs button,.dtabs button,.copy,.search>:first-child,
.exbtns button,.gbtn,.gobtn,.morebtn{filter:grayscale(1);}

/* ---- 제목 위계 ---- */
h1,.hero h1{font-weight:300 !important;font-size:clamp(34px,5.4vw,var(--t-head)) !important;
  line-height:var(--lh-head) !important;letter-spacing:-.035em !important;
  text-wrap:balance;margin:0 0 var(--sp-28) !important;color:var(--ui-fg-strong) !important;}
h2,.sectitle,.dt2,.gtitle{font-weight:400 !important;font-size:var(--t-sub) !important;
  line-height:var(--lh-sub) !important;letter-spacing:-.025em !important;text-wrap:balance;}
h3,.dt3,.dscard h3,.c .n,.st .t,.ct{font-weight:400 !important;font-size:var(--t-card) !important;
  line-height:var(--lh-card) !important;letter-spacing:-.02em !important;}
.lead,.hero p,.csub,.secsub,.dsc{font-size:var(--t-small) !important;line-height:var(--lh-small) !important;
  color:var(--ui-fg-lower) !important;max-width:74ch !important;}
.en{font-size:var(--t-eyebrow) !important;line-height:var(--lh-eyebrow) !important;font-weight:400 !important;
  letter-spacing:.14em !important;text-transform:uppercase !important;color:var(--ui-fg-dim) !important;}
/* 본문 강조는 굵기 대신 색으로 준다. 이 시스템은 본문 굵기를 400 위로 올리지 않는다. */
.lead b,.lead strong,.hero p b,.csub b,.secsub b,.dsc b,.dsc strong,.c .d b,.st .d b{
  font-weight:400 !important;color:var(--ui-fg-strong) !important;}
/* 45px 위로는 굵게 쓰지 않는다 */
h1 b,h1 strong,h2 b,h2 strong{font-weight:400 !important;}

/* ---- 상단 바 ---- */
.top,.topbar{border-bottom:1px solid var(--ui-border) !important;background:var(--ui-canvas) !important;
  backdrop-filter:none !important;padding:var(--sp-12) var(--sp-28) !important;}
.mk{border-radius:0 !important;background:var(--ui-fg-strong) !important;width:20px !important;height:20px !important;}
.logo{font-weight:400 !important;font-size:var(--t-body) !important;letter-spacing:-.02em !important;}
.appnav{background:transparent !important;border:0 !important;border-radius:0 !important;
  padding:0 !important;gap:var(--sp-8) !important;}
.appnav a{border:1px solid transparent !important;border-radius:var(--r-pill) !important;
  font-weight:400 !important;font-size:var(--t-small) !important;padding:7px 16px !important;
  color:var(--ui-fg-lower) !important;transition:color .4s ease,border-color .4s ease;}
.appnav a:hover{background:transparent !important;border-color:var(--ui-border) !important;
  color:var(--ui-fg-strong) !important;}
.appnav a.on{background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;
  border-color:transparent !important;}

/* ---- 조작부. 알약은 행동에만 쓴다. ---- */
.tbtn,.filterchip,.backbtn,.tabs button,.dtabs button,.seg button,.exbtns button,.morebtn,.cbtn{
  border-radius:var(--r-pill) !important;box-shadow:none !important;
  font-weight:400 !important;font-size:var(--t-small) !important;padding:9px 20px !important;
  background:transparent !important;border:1px solid var(--ui-border) !important;
  color:var(--ui-fg-lower) !important;
  transition:color .4s ease,border-color .4s ease,background .4s ease;}
.tbtn:hover,.filterchip:hover,.backbtn:hover,.tabs button:hover,.dtabs button:hover{
  border-color:var(--ui-line) !important;color:var(--ui-fg-strong) !important;}
.filterchip.on,.tabs button.on,.dtabs button.on,.seg button.on,.appnav a.on{
  background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;border-color:transparent !important;}
.cgo,.gbtn,.gobtn{border-radius:var(--r-pill) !important;box-shadow:none !important;
  background:var(--ui-fg-strong) !important;color:var(--ui-canvas) !important;
  border:1px solid var(--ui-fg-strong) !important;font-weight:400 !important;
  font-size:var(--t-body) !important;padding:11px 33px !important;}
.iconbtn{border-radius:var(--r-pill) !important;box-shadow:none !important;
  width:36px !important;height:36px !important;border:1px solid var(--ui-border) !important;
  background:transparent !important;}
/* 어두운 코드 상자 위의 복사 버튼. 유채색을 쓰지 않는다. */
.copy{border-radius:var(--r-pill) !important;background:var(--paper) !important;color:var(--obsidian) !important;
  border:1px solid var(--paper) !important;font-weight:400 !important;font-size:var(--t-caption) !important;
  padding:7px 16px !important;box-shadow:none !important;}

/* ---- 태그는 고스트 알약 ---- */
.pill,.count,.stats span{border-radius:var(--r-pill) !important;background:transparent !important;
  border:1px solid var(--ui-border) !important;color:var(--ui-fg-lower) !important;
  font-weight:400 !important;font-size:var(--t-caption) !important;padding:5px 14px !important;
  box-shadow:none !important;}

/* ---- 면은 직각, 그림자 없음 ---- */
.card,.panel,.out,.stage,.frame,.search,.searchbar,.composer,.cout,.export,.note,.infobox,
.dscard,.addcard,.lcard,.rec,.foldbody,.specview,.specta,.rulebox,.myrules,.qa,.case,.file,
.c,.st,.preview,.gcard,.layprev,.brief,.autoinfo,.cwrap,.selectbox,.sel,.step,.dsec,.warn,.tip{
  border-radius:0 !important;box-shadow:none !important;}
.search,.searchbar,.cwrap,.selectbox,.sel{border:1px solid var(--ui-border) !important;}
.dscard,.lcard,.rec,.c,.file,.qa,.case{border:1px solid var(--ui-border) !important;
  transition:border-color .8s var(--ease);}
.dscard:hover,.lcard:hover,.rec:hover,.c:hover,.file:hover{
  transform:none !important;border-color:var(--ui-line) !important;}
.export,.cout{background:var(--obsidian) !important;color:var(--paper) !important;}

/* ---- 간격 ---- */
.wrap{max-width:var(--page-max) !important;}
.sectitle{margin-top:var(--section-gap) !important;}
.cards,.steps,.recs,.lwrap{gap:var(--el-gap) !important;}

@media(prefers-reduced-motion:reduce){*{transition-duration:.01ms !important;animation-duration:.01ms !important;}}
@media(max-width:768px){
  :root{--card-pad:20px;--section-gap:32px;}
  .top,.topbar{padding:10px 16px !important;}
}
"""

PER = {
    'index.html': u"""
.lead{font-size:var(--t-lead) !important;}
.c{padding:var(--card-pad) !important;}
.c .d{font-size:var(--t-small) !important;line-height:var(--lh-small) !important;}
.c .go{color:var(--ui-fg-lower) !important;font-weight:400 !important;font-size:var(--t-caption) !important;}
/* 이 페이지의 유일한 유채색. 히어로 자리의 이리데센트. 글자는 어두운 막 위에 얹는다. */
/* 위는 그라디언트를 살리고 글자가 앉는 아래쪽만 어둡게 눌러 대비를 만든다 */
.c.main{background:linear-gradient(180deg,rgba(0,0,0,0) 22%,rgba(0,0,0,.88)),var(--iridescent) !important;
  border-color:transparent !important;padding:var(--sp-152) var(--card-pad) var(--sp-40) !important;
  filter:none !important;justify-content:flex-end !important;}
.c.main .n{color:#fff !important;font-size:var(--t-sub) !important;font-weight:300 !important;}
.c.main .d,.c.main .go{color:rgba(255,255,255,.9) !important;max-width:62ch !important;}
.c.main .d b{font-weight:400 !important;color:#fff !important;}
.c.main .ic{filter:grayscale(1) brightness(3) !important;}
.c.main:hover{border-color:transparent !important;}
h2{border-bottom:1px solid var(--ui-line) !important;font-size:var(--t-card) !important;
  padding-bottom:var(--sp-12) !important;margin-top:var(--section-gap) !important;}
.st{padding:var(--card-pad) !important;border:1px solid var(--ui-border) !important;}
.st .n{border-radius:var(--r-pill) !important;background:var(--ui-fg-strong) !important;
  color:var(--ui-canvas) !important;}
.st .d{font-size:var(--t-small) !important;line-height:var(--lh-small) !important;}
footer{font-size:var(--t-caption) !important;color:var(--ui-fg-dim) !important;}
""",

    'guide.html': u"""
.file,.qa,.case{padding:var(--card-pad) !important;}
.fd,.d,.q,.a{font-size:var(--t-small) !important;line-height:var(--lh-small) !important;}
""",

    'builder.html': u"""
.panel,.preview,.stage,.swatchpick,.ramp,.rl{border-radius:0 !important;}
.seg{border-radius:var(--r-pill) !important;padding:3px !important;background:transparent !important;
  border:1px solid var(--ui-border) !important;}
.hint,.csub,.psub{font-size:var(--t-caption) !important;color:var(--ui-fg-lower) !important;}
""",

    'generator.html': u"""
.panel,.stage,.frame,.out,.step,.layprev,.infobox,.autoinfo{border-radius:0 !important;}
.lbl{font-size:var(--t-caption) !important;color:var(--ui-fg-lower) !important;
  letter-spacing:.06em !important;text-transform:uppercase !important;}
.hint{font-size:var(--t-caption) !important;}
""",

    'library.html': u"""
.composer{padding:var(--card-pad) !important;border:1px solid var(--ui-border) !important;}
.dscard .body{padding:var(--card-pad) !important;}
.dscard .desc{font-size:var(--t-small) !important;line-height:var(--lh-small) !important;}
.backbar{border-bottom:1px solid var(--ui-border) !important;}
/* 구분은 1px 헤어라인만 쓴다. 굵은 줄을 두지 않는다. */
.dhead,.crumbs,.refbar,.dnav{border-bottom-width:1px !important;border-bottom-color:var(--ui-border) !important;}
.dscard .cover{border-bottom:1px solid var(--ui-border) !important;}
.dsec{border-top:1px solid var(--ui-border) !important;padding-top:var(--section-gap) !important;
  margin-top:var(--section-gap) !important;}
.dtabs{gap:var(--sp-8) !important;}
.grouphint{font-size:var(--t-caption) !important;color:var(--ui-fg-lower) !important;}
.specbar .filterchip{padding:8px 18px !important;}
.specview{background:var(--ui-panel-2) !important;color:var(--ui-fg-lower) !important;
  border:1px solid var(--ui-border) !important;font-size:var(--t-caption) !important;}
/* 미리보기 안쪽은 각 시스템 토큰이 지배한다. 셸 규칙을 물린다. */
#detail .demo,#detail .demo *,#sview .demo,#sview .demo *{
  border-radius:revert;filter:none;font-family:revert;font-size:revert;line-height:revert;}
""",
}

MARK = u'<!-- monopo skin -->'


def main():
    for fn, extra in PER.items():
        p = os.path.join(SRC, fn)
        s = io.open(p, encoding='utf-8').read()
        if MARK in s:
            i = s.index(MARK)
            j = s.index(u'</style>', i) + len(u'</style>\n')
            s = s[:i] + s[j:]
        skin = MARK + u'\n<style>\n' + CORE + extra + u'</style>\n'
        HEAD = u'\n</head>\n'
        assert s.count(HEAD) == 1, fn + ': head 를 찾지 못했습니다'
        s = s.replace(HEAD, u'\n' + skin + u'</head>\n', 1)

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
