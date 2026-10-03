# Shopify Polaris — 시스템 스펙
> 쇼피파이 커머스 어드민 시스템. 그린 브랜드(#008060)와 잉크 계열 중립색이 특징.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 커머스  ·  **프레임워크:** React

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6F4F0` | `#C1E5DB` | `#8CCBB8` | `#56B195` | `#2E9A79` | `#008060` | `#006C51` | `#005541` | `#003E30` | `#00291F` | `#001510` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFBFB` | `#F1F2F4` | `#E3E5E7` | `#C9CCD0` | `#AEB4B9` | `#8A8F94` | `#6D7175` | `#4A4E52` | `#303030` | `#1A1C1D` | `#0B0C0D` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E7F4EC` | `#C3E6D0` | `#8FD0AC` | `#5CBB85` | `#3FA56F` | `#29845A` | `#1F6B48` | `#155037` | `#0D3524` | `#061B12` | `#030D09` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8EB` | `#FDEBC8` | `#FBD990` | `#F8C051` | `#F1A417` | `#C77E0A` | `#9E6208` | `#764806` | `#4F3004` | `#2A1A02` | `#150D01` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDEDEA` | `#FBD3CB` | `#F5A695` | `#EE7A5F` | `#E45333` | `#D72C0D` | `#B3240B` | `#8A1B08` | `#5E1206` | `#330A03` | `#1A0501` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF1FB` | `#CBDDF5` | `#9CBEEC` | `#6D9EE2` | `#4A85D8` | `#2C6ECB` | `#2359A6` | `#1B437E` | `#122C54` | `#09162A` | `#050B15` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A1C1D` |
| `--canvas` | 페이지 바닥 | `#FAFBFB` | `#0B0C0D` |
| `--fg` | 본문 글자 | `#1A1C1D` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A1C1D` | `#FAFBFB` |
| `--fg-lower` | 보조 설명 | `#6D7175` | `#AEB4B9` |
| `--fg-disabled` | 비활성 글자 | `#AEB4B9` | `#6D7175` |
| `--border` | 기본 경계선 | `#E3E5E7` | `#303030` |
| `--border-strong` | 강조 경계선 | `#C9CCD0` | `#6D7175` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#008060` | `#2E9A79` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E6F4F0` | `#00291F` |
| `--fg-primary` | 주된 색 글자 | `#006C51` | `#56B195` |
| `--bg-success` | 완료 표시 | `#29845A` | `#29845A` |
| `--bg-warning` | 주의 표시 | `#C77E0A` | `#C77E0A` |
| `--bg-critical` | 위험 표시 | `#D72C0D` | `#D72C0D` |
| `--bg-info` | 안내 표시 | `#2359A6` | `#4A85D8` |

## 토큰 — 타이포

**글꼴:** `"Inter",-apple-system,system-ui,sans-serif`

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
| 버튼 | 8px |
| 카드 | 12px |
| 입력 | 8px |
| 태그 | 999px |
| 작은 조작부 | 6px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 14px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | `0 1px 0 rgba(0,0,0,.12)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.8px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.10 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.93 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 8px, 카드 12px, 입력 8px 으로 고정합니다
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

- 본문 글자: `#1A1C1D`
- 보조 글자: `#6D7175`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAFBFB`
- 경계선: `#E3E5E7`
- 주된 행동: `#008060`
- 글꼴: `"Inter",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E6F4F0;
  --primary-100: #C1E5DB;
  --primary-200: #8CCBB8;
  --primary-300: #56B195;
  --primary-400: #2E9A79;
  --primary-500: #008060;
  --primary-600: #006C51;
  --primary-700: #005541;
  --primary-800: #003E30;
  --primary-900: #00291F;
  --primary-950: #001510;
  --gray-50: #FAFBFB;
  --gray-100: #F1F2F4;
  --gray-200: #E3E5E7;
  --gray-300: #C9CCD0;
  --gray-400: #AEB4B9;
  --gray-500: #8A8F94;
  --gray-600: #6D7175;
  --gray-700: #4A4E52;
  --gray-800: #303030;
  --gray-900: #1A1C1D;
  --gray-950: #0B0C0D;
  --success-50: #E7F4EC;
  --success-100: #C3E6D0;
  --success-200: #8FD0AC;
  --success-300: #5CBB85;
  --success-400: #3FA56F;
  --success-500: #29845A;
  --success-600: #1F6B48;
  --success-700: #155037;
  --success-800: #0D3524;
  --success-900: #061B12;
  --success-950: #030D09;
  --warning-50: #FFF8EB;
  --warning-100: #FDEBC8;
  --warning-200: #FBD990;
  --warning-300: #F8C051;
  --warning-400: #F1A417;
  --warning-500: #C77E0A;
  --warning-600: #9E6208;
  --warning-700: #764806;
  --warning-800: #4F3004;
  --warning-900: #2A1A02;
  --warning-950: #150D01;
  --error-50: #FDEDEA;
  --error-100: #FBD3CB;
  --error-200: #F5A695;
  --error-300: #EE7A5F;
  --error-400: #E45333;
  --error-500: #D72C0D;
  --error-600: #B3240B;
  --error-700: #8A1B08;
  --error-800: #5E1206;
  --error-900: #330A03;
  --error-950: #1A0501;
  --info-50: #EAF1FB;
  --info-100: #CBDDF5;
  --info-200: #9CBEEC;
  --info-300: #6D9EE2;
  --info-400: #4A85D8;
  --info-500: #2C6ECB;
  --info-600: #2359A6;
  --info-700: #1B437E;
  --info-800: #122C54;
  --info-900: #09162A;
  --info-950: #050B15;
  --bg-primary: #008060;
  --bg-primary-low: #E6F4F0;
  --fg-primary: #006C51;
  --fg-primary-low: #E6F4F0;
  --fg-point: #29845A;
  --border-primary: #008060;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1F2F4;
  --bg-neutral: #F1F2F4;
  --bg-neutral-low: #FAFBFB;
  --bg-neutral-lower: #FAFBFB;
  --bg-disabled: #F1F2F4;
  --bg-contrast: #1A1C1D;
  --bg-success: #29845A;
  --bg-success-low: #E7F4EC;
  --bg-warning: #C77E0A;
  --bg-warning-low: #FFF8EB;
  --bg-critical: #D72C0D;
  --bg-critical-low: #FDEDEA;
  --bg-info: #2359A6;
  --bg-info-low: #EAF1FB;
  --fg: #1A1C1D;
  --fg-strong: #1A1C1D;
  --fg-lower: #6D7175;
  --fg-disabled: #AEB4B9;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #155037;
  --fg-warning: #4F3004;
  --fg-error: #8A1B08;
  --border: #E3E5E7;
  --border-low: #F1F2F4;
  --border-strong: #C9CCD0;
  --border-disabled: #E3E5E7;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAFBFB;
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
  --font-family: "Inter",-apple-system,system-ui,sans-serif;
  --btn-radius: 8px;
  --btn-weight: 600;
  --btn-shadow: 0 1px 0 rgba(0,0,0,.12);
  --ctl-radius: 6px;
  --card-radius: 12px;
  --btn-padx: 14px;
  --in-radius: 8px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E6F4F0",100:"#C1E5DB",200:"#8CCBB8",300:"#56B195",400:"#2E9A79",500:"#008060",600:"#006C51",700:"#005541",800:"#003E30",900:"#00291F",950:"#001510"},
      gray:{50:"#FAFBFB",100:"#F1F2F4",200:"#E3E5E7",300:"#C9CCD0",400:"#AEB4B9",500:"#8A8F94",600:"#6D7175",700:"#4A4E52",800:"#303030",900:"#1A1C1D",950:"#0B0C0D"},
      success:"#29845A", warning:"#C77E0A", critical:"#D72C0D",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Inter","-apple-system","system-ui","sans-serif"] },
  }}
}
```