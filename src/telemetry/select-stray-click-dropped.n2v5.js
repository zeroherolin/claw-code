// telemetry/select-stray-click-dropped.n2v5.js — Claude Code 2.1.310 模块 chunk-n2v5d36a.js
import { S } from "../agents/third-party.ydpb.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { a } from "./chunk-wq923bwc.js";
import { pn } from "./render-glyph-cardinality.7car.js";
import { A5e } from "../terminal/ink-renderer.pma0.js";
import { de, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function u(o, n, r) {
  return o.isWindowActivation || i(n, r);
}
function lw() {
  let o = pn(), [n] = y(() => o.now());
  return de((r) => {
    let e = o.now();
    if (!u(r, n, e)) return false;
    let c = r.isWindowActivation ? S("window_activation") : S("mount_settle");
    return t(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`), a("tengu_select_stray_click_dropped", { reason: c }), r.dropAsStray(), true;
  }, [o, n]);
}
function uPt() {
  let o = pn(), [n] = y(() => o.now());
  return de(() => i(n, o.now()), [o, n]);
}
function i(o, n) {
  return n - o < A5e;
}
export {
  lw,
  uPt
};
