// linux/telemetry/select-stray-click-dropped.js — Claude Code 2.1.310（linux）模块 chunk-y5em6mt4.js
import { b } from "../agents/third-party.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "./chunk-9097a12b.js";
import { fn } from "./render-glyph-cardinality.js";
import { _6e } from "../terminal/ink-renderer.js";
import { de, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function u(o, n, r) {
  return o.isWindowActivation || i(n, r);
}
function aw() {
  let o = fn(), [n] = y(() => o.now());
  return de((r) => {
    let e = o.now();
    if (!u(r, n, e)) return false;
    let c = r.isWindowActivation ? b("window_activation") : b("mount_settle");
    return t(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`), a("tengu_select_stray_click_dropped", { reason: c }), r.dropAsStray(), true;
  }, [o, n]);
}
function nPt() {
  let o = fn(), [n] = y(() => o.now());
  return de(() => i(n, o.now()), [o, n]);
}
function i(o, n) {
  return n - o < _6e;
}
export {
  aw,
  nPt
};
