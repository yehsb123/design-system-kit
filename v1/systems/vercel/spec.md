# Vercel / Geist — 시스템 스펙
> 흑백 모노크롬 미니멀 시스템. 검정 프라이머리와 절제된 뉴트럴로 개발 도구와 랜딩에 강합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 랜딩  ·  **프레임워크:** Next.js · 개발

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFAFA` | `#EDEDED` | `#D4D4D4` | `#A3A3A3` | `#666666` | `#171717` | `#0A0A0A` | `#000000` | `#000000` | `#000000` | `#000000` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFAFA` | `#F2F2F2` | `#EBEBEB` | `#E0E0E0` | `#A1A1A1` | `#737373` | `#525252` | `#404040` | `#262626` | `#171717` | `#0A0A0A` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E7FBF1` | `#C2F5DB` | `#86EBB5` | `#47DE8F` | `#17CE73` | `#0CB85F` | `#099A4F` | `#077A3F` | `#05582E` | `#03381D` | `#011C0F` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF6E7` | `#FCE7BD` | `#F9CE7B` | `#F7B53A` | `#F5A623` | `#D5880B` | `#AB6D08` | `#805206` | `#563704` | `#2C1C02` | `#160E01` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDECEC` | `#FBD0D0` | `#F7A0A0` | `#F26E6E` | `#EE4444` | `#EE0000` | `#C40000` | `#990000` | `#6E0000` | `#420000` | `#220000` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6F1FE` | `#CCE3FE` | `#99C7FD` | `#66AAFC` | `#338EFA` | `#0070F3` | `#005AC4` | `#004494` | `#002E63` | `#001832` | `#000C19` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#171717` |
| `--canvas` | 페이지 바닥 | `#FAFAFA` | `#0A0A0A` |
| `--fg` | 본문 글자 | `#171717` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#171717` | `#FAFAFA` |
| `--fg-lower` | 보조 설명 | `#525252` | `#A1A1A1` |
| `--fg-disabled` | 비활성 글자 | `#A1A1A1` | `#525252` |
| `--border` | 기본 경계선 | `#EBEBEB` | `#262626` |
| `--border-strong` | 강조 경계선 | `#E0E0E0` | `#525252` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#171717` | `#666666` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FAFAFA` | `#000000` |
| `--fg-primary` | 주된 색 글자 | `#0A0A0A` | `#A3A3A3` |
| `--bg-success` | 완료 표시 | `#0CB85F` | `#0CB85F` |
| `--bg-warning` | 주의 표시 | `#D5880B` | `#D5880B` |
| `--bg-critical` | 위험 표시 | `#EE0000` | `#EE0000` |
| `--bg-info` | 안내 표시 | `#005AC4` | `#338EFA` |

## 토큰 — 타이포

**글꼴:** `"DM Sans",-apple-system,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 700 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 700 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 500 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 6px |
| 카드 | 8px |
| 입력 | 6px |
| 태그 | 4px |
| 작은 조작부 | 5px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 500 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.75px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.93 : 1 | 통과 |
| 흰글씨 대 주된 색 | 17.93 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 6px, 카드 8px, 입력 6px 으로 고정합니다
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

- 본문 글자: `#171717`
- 보조 글자: `#525252`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAFAFA`
- 경계선: `#EBEBEB`
- 주된 행동: `#171717`
- 글꼴: `"DM Sans",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FAFAFA;
  --primary-100: #EDEDED;
  --primary-200: #D4D4D4;
  --primary-300: #A3A3A3;
  --primary-400: #666666;
  --primary-500: #171717;
  --primary-600: #0A0A0A;
  --primary-700: #000000;
  --primary-800: #000000;
  --primary-900: #000000;
  --primary-950: #000000;
  --gray-50: #FAFAFA;
  --gray-100: #F2F2F2;
  --gray-200: #EBEBEB;
  --gray-300: #E0E0E0;
  --gray-400: #A1A1A1;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;
  --gray-950: #0A0A0A;
  --success-50: #E7FBF1;
  --success-100: #C2F5DB;
  --success-200: #86EBB5;
  --success-300: #47DE8F;
  --success-400: #17CE73;
  --success-500: #0CB85F;
  --success-600: #099A4F;
  --success-700: #077A3F;
  --success-800: #05582E;
  --success-900: #03381D;
  --success-950: #011C0F;
  --warning-50: #FEF6E7;
  --warning-100: #FCE7BD;
  --warning-200: #F9CE7B;
  --warning-300: #F7B53A;
  --warning-400: #F5A623;
  --warning-500: #D5880B;
  --warning-600: #AB6D08;
  --warning-700: #805206;
  --warning-800: #563704;
  --warning-900: #2C1C02;
  --warning-950: #160E01;
  --error-50: #FDECEC;
  --error-100: #FBD0D0;
  --error-200: #F7A0A0;
  --error-300: #F26E6E;
  --error-400: #EE4444;
  --error-500: #EE0000;
  --error-600: #C40000;
  --error-700: #990000;
  --error-800: #6E0000;
  --error-900: #420000;
  --error-950: #220000;
  --info-50: #E6F1FE;
  --info-100: #CCE3FE;
  --info-200: #99C7FD;
  --info-300: #66AAFC;
  --info-400: #338EFA;
  --info-500: #0070F3;
  --info-600: #005AC4;
  --info-700: #004494;
  --info-800: #002E63;
  --info-900: #001832;
  --info-950: #000C19;
  --bg-primary: #171717;
  --bg-primary-low: #FAFAFA;
  --fg-primary: #0A0A0A;
  --fg-primary-low: #FAFAFA;
  --fg-point: #0070F3;
  --border-primary: #171717;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F2F2F2;
  --bg-neutral: #F2F2F2;
  --bg-neutral-low: #FAFAFA;
  --bg-neutral-lower: #FAFAFA;
  --bg-disabled: #F2F2F2;
  --bg-contrast: #171717;
  --bg-success: #0CB85F;
  --bg-success-low: #E7FBF1;
  --bg-warning: #D5880B;
  --bg-warning-low: #FEF6E7;
  --bg-critical: #EE0000;
  --bg-critical-low: #FDECEC;
  --bg-info: #005AC4;
  --bg-info-low: #E6F1FE;
  --fg: #171717;
  --fg-strong: #171717;
  --fg-lower: #525252;
  --fg-disabled: #A1A1A1;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #077A3F;
  --fg-warning: #563704;
  --fg-error: #990000;
  --border: #EBEBEB;
  --border-low: #F2F2F2;
  --border-strong: #E0E0E0;
  --border-disabled: #EBEBEB;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAFAFA;
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
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "DM Sans",-apple-system,system-ui,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 500;
  --btn-shadow: none;
  --ctl-radius: 5px;
  --card-radius: 8px;
  --btn-padx: 16px;
  --in-radius: 6px;
  --tag-radius: 4px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FAFAFA",100:"#EDEDED",200:"#D4D4D4",300:"#A3A3A3",400:"#666666",500:"#171717",600:"#0A0A0A",700:"#000000",800:"#000000",900:"#000000",950:"#000000"},
      gray:{50:"#FAFAFA",100:"#F2F2F2",200:"#EBEBEB",300:"#E0E0E0",400:"#A1A1A1",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0A0A0A"},
      success:"#0CB85F", warning:"#D5880B", critical:"#EE0000",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["DM Sans","-apple-system","system-ui","sans-serif"] },
  }}
}
```