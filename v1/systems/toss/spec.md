# Toss (TDS) — 시스템 스펙
> 토스 공식 디자인 토큰(WTS) 기반. 명료한 그레이 스케일과 토스 블루가 핵심인 핀테크 SaaS 시스템.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 앱  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F3FF` | `#C9E2FF` | `#90C2FF` | `#64A8FF` | `#4593FC` | `#3182F6` | `#2272EB` | `#1B64DA` | `#1957C2` | `#194AA6` | `#123A82` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F9FAFB` | `#F2F4F6` | `#E5E8EB` | `#D1D6DB` | `#B0B8C1` | `#8B95A1` | `#6B7684` | `#4E5968` | `#333D4B` | `#191F28` | `#0F131A` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F0FAF6` | `#AEEFD5` | `#76E4B8` | `#3FD599` | `#15C47E` | `#03B26C` | `#02A262` | `#029359` | `#028450` | `#027648` | `#015437` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3E0` | `#FFE0B0` | `#FFCD80` | `#FFBD51` | `#FFA927` | `#FE9800` | `#FB8800` | `#F57800` | `#ED6700` | `#E45600` | `#A03C00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEEEE` | `#FFD4D6` | `#FEAFB4` | `#FB8890` | `#F66570` | `#F04452` | `#E42939` | `#D22030` | `#BC1B2A` | `#A51926` | `#6E101A` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F3FF` | `#C9E2FF` | `#90C2FF` | `#64A8FF` | `#4593FC` | `#3182F6` | `#2272EB` | `#1B64DA` | `#1957C2` | `#194AA6` | `#123A82` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#191F28` |
| `--canvas` | 페이지 바닥 | `#F9FAFB` | `#0F131A` |
| `--fg` | 본문 글자 | `#191F28` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#191F28` | `#F9FAFB` |
| `--fg-lower` | 보조 설명 | `#6B7684` | `#B0B8C1` |
| `--fg-disabled` | 비활성 글자 | `#B0B8C1` | `#6B7684` |
| `--border` | 기본 경계선 | `#E5E8EB` | `#333D4B` |
| `--border-strong` | 강조 경계선 | `#D1D6DB` | `#6B7684` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#3182F6` | `#4593FC` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E8F3FF` | `#194AA6` |
| `--fg-primary` | 주된 색 글자 | `#2272EB` | `#64A8FF` |
| `--bg-success` | 완료 표시 | `#03B26C` | `#03B26C` |
| `--bg-warning` | 주의 표시 | `#FE9800` | `#FE9800` |
| `--bg-critical` | 위험 표시 | `#F04452` | `#F04452` |
| `--bg-info` | 안내 표시 | `#2272EB` | `#4593FC` |

## 토큰 — 타이포

**글꼴:** `"Pretendard","Toss Product Sans",-apple-system,system-ui,sans-serif`

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
| 버튼 | 10px |
| 카드 | 16px |
| 입력 | 10px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 18px |
| 버튼 글자 굵기 | 600 |
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
| 본문 대 바탕 | 16.56 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.71 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 10px, 카드 16px, 입력 10px 으로 고정합니다
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

