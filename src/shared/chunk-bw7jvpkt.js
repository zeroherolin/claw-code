// shared/chunk-bw7jvpkt.js — Claude Code 2.1.310 模块 chunk-bw7jvpkt.js
import { Hp, lF } from "../telemetry/reactive-compact-remote.67cw.js";
import { _c, Tge, vle, B7, I6 } from "../core/conversation-engine.31gx.js";
function s(o, t) {
  let c = Hp(), e = _c(o), n = B7(e, t), a = I6(e, t), r = !(lF() && !Tge(e, t));
  return { enabled: c, effectiveWindow: n, threshold: a, enforced: r, source: vle(e, t) };
}
function kls(o) {
  let t;
  return { notify(c, e) {
    let n = s(c, e);
    if (t !== void 0 && oZr(t, n)) return;
    t = n, o(n);
  }, reset() {
    t = void 0;
  } };
}
function oZr(o, t) {
  return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source;
}
export {
  kls,
  oZr
};
