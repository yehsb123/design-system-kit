# Bootstrap — 시스템 스펙
> 부트스트랩 5 기본 변수. 기준색 하나에서 밝은 쪽 네 단계와 어두운 쪽 네 단계를 같은 비율로 떠서 만드는 가장 익숙한 체계입니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** CSS · Sass · 바닐라 JS

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF4FF` | `#CFE2FF` | `#9EC5FE` | `#6EA8FE` | `#3D8BFD` | `#0D6EFD` | `#0B5CD4` | `#094BAC` | `#073984` | `#05285B` | `#031633` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F8F9FA` | `#E9ECEF` | `#DEE2E6` | `#CED4DA` | `#ADB5BD` | `#6C757D` | `#575F66` | `#454C52` | `#383E45` | `#2C3237` | `#212529` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF6F2` | `#D1E7DD` | `#A3CFBB` | `#75B798` | `#479F76` | `#198754` | `#157146` | `#115C39` | `#0D462C` | `#09311F` | `#051B11` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3CD` | `#FFE9A6` | `#FFDF7E` | `#FFD556` | `#FFCB2F` | `#FFC107` | `#D6A206` | `#AD8305` | `#856404` | `#5C4503` | `#332701` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDF1F2` | `#F8D7DA` | `#F1AEB5` | `#EA868F` | `#E35D6A` | `#DC3545` | `#B92C3A` | `#96242F` | `#721C24` | `#4F1319` | `#2C0B0E` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#CFF4FC` | `#A8ECFA` | `#81E3F7` | `#5ADBF5` | `#33D3F2` | `#0DCAF0` | `#0BAACA` | `#0989A3` | `#07697D` | `#054956` | `#032830` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#2C3237` |
| `--canvas` | 페이지 바닥 | `#F8F9FA` | `#212529` |
| `--fg` | 본문 글자 | `#2C3237` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#2C3237` | `#F8F9FA` |
| `--fg-lower` | 보조 설명 | `#575F66` | `#ADB5BD` |
| `--fg-disabled` | 비활성 글자 | `#ADB5BD` | `#575F66` |
| `--border` | 기본 경계선 | `#DEE2E6` | `#383E45` |
| `--border-strong` | 강조 경계선 | `#CED4DA` | `#575F66` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0D6EFD` | `#3D8BFD` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EDF4FF` | `#05285B` |
| `--fg-primary` | 주된 색 글자 | `#0B5CD4` | `#6EA8FE` |
| `--bg-success` | 완료 표시 | `#198754` | `#198754` |
| `--bg-warning` | 주의 표시 | `#FFC107` | `#FFC107` |
| `--bg-critical` | 위험 표시 | `#DC3545` | `#DC3545` |
| `--bg-info` | 안내 표시 | `#0BAACA` | `#33D3F2` |

## 토큰 — 타이포

**글꼴:** `system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`

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
| 버튼 | 6px |
| 카드 | 8px |
| 입력 | 6px |
| 태그 | 6px |
| 작은 조작부 | 6px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 12px |
| 버튼 글자 굵기 | 400 |
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
| 흰글씨 대 주된 색 | 4.50 : 1 | 통과 |

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

