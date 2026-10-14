# Workday Canvas — 시스템 스펙
> 워크데이 캔버스 공식 토큰. 버튼만 완전한 알약으로 두고 카드와 입력은 4px로 낮게 깎아, 인사·급여 업무 화면에서 누를 곳을 또렷하게 구분합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · 웹 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EBF5FE` | `#DBECFC` | `#BADCFE` | `#7DBEFF` | `#3597F9` | `#0875E1` | `#0366C9` | `#0057AF` | `#004891` | `#00356B` | `#002040` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6F7F8` | `#EAECEE` | `#D5D9DE` | `#AFB7BF` | `#75808A` | `#4A5561` | `#414B57` | `#38424C` | `#2F3842` | `#272F38` | `#1F262E` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EBFFF0` | `#C5F9D2` | `#9DF1B2` | `#6EE78C` | `#54D774` | `#43C463` | `#38AC55` | `#2E9548` | `#24813B` | `#185828` | `#0A2511` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEED9` | `#FDDEB6` | `#FDCF93` | `#FEC16F` | `#FFB14B` | `#FFA126` | `#F8940F` | `#E98500` | `#CA7200` | `#864C00` | `#301B00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEFEE` | `#FDD8D5` | `#FDBCB7` | `#FE938B` | `#FF7267` | `#FF5347` | `#EB3D30` | `#D22A1E` | `#AF1F15` | `#7C150E` | `#420B07` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#D7F1FC` | `#B2E7FE` | `#87D7FA` | `#52BDEA` | `#30A7DA` | `#1894C9` | `#0B7FB1` | `#026D9B` | `#005F88` | `#004462` | `#002331` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#272F38` |
| `--canvas` | 페이지 바닥 | `#F6F7F8` | `#1F262E` |
| `--fg` | 본문 글자 | `#272F38` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#272F38` | `#F6F7F8` |
| `--fg-lower` | 보조 설명 | `#414B57` | `#75808A` |
| `--fg-disabled` | 비활성 글자 | `#75808A` | `#414B57` |
| `--border` | 기본 경계선 | `#D5D9DE` | `#2F3842` |
| `--border-strong` | 강조 경계선 | `#AFB7BF` | `#414B57` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0875E1` | `#3597F9` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EBF5FE` | `#00356B` |
| `--fg-primary` | 주된 색 글자 | `#0366C9` | `#7DBEFF` |
| `--bg-success` | 완료 표시 | `#43C463` | `#43C463` |
| `--bg-warning` | 주의 표시 | `#FFA126` | `#FFA126` |
| `--bg-critical` | 위험 표시 | `#FF5347` | `#FF5347` |
| `--bg-info` | 안내 표시 | `#0B7FB1` | `#30A7DA` |

## 토큰 — 타이포

**글꼴:** `"Roboto","Noto Sans",-apple-system,system-ui,sans-serif`

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
| 카드 | 4px |
| 입력 | 4px |
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 24px |
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
| 본문 대 바탕 | 13.55 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.52 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 999px, 카드 4px, 입력 4px 으로 고정합니다
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

