# Ant Design — 시스템 스펙
> 엔터프라이즈 UI의 표준. Daybreak Blue #1677FF와 촘촘한 팔레트로 어드민과 백오피스에 강합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 엔터프라이즈  ·  **프레임워크:** React · TypeScript

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6F4FF` | `#BAE0FF` | `#91CAFF` | `#69B1FF` | `#4096FF` | `#1677FF` | `#0958D9` | `#003EB3` | `#002C8C` | `#001D66` | `#001140` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAFAFA` | `#F5F5F5` | `#F0F0F0` | `#D9D9D9` | `#BFBFBF` | `#8C8C8C` | `#595959` | `#434343` | `#262626` | `#1F1F1F` | `#141414` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#F6FFED` | `#D9F7BE` | `#B7EB8F` | `#95DE64` | `#73D13D` | `#52C41A` | `#389E0D` | `#237804` | `#135200` | `#092B00` | `#051A00` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFFBE6` | `#FFF1B8` | `#FFE58F` | `#FFD666` | `#FFC53D` | `#FAAD14` | `#D48806` | `#AD6800` | `#874D00` | `#613400` | `#3F2200` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF1F0` | `#FFCCC7` | `#FFA39E` | `#FF7875` | `#FF4D4F` | `#F5222D` | `#CF1322` | `#A8071A` | `#820014` | `#5C0011` | `#3A0007` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E6F4FF` | `#BAE0FF` | `#91CAFF` | `#69B1FF` | `#4096FF` | `#1677FF` | `#0958D9` | `#003EB3` | `#002C8C` | `#001D66` | `#001140` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1F1F1F` |
| `--canvas` | 페이지 바닥 | `#FAFAFA` | `#141414` |
| `--fg` | 본문 글자 | `#1F1F1F` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1F1F1F` | `#FAFAFA` |
| `--fg-lower` | 보조 설명 | `#595959` | `#BFBFBF` |
| `--fg-disabled` | 비활성 글자 | `#BFBFBF` | `#595959` |
| `--border` | 기본 경계선 | `#F0F0F0` | `#262626` |
| `--border-strong` | 강조 경계선 | `#D9D9D9` | `#595959` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#1677FF` | `#4096FF` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#E6F4FF` | `#001D66` |
| `--fg-primary` | 주된 색 글자 | `#0958D9` | `#69B1FF` |
| `--bg-success` | 완료 표시 | `#52C41A` | `#52C41A` |
| `--bg-warning` | 주의 표시 | `#FAAD14` | `#FAAD14` |
| `--bg-critical` | 위험 표시 | `#F5222D` | `#F5222D` |
| `--bg-info` | 안내 표시 | `#0958D9` | `#4096FF` |

## 토큰 — 타이포

**글꼴:** `-apple-system,"Segoe UI",Roboto,system-ui,sans-serif`

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
| 버튼 | 6px |
| 카드 | 8px |
| 입력 | 6px |
| 태그 | 4px |
| 작은 조작부 | 4px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 15px |
| 버튼 글자 굵기 | 400 |
| 버튼 그림자 | `0 2px 0 rgba(5,145,255,.10)` |
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
| 본문 대 바탕 | 16.48 : 1 | 통과 |
| 흰글씨 대 주된 색 | 4.10 : 1 | 미달 |

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

