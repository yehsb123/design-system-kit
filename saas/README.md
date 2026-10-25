# SaaS Design Kit

MI HUB 시안 B와 퍼블리싱 사이트의 실측 비포·애프터에서 얻은 레이아웃·여백·타이포·상태 규칙을, **프레임워크에 묶이지 않는 CSS 토큰·컴포넌트 + Tailwind 어댑터 + 자동 검사**로 옮긴 시작 키트다.

> **정직한 범위**: 이 키트는 UI 기반(토큰·레이아웃·컴포넌트·상태·검사)이다. 인증·결제·권한 판정·저장·알림·모니터링은 포함하지 않으며(`docs/SAAS_PRODUCT_GATES.ko.md` 참조), "복사하면 디버깅이 전혀 필요 없다"는 보장은 없다. 대신 같은 결함이 다시 생기는 경로를 줄이고 `tests/qa-checks.js`로 검출한다.

## 폴더

| 경로 | 내용 |
|---|---|
| `tokens.json` → `tokens.css` | 값의 원본(JSON)과 생성된 CSS 변수. `node scripts/build-tokens.mjs`로 재생성(생성 결과가 기존 CSS와 일치함을 확인) |
| `components.css`, `components-extra.css` | 레이어(`sk-base`/`sk-components`/`sk-utilities`)로 격리된 컴포넌트. extra는 폼 컨트롤·탭·메뉴·달력·업로더·편집기·표 위젯 등 |
| `js/saas-kit.js`, `js/saas-kit-data.js` | 의존성 없는 동작 코드(셀렉트·콤보박스·탭·메뉴·팝오버·툴팁·드로어·확인창·토스트, 표·페이지네이션·날짜·업로더·편집기·명령 팔레트·폼 검증·상태 전환) |
| `styles.css` | CSS 세 파일을 묶은 진입점 |
| `tailwind/v4.css`, `tailwind/tailwind.v3.config.cjs` | Tailwind v4(권장) 또는 v3 어댑터. **둘을 동시에 쓰지 않는다** |
| `examples/components-gallery.html` | **모든 컴포넌트가 동작하는 갤러리**(폼 컨트롤, 탭·메뉴·팝오버·툴팁·드로어·확인창·토스트, 표 정렬·선택·벌크·페이지네이션, 업로더, 편집기, 명령 팔레트, 상태 전환) |
| `examples/app-shell.html` | 실행 가능한 전체 셸(대시보드·차트·목록-상세·표·폼·다이얼로그·토스트·5가지 상태·테마·밀도) |
| `examples/before-after.html` | 실측 결함 5개와 처방을 같은 화면에서 측정값으로 비교 |
| `tests/qa-checks.js`, `tests/behavior-suite.js`, `tests/qa-report.json` | 레이아웃·접근성 휴리스틱 검사기, 동작(키보드·ARIA) 시험 28개, 실행 결과 |
| `requirements-ui.json`(59), `requirements-product.json`(41) | 요구조건 데이터 |
| `docs/` | **컴포넌트 API**, 컴포넌트 계약, 제품 게이트, Tailwind 통합, QA 보고 |

## 1. 5분 사용법 (순수 CSS)

```html
<link rel="stylesheet" href="saas-design-kit/styles.css">
<div class="sk-app" data-saas-kit data-theme="light" data-density="comfortable">
  <aside class="sk-sidebar"> … </aside>
  <header class="sk-header"> … </header>
  <main class="sk-main" id="main"> … </main>
</div>
```

- 모든 토큰은 `[data-saas-kit]` 범위에만 선언된다. 호스트 앱의 전역 `button/textarea/body`는 바뀌지 않는다.
- 호스트의 일반(레이어 없는) CSS는 키트 규칙보다 **항상 우선**한다(CSS 레이어 규칙). 덮어쓰기는 호스트 CSS에서 하면 된다.
- 테마: `data-theme="light|dark"`. 밀도: `data-density="comfortable|compact|touch"`.

## 1-1. 동작 코드 사용법 (JS)

