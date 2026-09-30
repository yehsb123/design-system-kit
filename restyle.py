# -*- coding: utf-8 -*-
"""화면 다섯 개가 kit.css 한 벌을 쓰게 한다.

예전에는 화면마다 !important 덧칠을 끼워 넣었다. 같은 버튼이 파일마다
다르게 정의돼 한 곳을 고치면 다른 곳이 어긋났다. 이제 셸 스타일은
src/kit.css 한 곳에만 있다.

kit.css 는 각 화면의 <style> 뒤에 실린다. 같은 선택자면 뒤에 오는 쪽이
이기므로 !important 가 필요 없다.
"""
import io, os

D = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(D, 'src')

FILES = ['index.html', 'guide.html', 'builder.html', 'generator.html', 'library.html']

OLD_MARK = u'<!-- monopo skin -->'
LINK = u'<link rel="stylesheet" href="kit.css">'
FONTS = ('<link href="https://fonts.googleapis.com/css2?'
         'family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">')


def main():
    for fn in FILES:
        p = os.path.join(SRC, fn)
        s = io.open(p, encoding='utf-8').read()

        # 예전 덧칠 블록을 걷어낸다
        if OLD_MARK in s:
            i = s.index(OLD_MARK)
            j = s.index(u'</style>', i) + len(u'</style>\n')
            s = s[:i] + s[j:]

        HEAD = u'\n</head>\n'
        assert s.count(HEAD) == 1, fn + ': head 를 찾지 못했습니다'

        if LINK not in s:
            s = s.replace(HEAD, u'\n' + LINK + u'\n</head>\n', 1)
        else:
            # 이미 있으면 맨 뒤로 옮겨 다른 규칙보다 뒤에 실리게 한다
            s = s.replace(LINK + u'\n', u'')
            s = s.replace(HEAD, u'\n' + LINK + u'\n</head>\n', 1)

        if 'family=Inter:wght@300' not in s:
            if 'fonts.googleapis.com/css2?' in s:
                s = s.replace('family=Inter:wght@400;500;600;700',
                              'family=Inter:wght@300;400;500;600;700')
                if 'family=Inter:wght@300' not in s:
                    s = s.replace('<link href="https://fonts.googleapis.com/css2?',
                                  '<link href="https://fonts.googleapis.com/css2?'
                                  'family=Inter:wght@300;400;500;600&')
            else:
                s = s.replace(HEAD, u'\n' + FONTS + u'\n</head>\n', 1)

        io.open(p, 'w', encoding='utf-8').write(s)
        print(fn, 'kit.css 연결', len(s))


if __name__ == '__main__':
    main()