- 본문 글자: `#1F1F1F`
- 보조 글자: `#595959`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAFAFA`
- 경계선: `#F0F0F0`
- 주된 행동: `#1677FF`
- 글꼴: `-apple-system,"Segoe UI",Roboto,system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #E6F4FF;
  --primary-100: #BAE0FF;
  --primary-200: #91CAFF;
  --primary-300: #69B1FF;
  --primary-400: #4096FF;
  --primary-500: #1677FF;
  --primary-600: #0958D9;
  --primary-700: #003EB3;
  --primary-800: #002C8C;
  --primary-900: #001D66;
  --primary-950: #001140;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #F0F0F0;
  --gray-300: #D9D9D9;
  --gray-400: #BFBFBF;
  --gray-500: #8C8C8C;
  --gray-600: #595959;
  --gray-700: #434343;
  --gray-800: #262626;
  --gray-900: #1F1F1F;
  --gray-950: #141414;
  --success-50: #F6FFED;
  --success-100: #D9F7BE;
  --success-200: #B7EB8F;
  --success-300: #95DE64;
  --success-400: #73D13D;
  --success-500: #52C41A;
  --success-600: #389E0D;
  --success-700: #237804;
  --success-800: #135200;
  --success-900: #092B00;
  --success-950: #051A00;
  --warning-50: #FFFBE6;
  --warning-100: #FFF1B8;
  --warning-200: #FFE58F;
  --warning-300: #FFD666;
  --warning-400: #FFC53D;
  --warning-500: #FAAD14;
  --warning-600: #D48806;
  --warning-700: #AD6800;
  --warning-800: #874D00;
  --warning-900: #613400;
  --warning-950: #3F2200;
  --error-50: #FFF1F0;
  --error-100: #FFCCC7;
  --error-200: #FFA39E;
  --error-300: #FF7875;
  --error-400: #FF4D4F;
  --error-500: #F5222D;
  --error-600: #CF1322;
  --error-700: #A8071A;
  --error-800: #820014;
  --error-900: #5C0011;
  --error-950: #3A0007;
  --info-50: #E6F4FF;
  --info-100: #BAE0FF;
  --info-200: #91CAFF;
  --info-300: #69B1FF;
  --info-400: #4096FF;
  --info-500: #1677FF;
  --info-600: #0958D9;
  --info-700: #003EB3;
  --info-800: #002C8C;
  --info-900: #001D66;
  --info-950: #001140;
  --bg-primary: #1677FF;
  --bg-primary-low: #E6F4FF;
  --fg-primary: #0958D9;
  --fg-primary-low: #E6F4FF;
  --fg-point: #52C41A;
  --border-primary: #1677FF;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F5F5F5;
  --bg-neutral: #F5F5F5;
  --bg-neutral-low: #FAFAFA;
  --bg-neutral-lower: #FAFAFA;
  --bg-disabled: #F5F5F5;
  --bg-contrast: #1F1F1F;
  --bg-success: #52C41A;
  --bg-success-low: #F6FFED;
  --bg-warning: #FAAD14;
  --bg-warning-low: #FFFBE6;
  --bg-critical: #F5222D;
  --bg-critical-low: #FFF1F0;
  --bg-info: #0958D9;
  --bg-info-low: #E6F4FF;
  --fg: #1F1F1F;
  --fg-strong: #1F1F1F;
  --fg-lower: #595959;
  --fg-disabled: #BFBFBF;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #237804;
  --fg-warning: #874D00;
  --fg-error: #A8071A;
  --border: #F0F0F0;
  --border-low: #F5F5F5;
  --border-strong: #D9D9D9;
  --border-disabled: #F0F0F0;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAFAFA;
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
  --font-family: -apple-system,"Segoe UI",Roboto,system-ui,sans-serif;
  --btn-radius: 6px;
  --btn-weight: 400;
  --btn-shadow: 0 2px 0 rgba(5,145,255,.10);
  --ctl-radius: 4px;
  --card-radius: 8px;
  --btn-padx: 15px;
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
      primary:{50:"#E6F4FF",100:"#BAE0FF",200:"#91CAFF",300:"#69B1FF",400:"#4096FF",500:"#1677FF",600:"#0958D9",700:"#003EB3",800:"#002C8C",900:"#001D66",950:"#001140"},
      gray:{50:"#FAFAFA",100:"#F5F5F5",200:"#F0F0F0",300:"#D9D9D9",400:"#BFBFBF",500:"#8C8C8C",600:"#595959",700:"#434343",800:"#262626",900:"#1F1F1F",950:"#141414"},
      success:"#52C41A", warning:"#FAAD14", critical:"#F5222D",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["-apple-system","Segoe UI","Roboto","system-ui","sans-serif"] },
  }}
}
```