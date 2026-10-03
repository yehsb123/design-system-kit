# IBM Carbon — 시스템 스펙
> IBM 엔터프라이즈 시스템. Blue 60 #0F62FE, 각진 형태(라운드 최소)와 명확한 그레이 계층.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · Web Components

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF5FF` | `#D0E2FF` | `#A6C8FF` | `#78A9FF` | `#4589FF` | `#0F62FE` | `#0043CE` | `#002D9C` | `#001D6C` | `#001141` | `#000A26` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F4F4F4` | `#E0E0E0` | `#C6C6C6` | `#A8A8A8` | `#8D8D8D` | `#6F6F6F` | `#525252` | `#393939` | `#262626` | `#161616` | `#0B0B0B` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#DEFBE6` | `#A7F0BA` | `#6FDC8C` | `#42BE65` | `#24A148` | `#198038` | `#0E6027` | `#044317` | `#022D0D` | `#071908` | `#031004` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8E1` | `#FCE9A0` | `#F1C21B` | `#D2A106` | `#B28600` | `#8E6A00` | `#684E00` | `#4C3900` | `#372700` | `#231A00` | `#141000` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1F1` | `#FFD7D9` | `#FFB3B8` | `#FF8389` | `#FA4D56` | `#DA1E28` | `#A2191F` | `#750E13` | `#520408` | `#2D0709` | `#1A0203` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF5FF` | `#D0E2FF` | `#A6C8FF` | `#78A9FF` | `#4589FF` | `#0F62FE` | `#0043CE` | `#002D9C` | `#001D6C` | `#001141` | `#000A26` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#161616` |
| `--canvas` | 페이지 바닥 | `#F4F4F4` | `#0B0B0B` |
| `--fg` | 본문 글자 | `#161616` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#161616` | `#F4F4F4` |
| `--fg-lower` | 보조 설명 | `#525252` | `#8D8D8D` |
| `--fg-disabled` | 비활성 글자 | `#8D8D8D` | `#525252` |
| `--border` | 기본 경계선 | `#C6C6C6` | `#262626` |
| `--border-strong` | 강조 경계선 | `#A8A8A8` | `#525252` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0F62FE` | `#4589FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EDF5FF` | `#001141` |
| `--fg-primary` | 주된 색 글자 | `#0043CE` | `#78A9FF` |
| `--bg-success` | 완료 표시 | `#198038` | `#198038` |
| `--bg-warning` | 주의 표시 | `#8E6A00` | `#8E6A00` |
| `--bg-critical` | 위험 표시 | `#DA1E28` | `#DA1E28` |
| `--bg-info` | 안내 표시 | `#0043CE` | `#4589FF` |

## 토큰 — 타이포

**글꼴:** `"IBM Plex Sans",system-ui,sans-serif`

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
| 버튼 | 0px |
| 카드 | 0px |
| 입력 | 0px |
| 태그 | 0px |
| 작은 조작부 | 0px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 400 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2px, 끝처리 `butt`, 꼬임 `miter`.
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
| 본문 대 바탕 | 18.10 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.00 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 0px, 카드 0px, 입력 0px 으로 고정합니다
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

