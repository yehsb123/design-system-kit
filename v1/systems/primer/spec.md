# GitHub Primer — 시스템 스펙
> 깃허브 프라이머 공식 토큰. 코드와 글이 섞인 화면을 위해 중립색을 열 단계로 길게 두고 모서리는 6px로 낮게 맞춥니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 개발·데이터  ·  **프레임워크:** React · Rails · 웹 컴포넌트

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#DDF4FF` | `#B6E3FF` | `#80CCFF` | `#54AEFF` | `#218BFF` | `#0969DA` | `#0655B7` | `#044599` | `#06387D` | `#082D65` | `#002155` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6F8FA` | `#EAEDF1` | `#DFE5EA` | `#D3DAE1` | `#ACB5C0` | `#59636E` | `#4D555E` | `#434951` | `#3B4249` | `#31363C` | `#25292E` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#DAFBE1` | `#ACEEBB` | `#6FDD8B` | `#4AC26B` | `#2DA44E` | `#1A7F37` | `#13692C` | `#095722` | `#02481B` | `#003A15` | `#002D11` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1E5` | `#FFD8B5` | `#FFB77C` | `#FB8F44` | `#E16F24` | `#BC4C00` | `#9D3C00` | `#823100` | `#6C2800` | `#582000` | `#471700` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEBE9` | `#FFCECB` | `#FFABA8` | `#FF8182` | `#FA4549` | `#CF222E` | `#AD1228` | `#900A21` | `#77041C` | `#610017` | `#4C0014` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#DDF4FF` | `#BEE6FF` | `#96D5FF` | `#6EC0FF` | `#4AA7FF` | `#218BFF` | `#0969DA` | `#0550AE` | `#033D8B` | `#0A3069` | `#002155` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#31363C` |
| `--canvas` | 페이지 바닥 | `#F6F8FA` | `#25292E` |
| `--fg` | 본문 글자 | `#31363C` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#31363C` | `#F6F8FA` |
| `--fg-lower` | 보조 설명 | `#4D555E` | `#ACB5C0` |
| `--fg-disabled` | 비활성 글자 | `#ACB5C0` | `#4D555E` |
| `--border` | 기본 경계선 | `#DFE5EA` | `#3B4249` |
| `--border-strong` | 강조 경계선 | `#D3DAE1` | `#4D555E` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#0969DA` | `#218BFF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#DDF4FF` | `#082D65` |
| `--fg-primary` | 주된 색 글자 | `#0655B7` | `#54AEFF` |
| `--bg-success` | 완료 표시 | `#1A7F37` | `#1A7F37` |
| `--bg-warning` | 주의 표시 | `#BC4C00` | `#BC4C00` |
| `--bg-critical` | 위험 표시 | `#CF222E` | `#CF222E` |
| `--bg-info` | 안내 표시 | `#0969DA` | `#4AA7FF` |

## 토큰 — 타이포

**글꼴:** `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif`

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
| 태그 | 999px |
| 작은 조작부 | 6px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | `0 1px 0 rgba(31,35,40,.04)` |
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
| 본문 대 바탕 | 12.18 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.19 : 1 | 통과 |

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

