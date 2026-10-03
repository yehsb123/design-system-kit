# Wise — 시스템 스펙
> 짙은 숲색 위에 라임을 한 점만 두는 평평한 핀테크 시스템. 그라디언트와 블러를 쓰지 않고, 흰 구역과 리넨 구역과 숲색 구역을 번갈아 둡니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 핀테크  ·  **프레임워크:** React · 웹

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F4FDEE` | `#E2F6D5` | `#CBF0B3` | `#B5EB91` | `#9FE870` | `#9FE870` | `#7BC94E` | `#4F9B2C` | `#2E6B18` | `#1B4310` | `#163300` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F8F6` | `#E8EBE6` | `#D5D8D3` | `#B3B5B2` | `#868685` | `#6A6C6A` | `#545654` | `#454745` | `#2C2E2B` | `#0E0F0C` | `#080906` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF7EF` | `#C7EBD6` | `#92D9B0` | `#5CC389` | `#2FA869` | `#054D28` | `#04401F` | `#033218` | `#022511` | `#01180B` | `#000C05` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8E6` | `#FFEDBF` | `#FFDE8A` | `#FFCE55` | `#FFC02B` | `#E8A600` | `#BC8600` | `#8F6700` | `#664900` | `#3D2C00` | `#1F1600` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDEDEE` | `#F9D3D5` | `#F1A5A9` | `#E7787E` | `#DB4C54` | `#CB272F` | `#A91F26` | `#84181E` | `#5E1115` | `#380A0D` | `#1C0506` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F2F8` | `#C5DEEE` | `#8FBEDC` | `#589DC9` | `#2B7FB4` | `#0B4C72` | `#093E5D` | `#073048` | `#052334` | `#031620` | `#010B10` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#0E0F0C` |
| `--canvas` | 페이지 바닥 | `#F7F8F6` | `#080906` |
| `--fg` | 본문 글자 | `#0E0F0C` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#0E0F0C` | `#F7F8F6` |
| `--fg-lower` | 보조 설명 | `#545654` | `#868685` |
| `--fg-disabled` | 비활성 글자 | `#868685` | `#545654` |
| `--border` | 기본 경계선 | `#D5D8D3` | `#2C2E2B` |
| `--border-strong` | 강조 경계선 | `#B3B5B2` | `#545654` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#9FE870` | `#9FE870` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F4FDEE` | `#1B4310` |
| `--fg-primary` | 주된 색 글자 | `#7BC94E` | `#B5EB91` |
| `--bg-success` | 완료 표시 | `#054D28` | `#054D28` |
| `--bg-warning` | 주의 표시 | `#E8A600` | `#E8A600` |
| `--bg-critical` | 위험 표시 | `#CB272F` | `#CB272F` |
| `--bg-info` | 안내 표시 | `#093E5D` | `#2B7FB4` |

## 토큰 — 타이포

**글꼴:** `"Inter","Pretendard",-apple-system,system-ui,sans-serif`

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
| 버튼 | 9999px |
| 카드 | 10px |
| 입력 | 10px |
| 태그 | 999px |
| 작은 조작부 | 10px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 24px |
| 버튼 글자 굵기 | 700 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2.2px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 19.23 : 1 | 통과 |
| 흰글씨 대 주된 색 | 1.47 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 9999px, 카드 10px, 입력 10px 으로 고정합니다
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

