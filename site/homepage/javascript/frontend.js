! function() {
    const t = ["none", "bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat", "hinge", "jackInTheBox", "backInDown", "backInLeft", "backInRight", "backInUp", "backOutDown", "backOutLeft", "backOutRight", "backOutUp", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInTopLeft", "fadeInTopRight", "fadeInBottomLeft", "fadeInBottomRight", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "fadeOutTopLeft", "fadeOutTopRight", "fadeOutBottomRight", "fadeOutBottomLeft", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedInRight", "lightSpeedInLeft", "lightSpeedOutRight", "lightSpeedOutLeft", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "rollIn", "rollOut"],
        e = ["backOutDown", "backOutLeft", "backOutRight", "backOutUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "fadeOutTopLeft", "fadeOutTopRight", "fadeOutBottomRight", "fadeOutBottomLeft", "flipOutX", "flipOutY", "lightSpeedOutRight", "lightSpeedOutLeft", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "rollOut"],
        n = ["none", "delay-100ms", "delay-200ms", "delay-500ms", "delay-1s", "delay-2s", "delay-3s", "delay-4s", "delay-5s"],
        a = ["none", "slow", "slower", "fast", "faster"],
        o = t => {
            let e = window.scrollY || window.pageYOffset;
            const n = s(i(t)),
                a = t.getBoundingClientRect().top + e + n,
                o = e,
                d = e + window.innerHeight,
                u = a,
                f = a + t.clientHeight;
            return f >= o && u <= d || u <= d && f >= d || f >= o && u <= o
        },
        i = t => {
            let e = 0;
            for (const n of t.classList.entries())
                if (n[1].includes("o-anim-offset-")) {
                    const t = n[1].replace("o-anim-offset-", "");
                    if (isNaN(t.charAt(0))) continue;
                    e = t.endsWith("px") ? parseFloat(t) : t;
                    break
                }
            return e
        },
        s = t => {
            var e;
            return "string" == typeof t ? (t = null !== (e = parseFloat(t)) && void 0 !== e ? e : 0, t = Math.min(Math.max(t, 0), 100), t = window.innerHeight * (t / 100)) : "number" != typeof t && (t = 0), t
        };
    window.addEventListener("load", (() => {
        const d = document.querySelectorAll(".animated");
        (t => {
            let e = [],
                n = [];
            for (const a of t) {
                const t = a.classList;
                if (t.contains("o-anim-custom-delay")) {
                    let n;
                    for (const e of t)
                        if (e.includes("o-anim-value-delay-")) {
                            n = e;
                            break
                        }
                    n && e.push(n)
                }
                if (t.contains("o-anim-custom-speed")) {
                    let e;
                    for (const n of t)
                        if (n.includes("o-anim-value-speed-")) {
                            e = n;
                            break
                        }
                    e && n.push(e)
                }
            }
            if (e = [...new Set(e)], n = [...new Set(n)], 0 < e.length || 0 < n.length) {
                const t = document.createElement("style");
                t.id = "o-anim-custom-values", t.innerHTML = e.reduce(((t, e) => {
                    const n = e.replace("o-anim-value-delay-", "");
                    return t + `.animated.${e} { animation-delay: ${n}; -webkit-animation-delay: ${n}; }`
                }), "") + "\n" + n.reduce(((t, e) => {
                    const n = e.replace("o-anim-value-speed-", "");
                    return t + `.animated.${e} { animation-duration: ${n}; -webkit-animation-duration: ${n}; }`
                }), ""), document.body.appendChild(t)
            }
        })(d);
        for (const i of d) {
            if (classes = i.classList, i.animationClasses = [], !o(i)) {
                const e = t.find((t => Array.from(classes).find((e => e === t)))),
                    o = n.find((t => Array.from(classes).find((e => e === t)))),
                    s = a.find((t => Array.from(classes).find((e => e === t))));
                e && (i.animationClasses.push(e), i.classList.remove(e)), o && (i.animationClasses.push(o), i.classList.remove(o)), s && (i.animationClasses.push(s), i.classList.remove(s)), i.classList.add("hidden-animated")
            }
            if (classes.add("o-anim-ready"), e.forEach((t => {
                    i.className.includes(t) && i.addEventListener("animationend", (() => {
                        i.classList.remove(t)
                    }))
                })), classes.contains("o-anim-hover")) {
                i.classList.remove("hidden-animated"), i.classList.remove("animated");
                const {
                    animationName: t
                } = i.style;
                i.style.animationName = "none", i.addEventListener("mouseenter", (() => {
                    i.classList.add("animated"), i.style.animationName = t
                }))
            }
        }
        const u = [];
        for (const t of d) t.animationClasses && 0 < t.animationClasses.length && u.push({
            element: t,
            triggerOffset: i(t)
        });
        window.addEventListener("scroll", (() => {
            requestAnimationFrame((() => {
                const t = [];
                for (const e of u) {
                    const {
                        element: n,
                        triggerOffset: a
                    } = e, {
                        top: o
                    } = n.getBoundingClientRect();
                    o + s(a) <= .95 * window.innerHeight && 0 < o && (n.animationClasses.forEach((t => n.classList.add(t))), n.classList.remove("hidden-animated"), delete n.animationClasses, t.push(e))
                }
                t.forEach((t => {
                    const e = u.indexOf(t);
                    u.splice(e, 1)
                }))
            }))
        }))
    }))
}();