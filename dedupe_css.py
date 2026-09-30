# -*- coding: utf-8 -*-
"""화면 CSS 에서 kit.css 와 겹치는 선언을 지운다.

kit.css 가 뒤에 실려 이기는 구조라 화면은 이미 맞다. 다만 같은 선언이 두 곳에
남아 있으면 한쪽을 고칠 때 다른 쪽이 낡는다. 죽은 선언을 지워 한 곳만 남긴다.

지우는 기준은 좁게 잡았다. 선택자가 하나뿐이고, 그 선택자를 kit.css 가
똑같이 들고 있고, 속성 이름까지 같을 때만 지운다. 쉼표로 묶인 규칙과
@media 안쪽은 건드리지 않는다.
"""
import io, os, re, sys, json

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')
FILES = ['index.html', 'guide.html', 'builder.html', 'generator.html', 'library.html']


def norm(sel):
    s = re.sub(r'\s+', ' ', sel.strip())
    s = re.sub(r'\s*([>+~,])\s*', r'\1', s)
    return s


def decls(body):
    """선언을 (이름, 원문) 목록으로 나눈다. 값 안의 세미콜론은 괄호로 보호한다."""
    out, buf, depth = [], '', 0
    for ch in body:
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        if ch == ';' and depth == 0:
            if buf.strip():
                out.append(buf)
            buf = ''
        else:
            buf += ch
    if buf.strip():
        out.append(buf)
    return [(d.split(':', 1)[0].strip(), d) for d in out if ':' in d]


def top_rules(css):
    """맨 바깥 규칙만 (시작, 끝, 선택자, 본문) 으로 뽑는다. @ 로 시작하면 건너뛴다."""
    rules, i, n = [], 0, len(css)
    while i < n:
        b = css.find('{', i)
        if b < 0:
            break
        sel = css[i:b]
        # 주석만 있거나 @ 규칙이면 블록을 통째로 넘긴다
        depth, j = 1, b + 1
        while j < n and depth:
            if css[j] == '{':
                depth += 1
            elif css[j] == '}':
                depth -= 1
            j += 1
        clean = re.sub(r'/\*.*?\*/', '', sel, flags=re.S).strip()
        if clean and not clean.startswith('@'):
            rules.append((b + 1, j - 1, clean, css[b + 1:j - 1]))
        i = j
    return rules


def kit_map():
    css = io.open(os.path.join(SRC, 'kit.css'), encoding='utf-8').read()
    m = {}
    for _, _, sel, body in top_rules(css):
        props = {name for name, _ in decls(body)}
        for one in sel.split(','):
            m.setdefault(norm(one), set()).update(props)
    return m


def main():
    apply = '--apply' in sys.argv
    KIT = kit_map()
    report = {}
    for fn in FILES:
        p = os.path.join(SRC, fn)
        s = io.open(p, encoding='utf-8').read()
        m = re.search(r'<style>(.*?)</style>', s, re.S)
        css = m.group(1)

        removed, edits = [], []
        for a, b, sel, body in top_rules(css):
            if ',' in sel:
                continue
            key = norm(sel)
            if key not in KIT:
                continue
            keep, drop = [], []
            for name, raw in decls(body):
                (drop if name in KIT[key] else keep).append((name, raw))
            if not drop:
                continue
            new = (';'.join(r.strip() for _, r in keep) + ';') if keep else ''
            edits.append((a, b, new))
            removed.append({'sel': sel, 'dropped': [n for n, _ in drop],
                            'kept': [n for n, _ in keep]})

        if apply and edits:
            for a, b, new in sorted(edits, reverse=True):
                css = css[:a] + new + css[b:]
            # 빈 규칙을 치운다
            css = re.sub(r'(?m)^[^{}@/\n][^{}]*\{\s*\}\s*\n?', '', css)
            s = s[:m.start(1)] + css + s[m.end(1):]
            io.open(p, 'w', encoding='utf-8').write(s)

        report[fn] = {'rules': len(removed),
                      'props': sum(len(r['dropped']) for r in removed),
                      'detail': removed}
        print(fn, '규칙', len(removed), '선언', sum(len(r['dropped']) for r in removed))

    io.open(os.path.join(D, '_dedupe_report.json'), 'w', encoding='utf-8').write(
        json.dumps(report, ensure_ascii=False, indent=1))
    print('apply' if apply else '미적용 (--apply 로 실행)')


if __name__ == '__main__':
    main()
