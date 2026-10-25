/* SaaS Design Kit, core behaviors. No dependencies, no modules, no build step.
 * Usage: load js/saas-kit.js with a script tag (then optionally js/saas-kit-data.js). Auto-initializes on DOMContentLoaded.
 * Re-run SaasKit.init(root) after inserting markup dynamically.
 * Overlays are positioned with position:fixed and appended inside the nearest open <dialog> or [data-saas-kit] root so tokens keep inheriting.
 * Do not put transform/filter/contain on an ancestor of the root; that changes the fixed-position containing block. */
(function (g) {
  'use strict';
  var SK = g.SaasKit = g.SaasKit || {};
  var seq = 0;
  var registry = [];

  function uid(p) { seq += 1; return 'sk-' + (p || 'x') + '-' + seq; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function rootOf(el) { return (el && (el.closest('dialog[open]') || el.closest('[data-saas-kit]'))) || document.body; }
  function emit(el, name, detail) { var e = new CustomEvent(name, { bubbles: true, cancelable: true, detail: detail }); el.dispatchEvent(e); return e; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function isFocusable(el) { return el.matches('a[href],button,input,select,textarea,[tabindex]') && !el.disabled; }
  SK.util = { uid: uid, $: $, $$: $$, rootOf: rootOf, emit: emit, esc: esc };

  /* ---------- announcer (polite live region) ---------- */
  var announcer;
  SK.announce = function (msg) {
    var root = document.querySelector('[data-saas-kit]') || document.body;
    if (!announcer || !announcer.isConnected) {
      announcer = document.createElement('div');
      announcer.className = 'sk-sr-only';
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      root.appendChild(announcer);
    }
    announcer.textContent = '';
    setTimeout(function () { announcer.textContent = msg; }, 30);
  };

  /* ---------- positioning ---------- */
  function place(anchor, panel, o) {
    o = o || {};
    var gap = o.offset == null ? 6 : o.offset, m = 8;
    panel.hidden = false;
    panel.style.left = '0px'; panel.style.top = '0px'; panel.style.maxHeight = '';
    var a = anchor.getBoundingClientRect();
    if (o.matchWidth) panel.style.minWidth = Math.round(a.width) + 'px';
    var vw = document.documentElement.clientWidth, vh = document.documentElement.clientHeight;
    var below = vh - a.bottom - gap - m, above = a.top - gap - m;
    var pr = panel.getBoundingClientRect();
    var top = o.placement === 'top' || (pr.height > below && above > below);
    var avail = top ? above : below;
    panel.style.maxHeight = Math.max(120, Math.min(o.maxHeight || 320, avail)) + 'px';
    pr = panel.getBoundingClientRect();
    var y = top ? a.top - gap - pr.height : a.bottom + gap;
    var x = o.align === 'end' ? a.right - pr.width : a.left;
    x = Math.max(m, Math.min(x, vw - pr.width - m));
    panel.style.left = Math.round(x) + 'px';
    panel.style.top = Math.round(Math.max(m, y)) + 'px';
    panel.setAttribute('data-placement', top ? 'top' : 'bottom');
  }
  SK.place = place;

  /* Overlay lifecycle: outside click, scroll/resize reposition, Escape handled by owner */
  function overlay(anchor, panel, opts) {
    opts = opts || {};
    var home = panel.parentNode, isOpen = false;
    function reposition() { if (isOpen) place(anchor, panel, opts); }
    function onDown(e) { if (!panel.contains(e.target) && !anchor.contains(e.target)) api.close(); }
    var api = {
      get isOpen() { return isOpen; },
      open: function () {
        if (isOpen) return;
        rootOf(anchor).appendChild(panel);
        place(anchor, panel, opts);
        isOpen = true;
        document.addEventListener('pointerdown', onDown, true);
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);
        if (opts.onOpen) opts.onOpen();
      },
      close: function (restore) {
        if (!isOpen) return;
        isOpen = false;
        panel.hidden = true;
        document.removeEventListener('pointerdown', onDown, true);
        window.removeEventListener('resize', reposition);
        window.removeEventListener('scroll', reposition, true);
        if (home && home.isConnected) home.appendChild(panel);
        if (opts.onClose) opts.onClose();
        if (restore !== false && opts.restoreFocus !== false) anchor.focus();
      },
      reposition: reposition
    };
    return api;
  }
  SK.overlay = overlay;

  function register(name, selector, init) { registry.push({ name: name, selector: selector, init: init }); }
  SK.register = register;
  SK.init = function (root) {
    root = root || document;
    registry.forEach(function (r) {
      $$(r.selector, root).forEach(function (el) {
        if (el._skInit && el._skInit[r.name]) return;
        (el._skInit = el._skInit || {})[r.name] = true;
        try { r.init(el); } catch (err) { if (g.console) console.error('[SaasKit] ' + r.name + ' init failed', err); }
      });
    });
  };

  /* ---------- toast ---------- */
  var toastSeen = {};
  SK.toast = function (msg, o) {
    o = o || {};
    var type = o.type || 'info';
    var root = document.querySelector('[data-saas-kit]') || document.body;
    var region = $('.sk-toast-region', root);
    if (!region) { region = document.createElement('div'); region.className = 'sk-toast-region'; region.setAttribute('aria-live', 'polite'); region.setAttribute('aria-atomic', 'false'); root.appendChild(region); }
    var key = type + '|' + msg;
    var existing = toastSeen[key];
    if (existing && existing.el.isConnected) {
      existing.n += 1; existing.count.textContent = '×' + existing.n; existing.count.hidden = false;
      if (existing.timer) { clearTimeout(existing.timer); existing.timer = setTimeout(existing.close, existing.dur); }
      return existing.api;
    }
    var el = document.createElement('div');
    el.className = 'sk-toast'; el.setAttribute('data-type', type);
    el.setAttribute('role', type === 'error' ? 'alert' : 'status');
    var m = document.createElement('div'); m.className = 'sk-toast__msg'; m.textContent = msg;
    var count = document.createElement('span'); count.className = 'sk-toast__count'; count.hidden = true;
    m.appendChild(document.createTextNode(' ')); m.appendChild(count);
    el.appendChild(m);
    var entry = { el: el, n: 1, count: count, timer: null };
    function close() { if (entry.timer) clearTimeout(entry.timer); el.remove(); delete toastSeen[key]; if (o.onClose) o.onClose(); }
    if (o.action) {
      var ab = document.createElement('button'); ab.type = 'button'; ab.className = 'sk-link-button'; ab.textContent = o.action.label;
      ab.addEventListener('click', function () { if (o.action.onClick) o.action.onClick(); close(); });
      el.appendChild(ab);
    }
    /* Errors never auto-dismiss, so the cause cannot vanish before it is read. Others default to 4s. */
    var sticky = type === 'error' || o.duration === 0;
    if (sticky || o.dismissible) {
      var cb = document.createElement('button'); cb.type = 'button'; cb.className = 'sk-link-button'; cb.textContent = '닫기'; cb.setAttribute('aria-label', '알림 닫기');
      cb.addEventListener('click', close); el.appendChild(cb);
    }
    entry.dur = o.duration == null ? 4000 : o.duration;
    if (!sticky) entry.timer = setTimeout(close, entry.dur);
    entry.close = close; entry.api = { close: close, el: el };
    toastSeen[key] = entry;
    region.appendChild(el);
    return entry.api;
  };

  /* ---------- confirm dialog (native <dialog>, focus returns to opener) ---------- */
  SK.confirm = function (o) {
    o = o || {};
    return new Promise(function (resolve) {
      var opener = document.activeElement;
      var root = rootOf(opener);
      var d = document.createElement('dialog'); d.className = 'sk-dialog';
      var tid = uid('dlg-t'), bid = uid('dlg-b');
      d.setAttribute('aria-labelledby', tid); d.setAttribute('aria-describedby', bid);
      if (o.danger) d.setAttribute('role', 'alertdialog');
      var needType = o.typeToConfirm ? String(o.typeToConfirm) : '';
      d.innerHTML = '<div class="sk-dialog__header"><h2 class="sk-section-title" id="' + tid + '">' + esc(o.title || '확인') + '</h2></div>' +
        '<div class="sk-dialog__body sk-form" id="' + bid + '"><p>' + esc(o.message || '') + (o.target ? ' <span class="sk-confirm__target">' + esc(o.target) + '</span>' : '') + '</p>' +
        (needType ? '<div class="sk-field"><label class="sk-field__label" for="' + bid + '-t">계속하려면 <span class="sk-confirm__target">' + esc(needType) + '</span> 을(를) 입력하세요</label><input class="sk-input" id="' + bid + '-t" autocomplete="off"></div>' : '') + '</div>' +
        '<div class="sk-dialog__footer"><button type="button" class="sk-button" data-r="0">' + esc(o.cancelLabel || '취소') + '</button><button type="button" class="sk-button ' + (o.danger ? 'sk-button--danger' : 'sk-button--primary') + '" data-r="1">' + esc(o.confirmLabel || '확인') + '</button></div>';
      root.appendChild(d);
      var ok = d.querySelector('[data-r="1"]'), cancel = d.querySelector('[data-r="0"]'), ti = d.querySelector('input');
      if (needType) { ok.disabled = true; ti.addEventListener('input', function () { ok.disabled = ti.value !== needType; }); }
      var result = false, done = false;
      /* finish() is idempotent: it runs right after close() on button clicks and again from the close event (Escape). Cleanup must not depend on event timing. */
      function finish() { if (done) return; done = true; d.remove(); if (opener && opener.focus && opener.isConnected) opener.focus(); resolve(result); }
      d.addEventListener('click', function (e) { var b = e.target.closest('[data-r]'); if (b && !b.disabled) { result = b.getAttribute('data-r') === '1'; d.close(); finish(); } });
      /* Escape: the browser fires cancel, then close (which can arrive late). Finish at cancel via a microtask so cleanup does not wait for close. */
      d.addEventListener('cancel', function () { result = false; Promise.resolve().then(finish); });
      d.addEventListener('close', finish);
      d.showModal();
      /* Destructive dialogs start on Cancel; others on the primary action. */
      (needType ? ti : (o.danger ? cancel : ok)).focus();
    });
  };

  /* ---------- tabs ---------- */
  register('tabs', '[data-sk-tabs]', function (root) {
    var list = $('[role="tablist"]', root);
    var tabs = $$('[role="tab"]', list);
    var vertical = list.getAttribute('aria-orientation') === 'vertical';
    var manual = root.getAttribute('data-activation') === 'manual';
    root.classList.add('sk-tabs');
    var panels = tabs.map(function (t, i) {
      if (!t.id) t.id = uid('tab');
      var p = t.getAttribute('aria-controls') ? document.getElementById(t.getAttribute('aria-controls')) : $$('[role="tabpanel"]', root)[i];
      if (p) { if (!p.id) p.id = uid('panel'); t.setAttribute('aria-controls', p.id); p.setAttribute('aria-labelledby', t.id); p.tabIndex = 0; }
      return p;
    });
    function select(i, focus) {
      tabs.forEach(function (t, k) { var on = k === i; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; if (panels[k]) panels[k].hidden = !on; });
      if (focus) tabs[i].focus();
      emit(root, 'sk:tab', { index: i, tab: tabs[i], panel: panels[i] });
    }
    var start = Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; }));
    select(start, false);
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (e) {
        var next = null, n = tabs.length;
        var prevK = vertical ? 'ArrowUp' : 'ArrowLeft', nextK = vertical ? 'ArrowDown' : 'ArrowRight';
        if (document.documentElement.dir === 'rtl' && !vertical) { prevK = 'ArrowRight'; nextK = 'ArrowLeft'; }
        if (e.key === nextK) next = (i + 1) % n; else if (e.key === prevK) next = (i - 1 + n) % n;
        else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = n - 1;
        else if (manual && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(i, false); return; }
        if (next == null) return;
        e.preventDefault();
        if (manual) { tabs.forEach(function (x, k) { x.tabIndex = k === next ? 0 : -1; }); tabs[next].focus(); } else select(next, true);
      });
    });
    root._skTabs = { select: function (i) { select(i, false); } };
  });

  /* ---------- tooltip (hover AND keyboard focus, Escape to dismiss, never the only source of information) ---------- */
  var tip, tipFor, tipTimer;
  function showTip(el) {
    var text = el.getAttribute('data-sk-tooltip'); if (!text) return;
    if (!tip) { tip = document.createElement('div'); tip.className = 'sk-tooltip'; tip.setAttribute('role', 'tooltip'); tip.id = uid('tip'); tip.hidden = true; }
    tip.textContent = text; rootOf(el).appendChild(tip); tipFor = el;
    el.setAttribute('aria-describedby', tip.id);
    place(el, tip, { placement: 'top', offset: 6, maxHeight: 200 });
  }
  function hideTip() { clearTimeout(tipTimer); if (tip) tip.hidden = true; if (tipFor) { tipFor.removeAttribute('aria-describedby'); tipFor = null; } }
  register('tooltip', '[data-sk-tooltip]', function (el) {
    if (!isFocusable(el)) el.tabIndex = 0;
    el.addEventListener('mouseenter', function () { tipTimer = setTimeout(function () { showTip(el); }, 350); });
    el.addEventListener('mouseleave', hideTip);
    el.addEventListener('focus', function () { showTip(el); });
    el.addEventListener('blur', hideTip);
    el.addEventListener('keydown', function (e) { if (e.key === 'Escape' && tipFor === el) { hideTip(); e.stopPropagation(); } });
  });

  /* ---------- popover (non-modal; Escape/outside click close; focus moves in and returns) ---------- */
  register('popover', '[data-sk-popover]', function (btn) {
    var panel = document.getElementById(btn.getAttribute('data-sk-popover')); if (!panel) return;
    panel.classList.add('sk-popover'); panel.hidden = true; panel.setAttribute('role', panel.getAttribute('role') || 'dialog'); panel.tabIndex = -1;
    if (!panel.getAttribute('aria-label') && !panel.getAttribute('aria-labelledby')) panel.setAttribute('aria-label', btn.textContent.trim() || '팝오버');
    btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-haspopup', 'dialog'); btn.setAttribute('aria-controls', panel.id);
    var ov = overlay(btn, panel, { onOpen: function () { btn.setAttribute('aria-expanded', 'true'); var f = panel.querySelector('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'); (f || panel).focus(); }, onClose: function () { btn.setAttribute('aria-expanded', 'false'); } });
    btn.addEventListener('click', function () { ov.isOpen ? ov.close() : ov.open(); });
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); ov.close(); } });
    btn.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ov.isOpen) { e.preventDefault(); e.stopPropagation(); ov.close(); } });
    btn._skPopover = ov;
  });

  /* ---------- menu (roving focus, typeahead, Escape returns focus) ---------- */
  register('menu', '[data-sk-menu]', function (wrap) {
    var btn = $('[data-sk-menu-button]', wrap), menu = $('[role="menu"]', wrap);
    wrap.classList.add('sk-menu-wrap'); menu.classList.add('sk-menu'); menu.hidden = true;
    if (!btn.id) btn.id = uid('menubtn'); if (!menu.id) menu.id = uid('menu');
    menu.setAttribute('aria-labelledby', btn.id);
    btn.setAttribute('aria-haspopup', 'menu'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', menu.id);
    var buf = '', bufT;
    function items() { return $$('[role="menuitem"]:not([aria-disabled="true"])', menu); }
    var ov = overlay(btn, menu, { align: 'start', restoreFocus: false, onClose: function () { btn.setAttribute('aria-expanded', 'false'); } });
    function open(which) {
      ov.open(); btn.setAttribute('aria-expanded', 'true');
      var it = items(); $$('[role="menuitem"]', menu).forEach(function (x) { x.tabIndex = -1; });
      var t = which === 'last' ? it[it.length - 1] : it[0]; if (t) { t.tabIndex = 0; t.focus(); }
    }
    function close(refocus) { ov.close(false); if (refocus) btn.focus(); }
    btn.addEventListener('click', function () { ov.isOpen ? close(true) : open('first'); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); open('first'); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); open('last'); }
      else if (e.key === 'Escape' && ov.isOpen) { e.preventDefault(); e.stopPropagation(); close(true); }
    });
    menu.addEventListener('keydown', function (e) {
      var it = items(), i = it.indexOf(document.activeElement), n = it.length;
      function go(k) { it.forEach(function (x) { x.tabIndex = -1; }); it[k].tabIndex = 0; it[k].focus(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); go((i + 1) % n); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); go((i - 1 + n) % n); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(n - 1); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
      else if (e.key === 'Tab') { close(false); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.activeElement.click(); }
      else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        buf += e.key.toLowerCase(); clearTimeout(bufT); bufT = setTimeout(function () { buf = ''; }, 600);
        var hit = it.filter(function (x) { return x.textContent.trim().toLowerCase().indexOf(buf) === 0; })[0]; if (hit) go(it.indexOf(hit));
      }
    });
    menu.addEventListener('click', function (e) {
      var item = e.target.closest('[role="menuitem"]'); if (!item || item.getAttribute('aria-disabled') === 'true') return;
      emit(wrap, 'sk:menu-select', { item: item, value: item.getAttribute('data-value') || item.textContent.trim() });
      close(true);
    });
    wrap._skMenu = { open: open, close: close };
  });

  /* ---------- custom select (enhances a native <select>; the native element keeps the value and submits with the form) ---------- */
  register('select', 'select[data-sk-select]', function (sel) {
    var wrap = document.createElement('span'); wrap.className = 'sk-select-wrap';
    sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
    sel.classList.add('sk-sr-only'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'sk-select sk-select-btn';
    var bid = (sel.id || uid('sel')) + '-btn'; btn.id = bid;
    btn.setAttribute('role', 'combobox'); btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    var lab = sel.id ? document.querySelector('label[for="' + sel.id + '"]') : null;
    if (lab) lab.setAttribute('for', bid); else if (sel.getAttribute('aria-label')) btn.setAttribute('aria-label', sel.getAttribute('aria-label'));
    var labelSpan = document.createElement('span'); labelSpan.className = 'sk-select-label'; btn.appendChild(labelSpan);
    wrap.insertBefore(btn, sel);
    var list = document.createElement('ul'); list.className = 'sk-listbox'; list.setAttribute('role', 'listbox'); list.id = bid + '-list'; list.hidden = true; wrap.appendChild(list);
    btn.setAttribute('aria-controls', list.id);
    var active = -1, buf = '', bufT;
    function opts() { return Array.prototype.slice.call(sel.options); }
    function sync() { var o = sel.options[sel.selectedIndex]; labelSpan.textContent = o ? o.text : ''; btn.disabled = sel.disabled; if (sel.getAttribute('aria-invalid')) btn.setAttribute('aria-invalid', sel.getAttribute('aria-invalid')); }
    function build() {
      list.innerHTML = '';
      opts().forEach(function (o, i) {
        var li = document.createElement('li'); li.className = 'sk-option'; li.setAttribute('role', 'option'); li.id = bid + '-o' + i; li.textContent = o.text;
        li.setAttribute('aria-selected', String(o.selected)); if (o.disabled) li.setAttribute('aria-disabled', 'true'); li.dataset.i = i;
        list.appendChild(li);
      });
    }
    function setActive(i) {
      var items = $$('.sk-option', list); if (!items.length) return;
      active = Math.max(0, Math.min(i, items.length - 1));
      items.forEach(function (x, k) { if (k === active) x.setAttribute('data-active', ''); else x.removeAttribute('data-active'); });
      btn.setAttribute('aria-activedescendant', items[active].id);
      items[active].scrollIntoView({ block: 'nearest' });
    }
    function step(from, dir) { var o = opts(), i = from; for (var n = 0; n < o.length; n++) { i += dir; if (i < 0 || i >= o.length) return from; if (!o[i].disabled) return i; } return from; }
    function choose(i) {
      var o = sel.options[i]; if (!o || o.disabled) return;
      var changed = sel.selectedIndex !== i; sel.selectedIndex = i; sync();
      if (changed) { sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true })); }
    }
    var ov = overlay(btn, list, { matchWidth: true, onOpen: function () { btn.setAttribute('aria-expanded', 'true'); build(); place(btn, list, { matchWidth: true }); setActive(Math.max(0, sel.selectedIndex)); }, onClose: function () { btn.setAttribute('aria-expanded', 'false'); btn.removeAttribute('aria-activedescendant'); } });
    function typeahead(k) {
      buf += k.toLowerCase(); clearTimeout(bufT); bufT = setTimeout(function () { buf = ''; }, 600);
      var o = opts(), from = ov.isOpen ? active : sel.selectedIndex;
      var order = o.map(function (_, i) { return (from + (buf.length === 1 ? 1 : 0) + i) % o.length; });
      var hit = order.filter(function (i) { return !o[i].disabled && o[i].text.toLowerCase().indexOf(buf) === 0; })[0];
      if (hit == null) return;
      if (ov.isOpen) setActive(hit); else choose(hit);
    }
    btn.addEventListener('click', function () { if (btn.disabled) return; ov.isOpen ? ov.close() : ov.open(); });
    btn.addEventListener('keydown', function (e) {
      var open = ov.isOpen;
      switch (e.key) {
        case 'ArrowDown': e.preventDefault(); if (!open) { if (e.altKey) ov.open(); else choose(step(sel.selectedIndex, 1)); } else setActive(step(active, 1)); break;
        case 'ArrowUp': e.preventDefault(); if (!open) choose(step(sel.selectedIndex, -1)); else setActive(step(active, -1)); break;
        case 'Home': if (open) { e.preventDefault(); setActive(step(-1, 1)); } break;
        case 'End': if (open) { e.preventDefault(); setActive(step(opts().length, -1)); } break;
        case 'Enter': case ' ': e.preventDefault(); if (open) { choose(active); ov.close(); } else ov.open(); break;
        case 'Escape': if (open) { e.preventDefault(); e.stopPropagation(); ov.close(); } break;
        case 'Tab': if (open) { choose(active); ov.close(false); } break;
        default: if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) typeahead(e.key);
      }
    });
    list.addEventListener('pointerdown', function (e) { e.preventDefault(); });
    list.addEventListener('click', function (e) { var li = e.target.closest('.sk-option'); if (!li || li.getAttribute('aria-disabled') === 'true') return; choose(+li.dataset.i); ov.close(); });
    list.addEventListener('pointermove', function (e) { var li = e.target.closest('.sk-option'); if (li && +li.dataset.i !== active) setActive(+li.dataset.i); });
    sel.addEventListener('change', sync);
    sel.addEventListener('sk:refresh', sync);
    new MutationObserver(sync).observe(sel, { attributes: true, attributeFilter: ['disabled', 'aria-invalid'] });
    sync();
    sel._skSelect = { button: btn, open: function () { ov.open(); }, close: function () { ov.close(); }, refresh: sync };
  });

  /* ---------- combobox (searchable input with listbox; free text optional) ---------- */
  register('combobox', 'input[data-sk-combobox]', function (input) {
    var data = [];
    try { data = JSON.parse(input.getAttribute('data-options') || '[]'); } catch (e) { data = []; }
    function norm(a) { return a.map(function (x) { return typeof x === 'string' ? { value: x, label: x } : x; }); }
    var options = norm(data), free = input.hasAttribute('data-free');
    var wrap = document.createElement('span'); wrap.className = 'sk-combobox-wrap';
    input.parentNode.insertBefore(wrap, input); wrap.appendChild(input);
    var list = document.createElement('ul'); list.className = 'sk-listbox'; list.setAttribute('role', 'listbox'); list.id = (input.id || uid('cb')) + '-list'; list.hidden = true; wrap.appendChild(list);
    input.setAttribute('role', 'combobox'); input.setAttribute('aria-autocomplete', 'list'); input.setAttribute('aria-expanded', 'false'); input.setAttribute('aria-controls', list.id); input.autocomplete = 'off';
    var shown = [], active = -1;
    function render() {
      var q = input.value.trim().toLowerCase();
      shown = options.filter(function (o) { return !q || o.label.toLowerCase().indexOf(q) >= 0; });
      list.innerHTML = '';
      if (!shown.length) { var e = document.createElement('li'); e.className = 'sk-option-empty'; e.setAttribute('role', 'presentation'); e.textContent = '일치하는 항목이 없습니다'; list.appendChild(e); }
      shown.forEach(function (o, i) { var li = document.createElement('li'); li.className = 'sk-option'; li.setAttribute('role', 'option'); li.id = list.id + '-o' + i; li.dataset.i = i; li.textContent = o.label; li.setAttribute('aria-selected', String(input.dataset.value === o.value)); list.appendChild(li); });
      setActive(shown.length ? 0 : -1);
      SK.announce(shown.length + '개 항목');
    }
    function setActive(i) {
      active = i; $$('.sk-option', list).forEach(function (x, k) { if (k === i) x.setAttribute('data-active', ''); else x.removeAttribute('data-active'); });
      if (i >= 0) { var el = $$('.sk-option', list)[i]; input.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); } else input.removeAttribute('aria-activedescendant');
    }
    var ov = overlay(input, list, { matchWidth: true, restoreFocus: false, onOpen: function () { input.setAttribute('aria-expanded', 'true'); }, onClose: function () { input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); } });
    function pick(i) { var o = shown[i]; if (!o) return; input.value = o.label; input.dataset.value = o.value; ov.close(false); emit(input, 'sk:select', { value: o.value, label: o.label }); input.dispatchEvent(new Event('change', { bubbles: true })); }
    input.addEventListener('input', function () { delete input.dataset.value; render(); ov.open(); place(input, list, { matchWidth: true }); });
    input.addEventListener('focus', function () { if (input.hasAttribute('data-open-on-focus')) { render(); ov.open(); } });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (!ov.isOpen) { render(); ov.open(); } else setActive(Math.min(shown.length - 1, active + 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (ov.isOpen) setActive(Math.max(0, active - 1)); }
      else if (e.key === 'Enter') { if (ov.isOpen && active >= 0) { e.preventDefault(); pick(active); } }
      else if (e.key === 'Escape') { if (ov.isOpen) { e.preventDefault(); e.stopPropagation(); ov.close(false); } else if (input.value) { e.preventDefault(); input.value = ''; delete input.dataset.value; } }
      else if (e.key === 'Tab') { if (ov.isOpen && active >= 0 && !free) pick(active); else ov.close(false); }
    });
    input.addEventListener('blur', function () { setTimeout(function () { if (!list.contains(document.activeElement)) { ov.close(false); if (!free && !input.dataset.value) input.value = ''; } }, 120); });
    list.addEventListener('pointerdown', function (e) { e.preventDefault(); });
    list.addEventListener('click', function (e) { var li = e.target.closest('.sk-option'); if (li) pick(+li.dataset.i); });
    input._skCombobox = { setOptions: function (a) { options = norm(a); if (ov.isOpen) render(); }, open: function () { render(); ov.open(); } };
  });

  /* ---------- drawer (native <dialog>, slides in from the inline-start edge by default) ---------- */
  register('drawer', '[data-sk-drawer-open]', function (btn) {
    var d = document.getElementById(btn.getAttribute('data-sk-drawer-open')); if (!d) return;
    d.classList.add('sk-drawer');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.addEventListener('click', function () { d.showModal(); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    /* Native <dialog> already restores focus. Only step in when focus was left on the page body, and never steal focus the user (or app) moved elsewhere. */
    d.addEventListener('close', function () { var a = document.activeElement; if (!a || a === document.body || d.contains(a)) btn.focus(); });
  });

  /* ---------- theme / density manager ---------- */
  SK.theme = {
    set: function (mode, root) {
      root = root || document.querySelector('[data-saas-kit]'); if (!root) return;
      var eff = mode === 'system' ? (g.matchMedia && g.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode;
      root.setAttribute('data-theme', eff); root.setAttribute('data-theme-mode', mode);
      try { localStorage.setItem('sk-theme', mode); } catch (e) { /* storage may be blocked */ }
      emit(root, 'sk:theme', { mode: mode, theme: eff });
    },
    restore: function (root) { var m = 'light'; try { m = localStorage.getItem('sk-theme') || 'light'; } catch (e) { /* ignore */ } SK.theme.set(m, root); },
    watchSystem: function (root) { if (g.matchMedia) g.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { var r = root || document.querySelector('[data-saas-kit]'); if (r && r.getAttribute('data-theme-mode') === 'system') SK.theme.set('system', r); }); }
  };
  SK.density = { set: function (mode, root) { root = root || document.querySelector('[data-saas-kit]'); if (root) root.setAttribute('data-density', mode); } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { SK.init(document); }); else SK.init(document);
})(window);
