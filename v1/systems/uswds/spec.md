# USWDS — 시스템 스펙
> 미국 정부 표준 디자인 시스템. 색 단계마다 흰 바탕 대비 비율을 미리 재어 두고 번호를 붙인 체계라, 접근성 기준을 숫자로 맞출 수 있습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 공공  ·  **프레임워크:** CSS · Sass · 바닐라 JS

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F5FF` | `#C6E4FF` | `#84C7FF` | `#399FFF` | `#077BDE` | `#005EA2` | `#045591` | `#094C80` | `#0C4270` | `#0F395F` | `#112F4E` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBFCFD` | `#F5F6F7` | `#EDEFF0` | `#C6CACE` | `#8D9297` | `#565C65` | `#474E59` | `#3A404A` | `#303336` | `#262729` | `#1C1D1F` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E3F5E1` | `#C0F5C4` | `#8CE995` | `#50D75F` | `#1AC22F` | `#00A91C` | `#008F18` | `#14781C` | `#1C6020` | `#164720` | `#19311E` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF0C8` | `#FEEBB4` | `#FFE6A0` | `#FFDC81` | `#FFCD58` | `#FFBE2E` | `#DE9B02` | `#AF7C1E` | `#846226` | `#62460D` | `#3B2B15` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3F2` | `#FDE0DB` | `#FDB8AE` | `#FF8D7B` | `#FB5A47` | `#E52207` | `#C81308` | `#AD0908` | `#930A04` | `#780D09` | `#5C1111` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5FAFF` | `#C0F5FF` | `#97EDFC` | `#63DFF5` | `#31CEEC` | `#00BDE3` | `#0098BB` | `#007793` | `#085969` | `#0A3F49` | `#052329` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#262729` |
| `--canvas` | 페이지 바닥 | `#FBFCFD` | `#1C1D1F` |
| `--fg` | 본문 글자 | `#262729` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#262729` | `#FBFCFD` |
| `--fg-lower` | 보조 설명 | `#474E59` | `#8D9297` |
| `--fg-disabled` | 비활성 글자 | `#8D9297` | `#474E59` |
| `--border` | 기본 경계선 | `#EDEFF0` | `#303336` |
| `--border-strong` | 강조 경계선 | `#C6CACE` | `#474E59` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#005EA2` | `#077BDE` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E8F5FF` | `#0F395F` |
| `--fg-primary` | 주된 색 글자 | `#045591` | `#399FFF` |
| `--bg-success` | 완료 표시 | `#00A91C` | `#00A91C` |
| `--bg-warning` | 주의 표시 | `#FFBE2E` | `#FFBE2E` |
| `--bg-critical` | 위험 표시 | `#E52207` | `#E52207` |
| `--bg-info` | 안내 표시 | `#0098BB` | `#31CEEC` |

## 토큰 — 타이포

**글꼴:** `"Public Sans","Source Sans Pro",-apple-system,system-ui,sans-serif`

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
| 버튼 | 4px |
| 카드 | 4px |
| 입력 | 4px |
| 태그 | 999px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 20px |
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
| 본문 대 바탕 | 14.95 : 1 | 통과 |
| 흰글씨 대 주된 색 | 6.72 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 4px, 카드 4px, 입력 4px 으로 고정합니다
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

