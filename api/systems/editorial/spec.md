# Editorial — 시스템 스펙
> 세리프 기반 매거진/콘텐츠 템플릿. 높은 대비, 절제된 여백, 각진 형태로 읽기에 최적.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 에디토리얼  ·  **프레임워크:** 매거진 · 콘텐츠

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBEEEE` | `#F6D6D6` | `#EDACAC` | `#E07E7E` | `#CE5151` | `#B91C1C` | `#9E1414` | `#7E1010` | `#5C0C0C` | `#3D0808` | `#200404` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAF8F3` | `#F1EDE4` | `#E2DBCC` | `#C9BFAA` | `#A99C80` | `#857A5F` | `#625A45` | `#453F30` | `#2B2820` | `#1A1813` | `#0D0C09` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EEF6EE` | `#D4E9D4` | `#A9D3AA` | `#7DBC7F` | `#54A257` | `#2E7D32` | `#246628` | `#1B4E1E` | `#123615` | `#0A1F0C` | `#051006` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBF3E4` | `#F5E2BF` | `#EBC57F` | `#E0A83F` | `#CE9020` | `#B7791F` | `#946115` | `#70490F` | `#4D3209` | `#2B1C04` | `#160E02` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBEEEE` | `#F6D6D6` | `#EDACAC` | `#E07E7E` | `#CE5151` | `#B91C1C` | `#9E1414` | `#7E1010` | `#5C0C0C` | `#3D0808` | `#200404` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAEFF7` | `#CBD8EC` | `#98B1D9` | `#648BC6` | `#3A69B0` | `#1D4ED8` | `#173FAD` | `#123083` | `#0C2159` | `#06122F` | `#030918` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A1813` |
| `--canvas` | 페이지 바닥 | `#FAF8F3` | `#0D0C09` |
| `--fg` | 본문 글자 | `#1A1813` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A1813` | `#FAF8F3` |
| `--fg-lower` | 보조 설명 | `#625A45` | `#A99C80` |
| `--fg-disabled` | 비활성 글자 | `#A99C80` | `#625A45` |
| `--border` | 기본 경계선 | `#E2DBCC` | `#2B2820` |
| `--border-strong` | 강조 경계선 | `#C9BFAA` | `#625A45` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#B91C1C` | `#CE5151` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FBEEEE` | `#3D0808` |
| `--fg-primary` | 주된 색 글자 | `#9E1414` | `#E07E7E` |
| `--bg-success` | 완료 표시 | `#2E7D32` | `#2E7D32` |
| `--bg-warning` | 주의 표시 | `#B7791F` | `#B7791F` |
| `--bg-critical` | 위험 표시 | `#B91C1C` | `#B91C1C` |
| `--bg-info` | 안내 표시 | `#173FAD` | `#3A69B0` |

## 토큰 — 타이포

**글꼴:** `"Playfair Display","Noto Serif KR",Georgia,serif`

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
| 버튼 | 2px |
| 카드 | 4px |
| 입력 | 2px |
| 태그 | 2px |
| 작은 조작부 | 2px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 18px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 1.4px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.74 : 1 | 통과 |
| 흰글씨 대 주된 색 | 6.47 : 1 | 통과 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 2px, 카드 4px, 입력 2px 으로 고정합니다
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

