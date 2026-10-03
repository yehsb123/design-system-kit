# Playful — 시스템 스펙
> 밝고 둥근 캔디 팔레트의 소비자·캠페인 템플릿. 알약형 버튼과 큰 라운드로 친근합니다.

이 문서는 킷이 들고 있는 토큰에서 만들었습니다. 원래 사이트를 재서 나온 값이 아니므로, 실제 타이포 크기와 모션 곡선은 담지 않습니다.

**분류:** 랜딩  ·  **프레임워크:** 소비자 웹 · 캠페인

## 토큰 — 색

모든 색은 11단계 램프로 정의합니다. 램프는 테마에 따라 바뀌지 않는 원시값입니다.

### primary — 브랜드 행동과 강조

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF0FA` | `#FFDDF4` | `#FFB8E8` | `#FF85D6` | `#FF4FC0` | `#F72AAA` | `#DB1690` | `#B00F72` | `#820A54` | `#550636` | `#2E031C` |

### gray — 글자, 테두리, 면

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FAF8FF` | `#F1EDFB` | `#E2DAF3` | `#C7BCE3` | `#A493C9` | `#7E6BA8` | `#5E4E83` | `#443A5F` | `#2C2640` | `#1A1626` | `#0D0B13` |

### success — 완료와 정상

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#E7FBF0` | `#C2F5DB` | `#8EEBBC` | `#54DD98` | `#2ACE7C` | `#17C964` | `#0FA551` | `#0B7D3E` | `#08582C` | `#05381C` | `#021C0E` |

### warning — 주의와 대기

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFF7E6` | `#FFEAB8` | `#FFD97A` | `#FFC53D` | `#FBB021` | `#F5A524` | `#CC8214` | `#9E620E` | `#6E4308` | `#422800` | `#211400` |

### error — 실패와 위험

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#FFEBF1` | `#FFCEDD` | `#FF9DBB` | `#FF6295` | `#FA3576` | `#F31260` | `#CC0A4F` | `#9E073D` | `#6E052A` | `#42031A` | `#21010D` |

### info — 안내와 진행

| 단계 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 값 | `#EAF3FF` | `#CDE3FF` | `#9BC6FF` | `#66A6FF` | `#3F8DFF` | `#338EF7` | `#1E6FD0` | `#1553A0` | `#0D3870` | `#061F40` | `#031020` |

## 토큰 — 역할별 색

램프를 역할에 매핑한 값입니다. 라이트와 다크에서 서로 다릅니다.

| 토큰 | 쓰임새 | Light | Dark |
|---|---|---|---|
| `--bg` | 바탕이 되는 면 | `#FFFFFF` | `#1A1626` |
| `--canvas` | 페이지 바닥 | `#FAF8FF` | `#0D0B13` |
| `--fg` | 본문 글자 | `#1A1626` | `#FFFFFF` |
| `--fg-strong` | 제목과 강조 글자 | `#1A1626` | `#FAF8FF` |
| `--fg-lower` | 보조 설명 | `#5E4E83` | `#A493C9` |
| `--fg-disabled` | 비활성 글자 | `#A493C9` | `#5E4E83` |
| `--border` | 기본 경계선 | `#E2DAF3` | `#2C2640` |
| `--border-strong` | 강조 경계선 | `#C7BCE3` | `#5E4E83` |
| `--bg-primary` | 주된 행동 버튼 바탕 | `#F72AAA` | `#FF4FC0` |
| `--bg-primary-low` | 주된 색의 엷은 면 | `#FFF0FA` | `#550636` |
| `--fg-primary` | 주된 색 글자 | `#DB1690` | `#FF85D6` |
| `--bg-success` | 완료 표시 | `#17C964` | `#17C964` |
| `--bg-warning` | 주의 표시 | `#F5A524` | `#F5A524` |
| `--bg-critical` | 위험 표시 | `#F31260` | `#F31260` |
| `--bg-info` | 안내 표시 | `#1E6FD0` | `#3F8DFF` |

## 토큰 — 타이포

**글꼴:** `"Poppins","Pretendard",system-ui,sans-serif`

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
| 버튼 | 999px |
| 카드 | 22px |
| 입력 | 14px |
| 태그 | 999px |
| 작은 조작부 | 8px |

| 항목 | 값 |
|---|---|
| 버튼 좌우 안쪽 여백 | 22px |
| 버튼 글자 굵기 | 700 |
| 버튼 그림자 | `0 6px 16px -4px var(--bg-primary)` |
| 페이지 폭 | min(1200px, 92vw) |

## 아이콘

24×24 보기틀, 선 굵기 2.6px, 끝처리 `round`, 꼬임 `round`.
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
| 본문 대 바탕 | 17.70 : 1 | 통과 |
| 흰글씨 대 주된 색 | 3.58 : 1 | 미달 |

## 지킬 규칙과 금지 사항

### 지킬 규칙

- 모서리는 버튼 999px, 카드 22px, 입력 14px 으로 고정합니다
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

- 본문 글자: `#1A1626`
- 보조 글자: `#5E4E83`
- 바탕: `#FFFFFF`
- 페이지 바닥: `#FAF8FF`
- 경계선: `#E2DAF3`
- 주된 행동: `#F72AAA`
- 글꼴: `"Poppins","Pretendard",system-ui,sans-serif`

## 바로 쓰기

### CSS 변수

