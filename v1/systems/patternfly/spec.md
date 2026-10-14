# Red Hat PatternFly — 시스템 스펙
> 레드햇 패턴플라이 공식 토큰. 로그와 상태 표가 끝없이 이어지는 운영 콘솔에 맞춰 경고색 네 가지를 분명하게 갈라 둡니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 데브옵스  ·  **프레임워크:** React · 웹 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E0F0FF` | `#C1DEFD` | `#A2CDFA` | `#72B1F1` | `#368BE0` | `#0066CC` | `#0057AD` | `#00488F` | `#003870` | `#012C58` | `#032142` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2F2F2` | `#E0E0E0` | `#C7C7C7` | `#A3A3A3` | `#8C8C8C` | `#707070` | `#4D4D4D` | `#383838` | `#292929` | `#1F1F1F` | `#151515` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E9F7DF` | `#D1F1BB` | `#AFDC8F` | `#87BB62` | `#63993D` | `#3D7317` | `#31640E` | `#265505` | `#1E4800` | `#1B3D01` | `#183301` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFE8CC` | `#FDD19B` | `#FABA6C` | `#F7A33D` | `#EC8A19` | `#CA6C0F` | `#B0580A` | `#954405` | `#7C3401` | `#642800` | `#4D1F00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF0F0` | `#FCE3E3` | `#FBC5C5` | `#F9A8A8` | `#F56E6E` | `#EE0000` | `#C30000` | `#980000` | `#6D0000` | `#520000` | `#3F0000` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#DAF2F2` | `#C0E8E8` | `#A6DDDD` | `#84CDCD` | `#5AB8B8` | `#37A3A3` | `#228989` | `#106F6F` | `#045656` | `#004343` | `#003333` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1F1F1F` |
| `--canvas` | 페이지 바닥 | `#F2F2F2` | `#151515` |
| `--fg` | 본문 글자 | `#1F1F1F` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1F1F1F` | `#F2F2F2` |
| `--fg-lower` | 보조 설명 | `#4D4D4D` | `#8C8C8C` |
| `--fg-disabled` | 비활성 글자 | `#8C8C8C` | `#4D4D4D` |
| `--border` | 기본 경계선 | `#C7C7C7` | `#292929` |
| `--border-strong` | 강조 경계선 | `#A3A3A3` | `#4D4D4D` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0066CC` | `#368BE0` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E0F0FF` | `#012C58` |
| `--fg-primary` | 주된 색 글자 | `#0057AD` | `#72B1F1` |
| `--bg-success` | 완료 표시 | `#3D7317` | `#3D7317` |
| `--bg-warning` | 주의 표시 | `#CA6C0F` | `#CA6C0F` |
| `--bg-critical` | 위험 표시 | `#EE0000` | `#EE0000` |
| `--bg-info` | 안내 표시 | `#228989` | `#5AB8B8` |

## 토큰 — 타이포

**글꼴:** `"Red Hat Text","Red Hat Display",-apple-system,system-ui,sans-serif`

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
| 버튼 | 3px |
| 카드 | 8px |
| 입력 | 3px |
| 태그 | 3px |
| 작은 조작부 | 3px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.75px, 끝처리 `butt`, 꼬임 `miter`.
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
| 본문 대 바탕 | 16.48 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.57 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 3px, 카드 8px, 입력 3px 으로 고정합니다
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

