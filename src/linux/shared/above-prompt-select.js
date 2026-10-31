// linux/shared/above-prompt-select.js — Claude Code 2.1.310（linux）模块 chunk-0bynhaq9.js
import { Ws } from "../terminal/wl-copy.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { zI, K, qo } from "./chunk-e4a3aa33.js";
import { be, P, Xt, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function g() {
  return Ws().get(process.stdout)?.invalidatePrevFrame();
}
function F(e) {
  return e.activeOverlays.size > 0;
}
function U(e) {
  return S(e.activeOverlays);
}
function V(e) {
  return fgr(e.activeOverlays);
}
function z(e) {
  for (const t of e.activeOverlays) {
    if (v.has(t)) {
      return true;
    }
  }
  return false;
}
function M(e) {
  for (const t of e.activeOverlays) {
    if (f.has(t)) {
      return true;
    }
  }
  return false;
}
var N = /* @__PURE__ */ new Set(["autocomplete"]), A = /* @__PURE__ */ new Set(["above-prompt-input", "above-prompt-select"]), v = /* @__PURE__ */ new Set(["history-search"]), f = /* @__PURE__ */ new Set(["elicitation", "elicitation-url", ...[]]), uUe = 2;
function Ea(e, t) {
  let O = w(8), r = t === void 0 ? true : t, n = be(zI)?.setState, b, x;
  if (O[0] !== r || O[1] !== e || O[2] !== n) b = () => {
    if (!r || !n) {
      return;
    }
    return n((c) => {
      if (c.activeOverlays.has(e)) {
        return c;
      }
      let _ = new Set(c.activeOverlays);
      return _.add(e), { ...c, activeOverlays: _ };
    }), () => {
      n((u) => {
        if (!u.activeOverlays.has(e)) {
          return u;
        }
        let y = new Set(u.activeOverlays);
        return y.delete(e), { ...u, activeOverlays: y };
      });
    };
  }, x = [e, r, n], O[0] = r, O[1] = e, O[2] = n, O[3] = b, O[4] = x;
  else b = O[3], x = O[4];
  P(b, x);
  let E, m;
  if (O[5] !== r) E = () => {
    if (!r) {
      return;
    }
    return g;
  }, m = [r], O[5] = r, O[6] = E, O[7] = m;
  else E = O[6], m = O[7];
  Xt(E, m);
}
function Wno() {
  return K(F);
}
function S(e) {
  for (let t of e) if (!A.has(t)) return true;
  return false;
}
function dIn() {
  return K(U);
}
function fgr(e) {
  for (let t of e) if (!N.has(t)) return true;
  return false;
}
function G2() {
  return K(V);
}
function tPt() {
  return qo(z) ?? false;
}
function pgr() {
  return qo(M) ?? false;
}
export {
  Ea,
  G2,
  Wno,
  dIn,
  fgr,
  pgr,
  tPt,
  uUe
};
