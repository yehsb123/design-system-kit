# Aurora — 시스템 스펙
> 태그 12색·차트·다크/그린 테마까지 갖춘 풀세트 범용 SaaS 시스템. 대시보드·어드민에 바로 적용.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** React · TypeScript · Vite · Tailwind

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EEF3FF` | `#E5EDFF` | `#CBD9FF` | `#A3BCFF` | `#7396FF` | `#4178FF` | `#2E5FE6` | `#244BC0` | `#1F3E9C` | `#1E387D` | `#16244D` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F9FAFB` | `#F2F3F5` | `#E5E7EC` | `#D2D5DC` | `#A8A9B0` | `#7C7E86` | `#5C5C62` | `#43444A` | `#2C2C30` | `#212124` | `#0C0C0D` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5FFF0` | `#CFF7E0` | `#A0EFC2` | `#5FE39B` | `#22CE74` | `#00C24F` | `#00A23F` | `#007A33` | `#0A5F2C` | `#0C4F27` | `#03270F` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF9E5` | `#FFF0BF` | `#FFE083` | `#FFCB40` | `#FBB70E` | `#F59E0B` | `#D97706` | `#A65F00` | `#854D0E` | `#713F12` | `#3F2405` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEFEF` | `#FFD9D9` | `#FFB3B3` | `#FF8080` | `#FA4D4D` | `#F72424` | `#DC2626` | `#C20E1F` | `#9B1C1C` | `#7F1D1D` | `#450A0A` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5F0FF` | `#CFE4FF` | `#A3CCFF` | `#70ACFF` | `#3D8BFF` | `#1A73E8` | `#1E40AF` | `#1B3A9C` | `#1E3A8A` | `#1E3675` | `#132148` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#212124` |
| `--canvas` | 페이지 바닥 | `#F8F9FC` | `#1A1A1C` |
| `--fg` | 본문 글자 | `#0C0C0D` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#212124` | `#F1F1F3` |
| `--fg-lower` | 보조 설명 | `#5C5C62` | `#A8A9B0` |
| `--fg-disabled` | 비활성 글자 | `#A8A9B0` | `#62636B` |
| `--border` | 기본 경계선 | `#E5E7EC` | `#36363A` |
| `--border-strong` | 강조 경계선 | `#444444` | `#5A5A60` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#4178FF` | `#5A8AFF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E5EDFF` | `#192C5D` |
| `--fg-primary` | 주된 색 글자 | `#4178FF` | `#7BA4FF` |
| `--bg-success` | 완료 표시 | `#00C24F` | `#00A23F` |
| `--bg-warning` | 주의 표시 | `#F59E0B` | `#D97706` |
| `--bg-critical` | 위험 표시 | `#F72424` | `#DC2626` |
| `--bg-info` | 안내 표시 | `#1A73E8` | `#3D8BFF` |

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
| 버튼 | 14~15px | 600 |

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
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | `0 1px 2px rgba(0,0,0,.10)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2px, 끝처리 `round`, 꼬임 `round`.
선은 `currentColor` 를 씁니다. 색을 아이콘 안에 박지 않습니다.

## 컴포넌트

| 컴포넌트 | 규칙 |
|---|---|
| 버튼 | primary, secondary, outline, ghost, danger 다섯 가지. 크기는 sm, md, lg. 상태는 hover, focus-visible, active, disabled, loading |
| 태그 | 상태 5종, 카테고리 10색. 바탕과 글자를 짝으로 씁니다 |
| 입력 | 기본, 포커스, 에러, 성공, 비활성. 도움말과 필수 표시를 두고 색으로만 알리지 않습니다 |
| 오버레이 | 모달은 `role="dialog"`, `aria-modal`, Esc 닫기. 드로어, 토스트(`aria-live`), 툴팁, 드롭다운 |
| 내비 | 탭은 `role="tablist"`. 스텝, 페이지네이션, 브레드크럼 |
| 표 | 헤더, 상세, 소계, 합계의 계층색을 지킵니다 |

## 대비

| 짝 | 비율 | 기준(AA 4.5) |
|---|---|---|
| 본문 대 바탕 | 19.55 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.92 : 1 | 미달 |

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

- 본문 글자: `#0C0C0D`
- 보조 글자: `#5C5C62`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8F9FC`
- 경계선: `#E5E7EC`
- 주된 행동: `#4178FF`
- 글꼴: `"Pretendard",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EEF3FF;
  --primary-100: #E5EDFF;
  --primary-200: #CBD9FF;
  --primary-300: #A3BCFF;
  --primary-400: #7396FF;
  --primary-500: #4178FF;
  --primary-600: #2E5FE6;
  --primary-700: #244BC0;
  --primary-800: #1F3E9C;
  --primary-900: #1E387D;
  --primary-950: #16244D;
  --gray-50: #F9FAFB;
  --gray-100: #F2F3F5;
  --gray-200: #E5E7EC;
  --gray-300: #D2D5DC;
  --gray-400: #A8A9B0;
  --gray-500: #7C7E86;
  --gray-600: #5C5C62;
  --gray-700: #43444A;
  --gray-800: #2C2C30;
  --gray-900: #212124;
  --gray-950: #0C0C0D;
  --success-50: #E5FFF0;
  --success-100: #CFF7E0;
  --success-200: #A0EFC2;
  --success-300: #5FE39B;
  --success-400: #22CE74;
  --success-500: #00C24F;
  --success-600: #00A23F;
  --success-700: #007A33;
  --success-800: #0A5F2C;
  --success-900: #0C4F27;
  --success-950: #03270F;
  --warning-50: #FFF9E5;
  --warning-100: #FFF0BF;
  --warning-200: #FFE083;
  --warning-300: #FFCB40;
  --warning-400: #FBB70E;
  --warning-500: #F59E0B;
  --warning-600: #D97706;
  --warning-700: #A65F00;
  --warning-800: #854D0E;
  --warning-900: #713F12;
  --warning-950: #3F2405;
  --error-50: #FFEFEF;
  --error-100: #FFD9D9;
  --error-200: #FFB3B3;
  --error-300: #FF8080;
  --error-400: #FA4D4D;
  --error-500: #F72424;
  --error-600: #DC2626;
  --error-700: #C20E1F;
  --error-800: #9B1C1C;
  --error-900: #7F1D1D;
  --error-950: #450A0A;
  --info-50: #E5F0FF;
  --info-100: #CFE4FF;
  --info-200: #A3CCFF;
  --info-300: #70ACFF;
  --info-400: #3D8BFF;
  --info-500: #1A73E8;
  --info-600: #1E40AF;
  --info-700: #1B3A9C;
  --info-800: #1E3A8A;
  --info-900: #1E3675;
  --info-950: #132148;
  --bg-primary: #4178FF;
  --bg-primary-low: #E5EDFF;
  --fg-primary: #4178FF;
  --fg-primary-low: #E5EDFF;
  --fg-point: #00CCC2;
  --border-primary: #4178FF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1F2F7;
  --bg-neutral: #F5F5F5;
  --bg-neutral-low: #F7F7F9;
  --bg-neutral-lower: #F9FAFC;
  --bg-disabled: #F1F2F7;
  --bg-contrast: #0C0C0D;
  --bg-success: #00C24F;
  --bg-success-low: #E5FFF0;
  --bg-warning: #F59E0B;
  --bg-warning-low: #FFF9E5;
  --bg-critical: #F72424;
  --bg-critical-low: #FFEFEF;
  --bg-info: #1A73E8;
  --bg-info-low: #E5F0FF;
  --fg: #0C0C0D;
  --fg-strong: #212124;
  --fg-lower: #5C5C62;
  --fg-disabled: #A8A9B0;
  --fg-contrast: #FFFFFF;
  --fg-success: #00A23F;
  --fg-warning: #A65F00;
  --fg-error: #C20E1F;
  --border: #E5E7EC;
  --border-low: #F2F2F3;
  --border-strong: #444444;
  --border-disabled: #E5E7EC;
  --shadow-1: 0 0 8px rgba(0,0,0,.15);
  --shadow-2: 0 4px 8px rgba(0,0,0,.15);
  --shadow-3: 0 6px 16px rgba(0,0,0,.05);
  --shadow-4: 0 6px 24px rgba(0,0,0,.10);
  --shadow-5: 0 6px 24px rgba(0,0,0,.15);
  --shadow-6: 0 4px 36px rgba(0,0,0,.15);
  --panel: #FFFFFF;
  --canvas: #F8F9FC;
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
  --font-family: "Pretendard",-apple-system,system-ui,sans-serif;
  --btn-radius: 8px;
  --btn-weight: 600;
  --btn-shadow: 0 1px 2px rgba(0,0,0,.10);
  --ctl-radius: 6px;
  --card-radius: 12px;
  --btn-padx: 16px;
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
      primary:{50:"#EEF3FF",100:"#E5EDFF",200:"#CBD9FF",300:"#A3BCFF",400:"#7396FF",500:"#4178FF",600:"#2E5FE6",700:"#244BC0",800:"#1F3E9C",900:"#1E387D",950:"#16244D"},
      gray:{50:"#F9FAFB",100:"#F2F3F5",200:"#E5E7EC",300:"#D2D5DC",400:"#A8A9B0",500:"#7C7E86",600:"#5C5C62",700:"#43444A",800:"#2C2C30",900:"#212124",950:"#0C0C0D"},
      success:"#00C24F", warning:"#F59E0B", critical:"#F72424",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}
```