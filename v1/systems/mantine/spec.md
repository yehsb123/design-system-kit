# Mantine — 시스템 스펙
> 만틴 공식 토큰. 열 단계짜리 색 묶음을 그대로 쓰며, 모서리와 그림자를 작게 두어 관리 화면을 빠르게 짭니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E7F5FF` | `#C7E7FF` | `#91CEFE` | `#5DB3F9` | `#389DF1` | `#228BE6` | `#1D81D9` | `#1A76CA` | `#196CB9` | `#155794` | `#082138` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F8F9FA` | `#EFF2F4` | `#E5E8EB` | `#D4DADF` | `#B4BBC3` | `#868E96` | `#616970` | `#454C52` | `#383E45` | `#2C3237` | `#212529` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EBFBEE` | `#CCF8D2` | `#A3EEAE` | `#77E188` | `#56D16A` | `#40C057` | `#39B54F` | `#32A648` | `#2D9642` | `#257635` | `#0B2510` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF9DB` | `#FFF2B7` | `#FFE785` | `#FFD94C` | `#FDC720` | `#FAB005` | `#F6A201` | `#F29400` | `#EC8400` | `#C26400` | `#321A00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF5F5` | `#FFDEDE` | `#FFBCBC` | `#FF9494` | `#FF7171` | `#FA5252` | `#F24242` | `#E63636` | `#D72E2E` | `#AE2424` | `#400D0D` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E3FAFC` | `#BCF3F8` | `#85E3EE` | `#4CCFE0` | `#27BBD1` | `#15AABF` | `#119CB1` | `#0E8DA1` | `#0C7D91` | `#096273` | `#032329` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#2C3237` |
| `--canvas` | 페이지 바닥 | `#F8F9FA` | `#212529` |
| `--fg` | 본문 글자 | `#2C3237` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#2C3237` | `#F8F9FA` |
| `--fg-lower` | 보조 설명 | `#616970` | `#B4BBC3` |
| `--fg-disabled` | 비활성 글자 | `#B4BBC3` | `#616970` |
| `--border` | 기본 경계선 | `#E5E8EB` | `#383E45` |
| `--border-strong` | 강조 경계선 | `#D4DADF` | `#616970` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#228BE6` | `#389DF1` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E7F5FF` | `#155794` |
| `--fg-primary` | 주된 색 글자 | `#1D81D9` | `#5DB3F9` |
| `--bg-success` | 완료 표시 | `#40C057` | `#40C057` |
| `--bg-warning` | 주의 표시 | `#FAB005` | `#FAB005` |
| `--bg-critical` | 위험 표시 | `#FA5252` | `#FA5252` |
| `--bg-info` | 안내 표시 | `#119CB1` | `#27BBD1` |

## 토큰 — 타이포

**글꼴:** `-apple-system,system-ui,"Segoe UI",Roboto,sans-serif`

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
| 버튼 | 4px |
| 카드 | 8px |
| 입력 | 4px |
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 18px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.5px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 12.97 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.56 : 1 | 미달 |

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

- 본문 글자: `#2C3237`
- 보조 글자: `#616970`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8F9FA`
- 경계선: `#E5E8EB`
- 주된 행동: `#228BE6`
- 글꼴: `-apple-system,system-ui,"Segoe UI",Roboto,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E7F5FF;
  --primary-100: #C7E7FF;
  --primary-200: #91CEFE;
  --primary-300: #5DB3F9;
  --primary-400: #389DF1;
  --primary-500: #228BE6;
  --primary-600: #1D81D9;
  --primary-700: #1A76CA;
  --primary-800: #196CB9;
  --primary-900: #155794;
  --primary-950: #082138;
  --gray-50: #F8F9FA;
  --gray-100: #EFF2F4;
  --gray-200: #E5E8EB;
  --gray-300: #D4DADF;
  --gray-400: #B4BBC3;
  --gray-500: #868E96;
  --gray-600: #616970;
  --gray-700: #454C52;
  --gray-800: #383E45;
  --gray-900: #2C3237;
  --gray-950: #212529;
  --success-50: #EBFBEE;
  --success-100: #CCF8D2;
  --success-200: #A3EEAE;
  --success-300: #77E188;
  --success-400: #56D16A;
  --success-500: #40C057;
  --success-600: #39B54F;
  --success-700: #32A648;
  --success-800: #2D9642;
  --success-900: #257635;
  --success-950: #0B2510;
  --warning-50: #FFF9DB;
  --warning-100: #FFF2B7;
  --warning-200: #FFE785;
  --warning-300: #FFD94C;
  --warning-400: #FDC720;
  --warning-500: #FAB005;
  --warning-600: #F6A201;
  --warning-700: #F29400;
  --warning-800: #EC8400;
  --warning-900: #C26400;
  --warning-950: #321A00;
  --error-50: #FFF5F5;
  --error-100: #FFDEDE;
  --error-200: #FFBCBC;
  --error-300: #FF9494;
  --error-400: #FF7171;
  --error-500: #FA5252;
  --error-600: #F24242;
  --error-700: #E63636;
  --error-800: #D72E2E;
  --error-900: #AE2424;
  --error-950: #400D0D;
  --info-50: #E3FAFC;
  --info-100: #BCF3F8;
  --info-200: #85E3EE;
  --info-300: #4CCFE0;
  --info-400: #27BBD1;
  --info-500: #15AABF;
  --info-600: #119CB1;
  --info-700: #0E8DA1;
  --info-800: #0C7D91;
  --info-900: #096273;
  --info-950: #032329;
  --bg-primary: #228BE6;
  --bg-primary-low: #E7F5FF;
  --fg-primary: #1D81D9;
  --fg-primary-low: #E7F5FF;
  --fg-point: #228BE6;
  --border-primary: #228BE6;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EFF2F4;
  --bg-neutral: #EFF2F4;
  --bg-neutral-low: #F8F9FA;
  --bg-neutral-lower: #F8F9FA;
  --bg-disabled: #EFF2F4;
  --bg-contrast: #2C3237;
  --bg-success: #40C057;
  --bg-success-low: #EBFBEE;
  --bg-warning: #FAB005;
  --bg-warning-low: #FFF9DB;
  --bg-critical: #FA5252;
  --bg-critical-low: #FFF5F5;
  --bg-info: #119CB1;
  --bg-info-low: #E3FAFC;
  --fg: #2C3237;
  --fg-strong: #2C3237;
  --fg-lower: #616970;
  --fg-disabled: #B4BBC3;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #32A648;
  --fg-warning: #EC8400;
  --fg-error: #E63636;
  --border: #E5E8EB;
  --border-low: #EFF2F4;
  --border-strong: #D4DADF;
  --border-disabled: #E5E8EB;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F8F9FA;
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
  --font-family: -apple-system,system-ui,"Segoe UI",Roboto,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 8px;
  --btn-padx: 18px;
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
      primary:{50:"#E7F5FF",100:"#C7E7FF",200:"#91CEFE",300:"#5DB3F9",400:"#389DF1",500:"#228BE6",600:"#1D81D9",700:"#1A76CA",800:"#196CB9",900:"#155794",950:"#082138"},
      gray:{50:"#F8F9FA",100:"#EFF2F4",200:"#E5E8EB",300:"#D4DADF",400:"#B4BBC3",500:"#868E96",600:"#616970",700:"#454C52",800:"#383E45",900:"#2C3237",950:"#212529"},
      success:"#40C057", warning:"#FAB005", critical:"#FA5252",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["-apple-system","system-ui","Segoe UI","Roboto","sans-serif"] },
  }}
}
```