```css
:root{
  --primary-50: #FFF0FA;
  --primary-100: #FFDDF4;
  --primary-200: #FFB8E8;
  --primary-300: #FF85D6;
  --primary-400: #FF4FC0;
  --primary-500: #F72AAA;
  --primary-600: #DB1690;
  --primary-700: #B00F72;
  --primary-800: #820A54;
  --primary-900: #550636;
  --primary-950: #2E031C;
  --gray-50: #FAF8FF;
  --gray-100: #F1EDFB;
  --gray-200: #E2DAF3;
  --gray-300: #C7BCE3;
  --gray-400: #A493C9;
  --gray-500: #7E6BA8;
  --gray-600: #5E4E83;
  --gray-700: #443A5F;
  --gray-800: #2C2640;
  --gray-900: #1A1626;
  --gray-950: #0D0B13;
  --success-50: #E7FBF0;
  --success-100: #C2F5DB;
  --success-200: #8EEBBC;
  --success-300: #54DD98;
  --success-400: #2ACE7C;
  --success-500: #17C964;
  --success-600: #0FA551;
  --success-700: #0B7D3E;
  --success-800: #08582C;
  --success-900: #05381C;
  --success-950: #021C0E;
  --warning-50: #FFF7E6;
  --warning-100: #FFEAB8;
  --warning-200: #FFD97A;
  --warning-300: #FFC53D;
  --warning-400: #FBB021;
  --warning-500: #F5A524;
  --warning-600: #CC8214;
  --warning-700: #9E620E;
  --warning-800: #6E4308;
  --warning-900: #422800;
  --warning-950: #211400;
  --error-50: #FFEBF1;
  --error-100: #FFCEDD;
  --error-200: #FF9DBB;
  --error-300: #FF6295;
  --error-400: #FA3576;
  --error-500: #F31260;
  --error-600: #CC0A4F;
  --error-700: #9E073D;
  --error-800: #6E052A;
  --error-900: #42031A;
  --error-950: #21010D;
  --info-50: #EAF3FF;
  --info-100: #CDE3FF;
  --info-200: #9BC6FF;
  --info-300: #66A6FF;
  --info-400: #3F8DFF;
  --info-500: #338EF7;
  --info-600: #1E6FD0;
  --info-700: #1553A0;
  --info-800: #0D3870;
  --info-900: #061F40;
  --info-950: #031020;
  --bg-primary: #F72AAA;
  --bg-primary-low: #FFF0FA;
  --fg-primary: #DB1690;
  --fg-primary-low: #FFF0FA;
  --fg-point: #8B5CF6;
  --border-primary: #F72AAA;
  --bg: #FFFFFF;
  --bg-inset: #FFFFFF;
  --bg-inset-neutral: #F1EDFB;
  --bg-neutral: #F1EDFB;
  --bg-neutral-low: #FAF8FF;
  --bg-neutral-lower: #FAF8FF;
  --bg-disabled: #F1EDFB;
  --bg-contrast: #1A1626;
  --bg-success: #17C964;
  --bg-success-low: #E7FBF0;
  --bg-warning: #F5A524;
  --bg-warning-low: #FFF7E6;
  --bg-critical: #F31260;
  --bg-critical-low: #FFEBF1;
  --bg-info: #1E6FD0;
  --bg-info-low: #EAF3FF;
  --fg: #1A1626;
  --fg-strong: #1A1626;
  --fg-lower: #5E4E83;
  --fg-disabled: #A493C9;
  --fg-contrast: #FFFFFF;
  --fg-on-primary: #FFFFFF;
  --fg-success: #0B7D3E;
  --fg-warning: #6E4308;
  --fg-error: #9E073D;
  --border: #E2DAF3;
  --border-low: #F1EDFB;
  --border-strong: #C7BCE3;
  --border-disabled: #E2DAF3;
  --shadow-1: 0 0 8px rgba(0,0,0,.10);
  --shadow-2: 0 4px 8px rgba(0,0,0,.10);
  --shadow-3: 0 6px 16px rgba(0,0,0,.06);
  --shadow-4: 0 6px 24px rgba(0,0,0,.08);
  --shadow-5: 0 8px 24px rgba(0,0,0,.12);
  --shadow-6: 0 16px 40px rgba(0,0,0,.16);
  --panel: #FFFFFF;
  --canvas: #FAF8FF;
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
  --radius-xs: 10px;
  --radius-sm: 14px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --font-family: "Poppins","Pretendard",system-ui,sans-serif;
  --btn-radius: 999px;
  --btn-weight: 700;
  --btn-shadow: 0 6px 16px -4px var(--bg-primary);
  --ctl-radius: 8px;
  --card-radius: 22px;
  --btn-padx: 22px;
  --in-radius: 14px;
  --tag-radius: 999px;
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF0FA",100:"#FFDDF4",200:"#FFB8E8",300:"#FF85D6",400:"#FF4FC0",500:"#F72AAA",600:"#DB1690",700:"#B00F72",800:"#820A54",900:"#550636",950:"#2E031C"},
      gray:{50:"#FAF8FF",100:"#F1EDFB",200:"#E2DAF3",300:"#C7BCE3",400:"#A493C9",500:"#7E6BA8",600:"#5E4E83",700:"#443A5F",800:"#2C2640",900:"#1A1626",950:"#0D0B13"},
      success:"#17C964", warning:"#F5A524", critical:"#F31260",
    },
    borderRadius:{ btn:"999px", card:"22px", input:"14px" },
    fontFamily:{ sans:["Poppins","Pretendard","system-ui","sans-serif"] },
  }}
}
```