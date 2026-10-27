// telemetry/tool-error.21ve.js — Claude Code 2.1.310 模块 chunk-21ve9rhk.js
import { k } from "../settings/global-config-and-gates.27xj.js";
import { Qu, bV, dj } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
var c = "tengu_synthetic_fog", l = 5242880, p = 65536, m = 33554432, _ = 65536;
function f() {
  let e = k(c, l);
  return typeof e === "number" && Number.isSafeInteger(e) && e >= p && e <= m ? e : l;
}
function PPt() {
  return f() - _;
}
function hfs({ answer: e, bytes: d, status: i, tooLarge: o }) {
  let n = o ? `is too large for the session service to carry back (${d} bytes)` : `was refused by the session service (HTTP ${i})`, r = bV(typeof e === "object" && e !== null ? Reflect.get(e, "result") : void 0), t = r.envelope.status === "present" ? r.envelope.envelope : void 0;
  if (t === void 0) return { content: [{ type: "text", text: `(this machine's answer ${n}, so it was not returned)` }], isError: true };
  let s = t.target.name, a = o ? " Run a narrower command instead: read part of the file (offset and limit), filter the output (head, tail, grep), or for an image or screenshot save a smaller copy on the machine and read that." : "", u = t.outcome === "completed" ? `The command ran to completion on ${s}, but its result ${n}, so it was not returned. Its effects stand — do not re-run it just to see the output.${a}` : `${s} answered this call, but the answer ${n}, so it was not returned.${a}`;
  return dj({ envelope: { v: Qu, outcome: "failed", ...t.call_id !== void 0 && { call_id: t.call_id }, target: t.target, code: "tool_error", message: u, ...eoo(t) }, content: [{ type: "text", text: u }] });
}
function eoo(e) {
  return "replayed" in e && e.replayed === true ? { replayed: true, ..."served_at" in e && e.served_at !== void 0 && { served_at: e.served_at } } : {};
}
export {
  PPt,
  eoo,
  hfs
};
