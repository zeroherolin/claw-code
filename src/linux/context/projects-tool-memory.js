// linux/context/projects-tool-memory.js — Claude Code 2.1.310（linux）模块 chunk-f0k8b9j9.js
import { nAn } from "./not-admin-owned.js";
import { _, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { Owt } from "../telemetry/service-error-detail-not-plain.js";
import { Bu } from "../auth/oauth-2025-04-20.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { PV, jt } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { od } from "../shared/sk-ant-sid.js";
import { o, v, M, oe, T, u } from "../vendor/zod/string-format.js";
var S = 3e4, C = "/v2/ccr-sessions/-/chat-project";
function XX() {
  return od() !== null;
}
async function y(e, n, r, i, s) {
  let c = await jt.post(C, { op: e, ...n }, { host: nAn() !== void 0 && PV() ? "ccr-gateway" : "api", auth: "session-jwt", timeout: S, validateStatus: () => true, signal: i, maxContentLength: s });
  if (c.ok && c.status >= 300) throw new X2(r, c.status, A(c.data), h(c.data));
  return a(c, r);
}
function dco(e) {
  return e instanceof X2 && e.status === 400 && e.body === "unknown op";
}
function h(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0;
}
function A(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || typeof e.error !== "string") return e;
  let n = h(e);
  return n === void 0 ? e.error : `${e.error} (${n})`;
}
function l(e, n) {
  return { auth: "teleport-org", timeout: S, headers: { "anthropic-beta": Bu }, validateStatus: () => true, signal: e, credentials: n };
}
function m(e, n) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`;
}
async function KUe(e, n, r) {
  if (XX()) return y("detail", {}, "get project detail", n);
  let i = await jt.get(m(e, "/detail"), l(n, r));
  return a(i, "get project detail");
}
async function wJt(e, n, r, i, s) {
  if (XX()) return y("read-doc", { doc_uuid: n }, "read doc", r, s);
  let c = await jt.get(m(e, `/docs/${encodeURIComponent(n)}`), { ...l(r, i), maxContentLength: s });
  return a(c, "read doc");
}
async function dSs(e, n, r, i) {
  if (XX()) return y("read-file", { file_uuid: n }, "read file", r);
  let s = await jt.get(m(e, `/files/${encodeURIComponent(n)}/extracted`), l(r, i));
  return a(s, "read file");
}
var rSr = 20971520, b3e = 262144, w = Math.ceil(rSr * 4 / 3) + 65536;
async function cSs(e, n, r, i) {
  if (XX()) return y("read-file-raw", { file_uuid: n }, "download file", r, w);
  let s = await jt.get(m(e, `/files/${encodeURIComponent(n)}/raw`), { ...l(r, i), maxContentLength: w });
  return a(s, "download file");
}
var D = 4194304;
async function x(e, n, r) {
  if (XX()) throw new X2("read project memory", 0, "no memory route over the CCR bridge");
  let i = await jt.get(m(e, "/detail?include=melange_memory"), { ...l(n, r), maxContentLength: D });
  return z(a(i, "read project memory").melange_memory);
}
var E = 255, R = /^[^\r\n\v\f\u0085\u2028\u2029]*$/, F = p(() => u({ path: o().max(E).regex(R), content: o(), size_bytes: v().optional().catch(void 0), updated_at: o().nullable().optional().catch(void 0), truncated: M().optional().catch(void 0) })), H = p(() => u({ files: T(oe()), truncated: M().optional().catch(void 0) }));
function z(e) {
  if (e === void 0 || e === null) return null;
  let n = H().safeParse(e);
  if (!n.success) return f("projects_tool_memory", "parse_failed"), t("project memory: melange_memory did not parse", { level: "warn" }), null;
  let r = [], i = 0;
  for (let s of n.data.files) {
    let c = F().safeParse(s);
    if (!c.success) {
      i++;
      continue;
    }
    let d = c.data;
    r.push({ path: d.path, content: d.content, size_bytes: d.size_bytes ?? Buffer.byteLength(d.content, "utf8"), updated_at: d.updated_at ?? null, truncated: d.truncated === true });
  }
  if (i > 0) f("projects_tool_memory", "entries_dropped", { dropped: i }), t(`project memory: ${i} entries dropped at parse`, { level: "warn" });
  else g("projects_tool_memory");
  return { files: r, truncated: n.data.truncated === true };
}
async function cco(e, n, r, i, s) {
  if (XX()) return y("write-doc", { file_name: n, content: r }, "create doc", i);
  let c = await jt.post(m(e, "/docs"), { file_name: n, content: r }, l(i, s));
  return a(c, "create doc");
}
async function uSs(e, n, r, i, s, c, d) {
  let j = { content: r, ...c !== void 0 && { base_content_sha256: c }, ...d !== void 0 && { max_replaced_content_bytes: d } };
  if (XX()) return y("update-doc", { doc_uuid: n, ...j }, "update doc", i);
  let k = await jt.patch(m(e, `/docs/${encodeURIComponent(n)}`), j, l(i, s));
  return a(k, "update doc");
}
async function uco(e, n, r, i) {
  if (XX()) {
    await y("delete-doc", { doc_uuid: n }, "delete doc", r);
    return;
  }
  let s = await jt.delete(m(e, `/docs/${encodeURIComponent(n)}`), void 0, l(r, i));
  a(s, "delete doc");
}
async function fSs(e, n, r, i, s) {
  if (XX()) return b(await y("kb-search", { query: n, n: r }, "search knowledge base", i));
  let c = await jt.get(m(e, `/kb/search?query=${encodeURIComponent(n)}&n=${r}`), l(i, s));
  return b(a(c, "search knowledge base"));
}
function b(e) {
  if (typeof e === "string") try {
    return te(e);
  } catch {
    return e;
  }
  return e;
}
function pSs(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]");
}
class X2 extends Error {
  action;
  status;
  body;
  errorCode;
  constructor(e, n, r, i) {
    super(`Projects API: ${e} failed (HTTP ${n})${I(r)}`);
    this.action = e;
    this.status = n;
    this.body = r;
    this.errorCode = i;
    this.name = "ProjectsApiError";
  }
}
function a(e, n) {
  if (!e.ok) throw new X2(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new X2(n, e.status, e.data, Owt(e.data));
  return e.data;
}
function I(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${_(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var P = /* @__PURE__ */ new Map();
function eOt(e, n) {
  let r = P.get(e);
  if (r !== void 0) return r;
  let i = x(e, void 0, n).catch((s) => {
    if (P.get(e) === i) P.delete(e);
    throw s;
  });
  return P.set(e, i), i;
}
function Qki() {
  P.clear();
}
export {
  KUe,
  Qki,
  X2,
  XX,
  b3e,
  cSs,
  cco,
  dSs,
  dco,
  eOt,
  fSs,
  pSs,
  rSr,
  uSs,
  uco,
  wJt
};
