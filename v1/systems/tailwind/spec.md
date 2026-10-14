# Tailwind CSS — 시스템 스펙
> 테일윈드 기본 팔레트. 스물두 색이 저마다 열한 단계를 갖춘 체계로, 클래스 이름이 곧 토큰 이름이라 코드와 디자인이 어긋나지 않습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** CSS 유틸리티 · 모든 프레임워크

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F0F9FF` | `#E0F2FE` | `#BAE6FD` | `#7DD3FC` | `#38BDF8` | `#0EA5E9` | `#0284C7` | `#0369A1` | `#075985` | `#0C4A6E` | `#082F49` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F8FAFC` | `#F1F5F9` | `#E2E8F0` | `#CBD5E1` | `#94A3B8` | `#64748B` | `#475569` | `#334155` | `#1E293B` | `#0F172A` | `#020617` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECFDF5` | `#D1FAE5` | `#A7F3D0` | `#6EE7B7` | `#34D399` | `#10B981` | `#059669` | `#047857` | `#065F46` | `#064E3B` | `#022C22` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFBEB` | `#FEF3C7` | `#FDE68A` | `#FCD34D` | `#FBBF24` | `#F59E0B` | `#D97706` | `#B45309` | `#92400E` | `#78350F` | `#451A03` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1F2` | `#FFE4E6` | `#FECDD3` | `#FDA4AF` | `#FB7185` | `#F43F5E` | `#E11D48` | `#BE123C` | `#9F1239` | `#881337` | `#4C0519` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECFEFF` | `#CFFAFE` | `#A5F3FC` | `#67E8F9` | `#22D3EE` | `#06B6D4` | `#0891B2` | `#0E7490` | `#155E75` | `#164E63` | `#083344` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#0F172A` |
| `--canvas` | 페이지 바닥 | `#F8FAFC` | `#020617` |
| `--fg` | 본문 글자 | `#0F172A` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#0F172A` | `#F8FAFC` |
| `--fg-lower` | 보조 설명 | `#475569` | `#94A3B8` |
| `--fg-disabled` | 비활성 글자 | `#94A3B8` | `#475569` |
| `--border` | 기본 경계선 | `#E2E8F0` | `#1E293B` |
| `--border-strong` | 강조 경계선 | `#CBD5E1` | `#475569` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0EA5E9` | `#38BDF8` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F0F9FF` | `#0C4A6E` |
| `--fg-primary` | 주된 색 글자 | `#0284C7` | `#7DD3FC` |
| `--bg-success` | 완료 표시 | `#10B981` | `#10B981` |
| `--bg-warning` | 주의 표시 | `#F59E0B` | `#F59E0B` |
| `--bg-critical` | 위험 표시 | `#F43F5E` | `#F43F5E` |
| `--bg-info` | 안내 표시 | `#0891B2` | `#22D3EE` |

## 토큰 — 타이포

**글꼴:** `"Inter",system-ui,-apple-system,sans-serif`

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
| 버튼 | 6px |
| 카드 | 8px |
| 입력 | 6px |
| 태그 | 6px |
| 작은 조작부 | 6px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.5px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.85 : 1 | 통과 |
| 흰글씨 대 주된 색 | 2.77 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 6px, 카드 8px, 입력 6px 으로 고정합니다
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