- 본문 글자: `#0E0F0C`
- 보조 글자: `#545654`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F7F8F6`
- 경계선: `#D5D8D3`
- 주된 행동: `#9FE870`
- 글꼴: `"Inter","Pretendard",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F4FDEE;
  --primary-100: #E2F6D5;
  --primary-200: #CBF0B3;
  --primary-300: #B5EB91;
  --primary-400: #9FE870;
  --primary-500: #9FE870;
  --primary-600: #7BC94E;
  --primary-700: #4F9B2C;
  --primary-800: #2E6B18;
  --primary-900: #1B4310;
  --primary-950: #163300;
  --gray-50: #F7F8F6;
  --gray-100: #E8EBE6;
  --gray-200: #D5D8D3;
  --gray-300: #B3B5B2;
  --gray-400: #868685;
  --gray-500: #6A6C6A;
  --gray-600: #545654;
  --gray-700: #454745;
  --gray-800: #2C2E2B;
  --gray-900: #0E0F0C;
  --gray-950: #080906;
  --success-50: #EAF7EF;
  --success-100: #C7EBD6;
  --success-200: #92D9B0;
  --success-300: #5CC389;
  --success-400: #2FA869;
  --success-500: #054D28;
  --success-600: #04401F;
  --success-700: #033218;
  --success-800: #022511;
  --success-900: #01180B;
  --success-950: #000C05;
  --warning-50: #FFF8E6;
  --warning-100: #FFEDBF;
  --warning-200: #FFDE8A;
  --warning-300: #FFCE55;
  --warning-400: #FFC02B;
  --warning-500: #E8A600;
  --warning-600: #BC8600;
  --warning-700: #8F6700;
  --warning-800: #664900;
  --warning-900: #3D2C00;
  --warning-950: #1F1600;
  --error-50: #FDEDEE;
  --error-100: #F9D3D5;
  --error-200: #F1A5A9;
  --error-300: #E7787E;
  --error-400: #DB4C54;
  --error-500: #CB272F;
  --error-600: #A91F26;
  --error-700: #84181E;
  --error-800: #5E1115;
  --error-900: #380A0D;
  --error-950: #1C0506;
  --info-50: #E8F2F8;
  --info-100: #C5DEEE;
  --info-200: #8FBEDC;
  --info-300: #589DC9;
  --info-400: #2B7FB4;
  --info-500: #0B4C72;
  --info-600: #093E5D;
  --info-700: #073048;
  --info-800: #052334;
  --info-900: #031620;
  --info-950: #010B10;
  --bg-primary: #9FE870;
  --bg-primary-low: #F4FDEE;
  --fg-primary: #7BC94E;
  --fg-primary-low: #F4FDEE;
  --fg-point: #163300;
  --border-primary: #9FE870;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E8EBE6;
  --bg-neutral: #E8EBE6;
  --bg-neutral-low: #F7F8F6;
  --bg-neutral-lower: #F7F8F6;
  --bg-disabled: #E8EBE6;
  --bg-contrast: #0E0F0C;
  --bg-success: #054D28;
  --bg-success-low: #EAF7EF;
  --bg-warning: #E8A600;
  --bg-warning-low: #FFF8E6;
  --bg-critical: #CB272F;
  --bg-critical-low: #FDEDEE;
  --bg-info: #093E5D;
  --bg-info-low: #E8F2F8;
  --fg: #0E0F0C;
  --fg-strong: #0E0F0C;
  --fg-lower: #545654;
  --fg-disabled: #868685;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #0E0F0C;
  --fg-success: #033218;
  --fg-warning: #664900;
  --fg-error: #84181E;
  --border: #D5D8D3;
  --border-low: #E8EBE6;
  --border-strong: #B3B5B2;
  --border-disabled: #D5D8D3;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F7F8F6;
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
  --radius-xs: 10px;
  --radius-sm: 10px;
  --radius-md: 10px;
  --radius-lg: 28px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Inter","Pretendard",-apple-system,system-ui,sans-serif;
  --btn-radius: 9999px;
  --btn-weight: 700;
  --btn-shadow: none;
  --ctl-radius: 10px;
  --card-radius: 10px;
  --btn-padx: 24px;
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
      primary:{50:"#F4FDEE",100:"#E2F6D5",200:"#CBF0B3",300:"#B5EB91",400:"#9FE870",500:"#9FE870",600:"#7BC94E",700:"#4F9B2C",800:"#2E6B18",900:"#1B4310",950:"#163300"},
      gray:{50:"#F7F8F6",100:"#E8EBE6",200:"#D5D8D3",300:"#B3B5B2",400:"#868685",500:"#6A6C6A",600:"#545654",700:"#454745",800:"#2C2E2B",900:"#0E0F0C",950:"#080906"},
      success:"#054D28", warning:"#E8A600", critical:"#CB272F",
    },
    borderRadius:{ btn:"9999px", card:"10px", input:"10px" },
    fontFamily:{ sans:["Inter","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}
```