- 본문 글자: `#2C3237`
- 보조 글자: `#575F66`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8F9FA`
- 경계선: `#DEE2E6`
- 주된 행동: `#0D6EFD`
- 글꼴: `system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EDF4FF;
  --primary-100: #CFE2FF;
  --primary-200: #9EC5FE;
  --primary-300: #6EA8FE;
  --primary-400: #3D8BFD;
  --primary-500: #0D6EFD;
  --primary-600: #0B5CD4;
  --primary-700: #094BAC;
  --primary-800: #073984;
  --primary-900: #05285B;
  --primary-950: #031633;
  --gray-50: #F8F9FA;
  --gray-100: #E9ECEF;
  --gray-200: #DEE2E6;
  --gray-300: #CED4DA;
  --gray-400: #ADB5BD;
  --gray-500: #6C757D;
  --gray-600: #575F66;
  --gray-700: #454C52;
  --gray-800: #383E45;
  --gray-900: #2C3237;
  --gray-950: #212529;
  --success-50: #EDF6F2;
  --success-100: #D1E7DD;
  --success-200: #A3CFBB;
  --success-300: #75B798;
  --success-400: #479F76;
  --success-500: #198754;
  --success-600: #157146;
  --success-700: #115C39;
  --success-800: #0D462C;
  --success-900: #09311F;
  --success-950: #051B11;
  --warning-50: #FFF3CD;
  --warning-100: #FFE9A6;
  --warning-200: #FFDF7E;
  --warning-300: #FFD556;
  --warning-400: #FFCB2F;
  --warning-500: #FFC107;
  --warning-600: #D6A206;
  --warning-700: #AD8305;
  --warning-800: #856404;
  --warning-900: #5C4503;
  --warning-950: #332701;
  --error-50: #FDF1F2;
  --error-100: #F8D7DA;
  --error-200: #F1AEB5;
  --error-300: #EA868F;
  --error-400: #E35D6A;
  --error-500: #DC3545;
  --error-600: #B92C3A;
  --error-700: #96242F;
  --error-800: #721C24;
  --error-900: #4F1319;
  --error-950: #2C0B0E;
  --info-50: #CFF4FC;
  --info-100: #A8ECFA;
  --info-200: #81E3F7;
  --info-300: #5ADBF5;
  --info-400: #33D3F2;
  --info-500: #0DCAF0;
  --info-600: #0BAACA;
  --info-700: #0989A3;
  --info-800: #07697D;
  --info-900: #054956;
  --info-950: #032830;
  --bg-primary: #0D6EFD;
  --bg-primary-low: #EDF4FF;
  --fg-primary: #0B5CD4;
  --fg-primary-low: #EDF4FF;
  --fg-point: #0D6EFD;
  --border-primary: #0D6EFD;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E9ECEF;
  --bg-neutral: #E9ECEF;
  --bg-neutral-low: #F8F9FA;
  --bg-neutral-lower: #F8F9FA;
  --bg-disabled: #E9ECEF;
  --bg-contrast: #2C3237;
  --bg-success: #198754;
  --bg-success-low: #EDF6F2;
  --bg-warning: #FFC107;
  --bg-warning-low: #FFF3CD;
  --bg-critical: #DC3545;
  --bg-critical-low: #FDF1F2;
  --bg-info: #0BAACA;
  --bg-info-low: #CFF4FC;
  --fg: #2C3237;
  --fg-strong: #2C3237;
  --fg-lower: #575F66;
  --fg-disabled: #ADB5BD;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #115C39;
  --fg-warning: #856404;
  --fg-error: #96242F;
  --border: #DEE2E6;
  --border-low: #E9ECEF;
  --border-strong: #CED4DA;
  --border-disabled: #DEE2E6;
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
  --radius-xs: 4px;
  --radius-sm: 6px;
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
  --font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 400;
  --btn-shadow: none;
  --ctl-radius: 6px;
  --card-radius: 8px;
  --btn-padx: 12px;
  --in-radius: 6px;
  --tag-radius: 6px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF4FF",100:"#CFE2FF",200:"#9EC5FE",300:"#6EA8FE",400:"#3D8BFD",500:"#0D6EFD",600:"#0B5CD4",700:"#094BAC",800:"#073984",900:"#05285B",950:"#031633"},
      gray:{50:"#F8F9FA",100:"#E9ECEF",200:"#DEE2E6",300:"#CED4DA",400:"#ADB5BD",500:"#6C757D",600:"#575F66",700:"#454C52",800:"#383E45",900:"#2C3237",950:"#212529"},
      success:"#198754", warning:"#FFC107", critical:"#DC3545",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["system-ui","-apple-system","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif"] },
  }}
}
```