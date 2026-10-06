# -*- coding: utf-8 -*-
"""화면의 조작부를 하나씩 눌러 본다.

버튼을 눌렀는데 아무 일도 안 일어나면 사용자는 고장으로 읽는다.
그래서 누른 뒤 무엇이라도 바뀌는지 본다. 화면이 바뀌거나, 알림이 뜨거나,
클립보드에 값이 들어가거나, 파일이 내려가거나, 테마가 바뀌면 반응한 것으로 센다.

누르면 목록이 다시 그려지는 자리가 많아, 조작부는 매번 새로 찾는다.
미리보기 견본(.demo, .preview, .stage, .frame)은 대상에서 뺀다.
"""
import os, json, io
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
URL = 'file:///' + os.path.join(D, 'index.html').replace('\\', '/')
DOC = "document.getElementById('stage').contentDocument"
SCREENS = ['index', 'library', 'builder', 'generator', 'guide']
NAV = ('index.html', 'library.html', 'builder.html', 'generator.html', 'guide.html')
SKIP_IN = '.demo, .preview, .stage, .frame, #sview .wire'

HOOK = """
(()=>{
  const D=%s, W=D.defaultView;
  if(W.__hooked) return true;
  W.__hooked=1;
  W.__log={toast:0, copy:0, dl:0, mut:0, attr:0, last:0};
  const t=D.querySelector('#toast');
  if(t) new W.MutationObserver(()=>{W.__log.toast++;})
        .observe(t,{childList:true,characterData:true,subtree:true,attributes:true});
  try{
    if(W.navigator.clipboard)
      W.navigator.clipboard.writeText=(x)=>{W.__log.copy++; W.__log.last=String(x||'').length; return Promise.resolve();};
  }catch(e){}
  const ac=W.HTMLAnchorElement.prototype.click;
  W.HTMLAnchorElement.prototype.click=function(){ if(this.download) W.__log.dl++; return ac.apply(this,arguments); };
  new W.MutationObserver(ms=>{W.__log.mut+=ms.length;})
      .observe(D.body,{childList:true,subtree:true,attributes:true,characterData:true});
  new W.MutationObserver(ms=>{W.__log.attr+=ms.length;})
      .observe(D.documentElement,{attributes:true});
  W.open=()=>{W.__log.dl++; return null;};
  return true;
})()
""" % DOC

LIST = """
(()=>{const D=%s; const out=[];
  const sel='button, a[href], select, input[type=checkbox], input[type=radio], .dscard, .lcard, .rec, .blk';
  D.querySelectorAll(sel).forEach(e=>{
    if(e.closest('%s')) return;
    if(e.disabled) return;
    const r=e.getBoundingClientRect();
    if(r.width===0 && r.height===0) return;
    let path;
    if(e.id){ path='#'+CSS.escape(e.id); }
    else {
      // 같은 부모 안에서 몇 번째인지로 자리를 적는다
      const par=e.parentElement; const kids=[...par.children];
      const n=kids.indexOf(e)+1;
      let pp=par.id?('#'+CSS.escape(par.id)):(par.className?('.'+[...par.classList].map(c=>CSS.escape(c)).join('.')):par.tagName.toLowerCase());
      path=pp+' > :nth-child('+n+')';
    }
    const label=(e.getAttribute('aria-label')||e.textContent||e.value||e.id||'').replace(/\\s+/g,' ').trim().slice(0,34);
    out.push({path:path, tag:e.tagName.toLowerCase(), id:e.id||'', label:label,
              href:(e.getAttribute('href')||'')});
  });
  // 같은 자리를 두 번 세지 않는다
  const seen=new Set();
  return out.filter(o=>{ if(seen.has(o.path)) return false; seen.add(o.path); return true; });
})()
""" % (DOC, SKIP_IN)

SNAP = """(()=>{const W=%s.defaultView; const L=W.__log||{};
  return {toast:L.toast|0, copy:L.copy|0, dl:L.dl|0, mut:L.mut|0, attr:L.attr|0, last:L.last|0};})()""" % DOC

