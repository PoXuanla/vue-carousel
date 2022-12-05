import { ref as r, computed as h, watch as j, onMounted as k, onBeforeUnmount as E, defineComponent as H, openBlock as _, createElementBlock as x, normalizeStyle as N, unref as u, createElementVNode as m, Fragment as Z, renderList as G, createBlock as O } from "vue";
const R = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTIwIDQ0IDAgMjQgMjAgNGwyLjggMi44NUw1LjY1IDI0IDIyLjggNDEuMTVaIi8+PC9zdmc+", Q = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0ibTE1LjIgNDMuOS0yLjgtMi44NUwyOS41NSAyMy45IDEyLjQgNi43NWwyLjgtMi44NSAyMCAyMFoiLz48L3N2Zz4=", U = (a, n, o, i, c, g, w, s) => {
  const f = r(""), d = r(""), e = r(1), l = r(!0), y = r(!0), b = r(null), M = r(null), S = r(n), W = h(() => ({
    width: o,
    height: c,
    maxWidth: i === "" ? o : i
  })), z = h(() => d.value.length === 0 ? {
    transition: `all ${s}px`,
    transform: `translateX(${L.value}%)`
  } : {
    transition: d.value,
    transform: `translateX(${L.value}%)`
  }), v = h(() => {
    const t = a, p = t.length - 1;
    return [t[p], ...t, t[0]];
  }), L = h(() => -1 * e.value * (100 / v.value.length)), B = () => {
    !l.value || (e.value = e.value - 1, P(s), S.value && C(3e3));
  }, $ = () => {
    !l.value || (e.value = e.value + 1, P(s), S.value && C(3e3));
  }, P = (t) => {
    l.value = !1, setTimeout(() => {
      l.value = !0;
    }, t);
  }, A = (t) => {
    setTimeout(() => {
      d.value = "none", e.value = t;
    }, s);
  }, C = (t) => {
    y.value = !1, clearTimeout(b.value), b.value = setTimeout(() => {
      y.value = !0;
    }, t);
  };
  j(
    () => e.value,
    () => {
      if (e.value === 0) {
        const t = v.value.length - 2;
        A(t), d.value = `all ${s}ms`;
      }
      e.value === v.value.length - 1 && (A(1), d.value = `all ${s}ms`), (e.value === 2 || e.value === v.value.length - 3) && (d.value = `all ${s}ms`);
    }
  ), j(
    () => y.value,
    () => {
      if (!!S.value) {
        if (!y.value) {
          clearInterval(M.value);
          return;
        }
        M.value = setInterval(() => {
          e.value = e.value + 1;
        }, w + s);
      }
    },
    { immediate: !0 }
  );
  const I = () => {
    var t, p, D, T;
    f.value = `${(p = (t = g.value) == null ? void 0 : t.offsetWidth) != null ? p : 0}px`, console.log(`${(T = (D = g.value) == null ? void 0 : D.offsetWidth) != null ? T : 0}px`);
  };
  return k(() => {
    I(), window.addEventListener("resize", I);
  }), E(() => {
    window.removeEventListener("resize", I);
  }), {
    onPref: B,
    onNext: $,
    containerStyle: z,
    carouselStyle: W,
    carouselItems: v,
    slideWidth: f
  };
}, X = ["src"], F = /* @__PURE__ */ H({
  __name: "Slide",
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    src: { type: String, default: "" }
  },
  setup(a) {
    const n = a, o = h(() => ({
      width: n.width,
      height: n.height
    }));
    return (i, c) => (_(), x("img", {
      src: a.src,
      style: N(u(o))
    }, null, 12, X));
  }
});
const V = (a, n) => {
  const o = a.__vccOpts || a;
  for (const [i, c] of n)
    o[i] = c;
  return o;
}, Y = /* @__PURE__ */ V(F, [["__scopeId", "data-v-baf4adcf"]]), q = /* @__PURE__ */ m("img", {
  src: R,
  style: { width: "25px", height: "25px", "margin-left": "10px" }
}, null, -1), J = [
  q
], K = /* @__PURE__ */ m("img", {
  src: Q,
  style: { width: "25px", height: "25px" }
}, null, -1), ee = [
  K
], te = /* @__PURE__ */ H({
  __name: "Carousel",
  props: {
    items: { type: Array, default: [] },
    autoPlay: { type: Boolean, default: !0 },
    width: { type: String, default: "100%" },
    maxWidth: { type: String, default: "" },
    height: { type: String, default: "100%" },
    autoSwitchInterval: { type: Number, default: 3e3 },
    slideDuration: { type: Number, default: 1e3 }
  },
  setup(a) {
    const n = a, o = r(null), {
      onNext: i,
      onPref: c,
      containerStyle: g,
      carouselStyle: w,
      carouselItems: s,
      slideWidth: f
    } = U(
      n.items,
      n.autoPlay,
      n.width,
      n.maxWidth,
      n.height,
      o,
      n.autoSwitchInterval,
      n.slideDuration
    );
    return (d, e) => (_(), x("div", {
      id: "carousel",
      ref_key: "carouselRef",
      ref: o,
      style: N(u(w))
    }, [
      m("div", {
        class: "container",
        style: N(u(g))
      }, [
        (_(!0), x(Z, null, G(u(s), (l) => (_(), O(Y, {
          key: l.id,
          src: l.img,
          width: u(f),
          height: n.height
        }, null, 8, ["src", "width", "height"]))), 128))
      ], 4),
      m("button", {
        class: "btn btnPrev",
        onClick: e[0] || (e[0] = (...l) => u(c) && u(c)(...l))
      }, J),
      m("button", {
        class: "btn btnNext",
        onClick: e[1] || (e[1] = (...l) => u(i) && u(i)(...l))
      }, ee)
    ], 4));
  }
});
const ae = (a) => {
  a.component("vue3-xuan-carousel", te);
};
export {
  ae as default
};
