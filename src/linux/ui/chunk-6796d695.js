// linux/ui/chunk-6796d695.js — Claude Code 2.1.310（linux）模块 chunk-dy8fy0z7.js
import { dKe } from "../cli/chunk-0b672c58.js";
import { rt, Kr } from "../telemetry/render-glyph-cardinality.js";
import { Zr, xpe } from "../shared/chunk-f81ec543.js";
import { Oa, Wo } from "./aria-hidden.aa9d.js";
import { Xn, ai } from "../core/conversation-engine.js";
import { ls } from "./chunk-6c28faa3.js";
import { C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
function h() {
  let [o] = y(() => dKe() ? xpe : Zr);
  return o;
}
function bPe(o, { selfOpened: u, hasOpeningGrace: r = u, onCancelled: S, owedAtExit: b }) {
  let [R, s] = y(false), n = C(false), [c, E] = y(false), e = C(false), i = h(), x = Kr(r ? i : null), d = !r || x, A = rt() ? true : false, g = Oa(i), { refusedWithin: v, noteRefused: w } = Wo();
  function _() {
    if (r && (g() || v(i))) return w(), true;
    return false;
  }
  let a = ls(() => {
    if (e.current) return;
    let t = n.current;
    n.current = true;
    let l = S(t);
    if (l === void 0) {
      e.current = true;
      let p = b?.(t);
      if (p === void 0) {
        ai(1);
        return;
      }
      p.then((m) => Xn(1, "other", m === void 0 ? void 0 : { finalMessage: m }), () => Xn(1));
      return;
    }
    s(true), f(l);
  }, void 0, u && !c);
  function D() {
    if (n.current || !d) return false;
    return n.current = true, s(true), true;
  }
  function f(t) {
    if (e.current) return;
    e.current = true, E(true), o(t);
  }
  return { choicesDisabled: !d && !A, decided: R, take: D, refuseInput: _, settled: () => e.current, handBack: f, exit: a, exitHintShowing: a.pending && !c };
}
export {
  bPe
};