- 본문 글자: `#31363C`
- 보조 글자: `#4D555E`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F6F8FA`
- 경계선: `#DFE5EA`
- 주된 행동: `#0969DA`
- 글꼴: `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #DDF4FF;
  --primary-100: #B6E3FF;
  --primary-200: #80CCFF;
  --primary-300: #54AEFF;
  --primary-400: #218BFF;
  --primary-500: #0969DA;
  --primary-600: #0655B7;
  --primary-700: #044599;
  --primary-800: #06387D;
  --primary-900: #082D65;
  --primary-950: #002155;
  --gray-50: #F6F8FA;
  --gray-100: #EAEDF1;
  --gray-200: #DFE5EA;
  --gray-300: #D3DAE1;
  --gray-400: #ACB5C0;
  --gray-500: #59636E;
  --gray-600: #4D555E;
  --gray-700: #434951;
  --gray-800: #3B4249;
  --gray-900: #31363C;
  --gray-950: #25292E;
  --success-50: #DAFBE1;
  --success-100: #ACEEBB;
  --success-200: #6FDD8B;
  --success-300: #4AC26B;
  --success-400: #2DA44E;
  --success-500: #1A7F37;
  --success-600: #13692C;
  --success-700: #095722;
  --success-800: #02481B;
  --success-900: #003A15;
  --success-950: #002D11;
  --warning-50: #FFF1E5;
  --warning-100: #FFD8B5;
  --warning-200: #FFB77C;
  --warning-300: #FB8F44;
  --warning-400: #E16F24;
  --warning-500: #BC4C00;
  --warning-600: #9D3C00;
  --warning-700: #823100;
  --warning-800: #6C2800;
  --warning-900: #582000;
  --warning-950: #471700;
  --error-50: #FFEBE9;
  --error-100: #FFCECB;
  --error-200: #FFABA8;
  --error-300: #FF8182;
  --error-400: #FA4549;
  --error-500: #CF222E;
  --error-600: #AD1228;
  --error-700: #900A21;
  --error-800: #77041C;
  --error-900: #610017;
  --error-950: #4C0014;
  --info-50: #DDF4FF;
  --info-100: #BEE6FF;
  --info-200: #96D5FF;
  --info-300: #6EC0FF;
  --info-400: #4AA7FF;
  --info-500: #218BFF;
  --info-600: #0969DA;
  --info-700: #0550AE;
  --info-800: #033D8B;
  --info-900: #0A3069;
  --info-950: #002155;
  --bg-primary: #0969DA;
  --bg-primary-low: #DDF4FF;
  --fg-primary: #0655B7;
  --fg-primary-low: #DDF4FF;
  --fg-point: #0969DA;
  --border-primary: #0969DA;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #EAEDF1;
  --bg-neutral: #EAEDF1;
  --bg-neutral-low: #F6F8FA;
  --bg-neutral-lower: #F6F8FA;
  --bg-disabled: #EAEDF1;
  --bg-contrast: #31363C;
  --bg-success: #1A7F37;
  --bg-success-low: #DAFBE1;
  --bg-warning: #BC4C00;
  --bg-warning-low: #FFF1E5;
  --bg-critical: #CF222E;
  --bg-critical-low: #FFEBE9;
  --bg-info: #0969DA;
  --bg-info-low: #DDF4FF;
  --fg: #31363C;
  --fg-strong: #31363C;
  --fg-lower: #4D555E;
  --fg-disabled: #ACB5C0;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #095722;
  --fg-warning: #6C2800;
  --fg-error: #900A21;
  --border: #DFE5EA;
  --border-low: #EAEDF1;
  --border-strong: #D3DAE1;
  --border-disabled: #DFE5EA;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F6F8FA;
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
  --font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 600;
  --btn-shadow: 0 1px 0 rgba(31,35,40,.04);
  --ctl-radius: 6px;
  --card-radius: 6px;
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
      primary:{50:"#DDF4FF",100:"#B6E3FF",200:"#80CCFF",300:"#54AEFF",400:"#218BFF",500:"#0969DA",600:"#0655B7",700:"#044599",800:"#06387D",900:"#082D65",950:"#002155"},
      gray:{50:"#F6F8FA",100:"#EAEDF1",200:"#DFE5EA",300:"#D3DAE1",400:"#ACB5C0",500:"#59636E",600:"#4D555E",700:"#434951",800:"#3B4249",900:"#31363C",950:"#25292E"},
      success:"#1A7F37", warning:"#BC4C00", critical:"#CF222E",
    },
    borderRadius:{ btn:"6px", card:"6px", input:"6px" },
    fontFamily:{ sans:["-apple-system","BlinkMacSystemFont","Segoe UI","Noto Sans","Helvetica","Arial","sans-serif"] },
  }}
}
```