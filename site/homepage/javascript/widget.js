$(function() {
    for (var t = "…", e = $(".wd_catchArea"); e && 80 < e.get(0).scrollHeight;) {
        var l = e.text();
        if ("" == l) break;
        var r = l.substr(0, l.length - 1);
        e.text(r), l = e.text(), e.get(0).scrollHeight <= 80 && "" != l && (r = l.substr(0, l.length - 1), e.text(r + t))
    }
    for (var s = $(".wd_jobSet"); s && 14 < s.get(0).scrollHeight;) {
        var h, g = $(".wd_data").find(".wd_job:last");
        if (g && ("" == (h = g.text().substr(0, g.text().length - 1)) ? (g.remove(), g = $(".wd_data").find(".wd_job:last")) : g.text(h)), g && s.get(0).scrollHeight <= 14 && (h = g.text().substr(0, g.text().length - 1), g.text(h + t)), !g.length) {
            g = $(".wd_item");
            if (!g.text().length || g.text() === t) break;
            if (0 < $(".wd_data").length) {
                var a = g.html();
                $(".wd_data").remove(), g.html(a + t)
            } else {
                a = !1;
                if (g) {
                    var n = g.text().match(/^(\W+)([0-9]*)(\W*)$/);
                    if ("" != n[3] && (n[3] = n[3].substr(0, n[3].length - 1), a = !0, g.html(n[1] + i(n[2]) + n[3]), s.get(0).scrollHeight <= 14) && ("" == n[3] ? n[2] = n[2].substr(0, n[2].length - 1) + t : n[3] = n[3].substr(0, n[3].length - 1) + t, g.html(n[1] + i(n[2]) + n[3])), !a && ("" != n[2] && (n[2] = n[2].substr(0, n[2].length - 1), a = !0, g.html(n[1] + i(n[2]) + n[3]), s.get(0).scrollHeight <= 14) && ("" == n[2] ? n[1] = n[1].substr(0, n[1].length - 1) + t : n[2] = n[2].substr(0, n[2].length - 1) + t, g.html(n[1] + i(n[2]) + n[3])), !a && "" != n[1])) {
                        if (n[1] = n[1].substr(0, n[1].length - 1), "" == n[1]) {
                            n[1] = t, g.html(n[1] + i(n[2]) + n[3]);
                            break
                        }
                        g.html(n[1] + i(n[2]) + n[3]), s.get(0).scrollHeight <= 14 && (n[1] = n[1].substr(0, n[1].length - 1) + t, g.html(n[1] + i(n[2]) + n[3]))
                    }
                }
            }
        }
    }

    function i(t) {
        return "" == t ? t : "<em>" + t + "</em>"
    }
});