# Material 3 — 시스템 스펙
> 구글 머티리얼 디자인 3. 보라 계열 프라이머리(#6750A4)와 부드러운 라운드가 특징.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 앱  ·  **프레임워크:** Flutter · Web · Android

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6EDFF` | `#EADDFF` | `#D0BCFF` | `#B69DF8` | `#9A82DB` | `#7F67BE` | `#6750A4` | `#4F378B` | `#381E72` | `#21005D` | `#16003D` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F5EFF7` | `#E6E1E5` | `#CAC4D0` | `#AEA9B4` | `#938F99` | `#79747E` | `#605D64` | `#49454F` | `#313033` | `#1C1B1F` | `#131316` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F5E9` | `#C8E6C9` | `#A5D6A7` | `#81C784` | `#66BB6A` | `#4CAF50` | `#43A047` | `#388E3C` | `#2E7D32` | `#1B5E20` | `#0D3311` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3E0` | `#FFE0B2` | `#FFCC80` | `#FFB74D` | `#FFA726` | `#FF9800` | `#FB8C00` | `#F57C00` | `#EF6C00` | `#E65100` | `#8A3100` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FCEEEE` | `#F9DEDC` | `#F2B8B5` | `#EC928E` | `#E46962` | `#DC362E` | `#B3261E` | `#8C1D18` | `#601410` | `#410E0B` | `#2D0906` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E3F2FD` | `#BBDEFB` | `#90CAF9` | `#64B5F6` | `#42A5F5` | `#2196F3` | `#1E88E5` | `#1976D2` | `#1565C0` | `#0D47A1` | `#082E63` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1C1B1F` |
| `--canvas` | 페이지 바닥 | `#F5EFF7` | `#131316` |
| `--fg` | 본문 글자 | `#1C1B1F` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1C1B1F` | `#F5EFF7` |
| `--fg-lower` | 보조 설명 | `#605D64` | `#938F99` |
| `--fg-disabled` | 비활성 글자 | `#938F99` | `#605D64` |
| `--border` | 기본 경계선 | `#CAC4D0` | `#313033` |
| `--border-strong` | 강조 경계선 | `#AEA9B4` | `#605D64` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#7F67BE` | `#9A82DB` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F6EDFF` | `#21005D` |
| `--fg-primary` | 주된 색 글자 | `#6750A4` | `#B69DF8` |
| `--bg-success` | 완료 표시 | `#4CAF50` | `#4CAF50` |
| `--bg-warning` | 주의 표시 | `#FF9800` | `#FF9800` |
| `--bg-critical` | 위험 표시 | `#DC362E` | `#DC362E` |
| `--bg-info` | 안내 표시 | `#1E88E5` | `#42A5F5` |

## 토큰 — 타이포

**글꼴:** `"Roboto","Helvetica Neue",Arial,sans-serif`

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
| 버튼 | 999px |
| 카드 | 16px |
| 입력 | 4px |
| 태그 | 999px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 24px |
| 버튼 글자 굵기 | 500 |
| 버튼 그림자 | `0 1px 3px rgba(0,0,0,.30)` |
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
| 본문 대 바탕 | 17.13 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.58 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 999px, 카드 16px, 입력 4px 으로 고정합니다
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

- 본문 글자: `#1C1B1F`
- 보조 글자: `#605D64`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F5EFF7`
- 경계선: `#CAC4D0`
- 주된 행동: `#7F67BE`
- 글꼴: `"Roboto","Helvetica Neue",Arial,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F6EDFF;
  --primary-100: #EADDFF;
  --primary-200: #D0BCFF;
  --primary-300: #B69DF8;
  --primary-400: #9A82DB;
  --primary-500: #7F67BE;
  --primary-600: #6750A4;
  --primary-700: #4F378B;
  --primary-800: #381E72;
  --primary-900: #21005D;
  --primary-950: #16003D;
  --gray-50: #F5EFF7;
  --gray-100: #E6E1E5;
  --gray-200: #CAC4D0;
  --gray-300: #AEA9B4;
  --gray-400: #938F99;
  --gray-500: #79747E;
  --gray-600: #605D64;
  --gray-700: #49454F;
  --gray-800: #313033;
  --gray-900: #1C1B1F;
  --gray-950: #131316;
  --success-50: #E8F5E9;
  --success-100: #C8E6C9;
  --success-200: #A5D6A7;
  --success-300: #81C784;
  --success-400: #66BB6A;
  --success-500: #4CAF50;
  --success-600: #43A047;
  --success-700: #388E3C;
  --success-800: #2E7D32;
  --success-900: #1B5E20;
  --success-950: #0D3311;
  --warning-50: #FFF3E0;
  --warning-100: #FFE0B2;
  --warning-200: #FFCC80;
  --warning-300: #FFB74D;
  --warning-400: #FFA726;
  --warning-500: #FF9800;
  --warning-600: #FB8C00;
  --warning-700: #F57C00;
  --warning-800: #EF6C00;
  --warning-900: #E65100;
  --warning-950: #8A3100;
  --error-50: #FCEEEE;
  --error-100: #F9DEDC;
  --error-200: #F2B8B5;
  --error-300: #EC928E;
  --error-400: #E46962;
  --error-500: #DC362E;
  --error-600: #B3261E;
  --error-700: #8C1D18;
  --error-800: #601410;
  --error-900: #410E0B;
  --error-950: #2D0906;
  --info-50: #E3F2FD;
  --info-100: #BBDEFB;
  --info-200: #90CAF9;
  --info-300: #64B5F6;
  --info-400: #42A5F5;
  --info-500: #2196F3;
  --info-600: #1E88E5;
  --info-700: #1976D2;
  --info-800: #1565C0;
  --info-900: #0D47A1;
  --info-950: #082E63;
  --bg-primary: #7F67BE;
  --bg-primary-low: #F6EDFF;
  --fg-primary: #6750A4;
  --fg-primary-low: #F6EDFF;
  --fg-point: #4CAF50;
  --border-primary: #7F67BE;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E6E1E5;
  --bg-neutral: #E6E1E5;
  --bg-neutral-low: #F5EFF7;
  --bg-neutral-lower: #F5EFF7;
  --bg-disabled: #E6E1E5;
  --bg-contrast: #1C1B1F;
  --bg-success: #4CAF50;
  --bg-success-low: #E8F5E9;
  --bg-warning: #FF9800;
  --bg-warning-low: #FFF3E0;
  --bg-critical: #DC362E;
  --bg-critical-low: #FCEEEE;
  --bg-info: #1E88E5;
  --bg-info-low: #E3F2FD;
  --fg: #1C1B1F;
  --fg-strong: #1C1B1F;
  --fg-lower: #605D64;
  --fg-disabled: #938F99;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #388E3C;
  --fg-warning: #EF6C00;
  --fg-error: #8C1D18;
  --border: #CAC4D0;
  --border-low: #E6E1E5;
  --border-strong: #AEA9B4;
  --border-disabled: #CAC4D0;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F5EFF7;
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
  --radius-sm: 8px;
  --radius-md: 12px;
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
  --font-family: "Roboto","Helvetica Neue",Arial,sans-serif;
  --btn-radius: 999px;
  --btn-weight: 500;
  --btn-shadow: 0 1px 3px rgba(0,0,0,.30);
  --ctl-radius: 4px;
  --card-radius: 16px;
  --btn-padx: 24px;
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
      primary:{50:"#F6EDFF",100:"#EADDFF",200:"#D0BCFF",300:"#B69DF8",400:"#9A82DB",500:"#7F67BE",600:"#6750A4",700:"#4F378B",800:"#381E72",900:"#21005D",950:"#16003D"},
      gray:{50:"#F5EFF7",100:"#E6E1E5",200:"#CAC4D0",300:"#AEA9B4",400:"#938F99",500:"#79747E",600:"#605D64",700:"#49454F",800:"#313033",900:"#1C1B1F",950:"#131316"},
      success:"#4CAF50", warning:"#FF9800", critical:"#DC362E",
    },
    borderRadius:{ btn:"999px", card:"16px", input:"4px" },
    fontFamily:{ sans:["Roboto","Helvetica Neue","Arial","sans-serif"] },
  }}
}
```