# Segment Evergreen — 시스템 스펙
> 세그먼트 에버그린 공식 토큰. 푸른 기가 도는 회색을 열두 단계로 길게 두어, 고객 데이터 표가 길게 이어지는 화면에서 줄 구분을 색이 아니라 밝기로 냅니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F3F6FF` | `#E7EDFF` | `#C6D4FF` | `#95AFFF` | `#648BFF` | `#3366FF` | `#2B56D6` | `#2345AD` | `#1B3585` | `#12255C` | `#0A1433` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFBFF` | `#F6F8FB` | `#F3F4F8` | `#E7E9F1` | `#CFD1DF` | `#8F95B2` | `#787E9B` | `#626884` | `#4E546E` | `#313857` | `#101840` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F5FBF8` | `#DCF2EA` | `#BAE5D5` | `#97D7BF` | `#75CAAA` | `#52BD95` | `#459F7D` | `#388065` | `#2B624D` | `#1E4436` | `#10261E` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFAF2` | `#FCF1E8` | `#F9E8DF` | `#F9D9B5` | `#FCC46A` | `#FFB020` | `#D6941B` | `#AD7816` | `#835B10` | `#573C0B` | `#2A1D05` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDF4F4` | `#FBE4E4` | `#F7CBCB` | `#F0A0A0` | `#E27272` | `#D14343` | `#B83B3B` | `#9F3333` | `#852B2B` | `#621F1F` | `#3A1313` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F3F6FF` | `#EBF0FF` | `#D6E0FF` | `#ADC2FF` | `#85A3FF` | `#5C85FF` | `#3366FF` | `#2952CC` | `#1F3D99` | `#142966` | `#0A1433` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#313857` |
| `--canvas` | 페이지 바닥 | `#FAFBFF` | `#101840` |
| `--fg` | 본문 글자 | `#313857` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#313857` | `#FAFBFF` |
| `--fg-lower` | 보조 설명 | `#787E9B` | `#CFD1DF` |
| `--fg-disabled` | 비활성 글자 | `#CFD1DF` | `#787E9B` |
| `--border` | 기본 경계선 | `#F3F4F8` | `#4E546E` |
| `--border-strong` | 강조 경계선 | `#E7E9F1` | `#787E9B` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#3366FF` | `#648BFF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F3F6FF` | `#12255C` |
| `--fg-primary` | 주된 색 글자 | `#2B56D6` | `#95AFFF` |
| `--bg-success` | 완료 표시 | `#52BD95` | `#52BD95` |
| `--bg-warning` | 주의 표시 | `#FFB020` | `#FFB020` |
| `--bg-critical` | 위험 표시 | `#D14343` | `#D14343` |
| `--bg-info` | 안내 표시 | `#3366FF` | `#85A3FF` |

## 토큰 — 타이포

**글꼴:** `"SF Pro Text",-apple-system,"Inter",system-ui,sans-serif`

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
| 버튼 | 4px |
| 카드 | 8px |
| 입력 | 4px |
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 500 |
| 버튼 그림자 | `0 1px 2px rgba(67,90,111,.14)` |
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
| 본문 대 바탕 | 11.45 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.68 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 4px, 카드 8px, 입력 4px 으로 고정합니다
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

