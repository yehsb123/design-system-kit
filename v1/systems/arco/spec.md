# Arco Design — 시스템 스펙
> 바이트댄스 아코 디자인 공식 토큰. 색마다 열 단계를 두고 6 을 기준으로 삼습니다. 중국어와 영문이 섞인 관리 화면을 전제로 만든 체계입니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · Vue 3 · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8F3FF` | `#BEDAFF` | `#94BFFF` | `#6AA1FF` | `#4080FF` | `#165DFF` | `#1047DB` | `#0A35B8` | `#052594` | `#021770` | `#000D4D` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F7F8FA` | `#F2F3F5` | `#E5E6EB` | `#C9CDD4` | `#A9AEB8` | `#86909C` | `#707C8A` | `#5A6574` | `#3E4857` | `#252B37` | `#1D2129` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8FFEA` | `#AFF0B5` | `#7BE188` | `#4CD263` | `#23C343` | `#00B42A` | `#009A29` | `#008026` | `#006622` | `#004D1C` | `#00260E` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF7E8` | `#FFE4BA` | `#FFCF8B` | `#FFB65D` | `#FF9A2E` | `#FF7D00` | `#DB6500` | `#B84F00` | `#943C00` | `#702A00` | `#4D1B00` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFECE8` | `#FDCDC5` | `#FBACA3` | `#F98981` | `#F76560` | `#F53F3F` | `#D32C31` | `#B21C24` | `#90101A` | `#6F0611` | `#4D000A` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E8FFFB` | `#B7F4EC` | `#89E9E0` | `#5EDFD6` | `#37D4CF` | `#14C9C9` | `#0DA5AA` | `#07828B` | `#03616C` | `#00424D` | `#00242A` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#252B37` |
| `--canvas` | 페이지 바닥 | `#F7F8FA` | `#1D2129` |
| `--fg` | 본문 글자 | `#252B37` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#252B37` | `#F7F8FA` |
| `--fg-lower` | 보조 설명 | `#707C8A` | `#A9AEB8` |
| `--fg-disabled` | 비활성 글자 | `#A9AEB8` | `#707C8A` |
| `--border` | 기본 경계선 | `#E5E6EB` | `#3E4857` |
| `--border-strong` | 강조 경계선 | `#C9CDD4` | `#707C8A` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#165DFF` | `#4080FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E8F3FF` | `#021770` |
| `--fg-primary` | 주된 색 글자 | `#1047DB` | `#6AA1FF` |
| `--bg-success` | 완료 표시 | `#00B42A` | `#00B42A` |
| `--bg-warning` | 주의 표시 | `#FF7D00` | `#FF7D00` |
| `--bg-critical` | 위험 표시 | `#F53F3F` | `#F53F3F` |
| `--bg-info` | 안내 표시 | `#0DA5AA` | `#37D4CF` |

## 토큰 — 타이포

**글꼴:** `"Inter","PingFang SC","Microsoft YaHei",system-ui,sans-serif`

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
| 카드 | 4px |
| 입력 | 2px |
| 태그 | 2px |
| 작은 조작부 | 2px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 16px |
| 버튼 글자 굵기 | 400 |
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
| 본문 대 바탕 | 14.20 : 1 | 통과 |
| 흰글씨 대 주된 색 | 5.19 : 1 | 통과 |

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

