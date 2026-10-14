# Semi Design — 시스템 스펙
> 더우인 세미 디자인 공식 토큰. 0 에서 9 까지 열 단계를 두고 5 를 기준으로 삼습니다. 색을 성분으로 적어 두어 투명도를 겹쳐 쓰기 좋습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF5FF` | `#CBE7FE` | `#98CDFD` | `#65B2FC` | `#3295FB` | `#0064FA` | `#0062DD` | `#0057C1` | `#0048A5` | `#003A88` | `#002C6B` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F9F9F9` | `#E6E8EA` | `#C6CACD` | `#A7ABB0` | `#888D92` | `#6B7075` | `#595F65` | `#494E54` | `#393E44` | `#2A2E34` | `#1C1F23` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECF7EC` | `#D0F0D1` | `#A4E0A7` | `#7DD182` | `#5AC262` | `#3BB346` | `#329B3D` | `#298334` | `#216B2B` | `#195322` | `#113C18` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF8EA` | `#FEEECC` | `#FED998` | `#FDC165` | `#FDA633` | `#FC8800` | `#DA6E00` | `#B95600` | `#974000` | `#762D00` | `#541D00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF2ED` | `#FEDDD2` | `#FDB7A5` | `#FB9078` | `#FA664C` | `#F93920` | `#DC2917` | `#C01B10` | `#A40F09` | `#870705` | `#6A0103` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E5F7F8` | `#C2EFF0` | `#8ADDE2` | `#58CBD3` | `#2CB8C5` | `#05A4B6` | `#038C9E` | `#027585` | `#015E6D` | `#004855` | `#00323D` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#2A2E34` |
| `--canvas` | 페이지 바닥 | `#F9F9F9` | `#1C1F23` |
| `--fg` | 본문 글자 | `#2A2E34` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#2A2E34` | `#F9F9F9` |
| `--fg-lower` | 보조 설명 | `#595F65` | `#888D92` |
| `--fg-disabled` | 비활성 글자 | `#888D92` | `#595F65` |
| `--border` | 기본 경계선 | `#C6CACD` | `#393E44` |
| `--border-strong` | 강조 경계선 | `#A7ABB0` | `#595F65` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0064FA` | `#3295FB` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EAF5FF` | `#003A88` |
| `--fg-primary` | 주된 색 글자 | `#0062DD` | `#65B2FC` |
| `--bg-success` | 완료 표시 | `#3BB346` | `#3BB346` |
| `--bg-warning` | 주의 표시 | `#FC8800` | `#FC8800` |
| `--bg-critical` | 위험 표시 | `#F93920` | `#F93920` |
| `--bg-info` | 안내 표시 | `#038C9E` | `#2CB8C5` |

## 토큰 — 타이포

**글꼴:** `"Inter","PingFang SC","Helvetica Neue",system-ui,sans-serif`

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
| 카드 | 6px |
| 입력 | 6px |
| 태그 | 6px |
| 작은 조작부 | 3px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.8px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 13.65 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.00 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 6px, 카드 6px, 입력 6px 으로 고정합니다
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

