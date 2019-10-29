/*! https://github.com/xiazeyu/live2d-widget.js built@2018-3-21 22:56:25 */
var L2Dwidget = function (t) {
    var n = window.webpackJsonpL2Dwidget;
    window.webpackJsonpL2Dwidget = function (e, o, i) {
        for (var c, u, a = 0, f = []; a < e.length; a++) u = e[a], r[u] && f.push(r[u][0]), r[u] = 0;
        for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
        for (n && n(e, o, i); f.length;) f.shift()()
    };
    var e = {}, r = {1: 0};

    function o(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    return o.e = function (t) {
        var n = r[t];
        if (0 === n) return new Promise(function (t) {
            t()
        });
        if (n) return n[2];
        var e = new Promise(function (e, o) {
            n = r[t] = [e, o]
        });
        n[2] = e;
        var i = document.getElementsByTagName("head")[0], c = document.createElement("script");
        c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, o.nc && c.setAttribute("nonce", o.nc), c.src = o.p + "L2Dwidget." + t + ".min.js";
        var u = setTimeout(a, 12e4);

        function a() {
            c.onerror = c.onload = null, clearTimeout(u);
            var n = r[t];
            0 !== n && (n && n[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0)
        }

        return c.onerror = c.onload = a, i.appendChild(c), e
    }, o.m = t, o.c = e, o.d = function (t, n, e) {
        o.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: e})
    }, o.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(n, "a", n), n
    }, o.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, o.p = "", o.oe = function (t) {
        throw console.error(t), t
    }, o(o.s = 53)
}([function (t, n, e) {
    var r = e(28)("wks"), o = e(18), i = e(1).Symbol, c = "function" == typeof i;
    (t.exports = function (t) {
        return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
    }).store = r
}, function (t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
}, function (t, n, e) {
    var r = e(6);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, n, e) {
    var r = e(12), o = e(30);
    t.exports = e(7) ? function (t, n, e) {
        return r.f(t, n, o(1, e))
    } : function (t, n, e) {
        return t[n] = e, t
    }
}, function (t, n) {
    var e = t.exports = {version: "2.5.3"};
    "number" == typeof __e && (__e = e)
}, function (t, n, e) {
    var r = e(1), o = e(3), i = e(8), c = e(18)("src"), u = Function.toString, a = ("" + u).split("toString");
    e(4).inspectSource = function (t) {
        return u.call(t)
    }, (t.exports = function (t, n, e, u) {
        var f = "function" == typeof e;
        f && (i(e, "name") || o(e, "name", n)), t[n] !== e && (f && (i(e, c) || o(e, c, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : u ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[c] || u.call(this)
    })
}, function (t, n) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, n, e) {
    t.exports = !e(29)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
        return e.call(t, n)
    }
}, function (t, n) {
    t.exports = {}
}, function (t, n) {
    t.exports = function (t) {
        var n = typeof t;
        return null != t && ("object" == n || "function" == n)
    }
}, function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
        return e.call(t).slice(8, -1)
    }
}, function (t, n, e) {
    var r = e(2), o = e(56), i = e(57), c = Object.defineProperty;
    n.f = e(7) ? Object.defineProperty : function (t, n, e) {
        if (r(t), n = i(n, !0), r(e), o) try {
            return c(t, n, e)
        } catch (t) {
        }
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
        return "value" in e && (t[n] = e.value), t
    }
}, function (t, n, e) {
    var r = e(1), o = e(4), i = e(3), c = e(5), u = e(14), a = function (t, n, e) {
        var f, s, l, p, v = t & a.F, d = t & a.G, h = t & a.S, y = t & a.P, b = t & a.B,
            m = d ? r : h ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, w = d ? o : o[n] || (o[n] = {}),
            x = w.prototype || (w.prototype = {});
        for (f in d && (e = n), e) l = ((s = !v && m && void 0 !== m[f]) ? m : e)[f], p = b && s ? u(l, r) : y && "function" == typeof l ? u(Function.call, l) : l, m && c(m, f, l, t & a.U), w[f] != l && i(w, f, p), y && x[f] != l && (x[f] = l)
    };
    r.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
}, function (t, n, e) {
    var r = e(15);
    t.exports = function (t, n, e) {
        if (r(t), void 0 === n) return t;
        switch (e) {
            case 1:
                return function (e) {
                    return t.call(n, e)
                };
            case 2:
                return function (e, r) {
                    return t.call(n, e, r)
                };
            case 3:
                return function (e, r, o) {
                    return t.call(n, e, r, o)
                }
        }
        return function () {
            return t.apply(n, arguments)
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, n, e) {
    var r = e(26);
    t.exports = function (t, n) {
        for (var e = t.length; e--;) if (r(t[e][0], n)) return e;
        return -1
    }
}, function (t, n, e) {
    var r = e(11), o = e(0)("toStringTag"), i = "Arguments" == r(function () {
        return arguments
    }());
    t.exports = function (t) {
        var n, e, c;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
            try {
                return t[n]
            } catch (t) {
            }
        }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
    }
}, function (t, n) {
    var e = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
    }
}, function (t, n, e) {
    var r = e(6), o = e(1).document, i = r(o) && r(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, n) {
    var e = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
    }
}, function (t, n) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, n, e) {
    var r = e(64), o = e(21);
    t.exports = function (t) {
        return r(o(t))
    }
}, function (t, n, e) {
    var r = e(28)("keys"), o = e(18);
    t.exports = function (t) {
        return r[t] || (r[t] = o(t))
    }
}, function (t, n, e) {
    var r = e(12).f, o = e(8), i = e(0)("toStringTag");
    t.exports = function (t, n, e) {
        t && !o(t = e ? t : t.prototype, i) && r(t, i, {configurable: !0, value: n})
    }
}, function (t, n, e) {
    "use strict";
    var r = e(15);
    t.exports.f = function (t) {
        return new function (t) {
            var n, e;
            this.promise = new t(function (t, r) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = r
            }), this.resolve = r(n), this.reject = r(e)
        }(t)
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return t === n || t != t && n != n
    }
}, function (t, n, e) {
    var r = e(100);
    t.exports = function (t, n, e) {
        "__proto__" == n && r ? r(t, n, {configurable: !0, enumerable: !0, value: e, writable: !0}) : t[n] = e
    }
}, function (t, n, e) {
    var r = e(1), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, n) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
}, function (t, n, e) {
    "use strict";
    var r = e(32), o = e(13), i = e(5), c = e(3), u = e(8), a = e(9), f = e(60), s = e(24), l = e(67),
        p = e(0)("iterator"), v = !([].keys && "next" in [].keys()), d = function () {
            return this
        };
    t.exports = function (t, n, e, h, y, b, m) {
        f(e, n, h);
        var w, x, g, _ = function (t) {
                if (!v && t in S) return S[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new e(this, t)
                        }
                }
                return function () {
                    return new e(this, t)
                }
            }, j = n + " Iterator", O = "values" == y, P = !1, S = t.prototype, k = S[p] || S["@@iterator"] || y && S[y],
            T = !v && k || _(y), L = y ? O ? _("entries") : T : void 0, E = "Array" == n && S.entries || k;
        if (E && (g = l(E.call(new t))) !== Object.prototype && g.next && (s(g, j, !0), r || u(g, p) || c(g, p, d)), O && k && "values" !== k.name && (P = !0, T = function () {
            return k.call(this)
        }), r && !m || !v && !P && S[p] || c(S, p, T), a[n] = T, a[j] = d, y) if (w = {
            values: O ? T : _("values"),
            keys: b ? T : _("keys"),
            entries: L
        }, m) for (x in w) x in S || i(S, x, w[x]); else o(o.P + o.F * (v || P), n, w);
        return w
    }
}, function (t, n) {
    t.exports = !1
}, function (t, n, e) {
    var r = e(63), o = e(35);
    t.exports = Object.keys || function (t) {
        return r(t, o)
    }
}, function (t, n, e) {
    var r = e(20), o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, n, e) {
    var r = e(1).document;
    t.exports = r && r.documentElement
}, function (t, n, e) {
    var r = e(2), o = e(15), i = e(0)("species");
    t.exports = function (t, n) {
        var e, c = r(t).constructor;
        return void 0 === c || void 0 == (e = r(c)[i]) ? n : o(e)
    }
}, function (t, n, e) {
    var r, o, i, c = e(14), u = e(79), a = e(36), f = e(19), s = e(1), l = s.process, p = s.setImmediate,
        v = s.clearImmediate, d = s.MessageChannel, h = s.Dispatch, y = 0, b = {}, m = function () {
            var t = +this;
            if (b.hasOwnProperty(t)) {
                var n = b[t];
                delete b[t], n()
            }
        }, w = function (t) {
            m.call(t.data)
        };
    p && v || (p = function (t) {
        for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
        return b[++y] = function () {
            u("function" == typeof t ? t : Function(t), n)
        }, r(y), y
    }, v = function (t) {
        delete b[t]
    }, "process" == e(11)(l) ? r = function (t) {
        l.nextTick(c(m, t, 1))
    } : h && h.now ? r = function (t) {
        h.now(c(m, t, 1))
    } : d ? (i = (o = new d).port2, o.port1.onmessage = w, r = c(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (r = function (t) {
        s.postMessage(t + "", "*")
    }, s.addEventListener("message", w, !1)) : r = "onreadystatechange" in f("script") ? function (t) {
        a.appendChild(f("script")).onreadystatechange = function () {
            a.removeChild(this), m.call(t)
        }
    } : function (t) {
        setTimeout(c(m, t, 1), 0)
    }), t.exports = {set: p, clear: v}
}, function (t, n) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (t, n, e) {
    var r = e(2), o = e(6), i = e(25);
    t.exports = function (t, n) {
        if (r(t), o(n) && n.constructor === t) return n;
        var e = i.f(t);
        return (0, e.resolve)(n), e.promise
    }
}, function (t, n) {
    t.exports = function (t, n, e) {
        switch (e.length) {
            case 0:
                return t.call(n);
            case 1:
                return t.call(n, e[0]);
            case 2:
                return t.call(n, e[0], e[1]);
            case 3:
                return t.call(n, e[0], e[1], e[2])
        }
        return t.apply(n, e)
    }
}, function (t, n, e) {
    var r = e(90), o = e(91), i = e(92);
    t.exports = function (t, n) {
        return i(o(t, n, r), t + "")
    }
}, function (t, n, e) {
    var r = e(94), o = e(44), i = e(102), c = e(104), u = e(10), a = e(51), f = e(50);
    t.exports = function t(n, e, s, l, p) {
        n !== e && i(e, function (i, a) {
            if (u(i)) p || (p = new r), c(n, e, a, s, t, l, p); else {
                var v = l ? l(f(n, a), i, a + "", n, e, p) : void 0;
                void 0 === v && (v = i), o(n, a, v)
            }
        }, a)
    }
}, function (t, n, e) {
    var r = e(27), o = e(26);
    t.exports = function (t, n, e) {
        (void 0 === e || o(t[n], e)) && (void 0 !== e || n in t) || r(t, n, e)
    }
}, function (t, n, e) {
    var r = e(107), o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function (t, n, e) {
    var r = e(115)(Object.getPrototypeOf, Object);
    t.exports = r
}, function (t, n, e) {
    var r = e(48), o = e(10), i = "[object AsyncFunction]", c = "[object Function]", u = "[object GeneratorFunction]",
        a = "[object Proxy]";
    t.exports = function (t) {
        if (!o(t)) return !1;
        var n = r(t);
        return n == c || n == u || n == i || n == a
    }
}, function (t, n) {
    var e = Object.prototype.toString;
    t.exports = function (t) {
        return e.call(t)
    }
}, function (t, n) {
    t.exports = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return "__proto__" == n ? void 0 : t[n]
    }
}, function (t, n) {
    t.exports = function (t) {
        var n = [];
        if (null != t) for (var e in Object(t)) n.push(e);
        return n
    }
}, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.config = n.configApplyer = void 0;
    var r = i(e(89)), o = i(e(131));

    function i(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = {};
    n.configApplyer = function (t) {
        n.config = c = (0, r.default)(t, o.default)
    }, n.config = c
}, function (t, n, e) {
    e(54), e(86), t.exports = e(87)
}, function (t, n, e) {
    e(55), e(58), e(69), e(73), e(84), e(85), t.exports = e(4).Promise
}, function (t, n, e) {
    "use strict";
    var r = e(17), o = {};
    o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(5)(Object.prototype, "toString", function () {
        return "[object " + r(this) + "]"
    }, !0)
}, function (t, n, e) {
    t.exports = !e(7) && !e(29)(function () {
        return 7 != Object.defineProperty(e(19)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, n, e) {
    var r = e(6);
    t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
        if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
        if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, n, e) {
    "use strict";
    var r = e(59)(!0);
    e(31)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, n = this._t, e = this._i;
        return e >= n.length ? {value: void 0, done: !0} : (t = r(n, e), this._i += t.length, {value: t, done: !1})
    })
}, function (t, n, e) {
    var r = e(20), o = e(21);
    t.exports = function (t) {
        return function (n, e) {
            var i, c, u = String(o(n)), a = r(e), f = u.length;
            return a < 0 || a >= f ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (t, n, e) {
    "use strict";
    var r = e(61), o = e(30), i = e(24), c = {};
    e(3)(c, e(0)("iterator"), function () {
        return this
    }), t.exports = function (t, n, e) {
        t.prototype = r(c, {next: o(1, e)}), i(t, n + " Iterator")
    }
}, function (t, n, e) {
    var r = e(2), o = e(62), i = e(35), c = e(23)("IE_PROTO"), u = function () {
    }, a = function () {
        var t, n = e(19)("iframe"), r = i.length;
        for (n.style.display = "none", e(36).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
        return a()
    };
    t.exports = Object.create || function (t, n) {
        var e;
        return null !== t ? (u.prototype = r(t), e = new u, u.prototype = null, e[c] = t) : e = a(), void 0 === n ? e : o(e, n)
    }
}, function (t, n, e) {
    var r = e(12), o = e(2), i = e(33);
    t.exports = e(7) ? Object.defineProperties : function (t, n) {
        o(t);
        for (var e, c = i(n), u = c.length, a = 0; u > a;) r.f(t, e = c[a++], n[e]);
        return t
    }
}, function (t, n, e) {
    var r = e(8), o = e(22), i = e(65)(!1), c = e(23)("IE_PROTO");
    t.exports = function (t, n) {
        var e, u = o(t), a = 0, f = [];
        for (e in u) e != c && r(u, e) && f.push(e);
        for (; n.length > a;) r(u, e = n[a++]) && (~i(f, e) || f.push(e));
        return f
    }
}, function (t, n, e) {
    var r = e(11);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, n, e) {
    var r = e(22), o = e(34), i = e(66);
    t.exports = function (t) {
        return function (n, e, c) {
            var u, a = r(n), f = o(a.length), s = i(c, f);
            if (t && e != e) {
                for (; f > s;) if ((u = a[s++]) != u) return !0
            } else for (; f > s; s++) if ((t || s in a) && a[s] === e) return t || s || 0;
            return !t && -1
        }
    }
}, function (t, n, e) {
    var r = e(20), o = Math.max, i = Math.min;
    t.exports = function (t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
}, function (t, n, e) {
    var r = e(8), o = e(68), i = e(23)("IE_PROTO"), c = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
    }
}, function (t, n, e) {
    var r = e(21);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, n, e) {
    for (var r = e(70), o = e(33), i = e(5), c = e(1), u = e(3), a = e(9), f = e(0), s = f("iterator"), l = f("toStringTag"), p = a.Array, v = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, d = o(v), h = 0; h < d.length; h++) {
        var y, b = d[h], m = v[b], w = c[b], x = w && w.prototype;
        if (x && (x[s] || u(x, s, p), x[l] || u(x, l, b), a[b] = p, m)) for (y in r) x[y] || i(x, y, r[y], !0)
    }
}, function (t, n, e) {
    "use strict";
    var r = e(71), o = e(72), i = e(9), c = e(22);
    t.exports = e(31)(Array, "Array", function (t, n) {
        this._t = c(t), this._i = 0, this._k = n
    }, function () {
        var t = this._t, n = this._k, e = this._i++;
        return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (t, n, e) {
    var r = e(0)("unscopables"), o = Array.prototype;
    void 0 == o[r] && e(3)(o, r, {}), t.exports = function (t) {
        o[r][t] = !0
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {value: n, done: !!t}
    }
}, function (t, n, e) {
    "use strict";
    var r, o, i, c, u = e(32), a = e(1), f = e(14), s = e(17), l = e(13), p = e(6), v = e(15), d = e(74), h = e(75),
        y = e(37), b = e(38).set, m = e(80)(), w = e(25), x = e(39), g = e(40), _ = a.TypeError, j = a.process,
        O = a.Promise, P = "process" == s(j), S = function () {
        }, k = o = w.f, T = !!function () {
            try {
                var t = O.resolve(1), n = (t.constructor = {})[e(0)("species")] = function (t) {
                    t(S, S)
                };
                return (P || "function" == typeof PromiseRejectionEvent) && t.then(S) instanceof n
            } catch (t) {
            }
        }(), L = function (t) {
            var n;
            return !(!p(t) || "function" != typeof (n = t.then)) && n
        }, E = function (t, n) {
            if (!t._n) {
                t._n = !0;
                var e = t._c;
                m(function () {
                    for (var r = t._v, o = 1 == t._s, i = 0, c = function (n) {
                        var e, i, c = o ? n.ok : n.fail, u = n.resolve, a = n.reject, f = n.domain;
                        try {
                            c ? (o || (2 == t._h && F(t), t._h = 1), !0 === c ? e = r : (f && f.enter(), e = c(r), f && f.exit()), e === n.promise ? a(_("Promise-chain cycle")) : (i = L(e)) ? i.call(e, u, a) : u(e)) : a(r)
                        } catch (t) {
                            a(t)
                        }
                    }; e.length > i;) c(e[i++]);
                    t._c = [], t._n = !1, n && !t._h && M(t)
                })
            }
        }, M = function (t) {
            b.call(a, function () {
                var n, e, r, o = t._v, i = A(t);
                if (i && (n = x(function () {
                    P ? j.emit("unhandledRejection", o, t) : (e = a.onunhandledrejection) ? e({
                        promise: t,
                        reason: o
                    }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                }), t._h = P || A(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
            })
        }, A = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, F = function (t) {
            b.call(a, function () {
                var n;
                P ? j.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({promise: t, reason: t._v})
            })
        }, C = function (t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), E(n, !0))
        }, D = function (t) {
            var n, e = this;
            if (!e._d) {
                e._d = !0, e = e._w || e;
                try {
                    if (e === t) throw _("Promise can't be resolved itself");
                    (n = L(t)) ? m(function () {
                        var r = {_w: e, _d: !1};
                        try {
                            n.call(t, f(D, r, 1), f(C, r, 1))
                        } catch (t) {
                            C.call(r, t)
                        }
                    }) : (e._v = t, e._s = 1, E(e, !1))
                } catch (t) {
                    C.call({_w: e, _d: !1}, t)
                }
            }
        };
    T || (O = function (t) {
        d(this, O, "Promise", "_h"), v(t), r.call(this);
        try {
            t(f(D, this, 1), f(C, this, 1))
        } catch (t) {
            C.call(this, t)
        }
    }, (r = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = e(81)(O.prototype, {
        then: function (t, n) {
            var e = k(y(this, O));
            return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = P ? j.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && E(this, !1), e.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), i = function () {
        var t = new r;
        this.promise = t, this.resolve = f(D, t, 1), this.reject = f(C, t, 1)
    }, w.f = k = function (t) {
        return t === O || t === c ? new i(t) : o(t)
    }), l(l.G + l.W + l.F * !T, {Promise: O}), e(24)(O, "Promise"), e(82)("Promise"), c = e(4).Promise, l(l.S + l.F * !T, "Promise", {
        reject: function (t) {
            var n = k(this);
            return (0, n.reject)(t), n.promise
        }
    }), l(l.S + l.F * (u || !T), "Promise", {
        resolve: function (t) {
            return g(u && this === c ? O : this, t)
        }
    }), l(l.S + l.F * !(T && e(83)(function (t) {
        O.all(t).catch(S)
    })), "Promise", {
        all: function (t) {
            var n = this, e = k(n), r = e.resolve, o = e.reject, i = x(function () {
                var e = [], i = 0, c = 1;
                h(t, !1, function (t) {
                    var u = i++, a = !1;
                    e.push(void 0), c++, n.resolve(t).then(function (t) {
                        a || (a = !0, e[u] = t, --c || r(e))
                    }, o)
                }), --c || r(e)
            });
            return i.e && o(i.v), e.promise
        }, race: function (t) {
            var n = this, e = k(n), r = e.reject, o = x(function () {
                h(t, !1, function (t) {
                    n.resolve(t).then(e.resolve, r)
                })
            });
            return o.e && r(o.v), e.promise
        }
    })
}, function (t, n) {
    t.exports = function (t, n, e, r) {
        if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
        return t
    }
}, function (t, n, e) {
    var r = e(14), o = e(76), i = e(77), c = e(2), u = e(34), a = e(78), f = {}, s = {};
    (n = t.exports = function (t, n, e, l, p) {
        var v, d, h, y, b = p ? function () {
            return t
        } : a(t), m = r(e, l, n ? 2 : 1), w = 0;
        if ("function" != typeof b) throw TypeError(t + " is not iterable!");
        if (i(b)) {
            for (v = u(t.length); v > w; w++) if ((y = n ? m(c(d = t[w])[0], d[1]) : m(t[w])) === f || y === s) return y
        } else for (h = b.call(t); !(d = h.next()).done;) if ((y = o(h, m, d.value, n)) === f || y === s) return y
    }).BREAK = f, n.RETURN = s
}, function (t, n, e) {
    var r = e(2);
    t.exports = function (t, n, e, o) {
        try {
            return o ? n(r(e)[0], e[1]) : n(e)
        } catch (n) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), n
        }
    }
}, function (t, n, e) {
    var r = e(9), o = e(0)("iterator"), i = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}, function (t, n, e) {
    var r = e(17), o = e(0)("iterator"), i = e(9);
    t.exports = e(4).getIteratorMethod = function (t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function (t, n) {
    t.exports = function (t, n, e) {
        var r = void 0 === e;
        switch (n.length) {
            case 0:
                return r ? t() : t.call(e);
            case 1:
                return r ? t(n[0]) : t.call(e, n[0]);
            case 2:
                return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
            case 3:
                return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
            case 4:
                return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
        }
        return t.apply(e, n)
    }
}, function (t, n, e) {
    var r = e(1), o = e(38).set, i = r.MutationObserver || r.WebKitMutationObserver, c = r.process, u = r.Promise,
        a = "process" == e(11)(c);
    t.exports = function () {
        var t, n, e, f = function () {
            var r, o;
            for (a && (r = c.domain) && r.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? e() : n = void 0, r
                }
            }
            n = void 0, r && r.enter()
        };
        if (a) e = function () {
            c.nextTick(f)
        }; else if (!i || r.navigator && r.navigator.standalone) if (u && u.resolve) {
            var s = u.resolve();
            e = function () {
                s.then(f)
            }
        } else e = function () {
            o.call(r, f)
        }; else {
            var l = !0, p = document.createTextNode("");
            new i(f).observe(p, {characterData: !0}), e = function () {
                p.data = l = !l
            }
        }
        return function (r) {
            var o = {fn: r, next: void 0};
            n && (n.next = o), t || (t = o, e()), n = o
        }
    }
}, function (t, n, e) {
    var r = e(5);
    t.exports = function (t, n, e) {
        for (var o in n) r(t, o, n[o], e);
        return t
    }
}, function (t, n, e) {
    "use strict";
    var r = e(1), o = e(12), i = e(7), c = e(0)("species");
    t.exports = function (t) {
        var n = r[t];
        i && n && !n[c] && o.f(n, c, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, n, e) {
    var r = e(0)("iterator"), o = !1;
    try {
        var i = [7][r]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
            var i = [7], c = i[r]();
            c.next = function () {
                return {done: e = !0}
            }, i[r] = function () {
                return c
            }, t(i)
        } catch (t) {
        }
        return e
    }
}, function (t, n, e) {
    "use strict";
    var r = e(13), o = e(4), i = e(1), c = e(37), u = e(40);
    r(r.P + r.R, "Promise", {
        finally: function (t) {
            var n = c(this, o.Promise || i.Promise), e = "function" == typeof t;
            return this.then(e ? function (e) {
                return u(n, t()).then(function () {
                    return e
                })
            } : t, e ? function (e) {
                return u(n, t()).then(function () {
                    throw e
                })
            } : t)
        }
    })
}, function (t, n, e) {
    "use strict";
    var r = e(13), o = e(25), i = e(39);
    r(r.S, "Promise", {
        try: function (t) {
            var n = o.f(this), e = i(t);
            return (e.e ? n.reject : n.resolve)(e.v), n.promise
        }
    })
}, function (t, n, e) {
    "use strict";

    function r() {
        try {
            return document.currentScript.src
        } catch (n) {
            var t = document.getElementsByTagName("script");
            return t[t.length - 1].src
        }
    }

    Object.defineProperty(n, "__esModule", {value: !0}), e.p = r().replace(/[^/\\\\]+$/, ""), n.getCurrentPath = r
}, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.L2Dwidget = void 0;
    var r, o = function () {
        function t(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n
        }
    }(), i = e(88), c = (r = i) && r.__esModule ? r : {default: r}, u = e(52);
    var a = void 0, f = new (function () {
        function t() {
            !function (t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }

        return o(t, [{
            key: "init", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, u.configApplyer)(t), !u.config.mobile.show && c.default.mobile() || e.e(0).then(e.bind(null, 132)).then(function (t) {
                    (a = t).theRealInit()
                }).catch(function (t) {
                    console.error(t)
                })
            }
        }, {
            key: "captureFrame", value: function (t) {
                return a.captureFrame(t)
            }
        }, {
            key: "downloadFrame", value: function () {
                this.captureFrame(function (t) {
                    var n = document.createElement("a");
                    document.body.appendChild(n), n.setAttribute("type", "hidden"), n.href = t, n.download = "live2d.png", n.click()
                })
            }
        }]), t
    }());
    n.L2Dwidget = f
}, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = window.device, i = {}, c = [];
    window.device = i;
    var u = window.document.documentElement, a = window.navigator.userAgent.toLowerCase(),
        f = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];

    function s(t) {
        return -1 !== a.indexOf(t)
    }

    function l(t) {
        return u.className.match(new RegExp(t, "i"))
    }

    function p(t) {
        var n = null;
        l(t) || (n = u.className.replace(/^\s+|\s+$/g, ""), u.className = n + " " + t)
    }

    function v(t) {
        l(t) && (u.className = u.className.replace(" " + t, ""))
    }

    function d() {
        i.landscape() ? (v("portrait"), p("landscape"), h("landscape")) : (v("landscape"), p("portrait"), h("portrait")), m()
    }

    function h(t) {
        for (var n in c) c[n](t)
    }

    i.macos = function () {
        return s("mac")
    }, i.ios = function () {
        return i.iphone() || i.ipod() || i.ipad()
    }, i.iphone = function () {
        return !i.windows() && s("iphone")
    }, i.ipod = function () {
        return s("ipod")
    }, i.ipad = function () {
        return s("ipad")
    }, i.android = function () {
        return !i.windows() && s("android")
    }, i.androidPhone = function () {
        return i.android() && s("mobile")
    }, i.androidTablet = function () {
        return i.android() && !s("mobile")
    }, i.blackberry = function () {
        return s("blackberry") || s("bb10") || s("rim")
    }, i.blackberryPhone = function () {
        return i.blackberry() && !s("tablet")
    }, i.blackberryTablet = function () {
        return i.blackberry() && s("tablet")
    }, i.windows = function () {
        return s("windows")
    }, i.windowsPhone = function () {
        return i.windows() && s("phone")
    }, i.windowsTablet = function () {
        return i.windows() && s("touch") && !i.windowsPhone()
    }, i.fxos = function () {
        return (s("(mobile") || s("(tablet")) && s(" rv:")
    }, i.fxosPhone = function () {
        return i.fxos() && s("mobile")
    }, i.fxosTablet = function () {
        return i.fxos() && s("tablet")
    }, i.meego = function () {
        return s("meego")
    }, i.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, i.nodeWebkit = function () {
        return "object" === r(window.process)
    }, i.mobile = function () {
        return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego()
    }, i.tablet = function () {
        return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet()
    }, i.desktop = function () {
        return !i.tablet() && !i.mobile()
    }, i.television = function () {
        for (var t = 0; t < f.length;) {
            if (s(f[t])) return !0;
            t++
        }
        return !1
    }, i.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, i.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, i.noConflict = function () {
        return window.device = o, this
    }, i.ios() ? i.ipad() ? p("ios ipad tablet") : i.iphone() ? p("ios iphone mobile") : i.ipod() && p("ios ipod mobile") : i.macos() ? p("macos desktop") : i.android() ? i.androidTablet() ? p("android tablet") : p("android mobile") : i.blackberry() ? i.blackberryTablet() ? p("blackberry tablet") : p("blackberry mobile") : i.windows() ? i.windowsTablet() ? p("windows tablet") : i.windowsPhone() ? p("windows mobile") : p("windows desktop") : i.fxos() ? i.fxosTablet() ? p("fxos tablet") : p("fxos mobile") : i.meego() ? p("meego mobile") : i.nodeWebkit() ? p("node-webkit") : i.television() ? p("television") : i.desktop() && p("desktop"), i.cordova() && p("cordova"), i.onChangeOrientation = function (t) {
        "function" == typeof t && c.push(t)
    };
    var y = "resize";

    function b(t) {
        for (var n = 0; n < t.length; n++) if (i[t[n]]()) return t[n];
        return "unknown"
    }

    function m() {
        i.orientation = b(["portrait", "landscape"])
    }

    Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (y = "onorientationchange"), window.addEventListener ? window.addEventListener(y, d, !1) : window.attachEvent ? window.attachEvent(y, d) : window[y] = d, d(), i.type = b(["mobile", "tablet", "desktop"]), i.os = b(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"]), m(), n.default = i
}, function (t, n, e) {
    var r = e(41), o = e(42), i = e(93), c = e(128), u = o(function (t) {
        return t.push(void 0, i), r(c, void 0, t)
    });
    t.exports = u
}, function (t, n) {
    t.exports = function (t) {
        return t
    }
}, function (t, n, e) {
    var r = e(41), o = Math.max;
    t.exports = function (t, n, e) {
        return n = o(void 0 === n ? t.length - 1 : n, 0), function () {
            for (var i = arguments, c = -1, u = o(i.length - n, 0), a = Array(u); ++c < u;) a[c] = i[n + c];
            c = -1;
            for (var f = Array(n + 1); ++c < n;) f[c] = i[c];
            return f[n] = e(a), r(t, this, f)
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        return t
    }
}, function (t, n, e) {
    var r = e(43), o = e(10);
    t.exports = function t(n, e, i, c, u, a) {
        return o(n) && o(e) && (a.set(e, n), r(n, e, void 0, t, a), a.delete(e)), n
    }
}, function (t, n, e) {
    var r = e(95), o = e(96), i = e(97), c = e(98), u = e(99);

    function a(t) {
        var n = -1, e = null == t ? 0 : t.length;
        for (this.clear(); ++n < e;) {
            var r = t[n];
            this.set(r[0], r[1])
        }
    }

    a.prototype.clear = r, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = c, a.prototype.set = u, t.exports = a
}, function (t, n) {
    t.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (t, n, e) {
    var r = e(16), o = Array.prototype.splice;
    t.exports = function (t) {
        var n = this.__data__, e = r(n, t);
        return !(e < 0 || (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, 0))
    }
}, function (t, n, e) {
    var r = e(16);
    t.exports = function (t) {
        var n = this.__data__, e = r(n, t);
        return e < 0 ? void 0 : n[e][1]
    }
}, function (t, n, e) {
    var r = e(16);
    t.exports = function (t) {
        return r(this.__data__, t) > -1
    }
}, function (t, n, e) {
    var r = e(16);
    t.exports = function (t, n) {
        var e = this.__data__, o = r(e, t);
        return o < 0 ? (++this.size, e.push([t, n])) : e[o][1] = n, this
    }
}, function (t, n, e) {
    var r = e(101), o = function () {
        try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (t) {
        }
    }();
    t.exports = o
}, function (t, n) {
    t.exports = function (t, n) {
        return null == t ? void 0 : t[n]
    }
}, function (t, n, e) {
    var r = e(103)();
    t.exports = r
}, function (t, n) {
    t.exports = function (t) {
        return function (n, e, r) {
            for (var o = -1, i = Object(n), c = r(n), u = c.length; u--;) {
                var a = c[t ? u : ++o];
                if (!1 === e(i[a], a, i)) break
            }
            return n
        }
    }
}, function (t, n, e) {
    var r = e(44), o = e(105), i = e(109), c = e(112), u = e(113), a = e(117), f = e(118), s = e(119), l = e(122),
        p = e(47), v = e(10), d = e(123), h = e(124), y = e(50), b = e(125);
    t.exports = function (t, n, e, m, w, x, g) {
        var _ = y(t, e), j = y(n, e), O = g.get(j);
        if (O) r(t, e, O); else {
            var P = x ? x(_, j, e + "", t, n, g) : void 0, S = void 0 === P;
            if (S) {
                var k = f(j), T = !k && l(j), L = !k && !T && h(j);
                P = j, k || T || L ? f(_) ? P = _ : s(_) ? P = c(_) : T ? (S = !1, P = o(j, !0)) : L ? (S = !1, P = i(j, !0)) : P = [] : d(j) || a(j) ? (P = _, a(_) ? P = b(_) : (!v(_) || m && p(_)) && (P = u(j))) : S = !1
            }
            S && (g.set(j, P), w(P, j, m, x, g), g.delete(j)), r(t, e, P)
        }
    }
}, function (t, n, e) {
    (function (t) {
        var r = e(45), o = "object" == typeof n && n && !n.nodeType && n,
            i = o && "object" == typeof t && t && !t.nodeType && t, c = i && i.exports === o ? r.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;
        t.exports = function (t, n) {
            if (n) return t.slice();
            var e = t.length, r = u ? u(e) : new t.constructor(e);
            return t.copy(r), r
        }
    }).call(n, e(106)(t))
}, function (t, n) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, n, e) {
    (function (n) {
        var e = "object" == typeof n && n && n.Object === Object && n;
        t.exports = e
    }).call(n, e(108))
}, function (t, n) {
    var e;
    e = function () {
        return this
    }();
    try {
        e = e || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (e = window)
    }
    t.exports = e
}, function (t, n, e) {
    var r = e(110);
    t.exports = function (t, n) {
        var e = n ? r(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length)
    }
}, function (t, n, e) {
    var r = e(111);
    t.exports = function (t) {
        var n = new t.constructor(t.byteLength);
        return new r(n).set(new r(t)), n
    }
}, function (t, n, e) {
    var r = e(45).Uint8Array;
    t.exports = r
}, function (t, n) {
    t.exports = function (t, n) {
        var e = -1, r = t.length;
        for (n || (n = Array(r)); ++e < r;) n[e] = t[e];
        return n
    }
}, function (t, n, e) {
    var r = e(114), o = e(46), i = e(116);
    t.exports = function (t) {
        return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
    }
}, function (t, n, e) {
    var r = e(10), o = Object.create, i = function () {
        function t() {
        }

        return function (n) {
            if (!r(n)) return {};
            if (o) return o(n);
            t.prototype = n;
            var e = new t;
            return t.prototype = void 0, e
        }
    }();
    t.exports = i
}, function (t, n) {
    t.exports = function (t, n) {
        return function (e) {
            return t(n(e))
        }
    }
}, function (t, n) {
    t.exports = function () {
        return !1
    }
}, function (t, n) {
    t.exports = function () {
        return !1
    }
}, function (t, n) {
    var e = Array.isArray;
    t.exports = e
}, function (t, n, e) {
    var r = e(120), o = e(49);
    t.exports = function (t) {
        return o(t) && r(t)
    }
}, function (t, n, e) {
    var r = e(47), o = e(121);
    t.exports = function (t) {
        return null != t && o(t.length) && !r(t)
    }
}, function (t, n) {
    var e = 9007199254740991;
    t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= e
    }
}, function (t, n) {
    t.exports = function () {
        return !1
    }
}, function (t, n, e) {
    var r = e(48), o = e(46), i = e(49), c = "[object Object]", u = Function.prototype, a = Object.prototype,
        f = u.toString, s = a.hasOwnProperty, l = f.call(Object);
    t.exports = function (t) {
        if (!i(t) || r(t) != c) return !1;
        var n = o(t);
        if (null === n) return !0;
        var e = s.call(n, "constructor") && n.constructor;
        return "function" == typeof e && e instanceof e && f.call(e) == l
    }
}, function (t, n) {
    t.exports = function () {
        return !1
    }
}, function (t, n, e) {
    var r = e(126), o = e(51);
    t.exports = function (t) {
        return r(t, o(t))
    }
}, function (t, n, e) {
    var r = e(127), o = e(27);
    t.exports = function (t, n, e, i) {
        var c = !e;
        e || (e = {});
        for (var u = -1, a = n.length; ++u < a;) {
            var f = n[u], s = i ? i(e[f], t[f], f, e, t) : void 0;
            void 0 === s && (s = t[f]), c ? o(e, f, s) : r(e, f, s)
        }
        return e
    }
}, function (t, n, e) {
    var r = e(27), o = e(26), i = Object.prototype.hasOwnProperty;
    t.exports = function (t, n, e) {
        var c = t[n];
        i.call(t, n) && o(c, e) && (void 0 !== e || n in t) || r(t, n, e)
    }
}, function (t, n, e) {
    var r = e(43), o = e(129)(function (t, n, e, o) {
        r(t, n, e, o)
    });
    t.exports = o
}, function (t, n, e) {
    var r = e(42), o = e(130);
    t.exports = function (t) {
        return r(function (n, e) {
            var r = -1, i = e.length, c = i > 1 ? e[i - 1] : void 0, u = i > 2 ? e[2] : void 0;
            for (c = t.length > 3 && "function" == typeof c ? (i--, c) : void 0, u && o(e[0], e[1], u) && (c = i < 3 ? void 0 : c, i = 1), n = Object(n); ++r < i;) {
                var a = e[r];
                a && t(n, a, r, c)
            }
            return n
        })
    }
}, function (t, n) {
    t.exports = function () {
        return !1
    }
}, function (t, n, e) {
    "use strict";
    var r = {
        model: {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@latest/assets/shizuku.model.json",
            scale: 1,
            hHeadPos: .5,
            vHeadPos: .618,
            myDefine: []
        },
        display: {superSample: 2, width: 150, height: 300, position: "right", hOffset: 0, vOffset: -20},
        mobile: {show: !0, scale: .5, motion: !0},
        name: {canvas: "live2dcanvas", div: "live2d-widget"},
        react: {
            opacityDefault: .7, opacityOnHover: .2, myFunc: function (t) {
                console.log("(undefined) ┑(￣Д ￣)┍")
            }
        },
        dev: {
            log: !1, border: !1, mouseLog: !1, mouseFunc: function (t, n, e, r) {
                console.log("MouseFunc: " + t + "," + n + "; " + e + ", " + r)
            }
        }
    };
    t.exports = r
}]).L2Dwidget;
//# sourceMappingURL=L2Dwidget.min.js.map
