# Microsoft Fluent 2 — 시스템 스펙
> 마이크로소프트 플루언트 2 공식 토큰. 회색을 2씩 쉰 단계로 쪼개 쓰는 체계로, 창이 겹치는 업무용 화면의 층을 구분합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · 웹 컴포넌트 · WinUI

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F3F9FD` | `#C8E3F7` | `#8AC3ED` | `#459DE1` | `#1F89DA` | `#0078D4` | `#006CBF` | `#005BA1` | `#004377` | `#002440` | `#001322` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FCFCFC` | `#E6E6E6` | `#CCCCCC` | `#B3B3B3` | `#999999` | `#808080` | `#676767` | `#4F4F4F` | `#363636` | `#1E1E1E` | `#050505` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F1FAF1` | `#C1E6C1` | `#81C881` | `#41A341` | `#258F25` | `#107C10` | `#0E700E` | `#0C5E0C` | `#094509` | `#052505` | `#031403` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEFBF4` | `#FBECCC` | `#F6D78F` | `#F0BE49` | `#EDAF22` | `#EAA300` | `#D39300` | `#B27C00` | `#835B00` | `#463100` | `#251A00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDF6F6` | `#F7D4D5` | `#EBA2A4` | `#DF6A6E` | `#D84D50` | `#D13438` | `#BC2F32` | `#9F282B` | `#751D1F` | `#3F1011` | `#210809` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2FAFC` | `#C5EAF2` | `#85D2E3` | `#40B5D0` | `#1DA6C6` | `#0099BC` | `#008AA9` | `#00748F` | `#005669` | `#002E38` | `#00181E` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1E1E1E` |
| `--canvas` | 페이지 바닥 | `#FCFCFC` | `#050505` |
| `--fg` | 본문 글자 | `#1E1E1E` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1E1E1E` | `#FCFCFC` |
| `--fg-lower` | 보조 설명 | `#676767` | `#999999` |
| `--fg-disabled` | 비활성 글자 | `#999999` | `#676767` |
| `--border` | 기본 경계선 | `#CCCCCC` | `#363636` |
| `--border-strong` | 강조 경계선 | `#B3B3B3` | `#676767` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0078D4` | `#1F89DA` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F3F9FD` | `#002440` |
| `--fg-primary` | 주된 색 글자 | `#006CBF` | `#459DE1` |
| `--bg-success` | 완료 표시 | `#107C10` | `#107C10` |
| `--bg-warning` | 주의 표시 | `#EAA300` | `#EAA300` |
| `--bg-critical` | 위험 표시 | `#D13438` | `#D13438` |
| `--bg-info` | 안내 표시 | `#008AA9` | `#1DA6C6` |

## 토큰 — 타이포

**글꼴:** `"Segoe UI Variable","Segoe UI",system-ui,-apple-system,sans-serif`

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
| 버튼 좌우 안쪽 여백 | 16px |
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
| 본문 대 바탕 | 16.67 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.53 : 1 | 통과 |

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

- 본문 글자: `#1E1E1E`
- 보조 글자: `#676767`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FCFCFC`
- 경계선: `#CCCCCC`
- 주된 행동: `#0078D4`
- 글꼴: `"Segoe UI Variable","Segoe UI",system-ui,-apple-system,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F3F9FD;
  --primary-100: #C8E3F7;
  --primary-200: #8AC3ED;
  --primary-300: #459DE1;
  --primary-400: #1F89DA;
  --primary-500: #0078D4;
  --primary-600: #006CBF;
  --primary-700: #005BA1;
  --primary-800: #004377;
  --primary-900: #002440;
  --primary-950: #001322;
  --gray-50: #FCFCFC;
  --gray-100: #E6E6E6;
  --gray-200: #CCCCCC;
  --gray-300: #B3B3B3;
  --gray-400: #999999;
  --gray-500: #808080;
  --gray-600: #676767;
  --gray-700: #4F4F4F;
  --gray-800: #363636;
  --gray-900: #1E1E1E;
  --gray-950: #050505;
  --success-50: #F1FAF1;
  --success-100: #C1E6C1;
  --success-200: #81C881;
  --success-300: #41A341;
  --success-400: #258F25;
  --success-500: #107C10;
  --success-600: #0E700E;
  --success-700: #0C5E0C;
  --success-800: #094509;
  --success-900: #052505;
  --success-950: #031403;
  --warning-50: #FEFBF4;
  --warning-100: #FBECCC;
  --warning-200: #F6D78F;
  --warning-300: #F0BE49;
  --warning-400: #EDAF22;
  --warning-500: #EAA300;
  --warning-600: #D39300;
  --warning-700: #B27C00;
  --warning-800: #835B00;
  --warning-900: #463100;
  --warning-950: #251A00;
  --error-50: #FDF6F6;
  --error-100: #F7D4D5;
  --error-200: #EBA2A4;
  --error-300: #DF6A6E;
  --error-400: #D84D50;
  --error-500: #D13438;
  --error-600: #BC2F32;
  --error-700: #9F282B;
  --error-800: #751D1F;
  --error-900: #3F1011;
  --error-950: #210809;
  --info-50: #F2FAFC;
  --info-100: #C5EAF2;
  --info-200: #85D2E3;
  --info-300: #40B5D0;
  --info-400: #1DA6C6;
  --info-500: #0099BC;
  --info-600: #008AA9;
  --info-700: #00748F;
  --info-800: #005669;
  --info-900: #002E38;
  --info-950: #00181E;
  --bg-primary: #0078D4;
  --bg-primary-low: #F3F9FD;
  --fg-primary: #006CBF;
  --fg-primary-low: #F3F9FD;
  --fg-point: #0078D4;
  --border-primary: #0078D4;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E6E6E6;
  --bg-neutral: #E6E6E6;
  --bg-neutral-low: #FCFCFC;
  --bg-neutral-lower: #FCFCFC;
  --bg-disabled: #E6E6E6;
  --bg-contrast: #1E1E1E;
  --bg-success: #107C10;
  --bg-success-low: #F1FAF1;
  --bg-warning: #EAA300;
  --bg-warning-low: #FEFBF4;
  --bg-critical: #D13438;
  --bg-critical-low: #FDF6F6;
  --bg-info: #008AA9;
  --bg-info-low: #F2FAFC;
  --fg: #1E1E1E;
  --fg-strong: #1E1E1E;
  --fg-lower: #676767;
  --fg-disabled: #999999;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #0C5E0C;
  --fg-warning: #835B00;
  --fg-error: #9F282B;
  --border: #CCCCCC;
  --border-low: #E6E6E6;
  --border-strong: #B3B3B3;
  --border-disabled: #CCCCCC;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FCFCFC;
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
  --radius-md: 6px;
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
  --font-family: "Segoe UI Variable","Segoe UI",system-ui,-apple-system,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 600;
  --btn-shadow: none;
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
      primary:{50:"#F3F9FD",100:"#C8E3F7",200:"#8AC3ED",300:"#459DE1",400:"#1F89DA",500:"#0078D4",600:"#006CBF",700:"#005BA1",800:"#004377",900:"#002440",950:"#001322"},
      gray:{50:"#FCFCFC",100:"#E6E6E6",200:"#CCCCCC",300:"#B3B3B3",400:"#999999",500:"#808080",600:"#676767",700:"#4F4F4F",800:"#363636",900:"#1E1E1E",950:"#050505"},
      success:"#107C10", warning:"#EAA300", critical:"#D13438",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["Segoe UI Variable","Segoe UI","system-ui","-apple-system","sans-serif"] },
  }}
}
```