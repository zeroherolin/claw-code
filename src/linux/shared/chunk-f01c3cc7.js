// linux/shared/chunk-f01c3cc7.js — Claude Code 2.1.310（linux）模块 chunk-7f2fx3g0.js
import { qf } from "./environment.js";
import { WQo } from "../fs/ca-certs-load.js";
function hBo(s, e, o) {
  let n = qf() ? WQo(s, o) : void 0;
  if (!n) return;
  let { tls: r, ...t } = e ?? {}, d = e?.proxy === void 0 && e?.unix === void 0 ? t : e;
  return (i) => n.fetch(i, d);
}
function A9n(s, e, o) {
  let n = e.proxy === void 0 && o?.() ? hBo("ccr", e, void 0) : void 0;
  return n ? n(s) : fetch(s, e);
}
export {
  A9n,
  hBo
};
