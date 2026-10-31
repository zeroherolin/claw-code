// darwin/ui/chunk-6796d695.js — Claude Code 2.1.310（darwin）模块 chunk-rj0pm0aj.js
import { S6e } from "../cli/chunk-0b672c58.js";
import { rt, Vr } from "../telemetry/render-glyph-cardinality.js";
import { Zr, Lfe } from "../shared/chunk-f81ec543.js";
import { Ma, Go } from "./aria-hidden.aa9d.js";
import { Xn, ai } from "../core/conversation-engine.js";
import { ds } from "./chunk-6c28faa3.js";
import { A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
function h() {
  let [o] = y(() => S6e() ? Lfe : Zr);
  return o;
}
function CPe(o, { selfOpened: u, hasOpeningGrace: r = u, onCancelled: S, owedAtExit: b }) {
  let [C, s] = y(false), n = A(false), [c, R] = y(false), e = A(false), i = h(), E = Vr(r ? i : null), d = !r || E, x = rt() ? true : false, g = Ma(i), { refusedWithin: v, noteRefused: w } = Go();
  function _() {
    if (r && (g() || v(i))) return w(), true;
    return false;
  }
  let a = ds(() => {
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
    e.current = true, R(true), o(t);
  }
  return { choicesDisabled: !d && !x, decided: C, take: D, refuseInput: _, settled: () => e.current, handBack: f, exit: a, exitHintShowing: a.pending && !c };
}
export {
  CPe
};
