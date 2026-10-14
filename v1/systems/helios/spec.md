# HashiCorp Helios — 시스템 스펙
> 해시코프 헬리오스 공식 토큰. 50 이 가장 밝고 500 이 가장 어두운 여섯 단계 체계로, 터미널 출력과 상태 배지가 섞인 인프라 도구 화면에 맞춰 경고색을 분명히 갈라 둡니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 데브옵스  ·  **프레임워크:** Ember · React · 웹 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2F8FF` | `#E3F0FF` | `#D4E7FE` | `#A6C9FE` | `#5B94FF` | `#1060FF` | `#0D58ED` | `#054CDB` | `#0B3FA3` | `#1A3057` | `#111F39` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFFFF` | `#FAFAFA` | `#F1F2F3` | `#DEDFE3` | `#C2C5CB` | `#8C909C` | `#757985` | `#5D616C` | `#43464F` | `#28292F` | `#0C0C0E` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2FBF6` | `#E3F6EB` | `#D4F1E0` | `#A3DAB5` | `#52B26C` | `#008A22` | `#007C1F` | `#006D1B` | `#02581C` | `#053C1D` | `#032512` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF9E8` | `#FDF3D8` | `#FCEDC7` | `#EECD99` | `#D5944C` | `#BB5A00` | `#AA5100` | `#984800` | `#864000` | `#6E3500` | `#542800` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF5F5` | `#FDE8E8` | `#FCDBDB` | `#F7B0B2` | `#EE696D` | `#E52228` | `#CF0E13` | `#B70005` | `#9D0004` | `#790806` | `#51130A` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2F8FF` | `#DBEBFE` | `#A6C9FE` | `#367AFF` | `#0E5CF6` | `#0C56E9` | `#054CDB` | `#0642BA` | `#163876` | `#182C50` | `#111F39` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#28292F` |
| `--canvas` | 페이지 바닥 | `#FFFFFF` | `#0C0C0E` |
| `--fg` | 본문 글자 | `#28292F` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#28292F` | `#FFFFFF` |
| `--fg-lower` | 보조 설명 | `#757985` | `#C2C5CB` |
| `--fg-disabled` | 비활성 글자 | `#C2C5CB` | `#757985` |
| `--border` | 기본 경계선 | `#F1F2F3` | `#43464F` |
| `--border-strong` | 강조 경계선 | `#DEDFE3` | `#757985` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#1060FF` | `#5B94FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F2F8FF` | `#1A3057` |
| `--fg-primary` | 주된 색 글자 | `#0D58ED` | `#A6C9FE` |
| `--bg-success` | 완료 표시 | `#008A22` | `#008A22` |
| `--bg-warning` | 주의 표시 | `#BB5A00` | `#BB5A00` |
| `--bg-critical` | 위험 표시 | `#E52228` | `#E52228` |
| `--bg-info` | 안내 표시 | `#054CDB` | `#0E5CF6` |

## 토큰 — 타이포

