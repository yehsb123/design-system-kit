# Apple HIG — 시스템 스펙
> 애플 휴먼 인터페이스. System Blue #007AFF와 시스템 그레이·시맨틱 컬러 기반.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 앱  ·  **프레임워크:** SwiftUI · iOS · macOS

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5F1FF` | `#CCE4FF` | `#99C9FF` | `#66ADFF` | `#3392FF` | `#007AFF` | `#0062CC` | `#004999` | `#003166` | `#001833` | `#000C1A` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F2F2F7` | `#E5E5EA` | `#D1D1D6` | `#C7C7CC` | `#AEAEB2` | `#8E8E93` | `#636366` | `#48484A` | `#3A3A3C` | `#1C1C1E` | `#0A0A0B` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E9FBEF` | `#CFF7DB` | `#A0EFB8` | `#6FE595` | `#4FD87B` | `#34C759` | `#28A048` | `#1E7A37` | `#145226` | `#0A2B14` | `#04160A` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF4E5` | `#FFE8CC` | `#FFD199` | `#FFBA66` | `#FFA633` | `#FF9500` | `#CC7600` | `#995800` | `#663B00` | `#331D00` | `#1A0F00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFECEB` | `#FFD3D0` | `#FFA8A1` | `#FF7A70` | `#FF564A` | `#FF3B30` | `#CC271E` | `#99160F` | `#660E09` | `#330705` | `#1A0302` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5F1FF` | `#CCE4FF` | `#99C9FF` | `#66ADFF` | `#3392FF` | `#007AFF` | `#0062CC` | `#004999` | `#003166` | `#001833` | `#000C1A` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1C1C1E` |
| `--canvas` | 페이지 바닥 | `#F2F2F7` | `#0A0A0B` |
| `--fg` | 본문 글자 | `#1C1C1E` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1C1C1E` | `#F2F2F7` |
| `--fg-lower` | 보조 설명 | `#636366` | `#AEAEB2` |
| `--fg-disabled` | 비활성 글자 | `#AEAEB2` | `#636366` |
| `--border` | 기본 경계선 | `#D1D1D6` | `#3A3A3C` |
| `--border-strong` | 강조 경계선 | `#C7C7CC` | `#636366` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#007AFF` | `#3392FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E5F1FF` | `#001833` |
| `--fg-primary` | 주된 색 글자 | `#0062CC` | `#66ADFF` |
| `--bg-success` | 완료 표시 | `#34C759` | `#34C759` |
| `--bg-warning` | 주의 표시 | `#FF9500` | `#FF9500` |
| `--bg-critical` | 위험 표시 | `#FF3B30` | `#FF3B30` |
| `--bg-info` | 안내 표시 | `#0062CC` | `#3392FF` |

## 토큰 — 타이포

**글꼴:** `-apple-system,"SF Pro Text","SF Pro Display","Helvetica Neue",Arial,sans-serif`

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
| 버튼 | 12px |
| 카드 | 14px |
| 입력 | 10px |
| 태그 | 999px |
| 작은 조작부 | 7px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 18px |
| 버튼 글자 굵기 | 600 |
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
| 본문 대 바탕 | 17.01 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.02 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 12px, 카드 14px, 입력 10px 으로 고정합니다
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

