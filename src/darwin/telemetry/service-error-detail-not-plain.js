// darwin/telemetry/service-error-detail-not-plain.js — Claude Code 2.1.310（darwin）模块 chunk-9kgxrj2s.js
import { c } from "../agents/third-party.js";
import { d } from "./anthropic-workspace-id.js";
import { a } from "./chunk-9097a12b.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { pTt } from "../terminal/chunk-3ca478a4.js";
import { cn } from "../shared/chunk-6ae01e90.js";
var i = 2e3, f = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"], u = new RegExp(`"(${f.join("|")})"\\s*:\\s*"[^"]*"`, "g");
function g(e) {
  return e.replace(u, '"$1":"[REDACTED]"');
}
function Azo(e) {
  let n = e.replaceAll(`
`, "\\n");
  if (n.length <= i) return n;
  return n.slice(0, i) + `... (${n.length} chars)`;
}
function LGr(e) {
  let n = typeof e === "string" ? e : _(e), r = g(n);
  if (r.length <= i) return r;
  return r.slice(0, i) + `... (${r.length} chars)`;
}
function y_e(e) {
  return `sha12:${cn(typeof e === "string" ? e : `${_(e)}`)}`;
}
function Rzo(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`;
}
function pZn(e) {
  let n = d(e);
  if (e && typeof e === "object" && "response" in e) {
    let r = e.response, o = jU(r?.data);
    if (o) return `${n}: ${o}`;
  }
  return n;
}
function Oh(e, n = Date.now()) {
  if (!e) return;
  let r = Number(e);
  if (Number.isFinite(r) && r >= 0) return r * 1e3;
  let o = Date.parse(e);
  if (Number.isFinite(o)) {
    let s = o - n;
    return s > 0 ? s : void 0;
  }
  return;
}
function tI(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") return e.error.message;
  return;
}
function jU(e) {
  let n = tI(e);
  return n ? xhn(n, "error_message") : void 0;
}
function xhn(e, n) {
  if (pTt(e, 1024)) return e;
  t(`[error-detail] left the service's text (${n}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`), a("tengu_service_error_detail_not_plain", { length: e.length, source: c(n) });
  return;
}
function $wt(e) {
  if (!e || typeof e !== "object" || !("error" in e)) return;
  let n = e.error;
  if (!n || typeof n !== "object" || !("details" in n)) return;
  let r = n.details;
  if (r && typeof r === "object" && "error_code" in r && typeof r.error_code === "string") return r.error_code;
  return;
}
function Ix(e, n, r, o) {
  if (n) t(n);
  a("tengu_bridge_repl_skipped", { reason: c(e), ...r !== void 0 && { v2: r }, ...o });
}
export {
  $wt,
  Azo,
  Ix,
  LGr,
  Oh,
  Rzo,
  jU,
  pZn,
  tI,
  xhn,
  y_e
};