- 본문 글자: `#1F1F1F`
- 보조 글자: `#4D4D4D`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F2F2F2`
- 경계선: `#C7C7C7`
- 주된 행동: `#0066CC`
- 글꼴: `"Red Hat Text","Red Hat Display",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E0F0FF;
  --primary-100: #C1DEFD;
  --primary-200: #A2CDFA;
  --primary-300: #72B1F1;
  --primary-400: #368BE0;
  --primary-500: #0066CC;
  --primary-600: #0057AD;
  --primary-700: #00488F;
  --primary-800: #003870;
  --primary-900: #012C58;
  --primary-950: #032142;
  --gray-50: #F2F2F2;
  --gray-100: #E0E0E0;
  --gray-200: #C7C7C7;
  --gray-300: #A3A3A3;
  --gray-400: #8C8C8C;
  --gray-500: #707070;
  --gray-600: #4D4D4D;
  --gray-700: #383838;
  --gray-800: #292929;
  --gray-900: #1F1F1F;
  --gray-950: #151515;
  --success-50: #E9F7DF;
  --success-100: #D1F1BB;
  --success-200: #AFDC8F;
  --success-300: #87BB62;
  --success-400: #63993D;
  --success-500: #3D7317;
  --success-600: #31640E;
  --success-700: #265505;
  --success-800: #1E4800;
  --success-900: #1B3D01;
  --success-950: #183301;
  --warning-50: #FFE8CC;
  --warning-100: #FDD19B;
  --warning-200: #FABA6C;
  --warning-300: #F7A33D;
  --warning-400: #EC8A19;
  --warning-500: #CA6C0F;
  --warning-600: #B0580A;
  --warning-700: #954405;
  --warning-800: #7C3401;
  --warning-900: #642800;
  --warning-950: #4D1F00;
  --error-50: #FEF0F0;
  --error-100: #FCE3E3;
  --error-200: #FBC5C5;
  --error-300: #F9A8A8;
  --error-400: #F56E6E;
  --error-500: #EE0000;
  --error-600: #C30000;
  --error-700: #980000;
  --error-800: #6D0000;
  --error-900: #520000;
  --error-950: #3F0000;
  --info-50: #DAF2F2;
  --info-100: #C0E8E8;
  --info-200: #A6DDDD;
  --info-300: #84CDCD;
  --info-400: #5AB8B8;
  --info-500: #37A3A3;
  --info-600: #228989;
  --info-700: #106F6F;
  --info-800: #045656;
  --info-900: #004343;
  --info-950: #003333;
  --bg-primary: #0066CC;
  --bg-primary-low: #E0F0FF;
  --fg-primary: #0057AD;
  --fg-primary-low: #E0F0FF;
  --fg-point: #0066CC;
  --border-primary: #0066CC;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E0E0E0;
  --bg-neutral: #E0E0E0;
  --bg-neutral-low: #F2F2F2;
  --bg-neutral-lower: #F2F2F2;
  --bg-disabled: #E0E0E0;
  --bg-contrast: #1F1F1F;
  --bg-success: #3D7317;
  --bg-success-low: #E9F7DF;
  --bg-warning: #CA6C0F;
  --bg-warning-low: #FFE8CC;
  --bg-critical: #EE0000;
  --bg-critical-low: #FEF0F0;
  --bg-info: #228989;
  --bg-info-low: #DAF2F2;
  --fg: #1F1F1F;
  --fg-strong: #1F1F1F;
  --fg-lower: #4D4D4D;
  --fg-disabled: #8C8C8C;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #265505;
  --fg-warning: #7C3401;
  --fg-error: #980000;
  --border: #C7C7C7;
  --border-low: #E0E0E0;
  --border-strong: #A3A3A3;
  --border-disabled: #C7C7C7;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F2F2F2;
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
  --font-family: "Red Hat Text","Red Hat Display",-apple-system,system-ui,sans-serif;
  --btn-radius: 3px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 3px;
  --card-radius: 8px;
  --btn-padx: 16px;
  --in-radius: 3px;
  --tag-radius: 3px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E0F0FF",100:"#C1DEFD",200:"#A2CDFA",300:"#72B1F1",400:"#368BE0",500:"#0066CC",600:"#0057AD",700:"#00488F",800:"#003870",900:"#012C58",950:"#032142"},
      gray:{50:"#F2F2F2",100:"#E0E0E0",200:"#C7C7C7",300:"#A3A3A3",400:"#8C8C8C",500:"#707070",600:"#4D4D4D",700:"#383838",800:"#292929",900:"#1F1F1F",950:"#151515"},
      success:"#3D7317", warning:"#CA6C0F", critical:"#EE0000",
    },
    borderRadius:{ btn:"3px", card:"8px", input:"3px" },
    fontFamily:{ sans:["Red Hat Text","Red Hat Display","-apple-system","system-ui","sans-serif"] },
  }}
}
```