- 본문 글자: `#313857`
- 보조 글자: `#787E9B`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAFBFF`
- 경계선: `#F3F4F8`
- 주된 행동: `#3366FF`
- 글꼴: `"SF Pro Text",-apple-system,"Inter",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F3F6FF;
  --primary-100: #E7EDFF;
  --primary-200: #C6D4FF;
  --primary-300: #95AFFF;
  --primary-400: #648BFF;
  --primary-500: #3366FF;
  --primary-600: #2B56D6;
  --primary-700: #2345AD;
  --primary-800: #1B3585;
  --primary-900: #12255C;
  --primary-950: #0A1433;
  --gray-50: #FAFBFF;
  --gray-100: #F6F8FB;
  --gray-200: #F3F4F8;
  --gray-300: #E7E9F1;
  --gray-400: #CFD1DF;
  --gray-500: #8F95B2;
  --gray-600: #787E9B;
  --gray-700: #626884;
  --gray-800: #4E546E;
  --gray-900: #313857;
  --gray-950: #101840;
  --success-50: #F5FBF8;
  --success-100: #DCF2EA;
  --success-200: #BAE5D5;
  --success-300: #97D7BF;
  --success-400: #75CAAA;
  --success-500: #52BD95;
  --success-600: #459F7D;
  --success-700: #388065;
  --success-800: #2B624D;
  --success-900: #1E4436;
  --success-950: #10261E;
  --warning-50: #FFFAF2;
  --warning-100: #FCF1E8;
  --warning-200: #F9E8DF;
  --warning-300: #F9D9B5;
  --warning-400: #FCC46A;
  --warning-500: #FFB020;
  --warning-600: #D6941B;
  --warning-700: #AD7816;
  --warning-800: #835B10;
  --warning-900: #573C0B;
  --warning-950: #2A1D05;
  --error-50: #FDF4F4;
  --error-100: #FBE4E4;
  --error-200: #F7CBCB;
  --error-300: #F0A0A0;
  --error-400: #E27272;
  --error-500: #D14343;
  --error-600: #B83B3B;
  --error-700: #9F3333;
  --error-800: #852B2B;
  --error-900: #621F1F;
  --error-950: #3A1313;
  --info-50: #F3F6FF;
  --info-100: #EBF0FF;
  --info-200: #D6E0FF;
  --info-300: #ADC2FF;
  --info-400: #85A3FF;
  --info-500: #5C85FF;
  --info-600: #3366FF;
  --info-700: #2952CC;
  --info-800: #1F3D99;
  --info-900: #142966;
  --info-950: #0A1433;
  --bg-primary: #3366FF;
  --bg-primary-low: #F3F6FF;
  --fg-primary: #2B56D6;
  --fg-primary-low: #F3F6FF;
  --fg-point: #3366FF;
  --border-primary: #3366FF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F6F8FB;
  --bg-neutral: #F6F8FB;
  --bg-neutral-low: #FAFBFF;
  --bg-neutral-lower: #FAFBFF;
  --bg-disabled: #F6F8FB;
  --bg-contrast: #313857;
  --bg-success: #52BD95;
  --bg-success-low: #F5FBF8;
  --bg-warning: #FFB020;
  --bg-warning-low: #FFFAF2;
  --bg-critical: #D14343;
  --bg-critical-low: #FDF4F4;
  --bg-info: #3366FF;
  --bg-info-low: #F3F6FF;
  --fg: #313857;
  --fg-strong: #313857;
  --fg-lower: #787E9B;
  --fg-disabled: #CFD1DF;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #388065;
  --fg-warning: #835B10;
  --fg-error: #9F3333;
  --border: #F3F4F8;
  --border-low: #F6F8FB;
  --border-strong: #E7E9F1;
  --border-disabled: #F3F4F8;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAFBFF;
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
  --radius-xs: 3px;
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
  --font-family: "SF Pro Text",-apple-system,"Inter",system-ui,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 500;
  --btn-shadow: 0 1px 2px rgba(67,90,111,.14);
  --ctl-radius: 4px;
  --card-radius: 8px;
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
      primary:{50:"#F3F6FF",100:"#E7EDFF",200:"#C6D4FF",300:"#95AFFF",400:"#648BFF",500:"#3366FF",600:"#2B56D6",700:"#2345AD",800:"#1B3585",900:"#12255C",950:"#0A1433"},
      gray:{50:"#FAFBFF",100:"#F6F8FB",200:"#F3F4F8",300:"#E7E9F1",400:"#CFD1DF",500:"#8F95B2",600:"#787E9B",700:"#626884",800:"#4E546E",900:"#313857",950:"#101840"},
      success:"#52BD95", warning:"#FFB020", critical:"#D14343",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["SF Pro Text","-apple-system","Inter","system-ui","sans-serif"] },
  }}
}
```