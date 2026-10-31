// linux/permissions/device-bash.js — Claude Code 2.1.310（linux）模块 chunk-qy6y62kt.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Mc, sQn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { uq } from "../shared/chunk-3c6e6b31.js";
import { o, oe, u, A } from "../vendor/zod/string-format.js";
var Ove = "anthropic/devicePassthrough", rhi = ["get_device_info", "device_bash", "list_devices", "sync_files"], r = "Claude_Browser__", n = 128, Wvr = 1, _ = p(() => u({ v: A(Wvr), tool: o().min(1).max(n), target: oe().optional() }));
function u7t(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = sQn(e.data.target);
  return s === void 0 ? void 0 : { v: e.data.v, tool: Mc(e.data.tool, n), target: s };
}
var a = rhi.map(uq), c = `${uq(r)}_`;
function i(t) {
  let e = `${uq(t)}_`;
  return a.some((s) => e.startsWith(`${s}_`));
}
var E = /* @__PURE__ */ new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]), l = "device_bash";
function Gvr(t) {
  let e = t.lastIndexOf("__"), s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access");
}
function bBe(t) {
  return !i(t) && !`${uq(t)}_`.startsWith(c) && !Gvr(t);
}
export {
  Gvr,
  Ove,
  Wvr,
  bBe,
  rhi,
  u7t
};
