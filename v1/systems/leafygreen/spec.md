# MongoDB LeafyGreen — 시스템 스펙
> 몽고DB 리피그린 공식 토큰. 형광에 가까운 초록을 한 점만 쓰고 나머지를 짙은 청록 회색으로 눌러 데이터베이스 콘솔의 긴 목록을 읽게 만듭니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 데이터  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E3FCF7` | `#CEFBED` | `#B0F9DD` | `#81F7C3` | `#44F298` | `#00ED64` | `#00C15F` | `#009758` | `#00744E` | `#015340` | `#023430` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F9FBFA` | `#EFF3F1` | `#E0E5E4` | `#C9CFCD` | `#AAB2B3` | `#889397` | `#65747C` | `#495B64` | `#30414B` | `#1A2C37` | `#112733` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E3FCF7` | `#C7FAE9` | `#91F8CC` | `#44F298` | `#00DE62` | `#00A35C` | `#008B55` | `#00744E` | `#005E45` | `#01493A` | `#023430` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF7DB` | `#FEF3C3` | `#FFEEAA` | `#FFE382` | `#FFD249` | `#FFC010` | `#D4930A` | `#A96604` | `#864601` | `#693300` | `#4C2100` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEAE5` | `#FFD9D3` | `#FFB9B2` | `#FF7D75` | `#F1524D` | `#DB3030` | `#C01F1F` | `#A50E0E` | `#8B0505` | `#730202` | `#5B0000` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E1F7FF` | `#CFEDFE` | `#9DD7FA` | `#2AA8F0` | `#0386F1` | `#016BF8` | `#0B5DD1` | `#104FAF` | `#0A4198` | `#0A3379` | `#0C2657` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A2C37` |
| `--canvas` | 페이지 바닥 | `#F9FBFA` | `#112733` |
| `--fg` | 본문 글자 | `#1A2C37` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A2C37` | `#F9FBFA` |
| `--fg-lower` | 보조 설명 | `#65747C` | `#AAB2B3` |
| `--fg-disabled` | 비활성 글자 | `#AAB2B3` | `#65747C` |
| `--border` | 기본 경계선 | `#E0E5E4` | `#30414B` |
| `--border-strong` | 강조 경계선 | `#C9CFCD` | `#65747C` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#00ED64` | `#44F298` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E3FCF7` | `#015340` |
| `--fg-primary` | 주된 색 글자 | `#00C15F` | `#81F7C3` |
| `--bg-success` | 완료 표시 | `#00A35C` | `#00A35C` |
| `--bg-warning` | 주의 표시 | `#FFC010` | `#FFC010` |
| `--bg-critical` | 위험 표시 | `#DB3030` | `#DB3030` |
| `--bg-info` | 안내 표시 | `#0B5DD1` | `#0386F1` |

## 토큰 — 타이포

