# Pinterest Gestalt — 시스템 스펙
> 핀터레스트 공식 토큰. 완전히 둥근 빨강 버튼 하나로 화면을 끌고 가고, 나머지는 흰 바탕과 검정 글씨로 비웁니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 소셜  ·  **프레임워크:** React · 웹 · iOS · Android

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF7F7` | `#FFE9E9` | `#FED1D1` | `#F78F8F` | `#ED4B4B` | `#E60023` | `#CC0000` | `#B60000` | `#9B0000` | `#800000` | `#660000` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F9F9F9` | `#F1F1F1` | `#E9E9E9` | `#CDCDCD` | `#A5A5A5` | `#767676` | `#646464` | `#525252` | `#3E3E3E` | `#272727` | `#191919` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6FDF5` | `#DDFADB` | `#B7F9B9` | `#82F199` | `#43D87B` | `#1DAD65` | `#008753` | `#005F3E` | `#00422C` | `#003020` | `#00261A` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF6EB` | `#FFEED6` | `#FFD8AD` | `#FEAF73` | `#F88240` | `#FF5B45` | `#DE3700` | `#C32F00` | `#A42700` | `#842000` | `#660E00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF7F7` | `#FFE7E7` | `#FDC2C2` | `#F26868` | `#E81A2F` | `#CC0000` | `#BA0000` | `#A60000` | `#900000` | `#7B0000` | `#660000` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7FBFF` | `#E3F3FF` | `#C5E6FF` | `#8BCAFF` | `#4FA9FE` | `#007CFF` | `#0074E8` | `#005FCB` | `#004BA9` | `#003C96` | `#002966` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#272727` |
| `--canvas` | 페이지 바닥 | `#F9F9F9` | `#191919` |
| `--fg` | 본문 글자 | `#272727` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#272727` | `#F9F9F9` |
| `--fg-lower` | 보조 설명 | `#646464` | `#A5A5A5` |
| `--fg-disabled` | 비활성 글자 | `#A5A5A5` | `#646464` |
| `--border` | 기본 경계선 | `#E9E9E9` | `#3E3E3E` |
| `--border-strong` | 강조 경계선 | `#CDCDCD` | `#646464` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#E60023` | `#ED4B4B` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FFF7F7` | `#800000` |
| `--fg-primary` | 주된 색 글자 | `#CC0000` | `#F78F8F` |
| `--bg-success` | 완료 표시 | `#1DAD65` | `#1DAD65` |
| `--bg-warning` | 주의 표시 | `#FF5B45` | `#FF5B45` |
| `--bg-critical` | 위험 표시 | `#CC0000` | `#CC0000` |
| `--bg-info` | 안내 표시 | `#0074E8` | `#4FA9FE` |

## 토큰 — 타이포

**글꼴:** `"Helvetica Neue","Pretendard",-apple-system,system-ui,sans-serif`

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
| 카드 | 16px |
| 입력 | 8px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 20px |
| 버튼 글자 굵기 | 700 |
| 버튼 그림자 | 쓰지 않음 |
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
| 본문 대 바탕 | 14.94 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.78 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 999px, 카드 16px, 입력 8px 으로 고정합니다
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