CLICK = """(path)=>{const D=%s;
  const e=D.querySelector(path);
  if(!e) return {gone:true};
  try{
    if(e.tagName==='SELECT'){
      if(e.options.length>1){ e.selectedIndex=(e.selectedIndex+1)%%e.options.length;
        e.dispatchEvent(new Event('change',{bubbles:true})); }
      else return {single:true};
    } else e.click();
  }catch(err){ return {err:String(err).slice(0,140)}; }
  return {ok:true};
}""" % DOC


def wait_ready(pg, ms=20000):
    """iframe 이 다 그려질 때까지 기다린다.

    묶은 파일이 커져서 goto 직후에는 비어 있을 수 있다. 시간을 고정으로 주면
    느린 날에 0개로 읽힌다.
    """
    step = 200
    for _ in range(ms // step):
        n = pg.evaluate("""(()=>{const f=document.getElementById('stage');
            const D=f&&f.contentDocument;
            return (D && D.readyState==='complete') ? D.body.innerHTML.length : 0;})()""")
        if n > 2000:
            pg.wait_for_timeout(400)
            return True
        pg.wait_for_timeout(step)
    return False


def main():
    result, errs = {}, []
    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(viewport={'width': 1360, 'height': 900},
                            permissions=['clipboard-read', 'clipboard-write'])
        pg = ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
        pg.on('console', lambda m: errs.append('console: ' + m.text[:200]) if m.type == 'error' else None)

        for screen in SCREENS:
            pg.goto(URL + '#' + screen, wait_until='domcontentloaded')
            wait_ready(pg)
            pg.evaluate(HOOK)
            targets = pg.evaluate(LIST)
            rows = []
            for t in targets:
                if t['href'] and any(h in t['href'] for h in NAV):
                    rows.append({**t, 'ok': True, 'why': '화면 이동'})
                    continue
                # 매번 새로 찾는다. 앞선 누름으로 다시 그려졌을 수 있다.
                a0 = pg.evaluate(SNAP)
                n0 = len(errs)
                r = pg.evaluate(CLICK, t['path'])
                pg.wait_for_timeout(240)
                if r.get('gone'):
                    rows.append({**t, 'ok': False, 'why': '자리를 못 찾음'}); continue
                if r.get('single'):
                    rows.append({**t, 'ok': True, 'why': '항목 하나뿐'}); continue
                if r.get('err'):
                    rows.append({**t, 'ok': False, 'why': '예외 ' + r['err']}); continue
                a1 = pg.evaluate(SNAP)
                why = []
                if a1['copy'] > a0['copy']:
                    why.append('복사 %d자' % a1['last'])
                if a1['dl'] > a0['dl']:
                    why.append('저장')
                if a1['toast'] > a0['toast']:
                    why.append('알림')
                if a1['attr'] > a0['attr']:
                    why.append('테마')
                if a1['mut'] > a0['mut']:
                    why.append('화면 %d' % (a1['mut'] - a0['mut']))
                # 화면을 넘기는 버튼은 부모 주소가 바뀐 것으로 센다
                if pg.evaluate("parent.location.hash") != '#' + screen:
                    why.append('화면 이동')
                bad = len(errs) > n0
                rows.append({**t, 'ok': bool(why) and not bad,
                             'why': (', '.join(why) or '반응 없음') + (' / 오류' if bad else '')})
                if pg.evaluate("parent.location.hash") != '#' + screen:
                    pg.goto(URL + '#' + screen, wait_until='domcontentloaded')
                    wait_ready(pg)
                    pg.evaluate(HOOK)
            result[screen] = rows
            ok = sum(1 for r in rows if r['ok'])
            print(screen, '%d/%d' % (ok, len(rows)))
        b.close()

    result['_errors'] = errs[:30]
    io.open(os.path.join(D, '_test_ui.json'), 'w', encoding='utf-8').write(
        json.dumps(result, ensure_ascii=False, indent=1))
    tot = sum(len(v) for k, v in result.items() if k != '_errors')
    ok = sum(1 for k, v in result.items() if k != '_errors' for r in v if r['ok'])
    print('합계 %d/%d, 오류 %d' % (ok, tot, len(errs)))


if __name__ == '__main__':
    main()
