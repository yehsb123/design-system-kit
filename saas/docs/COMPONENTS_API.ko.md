# 컴포넌트 API 레퍼런스

로드 순서: `tokens.css` → `components.css` → `components-extra.css`(또는 `styles.css` 하나) 그리고 `js/saas-kit.js` → `js/saas-kit-data.js`. JS는 의존성·모듈·빌드가 없고 `DOMContentLoaded`에서 자동 초기화한다. 동적으로 마크업을 넣었다면 `SaasKit.init(root)`를 호출한다.

모든 팝업(셀렉트·메뉴·달력 등)은 `position: fixed`로 가장 가까운 열린 `<dialog>` 또는 `[data-saas-kit]` 루트 안에 붙는다. 루트의 조상에 `transform/filter/contain`을 두면 fixed의 기준이 바뀌므로 두지 않는다. 키보드 표는 실제 입력으로 확인한 동작이다. 검증 범위와 한계는 `QA_REPORT.ko.md`에 있다.

## 폼 컨트롤

| 컴포넌트 | 마크업 | 동작·키보드 | 이벤트·API |
|---|---|---|---|
| 체크/라디오/스위치 | `<label class="sk-check"><input type="checkbox"><span>라벨</span></label>`, `.sk-radio`, `.sk-switch`(입력에 `role="switch"`) | 네이티브 | 네이티브 |
| 커스텀 셀렉트 | `<select class="sk-select" data-sk-select>` | 네이티브 `<select>`가 값과 폼 전송을 유지. 닫힘: ↑↓ 값 이동, 글자 입력 타입어헤드. 열림: ↑↓/Home/End 이동(비활성 항목 건너뜀), Enter/Space 선택, Esc 닫기(값 유지), Tab 선택 후 이동. `label for`가 커스텀 버튼을 가리키도록 바뀜 | 네이티브 `change`/`input`, `sel._skSelect.{open,close,refresh}` |
| 콤보박스(검색) | `<input class="sk-input" data-sk-combobox data-options='["A","B"]'>`, `data-free`(자유 입력 허용), `data-open-on-focus` | 입력하면 부분 일치 필터, ↑↓ 이동, Enter 선택, Esc 닫기→지우기, Tab 선택(자유 입력이 아닐 때), 일치하는 항목이 없으면 안내, 자유 입력이 아니면 blur에서 잘못된 글자 제거 | `sk:select {value,label}`, `input._skCombobox.{setOptions,open}`, `input.dataset.value` |
| 날짜/기간 | `<input class="sk-input" data-sk-date data-min="2026-01-01" data-max="2026-12-31">`, 기간은 `data-range`, `data-week-start`, `data-locale` | 입력창 ↓로 열기. 달력: ←→ 하루, ↑↓ 한 주, Home/End 주 시작/끝, PageUp/Down 달, Shift+Page 해, Enter/Space 선택, Esc 닫고 입력창으로 복귀. 직접 입력은 `YYYY-MM-DD`(기간은 `a ~ b`)로 검증하고 잘못되면 `aria-invalid`. 범위 밖 날짜는 비활성. **시간대 변환 없는 달력 날짜** | `change`, `sk:date {value}` 또는 `{start,end}`, `input._skDate.{open,close,value,set}` |
| 업로더 | `<div data-sk-upload data-accept=".pdf,image/png" data-max-size="2MB" data-max-files="3" data-multiple data-duplicate="replace|reject">` | 버튼으로 선택, 드롭 영역. 형식·크기·개수 검증 후 사유를 `role=alert` 영역에 표시. 진행률·취소·재시도·제거(제거 후 포커스는 선택 버튼) | `SaasKit.upload(el,{upload:(file,{signal,onProgress})=>Promise})`, `sk:upload-change`. 서버 전송은 직접 구현(기본은 목록만) |
| 편집기 | `<div data-sk-editor data-variables="기간,기사 목록" data-required-vars="기간" data-max="500" data-label="본문"><textarea>…</textarea></div>` | 도구 모음(굵게·기울임·코드·제목·목록·변수 칩), 편집/미리보기 전환, 글자 수·필수 변수 누락·저장 상태 표시. 미리보기는 HTML을 이스케이프한 뒤 마크다운(제목·굵게·기울임·코드·목록·표)만 변환 | `el._skEditor.{getValue,setValue,markSaved,isDirty,validate,setMode}`, `sk:editor-change`, `SaasKit.markdown(src)` |
| 폼 검증 | `SaasKit.validate(form,{name:{label,required,min,max,pattern,validate:fn}})` | 오류 문구를 `.sk-field__error`에 쓰고 `aria-invalid`·`aria-describedby` 연결, 첫 오류로 포커스(커스텀 셀렉트는 그 버튼) | `{valid,errors}` 반환, `SaasKit.clearErrors`, `SaasKit.lockSubmit(form,handler)`(중복 제출 방지·`aria-busy`), `SaasKit.dirtyGuard(form)` |

