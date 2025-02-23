!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t) {
    t = t || Z;
    var n = t.createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = pe.type(e);
    return (
      "function" !== n &&
      !pe.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function i(e, t, n) {
    if (pe.isFunction(t))
      return pe.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return pe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (Te.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function (e) {
      return ie.call(t, e) > -1 !== n && 1 === e.nodeType;
    });
  }
  function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function a(e) {
    var t = {};
    return (
      pe.each(e.match(De) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function s(e) {
    return e;
  }
  function u(e) {
    throw e;
  }
  function l(e, t, n) {
    var r;
    try {
      e && pe.isFunction((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && pe.isFunction((r = e.then))
        ? r.call(e, t, n)
        : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  function c() {
    Z.removeEventListener("DOMContentLoaded", c),
      e.removeEventListener("load", c),
      pe.ready();
  }
  function f() {
    this.expando = pe.expando + f.uid++;
  }
  function p(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Pe, "-$&").toLowerCase()),
        (n = e.getAttribute(r)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Oe.test(n)
                ? JSON.parse(n)
                : n));
        } catch (i) {}
        Fe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function d(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return pe.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (pe.cssNumber[t] ? "" : "px"),
      c = (pe.cssNumber[t] || ("px" !== l && +u)) && Me.exec(pe.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do (o = o || ".5"), (c /= o), pe.style(e, t, c + l);
      while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  function h(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = Be[r];
    return i
      ? i
      : ((t = n.body.appendChild(n.createElement(r))),
        (i = pe.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        (Be[r] = i),
        i);
  }
  function g(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]),
        r.style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((i[o] = He.get(r, "display") || null),
                i[o] || (r.style.display = "")),
              "" === r.style.display && We(r) && (i[o] = h(r)))
            : "none" !== n && ((i[o] = "none"), He.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function m(e, t) {
    var n =
      "undefined" != typeof e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : "undefined" != typeof e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && pe.nodeName(e, t)) ? pe.merge([e], n) : n;
  }
  function v(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
  }
  function y(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if (((o = e[d]), o || 0 === o))
        if ("object" === pe.type(o)) pe.merge(p, o.nodeType ? [o] : o);
        else if (Ve.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (ze.exec(o) || ["", ""])[1].toLowerCase(),
              u = Ue[s] || Ue._default,
              a.innerHTML = u[1] + pe.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          pe.merge(p, a.childNodes), (a = f.firstChild), (a.textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && pe.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = pe.contains(o.ownerDocument, o)),
        (a = m(f.appendChild(o), "script")),
        l && v(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) Xe.test(o.type || "") && n.push(o);
    return f;
  }
  function x() {
    return !0;
  }
  function b() {
    return !1;
  }
  function w() {
    try {
      return Z.activeElement;
    } catch (e) {}
  }
  function T(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) T(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      i === !1)
    )
      i = b;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return pe().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = pe.guid++))),
      e.each(function () {
        pe.event.add(this, t, i, r, n);
      })
    );
  }
  function C(e, t) {
    return pe.nodeName(e, "table") &&
      pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] || e
      : e;
  }
  function k(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function E(e) {
    var t = tt.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function S(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        He.hasData(e) &&
        ((o = He.access(e)), (a = He.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) pe.event.add(t, i, l[i][n]);
      }
      Fe.hasData(e) &&
        ((s = Fe.access(e)), (u = pe.extend({}, s)), Fe.set(t, u));
    }
  }
  function N(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && _e.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function D(e, t, r, i) {
    t = ne.apply([], t);
    var o,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      h = t[0],
      g = pe.isFunction(h);
    if (g || (p > 1 && "string" == typeof h && !ce.checkClone && et.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), D(o, t, r, i);
      });
    if (
      p &&
      ((o = y(t, e[0].ownerDocument, !1, e, i)),
      (a = o.firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (s = pe.map(m(o, "script"), k), u = s.length; f < p; f++)
        (l = o),
          f !== d &&
            ((l = pe.clone(l, !0, !0)), u && pe.merge(s, m(l, "script"))),
          r.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, pe.map(s, E), f = 0; f < u; f++)
          (l = s[f]),
            Xe.test(l.type || "") &&
              !He.access(l, "globalEval") &&
              pe.contains(c, l) &&
              (l.src
                ? pe._evalUrl && pe._evalUrl(l.src)
                : n(l.textContent.replace(nt, ""), c));
    }
    return e;
  }
  function j(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || pe.cleanData(m(r)),
        r.parentNode &&
          (n && pe.contains(r.ownerDocument, r) && v(m(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  function A(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || ot(e)),
      n &&
        ((a = n.getPropertyValue(t) || n[t]),
        "" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)),
        !ce.pixelMarginRight() &&
          it.test(a) &&
          rt.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function q(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function L(e) {
    if (e in ct) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; )
      if (((e = lt[n] + t), e in ct)) return e;
  }
  function H(e, t, n) {
    var r = Me.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function F(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += pe.css(e, n + Ie[o], !0, i)),
        r
          ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, i)),
            "margin" !== n &&
              (a -= pe.css(e, "border" + Ie[o] + "Width", !0, i)))
          : ((a += pe.css(e, "padding" + Ie[o], !0, i)),
            "padding" !== n &&
              (a += pe.css(e, "border" + Ie[o] + "Width", !0, i)));
    return a;
  }
  function O(e, t, n) {
    var r,
      i = !0,
      o = ot(e),
      a = "border-box" === pe.css(e, "boxSizing", !1, o);
    if (
      (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
      r <= 0 || null == r)
    ) {
      if (
        ((r = A(e, t, o)), (r < 0 || null == r) && (r = e.style[t]), it.test(r))
      )
        return r;
      (i = a && (ce.boxSizingReliable() || r === e.style[t])),
        (r = parseFloat(r) || 0);
    }
    return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px";
  }
  function P(e, t, n, r, i) {
    return new P.prototype.init(e, t, n, r, i);
  }
  function R() {
    pt && (e.requestAnimationFrame(R), pe.fx.tick());
  }
  function M() {
    return (
      e.setTimeout(function () {
        ft = void 0;
      }),
      (ft = pe.now())
    );
  }
  function I(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      (n = Ie[r]), (i["margin" + n] = i["padding" + n] = e);
    return t && (i.opacity = i.width = e), i;
  }
  function W(e, t, n) {
    for (
      var r,
        i = (_.tweeners[t] || []).concat(_.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function $(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      m = e.nodeType && We(e),
      v = He.get(e, "fxshow");
    n.queue ||
      ((a = pe._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, pe.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), dt.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))
        ) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          m = !0;
        }
        d[r] = (v && v[r]) || pe.style(e, r);
      }
    if (((u = !pe.isEmptyObject(t)), u || !pe.isEmptyObject(d))) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (l = v && v.display),
        null == l && (l = He.get(e, "display")),
        (c = pe.css(e, "display")),
        "none" === c &&
          (l
            ? (c = l)
            : (g([e], !0),
              (l = e.style.display || l),
              (c = pe.css(e, "display")),
              g([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === pe.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (v
            ? "hidden" in v && (m = v.hidden)
            : (v = He.access(e, "fxshow", { display: l })),
          o && (v.hidden = !m),
          m && g([e], !0),
          p.done(function () {
            m || g([e]), He.remove(e, "fxshow");
            for (r in d) pe.style(e, r, d[r]);
          })),
          (u = W(m ? v[r] : 0, r, p)),
          r in v || ((v[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
    }
  }
  function B(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = pe.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        pe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = pe.cssHooks[r]),
        a && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function _(e, t, n) {
    var r,
      i,
      o = 0,
      a = _.prefilters.length,
      s = pe.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = ft || M(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
          a < u;
          a++
        )
          l.tweens[a].run(o);
        return (
          s.notifyWith(e, [l, o, n]),
          o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: pe.extend({}, t),
        opts: pe.extend(
          !0,
          { specialEasing: {}, easing: pe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: ft || M(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = pe.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (B(c, l.opts.specialEasing); o < a; o++)
      if ((r = _.prefilters[o].call(l, e, c, l.opts)))
        return (
          pe.isFunction(r.stop) &&
            (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)),
          r
        );
    return (
      pe.map(c, W, l),
      pe.isFunction(l.opts.start) && l.opts.start.call(e, l),
      pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function z(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function X(e, t, n, r) {
    var i;
    if (pe.isArray(t))
      pe.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : X(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== pe.type(t)) r(e, t);
    else for (i in t) X(e + "[" + i + "]", t[i], n, r);
  }
  function U(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(De) || [];
      if (pe.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function V(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        pe.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || a || o[l]
            ? a
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === Mt;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function G(e, t) {
    var n,
      r,
      i = pe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && pe.extend(!0, e, r), e;
  }
  function Y(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Q(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (((a = l[u + " " + o] || l["* " + o]), !a))
            for (i in l)
              if (
                ((s = i.split(" ")),
                s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]]))
              ) {
                a === !0
                  ? (a = l[i])
                  : l[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: a ? f : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function J(e) {
    return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var K = [],
    Z = e.document,
    ee = Object.getPrototypeOf,
    te = K.slice,
    ne = K.concat,
    re = K.push,
    ie = K.indexOf,
    oe = {},
    ae = oe.toString,
    se = oe.hasOwnProperty,
    ue = se.toString,
    le = ue.call(Object),
    ce = {},
    fe = "3.1.0",
    pe = function (e, t) {
      return new pe.fn.init(e, t);
    },
    de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    he = /^-ms-/,
    ge = /-([a-z])/g,
    me = function (e, t) {
      return t.toUpperCase();
    };
  (pe.fn = pe.prototype =
    {
      jquery: fe,
      constructor: pe,
      length: 0,
      toArray: function () {
        return te.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : te.call(this);
      },
      pushStack: function (e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return pe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          pe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(te.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: re,
      sort: K.sort,
      splice: K.splice,
    }),
    (pe.extend = pe.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || pe.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                (r = e[t]),
                a !== r &&
                  (l && r && (pe.isPlainObject(r) || (i = pe.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && pe.isArray(n) ? n : []))
                        : (o = n && pe.isPlainObject(n) ? n : {}),
                      (a[t] = pe.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    pe.extend({
      expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === pe.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = pe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== ae.call(e)) &&
          (!(t = ee(e)) ||
            ((n = se.call(t, "constructor") && t.constructor),
            "function" == typeof n && ue.call(n) === le))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? oe[ae.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        n(e);
      },
      camelCase: function (e) {
        return e.replace(he, "ms-").replace(ge, me);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (r(e))
          for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
        else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(de, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (r(Object(e))
              ? pe.merge(n, "string" == typeof e ? [e] : e)
              : re.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : ie.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)), r !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          a = 0,
          s = [];
        if (r(e))
          for (i = e.length; a < i; a++)
            (o = t(e[a], a, n)), null != o && s.push(o);
        else for (a in e) (o = t(e[a], a, n)), null != o && s.push(o);
        return ne.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        if (
          ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          pe.isFunction(e))
        )
          return (
            (r = te.call(arguments, 2)),
            (i = function () {
              return e.apply(t || this, r.concat(te.call(arguments)));
            }),
            (i.guid = e.guid = e.guid || pe.guid++),
            i
          );
      },
      now: Date.now,
      support: ce,
    }),
    "function" == typeof Symbol &&
      (pe.fn[Symbol.iterator] = K[Symbol.iterator]),
    pe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        oe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ve = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : $) !== H && L(t), (t = t || H), O)
      ) {
        if (11 !== h && (u = ve.exec(e)))
          if ((i = u[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              T.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(i)), n;
          }
        if (T.qsa && !U[e + " "] && (!P || !P.test(e))) {
          if (1 !== h) (p = t), (c = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(we, Te))
                : t.setAttribute("id", (s = W)),
                l = S(e),
                o = l.length;
              o--;

            )
              l[o] = "#" + s + " " + d(l[o]);
            (c = l.join(",")), (p = (ye.test(e) && f(t.parentNode)) || t);
          }
          if (c)
            try {
              return K.apply(n, p.querySelectorAll(c)), n;
            } catch (g) {
            } finally {
              s === W && t.removeAttribute("id");
            }
        }
      }
      return D(e.replace(se, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > C.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[W] = !0), e;
    }
    function i(e) {
      var t = H.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) C.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        return (
          ("label" in t && t.disabled === e) ||
          ("form" in t && t.disabled === e) ||
          ("form" in t &&
            t.disabled === !1 &&
            (t.isDisabled === e ||
              (t.isDisabled !== !e && ("label" in t || !ke(t)) !== e)))
        );
      };
    }
    function c(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function f(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function p() {}
    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function h(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = _++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [B, s];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[W] || (t[W] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === B && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
          };
    }
    function g(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function v(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function y(e, t, n, i, o, a) {
      return (
        i && !i[W] && (i = y(i)),
        o && !o[W] && (o = y(o, a)),
        r(function (r, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = r || m(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!r && t) ? g : v(g, p, e, s, u),
            x = n ? (o || (r ? e : h || i) ? [] : a) : y;
          if ((n && n(y, x, s, u), i))
            for (l = v(x, d), i(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = x.length; c--; )
                  (f = x[c]) && l.push((y[c] = f));
                o(null, (x = []), l, u);
              }
              for (c = x.length; c--; )
                (f = x[c]) &&
                  (l = o ? ee(r, f) : p[c]) > -1 &&
                  (r[l] = !(a[l] = f));
            }
          } else (x = v(x === a ? x.splice(h, x.length) : x)), o ? o(null, a, x, u) : K.apply(a, x);
        })
      );
    }
    function x(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = C.relative[e[0].type],
          a = o || C.relative[" "],
          s = o ? 1 : 0,
          u = h(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          l = h(
            function (e) {
              return ee(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== j)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return (t = null), i;
            },
          ];
        s < i;
        s++
      )
        if ((n = C.relative[e[s].type])) c = [h(g(c), n)];
        else {
          if (((n = C.filter[e[s].type].apply(null, e[s].matches)), n[W])) {
            for (r = ++s; r < i && !C.relative[e[r].type]; r++);
            return y(
              s > 1 && g(c),
              s > 1 &&
                d(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              n,
              s < r && x(e.slice(s, r)),
              r < i && x((e = e.slice(r))),
              r < i && d(e)
            );
          }
          c.push(n);
        }
      return g(c);
    }
    function b(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, u, l) {
          var c,
            f,
            p,
            d = 0,
            h = "0",
            g = r && [],
            m = [],
            y = j,
            x = r || (o && C.find.TAG("*", l)),
            b = (B += null == y ? 1 : Math.random() || 0.1),
            w = x.length;
          for (
            l && (j = a === H || a || l);
            h !== w && null != (c = x[h]);
            h++
          ) {
            if (o && c) {
              for (
                f = 0, a || c.ownerDocument === H || (L(c), (s = !O));
                (p = e[f++]);

              )
                if (p(c, a || H, s)) {
                  u.push(c);
                  break;
                }
              l && (B = b);
            }
            i && ((c = !p && c) && d--, r && g.push(c));
          }
          if (((d += h), i && h !== d)) {
            for (f = 0; (p = n[f++]); ) p(g, m, a, s);
            if (r) {
              if (d > 0) for (; h--; ) g[h] || m[h] || (m[h] = Q.call(u));
              m = v(m);
            }
            K.apply(u, m),
              l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
          }
          return l && ((B = b), (j = y)), g;
        };
      return i ? r(a) : a;
    }
    var w,
      T,
      C,
      k,
      E,
      S,
      N,
      D,
      j,
      A,
      q,
      L,
      H,
      F,
      O,
      P,
      R,
      M,
      I,
      W = "sizzle" + 1 * new Date(),
      $ = e.document,
      B = 0,
      _ = 0,
      z = n(),
      X = n(),
      U = n(),
      V = function (e, t) {
        return e === t && (q = !0), 0;
      },
      G = {}.hasOwnProperty,
      Y = [],
      Q = Y.pop,
      J = Y.push,
      K = Y.push,
      Z = Y.slice,
      ee = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ie =
        "\\[" +
        ne +
        "*(" +
        re +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        re +
        "))|)" +
        ne +
        "*\\]",
      oe =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ie +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      pe = new RegExp("^" + re + "$"),
      de = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      be = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      Te = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Ce = function () {
        L();
      },
      ke = h(
        function (e) {
          return e.disabled === !0;
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      K.apply((Y = Z.call($.childNodes)), $.childNodes),
        Y[$.childNodes.length].nodeType;
    } catch (Ee) {
      K = {
        apply: Y.length
          ? function (e, t) {
              J.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (T = t.support = {}),
      (E = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (L = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : $;
          return r !== H && 9 === r.nodeType && r.documentElement
            ? ((H = r),
              (F = H.documentElement),
              (O = !E(H)),
              $ !== H &&
                (n = H.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", Ce, !1)
                  : n.attachEvent && n.attachEvent("onunload", Ce)),
              (T.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (T.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(H.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (T.getElementsByClassName = me.test(H.getElementsByClassName)),
              (T.getById = i(function (e) {
                return (
                  (F.appendChild(e).id = W),
                  !H.getElementsByName || !H.getElementsByName(W).length
                );
              })),
              T.getById
                ? ((C.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (C.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete C.find.ID,
                  (C.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (C.find.TAG = T.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : T.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (C.find.CLASS =
                T.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && O)
                    return t.getElementsByClassName(e);
                }),
              (R = []),
              (P = []),
              (T.qsa = me.test(H.querySelectorAll)) &&
                (i(function (e) {
                  (F.appendChild(e).innerHTML =
                    "<a id='" +
                    W +
                    "'></a><select id='" +
                    W +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      P.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + W + "-]").length ||
                      P.push("~="),
                    e.querySelectorAll(":checked").length || P.push(":checked"),
                    e.querySelectorAll("a#" + W + "+*").length ||
                      P.push(".#.+[+~]");
                }),
                i(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = H.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      P.push("name" + ne + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      P.push(":enabled", ":disabled"),
                    (F.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      P.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    P.push(",.*:");
                })),
              (T.matchesSelector = me.test(
                (M =
                  F.matches ||
                  F.webkitMatchesSelector ||
                  F.mozMatchesSelector ||
                  F.oMatchesSelector ||
                  F.msMatchesSelector)
              )) &&
                i(function (e) {
                  (T.disconnectedMatch = M.call(e, "*")),
                    M.call(e, "[s!='']:x"),
                    R.push("!=", oe);
                }),
              (P = P.length && new RegExp(P.join("|"))),
              (R = R.length && new RegExp(R.join("|"))),
              (t = me.test(F.compareDocumentPosition)),
              (I =
                t || me.test(F.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (V = t
                ? function (e, t) {
                    if (e === t) return (q = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!T.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === H || (e.ownerDocument === $ && I($, e))
                            ? -1
                            : t === H || (t.ownerDocument === $ && I($, t))
                            ? 1
                            : A
                            ? ee(A, e) - ee(A, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (q = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      u = [t];
                    if (!i || !o)
                      return e === H
                        ? -1
                        : t === H
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : A
                        ? ee(A, e) - ee(A, t)
                        : 0;
                    if (i === o) return a(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; s[r] === u[r]; ) r++;
                    return r
                      ? a(s[r], u[r])
                      : s[r] === $
                      ? -1
                      : u[r] === $
                      ? 1
                      : 0;
                  }),
              H)
            : H;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== H && L(e),
          (n = n.replace(ce, "='$1']")),
          T.matchesSelector &&
            O &&
            !U[n + " "] &&
            (!R || !R.test(n)) &&
            (!P || !P.test(n)))
        )
          try {
            var r = M.call(e, n);
            if (
              r ||
              T.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (i) {}
        return t(n, H, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== H && L(e), I(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== H && L(e);
        var n = C.attrHandle[t.toLowerCase()],
          r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
        return void 0 !== r
          ? r
          : T.attributes || !O
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + "").replace(we, Te);
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((q = !T.detectDuplicates),
          (A = !T.sortStable && e.slice(0)),
          e.sort(V),
          q)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (A = null), e;
      }),
      (k = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += k(t);
          return n;
        }),
      (C = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(xe, be)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return de.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      fe.test(n) &&
                      (t = S(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(xe, be).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = z[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  z(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !u && !s,
                      x = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (p = t; (p = p[g]); )
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                        for (
                          p = m,
                            f = p[W] || (p[W] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            l = c[e] || [],
                            d = l[0] === B && l[1],
                            x = d && l[2],
                            p = d && m.childNodes[d];
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [B, d, x];
                            break;
                          }
                      } else if (
                        (y &&
                          ((p = t),
                          (f = p[W] || (p[W] = {})),
                          (c = f[p.uniqueID] || (f[p.uniqueID] = {})),
                          (l = c[e] || []),
                          (d = l[0] === B && l[1]),
                          (x = d)),
                        x === !1)
                      )
                        for (
                          ;
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                          ((s
                            ? p.nodeName.toLowerCase() !== v
                            : 1 !== p.nodeType) ||
                            !++x ||
                            (y &&
                              ((f = p[W] || (p[W] = {})),
                              (c = f[p.uniqueID] || (f[p.uniqueID] = {})),
                              (c[e] = [B, x])),
                            p !== t));

                        );
                      return (x -= i), x === r || (x % r === 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  C.pseudos[e] ||
                  C.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[W]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  C.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                          (r = ee(e, i[a])), (e[r] = !(t[r] = i[a]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = N(e.replace(se, "$1"));
              return i[W]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(xe, be)),
                function (t) {
                  return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                pe.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(xe, be).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = O
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === F;
            },
            focus: function (e) {
              return (
                e === H.activeElement &&
                (!H.hasFocus || H.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: l(!1),
            disabled: l(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !C.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (e, t) {
              return [t - 1];
            }),
            eq: c(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: c(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: c(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: c(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: c(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (C.pseudos.nth = C.pseudos.eq);
    for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      C.pseudos[w] = s(w);
    for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w);
    return (
      (p.prototype = C.filters = C.pseudos),
      (C.setFilters = new p()),
      (S = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = X[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, u = [], l = C.preFilter; s; ) {
            (r && !(i = ue.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = le.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(se, " ") }),
                (s = s.slice(r.length)));
            for (a in C.filter)
              !(i = de[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
        }),
      (N = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = U[e + " "];
          if (!o) {
            for (t || (t = S(e)), n = t.length; n--; )
              (o = x(t[n])), o[W] ? r.push(o) : i.push(o);
            (o = U(e, b(i, r))), (o.selector = e);
          }
          return o;
        }),
      (D = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && S((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              ((o = c[0] = c[0].slice(0)),
              o.length > 2 &&
                "ID" === (a = o[0]).type &&
                T.getById &&
                9 === t.nodeType &&
                O &&
                C.relative[o[1].type])
            ) {
              if (
                ((t = (C.find.ID(a.matches[0].replace(xe, be), t) || [])[0]),
                !t)
              )
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = de.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !C.relative[(s = a.type)]);

            )
              if (
                (u = C.find[s]) &&
                (r = u(
                  a.matches[0].replace(xe, be),
                  (ye.test(o[0].type) && f(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), (e = r.length && d(o)), !e))
                  return K.apply(n, r), n;
                break;
              }
          }
          return (
            (l || N(e, c))(
              r,
              t,
              !O,
              n,
              !t || (ye.test(e) && f(t.parentNode)) || t
            ),
            n
          );
        }),
      (T.sortStable = W.split("").sort(V).join("") === W),
      (T.detectDuplicates = !!q),
      L(),
      (T.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(H.createElement("fieldset"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var r;
          if (!n)
            return e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      t
    );
  })(e);
  (pe.find = ve),
    (pe.expr = ve.selectors),
    (pe.expr[":"] = pe.expr.pseudos),
    (pe.uniqueSort = pe.unique = ve.uniqueSort),
    (pe.text = ve.getText),
    (pe.isXMLDoc = ve.isXML),
    (pe.contains = ve.contains),
    (pe.escapeSelector = ve.escape);
  var ye = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && pe(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    xe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    be = pe.expr.match.needsContext,
    we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Te = /^.[^:#\[\.,]*$/;
  (pe.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? pe.find.matchesSelector(r, e)
          ? [r]
          : []
        : pe.find.matches(
            e,
            pe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    pe.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            pe(e).filter(function () {
              for (t = 0; t < r; t++) if (pe.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) pe.find(e, i[t], n);
        return r > 1 ? pe.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(i(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(i(this, e || [], !0));
      },
      is: function (e) {
        return !!i(
          this,
          "string" == typeof e && be.test(e) ? pe(e) : e || [],
          !1
        ).length;
      },
    });
  var Ce,
    ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ee = (pe.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || Ce), "string" == typeof e)) {
        if (
          ((r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : ke.exec(e)),
          !r || (!r[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof pe ? t[0] : t),
            pe.merge(
              this,
              pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)
            ),
            we.test(r[1]) && pe.isPlainObject(t))
          )
            for (r in t)
              pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = Z.getElementById(r[2])),
          i && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : pe.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(pe)
        : pe.makeArray(e, this);
    });
  (Ee.prototype = pe.fn), (Ce = pe(Z));
  var Se = /^(?:parents|prev(?:Until|All))/,
    Ne = { children: !0, contents: !0, next: !0, prev: !0 };
  pe.fn.extend({
    has: function (e) {
      var t = pe(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (pe.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && pe(e);
      if (!be.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && pe.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ie.call(pe(e), this[0])
          : ie.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    pe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ye(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ye(e, "parentNode", n);
        },
        next: function (e) {
          return o(e, "nextSibling");
        },
        prev: function (e) {
          return o(e, "previousSibling");
        },
        nextAll: function (e) {
          return ye(e, "nextSibling");
        },
        prevAll: function (e) {
          return ye(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ye(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ye(e, "previousSibling", n);
        },
        siblings: function (e) {
          return xe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return xe(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || pe.merge([], e.childNodes);
        },
      },
      function (e, t) {
        pe.fn[e] = function (n, r) {
          var i = pe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = pe.filter(r, i)),
            this.length > 1 &&
              (Ne[e] || pe.uniqueSort(i), Se.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var De = /\S+/g;
  (pe.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : pe.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      s = [],
      u = -1,
      l = function () {
        for (i = e.once, r = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < o.length; )
            o[u].apply(n[0], n[1]) === !1 &&
              e.stopOnFalse &&
              ((u = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (n && !t && ((u = o.length - 1), s.push(n)),
              (function r(t) {
                pe.each(t, function (t, n) {
                  pe.isFunction(n)
                    ? (e.unique && c.has(n)) || o.push(n)
                    : n && n.length && "string" !== pe.type(n) && r(n);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            pe.each(arguments, function (e, t) {
              for (var n; (n = pe.inArray(t, o, n)) > -1; )
                o.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? pe.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = s = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = s = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    pe.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              pe.Callbacks("memory"),
              pe.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              pe.Callbacks("once memory"),
              pe.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              pe.Callbacks("once memory"),
              pe.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return pe
                .Deferred(function (t) {
                  pe.each(n, function (n, r) {
                    var i = pe.isFunction(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && pe.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              function o(t, n, r, i) {
                return function () {
                  var l = this,
                    c = arguments,
                    f = function () {
                      var e, f;
                      if (!(t < a)) {
                        if (((e = r.apply(l, c)), e === n.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (f =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          pe.isFunction(f)
                            ? i
                              ? f.call(e, o(a, n, s, i), o(a, n, u, i))
                              : (a++,
                                f.call(
                                  e,
                                  o(a, n, s, i),
                                  o(a, n, u, i),
                                  o(a, n, s, n.notifyWith)
                                ))
                            : (r !== s && ((l = void 0), (c = [e])),
                              (i || n.resolveWith)(l, c));
                      }
                    },
                    p = i
                      ? f
                      : function () {
                          try {
                            f();
                          } catch (e) {
                            pe.Deferred.exceptionHook &&
                              pe.Deferred.exceptionHook(e, p.stackTrace),
                              t + 1 >= a &&
                                (r !== u && ((l = void 0), (c = [e])),
                                n.rejectWith(l, c));
                          }
                        };
                  t
                    ? p()
                    : (pe.Deferred.getStackHook &&
                        (p.stackTrace = pe.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var a = 0;
              return pe
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, pe.isFunction(i) ? i : s, e.notifyWith)),
                    n[1][3].add(o(0, e, pe.isFunction(t) ? t : s)),
                    n[2][3].add(o(0, e, pe.isFunction(r) ? r : u));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? pe.extend(e, i) : i;
            },
          },
          o = {};
        return (
          pe.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[0][2].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = te.call(arguments),
          o = pe.Deferred(),
          a = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? te.call(arguments) : n),
                --t || o.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (l(e, o.done(a(n)).resolve, o.reject),
          "pending" === o.state() || pe.isFunction(i[n] && i[n].then))
        )
          return o.then();
        for (; n--; ) l(i[n], a(n), o.reject);
        return o.promise();
      },
    });
  var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (pe.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      je.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (pe.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Ae = pe.Deferred();
  (pe.fn.ready = function (e) {
    return (
      Ae.then(e)["catch"](function (e) {
        pe.readyException(e);
      }),
      this
    );
  }),
    pe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? pe.readyWait++ : pe.ready(!0);
      },
      ready: function (e) {
        (e === !0 ? --pe.readyWait : pe.isReady) ||
          ((pe.isReady = !0),
          (e !== !0 && --pe.readyWait > 0) || Ae.resolveWith(Z, [pe]));
      },
    }),
    (pe.ready.then = Ae.then),
    "complete" === Z.readyState ||
    ("loading" !== Z.readyState && !Z.documentElement.doScroll)
      ? e.setTimeout(pe.ready)
      : (Z.addEventListener("DOMContentLoaded", c),
        e.addEventListener("load", c));
  var qe = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === pe.type(n)) {
        i = !0;
        for (s in n) qe(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        pe.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(pe(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    Le = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (f.uid = 1),
    (f.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Le(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[pe.camelCase(t)] = n;
        else for (r in t) i[pe.camelCase(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][pe.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            pe.isArray(t)
              ? (t = t.map(pe.camelCase))
              : ((t = pe.camelCase(t)), (t = t in r ? [t] : t.match(De) || [])),
              (n = t.length);
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || pe.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !pe.isEmptyObject(t);
      },
    });
  var He = new f(),
    Fe = new f(),
    Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Pe = /[A-Z]/g;
  pe.extend({
    hasData: function (e) {
      return Fe.hasData(e) || He.hasData(e);
    },
    data: function (e, t, n) {
      return Fe.access(e, t, n);
    },
    removeData: function (e, t) {
      Fe.remove(e, t);
    },
    _data: function (e, t, n) {
      return He.access(e, t, n);
    },
    _removeData: function (e, t) {
      He.remove(e, t);
    },
  }),
    pe.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Fe.get(o)), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf("data-") &&
                  ((r = pe.camelCase(r.slice(5))), p(o, r, i[r])));
            He.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Fe.set(this, e);
            })
          : qe(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (((n = Fe.get(o, e)), void 0 !== n)) return n;
                  if (((n = p(o, e)), void 0 !== n)) return n;
                } else
                  this.each(function () {
                    Fe.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Fe.remove(this, e);
        });
      },
    }),
    pe.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = He.get(e, t)),
            n &&
              (!r || pe.isArray(n)
                ? (r = He.access(e, t, pe.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = pe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = pe._queueHooks(e, t),
          a = function () {
            pe.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          He.get(e, n) ||
          He.access(e, n, {
            empty: pe.Callbacks("once memory").add(function () {
              He.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    pe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? pe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          pe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = pe.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = He.get(o[a], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Me = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
    Ie = ["Top", "Right", "Bottom", "Left"],
    We = function (e, t) {
      return (
        (e = t || e),
        "none" === e.style.display ||
          ("" === e.style.display &&
            pe.contains(e.ownerDocument, e) &&
            "none" === pe.css(e, "display"))
      );
    },
    $e = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    },
    Be = {};
  pe.fn.extend({
    show: function () {
      return g(this, !0);
    },
    hide: function () {
      return g(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            We(this) ? pe(this).show() : pe(this).hide();
          });
    },
  });
  var _e = /^(?:checkbox|radio)$/i,
    ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Xe = /^$|\/(?:java|ecma)script/i,
    Ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Ue.optgroup = Ue.option),
    (Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead),
    (Ue.th = Ue.td);
  var Ve = /<|&#?\w+;/;
  !(function () {
    var e = Z.createDocumentFragment(),
      t = e.appendChild(Z.createElement("div")),
      n = Z.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Ge = Z.documentElement,
    Ye = /^key/,
    Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Je = /^([^.]*)(?:\.(.+)|)/;
  (pe.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = He.get(e);
      if (m)
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)),
            i && pe.find.matchesSelector(Ge, i),
            n.guid || (n.guid = pe.guid++),
            (u = m.events) || (u = m.events = {}),
            (a = m.handle) ||
              (a = m.handle =
                function (t) {
                  return "undefined" != typeof pe &&
                    pe.event.triggered !== t.type
                    ? pe.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(De) || [""],
            l = t.length;
          l--;

        )
          (s = Je.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = pe.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = pe.event.special[d] || {}),
              (c = pe.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && pe.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                ((p = u[d] = []),
                (p.delegateCount = 0),
                (f.setup && f.setup.call(e, r, h, a) !== !1) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (pe.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = He.hasData(e) && He.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(De) || [""], l = t.length; l--; )
          if (
            ((s = Je.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = pe.event.special[d] || {},
                d = (r ? f.delegateType : f.bindType) || d,
                p = u[d] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
                pe.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) pe.event.remove(e, d + t[l], n, r, !0);
        pe.isEmptyObject(u) && He.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = pe.event.fix(e),
        u = new Array(arguments.length),
        l = (He.get(this, "events") || {})[s.type] || [],
        c = pe.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || c.preDispatch.call(this, s) !== !1)
      ) {
        for (
          a = pe.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              (r = (
                (pe.event.special[o.origType] || {}).handle || o.handler
              ).apply(i.elem, u)),
              void 0 !== r &&
                (s.result = r) === !1 &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              (o = t[n]),
                (i = o.selector + " "),
                void 0 === r[i] &&
                  (r[i] = o.needsContext
                    ? pe(i, this).index(u) > -1
                    : pe.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    addProp: function (e, t) {
      Object.defineProperty(pe.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: pe.isFunction(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[pe.expando] ? e : new pe.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== w() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === w() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            pe.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return pe.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (pe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (pe.Event = function (e, t) {
      return this instanceof pe.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? x
                  : b),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && pe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || pe.now()),
          void (this[pe.expando] = !0))
        : new pe.Event(e, t);
    }),
    (pe.Event.prototype = {
      constructor: pe.Event,
      isDefaultPrevented: b,
      isPropagationStopped: b,
      isImmediatePropagationStopped: b,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = x),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = x),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = x),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    pe.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Ye.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Qe.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      pe.event.addProp
    ),
    pe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        pe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || pe.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    pe.fn.extend({
      on: function (e, t, n, r) {
        return T(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return T(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            pe(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
          n === !1 && (n = b),
          this.each(function () {
            pe.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ke =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ze = /<script|<style|<link/i,
    et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tt = /^true\/(.*)/,
    nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  pe.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ke, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = pe.contains(e.ownerDocument, e);
      if (
        !(
          ce.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          pe.isXMLDoc(e)
        )
      )
        for (a = m(s), o = m(e), r = 0, i = o.length; r < i; r++) N(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || m(e), a = a || m(s), r = 0, i = o.length; r < i; r++)
            S(o[r], a[r]);
        else S(e, s);
      return (
        (a = m(s, "script")), a.length > 0 && v(a, !u && m(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Le(n)) {
          if ((t = n[He.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, t.handle);
            n[He.expando] = void 0;
          }
          n[Fe.expando] && (n[Fe.expando] = void 0);
        }
    },
  }),
    pe.fn.extend({
      detach: function (e) {
        return j(this, e, !0);
      },
      remove: function (e) {
        return j(this, e);
      },
      text: function (e) {
        return qe(
          this,
          function (e) {
            return void 0 === e
              ? pe.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return D(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = C(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return D(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = C(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (pe.cleanData(m(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return pe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return qe(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ze.test(e) &&
              !Ue[(ze.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = pe.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (pe.cleanData(m(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return D(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            pe.inArray(this, e) < 0 &&
              (pe.cleanData(m(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    pe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        pe.fn[e] = function (e) {
          for (var n, r = [], i = pe(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              pe(i[a])[t](n),
              re.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var rt = /^margin/,
    it = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
    ot = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    };
  !(function () {
    function t() {
      if (s) {
        (s.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (s.innerHTML = ""),
          Ge.appendChild(a);
        var t = e.getComputedStyle(s);
        (n = "1%" !== t.top),
          (o = "2px" === t.marginLeft),
          (r = "4px" === t.width),
          (s.style.marginRight = "50%"),
          (i = "4px" === t.marginRight),
          Ge.removeChild(a),
          (s = null);
      }
    }
    var n,
      r,
      i,
      o,
      a = Z.createElement("div"),
      s = Z.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (ce.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (a.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      a.appendChild(s),
      pe.extend(ce, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelMarginRight: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), o;
        },
      }));
  })();
  var at = /^(none|table(?!-c[ea]).+)/,
    st = { position: "absolute", visibility: "hidden", display: "block" },
    ut = { letterSpacing: "0", fontWeight: "400" },
    lt = ["Webkit", "Moz", "ms"],
    ct = Z.createElement("div").style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = A(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = pe.camelCase(t),
          u = e.style;
        return (
          (t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s)),
          (a = pe.cssHooks[t] || pe.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : u[t]
            : ((o = typeof n),
              "string" === o &&
                (i = Me.exec(n)) &&
                i[1] &&
                ((n = d(e, t, i)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (pe.cssNumber[s] ? "" : "px")),
                ce.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u[t] = n)),
              void 0)
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = pe.camelCase(t);
      return (
        (t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s)),
        (a = pe.cssHooks[t] || pe.cssHooks[s]),
        a && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = A(e, t, r)),
        "normal" === i && t in ut && (i = ut[t]),
        "" === n || n
          ? ((o = parseFloat(i)), n === !0 || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    pe.each(["height", "width"], function (e, t) {
      pe.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !at.test(pe.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? O(e, t, r)
              : $e(e, st, function () {
                  return O(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = r && ot(e),
            a =
              r &&
              F(e, t, r, "border-box" === pe.css(e, "boxSizing", !1, o), o);
          return (
            a &&
              (i = Me.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = pe.css(e, t))),
            H(e, n, a)
          );
        },
      };
    }),
    (pe.cssHooks.marginLeft = q(ce.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(A(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              $e(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (pe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        rt.test(e) || (pe.cssHooks[e + t].set = H);
    }),
    pe.fn.extend({
      css: function (e, t) {
        return qe(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (pe.isArray(t)) {
              for (r = ot(e), i = t.length; a < i; a++)
                o[t[a]] = pe.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (pe.Tween = P),
    (P.prototype = {
      constructor: P,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || pe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (pe.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = P.propHooks[this.prop];
        return e && e.get ? e.get(this) : P.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = P.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                pe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : P.propHooks._default.set(this),
          this
        );
      },
    }),
    (P.prototype.init.prototype = P.prototype),
    (P.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = pe.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          pe.fx.step[e.prop]
            ? pe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[pe.cssProps[e.prop]] &&
                !pe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : pe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (P.propHooks.scrollTop = P.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (pe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (pe.fx = P.prototype.init),
    (pe.fx.step = {});
  var ft,
    pt,
    dt = /^(?:toggle|show|hide)$/,
    ht = /queueHooks$/;
  (pe.Animation = pe.extend(_, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return d(n.elem, e, Me.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      pe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(De));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (_.tweeners[n] = _.tweeners[n] || []),
          _.tweeners[n].unshift(t);
    },
    prefilters: [$],
    prefilter: function (e, t) {
      t ? _.prefilters.unshift(e) : _.prefilters.push(e);
    },
  })),
    (pe.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? pe.extend({}, e)
          : {
              complete: n || (!n && t) || (pe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !pe.isFunction(t) && t),
            };
      return (
        pe.fx.off || Z.hidden
          ? (r.duration = 0)
          : (r.duration =
              "number" == typeof r.duration
                ? r.duration
                : r.duration in pe.fx.speeds
                ? pe.fx.speeds[r.duration]
                : pe.fx.speeds._default),
        (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          pe.isFunction(r.old) && r.old.call(this),
            r.queue && pe.dequeue(this, r.queue);
        }),
        r
      );
    }),
    pe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(We)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = pe.isEmptyObject(e),
          o = pe.speed(t, n, r),
          a = function () {
            var t = _(this, pe.extend({}, e), o);
            (i || He.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = pe.timers,
              a = He.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ht.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || pe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = He.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = pe.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                pe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    pe.each(["toggle", "show", "hide"], function (e, t) {
      var n = pe.fn[t];
      pe.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(I(t, !0), e, r, i);
      };
    }),
    pe.each(
      {
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        pe.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (pe.timers = []),
    (pe.fx.tick = function () {
      var e,
        t = 0,
        n = pe.timers;
      for (ft = pe.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || pe.fx.stop(), (ft = void 0);
    }),
    (pe.fx.timer = function (e) {
      pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
    }),
    (pe.fx.interval = 13),
    (pe.fx.start = function () {
      pt ||
        (pt = e.requestAnimationFrame
          ? e.requestAnimationFrame(R)
          : e.setInterval(pe.fx.tick, pe.fx.interval));
    }),
    (pe.fx.stop = function () {
      e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt),
        (pt = null);
    }),
    (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pe.fn.delay = function (t, n) {
      return (
        (t = pe.fx ? pe.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = Z.createElement("input"),
        t = Z.createElement("select"),
        n = t.appendChild(Z.createElement("option"));
      (e.type = "checkbox"),
        (ce.checkOn = "" !== e.value),
        (ce.optSelected = n.selected),
        (e = Z.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (ce.radioValue = "t" === e.value);
    })();
  var gt,
    mt = pe.expr.attrHandle;
  pe.fn.extend({
    attr: function (e, t) {
      return qe(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    },
  }),
    pe.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? pe.prop(e, t, n)
            : ((1 === o && pe.isXMLDoc(e)) ||
                (i =
                  pe.attrHooks[t.toLowerCase()] ||
                  (pe.expr.match.bool.test(t) ? gt : void 0)),
              void 0 !== n
                ? null === n
                  ? void pe.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : ((r = pe.find.attr(e, t)), null == r ? void 0 : r));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ce.radioValue && "radio" === t && pe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(De);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (gt = {
      set: function (e, t, n) {
        return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = mt[t] || pe.find.attr;
      mt[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = mt[a]),
            (mt[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (mt[a] = o)),
          i
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function (e, t) {
      return qe(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[pe.propFix[e] || e];
      });
    },
  }),
    pe.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && pe.isXMLDoc(e)) ||
              ((t = pe.propFix[t] || t), (i = pe.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = pe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ce.optSelected ||
      (pe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    pe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        pe.propFix[this.toLowerCase()] = this;
      }
    );
  var xt = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).addClass(e.call(this, t, z(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(De) || []; (n = this[u++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            (s = pe.trim(r)), i !== s && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).removeClass(e.call(this, t, z(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(De) || []; (n = this[u++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            (s = pe.trim(r)), i !== s && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : pe.isFunction(e)
        ? this.each(function (n) {
            pe(this).toggleClass(e.call(this, n, z(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = pe(this), o = e.match(De) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = z(this)),
                t && He.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || e === !1 ? "" : He.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + z(n) + " ").replace(xt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  });
  var bt = /\r/g,
    wt = /[\x20\t\r\n\f]+/g;
  pe.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = pe.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, pe(this).val()) : e),
                null == i
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : pe.isArray(i) &&
                    (i = pe.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  pe.valHooks[this.type] ||
                  pe.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (
            (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(i, "value"))
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
          );
      }
    },
  }),
    pe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = pe.find.attr(e, "value");
            return null != t ? t : pe.trim(pe.text(e)).replace(wt, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                ((n = r[u]),
                (n.selected || u === i) &&
                  !n.disabled &&
                  (!n.parentNode.disabled ||
                    !pe.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((t = pe(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = pe.makeArray(t), a = i.length;
              a--;

            )
              (r = i[a]),
                (r.selected = pe.inArray(pe.valHooks.option.get(r), o) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    pe.each(["radio", "checkbox"], function () {
      (pe.valHooks[this] = {
        set: function (e, t) {
          if (pe.isArray(t))
            return (e.checked = pe.inArray(pe(e).val(), t) > -1);
        },
      }),
        ce.checkOn ||
          (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  pe.extend(pe.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [r || Z],
        d = se.call(t, "type") ? t.type : t,
        h = se.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = s = r = r || Z),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Tt.test(d + pe.event.triggered) &&
          (d.indexOf(".") > -1 &&
            ((h = d.split(".")), (d = h.shift()), h.sort()),
          (l = d.indexOf(":") < 0 && "on" + d),
          (t = t[pe.expando] ? t : new pe.Event(d, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : pe.makeArray(n, [t])),
          (f = pe.event.special[d] || {}),
          i || !f.trigger || f.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !f.noBubble && !pe.isWindow(r)) {
          for (
            u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            p.push(a), (s = a);
          s === (r.ownerDocument || Z) &&
            p.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || d),
            (c = (He.get(a, "events") || {})[t.type] && He.get(a, "handle")),
            c && c.apply(a, n),
            (c = l && a[l]),
            c &&
              c.apply &&
              Le(a) &&
              ((t.result = c.apply(a, n)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = d),
          i ||
            t.isDefaultPrevented() ||
            (f._default && f._default.apply(p.pop(), n) !== !1) ||
            !Le(r) ||
            (l &&
              pe.isFunction(r[d]) &&
              !pe.isWindow(r) &&
              ((s = r[l]),
              s && (r[l] = null),
              (pe.event.triggered = d),
              r[d](),
              (pe.event.triggered = void 0),
              s && (r[l] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
      pe.event.trigger(r, null, t);
    },
  }),
    pe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          pe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return pe.event.trigger(e, t, n, !0);
      },
    }),
    pe.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        pe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    pe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (ce.focusin = "onfocusin" in e),
    ce.focusin ||
      pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          pe.event.simulate(t, e.target, pe.event.fix(e));
        };
        pe.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = He.access(r, t);
            i || r.addEventListener(e, n, !0), He.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = He.access(r, t) - 1;
            i
              ? He.access(r, t, i)
              : (r.removeEventListener(e, n, !0), He.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    kt = pe.now(),
    Et = /\?/;
  pe.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (r) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        pe.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Nt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  (pe.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = pe.isFunction(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (pe.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
      pe.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) X(n, e[n], t, i);
    return r.join("&");
  }),
    pe.fn.extend({
      serialize: function () {
        return pe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = pe.prop(this, "elements");
          return e ? pe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !pe(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !_e.test(e))
            );
          })
          .map(function (e, t) {
            var n = pe(this).val();
            return null == n
              ? null
              : pe.isArray(n)
              ? pe.map(n, function (e) {
                  return { name: t.name, value: e.replace(Nt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Nt, "\r\n") };
          })
          .get();
      },
    });
  var At = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = Z.createElement("a");
  (Wt.href = Ct.href),
    pe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ct.href,
        type: "GET",
        isLocal: Ft.test(Ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": pe.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? G(G(e, pe.ajaxSettings), t) : G(pe.ajaxSettings, e);
      },
      ajaxPrefilter: U(Rt),
      ajaxTransport: U(Mt),
      ajax: function (t, n) {
        function r(t, n, r, s) {
          var l,
            p,
            d,
            b,
            w,
            T = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            r && (b = Y(h, C, r)),
            (b = Q(h, b, C, l)),
            l
              ? (h.ifModified &&
                  ((w = C.getResponseHeader("Last-Modified")),
                  w && (pe.lastModified[o] = w),
                  (w = C.getResponseHeader("etag")),
                  w && (pe.etag[o] = w)),
                204 === t || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = b.state), (p = b.data), (d = b.error), (l = !d)))
              : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ""),
            l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]),
            C.statusCode(x),
            (x = void 0),
            f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
            y.fireWith(g, [C, T]),
            f &&
              (m.trigger("ajaxComplete", [C, h]),
              --pe.active || pe.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = pe.ajaxSetup({}, n),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
          v = pe.Deferred(),
          y = pe.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          w = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Ht.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (h.url = ((t || h.url || Ct.href) + "").replace(
            Pt,
            Ct.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""]),
          null == h.crossDomain)
        ) {
          l = Z.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host);
          } catch (k) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = pe.param(h.data, h.traditional)),
          V(Rt, h, n, C),
          c)
        )
          return C;
        (f = pe.event && h.global),
          f && 0 === pe.active++ && pe.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Ot.test(h.type)),
          (o = h.url.replace(qt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace(At, "+"))
            : ((d = h.url.slice(o.length)),
              h.data &&
                ((o += (Et.test(o) ? "&" : "?") + h.data), delete h.data),
              h.cache === !1 &&
                ((o = o.replace(Lt, "")),
                (d = (Et.test(o) ? "&" : "?") + "_=" + kt++ + d)),
              (h.url = o + d)),
          h.ifModified &&
            (pe.lastModified[o] &&
              C.setRequestHeader("If-Modified-Since", pe.lastModified[o]),
            pe.etag[o] && C.setRequestHeader("If-None-Match", pe.etag[o])),
          ((h.data && h.hasContent && h.contentType !== !1) || n.contentType) &&
            C.setRequestHeader("Content-Type", h.contentType),
          C.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c))
          return C.abort();
        if (
          ((T = "abort"),
          y.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (i = V(Mt, h, n, C)))
        ) {
          if (((C.readyState = 1), f && m.trigger("ajaxSend", [C, h]), c))
            return C;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(b, r);
          } catch (k) {
            if (c) throw k;
            r(-1, k);
          }
        } else r(-1, "No Transport");
        return C;
      },
      getJSON: function (e, t, n) {
        return pe.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return pe.get(e, void 0, t, "script");
      },
    }),
    pe.each(["get", "post"], function (e, t) {
      pe[t] = function (e, n, r, i) {
        return (
          pe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          pe.ajax(
            pe.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              pe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (pe._evalUrl = function (e) {
      return pe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    pe.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (pe.isFunction(e) && (e = e.call(this[0])),
            (t = pe(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return pe.isFunction(e)
          ? this.each(function (t) {
              pe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = pe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = pe.isFunction(e);
        return this.each(function (n) {
          pe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              pe(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (pe.expr.pseudos.hidden = function (e) {
      return !pe.expr.pseudos.visible(e);
    }),
    (pe.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (pe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var $t = { 0: 200, 1223: 204 },
    Bt = pe.ajaxSettings.xhr();
  (ce.cors = !!Bt && "withCredentials" in Bt),
    (ce.ajax = Bt = !!Bt),
    pe.ajaxTransport(function (t) {
      var n, r;
      if (ce.cors || (Bt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        $t[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (n) throw u;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    pe.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    pe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return pe.globalEval(e), e;
        },
      },
    }),
    pe.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    pe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (r, i) {
            (t = pe("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              Z.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var _t = [],
    zt = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = _t.pop() || pe.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    pe.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          t.jsonp !== !1 &&
          (zt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              zt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            pe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(zt, "$1" + i))
            : t.jsonp !== !1 &&
              (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || pe.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? pe(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), _t.push(i)),
              a && pe.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (ce.createHTMLDocument = (function () {
      var e = Z.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (pe.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var r, i, o;
      return (
        t ||
          (ce.createHTMLDocument
            ? ((t = Z.implementation.createHTMLDocument("")),
              (r = t.createElement("base")),
              (r.href = Z.location.href),
              t.head.appendChild(r))
            : (t = Z)),
        (i = we.exec(e)),
        (o = !n && []),
        i
          ? [t.createElement(i[1])]
          : ((i = y([e], t, o)),
            o && o.length && pe(o).remove(),
            pe.merge([], i.childNodes))
      );
    }),
    (pe.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = pe.trim(e.slice(s))), (e = e.slice(0, s))),
        pe.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          pe
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    pe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        pe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (pe.expr.pseudos.animated = function (e) {
      return pe.grep(pe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (pe.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = pe.css(e, "position"),
          f = pe(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = pe.css(e, "top")),
          (u = pe.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) &&
            (o + u).indexOf("auto") > -1),
          l
            ? ((r = f.position()), (a = r.top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    pe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                pe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r,
          i,
          o = this[0];
        if (o)
          return o.getClientRects().length
            ? ((r = o.getBoundingClientRect()),
              r.width || r.height
                ? ((i = o.ownerDocument),
                  (n = J(i)),
                  (t = i.documentElement),
                  {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft,
                  })
                : r)
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === pe.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                pe.nodeName(e[0], "html") || (r = e.offset()),
                (r = {
                  top: r.top + pe.css(e[0], "borderTopWidth", !0),
                  left: r.left + pe.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - r.top - pe.css(n, "marginTop", !0),
              left: t.left - r.left - pe.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === pe.css(e, "position");

          )
            e = e.offsetParent;
          return e || Ge;
        });
      },
    }),
    pe.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function (r) {
          return qe(
            this,
            function (e, r, i) {
              var o = J(e);
              return void 0 === i
                ? o
                  ? o[t]
                  : e[r]
                : void (o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    pe.each(["top", "left"], function (e, t) {
      pe.cssHooks[t] = q(ce.pixelPosition, function (e, n) {
        if (n)
          return (n = A(e, t)), it.test(n) ? pe(e).position()[t] + "px" : n;
      });
    }),
    pe.each({ Height: "height", Width: "width" }, function (e, t) {
      pe.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          pe.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (i === !0 || o === !0 ? "margin" : "border");
            return qe(
              this,
              function (t, n, i) {
                var o;
                return pe.isWindow(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? pe.css(t, n, s)
                  : pe.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    pe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (pe.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return pe;
      });
  var Xt = e.jQuery,
    Ut = e.$;
  return (
    (pe.noConflict = function (t) {
      return (
        e.$ === pe && (e.$ = Ut), t && e.jQuery === pe && (e.jQuery = Xt), pe
      );
    }),
    t || (e.jQuery = e.$ = pe),
    pe
  );
});
