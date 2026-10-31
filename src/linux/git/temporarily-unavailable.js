// linux/git/temporarily-unavailable.js — Claude Code 2.1.310（linux）模块 chunk-kfrmynaq.js
import { R, Rr, wg, ZH, ui } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { Mnt, mKt, yKt, Oz, a_, bKt, ibn, jt } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { _t, l } from "../artifacts/cowritten-artifact-html.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { eYe } from "../artifacts/chunk-a6c9d164.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { cp } from "../permissions/turn-abort.js";
import { lxe } from "./get-url.js";
import { m_e, Xc } from "../auth/env-quad.js";
import { yU } from "../telemetry/bridge-resume-respects-local-owner.js";
import { T6e } from "../cli/drop-worktree-registrations.js";
import { Dy } from "../auth/policy-limits-principal-changed.js";
import { iAe } from "../remote/anthropic-client-request-reason.js";
import { SU } from "../telemetry/org-policy-denied.js";
import { eyt } from "../context/team-memory-sync.js";
import { ojn } from "../shared/chunk-9b8097c9.js";
import { kQ, rre } from "../commands/command-web-setup.js";
import { mn } from "../shared/chunk-62f8d501.js";
var F = 25e3, M = 4, G = 15e3, B = 200, K = 8e6, U = 1e6, L = 128, Y = 6e4, E = "Run `claude auth login` (or /login in a local session), then try again.", H = { started_by_session: "Cloud sessions cannot be read from a program that was started inside a Claude Code session. Start it outside the session and try again.", provider: "Cloud sessions aren't available with this API provider. They run on Anthropic's infrastructure and require an Anthropic account.", evaluation_run: eyt, nonessential_traffic: "Cloud sessions are unavailable while CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set.", policy: "Cloud sessions are disabled by your organization's policy.", policy_unverified: "Your organization's policy could not be read, so cloud sessions are unavailable. Try again in a moment.", not_signed_in: `Cloud sessions need a sign-in with a Claude account. ${E}`, sign_in_expired: `Your sign-in was not accepted. ${E}`, not_found: "That cloud session was not found for this sign-in.", forbidden: "The service did not allow this sign-in to read cloud sessions from this computer. Try Claude Code on the web instead.", temporarily_unavailable: "Cloud sessions could not be read right now. Try again in a moment.", failed: "Cloud sessions could not be read." }, V = "Cloud sessions are disabled for the rest of this session because an organization with a restricted policy was signed in earlier. Restart Claude Code to check again.", z = "Your organization's policy could not be loaded: the request for it got a 404, which usually means that a proxy or gateway does not forward it. Ask your network admin to forward it; `claude doctor` shows which host was asked.", X = `Cloud sessions aren't available with this Console sign-in. They need a sign-in with a Claude account. ${E}`, j = "Cloud sessions can't be read with this Console sign-in.", q = "Cloud sessions can't be read with your Console sign-in in this process. This is a bug in Claude Code; please report it.";
class Tmi {
  inFlight = 0;
  reported = /* @__PURE__ */ new Set();
  proofRereadAt = Number.NEGATIVE_INFINITY;
  async pageWasRefused() {
    if (Date.now() - this.proofRereadAt < Y) return;
    this.proofRereadAt = Date.now();
    try {
      let { clearTrustedDeviceTokenCache: e } = await import("../auth/clear-trusted-device-token.js");
      e();
    } catch (e) {
      t(`[cloud-sessions] the kept read of the trusted-device proof was not cleared: ${wg(e) ?? "error"}`, { level: "error" });
    }
  }
  async answer(e, s) {
    if (e.subtype === "get_cloud_session") Xcr(e.subtype, e.session_id);
    let r = await this.bounded(e.subtype, s, async (a) => {
      let u = e.subtype === "list_cloud_sessions" && e.user_initiated !== true, _ = await Jcr(!u);
      if (_ !== null) return _;
      let d = yU();
      if (e.subtype === "list_cloud_sessions") {
        let S = await P5t(d ? `/v1/code/sessions?limit=${B}` : "/v1/sessions", { signal: a, context: s, maxResponseBytes: K, olderApi: !d, isBackground: u }), k = S.ok && S.status === 404 ? PC("failed") : I5t(S, u);
        if (k !== null) return k;
        let f = S.ok ? S.data : void 0;
        if (!mn(f) || !Array.isArray(f.data)) return PC("failed");
        return { status: "ok", sessions: f.data.flatMap((n) => {
          if (!mn(n) || typeof n.id !== "string") return [];
          let C = eYe(n.id), I = [n.updated_at, n.last_event_at, n.created_at].find((y) => typeof y === "string");
          if (C.length > L || !iAe.test(C) || typeof I !== "string") return [];
          let b;
          switch (n.session_status) {
            case "running":
            case "idle":
            case "requires_action":
            case "archived":
            case "pending":
            case "failed":
              b = n.session_status;
              break;
            default:
              b = ojn({ status: typeof n.status === "string" ? n.status : void 0, worker_status: typeof n.worker_status === "string" ? n.worker_status : void 0, connection_status: typeof n.connection_status === "string" ? n.connection_status : void 0 });
          }
          let h = x(n, "sources").find((y) => mn(y) && y.type === "git_repository"), [D, T] = mn(h) && typeof h.url === "string" ? lxe(h.url)?.split("/") ?? [] : [], O = D && T ? { owner: D, name: T } : void 0, N = P(n);
          return [{ id: C, title: typeof n.title === "string" ? n.title : "", updated_at: I, status: b, ...Mnt(n.environment_kind) && { environment_kind: n.environment_kind }, ...O !== void 0 && { repository: O }, ...N !== void 0 && { branch: N } }];
        }), truncated: d ? typeof f.next_cursor === "string" && f.next_cursor !== "" : f.has_more === true };
      }
      let p = await P5t(d ? `/v1/code/sessions/${e.session_id}` : `/v1/sessions/${e.session_id}`, { signal: a, context: s, maxResponseBytes: U, olderApi: !d, isBackground: u }), v = I5t(p, u);
      if (v !== null) return v;
      let A = p.ok ? p.data : void 0, c = d ? mKt(A) : A;
      if (!mn(c)) return PC("not_found");
      let w = P(c);
      return { status: "ok", ...typeof c.title === "string" && c.title !== "" && { title: c.title }, ...w !== void 0 && { branch: w }, ...Mnt(c.environment_kind) && { environment_kind: c.environment_kind } };
    }), o = r.status === "unavailable" ? r.reason ?? "failed" : void 0;
    switch (e.subtype) {
      case "list_cloud_sessions":
        if (o === void 0) g("sdk_list_cloud_sessions");
        else m("sdk_list_cloud_sessions", o);
        break;
      case "get_cloud_session":
        if (o === void 0) g("sdk_get_cloud_session");
        else m("sdk_get_cloud_session", o);
        break;
    }
    return r;
  }
  async bounded(e, s, r) {
    if (this.inFlight >= M) return PC("temporarily_unavailable");
    this.inFlight++;
    let o = cp(s.abortController);
    try {
      let a = await Pe(r(o.signal), F);
      if (a !== void 0) return a;
      return o.abort(), PC("temporarily_unavailable");
    } catch (a) {
      let { kind: u, status: _ } = ui(a), d = wg(a) ?? "error";
      if (t(`[cloud-sessions] ${e} failed: ${d} ${u} ${_ ?? "no status"}`, { level: "error" }), u === "other" && !o.signal.aborted && !ZH(a) && !this.reported.has(d)) this.reported.add(d), l(new R(`[cloud-sessions] ${e} failed: ${d}`, "a cloud-session read failed with an internal error"));
      let p = u !== "other" && _ === void 0 && !ZH(a);
      return PC(o.signal.aborted || p ? "temporarily_unavailable" : "failed");
    } finally {
      this.inFlight--;
    }
  }
}
function Xcr(e, s) {
  if (typeof s !== "string" || s.length > L || !iAe.test(s)) throw new Rr(`${e}: session_id is not a cloud session id`);
}
async function Jcr(e) {
  if (await T6e() !== void 0) return PC("started_by_session");
  if (Ae() !== "firstParty") return PC("provider");
  if (i.CLAUDE_CODE_EVAL_CONFINED) return PC("evaluation_run");
  if (_t()) return PC("nonessential_traffic");
  if (await Dy(), rre() !== null) switch (m_e() ? "route_missing" : Xc(kQ.policy)) {
    case "org_denied":
      if (e) await SU("allow_remote_sessions", "cloud_session");
      return PC("policy");
    case "latched":
      return PC("policy", V);
    case "route_missing":
      return PC("policy_unverified", z);
    default:
      return PC("policy_unverified");
  }
  if (a_()) {
    if (!ibn()) return PC("failed", q);
    let s = bKt();
    if (s === "unknown") return PC("policy_unverified");
    return PC("not_signed_in", s === "not_ldr" ? X : j);
  }
  return null;
}
async function P5t(e, s) {
  s.signal.throwIfAborted();
  let r = s.withDeviceProof ? (await Oz())["X-Trusted-Device-Token"] : void 0, o = { ...s.olderApi && { "anthropic-beta": yKt }, ...r !== void 0 && { "X-Trusted-Device-Token": r } };
  return s.signal.throwIfAborted(), jt.get(e, { auth: "teleport-org", ...Object.keys(o).length > 0 && { headers: o }, maxRedirects: 0, validateStatus: () => true, timeout: s.timeoutMs ?? G, maxContentLength: s.maxResponseBytes, signal: s.signal, isBackground: s.isBackground, credentials: s.context.credentials, storageV5: s.context.storageV5 });
}
function I5t(e, s) {
  if (!e.ok) switch (e.reason) {
    case "data-residency":
      return PC("provider");
    case "essential-traffic-only":
      return PC("nonessential_traffic");
    case "no-auth":
      return PC("not_signed_in");
  }
  switch (e.status) {
    case 200:
      return null;
    case 401:
      return PC(s ? "temporarily_unavailable" : "sign_in_expired");
    case 403:
      return PC("forbidden");
    case 404:
      return PC("not_found");
    case 429:
      return PC("temporarily_unavailable");
    default:
      return PC(e.status >= 500 ? "temporarily_unavailable" : "failed");
  }
}
function PC(e, s = H[e]) {
  return { status: "unavailable", reason: e, message: s };
}
function x(e, s) {
  let r = mn(e.config) ? e.config : e.session_context, o = mn(r) ? r[s] : void 0;
  return Array.isArray(o) ? o : [];
}
function P(e) {
  let s = x(e, "outcomes").find((a) => mn(a) && a.type === "git_repository"), r = mn(s) ? s.git_info : void 0, o = mn(r) && Array.isArray(r.branches) ? r.branches[0] : void 0;
  return typeof o === "string" && o !== "" ? o : void 0;
}
export {
  I5t,
  Jcr,
  P5t,
  PC,
  Tmi,
  Xcr
};