- 본문 글자: `#2A2E34`
- 보조 글자: `#595F65`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F9F9F9`
- 경계선: `#C6CACD`
- 주된 행동: `#0064FA`
- 글꼴: `"Inter","PingFang SC","Helvetica Neue",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EAF5FF;
  --primary-100: #CBE7FE;
  --primary-200: #98CDFD;
  --primary-300: #65B2FC;
  --primary-400: #3295FB;
  --primary-500: #0064FA;
  --primary-600: #0062DD;
  --primary-700: #0057C1;
  --primary-800: #0048A5;
  --primary-900: #003A88;
  --primary-950: #002C6B;
  --gray-50: #F9F9F9;
  --gray-100: #E6E8EA;
  --gray-200: #C6CACD;
  --gray-300: #A7ABB0;
  --gray-400: #888D92;
  --gray-500: #6B7075;
  --gray-600: #595F65;
  --gray-700: #494E54;
  --gray-800: #393E44;
  --gray-900: #2A2E34;
  --gray-950: #1C1F23;
  --success-50: #ECF7EC;
  --success-100: #D0F0D1;
  --success-200: #A4E0A7;
  --success-300: #7DD182;
  --success-400: #5AC262;
  --success-500: #3BB346;
  --success-600: #329B3D;
  --success-700: #298334;
  --success-800: #216B2B;
  --success-900: #195322;
  --success-950: #113C18;
  --warning-50: #FFF8EA;
  --warning-100: #FEEECC;
  --warning-200: #FED998;
  --warning-300: #FDC165;
  --warning-400: #FDA633;
  --warning-500: #FC8800;
  --warning-600: #DA6E00;
  --warning-700: #B95600;
  --warning-800: #974000;
  --warning-900: #762D00;
  --warning-950: #541D00;
  --error-50: #FEF2ED;
  --error-100: #FEDDD2;
  --error-200: #FDB7A5;
  --error-300: #FB9078;
  --error-400: #FA664C;
  --error-500: #F93920;
  --error-600: #DC2917;
  --error-700: #C01B10;
  --error-800: #A40F09;
  --error-900: #870705;
  --error-950: #6A0103;
  --info-50: #E5F7F8;
  --info-100: #C2EFF0;
  --info-200: #8ADDE2;
  --info-300: #58CBD3;
  --info-400: #2CB8C5;
  --info-500: #05A4B6;
  --info-600: #038C9E;
  --info-700: #027585;
  --info-800: #015E6D;
  --info-900: #004855;
  --info-950: #00323D;
  --bg-primary: #0064FA;
  --bg-primary-low: #EAF5FF;
  --fg-primary: #0062DD;
  --fg-primary-low: #EAF5FF;
  --fg-point: #0064FA;
  --border-primary: #0064FA;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E6E8EA;
  --bg-neutral: #E6E8EA;
  --bg-neutral-low: #F9F9F9;
  --bg-neutral-lower: #F9F9F9;
  --bg-disabled: #E6E8EA;
  --bg-contrast: #2A2E34;
  --bg-success: #3BB346;
  --bg-success-low: #ECF7EC;
  --bg-warning: #FC8800;
  --bg-warning-low: #FFF8EA;
  --bg-critical: #F93920;
  --bg-critical-low: #FEF2ED;
  --bg-info: #038C9E;
  --bg-info-low: #E5F7F8;
  --fg: #2A2E34;
  --fg-strong: #2A2E34;
  --fg-lower: #595F65;
  --fg-disabled: #888D92;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #298334;
  --fg-warning: #974000;
  --fg-error: #C01B10;
  --border: #C6CACD;
  --border-low: #E6E8EA;
  --border-strong: #A7ABB0;
  --border-disabled: #C6CACD;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F9F9F9;
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
  --radius-sm: 6px;
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
  --font-family: "Inter","PingFang SC","Helvetica Neue",system-ui,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 3px;
  --card-radius: 6px;
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
      primary:{50:"#EAF5FF",100:"#CBE7FE",200:"#98CDFD",300:"#65B2FC",400:"#3295FB",500:"#0064FA",600:"#0062DD",700:"#0057C1",800:"#0048A5",900:"#003A88",950:"#002C6B"},
      gray:{50:"#F9F9F9",100:"#E6E8EA",200:"#C6CACD",300:"#A7ABB0",400:"#888D92",500:"#6B7075",600:"#595F65",700:"#494E54",800:"#393E44",900:"#2A2E34",950:"#1C1F23"},
      success:"#3BB346", warning:"#FC8800", critical:"#F93920",
    },
    borderRadius:{ btn:"6px", card:"6px", input:"6px" },
    fontFamily:{ sans:["Inter","PingFang SC","Helvetica Neue","system-ui","sans-serif"] },
  }}
}
```