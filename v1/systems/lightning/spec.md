# Salesforce Lightning — 시스템 스펙
> 세일즈포스 라이트닝 공식 토큰. 색마다 열두 단계를 두고 10 이 가장 어둡습니다. 영업 화면처럼 표와 입력이 빽빽한 자리에 맞춘 체계입니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** Web Components · Aura · React

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EEF4FF` | `#D8E6FE` | `#AACBFF` | `#71ADFD` | `#339BFE` | `#0176D3` | `#0B5CAB` | `#014486` | `#032D60` | `#03234D` | `#001639` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFFFF` | `#EBEBEB` | `#C9C9C9` | `#AEAEAE` | `#9B9B9B` | `#757575` | `#5C5C5C` | `#444444` | `#2E2E2E` | `#242424` | `#181818` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EBF7E6` | `#CDEFC4` | `#91DB8B` | `#44C35A` | `#3DAD56` | `#2E844A` | `#396547` | `#194E31` | `#193626` | `#0C2912` | `#071B12` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1EA` | `#FEDFD0` | `#FFBA90` | `#FC902E` | `#E67E02` | `#A96404` | `#825101` | `#5F3E02` | `#3E2B02` | `#302104` | `#201600` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF1EE` | `#FEDED8` | `#FEB8AB` | `#FE8A78` | `#FE6756` | `#EA001E` | `#BA0517` | `#8E030F` | `#640103` | `#4A0C04` | `#300C01` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF5FE` | `#CFE9FE` | `#90D0FE` | `#16B6FB` | `#0BA3E2` | `#107CAD` | `#05628A` | `#084968` | `#023248` | `#0A2636` | `#001A28` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#242424` |
| `--canvas` | 페이지 바닥 | `#FFFFFF` | `#181818` |
| `--fg` | 본문 글자 | `#242424` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#242424` | `#FFFFFF` |
| `--fg-lower` | 보조 설명 | `#5C5C5C` | `#9B9B9B` |
| `--fg-disabled` | 비활성 글자 | `#9B9B9B` | `#5C5C5C` |
| `--border` | 기본 경계선 | `#C9C9C9` | `#2E2E2E` |
| `--border-strong` | 강조 경계선 | `#AEAEAE` | `#5C5C5C` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0176D3` | `#339BFE` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EEF4FF` | `#03234D` |
| `--fg-primary` | 주된 색 글자 | `#0B5CAB` | `#71ADFD` |
| `--bg-success` | 완료 표시 | `#2E844A` | `#2E844A` |
| `--bg-warning` | 주의 표시 | `#A96404` | `#A96404` |
| `--bg-critical` | 위험 표시 | `#EA001E` | `#EA001E` |
| `--bg-info` | 안내 표시 | `#05628A` | `#0BA3E2` |

## 토큰 — 타이포