- 본문 글자: `#262729`
- 보조 글자: `#474E59`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FBFCFD`
- 경계선: `#EDEFF0`
- 주된 행동: `#005EA2`
- 글꼴: `"Public Sans","Source Sans Pro",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E8F5FF;
  --primary-100: #C6E4FF;
  --primary-200: #84C7FF;
  --primary-300: #399FFF;
  --primary-400: #077BDE;
  --primary-500: #005EA2;
  --primary-600: #045591;
  --primary-700: #094C80;
  --primary-800: #0C4270;
  --primary-900: #0F395F;
  --primary-950: #112F4E;
  --gray-50: #FBFCFD;
  --gray-100: #F5F6F7;
  --gray-200: #EDEFF0;
  --gray-300: #C6CACE;
  --gray-400: #8D9297;
  --gray-500: #565C65;
  --gray-600: #474E59;
  --gray-700: #3A404A;
  --gray-800: #303336;
  --gray-900: #262729;
  --gray-950: #1C1D1F;
  --success-50: #E3F5E1;
  --success-100: #C0F5C4;
  --success-200: #8CE995;
  --success-300: #50D75F;
  --success-400: #1AC22F;
  --success-500: #00A91C;
  --success-600: #008F18;
  --success-700: #14781C;
  --success-800: #1C6020;
  --success-900: #164720;
  --success-950: #19311E;
  --warning-50: #FEF0C8;
  --warning-100: #FEEBB4;
  --warning-200: #FFE6A0;
  --warning-300: #FFDC81;
  --warning-400: #FFCD58;
  --warning-500: #FFBE2E;
  --warning-600: #DE9B02;
  --warning-700: #AF7C1E;
  --warning-800: #846226;
  --warning-900: #62460D;
  --warning-950: #3B2B15;
  --error-50: #FFF3F2;
  --error-100: #FDE0DB;
  --error-200: #FDB8AE;
  --error-300: #FF8D7B;
  --error-400: #FB5A47;
  --error-500: #E52207;
  --error-600: #C81308;
  --error-700: #AD0908;
  --error-800: #930A04;
  --error-900: #780D09;
  --error-950: #5C1111;
  --info-50: #E5FAFF;
  --info-100: #C0F5FF;
  --info-200: #97EDFC;
  --info-300: #63DFF5;
  --info-400: #31CEEC;
  --info-500: #00BDE3;
  --info-600: #0098BB;
  --info-700: #007793;
  --info-800: #085969;
  --info-900: #0A3F49;
  --info-950: #052329;
  --bg-primary: #005EA2;
  --bg-primary-low: #E8F5FF;
  --fg-primary: #045591;
  --fg-primary-low: #E8F5FF;
  --fg-point: #005EA2;
  --border-primary: #005EA2;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F5F6F7;
  --bg-neutral: #F5F6F7;
  --bg-neutral-low: #FBFCFD;
  --bg-neutral-lower: #FBFCFD;
  --bg-disabled: #F5F6F7;
  --bg-contrast: #262729;
  --bg-success: #00A91C;
  --bg-success-low: #E3F5E1;
  --bg-warning: #FFBE2E;
  --bg-warning-low: #FEF0C8;
  --bg-critical: #E52207;
  --bg-critical-low: #FFF3F2;
  --bg-info: #0098BB;
  --bg-info-low: #E5FAFF;
  --fg: #262729;
  --fg-strong: #262729;
  --fg-lower: #474E59;
  --fg-disabled: #8D9297;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #14781C;
  --fg-warning: #846226;
  --fg-error: #AD0908;
  --border: #EDEFF0;
  --border-low: #F5F6F7;
  --border-strong: #C6CACE;
  --border-disabled: #EDEFF0;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FBFCFD;
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
  --font-family: "Public Sans","Source Sans Pro",-apple-system,system-ui,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 4px;
  --btn-padx: 20px;
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
      primary:{50:"#E8F5FF",100:"#C6E4FF",200:"#84C7FF",300:"#399FFF",400:"#077BDE",500:"#005EA2",600:"#045591",700:"#094C80",800:"#0C4270",900:"#0F395F",950:"#112F4E"},
      gray:{50:"#FBFCFD",100:"#F5F6F7",200:"#EDEFF0",300:"#C6CACE",400:"#8D9297",500:"#565C65",600:"#474E59",700:"#3A404A",800:"#303336",900:"#262729",950:"#1C1D1F"},
      success:"#00A91C", warning:"#FFBE2E", critical:"#E52207",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Public Sans","Source Sans Pro","-apple-system","system-ui","sans-serif"] },
  }}
}
```