- 본문 글자: `#1C1C1E`
- 보조 글자: `#636366`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F2F2F7`
- 경계선: `#D1D1D6`
- 주된 행동: `#007AFF`
- 글꼴: `-apple-system,"SF Pro Text","SF Pro Display","Helvetica Neue",Arial,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E5F1FF;
  --primary-100: #CCE4FF;
  --primary-200: #99C9FF;
  --primary-300: #66ADFF;
  --primary-400: #3392FF;
  --primary-500: #007AFF;
  --primary-600: #0062CC;
  --primary-700: #004999;
  --primary-800: #003166;
  --primary-900: #001833;
  --primary-950: #000C1A;
  --gray-50: #F2F2F7;
  --gray-100: #E5E5EA;
  --gray-200: #D1D1D6;
  --gray-300: #C7C7CC;
  --gray-400: #AEAEB2;
  --gray-500: #8E8E93;
  --gray-600: #636366;
  --gray-700: #48484A;
  --gray-800: #3A3A3C;
  --gray-900: #1C1C1E;
  --gray-950: #0A0A0B;
  --success-50: #E9FBEF;
  --success-100: #CFF7DB;
  --success-200: #A0EFB8;
  --success-300: #6FE595;
  --success-400: #4FD87B;
  --success-500: #34C759;
  --success-600: #28A048;
  --success-700: #1E7A37;
  --success-800: #145226;
  --success-900: #0A2B14;
  --success-950: #04160A;
  --warning-50: #FFF4E5;
  --warning-100: #FFE8CC;
  --warning-200: #FFD199;
  --warning-300: #FFBA66;
  --warning-400: #FFA633;
  --warning-500: #FF9500;
  --warning-600: #CC7600;
  --warning-700: #995800;
  --warning-800: #663B00;
  --warning-900: #331D00;
  --warning-950: #1A0F00;
  --error-50: #FFECEB;
  --error-100: #FFD3D0;
  --error-200: #FFA8A1;
  --error-300: #FF7A70;
  --error-400: #FF564A;
  --error-500: #FF3B30;
  --error-600: #CC271E;
  --error-700: #99160F;
  --error-800: #660E09;
  --error-900: #330705;
  --error-950: #1A0302;
  --info-50: #E5F1FF;
  --info-100: #CCE4FF;
  --info-200: #99C9FF;
  --info-300: #66ADFF;
  --info-400: #3392FF;
  --info-500: #007AFF;
  --info-600: #0062CC;
  --info-700: #004999;
  --info-800: #003166;
  --info-900: #001833;
  --info-950: #000C1A;
  --bg-primary: #007AFF;
  --bg-primary-low: #E5F1FF;
  --fg-primary: #0062CC;
  --fg-primary-low: #E5F1FF;
  --fg-point: #34C759;
  --border-primary: #007AFF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E5E5EA;
  --bg-neutral: #E5E5EA;
  --bg-neutral-low: #F2F2F7;
  --bg-neutral-lower: #F2F2F7;
  --bg-disabled: #E5E5EA;
  --bg-contrast: #1C1C1E;
  --bg-success: #34C759;
  --bg-success-low: #E9FBEF;
  --bg-warning: #FF9500;
  --bg-warning-low: #FFF4E5;
  --bg-critical: #FF3B30;
  --bg-critical-low: #FFECEB;
  --bg-info: #0062CC;
  --bg-info-low: #E5F1FF;
  --fg: #1C1C1E;
  --fg-strong: #1C1C1E;
  --fg-lower: #636366;
  --fg-disabled: #AEAEB2;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #1E7A37;
  --fg-warning: #663B00;
  --fg-error: #99160F;
  --border: #D1D1D6;
  --border-low: #E5E5EA;
  --border-strong: #C7C7CC;
  --border-disabled: #D1D1D6;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F2F2F7;
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
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: -apple-system,"SF Pro Text","SF Pro Display","Helvetica Neue",Arial,sans-serif;
  --btn-radius: 12px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 7px;
  --card-radius: 14px;
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
      primary:{50:"#E5F1FF",100:"#CCE4FF",200:"#99C9FF",300:"#66ADFF",400:"#3392FF",500:"#007AFF",600:"#0062CC",700:"#004999",800:"#003166",900:"#001833",950:"#000C1A"},
      gray:{50:"#F2F2F7",100:"#E5E5EA",200:"#D1D1D6",300:"#C7C7CC",400:"#AEAEB2",500:"#8E8E93",600:"#636366",700:"#48484A",800:"#3A3A3C",900:"#1C1C1E",950:"#0A0A0B"},
      success:"#34C759", warning:"#FF9500", critical:"#FF3B30",
    },
    borderRadius:{ btn:"12px", card:"14px", input:"10px" },
    fontFamily:{ sans:["-apple-system","SF Pro Text","SF Pro Display","Helvetica Neue","Arial","sans-serif"] },
  }}
}
```