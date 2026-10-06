# -*- coding: utf-8 -*-
"""생성기가 쓰는 모양으로 모음집 시스템을 옮긴다.

생성기는 손으로 적은 12종만 들고 있었다. 모음집이 19종으로 늘면서
모음집에서 고른 시스템을 생성기에서 못 쓰는 자리가 생겼다.

값은 v1/ 에서 읽는다. 거기는 모음집 화면을 띄워 그 안의 함수로 꺼낸 값이라
소스를 정규식으로 긁는 것보다 정확하다. 공유 상수를 참조하는 시스템도 맞게 나온다.
"""
import io, os, json, re

D = os.path.dirname(os.path.abspath(__file__))
V1 = os.path.join(D, 'v1')


def rows():
    idx = json.load(io.open(os.path.join(V1, 'systems.json'), encoding='utf-8'))
    out = []
    for s in idx['systems']:
        j = json.load(io.open(os.path.join(V1, 'systems', s['id'] + '.json'), encoding='utf-8'))
        P = dict(j['ramps']['primary'])
        G = dict(j['ramps']['gray'])
        u = j.get('ui') or {}

        def px(v, d):
            n = re.sub(r'[^0-9]', '', str(v or ''))
            return min(int(n), 999) if n else d

        out.append({
            'id': j['id'],
            'n': j['name'],
            'p': P['500'],
            'pl': P['50'],
            'pd': P['700'],
            'g': [G[k] for k in ['50', '100', '200', '500', '700', '900']],
            'f': j.get('fontStack') or '"Pretendard",system-ui,sans-serif',
            'r': px(u.get('btnR'), 8),
            'rc': px(u.get('cardR'), 12),
        })
    assert len(out) >= 19, '생성기용 시스템을 다 못 찾았습니다: %d' % len(out)
    return out


def tag():
    return ('<script>\nwindow.GENSYS='
            + json.dumps(rows(), ensure_ascii=False)
            + ';\n</' + 'script>')


if __name__ == '__main__':
    r = rows()
    print(len(r), '종')
    for x in r:
        print(' %-10s %s  r=%-4s rc=%-3s %s' % (x['id'], x['p'], x['r'], x['rc'], x['f'][:34]))