- 본문 글자: `#0F172A`
- 보조 글자: `#475569`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8FAFC`
- 경계선: `#E2E8F0`
- 주된 행동: `#0EA5E9`
- 글꼴: `"Inter",system-ui,-apple-system,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F0F9FF;
  --primary-100: #E0F2FE;
  --primary-200: #BAE6FD;
  --primary-300: #7DD3FC;
  --primary-400: #38BDF8;
  --primary-500: #0EA5E9;
  --primary-600: #0284C7;
  --primary-700: #0369A1;
  --primary-800: #075985;
  --primary-900: #0C4A6E;
  --primary-950: #082F49;
  --gray-50: #F8FAFC;
  --gray-100: #F1F5F9;
  --gray-200: #E2E8F0;
  --gray-300: #CBD5E1;
  --gray-400: #94A3B8;
  --gray-500: #64748B;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1E293B;
  --gray-900: #0F172A;
  --gray-950: #020617;
  --success-50: #ECFDF5;
  --success-100: #D1FAE5;
  --success-200: #A7F3D0;
  --success-300: #6EE7B7;
  --success-400: #34D399;
  --success-500: #10B981;
  --success-600: #059669;
  --success-700: #047857;
  --success-800: #065F46;
  --success-900: #064E3B;
  --success-950: #022C22;
  --warning-50: #FFFBEB;
  --warning-100: #FEF3C7;
  --warning-200: #FDE68A;
  --warning-300: #FCD34D;
  --warning-400: #FBBF24;
  --warning-500: #F59E0B;
  --warning-600: #D97706;
  --warning-700: #B45309;
  --warning-800: #92400E;
  --warning-900: #78350F;
  --warning-950: #451A03;
  --error-50: #FFF1F2;
  --error-100: #FFE4E6;
  --error-200: #FECDD3;
  --error-300: #FDA4AF;
  --error-400: #FB7185;
  --error-500: #F43F5E;
  --error-600: #E11D48;
  --error-700: #BE123C;
  --error-800: #9F1239;
  --error-900: #881337;
  --error-950: #4C0519;
  --info-50: #ECFEFF;
  --info-100: #CFFAFE;
  --info-200: #A5F3FC;
  --info-300: #67E8F9;
  --info-400: #22D3EE;
  --info-500: #06B6D4;
  --info-600: #0891B2;
  --info-700: #0E7490;
  --info-800: #155E75;
  --info-900: #164E63;
  --info-950: #083344;
  --bg-primary: #0EA5E9;
  --bg-primary-low: #F0F9FF;
  --fg-primary: #0284C7;
  --fg-primary-low: #F0F9FF;
  --fg-point: #0EA5E9;
  --border-primary: #0EA5E9;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1F5F9;
  --bg-neutral: #F1F5F9;
  --bg-neutral-low: #F8FAFC;
  --bg-neutral-lower: #F8FAFC;
  --bg-disabled: #F1F5F9;
  --bg-contrast: #0F172A;
  --bg-success: #10B981;
  --bg-success-low: #ECFDF5;
  --bg-warning: #F59E0B;
  --bg-warning-low: #FFFBEB;
  --bg-critical: #F43F5E;
  --bg-critical-low: #FFF1F2;
  --bg-info: #0891B2;
  --bg-info-low: #ECFEFF;
  --fg: #0F172A;
  --fg-strong: #0F172A;
  --fg-lower: #475569;
  --fg-disabled: #94A3B8;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #0F172A;
  --fg-success: #047857;
  --fg-warning: #92400E;
  --fg-error: #BE123C;
  --border: #E2E8F0;
  --border-low: #F1F5F9;
  --border-strong: #CBD5E1;
  --border-disabled: #E2E8F0;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F8FAFC;
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
  --font-family: "Inter",system-ui,-apple-system,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 6px;
  --card-radius: 8px;
  --btn-padx: 16px;
  --in-radius: 6px;
  --tag-radius: 6px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F0F9FF",100:"#E0F2FE",200:"#BAE6FD",300:"#7DD3FC",400:"#38BDF8",500:"#0EA5E9",600:"#0284C7",700:"#0369A1",800:"#075985",900:"#0C4A6E",950:"#082F49"},
      gray:{50:"#F8FAFC",100:"#F1F5F9",200:"#E2E8F0",300:"#CBD5E1",400:"#94A3B8",500:"#64748B",600:"#475569",700:"#334155",800:"#1E293B",900:"#0F172A",950:"#020617"},
      success:"#10B981", warning:"#F59E0B", critical:"#F43F5E",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["Inter","system-ui","-apple-system","sans-serif"] },
  }}
}
```