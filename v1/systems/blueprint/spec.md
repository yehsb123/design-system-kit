# Palantir Blueprint — 시스템 스펙
> 팔란티어 블루프린트 공식 토큰. 모서리를 2px로 거의 깎지 않고 간격을 좁혀, 한 화면에 표와 그래프를 최대한 많이 올리는 분석 도구용 체계입니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 개발·데이터  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF4FF` | `#B1D2FF` | `#7EB2FC` | `#5899F3` | `#4084E4` | `#2D72D2` | `#2665BE` | `#1F59AA` | `#1A4E96` | `#12396F` | `#0A1F3D` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6F7F9` | `#E1E5E9` | `#C8CED5` | `#8994A3` | `#4C5664` | `#2F343C` | `#2B3038` | `#272C33` | `#23282F` | `#20252B` | `#1C2127` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E9F7F0` | `#A2DCBD` | `#65C291` | `#3FAC71` | `#2C985E` | `#238551` | `#1F7748` | `#1B6A40` | `#175E38` | `#114529` | `#092416` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF2E3` | `#FCCC94` | `#F8AE59` | `#EF9F43` | `#DE8C2E` | `#C87619` | `#A86314` | `#8D530F` | `#7D480E` | `#5A340A` | `#2F1B05` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FEF0F1` | `#FCBCBE` | `#F69093` | `#EB7377` | `#DD5A5E` | `#CD4246` | `#B9373B` | `#A62E32` | `#942A2D` | `#6D1F22` | `#3C1113` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F6FC` | `#9BD6F4` | `#60BCEA` | `#47ABDE` | `#2E96CA` | `#147EB3` | `#1171A0` | `#0E638E` | `#0D567A` | `#093E59` | `#052231` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#20252B` |
| `--canvas` | 페이지 바닥 | `#F6F7F9` | `#1C2127` |
| `--fg` | 본문 글자 | `#20252B` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#20252B` | `#F6F7F9` |
| `--fg-lower` | 보조 설명 | `#2B3038` | `#4C5664` |
| `--fg-disabled` | 비활성 글자 | `#4C5664` | `#2B3038` |
| `--border` | 기본 경계선 | `#C8CED5` | `#23282F` |
| `--border-strong` | 강조 경계선 | `#8994A3` | `#2B3038` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#2D72D2` | `#4084E4` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#EDF4FF` | `#12396F` |
| `--fg-primary` | 주된 색 글자 | `#2665BE` | `#5899F3` |
| `--bg-success` | 완료 표시 | `#238551` | `#238551` |
| `--bg-warning` | 주의 표시 | `#C87619` | `#C87619` |
| `--bg-critical` | 위험 표시 | `#CD4246` | `#CD4246` |
| `--bg-info` | 안내 표시 | `#1171A0` | `#2E96CA` |

## 토큰 — 타이포

**글꼴:** `"Inter",-apple-system,BlinkMacSystemFont,system-ui,sans-serif`

본문 행간은 150% 를 기준으로 합니다. 한글은 단어 단위로 끊어 쓰므로 `word-break: keep-all` 을 붙입니다.

| 쓰임새 | 크기 | 굵기 |
|---|---|---|
| 페이지 제목 | clamp(28px, 5vw, 44px) | 400 |
| 섹션 제목 | clamp(20px, 3vw, 30px) | 400 |
| 본문 | 15~16px | 400 |
| 보조 설명 | 13~14px | 400 |
| 라벨 | 11~12px | 400 |
| 버튼 | 14~15px | 400 |

## 토큰 — 간격과 모양

**기본 단위:** 4px

간격: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

