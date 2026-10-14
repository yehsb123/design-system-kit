# Adobe Spectrum — 시스템 스펙
> 어도비 스펙트럼 공식 토큰. 밝기 네 벌을 따로 두는 체계라 색 단계가 촘촘하고, 편집 도구처럼 패널이 많은 화면에 맞습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** React · 웹 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F5F9FF` | `#D0E5FE` | `#9AC2FC` | `#6A96FE` | `#4871FE` | `#274DEA` | `#1B3CC8` | `#132EA0` | `#0E2377` | `#0E194B` | `#070B1E` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFFFF` | `#F3F3F3` | `#E1E1E1` | `#C6C6C6` | `#717171` | `#292929` | `#202020` | `#171717` | `#0F0F0F` | `#080808` | `#000000` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDFCF1` | `#B5F0CB` | `#45D88C` | `#0FB063` | `#079054` | `#036E45` | `#025A3A` | `#014631` | `#003426` | `#00241B` | `#000F0C` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF6E7` | `#FFDEA8` | `#FFAE31` | `#F47500` | `#D05800` | `#A73E00` | `#8B3100` | `#6D2500` | `#521B00` | `#381300` | `#190800` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF6F5` | `#FFDAD6` | `#FFA99F` | `#FF6755` | `#EB3722` | `#B72818` | `#972012` | `#77190C` | `#5A1208` | `#3F0C04` | `#1D0502` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F8FF` | `#DCE1FF` | `#B1BBFF` | `#8C8EFE` | `#7866FC` | `#6338EE` | `#5121D5` | `#3F0EB3` | `#2F028D` | `#210068` | `#110036` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#080808` |
| `--canvas` | 페이지 바닥 | `#FFFFFF` | `#000000` |
| `--fg` | 본문 글자 | `#080808` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#080808` | `#FFFFFF` |
| `--fg-lower` | 보조 설명 | `#202020` | `#717171` |
| `--fg-disabled` | 비활성 글자 | `#717171` | `#202020` |
| `--border` | 기본 경계선 | `#E1E1E1` | `#0F0F0F` |
| `--border-strong` | 강조 경계선 | `#C6C6C6` | `#202020` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#274DEA` | `#4871FE` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F5F9FF` | `#0E194B` |
| `--fg-primary` | 주된 색 글자 | `#1B3CC8` | `#6A96FE` |
| `--bg-success` | 완료 표시 | `#036E45` | `#036E45` |
| `--bg-warning` | 주의 표시 | `#A73E00` | `#A73E00` |
| `--bg-critical` | 위험 표시 | `#B72818` | `#B72818` |
| `--bg-info` | 안내 표시 | `#5121D5` | `#7866FC` |

## 토큰 — 타이포

