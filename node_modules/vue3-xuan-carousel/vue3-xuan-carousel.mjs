import { ref as i, computed as h, watch as W, onMounted as k, onBeforeUnmount as E, defineComponent as j, openBlock as _, createElementBlock as I, normalizeStyle as N, unref as r, createElementVNode as m, Fragment as Z, renderList as G, createBlock as O, createCommentVNode as R } from "vue";
const Q = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTIwIDQ0IDAgMjQgMjAgNGwyLjggMi44NUw1LjY1IDI0IDIyLjggNDEuMTVaIi8+PC9zdmc+", U = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0ibTE1LjIgNDMuOS0yLjgtMi44NUwyOS41NSAyMy45IDEyLjQgNi43NWwyLjgtMi44NSAyMCAyMFoiLz48L3N2Zz4=", V = (a, t, o, u, c, g, w, s) => {
  const y = i(""), d = i(""), e = i(1), l = i(!0), f = i(!0), b = i(null), M = i(null), S = i(t), H = h(() => ({
    width: o,
    height: c,
    maxWidth: u === "" ? o : u
  })), z = h(() => d.value.length === 0 ? {
    transition: `all ${s}px`,
    transform: `translateX(${L.value}%)`
  } : {
    transition: d.value,
    transform: `translateX(${L.value}%)`
  }), v = h(() => {
    const n = a, p = n.length - 1;
    return [n[p], ...n, n[0]];
  }), L = h(() => -1 * e.value * (100 / v.value.length)), B = () => {
    !l.value || (e.value = e.value - 1, C(s), S.value && A(3e3));
  }, $ = () => {
    !l.value || (e.value = e.value + 1, C(s), S.value && A(3e3));
  }, C = (n) => {
    l.value = !1, setTimeout(() => {
      l.value = !0;
    }, n);
  }, P = (n) => {
    setTimeout(() => {
      d.value = "none", e.value = n;
    }, s);
  }, A = (n) => {
    f.value = !1, clearTimeout(b.value), b.value = setTimeout(() => {
      f.value = !0;
    }, n);
  };
  W(
    () => e.value,
    () => {
      if (e.value === 0) {
        const n = v.value.length - 2;
        P(n), d.value = `all ${s}ms`;
      }
      e.value === v.value.length - 1 && (P(1), d.value = `all ${s}ms`), (e.value === 2 || e.value === v.value.length - 3) && (d.value = `all ${s}ms`);
    }
  ), W(
    () => f.value,
    () => {
      if (!!S.value) {
        if (!f.value) {
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
  const x = () => {
    var n, p, D, T;
    y.value = `${(p = (n = g.value) == null ? void 0 : n.offsetWidth) != null ? p : 0}px`, console.log(`${(T = (D = g.value) == null ? void 0 : D.offsetWidth) != null ? T : 0}px`);
  };
  return k(() => {
    x(), window.addEventListener("resize", x);
  }), E(() => {
    window.removeEventListener("resize", x);
  }), {
    onPref: B,
    onNext: $,
    containerStyle: z,
    carouselStyle: H,
    carouselItems: v,
    slideWidth: y
  };
}, X = ["src"], F = /* @__PURE__ */ j({
  __name: "Slide",
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    src: { type: String, default: "" }
  },
  setup(a) {
    const t = a, o = h(() => ({
      width: t.width,
      height: t.height,
      maxWidth: t.width
    }));
    return (u, c) => (_(), I("img", {
      src: a.src,
      style: N(r(o))
    }, null, 12, X));
  }
});
const Y = (a, t) => {
  const o = a.__vccOpts || a;
  for (const [u, c] of t)
    o[u] = c;
  return o;
}, q = /* @__PURE__ */ Y(F, [["__scopeId", "data-v-aa96cbf3"]]), J = /* @__PURE__ */ m("img", {
  src: Q,
  style: { width: "25px", height: "25px", "margin-left": "10px" }
}, null, -1), K = [
  J
], ee = /* @__PURE__ */ m("img", {
  src: U,
  style: { width: "25px", height: "25px" }
}, null, -1), te = [
  ee
], ne = /* @__PURE__ */ j({
  __name: "Carousel",
  props: {
    items: { type: Array, default: [] },
    autoPlay: { type: Boolean, default: !1 },
    width: { type: String, default: "100%" },
    maxWidth: { type: String, default: "" },
    height: { type: String, default: "100%" },
    autoSwitchInterval: { type: Number, default: 3e3 },
    slideDuration: { type: Number, default: 1e3 }
  },
  setup(a) {
    const t = a, o = i(null), {
      onNext: u,
      onPref: c,
      containerStyle: g,
      carouselStyle: w,
      carouselItems: s,
      slideWidth: y
    } = V(
      t.items,
      t.autoPlay,
      t.width,
      t.maxWidth,
      t.height,
      o,
      t.autoSwitchInterval,
      t.slideDuration
    );
    return (d, e) => a.items.length !== 0 ? (_(), I("div", {
      key: 0,
      id: "carousel",
      ref_key: "carouselRef",
      ref: o,
      style: N(r(w))
    }, [
      m("div", {
        id: "carousel-container",
        style: N(r(g))
      }, [
        (_(!0), I(Z, null, G(r(s), (l) => (_(), O(q, {
          key: l.id,
          src: l.img,
          width: r(y),
          height: t.height
        }, null, 8, ["src", "width", "height"]))), 128))
      ], 4),
      m("button", {
        class: "carousel-btn btnPrev",
        onClick: e[0] || (e[0] = (...l) => r(c) && r(c)(...l))
      }, K),
      m("button", {
        class: "carousel-btn btnNext",
        onClick: e[1] || (e[1] = (...l) => r(u) && r(u)(...l))
      }, te)
    ], 4)) : R("", !0);
  }
});
const le = (a) => {
  a.component("vue3-xuan-carousel", ne);
};
export {
  le as default
};
