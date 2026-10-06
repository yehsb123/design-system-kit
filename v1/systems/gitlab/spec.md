# GitLab (Pajamas) — 시스템 스펙
> 오렌지 브랜드의 데브옵스 시스템. 파이프라인·이슈보드 등 개발 협업 화면에 최적.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 데브옵스  ·  **프레임워크:** Vue · Rails

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF3EC` | `#FDE0CE` | `#FCC09B` | `#FB9A67` | `#FC7C3F` | `#FC6D26` | `#E24329` | `#B93316` | `#8A2610` | `#5C1909` | `#300C04` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FBFAFD` | `#ECECEF` | `#DCDCDE` | `#BABABF` | `#89888D` | `#666666` | `#525252` | `#404040` | `#2B2B2B` | `#1F1E24` | `#0F0E12` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#ECF4EE` | `#C3E6CE` | `#91D4A8` | `#52B87D` | `#24975E` | `#108548` | `#0D7040` | `#0A5A33` | `#084426` | `#052E19` | `#03170D` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FDF3E6` | `#FAE0BD` | `#F5C583` | `#EFA84A` | `#E28E2B` | `#C17D10` | `#9E650C` | `#7A4E09` | `#543606` | `#2E1E03` | `#170F01` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FCEEEC` | `#F8D0CA` | `#F1A599` | `#E9765F` | `#E24A2E` | `#DD2B0E` | `#B7240C` | `#8E1C09` | `#661406` | `#3D0C04` | `#200602` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF3FB` | `#CCE0F5` | `#9BC2EB` | `#67A2E0` | `#3D89D8` | `#1F75CB` | `#195FA3` | `#13487C` | `#0D3155` | `#071A2E` | `#030D17` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1F1E24` |
| `--canvas` | 페이지 바닥 | `#FBFAFD` | `#0F0E12` |
| `--fg` | 본문 글자 | `#1F1E24` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1F1E24` | `#FBFAFD` |
| `--fg-lower` | 보조 설명 | `#525252` | `#89888D` |
| `--fg-disabled` | 비활성 글자 | `#89888D` | `#525252` |
| `--border` | 기본 경계선 | `#DCDCDE` | `#2B2B2B` |
| `--border-strong` | 강조 경계선 | `#BABABF` | `#525252` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#FC6D26` | `#FC7C3F` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FFF3EC` | `#5C1909` |
| `--fg-primary` | 주된 색 글자 | `#E24329` | `#FB9A67` |
| `--bg-success` | 완료 표시 | `#108548` | `#108548` |
| `--bg-warning` | 주의 표시 | `#C17D10` | `#C17D10` |
| `--bg-critical` | 위험 표시 | `#DD2B0E` | `#DD2B0E` |
| `--bg-info` | 안내 표시 | `#195FA3` | `#3D89D8` |

## 토큰 — 타이포

**글꼴:** `"Sora",-apple-system,system-ui,sans-serif`

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
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 600 |
| 버튼 그림자 | 쓰지 않음 |
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
| 본문 대 바탕 | 16.54 : 1 | 통과 |
| 흰글씨 대 주된 색 | 2.86 : 1 | 미달 |

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