## 탐색·오버레이

| 컴포넌트 | 마크업 | 동작·키보드 | 이벤트·API |
|---|---|---|---|
| 탭 | `<div data-sk-tabs><div role="tablist" aria-label="…"><button role="tab" aria-selected="true">…</button>…</div><div role="tabpanel">…</div>…</div>` | ←→(세로는 ↑↓), Home/End, 순환, roving tabindex, `data-activation="manual"`이면 Enter/Space로 활성. id·`aria-controls`·`aria-labelledby` 자동 연결 | `sk:tab`, `el._skTabs.select(i)` |
| 메뉴 | `<div data-sk-menu><button data-sk-menu-button>…</button><div role="menu"><button role="menuitem">…</button></div></div>` | 버튼 Enter/Space/↓ 첫 항목, ↑ 마지막 항목. 메뉴 안 ↑↓/Home/End(비활성 건너뜀), 타입어헤드, Enter 실행, Esc 닫고 버튼으로 복귀, Tab 닫기 | `sk:menu-select {item,value}`, `wrap._skMenu.{open,close}` |
| 팝오버 | `<button data-sk-popover="id">` + `<div id="id" aria-label="…">…</div>` | 열면 첫 포커스 요소로 이동, Esc·바깥 클릭으로 닫고 트리거로 복귀 | `btn._skPopover.{open,close}` |
| 툴팁 | `data-sk-tooltip="설명"` | hover(350ms)와 **키보드 포커스** 모두에서 표시, Esc로 숨김, `aria-describedby` 연결. 포커스 불가 요소에는 `tabindex=0` 부여. 핵심 정보를 툴팁에만 두지 않는다 | — |
| 드로어 | `<button data-sk-drawer-open="id">` + `<dialog id="id">` | 네이티브 `<dialog>` 모달, 시작 가장자리에서 열림, Esc·바깥 클릭 닫기. 포커스는 네이티브가 복원하고, 포커스가 이미 다른 곳에 있으면 가로채지 않음 | `.sk-drawer--end`로 끝 가장자리 |
| 확인 대화상자 | `SaasKit.confirm({title,message,target,danger,typeToConfirm,confirmLabel,cancelLabel})` | `Promise<boolean>`. 위험 작업은 `alertdialog`, 시작 포커스는 입력(또는 취소). `typeToConfirm`을 정확히 입력해야 확정 활성화. 버튼·Esc 모두 즉시 정리하고 포커스 복원 | — |
| 명령 팔레트 | `SaasKit.commandPalette({items:[{id,label,hint,keywords,run}],hotkey:'k'})` | Ctrl/Cmd+K, 입력 필터, ↑↓, Enter 실행, Esc 닫기, 닫으면 이전 포커스 복원(명령이 포커스를 옮겼다면 가로채지 않음) | `{open,close,setItems,element}`, `sk:command` |
| 토스트 | `SaasKit.toast(msg,{type:'info|success|warning|error',duration,action:{label,onClick},dismissible})` | `aria-live`. **오류는 자동으로 사라지지 않고** 닫기 버튼 제공. 같은 메시지는 `×N`으로 합침. 성공 기본 4초 | 반환 `{close,el}` |
| 상태 전환 | `<div data-sk-state="ready"><div data-state="ready">…</div><div data-state="loading" data-announce="불러오는 중">…</div>…</div>` | 한 번에 한 상태만 표시, 로딩일 때만 `aria-busy`, `data-announce`는 읽어 줌 | `SaasKit.setState(box,name)`, `sk:state` |
| 테마·밀도 | `SaasKit.theme.set('light|dark|system',root)`, `SaasKit.density.set('compact|comfortable|touch',root)` | 선택은 `localStorage`에 저장(차단되어도 동작), `system`은 OS 설정 추종 | `sk:theme`, `theme.restore/watchSystem` |