- 본문 글자: `#252B37`
- 보조 글자: `#707C8A`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#F7F8FA`
- 경계선: `#E5E6EB`
- 주된 행동: `#165DFF`
- 글꼴: `"Inter","PingFang SC","Microsoft YaHei",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E8F3FF;
  --primary-100: #BEDAFF;
  --primary-200: #94BFFF;
  --primary-300: #6AA1FF;
  --primary-400: #4080FF;
  --primary-500: #165DFF;
  --primary-600: #1047DB;
  --primary-700: #0A35B8;
  --primary-800: #052594;
  --primary-900: #021770;
  --primary-950: #000D4D;
  --gray-50: #F7F8FA;
  --gray-100: #F2F3F5;
  --gray-200: #E5E6EB;
  --gray-300: #C9CDD4;
  --gray-400: #A9AEB8;
  --gray-500: #86909C;
  --gray-600: #707C8A;
  --gray-700: #5A6574;
  --gray-800: #3E4857;
  --gray-900: #252B37;
  --gray-950: #1D2129;
  --success-50: #E8FFEA;
  --success-100: #AFF0B5;
  --success-200: #7BE188;
  --success-300: #4CD263;
  --success-400: #23C343;
  --success-500: #00B42A;
  --success-600: #009A29;
  --success-700: #008026;
  --success-800: #006622;
  --success-900: #004D1C;
  --success-950: #00260E;
  --warning-50: #FFF7E8;
  --warning-100: #FFE4BA;
  --warning-200: #FFCF8B;
  --warning-300: #FFB65D;
  --warning-400: #FF9A2E;
  --warning-500: #FF7D00;
  --warning-600: #DB6500;
  --warning-700: #B84F00;
  --warning-800: #943C00;
  --warning-900: #702A00;
  --warning-950: #4D1B00;
  --error-50: #FFECE8;
  --error-100: #FDCDC5;
  --error-200: #FBACA3;
  --error-300: #F98981;
  --error-400: #F76560;
  --error-500: #F53F3F;
  --error-600: #D32C31;
  --error-700: #B21C24;
  --error-800: #90101A;
  --error-900: #6F0611;
  --error-950: #4D000A;
  --info-50: #E8FFFB;
  --info-100: #B7F4EC;
  --info-200: #89E9E0;
  --info-300: #5EDFD6;
  --info-400: #37D4CF;
  --info-500: #14C9C9;
  --info-600: #0DA5AA;
  --info-700: #07828B;
  --info-800: #03616C;
  --info-900: #00424D;
  --info-950: #00242A;
  --bg-primary: #165DFF;
  --bg-primary-low: #E8F3FF;
  --fg-primary: #1047DB;
  --fg-primary-low: #E8F3FF;
  --fg-point: #165DFF;
  --border-primary: #165DFF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F2F3F5;
  --bg-neutral: #F2F3F5;
  --bg-neutral-low: #F7F8FA;
  --bg-neutral-lower: #F7F8FA;
  --bg-disabled: #F2F3F5;
  --bg-contrast: #252B37;
  --bg-success: #00B42A;
  --bg-success-low: #E8FFEA;
  --bg-warning: #FF7D00;
  --bg-warning-low: #FFF7E8;
  --bg-critical: #F53F3F;
  --bg-critical-low: #FFECE8;
  --bg-info: #0DA5AA;
  --bg-info-low: #E8FFFB;
  --fg: #252B37;
  --fg-strong: #252B37;
  --fg-lower: #707C8A;
  --fg-disabled: #A9AEB8;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #008026;
  --fg-warning: #943C00;
  --fg-error: #B21C24;
  --border: #E5E6EB;
  --border-low: #F2F3F5;
  --border-strong: #C9CDD4;
  --border-disabled: #E5E6EB;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #F7F8FA;
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
  --radius-md: 6px;
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
  --font-family: "Inter","PingFang SC","Microsoft YaHei",system-ui,sans-serif;
  --btn-radius: 2px;
  --btn-weight: 400;
  --btn-shadow: none;
  --ctl-radius: 2px;
  --card-radius: 4px;
  --btn-padx: 16px;
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
      primary:{50:"#E8F3FF",100:"#BEDAFF",200:"#94BFFF",300:"#6AA1FF",400:"#4080FF",500:"#165DFF",600:"#1047DB",700:"#0A35B8",800:"#052594",900:"#021770",950:"#000D4D"},
      gray:{50:"#F7F8FA",100:"#F2F3F5",200:"#E5E6EB",300:"#C9CDD4",400:"#A9AEB8",500:"#86909C",600:"#707C8A",700:"#5A6574",800:"#3E4857",900:"#252B37",950:"#1D2129"},
      success:"#00B42A", warning:"#FF7D00", critical:"#F53F3F",
    },
    borderRadius:{ btn:"2px", card:"4px", input:"2px" },
    fontFamily:{ sans:["Inter","PingFang SC","Microsoft YaHei","system-ui","sans-serif"] },
  }}
}
```