```html
<link rel="stylesheet" href="saas-design-kit/styles.css">
<script src="saas-design-kit/js/saas-kit.js"></script>
<script src="saas-design-kit/js/saas-kit-data.js"></script>

<select class="sk-select" data-sk-select>…</select>            <!-- 커스텀 셀렉트 -->
<input class="sk-input" data-sk-date data-min="2026-01-01">  <!-- 날짜 선택 -->
<div data-sk-tabs>…</div>  <div class="sk-table-wrap" data-sk-table data-select>…</div>
<script>
  SaasKit.confirm({ title:'삭제', message:'되돌릴 수 없습니다', danger:true, typeToConfirm:'이름' }).then(ok => {});
  SaasKit.toast('저장했습니다', { type:'success' });
</script>
```

속성·API·이벤트·키보드 표는 `docs/COMPONENTS_API.ko.md`. 동적으로 마크업을 넣으면 `SaasKit.init(root)`를 호출한다.

## 2. 치수표 (권장 시작값, 관찰값을 그대로 복사한 것이 아님)

### 앱 골격
| 항목 | 값 | 토큰 |
|---|---|---|
| 사이드바 폭 | 248px | `--sk-sidebar` |
| 헤더 높이 | 64px | `--sk-header` |
| 본문 바깥 여백 | 24px | `--sk-page` |
| 카드/구역 사이 | 24px | `--sk-gutter` |
| 카드 모서리 / 컨트롤 모서리 | 14px / 10px | `--sk-radius-card`, `--sk-radius-control` |
| 읽기 폭 상한 | min(44em, 72ch) | `--sk-readable` (언어별 확정 필요) |

### 컨트롤·표 밀도
| 밀도 | 컨트롤 | 작은 컨트롤 | 표 행 |
|---|---|---|---|
| comfortable(기본) | 36px | 32px | 44px |
| compact | 32px | 32px | 40px |
| touch | 44px | 32px | 48px |

실측: compact 전환 시 input/button 36→32px, 표 행 44→40px.

### 글자 위계
| 역할 | 크기/행높이 | 클래스 |
|---|---|---|
| 화면 제목 | 22/30 | `.sk-title` |
| 카드·구역 제목 | 18/26 | `.sk-section-title` |
| 대표 수치 | 28/34 | `.sk-stat__value` |
| 읽기 본문 | 15/24 | `.sk-reading` |
| 기본 본문 | 14/22 | 기본 |
| 보조·출처 | 12/18 | `.sk-field__hint`, `.sk-stat__meta` |

### 간격 스케일
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 (`--sk-space-*`). 관련 정보는 4~12, 카드 내부 16~20, 카드 사이 24, 큰 구역 32.

## 3. 그리드 레시피

| 용도 | 클래스 / 핵심 CSS | 왜 |
|---|---|---|
| 앱 셸 | `.sk-app` : `grid-template-columns: var(--sk-sidebar) minmax(0,1fr)`, 행 `var(--sk-header) minmax(0,1fr)` | 본문만 스크롤, `minmax(0,…)`로 넘침 방지 |
| 지표 카드 | `.sk-kpis` : `repeat(auto-fit, minmax(min(100%,11rem), 1fr))` | 개수·폭에 맞춰 열 수 계산 |
| 요약 범례 | `.sk-legend` (동일 패턴) | 항목 1개일 때 5열 고정이면 80%가 빔(실측) |
| 목록-상세 | `.sk-list-detail` : `minmax(18rem,2fr) minmax(0,3fr)`, 컨테이너 52rem 이하 1열 | 뷰포트가 아닌 컨테이너 기준 |
| 뷰포트 채움 패널 | `.sk-panel--fill` + 본문 `overflow:auto` + `min-block-size:0` | 헤더/푸터 고정, 본문 내부 스크롤 |
| 카드 그리드 | `.sk-grid` : `repeat(auto-fit, minmax(min(100%,18rem),1fr))` | 최소폭 보장 |
| 폼 | `.sk-form` / `.sk-field` (gap 20/8) | 라벨·힌트·오류 연결 |

## 4. 컴포넌트 클래스 목록

앱 셸: `sk-app sk-sidebar sk-header sk-main sk-nav sk-brand sk-skip` · 레이아웃: `sk-stack sk-inline sk-cluster sk-grid sk-kpis sk-list-detail sk-rail` · 카드: `sk-panel(__header|__body|__footer|--fill) sk-stat(__label|__value|__meta)` · 데이터: `sk-legend sk-chart sk-chart-summary sk-table-wrap sk-table sk-number sk-badge(--success|--danger)` · 폼: `sk-form sk-field(__label|__hint|__error) sk-input sk-select sk-textarea sk-button(--primary|--danger|--small) sk-segment` · 오버레이·상태: `sk-dialog(__header|__body|__footer) sk-toast(-region) sk-notice(--error) sk-empty sk-skeleton` · 유틸리티(레이어 최하위): `sk-muted sk-numeric sk-nowrap sk-break sk-min-zero sk-sr-only`.

