// darwin/shared/chunk-f01c3cc7.js — Claude Code 2.1.310（darwin）模块 chunk-re15k666.js
import { Tf } from "./environment.js";
import { FQo } from "../fs/ca-certs-load.js";
function tBo(s, e, o) {
  let n = Tf() ? FQo(s, o) : void 0;
  if (!n) return;
  let { tls: r, ...t } = e ?? {}, d = e?.proxy === void 0 && e?.unix === void 0 ? t : e;
  return (i) => n.fetch(i, d);
}
function XYn(s, e, o) {
  let n = e.proxy === void 0 && o?.() ? tBo("ccr", e, void 0) : void 0;
  return n ? n(s) : fetch(s, e);
}
export {
  XYn,
  tBo
};
