// linux/shared/chunk-17a179e5.js — Claude Code 2.1.310（linux）模块 chunk-v3rf5tkn.js
import { Hf, o$ } from "../telemetry/reactive-compact-remote.js";
import { _c, wge, mle, MJ, SK } from "../core/conversation-engine.js";
function s(o, t) {
  let c = Hf(), e = _c(o), n = MJ(e, t), a = SK(e, t), r = !(o$() && !wge(e, t));
  return { enabled: c, effectiveWindow: n, threshold: a, enforced: r, source: mle(e, t) };
}
function els(o) {
  let t;
  return { notify(c, e) {
    let n = s(c, e);
    if (t !== void 0 && L7r(t, n)) return;
    t = n, o(n);
  }, reset() {
    t = void 0;
  } };
}
function L7r(o, t) {
  return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source;
}
export {
  L7r,
  els
};
