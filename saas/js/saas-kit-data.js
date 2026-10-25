/* SaaS Design Kit, data and input widgets. Requires js/saas-kit.js first.
 * Pagination, sortable/selectable table with bulk bar, date picker (single and range), uploader, markdown/prompt editor,
 * command palette, form validation helpers, state switcher.
 * Dates are plain calendar dates (YYYY-MM-DD) with no time zone conversion. Uploads need a server: pass an upload() handler, nothing is sent by default. */
(function (g) {
  'use strict';
  var SK = g.SaasKit;
  if (!SK) { throw new Error('saas-kit.js must be loaded before saas-kit-data.js'); }
  var U = SK.util, $ = U.$, $$ = U.$$, emit = U.emit, esc = U.esc, uid = U.uid;

  /* ======================= pagination ======================= */
  SK.pagination = function (container, o) {
    o = o || {};
    var st = { total: o.total || 0, page: o.page || 1, size: o.pageSize || 25, sizes: o.sizes || null, unit: o.unit || '건' };
    container.classList.add('sk-pager');
    container.setAttribute('role', 'navigation');
    container.setAttribute('aria-label', o.label || '페이지 이동');
    function pages() { return Math.max(1, Math.ceil(st.total / st.size)); }
    function render(focusAct) {
      var p = pages(); st.page = Math.min(Math.max(1, st.page), p);
      var from = st.total ? (st.page - 1) * st.size + 1 : 0, to = Math.min(st.total, st.page * st.size);
      var sizeSel = '';
      if (st.sizes) {
        sizeSel = '<label class="sk-sr-only" for="' + container.id + '-size">페이지 크기</label><select class="sk-select" id="' + (container.id || 'pg') + '-size" data-sk-select aria-label="페이지 크기">' +
          st.sizes.map(function (n) { return '<option value="' + n + '"' + (n === st.size ? ' selected' : '') + '>' + n + '행</option>'; }).join('') + '</select>';
      }
      container.innerHTML = '<span class="sk-pager__range">' + from + '~' + to + ' / ' + st.total + esc(st.unit) + '</span><span class="sk-pager__spacer"></span>' + sizeSel +
        '<button type="button" class="sk-button sk-button--small" data-act="first" aria-label="첫 쪽"' + (st.page === 1 ? ' disabled' : '') + '>«</button>' +
        '<button type="button" class="sk-button sk-button--small" data-act="prev" aria-label="이전 쪽"' + (st.page === 1 ? ' disabled' : '') + '>‹</button>' +
        '<span class="sk-pager__pos" tabindex="-1" aria-current="page">' + st.page + ' / ' + p + '</span>' +
        '<button type="button" class="sk-button sk-button--small" data-act="next" aria-label="다음 쪽"' + (st.page === p ? ' disabled' : '') + '>›</button>' +
        '<button type="button" class="sk-button sk-button--small" data-act="last" aria-label="마지막 쪽"' + (st.page === p ? ' disabled' : '') + '>»</button>';
      if (st.sizes) SK.init(container);
      if (focusAct) { var b = container.querySelector('[data-act="' + focusAct + '"]:not([disabled])') || container.querySelector('.sk-pager__pos'); if (b) b.focus(); }
    }
    function change(kind, focusAct) {
      render(focusAct);
      SK.announce(st.page + ' / ' + pages() + '쪽');
      if (o.onChange) o.onChange({ page: st.page, size: st.size, kind: kind });
      emit(container, 'sk:page', { page: st.page, size: st.size });
    }
    container.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
      var a = b.getAttribute('data-act');
      st.page = a === 'first' ? 1 : a === 'prev' ? st.page - 1 : a === 'next' ? st.page + 1 : pages();
      change('page', a);
    });
    container.addEventListener('change', function (e) {
      if (e.target.matches('select')) { st.size = +e.target.value; st.page = 1; var keep = e.target.id; change('size'); var s = document.getElementById(keep + '-btn'); if (s) s.focus(); }
    });
    render();
    return {
      setTotal: function (n) { st.total = Math.max(0, n | 0); render(); },
      setPage: function (n) { st.page = n; render(); },
      state: function () { return { page: st.page, size: st.size, total: st.total, pages: pages() }; }
    };
  };

  /* ======================= table: sort, filter, select, bulk, page ======================= */
  SK.register('table', '[data-sk-table]', function (wrap) {
    var table = $('table', wrap), tbody = $('tbody', table), headRow = $('thead tr', table);
    var selectable = wrap.hasAttribute('data-select');
    var rows = $$('tr', tbody).map(function (tr, i) { if (!tr.dataset.id) tr.dataset.id = 'r' + i; return { tr: tr, id: tr.dataset.id, idx: i }; });
    var st = { col: -1, dir: null, q: '', page: 1, size: +wrap.getAttribute('data-page-size') || 0, sel: {} };
    var pager = null, bulk = wrap.getAttribute('data-bulkbar') ? document.querySelector(wrap.getAttribute('data-bulkbar')) : null;
    var empty = null, headCheck = null, allFiltered = [];
    function cellIndex(th) { return Array.prototype.indexOf.call(th.parentNode.children, th); }

    if (selectable) {
      var th0 = document.createElement('th'); th0.className = 'sk-cell-check'; th0.scope = 'col';
      headCheck = document.createElement('input'); headCheck.type = 'checkbox'; headCheck.setAttribute('aria-label', '현재 쪽 전체 선택');
      th0.appendChild(headCheck); headRow.insertBefore(th0, headRow.firstChild);
      rows.forEach(function (r) {
        var td = document.createElement('td'); td.className = 'sk-cell-check';
        var cb = document.createElement('input'); cb.type = 'checkbox';
        var nameCell = r.tr.children[0]; cb.setAttribute('aria-label', (nameCell ? nameCell.textContent.trim() : r.id) + ' 선택');
        td.appendChild(cb); r.tr.insertBefore(td, r.tr.firstChild); r.cb = cb;
        cb.addEventListener('change', function () { if (cb.checked) st.sel[r.id] = true; else delete st.sel[r.id]; syncSel(true); });
      });
    }
    $$('th[data-sort]', headRow).forEach(function (th) {
      th.setAttribute('aria-sort', 'none');
      var b = document.createElement('button'); b.type = 'button'; b.className = 'sk-sort';
      while (th.firstChild) b.appendChild(th.firstChild); th.appendChild(b);
      b.addEventListener('click', function () {
        var c = cellIndex(th);
        if (st.col === c) { st.dir = st.dir === 'ascending' ? 'descending' : st.dir === 'descending' ? null : 'ascending'; } else { st.col = c; st.dir = 'ascending'; }
        if (!st.dir) st.col = -1;
        $$('th[data-sort]', headRow).forEach(function (x) { x.setAttribute('aria-sort', cellIndex(x) === st.col && st.dir ? st.dir : 'none'); });
        st.page = 1; apply();
        SK.announce(b.textContent.trim() + ' ' + (st.dir === 'ascending' ? '오름차순' : st.dir === 'descending' ? '내림차순' : '정렬 해제'));
      });
    });
    function val(r, col, type) {
      var t = (r.tr.children[col] ? r.tr.children[col].getAttribute('data-value') || r.tr.children[col].textContent : '').trim();
      if (type === 'number') { var n = parseFloat(t.replace(/[^0-9.\-]/g, '')); return isNaN(n) ? -Infinity : n; }
      if (type === 'date') { var d = Date.parse(t); return isNaN(d) ? -Infinity : d; }
      return t;
    }
    function apply() {
      var q = st.q.toLowerCase();
      var list = rows.filter(function (r) { return !q || r.tr.textContent.toLowerCase().indexOf(q) >= 0; });
      if (st.dir) {
        var th = headRow.children[st.col], type = th.getAttribute('data-sort'), m = st.dir === 'ascending' ? 1 : -1;
        list = list.slice().sort(function (a, b) {
          var x = val(a, st.col, type), y = val(b, st.col, type);
          var c = typeof x === 'number' ? x - y : String(x).localeCompare(String(y), 'ko', { numeric: true });
          return c * m || a.idx - b.idx;
        });
      }
      allFiltered = list;
      var pages = st.size ? Math.max(1, Math.ceil(list.length / st.size)) : 1; st.page = Math.min(st.page, pages);
      var pageRows = st.size ? list.slice((st.page - 1) * st.size, st.page * st.size) : list;
      var visible = {}; pageRows.forEach(function (r) { visible[r.id] = true; });
      var frag = document.createDocumentFragment();
      pageRows.forEach(function (r) { r.tr.hidden = false; frag.appendChild(r.tr); });
      rows.forEach(function (r) { if (!visible[r.id]) { r.tr.hidden = true; frag.appendChild(r.tr); } });
      tbody.appendChild(frag);
      if (!list.length) {
        if (!empty) { empty = document.createElement('tr'); empty.className = 'sk-empty-row'; var td = document.createElement('td'); td.colSpan = headRow.children.length; td.innerHTML = '<div class="sk-empty">검색 결과가 없습니다.</div>'; empty.appendChild(td); }
        tbody.appendChild(empty); empty.hidden = false;
      } else if (empty) empty.hidden = true;
      if (pager) pager.setTotal(list.length);
      syncSel(false);
      emit(wrap, 'sk:table', { total: list.length, page: st.page, size: st.size, sort: st.dir ? { col: st.col, dir: st.dir } : null });
    }
    function pageRowsNow() { return rows.filter(function (r) { return !r.tr.hidden; }); }
    function selCount() { return Object.keys(st.sel).length; }
    function syncSel(announce) {
      if (!selectable) return;
      var pr = pageRowsNow();
      rows.forEach(function (r) { r.cb.checked = !!st.sel[r.id]; r.tr.setAttribute('aria-selected', String(!!st.sel[r.id])); });
      var n = pr.filter(function (r) { return st.sel[r.id]; }).length;
      headCheck.checked = pr.length > 0 && n === pr.length; headCheck.indeterminate = n > 0 && n < pr.length;
      var c = selCount();
      if (bulk) {
        bulk.hidden = c === 0;
        var label = $('[data-bulk-count]', bulk); if (!label) { label = document.createElement('strong'); label.setAttribute('data-bulk-count', ''); bulk.insertBefore(label, bulk.firstChild); }
        label.textContent = c + '개 선택';
        var allBtn = $('[data-bulk-all]', bulk); if (allBtn) { var canAll = headCheck.checked && allFiltered.length > pr.length && allFiltered.some(function (r) { return !st.sel[r.id]; }); allBtn.hidden = !canAll; allBtn.textContent = '필터된 ' + allFiltered.length + '건 모두 선택'; }
      }
      if (announce) SK.announce(c + '개 선택됨');
      emit(wrap, 'sk:table-select', { ids: Object.keys(st.sel), count: c });
    }
    if (headCheck) headCheck.addEventListener('change', function () {
      pageRowsNow().forEach(function (r) { if (headCheck.checked) st.sel[r.id] = true; else delete st.sel[r.id]; });
      syncSel(true);
    });
    if (bulk) {
      bulk.addEventListener('click', function (e) {
        if (e.target.closest('[data-bulk-clear]')) { st.sel = {}; syncSel(true); if (headCheck) headCheck.focus(); }
        if (e.target.closest('[data-bulk-all]')) { allFiltered.forEach(function (r) { st.sel[r.id] = true; }); syncSel(true); }
      });
    }
    var filterEl = wrap.getAttribute('data-filter') ? document.querySelector(wrap.getAttribute('data-filter')) : null;
    if (filterEl) filterEl.addEventListener('input', function () { st.q = filterEl.value.trim(); st.page = 1; apply(); SK.announce(allFiltered.length + '건'); });
    var pagerEl = wrap.getAttribute('data-pager') ? document.querySelector(wrap.getAttribute('data-pager')) : null;
    if (pagerEl && st.size) pager = SK.pagination(pagerEl, { total: rows.length, pageSize: st.size, sizes: wrap.hasAttribute('data-page-sizes') ? wrap.getAttribute('data-page-sizes').split(',').map(Number) : null, label: '표 페이지 이동', onChange: function (s) { st.page = s.page; st.size = s.size; apply(); } });
    if (!wrap.hasAttribute('tabindex')) wrap.tabIndex = 0;
    if (!wrap.getAttribute('aria-label') && !wrap.getAttribute('aria-labelledby')) wrap.setAttribute('aria-label', '데이터 표');
    apply();
    wrap._skTable = {
      selected: function () { return Object.keys(st.sel); },
      clearSelection: function () { st.sel = {}; syncSel(true); },
      refresh: apply, setFilter: function (q) { st.q = q; st.page = 1; apply(); },
      removeSelected: function () { var ids = st.sel; rows = rows.filter(function (r) { if (ids[r.id]) { r.tr.remove(); return false; } return true; }); st.sel = {}; apply(); },
      state: function () { return { total: allFiltered.length, page: st.page, size: st.size, sort: st.dir ? { col: st.col, dir: st.dir } : null }; }
    };
  });

  /* ======================= date picker ======================= */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDate(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((s || '').trim()); if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    return d.getFullYear() === +m[1] && d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] ? d : null;
  }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function addMonths(d, n) { var t = new Date(d.getFullYear(), d.getMonth() + n, 1); var last = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(); return new Date(t.getFullYear(), t.getMonth(), Math.min(d.getDate(), last)); }
  function sameDay(a, b) { return a && b && fmtDate(a) === fmtDate(b); }
  SK.date = { format: fmtDate, parse: parseDate };

  SK.register('date', 'input[data-sk-date]', function (input) {
    var range = input.hasAttribute('data-range');
    var locale = input.getAttribute('data-locale') || document.documentElement.lang || 'ko-KR';
    var weekStart = +(input.getAttribute('data-week-start') || 0);
    var min = parseDate(input.getAttribute('data-min')), max = parseDate(input.getAttribute('data-max'));
    var wrap = document.createElement('div'); wrap.className = 'sk-date-wrap';
    input.parentNode.insertBefore(wrap, input); wrap.appendChild(input);
    if (!input.placeholder) input.placeholder = range ? 'YYYY-MM-DD ~ YYYY-MM-DD' : 'YYYY-MM-DD';
    input.setAttribute('aria-haspopup', 'dialog');
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'sk-button'; btn.textContent = '달력'; btn.setAttribute('aria-label', range ? '기간 달력 열기' : '달력 열기'); wrap.appendChild(btn);
    var cal = document.createElement('div'); cal.className = 'sk-calendar'; cal.hidden = true; cal.setAttribute('role', 'dialog'); cal.setAttribute('aria-label', range ? '기간 선택' : '날짜 선택'); wrap.appendChild(cal);
    var st = { value: null, start: null, end: null, view: new Date(), cursor: new Date(), picking: false };
    var monthFmt = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' });
    var longFmt = new Intl.DateTimeFormat(locale, { dateStyle: 'full' });
    var dayFmt = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    function disabled(d) { return (min && d < min) || (max && d > max); }
    function writeInput() {
      if (range) { input.value = st.start ? fmtDate(st.start) + (st.end ? ' ~ ' + fmtDate(st.end) : ' ~ ') : ''; input.dataset.start = st.start ? fmtDate(st.start) : ''; input.dataset.end = st.end ? fmtDate(st.end) : ''; }
      else { input.value = st.value ? fmtDate(st.value) : ''; input.dataset.value = input.value; }
    }
    function readInput() {
      var t = input.value.trim(); input.removeAttribute('aria-invalid');
      if (!t) { st.value = st.start = st.end = null; return true; }
      if (range) {
        var m = /^(\S+)\s*~\s*(\S+)$/.exec(t), a = m && parseDate(m[1]), b = m && parseDate(m[2]);
        if (a && b && a <= b && !disabled(a) && !disabled(b)) { st.start = a; st.end = b; return true; }
      } else { var d = parseDate(t); if (d && !disabled(d)) { st.value = d; return true; } }
      input.setAttribute('aria-invalid', 'true'); return false;
    }
    function render(focusCursor) {
      var y = st.view.getFullYear(), m = st.view.getMonth();
      var first = new Date(y, m, 1), offset = (first.getDay() - weekStart + 7) % 7, start = addDays(first, -offset);
      var heads = ''; for (var i = 0; i < 7; i++) { var wd = addDays(start, i); heads += '<th scope="col" abbr="' + esc(new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(wd)) + '">' + esc(dayFmt.format(wd)) + '</th>'; }
      var body = '', today = new Date();
      for (var r = 0; r < 6; r++) {
        body += '<tr>';
        for (var c = 0; c < 7; c++) {
          var d = addDays(start, r * 7 + c), sel = range ? (sameDay(d, st.start) || sameDay(d, st.end)) : sameDay(d, st.value);
          var inr = range && st.start && st.end && d > st.start && d < st.end;
          body += '<td><button type="button" class="sk-day" data-date="' + fmtDate(d) + '" tabindex="' + (sameDay(d, st.cursor) ? 0 : -1) + '"' + (d.getMonth() !== m ? ' data-out' : '') + (sameDay(d, today) ? ' data-today' : '') + (inr ? ' data-inrange' : '') + ' aria-selected="' + !!sel + '" aria-label="' + esc(longFmt.format(d)) + '"' + (disabled(d) ? ' disabled' : '') + '>' + d.getDate() + '</button></td>';
        }
        body += '</tr>';
      }
      cal.innerHTML = '<div class="sk-calendar__head"><button type="button" class="sk-button sk-button--small" data-nav="-1" aria-label="이전 달">‹</button><div class="sk-calendar__title" aria-live="polite">' + esc(monthFmt.format(st.view)) + '</div><button type="button" class="sk-button sk-button--small" data-nav="1" aria-label="다음 달">›</button></div>' +
        '<table role="grid" aria-label="' + esc(monthFmt.format(st.view)) + '"><thead><tr>' + heads + '</tr></thead><tbody>' + body + '</tbody></table>';
      if (focusCursor) { var el = cal.querySelector('[data-date="' + fmtDate(st.cursor) + '"]'); if (el && !el.disabled) el.focus(); else { var any = cal.querySelector('.sk-day:not(:disabled)'); if (any) any.focus(); } }
    }
    var ov = SK.overlay(input, cal, { restoreFocus: true, onOpen: function () { input.setAttribute('aria-expanded', 'true'); }, onClose: function () { input.setAttribute('aria-expanded', 'false'); } });
    function open() {
      readInput();
      var base = range ? (st.start || new Date()) : (st.value || new Date());
      if (disabled(base)) base = min && base < min ? min : max || base;
      st.cursor = base; st.view = new Date(base.getFullYear(), base.getMonth(), 1); st.picking = false;
      ov.open(); SK.place(input, cal, { offset: 6 }); render(true);
    }
    function pick(d) {
      if (disabled(d)) return;
      if (range) {
        if (!st.picking) { st.start = d; st.end = null; st.picking = true; writeInput(); st.cursor = d; render(true); SK.announce('시작일 ' + fmtDate(d) + ', 종료일을 선택하세요'); return; }
        if (d < st.start) { st.end = st.start; st.start = d; } else st.end = d;
        st.picking = false; writeInput(); ov.close(); input.dispatchEvent(new Event('change', { bubbles: true })); emit(input, 'sk:date', { start: fmtDate(st.start), end: fmtDate(st.end) });
      } else { st.value = d; writeInput(); ov.close(); input.dispatchEvent(new Event('change', { bubbles: true })); emit(input, 'sk:date', { value: fmtDate(d) }); }
    }
    btn.addEventListener('click', function () { ov.isOpen ? ov.close() : open(); });
    input.addEventListener('keydown', function (e) { if ((e.key === 'ArrowDown' && e.altKey) || e.key === 'ArrowDown') { if (!ov.isOpen) { e.preventDefault(); open(); } } else if (e.key === 'Escape' && ov.isOpen) { e.preventDefault(); e.stopPropagation(); ov.close(); } });
    input.addEventListener('change', function () { if (!ov.isOpen) { var ok = readInput(); if (ok) { writeInput(); emit(input, 'sk:date', range ? { start: input.dataset.start, end: input.dataset.end } : { value: input.dataset.value }); } } });
    cal.addEventListener('click', function (e) {
      var n = e.target.closest('[data-nav]'); if (n) { st.view = addMonths(st.view, +n.getAttribute('data-nav')); st.cursor = new Date(st.view.getFullYear(), st.view.getMonth(), Math.min(st.cursor.getDate(), 28)); render(false); n.focus(); return; }
      var d = e.target.closest('.sk-day'); if (d) pick(parseDate(d.getAttribute('data-date')));
    });
    cal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); ov.close(); return; }
      var dayEl = e.target.closest('.sk-day'); if (!dayEl) return;
      var c = parseDate(dayEl.getAttribute('data-date')), nx = null, dow = (c.getDay() - weekStart + 7) % 7;
      switch (e.key) {
        case 'ArrowLeft': nx = addDays(c, -1); break; case 'ArrowRight': nx = addDays(c, 1); break;
        case 'ArrowUp': nx = addDays(c, -7); break; case 'ArrowDown': nx = addDays(c, 7); break;
        case 'Home': nx = addDays(c, -dow); break; case 'End': nx = addDays(c, 6 - dow); break;
        case 'PageUp': nx = addMonths(c, e.shiftKey ? -12 : -1); break; case 'PageDown': nx = addMonths(c, e.shiftKey ? 12 : 1); break;
        default: return;
      }
      e.preventDefault();
      if (min && nx < min) nx = min; if (max && nx > max) nx = max;
      st.cursor = nx; if (nx.getMonth() !== st.view.getMonth() || nx.getFullYear() !== st.view.getFullYear()) st.view = new Date(nx.getFullYear(), nx.getMonth(), 1);
      render(true);
    });
    readInput();
    input._skDate = { open: open, close: function () { ov.close(); }, value: function () { return range ? { start: input.dataset.start || '', end: input.dataset.end || '' } : input.dataset.value || input.value; }, set: function (v) { if (range) { st.start = parseDate(v.start); st.end = parseDate(v.end); } else st.value = parseDate(v); writeInput(); } };
  });

  /* ======================= uploader ======================= */
  function parseSize(v) {
    if (v == null || v === '') return 0; if (!isNaN(+v)) return +v;
    var m = /^(\d+(?:\.\d+)?)\s*(B|KB|MB|GB)$/i.exec(String(v).trim()); if (!m) return 0;
    return Math.round(+m[1] * { B: 1, KB: 1024, MB: 1048576, GB: 1073741824 }[m[2].toUpperCase()]);
  }
  function humanSize(n) { return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB'; }
  function accepts(file, accept) {
    if (!accept) return true;
    return accept.split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean).some(function (t) {
      if (t.charAt(0) === '.') return file.name.toLowerCase().slice(-t.length) === t;
      if (t.slice(-2) === '/*') return (file.type || '').toLowerCase().indexOf(t.slice(0, -1)) === 0;
      return (file.type || '').toLowerCase() === t;
    });
  }
  SK.register('upload', '[data-sk-upload]', function (root) {
    var accept = root.getAttribute('data-accept') || '', maxSize = parseSize(root.getAttribute('data-max-size')), maxFiles = +root.getAttribute('data-max-files') || 0;
    var multiple = root.hasAttribute('data-multiple'), dup = root.getAttribute('data-duplicate') || 'replace', auto = root.getAttribute('data-auto') !== 'false';
    var items = [], handler = null, nid = 0;
    var inputId = uid('file');
    root.innerHTML = '<div class="sk-upload__zone"><span>파일을 여기에 놓거나</span><button type="button" class="sk-button" data-pick>파일 선택</button><span class="sk-field__hint">' +
      esc((accept ? '허용 형식: ' + accept + '. ' : '') + (maxSize ? '파일당 최대 ' + humanSize(maxSize) + '. ' : '') + (maxFiles ? '최대 ' + maxFiles + '개.' : '')) + '</span></div>' +
      '<input type="file" class="sk-sr-only" id="' + inputId + '" tabindex="-1" aria-hidden="true"' + (multiple ? ' multiple' : '') + (accept ? ' accept="' + esc(accept) + '"' : '') + '>' +
      '<div class="sk-field__error" role="alert" data-errors></div><ul class="sk-upload__list" data-list aria-label="업로드 파일 목록"></ul>';
    var zone = $('.sk-upload__zone', root), input = $('input[type=file]', root), list = $('[data-list]', root), errBox = $('[data-errors]', root), pick = $('[data-pick]', root);
    pick.addEventListener('click', function () { input.click(); });
    input.addEventListener('change', function () { add(Array.prototype.slice.call(input.files)); input.value = ''; });
    ['dragenter', 'dragover'].forEach(function (n) { zone.addEventListener(n, function (e) { e.preventDefault(); zone.setAttribute('data-over', ''); }); });
    ['dragleave', 'drop'].forEach(function (n) { zone.addEventListener(n, function (e) { e.preventDefault(); zone.removeAttribute('data-over'); }); });
    zone.addEventListener('drop', function (e) { add(Array.prototype.slice.call(e.dataTransfer.files)); });
    function status(it) { return it.status === 'ready' ? '대기' : it.status === 'uploading' ? '업로드 중 ' + it.progress + '%' : it.status === 'done' ? '완료' : it.status === 'cancelled' ? '취소됨' : '실패: ' + (it.error || '오류'); }
    function render() {
      list.innerHTML = items.map(function (it) {
        return '<li class="sk-upload__item" data-id="' + it.id + '" data-status="' + it.status + '"><div><div class="sk-upload__name">' + esc(it.file.name) + '</div><div class="sk-upload__meta">' + humanSize(it.file.size) + ' · ' + esc(status(it)) + '</div></div><div class="sk-inline">' +
          (it.status === 'uploading' ? '<button type="button" class="sk-button sk-button--small" data-act="cancel" aria-label="' + esc(it.file.name) + ' 업로드 취소">취소</button>' : '') +
          (it.status === 'error' || it.status === 'cancelled' ? '<button type="button" class="sk-button sk-button--small" data-act="retry" aria-label="' + esc(it.file.name) + ' 다시 시도">다시 시도</button>' : '') +
          '<button type="button" class="sk-button sk-button--small" data-act="remove" aria-label="' + esc(it.file.name) + ' 목록에서 제거">제거</button></div>' +
          (it.status === 'uploading' || it.status === 'done' ? '<progress class="sk-progress" max="100" value="' + it.progress + '" aria-label="' + esc(it.file.name) + ' 진행률"></progress>' : '') + '</li>';
      }).join('');
      emit(root, 'sk:upload-change', { files: items.map(function (i) { return { name: i.file.name, size: i.file.size, status: i.status }; }) });
    }
    function find(id) { return items.filter(function (i) { return i.id === id; })[0]; }
    function start(it) {
      if (!handler) return;
      it.status = 'uploading'; it.progress = 0; it.error = ''; it.ctrl = new AbortController(); render();
      Promise.resolve(handler(it.file, { signal: it.ctrl.signal, onProgress: function (p) { it.progress = Math.max(0, Math.min(100, Math.round(p))); var li = list.querySelector('[data-id="' + it.id + '"]'); if (li) { var pr = li.querySelector('progress'); if (pr) pr.value = it.progress; var meta = li.querySelector('.sk-upload__meta'); if (meta) meta.textContent = humanSize(it.file.size) + ' · ' + status(it); } } }))
        .then(function () { if (it.status === 'uploading') { it.status = 'done'; it.progress = 100; render(); SK.announce(it.file.name + ' 업로드 완료'); } })
        .catch(function (err) { if (it.ctrl.signal.aborted) { it.status = 'cancelled'; } else { it.status = 'error'; it.error = (err && err.message) || '업로드 실패'; SK.announce(it.file.name + ' 업로드 실패'); } render(); });
    }
    function add(files) {
      var errors = [];
      files.forEach(function (f) {
        if (!multiple && items.length) { items.forEach(function (x) { if (x.ctrl) x.ctrl.abort(); }); items = []; }
        if (!accepts(f, accept)) { errors.push(f.name + ': 허용되지 않는 형식입니다'); return; }
        if (maxSize && f.size > maxSize) { errors.push(f.name + ': 크기가 너무 큽니다 (최대 ' + humanSize(maxSize) + ')'); return; }
        var same = items.filter(function (i) { return i.file.name === f.name; })[0];
        if (same) {
          if (dup === 'reject') { errors.push(f.name + ': 같은 이름의 파일이 이미 있습니다'); return; }
          if (dup === 'replace') { if (same.ctrl) same.ctrl.abort(); items = items.filter(function (i) { return i !== same; }); }
        }
        if (maxFiles && items.length >= maxFiles) { errors.push(f.name + ': 파일 수 제한을 넘었습니다 (최대 ' + maxFiles + '개)'); return; }
        var it = { id: 'u' + (++nid), file: f, status: 'ready', progress: 0, error: '' }; items.push(it);
      });
      errBox.textContent = errors.join(' / ');
      render();
      if (auto && handler) items.filter(function (i) { return i.status === 'ready'; }).forEach(start);
    }
    list.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return; var li = b.closest('[data-id]'), it = find(li.getAttribute('data-id'));
      if (b.getAttribute('data-act') === 'cancel' && it.ctrl) it.ctrl.abort();
      else if (b.getAttribute('data-act') === 'retry') start(it);
      else if (b.getAttribute('data-act') === 'remove') { if (it.ctrl) it.ctrl.abort(); items = items.filter(function (i) { return i !== it; }); render(); pick.focus(); }
    });
    root._skUpload = { setHandler: function (fn) { handler = fn; }, add: add, files: function () { return items.map(function (i) { return i.file; }); }, items: function () { return items.slice(); }, start: function () { items.filter(function (i) { return i.status === 'ready'; }).forEach(start); } };
  });
  SK.upload = function (root, o) { SK.init(document); if (root._skUpload && o && o.upload) root._skUpload.setHandler(o.upload); return root._skUpload; };

  /* ======================= markdown / prompt editor ======================= */
  function mdSafe(src, vars) {
    var s = esc(src).replace(/\r\n?/g, '\n');
    s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>').replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/\{([^{}\n]{1,40})\}/g, '<span class="sk-var">{$1}</span>');
    var lines = s.split('\n'), out = [], i = 0;
    while (i < lines.length) {
      var l = lines[i], m;
      if ((m = /^(#{1,3})\s+(.*)$/.exec(l))) { out.push('<h' + (m[1].length + 2) + '>' + m[2] + '</h' + (m[1].length + 2) + '>'); i++; continue; }
      if (/^\s*[-*]\s+/.test(l)) { var li = []; while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { li.push('<li>' + lines[i].replace(/^\s*[-*]\s+/, '') + '</li>'); i++; } out.push('<ul>' + li.join('') + '</ul>'); continue; }
      if (/^\|.*\|\s*$/.test(l) && i + 1 < lines.length && /^\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        var head = l.trim().slice(1, -1).split('|'); i += 2; var rowsH = [];
        while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) { rowsH.push('<tr>' + lines[i].trim().slice(1, -1).split('|').map(function (c) { return '<td>' + c.trim() + '</td>'; }).join('') + '</tr>'); i++; }
        out.push('<table><thead><tr>' + head.map(function (c) { return '<th>' + c.trim() + '</th>'; }).join('') + '</tr></thead><tbody>' + rowsH.join('') + '</tbody></table>'); continue;
      }
      if (!l.trim()) { i++; continue; }
      var para = [l]; i++; while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|\s*[-*]\s|\|)/.test(lines[i])) { para.push(lines[i]); i++; }
      out.push('<p>' + para.join('<br>') + '</p>');
    }
    return out.join('');
  }
  SK.markdown = mdSafe;
  SK.register('editor', '[data-sk-editor]', function (root) {
    var ta = $('textarea', root) || document.createElement('textarea');
    var vars = (root.getAttribute('data-variables') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var req = (root.getAttribute('data-required-vars') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var max = +root.getAttribute('data-max') || 0, readOnly = root.hasAttribute('data-readonly');
    var label = ta.getAttribute('aria-label') || root.getAttribute('data-label') || '본문 편집기';
    var initial = ta.value, saved = ta.value, mode = 'edit';
    root.classList.add('sk-editor');
    var bar = document.createElement('div'); bar.className = 'sk-editor__bar'; bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', label + ' 도구');
    function mk(text, aria, fn) { var b = document.createElement('button'); b.type = 'button'; b.className = 'sk-button sk-button--small'; b.textContent = text; b.setAttribute('aria-label', aria); b.addEventListener('click', fn); bar.appendChild(b); return b; }
    function wrapSel(a, z, ph) { var s = ta.selectionStart, e = ta.selectionEnd, v = ta.value, sel = v.slice(s, e) || ph; ta.setRangeText(a + sel + z, s, e, 'select'); ta.focus(); ta.dispatchEvent(new Event('input', { bubbles: true })); }
    function prefix(p) { var s = ta.selectionStart, v = ta.value, ls = v.lastIndexOf('\n', s - 1) + 1; ta.setRangeText(p, ls, ls, 'end'); ta.focus(); ta.dispatchEvent(new Event('input', { bubbles: true })); }
    if (!readOnly) {
      mk('B', '굵게', function () { wrapSel('**', '**', '굵게'); }); mk('I', '기울임', function () { wrapSel('*', '*', '기울임'); });
      mk('코드', '코드', function () { wrapSel('`', '`', '코드'); }); mk('제목', '제목', function () { prefix('## '); }); mk('목록', '목록', function () { prefix('- '); });
      vars.forEach(function (v) { mk('{' + v + '}', '변수 ' + v + ' 삽입', function () { var s = ta.selectionStart; ta.setRangeText('{' + v + '}', s, ta.selectionEnd, 'end'); ta.focus(); ta.dispatchEvent(new Event('input', { bubbles: true })); }); });
    }
    var sp = document.createElement('span'); sp.className = 'sk-spacer'; bar.appendChild(sp);
    var tEdit = mk('편집', '편집 모드', function () { setMode('edit'); }), tPrev = mk('미리보기', '미리보기 모드', function () { setMode('preview'); });
    tEdit.setAttribute('aria-pressed', 'true'); tPrev.setAttribute('aria-pressed', 'false');
    var prev = document.createElement('div'); prev.className = 'sk-editor__preview sk-reading'; prev.hidden = true; prev.setAttribute('aria-label', label + ' 미리보기'); prev.tabIndex = 0;
    var foot = document.createElement('div'); foot.className = 'sk-editor__foot';
    var left = document.createElement('span'), mid = document.createElement('span'), right = document.createElement('span'); mid.setAttribute('role', 'status'); foot.appendChild(left); foot.appendChild(mid); foot.appendChild(right);
    ta.classList.remove('sk-textarea'); ta.classList.add('sk-editor__area'); ta.setAttribute('aria-label', label); if (readOnly) ta.readOnly = true;
    if (!ta.parentNode || ta.parentNode !== root) { root.appendChild(ta); }
    root.insertBefore(bar, ta); root.appendChild(prev); root.appendChild(foot);
    function missing() { return req.filter(function (v) { return ta.value.indexOf('{' + v + '}') < 0; }); }
    function update() {
      var n = ta.value.length; left.textContent = n + (max ? ' / ' + max : '') + '자';
      var ms = missing(); var over = max && n > max;
      mid.textContent = ms.length ? '필수 변수 누락: ' + ms.map(function (v) { return '{' + v + '}'; }).join(', ') : (req.length ? '필수 변수 확인됨' : '');
      mid.style.color = ms.length ? 'var(--sk-danger)' : '';
      var bad = ms.length > 0 || over; if (bad) ta.setAttribute('aria-invalid', 'true'); else ta.removeAttribute('aria-invalid');
      var dirty = ta.value !== saved; right.textContent = dirty ? '저장되지 않은 변경' : '저장됨'; root.setAttribute('data-dirty', dirty ? 'true' : 'false');
      if (over) left.style.color = 'var(--sk-danger)'; else left.style.color = '';
      emit(root, 'sk:editor-change', { dirty: dirty, length: n, missing: ms, over: !!over });
    }
    function setMode(m) {
      mode = m; var p = m === 'preview'; ta.hidden = p; prev.hidden = !p;
      tEdit.setAttribute('aria-pressed', String(!p)); tPrev.setAttribute('aria-pressed', String(p));
      if (p) prev.innerHTML = mdSafe(ta.value); (p ? prev : ta).focus();
    }
    ta.addEventListener('input', update); update();
    root._skEditor = { getValue: function () { return ta.value; }, setValue: function (v) { ta.value = v; update(); }, markSaved: function () { saved = ta.value; update(); }, isDirty: function () { return ta.value !== saved; }, validate: function () { var ms = missing(); return { valid: !ms.length && !(max && ta.value.length > max), missing: ms }; }, mode: function () { return mode; }, setMode: setMode };
  });

  /* ======================= command palette ======================= */
  SK.commandPalette = function (o) {
    o = o || {}; var items = o.items || [], root = document.querySelector('[data-saas-kit]') || document.body;
    var d = document.createElement('dialog'); d.className = 'sk-palette'; d.setAttribute('aria-label', o.label || '명령 팔레트');
    var lid = uid('pal');
    d.innerHTML = '<input class="sk-input sk-palette__input" role="combobox" aria-expanded="true" aria-controls="' + lid + '" aria-autocomplete="list" aria-label="명령 검색" placeholder="' + esc(o.placeholder || '명령 또는 화면 검색') + '" autocomplete="off"><ul class="sk-palette__list" id="' + lid + '" role="listbox" aria-label="검색 결과"></ul>';
    root.appendChild(d);
    var input = $('input', d), list = $('ul', d), shown = [], active = 0, opener = null;
    function render() {
      var q = input.value.trim().toLowerCase();
      shown = items.filter(function (it) { return !q || (it.label + ' ' + (it.keywords || '') + ' ' + (it.hint || '')).toLowerCase().indexOf(q) >= 0; });
      list.innerHTML = shown.length ? shown.map(function (it, i) { return '<li class="sk-option" role="option" id="' + lid + '-' + i + '" data-i="' + i + '"><span>' + esc(it.label) + '</span>' + (it.hint ? ' <span class="sk-field__hint">' + esc(it.hint) + '</span>' : '') + '</li>'; }).join('') : '<li class="sk-option-empty" role="presentation">결과가 없습니다</li>';
      setActive(0); SK.announce(shown.length + '개 결과');
    }
    function setActive(i) { active = Math.max(0, Math.min(i, shown.length - 1)); $$('.sk-option', list).forEach(function (x, k) { if (k === active) x.setAttribute('data-active', ''); else x.removeAttribute('data-active'); }); var el = list.children[active]; if (shown.length && el) { input.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); } else input.removeAttribute('aria-activedescendant'); }
    function restore() { var a = document.activeElement; if (opener && opener.isConnected && opener.focus && (!a || a === document.body || d.contains(a) || a === opener)) opener.focus(); }
    function run(i) { var it = shown[i]; if (!it) return; d.close(); restore(); if (it.run) it.run(it); emit(d, 'sk:command', { id: it.id }); }
    input.addEventListener('input', render);
    input.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); } else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); } else if (e.key === 'Enter') { e.preventDefault(); run(active); } });
    list.addEventListener('click', function (e) { var li = e.target.closest('.sk-option'); if (li) run(+li.dataset.i); });
    list.addEventListener('pointermove', function (e) { var li = e.target.closest('.sk-option'); if (li) setActive(+li.dataset.i); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', restore);
    function open() { opener = document.activeElement; input.value = ''; render(); d.showModal(); input.focus(); }
    var hk = (o.hotkey || 'k').toLowerCase();
    document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === hk) { e.preventDefault(); d.open ? d.close() : open(); } });
    return { open: open, close: function () { d.close(); }, setItems: function (a) { items = a; if (d.open) render(); }, element: d };
  };

  /* ======================= form helpers ======================= */
  function fieldError(el) {
    var wrap = el.closest('.sk-field') || el.parentNode, e = wrap.querySelector('.sk-field__error');
    if (!e) { e = document.createElement('div'); e.className = 'sk-field__error'; e.setAttribute('role', 'alert'); wrap.appendChild(e); }
    if (!e.id) e.id = uid('err');
    var ids = (el.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean); if (ids.indexOf(e.id) < 0) { ids.push(e.id); el.setAttribute('aria-describedby', ids.join(' ')); }
    return e;
  }
  SK.validate = function (form, rules) {
    var errors = {}, first = null;
    Object.keys(rules).forEach(function (name) {
      var r = rules[name], el = form.elements[name]; if (!el) return;
      var v = (el.type === 'checkbox' ? (el.checked ? '1' : '') : String(el.value || '').trim()), msg = '', lab = r.label || name, m = r.messages || {};
      if (r.required && !v) msg = m.required || lab + '을(를) 입력하세요.';
      else if (v && r.min && v.length < r.min) msg = m.min || lab + '은(는) ' + r.min + '자 이상이어야 합니다.';
      else if (v && r.max && v.length > r.max) msg = m.max || lab + '은(는) ' + r.max + '자를 넘을 수 없습니다.';
      else if (v && r.pattern && !r.pattern.test(v)) msg = m.pattern || lab + ' 형식이 올바르지 않습니다.';
      else if (r.validate) msg = r.validate(v, form) || '';
      var box = fieldError(el); box.textContent = msg;
      if (msg) { el.setAttribute('aria-invalid', 'true'); errors[name] = msg; if (!first) first = el; } else el.removeAttribute('aria-invalid');
    });
    var n = Object.keys(errors).length;
    if (first) { (first._skSelect ? first._skSelect.button : first).focus(); SK.announce('오류 ' + n + '건: ' + errors[Object.keys(errors)[0]]); }
    return { valid: n === 0, errors: errors };
  };
  SK.clearErrors = function (form) { $$('[aria-invalid]', form).forEach(function (e) { e.removeAttribute('aria-invalid'); }); $$('.sk-field__error', form).forEach(function (e) { e.textContent = ''; }); };
  SK.dirtyGuard = function (form, o) {
    o = o || {};
    function snap() { var o2 = {}; Array.prototype.forEach.call(form.elements, function (el) { if (!el.name) return; o2[el.name] = el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.value; }); return JSON.stringify(o2); }
    var base = snap();
    function dirty() { return snap() !== base; }
    function onUnload(e) { if (dirty()) { e.preventDefault(); e.returnValue = o.message || '저장하지 않은 변경이 있습니다.'; return e.returnValue; } }
    window.addEventListener('beforeunload', onUnload);
    return { isDirty: dirty, reset: function () { base = snap(); }, destroy: function () { window.removeEventListener('beforeunload', onUnload); } };
  };
  SK.lockSubmit = function (form, handler) {
    var busy = false;
    form.addEventListener('submit', function (e) {
      e.preventDefault(); if (busy) return; busy = true;
      var btns = $$('[type=submit]', form); btns.forEach(function (b) { b.disabled = true; }); form.setAttribute('aria-busy', 'true');
      Promise.resolve().then(function () { return handler(new FormData(form), e); }).catch(function (err) { SK.toast((err && err.message) || '저장하지 못했습니다', { type: 'error' }); }).then(function () { busy = false; btns.forEach(function (b) { b.disabled = false; }); form.removeAttribute('aria-busy'); });
    });
  };

  /* ======================= state switcher ======================= */
  SK.register('state', '[data-sk-state]', function (box) {
    box.classList.add('sk-state-holder');
    box._skState = {
      set: function (name) {
        $$(':scope > [data-state]', box).forEach(function (c) { c.hidden = c.getAttribute('data-state') !== name; });
        box.setAttribute('aria-busy', String(name === 'loading')); box.setAttribute('data-current', name);
        var cur = $(':scope > [data-state="' + name + '"]', box); if (cur && cur.getAttribute('data-announce')) SK.announce(cur.getAttribute('data-announce'));
        emit(box, 'sk:state', { state: name });
      },
      get: function () { return box.getAttribute('data-current'); }
    };
    box._skState.set(box.getAttribute('data-sk-state') || 'ready');
  });
  SK.setState = function (box, name) { SK.init(document); box._skState.set(name); };

  SK.init(document);
})(window);
