# Slack — 시스템 스펙
> 오버진(플럼) 브랜드의 협업 메신저 시스템. 플럼에서 시안으로 가는 포인트로 채널·스레드 UI에 적합.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 협업  ·  **프레임워크:** React · Electron

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7EFF8` | `#EDD8EF` | `#DBB2DF` | `#C583CB` | `#A94FB2` | `#8A2E95` | `#6E2277` | `#571C5E` | `#4A154B` | `#33103A` | `#1E0A22` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F8F8FA` | `#F0F0F2` | `#E2E2E6` | `#C9C9CF` | `#9B9BA3` | `#6E6E77` | `#545459` | `#3F3F44` | `#2A2A2E` | `#1A1A1D` | `#0D0D0F` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E7F6EF` | `#C2E9D6` | `#8AD5B2` | `#4FBE8C` | `#2BAC76` | `#189A63` | `#127C50` | `#0D5E3D` | `#08422B` | `#04281A` | `#02140D` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDF6E7` | `#FAE8BD` | `#F5D383` | `#F0BE4A` | `#ECB22E` | `#CE9313` | `#A5760F` | `#7C580B` | `#533B07` | `#2E2103` | `#171001` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FCE9EF` | `#F8C8D8` | `#F193AF` | `#EA5E86` | `#E53A6C` | `#E01E5A` | `#BC184B` | `#92123A` | `#680D2A` | `#3E0819` | `#21040D` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F1F8` | `#C6DCED` | `#90BADB` | `#5A97C8` | `#327BB8` | `#1264A3` | `#0E5185` | `#0B3E66` | `#082B47` | `#041829` | `#020C15` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A1A1D` |
| `--canvas` | 페이지 바닥 | `#F8F8FA` | `#0D0D0F` |
| `--fg` | 본문 글자 | `#1A1A1D` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A1A1D` | `#F8F8FA` |
| `--fg-lower` | 보조 설명 | `#545459` | `#9B9BA3` |
| `--fg-disabled` | 비활성 글자 | `#9B9BA3` | `#545459` |
| `--border` | 기본 경계선 | `#E2E2E6` | `#2A2A2E` |
| `--border-strong` | 강조 경계선 | `#C9C9CF` | `#545459` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#8A2E95` | `#A94FB2` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F7EFF8` | `#33103A` |
| `--fg-primary` | 주된 색 글자 | `#6E2277` | `#C583CB` |
| `--bg-success` | 완료 표시 | `#189A63` | `#189A63` |
| `--bg-warning` | 주의 표시 | `#CE9313` | `#CE9313` |
| `--bg-critical` | 위험 표시 | `#E01E5A` | `#E01E5A` |
| `--bg-info` | 안내 표시 | `#0E5185` | `#327BB8` |

## 토큰 — 타이포

**글꼴:** `"Pretendard",-apple-system,system-ui,sans-serif`

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
| 버튼 | 8px |
| 카드 | 12px |
| 입력 | 8px |
| 태그 | 999px |
| 작은 조작부 | 6px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 18px |
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
| 본문 대 바탕 | 17.36 : 1 | 통과 |
| 흰글씨 대 주된 색 | 7.23 : 1 | 통과 |

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