- 본문 글자: `#1F1E24`
- 보조 글자: `#525252`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FBFAFD`
- 경계선: `#DCDCDE`
- 주된 행동: `#FC6D26`
- 글꼴: `"Sora",-apple-system,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FFF3EC;
  --primary-100: #FDE0CE;
  --primary-200: #FCC09B;
  --primary-300: #FB9A67;
  --primary-400: #FC7C3F;
  --primary-500: #FC6D26;
  --primary-600: #E24329;
  --primary-700: #B93316;
  --primary-800: #8A2610;
  --primary-900: #5C1909;
  --primary-950: #300C04;
  --gray-50: #FBFAFD;
  --gray-100: #ECECEF;
  --gray-200: #DCDCDE;
  --gray-300: #BABABF;
  --gray-400: #89888D;
  --gray-500: #666666;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #2B2B2B;
  --gray-900: #1F1E24;
  --gray-950: #0F0E12;
  --success-50: #ECF4EE;
  --success-100: #C3E6CE;
  --success-200: #91D4A8;
  --success-300: #52B87D;
  --success-400: #24975E;
  --success-500: #108548;
  --success-600: #0D7040;
  --success-700: #0A5A33;
  --success-800: #084426;
  --success-900: #052E19;
  --success-950: #03170D;
  --warning-50: #FDF3E6;
  --warning-100: #FAE0BD;
  --warning-200: #F5C583;
  --warning-300: #EFA84A;
  --warning-400: #E28E2B;
  --warning-500: #C17D10;
  --warning-600: #9E650C;
  --warning-700: #7A4E09;
  --warning-800: #543606;
  --warning-900: #2E1E03;
  --warning-950: #170F01;
  --error-50: #FCEEEC;
  --error-100: #F8D0CA;
  --error-200: #F1A599;
  --error-300: #E9765F;
  --error-400: #E24A2E;
  --error-500: #DD2B0E;
  --error-600: #B7240C;
  --error-700: #8E1C09;
  --error-800: #661406;
  --error-900: #3D0C04;
  --error-950: #200602;
  --info-50: #EAF3FB;
  --info-100: #CCE0F5;
  --info-200: #9BC2EB;
  --info-300: #67A2E0;
  --info-400: #3D89D8;
  --info-500: #1F75CB;
  --info-600: #195FA3;
  --info-700: #13487C;
  --info-800: #0D3155;
  --info-900: #071A2E;
  --info-950: #030D17;
  --bg-primary: #FC6D26;
  --bg-primary-low: #FFF3EC;
  --fg-primary: #E24329;
  --fg-primary-low: #FFF3EC;
  --fg-point: #FC9403;
  --border-primary: #FC6D26;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #ECECEF;
  --bg-neutral: #ECECEF;
  --bg-neutral-low: #FBFAFD;
  --bg-neutral-lower: #FBFAFD;
  --bg-disabled: #ECECEF;
  --bg-contrast: #1F1E24;
  --bg-success: #108548;
  --bg-success-low: #ECF4EE;
  --bg-warning: #C17D10;
  --bg-warning-low: #FDF3E6;
  --bg-critical: #DD2B0E;
  --bg-critical-low: #FCEEEC;
  --bg-info: #195FA3;
  --bg-info-low: #EAF3FB;
  --fg: #1F1E24;
  --fg-strong: #1F1E24;
  --fg-lower: #525252;
  --fg-disabled: #89888D;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #1F1E24;
  --fg-success: #0A5A33;
  --fg-warning: #543606;
  --fg-error: #8E1C09;
  --border: #DCDCDE;
  --border-low: #ECECEF;
  --border-strong: #BABABF;
  --border-disabled: #DCDCDE;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FBFAFD;
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
  --font-family: "Sora",-apple-system,system-ui,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 600;
  --btn-shadow: none;
  --ctl-radius: 4px;
  --card-radius: 8px;
  --btn-padx: 16px;
  --in-radius: 6px;
  --tag-radius: 4px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF3EC",100:"#FDE0CE",200:"#FCC09B",300:"#FB9A67",400:"#FC7C3F",500:"#FC6D26",600:"#E24329",700:"#B93316",800:"#8A2610",900:"#5C1909",950:"#300C04"},
      gray:{50:"#FBFAFD",100:"#ECECEF",200:"#DCDCDE",300:"#BABABF",400:"#89888D",500:"#666666",600:"#525252",700:"#404040",800:"#2B2B2B",900:"#1F1E24",950:"#0F0E12"},
      success:"#108548", warning:"#C17D10", critical:"#DD2B0E",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["Sora","-apple-system","system-ui","sans-serif"] },
  }}
}
```