// linux/remote/bridge-project-files-write.js — Claude Code 2.1.310（linux）模块 chunk-bxxdf8d7.js
import { Ht } from "../fs/content-encoding.js";
import { d, ui } from "../telemetry/anthropic-workspace-id.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { QP, NU } from "../telemetry/service-error-detail-not-plain.js";
import { pf } from "../artifacts/chunk-a6c9d164.js";
import { o, T, u } from "../vendor/zod/string-format.js";
import { Ds, py } from "./claude-code-remote.js";
var R = "2023-06-01", l2e = "https://github.com/apps/claude/installations/new";
function vbt(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var P = "ccr-byoc-2025-07-29";
async function zZe(e, r) {
  let { sessionId: i, repo: n, prNumber: f, baseUrl: b, getAccessToken: k, getTrustedDeviceToken: c } = r, _ = RBo(e), s = k();
  if (!s) return t(`[bridge] No access token for ${e}-pr`), m(_, "no_token"), { ok: false, reason: "no_token" };
  let y = `${b}/v1/code/github/${e}-pull-request`, w = { session_id: pf(i), repo: n, pr_number: f }, l;
  try {
    l = await Ht.post(y, w, { headers: _1r(s, { trustedDeviceToken: await c?.() }), timeout: 1e4, validateStatus: (a) => a < 500 });
  } catch (a) {
    return t(`[bridge] ${e}-pr request failed: ${d(a)}`), m(_, "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (!(l.status >= 200 && l.status < 300 || l.status === 409)) {
    let a = vbt(l.data), h = QP(l.data);
    return t(`[bridge] ${e}-pr failed ${l.status}${a ? ` [${a}]` : ""}${h ? `: ${h}` : ""}`), m(_, a === "github_app_not_installed" ? a : "http_error"), { ok: false, reason: a, detail: NU(l.data) };
  }
  return t(`[bridge] ${e}-pr ${n}#${f} ok`), g(_), { ok: true };
}
function RBo(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function _1r(e, { orgUUID: r, trustedDeviceToken: i } = {}) {
  let n = { Authorization: `Bearer ${e}`, "Content-Type": "application/json", "anthropic-version": R, "anthropic-beta": P, "anthropic-client-platform": py(), "User-Agent": Ds() };
  if (r !== void 0) n["x-organization-uuid"] = r;
  if (i !== void 0) n["X-Trusted-Device-Token"] = i;
  return n;
}
var xBo = "/worker/record-created-pr";
async function Y5s(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${xBo}`;
  try {
    return { ok: true, status: (await Ht.post(r, { owner: e.owner, repo: e.repo, pr_number: e.prNumber, head_ref: e.headRef }, { headers: { Authorization: `Bearer ${e.workerToken}`, "Content-Type": "application/json", "anthropic-version": R, "anthropic-client-platform": py(), "User-Agent": Ds() }, timeout: e.timeoutMs })).status };
  } catch (i) {
    let { kind: n, status: f } = ui(i);
    return { ok: false, kind: n, status: f };
  }
}
var j = p(() => u({ results: T(u({ path: o(), error_reason: o().optional() })) })), x = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function X5s(e) {
  let { door: r, items: i, signal: n } = e;
  if (!x.test(r.channelId)) return m("bridge_project_files_write", "invalid_channel"), { ok: false, reason: "invalid_channel" };
  let f = r.getBearerToken();
  if (!f) return m("bridge_project_files_write", "no_token"), { ok: false, reason: "no_token" };
  let b = `${r.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(r.sessionId)}/worker/channels/${encodeURIComponent(r.channelId)}/files:write`, k = { session_id: r.sessionId, channel_id: r.channelId, worker_epoch: r.getWorkerEpoch(), files: i.map((s) => ({ path: s.path, content: s.content.toString("base64") })) }, c;
  try {
    c = await Ht.post(b, k, { headers: _1r(f), timeout: 9e4, maxBodyLength: 1 / 0, signal: n, validateStatus: (s) => s < 500 });
  } catch (s) {
    if (Ht.isCancel(s)) return m("bridge_project_files_write", "aborted"), { ok: false, reason: "aborted" };
    return t(`[bridge] project files write request failed: ${d(s)}`), m("bridge_project_files_write", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (c.status !== 200) {
    let s = vbt(c.data);
    return t(`[bridge] project files write refused: status=${c.status}${s ? ` [${s}]` : ""}`), m("bridge_project_files_write", "http_error"), { ok: false, reason: "http_error", status: c.status, code: s };
  }
  let _ = j().safeParse(c.data);
  if (!_.success) return m("bridge_project_files_write", "bad_response"), { ok: false, reason: "bad_response" };
  return g("bridge_project_files_write"), { ok: true, results: _.data.results };
}
export {
  RBo,
  X5s,
  Y5s,
  _1r,
  l2e,
  vbt,
  xBo,
  zZe
};
