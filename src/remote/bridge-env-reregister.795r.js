// remote/bridge-env-reregister.795r.js — Claude Code 2.1.310 模块 chunk-795rgdex.js
import { Dt } from "../fs/content-encoding.v6wj.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { i5o, tbn } from "../mcp/allowed-warning.j2d4.js";
import { wn } from "../context/not-admin-owned.ersa.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { m, p, po } from "../telemetry/chunk-wn8xtaqg.js";
import { mb } from "../shared/chunk-cg45s1mf.js";
import { qqe } from "../git/utf-8.vh7e.js";
import { By, pp, Yl } from "../artifacts/chunk-m8t7qekn.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Y } from "../shared/async-hooks.923e.js";
import { St, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { LGr, y_e, Rzo, Oh, tI, jU, $wt } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { mY, $De } from "./untrusted-device.5vc7.js";
import { k_e, gGt } from "../shell/bridge-folder-already-served.sc9q.js";
import { Vms } from "../mcp/bridge-host-profile-collect.cy2w.js";
import { Hs, gy } from "./claude-code-remote.yeyj.js";
class VR extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, n, f, h = false) {
    super(e);
    this.name = "BridgeFatalError", this.status = n, this.errorType = f, this.suppressible = h;
  }
}
async function M(e, n, f, h, u, v, E) {
  let b = mY(h.data);
  if (b === void 0) return h;
  let w = false;
  if ($De(b)) {
    f(`[bridge:api] ${E}: 403 untrusted_device, enrolling this computer and retrying`);
    let R = await e.recover(u);
    if (R) {
      let A = await v(n(), R), r = A.status === 403 ? mY(A.data) : void 0;
      if (r === void 0) return A;
      b = r, w = true, f(`[bridge:api] ${E}: retry after enrollment also got untrusted_device`);
    }
  }
  throw new VR(`${E}: ${e.hint(b, { justEnrolled: w })}`, 403, "untrusted_device");
}
function Uoo(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let f = 0, h = 100;
  async function u(r, i) {
    let o = { Authorization: `Bearer ${r}`, "Content-Type": "application/json", "anthropic-version": "2023-06-01", "anthropic-beta": i5o.header, "x-environment-runner-version": e.runnerVersion, "User-Agent": Hs() }, s = i ?? await e.getTrustedDeviceToken?.();
    if (s) o["X-Trusted-Device-Token"] = s;
    return o;
  }
  function v() {
    let r = e.getAccessToken();
    if (!r) throw Error(k_e);
    return r;
  }
  async function E(r, i, o) {
    let s = o === "enroll_and_retry" ? e.untrustedDevice : void 0, g = s ? await e.getTrustedDeviceToken?.() : void 0, _ = v(), y = await r(_, g);
    if (y.status === 403 && s) return M(s, v, n, y, g, r, i);
    if (y.status !== 401) return y;
    if (!e.onAuth401) return n(`[bridge:api] ${i}: 401 received, no refresh handler`), y;
    if (n(`[bridge:api] ${i}: 401 received, attempting token refresh`), await e.onAuth401(_)) {
      n(`[bridge:api] ${i}: Token refreshed, retrying request`);
      let D = v(), P = await r(D, g);
      if (P.status === 403 && s) return M(s, v, n, P, g, r, i);
      if (P.status !== 401) return P;
      n(`[bridge:api] ${i}: Retry after refresh also got 401`);
    } else n(`[bridge:api] ${i}: Token refresh failed`);
    return y;
  }
  let b = { async registerBridgeEnvironment(r, i) {
    return po("bridge_environment_register", async () => {
      n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
      let o, s = r.getToolHostAdvert?.() ?? { kind: "withdraw" };
      switch (s.kind) {
        case "advertise":
          o = { tool_host: "2", tool_host_cc_version: s.advert.cliVersion, tool_host_platform: s.advert.platform };
          break;
        case "withdraw":
          if (r.reuseEnvironmentId) o = { tool_host: "", tool_host_cc_version: "", tool_host_platform: "", tool_host_blocker: "" };
          break;
        case "unknown":
          break;
      }
      let g = { machine_name: r.machineName, ...r.machineId != null && { machine_id: r.machineId }, directory: r.dir, branch: r.branch, git_repo_url: qqe(r.gitRepoUrl), max_sessions: r.maxSessions, metadata: { worker_type: r.workerType, ...r.machineId != null && { machine_id: r.machineId }, ...o }, ...r.hostProfile && { host: r.hostProfile }, ...r.reuseEnvironmentId && { environment_id: r.reuseEnvironmentId } }, _ = await E(async (y, T) => Dt.post(`${e.baseUrl}/v1/environments/bridge`, g, { headers: await u(y, T), timeout: 15e3, signal: i, validateStatus: (D) => D < 500 }), "Registration", "enroll_and_retry");
      if (_.status === 409 && $wt(_.data) === gGt) throw new VR(jU(_.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, gGt);
      return k(_.status, _.data, "Registration", _.headers), n(`[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`), n(`[bridge:api] >>> ${LGr({ ...g, ...g.host && { host: { tools: g.host.tools.length, mcp: g.host.mcp_servers?.length ?? 0 } } })}`), n(`[bridge:api] <<< ${LGr(_.data)}`), _.data;
    }, x);
  }, async pollForWork(r, i, o, s, g) {
    By(r, "environmentId");
    let _ = f;
    f = 0;
    let y = {};
    if (s !== void 0) y.reclaim_older_than_ms = s;
    if (g !== void 0) y.poll_interval_ms = g;
    let T = await Dt.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, { headers: await u(i), params: Object.keys(y).length > 0 ? y : void 0, timeout: 1e4, signal: o, validateStatus: (P) => P < 500 });
    if (k(T.status, T.data, "Poll", T.headers), !T.data) {
      if (f = _ + 1, f === 1 || f % h === 0) n(`[bridge:api] GET .../work/poll -> ${T.status} (no work, ${f} consecutive empty polls)`);
      return null;
    }
    let D = T.data.data?.mode;
    if (D != null) {
      let { id: P, data: O } = T.data;
      return n(`[bridge:api] GET .../work/poll -> ${T.status} workId=${y_e(P)} type=${Rzo(O.type)} mode=${Rzo(D)} sessionId=${y_e(O.id)}`), T.data;
    }
    return n(`[bridge:api] GET .../work/poll -> ${T.status} workId=${T.data.id} type=${T.data.data?.type}${T.data.data?.id ? ` sessionId=${T.data.data.id}` : ""}`), n(`[bridge:api] <<< ${LGr(T.data)}`), T.data;
  }, async acknowledgeWork(r, i, o, s = i) {
    By(r, "environmentId"), By(i, "workId"), n(`[bridge:api] POST .../work/${s}/ack`);
    let g = await Dt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/ack`, {}, { headers: await u(o), timeout: 1e4, validateStatus: (_) => _ < 500 });
    k(g.status, g.data, "Acknowledge", g.headers), n(`[bridge:api] POST .../work/${s}/ack -> ${g.status}`);
  }, async stopWork(r, i, o, s, g = i) {
    By(r, "environmentId"), By(i, "workId"), n(`[bridge:api] POST .../work/${g}/stop force=${s}`);
    let _ = await Dt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/stop`, { force: s }, { headers: await u(o), timeout: 1e4, validateStatus: (y) => y < 500 });
    k(_.status, _.data, "StopWork"), n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`);
  }, async deregisterEnvironment(r) {
    By(r, "environmentId"), n(`[bridge:api] DELETE /v1/environments/bridge/${r}`);
    let i = await E(async (o, s) => Dt.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, { headers: await u(o, s), timeout: 1e4, validateStatus: (g) => g < 500 }), "Deregister", "pass_through");
    k(i.status, i.data, "Deregister"), n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${i.status}`);
  }, async markEnvironmentOffline(r, i) {
    By(r, "environmentId");
    let o = `/v1/environments/bridge/${r}/offline`;
    n(`[bridge:api] POST ${o}`);
    let s = await Dt.post(`${e.baseUrl}${o}`, void 0, { headers: await u(i), timeout: 5e3, validateStatus: (g) => g < 500 });
    k(s.status, s.data, "MarkOffline"), n(`[bridge:api] POST ${o} -> ${s.status}`);
  }, async archiveSession(r) {
    By(r, "sessionId");
    let i = e.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${Yl(r)}/archive` : `/v1/sessions/${pp(r)}/archive`;
    n(`[bridge:api] POST ${i}`);
    let o = await E(async (s, g) => Dt.post(`${e.baseUrl}${i}`, {}, { headers: await u(s, g), timeout: 1e4, validateStatus: (_) => _ < 500 }), "ArchiveSession", "pass_through");
    if (o.status === 409) {
      n(`[bridge:api] POST ${i} -> 409 (already archived)`);
      return;
    }
    k(o.status, o.data, "ArchiveSession"), n(`[bridge:api] POST ${i} -> ${o.status}`);
  }, async reconnectSession(r, i, o) {
    return po("bridge_session_reconnect", async () => {
      By(r, "environmentId"), By(i, "sessionId"), n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${i}`);
      let s = await E(async (g, _) => Dt.post(`${e.baseUrl}/v1/environments/${r}/bridge/reconnect`, { session_id: i }, { headers: await u(g, _), timeout: 1e4, signal: o, validateStatus: (y) => y < 500 }), "ReconnectSession", "enroll_and_retry");
      k(s.status, s.data, "ReconnectSession"), n(`[bridge:api] POST .../bridge/reconnect -> ${s.status}`);
    }, x);
  }, async heartbeatWork(r, i, o) {
    By(r, "environmentId"), By(i, "workId"), n(`[bridge:api] POST .../work/${i}/heartbeat`);
    let s = await Dt.post(`${e.baseUrl}/v1/environments/${r}/work/${i}/heartbeat`, {}, { headers: await u(o), timeout: 1e4, validateStatus: (g) => g < 500 });
    return k(s.status, s.data, "Heartbeat"), n(`[bridge:api] POST .../work/${i}/heartbeat -> ${s.status} lease_extended=${s.data.lease_extended} state=${s.data.state}`), s.data;
  } };
  function w(r) {
    return r instanceof Error && "status" in r && typeof r.status === "number" ? `http_${r.status}` : x(r);
  }
  b.refuseToolHost = async (r, i, o, s) => {
    let g = `[bridge:api] POST /v1/code/sessions/${y_e(r)}/tool_hosts/refuse workId=${y_e(i)} code=${o}`;
    try {
      if (Te() !== "firstParty" || St() || !mb("allow_remote_control")) {
        n(`${g} not sent`);
        return;
      }
      await po("bridge_tool_host_refuse", async () => {
        By(r, "sessionId"), n(g);
        let _ = await Dt.post(`${e.baseUrl}/v1/code/sessions/${Yl(r)}/tool_hosts/refuse`, { work_id: i, code: o }, { headers: { ...await u(v()), "anthropic-beta": tbn.header, "anthropic-client-feature": "ccr" }, timeout: 5e3, signal: s, maxRedirects: 0, validateStatus: (y) => y < 500 });
        k(_.status, _.data, "RefuseToolHost"), n(`${g} -> ${_.status}`);
      }, w);
    } catch (_) {
      n(`${g} failed (${w(_)}); not retried`);
    }
  };
  async function R(r) {
    let { "anthropic-beta": i, ...o } = await u(r);
    return { ...o, "anthropic-client-platform": gy(), "anthropic-client-version": e.runnerVersion };
  }
  function A(r) {
    let i = r["retry-after"];
    return typeof i === "string" ? Oh(i) : void 0;
  }
  return b.sessionsWatch = { async mintResumeToken(r, i) {
    let { status: o, data: s, headers: g } = await Dt.get(`${e.baseUrl}/v1/code/sessions?limit=1`, { headers: await R(r), timeout: 1e4, signal: i, maxRedirects: 0, validateStatus: () => true });
    n(`[bridge:api] GET /v1/code/sessions?limit=1 -> ${o}`);
    let _ = s !== null && typeof s === "object" && "resume_token" in s ? s.resume_token : void 0;
    return { status: o, retryAfterMs: A(g), ...typeof _ === "string" && { resumeToken: _ } };
  }, async open(r, i, o) {
    let { status: s, data: g, headers: _ } = await Dt.get(`${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`, { headers: { ...await R(r), Accept: "text/event-stream", "Last-Event-ID": i }, responseType: "stream", timeout: 0, signal: o, maxRedirects: 0, validateStatus: () => true });
    n(`[bridge:api] GET /v1/code/sessions/watch -> ${s}`);
    let y = _["content-type"];
    if (s === 200 && typeof y === "string" && y.includes("text/event-stream")) return { status: s, body: g };
    return g.destroy(), { status: s, retryAfterMs: A(_) };
  } }, b;
}
function k(e, n, f, h) {
  if (e === 200 || e === 204) return;
  let u = jU(n), v = B(n);
  switch (e) {
    case 401:
      throw new VR(`${f}: Authentication failed (401)${u ? `: ${u}` : ""}. ${k_e}`, 401, v);
    case 403:
      if ($Pt(v)) throw new VR("Remote Control session expired.", 403, v);
      throw new VR(`${f}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`, 403, v, tI(n)?.includes("external_poll_sessions"));
    case 404:
      throw new VR(u ?? `${f}: Not found (404). Remote Control may not be available for this organization.`, 404, v);
    case 410:
      throw new VR(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");
    case 429: {
      let E = Oh(typeof h?.["retry-after"] === "string" ? h["retry-after"] : void 0);
      throw Object.assign(Error(`${f}: Rate limited (429). Polling too frequently.`), E !== void 0 ? { status: e, retryAfterMs: E } : { status: e });
    }
    default:
      throw Object.assign(Error(`${f}: Failed with status ${e}${u ? `: ${u}` : ""}`), { status: e });
  }
}
function $Pt(e) {
  if (!e) return false;
  return e.includes("expired") || e.includes("lifetime");
}
function Boo(e) {
  return e.suppressible;
}
function x(e) {
  if (e instanceof VR) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === k_e) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function B(e) {
  if (e && typeof e === "object") {
    if ("error" in e && e.error && typeof e.error === "object" && "type" in e.error && typeof e.error.type === "string") return e.error.type;
  }
  return;
}
var $On = 3, Nms = 20, H = 6e4, I = 36e5, U = 9e5, j = 864e5, V = 0.25, W = 36e5;
function Fhr(e, n = Date.now(), f = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1e3 < W) return;
  let h = e * 1e3, v = Math.min(Math.max(h / 10, U), j) * (1 + V * f());
  return n + h - v;
}
var Fms = 3e5, $ms = 36e5, Ums = 3, UOn = 5;
async function $hr({ api: e, config: n, environmentId: f, activeSessions: h, attempt: u, trigger: v, signal: E }) {
  if (v === "tool_host_advert_changed") t(`[bridge:poll] What this environment advertises changed; re-registering environment ${f} (attempt ${u})`);
  else if (v === "proactive") t(`[bridge:poll] Environment secret expires soon; re-registering environment ${f} to renew it (attempt ${u})`, { level: "info" });
  else t(`[bridge:poll] Poll returned ${v === "poll_401" ? 401 : 404}; re-registering environment ${f} (attempt ${u}/${$On})`, { level: "warn" });
  let b, w;
  try {
    let { hostProfile: r, ...i } = n, o = await Vms(r);
    n.hostProfile = o;
    let s = n.getToolHostAdvert?.();
    w = s, b = await e.registerBridgeEnvironment({ ...i, ...o && { hostProfile: o }, ...s && { getToolHostAdvert: () => s }, reuseEnvironmentId: f }, E);
  } catch (r) {
    let i = r instanceof Error && r.message === k_e ? 401 : N(r), o = i !== void 0;
    if (t(`[bridge:poll] Re-registration of ${f} ${o ? "rejected" : "failed transiently"}: ${d(r)}`, { level: o ? "error" : "warn" }), !o && w !== void 0 && w.kind !== "unknown" && !C(w, n.registeredToolHostAdvert)) n.registeredToolHostAdvert = "unconfirmed";
    if (E.aborted) return { outcome: "transient" };
    if (a("tengu_bridge_env_reregister", { attempt: u, outcome: o ? S("register_rejected") : S("register_transient"), trigger: c(v) }), i !== void 0) {
      if (v === "tool_host_advert_changed") p("bridge_env_reregister", "advert_register_rejected");
      else if (v === "proactive") p("bridge_env_reregister", "proactive_register_rejected");
      else m("bridge_env_reregister", "register_rejected");
      return { outcome: "fatal", reason: "register_rejected", status: i, message: d(r) };
    }
    return { outcome: "transient", retryAfterMs: joo(r) };
  }
  if (b.environment_id !== f) {
    if (t(`[bridge:poll] Re-registration returned ${b.environment_id}, not ${f}; not adopting it`, { level: "warn" }), a("tengu_bridge_env_reregister", { attempt: u, outcome: S("replaced"), trigger: c(v) }), v === "tool_host_advert_changed") p("bridge_env_reregister", "advert_replaced");
    else if (v === "proactive") p("bridge_env_reregister", "proactive_replaced");
    else m("bridge_env_reregister", "replaced");
    return await e.deregisterEnvironment(b.environment_id).catch((r) => t(`[bridge:poll] Failed to delete replacement environment ${b.environment_id}: ${d(r)}`, { level: "warn" })), { outcome: "fatal", reason: "replaced" };
  }
  Uhr(n, w, true);
  let R = [...h.keys()];
  if (a("tengu_bridge_env_reregister", { attempt: u, outcome: S("reregistered"), active_sessions: R.length, trigger: c(v) }), Y("info", "bridge_env_reregistered", { attempt: u, active_sessions: R.length, trigger: v }), v === "proactive") return t(`[bridge:poll] Environment ${f} re-registered in place; secret renewed`, { level: "info" }), { outcome: "reregistered", environmentSecret: b.environment_secret, ...b.environment_secret_expires_in !== void 0 && { environmentSecretExpiresIn: b.environment_secret_expires_in }, pendingRequeues: [] };
  t(`[bridge:poll] Environment ${f} re-registered in place; re-queuing ${R.length} session(s)`, { level: "info" });
  let A = [];
  for (let r of R) {
    if (E.aborted) break;
    if (!h.has(r)) continue;
    if (await BOn(e, f, r, E) !== "done") A.push(r);
  }
  return { outcome: "reregistered", environmentSecret: b.environment_secret, ...b.environment_secret_expires_in !== void 0 && { environmentSecretExpiresIn: b.environment_secret_expires_in }, pendingRequeues: A };
}
async function Bms({ api: e, config: n, environmentId: f, activeSessions: h, pacing: u, signal: v }) {
  let E;
  try {
    let w = n.getToolHostAdvert?.();
    if (w === void 0 || w.kind === "unknown") return;
    if (C(w, n.registeredToolHostAdvert)) {
      u.failures = 0;
      return;
    }
    let R = u.notBefore - Date.now();
    if (R > 0 && R <= I) return;
    E = await $hr({ api: e, config: n, environmentId: f, activeSessions: h, attempt: u.failures + 1, trigger: "tool_host_advert_changed", signal: v });
  } catch (w) {
    if (!v.aborted) l(w);
  }
  let b = E?.outcome === "reregistered" ? E : void 0;
  return u.failures = b ? 0 : u.failures + 1, u.notBefore = Date.now() + Math.min(H * 2 ** u.failures, I), b;
}
function Uhr(e, n, f) {
  if (n === void 0 || n.kind === "unknown" && f) return;
  let h = e.registeredToolHostAdvert, u = n.kind === "advertise" ? { kind: "advertise", advert: n.advert } : { kind: "withdraw" };
  if (e.registeredToolHostAdvert = u, !C(u, h ?? { kind: "withdraw" })) a("tengu_bridge_tool_host_advert", { advertised: u.kind === "advertise" });
}
async function BOn(e, n, f, h) {
  try {
    return await e.reconnectSession(n, f, h), "done";
  } catch (u) {
    let v = Woo(u);
    if (t(`[bridge:poll] reconnectSession(${f}) after re-registration ${v ? "rejected" : "failed transiently"}: ${d(u)}`, { level: "warn" }), v) return "done";
    return h.aborted ? "aborted" : "retry";
  }
}
function C(e, n) {
  if (n === void 0 || n === "unconfirmed") return false;
  return e.kind === "advertise" && n.kind === "advertise" ? wn(e.advert, n.advert) : e.kind === n.kind;
}
function joo(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number" ? e.retryAfterMs : void 0;
}
function Woo(e) {
  return N(e) !== void 0;
}
function N(e) {
  if (e instanceof VR) return e.status;
  if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) return e.status;
  return;
}
export {
  $On,
  $Pt,
  $hr,
  $ms,
  BOn,
  Bms,
  Boo,
  Fhr,
  Fms,
  Nms,
  UOn,
  Uhr,
  Ums,
  Uoo,
  VR,
  Woo,
  joo
};
