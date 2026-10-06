# Mobile Kit — 시스템 스펙
> 모바일 앱 전용 킷. 큰 터치 타깃, 넉넉한 라운드, 민트 브랜드로 온보딩·헬스·라이프스타일에 적합.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 모바일  ·  **프레임워크:** React Native · Flutter

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECFDFA` | `#CFF9F0` | `#9FF0E0` | `#5FE3CC` | `#26CDB3` | `#0FB39B` | `#08917F` | `#0A7266` | `#0C5A51` | `#0A3F3A` | `#052422` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F9FA` | `#EEF1F3` | `#E0E5E8` | `#C6CDD2` | `#99A4AC` | `#6E7A82` | `#515C64` | `#3B444B` | `#262D32` | `#151A1E` | `#0A0D0F` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E9FBF1` | `#C6F5DC` | `#93EBBC` | `#5ADE9A` | `#2ECD7D` | `#16C784` | `#0FA06A` | `#0B7A50` | `#085638` | `#053824` | `#021C12` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF7E6` | `#FFEBB8` | `#FFDB7A` | `#FFC83D` | `#FFB905` | `#FFB020` | `#D18E10` | `#9E6B0B` | `#6E4A07` | `#422C00` | `#211600` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEDED` | `#FFD3D4` | `#FFA8AA` | `#FF7C80` | `#FF5A5F` | `#F53E43` | `#D12A2F` | `#A11F23` | `#701518` | `#420C0E` | `#210607` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF3FF` | `#CDE3FF` | `#9BC6FF` | `#66A6FF` | `#3F8DFF` | `#2E90FA` | `#1E6FD0` | `#1553A0` | `#0D3870` | `#061F40` | `#031020` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#151A1E` |
| `--canvas` | 페이지 바닥 | `#F7F9FA` | `#0A0D0F` |
| `--fg` | 본문 글자 | `#151A1E` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#151A1E` | `#F7F9FA` |
| `--fg-lower` | 보조 설명 | `#515C64` | `#99A4AC` |
| `--fg-disabled` | 비활성 글자 | `#99A4AC` | `#515C64` |
| `--border` | 기본 경계선 | `#E0E5E8` | `#262D32` |
| `--border-strong` | 강조 경계선 | `#C6CDD2` | `#515C64` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0FB39B` | `#26CDB3` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#ECFDFA` | `#0A3F3A` |
| `--fg-primary` | 주된 색 글자 | `#08917F` | `#5FE3CC` |
| `--bg-success` | 완료 표시 | `#16C784` | `#16C784` |
| `--bg-warning` | 주의 표시 | `#FFB020` | `#FFB020` |
| `--bg-critical` | 위험 표시 | `#F53E43` | `#F53E43` |
| `--bg-info` | 안내 표시 | `#1E6FD0` | `#3F8DFF` |

## 토큰 — 타이포

**글꼴:** `"Pretendard","Inter",-apple-system,system-ui,sans-serif`

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
| 버튼 | 14px |
| 카드 | 20px |
| 입력 | 12px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 20px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | `0 6px 18px -6px var(--bg-primary)` |
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
| 본문 대 바탕 | 17.52 : 1 | 통과 |
| 흰글씨 대 주된 색 | 2.64 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 14px, 카드 20px, 입력 12px 으로 고정합니다
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

