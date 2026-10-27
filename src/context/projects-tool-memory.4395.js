// context/projects-tool-memory.4395.js — Claude Code 2.1.310 模块 chunk-4395te3y.js
import { STn } from "./not-admin-owned.ersa.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { $wt } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { Bu } from "../auth/oauth-2025-04-20.ke15.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { BV, Wt } from "../settings/global-config-and-gates.27xj.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { o, E, M, oe, C, u } from "../vendor/zod/string-format.k395.js";
import { od } from "../shared/sk-ant-sid.0hme.js";
var S = 3e4, A = "/v2/ccr-sessions/-/chat-project";
function o7() {
  return od() !== null;
}
async function y(e, n, r, i, s) {
  let c = await Wt.post(A, { op: e, ...n }, { host: STn() !== void 0 && BV() ? "ccr-gateway" : "api", auth: "session-jwt", timeout: S, validateStatus: () => true, signal: i, maxContentLength: s });
  if (c.ok && c.status >= 300) throw new s6(r, c.status, D(c.data), h(c.data));
  return a(c, r);
}
function Tco(e) {
  return e instanceof s6 && e.status === 400 && e.body === "unknown op";
}
function h(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0;
}
function D(e) {
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
async function e1e(e, n, r) {
  if (o7()) return y("detail", {}, "get project detail", n);
  let i = await Wt.get(m(e, "/detail"), l(n, r));
  return a(i, "get project detail");
}
async function N7t(e, n, r, i, s) {
  if (o7()) return y("read-doc", { doc_uuid: n }, "read doc", r, s);
  let c = await Wt.get(m(e, `/docs/${encodeURIComponent(n)}`), { ...l(r, i), maxContentLength: s });
  return a(c, "read doc");
}
async function Fbs(e, n, r, i) {
  if (o7()) return y("read-file", { file_uuid: n }, "read file", r);
  let s = await Wt.get(m(e, `/files/${encodeURIComponent(n)}/extracted`), l(r, i));
  return a(s, "read file");
}
var ybr = 20971520, T9e = 262144, w = Math.ceil(ybr * 4 / 3) + 65536;
async function $bs(e, n, r, i) {
  if (o7()) return y("read-file-raw", { file_uuid: n }, "download file", r, w);
  let s = await Wt.get(m(e, `/files/${encodeURIComponent(n)}/raw`), { ...l(r, i), maxContentLength: w });
  return a(s, "download file");
}
var R = 4194304;
async function x(e, n, r) {
  if (o7()) throw new s6("read project memory", 0, "no memory route over the CCR bridge");
  let i = await Wt.get(m(e, "/detail?include=melange_memory"), { ...l(n, r), maxContentLength: R });
  return I(a(i, "read project memory").melange_memory);
}
var F = 255, H = /^[^\r\n\v\f\u0085\u2028\u2029]*$/, T = f(() => u({ path: o().max(F).regex(H), content: o(), size_bytes: E().optional().catch(void 0), updated_at: o().nullable().optional().catch(void 0), truncated: M().optional().catch(void 0) })), z = f(() => u({ files: C(oe()), truncated: M().optional().catch(void 0) }));
function I(e) {
  if (e === void 0 || e === null) return null;
  let n = z().safeParse(e);
  if (!n.success) return p("projects_tool_memory", "parse_failed"), t("project memory: melange_memory did not parse", { level: "warn" }), null;
  let r = [], i = 0;
  for (let s of n.data.files) {
    let c = T().safeParse(s);
    if (!c.success) {
      i++;
      continue;
    }
    let d = c.data;
    r.push({ path: d.path, content: d.content, size_bytes: d.size_bytes ?? Buffer.byteLength(d.content, "utf8"), updated_at: d.updated_at ?? null, truncated: d.truncated === true });
  }
  if (i > 0) p("projects_tool_memory", "entries_dropped", { dropped: i }), t(`project memory: ${i} entries dropped at parse`, { level: "warn" });
  else g("projects_tool_memory");
  return { files: r, truncated: n.data.truncated === true };
}
async function Aco(e, n, r, i, s) {
  if (o7()) return y("write-doc", { file_name: n, content: r }, "create doc", i);
  let c = await Wt.post(m(e, "/docs"), { file_name: n, content: r }, l(i, s));
  return a(c, "create doc");
}
async function Ubs(e, n, r, i, s, c, d) {
  let j = { content: r, ...c !== void 0 && { base_content_sha256: c }, ...d !== void 0 && { max_replaced_content_bytes: d } };
  if (o7()) return y("update-doc", { doc_uuid: n, ...j }, "update doc", i);
  let k = await Wt.patch(m(e, `/docs/${encodeURIComponent(n)}`), j, l(i, s));
  return a(k, "update doc");
}
async function Rco(e, n, r, i) {
  if (o7()) {
    await y("delete-doc", { doc_uuid: n }, "delete doc", r);
    return;
  }
  let s = await Wt.delete(m(e, `/docs/${encodeURIComponent(n)}`), void 0, l(r, i));
  a(s, "delete doc");
}
async function Bbs(e, n, r, i, s) {
  if (o7()) return b(await y("kb-search", { query: n, n: r }, "search knowledge base", i));
  let c = await Wt.get(m(e, `/kb/search?query=${encodeURIComponent(n)}&n=${r}`), l(i, s));
  return b(a(c, "search knowledge base"));
}
function b(e) {
  if (typeof e === "string") try {
    return ee(e);
  } catch {
    return e;
  }
  return e;
}
function jbs(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]");
}
class s6 extends Error {
  action;
  status;
  body;
  errorCode;
  constructor(e, n, r, i) {
    super(`Projects API: ${e} failed (HTTP ${n})${B(r)}`);
    this.action = e;
    this.status = n;
    this.body = r;
    this.errorCode = i;
    this.name = "ProjectsApiError";
  }
}
function a(e, n) {
  if (!e.ok) throw new s6(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new s6(n, e.status, e.data, $wt(e.data));
  return e.data;
}
function B(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${_(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var P = /* @__PURE__ */ new Map();
function lOt(e, n) {
  let r = P.get(e);
  if (r !== void 0) return r;
  let i = x(e, void 0, n).catch((s) => {
    if (P.get(e) === i) P.delete(e);
    throw s;
  });
  return P.set(e, i), i;
}
function DCi() {
  P.clear();
}
export {
  $bs,
  Aco,
  Bbs,
  DCi,
  Fbs,
  N7t,
  Rco,
  T9e,
  Tco,
  Ubs,
  e1e,
  jbs,
  lOt,
  o7,
  s6,
  ybr
};
