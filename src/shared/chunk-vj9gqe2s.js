// shared/chunk-vj9gqe2s.js — Claude Code 2.1.310 模块 chunk-vj9gqe2s.js
import { Md } from "./chunk-5zq7df98.js";
import { pn, Zi } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { de, P, Bo, Xt, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function lt(e, o, r = {}) {
  let { context: t = "Global", isActive: s = true } = r, n = Md(), [i] = y(() => ({ handler: o }));
  Xt(() => {
    i.handler = o;
  }), P(() => {
    if (!n || !s) return;
    return n.registerHandler({ action: e, context: t, handler: () => i.handler(), singleKey: true });
  }, [e, t, n, s, i]);
}
function an(e, o = {}) {
  let { context: r = "Global", isActive: t = true } = o, s = Md(), [n] = y(() => ({ handlers: e })), i = Object.keys(e).sort().join("|");
  Xt(() => {
    n.handlers = e;
  }), P(() => {
    if (!s || !t) return;
    let c = Object.keys(n.handlers).map((u) => s.registerHandler({ action: u, context: r, handler: () => n.handlers[u]?.(), singleKey: true }));
    return () => {
      for (let u of c) u();
    };
  }, [r, i, s, t, n]);
}
function um(e, { isActive: o = true } = {}) {
  let r = Md(), [t] = y(() => ({ handler: e }));
  Xt(() => {
    t.handler = e;
  }), P(() => {
    if (!o || !r) return;
    return r.registerPreDispatch({ handler: (s, n, i) => t.handler(s, n, i) });
  }, [o, r, t]);
}
j();
var a = 800;
function J5(e, o, r, t = a) {
  let s = pn(), n = Zi(), i = A(0), c = A(void 0), u = Bo(() => e(false)), l = de(() => {
    if (c.current) c.current(), c.current = void 0;
  }, []);
  return P(() => () => {
    if (c.current) l(), u();
  }, [l]), de(() => {
    let d = n();
    if (d - i.current <= t && c.current !== void 0) l(), e(false), o();
    else r?.(), e(true), l(), c.current = s.setTimeout(() => {
      e(false), c.current = void 0;
    }, t);
    i.current = d;
  }, [e, o, r, l, s, n, t]);
}
export {
  J5,
  an,
  lt,
  um
};