- 본문 글자: `#151A1E`
- 보조 글자: `#515C64`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F7F9FA`
- 경계선: `#E0E5E8`
- 주된 행동: `#0FB39B`
- 글꼴: `"Pretendard","Inter",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #ECFDFA;
  --primary-100: #CFF9F0;
  --primary-200: #9FF0E0;
  --primary-300: #5FE3CC;
  --primary-400: #26CDB3;
  --primary-500: #0FB39B;
  --primary-600: #08917F;
  --primary-700: #0A7266;
  --primary-800: #0C5A51;
  --primary-900: #0A3F3A;
  --primary-950: #052422;
  --gray-50: #F7F9FA;
  --gray-100: #EEF1F3;
  --gray-200: #E0E5E8;
  --gray-300: #C6CDD2;
  --gray-400: #99A4AC;
  --gray-500: #6E7A82;
  --gray-600: #515C64;
  --gray-700: #3B444B;
  --gray-800: #262D32;
  --gray-900: #151A1E;
  --gray-950: #0A0D0F;
  --success-50: #E9FBF1;
  --success-100: #C6F5DC;
  --success-200: #93EBBC;
  --success-300: #5ADE9A;
  --success-400: #2ECD7D;
  --success-500: #16C784;
  --success-600: #0FA06A;
  --success-700: #0B7A50;
  --success-800: #085638;
  --success-900: #053824;
  --success-950: #021C12;
  --warning-50: #FFF7E6;
  --warning-100: #FFEBB8;
  --warning-200: #FFDB7A;
  --warning-300: #FFC83D;
  --warning-400: #FFB905;
  --warning-500: #FFB020;
  --warning-600: #D18E10;
  --warning-700: #9E6B0B;
  --warning-800: #6E4A07;
  --warning-900: #422C00;
  --warning-950: #211600;
  --error-50: #FFEDED;
  --error-100: #FFD3D4;
  --error-200: #FFA8AA;
  --error-300: #FF7C80;
  --error-400: #FF5A5F;
  --error-500: #F53E43;
  --error-600: #D12A2F;
  --error-700: #A11F23;
  --error-800: #701518;
  --error-900: #420C0E;
  --error-950: #210607;
  --info-50: #EAF3FF;
  --info-100: #CDE3FF;
  --info-200: #9BC6FF;
  --info-300: #66A6FF;
  --info-400: #3F8DFF;
  --info-500: #2E90FA;
  --info-600: #1E6FD0;
  --info-700: #1553A0;
  --info-800: #0D3870;
  --info-900: #061F40;
  --info-950: #031020;
  --bg-primary: #0FB39B;
  --bg-primary-low: #ECFDFA;
  --fg-primary: #08917F;
  --fg-primary-low: #ECFDFA;
  --fg-point: #2E90FA;
  --border-primary: #0FB39B;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EEF1F3;
  --bg-neutral: #EEF1F3;
  --bg-neutral-low: #F7F9FA;
  --bg-neutral-lower: #F7F9FA;
  --bg-disabled: #EEF1F3;
  --bg-contrast: #151A1E;
  --bg-success: #16C784;
  --bg-success-low: #E9FBF1;
  --bg-warning: #FFB020;
  --bg-warning-low: #FFF7E6;
  --bg-critical: #F53E43;
  --bg-critical-low: #FFEDED;
  --bg-info: #1E6FD0;
  --bg-info-low: #EAF3FF;
  --fg: #151A1E;
  --fg-strong: #151A1E;
  --fg-lower: #515C64;
  --fg-disabled: #99A4AC;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #151A1E;
  --fg-success: #0B7A50;
  --fg-warning: #6E4A07;
  --fg-error: #A11F23;
  --border: #E0E5E8;
  --border-low: #EEF1F3;
  --border-strong: #C6CDD2;
  --border-disabled: #E0E5E8;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F7F9FA;
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
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Pretendard","Inter",-apple-system,system-ui,sans-serif;
  --btn-radius: 14px;
  --btn-weight: 600;
  --btn-shadow: 0 6px 18px -6px var(--bg-primary);
  --ctl-radius: 8px;
  --card-radius: 20px;
  --btn-padx: 20px;
  --in-radius: 12px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#ECFDFA",100:"#CFF9F0",200:"#9FF0E0",300:"#5FE3CC",400:"#26CDB3",500:"#0FB39B",600:"#08917F",700:"#0A7266",800:"#0C5A51",900:"#0A3F3A",950:"#052422"},
      gray:{50:"#F7F9FA",100:"#EEF1F3",200:"#E0E5E8",300:"#C6CDD2",400:"#99A4AC",500:"#6E7A82",600:"#515C64",700:"#3B444B",800:"#262D32",900:"#151A1E",950:"#0A0D0F"},
      success:"#16C784", warning:"#FFB020", critical:"#F53E43",
    },
    borderRadius:{ btn:"14px", card:"20px", input:"12px" },
    fontFamily:{ sans:["Pretendard","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}
```