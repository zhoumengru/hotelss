/**
 * Created by hxsd on 2016/12/15.
 */
    (function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;

        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            if (width > 750) { // 最大宽度
                width = 750;
            }
            var rem = width / 10; // 将屏幕宽度分成10份， 1rem为屏幕宽度的1/10;
            docEl.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize',refreshRem());
        win.addEventListener('orientationchange',refreshRem());
        win.addEventListener('resize', function() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);

        refreshRem();

    })(window);
