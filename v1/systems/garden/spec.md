# Zendesk Garden — 시스템 스펙
> 젠데스크 공식 토큰. 짙은 케일 그린을 중심에 두고 모서리를 4px로 낮게 깎아 상담 화면의 표와 목록을 빽빽하게 담습니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 협업  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECF9F9` | `#D4E9E8` | `#A1C6C6` | `#64A2A3` | `#448586` | `#16494F` | `#093C43` | `#042D33` | `#041F22` | `#061415` | `#060E0E` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F8F9F9` | `#E5E7E9` | `#C8CED1` | `#9DA7AF` | `#87929B` | `#5C6970` | `#39434B` | `#293239` | `#1C2227` | `#151A1E` | `#0A0D0E` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EEF8F4` | `#D7ECE3` | `#B4D5C9` | `#6AB499` | `#2EA37B` | `#037F52` | `#104B35` | `#0B3B29` | `#0C261C` | `#0A1511` | `#080D0C` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3E4` | `#FFE3C4` | `#FDC282` | `#ED8F29` | `#D97608` | `#AC5918` | `#673515` | `#4C2C17` | `#2D1E15` | `#18120F` | `#0E0C0B` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF2F3` | `#FCE0E2` | `#F4C0C5` | `#ED8891` | `#EB626E` | `#CD3642` | `#7E1D25` | `#671219` | `#3D1418` | `#1D1011` | `#100B0C` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EDF7FF` | `#DAEAF7` | `#B5D2E9` | `#78ABD3` | `#3396D4` | `#1F73B7` | `#13456D` | `#0F3655` | `#0A2338` | `#061420` | `#040D15` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#151A1E` |
| `--canvas` | 페이지 바닥 | `#F8F9F9` | `#0A0D0E` |
| `--fg` | 본문 글자 | `#151A1E` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#151A1E` | `#F8F9F9` |
| `--fg-lower` | 보조 설명 | `#39434B` | `#87929B` |
| `--fg-disabled` | 비활성 글자 | `#87929B` | `#39434B` |
| `--border` | 기본 경계선 | `#C8CED1` | `#1C2227` |
| `--border-strong` | 강조 경계선 | `#9DA7AF` | `#39434B` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#16494F` | `#448586` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#ECF9F9` | `#061415` |
| `--fg-primary` | 주된 색 글자 | `#093C43` | `#64A2A3` |
| `--bg-success` | 완료 표시 | `#037F52` | `#037F52` |
| `--bg-warning` | 주의 표시 | `#AC5918` | `#AC5918` |
| `--bg-critical` | 위험 표시 | `#CD3642` | `#CD3642` |
| `--bg-info` | 안내 표시 | `#13456D` | `#3396D4` |

## 토큰 — 타이포

**글꼴:** `system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`

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
| 버튼 | 4px |
| 카드 | 4px |
| 입력 | 4px |
| 태그 | 4px |
| 작은 조작부 | 4px |

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
| 본문 대 바탕 | 17.52 : 1 | 통과 |
| 흰글씨 대 주된 색 | 10.00 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 4px, 카드 4px, 입력 4px 으로 고정합니다
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
- 보조 글자: `#39434B`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F8F9F9`
- 경계선: `#C8CED1`
- 주된 행동: `#16494F`
- 글꼴: `system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #ECF9F9;
  --primary-100: #D4E9E8;
  --primary-200: #A1C6C6;
  --primary-300: #64A2A3;
  --primary-400: #448586;
  --primary-500: #16494F;
  --primary-600: #093C43;
  --primary-700: #042D33;
  --primary-800: #041F22;
  --primary-900: #061415;
  --primary-950: #060E0E;
  --gray-50: #F8F9F9;
  --gray-100: #E5E7E9;
  --gray-200: #C8CED1;
  --gray-300: #9DA7AF;
  --gray-400: #87929B;
  --gray-500: #5C6970;
  --gray-600: #39434B;
  --gray-700: #293239;
  --gray-800: #1C2227;
  --gray-900: #151A1E;
  --gray-950: #0A0D0E;
  --success-50: #EEF8F4;
  --success-100: #D7ECE3;
  --success-200: #B4D5C9;
  --success-300: #6AB499;
  --success-400: #2EA37B;
  --success-500: #037F52;
  --success-600: #104B35;
  --success-700: #0B3B29;
  --success-800: #0C261C;
  --success-900: #0A1511;
  --success-950: #080D0C;
  --warning-50: #FFF3E4;
  --warning-100: #FFE3C4;
  --warning-200: #FDC282;
  --warning-300: #ED8F29;
  --warning-400: #D97608;
  --warning-500: #AC5918;
  --warning-600: #673515;
  --warning-700: #4C2C17;
  --warning-800: #2D1E15;
  --warning-900: #18120F;
  --warning-950: #0E0C0B;
  --error-50: #FFF2F3;
  --error-100: #FCE0E2;
  --error-200: #F4C0C5;
  --error-300: #ED8891;
  --error-400: #EB626E;
  --error-500: #CD3642;
  --error-600: #7E1D25;
  --error-700: #671219;
  --error-800: #3D1418;
  --error-900: #1D1011;
  --error-950: #100B0C;
  --info-50: #EDF7FF;
  --info-100: #DAEAF7;
  --info-200: #B5D2E9;
  --info-300: #78ABD3;
  --info-400: #3396D4;
  --info-500: #1F73B7;
  --info-600: #13456D;
  --info-700: #0F3655;
  --info-800: #0A2338;
  --info-900: #061420;
  --info-950: #040D15;
  --bg-primary: #16494F;
  --bg-primary-low: #ECF9F9;
  --fg-primary: #093C43;
  --fg-primary-low: #ECF9F9;
  --fg-point: #16494F;
  --border-primary: #16494F;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #E5E7E9;
  --bg-neutral: #E5E7E9;
  --bg-neutral-low: #F8F9F9;
  --bg-neutral-lower: #F8F9F9;
  --bg-disabled: #E5E7E9;
  --bg-contrast: #151A1E;
  --bg-success: #037F52;
  --bg-success-low: #EEF8F4;
  --bg-warning: #AC5918;
  --bg-warning-low: #FFF3E4;
  --bg-critical: #CD3642;
  --bg-critical-low: #FFF2F3;
  --bg-info: #13456D;
  --bg-info-low: #EDF7FF;
  --fg: #151A1E;
  --fg-strong: #151A1E;
  --fg-lower: #39434B;
  --fg-disabled: #87929B;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #0B3B29;
  --fg-warning: #2D1E15;
  --fg-error: #671219;
  --border: #C8CED1;
  --border-low: #E5E7E9;
  --border-strong: #9DA7AF;
  --border-disabled: #C8CED1;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F8F9F9;
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
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --btn-radius: 4px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 4px;
  --btn-padx: 16px;
  --in-radius: 4px;
  --tag-radius: 4px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#ECF9F9",100:"#D4E9E8",200:"#A1C6C6",300:"#64A2A3",400:"#448586",500:"#16494F",600:"#093C43",700:"#042D33",800:"#041F22",900:"#061415",950:"#060E0E"},
      gray:{50:"#F8F9F9",100:"#E5E7E9",200:"#C8CED1",300:"#9DA7AF",400:"#87929B",500:"#5C6970",600:"#39434B",700:"#293239",800:"#1C2227",900:"#151A1E",950:"#0A0D0E"},
      success:"#037F52", warning:"#AC5918", critical:"#CD3642",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["system-ui","-apple-system","Segoe UI","Roboto","sans-serif"] },
  }}
}
```