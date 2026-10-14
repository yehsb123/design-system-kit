# Radix UI — 시스템 스펙
> 라딕스 공식 색 체계. 열두 단계마다 쓰임이 정해져 있어 9 는 꽉 찬 바탕, 11 은 글자처럼 번호만 보고 고를 수 있습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** SaaS  ·  **프레임워크:** React · 헤드리스 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBFDFF` | `#ECF6FE` | `#D1EDFF` | `#B0DBFD` | `#7BBFF3` | `#0090FF` | `#038BF6` | `#0784E9` | `#0B78D5` | `#0F5AA4` | `#113264` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FCFCFD` | `#F4F4F6` | `#E6E7EB` | `#DADBE1` | `#C5C6D0` | `#8B8D98` | `#848791` | `#7A7D86` | `#666A73` | `#45494F` | `#1C2024` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBFEFC` | `#ECF8EF` | `#D2EFDC` | `#B2DFC3` | `#7AC69E` | `#30A46C` | `#2C9C67` | `#258C5E` | `#1E6647` | `#173629` | `#0F231B` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEFDFB` | `#FEFAE1` | `#FFF3B3` | `#FDE986` | `#F5D974` | `#FFC53D` | `#FBBB27` | `#E6B550` | `#C17D16` | `#613E1B` | `#2B1C13` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFCFC` | `#FEF0F0` | `#FFD8D9` | `#FDC0C1` | `#F09EA0` | `#E5484D` | `#E04246` | `#D93A3F` | `#D13034` | `#A4242B` | `#641723` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFDFE` | `#E6F8FA` | `#C6EFF5` | `#A2DFE9` | `#63C6D7` | `#00A2C7` | `#0699BC` | `#0C87A5` | `#0F6378` | `#0C3742` | `#08232A` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#45494F` |
| `--canvas` | 페이지 바닥 | `#FCFCFD` | `#1C2024` |
| `--fg` | 본문 글자 | `#45494F` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#45494F` | `#FCFCFD` |
| `--fg-lower` | 보조 설명 | `#848791` | `#C5C6D0` |
| `--fg-disabled` | 비활성 글자 | `#C5C6D0` | `#848791` |
| `--border` | 기본 경계선 | `#E6E7EB` | `#666A73` |
| `--border-strong` | 강조 경계선 | `#DADBE1` | `#848791` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0090FF` | `#7BBFF3` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FBFDFF` | `#0F5AA4` |
| `--fg-primary` | 주된 색 글자 | `#038BF6` | `#B0DBFD` |
| `--bg-success` | 완료 표시 | `#30A46C` | `#30A46C` |
| `--bg-warning` | 주의 표시 | `#FFC53D` | `#FFC53D` |
| `--bg-critical` | 위험 표시 | `#E5484D` | `#E5484D` |
| `--bg-info` | 안내 표시 | `#0699BC` | `#63C6D7` |

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
| 버튼 | 14~15px | 500 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 6px |
| 카드 | 12px |
| 입력 | 6px |
| 태그 | 999px |
| 작은 조작부 | 4px |

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
| 본문 대 바탕 | 9.06 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.26 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 6px, 카드 12px, 입력 6px 으로 고정합니다
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

