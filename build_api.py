# -*- coding: utf-8 -*-
"""정적 API 파일을 만든다.

값을 새로 적지 않는다. 모음집 화면을 띄워 그 안의 함수를 그대로 불러
화면이 쓰는 값과 같은 값을 꺼낸다. 따로 계산하면 화면과 달라진다.

만드는 파일:
  v1/systems.json            목록
  v1/systems/{id}.json       한 시스템 전부
  v1/systems/{id}/tokens.css CSS 변수 (라이트)
  v1/systems/{id}/tokens.dark.css CSS 변수 (다크)
"""
import io, os, json, shutil
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')
API = os.path.join(D, 'v1')

DUMP = """(() => {
  const pick = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    return SYSTEMS.map(s => ({
      id: s.id,
      tokens: allTokens(s),
      css: cssTokens(s),
      tailwind: twTokens(s)
    }));
  };
  const light = pick('light');
  const dark = pick('dark');
  document.documentElement.setAttribute('data-theme', 'light');
  const byId = (arr) => Object.fromEntries(arr.map(x => [x.id, x]));
  const L = byId(light), K = byId(dark);
  return {
    generated: new Date().toISOString().slice(0, 10),
    systems: SYSTEMS.map(s => ({
      id: s.id,
      name: s.name,
      category: s.cat,
      font: s.font,
      fontStack: FONT[s.id] || '',
      framework: s.framework,
      description: s.desc,
      cover: s.cover,
      hasTags: !!s.hasTags,
      hasChart: !!s.hasChart,
      radius: s.radius,
      ui: UI[s.id] || {},
      iconStyle: ICONSTYLE[s.id] || {},
      tagRadius: TAGR[s.id] || '999px',
      signature: SIG[s.id] || '',
      ramps: s.ramps,
      semantic: { light: s.semLight, dark: s.semDark },
      tokens: { light: L[s.id].tokens, dark: K[s.id].tokens },
      css: { light: L[s.id].css, dark: K[s.id].css },
      tailwind: L[s.id].tailwind,
      spec: getSpec(s.id)
    })),
    layouts: LAYOUTS.map(([name, note]) => ({ name, note })),
    pages: PAGES.map(p => ({
      id: p.id, name: p.name, category: p.cat, refs: p.refs, note: p.note,
      sections: p.sections.map(([title, note]) => ({ title, note }))
    })),
    icons: ICONS.map(([name]) => name)
  };
})()"""


def write(path, text):
    p = os.path.join(API, path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    io.open(p, 'w', encoding='utf-8').write(text)


def main():
    url = 'file:///' + os.path.join(SRC, 'library.html').replace(os.sep, '/')
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page()
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
        pg.goto(url)
        pg.wait_for_timeout(1200)
        data = pg.evaluate(DUMP)
        b.close()
    assert not errs, '모음집에서 오류가 났습니다: %s' % errs[:2]

    if os.path.isdir(API):
        shutil.rmtree(API)
    os.makedirs(API)

    syss = data['systems']
    assert len(syss) >= 19, '시스템 수가 모자랍니다: %d' % len(syss)

    # 목록
    write('systems.json', json.dumps({
        'generated': data['generated'],
        'count': len(syss),
        'license': 'AGPL-3.0',
        'systems': [{
            'id': s['id'], 'name': s['name'], 'category': s['category'],
            'font': s['font'], 'description': s['description'], 'cover': s['cover'],
            'href': 'systems/%s.json' % s['id'],
            'css': 'systems/%s/tokens.css' % s['id']
        } for s in syss]
    }, ensure_ascii=False, indent=1))

    # 시스템마다
    for s in syss:
        body = dict(s)
        css_light = body['css']['light']
        css_dark = body['css']['dark']
        tw = body.pop('tailwind')
        body.pop('css')
        write('systems/%s.json' % s['id'], json.dumps(body, ensure_ascii=False, indent=1))
        write('systems/%s/tokens.css' % s['id'],
              u'/* %s, 라이트. Design System Kit 에서 생성. AGPL-3.0 */\n%s\n'
              % (s['name'], css_light))
        write('systems/%s/tokens.dark.css' % s['id'],
              u'/* %s, 다크. Design System Kit 에서 생성. AGPL-3.0 */\n%s\n'
              % (s['name'], css_dark))
        write('systems/%s/tailwind.js' % s['id'], tw + u'\n')
        write('systems/%s/spec.md' % s['id'], s['spec'])

    write('layouts.json', json.dumps(
        {'count': len(data['layouts']), 'layouts': data['layouts']},
        ensure_ascii=False, indent=1))
    write('pages.json', json.dumps(
        {'count': len(data['pages']), 'pages': data['pages']},
        ensure_ascii=False, indent=1))
    write('icons.json', json.dumps(
        {'count': len(data['icons']), 'icons': data['icons']},
        ensure_ascii=False, indent=1))

    n = sum(len(f) for _, _, f in os.walk(API))
    print('v1 파일 %d개, 시스템 %d종' % (n, len(syss)))


if __name__ == '__main__':
    main()