- 본문 글자: `#272727`
- 보조 글자: `#646464`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F9F9F9`
- 경계선: `#E9E9E9`
- 주된 행동: `#E60023`
- 글꼴: `"Helvetica Neue","Pretendard",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FFF7F7;
  --primary-100: #FFE9E9;
  --primary-200: #FED1D1;
  --primary-300: #F78F8F;
  --primary-400: #ED4B4B;
  --primary-500: #E60023;
  --primary-600: #CC0000;
  --primary-700: #B60000;
  --primary-800: #9B0000;
  --primary-900: #800000;
  --primary-950: #660000;
  --gray-50: #F9F9F9;
  --gray-100: #F1F1F1;
  --gray-200: #E9E9E9;
  --gray-300: #CDCDCD;
  --gray-400: #A5A5A5;
  --gray-500: #767676;
  --gray-600: #646464;
  --gray-700: #525252;
  --gray-800: #3E3E3E;
  --gray-900: #272727;
  --gray-950: #191919;
  --success-50: #F6FDF5;
  --success-100: #DDFADB;
  --success-200: #B7F9B9;
  --success-300: #82F199;
  --success-400: #43D87B;
  --success-500: #1DAD65;
  --success-600: #008753;
  --success-700: #005F3E;
  --success-800: #00422C;
  --success-900: #003020;
  --success-950: #00261A;
  --warning-50: #FFF6EB;
  --warning-100: #FFEED6;
  --warning-200: #FFD8AD;
  --warning-300: #FEAF73;
  --warning-400: #F88240;
  --warning-500: #FF5B45;
  --warning-600: #DE3700;
  --warning-700: #C32F00;
  --warning-800: #A42700;
  --warning-900: #842000;
  --warning-950: #660E00;
  --error-50: #FFF7F7;
  --error-100: #FFE7E7;
  --error-200: #FDC2C2;
  --error-300: #F26868;
  --error-400: #E81A2F;
  --error-500: #CC0000;
  --error-600: #BA0000;
  --error-700: #A60000;
  --error-800: #900000;
  --error-900: #7B0000;
  --error-950: #660000;
  --info-50: #F7FBFF;
  --info-100: #E3F3FF;
  --info-200: #C5E6FF;
  --info-300: #8BCAFF;
  --info-400: #4FA9FE;
  --info-500: #007CFF;
  --info-600: #0074E8;
  --info-700: #005FCB;
  --info-800: #004BA9;
  --info-900: #003C96;
  --info-950: #002966;
  --bg-primary: #E60023;
  --bg-primary-low: #FFF7F7;
  --fg-primary: #CC0000;
  --fg-primary-low: #FFF7F7;
  --fg-point: #E60023;
  --border-primary: #E60023;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1F1F1;
  --bg-neutral: #F1F1F1;
  --bg-neutral-low: #F9F9F9;
  --bg-neutral-lower: #F9F9F9;
  --bg-disabled: #F1F1F1;
  --bg-contrast: #272727;
  --bg-success: #1DAD65;
  --bg-success-low: #F6FDF5;
  --bg-warning: #FF5B45;
  --bg-warning-low: #FFF6EB;
  --bg-critical: #CC0000;
  --bg-critical-low: #FFF7F7;
  --bg-info: #0074E8;
  --bg-info-low: #F7FBFF;
  --fg: #272727;
  --fg-strong: #272727;
  --fg-lower: #646464;
  --fg-disabled: #A5A5A5;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #005F3E;
  --fg-warning: #A42700;
  --fg-error: #A60000;
  --border: #E9E9E9;
  --border-low: #F1F1F1;
  --border-strong: #CDCDCD;
  --border-disabled: #E9E9E9;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F9F9F9;
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
  --font-family: "Helvetica Neue","Pretendard",-apple-system,system-ui,sans-serif;
  --btn-radius: 999px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 8px;
  --card-radius: 16px;
  --btn-padx: 20px;
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
      primary:{50:"#FFF7F7",100:"#FFE9E9",200:"#FED1D1",300:"#F78F8F",400:"#ED4B4B",500:"#E60023",600:"#CC0000",700:"#B60000",800:"#9B0000",900:"#800000",950:"#660000"},
      gray:{50:"#F9F9F9",100:"#F1F1F1",200:"#E9E9E9",300:"#CDCDCD",400:"#A5A5A5",500:"#767676",600:"#646464",700:"#525252",800:"#3E3E3E",900:"#272727",950:"#191919"},
      success:"#1DAD65", warning:"#FF5B45", critical:"#CC0000",
    },
    borderRadius:{ btn:"999px", card:"16px", input:"8px" },
    fontFamily:{ sans:["Helvetica Neue","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}
```