- 본문 글자: `#1A1813`
- 보조 글자: `#625A45`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAF8F3`
- 경계선: `#E2DBCC`
- 주된 행동: `#B91C1C`
- 글꼴: `"Playfair Display","Noto Serif KR",Georgia,serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FBEEEE;
  --primary-100: #F6D6D6;
  --primary-200: #EDACAC;
  --primary-300: #E07E7E;
  --primary-400: #CE5151;
  --primary-500: #B91C1C;
  --primary-600: #9E1414;
  --primary-700: #7E1010;
  --primary-800: #5C0C0C;
  --primary-900: #3D0808;
  --primary-950: #200404;
  --gray-50: #FAF8F3;
  --gray-100: #F1EDE4;
  --gray-200: #E2DBCC;
  --gray-300: #C9BFAA;
  --gray-400: #A99C80;
  --gray-500: #857A5F;
  --gray-600: #625A45;
  --gray-700: #453F30;
  --gray-800: #2B2820;
  --gray-900: #1A1813;
  --gray-950: #0D0C09;
  --success-50: #EEF6EE;
  --success-100: #D4E9D4;
  --success-200: #A9D3AA;
  --success-300: #7DBC7F;
  --success-400: #54A257;
  --success-500: #2E7D32;
  --success-600: #246628;
  --success-700: #1B4E1E;
  --success-800: #123615;
  --success-900: #0A1F0C;
  --success-950: #051006;
  --warning-50: #FBF3E4;
  --warning-100: #F5E2BF;
  --warning-200: #EBC57F;
  --warning-300: #E0A83F;
  --warning-400: #CE9020;
  --warning-500: #B7791F;
  --warning-600: #946115;
  --warning-700: #70490F;
  --warning-800: #4D3209;
  --warning-900: #2B1C04;
  --warning-950: #160E02;
  --error-50: #FBEEEE;
  --error-100: #F6D6D6;
  --error-200: #EDACAC;
  --error-300: #E07E7E;
  --error-400: #CE5151;
  --error-500: #B91C1C;
  --error-600: #9E1414;
  --error-700: #7E1010;
  --error-800: #5C0C0C;
  --error-900: #3D0808;
  --error-950: #200404;
  --info-50: #EAEFF7;
  --info-100: #CBD8EC;
  --info-200: #98B1D9;
  --info-300: #648BC6;
  --info-400: #3A69B0;
  --info-500: #1D4ED8;
  --info-600: #173FAD;
  --info-700: #123083;
  --info-800: #0C2159;
  --info-900: #06122F;
  --info-950: #030918;
  --bg-primary: #B91C1C;
  --bg-primary-low: #FBEEEE;
  --fg-primary: #9E1414;
  --fg-primary-low: #FBEEEE;
  --fg-point: #B7791F;
  --border-primary: #B91C1C;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1EDE4;
  --bg-neutral: #F1EDE4;
  --bg-neutral-low: #FAF8F3;
  --bg-neutral-lower: #FAF8F3;
  --bg-disabled: #F1EDE4;
  --bg-contrast: #1A1813;
  --bg-success: #2E7D32;
  --bg-success-low: #EEF6EE;
  --bg-warning: #B7791F;
  --bg-warning-low: #FBF3E4;
  --bg-critical: #B91C1C;
  --bg-critical-low: #FBEEEE;
  --bg-info: #173FAD;
  --bg-info-low: #EAEFF7;
  --fg: #1A1813;
  --fg-strong: #1A1813;
  --fg-lower: #625A45;
  --fg-disabled: #A99C80;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #1B4E1E;
  --fg-warning: #4D3209;
  --fg-error: #7E1010;
  --border: #E2DBCC;
  --border-low: #F1EDE4;
  --border-strong: #C9BFAA;
  --border-disabled: #E2DBCC;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAF8F3;
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
  --radius-xs: 0px;
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Playfair Display","Noto Serif KR",Georgia,serif;
  --btn-radius: 2px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 2px;
  --card-radius: 4px;
  --btn-padx: 18px;
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
      primary:{50:"#FBEEEE",100:"#F6D6D6",200:"#EDACAC",300:"#E07E7E",400:"#CE5151",500:"#B91C1C",600:"#9E1414",700:"#7E1010",800:"#5C0C0C",900:"#3D0808",950:"#200404"},
      gray:{50:"#FAF8F3",100:"#F1EDE4",200:"#E2DBCC",300:"#C9BFAA",400:"#A99C80",500:"#857A5F",600:"#625A45",700:"#453F30",800:"#2B2820",900:"#1A1813",950:"#0D0C09"},
      success:"#2E7D32", warning:"#B7791F", critical:"#B91C1C",
    },
    borderRadius:{ btn:"2px", card:"4px", input:"2px" },
    fontFamily:{ sans:["Playfair Display","Noto Serif KR","Georgia","serif"] },
  }}
}
```