## 표 · 페이지네이션

| 컴포넌트 | 마크업 | 동작 | 이벤트·API |
|---|---|---|---|
| 표 | `<div class="sk-table-wrap" data-sk-table data-select data-page-size="5" data-pager="#pg" data-filter="#q" data-bulkbar="#bulk"><table class="sk-table">…<th data-sort="text|number|date">…` | 정렬(오름→내림→해제, `aria-sort`, 숫자의 쉼표·통화 기호 무시, 날짜 파싱, 안정 정렬), 이름 검색, 행 선택(`aria-selected`·행별 라벨), 현재 쪽 전체 선택(부분 선택은 indeterminate), "필터된 N건 모두 선택", 선택은 쪽·정렬·필터를 넘어 유지, 일치 없음 행 | `sk:table`, `sk:table-select {ids,count}`, `wrap._skTable.{selected,clearSelection,refresh,setFilter,removeSelected,state}` |
| 벌크 바 | `<div class="sk-bulkbar" id="bulk" hidden><button data-bulk-all hidden>…</button><button data-bulk-clear>…</button></div>` | 선택이 있을 때만 표시, 개수 표시, 해제 시 헤더 체크박스로 포커스 이동 | — |
| 페이지네이션 | `SaasKit.pagination(el,{total,page,pageSize,sizes:[25,50,100],unit,onChange})` | 범위·현재/전체·처음/이전/다음/끝, 비활성이 되어도 포커스 유지, 페이지 크기 변경 시 1쪽으로, 쪽 변경을 live region에 알림 | `{setTotal,setPage,state}`, `sk:page` |

## CSS 전용 컴포넌트

`sk-chip`, `sk-avatar`, `sk-kbd`, `sk-divider`, `sk-link-button`, `sk-dl`, `sk-breadcrumbs`, `sk-stepper`, `sk-accordion`(네이티브 `details`), `sk-progress`, `sk-banner`, `sk-fieldset`, `sk-skeleton`, `sk-empty`, `sk-notice`.

## 알려진 한계

- 코드로 구현했지만 **직접 시험하지 않은** 동작: 툴팁의 마우스 hover 경로, 팝오버·메뉴의 바깥 클릭 닫기, 달력의 Shift+PageUp/Down(해 이동), 콤보박스 `data-free` 모드, 탭 `data-activation="manual"`, `theme.set('system')`와 OS 설정 추종, 세로 탭.
- 실제 스크린리더 출력, IME 입력(한글 조합 중 필터), Safari/Firefox, 모바일 터치, forced-colors는 시험하지 않았다. `forced-colors` 규칙은 코드에만 있다.
- 드래그 앤 드롭 업로드는 이벤트 처리 코드만 있고 실제 드롭은 시험하지 않았다. 서버 업로드는 `upload` 핸들러를 직접 연결해야 한다.
- 달력은 시간 없는 날짜만 다룬다(시간대·시각 선택 없음). 휴일·불가일 목록은 `data-min`/`data-max`만 지원한다.
- 편집기는 마크다운 일부(제목·굵게·기울임·코드·목록·표)만 미리보기한다. 링크·이미지·코드 하이라이트는 의도적으로 제외했다.
- 커스텀 셀렉트는 `optgroup`과 다중 선택을 지원하지 않는다.
- 표는 클라이언트 쪽(메모리 안) 정렬·필터·페이지만 한다. 서버 페이지네이션은 `sk:page`/`sk:table` 이벤트를 받아 직접 연결한다.
- 가상 스크롤이 없으므로 수천 행 이상은 서버 측 처리가 필요하다.