**글꼴:** `"Source Sans 3","Adobe Clean",-apple-system,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 700 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 700 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 700 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 999px |
| 카드 | 8px |
| 입력 | 4px |
| 태그 | 999px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 20px |
| 버튼 글자 굵기 | 700 |
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
| 본문 대 바탕 | 20.03 : 1 | 통과 |
| 흰글씨 대 주된 색 | 6.30 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 999px, 카드 8px, 입력 4px 으로 고정합니다
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

- 본문 글자: `#080808`
- 보조 글자: `#202020`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FFFFFF`
- 경계선: `#E1E1E1`
- 주된 행동: `#274DEA`
- 글꼴: `"Source Sans 3","Adobe Clean",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F5F9FF;
  --primary-100: #D0E5FE;
  --primary-200: #9AC2FC;
  --primary-300: #6A96FE;
  --primary-400: #4871FE;
  --primary-500: #274DEA;
  --primary-600: #1B3CC8;
  --primary-700: #132EA0;
  --primary-800: #0E2377;
  --primary-900: #0E194B;
  --primary-950: #070B1E;
  --gray-50: #FFFFFF;
  --gray-100: #F3F3F3;
  --gray-200: #E1E1E1;
  --gray-300: #C6C6C6;
  --gray-400: #717171;
  --gray-500: #292929;
  --gray-600: #202020;
  --gray-700: #171717;
  --gray-800: #0F0F0F;
  --gray-900: #080808;
  --gray-950: #000000;
  --success-50: #EDFCF1;
  --success-100: #B5F0CB;
  --success-200: #45D88C;
  --success-300: #0FB063;
  --success-400: #079054;
  --success-500: #036E45;
  --success-600: #025A3A;
  --success-700: #014631;
  --success-800: #003426;
  --success-900: #00241B;
  --success-950: #000F0C;
  --warning-50: #FFF6E7;
  --warning-100: #FFDEA8;
  --warning-200: #FFAE31;
  --warning-300: #F47500;
  --warning-400: #D05800;
  --warning-500: #A73E00;
  --warning-600: #8B3100;
  --warning-700: #6D2500;
  --warning-800: #521B00;
  --warning-900: #381300;
  --warning-950: #190800;
  --error-50: #FFF6F5;
  --error-100: #FFDAD6;
  --error-200: #FFA99F;
  --error-300: #FF6755;
  --error-400: #EB3722;
  --error-500: #B72818;
  --error-600: #972012;
  --error-700: #77190C;
  --error-800: #5A1208;
  --error-900: #3F0C04;
  --error-950: #1D0502;
  --info-50: #F7F8FF;
  --info-100: #DCE1FF;
  --info-200: #B1BBFF;
  --info-300: #8C8EFE;
  --info-400: #7866FC;
  --info-500: #6338EE;
  --info-600: #5121D5;
  --info-700: #3F0EB3;
  --info-800: #2F028D;
  --info-900: #210068;
  --info-950: #110036;
  --bg-primary: #274DEA;
  --bg-primary-low: #F5F9FF;
  --fg-primary: #1B3CC8;
  --fg-primary-low: #F5F9FF;
  --fg-point: #274DEA;
  --border-primary: #274DEA;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F3F3F3;
  --bg-neutral: #F3F3F3;
  --bg-neutral-low: #FFFFFF;
  --bg-neutral-lower: #FFFFFF;
  --bg-disabled: #F3F3F3;
  --bg-contrast: #080808;
  --bg-success: #036E45;
  --bg-success-low: #EDFCF1;
  --bg-warning: #A73E00;
  --bg-warning-low: #FFF6E7;
  --bg-critical: #B72818;
  --bg-critical-low: #FFF6F5;
  --bg-info: #5121D5;
  --bg-info-low: #F7F8FF;
  --fg: #080808;
  --fg-strong: #080808;
  --fg-lower: #202020;
  --fg-disabled: #717171;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #014631;
  --fg-warning: #521B00;
  --fg-error: #77190C;
  --border: #E1E1E1;
  --border-low: #F3F3F3;
  --border-strong: #C6C6C6;
  --border-disabled: #E1E1E1;
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
  --radius-xs: 4px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Source Sans 3","Adobe Clean",-apple-system,system-ui,sans-serif;
  --btn-radius: 999px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 8px;
  --btn-padx: 20px;
  --in-radius: 4px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F5F9FF",100:"#D0E5FE",200:"#9AC2FC",300:"#6A96FE",400:"#4871FE",500:"#274DEA",600:"#1B3CC8",700:"#132EA0",800:"#0E2377",900:"#0E194B",950:"#070B1E"},
      gray:{50:"#FFFFFF",100:"#F3F3F3",200:"#E1E1E1",300:"#C6C6C6",400:"#717171",500:"#292929",600:"#202020",700:"#171717",800:"#0F0F0F",900:"#080808",950:"#000000"},
      success:"#036E45", warning:"#A73E00", critical:"#B72818",
    },
    borderRadius:{ btn:"999px", card:"8px", input:"4px" },
    fontFamily:{ sans:["Source Sans 3","Adobe Clean","-apple-system","system-ui","sans-serif"] },
  }}
}
```