- 본문 글자: `#272F38`
- 보조 글자: `#414B57`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F6F7F8`
- 경계선: `#D5D9DE`
- 주된 행동: `#0875E1`
- 글꼴: `"Roboto","Noto Sans",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EBF5FE;
  --primary-100: #DBECFC;
  --primary-200: #BADCFE;
  --primary-300: #7DBEFF;
  --primary-400: #3597F9;
  --primary-500: #0875E1;
  --primary-600: #0366C9;
  --primary-700: #0057AF;
  --primary-800: #004891;
  --primary-900: #00356B;
  --primary-950: #002040;
  --gray-50: #F6F7F8;
  --gray-100: #EAECEE;
  --gray-200: #D5D9DE;
  --gray-300: #AFB7BF;
  --gray-400: #75808A;
  --gray-500: #4A5561;
  --gray-600: #414B57;
  --gray-700: #38424C;
  --gray-800: #2F3842;
  --gray-900: #272F38;
  --gray-950: #1F262E;
  --success-50: #EBFFF0;
  --success-100: #C5F9D2;
  --success-200: #9DF1B2;
  --success-300: #6EE78C;
  --success-400: #54D774;
  --success-500: #43C463;
  --success-600: #38AC55;
  --success-700: #2E9548;
  --success-800: #24813B;
  --success-900: #185828;
  --success-950: #0A2511;
  --warning-50: #FFEED9;
  --warning-100: #FDDEB6;
  --warning-200: #FDCF93;
  --warning-300: #FEC16F;
  --warning-400: #FFB14B;
  --warning-500: #FFA126;
  --warning-600: #F8940F;
  --warning-700: #E98500;
  --warning-800: #CA7200;
  --warning-900: #864C00;
  --warning-950: #301B00;
  --error-50: #FFEFEE;
  --error-100: #FDD8D5;
  --error-200: #FDBCB7;
  --error-300: #FE938B;
  --error-400: #FF7267;
  --error-500: #FF5347;
  --error-600: #EB3D30;
  --error-700: #D22A1E;
  --error-800: #AF1F15;
  --error-900: #7C150E;
  --error-950: #420B07;
  --info-50: #D7F1FC;
  --info-100: #B2E7FE;
  --info-200: #87D7FA;
  --info-300: #52BDEA;
  --info-400: #30A7DA;
  --info-500: #1894C9;
  --info-600: #0B7FB1;
  --info-700: #026D9B;
  --info-800: #005F88;
  --info-900: #004462;
  --info-950: #002331;
  --bg-primary: #0875E1;
  --bg-primary-low: #EBF5FE;
  --fg-primary: #0366C9;
  --fg-primary-low: #EBF5FE;
  --fg-point: #0875E1;
  --border-primary: #0875E1;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EAECEE;
  --bg-neutral: #EAECEE;
  --bg-neutral-low: #F6F7F8;
  --bg-neutral-lower: #F6F7F8;
  --bg-disabled: #EAECEE;
  --bg-contrast: #272F38;
  --bg-success: #43C463;
  --bg-success-low: #EBFFF0;
  --bg-warning: #FFA126;
  --bg-warning-low: #FFEED9;
  --bg-critical: #FF5347;
  --bg-critical-low: #FFEFEE;
  --bg-info: #0B7FB1;
  --bg-info-low: #D7F1FC;
  --fg: #272F38;
  --fg-strong: #272F38;
  --fg-lower: #414B57;
  --fg-disabled: #75808A;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #2E9548;
  --fg-warning: #CA7200;
  --fg-error: #D22A1E;
  --border: #D5D9DE;
  --border-low: #EAECEE;
  --border-strong: #AFB7BF;
  --border-disabled: #D5D9DE;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F6F7F8;
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
  --font-family: "Roboto","Noto Sans",-apple-system,system-ui,sans-serif;
  --btn-radius: 999px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 4px;
  --btn-padx: 24px;
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
      primary:{50:"#EBF5FE",100:"#DBECFC",200:"#BADCFE",300:"#7DBEFF",400:"#3597F9",500:"#0875E1",600:"#0366C9",700:"#0057AF",800:"#004891",900:"#00356B",950:"#002040"},
      gray:{50:"#F6F7F8",100:"#EAECEE",200:"#D5D9DE",300:"#AFB7BF",400:"#75808A",500:"#4A5561",600:"#414B57",700:"#38424C",800:"#2F3842",900:"#272F38",950:"#1F262E"},
      success:"#43C463", warning:"#FFA126", critical:"#FF5347",
    },
    borderRadius:{ btn:"999px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Roboto","Noto Sans","-apple-system","system-ui","sans-serif"] },
  }}
}
```