- 본문 글자: `#1A1A1D`
- 보조 글자: `#545459`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8F8FA`
- 경계선: `#E2E2E6`
- 주된 행동: `#8A2E95`
- 글꼴: `"Pretendard",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F7EFF8;
  --primary-100: #EDD8EF;
  --primary-200: #DBB2DF;
  --primary-300: #C583CB;
  --primary-400: #A94FB2;
  --primary-500: #8A2E95;
  --primary-600: #6E2277;
  --primary-700: #571C5E;
  --primary-800: #4A154B;
  --primary-900: #33103A;
  --primary-950: #1E0A22;
  --gray-50: #F8F8FA;
  --gray-100: #F0F0F2;
  --gray-200: #E2E2E6;
  --gray-300: #C9C9CF;
  --gray-400: #9B9BA3;
  --gray-500: #6E6E77;
  --gray-600: #545459;
  --gray-700: #3F3F44;
  --gray-800: #2A2A2E;
  --gray-900: #1A1A1D;
  --gray-950: #0D0D0F;
  --success-50: #E7F6EF;
  --success-100: #C2E9D6;
  --success-200: #8AD5B2;
  --success-300: #4FBE8C;
  --success-400: #2BAC76;
  --success-500: #189A63;
  --success-600: #127C50;
  --success-700: #0D5E3D;
  --success-800: #08422B;
  --success-900: #04281A;
  --success-950: #02140D;
  --warning-50: #FDF6E7;
  --warning-100: #FAE8BD;
  --warning-200: #F5D383;
  --warning-300: #F0BE4A;
  --warning-400: #ECB22E;
  --warning-500: #CE9313;
  --warning-600: #A5760F;
  --warning-700: #7C580B;
  --warning-800: #533B07;
  --warning-900: #2E2103;
  --warning-950: #171001;
  --error-50: #FCE9EF;
  --error-100: #F8C8D8;
  --error-200: #F193AF;
  --error-300: #EA5E86;
  --error-400: #E53A6C;
  --error-500: #E01E5A;
  --error-600: #BC184B;
  --error-700: #92123A;
  --error-800: #680D2A;
  --error-900: #3E0819;
  --error-950: #21040D;
  --info-50: #E8F1F8;
  --info-100: #C6DCED;
  --info-200: #90BADB;
  --info-300: #5A97C8;
  --info-400: #327BB8;
  --info-500: #1264A3;
  --info-600: #0E5185;
  --info-700: #0B3E66;
  --info-800: #082B47;
  --info-900: #041829;
  --info-950: #020C15;
  --bg-primary: #8A2E95;
  --bg-primary-low: #F7EFF8;
  --fg-primary: #6E2277;
  --fg-primary-low: #F7EFF8;
  --fg-point: #36C5F0;
  --border-primary: #8A2E95;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F0F0F2;
  --bg-neutral: #F0F0F2;
  --bg-neutral-low: #F8F8FA;
  --bg-neutral-lower: #F8F8FA;
  --bg-disabled: #F0F0F2;
  --bg-contrast: #1A1A1D;
  --bg-success: #189A63;
  --bg-success-low: #E7F6EF;
  --bg-warning: #CE9313;
  --bg-warning-low: #FDF6E7;
  --bg-critical: #E01E5A;
  --bg-critical-low: #FCE9EF;
  --bg-info: #0E5185;
  --bg-info-low: #E8F1F8;
  --fg: #1A1A1D;
  --fg-strong: #1A1A1D;
  --fg-lower: #545459;
  --fg-disabled: #9B9BA3;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #0D5E3D;
  --fg-warning: #533B07;
  --fg-error: #92123A;
  --border: #E2E2E6;
  --border-low: #F0F0F2;
  --border-strong: #C9C9CF;
  --border-disabled: #E2E2E6;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F8F8FA;
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
  --radius-sm: 8px;
  --radius-md: 10px;
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
  --font-family: "Pretendard",-apple-system,system-ui,sans-serif;
  --btn-radius: 8px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 6px;
  --card-radius: 12px;
  --btn-padx: 18px;
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
      primary:{50:"#F7EFF8",100:"#EDD8EF",200:"#DBB2DF",300:"#C583CB",400:"#A94FB2",500:"#8A2E95",600:"#6E2277",700:"#571C5E",800:"#4A154B",900:"#33103A",950:"#1E0A22"},
      gray:{50:"#F8F8FA",100:"#F0F0F2",200:"#E2E2E6",300:"#C9C9CF",400:"#9B9BA3",500:"#6E6E77",600:"#545459",700:"#3F3F44",800:"#2A2A2E",900:"#1A1A1D",950:"#0D0D0F"},
      success:"#189A63", warning:"#CE9313", critical:"#E01E5A",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}
```