**글꼴:** `"Salesforce Sans","Inter",-apple-system,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 400 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 400 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 400 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 4px |
| 카드 | 4px |
| 입력 | 4px |
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 400 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2px, 끝처리 `round`, 꼬임 `round`.
선은 `currentColor` 를 씁니다. 색을 아이콘 안에 박지 않습니다.

## 컴포넌트

| 컴포넌트 | 규칙 |
|---|---|
| 버튼 | primary, secondary, outline, ghost, danger 다섯 가지. 크기는 sm, md, lg. 상태는 hover, focus-visible, active, disabled, loading |
| 태그 | 상태 5종. 바탕과 글자를 짝으로 씁니다 |
| 입력 | 기본, 포커스, 에러, 성공, 비활성. 도움말과 필수 표시를 두고 색으로만 알리지 않습니다 |
| 오버레이 | 모달은 `role="dialog"`, `aria-modal`, Esc 닫기. 드로어, 토스트(`aria-live`), 툴팁, 드롭다운 |
| 내비 | 탭은 `role="tablist"`. 스텝, 페이지네이션, 브레드크럼 |
| 표 | 헤더, 상세, 소계, 합계의 계층색을 지킵니다 |

## 대비

| 짝 | 비율 | 기준(AA 4.5) |
|---|---|---|
| 본문 대 바탕 | 15.52 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.63 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 4px, 카드 4px, 입력 4px 으로 고정합니다
- 색은 램프와 역할 토큰에서만 가져옵니다
- 라이트와 다크를 항상 같이 맞춥니다
- 여백과 글자 크기는 `clamp()` 로 화면 폭에 따라 줍니다
- 터치로 누르는 자리는 44×44px 이상으로 둡니다
- 초점 표시는 `focus-visible` 로 남깁니다

### 금지 사항

- 토큰에 없는 색을 직접 적지 않습니다
- 보라와 바이올렛을 강조색으로 쓰지 않습니다
- 왼쪽에 굵은 선이 붙은 인용 카드를 두지 않습니다
- 색만으로 상태를 알리지 않습니다. 글자나 모양을 같이 둡니다
- 모서리를 한 화면 안에서 여러 값으로 섮지 않습니다

## 화면 규격

- 컨테이너 `width: min(1200px, 92vw)`
- 끊는 폭 1280, 1024, 768, 480px
- 768px 미만은 1열로 내립니다
- 여백 `clamp(24px, 5vw, 80px)`
- 이미지는 WebP, 비율을 고정해 흔들림을 막습니다
- 모션은 150~250ms. `prefers-reduced-motion` 을 따릅니다

## AI 에게 넘길 빠른 참조

- 본문 글자: `#242424`
- 보조 글자: `#5C5C5C`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FFFFFF`
- 경계선: `#C9C9C9`
- 주된 행동: `#0176D3`
- 글꼴: `"Salesforce Sans","Inter",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EEF4FF;
  --primary-100: #D8E6FE;
  --primary-200: #AACBFF;
  --primary-300: #71ADFD;
  --primary-400: #339BFE;
  --primary-500: #0176D3;
  --primary-600: #0B5CAB;
  --primary-700: #014486;
  --primary-800: #032D60;
  --primary-900: #03234D;
  --primary-950: #001639;
  --gray-50: #FFFFFF;
  --gray-100: #EBEBEB;
  --gray-200: #C9C9C9;
  --gray-300: #AEAEAE;
  --gray-400: #9B9B9B;
  --gray-500: #757575;
  --gray-600: #5C5C5C;
  --gray-700: #444444;
  --gray-800: #2E2E2E;
  --gray-900: #242424;
  --gray-950: #181818;
  --success-50: #EBF7E6;
  --success-100: #CDEFC4;
  --success-200: #91DB8B;
  --success-300: #44C35A;
  --success-400: #3DAD56;
  --success-500: #2E844A;
  --success-600: #396547;
  --success-700: #194E31;
  --success-800: #193626;
  --success-900: #0C2912;
  --success-950: #071B12;
  --warning-50: #FFF1EA;
  --warning-100: #FEDFD0;
  --warning-200: #FFBA90;
  --warning-300: #FC902E;
  --warning-400: #E67E02;
  --warning-500: #A96404;
  --warning-600: #825101;
  --warning-700: #5F3E02;
  --warning-800: #3E2B02;
  --warning-900: #302104;
  --warning-950: #201600;
  --error-50: #FEF1EE;
  --error-100: #FEDED8;
  --error-200: #FEB8AB;
  --error-300: #FE8A78;
  --error-400: #FE6756;
  --error-500: #EA001E;
  --error-600: #BA0517;
  --error-700: #8E030F;
  --error-800: #640103;
  --error-900: #4A0C04;
  --error-950: #300C01;
  --info-50: #EAF5FE;
  --info-100: #CFE9FE;
  --info-200: #90D0FE;
  --info-300: #16B6FB;
  --info-400: #0BA3E2;
  --info-500: #107CAD;
  --info-600: #05628A;
  --info-700: #084968;
  --info-800: #023248;
  --info-900: #0A2636;
  --info-950: #001A28;
  --bg-primary: #0176D3;
  --bg-primary-low: #EEF4FF;
  --fg-primary: #0B5CAB;
  --fg-primary-low: #EEF4FF;
  --fg-point: #0176D3;
  --border-primary: #0176D3;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EBEBEB;
  --bg-neutral: #EBEBEB;
  --bg-neutral-low: #FFFFFF;
  --bg-neutral-lower: #FFFFFF;
  --bg-disabled: #EBEBEB;
  --bg-contrast: #242424;
  --bg-success: #2E844A;
  --bg-success-low: #EBF7E6;
  --bg-warning: #A96404;
  --bg-warning-low: #FFF1EA;
  --bg-critical: #EA001E;
  --bg-critical-low: #FEF1EE;
  --bg-info: #05628A;
  --bg-info-low: #EAF5FE;
  --fg: #242424;
  --fg-strong: #242424;
  --fg-lower: #5C5C5C;
  --fg-disabled: #9B9B9B;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #194E31;
  --fg-warning: #3E2B02;
  --fg-error: #8E030F;
  --border: #C9C9C9;
  --border-low: #EBEBEB;
  --border-strong: #AEAEAE;
  --border-disabled: #C9C9C9;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FFFFFF;
  --tag-bg-success: #E5FFF0;
  --tag-fg-success: #007A33;
  --tag-bg-warning: #FFF9E5;
  --tag-fg-warning: #A65F00;
  --tag-bg-error: #FFEFEF;
  --tag-fg-error: #C20E1F;
  --tag-bg-info: #E5F0FF;
  --tag-fg-info: #1E40AF;
  --tag-bg-neutral: #F1F1F1;
  --tag-fg-neutral: #4B4C52;
  --tag-bg-indigo: #EEF0FE;
  --tag-fg-indigo: #4F46E5;
  --tag-bg-ocean: #E0F4F7;
  --tag-fg-ocean: #0E7490;
  --tag-bg-teal: #DCFAF5;
  --tag-fg-teal: #0D9488;
  --tag-bg-emerald: #DDF7EA;
  --tag-fg-emerald: #047857;
  --tag-bg-lime: #ECFCCB;
  --tag-fg-lime: #4D7C0F;
  --tag-bg-rose: #FCE7F0;
  --tag-fg-rose: #BE185D;
  --tag-bg-magenta: #F5E0F7;
  --tag-fg-magenta: #A21CAF;
  --tag-bg-violet: #EDE3FE;
  --tag-fg-violet: #6D28D9;
  --tag-bg-slate: #E2E8F0;
  --tag-fg-slate: #475569;
  --tag-bg-bronze: #FBE9D0;
  --tag-fg-bronze: #92400E;
  --graph-chart-1: #4178FF;
  --graph-chart-2: #00CCC2;
  --graph-chart-3: #7BAAF7;
  --graph-chart-4: #8FCE96;
  --graph-chart-5: #F2968F;
  --graph-chart-6: #A78BFA;
  --graph-chart-7: #FDBA74;
  --graph-chart-8: #F472B6;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Salesforce Sans","Inter",-apple-system,system-ui,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 400;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 4px;
  --btn-padx: 16px;
  --in-radius: 4px;
  --tag-radius: 4px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF4FF",100:"#D8E6FE",200:"#AACBFF",300:"#71ADFD",400:"#339BFE",500:"#0176D3",600:"#0B5CAB",700:"#014486",800:"#032D60",900:"#03234D",950:"#001639"},
      gray:{50:"#FFFFFF",100:"#EBEBEB",200:"#C9C9C9",300:"#AEAEAE",400:"#9B9B9B",500:"#757575",600:"#5C5C5C",700:"#444444",800:"#2E2E2E",900:"#242424",950:"#181818"},
      success:"#2E844A", warning:"#A96404", critical:"#EA001E",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Salesforce Sans","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}
```