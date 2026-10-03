# Airbnb — 시스템 스펙
> 코랄/로즈 브랜드의 여행·숙박 시스템. 사진 중심 카드와 큰 라운드로 따뜻하고 친근합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 여행  ·  **프레임워크:** React · React Native

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF0F3` | `#FFDBE2` | `#FFB3C2` | `#FF859E` | `#FF5A7C` | `#FF385C` | `#E61E48` | `#BD163A` | `#8F102B` | `#5E0A1C` | `#33050F` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F7F7` | `#EBEBEB` | `#DDDDDD` | `#C2C2C2` | `#A0A0A0` | `#767676` | `#5E5E5E` | `#484848` | `#2E2E2E` | `#1A1A1A` | `#0D0D0D` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F8E9` | `#C4EDC6` | `#8CDB90` | `#4FC456` | `#1FAD2A` | `#008A05` | `#007304` | `#005A03` | `#004102` | `#002901` | `#001400` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8E5` | `#FFEBB8` | `#FFDD85` | `#FFCE52` | `#FFC229` | `#FFB400` | `#D19400` | `#9E7000` | `#6E4E00` | `#423000` | `#211800` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBEEEA` | `#F5D2C7` | `#EAA491` | `#DE765B` | `#D5502E` | `#C13515` | `#A02B11` | `#7C210D` | `#591809` | `#350E05` | `#1C0702` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF2FF` | `#CFE0FF` | `#A0C2FF` | `#71A3FF` | `#5A97FF` | `#428BFF` | `#2E6FD8` | `#2153A3` | `#16386E` | `#0B1D39` | `#050F1C` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A1A1A` |
| `--canvas` | 페이지 바닥 | `#F7F7F7` | `#0D0D0D` |
| `--fg` | 본문 글자 | `#1A1A1A` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A1A1A` | `#F7F7F7` |
| `--fg-lower` | 보조 설명 | `#5E5E5E` | `#A0A0A0` |
| `--fg-disabled` | 비활성 글자 | `#A0A0A0` | `#5E5E5E` |
| `--border` | 기본 경계선 | `#DDDDDD` | `#2E2E2E` |
| `--border-strong` | 강조 경계선 | `#C2C2C2` | `#5E5E5E` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#FF385C` | `#FF5A7C` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FFF0F3` | `#5E0A1C` |
| `--fg-primary` | 주된 색 글자 | `#E61E48` | `#FF859E` |
| `--bg-success` | 완료 표시 | `#008A05` | `#008A05` |
| `--bg-warning` | 주의 표시 | `#FFB400` | `#FFB400` |
| `--bg-critical` | 위험 표시 | `#C13515` | `#C13515` |
| `--bg-info` | 안내 표시 | `#2E6FD8` | `#5A97FF` |

## 토큰 — 타이포

**글꼴:** `"Manrope",-apple-system,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 700 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 700 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 600 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 10px |
| 카드 | 16px |
| 입력 | 10px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 20px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | `0 2px 8px -2px var(--bg-primary)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2.4px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.40 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.52 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 10px, 카드 16px, 입력 10px 으로 고정합니다
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