- 본문 글자: `#191F28`
- 보조 글자: `#6B7684`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F9FAFB`
- 경계선: `#E5E8EB`
- 주된 행동: `#3182F6`
- 글꼴: `"Pretendard","Toss Product Sans",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E8F3FF;
  --primary-100: #C9E2FF;
  --primary-200: #90C2FF;
  --primary-300: #64A8FF;
  --primary-400: #4593FC;
  --primary-500: #3182F6;
  --primary-600: #2272EB;
  --primary-700: #1B64DA;
  --primary-800: #1957C2;
  --primary-900: #194AA6;
  --primary-950: #123A82;
  --gray-50: #F9FAFB;
  --gray-100: #F2F4F6;
  --gray-200: #E5E8EB;
  --gray-300: #D1D6DB;
  --gray-400: #B0B8C1;
  --gray-500: #8B95A1;
  --gray-600: #6B7684;
  --gray-700: #4E5968;
  --gray-800: #333D4B;
  --gray-900: #191F28;
  --gray-950: #0F131A;
  --success-50: #F0FAF6;
  --success-100: #AEEFD5;
  --success-200: #76E4B8;
  --success-300: #3FD599;
  --success-400: #15C47E;
  --success-500: #03B26C;
  --success-600: #02A262;
  --success-700: #029359;
  --success-800: #028450;
  --success-900: #027648;
  --success-950: #015437;
  --warning-50: #FFF3E0;
  --warning-100: #FFE0B0;
  --warning-200: #FFCD80;
  --warning-300: #FFBD51;
  --warning-400: #FFA927;
  --warning-500: #FE9800;
  --warning-600: #FB8800;
  --warning-700: #F57800;
  --warning-800: #ED6700;
  --warning-900: #E45600;
  --warning-950: #A03C00;
  --error-50: #FFEEEE;
  --error-100: #FFD4D6;
  --error-200: #FEAFB4;
  --error-300: #FB8890;
  --error-400: #F66570;
  --error-500: #F04452;
  --error-600: #E42939;
  --error-700: #D22030;
  --error-800: #BC1B2A;
  --error-900: #A51926;
  --error-950: #6E101A;
  --info-50: #E8F3FF;
  --info-100: #C9E2FF;
  --info-200: #90C2FF;
  --info-300: #64A8FF;
  --info-400: #4593FC;
  --info-500: #3182F6;
  --info-600: #2272EB;
  --info-700: #1B64DA;
  --info-800: #1957C2;
  --info-900: #194AA6;
  --info-950: #123A82;
  --bg-primary: #3182F6;
  --bg-primary-low: #E8F3FF;
  --fg-primary: #2272EB;
  --fg-primary-low: #E8F3FF;
  --fg-point: #03B26C;
  --border-primary: #3182F6;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F2F4F6;
  --bg-neutral: #F2F4F6;
  --bg-neutral-low: #F9FAFB;
  --bg-neutral-lower: #F9FAFB;
  --bg-disabled: #F2F4F6;
  --bg-contrast: #191F28;
  --bg-success: #03B26C;
  --bg-success-low: #F0FAF6;
  --bg-warning: #FE9800;
  --bg-warning-low: #FFF3E0;
  --bg-critical: #F04452;
  --bg-critical-low: #FFEEEE;
  --bg-info: #2272EB;
  --bg-info-low: #E8F3FF;
  --fg: #191F28;
  --fg-strong: #191F28;
  --fg-lower: #6B7684;
  --fg-disabled: #B0B8C1;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #029359;
  --fg-warning: #ED6700;
  --fg-error: #D22030;
  --border: #E5E8EB;
  --border-low: #F2F4F6;
  --border-strong: #D1D6DB;
  --border-disabled: #E5E8EB;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F9FAFB;
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
  --font-family: "Pretendard","Toss Product Sans",-apple-system,system-ui,sans-serif;
  --btn-radius: 10px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 8px;
  --card-radius: 16px;
  --btn-padx: 18px;
  --in-radius: 10px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E8F3FF",100:"#C9E2FF",200:"#90C2FF",300:"#64A8FF",400:"#4593FC",500:"#3182F6",600:"#2272EB",700:"#1B64DA",800:"#1957C2",900:"#194AA6",950:"#123A82"},
      gray:{50:"#F9FAFB",100:"#F2F4F6",200:"#E5E8EB",300:"#D1D6DB",400:"#B0B8C1",500:"#8B95A1",600:"#6B7684",700:"#4E5968",800:"#333D4B",900:"#191F28",950:"#0F131A"},
      success:"#03B26C", warning:"#FE9800", critical:"#F04452",
    },
    borderRadius:{ btn:"10px", card:"16px", input:"10px" },
    fontFamily:{ sans:["Pretendard","Toss Product Sans","-apple-system","system-ui","sans-serif"] },
  }}
}
```