## 5. 기존 화면을 옮기는 순서 (비포·애프터 → 적용)

1. 화면 하나를 골라 `examples/before-after.html`처럼 현재 측정값(높이·폭·대비·클릭 영역)을 기록한다.
2. `data-saas-kit` 컨테이너로 감싸고 `styles.css`를 로드한다. 호스트의 전역 컨트롤 규칙(특히 `textarea`, `.inp`)을 확인해 제거하거나 범위를 줄인다.
3. 레이아웃을 `sk-app/sk-main/sk-stack`로 교체한다(스크롤 owner를 하나로).
4. 카드·표·폼을 키트 클래스로 교체하고, 임의 px를 토큰으로 바꾼다.
5. 5가지 상태(정상/로딩/빈/오류/권한없음)와 긴 데이터를 넣어 본다.
6. `tests/qa-checks.js`를 폭·테마·밀도 조합으로 돌리고 `docs/COMPONENT_CONTRACTS.ko.md`의 "일부 구현/계약만" 항목을 제품에서 채운다.

## 6. Tailwind

- 권장: v4. `tailwind/v4.css`를 앱 CSS 진입점에서 import. 유틸리티(`bg-panel`, `p-page`, `rounded-card`, `dark:`)가 토큰에 연결되고 **Tailwind 유틸리티가 키트 컴포넌트보다 우선**한다(`layer(components)`).
- v3: `tailwind/tailwind.v3.config.cjs`. v4와 동시에 로드하지 않는다.
- 같은 요소의 같은 속성을 `.sk-*`와 유틸리티가 동시에 소유하지 않는 것이 기본 안전책이다. 자세한 내용과 공식 문서 근거는 `docs/TAILWIND_INTEGRATION.ko.md`.
- 검증 범위: 공식 브라우저 빌드로 문법·우선순위·다크 변형 확인. CLI/Vite 빌드는 이 환경에서 실행하지 못했다.

## 7. 알려진 한계 (정직하게)

- 포함되지 않은 것: 가상 스크롤, 서버 페이지네이션·서버 업로드(핸들러만 연결), 시간 선택, 코드 하이라이트 편집기, optgroup·다중 선택 셀렉트, 트리·칸반·차트 라이브러리. 자세한 한계는 `docs/COMPONENTS_API.ko.md`.
- 차트는 예제의 SVG이며 차트 라이브러리를 대체하지 않는다.
- 포커스 링은 `outline` 기반이지만 forced-colors, 스크린리더, Safari/Firefox, 200%·400% 확대는 시험하지 않았다.
- 한글·영문 읽기 폭은 시작값이다(한글 약 35~45자, 영문 약 50~75자를 목표로 제품에서 확정).
- `tests/qa-checks.js`는 휴리스틱이며 WCAG 적합성을 증명하지 않는다.

## 8. 기존 관찰 → 키트 규칙 대응

| 실측 관찰 | 키트 규칙 |
|---|---|
| 요약 범례 5열 고정, 항목 1개면 80% 공백 | UI-020 auto-fit + 최소폭 |
| textarea rows=6인데 36px(구·신 공통) | UI-039, UI-040 입력 높이 규칙 분리, QA `textarea-collapsed` |
| 상세 KPI·출처 삭제로 값 판독 어려움 | UI-026 수치 카드 필수 필드 |
| 카드 폭 1134→870인데 문단 폭 680→820 | UI-018 글자 기준 읽기 폭 |
| 옅은 컨트롤 테두리(1.2~1.5:1) | UI-003, UI-004 `--sk-border-strong` |
| 24px 아이콘 버튼 | UI-055 클릭 영역 32px+ |
| 새 UI 문구 번역 누락(전일비 등) | UI-058 i18n |
| 시안의 진행 상태·다운로드 버튼이 예시인데 실제처럼 보임 | PROD-014 비동기 작업 상태 |