- 본문 글자: `#1A1A1A`
- 보조 글자: `#5E5E5E`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F7F7F7`
- 경계선: `#DDDDDD`
- 주된 행동: `#FF385C`
- 글꼴: `"Manrope",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FFF0F3;
  --primary-100: #FFDBE2;
  --primary-200: #FFB3C2;
  --primary-300: #FF859E;
  --primary-400: #FF5A7C;
  --primary-500: #FF385C;
  --primary-600: #E61E48;
  --primary-700: #BD163A;
  --primary-800: #8F102B;
  --primary-900: #5E0A1C;
  --primary-950: #33050F;
  --gray-50: #F7F7F7;
  --gray-100: #EBEBEB;
  --gray-200: #DDDDDD;
  --gray-300: #C2C2C2;
  --gray-400: #A0A0A0;
  --gray-500: #767676;
  --gray-600: #5E5E5E;
  --gray-700: #484848;
  --gray-800: #2E2E2E;
  --gray-900: #1A1A1A;
  --gray-950: #0D0D0D;
  --success-50: #E8F8E9;
  --success-100: #C4EDC6;
  --success-200: #8CDB90;
  --success-300: #4FC456;
  --success-400: #1FAD2A;
  --success-500: #008A05;
  --success-600: #007304;
  --success-700: #005A03;
  --success-800: #004102;
  --success-900: #002901;
  --success-950: #001400;
  --warning-50: #FFF8E5;
  --warning-100: #FFEBB8;
  --warning-200: #FFDD85;
  --warning-300: #FFCE52;
  --warning-400: #FFC229;
  --warning-500: #FFB400;
  --warning-600: #D19400;
  --warning-700: #9E7000;
  --warning-800: #6E4E00;
  --warning-900: #423000;
  --warning-950: #211800;
  --error-50: #FBEEEA;
  --error-100: #F5D2C7;
  --error-200: #EAA491;
  --error-300: #DE765B;
  --error-400: #D5502E;
  --error-500: #C13515;
  --error-600: #A02B11;
  --error-700: #7C210D;
  --error-800: #591809;
  --error-900: #350E05;
  --error-950: #1C0702;
  --info-50: #EAF2FF;
  --info-100: #CFE0FF;
  --info-200: #A0C2FF;
  --info-300: #71A3FF;
  --info-400: #5A97FF;
  --info-500: #428BFF;
  --info-600: #2E6FD8;
  --info-700: #2153A3;
  --info-800: #16386E;
  --info-900: #0B1D39;
  --info-950: #050F1C;
  --bg-primary: #FF385C;
  --bg-primary-low: #FFF0F3;
  --fg-primary: #E61E48;
  --fg-primary-low: #FFF0F3;
  --fg-point: #E61E76;
  --border-primary: #FF385C;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EBEBEB;
  --bg-neutral: #EBEBEB;
  --bg-neutral-low: #F7F7F7;
  --bg-neutral-lower: #F7F7F7;
  --bg-disabled: #EBEBEB;
  --bg-contrast: #1A1A1A;
  --bg-success: #008A05;
  --bg-success-low: #E8F8E9;
  --bg-warning: #FFB400;
  --bg-warning-low: #FFF8E5;
  --bg-critical: #C13515;
  --bg-critical-low: #FBEEEA;
  --bg-info: #2E6FD8;
  --bg-info-low: #EAF2FF;
  --fg: #1A1A1A;
  --fg-strong: #1A1A1A;
  --fg-lower: #5E5E5E;
  --fg-disabled: #A0A0A0;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #005A03;
  --fg-warning: #6E4E00;
  --fg-error: #7C210D;
  --border: #DDDDDD;
  --border-low: #EBEBEB;
  --border-strong: #C2C2C2;
  --border-disabled: #DDDDDD;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F7F7F7;
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
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Manrope",-apple-system,system-ui,sans-serif;
  --btn-radius: 10px;
  --btn-weight: 600;
  --btn-shadow: 0 2px 8px -2px var(--bg-primary);
  --ctl-radius: 8px;
  --card-radius: 16px;
  --btn-padx: 20px;
  --in-radius: 10px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF0F3",100:"#FFDBE2",200:"#FFB3C2",300:"#FF859E",400:"#FF5A7C",500:"#FF385C",600:"#E61E48",700:"#BD163A",800:"#8F102B",900:"#5E0A1C",950:"#33050F"},
      gray:{50:"#F7F7F7",100:"#EBEBEB",200:"#DDDDDD",300:"#C2C2C2",400:"#A0A0A0",500:"#767676",600:"#5E5E5E",700:"#484848",800:"#2E2E2E",900:"#1A1A1A",950:"#0D0D0D"},
      success:"#008A05", warning:"#FFB400", critical:"#C13515",
    },
    borderRadius:{ btn:"10px", card:"16px", input:"10px" },
    fontFamily:{ sans:["Manrope","-apple-system","system-ui","sans-serif"] },
  }}
}
```