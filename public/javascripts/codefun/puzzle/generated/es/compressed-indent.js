// Automatically generated file.  Do not edit!
var g, k = this;

function aa() {}

function ba(a) {
    a.Mb = function() {
        return a.qg ? a.qg : a.qg = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function da(a) {
    return "array" == ca(a)
}

function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function r(a) {
    return "string" == typeof a
}

function t(a) {
    return "number" == typeof a
}

function fa(a) {
    return "function" == ca(a)
}

function ga(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ha(a) {
    return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ja = 0;

function ka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function la(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function ma(a, b, c) {
    ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
    return ma.apply(null, arguments)
}

function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function u(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.w = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.xp = function(a, c, f) {
        for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++) h[l - 2] = arguments[l];
        return b.prototype[c].apply(a, h)
    }
};
var oa;

function pa(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var qa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function ra(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function sa(a) {
    if (!ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));
    return a
}
var ua = /&/g,
    va = /</g,
    wa = />/g,
    xa = /"/g,
    ya = /'/g,
    za = /\x00/g,
    ta = /[\x00&<>"']/;

function Aa(a) {
    return -1 != a.indexOf("&") ? "document" in k ? Ba(a) : Ca(a) : a
}

function Ba(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = k.document.createElement("div");
    return a.replace(Da, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ca(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Da = /&([^;\s<&]+);?/g;

function Ea(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};

function Fa(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ha(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ga.length; f++) c = Ga[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Ia;
a: {
    var Ja = k.navigator;
    if (Ja) {
        var Ka = Ja.userAgent;
        if (Ka) {
            Ia = Ka;
            break a
        }
    }
    Ia = ""
}

function x(a) {
    return -1 != Ia.indexOf(a)
};
var La = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ma = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Na = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = r(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in h) {
                var m = h[l];
                b.call(c, m, l, a) && (e[f++] = m)
            }
        return e
    },
    Oa = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Pa = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Qa(a, b) {
    return 0 <= La(a, b)
}

function Ra(a, b) {
    var c = La(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Sa(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Ta(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Ua(a, b, c, d) {
    Array.prototype.splice.apply(a, Va(arguments, 1))
}

function Va(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function Wa() {
    0 != Xa && (Ya[ha(this)] = this);
    this.I = this.I;
    this.G = this.G
}
var Xa = 0,
    Ya = {};
Wa.prototype.I = !1;
Wa.prototype.B = function() {
    if (!this.I && (this.I = !0, this.Ba(), 0 != Xa)) {
        var a = ha(this);
        delete Ya[a]
    }
};

function Za(a, b) {
    a.I ? b.call(void 0) : (a.G || (a.G = []), a.G.push(b))
}
Wa.prototype.Ba = function() {
    if (this.G)
        for (; this.G.length;) this.G.shift()()
};

function $a(a) {
    a && "function" == typeof a.B && a.B()
};
var ab = "closure_listenable_" + (1E6 * Math.random() | 0),
    bb = 0;

function cb(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.Gd = !!d;
    this.Yd = e;
    this.hg = ++bb;
    this.Sc = this.Fd = !1
}

function db(a) {
    a.Sc = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.Yd = null
};

function eb(a) {
    this.src = a;
    this.g = {};
    this.h = 0
}
eb.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var h = fb(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Fd = !1)) : (b = new cb(b, this.src, f, !!d, e), b.Fd = c, a.push(b));
    return b
};

function gb(a, b) {
    var c = b.type;
    c in a.g && Ra(a.g[c], b) && (db(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
}

function hb(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = fb(a, c, d, e));
    return -1 < b ? a[b] : null
}

function fb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Sc && f.listener == b && f.Gd == !!c && f.Yd == d) return e
    }
    return -1
};

function ib(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.j = !1;
    this.Ag = !0
}
ib.prototype.stopPropagation = function() {
    this.j = !0
};
ib.prototype.preventDefault = function() {
    this.Ag = !1
};
var jb = x("Opera"),
    y = x("Trident") || x("MSIE"),
    kb = x("Edge"),
    lb = x("Gecko") && !(-1 != Ia.toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
    z = -1 != Ia.toLowerCase().indexOf("webkit") && !x("Edge"),
    mb = x("Macintosh"),
    nb = x("Android"),
    ob = x("iPhone") && !x("iPod") && !x("iPad"),
    pb = x("iPad");

function qb() {
    var a = k.document;
    return a ? a.documentMode : void 0
}
var rb;
a: {
    var sb = "",
        tb = function() {
            var a = Ia;
            if (lb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (kb) return /Edge\/([\d\.]+)/.exec(a);
            if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (z) return /WebKit\/(\S+)/.exec(a);
            if (jb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    tb && (sb = tb ? tb[1] : "");
    if (y) {
        var ub = qb();
        if (null != ub && ub > parseFloat(sb)) {
            rb = String(ub);
            break a
        }
    }
    rb = sb
}
var vb = {};

function B(a) {
    var b;
    if (!(b = vb[a])) {
        b = 0;
        for (var c = qa(String(rb)).split("."), d = qa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                l = d[f] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = m.exec(h) || ["", "", ""],
                    q = n.exec(l) || ["", "", ""];
                if (0 == p[0].length && 0 == q[0].length) break;
                b = Ea(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ea(0 == p[2].length, 0 == q[2].length) || Ea(p[2], q[2])
            } while (0 == b)
        }
        b = vb[a] = 0 <= b
    }
    return b
}
var wb = k.document,
    xb = wb && y ? qb() || ("CSS1Compat" == wb.compatMode ? parseInt(rb, 10) : 5) : void 0;
var zb = !y || 9 <= Number(xb),
    Ab = !y || 9 <= Number(xb),
    Bb = y && !B("9");
!z || B("528");
lb && B("1.9b") || y && B("8") || jb && B("9.5") || z && B("528");
lb && !B("8") || y && B("9");
var Cb = "ontouchstart" in k || !!(k.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!k.navigator || !k.navigator.msMaxTouchPoints);

function Db(a) {
    Db[" "](a);
    return a
}
Db[" "] = aa;

function Eb(a, b) {
    ib.call(this, a ? a.type : "");
    this.A = this.i = this.target = null;
    this.s = this.g = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.D = !1;
    this.h = null;
    a && this.ga(a, b)
}
u(Eb, ib);
var Fb = [1, 4, 2];
Eb.prototype.ga = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.i = b;
    var e = a.relatedTarget;
    if (e) {
        if (lb) {
            var f;
            a: {
                try {
                    Db(e.nodeName);
                    f = !0;
                    break a
                } catch (h) {}
                f = !1
            }
            f || (e = null)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.A = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !==
        d.clientY ? d.clientY : d.pageY);
    this.g = a.keyCode || 0;
    this.s = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.D = mb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && this.preventDefault()
};

function Gb(a) {
    return zb ? 0 == a.h.button : "click" == a.type ? !0 : !!(a.h.button & Fb[0])
}
Eb.prototype.stopPropagation = function() {
    Eb.w.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};
Eb.prototype.preventDefault = function() {
    Eb.w.preventDefault.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Bb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Hb = "closure_lm_" + (1E6 * Math.random() | 0),
    Ib = {},
    Jb = 0;

function Kb(a, b, c, d, e) {
    if (da(b)) {
        for (var f = 0; f < b.length; f++) Kb(a, b[f], c, d, e);
        return null
    }
    c = Lb(c);
    if (a && a[ab]) a = a.T(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            h = Mb(a);
        h || (a[Hb] = h = new eb(a));
        c = h.add(b, c, !1, d, e);
        if (!c.g) {
            d = Nb();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(Ob(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Jb++
        }
        a = c
    }
    return a
}

function Nb() {
    var a = Pb,
        b = Ab ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function Qb(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) Qb(a, b[f], c, d, e);
    else c = Lb(c), a && a[ab] ? a.eb(b, c, d, e) : a && (a = Mb(a)) && (b = hb(a, b, c, !!d, e)) && Rb(b)
}

function Rb(a) {
    if (!t(a) && a && !a.Sc) {
        var b = a.src;
        if (b && b[ab]) gb(b.Kb, a);
        else {
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.Gd) : b.detachEvent && b.detachEvent(Ob(c), d);
            Jb--;
            (c = Mb(b)) ? (gb(c, a), 0 == c.h && (c.src = null, b[Hb] = null)) : db(a)
        }
    }
}

function Ob(a) {
    return a in Ib ? Ib[a] : Ib[a] = "on" + a
}

function Sb(a, b, c, d) {
    var e = !0;
    if (a = Mb(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Gd == c && !f.Sc && (f = Tb(f, d), e = e && !1 !== f)
            }
        return e
}

function Tb(a, b) {
    var c = a.listener,
        d = a.Yd || a.src;
    a.Fd && Rb(a);
    return c.call(d, b)
}

function Pb(a, b) {
    if (a.Sc) return !0;
    if (!Ab) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = k, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new Eb(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (m) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.i; f; f = f.parentNode) e.push(f);
            for (var f = a.type, h = e.length - 1; !c.j && 0 <= h; h--) {
                c.i = e[h];
                var l = Sb(e[h], f, !0, c),
                    d = d && l
            }
            for (h = 0; !c.j && h < e.length; h++) c.i = e[h],
            l = Sb(e[h],
                f, !1, c),
            d = d && l
        }
        return d
    }
    return Tb(a, new Eb(b, this))
}

function Mb(a) {
    a = a[Hb];
    return a instanceof eb ? a : null
}
var Ub = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Lb(a) {
    if (fa(a)) return a;
    a[Ub] || (a[Ub] = function(b) {
        return a.handleEvent(b)
    });
    return a[Ub]
};

function Wb() {
    Wa.call(this);
    this.Kb = new eb(this);
    this.re = this;
    this.yc = null
}
u(Wb, Wa);
Wb.prototype[ab] = !0;
g = Wb.prototype;
g.Ud = function() {
    return this.yc
};
g.rf = function(a) {
    this.yc = a
};
g.removeEventListener = function(a, b, c, d) {
    Qb(this, a, b, c, d)
};

function Xb(a, b) {
    var c, d = a.Ud();
    if (d)
        for (c = []; d; d = d.Ud()) c.push(d);
    var d = a.re,
        e = b,
        f = e.type || e;
    if (r(e)) e = new ib(e, d);
    else if (e instanceof ib) e.target = e.target || d;
    else {
        var h = e,
            e = new ib(f, d);
        Ha(e, h)
    }
    var h = !0,
        l;
    if (c)
        for (var m = c.length - 1; !e.j && 0 <= m; m--) l = e.i = c[m], h = Yb(l, f, !0, e) && h;
    e.j || (l = e.i = d, h = Yb(l, f, !0, e) && h, e.j || (h = Yb(l, f, !1, e) && h));
    if (c)
        for (m = 0; !e.j && m < c.length; m++) l = e.i = c[m], h = Yb(l, f, !1, e) && h;
    return h
}
g.Ba = function() {
    Wb.w.Ba.call(this);
    if (this.Kb) {
        var a = this.Kb,
            b = 0,
            c;
        for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, db(d[e]);
            delete a.g[c];
            a.h--
        }
    }
    this.yc = null
};
g.T = function(a, b, c, d) {
    return this.Kb.add(String(a), b, !1, c, d)
};
g.eb = function(a, b, c, d) {
    var e;
    e = this.Kb;
    a = String(a).toString();
    if (a in e.g) {
        var f = e.g[a];
        b = fb(f, b, c, d); - 1 < b ? (db(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
    } else e = !1;
    return e
};

function Yb(a, b, c, d) {
    b = a.Kb.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.Sc && h.Gd == c) {
            var l = h.listener,
                m = h.Yd || h.src;
            h.Fd && gb(a.Kb, h);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.Ag
};

function Zb(a, b, c) {
    if (fa(a)) c && (a = ma(a, c));
    else if (a && "function" == typeof a.handleEvent) a = ma(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
};

function $b() {
    this.g = ac
}
$b.prototype.mc = !0;
$b.prototype.Nb = function() {
    return ""
};
$b.prototype.toString = function() {
    return "Const{}"
};

function bc(a) {
    return a instanceof $b && a.constructor === $b && a.g === ac ? "" : "type_error:Const"
}
var ac = {};

function cc() {
    this.g = "";
    this.h = dc
}
cc.prototype.mc = !0;
cc.prototype.Nb = function() {
    return this.g
};
cc.prototype.We = !0;
cc.prototype.Fc = function() {
    return 1
};
var ec = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    dc = {};

function fc(a) {
    var b = new cc;
    b.g = a;
    return b
}
fc("about:blank");

function gc() {
    this.g = "";
    this.h = hc
}
gc.prototype.mc = !0;
var hc = {};
gc.prototype.Nb = function() {
    return this.g
};

function ic(a) {
    var b = new gc;
    b.g = a;
    return b
}
var jc = ic("");

function kc(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof $b) d = bc(d);
            else if (lc.test(d)) {
                for (var e = !0, f = !0, h = 0; h < d.length; h++) {
                    var l = d.charAt(h);
                    "'" == l && f ? e = !e : '"' == l && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? ic(b) : jc
}
var lc = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function mc() {
    this.g = nc
}
mc.prototype.mc = !0;
mc.prototype.Nb = function() {
    return ""
};
mc.prototype.We = !0;
mc.prototype.Fc = function() {
    return 1
};
var nc = {};
var oc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};

function pc() {
    this.g = "";
    this.i = qc;
    this.h = null
}
pc.prototype.We = !0;
pc.prototype.Fc = function() {
    return this.h
};
pc.prototype.mc = !0;
pc.prototype.Nb = function() {
    return this.g
};

function rc(a) {
    if (a instanceof pc && a.constructor === pc && a.i === qc) return a.g;
    ca(a);
    return "type_error:SafeHtml"
}

function sc(a) {
    if (a instanceof pc) return a;
    var b = null;
    a.We && (b = a.Fc());
    a = sa(a.mc ? a.Nb() : String(a));
    return tc(a, b)
}
var uc = /^[a-zA-Z0-9-]+$/,
    vc = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    wc = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function xc(a, b, c) {
    if (!uc.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in wc) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e, f = "";
    if (b)
        for (e in b) {
            if (!uc.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var h = b[e];
            if (null != h) {
                var l, m = a;
                l = e;
                if (h instanceof $b) h = bc(h);
                else if ("style" == l.toLowerCase()) {
                    if (!ga(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                    h instanceof gc || (h =
                        kc(h));
                    h instanceof gc && h.constructor === gc && h.h === hc ? h = h.g : (ca(h), h = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + h + '" given.');
                    if (l.toLowerCase() in vc)
                        if (h instanceof mc) h instanceof mc && h.constructor === mc && h.g === nc ? h = "" : (ca(h), h = "type_error:TrustedResourceUrl");
                        else if (h instanceof cc) h instanceof cc && h.constructor === cc && h.h === dc ? h = h.g : (ca(h), h = "type_error:SafeUrl");
                    else if (r(h)) h instanceof cc || (h = h.mc ? h.Nb() : String(h), ec.test(h) ||
                        (h = "about:invalid#zClosurez"), h = fc(h)), h = h.Nb();
                    else throw Error('Attribute "' + l + '" on tag "' + m + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + h + '" given.');
                }
                h.mc && (h = h.Nb());
                l = l + '="' + sa(String(h)) + '"';
                f += " " + l
            }
        }
    e = "<" + a + f;
    null != c ? da(c) || (c = [c]) : c = [];
    !0 === oc[a.toLowerCase()] ? e += ">" : (d = yc(c), e += ">" + rc(d) + "</" + a + ">", d = d.Fc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return tc(e, d)
}

function yc(a) {
    function b(a) {
        da(a) ? Ma(a, b) : (a = sc(a), d += rc(a), a = a.Fc(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Ma(arguments, b);
    return tc(d, c)
}
var qc = {};

function tc(a, b) {
    var c = new pc;
    c.g = a;
    c.h = b;
    return c
}
tc("<!DOCTYPE html>", 0);
var zc = tc("", 0),
    Ac = tc("<br>", 0);

function Bc(a, b) {
    this.width = a;
    this.height = b
}
g = Bc.prototype;
g.clone = function() {
    return new Bc(this.width, this.height)
};
g.oh = function() {
    return this.width * this.height
};
g.rg = function() {
    return !this.oh()
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = t(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};

function Cc(a, b) {
    a.innerHTML = rc(b)
};
var Dc = !y || 9 <= Number(xb),
    Ec = !lb && !y || y && 9 <= Number(xb) || lb && B("1.9.1"),
    Fc = y && !B("9");

function C(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = C.prototype;
g.clone = function() {
    return new C(this.x, this.y)
};

function Gc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function Hc(a, b) {
    return new C(a.x - b.x, a.y - b.y)
}
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof C ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), t(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = t(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function Ic(a) {
    return a ? new Jc(Kc(a)) : oa || (oa = new Jc)
}

function Lc(a, b) {
    Fa(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Mc.hasOwnProperty(d) ? a.setAttribute(Mc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Mc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Nc() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Bc(a.clientWidth, a.clientHeight)
}

function Oc(a) {
    return a.scrollingElement ? a.scrollingElement : z || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function D(a, b, c) {
    return Pc(document, arguments)
}

function Pc(a, b) {
    var c = b[0],
        d = b[1];
    if (!Dc && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', sa(d.name), '"');
        if (d.type) {
            c.push(' type="', sa(d.type), '"');
            var e = {};
            Ha(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (r(d) ? c.className = d : da(d) ? c.className = d.join(" ") : Lc(c, d));
    2 < b.length && Qc(a, c, b);
    return c
}

function Qc(a, b, c) {
    function d(c) {
        c && b.appendChild(r(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ga(f) && 0 < f.nodeType ? d(f) : Ma(Rc(f) ? Ta(f) : f, d)
    }
}

function Sc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function Tc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function E(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function Uc(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Kc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var Vc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    Wc = {
        IMG: " ",
        BR: "\n"
    };

function Xc(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function Yc(a) {
    a = a.tabIndex;
    return t(a) && 0 <= a && 32768 > a
}

function Zc(a) {
    var b = [];
    $c(a, b, !1);
    return b.join("")
}

function $c(a, b, c) {
    if (!(a.nodeName in Vc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Wc) b.push(Wc[a.nodeName]);
    else
        for (a = a.firstChild; a;) $c(a, b, c), a = a.nextSibling
}

function Rc(a) {
    if (a && "number" == typeof a.length) {
        if (ga(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (fa(a)) return "function" == typeof a.item
    }
    return !1
}

function Jc(a) {
    this.g = a || k.document || document
}
g = Jc.prototype;
g.C = function(a) {
    return r(a) ? this.g.getElementById(a) : a
};
g.Gc = function(a, b, c) {
    return Pc(this.g, arguments)
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.zg = Sc;
g.hc = function(a) {
    return Ec && void 0 != a.children ? a.children : Na(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = Uc;
// Copyright 2011 Google Inc.  Apache License 2.0
var ad = {},
    bd, cd;

function dd(a, b) {
    this.ba = a;
    this.type = b;
    a.v.R && (this.Ib = a.v.R[b], this.cd = a.v.R[ed[b]], this.Ve = !this.Ib)
}
g = dd.prototype;
g.K = null;
g.dc = null;
g.ub = null;
g.Ua = 0;
g.ma = 0;
g.Sb = !1;
g.Ib = null;
g.cd = null;
g.Ve = null;
g.Hd = function(a) {
    console.log("non-rendered connecting_: " + a);
    var b = this,
        c = b.ba,
        d = a.ba;
    a.K && fd(a);
    if (b.K) {
        var e = F(b),
            f = b.ub;
        b.ub = null;
        if (e.i) f = hd(e), e.B(), e = null;
        else if (1 == b.type) {
            if (!e.J) throw "Orphan block does not have an output connection.";
            var h = id(d, e);
            h && (e.J.connect(h), e = null)
        } else if (3 == b.type) {
            if (!e.L) throw "Orphan block does not have a previous connection.";
            for (h = d; h.g;)
                if (h.g.K) h = jd(h);
                else {
                    kd(e.L, h.g) && (h.g.connect(e.L), e = null);
                    break
                }
        }
        if (e && (fd(b), ld)) {
            var l = md;
            setTimeout(function() {
                e.v &&
                    !e.getParent() && (G(l), e.J ? nd(e.J, b) : e.L && nd(e.L, b), G(!1))
            }, od)
        }
        b.ub = f
    }
    var m;
    0 == I && (m = new pd(d));
    qd(b, a);
    d.zd(c);
    m && (rd(m), J(m))
};
g.B = function() {
    if (this.K) throw "Disconnect connection before disposing of it.";
    this.Sb && sd(this.Ib, this);
    td == this && (td = null);
    ud == this && (ud = null);
    this.cd = this.Ib = null
};

function vd(a) {
    return 1 == a.type || 3 == a.type
}

function wd(a, b) {
    if (!b) return 3;
    if (vd(a)) var c = a.ba,
        d = b.ba;
    else d = a.ba, c = b.ba;
    return c && c == d ? 1 : b.type != ed[a.type] ? 2 : c && d && c.v !== d.v ? 5 : kd(a, b) ? c.i && !d.i ? 6 : 0 : 4
}
g.be = function(a) {
    var b = wd(this, a);
    if (0 != b && b != dd.h) return !1;
    if (2 == a.type || 4 == a.type)
        if (a.K || this.K) return !1;
    return 1 == a.type && a.K && !xd(F(a)) && !F(a).i || 4 == this.type && a.K && !this.ba.g || -1 != yd.indexOf(a) ? !1 : !0
};
g.connect = function(a) {
    console.log("non-rendered connecting: " + a);
    if (this.K != a) {
        switch (wd(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed.";
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        console.log(a instanceof zd);
        console.log(a instanceof dd);
        vd(this) ? (console.log("sup"), this.Hd(a)) : (console.log("inf"), a.Hd(this))
    }
};

function qd(a, b) {
    a.K = b;
    b.K = a
}

function Ad(a, b) {
    for (var c = !1, d = 0; d < a.h.length; d++) {
        var e = a.h[d].H;
        if (e && 1 == e.type && kd(b.J, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}

function id(a, b) {
    for (var c = a, d; d = Ad(c, b);)
        if (c = F(d), !c || c.i) return d;
    return null
}

function fd(a) {
    var b = a.K,
        c, d;
    vd(a) ? (c = a.ba, d = b.ba, b = a) : (c = b.ba, d = a.ba);
    a.Ke(c, d);
    b.kf()
}
g.Ke = function(a, b) {
    var c;
    0 == I && (c = new pd(b));
    this.K = this.K.K = null;
    b.zd(null);
    c && (rd(c), J(c))
};
g.kf = function() {
    var a = this.ba,
        b = this.ub;
    if (a.v && b && ld)
        if (a = Bd(b, a.v), a.J) this.connect(a.J);
        else if (a.L) this.connect(a.L);
    else throw "Child block does not have output or previous statement.";
};

function F(a) {
    return a.K ? a.K.ba : null
}

function kd(a, b) {
    if (!a.dc || !b.dc) return !0;
    for (var c = 0; c < a.dc.length; c++)
        if (-1 != b.dc.indexOf(a.dc[c])) return !0;
    return !1
}

function Cd(a, b) {
    b ? (da(b) || (b = [b]), a.dc = b, a.K && !kd(a, a.K) && (Dd(vd(a) ? F(a) : a.ba), Ed(a.ba))) : a.dc = null
};
// Copyright 2016 Google Inc.  Apache License 2.0
function zd(a, b) {
    zd.w.constructor.call(this, a, b);
    this.g = new C(0, 0);
    console.log("rendered connector")
}
u(zd, dd);

function Fd(a, b) {
    var c = a.Ua - b.Ua,
        d = a.ma - b.ma;
    return Math.sqrt(c * c + d * d)
}

function nd(a, b) {
    if (0 == K) {
        var c = Gd(a.ba);
        if (!c.D) {
            var d = !1;
            if (!xd(c)) {
                c = Gd(b.ba);
                if (!xd(c)) return;
                b = a;
                d = !0
            }
            c.W().parentNode.appendChild(c.W());
            var e = b.Ua + Hd - a.Ua,
                f = b.ma + Hd - a.ma;
            d && (f = -f);
            c.m && (e = -e);
            c.moveBy(e, f)
        }
    }
}

function Id(a, b, c) {
    a.Sb && sd(a.Ib, a);
    a.Ua = b;
    a.ma = c;
    a.Ve || Jd(a.Ib, a)
}
g = zd.prototype;
g.moveBy = function(a, b) {
    Id(this, this.Ua + a, this.ma + b)
};

function Kd(a, b) {
    Id(a, b.x + a.g.x, b.y + a.g.y)
}

function Ld(a, b, c) {
    a.g.x = b;
    a.g.y = c
}

function Md(a) {
    var b = a.K.Ua - a.Ua,
        c = a.K.ma - a.ma;
    if (0 != b || 0 != c) {
        a = F(a);
        var d = a.W();
        if (!d) throw "block is not rendered.";
        d = Nd(d);
        a.W().setAttribute("transform", "translate(" + (d.x - b) + "," + (d.y - c) + ")");
        Od(a, -b, -c)
    }
}
g.og = function() {
    var a;
    a = 1 == this.type || 2 == this.type ? "m 0,0 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.ba.aa();
    dd.g = L("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.Ua - b.x) + "," + (this.ma - b.y) + ")" + (this.ba.m ? " scale(-1 1)" : "")
    }, this.ba.W())
};

function Pd(a) {
    Qd(a, !1);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = F(a)) {
        var c;
        a.j ? (c = [], a.J && c.push(a.J), a.g && c.push(a.g), a.L && c.push(a.L)) : c = a.sb(!0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, Pd(c[d]));
        b.length || (b[0] = a)
    }
    return b
}

function Rd() {
    E(dd.g);
    delete dd.g
}

function Qd(a, b) {
    (a.Ve = b) && a.Sb ? sd(a.Ib, a) : b || a.Sb || Jd(a.Ib, a)
}
g.be = function(a, b) {
    return Fd(this, a) > b ? !1 : zd.w.be.call(this, a)
};
g.Ke = function(a, b) {
    zd.w.Ke.call(this, a, b);
    a.N && a.X();
    b.N && (Sd(b), b.X())
};
g.kf = function() {
    var a = this.ba,
        b = this.ub;
    if (a.v && b && ld) {
        zd.w.kf.call(this);
        b = F(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.md();
        b.X(!1);
        a.N && a.X()
    }
};
g.Hd = function(a) {
    console.log("rendered connect");
    zd.w.Hd.call(this, a);
    var b = this.ba;
    a = a.ba;
    b.N && Sd(b);
    a.N && Sd(a);
    console.log("connecting: " + b + " " + a);
    b.N && a.N && (3 == this.type || 4 == this.type ? (a.X(), console.log("childBlock")) : (b.X(), console.log("parentBlock")))
};

function Td(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = Td.prototype;
g.hb = function() {
    return this.right - this.left
};
g.ic = function() {
    return this.bottom - this.top
};
g.clone = function() {
    return new Td(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof Td ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof C ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, t(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = t(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function Ud(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Ud.prototype;
g.clone = function() {
    return new Ud(this.left, this.top, this.width, this.height)
};
g.contains = function(a) {
    return a instanceof Ud ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function(a, b) {
    a instanceof C ? (this.left += a.x, this.top += a.y) : (this.left += a, t(b) && (this.top += b));
    return this
};
g.scale = function(a, b) {
    var c = t(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};

function Vd(a, b) {
    var c = Kc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function Wd(a, b) {
    return Vd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Xd() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new C(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function Yd(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    y && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Zd(a) {
    var b = Kc(a),
        c = new C(0, 0),
        d;
    d = b ? Kc(b) : document;
    d = !y || 9 <= Number(xb) || "CSS1Compat" == Ic(d).g.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = Yd(a);
    d = Ic(b).g;
    b = Oc(d);
    d = d.parentWindow || d.defaultView;
    b = y && B("10") && d.pageYOffset != b.scrollTop ? new C(b.scrollLeft, b.scrollTop) : new C(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function $d(a) {
    var b = ae;
    if ("none" != Wd(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function ae(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = z && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = Yd(a), new Bc(a.right - a.left, a.bottom - a.top)) : new Bc(b, c)
}

function be(a, b) {
    a.style.display = b ? "" : "none"
}
var ce = lb ? "MozUserSelect" : z || kb ? "WebkitUserSelect" : null;

function de(a, b) {
    var c = b ? null : a.getElementsByTagName("*");
    if (ce) {
        var d = "none";
        a.style && (a.style[ce] = d);
        if (c)
            for (var e = 0, f; f = c[e]; e++) f.style && (f.style[ce] = d)
    } else if (y || jb)
        if (d = "on", a.setAttribute("unselectable", d), c)
            for (e = 0; f = c[e]; e++) f.setAttribute("unselectable", d)
}
var ee = {
    thin: 2,
    medium: 4,
    thick: 6
};

function fe(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in ee) d = ee[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};

function ge(a) {
    Wa.call(this);
    this.h = a;
    this.g = {}
}
u(ge, Wa);
var he = [];
ge.prototype.T = function(a, b, c, d) {
    da(b) || (b && (he[0] = b.toString()), b = he);
    for (var e = 0; e < b.length; e++) {
        var f = Kb(a, b[e], c || this.handleEvent, d || !1, this.h || this);
        if (!f) break;
        this.g[f.hg] = f
    }
    return this
};
ge.prototype.eb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) this.eb(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.h || this, c = Lb(c), d = !!d, b = a && a[ab] ? hb(a.Kb, String(b), c, d, e) : a ? (a = Mb(a)) ? hb(a, b, c, d, e) : null : null, b && (Rb(b), delete this.g[b.hg]);
    return this
};

function ie(a) {
    Fa(a.g, function(a, c) {
        this.g.hasOwnProperty(c) && Rb(a)
    }, a);
    a.g = {}
}
ge.prototype.Ba = function() {
    ge.w.Ba.call(this);
    ie(this)
};
ge.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function je() {}
ba(je);
je.prototype.g = 0;

function ke(a) {
    Wb.call(this);
    this.s = a || Ic();
    this.Va = le;
    this.Ea = null;
    this.Z = !1;
    this.g = null;
    this.Pb = void 0;
    this.D = this.i = this.A = this.Ma = null
}
u(ke, Wb);
ke.prototype.mh = je.Mb();
var le = null;

function me(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function ne(a) {
    return a.Ea || (a.Ea = ":" + (a.mh.g++).toString(36))
}
g = ke.prototype;
g.C = function() {
    return this.g
};

function oe(a) {
    a.Pb || (a.Pb = new ge(a));
    return a.Pb
}

function pe(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.A && a.Ea && qe(a.A, a.Ea) && a.A != b) throw Error("Unable to set parent component");
    a.A = b;
    ke.w.rf.call(a, b)
}
g.getParent = function() {
    return this.A
};
g.rf = function(a) {
    if (this.A && this.A != a) throw Error("Method not supported");
    ke.w.rf.call(this, a)
};
g.Ic = function() {
    this.g = this.s.g.createElement("DIV")
};
g.X = function(a) {
    re(this, a)
};

function re(a, b, c) {
    if (a.Z) throw Error("Component already rendered");
    a.g || a.Ic();
    b ? b.insertBefore(a.g, c || null) : a.s.g.body.appendChild(a.g);
    a.A && !a.A.Z || a.Ga()
}
g.Ga = function() {
    this.Z = !0;
    se(this, function(a) {
        !a.Z && a.C() && a.Ga()
    })
};
g.$a = function() {
    se(this, function(a) {
        a.Z && a.$a()
    });
    this.Pb && ie(this.Pb);
    this.Z = !1
};
g.Ba = function() {
    this.Z && this.$a();
    this.Pb && (this.Pb.B(), delete this.Pb);
    se(this, function(a) {
        a.B()
    });
    this.g && E(this.g);
    this.A = this.Ma = this.g = this.D = this.i = null;
    ke.w.Ba.call(this)
};
g.Ed = function(a, b) {
    this.Cc(a, te(this), b)
};
g.Cc = function(a, b, c) {
    if (a.Z && (c || !this.Z)) throw Error("Component already rendered");
    if (0 > b || b > te(this)) throw Error("Child component index out of bounds");
    this.D && this.i || (this.D = {}, this.i = []);
    if (a.getParent() == this) {
        var d = ne(a);
        this.D[d] = a;
        Ra(this.i, a)
    } else {
        var d = this.D,
            e = ne(a);
        if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    pe(a, this);
    Ua(this.i, b, 0, a);
    a.Z && this.Z && a.getParent() == this ? (c = this.Wd(), b = c.childNodes[b] || null, b != a.C() && c.insertBefore(a.C(), b)) : c ? (this.g ||
        this.Ic(), b = M(this, b + 1), re(a, this.Wd(), b ? b.g : null)) : this.Z && !a.Z && a.g && a.g.parentNode && 1 == a.g.parentNode.nodeType && a.Ga()
};
g.Wd = function() {
    return this.g
};

function ue(a) {
    null == a.Va && (a.Va = "rtl" == Wd(a.Z ? a.g : a.s.g.body, "direction"));
    return a.Va
}
g.Jc = function(a) {
    if (this.Z) throw Error("Component already rendered");
    this.Va = a
};

function ve(a) {
    return !!a.i && 0 != a.i.length
}

function te(a) {
    return a.i ? a.i.length : 0
}

function qe(a, b) {
    var c;
    a.D && b ? (c = a.D, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function M(a, b) {
    return a.i ? a.i[b] || null : null
}

function se(a, b, c) {
    a.i && Ma(a.i, b, c)
}

function we(a, b) {
    return a.i && b ? La(a.i, b) : -1
}
g.removeChild = function(a, b) {
    if (a) {
        var c = r(a) ? a : ne(a);
        a = qe(this, c);
        if (c && a) {
            var d = this.D;
            c in d && delete d[c];
            Ra(this.i, a);
            b && (a.$a(), a.g && E(a.g));
            pe(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.zg = function(a) {
    for (var b = []; ve(this);) b.push(this.removeChild(M(this, 0), a));
    return b
};

function xe(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return r(a) && a.match(/\S+/g) || []
}

function ye(a, b) {
    return a.classList ? a.classList.contains(b) : Qa(xe(a), b)
}

function ze(a, b) {
    a.classList ? a.classList.add(b) : ye(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function Ae(a, b) {
    if (a.classList) Ma(b, function(b) {
        ze(a, b)
    });
    else {
        var c = {};
        Ma(xe(a), function(a) {
            c[a] = !0
        });
        Ma(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function Be(a, b) {
    a.classList ? a.classList.remove(b) : ye(a, b) && (a.className = Na(xe(a), function(a) {
        return a != b
    }).join(" "))
}

function Ce(a, b) {
    a.classList ? Ma(b, function(b) {
        Be(a, b)
    }) : a.className = Na(xe(a), function(a) {
        return !Qa(b, a)
    }).join(" ")
};

function De(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!fa(b)) throw Error("Invalid decorator function " + b);
}
var Ee = {};
var Fe;

function Ge(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function He(a, b, c) {
    da(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (Fe || (Fe = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = Fe, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};

function Ie() {}
var Je;
ba(Ie);
var Ke = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = Ie.prototype;
g.kg = function() {};
g.Pe = function(a) {
    return a.s.Gc("DIV", Le(this, a).join(" "), a.Mc)
};
g.Xd = function(a) {
    return a
};

function Me(a, b, c) {
    if (a = a.C ? a.C() : a) {
        var d = [b];
        y && !B("7") && (d = Ne(xe(a), b), d.push(b));
        (c ? Ae : Ce)(a, d)
    }
}

function Oe(a, b, c) {
    if (a = c || a.kg()) c = b.getAttribute("role") || null, a != c && Ge(b, a)
}

function Pe(a, b) {
    a.ib || He(b, "hidden", !a.ib);
    a.isEnabled() || Qe(b, 1, !a.isEnabled());
    a.za & 8 && Qe(b, 8, !!(a.wa & 8));
    a.za & 16 && Qe(b, 16, !!(a.wa & 16));
    a.za & 64 && Qe(b, 64, !!(a.wa & 64))
}

function Re(a, b) {
    var c;
    if (a.za & 32 && (c = a.C())) {
        if (!b && a.wa & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.wa & 32 && a.lg()
        }(Xc(c) && Yc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
}
g.Y = function(a, b) {
    be(a, b);
    a && He(a, "hidden", !b)
};

function Qe(a, b, c) {
    Je || (Je = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = Je[b];
    var d = a.getAttribute("role") || null;
    d && (d = Ke[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && He(a, b, c)
}
g.Ha = function() {
    return "goog-control"
};

function Le(a, b) {
    var c = a.Ha(),
        d = [c],
        e = a.Ha();
    e != c && d.push(e);
    c = b.wa;
    for (e = []; c;) {
        var f = c & -c;
        e.push(a.Pd(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.dg) && d.push.apply(d, c);
    y && !B("7") && d.push.apply(d, Ne(d));
    return d
}

function Ne(a, b) {
    var c = [];
    b && (a = Sa(a, [b]));
    Ma([], function(d) {
        !Pa(d, na(Qa, a)) || b && !Qa(d, b) || c.push(d.join("_"))
    });
    return c
}
g.Pd = function(a) {
    if (!this.g) {
        var b = this.Ha();
        b.replace(/\xa0|\s/g, " ");
        this.g = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.g[a]
};

function Se(a, b, c, d, e) {
    if (!(y || kb || z && B("525"))) return !0;
    if (mb && e) return Te(a);
    if (e && !d) return !1;
    t(b) && (b = Ue(b));
    if (!c && (17 == b || 18 == b || mb && 91 == b)) return !1;
    if ((z || kb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (y && d && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(z || kb)
    }
    return Te(a)
}

function Te(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z || kb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function Ue(a) {
    if (lb) a = Ve(a);
    else if (mb && z) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function Ve(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function We(a, b) {
    Wb.call(this);
    a && Xe(this, a, b)
}
u(We, Wb);
g = We.prototype;
g.Hc = null;
g.ce = null;
g.$e = null;
g.ee = null;
g.ab = -1;
g.Tb = -1;
g.ye = !1;
var Ye = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Ze = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    $e = y || kb || z && B("525"),
    af = mb && lb;
g = We.prototype;
g.Nh = function(a) {
    if (z || kb)
        if (17 == this.ab && !a.ctrlKey || 18 == this.ab && !a.altKey || mb && 91 == this.ab && !a.metaKey) this.Tb = this.ab = -1; - 1 == this.ab && (a.ctrlKey && 17 != a.g ? this.ab = 17 : a.altKey && 18 != a.g ? this.ab = 18 : a.metaKey && 91 != a.g && (this.ab = 91));
    $e && !Se(a.g, this.ab, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Tb = Ue(a.g), af && (this.ye = a.altKey))
};
g.Oh = function(a) {
    this.Tb = this.ab = -1;
    this.ye = a.altKey
};
g.handleEvent = function(a) {
    var b = a.h,
        c, d, e = b.altKey;
    y && "keypress" == a.type ? (c = this.Tb, d = 13 != c && 27 != c ? b.keyCode : 0) : (z || kb) && "keypress" == a.type ? (c = this.Tb, d = 0 <= b.charCode && 63232 > b.charCode && Te(c) ? b.charCode : 0) : jb && !z ? (c = this.Tb, d = Te(c) ? b.keyCode : 0) : (c = b.keyCode || this.Tb, d = b.charCode || 0, af && (e = this.ye), mb && 63 == d && 224 == c && (c = 191));
    var f = c = Ue(c),
        h = b.keyIdentifier;
    c ? 63232 <= c && c in Ye ? f = Ye[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ze && (f = Ze[h]);
    this.ab = f;
    a = new bf(f, d, 0, b);
    a.altKey = e;
    Xb(this, a)
};
g.C = function() {
    return this.Hc
};

function Xe(a, b, c) {
    a.ee && cf(a);
    a.Hc = b;
    a.ce = Kb(a.Hc, "keypress", a, c);
    a.$e = Kb(a.Hc, "keydown", a.Nh, c, a);
    a.ee = Kb(a.Hc, "keyup", a.Oh, c, a)
}

function cf(a) {
    a.ce && (Rb(a.ce), Rb(a.$e), Rb(a.ee), a.ce = null, a.$e = null, a.ee = null);
    a.Hc = null;
    a.ab = -1;
    a.Tb = -1
}
g.Ba = function() {
    We.w.Ba.call(this);
    cf(this)
};

function bf(a, b, c, d) {
    Eb.call(this, d);
    this.type = "key";
    this.g = a;
    this.s = b
}
u(bf, Eb);

function N(a, b, c) {
    ke.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ha(b);
            if (d = Ee[d]) break;
            b = b.w ? b.w.constructor : null
        }
        b = d ? fa(d.Mb) ? d.Mb() : new d : null
    }
    this.h = b;
    this.ci(void 0 !== a ? a : null)
}
u(N, ke);
g = N.prototype;
g.Mc = null;
g.wa = 0;
g.za = 39;
g.yd = 0;
g.ib = !0;
g.dg = null;
g.ld = !0;
g.Ic = function() {
    var a = this.h.Pe(this);
    this.g = a;
    Oe(this.h, a, this.Vd());
    de(a, !y && !jb);
    this.ib || this.h.Y(a, !1)
};
g.Vd = function() {
    return null
};
g.Wd = function() {
    return this.h.Xd(this.C())
};
g.Ga = function() {
    N.w.Ga.call(this);
    Pe(this, this.g);
    var a = this.h;
    if (ue(this)) {
        var b = this.C();
        Me(b, a.Ha() + "-rtl", !0)
    }
    this.isEnabled() && Re(this, this.ib);
    this.za & -2 && (this.ld && df(this, !0), this.za & 32 && (a = this.C())) && (b = this.j || (this.j = new We), Xe(b, a), oe(this).T(b, "key", this.jb).T(a, "focus", this.Gh).T(a, "blur", this.lg))
};

function df(a, b) {
    var c = oe(a),
        d = a.C();
    b ? (c.T(d, "mouseover", a.Ue).T(d, "mousedown", a.lc).T(d, "mouseup", a.Nc).T(d, "mouseout", a.Te), a.kd != aa && c.T(d, "contextmenu", a.kd), y && (B(9) || c.T(d, "dblclick", a.ng), a.F || (a.F = new ef(a), Za(a, na($a, a.F))))) : (c.eb(d, "mouseover", a.Ue).eb(d, "mousedown", a.lc).eb(d, "mouseup", a.Nc).eb(d, "mouseout", a.Te), a.kd != aa && c.eb(d, "contextmenu", a.kd), y && (B(9) || c.eb(d, "dblclick", a.ng), $a(a.F), a.F = null))
}
g.$a = function() {
    N.w.$a.call(this);
    this.j && cf(this.j);
    this.ib && this.isEnabled() && Re(this, !1)
};
g.Ba = function() {
    N.w.Ba.call(this);
    this.j && (this.j.B(), delete this.j);
    delete this.h;
    this.F = this.dg = this.Mc = null
};
g.ci = function(a) {
    this.Mc = a
};
g.Me = function() {
    var a = this.Mc;
    if (!a) return "";
    if (!r(a))
        if (da(a)) a = Oa(a, Zc).join("");
        else {
            if (Fc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                $c(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Fc || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
    return pa(a)
};
g.Jc = function(a) {
    N.w.Jc.call(this, a);
    var b = this.C();
    b && Me(b, this.h.Ha() + "-rtl", a)
};
g.Y = function(a, b) {
    if (b || this.ib != a && Xb(this, a ? "show" : "hide")) {
        var c = this.C();
        c && this.h.Y(c, a);
        this.isEnabled() && Re(this, a);
        this.ib = a;
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return !(this.wa & 1)
};
g.wd = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !ff(this, 1, !a) || (a || (gf(this, !1), this.Db(!1)), this.ib && Re(this, a), hf(this, 1, !a, !0))
};
g.Db = function(a) {
    ff(this, 2, a) && hf(this, 2, a)
};

function gf(a, b) {
    ff(a, 4, b) && hf(a, 4, b)
}
g.ei = function() {
    ff(this, 8, !0) && hf(this, 8, !0)
};

function jf(a, b) {
    ff(a, 16, b) && hf(a, 16, b)
}

function kf(a, b) {
    ff(a, 64, b) && hf(a, 64, b)
}

function hf(a, b, c, d) {
    if (!d && 1 == b) a.wd(!c);
    else if (a.za & b && c != !!(a.wa & b)) {
        var e = a.h;
        if (d = a.C())(e = e.Pd(b)) && Me(a, e, c), Qe(d, b, c);
        a.wa = c ? a.wa | b : a.wa & ~b
    }
}
g.bb = function(a, b) {
    if (this.Z && this.wa & a && !b) throw Error("Component already rendered");
    !b && this.wa & a && hf(this, a, !1);
    this.za = b ? this.za | a : this.za & ~a
};

function lf(a, b) {
    return !!(255 & b) && !!(a.za & b)
}

function ff(a, b, c) {
    return !!(a.za & b) && !!(a.wa & b) != c && (!(a.yd & b) || Xb(a, me(b, c))) && !a.I
}
g.Ue = function(a) {
    !mf(a, this.C()) && Xb(this, "enter") && this.isEnabled() && lf(this, 2) && this.Db(!0)
};
g.Te = function(a) {
    !mf(a, this.C()) && Xb(this, "leave") && (lf(this, 4) && gf(this, !1), lf(this, 2) && this.Db(!1))
};
g.kd = aa;

function mf(a, b) {
    return !!a.A && Uc(b, a.A)
}
g.lc = function(a) {
    if (this.isEnabled() && (lf(this, 2) && this.Db(!0), Gb(a) && !(z && mb && a.ctrlKey))) {
        lf(this, 4) && gf(this, !0);
        var b;
        if (b = this.h) {
            var c;
            b = this.za & 32 && (c = this.C()) ? Xc(c) && Yc(c) : !1
        }
        b && this.C().focus()
    }!Gb(a) || z && mb && a.ctrlKey || a.preventDefault()
};
g.Nc = function(a) {
    this.isEnabled() && (lf(this, 2) && this.Db(!0), this.wa & 4 && this.sd(a) && lf(this, 4) && gf(this, !1))
};
g.ng = function(a) {
    this.isEnabled() && this.sd(a)
};
g.sd = function(a) {
    lf(this, 16) && jf(this, !(this.wa & 16));
    lf(this, 8) && this.ei();
    lf(this, 64) && kf(this, !(this.wa & 64));
    var b = new ib("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.D = a.D);
    return Xb(this, b)
};
g.Gh = function() {
    lf(this, 32) && ff(this, 32, !0) && hf(this, 32, !0)
};
g.lg = function() {
    lf(this, 4) && gf(this, !1);
    lf(this, 32) && ff(this, 32, !1) && hf(this, 32, !1)
};
g.jb = function(a) {
    return this.ib && this.isEnabled() && this.Qe(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Qe = function(a) {
    return 13 == a.g && this.sd(a)
};
if (!fa(N)) throw Error("Invalid component class " + N);
if (!fa(Ie)) throw Error("Invalid renderer class " + Ie);
var nf = ha(N);
Ee[nf] = Ie;
De("goog-control", function() {
    return new N(null)
});

function ef(a) {
    Wa.call(this);
    this.h = a;
    this.g = !1;
    this.i = new ge(this);
    Za(this, na($a, this.i));
    a = this.h.g;
    this.i.T(a, "mousedown", this.s).T(a, "mouseup", this.A).T(a, "click", this.j)
}
u(ef, Wa);
var of = !y || 9 <= Number(xb);
ef.prototype.s = function() {
    this.g = !1
};
ef.prototype.A = function() {
    this.g = !0
};

function pf(a, b) {
    if (!of) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
ef.prototype.j = function(a) {
    if (this.g) this.g = !1;
    else {
        var b = a.h,
            c = b.button,
            d = b.type,
            e = pf(b, "mousedown");
        this.h.lc(new Eb(e, a.i));
        e = pf(b, "mouseup");
        this.h.Nc(new Eb(e, a.i));
        of || (b.button = c, b.type = d)
    }
};
ef.prototype.Ba = function() {
    this.h = null;
    ef.w.Ba.call(this)
};

function qf() {
    this.h = []
}
u(qf, Ie);
ba(qf);

function rf(a, b) {
    var c = a.h[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.Ha() + "-highlight";
                break;
            case 1:
                c = a.Ha() + "-checkbox";
                break;
            case 2:
                c = a.Ha() + "-content"
        }
        a.h[b] = c
    }
    return c
}
g = qf.prototype;
g.kg = function() {
    return "menuitem"
};
g.Pe = function(a) {
    var b = a.s.Gc("DIV", Le(this, a).join(" "), sf(this, a.Mc, a.s));
    tf(this, a, b, !!(a.za & 8) || !!(a.za & 16));
    return b
};
g.Xd = function(a) {
    return a && a.firstChild
};

function sf(a, b, c) {
    a = rf(a, 2);
    return c.Gc("DIV", a, b)
}

function tf(a, b, c, d) {
    Oe(a, c, b.Vd());
    Pe(b, c);
    var e;
    if (e = a.Xd(c)) {
        e = e.firstChild;
        var f = rf(a, 1);
        e = !!e && ga(e) && 1 == e.nodeType && ye(e, f)
    } else e = !1;
    d != e && (d ? ze(c, "goog-option") : Be(c, "goog-option"), c = a.Xd(c), d ? (a = rf(a, 1), c.insertBefore(b.s.Gc("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.Pd = function(a) {
    switch (a) {
        case 2:
            return rf(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return qf.w.Pd.call(this, a)
    }
};
g.Ha = function() {
    return "goog-menuitem"
};

function uf(a, b, c, d) {
    N.call(this, a, d || qf.Mb(), c);
    this.Ma = b
}
u(uf, N);
g = uf.prototype;
g.Ob = function() {
    var a = this.Ma;
    return null != a ? a : this.Me()
};
g.bb = function(a, b) {
    uf.w.bb.call(this, a, b);
    switch (a) {
        case 8:
            this.wa & 16 && !b && jf(this, !1);
            var c = this.C();
            c && this && c && tf(this.h, this, c, b);
            break;
        case 16:
            (c = this.C()) && this && c && tf(this.h, this, c, b)
    }
};
g.Me = function() {
    var a = this.Mc;
    return da(a) ? (a = Oa(a, function(a) {
        return ga(a) && 1 == a.nodeType && (ye(a, "goog-menuitem-accel") || ye(a, "goog-menuitem-mnemonic-separator")) ? "" : Zc(a)
    }).join(""), pa(a)) : uf.w.Me.call(this)
};
g.Nc = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.h;
        b.h = null;
        if (c && t(a.clientX) && Gc(c, new C(a.clientX, a.clientY))) return
    }
    uf.w.Nc.call(this, a)
};
g.Qe = function(a) {
    return a.g == this.tg && this.sd(a) ? !0 : uf.w.Qe.call(this, a)
};
g.Fh = function() {
    return this.tg
};
De("goog-menuitem", function() {
    return new uf(null)
});
uf.prototype.Vd = function() {
    return this.za & 16 ? "menuitemcheckbox" : this.za & 8 ? "menuitemradio" : uf.w.Vd.call(this)
};
uf.prototype.getParent = function() {
    return N.prototype.getParent.call(this)
};
uf.prototype.Ud = function() {
    return N.prototype.Ud.call(this)
};

function vf(a) {
    this.h = a
}
ba(vf);

function wf(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
vf.prototype.g = function(a) {
    a = a.C();
    de(a, lb);
    y && (a.hideFocus = !0);
    var b = this.h;
    b && Ge(a, b)
};
vf.prototype.Ha = function() {
    return "goog-container"
};

function xf(a, b) {
    var c = a.Ha(),
        d = [c, b.Rc == yf ? c + "-horizontal" : c + "-vertical"];
    b.isEnabled() || d.push(c + "-disabled");
    return d
};

function zf() {}
u(zf, Ie);
ba(zf);
zf.prototype.Pe = function(a) {
    return a.s.Gc("DIV", this.Ha())
};
zf.prototype.Ha = function() {
    return "goog-menuseparator"
};

function Af(a, b) {
    N.call(this, null, a || zf.Mb(), b);
    this.bb(1, !1);
    this.bb(2, !1);
    this.bb(4, !1);
    this.bb(32, !1);
    this.wa = 1
}
u(Af, N);
Af.prototype.Ga = function() {
    Af.w.Ga.call(this);
    var a = this.C();
    Ge(a, "separator")
};
De("goog-menuseparator", function() {
    return new Af
});

function Bf(a) {
    this.h = a || "menu"
}
u(Bf, vf);
ba(Bf);
Bf.prototype.Ha = function() {
    return "goog-menu"
};
Bf.prototype.g = function(a) {
    Bf.w.g.call(this, a);
    a = a.C();
    He(a, "haspopup", "true")
};
De("goog-menuseparator", function() {
    return new Af
});

function Cf(a, b, c) {
    ke.call(this, c);
    this.jd = b || vf.Mb();
    this.Rc = a || Df
}
u(Cf, ke);
var yf = "horizontal",
    Df = "vertical";
g = Cf.prototype;
g.bf = null;
g.kc = null;
g.jd = null;
g.Rc = null;
g.Qb = !0;
g.gc = !0;
g.Kc = !0;
g.ua = -1;
g.Da = null;
g.Qc = !1;
g.Cb = null;

function Ef(a) {
    return a.bf || a.C()
}
g.Ic = function() {
    this.g = this.s.Gc("DIV", xf(this.jd, this).join(" "))
};
g.Wd = function() {
    return this.C()
};
g.Ga = function() {
    Cf.w.Ga.call(this);
    se(this, function(a) {
        a.Z && Ff(this, a)
    }, this);
    var a = this.C();
    this.jd.g(this);
    this.Y(this.Qb, !0);
    oe(this).T(this, "enter", this.Re).T(this, "highlight", this.Mh).T(this, "unhighlight", this.Qh).T(this, "open", this.Ph).T(this, "close", this.Jh).T(a, "mousedown", this.lc).T(Kc(a), "mouseup", this.Kh).T(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Ih);
    this.Kc && Gf(this, !0)
};

function Gf(a, b) {
    var c = oe(a),
        d = Ef(a);
    b ? c.T(d, "focus", a.jg).T(d, "blur", a.ig).T(a.kc || (a.kc = new We(Ef(a))), "key", a.jb) : c.eb(d, "focus", a.jg).eb(d, "blur", a.ig).eb(a.kc || (a.kc = new We(Ef(a))), "key", a.jb)
}
g.$a = function() {
    this.Lc(-1);
    this.Da && kf(this.Da, !1);
    this.Qc = !1;
    Cf.w.$a.call(this)
};
g.Ba = function() {
    Cf.w.Ba.call(this);
    this.kc && (this.kc.B(), this.kc = null);
    this.jd = this.Da = this.Cb = this.bf = null
};
g.Re = function() {
    return !0
};
g.Mh = function(a) {
    var b = we(this, a.target);
    if (-1 < b && b != this.ua) {
        var c = M(this, this.ua);
        c && c.Db(!1);
        this.ua = b;
        c = M(this, this.ua);
        this.Qc && gf(c, !0);
        this.Da && c != this.Da && (c.za & 64 ? kf(c, !0) : kf(this.Da, !1))
    }
    b = this.C();
    null != a.target.C() && He(b, "activedescendant", a.target.C().id)
};
g.Qh = function(a) {
    a.target == M(this, this.ua) && (this.ua = -1);
    this.C().removeAttribute("aria-activedescendant")
};
g.Ph = function(a) {
    (a = a.target) && a != this.Da && a.getParent() == this && (this.Da && kf(this.Da, !1), this.Da = a)
};
g.Jh = function(a) {
    a.target == this.Da && (this.Da = null);
    var b = this.C(),
        c = a.target.C();
    b && a.target.wa & 2 && c && (a = "", c && (a = c.id), He(b, "activedescendant", a))
};
g.lc = function(a) {
    this.gc && (this.Qc = !0);
    var b = Ef(this);
    b && Xc(b) && Yc(b) ? b.focus() : a.preventDefault()
};
g.Kh = function() {
    this.Qc = !1
};
g.Ih = function(a) {
    var b = Hf(this, a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.lc(a);
            break;
        case "mouseup":
            b.Nc(a);
            break;
        case "mouseover":
            b.Ue(a);
            break;
        case "mouseout":
            b.Te(a);
            break;
        case "contextmenu":
            b.kd(a)
    }
};

function Hf(a, b) {
    if (a.Cb)
        for (var c = a.C(); b && b !== c;) {
            var d = b.id;
            if (d in a.Cb) return a.Cb[d];
            b = b.parentNode
        }
    return null
}
g.jg = function() {};
g.ig = function() {
    this.Lc(-1);
    this.Qc = !1;
    this.Da && kf(this.Da, !1)
};
g.jb = function(a) {
    return this.isEnabled() && this.Qb && (0 != te(this) || this.bf) && this.Oe(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Oe = function(a) {
    var b = M(this, this.ua);
    if (b && "function" == typeof b.jb && b.jb(a) || this.Da && this.Da != b && "function" == typeof this.Da.jb && this.Da.jb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.g) {
        case 27:
            if (this.Kc) Ef(this).blur();
            else return !1;
            break;
        case 36:
            If(this);
            break;
        case 35:
            Jf(this);
            break;
        case 38:
            if (this.Rc == Df) Kf(this);
            else return !1;
            break;
        case 37:
            if (this.Rc == yf) ue(this) ? Lf(this) : Kf(this);
            else return !1;
            break;
        case 40:
            if (this.Rc == Df) Lf(this);
            else return !1;
            break;
        case 39:
            if (this.Rc ==
                yf) ue(this) ? Kf(this) : Lf(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function Ff(a, b) {
    var c = b.C(),
        c = c.id || (c.id = ne(b));
    a.Cb || (a.Cb = {});
    a.Cb[c] = b
}
g.Ed = function(a, b) {
    Cf.w.Ed.call(this, a, b)
};
g.Cc = function(a, b, c) {
    a.yd |= 2;
    a.yd |= 64;
    a.bb(32, !1);
    a.Z && 0 != a.ld && df(a, !1);
    a.ld = !1;
    var d = a.getParent() == this ? we(this, a) : -1;
    Cf.w.Cc.call(this, a, b, c);
    a.Z && this.Z && Ff(this, a);
    a = d; - 1 == a && (a = te(this));
    a == this.ua ? this.ua = Math.min(te(this) - 1, b) : a > this.ua && b <= this.ua ? this.ua++ : a < this.ua && b > this.ua && this.ua--
};
g.removeChild = function(a, b) {
    if (a = r(a) ? qe(this, a) : a) {
        var c = we(this, a); - 1 != c && (c == this.ua ? (a.Db(!1), this.ua = -1) : c < this.ua && this.ua--);
        var d = a.C();
        d && d.id && this.Cb && (c = this.Cb, d = d.id, d in c && delete c[d])
    }
    c = a = Cf.w.removeChild.call(this, a, b);
    c.Z && 1 != c.ld && df(c, !0);
    c.ld = !0;
    return a
};
g.Y = function(a, b) {
    if (b || this.Qb != a && Xb(this, a ? "show" : "hide")) {
        this.Qb = a;
        var c = this.C();
        c && (be(c, a), this.Kc && wf(Ef(this), this.gc && this.Qb), b || Xb(this, this.Qb ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return this.gc
};
g.wd = function(a) {
    this.gc != a && Xb(this, a ? "enable" : "disable") && (a ? (this.gc = !0, se(this, function(a) {
        a.Dg ? delete a.Dg : a.wd(!0)
    })) : (se(this, function(a) {
        a.isEnabled() ? a.wd(!1) : a.Dg = !0
    }), this.Qc = this.gc = !1), this.Kc && wf(Ef(this), a && this.Qb))
};

function Mf(a, b) {
    b != a.Kc && a.Z && Gf(a, b);
    a.Kc = b;
    a.gc && a.Qb && wf(Ef(a), b)
}
g.Lc = function(a) {
    (a = M(this, a)) ? a.Db(!0): -1 < this.ua && M(this, this.ua).Db(!1)
};

function If(a) {
    Nf(a, function(a, c) {
        return (a + 1) % c
    }, te(a) - 1)
}

function Jf(a) {
    Nf(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function Lf(a) {
    Nf(a, function(a, c) {
        return (a + 1) % c
    }, a.ua)
}

function Kf(a) {
    Nf(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.ua)
}

function Nf(a, b, c) {
    c = 0 > c ? we(a, a.Da) : c;
    var d = te(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = M(a, c);
        if (f && a.Gf(f)) {
            a.Lc(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.Gf = function(a) {
    return a.ib && a.isEnabled() && !!(a.za & 2)
};

function Of() {}
u(Of, Ie);
ba(Of);
Of.prototype.Ha = function() {
    return "goog-menuheader"
};

function Pf(a, b, c) {
    N.call(this, a, c || Of.Mb(), b);
    this.bb(1, !1);
    this.bb(2, !1);
    this.bb(4, !1);
    this.bb(32, !1);
    this.wa = 1
}
u(Pf, N);
De("goog-menuheader", function() {
    return new Pf(null)
});

function Qf(a, b) {
    Cf.call(this, Df, b || Bf.Mb(), a);
    Mf(this, !1)
}
u(Qf, Cf);
g = Qf.prototype;
g.xe = !0;
g.Ha = function() {
    return this.jd.Ha()
};

function Rf(a) {
    a.xe = !0;
    Mf(a, !0)
}
g.Y = function(a, b, c) {
    (b = Qf.w.Y.call(this, a, b)) && a && this.Z && this.xe && Ef(this).focus();
    a && c && t(c.clientX) ? this.h = new C(c.clientX, c.clientY) : this.h = null;
    return b
};
g.Re = function(a) {
    this.xe && Ef(this).focus();
    return Qf.w.Re.call(this, a)
};
g.Gf = function(a) {
    return a.isEnabled() && a.ib && !!(a.za & 2)
};
g.Oe = function(a) {
    var b = Qf.w.Oe.call(this, a);
    b || se(this, function(c) {
        !b && c.Fh && c.tg == a.g && (this.isEnabled() && this.Lc(we(this, c)), b = c.jb(a))
    }, this);
    return b
};
g.Lc = function(a) {
    Qf.w.Lc.call(this, a);
    if (a = M(this, a)) {
        var b = a.C(),
            c = (a = this.C() || Oc(document)) || Oc(document),
            d = Zd(b),
            e = Zd(c),
            f;
        if (!y || 9 <= Number(xb)) h = Vd(c, "borderLeftWidth"), f = Vd(c, "borderRightWidth"), l = Vd(c, "borderTopWidth"), m = Vd(c, "borderBottomWidth"), f = new Td(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(h));
        else {
            var h = fe(c, "borderLeft");
            f = fe(c, "borderRight");
            var l = fe(c, "borderTop"),
                m = fe(c, "borderBottom");
            f = new Td(l, f, m, h)
        }
        c == Oc(document) ? (h = d.x - c.scrollLeft, d = d.y - c.scrollTop, !y || 10 <= Number(xb) ||
            (h += f.left, d += f.top)) : (h = d.x - e.x - f.left, d = d.y - e.y - f.top);
        e = c.clientHeight - b.offsetHeight;
        f = c.scrollLeft;
        l = c.scrollTop;
        f += Math.min(h, Math.max(h - (c.clientWidth - b.offsetWidth), 0));
        l += Math.min(d, Math.max(d - e, 0));
        b = new C(f, l);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var Tf = {
    Kd: null,
    show: function(a, b, c) {
        Sf(Tf, c);
        if (b.length) {
            var d = new Qf;
            d.Jc(c);
            for (var e = 0, f; f = b[e]; e++) {
                var h = new uf(f.text);
                h.Jc(c);
                d.Ed(h, !0);
                h.wd(f.enabled);
                f.enabled && Kb(h, "action", f.Na)
            }
            Kb(d, "action", Tf.Eb);
            b = Nc();
            e = Xd();
            d.X(Uf);
            var l = d.C();
            Vf(l, "blocklyContextMenu");
            O(l, "contextmenu", null, Wf);
            f = $d(l);
            var h = a.clientX + e.x,
                m = a.clientY + e.y;
            a.clientY + f.height >= b.height && (m -= f.height);
            c ? f.width >= a.clientX && (h += f.width) : a.clientX + f.width >= b.width && (h -= f.width);
            Yf(h, m, b, e, c);
            Rf(d);
            setTimeout(function() {
                    l.focus()
                },
                1);
            Tf.Kd = null
        } else Tf.Eb()
    },
    Eb: function() {
        Zf == Tf && $f();
        Tf.Kd = null
    },
    Ap: function(a, b) {
        return function() {
            I++;
            var c = Bd(b, a.v),
                d = a.aa();
            d.x = a.m ? d.x - Hd : d.x + Hd;
            d.y += 2 * Hd;
            c.moveBy(d.x, d.y);
            I--;
            0 == I && !c.i && J(new ag(c));
            c.select()
        }
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function bg(a) {
    this.id = cg();
    dg[this.id] = this;
    this.options = a || {};
    this.m = !!this.options.m;
    this.Rb = !!this.options.Rb;
    this.$ = this.options.$;
    this.j = [];
    this.D = [];
    this.s = [];
    this.G = [];
    this.qb = Object.create(null)
}
g = bg.prototype;
g.N = !1;
g.B = function() {
    this.D.length = 0;
    this.clear();
    delete dg[this.id]
};

function eg(a, b) {
    for (var c = !1, d, e = 0; d = a.j[e]; e++)
        if (d == b) {
            a.j.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
}

function fg(a, b) {
    var c = [].concat(a.j);
    if (b && 1 < c.length) {
        var d = Math.sin(3 * Math.PI / 180);
        a.m && (d *= -1);
        c.sort(function(a, b) {
            var c = a.aa(),
                l = b.aa();
            return c.y + d * c.x - (l.y + d * l.x)
        })
    }
    return c
}
g.Lb = function() {
    for (var a = fg(this, !1), b = 0; b < a.length; b++) a.push.apply(a, a[b].hc());
    return a
};
g.clear = function() {
    var a = md;
    for (a || G(!0); this.j.length;) this.j[0].B();
    a || G(!1)
};
g.hb = function() {
    return 0
};
g.rd = function(a, b) {
    return new gg(this, a, b)
};

function hg(a) {
    return isNaN(a.options.F) ? Infinity : a.options.F - a.Lb().length
}
g.zf = function(a) {
    var b = a ? this.G : this.s,
        c = a ? this.s : this.G,
        d = b.pop();
    if (d) {
        for (var e = [d]; b.length && d.D && d.D == b[b.length - 1].D;) e.push(b.pop());
        for (b = 0; d = e[b]; b++) c.push(d);
        e = ig(e, a);
        ld = !1;
        for (b = 0; d = e[b]; b++) d.i(a);
        ld = !0
    }
};
g.Be = function() {
    this.s.length = 0;
    for (var a = this.G.length = 0, b; b = jg[a]; a++) b.ef = !1
};
g.Bc = function(a) {
    this.D.push(a);
    return a
};
g.ie = function(a) {
    a = this.D.indexOf(a); - 1 != a && this.D.splice(a, 1)
};
var dg = Object.create(null);
bg.prototype.clear = bg.prototype.clear;
bg.prototype.clearUndo = bg.prototype.Be;
bg.prototype.addChangeListener = bg.prototype.Bc;
bg.prototype.removeChangeListener = bg.prototype.ie;

function kg(a) {
    var b = D("xml");
    a = fg(a, !0);
    for (var c = 0, d; d = a[c]; c++) b.appendChild(lg(d));
    return b
}

function lg(a) {
    var b;
    a.v.m && (b = a.v.hb());
    var c = hd(a),
        d = a.aa();
    c.setAttribute("x", Math.round(a.v.m ? b - d.x : d.x));
    c.setAttribute("y", Math.round(d.y));
    return c
}

function hd(a) {
    var b = D(a.i ? "shadow" : "block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.nc) {
        var c = a.nc();
        c && (c.hasChildNodes() || c.hasAttributes()) && b.appendChild(c)
    }
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ca[e]; e++)
            if (f.name && f.xc) {
                var h = D("field", null, f.Ob());
                h.setAttribute("name", f.name);
                b.appendChild(h)
            }
    if (c = a.gg()) c = D("comment", null, c), "object" == typeof a.oa && (c.setAttribute("pinned", !!a.oa.ea), d = mg(a.oa), c.setAttribute("h", d.height), c.setAttribute("w", d.width)), b.appendChild(c);
    a.data && (c = D("data", null, a.data), b.appendChild(c));
    for (c = 0; d = a.h[c]; c++) {
        var l;
        f = !0;
        5 != d.type && (h = F(d.H), 1 == d.type ? l = D("value") : 3 == d.type && (l = D("statement")), e = d.H.ub, !e || h && h.i || l.appendChild(ng(e)), h && (l.appendChild(hd(h)), f = !1), l.setAttribute("name", d.name), f || b.appendChild(l))
    }
    a.ue != a.R && b.setAttribute("inline", a.R);
    a.j && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    og(a) || a.i || b.setAttribute("deletable", !1);
    xd(a) || a.i || b.setAttribute("movable", !1);
    pg(a) || b.setAttribute("editable", !1);
    if (c = jd(a)) l = D("next", null, hd(c)), b.appendChild(l);
    e = a.g && a.g.ub;
    !e || c && c.i || l.appendChild(ng(e));
    return b
}

function ng(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && E(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && E(c))
        }
    return a
}

function qg(a) {
    return (new XMLSerializer).serializeToString(a)
}

function rg(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
}

function sg(a, b) {
    if (a instanceof bg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var d;
    b.m && (d = b.hb());
    tg();
    var c = a.childNodes.length,
        e = md;
    e || G(!0);
    for (var f = 0; f < c; f++) {
        var h = a.childNodes[f];
        if ("block" == h.nodeName.toLowerCase()) {
            var l = Bd(h, b),
                m = parseInt(h.getAttribute("x"), 10),
                h = parseInt(h.getAttribute("y"), 10);
            isNaN(m) || isNaN(h) || l.moveBy(b.m ? d - m : m, h)
        }
    }
    e || G(!1);
    ug()
}

function Bd(a, b) {
    if (a instanceof bg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    I++;
    var d = vg(a, b);
    if (b.N) {
        wg(d, !0);
        for (var c = d.Wa(), e = c.length - 1; 0 <= e; e--) c[e].md();
        for (e = c.length - 1; 0 <= e; e--) c[e].X(!1);
        setTimeout(function() {
            d.v && wg(d, !1)
        }, 1);
        Sd(d);
        xg(b)
    }
    I--;
    0 == I && J(new ag(d));
    return d
}

function vg(a, b) {
    for (var c = null, d = a.getAttribute("type"), e = a.getAttribute("id"), c = b.rd(d, e), f = null, e = 0, h; h = a.childNodes[e]; e++)
        if (3 != h.nodeType) {
            for (var l = f = null, m = 0, n; n = h.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? f = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !f && l && (f = l);
            m = h.getAttribute("name");
            switch (h.nodeName.toLowerCase()) {
                case "mutation":
                    c.fc && (c.fc(h), c.md && c.md());
                    break;
                case "comment":
                    c.vd(h.textContent);
                    var p = h.getAttribute("pinned");
                    p && !c.D && setTimeout(function() {
                        c.oa &&
                            c.oa.Y && c.oa.Y("true" == p)
                    }, 1);
                    f = parseInt(h.getAttribute("w"), 10);
                    h = parseInt(h.getAttribute("h"), 10);
                    !isNaN(f) && !isNaN(h) && c.oa && c.oa.Y && yg(c.oa, f, h);
                    break;
                case "data":
                    c.data = h.textContent;
                    break;
                case "title":
                case "field":
                    f = zg(c, m);
                    if (!f) {
                        console.warn("Ignoring non-existent field " + m + " in block " + d);
                        break
                    }
                    f.fb(h.textContent);
                    break;
                case "value":
                case "statement":
                    h = Ag(c, m);
                    if (!h) {
                        console.warn("Ignoring non-existent input " + m + " in block " + d);
                        break
                    }
                    l && (h.H.ub = l);
                    f && (f = vg(f, b), f.J ? h.H.connect(f.J) : f.L && h.H.connect(f.L));
                    break;
                case "next":
                    l && c.g && (c.g.ub = l);
                    f && (f = vg(f, b), c.g.connect(f.L));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + h.nodeName)
            }
        }(d = a.getAttribute("inline")) && c.Uc("true" == d);
    (d = a.getAttribute("disabled")) && c.Tc("true" == d);
    if (d = a.getAttribute("deletable")) c.Fe = "true" == d;
    (d = a.getAttribute("movable")) && c.nf("true" == d);
    (d = a.getAttribute("editable")) && c.mf("true" == d);
    (d = a.getAttribute("collapsed")) && c.rc("true" == d);
    if ("shadow" == a.nodeName.toLowerCase()) {
        d = c.hc();
        for (e = 0; d[e]; e++);
        c.tf(!0)
    }
    c.ve &&
        c.ve();
    return c
}
k.Blockly || (k.Blockly = {});
k.Blockly.Xml || (k.Blockly.Xml = {});
k.Blockly.Xml.domToText = qg;
k.Blockly.Xml.domToWorkspace = sg;
k.Blockly.Xml.textToDom = rg;
k.Blockly.Xml.workspaceToDom = kg;

function Bg(a, b, c, d, e, f) {
    this.o = a;
    this.s = b;
    this.A = c;
    c = Cg;
    this.o.m && (c = -c);
    this.D = c * Math.PI / 180;
    a.i.appendChild(Dg(this, b, !(!e || !f)));
    this.cc = d;
    this.ud && Eg(this);
    e && f || (b = this.s.getBBox(), e = b.width + 2 * Fg, f = b.height + 2 * Fg);
    Gg(this, e, f);
    Eg(this);
    Hg(this);
    this.ud = !0;
    a.options.i || (O(this.i, "mousedown", this, this.qh), this.g && O(this.g, "mousedown", this, this.Zh))
}
var Fg = 6,
    Cg = 20,
    Ig = null,
    Jg = null;
g = Bg.prototype;
g.jf = null;

function Kg() {
    Ig && (P(Ig), Ig = null);
    Jg && (P(Jg), Jg = null)
}
g.ud = !1;
g.cc = null;
g.qc = 0;
g.td = 0;
g.S = 0;
g.Yc = 0;
g.Ae = !0;

function Dg(a, b, c) {
    a.h = L("g", {}, null);
    var d = {
        filter: "url(#" + a.o.options.na + ")"
    }; - 1 != Ia.indexOf("JavaFX") && (d = {});
    d = L("g", d, a.h);
    a.j = L("path", {}, d);
    a.i = L("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: Fg,
        ry: Fg
    }, d);
    c ? (a.g = L("g", {
            "class": a.o.m ? "blocklyResizeSW" : "blocklyResizeSE"
        }, a.h), c = 2 * Fg, L("polygon", {
            points: "0,x x,x x,0".replace(/x/g, c.toString())
        }, a.g), L("line", {
            "class": "blocklyResizeLine",
            x1: c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: c / 3
        }, a.g), L("line", {
            "class": "blocklyResizeLine",
            x1: 2 * c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: 2 * c / 3
        }, a.g)) :
        a.g = null;
    a.h.appendChild(b);
    return a.h
}
g.qh = function(a) {
    Lg(this);
    Kg();
    Mg(a) ? a.stopPropagation() : Ng(a) || (Og(Pg), Qg(this.o, a, new C(this.o.m ? -this.qc : this.qc, this.td)), Ig = O(document, "mouseup", this, Kg), Jg = O(document, "mousemove", this, this.rh), Q(), a.stopPropagation())
};
g.rh = function(a) {
    this.Ae = !1;
    a = Rg(this.o, a);
    this.qc = this.o.m ? -a.x : a.x;
    this.td = a.y;
    Eg(this);
    Hg(this)
};
g.Zh = function(a) {
    Lg(this);
    Kg();
    Mg(a) || (Og(Pg), Qg(this.o, a, new C(this.o.m ? -this.S : this.S, this.Yc)), Ig = O(document, "mouseup", this, Kg), Jg = O(document, "mousemove", this, this.$h), Q());
    a.stopPropagation()
};
g.$h = function(a) {
    this.Ae = !1;
    a = Rg(this.o, a);
    Gg(this, this.o.m ? -a.x : a.x, a.y);
    this.o.m && Eg(this)
};

function Lg(a) {
    a.h.parentNode.appendChild(a.h)
}

function Eg(a) {
    var b = a.cc.x,
        b = a.o.m ? b - (a.qc + a.S) : b + a.qc;
    a.h.setAttribute("transform", "translate(" + b + "," + (a.td + a.cc.y) + ")")
}

function Sg(a) {
    return {
        width: a.S,
        height: a.Yc
    }
}

function Gg(a, b, c) {
    var d = 2 * Fg;
    b = Math.max(b, d + 45);
    c = Math.max(c, d + 20);
    a.S = b;
    a.Yc = c;
    a.i.setAttribute("width", b);
    a.i.setAttribute("height", c);
    a.g && (a.o.m ? a.g.setAttribute("transform", "translate(" + 2 * Fg + "," + (c - d) + ") scale(-1 1)") : a.g.setAttribute("transform", "translate(" + (b - d) + "," + (c - d) + ")"));
    if (a.ud) {
        if (a.Ae) {
            b = -a.S / 4;
            c = -a.Yc - 25;
            d = a.o.xa();
            d.U /= a.o.scale;
            d.Aa /= a.o.scale;
            var e = a.cc.x;
            a.o.m ? e - d.Aa - b - a.S < R ? b = e - d.Aa - a.S - R : e - d.Aa - b > d.U && (b = e - d.Aa - d.U) : e + b < d.Aa ? b = d.Aa - e : d.Aa + d.U < e + b + a.S + 10 + R && (b = d.Aa + d.U - e -
                a.S - R);
            a.cc.y + c < d.wb && (c = a.A.getBBox().height);
            a.qc = b;
            a.td = c
        }
        Eg(a);
        Hg(a)
    }
    a.jf && a.jf()
}

function Hg(a) {
    var b = [],
        c = a.S / 2,
        d = a.Yc / 2,
        e = -a.qc,
        f = -a.td;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        a.o.m && (e *= -1);
        var h = Math.sqrt(f * f + e * e),
            l = Math.acos(e / h);
        0 > f && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            p = Math.cos(m),
            q = Sg(a),
            m = (q.width + q.height) / 10,
            m = Math.min(m, q.width, q.height) / 2,
            q = 1 - 8 / h,
            e = c + q * e,
            f = d + q * f,
            q = c + m * p,
            A = d + m * n,
            c = c - m * p,
            d = d - m * n,
            n = l + a.D;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * h / 4;
        h = Math.cos(n) * h / 4;
        b.push("M" + q + "," + A);
        b.push("C" + (q + h) + "," + (A + l) +
            " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + h) + "," + (d + l) + " " + c + "," + d)
    }
    b.push("z");
    a.j.setAttribute("d", b.join(" "))
}
g.B = function() {
    Kg();
    E(this.h);
    this.A = this.s = this.o = this.g = this.i = this.j = this.h = null
};

function Tg(a) {
    this.o = a
}
g = Tg.prototype;
g.qe = !1;
g.u = null;
g.ke = null;
g.cf = 0;
g.Ub = 0;
g.xb = 0;
g.Ad = 0;
g.ga = function(a) {
    this.g = 20 + a;
    Ug(this, !1);
    return this.g + 60
};
g.B = function() {
    this.u && (E(this.u), this.u = null);
    this.o = this.ke = null;
    k.clearTimeout(this.cf)
};
g.position = function() {
    var a = this.o.xa();
    a && (this.o.m ? (this.xb = 20 + R, 2 == a.$ && (this.xb += a.Nd, this.o.P && (this.xb += a.Fa))) : (this.xb = a.U + a.Fa - 47 - 20 - R, 3 == a.$ && (this.xb -= a.Nd)), this.Ad = a.qa + a.Ja - 60 - this.g, 1 == a.$ && (this.Ad -= a.eg), this.u.setAttribute("transform", "translate(" + this.xb + "," + this.Ad + ")"))
};
g.fd = function() {
    var a = this.u.getBoundingClientRect();
    return new Ud(a.left + 0 - 10, a.top + 32 - 10, 67, 80)
};

function Ug(a, b) {
    a.qe != b && (k.clearTimeout(a.cf), a.qe = b, a.ze())
}
g.ze = function() {
    this.Ub += this.qe ? .2 : -.2;
    this.Ub = Math.min(Math.max(this.Ub, 0), 1);
    var a = 45 * this.Ub;
    this.ke.setAttribute("transform", "rotate(" + (this.o.m ? -a : a) + "," + (this.o.m ? 4 : 43) + ",14)");
    this.u.style.opacity = .4 + .4 * this.Ub;
    0 < this.Ub && 1 > this.Ub && (this.cf = Zb(this.ze, 20, this))
};
g.close = function() {
    Ug(this, !1)
};
g.Mg = function() {
    var a = this.o.vf - this.o.scrollX,
        b = this.o.wf - this.o.scrollY;
    Math.sqrt(a * a + b * b) > Vg || console.log("TODO: Inspect trash.")
};

function Wg(a) {
    this.o = a;
    this.h = new Xg(a, !0, !0);
    this.i = new Xg(a, !1, !0);
    this.j = L("rect", {
        height: R,
        width: R,
        "class": "blocklyScrollbarBackground"
    }, null);
    Yg(this.j, a.i)
}
Wg.prototype.g = null;
Wg.prototype.B = function() {
    E(this.j);
    this.g = this.o = this.j = null;
    this.h.B();
    this.h = null;
    this.i.B();
    this.i = null
};
Wg.prototype.resize = function() {
    var a = this.o.xa();
    if (a) {
        var b = !1,
            c = !1;
        this.g && this.g.U == a.U && this.g.qa == a.qa && this.g.Ja == a.Ja && this.g.Fa == a.Fa ? (this.g && this.g.Pa == a.Pa && this.g.Aa == a.Aa && this.g.Ya == a.Ya || (b = !0), this.g && this.g.Oa == a.Oa && this.g.wb == a.wb && this.g.Za == a.Za || (c = !0)) : c = b = !0;
        b && this.h.resize(a);
        c && this.i.resize(a);
        this.g && this.g.U == a.U && this.g.Fa == a.Fa || this.j.setAttribute("x", this.i.G.x);
        this.g && this.g.qa == a.qa && this.g.Ja == a.Ja || this.j.setAttribute("y", this.h.G.y);
        this.g = a
    }
};
Wg.prototype.set = function(a, b) {
    var c = {},
        d = a * this.h.g,
        e = b * this.i.g,
        f = this.i.i;
    c.x = Zg(d, this.h.i);
    c.y = Zg(e, f);
    this.o.tc(c);
    $g(this.h, d);
    $g(this.i, e)
};

function Zg(a, b) {
    var c = a / b;
    return isNaN(c) ? 0 : c
}

function Xg(a, b, c) {
    this.o = a;
    this.D = c || !1;
    this.A = b;
    this.R = null;
    this.u = L("g", {
        "class": "blocklyScrollbar" + (this.A ? "Horizontal" : "Vertical")
    }, null);
    this.h = L("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.u);
    a = Math.floor((R - 5) / 2);
    this.j = L("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.u);
    Yg(this.u, this.o.i);
    this.G = new C(0, 0);
    b ? (this.h.setAttribute("height", R), this.j.setAttribute("height", R - 5), this.j.setAttribute("y", 2.5), this.I = "width", this.Ea = "x") : (this.h.setAttribute("width", R), this.j.setAttribute("width",
        R - 5), this.j.setAttribute("x", 2.5), this.I = "height", this.Ea = "y");
    this.ra = O(this.h, "mousedown", this, this.Th);
    this.va = O(this.j, "mousedown", this, this.Uh)
}
var ah, bh;
Xg.prototype.i = 0;
Xg.prototype.s = 0;
Xg.prototype.F = 0;
Xg.prototype.na = !0;
var R = 15;
Cb && (R = 25);
g = Xg.prototype;
g.B = function() {
    this.ge();
    P(this.ra);
    this.ra = null;
    P(this.va);
    this.va = null;
    E(this.u);
    this.o = this.j = this.h = this.u = null
};

function $g(a, b) {
    a.F = b;
    a.j.setAttribute(a.Ea, a.F)
}

function ch(a, b, c) {
    a.G.x = b;
    a.G.y = c;
    a.u.setAttribute("transform", "translate(" + a.G.x + "," + a.G.y + ")")
}
g.resize = function(a) {
    if (!a && (a = this.o.xa(), !a)) return;
    var b = this.R;
    if (!a || !b || a.U != b.U || a.qa != b.qa || a.Aa != b.Aa || a.wb != b.wb || a.Ja != b.Ja || a.Fa != b.Fa || a.Pa != b.Pa || a.Oa != b.Oa || a.Ya != b.Ya || a.Za != b.Za) {
        this.R = a;
        if (this.A) {
            b = a.U - 1;
            this.D && (b -= R);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.I, this.i);
            b = a.Fa + .5;
            this.D && this.o.m && (b += R);
            ch(this, b, a.Ja + a.qa - R - .5);
            this.D || this.Y(this.i < a.Pa);
            this.g = this.i / a.Pa;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.s = Math.max(0, a.U * this.g);
            this.j.setAttribute(this.I,
                this.s);
            $g(this, dh(this, (a.Aa - a.Ya) * this.g))
        } else {
            b = a.qa - 1;
            this.D && (b -= R);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.I, this.i);
            b = a.Fa + .5;
            this.o.m || (b += a.U - R - 1);
            ch(this, b, a.Ja + .5);
            this.D || this.Y(this.i < a.Oa);
            this.g = this.i / a.Oa;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.s = Math.max(0, a.qa * this.g);
            this.j.setAttribute(this.I, this.s);
            $g(this, dh(this, (a.wb - a.Za) * this.g))
        }
        eh(this)
    }
};
g.Y = function(a) {
    if (a != this.na) {
        if (this.D) throw "Unable to toggle visibility of paired scrollbars.";
        (this.na = a) ? this.u.setAttribute("display", "block"): (this.o.tc({
            x: 0,
            y: 0
        }), this.u.setAttribute("display", "none"))
    }
};
g.Th = function(a) {
    this.ge();
    if (Mg(a)) a.stopPropagation();
    else {
        var b = fh(a, gh(this.o)),
            b = this.A ? b.x : b.y,
            c = hh(this.j, this.o),
            c = this.A ? c.x : c.y,
            d = this.F,
            e = .95 * this.s;
        b <= c ? d -= e : b >= c + this.s && (d += e);
        $g(this, dh(this, d));
        eh(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
g.Uh = function(a) {
    this.ge();
    Mg(a) ? a.stopPropagation() : (this.Ma = this.F, this.Va = this.A ? a.clientX : a.clientY, ah = O(document, "mouseup", this, this.ge), bh = O(document, "mousemove", this, this.Wh), a.stopPropagation(), a.preventDefault())
};
g.Wh = function(a) {
    $g(this, dh(this, this.Ma + ((this.A ? a.clientX : a.clientY) - this.Va)));
    eh(this)
};
g.ge = function() {
    Q(!0);
    ah && (P(ah), ah = null);
    bh && (P(bh), bh = null)
};

function dh(a, b) {
    return b = 0 >= b || isNaN(b) ? 0 : Math.min(b, a.i - a.s)
}

function eh(a) {
    var b = a.F / a.i;
    isNaN(b) && (b = 0);
    var c = {};
    a.A ? c.x = b : c.y = b;
    a.o.tc(c)
}
g.set = function(a) {
    $g(this, dh(this, a * this.g));
    eh(this)
};

function Yg(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function ih() {}
ih.prototype = [];

function Jd(a, b) {
    if (b.Sb) throw "Connection already in database.";
    b.ba.D || (a.splice(jh(a, b), 0, b), b.Sb = !0)
}

function kh(a, b) {
    if (!a.length) return -1;
    var c = jh(a, b);
    if (c >= a.length) return -1;
    for (var d = b.ma, e = c; 0 <= e && a[e].ma == d;) {
        if (a[e] == b) return e;
        e--
    }
    for (; c < a.length && a[c].ma == d;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function jh(a, b) {
    if (!a.length) return 0;
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].ma < b.ma) c = e + 1;
        else if (a[e].ma > b.ma) d = e;
        else {
            c = e;
            break
        }
    }
    return c
}

function sd(a, b) {
    if (!b.Sb) throw "Connection not in database.";
    var c = kh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Sb = !1;
    a.splice(c, 1)
}

function lh(a, b) {
    var c = Hd;

    function d(a) {
        var b = f - e[a].Ua,
            d = h - e[a].ma;
        Math.sqrt(b * b + d * d) <= c && p.push(e[a]);
        return d < c
    }
    for (var e = a, f = b.Ua, h = b.ma, l = 0, m = e.length - 2, n = m; l < n;) e[n].ma < h ? l = n : m = n, n = Math.floor((l + m) / 2);
    var p = [],
        m = l = n;
    if (e.length) {
        for (; 0 <= l && d(l);) l--;
        do m++; while (m < e.length && d(m))
    }
    return p
}

function mh(a, b, c, d) {
    if (!a.length) return {
        H: null,
        yg: c
    };
    var e = b.ma,
        f = b.Ua;
    b.Ua = f + d.x;
    b.ma = e + d.y;
    var h = jh(a, b);
    d = null;
    for (var l = c, m, n = h - 1; 0 <= n && Math.abs(a[n].ma - b.ma) <= c;) m = a[n], b.be(m, l) && (d = m, l = Fd(m, b)), n--;
    for (; h < a.length && Math.abs(a[h].ma - b.ma) <= c;) m = a[h], b.be(m, l) && (d = m, l = Fd(m, b)), h++;
    b.Ua = f;
    b.ma = e;
    return {
        H: d,
        yg: l
    }
};
// Copyright 2015 Google Inc.  Apache License 2.0
function nh(a) {
    this.o = a
}
g = nh.prototype;
g.u = null;
g.yb = 0;
g.Bd = 0;

function oh(a) {
    var b = a.o;
    a.u = L("g", {
        "class": "blocklyZoom"
    }, null);
    var c = String(Math.random()).substring(2),
        d = L("clipPath", {
            id: "blocklyZoomoutClipPath" + c
        }, a.u);
    L("rect", {
        width: 32,
        height: 32,
        y: 77
    }, d);
    var e = L("image", {
        width: ph,
        height: qh,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + c + ")"
    }, a.u);
    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",  b.options.j + rh);
    d = L("clipPath", {
        id: "blocklyZoominClipPath" + c
    }, a.u);
    L("rect", {
        width: 32,
        height: 32,
        y: 43
    }, d);
    var f = L("image", {
        width: ph,
        height: qh,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + c + ")"
    }, a.u);
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + rh);
    d = L("clipPath", {
        id: "blocklyZoomresetClipPath" + c
    }, a.u);
    L("rect", {
        width: 32,
        height: 32
    }, d);
    c = L("image", {
        width: ph,
        height: qh,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + c + ")"
    }, a.u);
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + rh);
    O(c, "mousedown", null, function(a) {
        sh(b, 1);
        if (b.ya) {
            var c = b.xa(),
                d = (c.Pa - c.U) / 2;
            b.V && (d -= b.V.S / 2);
            b.ya.set(d, (c.Oa - c.qa) / 2)
        }
        a.stopPropagation();
        a.preventDefault()
    });
    O(f, "mousedown", null, function(a) {
        th(b, 1);
        a.stopPropagation();
        a.preventDefault()
    });
    O(e, "mousedown", null, function(a) {
        th(b, -1);
        a.stopPropagation();
        a.preventDefault()
    });
    return a.u
}
g.ga = function(a) {
    this.g = 20 + a;
    return this.g + 110
};
g.B = function() {
    this.u && (E(this.u), this.u = null);
    this.o = null
};
g.position = function() {
    var a = this.o.xa();
    a && (this.o.m ? (this.yb = 20 + R, 2 == a.$ && (this.yb += a.Nd, this.o.P && (this.yb += a.Fa))) : (this.yb = a.U + a.Fa - 32 - 20 - R, 3 == a.$ && (this.yb -= a.Nd)), this.Bd = a.qa + a.Ja - 110 - this.g, 1 == a.$ && (this.Bd -= a.eg), this.u.setAttribute("transform", "translate(" + this.yb + "," + this.Bd + ")"))
};

function uh(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        d = !1,
        e = !1,
        f = !1,
        h = !1,
        l = !1,
        m = !1;
    else {
        var n = a.toolbox;
        n ? ("string" != typeof n && ("undefined" == typeof XSLTProcessor && n.outerHTML ? n = n.outerHTML : n instanceof Element || (n = null)), "string" == typeof n && (n = rg(n))) : n = null;
        c = n;
        d = !(!c || !c.getElementsByTagName("category").length);
        e = a.trashcan;
        void 0 === e && (e = d);
        f = a.collapse;
        void 0 === f && (f = d);
        h = a.comments;
        void 0 === h && (h = d);
        l = a.disable;
        void 0 === l && (l = d);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 ===
        p && (p = !1);
    var q = a.toolboxPosition,
        q = "end" === q ? !1 : !0,
        A = a.scrollbars;
    void 0 === A && (A = d);
    var w = a.css;
    void 0 === w && (w = !0);
    var v = "https://blockly-demo.appspot.com/static/media/";
    a.media ? v = a.media : a.path && (v = a.path + "media/");
    this.m = n;
    this.D = f;
    this.R = h;
    this.I = l;
    this.i = b;
    this.F = a.maxBlocks || Infinity;
    this.j = v;
    this.ra = d;
    this.G = A;
    this.Ma = e;
    this.Ea = m;
    this.va = w;
    this.Rb = p;
    this.A = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.Bp = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.Hp = 0 < c.spacing && !!b.snap;
    this.h = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.li = void 0 === a.wheel ? !1 : !!a.wheel;
    b.gi = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.pd = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.qd = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.bi = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.g = b;
    this.$ = p ? q ? 0 : 1 : q == n ? 3 : 2
}
uh.prototype.tb = null;
uh.prototype.tc = function() {};
uh.prototype.xa = function() {
    return null
};
// Copyright 2014 Google Inc.  Apache License 2.0
function vh(a) {
    vh.w.constructor.call(this, a);
    this.xa = a.xa;
    this.tc = a.tc;
    a = [];
    a[1] = new ih;
    a[2] = new ih;
    a[3] = new ih;
    a[4] = new ih;
    this.R = a;
    this.F = Object.create(null)
}
u(vh, bg);
g = vh.prototype;
g.N = !0;
g.Ye = !1;
g.Ze = !1;
g.scrollX = 0;
g.scrollY = 0;
g.vf = 0;
g.wf = 0;
g.ag = null;
g.scale = 1;
g.Qa = null;
g.ya = null;
g.sg = null;

function wh(a, b) {
    a.u = L("g", {
        "class": "blocklyWorkspace"
    }, null);
    b && (a.h = L("rect", {
        height: "100%",
        width: "100%",
        "class": b
    }, a.u), "blocklyMainBackground" == b && (a.h.style.fill = "url(#" + a.options.s.id + ")"));
    a.g = L("g", {
        "class": "blocklyBlockCanvas"
    }, a.u);
    a.i = L("g", {
        "class": "blocklyBubbleCanvas"
    }, a.u);
    var c = R;
    a.options.Ma && (c = xh(a, c));
    a.options.g && a.options.g.controls && (c = yh(a, c));
    O(a.u, "mousedown", a, a.Wc);
    O(a.u, "touchstart", null, function(b) {
        zh(b, a)
    });
    a.options.g && a.options.g.li && O(a.u, "wheel", a, a.Xh);
    a.options.ra ?
        a.P = new Ah(a) : a.options.A && Bh(a);
    Ch(a);
    return a.u
}
g.B = function() {
    this.N = !1;
    vh.w.B.call(this);
    this.u && (E(this.u), this.u = null);
    this.i = this.g = null;
    this.P && (this.P.B(), this.P = null);
    this.V && (this.V.B(), this.V = null);
    this.Qa && (this.Qa.B(), this.Qa = null);
    this.ya && (this.ya.B(), this.ya = null);
    this.A && (this.A.B(), this.A = null);
    this.options.tb || E(gh(this))
};
g.rd = function(a, b) {
    return new S(this, a, b)
};

function xh(a, b) {
    a.Qa = new Tg(a);
    var c = a.Qa;
    c.u = L("g", {
        "class": "blocklyTrash"
    }, null);
    var d = String(Math.random()).substring(2),
        e = L("clipPath", {
            id: "blocklyTrashBodyClipPath" + d
        }, c.u);
    L("rect", {
        width: 47,
        height: 44,
        y: 16
    }, e);
    L("image", {
        width: ph,
        x: -0,
        height: qh,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath" + d + ")"
    }, c.u).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",   c.o.options.j + rh);
    e = L("clipPath", {
        id: "blocklyTrashLidClipPath" + d
    }, c.u);
    L("rect", {
        width: 47,
        height: 16
    }, e);
    c.ke = L("image", {
        width: ph,
        x: -0,
        height: qh,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath" + d + ")"
    }, c.u);
    c.ke.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",    c.o.options.j + rh);
    O(c.u, "mouseup", c, c.Mg);
    c.ze();
    a.u.insertBefore(c.u, a.g);
    return a.Qa.ga(b)
}

function yh(a, b) {
    a.A = new nh(a);
    var c = oh(a.A);
    a.u.appendChild(c);
    return a.A.ga(b)
}

function Bh(a) {
    a.V = new Dh({
        dd: a.options.dd,
        tb: a,
        m: a.m,
        Rb: a.Rb,
        $: a.options.$
    });
    a.V.ad = !1;
    var b = Eh(a.V);
    a.u.insertBefore(b, a.g)
}

function xg(a) {
    a.ya && a.ya.resize()
}
g.resize = function() {
    this.P && this.P.position();
    this.V && this.V.position();
    this.Qa && this.Qa.position();
    this.A && this.A.position();
    this.ya && this.ya.resize()
};

function gh(a) {
    if (a.Ea) return a.Ea;
    for (var b = a.u; b;) {
        if ("svg" == b.tagName) return a.Ea = b;
        b = b.parentNode
    }
    return null
}
g.translate = function(a, b) {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.g.setAttribute("transform", c);
    this.i.setAttribute("transform", c)
};
g.hb = function() {
    var a = this.xa();
    return a ? a.U / this.scale : 0
};
g.Y = function(a) {
    gh(this).style.display = a ? "block" : "none";
    this.P && (this.P.zb.style.display = a ? "block" : "none");
    a ? (this.X(), this.P && this.P.position()) : Q(!0)
};
g.X = function() {
    for (var a = this.Lb(), b = a.length - 1; 0 <= b; b--) a[b].X(!1)
};

function Fh(a, b) {
    a.yf = b;
    a.va && (P(a.va), a.va = null);
    b && (a.va = O(a.g, "blocklySelectChange", a, function() {
        this.yf = !1
    }))
}

function Gh(a) {
    var b = T;
    b.yf && 0 != K && Fh(b, !1);
    if (b.yf) {
        var c = null;
        if (a && (c = b.qb[a] || null, !c)) return;
        Fh(b, !1);
        c ? c.select() : U && Hh(U);
        setTimeout(function() {
            Fh(b, !0)
        }, 1)
    }
}

function Ih(a) {
    var b = Jh;
    if (a.N && !(b.getElementsByTagName("block").length >= hg(a))) {
        Kh();
        I++;
        var c = Bd(b, a),
            d = parseInt(b.getAttribute("x"), 10),
            b = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(d) && !isNaN(b)) {
            a.m && (d = -d);
            do {
                for (var e = !1, f = a.Lb(), h = 0, l; l = f[h]; h++)
                    if (l = l.aa(), 1 >= Math.abs(d - l.x) && 1 >= Math.abs(b - l.y)) {
                        e = !0;
                        break
                    }
                if (!e)
                    for (f = c.sb(!1), h = 0; l = f[h]; h++)
                        if (mh(l.cd, l, Hd, new C(d, b)).H) {
                            e = !0;
                            break
                        }
                e && (d = a.m ? d - Hd : d + Hd, b += 2 * Hd)
            } while (e);
            c.moveBy(d, b)
        }
        I--;
        0 == I && !c.i && J(new ag(c));
        c.select()
    }
}

function Lh(a, b) {
    var c = new C(b.clientX, b.clientY);
    if (a.na) {
        if (a.na.contains(c)) return Ug(a.Qa, !0), Og(Mh), !0;
        Ug(a.Qa, !1)
    }
    if (a.I && a.I.contains(c)) return Og(Mh), !0;
    Og(Pg);
    return !1
}
g.Wc = function(a) {
    this.Pc();
    Ng(a) || (Kh(), Q(), a.target && a.target.nodeName && ("svg" == a.target.nodeName.toLowerCase() || a.target == this.h) && U && !this.options.i && Hh(U), Mg(a) ? Nh(this, a) : this.ya && (this.Ze = !0, this.Va = a.clientX, this.pb = a.clientY, this.Ma = this.xa(), this.vf = this.scrollX, this.wf = this.scrollY, "mouseup" in Oh && (Ph = Ph || [], Ph = Ph.concat(O(document, "mouseup", null, Qh))), bd = bd || [], bd = bd.concat(O(document, "mousemove", null, Rh))), a.stopPropagation(), a.preventDefault())
};

function Qg(a, b, c) {
    b = fh(b, gh(a));
    b.x /= a.scale;
    b.y /= a.scale;
    a.ag = Hc(c, b)
}

function Rg(a, b) {
    var c = fh(b, gh(a));
    c.x /= a.scale;
    c.y /= a.scale;
    var d = a.ag;
    return new C(d.x + c.x, d.y + c.y)
}
g.Xh = function(a) {
    Kh();
    var b = 0 < a.deltaY ? -1 : 1,
        c = fh(a, gh(this));
    Sh(this, c.x, c.y, b);
    a.preventDefault()
};
g.uh = function() {
    G(!0);
    for (var a = fg(this, !0), b = 0, c = 0, d; d = a[c]; c++) {
        var e = d.aa();
        d.moveBy(-e.x, b - e.y);
        Th(d);
        b = d.aa().y + Uh(d).height + 25
    }
    G(!1);
    xg(this)
};

function Nh(a, b) {
    function c(a) {
        if (og(a)) A = A.concat(a.Wa());
        else {
            a = a.hc();
            for (var b = 0; b < a.length; b++) c(a[b])
        }
    }

    function d() {
        G(h);
        var a = A.shift();
        a && (a.v ? (a.B(!1, !0), setTimeout(d, 10)) : d());
        G(!1)
    }
    if (!a.options.i && !a.Ye) {
        var e = [],
            f = fg(a, !0),
            h = cg(),
            l = {};
        l.text = V.lh;
        l.enabled = 0 < a.s.length;
        l.Na = a.zf.bind(a, !1);
        e.push(l);
        l = {};
        l.text = V.jh;
        l.enabled = 0 < a.G.length;
        l.Na = a.zf.bind(a, !0);
        e.push(l);
        a.ya && (l = {}, l.text = V.Ng, l.enabled = 1 < f.length, l.Na = a.uh.bind(a), e.push(l));
        if (a.options.D) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p =
                        f[n]; p;) p.j ? l = !0 : m = !0, p = jd(p);
            var q = function(a) {
                    for (var b = 0, c = 0; c < f.length; c++)
                        for (var d = f[c]; d;) setTimeout(d.rc.bind(d, a), b), d = jd(d), b += 10
                },
                m = {
                    enabled: m
                };
            m.text = V.Og;
            m.Na = function() {
                q(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = V.Yg;
            l.Na = function() {
                q(!1)
            };
            e.push(l)
        }
        for (var A = [], n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == A.length ? V.Af : V.Bf.replace("%1", String(A.length)),
            enabled: 0 < A.length,
            Na: function() {
                (2 > A.length || window.confirm(V.Ug.replace("%1", String(A.length)))) && d()
            }
        };
        e.push(l);
        Tf.show(b, e, a.m)
    }
}

function Vh(a, b, c) {
    if (b.length) {
        try {
            var d = new window.Audio
        } catch (m) {
            return
        }
        for (var e, f = 0; f < b.length; f++) {
            var h = b[f],
                l = h.match(/\.(\w+)$/);
            if (l && d.canPlayType("audio/" + l[1])) {
                e = new window.Audio(h);
                break
            }
        }
        e && e.play && (a.F[c] = e)
    }
}

function Wh(a, b, c) {
    var d = a.F[b];
    d ? (b = new Date, b - a.sg < Xh || (a.sg = b, a = xb && 9 === xb || pb || nb ? d : d.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play())) : a.options.tb && Wh(a.options.tb, b, c)
}
g.Pc = function() {
    this.options.tb ? this.options.tb.Pc() : Yh = this
};

function Sh(a, b, c, d) {
    var e = a.options.g.bi,
        f = a.xa(),
        h = gh(a).createSVGPoint();
    h.x = b;
    h.y = c;
    h = h.matrixTransform(a.g.getCTM().inverse());
    b = h.x;
    c = h.y;
    h = a.g;
    e = 1 == d ? e : 1 / e;
    d = a.scale * e;
    d > a.options.g.pd ? e = a.options.g.pd / a.scale : d < a.options.g.qd && (e = a.options.g.qd / a.scale);
    a.scale != d && (a.ya && (b = h.getCTM().translate(b * (1 - e), c * (1 - e)).scale(e), a.scrollX = b.e - f.Fa, a.scrollY = b.f - f.Ja), sh(a, d))
}

function th(a, b) {
    var c = a.xa();
    Sh(a, c.U / 2, c.qa / 2, b)
}

function sh(a, b) {
    a.options.g.pd && b > a.options.g.pd ? b = a.options.g.pd : a.options.g.qd && b < a.options.g.qd && (b = a.options.g.qd);
    a.scale = b;
    Ch(a);
    a.ya ? a.ya.resize() : a.translate(a.scrollX, a.scrollY);
    Q(!1);
    a.V && a.V.gf()
}

function Ch(a) {
    if (a.options.s) {
        var b = a.options.h.spacing * a.scale || 100;
        a.options.s.setAttribute("width", b);
        a.options.s.setAttribute("height", b);
        var b = Math.floor(a.options.h.spacing / 2) + .5,
            c = b - a.options.h.length / 2,
            d = b + a.options.h.length / 2,
            e = a.options.s.firstChild,
            f = e && e.nextSibling,
            b = b * a.scale,
            c = c * a.scale,
            d = d * a.scale;
        e && (e.setAttribute("stroke-width", a.scale), e.setAttribute("x1", c), e.setAttribute("y1", b), e.setAttribute("x2", d), e.setAttribute("y2", b));
        f && (f.setAttribute("stroke-width", a.scale), f.setAttribute("x1",
            b), f.setAttribute("y1", c), f.setAttribute("x2", b), f.setAttribute("y2", d))
    }
}
vh.prototype.setVisible = vh.prototype.Y;
// Copyright 2013 Google Inc.  Apache License 2.0
function Zh(a) {
    this.sa = a
}
g = Zh.prototype;
g.Hf = !0;
g.ea = null;
g.Oc = null;

function $h(a) {
    a.g || (a.g = L("g", {
        "class": "blocklyIconGroup"
    }, null), a.cg(a.g), a.sa.W().appendChild(a.g), O(a.g, "mouseup", a, a.Rh), a.vc())
}
g.B = function() {
    E(this.g);
    this.g = null;
    this.Y(!1);
    this.sa = null
};
g.vc = function() {
    this.sa.D || !pg(this.sa) ? Vf(this.g, "blocklyIconGroupReadonly") : ai(this.g, "blocklyIconGroupReadonly")
};
g.Rh = function(a) {
    2 != K && (this.sa.D || Mg(a) || this.Y(!this.ea))
};
g.Yb = function() {
    if (this.ea) {
        var a = this.ea,
            b = this.sa.bd;
        a.i.setAttribute("fill", b);
        a.j.setAttribute("fill", b)
    }
};

function bi(a) {
    var b = a.sa.aa(),
        c = Nd(a.g),
        b = new C(b.x + c.x + 8.5, b.y + c.y + 8.5);
    Gc(a.Oc, b) || (a.Oc = b, a.ea && (a = a.ea, a.cc = b, a.ud && Eg(a)))
};
k.Blockly || (k.Blockly = {});
k.Blockly.Mutator || (k.Blockly.Mutator = {});
k.Blockly.Mutator.reconnect = function(a, b, c) {
    if (!a || !a.ba.v) return !1;
    c = Ag(b, c).H;
    var d = F(a);
    return d && d != b || c.K == a ? !1 : (c.K && fd(c), c.connect(a), !0)
};
var ci = {};

function di(a) {
    di.w.constructor.call(this, a);
    $h(this)
}
u(di, Zh);
g = di.prototype;
g.ha = "";
g.S = 160;
g.ne = 80;
g.cg = function(a) {
    L("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    L("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.405 0.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25 -1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    L("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};

function ei(a) {
    a.i = L("foreignObject", {
        x: Fg,
        y: Fg
    }, null);
    var b = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    b.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    b.className = "blocklyMinimalBody";
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", a.sa.m ? "RTL" : "LTR");
    b.appendChild(c);
    a.h = c;
    a.i.appendChild(b);
    O(c, "mouseup", a, a.ki);
    O(c, "wheel", a, function(a) {
        a.stopPropagation()
    });
    O(c, "change", a, function() {
        this.ha !=
            c.value && (J(new fi(this.sa, "comment", null, this.ha, c.value)), this.ha = c.value)
    });
    setTimeout(function() {
        c.focus()
    }, 0);
    return a.i
}
g.vc = function() {
    this.ea && (this.Y(!1), this.Y(!0));
    Zh.prototype.vc.call(this)
};
g.Hg = function() {
    if (this.ea) {
        var a = Sg(this.ea),
            b = 2 * Fg;
        this.i.setAttribute("width", a.width - b);
        this.i.setAttribute("height", a.height - b);
        this.h.style.width = a.width - b - 4 + "px";
        this.h.style.height = a.height - b - 4 + "px"
    }
};
g.Y = function(a) {
    if (a != !!this.ea)
        if (J(new gi(this.sa, "commentOpen", 0, a)), !pg(this.sa) && !this.h || y) hi.prototype.Y.call(this, a);
        else {
            var b = this.h ? this.h.value : this.ha,
                c = mg(this);
            a ? (this.ea = new Bg(this.sa.v, ei(this), this.sa.I, this.Oc, this.S, this.ne), this.ea.jf = this.Hg.bind(this), this.Yb()) : (this.ea.B(), this.i = this.h = this.ea = null);
            ii(this, b);
            yg(this, c.width, c.height)
        }
};
g.ki = function() {
    Lg(this.ea);
    this.h.focus()
};

function mg(a) {
    return a.ea ? Sg(a.ea) : {
        width: a.S,
        height: a.ne
    }
}

function yg(a, b, c) {
    a.h ? Gg(a.ea, b, c) : (a.S = b, a.ne = c)
}

function ii(a, b) {
    a.ha != b && (J(new fi(a.sa, "comment", null, a.ha, b)), a.ha = b);
    a.h && (a.h.value = b)
}
g.B = function() {
    0 == I && ii(this, "");
    this.sa.oa = null;
    Zh.prototype.B.call(this)
};
var ji = !1,
    ki = 0,
    li = 0,
    mi = 0,
    ni = 0,
    oi = null,
    pi = null,
    W = null;

function qi(a) {
    O(a, "mouseover", null, ri);
    O(a, "mouseout", null, si);
    O(a, "mousemove", null, ti)
}

function ri(a) {
    for (a = a.target; !r(a.vb) && !fa(a.vb);) a = a.vb;
    oi != a && (ui(), pi = null, oi = a);
    clearTimeout(ki)
}

function si() {
    ki = setTimeout(function() {
        pi = oi = null;
        ui()
    }, 1);
    clearTimeout(li)
}

function ti(a) {
    if (oi && oi.vb && 0 == K && !Zf)
        if (ji) {
            var b = mi - a.pageX;
            a = ni - a.pageY;
            10 < Math.sqrt(b * b + a * a) && ui()
        } else pi != oi && (clearTimeout(li), mi = a.pageX, ni = a.pageY, li = setTimeout(vi, 750))
}

function ui() {
    ji && (ji = !1, W && (W.style.display = "none"));
    clearTimeout(li)
}

function vi() {
    pi = oi;
    if (W) {
        Sc(W);
        for (var a = oi.vb; fa(a);) a = a();
        var b = a,
            a = 50;
        if (b.length <= a) a = b;
        else {
            for (var c = b.trim().split(/\s+/), d = 0; d < c.length; d++) c[d].length > a && (a = c[d].length);
            var e, d = -Infinity,
                f, h = 1;
            do {
                e = d;
                f = b;
                for (var b = [], l = c.length / h, m = 1, d = 0; d < c.length - 1; d++) m < (d + 1.5) / l ? (m++, b[d] = !0) : b[d] = !1;
                for (var b = wi(c, b, a), d = xi(c, b, a), l = c, m = [], n = 0; n < l.length; n++) m.push(l[n]), void 0 !== b[n] && m.push(b[n] ? "\n" : " ");
                b = m.join("");
                h++
            } while (d > e);
            a = f
        }
        a = a.split("\n");
        for (c = 0; c < a.length; c++) e = document.createElement("div"),
            e.appendChild(document.createTextNode(a[c])), W.appendChild(e);
        a = oi.m;
        c = Nc();
        W.style.direction = a ? "rtl" : "ltr";
        W.style.display = "block";
        ji = !0;
        e = mi;
        e = a ? e - (0 + W.offsetWidth) : e + 0;
        f = ni + 10;
        f + W.offsetHeight > c.height + window.scrollY && (f -= W.offsetHeight + 20);
        a ? e = Math.max(5 - window.scrollX, e) : e + W.offsetWidth > c.width + window.scrollX - 10 && (e = c.width - W.offsetWidth - 10);
        W.style.top = f + "px";
        W.style.left = e + "px"
    }
}

function xi(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1] ++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function wi(a, b, c) {
    for (var d = xi(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var h = [].concat(b);
            h[f] = !h[f];
            h[f + 1] = !h[f + 1];
            var l = xi(a, h, c);
            l > d && (d = l, e = h)
        }
    return e ? wi(a, e, c) : b
};

function yi(a, b) {
    this.j = new Bc(0, 25);
    this.fb(a);
    this.me = b
}
var zi = null,
    Ai = 0;
g = yi.prototype;
g.name = void 0;
g.ha = "";
g.M = null;
g.wc = !0;
g.me = null;
g.xc = !0;
g.ga = function() {
    this.g || (this.g = L("g", {}, null), this.wc || (this.g.style.display = "none"), this.A = L("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.g), this.h = L("text", {
        "class": "blocklyText",
        y: this.j.height - 12.5
    }, this.g), this.vc(), this.M.W().appendChild(this.g), this.F = O(this.g, "mouseup", this, this.Ig), Bi(this), 0 == I && J(new fi(this.M, "field", this.name, "", this.Ob())))
};
g.B = function() {
    this.F && (P(this.F), this.F = null);
    this.M = null;
    E(this.g);
    this.me = this.A = this.h = this.g = null
};
g.vc = function() {
    this.xc && this.M && (pg(this.M) ? (Vf(this.g, "blocklyEditableText"), ai(this.g, "blocklyNoNEditableText"), this.g.style.cursor = this.Tg) : (Vf(this.g, "blocklyNonEditableText"), ai(this.g, "blocklyEditableText"), this.g.style.cursor = ""))
};
g.Y = function(a) {
    if (this.wc != a) {
        this.wc = a;
        var b = this.W();
        b && (b.style.display = a ? "block" : "none", this.oe())
    }
};
g.W = function() {
    return this.g
};
g.oe = function() {
    if (this.wc && this.h) {
        var a = this.h.textContent + "\n" + this.h.className.baseVal;
        if (zi && zi[a]) var b = zi[a];
        else {
            try {
                b = this.h.getComputedTextLength()
            } catch (c) {
                b = 8 * this.h.textContent.length
            }
            zi && (zi[a] = b)
        }
        this.A && this.A.setAttribute("width", b + 10)
    } else b = 0;
    this.j.width = b
};

function tg() {
    Ai++;
    zi || (zi = {})
}

function ug() {
    Ai--;
    Ai || (zi = null)
}

function Ci(a) {
    var b = a.A.getBBox();
    return new Bc(b.width * a.M.v.scale, b.height * a.M.v.scale)
}
g.Zb = function(a) {
    null !== a && (a = String(a), a !== this.ha && (this.ha = a, Bi(this), this.M && this.M.N && (this.M.X(), Ed(this.M))))
};

function Bi(a) {
    if (a.h) {
        var b = a.ha;
        50 < b.length && (b = b.substring(0, 48) + "\u2026");
        Sc(a.h);
        b = b.replace(/\s/g, "\u00a0");
        a.M.m && b && (b += "\u200f");
        b || (b = "\u00a0");
        a.h.appendChild(document.createTextNode(b));
        a.j.width = 0
    }
}
g.Ob = function() {
    return this.ha
};
g.fb = function(a) {
    if (null !== a) {
        var b = this.Ob();
        b != a && (this.M && 0 == I && J(new fi(this.M, "field", this.name, b, a)), this.Zb(a))
    }
};
g.Ig = function(a) {
    if (!ob && !pb || B("537.51.2") || 0 === a.layerX || 0 === a.layerY) Mg(a) || 2 != K && pg(this.M) && Di(this)
};

function Ei(a, b) {
    this.j = new Bc(0, 17.5);
    this.i = b;
    this.fb(a)
}
u(Ei, yi);
Ei.prototype.xc = !1;
Ei.prototype.ga = function() {
    this.h || (this.h = L("text", {
        "class": "blocklyText",
        y: this.j.height - 5
    }, null), this.i && Vf(this.h, this.i), this.wc || (this.h.style.display = "none"), this.M.W().appendChild(this.h), this.h.vb = this.M, qi(this.h), Bi(this))
};
Ei.prototype.B = function() {
    E(this.h);
    this.h = null
};
Ei.prototype.W = function() {
    return this.h
};

function Fi(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.g = c;
    this.H = d;
    this.Ca = []
}
g = Fi.prototype;
g.align = -1;
g.pe = !0;

function Gi(a, b, c) {
    if (!b && !c) return a;
    r(b) && (b = new Ei(b));
    b.M = a.g;
    a.g.N && b.ga();
    b.name = c;
    b.I && Gi(a, b.I);
    a.Ca.push(b);
    b.R && Gi(a, b.R);
    a.g.N && (a.g.X(), Ed(a.g));
    return a
}
g.Y = function(a) {
    var b = [];
    if (this.pe == a) return b;
    for (var c = (this.pe = a) ? "block" : "none", d = 0, e; e = this.Ca[d]; d++) e.Y(a);
    if (this.H) {
        if (a) b = Pd(this.H);
        else if (d = this.H, Qd(d, !0), d.K)
            for (d = F(d).Wa(), e = 0; e < d.length; e++) {
                for (var f = d[e], h = f.sb(!0), l = 0; l < h.length; l++) Qd(h[l], !0);
                f = Hi(f);
                for (h = 0; h < f.length; h++) f[h].Y(!1)
            }
        if (d = F(this.H)) d.W().style.display = c, a || (d.N = !1)
    }
    return b
};

function Ii(a) {
    a.align = 1;
    a.g.N && a.g.X();
    return a
}
g.ga = function() {
    if (this.g.v.N)
        for (var a = 0; a < this.Ca.length; a++) this.Ca[a].ga()
};
g.B = function() {
    for (var a = 0, b; b = this.Ca[a]; a++) b.B();
    this.H && this.H.B();
    this.g = null
};

function hi(a) {
    hi.w.constructor.call(this, a);
    $h(this);
    this.ha = {}
}
u(hi, Zh);
hi.prototype.Hf = !1;
hi.prototype.cg = function(a) {
    L("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    L("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    L("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
hi.prototype.Y = function(a) {
    if (a != !!this.ea)
        if (J(new gi(this.sa, "warningOpen", 0, a)), a) {
            var b = Ji(this);
            a = L("text", {
                "class": "blocklyText blocklyBubbleText",
                y: Fg
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) L("tspan", {
                dy: "1em",
                x: Fg
            }, a).appendChild(document.createTextNode(b[c]));
            this.ea = new Bg(this.sa.v, a, this.sa.I, this.Oc, null, null);
            if (this.sa.m)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + Fg);
            this.Yb();
            a = Sg(this.ea);
            Gg(this.ea,
                a.width, a.height)
        } else this.ea.B(), this.ea = null
};

function Ki(a, b, c) {
    a.ha[c] != b && (b ? a.ha[c] = b : delete a.ha[c], a.ea && (a.Y(!1), a.Y(!0)))
}

function Ji(a) {
    var b = [],
        c;
    for (c in a.ha) b.push(a.ha[c]);
    return b.join("\n")
}
hi.prototype.B = function() {
    this.sa.Xa = null;
    Zh.prototype.B.call(this)
};

function gg(a, b, c) {
    this.id = c && !a.qb[c] ? c : cg();
    a.qb[this.id] = this;
    this.L = this.g = this.J = null;
    this.h = [];
    this.R = void 0;
    this.disabled = !1;
    this.vb = "";
    this.F = null;
    this.G = [];
    this.yc = this.zc = this.Fe = !0;
    this.j = this.i = !1;
    this.oa = null;
    this.$c = new C(0, 0);
    this.v = a;
    this.D = a.Ye;
    this.m = a.m;
    if (b) {
        this.type = b;
        b = ci[b];
        for (var d in b) this[d] = b[d]
    }
    a.j.push(this);
    fa(this.ga) && this.ga();
    this.ue = this.R;
    0 == I && J(new ag(this));
    fa(this.onchange) && (this.$b = this.onchange.bind(this), this.v.Bc(this.$b))
}
g = gg.prototype;
g.data = null;
g.bd = "#000000";
g.B = function(a) {
    this.$b && this.v.ie(this.$b);
    Dd(this, a);
    0 == I && J(new Li(this));
    I++;
    this.v && (eg(this.v, this), delete this.v.qb[this.id], this.v = null);
    for (a = this.G.length - 1; 0 <= a; a--) this.G[a].B(!1);
    a = 0;
    for (var b; b = this.h[a]; a++) b.B();
    this.h.length = 0;
    b = this.sb(!0);
    for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.K && fd(c);
        b[a].B()
    }
    I--
};

function Dd(a, b) {
    if (a.J) a.J.K && fd(a.J);
    else if (a.L) {
        var c = null;
        a.L.K && (c = a.L.K, fd(a.L));
        var d = jd(a);
        b && d && (d = a.g.K, fd(d), c && kd(c, d) && c.connect(d))
    }
}
g.sb = function() {
    var a = [];
    this.J && a.push(this.J);
    this.L && a.push(this.L);
    this.g && a.push(this.g);
    for (var b = 0, c; c = this.h[b]; b++) c.H && a.push(c.H);
    return a
};

function Ed(a) {
    if (a.v && 0 == K) {
        var b = Gd(a);
        if (!b.D) {
            a = a.sb(!1);
            for (var c = 0, d; d = a[c]; c++) {
                d.K && vd(d) && Ed(F(d));
                var e;
                e = lh(d.cd, d);
                for (var f = 0, h; h = e[f]; f++) d.K && h.K || Gd(h.ba) != b && (vd(d) ? nd(h, d) : nd(d, h))
            }
        }
    }
}
g.getParent = function() {
    return this.F
};

function Mi(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (jd(a) == b);
    return a
}

function jd(a) {
    return a.g && F(a.g)
}

function Gd(a) {
    var b = a;
    do a = b, b = a.F; while (b);
    return a
}
g.hc = function() {
    return this.G
};
g.zd = function(a) {
    if (a != this.F) {
        if (this.F) {
            for (var b = this.F.G, c, d = 0; c = b[d]; d++)
                if (c == this) {
                    b.splice(d, 1);
                    break
                }
            if (this.L && this.L.K) throw "Still connected to previous block.";
            if (this.J && this.J.K) throw "Still connected to parent block.";
            this.F = null
        } else eg(this.v, this);
        (this.F = a) ? a.G.push(this): this.v.j.push(this)
    }
};
g.Wa = function() {
    for (var a = [this], b, c = 0; b = this.G[c]; c++) a.push.apply(a, b.Wa());
    return a
};

function og(a) {
    return a.Fe && !a.i && !(a.v && a.v.options.i)
}

function xd(a) {
    return a.zc && !a.i && !(a.v && a.v.options.i)
}
g.nf = function(a) {
    this.zc = a
};
g.tf = function(a) {
    this.i = a
};

function pg(a) {
    return a.yc && !(a.v && a.v.options.i)
}
g.mf = function(a) {
    this.yc = a;
    a = 0;
    for (var b; b = this.h[a]; a++)
        for (var c = 0, d; d = b.Ca[c]; c++) d.vc()
};

function wg(a, b) {
    if (!b && a.j) {
        if (a.J && Qd(a.J, b), a.L && Qd(a.L, b), a.g) {
            Qd(a.g, b);
            var c = F(a.g);
            c && wg(c, b)
        }
    } else
        for (var d = a.sb(!0), e = 0; c = d[e]; e++) Qd(c, b), vd(c) && (c = F(c)) && wg(c, b)
}
g.Xc = function(a) {
    var b = parseFloat(a);
    if (isNaN(b))
        if (r(a) && a.match(/^#[0-9a-fA-F]{6}$/)) this.bd = a;
        else throw "Invalid colour: " + a;
    else this.bd = Ni(Oi(b))
};

function zg(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ca[e]; e++)
            if (f.name === b) return f;
    return null
}
g.sf = function(a, b) {
    a ? (void 0 === b && (b = null), this.L || (this.L = this.od(4)), Cd(this.L, b)) : this.L && (this.L.B(), this.L = null)
};
g.pf = function(a, b) {
    a ? (void 0 === b && (b = null), this.g || (this.g = this.od(3)), Cd(this.g, b)) : this.g && (this.g.B(), this.g = null)
};
g.qf = function(a, b) {
    a ? (void 0 === b && (b = null), this.J || (this.J = this.od(2)), Cd(this.J, b)) : this.J && (this.J.B(), this.J = null)
};
g.Uc = function(a) {
    this.R != a && (J(new fi(this, "inline", null, this.R, a)), this.R = a)
};

function Pi(a) {
    if (void 0 != a.R) return a.R;
    for (var b = 1; b < a.h.length; b++)
        if (5 == a.h[b - 1].type && 5 == a.h[b].type) return !1;
    for (b = 1; b < a.h.length; b++)
        if (1 == a.h[b - 1].type && 5 == a.h[b].type) return !0;
    return !1
}
g.Tc = function(a) {
    this.disabled != a && (J(new fi(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function Qi(a) {
    for (;;) {
        a = Mi(a);
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.rc = function(a) {
    this.j != a && (J(new fi(this, "collapsed", null, this.j, a)), this.j = a)
};
g.toString = function(a) {
    var b = [];
    if (this.j) b.push(Ag(this, "_TEMP_COLLAPSED_INPUT").Ca[0].ha);
    else
        for (var c = 0, d; d = this.h[c]; c++) {
            for (var e = 0, f; f = d.Ca[e]; e++) b.push(f.ha);
            d.H && ((d = F(d.H)) ? b.push(d.toString()) : b.push("?"))
        }
    b = qa(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};
g.Bb = function(a, b) {
    var c = null;
    if (1 == a || 3 == a) c = this.od(a);
    c = new Fi(a, b, this, c);
    this.h.push(c);
    return c
};
g.hf = function(a) {
    for (var b = 0, c; c = this.h[b]; b++)
        if (c.name == a) {
            c.H && c.H.K && (c.H.ub = null, a = F(c.H), a.i ? a.B() : Dd(a));
            c.B();
            this.h.splice(b, 1);
            break
        }
};

function Ag(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        if (d.name == b) return d;
    return null
}
g.gg = function() {
    return this.oa || ""
};
g.vd = function(a) {
    this.oa != a && (J(new fi(this, "comment", null, this.oa, a || "")), this.oa = a)
};
g.Ta = function() {};
g.aa = function() {
    return this.$c
};
g.moveBy = function(a, b) {
    var c = new pd(this);
    this.$c.translate(a, b);
    rd(c);
    J(c)
};
g.od = function(a) {
    return new dd(this, a)
};

function S(a, b, c) {
    this.u = L("g", {}, null);
    this.Ea = L("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.u);
    this.I = L("path", {
        "class": "blocklyPath"
    }, this.u);
    this.va = L("path", {
        "class": "blocklyPathLight"
    }, this.u);
    this.I.vb = this;
    this.N = !1;
    qi(this.I);
    S.w.constructor.call(this, a, b, c)
}
u(S, gg);
g = S.prototype;
g.height = 0;
g.width = 0;
g.ed = null;
g.md = function() {
    for (var a = 0, b; b = this.h[a]; a++) b.ga();
    b = Hi(this);
    for (a = 0; a < b.length; a++) $h(b[a]);
    this.Yb();
    Ri(this);
    if (!this.v.options.i && !this.se) {
        O(this.W(), "mousedown", this, this.Wc);
        var c = this;
        O(this.W(), "touchstart", null, function(a) {
            zh(a, c)
        })
    }
    this.se = !0;
    this.W().parentNode || this.v.g.appendChild(this.W())
};
g.select = function() {
    if (this.i && this.getParent()) this.getParent().select();
    else if (U != this) {
        U && (I++, Hh(U), I--);
        var a = new gi(null, "selected", 0, this.id);
        a.g = this.v.id;
        J(a);
        U = this;
        this.we()
    }
};

function Hh(a) {
    if (U == a) {
        var b = new gi(null, "selected", 0, null);
        b.g = a.v.id;
        J(b);
        U = null;
        a.je()
    }
}
g.ug = null;
g.oa = null;
g.Xa = null;

function Hi(a) {
    var b = [];
    a.oa && b.push(a.oa);
    a.Xa && b.push(a.Xa);
    return b
}
var Si = null,
    Ti = null;

function Ui() {
    Vi();
    Si && (P(Si), Si = null);
    Ti && (P(Ti), Ti = null);
    var a = U;
    if (2 == K && a) {
        var b = a.aa(),
            b = Hc(b, a.ed),
            c = new pd(a);
        c.F = a.ed;
        rd(c);
        J(c);
        Od(a, b.x, b.y);
        delete a.Ma;
        Wi(a, !1);
        a.X();
        var d = md;
        setTimeout(function() {
            G(d);
            Th(a);
            G(!1)
        }, od / 2);
        setTimeout(function() {
            G(d);
            Ed(a);
            G(!1)
        }, od);
        xg(a.v)
    }
    K = 0;
    Og(Xi)
}
g = S.prototype;
g.zd = function(a) {
    if (a != this.F) {
        var b = this.W();
        if (this.F && b) {
            var c = this.aa();
            this.v.g.appendChild(b);
            b.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
        }
        tg();
        S.w.zd.call(this, a);
        ug();
        a && (c = this.aa(), a.W().appendChild(b), a = this.aa(), Od(this, a.x - c.x, a.y - c.y))
    }
};
g.aa = function() {
    var a = 0,
        b = 0,
        c = this.W();
    if (c) {
        do var d = Nd(c),
            a = a + d.x,
            b = b + d.y,
            c = c.parentNode; while (c && c != this.v.g)
    }
    return new C(a, b)
};
g.moveBy = function(a, b) {
    var c = new pd(this),
        d = this.aa();
    this.W().setAttribute("transform", "translate(" + (d.x + a) + "," + (d.y + b) + ")");
    Od(this, a, b);
    rd(c);
    J(c)
};

function Th(a) {
    if (a.v && 0 == K && !a.getParent() && !a.D && a.v.options.h && a.v.options.h.snap) {
        var b = a.v.options.h.spacing,
            c = b / 2,
            d = a.aa(),
            e = Math.round((d.x - c) / b) * b + c - d.x,
            b = Math.round((d.y - c) / b) * b + c - d.y,
            e = Math.round(e),
            b = Math.round(b);
        0 == e && 0 == b || a.moveBy(e, b)
    }
}

function Uh(a) {
    var b = a.height,
        c = a.width,
        d = jd(a);
    d ? (a = Uh(d), b += a.height - 4, c = Math.max(c, a.width)) : a.g || a.J || (b += 2);
    return {
        height: b,
        width: c
    }
}

function Yi(a) {
    var b = a.aa(a),
        c = a.J ? 8 : 0,
        d = Uh(a);
    a.m ? (a = new C(b.x - (d.width - c), b.y), b = new C(b.x + c, b.y + d.height)) : (a = new C(b.x - c, b.y), b = new C(b.x + d.width - c, b.y + d.height));
    return {
        cb: a,
        rb: b
    }
}
g.rc = function(a) {
    if (this.j != a) {
        for (var b = [], c = 0, d; d = this.h[c]; c++) b.push.apply(b, d.Y(!a));
        if (a) {
            d = Hi(this);
            for (c = 0; c < d.length; c++) d[c].Y(!1);
            c = this.toString(Zi);
            Gi(this.Bb(5, "_TEMP_COLLAPSED_INPUT"), c).ga()
        } else this.hf("_TEMP_COLLAPSED_INPUT"), this.Ta(null);
        S.w.rc.call(this, a);
        b.length || (b[0] = this);
        if (this.N)
            for (c = 0; a = b[c]; c++) a.X()
    }
};
g.tab = function(a, b) {
    for (var c = [], d = 0, e; e = this.h[d]; d++) {
        for (var f = 0; e.Ca[f]; f++);
        e.H && (e = F(e.H)) && c.push(e)
    }
    d = c.indexOf(a); - 1 == d && (d = b ? -1 : c.length);
    (c = c[b ? d + 1 : d - 1]) ? c instanceof yi ? Di(c) : c.tab(null, b): (c = this.getParent()) && c.tab(this, b)
};
g.Wc = function(a) {
    if (!this.v.options.i)
        if (this.D) a.stopPropagation();
        else {
            this.v.Pc();
            Kh();
            this.select();
            Q();
            var b = this.v;
            b.Qa ? b.na = b.Qa.fd() : b.na = null;
            b.V ? b.I = b.V.fd() : b.P ? b.I = b.P.fd() : b.I = null;
            if (Mg(a)) $i(this, a);
            else if (xd(this)) {
                md || G(!0);
                Og(Pg);
                this.ed = this.aa();
                Qg(this.v, a, this.ed);
                K = 1;
                Si = O(document, "mouseup", this, this.Gg);
                Ti = O(document, "mousemove", this, this.Fg);
                this.Ma = [];
                for (var b = this.Wa(), c = 0, d; d = b[c]; c++) {
                    d = Hi(d);
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].Oc;
                        f.ph = d[e];
                        this.Ma.push(f)
                    }
                }
            } else return;
            a.stopPropagation();
            a.preventDefault()
        }
};
g.Gg = function(a) {
    2 == K || Zf || J(new gi(this, "click", 0, void 0));
    Kh();
    if (U && td) {
        ud.connect(td);
        if (this.N && (a = (vd(ud) ? td : ud).ba, Wh(a.v, "click"), !(1 > a.v.scale))) {
            var b = hh(a.u, a.v);
            a.J ? (b.x += (a.m ? 3 : -3) * a.v.scale, b.y += 13 * a.v.scale) : a.L && (b.x += (a.m ? -23 : 23) * a.v.scale, b.y += 3 * a.v.scale);
            b = L("circle", {
                cx: b.x,
                cy: b.y,
                r: 0,
                fill: "none",
                stroke: "#888",
                "stroke-width": 10
            }, gh(a.v));
            aj(b, new Date, a.v.scale)
        }
        this.v.Qa && this.v.Qa.close()
    } else !this.getParent() && og(U) && Lh(this.v, a) && ((a = this.v.Qa) && Zb(a.close, 100, a), a = U.v, U.B(!1, !0), xg(a));
    td && (Rd(), td = null);
    Og(Xi);
    Zf || G(!1)
};

function $i(a, b) {
    if (!a.v.options.i) {
        var c = [];
        if (og(a) && xd(a) && !a.D) {
            var d = {
                text: V.Wg,
                enabled: !0,
                Na: function() {
                    var b = Jh,
                        c = bj;
                    cj(a);
                    Ih(a.v);
                    Jh = b;
                    bj = c
                }
            };
            a.Wa().length > hg(a.v) && (d.enabled = !1);
            c.push(d);
            pg(a) && !a.j && a.v.options.R && (d = {
                enabled: !y
            }, a.oa ? (d.text = V.kh, d.Na = function() {
                a.vd(null)
            }) : (d.text = V.Eg, d.Na = function() {
                a.vd("")
            }), c.push(d));
            if (!a.j)
                for (d = 1; d < a.h.length; d++)
                    if (3 != a.h[d - 1].type && 3 != a.h[d].type) {
                        var d = {
                                enabled: !0
                            },
                            e = Pi(a);
                        d.text = e ? V.$g : V.dh;
                        d.Na = function() {
                            a.Uc(!e)
                        };
                        c.push(d);
                        break
                    }
            a.v.options.D &&
                (a.j ? (d = {
                    enabled: !0
                }, d.text = V.Zg, d.Na = function() {
                    a.rc(!1)
                }, c.push(d)) : (d = {
                    enabled: !0
                }, d.text = V.Pg, d.Na = function() {
                    a.rc(!0)
                }, c.push(d)));
            a.v.options.I && (d = {
                text: a.disabled ? V.Xg : V.Vg,
                enabled: !Qi(a),
                Na: function() {
                    a.Tc(!a.disabled)
                }
            }, c.push(d));
            var d = a.Wa().length,
                f = jd(a);
            f && (d -= f.Wa().length);
            d = {
                text: 1 == d ? V.Af : V.Bf.replace("%1", String(d)),
                enabled: !0,
                Na: function() {
                    G(!0);
                    a.B(!0, !0);
                    G(!1)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(fa(a.ra) ? !a.ra() : !a.ra)
        };
        d.text = V.bh;
        d.Na = function() {
            var b = fa(a.ra) ? a.ra() : a.ra;
            b && window.open(b)
        };
        c.push(d);
        a.re && !a.D && a.re(c);
        Tf.show(b, c, a.m);
        Tf.Kd = a
    }
}

function Od(a, b, c) {
    if (a.N) {
        for (var d = a.sb(!1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = Hi(a);
        for (e = 0; e < d.length; e++) bi(d[e]);
        for (e = 0; e < a.G.length; e++) Od(a.G[e], b, c)
    }
}

function Wi(a, b) {
    if (b) {
        var c = a.W();
        c.h = "";
        c.g = "";
        Vf(a.u, "blocklyDragging");
        yd = yd.concat(a.sb(!0))
    } else ai(a.u, "blocklyDragging"), yd = [];
    for (c = 0; c < a.G.length; c++) Wi(a.G[c], b)
}
g.Fg = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = this.aa(),
            c = Rg(this.v, a),
            d;
        if (d = 1 == K) {
            d = b.x - c.x;
            var e = b.y - c.y;
            d = Math.sqrt(d * d + e * e) * this.v.scale > Vg
        }
        d && (K = 2, dj(), this.F && (Dd(this), d = this.W(), d.h = "translate(" + c.x + "," + c.y + ")", Wh(this.v, "disconnect"), 1 > this.v.scale || (d = Math.atan(10 / Uh(this).height) / Math.PI * 180, this.m || (d *= -1), ej(this.u, d, new Date))), Wi(this, !0));
        if (2 == K) {
            b = Hc(b, this.ed);
            d = this.W();
            d.h = "translate(" + c.x + "," + c.y + ")";
            d.setAttribute("transform",
                d.h + d.g);
            for (c = 0; c < this.Ma.length; c++) e = this.Ma[c], d = e.ph, e = new C(e.x + b.x, e.y + b.y), d.Oc = e, d.ea && (d = d.ea, d.cc = e, d.ud && Eg(d));
            d = this.sb(!1);
            a: {
                for (c = this.g; c;) {
                    e = F(c);
                    if (!e) break a;
                    c = e.g
                }
                c = null
            }
            c && c != this.g && d.push(c);
            for (var f = e = null, h = Hd, c = 0; c < d.length; c++) {
                var l = d[c],
                    m;
                m = mh(l.cd, l, h, b);
                m.H && (e = m.H, f = l, h = m.yg)
            }
            td && td != e && (Rd(), ud = td = null);
            e && e != td && (e.og(), td = e, ud = f);
            og(this) && Lh(this.v, a)
        }
        a.stopPropagation();
        a.preventDefault()
    }
};

function Ri(a) {
    xd(a) ? Vf(a.u, "blocklyDraggable") : ai(a.u, "blocklyDraggable")
}
g.nf = function(a) {
    S.w.nf.call(this, a);
    Ri(this)
};
g.mf = function(a) {
    S.w.mf.call(this, a);
    if (this.N) {
        a = Hi(this);
        for (var b = 0; b < a.length; b++) a[b].vc()
    }
};
g.tf = function(a) {
    S.w.tf.call(this, a);
    this.Yb()
};
g.W = function() {
    return this.u
};
g.B = function(a, b) {
    ui();
    tg();
    U == this && (Hh(this), Kh());
    Tf.Kd == this && Tf.Eb();
    if (b && this.N) {
        Dd(this, a);
        Wh(this.v, "delete");
        var c = hh(this.u, this.v),
            d = this.u.cloneNode(!0);
        d.j = c.x;
        d.s = c.y;
        d.setAttribute("transform", "translate(" + d.j + "," + d.s + ")");
        gh(this.v).appendChild(d);
        d.i = d.getBBox();
        fj(d, this.m, new Date, this.v.scale)
    }
    this.N = !1;
    I++;
    c = Hi(this);
    for (d = 0; d < c.length; d++) c[d].B();
    I--;
    S.w.B.call(this, a);
    E(this.u);
    this.Ea = this.va = this.I = this.u = null;
    ug()
};

function fj(a, b, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? E(a) : (a.setAttribute("transform", "translate(" + (a.j + (b ? -1 : 1) * a.i.width * d / 2 * e) + "," + (a.s + a.i.height * d * e) + ") scale(" + (1 - e) * d + ")"), setTimeout(function() {
        fj(a, b, c, d)
    }, 10))
}

function aj(a, b, c) {
    var d = (new Date - b) / 150;
    1 < d ? E(a) : (a.setAttribute("r", 25 * d * c), a.style.opacity = 1 - d, setTimeout(function() {
        aj(a, b, c)
    }, 10))
}

function ej(a, b, c) {
    var d = (new Date - c) / 200;
    1 < d ? a.g = "" : (a.g = "skewX(" + Math.round(Math.sin(d * Math.PI * 3) * (1 - d) * b) + ")", gj = a, hj = setTimeout(function() {
        ej(a, b, c)
    }, 10));
    a.setAttribute("transform", a.h + a.g)
}

function Vi() {
    if (gj) {
        clearTimeout(hj);
        var a = gj;
        a.g = "";
        a.setAttribute("transform", a.h);
        gj = null
    }
}
var hj = 0,
    gj = null;
g = S.prototype;
g.Yb = function() {
    if (!this.disabled) {
        var a = this.bd,
            b, c;
        c = a;
        if (!ij.test(c)) throw Error("'" + c + "' is not a valid hex color");
        4 == c.length && (c = c.replace(jj, "#$1$1$2$2$3$3"));
        c = c.toLowerCase();
        b = [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16)];
        this.i ? (b = kj([255, 255, 255], b, .6), a = Ni(b), this.va.style.display = "none", this.Ea.setAttribute("fill", a)) : (this.va.style.display = "", c = Ni(kj([255, 255, 255], b, .3)), b = Ni(kj([0, 0, 0], b, .2)), this.va.setAttribute("stroke", c), this.Ea.setAttribute("fill",
            b));
        this.I.setAttribute("fill", a);
        a = Hi(this);
        for (c = 0; c < a.length; c++) a[c].Yb();
        for (a = 0; c = this.h[a]; a++) {
            b = 0;
            for (var d; d = c.Ca[b]; b++) d.Zb(null)
        }
    }
};

function Sd(a) {
    var b;
    b = -1 != (" " + a.u.getAttribute("class") + " ").indexOf(" blocklyDisabled ");
    a.disabled || Qi(a) ? b || (Vf(a.u, "blocklyDisabled"), a.I.setAttribute("fill", "url(#" + a.v.options.dd + ")")) : b && (ai(a.u, "blocklyDisabled"), a.Yb());
    a = a.hc();
    b = 0;
    for (var c; c = a[b]; b++) Sd(c)
}
g.gg = function() {
    var a;
    this.oa ? (a = this.oa, a = (a.h ? a.h.value : a.ha).replace(/\s+$/, "").replace(/ +\n/g, "\n")) : a = "";
    return a
};
g.vd = function(a) {
    var b = !1;
    r(a) ? (this.oa || (this.oa = new di(this), b = !0), ii(this.oa, a)) : this.oa && (this.oa.B(), b = !0);
    b && this.N && (this.X(), Ed(this))
};
g.Ta = function(a, b) {
    this.Ta.g || (this.Ta.g = Object.create(null));
    var c = b || "";
    if (c) this.Ta.g[c] && (clearTimeout(this.Ta.g[c]), delete this.Ta.g[c]);
    else
        for (var d in this.Ta.g) clearTimeout(this.Ta.g[d]), delete this.Ta.g[d];
    if (2 == K) {
        var e = this;
        this.Ta.g[c] = setTimeout(function() {
            e.v && (delete e.Ta.g[c], e.Ta(a, c))
        }, 100)
    } else {
        this.D && (a = null);
        d = Mi(this);
        for (var f = null; d;) d.j && (f = d), d = Mi(d);
        f && f.Ta(a, "collapsed " + this.id + " " + c);
        d = !1;
        r(a) ? (this.Xa || (this.Xa = new hi(this), d = !0), Ki(this.Xa, a, c)) : this.Xa && !c ? (this.Xa.B(),
            d = !0) : this.Xa && (d = Ji(this.Xa), Ki(this.Xa, "", c), (f = Ji(this.Xa)) || this.Xa.B(), d = d == f);
        d && this.N && (this.X(), Ed(this))
    }
};
g.Tc = function(a) {
    this.disabled != a && (S.w.Tc.call(this, a), this.N && Sd(this))
};
g.we = function() {
    Vf(this.u, "blocklySelected");
    this.u.parentNode.appendChild(this.u)
};
g.je = function() {
    ai(this.u, "blocklySelected")
};
g.Xc = function(a) {
    S.w.Xc.call(this, a);
    this.N && this.Yb()
};
g.sf = function(a, b) {
    S.w.sf.call(this, a, b);
    this.N && (this.X(), Ed(this))
};
g.pf = function(a, b) {
    S.w.pf.call(this, a, b);
    this.N && (this.X(), Ed(this))
};
g.qf = function(a, b) {
    S.w.qf.call(this, a, b);
    this.N && (this.X(), Ed(this))
};
g.Uc = function(a) {
    S.w.Uc.call(this, a);
    this.N && (this.X(), Ed(this))
};
g.hf = function(a, b) {
    S.w.hf.call(this, a, b);
    this.N && (this.X(), Ed(this))
};
g.Bb = function(a, b) {
    var c = S.w.Bb.call(this, a, b);
    this.N && (this.X(), Ed(this));
    return c
};
g.sb = function(a) {
    var b = [];
    if (a || this.N)
        if (this.J && b.push(this.J), this.L && b.push(this.L), this.g && b.push(this.g), a || !this.j) {
            a = 0;
            for (var c; c = this.h[a]; a++) c.H && b.push(c.H)
        }
    return b
};
g.od = function(a) {
    return new zd(this, a)
};
var lj = 7.5 * (1 - Math.SQRT1_2) + .5,
    mj = 8.5 * (1 - Math.SQRT1_2) - .5,
    nj = "m " + lj + "," + lj,
    oj = "a 8,8 0 0,0 " + (-mj - .5) + "," + (8 - mj),
    pj = "a 8.5,8.5 0 0,0 " + (8 - mj) + "," + (mj + .5);
S.prototype.X = function(a) {
    tg();
    this.N = !0;
    var b = 10;
    this.m && (b = -b);
    for (var c = Hi(this), d = 0; d < c.length; d++) {
        var e = c[d];
        e.Hf && e.sa.j ? e.g.setAttribute("display", "none") : (e.g.setAttribute("display", "block"), e.sa.m && (b -= 17), e.g.setAttribute("transform", "translate(" + b + ",5)"), bi(e), b = e.sa.m ? b - 10 : b + 27)
    }
    var f = b += this.m ? 10 : -10,
        h = this.h,
        c = [];
    c.g = f + 20;
    if (this.L || this.g) c.g = Math.max(c.g, 40);
    for (var e = d = 0, l = !1, m = !1, n = !1, p = void 0, q = Pi(this) && !this.j, A = 0, w; w = h[A]; A++)
        if (w.pe) {
            var v;
            q && p && 3 != p && 3 != w.type ? v = c[c.length -
                1] : (p = w.type, v = [], v.type = q && 3 != w.type ? -1 : w.type, v.height = 0, c.push(v));
            v.push(w);
            w.Vb = 25;
            w.Ia = q && 1 == w.type ? 20.5 : 0;
            if (w.H && w.H.K) {
                var gd = Uh(F(w.H));
                w.Vb = Math.max(w.Vb, gd.height);
                w.Ia = Math.max(w.Ia, gd.width)
            }
            q || A != h.length - 1 ? !q && 1 == w.type && h[A + 1] && 3 == h[A + 1].type && w.Vb-- : w.Vb--;
            v.height = Math.max(v.height, w.Vb);
            w.gb = 0;
            1 == c.length && (w.gb += this.m ? -f : f);
            for (var gd = !1, Xf = 0, yb; yb = w.Ca[Xf]; Xf++) {
                0 != Xf && (w.gb += 10);
                var Vb;
                Vb = yb;
                Vb.j.width || Vb.oe();
                Vb = Vb.j;
                yb.Ia = Vb.width;
                yb.G = gd && yb.xc ? 10 : 0;
                w.gb += yb.Ia + yb.G;
                v.height =
                    Math.max(v.height, Vb.height);
                gd = yb.xc
            } - 1 != v.type && (3 == v.type ? (m = !0, e = Math.max(e, w.gb)) : (1 == v.type ? l = !0 : 5 == v.type && (n = !0), d = Math.max(d, w.gb)))
        }
    for (f = 0; v = c[f]; f++)
        if (v.Cg = !1, -1 == v.type)
            for (h = 0; w = v[h]; h++)
                if (1 == w.type) {
                    v.height += 10;
                    v.Cg = !0;
                    break
                }
    c.h = 20 + e;
    m && (c.g = Math.max(c.g, c.h + 30));
    l ? c.g = Math.max(c.g, d + 28) : n && (c.g = Math.max(c.g, d + 20));
    c.i = l;
    c.s = m;
    c.j = n;
    e = b;
    this.bc = !1;
    this.height = 0;
    this.J ? this.ac = this.Va = !0 : (this.ac = this.Va = !1, this.L && (b = F(this.L)) && jd(b) == this && (this.Va = !0), jd(this) && (this.ac = !0));
    l = [];
    m = [];
    b = [];
    d = [];
    n = c.g;
    this.Va ? (l.push("m 0,0"), b.push("m 0.5,0.5"), this.bc && (l.push("c 30,-15 70,-15 100,0"), b.push(this.m ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (l.push("m 0,8"), b.push(this.m ? nj : "m 0.5,7.5"), l.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.L && (l.push("H", 15), b.push("H", 15), l.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"), Ld(this.L, this.m ? -30 : 30, 0));
    l.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    var n = 0,
        H;
    for (w = 0; v =
        c[w]; w++) {
        p = 10;
        0 == w && (p += this.m ? -e : e);
        b.push("M", c.g - .5 + "," + (n + .5));
        if (this.j) f = v[0], q = n, qj(this, f.Ca, p, q), l.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), f = v.height - 20, l.push("v", f), this.m && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", f - .7)), this.width += 15;
        else if (-1 == v.type) {
            for (h = 0; f = v[h]; h++) q = n, v.Cg && (q += 5), p = qj(this, f.Ca, p, q), 5 != f.type && (p += f.Ia + 10), 1 == f.type && (m.push("M", p - 10 + "," + (n + 5)), m.push("h", 6 - f.Ia), m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), m.push("v", f.Vb + 1 - 20),
                m.push("h", f.Ia + 2 - 8), m.push("z"), this.m ? (d.push("M", p - 10 - 2.5 + 8 - f.Ia + "," + (n + 5 + .5)), d.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), d.push("v", f.Vb - 20 + 2.5), d.push("h", f.Ia - 8 + 2)) : (d.push("M", p - 10 + .5 + "," + (n + 5 + .5)), d.push("v", f.Vb + 1), d.push("h", 6 - f.Ia), d.push("M", p - f.Ia - 10 + .9 + "," + (n + 5 + 20 - .7)), d.push("l", "3.68,-2.1")), this.m ? H = -p - 8 + 10 + f.Ia + 1 : H = p + 8 - 10 - f.Ia - 1, q = n + 5 + 1, Ld(f.H, H, q));
            p = Math.max(p, c.g);
            this.width = Math.max(this.width, p);
            l.push("H", p);
            b.push("H", p - .5);
            l.push("v", v.height);
            this.m &&
                b.push("v", v.height - 1)
        } else 1 == v.type ? (f = v[0], q = n, -1 != f.align && (h = c.g - f.gb - 8 - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), qj(this, f.Ca, p, q), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), H = v.height - 20, l.push("v", H), this.m ? (b.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), b.push("v", H + .5)) : (b.push("M", c.g - 5 + "," + (n + 20 - .7)), b.push("l", "3.68,-2.1")), H = this.m ? -c.g - 1 : c.g + 1, Ld(f.H, H, n), f.H.K && (this.width = Math.max(this.width, c.g + Uh(F(f.H)).width - 8 + 1))) : 5 == v.type ? (f = v[0], q = n, -1 != f.align && (h = c.g -
            f.gb - 20, c.i && (h -= 8), 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), qj(this, f.Ca, p, q), l.push("v", v.height), this.m && b.push("v", v.height - 1)) : 3 == v.type && (f = v[0], 0 == w && (l.push("v", 10), this.m && b.push("v", 9), n += 10), q = n, -1 != f.align && (h = c.h - f.gb - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), qj(this, f.Ca, p, q), p = c.h + 30, l.push("H", p), l.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), l.push("v", v.height - 16), l.push("a 8,8 0 0,0 8,8"), l.push("H", c.g), this.m ? (b.push("M", p - 30 + mj + "," + (n + mj)), b.push(oj), b.push("v", v.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) :
            (b.push("M", p - 30 + mj + "," + (n + v.height - mj)), b.push(pj)), b.push("H", c.g - .5), H = this.m ? -p : p + 1, Ld(f.H, H, n + 1), f.H.K && (this.width = Math.max(this.width, c.h + Uh(F(f.H)).width)), w == c.length - 1 || 3 == c[w + 1].type) && (l.push("v", 10), this.m && b.push("v", 9), n += 10);
        n += v.height
    }
    c.length || (n = 25, l.push("V", n), this.m && b.push("V", n - 1));
    H = n;
    this.height += H + 1;
    this.g && (l.push("H", 30 + (this.m ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), Ld(this.g, this.m ? -30 : 30, H + 1), this.height += 4);
    this.ac ? (l.push("H 0"), this.m || b.push("M", "0.5," + (H - .5))) : (l.push("H",
        8), l.push("a", "8,8 0 0,1 -8,-8"), this.m || (b.push("M", lj + "," + (H - lj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (H - 8))));
    this.J ? (Ld(this.J, 0, 0), l.push("V", 20), l.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), this.m ? (b.push("M", "-2,8.4"), b.push("l", "-3.6,-2.1")) : (b.push("V", 18.5), b.push("m", "-7.36,-0.5 q -1.52,-5.5 0,-11"), b.push("m", "7.36,1 V 0.5 H 1")), this.width += 8) : this.m || (this.Va ? b.push("V", .5) : b.push("V", 8));
    l.push("z");
    H = l.join(" ") + "\n" + m.join(" ");
    this.I.setAttribute("d", H);
    this.Ea.setAttribute("d", H);
    H = b.join(" ") + "\n" + d.join(" ");
    this.va.setAttribute("d", H);
    this.m && (this.I.setAttribute("transform", "scale(-1 1)"), this.va.setAttribute("transform", "scale(-1 1)"), this.Ea.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    H = this.aa();
    this.L && Kd(this.L, H);
    this.J && Kd(this.J, H);
    for (c = 0; c < this.h.length; c++)
        if (b = this.h[c].H) Kd(b, H), b.K && Md(b);
    this.g && (Kd(this.g, H), this.g.K && Md(this.g));
    !1 !== a && ((a = this.getParent()) ? a.X(!0) : xg(this.v));
    ug()
};

function qj(a, b, c, d) {
    d += 5;
    a.m && (c = -c);
    for (var e = 0, f; f = b[e]; e++) {
        var h = f.W();
        h && (a.m ? (c -= f.G + f.Ia, h.setAttribute("transform", "translate(" + c + "," + d + ")"), f.Ia && (c -= 10)) : (h.setAttribute("transform", "translate(" + (c + f.G) + "," + d + ")"), f.Ia && (c += f.G + f.Ia + 10)))
    }
    return a.m ? -c : c
};
var V = {};

function rj(a, b) {
    this.D = a;
    sj(this);
    var c = tj(this)[0];
    rj.w.constructor.call(this, c[1], b)
}
u(rj, yi);
var uj = nb ? "\u25bc" : "\u25be";
g = rj.prototype;
g.Tg = "default";
g.ga = function() {
    if (!this.g) {
        this.s = L("tspan", {}, null);
        this.s.appendChild(document.createTextNode(this.M.m ? uj + " " : " " + uj));
        rj.w.ga.call(this);
        var a = this.ha;
        this.ha = null;
        this.Zb(a)
    }
};

function Di(a) {
    Sf(a, a.M.m);
    var b = new Qf;
    b.Jc(a.M.m);
    for (var c = tj(a), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new uf(c[d][0]);
        f.Jc(a.M.m);
        f.Ma = e;
        f.bb(16, !0);
        b.Ed(f, !0);
        jf(f, e == a.i)
    }
    Kb(b, "action", function(b) {
        if (b = b.target) {
            b = b.Ob();
            if (a.M && a.me) {
                var c = a.me(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.fb(b)
        }
        Zf == a && $f()
    });
    oe(b).T(b.C(), "touchstart", function(a) {
        Hf(this, a.target).lc(a)
    });
    oe(b).T(b.C(), "touchend", function(a) {
        Hf(this, a.target).sd(a)
    });
    c = Nc();
    d = Xd();
    e = Zd(a.A);
    f = Ci(a);
    b.X(Uf);
    var h = b.C();
    Vf(h, "blocklyDropdownMenu");
    var l = $d(h);
    l.height = h.scrollHeight;
    e.y = e.y + l.height + f.height >= c.height + d.y ? e.y - (l.height + 2) : e.y + f.height;
    a.M.m ? (e.x += f.width, e.x += 25, e.x < d.x + l.width && (e.x = d.x + l.width)) : (e.x -= 25, e.x > c.width + d.x - l.width && (e.x = c.width + d.x - l.width));
    Yf(e.x, e.y, c, d, a.M.m);
    Rf(b);
    h.focus()
}

function sj(a) {
    a.I = null;
    a.R = null;
    var b = a.D;
    if (da(b) && !(2 > b.length)) {
        var c = b.map(function(a) {
                return a[0]
            }),
            d = vj(c),
            e = wj(c, d),
            f = xj(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.I = c[0].substring(0, e - 1));
            f && (a.R = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var h = b[d][0],
                    l = b[d][1],
                    h = h.substring(e, h.length - f);
                c[d] = [h, l]
            }
            a.D = c
        }
    }
}

function tj(a) {
    return fa(a.D) ? a.D.call(a) : a.D
}
g.Ob = function() {
    return this.i
};
g.fb = function(a) {
    if (null !== a && a !== this.i) {
        this.M && 0 == I && J(new fi(this.M, "field", this.name, this.i, a));
        this.i = a;
        for (var b = tj(this), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                this.Zb(b[c][0]);
                return
            }
        this.Zb(a)
    }
};
g.Zb = function(a) {
    this.M && this.s && (this.s.style.fill = this.M.bd);
    null !== a && a !== this.ha && (this.ha = a, Bi(this), this.h && (this.M.m ? this.h.insertBefore(this.s, this.h.firstChild) : this.h.appendChild(this.s)), this.M && this.M.N && (this.M.X(), Ed(this.M)))
};
g.B = function() {
    Zf == this && $f();
    rj.w.B.call(this)
};

function yj(a) {
    var b;
    if (a.Wa) b = a.Wa();
    else if (a.Lb) b = a.Lb();
    else throw "Not Block or Workspace: " + a;
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var d;
        d = 0;
        for (var e; e = b[c].h[d]; d++)
            for (var f = 0; e.Ca[f]; f++);
        d = [];
        for (e = 0; e < d.length; e++)(f = d[e]) && (a[f.toLowerCase()] = f)
    }
    b = [];
    for (var h in a) b.push(a[h]);
    b.sort(ra);
    Ra(b, V.Ac);
    b.unshift(V.Ac);
    h = [];
    for (a = 0; a < b.length; a++) ci.variables_set && (c = D("block"), c.setAttribute("type", "variables_set"), ci.variables_get && c.setAttribute("gap", 8), d = D("field", null, b[a]),
        d.setAttribute("name", "VAR"), c.appendChild(d), h.push(c)), ci.variables_get && (c = D("block"), c.setAttribute("type", "variables_get"), ci.variables_set && c.setAttribute("gap", 24), d = D("field", null, b[a]), d.setAttribute("name", "VAR"), c.appendChild(d), h.push(c));
    return h
};
var Xi = "handopen",
    Pg = "handclosed",
    Mh = "handdelete",
    zj = "",
    Aj = null,
    Bj = "";

function Og(a) {
    if (zj != a) {
        zj = a;
        var b = "url(" + Bj + "/" + a + ".cur), auto",
            c = ".blocklyDraggable {\n  cursor: " + b + ";\n}\n";
        Aj.deleteRule(0);
        Aj.insertRule(c, 0);
        for (var c = document.getElementsByClassName("blocklyToolboxDiv"), d = 0, e; e = c[d]; d++) e.style.cursor = a == Mh ? b : "";
        document.body.parentNode.style.cursor = a == Xi ? "" : b
    }
}
var Cj = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 999;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 1000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;",
    "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {",
    "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {",
    "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklySvg text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;",
    "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;", "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;",
    "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;",
    "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;",
    "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;",
    "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;",
    "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;",
    "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;",
    "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;",
    "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;",
    "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
    "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;",
    "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;",
    "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];

function Dj(a, b) {
    r(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!Uc(document, a)) throw "Error: container is not in current document.";
    var c = new uh(b || {}),
        d = a;
    d.setAttribute("dir", "LTR");
    le = c.m;
    var e = c.va,
        f = c.j;
    console.log("CSS!!!");
    if (!Aj) {
        var h = ".blocklyDraggable {}\n";
        e && (h += Cj.join("\n"), ad.ah && (h += ad.ah.CSS.join("\n")));
        Bj = f.replace(/[\\\/]$/, "");
        h = h.replace(/<<<PATH>>>/g, Bj);
        e = document.createElement("style");
        document.head.appendChild(e);
        e.appendChild(document.createTextNode(h));
        Aj = e.sheet;
        Og(Xi)
    }
    d = L("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, d);
    h = L("defs", {}, d);
    e = String(Math.random()).substring(2);
    f = L("filter", {
        id: "blocklyEmbossFilter" + e
    }, h);
    L("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var l = L("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        },
        f);
    L("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, l);
    L("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    L("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.na = f.id;
    f = L("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, h);
    L("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    L("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    c.dd = f.id;
    h = L("pattern", {
            id: "blocklyGridPattern" + e,
            patternUnits: "userSpaceOnUse"
        },
        h);
    0 < c.h.length && 0 < c.h.spacing && (L("line", {
        stroke: c.h.colour
    }, h), 1 < c.h.length && L("line", {
        stroke: c.h.colour
    }, h));
    c.s = h;
    c = Ej(d, c);
    Fj(c);
    c.Pc();
    O(d, "focus", c, c.Pc);
    Gj(c);
    return c
}

function Ej(a, b) {
    b.tb = null;
    b.xa = Hj;
    b.tc = Ij;
    var c = new vh(b);
    c.scale = b.g.gi;
    a.appendChild(wh(c, "blocklyMainBackground"));
    c.translate(0, 0);
    c.Pc();
    b.i || b.G || c.Bc(function() {
        if (0 == K) {
            var a = c.xa(),
                e = a.Aa + a.Fa,
                f = a.wb + a.Ja;
            if (a.Za < f || a.Za + a.Oa > a.qa + f || a.Ya < (b.m ? a.Aa : e) || a.Ya + a.Pa > (b.m ? a.U : a.U + e))
                for (var h = fg(c, !1), l = 0, m; m = h[l]; l++) {
                    var n = m.aa(),
                        p = Uh(m),
                        q = f + 25 - p.height - n.y;
                    0 < q && m.moveBy(0, q);
                    q = f + a.qa - 25 - n.y;
                    0 > q && m.moveBy(0, q);
                    q = 25 + e - n.x - (b.m ? 0 : p.width);
                    0 < q && m.moveBy(q, 0);
                    n = e + a.U - 25 - n.x + (b.m ? p.width : 0);
                    0 > n &&
                        m.moveBy(n, 0)
                }
        }
    });
    Gj(c);
    Uf || (Uf = D("div", "blocklyWidgetDiv"), document.body.appendChild(Uf));
    W || (W = D("div", "blocklyTooltipDiv"), document.body.appendChild(W));
    return c
}

function Fj(a) {
    var b = a.options,
        c = gh(a);
    O(c, "contextmenu", null, function(a) {
        Ng(a) || a.preventDefault()
    });
    O(window, "resize", null, function() {
        Q(!0);
        Gj(a)
    });
    Jj();
    b.A && (a.P ? a.P.ga(a) : a.V && (a.V.ga(a), a.V.show(b.A.childNodes), Kj(a.V), a.scrollX = a.V.S, 3 == b.$ && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.G && (a.ya = new Wg(a), a.ya.resize());
    b.Ea && Lj(b.j, a)
}

function Jj() {
    cd || (O(document, "keydown", null, Mj), O(document, "touchend", null, dj), O(document, "touchcancel", null, dj), document.addEventListener("mouseup", Qh, !1), pb && O(window, "orientationchange", document, function() {
        Gj(Yh)
    }));
    cd = !0
}

function Lj(a, b) {
    function c() {
        for (; d.length;) P(d.pop());
        for (var a in b.F) {
            var c = b.F[a];
            c.volume = .01;
            c.play();
            c.pause();
            if (pb || ob) break
        }
    }
    Vh(b, [a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    Vh(b, [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    Vh(b, [a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var d = [];
    d.push(O(document, "mousemove", null, c));
    d.push(O(document, "touchstart", null, c))
};
var Vg = 5,
    Hd = 20,
    od = 250,
    Zi = 30,
    Xh = 100,
    ph = 96,
    qh = 124,
    rh = "sprites.png",
    ed = [, 2, 1, 4, 3];

function Nj(a) {
    a = a.Lb();
    for (var b = [], c = [], d = 0; d < a.length; d++)
        if (a[d].te) {
            var e = a[d].te();
            e && (e[2] ? b.push(e) : c.push(e))
        }
    c.sort(Oj);
    b.sort(Oj);
    return [c, b]
}

function Oj(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}

function Pj(a) {
    function b(a, b) {
        for (var d = 0; d < a.length; d++) {
            var l = a[d][0],
                m = a[d][1],
                n = D("block");
            n.setAttribute("type", b);
            n.setAttribute("gap", 16);
            var p = D("mutation");
            p.setAttribute("name", l);
            n.appendChild(p);
            for (l = 0; l < m.length; l++) {
                var q = D("arg");
                q.setAttribute("name", m[l]);
                p.appendChild(q)
            }
            c.push(n)
        }
    }
    var c = [];
    if (ci.procedures_defnoreturn) {
        var d = D("block");
        d.setAttribute("type", "procedures_defnoreturn");
        d.setAttribute("gap", 16);
        c.push(d)
    }
    ci.procedures_defreturn && (d = D("block"), d.setAttribute("type",
        "procedures_defreturn"), d.setAttribute("gap", 16), c.push(d));
    ci.procedures_ifreturn && (d = D("block"), d.setAttribute("type", "procedures_ifreturn"), d.setAttribute("gap", 16), c.push(d));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = Nj(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};

function Vf(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function ai(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function O(a, b, c, d) {
    var e = c ? function(a) {
        d.call(c, a)
    } : d;
    a.addEventListener(b, e, !1);
    var f = [
        [a, b, e]
    ];
    if (b in Oh)
        for (var e = function(a) {
                if (1 == a.changedTouches.length) {
                    var b = a.changedTouches[0];
                    a.clientX = b.clientX;
                    a.clientY = b.clientY
                }
                d.call(c, a);
                a.preventDefault()
            }, h = 0, l; l = Oh[b][h]; h++) a.addEventListener(l, e, !1), f.push([a, l, e]);
    return f
}
var Oh = {};
Cb && (Oh = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function P(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function Wf(a) {
    a.preventDefault();
    a.stopPropagation()
}

function Ng(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
}

function Nd(a) {
    var b = new C(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(Qj)) b.x += parseFloat(a[1]), a[3] && (b.y += parseFloat(a[3]));
    return b
}
var Qj = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;

function hh(a, b) {
    var c = 0,
        d = 0,
        e = 1;
    if (Uc(b.g, a) || Uc(b.i, a)) e = b.scale;
    do {
        var f = Nd(a);
        if (a == b.g || a == b.i) e = 1;
        c += f.x * e;
        d += f.y * e;
        a = a.parentNode
    } while (a && a != gh(b));
    return new C(c, d)
}

function L(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function Mg(a) {
    return a.ctrlKey && mb ? !0 : 2 == a.button
}

function fh(a, b) {
    var c = b.createSVGPoint();
    c.x = a.clientX;
    c.y = a.clientY;
    var d = b.getScreenCTM(),
        d = d.inverse();
    return c.matrixTransform(d)
}

function vj(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function wj(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || vj(a), e = 0; e < d; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return d
}

function xj(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || vj(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return d
}

function cg() {
    for (var a = Rj.length, b = [], c = 0; 20 > c; c++) b[c] = Rj.charAt(Math.random() * a);
    return b.join("")
}
var Rj = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var Uf = null,
    Zf = null,
    Sj = null;

function Sf(a, b) {
    $f();
    Zf = a;
    Sj = null;
    Uf.style.top = Xd().y + "px";
    Uf.style.direction = b ? "rtl" : "ltr";
    Uf.style.display = "block"
}

function $f() {
    Zf && (Zf = null, Uf.style.display = "none", Uf.style.left = "", Uf.style.top = "", Uf.style.height = "", Sj && Sj(), Sj = null, Sc(Uf))
}

function Yf(a, b, c, d, e) {
    b < d.y && (b = d.y);
    e ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    Uf.style.left = a + "px";
    Uf.style.top = b + "px";
    Uf.style.height = c.height - b + d.y + "px"
};

function Tj(a, b) {
    null != a && this.Sa.apply(this, arguments)
}
g = Tj.prototype;
g.jc = "";
g.set = function(a) {
    this.jc = "" + a
};
g.Sa = function(a, b, c) {
    this.jc += String(a);
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.jc += arguments[d];
    return this
};
g.clear = function() {
    this.jc = ""
};
g.toString = function() {
    return this.jc
};

function Uj(a, b, c) {
    ke.call(this, c);
    this.h = b || Vj;
    a instanceof pc || (a = sc(a), b = rc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a = tc(b, a.Fc()));
    this.ra = a;
    this.na = this.pb = !1;
    this.se = zc;
    this.Ld = -1
}
u(Uj, ke);
var Wj = {};
g = Uj.prototype;
g.Ba = function() {
    Uj.w.Ba.call(this);
    this.uc && (Xj(this.uc.R, this), this.uc = null);
    this.g = null
};
g.ae = function() {
    var a = this.C();
    if (a) {
        var b = Yj(this);
        b && !b.id && (b.id = ne(this) + ".label");
        Ge(a, "treeitem");
        He(a, "selected", !1);
        He(a, "expanded", !1);
        He(a, "level", this.Ec());
        b && He(a, "labelledby", b.id);
        (a = this.Rd()) && Ge(a, "presentation");
        (a = this.Qd()) && Ge(a, "presentation");
        if (a = Zj(this))
            if (Ge(a, "group"), a.hasChildNodes())
                for (a = te(this), b = 1; b <= a; b++) {
                    var c = M(this, b - 1).C();
                    He(c, "setsize", a);
                    He(c, "posinset", b)
                }
    }
};
g.Ic = function() {
    var a = this.le(),
        b = this.s.g,
        c = b.createElement("DIV");
    y ? (Cc(c, yc(Ac, a)), c.removeChild(c.firstChild)) : Cc(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    this.g = c
};
g.Ga = function() {
    Uj.w.Ga.call(this);
    Wj[ne(this)] = this;
    this.ae()
};
g.$a = function() {
    Uj.w.$a.call(this);
    delete Wj[ne(this)]
};
g.Cc = function(a, b) {
    var c = M(this, b - 1),
        d = M(this, b);
    Uj.w.Cc.call(this, a, b);
    a.pc = c;
    a.kb = d;
    c ? c.kb = a : this.Zc = a;
    d ? d.pc = a : this.$c = a;
    var e = this.Ra();
    e && ak(a, e);
    bk(a, this.Ec() + 1);
    if (this.C() && (this.Vc(), this.La())) {
        e = Zj(this);
        a.C() || a.Ic();
        var f = a.C(),
            h = d && d.C();
        e.insertBefore(f, h);
        this.Z && a.Ga();
        d || (c ? c.Vc() : (be(e, !0), this.mb(this.La())))
    }
};
g.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Cc(a, b ? we(this, b) : te(this));
    return a
};
g.removeChild = function(a) {
    var b = this.Ra(),
        c = b ? b.j : null;
    if (c == a || a.contains(c)) b.ac ? (this.select(), Zb(this.Yh, 10, this)) : this.select();
    Uj.w.removeChild.call(this, a);
    this.$c == a && (this.$c = a.pc);
    this.Zc == a && (this.Zc = a.kb);
    a.pc && (a.pc.kb = a.kb);
    a.kb && (a.kb.pc = a.pc);
    c = !a.kb;
    a.uc = null;
    a.Ld = -1;
    if (b && (Xj(b.R, a), this.Z)) {
        b = Zj(this);
        if (a.Z) {
            var d = a.C();
            b.removeChild(d);
            a.$a()
        }
        c && (c = M(this, te(this) - 1)) && c.Vc();
        ve(this) || (b.style.display = "none", this.Vc(), this.Rd().className = this.Od())
    }
    return a
};
g.Yh = function() {
    this.select()
};
g.Ec = function() {
    var a = this.Ld;
    0 > a && (a = (a = this.getParent()) ? a.Ec() + 1 : 0, bk(this, a));
    return a
};

function bk(a, b) {
    if (b != a.Ld) {
        a.Ld = b;
        var c = ck(a);
        if (c) {
            var d = dk(a) + "px";
            ue(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        se(a, function(a) {
            bk(a, b + 1)
        })
    }
}
g.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.hc = function() {
    var a = [];
    se(this, function(b) {
        a.push(b)
    });
    return a
};
g.select = function() {
    var a = this.Ra();
    a && a.Wb(this)
};

function ek(a, b) {
    if (a.pb != b) {
        a.pb = b;
        fk(a);
        var c = a.C();
        c && (He(c, "selected", b), b && (c = a.Ra().C(), He(c, "activedescendant", ne(a))))
    }
}
g.La = function() {
    return this.na
};
g.mb = function(a) {
    var b = a != this.na;
    if (!b || Xb(this, a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.na = a;
        c = this.Ra();
        var d = this.C();
        if (ve(this)) {
            if (!a && c && this.contains(c.j) && this.select(), d) {
                if (c = Zj(this))
                    if (be(c, a), a && this.Z && !c.hasChildNodes()) {
                        var e = [];
                        se(this, function(a) {
                            e.push(a.le())
                        });
                        Cc(c, yc(e));
                        se(this, function(a) {
                            a.Ga()
                        })
                    }
                this.Vc()
            }
        } else(c = Zj(this)) && be(c, !1);
        d && (this.Rd().className = this.Od(), He(d, "expanded", a));
        b && Xb(this, a ? "expand" : "collapse")
    }
};
g.lf = function() {
    var a = this.getParent();
    a && (a.mb(!0), a.lf())
};
g.le = function() {
    var a = !this.Ra().va || (this.getParent(), 0) ? this.h.Lf : this.h.Kf,
        b = this.La() && ve(this),
        a = {
            "class": a,
            style: gk(this)
        },
        c = [];
    b && se(this, function(a) {
        c.push(a.le())
    });
    b = xc("div", a, c);
    return xc("div", {
        "class": this.h.Tf,
        id: ne(this)
    }, [hk(this), b])
};

function dk(a) {
    return Math.max(0, (a.Ec() - 1) * a.h.Xe)
}

function hk(a) {
    var b = {};
    b["padding-" + (ue(a) ? "right" : "left")] = dk(a) + "px";
    var b = {
            "class": a.gd(),
            style: b
        },
        c = a.Ne(),
        d = xc("span", {
            style: {
                display: "inline-block"
            },
            "class": a.Od()
        }),
        e = xc("span", {
            "class": a.h.Uf,
            title: null
        }, a.ra);
    a = yc(e, xc("span", {}, a.se));
    return xc("div", b, [c, d, a])
}
g.gd = function() {
    return this.h.Ee + (this.pb ? " " + this.h.Wf : "")
};
g.Ne = function() {
    return xc("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": ik(this)
    })
};

function ik(a) {
    var b = a.Ra(),
        c = !b.va || b == a.getParent() && !1,
        d = a.h,
        e = new Tj;
    e.Sa(d.ec, " ", d.vh, " ");
    if (ve(a)) {
        var f = 0;
        b.zc && (f = a.La() ? 2 : 1);
        c || (f = a.kb ? f + 8 : f + 4);
        switch (f) {
            case 1:
                e.Sa(d.zh);
                break;
            case 2:
                e.Sa(d.yh);
                break;
            case 4:
                e.Sa(d.Pf);
                break;
            case 5:
                e.Sa(d.xh);
                break;
            case 6:
                e.Sa(d.wh);
                break;
            case 8:
                e.Sa(d.Qf);
                break;
            case 9:
                e.Sa(d.Bh);
                break;
            case 10:
                e.Sa(d.Ah);
                break;
            default:
                e.Sa(d.Of)
        }
    } else c ? e.Sa(d.Of) : a.kb ? e.Sa(d.Qf) : e.Sa(d.Pf);
    return e.toString()
}

function gk(a) {
    var b = a.La() && ve(a);
    return kc({
        "background-position": jk(a),
        display: b ? null : "none"
    })
}

function jk(a) {
    return (a.kb ? (a.Ec() - 1) * a.h.Xe : "-100") + "px 0"
}
g.C = function() {
    var a = Uj.w.C.call(this);
    a || (this.g = a = this.s.C(ne(this)));
    return a
};

function ck(a) {
    return (a = a.C()) ? a.firstChild : null
}
g.Qd = function() {
    var a = ck(this);
    return a ? a.firstChild : null
};
g.Rd = function() {
    var a = ck(this);
    return a ? a.childNodes[1] : null
};

function Yj(a) {
    return (a = ck(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function Zj(a) {
    return (a = a.C()) ? a.lastChild : null
}

function fk(a) {
    var b = ck(a);
    b && (b.className = a.gd())
}
g.Vc = function() {
    var a = this.Qd();
    a && (a.className = ik(this));
    if (a = Zj(this)) a.style.backgroundPosition = jk(this)
};
g.df = function(a) {
    "expand" == a.target.getAttribute("type") && ve(this) ? this.mb(!this.La()) : (this.select(), fk(this))
};
g.wg = function(a) {
    "expand" == a.target.getAttribute("type") && ve(this) || this.mb(!this.La())
};

function kk(a) {
    return a.La() && ve(a) ? kk(M(a, te(a) - 1)) : a
}

function ak(a, b) {
    a.uc != b && (a.uc = b, lk(b.R, a), se(a, function(a) {
        ak(a, b)
    }))
}
var Vj = {
    Xe: 19,
    Vf: "goog-tree-root goog-tree-item",
    Sf: "goog-tree-hide-root",
    Tf: "goog-tree-item",
    Kf: "goog-tree-children",
    Lf: "goog-tree-children-nolines",
    Ee: "goog-tree-row",
    Uf: "goog-tree-item-label",
    ec: "goog-tree-icon",
    vh: "goog-tree-expand-icon",
    zh: "goog-tree-expand-icon-plus",
    yh: "goog-tree-expand-icon-minus",
    Bh: "goog-tree-expand-icon-tplus",
    Ah: "goog-tree-expand-icon-tminus",
    xh: "goog-tree-expand-icon-lplus",
    wh: "goog-tree-expand-icon-lminus",
    Qf: "goog-tree-expand-icon-t",
    Pf: "goog-tree-expand-icon-l",
    Of: "goog-tree-expand-icon-blank",
    Ce: "goog-tree-expanded-folder-icon",
    Mf: "goog-tree-collapsed-folder-icon",
    De: "goog-tree-file-icon",
    Rf: "goog-tree-expanded-folder-icon",
    Nf: "goog-tree-collapsed-folder-icon",
    Wf: "selected"
};

function mk(a, b, c) {
    Uj.call(this, a, b, c)
}
u(mk, Uj);
mk.prototype.Ra = function() {
    if (this.uc) return this.uc;
    var a = this.getParent();
    return a && (a = a.Ra()) ? (ak(this, a), a) : null
};
mk.prototype.Od = function() {
    var a = this.La(),
        b = this.te;
    if (a && b) return b;
    b = this.ve;
    if (!a && b) return b;
    b = this.h;
    if (ve(this)) {
        if (a && b.Ce) return b.ec + " " + b.Ce;
        if (!a && b.Mf) return b.ec + " " + b.Mf
    } else if (b.De) return b.ec + " " + b.De;
    return ""
};
var md = "",
    ld = !0,
    I = 0,
    jg = [];

function J(a) {
    0 == I && (jg.length || setTimeout(nk, 0), jg.push(a))
}

function nk() {
    for (var a = ig(jg, !0), b = jg.length = 0, c; c = a[b]; b++) {
        var d = dg[c.g] || null;
        if (d) {
            c.ef && (d.s.push(c), d.G.length = 0, 1024 < d.s.length && d.s.unshift());
            for (var e = 0, f; f = d.D[e]; e++) f(c)
        }
    }
}

function ig(a, b) {
    var c = Ta(a);
    b || c.reverse();
    for (var d = 0, e; e = c[d]; d++)
        for (var f = d + 1, h; h = c[f]; f++) e.type == h.type && e.h == h.h && e.g == h.g && ("move" == e.type ? (e.A = h.A, e.s = h.s, e.j = h.j, c.splice(f, 1), f--) : "change" == e.type && e.element == h.element && e.name == h.name ? (e.newValue = h.newValue, c.splice(f, 1), f--) : "ui" != e.type || "click" != h.element || "commentOpen" != e.element && "mutatorOpen" != e.element && "warningOpen" != e.element || (e.newValue = h.newValue, c.splice(f, 1), f--));
    for (d = c.length - 1; 0 <= d; d--) c[d].G() && c.splice(d, 1);
    b || c.reverse();
    for (d = 1; e = c[d]; d++) "change" == e.type && "mutation" == e.element && c.unshift(c.splice(d, 1)[0]);
    return c
}

function G(a) {
    md = "boolean" == typeof a ? a ? cg() : "" : a
}

function ok(a) {
    var b = [];
    a = a.Wa();
    for (var c = 0, d; d = a[c]; c++) b[c] = d.id;
    return b
}

function pk(a) {
    a && (this.h = a.id, this.g = a.v.id);
    this.D = md;
    this.ef = ld
}
pk.prototype.G = function() {
    return !1
};
pk.prototype.i = function() {};

function ag(a) {
    a && (ag.w.constructor.call(this, a), this.I = lg(a), this.F = ok(a))
}
u(ag, pk);
ag.prototype.type = "create";
ag.prototype.i = function(a) {
    var b = dg[this.g] || null;
    if (a) a = D("xml"), a.appendChild(this.I), sg(a, b);
    else {
        a = 0;
        for (var c; c = this.F[a]; a++) {
            var d = b.qb[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't uncreate non-existant block: " + c)
        }
    }
};

function Li(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        Li.w.constructor.call(this, a);
        this.I = lg(a);
        this.F = ok(a)
    }
}
u(Li, pk);
Li.prototype.type = "delete";
Li.prototype.i = function(a) {
    var b = dg[this.g] || null;
    if (a) {
        a = 0;
        for (var c; c = this.F[a]; a++) {
            var d = b.qb[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't delete non-existant block: " + c)
        }
    } else a = D("xml"), a.appendChild(this.I), sg(a, b)
};

function fi(a, b, c, d, e) {
    a && (fi.w.constructor.call(this, a), this.element = b, this.name = c, this.F = d, this.newValue = e)
}
u(fi, pk);
fi.prototype.type = "change";
fi.prototype.G = function() {
    return this.F == this.newValue
};
fi.prototype.i = function(a) {
    var b = (dg[this.g] || null).qb[this.h] || null;
    if (b) switch (b.ug && b.ug.Y(!1), a = a ? this.newValue : this.F, this.element) {
        case "field":
            (b = zg(b, this.name)) ? b.fb(a): console.warn("Can't set non-existant field: " + this.name);
            break;
        case "comment":
            b.vd(a || null);
            break;
        case "collapsed":
            b.rc(a);
            break;
        case "disabled":
            b.Tc(a);
            break;
        case "inline":
            b.Uc(a);
            break;
        case "mutation":
            var c = "";
            b.nc && (c = (c = b.nc()) && qg(c));
            if (b.fc) {
                a = a || "<mutation></mutation>";
                var d = rg("<xml>" + a + "</xml>");
                b.fc(d.firstChild)
            }
            J(new fi(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existant block: " + this.h)
};

function pd(a) {
    a && (pd.w.constructor.call(this, a), a = qk(this), this.R = a.xg, this.I = a.pg, this.F = a.Jf)
}
u(pd, pk);
pd.prototype.type = "move";

function rd(a) {
    var b = qk(a);
    a.A = b.xg;
    a.s = b.pg;
    a.j = b.Jf
}

function qk(a) {
    var b = (dg[a.g] || null).qb[a.h] || null;
    a = {};
    var c = b.getParent();
    if (c) {
        a.xg = c.id;
        a: {
            for (var d = 0, e; e = c.h[d]; d++)
                if (e.H && F(e.H) == b) {
                    b = e;
                    break a
                }
            b = null
        }
        b && (a.pg = b.name)
    } else a.Jf = b.aa();
    return a
}
pd.prototype.G = function() {
    return this.R == this.A && this.I == this.s && Gc(this.F, this.j)
};
pd.prototype.i = function(a) {
    var b = dg[this.g] || null,
        c = b.qb[this.h] || null;
    if (c) {
        var d = a ? this.A : this.R,
            e = a ? this.s : this.I;
        a = a ? this.j : this.F;
        var f = null;
        if (d && (f = b.qb[d] || null, !f)) {
            console.warn("Can't connect to non-existant block: " + d);
            return
        }
        c.getParent() && Dd(c);
        if (a) e = c.aa(), c.moveBy(a.x - e.x, a.y - e.y);
        else {
            var c = c.J || c.L,
                h;
            if (e) {
                if (b = Ag(f, e)) h = b.H
            } else 4 == c.type && (h = f.g);
            h ? c.connect(h) : console.warn("Can't connect to non-existant input: " + e)
        }
    } else console.warn("Can't move non-existant block: " + this.h)
};

function gi(a, b, c, d) {
    gi.w.constructor.call(this, a);
    this.element = b;
    this.newValue = d;
    this.ef = !1
}
u(gi, pk);
gi.prototype.type = "ui";

function Dh(a) {
    a.xa = this.Td.bind(this);
    a.tc = this.di.bind(this);
    this.o = new vh(a);
    this.o.Ye = !0;
    this.m = !!a.m;
    this.g = a.Rb;
    this.i = a.$;
    this.I = [];
    this.F = [];
    this.j = [];
    this.R = []
}
var rk, sk, tk, uk, vk, wk;
g = Dh.prototype;
g.ad = !0;
g.O = 8;
g.Ab = Dh.prototype.O;
g.S = 0;
g.ob = 0;

function Eh(a) {
    a.u = L("g", {
        "class": "blocklyFlyout"
    }, null);
    a.h = L("path", {
        "class": "blocklyFlyoutBackground"
    }, a.u);
    a.u.appendChild(wh(a.o));
    return a.u
}
g.ga = function(a) {
    this.A = a;
    this.o.ra = a;
    this.s = new Xg(this.o, this.g, !1);
    this.Eb();
    Array.prototype.push.apply(this.I, O(this.u, "wheel", this, this.mi));
    this.ad || (this.D = this.Le.bind(this), this.A.Bc(this.D));
    Array.prototype.push.apply(this.I, O(this.u, "mousedown", this, this.Jg))
};
g.B = function() {
    this.Eb();
    P(this.I);
    this.D && (this.A.ie(this.D), this.D = null);
    this.s && (this.s.B(), this.s = null);
    this.o && (this.o.ra = null, this.o.B(), this.o = null);
    this.u && (E(this.u), this.u = null);
    this.A = this.h = null
};
g.hb = function() {
    return this.S
};
g.ic = function() {
    return this.ob
};
g.Td = function() {
    if (!xk(this)) return null;
    try {
        var a = this.o.g.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = 2,
        c = 2;
    if (this.g) {
        1 == this.i && (b = 0);
        var d = this.ob;
        0 == this.i && (d += this.Ab - 2);
        var e = this.S - 4
    } else c = 0, d = this.ob - 4, e = this.S, this.m || (e -= 2);
    return {
        qa: d,
        U: e,
        Oa: (a.height + 2 * this.Ab) * this.o.scale,
        Pa: (a.width + 2 * this.Ab) * this.o.scale,
        wb: -this.o.scrollY,
        Aa: -this.o.scrollX,
        Za: 0,
        Ya: 0,
        Ja: b,
        Fa: c
    }
};
g.di = function(a) {
    var b = this.Td();
    b && (!this.g && t(a.y) ? this.o.scrollY = -b.Oa * a.y : this.g && t(a.x) && (this.o.scrollX = -b.Pa * a.x), this.o.translate(this.o.scrollX + b.Fa, this.o.scrollY + b.Ja))
};
g.position = function() {
    if (xk(this)) {
        var a = this.A.xa();
        if (a) {
            var b = this.g ? a.U : this.S,
                b = b - this.O;
            3 == this.i && (b *= -1);
            var c = this.g ? this.ob : a.qa;
            if (this.g) {
                var d = 0 == this.i,
                    e = ["M 0," + (d ? 0 : this.O)];
                d ? (e.push("h", b + this.O), e.push("v", c), e.push("a", this.O, this.O, 0, 0, 1, -this.O, this.O), e.push("h", -1 * (b - this.O)), e.push("a", this.O, this.O, 0, 0, 1, -this.O, -this.O)) : (e.push("a", this.O, this.O, 0, 0, 1, this.O, -this.O), e.push("h", b - this.O), e.push("a", this.O, this.O, 0, 0, 1, this.O, this.O), e.push("v", c - this.O), e.push("h", -b - this.O))
            } else d =
                3 == this.i, e = ["M " + (d ? this.S : 0) + ",0"], e.push("h", b), e.push("a", this.O, this.O, 0, 0, d ? 0 : 1, d ? -this.O : this.O, this.O), e.push("v", Math.max(0, c - 2 * this.O)), e.push("a", this.O, this.O, 0, 0, d ? 0 : 1, d ? this.O : -this.O, this.O), e.push("h", -b);
            e.push("z");
            this.h.setAttribute("d", e.join(" "));
            b = a.Fa;
            3 == this.i && (b += a.U, b -= this.S);
            c = a.Ja;
            1 == this.i && (c += a.qa, c -= this.ob);
            this.u.setAttribute("transform", "translate(" + b + "," + c + ")");
            this.g ? this.S = a.U : this.ob = a.qa;
            this.s && this.s.resize()
        }
    }
};

function Kj(a) {
    a.s.set(a.g && a.m ? Infinity : 0)
}
g.mi = function(a) {
    var b = this.g ? a.deltaX : a.deltaY;
    if (b) {
        lb && (b *= 10);
        var c = this.Td(),
            b = this.g ? c.Aa + b : c.wb + b,
            b = Math.min(b, this.g ? c.Pa - c.U : c.Oa - c.qa),
            b = Math.max(b, 0);
        this.s.set(b)
    }
    a.preventDefault();
    a.stopPropagation()
};

function xk(a) {
    return a.u && "block" == a.u.style.display
}
g.Eb = function() {
    if (xk(this)) {
        this.u.style.display = "none";
        for (var a = 0, b; b = this.j[a]; a++) P(b);
        this.j.length = 0;
        this.G && (this.o.ie(this.G), this.G = null)
    }
};
g.show = function(a) {
    this.Eb();
    yk(this);
    "VARIABLE" == a ? a = yj(this.o.ra) : "PROCEDURE" == a && (a = Pj(this.o.ra));
    this.u.style.display = "block";
    for (var b = [], c = [], d = this.R.length = 0, e; e = a[d]; d++)
        if (e.tagName && "BLOCK" == e.tagName.toUpperCase()) {
            var f = Bd(e, this.o);
            f.disabled && this.R.push(f);
            b.push(f);
            e = parseInt(e.getAttribute("gap"), 10);
            c.push(isNaN(e) ? 3 * this.Ab : e)
        }
    zk(this, b, c);
    this.j.push(O(this.h, "mouseover", this, function() {
        for (var a = fg(this.o, !1), b = 0, c; c = a[b]; b++) c.je()
    }));
    this.g ? this.ob = 0 : this.S = 0;
    this.gf();
    Ak(this,
        fg(this.o, !1));
    this.Le();
    this.position();
    this.G = this.gf.bind(this);
    this.o.Bc(this.G)
};

function zk(a, b, c) {
    for (var d = a.Ab * a.o.scale, e = a.m ? d : d + 8, f = 0, h; h = b[f]; f++) {
        for (var l = h.Wa(), m = 0, n; n = l[m]; m++) n.D = !0;
        h.X();
        m = h.W();
        l = Uh(h);
        n = h.J ? 8 : 0;
        a.g && (e += n);
        h.moveBy(a.g && a.m ? -e : e, d);
        a.g ? e += l.width + c[f] - n : d += l.height + c[f];
        n = L("rect", {
            "fill-opacity": 0
        }, null);
        n.vb = h;
        qi(n);
        a.o.g.insertBefore(n, h.W());
        h.s = n;
        a.F[f] = n;
        l = a;
        l.ad ? (l.j.push(O(m, "mousedown", null, Bk(l, h))), l.j.push(O(n, "mousedown", null, Bk(l, h)))) : (l.j.push(O(m, "mousedown", null, Ck(l, h))), l.j.push(O(n, "mousedown", null, Ck(l, h))));
        l.j.push(O(m,
            "mouseover", h, h.we));
        l.j.push(O(m, "mouseout", h, h.je));
        l.j.push(O(n, "mouseover", h, h.we));
        l.j.push(O(n, "mouseout", h, h.je))
    }
}

function yk(a) {
    for (var b = fg(a.o, !1), c = 0, d; d = b[c]; c++) d.v == a.o && d.B(!1, !1);
    for (b = 0; c = a.F[b]; b++) E(c);
    a.F.length = 0
}

function Ck(a, b) {
    return function(c) {
        Kh();
        Q();
        Mg(c) ? $i(b, c) : (Og(Pg), rk = c, sk = b, tk = a, uk = O(document, "mouseup", this, a.Lg), vk = O(document, "mousemove", this, a.Vh));
        c.stopPropagation()
    }
}
g.Jg = function(a) {
    Mg(a) || (Q(!0), Dk(), this.ra = a.clientY, this.na = a.clientX, wk = O(document, "mousemove", this, this.Kg), uk = O(document, "mouseup", this, Dk), a.preventDefault(), a.stopPropagation())
};
g.Lg = function() {
    2 == K || Zf || J(new gi(sk, "click", 0, void 0));
    Kh()
};
g.Kg = function(a) {
    var b = this.Td();
    if (this.g) {
        if (!(0 > b.Pa - b.U)) {
            var c = a.clientX - this.na;
            this.na = a.clientX;
            a = b.Aa - c;
            a = Math.min(Math.max(a, 0), b.Pa - b.U);
            this.s.set(a)
        }
    } else 0 > b.Oa - b.qa || (c = a.clientY - this.ra, this.ra = a.clientY, a = b.wb - c, a = Math.min(Math.max(a, 0), b.Oa - b.qa), this.s.set(a))
};
g.Vh = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = a.clientX - rk.clientX;
        a = a.clientY - rk.clientY;
        Math.sqrt(b * b + a * a) > Vg && Bk(tk, sk)(rk)
    }
};

function Bk(a, b) {
    return function(c) {
        if (!Mg(c) && !b.disabled) {
            I++;
            var d = a.A,
                e = b.W();
            if (!e) throw "originBlock is not rendered.";
            var e = hh(e, d),
                f = a.o.scrollX,
                h = a.o.scale;
            e.x += f / h - f;
            3 == a.i && (f = d.xa().U - a.S, h = d.scale, e.x += f / h - f);
            f = a.o.scrollY;
            h = a.o.scale;
            e.y += f / h - f;
            1 == a.i && (f = d.xa().qa - a.ob, h = d.scale, e.y += f / h - f);
            h = hd(b);
            h = Bd(h, d);
            f = h.W();
            if (!f) throw "block is not rendered.";
            f = hh(f, d);
            f.x += d.scrollX / d.scale - d.scrollX;
            f.y += d.scrollY / d.scale - d.scrollY;
            d.P && !d.ya && (f.x += d.P.hb() / d.scale, f.y += d.P.ic() / d.scale);
            h.moveBy(e.x - f.x, e.y - f.y);
            I--;
            0 == I && (G(!0), J(new ag(h)));
            a.ad ? a.Eb() : a.Le();
            h.Wc(c);
            K = 2;
            Wi(h, !0)
        }
    }
}
g.Le = function() {
    for (var a = hg(this.A), b = fg(this.o, !1), c = 0, d; d = b[c]; c++)
        if (-1 == this.R.indexOf(d)) {
            var e = d.Wa();
            d.Tc(e.length > a)
        }
};
g.fd = function() {
    var a = this.u.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 0 == this.i ? new Ud(-1E9, c - 1E9, 2E9, 1E9 + a) : 1 == this.i ? new Ud(-1E9, c, 2E9, 1E9 + a) : 2 == this.i ? new Ud(b - 1E9, -1E9, 1E9 + d, 2E9) : new Ud(b, -1E9, 1E9 + d, 2E9)
};

function Dk() {
    uk && (P(uk), uk = null);
    vk && (P(vk), vk = null);
    wk && (P(wk), wk = null);
    uk && (P(uk), uk = null);
    tk = sk = rk = null
}
g.gf = function() {
    var a = fg(this.o, !1);
    if (this.g) {
        this.o.scale = this.A.scale;
        for (var b = 0, c = 0, d; d = a[c]; c++) b = Math.max(b, Uh(d).height);
        b += 1.5 * this.Ab;
        b *= this.o.scale;
        b += R;
        if (this.ob != b) {
            for (c = 0; d = a[c]; c++) {
                var e = Uh(d);
                if (d.s) {
                    d.s.setAttribute("width", e.width);
                    d.s.setAttribute("height", e.height);
                    var f = d.J ? 8 : 0,
                        h = d.aa();
                    d.s.setAttribute("y", h.y);
                    d.s.setAttribute("x", this.m ? h.x - e.width + f : h.x - f);
                    (e = d.bc ? 15 : 0) && d.moveBy(0, e);
                    d.s.setAttribute("y", h.y)
                }
            }
            this.ob = b;
            xg(this.o)
        }
    } else {
        this.o.scale = this.A.scale;
        for (c =
            b = 0; d = a[c]; c++) h = Uh(d).width, d.J && (h -= 8), b = Math.max(b, h);
        b += 1.5 * this.Ab + 8;
        b *= this.o.scale;
        b += R;
        if (this.S != b) {
            for (c = 0; d = a[c]; c++) h = Uh(d), this.m && (e = d.aa().x, f = b - this.Ab, f /= this.o.scale, f -= 8, d.moveBy(f - e, 0)), d.s && (d.s.setAttribute("width", h.width), d.s.setAttribute("height", h.height), f = d.J ? 8 : 0, e = d.aa(), d.s.setAttribute("x", this.m ? e.x - h.width + f : e.x - f), (h = d.bc ? 15 : 0) && d.moveBy(0, h), d.s.setAttribute("y", e.y));
            this.S = b;
            xg(this.o)
        }
    }
};

function Ak(a, b) {
    if (a.g && a.m) {
        a.position();
        try {
            var c = a.o.g.getBBox()
        } catch (f) {
            c = {
                height: 0,
                y: 0,
                width: 0,
                x: 0
            }
        }
        for (var c = Math.max(-c.x + a.Ab, a.S / a.o.scale), d = 0, e; e = b[d]; d++) e.moveBy(c, 0), e.s && e.s.setAttribute("x", c + Number(e.s.getAttribute("x")))
    }
};

function Ek(a) {
    if (a.hd && "function" == typeof a.hd) return a.hd();
    if (r(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function Fk(a) {
    this.i = void 0;
    this.Ka = {};
    if (a) {
        var b;
        if (a.Sd && "function" == typeof a.Sd) b = a.Sd();
        else if (a.hd && "function" == typeof a.hd) b = void 0;
        else if (ea(a) || r(a)) {
            b = [];
            for (var c = a.length, d = 0; d < c; d++) b.push(d)
        } else
            for (d in b = [], c = 0, a) b[c++] = d;
        a = Ek(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = Fk.prototype;
g.set = function(a, b) {
    Gk(this, a, b, !1)
};
g.add = function(a, b) {
    Gk(this, a, b, !0)
};

function Gk(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.Ka[f] || (a.Ka[f] = new Fk);
        a = a.Ka[f]
    }
    if (d && void 0 !== a.i) throw Error('The collection already contains the key "' + b + '"');
    a.i = c
}

function Hk(a, b) {
    var c;
    a: {
        c = a;
        for (var d = 0; d < b.length; d++)
            if (c = c.Ka[b.charAt(d)], !c) {
                c = void 0;
                break a
            }
    }
    return c ? c.i : void 0
}
g.hd = function() {
    var a = [];
    Ik(this, a);
    return a
};

function Ik(a, b) {
    void 0 !== a.i && b.push(a.i);
    for (var c in a.Ka) Ik(a.Ka[c], b)
}
g.Sd = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.Ka[e]) return [];
            c = c.Ka[e]
        }
        Jk(c, a, b)
    } else Jk(this, "", b);
    return b
};

function Jk(a, b, c) {
    void 0 !== a.i && c.push(b);
    for (var d in a.Ka) Jk(a.Ka[d], b + d, c)
}
g.clear = function() {
    this.Ka = {};
    this.i = void 0
};
g.clone = function() {
    return new Fk(this)
};
g.rg = function() {
    var a;
    if (a = void 0 === this.i) a: {
        a = this.Ka;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function Kk() {
    this.h = new Fk;
    this.g = "";
    this.s = this.A = null;
    this.i = this.j = 0
}

function lk(a, b) {
    var c = Aa(rc(b.ra));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Hk(a.h, c);
        d ? d.push(b) : a.h.set(c, [b])
    }
}

function Xj(a, b) {
    var c = Aa(rc(b.ra));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Hk(a.h, c);
        if (d) {
            for (var e = te(b), f = 0; f < e; f++) Xj(a, M(b, f));
            Ra(d, b);
            if (!d.length) {
                for (var e = c, f = a.h, c = [], h = 0; h < e.length; h++) {
                    d = e.charAt(h);
                    if (!f.Ka[d]) throw Error('The collection does not have the key "' + e + '"');
                    c.push([f, d]);
                    f = f.Ka[d]
                }
                for (delete f.i; 0 < c.length;)
                    if (d = c.pop(), e = d[0], d = d[1], e.Ka[d].rg()) delete e.Ka[d];
                    else break
            }
        }
    }
}

function Lk(a, b) {
    var c = !1,
        d = a.h.Sd(b);
    d && d.length && (a.i = 0, a.j = 0, c = Mk(a, Hk(a.h, d[0]))) && (a.A = d);
    return c
}

function Mk(a, b) {
    var c;
    b && (a.i < b.length && (c = b[a.i], a.s = b), c && (c.lf(), c.select()));
    return !!c
}
Kk.prototype.clear = function() {
    this.g = ""
};

function Nk(a) {
    Wb.call(this);
    this.g = a;
    a = y ? "focusout" : "blur";
    this.h = Kb(this.g, y ? "focusin" : "focus", this, !y);
    this.i = Kb(this.g, a, this, !y)
}
u(Nk, Wb);
Nk.prototype.handleEvent = function(a) {
    var b = new Eb(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    Xb(this, b)
};
Nk.prototype.Ba = function() {
    Nk.w.Ba.call(this);
    Rb(this.h);
    Rb(this.i);
    delete this.g
};

function Ok(a, b, c) {
    Uj.call(this, a, b, c);
    this.na = !0;
    ek(this, !0);
    this.j = this;
    this.R = new Kk;
    this.$b = this.bc = null;
    this.ac = !1;
    this.F = this.zc = this.va = !0;
    if (y) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {}
}
u(Ok, Uj);
g = Ok.prototype;
g.Ra = function() {
    return this
};
g.Ec = function() {
    return 0
};
g.lf = function() {};
g.Lh = function() {
    this.ac = !0;
    ze(this.C(), "focused");
    this.j && this.j.select()
};
g.Hh = function() {
    this.ac = !1;
    Be(this.C(), "focused")
};
g.La = function() {
    return !this.F || Ok.w.La.call(this)
};
g.mb = function(a) {
    this.F ? Ok.w.mb.call(this, a) : this.na = a
};
g.Ne = function() {
    return zc
};
g.Rd = function() {
    var a = ck(this);
    return a ? a.firstChild : null
};
g.Qd = function() {
    return null
};
g.Vc = function() {};
g.gd = function() {
    return Ok.w.gd.call(this) + (this.F ? "" : " " + this.h.Sf)
};
g.Od = function() {
    var a = this.La(),
        b = this.te;
    if (a && b) return b;
    b = this.ve;
    if (!a && b) return b;
    b = this.h;
    return a && b.Rf ? b.ec + " " + b.Rf : !a && b.Nf ? b.ec + " " + b.Nf : ""
};
g.Wb = function(a) {
    if (this.j != a) {
        var b = !1;
        this.j && (b = null == this.j, ek(this.j, !1));
        if (this.j = a) ek(a, !0), b && a.select();
        Xb(this, "change")
    }
};

function Pk(a) {
    0 != a.va && (a.va = !1, a.Z && Qk(a))
}

function Qk(a) {
    function b(a) {
        var e = Zj(a);
        if (e) {
            var f = !c || (a.getParent(), 0) ? a.h.Lf : a.h.Kf;
            e.className = f;
            if (e = a.Qd()) e.className = ik(a)
        }
        se(a, b)
    }
    var c = a.va;
    b(a)
}

function Rk(a) {
    0 != a.zc && (a.zc = !1, a.Z && Qk(a))
}

function Sk(a) {
    if (0 != a.F) {
        a.F = !1;
        if (a.Z) {
            var b = ck(a);
            b && (b.className = a.gd())
        }
        a.j == a && M(a, 0) && a.Wb(M(a, 0))
    }
}
g.ae = function() {
    Ok.w.ae.call(this);
    var a = this.C();
    Ge(a, "tree");
    He(a, "labelledby", Yj(this).id)
};
g.Ga = function() {
    Ok.w.Ga.call(this);
    var a = this.C();
    a.className = this.h.Vf;
    a.setAttribute("hideFocus", "true");
    a = this.C();
    a.tabIndex = 0;
    var b = this.bc = new We(a),
        c = this.$b = new Nk(a);
    oe(this).T(c, "focusout", this.Hh).T(c, "focusin", this.Lh).T(b, "key", this.jb).T(a, "mousedown", this.Se).T(a, "click", this.Se).T(a, "dblclick", this.Se);
    this.ae()
};
g.$a = function() {
    Ok.w.$a.call(this);
    this.bc.B();
    this.bc = null;
    this.$b.B();
    this.$b = null
};
g.Se = function(a) {
    var b = Tk(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.df(a);
            break;
        case "click":
            a.preventDefault();
            break;
        case "dblclick":
            b.wg(a)
    }
};
g.jb = function(a) {
    var b;
    b = this.R;
    var c = !1;
    switch (a.g) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                var c = 40 == a.g ? 1 : -1,
                    d = b.A;
                if (d) {
                    var e = null,
                        f = !1;
                    if (b.s) {
                        var h = b.i + c;
                        0 <= h && h < b.s.length ? (b.i = h, e = b.s) : f = !0
                    }
                    e || (h = b.j + c, 0 <= h && h < d.length && (b.j = h), d.length > b.j && (e = Hk(b.h, d[b.j])), e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
                    Mk(b, e) && (b.A = d)
                }
                c = !0
            }
            break;
        case 8:
            d = b.g.length - 1;
            c = !0;
            0 < d ? (b.g = b.g.substring(0, d), Lk(b, b.g)) : 0 == d ? b.g = "" : c = !1;
            break;
        case 27:
            b.g = "", c = !0
    }
    if (!(b = c) && (b = this.j)) {
        b = this.j;
        c = !0;
        switch (a.g) {
            case 39:
                if (a.altKey) break;
                ve(b) && (b.La() ? M(b, 0).select() : b.mb(!0));
                break;
            case 37:
                if (a.altKey) break;
                ve(b) && b.La() ? b.mb(!1) : (d = b.getParent(), e = b.Ra(), d && (e.F || d != e) && d.select());
                break;
            case 40:
                a: if (ve(b) && b.La()) d = M(b, 0);
                    else {
                        for (d = b; d != b.Ra();) {
                            e = d.kb;
                            if (null != e) {
                                d = e;
                                break a
                            }
                            d = d.getParent()
                        }
                        d = null
                    }
                d && d.select();
                break;
            case 38:
                d = b.pc;
                null != d ? d = kk(d) : (d = b.getParent(), e = b.Ra(), d = !e.F && d == e || b == e ? null : d);
                d && d.select();
                break;
            default:
                c = !1
        }
        c && (a.preventDefault(), (e = b.Ra()) && e.R.clear());
        b = c
    }
    b || (b = this.R, c = !1, a.ctrlKey || a.altKey || (d =
        String.fromCharCode(a.s || a.g).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.g) && (b.g += d, c = Lk(b, b.g))), b = c);
    b && a.preventDefault();
    return b
};

function Tk(a, b) {
    for (var c, d = b.target; null != d;) {
        if (c = Wj[d.id]) return c;
        if (d == a.C()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function(a) {
    return new mk(a || zc, this.h, this.s)
};

function Ah(a) {
    this.o = a;
    this.m = a.options.m;
    this.h = a.options.Rb;
    this.$ = a.options.$;
    this.g = {
        Xe: 19,
        Vf: "blocklyTreeRoot",
        Sf: "blocklyHidden",
        Tf: "",
        Ee: "blocklyTreeRow",
        Uf: "blocklyTreeLabel",
        ec: "blocklyTreeIcon",
        Ce: "blocklyTreeIconOpen",
        De: "blocklyTreeIconNone",
        Wf: "blocklyTreeSelected"
    };
    this.i = {
        Ee: "blocklyTreeSeparator"
    };
    this.h && (this.g.cssTreeRow += a.m ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.i.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.m ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.g.cssTreeIcon = "")
}
g = Ah.prototype;
g.width = 0;
g.height = 0;
g.nd = null;
g.ga = function() {
    var a = this.o;
    this.zb = D("div", "blocklyToolboxDiv");
    this.zb.setAttribute("dir", a.m ? "RTL" : "LTR");
    document.body.appendChild(this.zb);
    O(this.zb, "mousedown", this, function(a) {
        Mg(a) || a.target == this.zb ? Q(!1) : Q(!0)
    });
    this.V = new Dh({
        dd: a.options.dd,
        tb: a,
        m: a.m,
        Rb: a.Rb,
        $: a.options.$
    });
    Tc(Eh(this.V), a.u);
    this.V.ga(a);
    this.g.cleardotPath = a.options.j + "1x1.gif";
    this.g.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.m ? "Rtl" : "Ltr");
    var b = new Uk(this, this.g);
    this.Xb = b;
    Sk(b);
    Pk(b);
    Rk(b);
    b.Wb(null);
    Vk(this,
        a.options.A);
    b.X(this.zb);
    Wk(this);
    this.position()
};
g.B = function() {
    this.V.B();
    this.Xb.B();
    E(this.zb);
    this.nd = this.o = null
};
g.hb = function() {
    return this.width
};
g.ic = function() {
    return this.height
};
g.position = function() {
    var a = this.zb;
    if (a) {
        var b = gh(this.o),
            c = Zd(b),
            b = Xk(b);
        this.h ? (a.style.left = c.x + "px", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, a.style.top = 0 == this.$ ? c.y + "px" : c.y + b.height - a.offsetHeight + "px") : (a.style.left = 3 == this.$ ? c.x + b.width - a.offsetWidth + "px" : c.x + "px", a.style.height = b.height + "px", a.style.top = c.y + "px", this.width = a.offsetWidth, 2 == this.$ && --this.width);
        this.V.position()
    }
};

function Vk(a, b) {
    function c(a, b, m) {
        for (var n = null, p = 0, q; q = a.childNodes[p]; p++)
            if (q.tagName) switch (q.tagName.toUpperCase()) {
                case "CATEGORY":
                    n = d.createNode(q.getAttribute("name"));
                    n.Hb = [];
                    b.add(n);
                    var A = q.getAttribute("custom");
                    A ? n.Hb = A : c(q, n, m);
                    A = q.getAttribute("colour");
                    r(A) ? (A.match(/^#[0-9a-fA-F]{6}$/) ? n.Zd = A : n.Zd = Ni(Oi(A)), f = !0) : n.Zd = "";
                    "true" == q.getAttribute("expanded") ? (n.Hb.length && d.Wb(n), n.mb(!0)) : n.mb(!1);
                    n = q;
                    break;
                case "SEP":
                    n && ("CATEGORY" == n.tagName.toUpperCase() ? b.add(new Yk(e.i)) : (q =
                        parseFloat(q.getAttribute("gap")), isNaN(q) || (A = parseFloat(n.getAttribute("gap")), n.setAttribute("gap", isNaN(A) ? q : A + q))));
                    break;
                case "BLOCK":
                case "SHADOW":
                    b.Hb.push(q), n = q
            }
    }
    var d = a.Xb,
        e = a;
    d.zg();
    d.Hb = [];
    var f = !1;
    c(b, a.Xb, a.o.options.j);
    a.j = f;
    if (d.Hb.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    xg(a.o)
}

function Wk(a, b) {
    for (var c = (b || a.Xb).hc(), d = 0, e; e = c[d]; d++) {
        var f = ck(e);
        if (f) {
            var h = a.j ? "8px solid " + (e.Zd || "#ddd") : "none";
            a.o.m ? f.style.borderRight = h : f.style.borderLeft = h
        }
        Wk(a, e)
    }
}
g.fd = function() {
    var a = this.zb.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 2 == this.$ ? new Ud(-1E7, -1E7, 1E7 + b + d, 2E7) : 3 == this.$ ? new Ud(b, -1E7, 1E7 + d, 2E7) : 0 == this.$ ? new Ud(-1E7, -1E7, 2E7, 1E7 + c + a) : new Ud(0, c, 2E7, 1E7 + d)
};

function Uk(a, b) {
    this.P = a;
    Ok.call(this, zc, b)
}
u(Uk, Ok);
Uk.prototype.Ga = function() {
    Uk.w.Ga.call(this);
    if (Cb) {
        var a = this.C();
        O(a, "touchstart", this, this.ue)
    }
};
Uk.prototype.ue = function(a) {
    a.preventDefault();
    var b = Tk(this, a);
    b && "touchstart" === a.type && setTimeout(function() {
        b.df(a)
    }, 1)
};
Uk.prototype.createNode = function(a) {
    return new Zk(this.P, a ? sc(a) : zc, this.h, this.s)
};
Uk.prototype.Wb = function(a) {
    var b = this.P;
    if (a != this.j && a != b.Xb) {
        b.nd && (ck(b.nd).style.backgroundColor = "");
        if (a) {
            var c = a.Zd || "#57e";
            ck(a).style.backgroundColor = c;
            Wk(b, a)
        }
        c = this.j;
        Ok.prototype.Wb.call(this, a);
        a && a.Hb && a.Hb.length ? (b.V.show(a.Hb), b.nd != a && Kj(b.V)) : b.V.Eb();
        c != a && c != this && (c = new gi(null, "category", c && rc(c.ra), a && rc(a.ra)), c.g = b.o.id, J(c));
        a && (b.nd = a)
    }
};

function Zk(a, b, c, d) {
    Uj.call(this, b, c, d);
    a && (b = function() {
        Gj(a.o)
    }, Kb(a.Xb, "expand", b), Kb(a.Xb, "collapse", b))
}
u(Zk, mk);
Zk.prototype.Ne = function() {
    return xc("span")
};
Zk.prototype.df = function() {
    ve(this) ? (this.mb(!this.La()), this.select()) : this.pb ? this.Ra().Wb(null) : this.select();
    fk(this)
};
Zk.prototype.wg = function() {};

function Yk(a) {
    Zk.call(this, null, "", a)
}
u(Yk, Zk);
var jj = /#(.)(.)(.)/;

function Ni(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = $k(b.toString(16));
    c = $k(c.toString(16));
    a = $k(a.toString(16));
    return "#" + b + c + a
}
var ij = /^#(?:[0-9a-f]{3}){1,2}$/i;

function $k(a) {
    return 1 == a.length ? "0" + a : a
}

function Oi(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 165.75 * .55;
    var h = 165.75 * (1 - .45 * f),
        f = 165.75 * (1 - .45 * (1 - f));
    switch (e) {
        case 1:
            b = h;
            c = 165.75;
            d = a;
            break;
        case 2:
            b = a;
            c = 165.75;
            d = f;
            break;
        case 3:
            b = a;
            c = h;
            d = 165.75;
            break;
        case 4:
            b = f;
            c = a;
            d = 165.75;
            break;
        case 5:
            b = 165.75;
            c = a;
            d = h;
            break;
        case 6:
        case 0:
            b = 165.75, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function kj(a, b, c) {
    c = Math.min(Math.max(c, 0), 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};

function al(a, b, c, d) {
    this.M = null;
    this.s = Number(c);
    this.S = Number(b);
    this.j = new Bc(this.S, this.s + 10);
    this.ha = d || "";
    this.fb(a)
}
u(al, yi);
g = al.prototype;
g.ff = null;
g.xc = !1;
g.ga = function() {
    if (!this.g) {
        this.g = L("g", {}, null);
        this.wc || (this.g.style.display = "none");
        this.i = L("image", {
            height: this.s + "px",
            width: this.S + "px"
        }, this.g);
        this.fb(this.D);
        lb && (this.ff = L("rect", {
            height: this.s + "px",
            width: this.S + "px",
            "fill-opacity": 0
        }, this.g));
        this.M.W().appendChild(this.g);
        var a = this.ff || this.i;
        a.vb = this.M;
        qi(a)
    }
};
g.B = function() {
    E(this.g);
    this.ff = this.i = this.g = null
};
g.Ob = function() {
    return this.D
};
g.fb = function(a) {
    null !== a && (this.D = a, this.i && this.i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",  r(a) ? a : ""))
};
g.Zb = function(a) {
    null !== a && (this.ha = a)
};
g.oe = function() {};
var Yh = null,
    U = null,
    td = null,
    ud = null,
    yd = [],
    Jh = null,
    bj = null,
    K = 0,
    Ph = null;

function Xk(a) {
    return {
        width: a.Ef,
        height: a.Df
    }
}

function Gj(a) {
    for (; a.options.tb;) a = a.options.tb;
    var b = gh(a),
        c = b.parentNode;
    if (c) {
        var d = c.offsetWidth,
            c = c.offsetHeight;
        b.Ef != d && (b.setAttribute("width", d + "px"), b.Ef = d);
        b.Df != c && (b.setAttribute("height", c + "px"), b.Df = c);
        a.resize()
    }
}

function Qh() {
    var a = Yh;
    Og(Xi);
    a.Ze = !1;
    Ph && (P(Ph), Ph = null);
    bd && (P(bd), bd = null)
}

function Rh(a) {
    if (!(a.touches && 2 <= a.touches.length)) {
        var b = Yh;
        if (b.Ze) {
            var c = a.clientX - b.Va,
                d = a.clientY - b.pb,
                e = b.Ma,
                f = b.vf + c,
                h = b.wf + d,
                f = Math.min(f, -e.Ya),
                h = Math.min(h, -e.Za),
                f = Math.max(f, e.U - e.Ya - e.Pa),
                h = Math.max(h, e.qa - e.Za - e.Oa);
            b.ya.set(-f - e.Ya, -h - e.Za);
            Math.sqrt(c * c + d * d) > Vg && dj();
            a.stopPropagation();
            a.preventDefault()
        }
    }
}

function Mj(a) {
    if (!Yh.options.i && !Ng(a)) {
        var b = !1;
        if (27 == a.keyCode) Q();
        else if (8 == a.keyCode || 46 == a.keyCode) a.preventDefault(), U && og(U) && (b = !0);
        else if (a.altKey || a.ctrlKey || a.metaKey) U && og(U) && xd(U) && (67 == a.keyCode ? (Q(), cj(U)) : 88 == a.keyCode && (cj(U), b = !0)), 86 == a.keyCode ? Jh && Ih(bj) : 90 == a.keyCode && (Q(), Yh.zf(a.shiftKey));
        b && (G(!0), Q(), U.B(2 != K, !0), td && (Rd(), td = null), G(!1))
    }
}

function Kh() {
    Ui();
    Dk()
}
var bl = 0;

function zh(a, b) {
    dj();
    bl = setTimeout(function() {
        a.button = 2;
        b.Wc(a)
    }, 750)
}

function dj() {
    bl && (clearTimeout(bl), bl = 0)
}

function cj(a) {
    var b = hd(a);
    if (2 != K)
        for (var c = 0, d; d = b.childNodes[c]; c++)
            if ("next" == d.nodeName.toLowerCase()) {
                b.removeChild(d);
                break
            }
    c = a.aa();
    b.setAttribute("x", a.m ? -c.x : c.x);
    b.setAttribute("y", c.y);
    Jh = b;
    bj = a.v
}

function Q(a) {
    ui();
    $f();
    a || (a = Yh, a.P && a.P.V && a.P.V.ad && a.P.Xb.Wb(null))
}

function Hj() {
    var a, b, c, d, e = Xk(gh(this));
    if (this.P)
        if (0 == this.$ || 1 == this.$) e.height -= this.P.ic();
        else if (2 == this.$ || 3 == this.$) e.width -= this.P.hb();
    var f = Dh.prototype.O - 1,
        h = e.width - f,
        f = e.height - f;
    a = fg(this);
    if (a.length) {
        d = Yi(a[0]);
        for (b = 1; b < a.length; b++) {
            var l = Yi(a[b]);
            l.cb.x < d.cb.x && (d.cb.x = l.cb.x);
            l.rb.x > d.rb.x && (d.rb.x = l.rb.x);
            l.cb.y < d.cb.y && (d.cb.y = l.cb.y);
            l.rb.y > d.rb.y && (d.rb.y = l.rb.y)
        }
        a = d.cb.x;
        b = d.cb.y;
        c = d.rb.x - d.cb.x;
        d = d.rb.y - d.cb.y
    } else d = c = b = a = 0;
    var m = c * this.scale,
        l = d * this.scale,
        n = a * this.scale,
        p = b * this.scale;
    this.ya ? (a = Math.min(n - h / 2, n + m - h), h = Math.max(n + m + h / 2, n + h), b = Math.min(p - f / 2, p + l - f), f = Math.max(p + l + f / 2, p + f)) : (h = a + c, f = b + d);
    d = 0;
    this.P && 2 == this.$ && (d = this.P.hb());
    l = 0;
    this.P && 0 == this.$ && (l = this.P.ic());
    return {
        qa: e.height,
        U: e.width,
        Oa: f - b,
        Pa: h - a,
        wb: -this.scrollY,
        Aa: -this.scrollX,
        Za: b,
        Ya: a,
        Ja: l,
        Fa: d,
        Jp: this.P ? this.P.hb() : 0,
        Ip: this.P ? this.P.ic() : 0,
        Nd: this.V ? this.V.hb() : 0,
        eg: this.V ? this.V.ic() : 0,
        $: this.$
    }
}

function Ij(a) {
    if (!this.ya) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = this.xa();
    t(a.x) && (this.scrollX = -b.Pa * a.x - b.Ya);
    t(a.y) && (this.scrollY = -b.Oa * a.y - b.Za);
    a = this.scrollX + b.Fa;
    b = this.scrollY + b.Ja;
    this.translate(a, b);
    this.options.s && (this.options.s.setAttribute("x", a), this.options.s.setAttribute("y", b), y && Ch(this))
}
k.Blockly || (k.Blockly = {});
k.Blockly.getMainWorkspace = function() {
    return Yh
};
k.Blockly.addChangeListener = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return Yh.Bc(a)
};

function cl(a, b) {
    var c;
    c = a.className;
    for (var d = c = r(c) && c.match(/\S+/g) || [], e = Va(arguments, 1), f = 0; f < e.length; f++) Qa(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var dl = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    el = "ace ar fa he mzn ps".split(" "),
    fl = window.BlocklyGamesLang,
    gl = window.BlocklyGamesLanguages,
    hl = !!window.location.pathname.match(/\.html$/),
    T = null;

function il() {
    return -1 != el.indexOf(fl)
}
var jl, kl = Number,
    ll, ml = window.location.search.match(/[?&]level=([^&]+)/);
ll = ml ? decodeURIComponent(ml[1].replace(/\+/g, "%20")) : "NaN";
var nl = kl(ll);
jl = isNaN(nl) ? 1 : Math.min(Math.max(1, nl), 10);

function ol() {
    document.title = document.getElementById("title").textContent;
    document.dir = il() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", fl);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < gl.length; c++) {
            var d = gl[c];
            b.push([dl[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == fl && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (c =
        1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!pl(c), a && b && cl(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(ql, 1)
}

function pl(a) {
    var b = rl,
        c;
    try {
        c = window.localStorage[b + a]
    } catch (d) {}
    return c
}

function X(a) {
    var b = sl(a);
    return null === b ? "[Unknown message: " + a + "]" : b
}

function sl(a) {
    return (a = document.getElementById(a)) ? (a = a.textContent, a = a.replace(/\\n/g, "\n")) : null
}

function tl(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function ql() {
    if (!hl) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function() {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
ci.animal = {
    ga: function() {
        this.Xc(120);
        Gi(this.Bb(5, ""), "", "NAME");
        var a = Gi,
            b;
        b = this.Bb(1, "PIC");
        a(Ii(b), X("Puzzle_picture"));
        Gi(Gi(Ii(this.Bb(5, "")), X("Puzzle_legs")), new rj(ul), "LEGS");
        a = Gi;
        b = this.Bb(3, "TRAITS");
        a(b, X("Puzzle_traits"));
        this.Uc(!1)
    },
    nc: function() {
        var a = document.createElement("mutation");
        a.setAttribute("animal", this.A);
        return a
    },
    fc: function(a) {
        this.na(parseInt(a.getAttribute("animal"), 10))
    },
    A: 0,
    na: function(a) {
        this.A = a;
        var b = X("Puzzle_animal" + a);
        zg(this, "NAME").fb(b);
        this.ra = X("Puzzle_animal" +
            a + "HelpUrl")
    },
    pb: function() {
        var a = zg(this, "LEGS");
        return (a ? a.Ob() : null) == this.A
    }
};
ci.picture = {
    ga: function() {
        this.Xc(30);
        this.Bb(5, "PIC");
        this.qf(!0);
        this.vb = ""
    },
    nc: ci.animal.nc,
    fc: ci.animal.fc,
    A: 0,
    na: function(a) {
        this.A = a;
        var b = "puzzle/" + X("Puzzle_animal" + a + "Pic"),
            c = X("Puzzle_animal" + a + "PicHeight");
        a = X("Puzzle_animal" + a + "PicWidth");
        Gi(Ag(this, "PIC"), new al(b, a, c))
    },
    pb: function() {
        var a = this.getParent();
        return a && a.A == this.A
    }
};
ci.trait = {
    ga: function() {
        this.Xc(290);
        Gi(this.Bb(5, ""), "", "NAME");
        this.sf(!0);
        this.pf(!0)
    },
    nc: function() {
        var a = document.createElement("mutation");
        a.setAttribute("animal", this.A);
        a.setAttribute("trait", this.Zc);
        return a
    },
    fc: function(a) {
        this.na(parseInt(a.getAttribute("animal"), 10), parseInt(a.getAttribute("trait"), 10))
    },
    A: 0,
    Zc: 0,
    na: function(a, b) {
        this.A = a;
        this.Zc = b;
        var c = X("Puzzle_animal" + a + "Trait" + b);
        zg(this, "NAME").fb(c)
    },
    pb: function() {
        var a = Mi(this);
        return a && a.A == this.A
    }
};
V.Dp = {};
V.Eg = "A\u00f1adir comentario";
V.ni = "Autoriza a esta aplicaci\u00f3n para guardar tu trabajo y permitir que lo compartas.";
V.oi = "Cambiar el valor:";
V.pi = "\u00a1Chatea con tu colaborador escribiendo en este cuadro!";
V.Ng = "Limpiar los bloques";
V.Og = "Contraer bloques";
V.Pg = "Contraer bloque";
V.ri = "color 1";
V.ti = "color 2";
V.ui = "http://meyerweb.com/eric/tools/color-blend/";
V.wi = "proporci\u00f3n";
V.xi = "combinar";
V.yi = "Combina dos colores con una proporci\u00f3n determinada (0,0\u20131,0).";
V.zi = "https://es.wikipedia.org/wiki/Color";
V.Ai = "Elige un color de la paleta.";
V.Bi = "http://randomcolour.com";
V.Ci = "color aleatorio";
V.Di = "Elige un color al azar.";
V.Ei = "azul";
V.Fi = "verde";
V.Gi = "http://www.december.com/html/spec/colorper.html";
V.Hi = "rojo";
V.Ii = "colorear con";
V.Ji = "Crea un color con cantidades espec\u00edficas de rojo, verde y azul. Todos los valores deben encontrarse entre 0 y 100.";
V.Ki = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
V.Li = "romper el bucle";
V.Mi = "continuar con la siguiente iteraci\u00f3n del bucle";
V.Ni = "Romper el bucle que lo contiene.";
V.Oi = "Saltar el resto de este bucle, y continuar con la siguiente iteraci\u00f3n.";
V.Pi = "ADVERTENCIA: Este bloque puede usarse s\u00f3lo dentro de un bucle.";
V.Qi = "https://es.wikipedia.org/wiki/Foreach";
V.Si = "para cada elemento %1 en la lista %2";
V.Ti = "Para cada elemento en una lista, establecer la variable '%1' al elemento y luego hacer algunas declaraciones.";
V.Ui = "https://github.com/google/blockly/wiki/Loops#count-with";
V.Wi = "contar con %1 desde %2 hasta %3 de a %4";
V.Xi = 'Hacer que la variable "%1" tome los valores desde el n\u00famero de inicio hasta el n\u00famero final, contando con el intervalo especificado, y hacer los bloques especificados.';
V.Zi = "Agregar una condici\u00f3n a este bloque.";
V.aj = "Agregar una condici\u00f3n general final a este bloque.";
V.bj = "https://github.com/google/blockly/wiki/IfElse";
V.dj = "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque.";
V.Qg = "sino";
V.Rg = "sino si";
V.Sg = "si";
V.fj = "Si un valor es verdadero, entonces hacer algunas declaraciones.";
V.gj = "Si un valor es verdadero, entonces hacer el primer bloque de declaraciones.  De lo contrario, hacer el segundo bloque de declaraciones.";
V.hj = "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones.";
V.ij = "Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones. Si ninguno de los valores son verdaderos, hacer el \u00faltimo bloque de declaraciones.";
V.jj = "https://es.wikipedia.org/wiki/Bucle_for";
V.Cd = "hacer";
V.kj = "repetir %1 veces";
V.lj = "Hacer algunas declaraciones varias veces.";
V.mj = "https://github.com/google/blockly/wiki/Loops#repeat";
V.oj = "repetir hasta";
V.pj = "repetir mientras";
V.qj = "Mientras un valor sea falso, entonces hacer algunas declaraciones.";
V.rj = "Mientras un valor sea verdadero, entonces hacer algunas declaraciones.";
V.Ug = "\u00bfEliminar todos los %1 bloques?";
V.Af = "Eliminar bloque";
V.Bf = "Eliminar %1 bloques";
V.Vg = "Desactivar bloque";
V.Wg = "Duplicar";
V.Xg = "Activar bloque";
V.Yg = "Expandir bloques";
V.Zg = "Expandir bloque";
V.$g = "Entradas externas";
V.bh = "Ayuda";
V.dh = "Entradas en l\u00ednea";
V.uj = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
V.vj = "crear lista vac\u00eda";
V.wj = "Devuelve una lista, de longitud 0, sin ning\u00fan dato";
V.xj = "lista";
V.yj = "Agregar, eliminar o reorganizar las secciones para reconfigurar este bloque de lista.";
V.zj = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.Aj = "crear lista con";
V.Cj = "Agregar un elemento a la lista.";
V.Dj = "Crear una lista con cualquier n\u00famero de elementos.";
V.Ej = "primero";
V.Fj = "# del final";
V.Gj = "#";
V.Hj = "obtener";
V.Ij = "obtener y eliminar";
V.Lj = "\u00faltimo";
V.Mj = "aleatorio";
V.Nj = "eliminar";
V.Oj = "";
V.Pj = "Devuelve el primer elemento de una lista.";
V.Qj = "Devuelve el elemento en la posici\u00f3n especificada en una lista. #1 es el \u00faltimo elemento.";
V.Rj = "Devuelve el elemento en la posici\u00f3n especificada en la lista. #1 es el primer elemento.";
V.Sj = "Devuelve el \u00faltimo elemento de una lista.";
V.Tj = "Devuelve un elemento aleatorio en una lista.";
V.Uj = "Elimina y devuelve el primer elemento de una lista.";
V.Vj = "Elimina y devuelve el elemento en la posici\u00f3n especificada en la lista. #1 es el \u00faltimo elemento.";
V.Wj = "Elimina y devuelve el elemento en la posici\u00f3n especificada en la lista. #1 es el primer elemento.";
V.Xj = "Elimina y devuelve el \u00faltimo elemento de una lista.";
V.Yj = "Elimina y devuelve un elemento aleatorio en una lista.";
V.Zj = "Elimina el primer elemento de una lista.";
V.$j = "Elimina el elemento en la posici\u00f3n especificada en la lista. #1 es el \u00faltimo elemento.";
V.ak = "Elimina el elemento en la posici\u00f3n especificada en la lista. #1 es el primer elemento.";
V.bk = "Elimina el \u00faltimo elemento de una lista.";
V.ck = "Elimina un elemento aleatorio en una lista.";
V.dk = "hasta # del final";
V.ek = "hasta #";
V.fk = "hasta el \u00faltimo";
V.gk = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
V.ik = "obtener sublista desde el primero";
V.jk = "obtener sublista desde # del final";
V.kk = "obtener sublista desde #";
V.lk = "";
V.nk = "Crea una copia de la parte especificada de una lista.";
V.pk = "encontrar la primera aparici\u00f3n del elemento";
V.eh = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
V.rk = "encontrar la \u00faltima aparici\u00f3n del elemento";
V.tk = "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del elemento en la lista. Devuelve 0 si el elemento no se encuentra.";
V.Dd = "en la lista";
V.vk = "https://github.com/google/blockly/wiki/Lists#is-empty";
V.wk = "%1 est\u00e1 vac\u00eda";
V.xk = "Devuelve verdadero si la lista est\u00e1 vac\u00eda.";
V.yk = "https://github.com/google/blockly/wiki/Lists#length-of";
V.zk = "longitud de %1";
V.Ak = "Devuelve la longitud de una lista.";
V.Bk = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.Ck = "crear lista con el elemento %1 repetido %2 veces";
V.Dk = "Crea una lista que consta de un valor dado repetido el n\u00famero de veces especificado.";
V.Ek = "https://github.com/google/blockly/wiki/Lists#in-list--set";
V.Gk = "como";
V.Hk = "insertar en";
V.Ik = "establecer";
V.Jk = "Inserta el elemento al inicio de una lista.";
V.Kk = "Inserta el elemento en la posici\u00f3n especificada en la lista. #1 es el \u00faltimo elemento.";
V.Lk = "Inserta el elemento en la posici\u00f3n especificada en la lista. #1 es el primer elemento.";
V.Mk = "A\u00f1ade el elemento al final de una lista.";
V.Nk = "Inserta el elemento aleatoriamente en una lista.";
V.Ok = "Establece el primer elemento de una lista.";
V.Pk = "Establece el elemento en la posici\u00f3n especificada en una lista. #1 es el \u00faltimo elemento.";
V.Qk = "Establece el elemento en la posici\u00f3n especificada en una lista. #1 es el primer elemento.";
V.Rk = "Establece el \u00faltimo elemento de una lista.";
V.Sk = "Establece un elemento aleatorio en una lista.";
V.Tk = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
V.Uk = "ascendente";
V.Vk = "descendente";
V.Wk = "orden %1 %2 %3";
V.Xk = "Ordenar una copia de una lista.";
V.Yk = "alfab\u00e9tico, ignorar may\u00fascula/min\u00fascula";
V.Zk = "num\u00e9rico";
V.$k = "alfab\u00e9tico";
V.al = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
V.bl = "hacer lista a partir de texto";
V.cl = "hacer texto a partir de lista";
V.dl = "Unir una lista de textos en un solo texto, separado por un delimitador.";
V.fl = "Dividir el texto en una lista de textos, separando en cada delimitador.";
V.hl = "con delimitador";
V.il = "falso";
V.jl = "https://github.com/google/blockly/wiki/Logic#values";
V.kl = "Devuelve verdadero o falso.";
V.ll = "verdadero";
V.ol = "https://es.wikipedia.org/wiki/Desigualdad_matem\u00e1tica";
V.ql = "Devuelve verdadero si ambas entradas son iguales.";
V.rl = "Devuelve verdadero si la primera entrada es mayor que la segunda entrada.";
V.sl = "Devuelve verdadero si la primera entrada es mayor o igual a la segunda entrada.";
V.ul = "Devuelve verdadero si la primera entrada es menor que la segunda entrada.";
V.vl = "Devuelve verdadero si la primera entrada es menor que o igual a la segunda entrada.";
V.wl = "Devuelve verdadero si ambas entradas son distintas.";
V.xl = "https://github.com/google/blockly/wiki/Logic#not";
V.yl = "no %1";
V.zl = "Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.";
V.Al = "nulo";
V.Bl = "https://en.wikipedia.org/wiki/Nullable_type";
V.Cl = "Devuelve nulo.";
V.Dl = "y";
V.El = "https://github.com/google/blockly/wiki/Logic#logical-operations";
V.Fl = "o";
V.Gl = "Devuelve verdadero si ambas entradas son verdaderas.";
V.Hl = "Devuelve verdadero si al menos una de las entradas es verdadera.";
V.Il = "prueba";
V.Jl = "https://en.wikipedia.org/wiki/%3F:";
V.Kl = "si es falso";
V.Ll = "si es verdadero";
V.Ml = 'Comprueba la condici\u00f3n en "prueba". Si la condici\u00f3n es verdadera, devuelve el valor "si es verdadero"; de lo contrario, devuelve el valor "si es falso".';
V.Nl = "+";
V.Ol = "https://es.wikipedia.org/wiki/Aritm\u00e9tica";
V.Pl = "Devuelve la suma de ambos n\u00fameros.";
V.Ql = "Devuelve el cociente de ambos n\u00fameros.";
V.Rl = "Devuelve la diferencia de ambos n\u00fameros.";
V.Sl = "Devuelve el producto de ambos n\u00fameros.";
V.Tl = "Devuelve el primer n\u00famero elevado a la potencia del segundo.";
V.Ul = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
V.Vl = "cambiar %1 por %2";
V.Xl = "A\u00f1adir un n\u00famero a la variable \u00ab%1\u00bb.";
V.Yl = "https://es.wikipedia.org/wiki/Anexo:Constantes_matem\u00e1ticas";
V.Zl = "Devuelve una de las constantes comunes: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026) o \u221e (infinito).";
V.$l = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
V.am = "limitar %1 entre %2 y %3";
V.bm = "Limitar un n\u00famero entre los l\u00edmites especificados (inclusive).";
V.cm = "\u00f7";
V.dm = "es divisible por";
V.em = "es par";
V.fm = "es negativo";
V.gm = "es impar";
V.hm = "es positivo";
V.im = "es primo";
V.jm = "Comprueba si un n\u00famero es par, impar, primo, entero, positivo, negativo, o si es divisible por un n\u00famero determinado. Devuelve verdadero o falso.";
V.lm = "es entero";
V.mm = "https://en.wikipedia.org/wiki/Modulo_operation";
V.nm = "resto de %1 \u00f7 %2";
V.om = "Devuelve el resto al dividir los dos n\u00fameros.";
V.pm = "\u00d7";
V.qm = "https://es.wikipedia.org/wiki/N\u00famero";
V.rm = "Un n\u00famero.";
V.sm = "";
V.tm = "promedio de la lista";
V.um = "m\u00e1ximo de la lista";
V.vm = "mediana de la lista";
V.wm = "m\u00ednimo de la lista";
V.xm = "modas de la lista";
V.ym = "elemento aleatorio de la lista";
V.zm = "desviaci\u00f3n est\u00e1ndar de la lista";
V.Am = "suma de la lista";
V.Bm = "Devuelve el promedio (media aritm\u00e9tica) de los valores num\u00e9ricos en la lista.";
V.Cm = "Devuelve el n\u00famero m\u00e1s grande en la lista.";
V.Dm = "Devuelve la mediana en la lista.";
V.Em = "Devuelve el n\u00famero m\u00e1s peque\u00f1o en la lista.";
V.Fm = "Devuelve una lista de los elementos m\u00e1s comunes en la lista.";
V.Gm = "Devuelve un elemento aleatorio de la lista.";
V.Hm = "Devuelve la desviaci\u00f3n est\u00e1ndar de la lista.";
V.Im = "Devuelve la suma de todos los n\u00fameros en la lista.";
V.Jm = "^";
V.Km = "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
V.Lm = "fracci\u00f3n aleatoria";
V.Mm = "Devuelve una fracci\u00f3n aleatoria entre 0,0 (ambos inclusive) y 1.0 (exclusivo).";
V.Nm = "https://es.wikipedia.org/wiki/Generador_de_n\u00fameros_aleatorios";
V.Om = "entero aleatorio de %1 a %2";
V.Pm = "Devuelve un entero aleatorio entre los dos l\u00edmites especificados, inclusive.";
V.Qm = "https://es.wikipedia.org/wiki/Redondeo";
V.Rm = "redondear";
V.Sm = "redondear hacia abajo";
V.Tm = "redondear hacia arriba";
V.Um = "Redondear un n\u00famero hacia arriba o hacia abajo.";
V.Vm = "https://es.wikipedia.org/wiki/Ra%C3%ADz_cuadrada";
V.Wm = "absoluto";
V.Xm = "ra\u00edz cuadrada";
V.Ym = "Devuelve el valor absoluto de un n\u00famero.";
V.Zm = "Devuelve e a la potencia de un n\u00famero.";
V.$m = "Devuelve el logaritmo natural de un n\u00famero.";
V.an = "Devuelve el logaritmo base 10 de un n\u00famero.";
V.bn = "Devuelve la negaci\u00f3n de un n\u00famero.";
V.cn = "Devuelve 10 a la potencia de un n\u00famero.";
V.dn = "Devuelve la ra\u00edz cuadrada de un n\u00famero.";
V.fn = "-";
V.gn = "acos";
V.hn = "asin";
V.jn = "atan";
V.kn = "cos";
V.ln = "https://es.wikipedia.org/wiki/Funci\u00f3n_trigonom\u00e9trica";
V.mn = "sin";
V.nn = "tan";
V.on = "Devuelve el arcocoseno de un n\u00famero.";
V.pn = "Devuelve el arcoseno de un n\u00famero.";
V.qn = "Devuelve el arcotangente de un n\u00famero.";
V.rn = "Devuelve el coseno de un grado (no radi\u00e1n).";
V.sn = "Devuelve el seno de un grado (no radi\u00e1n).";
V.tn = "Devuelve la tangente de un grado (no radi\u00e1n).";
V.un = "Yo";
V.vn = "Variable nueva\u2026";
V.wn = "Nombre de variable nueva:";
V.xn = "";
V.yn = "permitir declaraciones";
V.zn = "con:";
V.An = "https://es.wikipedia.org/wiki/Subrutina";
V.Bn = "Ejecuta la funci\u00f3n definida por el usuario '%1'.";
V.Cn = "https://es.wikipedia.org/wiki/Subrutina";
V.Dn = "Ejecuta la funci\u00f3n definida por el usuario '%1' y usa su salida.";
V.En = "con:";
V.Fn = "Crear '%1'";
V.fh = "Describe esta funci\u00f3n...";
V.gh = "";
V.Gn = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.hh = "hacer algo";
V.ih = "para";
V.Hn = "Crea una funci\u00f3n sin salida.";
V.Kn = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.Mn = "devuelve";
V.On = "Crea una funci\u00f3n con una salida.";
V.Pn = "Advertencia: Esta funci\u00f3n tiene par\u00e1metros duplicados.";
V.Qn = "Destacar definici\u00f3n de la funci\u00f3n";
V.Rn = "http://c2.com/cgi/wiki?GuardClause";
V.Sn = "Si un valor es verdadero, entonces devuelve un segundo valor.";
V.Tn = "Advertencia: Este bloque solo puede ser utilizado dentro de la definici\u00f3n de una funci\u00f3n.";
V.Un = "nombre de entrada:";
V.Vn = "A\u00f1adir una entrada a la funci\u00f3n.";
V.Wn = "entradas";
V.Xn = "A\u00f1adir, eliminar o reordenar entradas para esta funci\u00f3n.";
V.jh = "Rehacer";
V.kh = "Eliminar comentario";
V.Yn = "Renombrar la variable\u2026";
V.Zn = "Renombrar todas las variables \u00ab%1\u00bb a:";
V.$n = "a\u00f1adir texto";
V.ao = "https://github.com/google/blockly/wiki/Text#text-modification";
V.bo = "a";
V.co = "A\u00f1adir texto a la variable '%1'.";
V.ho = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
V.io = "a min\u00fasculas";
V.jo = "a May\u00fasculas Cada Palabra";
V.lo = "a MAY\u00daSCULAS";
V.mo = "Devuelve una copia del texto en un caso diferente.";
V.no = "obtener la primera letra";
V.oo = "obtener la letra # del final";
V.po = "obtener la letra #";
V.qo = "https://github.com/google/blockly/wiki/Text#extracting-text";
V.so = "en el texto";
V.to = "obtener la \u00faltima letra";
V.uo = "obtener letra aleatoria";
V.vo = "";
V.wo = "Devuelve la letra en la posici\u00f3n especificada.";
V.yo = "Agregar un elemento al texto.";
V.zo = "unir";
V.Ao = "Agregar, eliminar o reordenar las secciones para reconfigurar este bloque de texto.";
V.Bo = "hasta la letra # del final";
V.Co = "hasta la letra #";
V.Do = "hasta la \u00faltima letra";
V.Eo = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
V.Fo = "en el texto";
V.Go = "obtener subcadena desde la primera letra";
V.Ho = "obtener subcadena desde la letra # del final";
V.Io = "obtener subcadena desde la letra #";
V.Jo = "";
V.Ko = "Devuelve una porci\u00f3n determinada del texto.";
V.Lo = "https://github.com/google/blockly/wiki/Text#finding-text";
V.Mo = "en el texto";
V.No = "encontrar la primera aparici\u00f3n del texto";
V.Oo = "encontrar la \u00faltima aparici\u00f3n del texto";
V.Po = "";
V.Qo = "Devuelve el \u00edndice de la primera/\u00faltima aparici\u00f3n del primer texto en el segundo texto. Devuelve 0 si el texto no se encuentra.";
V.Ro = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
V.So = "%1 est\u00e1 vac\u00edo";
V.To = "Devuelve verdadero si el texto proporcionado est\u00e1 vac\u00edo.";
V.Uo = "https://github.com/google/blockly/wiki/Text#text-creation";
V.Vo = "crear texto con";
V.Wo = "Crear un fragmento de texto al unir cualquier n\u00famero de elementos.";
V.Xo = "https://github.com/google/blockly/wiki/Text#text-modification";
V.Yo = "longitud de %1";
V.Zo = "Devuelve el n\u00famero de letras (incluyendo espacios) en el texto proporcionado.";
V.$o = "https://github.com/google/blockly/wiki/Text#printing-text";
V.ap = "imprimir %1";
V.bp = "Imprimir el texto, n\u00famero u otro valor especificado.";
V.cp = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
V.ep = "Solicitar al usuario un n\u00famero.";
V.fp = "Solicitar al usuario un texto.";
V.gp = "solicitar n\u00famero con el mensaje";
V.hp = "solicitar texto con el mensaje";
V.ip = "https://es.wikipedia.org/wiki/Cadena_de_caracteres";
V.jp = "Una letra, palabra o l\u00ednea de texto.";
V.kp = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
V.lp = "quitar espacios de ambos lados de";
V.mp = "quitar espacios iniciales de";
V.np = "quitar espacios finales de";
V.op = "Devuelve una copia del texto sin los espacios de uno o ambos extremos.";
V.pp = "Hoy";
V.lh = "Deshacer";
V.Ac = "elemento";
V.qp = "Crear 'establecer %1'";
V.rp = "https://github.com/google/blockly/wiki/Variables#get";
V.sp = "Devuelve el valor de esta variable.";
V.tp = "establecer %1 a %2";
V.up = "Crear 'obtener %1'";
V.vp = "https://github.com/google/blockly/wiki/Variables#set";
V.wp = "Establece esta variable para que sea igual a la entrada.";
V.Nn = V.ih;
V.cj = V.Sg;
V.nj = V.Cd;
V.ej = V.Cd;
V.$i = V.Qg;
V.Ln = V.hh;
V.hk = V.Dd;
V.Kj = V.Dd;
V.Wl = V.Ac;
V.Jn = V.gh;
V.Yi = V.Rg;
V.Jj = V.eh;
V.Ri = V.Cd;
V.Fk = V.Dd;
V.Vi = V.Cd;
V.Bj = V.Ac;
V.eo = V.Ac;
V.xo = V.Ac;
V.qk = V.Dd;
V.In = V.fh;
var Z = {
    Dc: null,
    ga: function() {
        ol();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = X("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = X("Games_linkAlert"), BlocklyStorage.HASH_ERROR = X("Games_hashError"), BlocklyStorage.XML_ERROR = X("Games_xmlError"), BlocklyStorage.alert = Y.ii, a && tl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Z.sh, !0)
    },
    Gp: function(a, b) {
        if ("BlocklyStorage" in
            window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.g
            } catch (f) {}
            c && delete window.sessionStorage.g;
            var d = pl(jl),
                e = b && pl(jl - 1);
            (c = c || d || e || a) && Z.Bg(c)
        }
    },
    Bg: function(a) {
        Z.Dc ? Z.Dc.setValue(a, -1) : (a = rg(a), T.clear(), sg(a, T), T.Be())
    },
    fg: function() {
        if (Z.Dc) var a = Z.Dc.getValue();
        else a = kg(T), a = qg(a);
        return a
    },
    ai: function() {
        window.localStorage && (window.localStorage[rl + jl] = Z.fg())
    },
    $d: function() {
        window.location = (hl ? "index.html" :
            "./") + "?lang=" + fl
    },
    sh: function() {
        if (window.sessionStorage) {
            if (Z.Dc) var a = Z.Dc.getValue();
            else a = kg(T), a = qg(a);
            window.sessionStorage.g = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    og: function(a) {
        if (a) {
            var b =
                a.match(/^block_id_([^']+)$/);
            b && (a = b[1])
        }
        Gh(a)
    },
    Sh: function(a, b) {
        var c = document.getElementById(a);
        c.firstChild || (c = Dj(c, {
            rtl: il(),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), sg(rg(b), c))
    },
    ji: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    Jb: function(a) {
        if ("click" == a.type && "touchend" == Z.Jb.h && Z.Jb.g + 2E3 > Date.now() || Z.Jb.h == a.type && Z.Jb.g + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Z.Jb.h = a.type;
        Z.Jb.g = Date.now();
        return !1
    }
};
Z.Jb.h = null;
Z.Jb.g = 0;
Z.Ep = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
Z.Fp = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = Z;
Z.setCode = Z.Bg;
Z.getCode = Z.fg;
var Y = {
    Gb: !1,
    Yf: null,
    Md: null,
    xd: function(a, b, c, d, e, f) {
        function h() {
            Y.Gb && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        Y.Gb && Y.Fb(!1);
        Q(!0);
        Y.Gb = !0;
        Y.Yf = b;
        Y.Md = f;
        var l = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in e) l.style[n] = e[n];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", l.appendChild(d), Y.Ge = O(d, "mousedown",
            null, Y.Ch));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (Y.fe(b, !1, .2), Y.fe(l, !0, .8), setTimeout(h, 175)) : h()
    },
    Zf: 0,
    $f: 0,
    Ch: function(a) {
        Y.Je();
        if (!Mg(a)) {
            var b = document.getElementById("dialog");
            Y.Zf = b.offsetLeft - a.clientX;
            Y.$f = b.offsetTop - a.clientY;
            Y.Ie = O(document, "mouseup", null, Y.Je);
            Y.He = O(document, "mousemove", null, Y.Dh);
            a.stopPropagation()
        }
    },
    Dh: function(a) {
        var b = document.getElementById("dialog"),
            c = Y.Zf + a.clientX;
        a = Y.$f + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    Je: function() {
        Y.Ie && (P(Y.Ie), Y.Ie = null);
        Y.He && (P(Y.He), Y.He = null)
    },
    Fb: function(a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (Y.Gb) {
            Y.Je();
            Y.Ge && (P(Y.Ge), Y.Ge = null);
            Y.Gb = !1;
            Y.Md && Y.Md();
            Y.Md = null;
            var c = !1 === a ? null : Y.Yf;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (Y.fe(a, !1, .8), Y.fe(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    fe: function(a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = Y.Eh(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    Eh: function(a) {
        var b = Zd(a);
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    ii: function(a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        Y.xd(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, Y.xf);
        Y.uf()
    },
    nh: function() {
        if (!pl(jl))
            if (Y.Gb || 0 != K) setTimeout(Y.nh, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", Y.Fb, !0);
                b.addEventListener("touchend", Y.Fb, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Z.$d, !0);
                b.addEventListener("touchend", Z.$d, !0);
                Y.xd(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown",
                        Y.Cf, !0)
                });
                document.body.addEventListener("keydown", Y.Cf, !0)
            }
    },
    Cp: function() {
        var a = document.getElementById("dialogDone");
        if (T) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = ad.tj.Kp(T),
                c = Z.ji(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");
            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);
            c = 1 == d ? X("Games_linesOfCode1") : X("Games_linesOfCode2").replace("%1", d);
            b.appendChild(document.createTextNode(c))
        }
        c =
            10 > jl ? X("Games_nextLevel").replace("%1", jl + 1) : X("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", Y.Fb, !0);
        b.addEventListener("touchend", Y.Fb, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Z.vg, !0);
        b.addEventListener("touchend", Z.vg, !0);
        Y.xd(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", Y.If, !0)
        });
        document.body.addEventListener("keydown", Y.If, !0);
        document.getElementById("dialogDoneText").textContent =
            c
    },
    Xf: function(a) {
        !Y.Gb || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.Fb(!0), a.stopPropagation(), a.preventDefault())
    },
    uf: function() {
        document.body.addEventListener("keydown", Y.Xf, !0)
    },
    xf: function() {
        document.body.removeEventListener("keydown", Y.Xf, !0)
    },
    If: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Fb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.vg()
    },
    Cf: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Fb(!0), a.stopPropagation(), a.preventDefault(), 27 !=
            a.keyCode && Z.$d()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.Fb;
var vl = {},
    wl = {};

function xl() {
    throw Error("Do not instantiate directly");
}
xl.prototype.Id = null;
xl.prototype.toString = function() {
    return this.content
};
xl.prototype.le = function() {
    if (this.Jd === wl) return sc(this.toString());
    if (this.Jd !== vl) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return tc(this.toString(), this.Id || null)
};
y && B(8);

function yl(a) {
    if (null != a) switch (a.Id) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function zl() {
    xl.call(this)
}
u(zl, xl);
zl.prototype.Jd = vl;

function Al(a) {
    return null != a && a.Jd === vl ? a : Bl(String(String(a)).replace(Cl, Dl), yl(a))
}

function El() {
    xl.call(this)
}
u(El, xl);
El.prototype.Jd = {}.sj;

function Fl(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Id = d);
        return e
    }
}
var Bl = Fl(zl);
Fl(El);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Id = d);
        return e
    }
})(zl);
var Gl = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Dl(a) {
    return Gl[a]
}
var Cl = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Hl() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div>'
};
var rl = "puzzle";

function Il(a) {
    for (var b = a.length - 1; 0 < b; b--) {
        var c = Math.floor(Math.random() * (b + 1)),
            d = a[b];
        a[b] = a[c];
        a[c] = d
    }
}

function ul() {
    for (var a = [
            [X("Puzzle_legsChoose"), "0"]
        ], b = 1, c; c = sl("Puzzle_animal" + b + "Legs");) a[b] = [c, String(b)], b++;
    a.sort(function(a, b) {
        return a[0] - b[0]
    });
    return a
}

function Jl() {
    for (var a = T.Lb(), b = 0, c = [], d = 0, e; e = a[d]; d++) e.pb() || (b++, e.select(), c.push(e));
    var f = document.getElementById("graphValue");
    setTimeout(function() {
        f.style.width = 100 * (a.length - b) / a.length + "px"
    }, 500);
    1 == b ? d = [X("Puzzle_error1"), X("Puzzle_tryAgain")] : b ? d = [X("Puzzle_error2").replace("%1", b), X("Puzzle_tryAgain")] : (d = [X("Puzzle_error0").replace("%1", a.length)], Z.ai());
    e = document.getElementById("answerMessage");
    e.textContent = "";
    for (var h = 0; h < d.length; h++) {
        var l = document.createElement("div");
        l.appendChild(document.createTextNode(d[h]));
        e.appendChild(l)
    }
    d = document.getElementById("answers");
    e = document.getElementById("checkButton");
    Y.xd(d, e, !0, !0, {
        width: "25%",
        left: il() ? "5%" : "70%",
        top: "5em"
    }, b ? Y.xf : Z.$d);
    Y.uf();
    if (c.length) {
        Il(c);
        var m = c[0],
            n = function() {
                m.select();
                Y.Gb && (setTimeout(function() {
                    Hh(m)
                }, 150), setTimeout(n, 300))
            };
        n()
    } else setTimeout(Kl, 2E3), U && Hh(U)
}

function Kl() {
    Wh(T, "win", .5);
    for (var a = fg(T, !1), b = 0, c; c = a[b]; b++) Ll(c, b / a.length * 360)
}

function Ll(a, b) {
    if (Y.Gb) {
        var c = T.xa(),
            d = c.qa / 2,
            e = c.U / 2,
            f = Uh(a),
            c = a.aa();
        il() && (c.x -= f.width);
        var h = Math.max(175, Math.min(d, e) - Math.max(f.height, f.width) / 2),
            l = Date.now(),
            m = b + l / 50 % 360,
            h = h * (Math.sin(l % 5E3 / 5E3 * 2 * Math.PI) / 8 + .875),
            e = h * Math.cos(m * Math.PI / 180) + e - f.width / 2,
            f = h * Math.sin(m * Math.PI / 180) + d - f.height / 2;
        5 > Math.sqrt(Math.pow(e - c.x, 2) + Math.pow(f - c.y, 2)) ? (d = e - c.x, c = f - c.y) : (c = 180 * Math.atan2(f - c.y, e - c.x) / Math.PI % 360, c = 0 > 360 * c ? c + 360 : c, d = Math.round(5 * Math.cos(c * Math.PI / 180)), c = Math.round(5 * Math.sin(c *
            Math.PI / 180)));
        a.moveBy(d, c);
        setTimeout(Ll.bind(null, a, b), 50)
    }
}

function Ml(a) {
    Z.Sh("sample", '<xml>;<block type="animal" x="5" y="5">;<mutation animal="1"></mutation>;<title name="LEGS">1</title>;<value name="PIC">;<block type="picture">;<mutation animal="1"></mutation>;</block>;</value>;<statement name="TRAITS">;<block type="trait">;<mutation animal="1" trait="2"></mutation>;<next>;<block type="trait">;<mutation animal="1" trait="1"></mutation>;</block>;</next>;</block>;</statement>;</block>;</xml>'.split(";"));
    var b = document.getElementById("help"),
        c = document.getElementById("helpButton");
    Y.xd(b, c, a, !0, {
        width: "50%",
        left: "25%",
        top: "5em"
    }, Y.xf);
    Y.uf()
}
window.addEventListener("load", function() {
    function a() {
        c.style.width = window.innerWidth - 20 + "px";
        c.style.height = window.innerHeight - c.offsetTop - 15 + "px"
    }
    document.body.innerHTML = '<div style="display: none"><span id="Puzzle_animal1">Pato</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumas</span><span id="Puzzle_animal1Trait2">Pico</span><span id="Puzzle_animal1HelpUrl">http://es.wikipedia.org/wiki/Pato</span><span id="Puzzle_animal2">Gato</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bigotes</span><span id="Puzzle_animal2Trait2">Pelaje</span><span id="Puzzle_animal2HelpUrl">http://es.wikipedia.org/wiki/Gato</span><span id="Puzzle_animal3">Abeja</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Miel</span><span id="Puzzle_animal3Trait2">Aguij\u00f3n</span><span id="Puzzle_animal3HelpUrl">http://es.wikipedia.org/wiki/Abeja</span><span id="Puzzle_animal4">Caracol</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Caparaz\u00f3n</span><span id="Puzzle_animal4Trait2">Baba</span><span id="Puzzle_animal4HelpUrl">http://es.wikipedia.org/wiki/Caracol</span><span id="Puzzle_picture">foto:</span><span id="Puzzle_legs">patas:</span><span id="Puzzle_legsChoose">elige...</span><span id="Puzzle_traits">rasgos:</span><span id="Puzzle_error0">\u00a1Perfecto!\nLos %1 bloques est\u00e1n bien colocados.</span><span id="Puzzle_error1">\u00a1Casi! Un bloque est\u00e1 mal colocado.</span><span id="Puzzle_error2">%1 bloques est\u00e1n mal colocados.</span><span id="Puzzle_tryAgain">El bloque destacado est\u00e1 mal colocado.\nSigue intent\u00e1ndolo.</span></div><table id="header" width="100%"><tr><td valign="bottom"><h1>' + ('<span id="title">' +
            (hl ? '<a href="index.html">' : '<a href="./?lang=' + Al(fl) + '">') + "Volver a Inicio</a> | " + Al("Juego de Demostración |") + "</span>") + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Ayuda</button>&nbsp;<button id="checkButton" class="primary">Comprobar las respuestas</button></td></tr></table><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Para cada animal (verde), adjunta su foto, elige la cantidad de patas y lista sus rasgos.</div><div id="sample" class="readonly"></div>' +
        Hl() + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + Hl() + "</div>";
    Z.ga();
    var b = il(),
        c = document.getElementById("blockly");
    a();
    window.addEventListener("resize", a);
    T = Dj("blockly", {
        media: "third-party/blockly/media/",
        rtl: b,
        scrollbars: !1,
        trashcan: !1
    });
    var d = pl(jl);
    try {
        var e = window.sessionStorage.g
    } catch (A) {
        e = null
    }
    if (e) delete window.sessionStorage.g, b = rg(e), sg(b, T);
    else if (d) b = rg(d), sg(b, T);
    else {
        for (var f = [], h = [], l = [],
                e = 1; sl("Puzzle_animal" + e);) {
            var m = T.rd("animal");
            m.na(e);
            f.push(m);
            m = T.rd("picture");
            m.na(e);
            h.push(m);
            for (var n = 1; sl("Puzzle_animal" + e + "Trait" + n);) m = T.rd("trait"), m.na(e, n), l.push(m), n++;
            e++
        }
        Il(f);
        Il(h);
        Il(l);
        f = [].concat(f, h, l);
        b && f.reverse();
        for (e = 0; m = f[e]; e++) m.Fe = !1, m.md(), m.X();
        for (e = h = 0; m = f[e]; e++) l = m.W().getBBox(), m.zp = l.width, m.yp = l.height, m.Ff = l.width * l.height, h += m.Ff;
        Gj(T);
        n = Xk(gh(T));
        n.width -= 50;
        n.height -= 50;
        for (var p = 0, e = 0; m = f[e]; e++) {
            var l = m.W().getBBox(),
                q = b ? l.width + p / h * n.width : p / h *
                (n.width - l.width),
                q = Math.round(q + 50 * Math.random());
            m.moveBy(q, Math.round(Math.random() * (n.height - l.height)));
            p += m.Ff
        }
    }
    T.Be();
    tl("checkButton", Jl);
    tl("helpButton", function() {
        Ml(!0)
    });
    d || Ml(!1);
    if (z) {
        f = T.Lb();
        for (e = 0; m = f[e]; e++) m.select();
        Hh(U)
    }
    Hd *= 2;
    Vh(T, ["javascripts/codefun/puzzle/win.mp3", "puzzle/win.ogg"], "win")
});
