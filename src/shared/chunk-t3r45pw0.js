// shared/chunk-t3r45pw0.js — Claude Code 2.1.310 模块 chunk-t3r45pw0.js
import { N3e, Wbe } from "../context/not-admin-owned.ersa.js";
import { X } from "./chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "./environment.9a41.js";
import { gz } from "../remote/moved-directory.z3m0.js";
import { qZ, bTt, $se, Rqt } from "../auth/descriptor-direct.zd2z.js";
import { Y } from "./async-hooks.923e.js";
var jio = [250, 500, 500, 750, 1e3];
function g() {
  return i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? $se;
}
function C(r) {
  return i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) && !gz();
}
var I = 250, w = 50;
function d() {
  return Rqt(qZ, "OAuth token").token !== null || Rqt(bTt, "API key").token !== null;
}
async function Ghs(r, { delaysMs: e = jio, siblingGraceMs: o = I, siblingStepMs: f = w } = {}) {
  if (!C(r)) return;
  let l = performance.now(), S = e.reduce((s, k) => s + k, 0), E = g(), { token: a, miss: _ } = Rqt(E, "session ingress token"), n = 0;
  while (!a && n < e.length) {
    let s = e[n];
    t(`[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${n + 1}/${e.length})`, { level: "warn" }), await X(s), n++, { token: a, miss: _ } = Rqt(E, "session ingress token");
  }
  if (!a) {
    Y("error", "cli_worker_lifecycle_claim_token_wait", { attempts: n, recovered: false, last_miss: _ ?? "other", waited_ms: Math.round(performance.now() - l) });
    return;
  }
  let u = n > 0 ? Math.max(S - (performance.now() - l), o) : o, p = performance.now(), c = 0, m = d();
  while (!m && performance.now() - p < u) await X(f), c++, m = d();
  if (n > 0 || c > 0) Y("info", "cli_worker_lifecycle_claim_token_wait", { attempts: n, recovered: true, sibling_attempts: c, sibling_present: m, waited_ms: Math.round(performance.now() - l) });
}
function zhs() {
  let r = !!i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (N3e() !== null) return { recovered: false, diag: { fd_env_set: r } };
  let { token: e, miss: o } = Rqt(g(), "session ingress token");
  if (!e) return { recovered: false, diag: { fd_env_set: r, last_miss: o ?? "other" } };
  return Wbe(e), t("Session ingress token re-read from well-known file"), { recovered: true, diag: { fd_env_set: r } };
}
export {
  Ghs,
  jio,
  zhs
};
