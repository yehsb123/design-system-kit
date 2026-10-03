# Neon — 시스템 스펙
> 다크 우선 네온 랜딩/마케팅 템플릿. 바이올렛에서 시안으로 가는 그라디언트와 글로우 이펙트가 핵심.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 랜딩  ·  **프레임워크:** Next.js · Landing

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F3F0FF` | `#E9E3FF` | `#D4C6FF` | `#B69EFF` | `#9A75FF` | `#7C4DFF` | `#6A2EF5` | `#5A1FD9` | `#4A1AAF` | `#3A1785` | `#240E52` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F5F6FA` | `#E9EBF2` | `#D2D6E3` | `#A9AEC4` | `#7B819C` | `#565B75` | `#3D4157` | `#2A2D3E` | `#1B1D2A` | `#0F1018` | `#07080D` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6FFF7` | `#B8FFEA` | `#7DFAD6` | `#38F0BE` | `#00E0A4` | `#00C48F` | `#00A379` | `#007D5E` | `#005843` | `#00382B` | `#001C15` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8E6` | `#FFEDB8` | `#FFDD7A` | `#FFC93D` | `#FFB300` | `#F59E00` | `#CC8200` | `#9E6500` | `#6E4600` | `#422A00` | `#211500` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEBF0` | `#FFCEDC` | `#FF9DBB` | `#FF5C90` | `#FF2D74` | `#F5155F` | `#D10B4E` | `#A5093D` | `#73062B` | `#45041A` | `#24020E` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6FBFF` | `#B8F4FF` | `#7DE9FF` | `#38D8FF` | `#00C2F0` | `#00A8D6` | `#0087AD` | `#006583` | `#00465C` | `#002B38` | `#00161C` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#0F1018` |
| `--canvas` | 페이지 바닥 | `#F5F6FA` | `#07080D` |
| `--fg` | 본문 글자 | `#0F1018` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#0F1018` | `#F5F6FA` |
| `--fg-lower` | 보조 설명 | `#3D4157` | `#7B819C` |
| `--fg-disabled` | 비활성 글자 | `#7B819C` | `#3D4157` |
| `--border` | 기본 경계선 | `#D2D6E3` | `#1B1D2A` |
| `--border-strong` | 강조 경계선 | `#A9AEC4` | `#3D4157` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#7C4DFF` | `#9A75FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#F3F0FF` | `#3A1785` |
| `--fg-primary` | 주된 색 글자 | `#6A2EF5` | `#B69EFF` |
| `--bg-success` | 완료 표시 | `#00C48F` | `#00C48F` |
| `--bg-warning` | 주의 표시 | `#F59E00` | `#F59E00` |
| `--bg-critical` | 위험 표시 | `#F5155F` | `#F5155F` |
| `--bg-info` | 안내 표시 | `#0087AD` | `#00C2F0` |

## 토큰 — 타이포

**글꼴:** `"Space Grotesk","Pretendard",system-ui,sans-serif`

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
| 버튼 | 14px |
| 카드 | 20px |
| 입력 | 12px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 22px |
| 버튼 글자 굵기 | 700 |
| 버튼 그림자 | `0 6px 24px -6px var(--bg-primary)` |
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
| 본문 대 바탕 | 18.96 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.81 : 1 | 통과 |

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

