// darwin/permissions/device-bash.js — Claude Code 2.1.310（darwin）模块 chunk-mhfd6eqj.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Mc, vJn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { wK } from "../shared/chunk-3c6e6b31.js";
import { o, oe, u, T } from "../vendor/zod/string-format.js";
var FEe = "anthropic/devicePassthrough", Bhi = ["get_device_info", "device_bash", "list_devices", "sync_files"], r = "Claude_Browser__", n = 128, ivr = 1, _ = f(() => u({ v: T(ivr), tool: o().min(1).max(n), target: oe().optional() }));
function EQt(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = vJn(e.data.target);
  return s === void 0 ? void 0 : { v: e.data.v, tool: Mc(e.data.tool, n), target: s };
}
var a = Bhi.map(wK), c = `${wK(r)}_`;
function i(t) {
  let e = `${wK(t)}_`;
  return a.some((s) => e.startsWith(`${s}_`));
}
var E = /* @__PURE__ */ new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]), l = "device_bash";
function avr(t) {
  let e = t.lastIndexOf("__"), s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access");
}
function R1e(t) {
  return !i(t) && !`${wK(t)}_`.startsWith(c) && !avr(t);
}
export {
  Bhi,
  EQt,
  FEe,
  R1e,
  avr,
  ivr
};
