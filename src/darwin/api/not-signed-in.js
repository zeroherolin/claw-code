// darwin/api/not-signed-in.js — Claude Code 2.1.310（darwin）模块 chunk-s0w7cz0g.js
import { pR, gn, Jv, Wt, k, Re, ue } from "../settings/global-config-and-gates.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { iN } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { tbn } from "../mcp/allowed-warning.js";
import { Yd } from "../fs/content-encoding.js";
import { TZ } from "../auth/permission-error.js";
import { tI } from "../telemetry/service-error-detail-not-plain.js";
import { o, u, B } from "../vendor/zod/string-format.js";
class Vmo {
  #t;
  constructor(e) {
    this.#t = e;
  }
  reveal() {
    return this.#t;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function Kmo(e, n) {
  let r;
  try {
    r = await Wt.post("/v1/code/github/import-token", { token: e.reveal() }, { headers: { "anthropic-beta": tbn.header }, auth: "teleport-org", timeout: 15e3, validateStatus: () => true, credentials: n });
  } catch (s) {
    if (Yd(s)) {
      t(`import-token network error: ${s.code ?? "unknown"}`, { level: "error" });
      let a = TZ(s);
      return { ok: false, error: { kind: "network", ...a && { sslHint: a } } };
    }
    return { ok: false, error: { kind: "not_signed_in" } };
  }
  if (!r.ok) return { ok: false, error: { kind: "not_signed_in" } };
  if (r.status === 200) return { ok: true, result: r.data };
  if (r.status === 400) {
    let s = iN(tI(r.data) ?? "");
    return { ok: false, error: { kind: "invalid_token", ...s && { message: s } } };
  }
  if (r.status === 401) return { ok: false, error: { kind: "not_signed_in" } };
  return t(`import-token returned ${r.status}`, { level: "error" }), { ok: false, error: { kind: "server", status: r.status } };
}
async function Qks(e) {
  try {
    return await Jv(e), true;
  } catch {
    return false;
  }
}
async function c(e, { timeout: n, isBackground: r }) {
  try {
    let s = await Wt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", { auth: "teleport-org", timeout: n, isBackground: r, validateStatus: () => true, credentials: e });
    if (!s.ok || s.status !== 200) return null;
    let a = s.data?.auth_source;
    return { isAuthenticated: s.data?.is_authenticated === true, authSource: a === "oauth" || a === "cli_import" ? a : null };
  } catch {
    return null;
  }
}
async function qmo(e) {
  let n = await c(e, { timeout: 1e4, isBackground: false });
  return n?.isAuthenticated ? n.authSource : null;
}
async function h(e) {
  let n = await c(e, { timeout: 3e3, isBackground: true });
  if (n === null) return p("api_github_connection_status", "request_failed"), "unknown";
  return g("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected";
}
function GIe() {
  return `${rn().CLAUDE_AI_ORIGIN}/code`;
}
class S {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, n) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight;
    else if (!d()) await this.fetch(e, n);
    return this.status ?? "unknown";
  }
  async readLive(e, n) {
    if (this.seedFromPersisted(), !this.inFlight && d()) return "unknown";
    let r = this.generation, s = await (this.inFlight ?? this.fetch(e, n));
    return r === this.generation ? s : "unknown";
  }
  peek(e, n) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !d()) this.fetch(e, n);
    return this.status;
  }
  markConnected(e) {
    this.generation++, this.inFlight = void 0, this.status = "connected", m("connected", e);
  }
  clear() {
    this.generation++, this.inFlight = void 0, this.status = void 0;
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = b();
    if (e) this.status = C(ue(), e);
  }
  fetch(e, n) {
    let r = this.generation, s = h(e).then((a) => (this.settle(r, a, n), a), (a) => (l(a), this.settle(r, "unknown", n), "unknown"));
    return this.inFlight = s, s;
  }
  settle(e, n, r) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, n === "unknown") {
      this.status ??= n;
      return;
    }
    this.status = n, m(n, r);
  }
}
var f6 = new W(() => new S());
function d() {
  return k("tengu_cheerful_horizon", false);
}
var _ = f(() => u({ accountUuid: o(), orgUuid: o(), status: B(["connected", "not_connected"]) }));
function b() {
  let e = gn();
  if (!e?.organizationUuid) return;
  let n = i.CLAUDE_CODE_ORGANIZATION_UUID;
  if (n && n !== e.organizationUuid) return;
  if (pR() !== "store") return;
  return { accountUuid: e.accountUuid, orgUuid: e.organizationUuid };
}
function C(e, n) {
  let r = _().safeParse(e.githubWebConnectionStatusCache);
  if (!r.success || r.data.accountUuid !== n.accountUuid || r.data.orgUuid !== n.orgUuid) return;
  return r.data.status;
}
function m(e, n) {
  let r = b();
  if (!r) return;
  Re((s) => C(s, r) === e ? s : { ...s, githubWebConnectionStatusCache: { ...r, status: e } }, n);
}
export {
  GIe,
  Kmo,
  Qks,
  Vmo,
  f6,
  qmo
};