- 본문 글자: `#0F1018`
- 보조 글자: `#3D4157`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F5F6FA`
- 경계선: `#D2D6E3`
- 주된 행동: `#7C4DFF`
- 글꼴: `"Space Grotesk","Pretendard",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #F3F0FF;
  --primary-100: #E9E3FF;
  --primary-200: #D4C6FF;
  --primary-300: #B69EFF;
  --primary-400: #9A75FF;
  --primary-500: #7C4DFF;
  --primary-600: #6A2EF5;
  --primary-700: #5A1FD9;
  --primary-800: #4A1AAF;
  --primary-900: #3A1785;
  --primary-950: #240E52;
  --gray-50: #F5F6FA;
  --gray-100: #E9EBF2;
  --gray-200: #D2D6E3;
  --gray-300: #A9AEC4;
  --gray-400: #7B819C;
  --gray-500: #565B75;
  --gray-600: #3D4157;
  --gray-700: #2A2D3E;
  --gray-800: #1B1D2A;
  --gray-900: #0F1018;
  --gray-950: #07080D;
  --success-50: #E6FFF7;
  --success-100: #B8FFEA;
  --success-200: #7DFAD6;
  --success-300: #38F0BE;
  --success-400: #00E0A4;
  --success-500: #00C48F;
  --success-600: #00A379;
  --success-700: #007D5E;
  --success-800: #005843;
  --success-900: #00382B;
  --success-950: #001C15;
  --warning-50: #FFF8E6;
  --warning-100: #FFEDB8;
  --warning-200: #FFDD7A;
  --warning-300: #FFC93D;
  --warning-400: #FFB300;
  --warning-500: #F59E00;
  --warning-600: #CC8200;
  --warning-700: #9E6500;
  --warning-800: #6E4600;
  --warning-900: #422A00;
  --warning-950: #211500;
  --error-50: #FFEBF0;
  --error-100: #FFCEDC;
  --error-200: #FF9DBB;
  --error-300: #FF5C90;
  --error-400: #FF2D74;
  --error-500: #F5155F;
  --error-600: #D10B4E;
  --error-700: #A5093D;
  --error-800: #73062B;
  --error-900: #45041A;
  --error-950: #24020E;
  --info-50: #E6FBFF;
  --info-100: #B8F4FF;
  --info-200: #7DE9FF;
  --info-300: #38D8FF;
  --info-400: #00C2F0;
  --info-500: #00A8D6;
  --info-600: #0087AD;
  --info-700: #006583;
  --info-800: #00465C;
  --info-900: #002B38;
  --info-950: #00161C;
  --bg-primary: #7C4DFF;
  --bg-primary-low: #F3F0FF;
  --fg-primary: #6A2EF5;
  --fg-primary-low: #F3F0FF;
  --fg-point: #22D3EE;
  --border-primary: #7C4DFF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E9EBF2;
  --bg-neutral: #E9EBF2;
  --bg-neutral-low: #F5F6FA;
  --bg-neutral-lower: #F5F6FA;
  --bg-disabled: #E9EBF2;
  --bg-contrast: #0F1018;
  --bg-success: #00C48F;
  --bg-success-low: #E6FFF7;
  --bg-warning: #F59E00;
  --bg-warning-low: #FFF8E6;
  --bg-critical: #F5155F;
  --bg-critical-low: #FFEBF0;
  --bg-info: #0087AD;
  --bg-info-low: #E6FBFF;
  --fg: #0F1018;
  --fg-strong: #0F1018;
  --fg-lower: #3D4157;
  --fg-disabled: #7B819C;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #007D5E;
  --fg-warning: #6E4600;
  --fg-error: #A5093D;
  --border: #D2D6E3;
  --border-low: #E9EBF2;
  --border-strong: #A9AEC4;
  --border-disabled: #D2D6E3;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F5F6FA;
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
  --radius-lg: 22px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Space Grotesk","Pretendard",system-ui,sans-serif;
  --btn-radius: 14px;
  --btn-weight: 700;
  --btn-shadow: 0 6px 24px -6px var(--bg-primary);
  --ctl-radius: 8px;
  --card-radius: 20px;
  --btn-padx: 22px;
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
      primary:{50:"#F3F0FF",100:"#E9E3FF",200:"#D4C6FF",300:"#B69EFF",400:"#9A75FF",500:"#7C4DFF",600:"#6A2EF5",700:"#5A1FD9",800:"#4A1AAF",900:"#3A1785",950:"#240E52"},
      gray:{50:"#F5F6FA",100:"#E9EBF2",200:"#D2D6E3",300:"#A9AEC4",400:"#7B819C",500:"#565B75",600:"#3D4157",700:"#2A2D3E",800:"#1B1D2A",900:"#0F1018",950:"#07080D"},
      success:"#00C48F", warning:"#F59E00", critical:"#F5155F",
    },
    borderRadius:{ btn:"14px", card:"20px", input:"12px" },
    fontFamily:{ sans:["Space Grotesk","Pretendard","system-ui","sans-serif"] },
  }}
}
```