**글꼴:** `"Euclid Circular A","Inter",-apple-system,system-ui,sans-serif`

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
| 카드 | 16px |
| 입력 | 6px |
| 태그 | 999px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 500 |
| 버튼 그림자 | `0 1px 2px rgba(0,30,43,.12)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.6px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 14.39 : 1 | 통과 |
| 흰글씨 대 주된 색 | 1.58 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 6px, 카드 16px, 입력 6px 으로 고정합니다
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

- 본문 글자: `#1A2C37`
- 보조 글자: `#65747C`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F9FBFA`
- 경계선: `#E0E5E4`
- 주된 행동: `#00ED64`
- 글꼴: `"Euclid Circular A","Inter",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E3FCF7;
  --primary-100: #CEFBED;
  --primary-200: #B0F9DD;
  --primary-300: #81F7C3;
  --primary-400: #44F298;
  --primary-500: #00ED64;
  --primary-600: #00C15F;
  --primary-700: #009758;
  --primary-800: #00744E;
  --primary-900: #015340;
  --primary-950: #023430;
  --gray-50: #F9FBFA;
  --gray-100: #EFF3F1;
  --gray-200: #E0E5E4;
  --gray-300: #C9CFCD;
  --gray-400: #AAB2B3;
  --gray-500: #889397;
  --gray-600: #65747C;
  --gray-700: #495B64;
  --gray-800: #30414B;
  --gray-900: #1A2C37;
  --gray-950: #112733;
  --success-50: #E3FCF7;
  --success-100: #C7FAE9;
  --success-200: #91F8CC;
  --success-300: #44F298;
  --success-400: #00DE62;
  --success-500: #00A35C;
  --success-600: #008B55;
  --success-700: #00744E;
  --success-800: #005E45;
  --success-900: #01493A;
  --success-950: #023430;
  --warning-50: #FEF7DB;
  --warning-100: #FEF3C3;
  --warning-200: #FFEEAA;
  --warning-300: #FFE382;
  --warning-400: #FFD249;
  --warning-500: #FFC010;
  --warning-600: #D4930A;
  --warning-700: #A96604;
  --warning-800: #864601;
  --warning-900: #693300;
  --warning-950: #4C2100;
  --error-50: #FFEAE5;
  --error-100: #FFD9D3;
  --error-200: #FFB9B2;
  --error-300: #FF7D75;
  --error-400: #F1524D;
  --error-500: #DB3030;
  --error-600: #C01F1F;
  --error-700: #A50E0E;
  --error-800: #8B0505;
  --error-900: #730202;
  --error-950: #5B0000;
  --info-50: #E1F7FF;
  --info-100: #CFEDFE;
  --info-200: #9DD7FA;
  --info-300: #2AA8F0;
  --info-400: #0386F1;
  --info-500: #016BF8;
  --info-600: #0B5DD1;
  --info-700: #104FAF;
  --info-800: #0A4198;
  --info-900: #0A3379;
  --info-950: #0C2657;
  --bg-primary: #00ED64;
  --bg-primary-low: #E3FCF7;
  --fg-primary: #00C15F;
  --fg-primary-low: #E3FCF7;
  --fg-point: #00ED64;
  --border-primary: #00ED64;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EFF3F1;
  --bg-neutral: #EFF3F1;
  --bg-neutral-low: #F9FBFA;
  --bg-neutral-lower: #F9FBFA;
  --bg-disabled: #EFF3F1;
  --bg-contrast: #1A2C37;
  --bg-success: #00A35C;
  --bg-success-low: #E3FCF7;
  --bg-warning: #FFC010;
  --bg-warning-low: #FEF7DB;
  --bg-critical: #DB3030;
  --bg-critical-low: #FFEAE5;
  --bg-info: #0B5DD1;
  --bg-info-low: #E1F7FF;
  --fg: #1A2C37;
  --fg-strong: #1A2C37;
  --fg-lower: #65747C;
  --fg-disabled: #AAB2B3;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #1A2C37;
  --fg-success: #00744E;
  --fg-warning: #864601;
  --fg-error: #A50E0E;
  --border: #E0E5E4;
  --border-low: #EFF3F1;
  --border-strong: #C9CFCD;
  --border-disabled: #E0E5E4;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F9FBFA;
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
  --font-family: "Euclid Circular A","Inter",-apple-system,system-ui,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 500;
  --btn-shadow: 0 1px 2px rgba(0,30,43,.12);
  --ctl-radius: 4px;
  --card-radius: 16px;
  --btn-padx: 16px;
  --in-radius: 6px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E3FCF7",100:"#CEFBED",200:"#B0F9DD",300:"#81F7C3",400:"#44F298",500:"#00ED64",600:"#00C15F",700:"#009758",800:"#00744E",900:"#015340",950:"#023430"},
      gray:{50:"#F9FBFA",100:"#EFF3F1",200:"#E0E5E4",300:"#C9CFCD",400:"#AAB2B3",500:"#889397",600:"#65747C",700:"#495B64",800:"#30414B",900:"#1A2C37",950:"#112733"},
      success:"#00A35C", warning:"#FFC010", critical:"#DB3030",
    },
    borderRadius:{ btn:"6px", card:"16px", input:"6px" },
    fontFamily:{ sans:["Euclid Circular A","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}
```