# Bevel — 시스템 스펙
> 부드러운 구름빛 카드와 하늘 그라디언트를 쓰는 헬스케어 시스템. 버튼은 128px 완전 알약, 카드는 28px 큰 라운드로 둥글게 통일합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 헬스케어  ·  **프레임워크:** React · 웹앱

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EEF1FE` | `#DCE2FD` | `#BCC6FB` | `#93A4F6` | `#6B82F2` | `#415EEE` | `#2E48D4` | `#2439A8` | `#1B2B7E` | `#141F5B` | `#0A1033` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F9FC` | `#EBF0F8` | `#DDE3EC` | `#C3CAD5` | `#9BA2AD` | `#747679` | `#5A5C60` | `#45474B` | `#2F3135` | `#222326` | `#1F2025` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EFFCE9` | `#D7F7C9` | `#AEEF95` | `#7FE35A` | `#55D927` | `#31CE01` | `#27A601` | `#1E7F01` | `#155A01` | `#0D3800` | `#061C00` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF9E0` | `#FFF1B8` | `#FFE680` | `#FFDA47` | `#FFD11F` | `#FFCA00` | `#D4A700` | `#A68200` | `#785E00` | `#4A3A00` | `#261E00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1ED` | `#FFE1D8` | `#FFC6B5` | `#FFAB94` | `#FF8B6B` | `#F2674A` | `#D14E33` | `#A53B26` | `#78291A` | `#4A1810` | `#260B07` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EFF6FF` | `#D2E5FF` | `#AFD0FF` | `#83B4FD` | `#5A98F8` | `#2F80ED` | `#2366C4` | `#1A4E97` | `#13376B` | `#0C2140` | `#061121` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#222326` |
| `--canvas` | 페이지 바닥 | `#F7F9FC` | `#1F2025` |
| `--fg` | 본문 글자 | `#222326` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#222326` | `#F7F9FC` |
| `--fg-lower` | 보조 설명 | `#5A5C60` | `#9BA2AD` |
| `--fg-disabled` | 비활성 글자 | `#9BA2AD` | `#5A5C60` |
| `--border` | 기본 경계선 | `#DDE3EC` | `#2F3135` |
| `--border-strong` | 강조 경계선 | `#C3CAD5` | `#5A5C60` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#415EEE` | `#6B82F2` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EEF1FE` | `#141F5B` |
| `--fg-primary` | 주된 색 글자 | `#2E48D4` | `#93A4F6` |
| `--bg-success` | 완료 표시 | `#31CE01` | `#31CE01` |
| `--bg-warning` | 주의 표시 | `#FFCA00` | `#FFCA00` |
| `--bg-critical` | 위험 표시 | `#F2674A` | `#F2674A` |
| `--bg-info` | 안내 표시 | `#2366C4` | `#5A98F8` |

## 토큰 — 타이포

**글꼴:** `"Plus Jakarta Sans","Pretendard",-apple-system,system-ui,sans-serif`

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
| 버튼 | 128px |
| 카드 | 28px |
| 입력 | 16px |
| 태그 | 999px |
| 작은 조작부 | 14px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 28px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
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
| 본문 대 바탕 | 15.71 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.17 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 128px, 카드 28px, 입력 16px 으로 고정합니다
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