| 요소 | 모서리 |
|---|---|
| 버튼 | 2px |
| 카드 | 2px |
| 입력 | 2px |
| 태그 | 2px |
| 작은 조작부 | 2px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 10px |
| 버튼 글자 굵기 | 400 |
| 버튼 그림자 | `0 1px 1px rgba(17,20,24,.2)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2px, 끝처리 `butt`, 꼬임 `miter`.
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
| 본문 대 바탕 | 15.43 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.72 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 2px, 카드 2px, 입력 2px 으로 고정합니다
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

- 본문 글자: `#20252B`
- 보조 글자: `#2B3038`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F6F7F9`
- 경계선: `#C8CED5`
- 주된 행동: `#2D72D2`
- 글꼴: `"Inter",-apple-system,BlinkMacSystemFont,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #EDF4FF;
  --primary-100: #B1D2FF;
  --primary-200: #7EB2FC;
  --primary-300: #5899F3;
  --primary-400: #4084E4;
  --primary-500: #2D72D2;
  --primary-600: #2665BE;
  --primary-700: #1F59AA;
  --primary-800: #1A4E96;
  --primary-900: #12396F;
  --primary-950: #0A1F3D;
  --gray-50: #F6F7F9;
  --gray-100: #E1E5E9;
  --gray-200: #C8CED5;
  --gray-300: #8994A3;
  --gray-400: #4C5664;
  --gray-500: #2F343C;
  --gray-600: #2B3038;
  --gray-700: #272C33;
  --gray-800: #23282F;
  --gray-900: #20252B;
  --gray-950: #1C2127;
  --success-50: #E9F7F0;
  --success-100: #A2DCBD;
  --success-200: #65C291;
  --success-300: #3FAC71;
  --success-400: #2C985E;
  --success-500: #238551;
  --success-600: #1F7748;
  --success-700: #1B6A40;
  --success-800: #175E38;
  --success-900: #114529;
  --success-950: #092416;
  --warning-50: #FEF2E3;
  --warning-100: #FCCC94;
  --warning-200: #F8AE59;
  --warning-300: #EF9F43;
  --warning-400: #DE8C2E;
  --warning-500: #C87619;
  --warning-600: #A86314;
  --warning-700: #8D530F;
  --warning-800: #7D480E;
  --warning-900: #5A340A;
  --warning-950: #2F1B05;
  --error-50: #FEF0F1;
  --error-100: #FCBCBE;
  --error-200: #F69093;
  --error-300: #EB7377;
  --error-400: #DD5A5E;
  --error-500: #CD4246;
  --error-600: #B9373B;
  --error-700: #A62E32;
  --error-800: #942A2D;
  --error-900: #6D1F22;
  --error-950: #3C1113;
  --info-50: #E8F6FC;
  --info-100: #9BD6F4;
  --info-200: #60BCEA;
  --info-300: #47ABDE;
  --info-400: #2E96CA;
  --info-500: #147EB3;
  --info-600: #1171A0;
  --info-700: #0E638E;
  --info-800: #0D567A;
  --info-900: #093E59;
  --info-950: #052231;
  --bg-primary: #2D72D2;
  --bg-primary-low: #EDF4FF;
  --fg-primary: #2665BE;
  --fg-primary-low: #EDF4FF;
  --fg-point: #2D72D2;
  --border-primary: #2D72D2;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E1E5E9;
  --bg-neutral: #E1E5E9;
  --bg-neutral-low: #F6F7F9;
  --bg-neutral-lower: #F6F7F9;
  --bg-disabled: #E1E5E9;
  --bg-contrast: #20252B;
  --bg-success: #238551;
  --bg-success-low: #E9F7F0;
  --bg-warning: #C87619;
  --bg-warning-low: #FEF2E3;
  --bg-critical: #CD4246;
  --bg-critical-low: #FEF0F1;
  --bg-info: #1171A0;
  --bg-info-low: #E8F6FC;
  --fg: #20252B;
  --fg-strong: #20252B;
  --fg-lower: #2B3038;
  --fg-disabled: #4C5664;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #1B6A40;
  --fg-warning: #7D480E;
  --fg-error: #A62E32;
  --border: #C8CED5;
  --border-low: #E1E5E9;
  --border-strong: #8994A3;
  --border-disabled: #C8CED5;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F6F7F9;
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
  --radius-xs: 2px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Inter",-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
  --btn-radius: 2px;
  --btn-weight: 400;
  --btn-shadow: 0 1px 1px rgba(17,20,24,.2);
  --ctl-radius: 2px;
  --card-radius: 2px;
  --btn-padx: 10px;
  --in-radius: 2px;
  --tag-radius: 2px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF4FF",100:"#B1D2FF",200:"#7EB2FC",300:"#5899F3",400:"#4084E4",500:"#2D72D2",600:"#2665BE",700:"#1F59AA",800:"#1A4E96",900:"#12396F",950:"#0A1F3D"},
      gray:{50:"#F6F7F9",100:"#E1E5E9",200:"#C8CED5",300:"#8994A3",400:"#4C5664",500:"#2F343C",600:"#2B3038",700:"#272C33",800:"#23282F",900:"#20252B",950:"#1C2127"},
      success:"#238551", warning:"#C87619", critical:"#CD4246",
    },
    borderRadius:{ btn:"2px", card:"2px", input:"2px" },
    fontFamily:{ sans:["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"] },
  }}
}
```