**글꼴:** `"Open Sans","Inter",-apple-system,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 700 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 700 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 500 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 5px |
| 카드 | 6px |
| 입력 | 5px |
| 태그 | 5px |
| 작은 조작부 | 5px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 500 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.6px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 14.50 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.07 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 5px, 카드 6px, 입력 5px 으로 고정합니다
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

- 본문 글자: `#28292F`
- 보조 글자: `#757985`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FFFFFF`
- 경계선: `#F1F2F3`
- 주된 행동: `#1060FF`
- 글꼴: `"Open Sans","Inter",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F2F8FF;
  --primary-100: #E3F0FF;
  --primary-200: #D4E7FE;
  --primary-300: #A6C9FE;
  --primary-400: #5B94FF;
  --primary-500: #1060FF;
  --primary-600: #0D58ED;
  --primary-700: #054CDB;
  --primary-800: #0B3FA3;
  --primary-900: #1A3057;
  --primary-950: #111F39;
  --gray-50: #FFFFFF;
  --gray-100: #FAFAFA;
  --gray-200: #F1F2F3;
  --gray-300: #DEDFE3;
  --gray-400: #C2C5CB;
  --gray-500: #8C909C;
  --gray-600: #757985;
  --gray-700: #5D616C;
  --gray-800: #43464F;
  --gray-900: #28292F;
  --gray-950: #0C0C0E;
  --success-50: #F2FBF6;
  --success-100: #E3F6EB;
  --success-200: #D4F1E0;
  --success-300: #A3DAB5;
  --success-400: #52B26C;
  --success-500: #008A22;
  --success-600: #007C1F;
  --success-700: #006D1B;
  --success-800: #02581C;
  --success-900: #053C1D;
  --success-950: #032512;
  --warning-50: #FFF9E8;
  --warning-100: #FDF3D8;
  --warning-200: #FCEDC7;
  --warning-300: #EECD99;
  --warning-400: #D5944C;
  --warning-500: #BB5A00;
  --warning-600: #AA5100;
  --warning-700: #984800;
  --warning-800: #864000;
  --warning-900: #6E3500;
  --warning-950: #542800;
  --error-50: #FFF5F5;
  --error-100: #FDE8E8;
  --error-200: #FCDBDB;
  --error-300: #F7B0B2;
  --error-400: #EE696D;
  --error-500: #E52228;
  --error-600: #CF0E13;
  --error-700: #B70005;
  --error-800: #9D0004;
  --error-900: #790806;
  --error-950: #51130A;
  --info-50: #F2F8FF;
  --info-100: #DBEBFE;
  --info-200: #A6C9FE;
  --info-300: #367AFF;
  --info-400: #0E5CF6;
  --info-500: #0C56E9;
  --info-600: #054CDB;
  --info-700: #0642BA;
  --info-800: #163876;
  --info-900: #182C50;
  --info-950: #111F39;
  --bg-primary: #1060FF;
  --bg-primary-low: #F2F8FF;
  --fg-primary: #0D58ED;
  --fg-primary-low: #F2F8FF;
  --fg-point: #1060FF;
  --border-primary: #1060FF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #FAFAFA;
  --bg-neutral: #FAFAFA;
  --bg-neutral-low: #FFFFFF;
  --bg-neutral-lower: #FFFFFF;
  --bg-disabled: #FAFAFA;
  --bg-contrast: #28292F;
  --bg-success: #008A22;
  --bg-success-low: #F2FBF6;
  --bg-warning: #BB5A00;
  --bg-warning-low: #FFF9E8;
  --bg-critical: #E52228;
  --bg-critical-low: #FFF5F5;
  --bg-info: #054CDB;
  --bg-info-low: #F2F8FF;
  --fg: #28292F;
  --fg-strong: #28292F;
  --fg-lower: #757985;
  --fg-disabled: #C2C5CB;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #006D1B;
  --fg-warning: #864000;
  --fg-error: #B70005;
  --border: #F1F2F3;
  --border-low: #FAFAFA;
  --border-strong: #DEDFE3;
  --border-disabled: #F1F2F3;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FFFFFF;
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
  --radius-sm: 5px;
  --radius-md: 5px;
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
  --font-family: "Open Sans","Inter",-apple-system,system-ui,sans-serif;
  --btn-radius: 5px;
  --btn-weight: 500;
  --btn-shadow: none;
  --ctl-radius: 5px;
  --card-radius: 6px;
  --btn-padx: 16px;
  --in-radius: 5px;
  --tag-radius: 5px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F2F8FF",100:"#E3F0FF",200:"#D4E7FE",300:"#A6C9FE",400:"#5B94FF",500:"#1060FF",600:"#0D58ED",700:"#054CDB",800:"#0B3FA3",900:"#1A3057",950:"#111F39"},
      gray:{50:"#FFFFFF",100:"#FAFAFA",200:"#F1F2F3",300:"#DEDFE3",400:"#C2C5CB",500:"#8C909C",600:"#757985",700:"#5D616C",800:"#43464F",900:"#28292F",950:"#0C0C0E"},
      success:"#008A22", warning:"#BB5A00", critical:"#E52228",
    },
    borderRadius:{ btn:"5px", card:"6px", input:"5px" },
    fontFamily:{ sans:["Open Sans","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}
```