- 본문 글자: `#45494F`
- 보조 글자: `#848791`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FCFCFD`
- 경계선: `#E6E7EB`
- 주된 행동: `#0090FF`
- 글꼴: `"Inter",system-ui,-apple-system,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FBFDFF;
  --primary-100: #ECF6FE;
  --primary-200: #D1EDFF;
  --primary-300: #B0DBFD;
  --primary-400: #7BBFF3;
  --primary-500: #0090FF;
  --primary-600: #038BF6;
  --primary-700: #0784E9;
  --primary-800: #0B78D5;
  --primary-900: #0F5AA4;
  --primary-950: #113264;
  --gray-50: #FCFCFD;
  --gray-100: #F4F4F6;
  --gray-200: #E6E7EB;
  --gray-300: #DADBE1;
  --gray-400: #C5C6D0;
  --gray-500: #8B8D98;
  --gray-600: #848791;
  --gray-700: #7A7D86;
  --gray-800: #666A73;
  --gray-900: #45494F;
  --gray-950: #1C2024;
  --success-50: #FBFEFC;
  --success-100: #ECF8EF;
  --success-200: #D2EFDC;
  --success-300: #B2DFC3;
  --success-400: #7AC69E;
  --success-500: #30A46C;
  --success-600: #2C9C67;
  --success-700: #258C5E;
  --success-800: #1E6647;
  --success-900: #173629;
  --success-950: #0F231B;
  --warning-50: #FEFDFB;
  --warning-100: #FEFAE1;
  --warning-200: #FFF3B3;
  --warning-300: #FDE986;
  --warning-400: #F5D974;
  --warning-500: #FFC53D;
  --warning-600: #FBBB27;
  --warning-700: #E6B550;
  --warning-800: #C17D16;
  --warning-900: #613E1B;
  --warning-950: #2B1C13;
  --error-50: #FFFCFC;
  --error-100: #FEF0F0;
  --error-200: #FFD8D9;
  --error-300: #FDC0C1;
  --error-400: #F09EA0;
  --error-500: #E5484D;
  --error-600: #E04246;
  --error-700: #D93A3F;
  --error-800: #D13034;
  --error-900: #A4242B;
  --error-950: #641723;
  --info-50: #FAFDFE;
  --info-100: #E6F8FA;
  --info-200: #C6EFF5;
  --info-300: #A2DFE9;
  --info-400: #63C6D7;
  --info-500: #00A2C7;
  --info-600: #0699BC;
  --info-700: #0C87A5;
  --info-800: #0F6378;
  --info-900: #0C3742;
  --info-950: #08232A;
  --bg-primary: #0090FF;
  --bg-primary-low: #FBFDFF;
  --fg-primary: #038BF6;
  --fg-primary-low: #FBFDFF;
  --fg-point: #0090FF;
  --border-primary: #0090FF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F4F4F6;
  --bg-neutral: #F4F4F6;
  --bg-neutral-low: #FCFCFD;
  --bg-neutral-lower: #FCFCFD;
  --bg-disabled: #F4F4F6;
  --bg-contrast: #45494F;
  --bg-success: #30A46C;
  --bg-success-low: #FBFEFC;
  --bg-warning: #FFC53D;
  --bg-warning-low: #FEFDFB;
  --bg-critical: #E5484D;
  --bg-critical-low: #FFFCFC;
  --bg-info: #0699BC;
  --bg-info-low: #FAFDFE;
  --fg: #45494F;
  --fg-strong: #45494F;
  --fg-lower: #848791;
  --fg-disabled: #C5C6D0;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #258C5E;
  --fg-warning: #C17D16;
  --fg-error: #D93A3F;
  --border: #E6E7EB;
  --border-low: #F4F4F6;
  --border-strong: #DADBE1;
  --border-disabled: #E6E7EB;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FCFCFD;
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
  --radius-sm: 4px;
  --radius-md: 6px;
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
  --btn-weight: 500;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 12px;
  --btn-padx: 16px;
  --in-radius: 6px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FBFDFF",100:"#ECF6FE",200:"#D1EDFF",300:"#B0DBFD",400:"#7BBFF3",500:"#0090FF",600:"#038BF6",700:"#0784E9",800:"#0B78D5",900:"#0F5AA4",950:"#113264"},
      gray:{50:"#FCFCFD",100:"#F4F4F6",200:"#E6E7EB",300:"#DADBE1",400:"#C5C6D0",500:"#8B8D98",600:"#848791",700:"#7A7D86",800:"#666A73",900:"#45494F",950:"#1C2024"},
      success:"#30A46C", warning:"#FFC53D", critical:"#E5484D",
    },
    borderRadius:{ btn:"6px", card:"12px", input:"6px" },
    fontFamily:{ sans:["Inter","system-ui","-apple-system","sans-serif"] },
  }}
}
```