import { ref as u, computed as f, watch as C, onMounted as z, onBeforeUnmount as X, defineComponent as P, openBlock as y, createElementBlock as x, normalizeStyle as b, unref as i, createElementVNode as _, Fragment as R, renderList as F, createBlock as H } from "vue";
const M = (a, t, o, v, d, w, s) => {
  const m = u(""), c = u(""), n = u(1), r = u(!0), l = u(!0), I = u(null), k = u(null), g = u(t), A = f(() => ({
    width: o,
    height: v
  })), E = f(() => c.value.length === 0 ? {
    transition: `all ${s}px`,
    transform: `translateX(${N.value}%)`
  } : {
    transition: c.value,
    transform: `translateX(${N.value}%)`
  }), h = f(() => {
    const e = a, p = e.length - 1;
    return [e[p], ...e, e[0]];
  }), N = f(() => -1 * n.value * (100 / h.value.length)), L = () => {
    !r.value || (n.value = n.value - 1, $(s), g.value && B(3e3));
  }, W = () => {
    !r.value || (n.value = n.value + 1, $(s), g.value && B(3e3));
  }, $ = (e) => {
    r.value = !1, setTimeout(() => {
      r.value = !0;
    }, e);
  }, T = (e) => {
    setTimeout(() => {
      c.value = "none", n.value = e;
    }, s);
  }, B = (e) => {
    l.value = !1, clearTimeout(I.value), I.value = setTimeout(() => {
      l.value = !0;
    }, e);
  };
  C(
    () => n.value,
    () => {
      if (n.value === 0) {
        const e = h.value.length - 2;
        T(e), c.value = `all ${s}ms`;
      }
      n.value === h.value.length - 1 && (T(1), c.value = `all ${s}ms`), (n.value === 2 || n.value === h.value.length - 3) && (c.value = `all ${s}ms`);
    }
  ), C(
    () => l.value,
    () => {
      if (!!g.value) {
        if (!l.value) {
          clearInterval(k.value);
          return;
        }
        k.value = setInterval(() => {
          n.value = n.value + 1;
        }, w + s);
      }
    },
    { immediate: !0 }
  );
  const S = () => {
    var e, p;
    m.value = `${(p = (e = d.value) == null ? void 0 : e.offsetWidth) != null ? p : 0}px`;
  };
  return z(() => {
    S(), window.addEventListener("resize", S);
  }), X(() => {
    window.removeEventListener("resize", S);
  }), {
    onPref: L,
    onNext: W,
    containerStyle: E,
    carouselStyle: A,
    carouselItems: h,
    slideWidth: m
  };
}, O = ["src"], U = /* @__PURE__ */ P({
  __name: "Slide",
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    src: { type: String, default: "" }
  },
  setup(a) {
    const t = a, o = f(() => ({
      width: t.width,
      height: t.height
    }));
    return (v, d) => (y(), x("img", {
      src: a.src,
      style: b(i(o))
    }, null, 12, O));
  }
});
const V = (a, t) => {
  const o = a.__vccOpts || a;
  for (const [v, d] of t)
    o[v] = d;
  return o;
}, j = /* @__PURE__ */ V(U, [["__scopeId", "data-v-baf4adcf"]]), q = /* @__PURE__ */ _("span", { class: "material-symbols-outlined" }, " arrow_back_ios_new ", -1), G = [
  q
], J = /* @__PURE__ */ _("span", { class: "material-symbols-outlined" }, " arrow_forward_ios ", -1), K = [
  J
], Q = /* @__PURE__ */ P({
  __name: "Carousel",
  props: {
    items: { type: Array, default: [] },
    autoPlay: { type: Boolean, default: !0 },
    width: { type: String, default: "100%" },
    height: { type: String, default: "100%" },
    autoSwitchInterval: { type: Number, default: 3e3 },
    slideDuration: { type: Number, default: 1e3 }
  },
  setup(a) {
    const t = a, o = u(null), {
      onNext: v,
      onPref: d,
      containerStyle: w,
      carouselStyle: s,
      carouselItems: m,
      slideWidth: c
    } = M(
      t.items,
      t.autoPlay,
      t.width,
      t.height,
      o,
      t.autoSwitchInterval,
      t.slideDuration
    );
    return (n, r) => (y(), x("div", {
      id: "carousel",
      ref_key: "carouselRef",
      ref: o,
      style: b(i(s))
    }, [
      _("div", {
        class: "container",
        style: b(i(w))
      }, [
        (y(!0), x(R, null, F(i(m), (l) => (y(), H(j, {
          key: l.id,
          src: l.img,
          width: i(c),
          height: t.height
        }, null, 8, ["src", "width", "height"]))), 128))
      ], 4),
      _("button", {
        class: "btn btnPrev",
        onClick: r[0] || (r[0] = (...l) => i(d) && i(d)(...l))
      }, G),
      _("button", {
        class: "btn btnNext",
        onClick: r[1] || (r[1] = (...l) => i(v) && i(v)(...l))
      }, K)
    ], 4));
  }
});
const Z = (a) => {
  a.component("vue3-xuan-carousel", Q);
};
export {
  Z as default
};