- 본문 글자: `#222326`
- 보조 글자: `#5A5C60`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F7F9FC`
- 경계선: `#DDE3EC`
- 주된 행동: `#415EEE`
- 글꼴: `"Plus Jakarta Sans","Pretendard",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EEF1FE;
  --primary-100: #DCE2FD;
  --primary-200: #BCC6FB;
  --primary-300: #93A4F6;
  --primary-400: #6B82F2;
  --primary-500: #415EEE;
  --primary-600: #2E48D4;
  --primary-700: #2439A8;
  --primary-800: #1B2B7E;
  --primary-900: #141F5B;
  --primary-950: #0A1033;
  --gray-50: #F7F9FC;
  --gray-100: #EBF0F8;
  --gray-200: #DDE3EC;
  --gray-300: #C3CAD5;
  --gray-400: #9BA2AD;
  --gray-500: #747679;
  --gray-600: #5A5C60;
  --gray-700: #45474B;
  --gray-800: #2F3135;
  --gray-900: #222326;
  --gray-950: #1F2025;
  --success-50: #EFFCE9;
  --success-100: #D7F7C9;
  --success-200: #AEEF95;
  --success-300: #7FE35A;
  --success-400: #55D927;
  --success-500: #31CE01;
  --success-600: #27A601;
  --success-700: #1E7F01;
  --success-800: #155A01;
  --success-900: #0D3800;
  --success-950: #061C00;
  --warning-50: #FFF9E0;
  --warning-100: #FFF1B8;
  --warning-200: #FFE680;
  --warning-300: #FFDA47;
  --warning-400: #FFD11F;
  --warning-500: #FFCA00;
  --warning-600: #D4A700;
  --warning-700: #A68200;
  --warning-800: #785E00;
  --warning-900: #4A3A00;
  --warning-950: #261E00;
  --error-50: #FFF1ED;
  --error-100: #FFE1D8;
  --error-200: #FFC6B5;
  --error-300: #FFAB94;
  --error-400: #FF8B6B;
  --error-500: #F2674A;
  --error-600: #D14E33;
  --error-700: #A53B26;
  --error-800: #78291A;
  --error-900: #4A1810;
  --error-950: #260B07;
  --info-50: #EFF6FF;
  --info-100: #D2E5FF;
  --info-200: #AFD0FF;
  --info-300: #83B4FD;
  --info-400: #5A98F8;
  --info-500: #2F80ED;
  --info-600: #2366C4;
  --info-700: #1A4E97;
  --info-800: #13376B;
  --info-900: #0C2140;
  --info-950: #061121;
  --bg-primary: #415EEE;
  --bg-primary-low: #EEF1FE;
  --fg-primary: #2E48D4;
  --fg-primary-low: #EEF1FE;
  --fg-point: #FFAB94;
  --border-primary: #415EEE;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EBF0F8;
  --bg-neutral: #EBF0F8;
  --bg-neutral-low: #F7F9FC;
  --bg-neutral-lower: #F7F9FC;
  --bg-disabled: #EBF0F8;
  --bg-contrast: #222326;
  --bg-success: #31CE01;
  --bg-success-low: #EFFCE9;
  --bg-warning: #FFCA00;
  --bg-warning-low: #FFF9E0;
  --bg-critical: #F2674A;
  --bg-critical-low: #FFF1ED;
  --bg-info: #2366C4;
  --bg-info-low: #EFF6FF;
  --fg: #222326;
  --fg-strong: #222326;
  --fg-lower: #5A5C60;
  --fg-disabled: #9BA2AD;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #1E7F01;
  --fg-warning: #785E00;
  --fg-error: #A53B26;
  --border: #DDE3EC;
  --border-low: #EBF0F8;
  --border-strong: #C3CAD5;
  --border-disabled: #DDE3EC;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F7F9FC;
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
  --radius-xs: 12px;
  --radius-sm: 16px;
  --radius-md: 24px;
  --radius-lg: 32px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Plus Jakarta Sans","Pretendard",-apple-system,system-ui,sans-serif;
  --btn-radius: 128px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 14px;
  --card-radius: 28px;
  --btn-padx: 28px;
  --in-radius: 16px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF1FE",100:"#DCE2FD",200:"#BCC6FB",300:"#93A4F6",400:"#6B82F2",500:"#415EEE",600:"#2E48D4",700:"#2439A8",800:"#1B2B7E",900:"#141F5B",950:"#0A1033"},
      gray:{50:"#F7F9FC",100:"#EBF0F8",200:"#DDE3EC",300:"#C3CAD5",400:"#9BA2AD",500:"#747679",600:"#5A5C60",700:"#45474B",800:"#2F3135",900:"#222326",950:"#1F2025"},
      success:"#31CE01", warning:"#FFCA00", critical:"#F2674A",
    },
    borderRadius:{ btn:"128px", card:"28px", input:"16px" },
    fontFamily:{ sans:["Plus Jakarta Sans","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}
```