- 본문 글자: `#161616`
- 보조 글자: `#525252`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F4F4F4`
- 경계선: `#C6C6C6`
- 주된 행동: `#0F62FE`
- 글꼴: `"IBM Plex Sans",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EDF5FF;
  --primary-100: #D0E2FF;
  --primary-200: #A6C8FF;
  --primary-300: #78A9FF;
  --primary-400: #4589FF;
  --primary-500: #0F62FE;
  --primary-600: #0043CE;
  --primary-700: #002D9C;
  --primary-800: #001D6C;
  --primary-900: #001141;
  --primary-950: #000A26;
  --gray-50: #F4F4F4;
  --gray-100: #E0E0E0;
  --gray-200: #C6C6C6;
  --gray-300: #A8A8A8;
  --gray-400: #8D8D8D;
  --gray-500: #6F6F6F;
  --gray-600: #525252;
  --gray-700: #393939;
  --gray-800: #262626;
  --gray-900: #161616;
  --gray-950: #0B0B0B;
  --success-50: #DEFBE6;
  --success-100: #A7F0BA;
  --success-200: #6FDC8C;
  --success-300: #42BE65;
  --success-400: #24A148;
  --success-500: #198038;
  --success-600: #0E6027;
  --success-700: #044317;
  --success-800: #022D0D;
  --success-900: #071908;
  --success-950: #031004;
  --warning-50: #FFF8E1;
  --warning-100: #FCE9A0;
  --warning-200: #F1C21B;
  --warning-300: #D2A106;
  --warning-400: #B28600;
  --warning-500: #8E6A00;
  --warning-600: #684E00;
  --warning-700: #4C3900;
  --warning-800: #372700;
  --warning-900: #231A00;
  --warning-950: #141000;
  --error-50: #FFF1F1;
  --error-100: #FFD7D9;
  --error-200: #FFB3B8;
  --error-300: #FF8389;
  --error-400: #FA4D56;
  --error-500: #DA1E28;
  --error-600: #A2191F;
  --error-700: #750E13;
  --error-800: #520408;
  --error-900: #2D0709;
  --error-950: #1A0203;
  --info-50: #EDF5FF;
  --info-100: #D0E2FF;
  --info-200: #A6C8FF;
  --info-300: #78A9FF;
  --info-400: #4589FF;
  --info-500: #0F62FE;
  --info-600: #0043CE;
  --info-700: #002D9C;
  --info-800: #001D6C;
  --info-900: #001141;
  --info-950: #000A26;
  --bg-primary: #0F62FE;
  --bg-primary-low: #EDF5FF;
  --fg-primary: #0043CE;
  --fg-primary-low: #EDF5FF;
  --fg-point: #198038;
  --border-primary: #0F62FE;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E0E0E0;
  --bg-neutral: #E0E0E0;
  --bg-neutral-low: #F4F4F4;
  --bg-neutral-lower: #F4F4F4;
  --bg-disabled: #E0E0E0;
  --bg-contrast: #161616;
  --bg-success: #198038;
  --bg-success-low: #DEFBE6;
  --bg-warning: #8E6A00;
  --bg-warning-low: #FFF8E1;
  --bg-critical: #DA1E28;
  --bg-critical-low: #FFF1F1;
  --bg-info: #0043CE;
  --bg-info-low: #EDF5FF;
  --fg: #161616;
  --fg-strong: #161616;
  --fg-lower: #525252;
  --fg-disabled: #8D8D8D;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #044317;
  --fg-warning: #372700;
  --fg-error: #750E13;
  --border: #C6C6C6;
  --border-low: #E0E0E0;
  --border-strong: #A8A8A8;
  --border-disabled: #C6C6C6;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F4F4F4;
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
  --radius-xs: 0px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "IBM Plex Sans",system-ui,sans-serif;
  --btn-radius: 0px;
  --btn-weight: 400;
  --btn-shadow: none;
  --ctl-radius: 0px;
  --card-radius: 0px;
  --btn-padx: 16px;
  --in-radius: 0px;
  --tag-radius: 0px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF5FF",100:"#D0E2FF",200:"#A6C8FF",300:"#78A9FF",400:"#4589FF",500:"#0F62FE",600:"#0043CE",700:"#002D9C",800:"#001D6C",900:"#001141",950:"#000A26"},
      gray:{50:"#F4F4F4",100:"#E0E0E0",200:"#C6C6C6",300:"#A8A8A8",400:"#8D8D8D",500:"#6F6F6F",600:"#525252",700:"#393939",800:"#262626",900:"#161616",950:"#0B0B0B"},
      success:"#198038", warning:"#8E6A00", critical:"#DA1E28",
    },
    borderRadius:{ btn:"0px", card:"0px", input:"0px" },
    fontFamily:{ sans:["IBM Plex Sans","system-ui","sans-serif"] },
  }}
}
```