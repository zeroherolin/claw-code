// artifacts/slate-lantern-hush.2sqk.js — Claude Code 2.1.310 模块 chunk-2sqk3x6d.js
import { nt, U, V, tt, IX, Yp, D1, O3e, ye } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { _, qo, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { jk, yhn, Z, YJs, tZn, XJs, JJs } from "./same-account.bxg8.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { NK, l } from "./cowritten-artifact-html.thm2.js";
import { Hi } from "../context/chunk-vhc5wsq3.js";
import { jt } from "../shared/chunk-nfgwaxf2.js";
import { Fg, NF, Xv, dI, J_e, rc, k, Qk } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { un } from "../fs/async-hooks.2k4e.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Ao, xai, Pai, Iai, Oai, GF, lr, vZ, xn, eC, uA } from "./cobalt-plinth-lovage.hxm5.js";
import { eI, UGo, ptt } from "./artifact-share-status.jp2v.js";
import { wDs, GIr, TDs, ADs, FOr, $Or, UOr, BOr, lsn, jOr, el, D_ } from "../core/conversation-engine.31gx.js";
import { hht, Q7e } from "../git/bridge-child-tool-diff.m7a8.js";
import { z2e, pGs } from "../hooks/plugin-function-hooks-switch-followed.e90f.js";
import { HC, FHt, qtn, Lme, tAr, nAr, DYe, Mq, Hd, Nme, Fme, $me, Vte } from "./cobalt-plinth-samphire.3k3d.js";
import { LHt, qbo, IBn, qTr, Hme, Oq, PYe, IYe, $tn, YTr, LBn, kP, zxs, C9, Vxs } from "./template-instance.kxgt.js";
import { Dpt } from "./artifact-comment-reply.1d3x.js";
import { Cvs, Xwr, Tvs, UOt, BOt, LLn, Avs, Rvs, xvs, Pvs, Afo, Rfo, Ivs, Ovs, Mvs, sB, nEr, Zct, WOt, Lvs, Nvs, Fvs, Bvs, kb, jvs, $Ln, u9, Wvs, zvs } from "../tasks/artifact-changed.p598.js";
import { AEe, REe, xEe } from "../shared/chunk-ed5agf3q.js";
import { Fct, dwr, GDn, PIe, AOt, bJt, wJt } from "../tools/monitor-tool.fwss.js";
import { ROt, zDn, EEe, jws, Epo, hwr, Gws, Vws, N9e, sEs, F9e, EN, PT, dEs, eLn, AJt, p1e, dme, uEs } from "./madrone-spindle-corbel.r0mn.js";
import { REs, MEs } from "./artifact-comments-autoreact.vyrr.js";
import { mw } from "../shared/chunk-1eytjpfq.js";
import { xpo, Ppo, l7, hEs, $ct, $9e, Ipo } from "./artifact-comment-monitor.qvwj.js";
import { xJt, _wr } from "../shared/chunk-znc70tb3.js";
import { Swr } from "../shared/chunk-5ym902nn.js";
import { PEe, Iae, GOt, p9, YJt, WLn, _y, Sy, eut, I_, Qvs, iB, NIe, yD, tks, nks } from "../mcp/artifact-summon-arm-emit.jfmv.js";
import { oNn } from "../shared/chunk-9fnb8y66.js";
import { m9 } from "../shared/bg-session.dsjm.js";
import { Ps } from "../shared/chunk-bkvejkkf.js";
import { o, E, M, oe, u } from "../vendor/zod/string-format.k395.js";
var si = "Could not register a durable wake subscription; publishing and reading still work.", ai = { invalid_slug: "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.", trigger_limit: "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.", no_originator: "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) — or if the server-side policy changes — a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.", client_policy: "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.", no_auth: "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.", session_not_found: "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.", unavailable_in_deployment: "Wake subscriptions are not provisioned in this deployment; retrying will not help.", no_wake_minter: "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.", tool_not_offered: "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.", org_not_enabled: "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.", relay_not_served: "This cloud session cannot register wake subscriptions, so none was registered; retrying will not help while that holds.", subscribe_forbidden: "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.", relay_unavailable: "This cloud session reaches the artifact service only through its session gateway, and the gateway refused to carry the wake subscription (commonly because wake subscriptions are not enabled there for the user's organization), so none was registered and retrying will not help while that holds. Later publishes in this session are not armed; only an explicit watch re-checks with the gateway.", session_device_bound: "This cloud session is bound to the desktop it was started from (Cowork or `claude --cloud`), and that device's trusted-device check means activity on the artifact can't wake it, so no wake subscription was registered. Publishing and reading still work; retrying won't help in this session.", aborted: "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.", watch_trigger_release_failed: "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released — it counts against this session until the session ends." }, ui = new Map(Object.entries(ai));
function UDn(e, n) {
  let r = ui.get(e) ?? si;
  if (n === void 0) return r;
  let s = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${s}`;
}
function tpo(e) {
  if (e.status === void 0) return;
  if (e.relayed) return e.fromGateway ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service` : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0 ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer` : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
var ci = /* @__PURE__ */ new Set(["no_originator", "client_policy", "no_auth", "session_not_found", "unavailable_in_deployment", "tool_not_offered", "org_not_enabled", "relay_not_served", "subscribe_forbidden", "relay_unavailable", "session_device_bound", "invalid_slug"]);
function Qbr(e) {
  return ci.has(e) ? null : UOr;
}
function Fws(e) {
  let { armsInFlight: n } = Z().durable;
  n.set(e, (n.get(e) ?? 0) + 1);
}
function $ws(e, n) {
  let r = Z().durable, s = (r.armsInFlight.get(e) ?? 1) - 1;
  if (s > 0) r.armsInFlight.set(e, s);
  else r.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching") return rpo(e), { settled: "registered" };
  let d = n === void 0 ? "arm_threw" : n.reason;
  if (d === "stop_latched" || r.stopLatches.isStopped(e)) return { settled: "stopped" };
  let a = r.armOutcomes.get(e), h = n?.outcome === "failed" && n.latched && a?.reason === d ? a : void 0, b = (n?.outcome === "failed" ? tpo(n) : void 0) ?? h?.detail, v = (n?.outcome === "failed" ? n.serverMessage : void 0) ?? h?.serverMessage, S = { reason: d, ...b !== void 0 && { detail: b }, ...v !== void 0 && { serverMessage: v } };
  return BOr(r.armOutcomes, e, { ...S, at: Date.now() }, FOr), s > 0 ? { settled: "pending", ...S } : { settled: "unregistered", ...S };
}
function npo(e) {
  let n = Z().durable;
  for (let [r, s] of n.armOutcomes) if (s.reason === e) n.armOutcomes.delete(r);
  for (let r of n.announcedArmFailures) if (r.endsWith(`:${e}`)) n.announcedArmFailures.delete(r);
}
function rpo(e) {
  let n = Z().durable;
  n.armOutcomes.delete(e), jOr(n.announcedArmFailures, e);
}
function Wn(e, n) {
  return lsn(Z().durable.announcedArmFailures, `${e}:${n}`, $Or);
}
function Uws(e) {
  let n = Z().durable, r = [], s = /* @__PURE__ */ new Set();
  for (let d of n.armsInFlight.keys()) {
    if (!Ln(n, d, e)) continue;
    r.push({ slug: d, state: "arming" }), s.add(d);
  }
  for (let [d, a] of n.armOutcomes) {
    if (!Ln(n, d, e) || s.has(d)) continue;
    r.push({ slug: d, state: "failed", reason: a.reason, ...a.detail !== void 0 && { detail: a.detail }, ...a.serverMessage !== void 0 && { serverMessage: a.serverMessage }, at: a.at });
  }
  return r;
}
function Ln(e, n, r) {
  return (r === void 0 || n === r) && !e.rows.has(n) && !e.stopLatches.isStopped(n);
}
class In {
  working = Ps({ working: false });
  userPrompt = Ps({ waitingFor: void 0 });
}
var Se = new nt(() => new In());
function Nct(e, n) {
  Se.of(e).working.setState((r) => r.working === n ? r : { working: n });
}
function NDn(e) {
  return Se.of(e).working.getState().working;
}
function Xbr(e, n) {
  return Se.of(e).working.subscribe(n);
}
function FDn(e, n) {
  Se.of(e).userPrompt.setState((r) => r.waitingFor === n ? r : { waitingFor: n });
}
function $Dn(e) {
  return epo(e) !== void 0;
}
function epo(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}
function Nws(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}
var Mt = 120, On = `act:${Mt}`, di = "act:0";
function Mn(e) {
  if (!e.activityOkReported) e.activityOkReported = true, g("artifact_activity_emit");
}
function Pn(e, n, r) {
  n(r), Mn(e);
}
function Dn(e, n, r) {
  n(r), Mn(e);
}
function Ot(e, n) {
  for (let r of e.activitySenders.values()) Pn(e, r, n ? On : di);
  for (let r of e.agentActivitySinks.values()) Dn(e, r, n ? Mt : 0);
}
function Fn(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Pt(e) {
  if (Fn(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  e.activityRefreshTimer = setInterval((n) => Ot(n, true), e.activityRefreshMs, e), e.activityRefreshTimer.unref?.();
}
function Vn(e) {
  if (Fn(e) === 0 && e.activityRefreshTimer !== void 0) clearInterval(e.activityRefreshTimer), e.activityRefreshTimer = void 0;
}
function li(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      clearTimeout(e.activityClearTimer), e.activityClearTimer = void 0;
      return;
    }
    e.activityOnsetTimer ??= setTimeout((r) => {
      r.activityOnsetTimer = void 0, Ot(r, true), Pt(r);
    }, e.activityEdgeDebounceMs, e), e.activityOnsetTimer.unref?.();
  } else {
    if (e.activityOnsetTimer !== void 0) {
      clearTimeout(e.activityOnsetTimer), e.activityOnsetTimer = void 0;
      return;
    }
    e.activityClearTimer ??= setTimeout((r) => {
      if (r.activityClearTimer = void 0, r.activityRefreshTimer !== void 0) clearInterval(r.activityRefreshTimer), r.activityRefreshTimer = void 0;
      Ot(r, false);
    }, e.activityEdgeDebounceMs, e), e.activityClearTimer.unref?.();
  }
}
function Nn() {
  return U();
}
function Un(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = Nn();
  e.activityUnsubscribe = Xbr(n, () => {
    try {
      li(e, NDn(n));
    } catch (r) {
      l(r);
    }
  });
}
function Gn(e) {
  return NDn(Nn()) && e.activityOnsetTimer === void 0 || e.activityClearTimer !== void 0;
}
function $n(e, n, r) {
  if (e.disposed) return;
  if (Un(e), e.activitySenders.set(n, r), tks(e, n), Gn(e)) Pn(e, r, On), Pt(e);
}
function Hn(e, n, r) {
  if (e.activitySenders.get(n) === r) e.activitySenders.delete(n), nks(e, n), Vn(e);
}
function Xe(e, n, r) {
  if (e.disposed) return;
  if (Un(e), e.agentActivitySinks.set(n, r), Gn(e)) Dn(e, r, Mt), Pt(e);
}
function Qe(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) e.agentActivitySinks.delete(n), Vn(e);
}
var Ze = "frame-sync.v1";
function Pe(e, n) {
  let r = new URL("/api/frame/sync", Iai());
  if (r.searchParams.set("slug", e), n?.commentHint === true) r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === true) r.searchParams.set("vn", LHt);
  return dwr(r);
}
var Dt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
  if (!Dt.test(e)) return false;
  let n = e.split(".", 4)[2];
  return n !== void 0 && pi(n).role.endsWith("_agent");
}
var fi = 28;
function pi(e) {
  let n = e.length - fi;
  if (n <= 0 || e.slice(n, n + 4) !== "_id_") return { role: e };
  let r = e.slice(n + 4);
  return Dpt.test(r) ? { role: e.slice(0, n), id: r } : { role: "" };
}
function et(e) {
  let n = e.split(".", 6)[4];
  if (n === void 0 || !/^[0-9]{1,12}$/.test(n)) return;
  let r = Number(n);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
var mi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
  let [n, r] = e.split(".", 3);
  if (n === void 0 || r === void 0 || r === "") return;
  let s = Buffer.from(n, "base64url").toString("utf8");
  if (!mi.test(s) || Buffer.from(s, "utf8").toString("base64url") !== n) return;
  return { accountUuid: s, organizationUuid: r };
}
var hi = 6e4, Kn = "boot_request_error", Ft = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED", jn = "JOIN_DENIED_REASON_DENIED", qn = "JOIN_DENIED_REASON_CAP_INVALID", zn = { on: "socket", detail: "4503", opened: true, uptimeMs: 0, ageMs: 0 }, rt = f(() => u({ kind: o(), slug: o().optional(), actor: o().optional(), payload: oe().optional() })), Vt = f(() => u({ cap: o(), exp: E() })), De = f(() => u({ reason: o() }));
function Nt(e, n) {
  return _({ kind: "activity", slug: e, payload: { busyS: n } });
}
function Yn(e) {
  if (i.CLAUDE_CODE_REMOTE) return "remote";
  if (Oai()) return "cp_override";
  if (wJt(Pe(e)) !== null) return "egress_denied";
  return null;
}
async function Jn(e, n) {
  let r = e.storedCap;
  if (!e.rebootNeeded && r !== void 0 && r.exp * 1e3 - Date.now() > hi) {
    let v = await Qk(e.context.storageV5).catch(() => {
      return;
    });
    if (!n.isCurrent()) return { outcome: "stale" };
    if (Fg(e.owner, v)) return { outcome: "token", token: r.cap, boot: void 0 };
  }
  let s, d = Date.now();
  try {
    s = await kP({ slug: e.slug, env: Ao() }, n.feature, e.abort.signal, { agentPeer: true, ...e.bootedVersion !== void 0 && { lean: { version: e.bootedVersion, mustCarry: (v) => "syncToken" in v } }, speculative: true, credentials: e.context.credentials });
  } catch {
    s = { err: "boot threw", errorCode: Kn };
  }
  if (!n.isCurrent()) return { outcome: "stale" };
  if (s.err !== null) {
    if (Oq(s)) return { outcome: "other_org" };
    if (Hme(s)) return { outcome: "not_found" };
    return { outcome: "boot_failed", status: s.status, noAnswer: s.errorCode === Kn, elapsedMs: Date.now() - d };
  }
  if (s.assetToken === void 0) return { outcome: "public_outside_org" };
  let a = s.data.syncToken, h = typeof a === "string" && Dt.test(a) ? me(a) : void 0;
  if (e.owner !== void 0 && h !== void 0 && !Fg(e.owner, h)) return { outcome: "owner_changed" };
  let b = typeof a === "string" && ve(a) ? h : void 0;
  if (typeof a !== "string" || b === void 0) return { outcome: "not_admitted" };
  return e.owner = b, e.rebootNeeded = false, e.bootedVersion = s.ver, Xn(e, gi(a)), { outcome: "token", token: a, boot: s.data };
}
function gi(e) {
  return { cap: e, exp: et(e) ?? Math.floor((Date.now() + LLn) / 1e3) };
}
function Xn(e, n) {
  let r = Date.now(), s = Math.min(r + LLn, Math.max(r + Avs, n.exp * 1e3));
  e.storedCap = { cap: n.cap, exp: Math.floor(s / 1e3) }, e.capStrikes = 0;
}
function Qn(e, n, r) {
  switch (n) {
    case "ctrl:token_refresh": {
      let s = Vt().safeParse(r);
      if (s.success && ve(s.data.cap) && Fg(e.owner, me(s.data.cap))) Xn(e, { cap: s.data.cap, exp: s.data.exp });
      return true;
    }
    case "ctrl:token_refresh_declined": {
      let s = De().safeParse(r);
      if (s.success && s.data.reason === Ft) e.rebootNeeded = true, e.storedCap = void 0;
      return true;
    }
    default:
      return false;
  }
}
function bi(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0) try {
    kb(e.taskId, e.context.taskRegistry, { quiet: true });
  } catch {
  }
  r("error");
}
function it(e) {
  if (e.stopped = true, e.storedCap = void 0, e.abort.abort(), e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer), e.reconnectTimer = void 0;
  if (e.send = void 0, e.state = "closed", e.taskId !== void 0) {
    let n = e.taskId;
    e.taskId = void 0;
    try {
      kb(n, e.context.taskRegistry, { quiet: true });
    } catch {
    }
  }
}
var _i = 404;
function Si(e) {
  let n = Number(e);
  return n === 1008 || n >= 4e3 && n <= 4999;
}
function Zn(e, n, r) {
  switch (n.on) {
    case "dial_error":
      return n.deterministic ? "refused" : "dropped";
    case "boot":
      if (C9(n.status)) return "unavailable";
      if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket": {
      if (n.detail === BOt) return "revoked";
      if (n.opened) {
        if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
        if (n.detail === UOt && !e.rebootNeeded) return "unavailable";
        return Si(n.detail) ? "refused" : "dropped";
      }
      let s = PIe(n.detail);
      if (s !== null) return C9(s.status) || s.cfMitigated || s.status === _i ? "unavailable" : "refused";
      return n.detail === GDn || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
    }
  }
}
function er(e, n, r) {
  let s = Zn(e, n, r);
  return s === "refused" || s === "revoked";
}
function tr(e, n, r) {
  let s = Zn(e, r, n);
  if (s === "revoked" || s === "refused") e.storedCap = void 0;
  else if (s === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let a = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (e.capStrikes = a ? 0 : e.capStrikes + 1, e.capStrikes >= Rvs) e.storedCap = void 0;
  }
  if (s === "revoked") return { next: "end", reason: "revoked" };
  if (s === "unavailable") {
    let a = e.stalledSince === void 0;
    if (a) e.stalledSince = Date.now(), e.stalls = 0;
    let h = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2), b = Math.min(h * 2, n.stallMaxMs);
    return e.stalls++, { next: "redial", delayMs: Math.round(h + Math.random() * (b - h)), stalled: true, stallRunStarted: a };
  }
  if (e.stalledSince = void 0, s === "refused") {
    if (e.refusals++, e.refusals > n.maxConsecutiveRefusals) return { next: "end", reason: "refused" };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= n.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= n.minUptimeMs) e.backoff = 0;
  }
  let d = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return e.backoff++, { next: "redial", delayMs: Math.round(Math.random() * d), stalled: false, stallRunStarted: false };
}
function Ut(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  e.state = "closed", e.reconnectTimer = setTimeout(vi, n, e, r), e.reconnectTimer.unref?.();
}
function vi(e, n) {
  e.reconnectTimer = void 0, n(e);
}
async function nr(e, n, r, s) {
  let { slug: d } = e, { live: a } = Z(), h = false, b = false, v, S, A = () => b || !s(), x = Date.now(), K = () => h && e.openedAt > 0 ? Date.now() - e.openedAt : 0, L = (R) => {
    if (A()) return;
    b = true;
    let T = K(), P = Date.now() - x;
    if (e.send === v) e.send = void 0, e.state = "closed", e.openedAt = 0;
    r.onEnded(R, { opened: h, uptimeMs: T, ageMs: P });
  };
  try {
    let R = await bJt({ ws: { url: Pe(d, { versionNotices: true }), protocols: [Ze, n] }, headers: { "User-Agent": NF() }, description: r.description, timeout_ms: 0, persistent: true, quietLifecycle: true, ambient: true, handshakeDeadlineMs: r.handshakeDeadlineMs, ...e.taskId !== void 0 && { reuseTaskId: e.taskId }, transform: (T) => (r.onFrame(T), null), keepalive: r.keepalive, onSender: (T) => {
      if (A()) return;
      v = T, e.send = T, e.state = "open", S = (P) => T(Nt(d, P)), Xe(a, r.activitySinkKey, S);
    }, onSenderClosed: () => {
      if (S !== void 0) Qe(a, r.activitySinkKey, S);
      if (v !== void 0 && e.send === v) {
        if (e.send = void 0, e.state === "open") e.state = "closed";
      }
      if (A()) return;
      let T = e.taskId, P = T === void 0 ? void 0 : e.context.taskRegistry.all()[T];
      if (T !== void 0 && P?.status !== "running") {
        L("task_ended");
        return;
      }
      setTimeout(bi, 0, e, A, L).unref?.();
    }, onLifecycle: (T, P) => {
      if (A()) return;
      if (T === "open") {
        h = true, e.everOpened = true, e.openedAt = Date.now(), r.onOpen();
        return;
      }
      L(P);
    } }, e.context);
    if (e.taskId = R.data.taskId, !s()) return kb(R.data.taskId, e.context.taskRegistry, { quiet: true }), { outcome: "stale" };
    return { outcome: "armed" };
  } catch (R) {
    return t(`[${r.label}] connect failed slug=${d}: ${R instanceof Error ? R.name : "error"}`), { outcome: "error", error: R };
  }
}
var wi = "tengu_slate_lantern_hush", Ai = [600, 86400], Ri = [25, 600], yi = 50, ki = f(() => {
  let e = E().optional().catch(void 0);
  return u({ idleAfterS: e, idleKeepaliveS: e });
});
function rr(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}
function Ei() {
  let e = k(wi, null);
  if (typeof e === "string") e = ot(e, false);
  let n = ki().safeParse(e), r = n.success ? n.data : {}, s = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : rr(r.idleAfterS, Ai) * 1e3, d = (r.idleKeepaliveS === void 0 ? yi : rr(r.idleKeepaliveS, Ri)) * 1e3;
  return { idleAfterMs: s, idleKeepaliveMs: d };
}
function Ti(e, n) {
  if (z2e()) return 0;
  let r = Math.max(pGs(), Yp(), IX() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}
function st(e, n, r = Date.now()) {
  let s = Ei();
  if (s.idleAfterMs <= 0) return n;
  return Ti(e, r) >= s.idleAfterMs ? Math.max(s.idleKeepaliveMs, n) : n;
}
var Gt = f(() => u({ tag: o(), ver: o(), replay: M().optional() })), $t = "INVALIDATE_TAG_LIVE", Ht = "INVALIDATE_TAG_SHARED", or = "INVALIDATE_TAG_HEAD", sr = f(() => u({ commentsEmpty: M(), readAtMs: E().int().positive().max(864e13) }));
function Kt(e) {
  return e * 3 + 5e3;
}
function Ci() {
  return i.CLAUDE_CODE_ARTIFACT_PRESENCE ?? k("tengu_brass_plover", false);
}
function at(e) {
  if (!Ci()) return "flag_off";
  return Yn(e);
}
function Ae() {
  return Z().presence;
}
function Fe(e) {
  return !e.stopped && Ae().conns.get(e.slug) === e;
}
function ar(e) {
  let { slug: n, url: r } = e;
  try {
    let s = at(n);
    if (s !== null) {
      if (s !== "flag_off") t(`[artifactPresence] not arming slug=${n}: ${s}`);
      return;
    }
    let d = Ae();
    if (d.declined.has(n)) return;
    let a = AOt(e.context);
    d.dispose = Pi, d.accountChanged = Di, d.disposeSlug = Mi, d.retireSlug = dr;
    let h = d.conns.get(n);
    if (h !== void 0 && !h.stopped) {
      if (h.url = r, h.stalledSince !== void 0 && h.reconnectTimer !== void 0) Ut(h, Math.round(Math.random() * d.timing.capMs), cr);
      return;
    }
    xi(d, n, r, a);
  } catch (s) {
    t(`[artifactPresence] arm threw slug=${n}: ${s instanceof Error ? s.name : "error"}`);
  }
}
function xi(e, n, r, s) {
  let d = { slug: n, url: r, context: s, send: void 0, state: "connecting", storedCap: void 0, capStrikes: 0, owner: void 0, rebootNeeded: false, bootedVersion: void 0, backoff: 0, refusals: 0, stalledSince: void 0, stalls: 0, openedAt: 0, everOpened: false, reconnectTimer: void 0, taskId: void 0, refusedAdmission: false, stopped: false, abort: new AbortController() };
  e.conns.set(n, d), Fvs(Li), ur(d, "initial").catch((a) => {
    t(`[artifactPresence] connect threw slug=${n}: ${a instanceof Error ? a.name : "error"}`), we(d, { on: "dial_error", deterministic: false });
  });
}
var Li = { closeByTaskId: (e) => Wi(e) };
function Wi(e) {
  let n = YJs();
  if (n === void 0) return false;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return r.taskId = void 0, n.declined.add(r.slug), re(r), true;
  }
  return false;
}
async function ur(e, n) {
  let r = at(e.slug);
  if (r !== null) {
    t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e);
    return;
  }
  e.state = "connecting";
  let s = await Jn(e, { feature: "artifact_presence", isCurrent: () => Fe(e) });
  switch (s.outcome) {
    case "stale":
      return;
    case "not_found":
      re(e);
      return;
    case "other_org":
    case "public_outside_org":
      p("artifact_presence", s.outcome), re(e);
      return;
    case "boot_failed": {
      let d = { on: "boot", status: s.status, noAnswer: s.noAnswer, elapsedMs: s.elapsedMs };
      if (n === "initial" && er(e, d, Ae().timing)) t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), re(e);
      else we(e, d);
      return;
    }
    case "not_admitted":
      t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`), re(e);
      return;
    case "owner_changed":
      p("artifact_presence", "owner_changed"), re(e);
      return;
    case "token":
      await Ii(e, s.token);
      return;
  }
}
async function Ii(e, n) {
  let { timing: r } = Ae(), { slug: s } = e, d = !e.everOpened;
  e.refusedAdmission = false;
  let a = await nr(e, n, { description: `presence on artifact ${e.url}`, keepalive: { openFrames: [], frame: _({ kind: "ping", slug: s }), intervalMs: r.keepaliveMs, sendEveryMs: () => st(Z().live, r.keepaliveMs), deadlineMs: r.keepaliveDeadlineMs ?? Kt(r.keepaliveMs) }, onFrame: (b) => Oi(e, b), onOpen: () => {
    if (d) g("artifact_presence", { connected: true });
  }, onEnded: (b, v) => {
    let S = e.refusedAdmission;
    if (e.refusedAdmission = false, S && b !== BOt) {
      we(e, zn);
      return;
    }
    if (v.opened) {
      if (b !== UOt && b !== BOt) p("artifact_presence", `closed_${b ?? "unknown"}`);
    } else {
      let A = PIe(b);
      m("artifact_presence", "connect_failed", A === null ? void 0 : { http_status: A.status, cf_mitigated: A.cfMitigated });
    }
    we(e, { on: "socket", detail: b, ...v });
  }, handshakeDeadlineMs: r.handshakeDeadlineMs, activitySinkKey: `presence:${s}`, label: "artifactPresence" }, () => Fe(e));
  if (a.outcome !== "error") return;
  let h = a.error instanceof Fct && !a.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (d && h) {
    m("artifact_presence", "ws_open_error"), re(e);
    return;
  }
  p("artifact_presence", "ws_open_error"), e.state = "closed", we(e, { on: "dial_error", deterministic: h });
}
function we(e, n) {
  if (!Fe(e)) return;
  let r = tr(e, Ae().timing, n);
  if (r.next === "end") {
    p("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), re(e);
    return;
  }
  if (r.stallRunStarted) {
    let s = n.on === "boot" ? n.status : n.on === "socket" ? PIe(n.detail)?.status : void 0;
    p("artifact_presence", "stall_run_started", { boot: n.on === "boot", ...s !== void 0 && { http_status: s } });
  }
  Ut(e, r.delayMs, cr);
}
function cr(e) {
  if (!Fe(e)) return;
  ur(e, "reconnect").catch((n) => {
    t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`), we(e, { on: "dial_error", deterministic: false });
  });
}
function re(e) {
  it(e);
  let n = Ae();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}
function Oi(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = qo(n);
  } catch {
    return;
  }
  let s = rt().safeParse(r);
  if (!s.success) return;
  let { kind: d, slug: a, actor: h, payload: b } = s.data;
  if (h !== void 0 || a !== void 0 && a !== e.slug) return;
  if (Qn(e, d, b)) return;
  switch (d) {
    case "join_denied": {
      let v = De().safeParse(b).data?.reason;
      if (v === jn) {
        m("artifact_presence", "join_denied"), re(e);
        return;
      }
      if (p("artifact_presence", "join_denied"), v === qn) e.storedCap = void 0;
      if (e.refusedAdmission = true, e.taskId !== void 0) try {
        kb(e.taskId, e.context.taskRegistry, { quiet: true });
      } catch {
      }
      return;
    }
    case "ctrl:comment":
      ir(e.slug)?.comment();
      return;
    case "ctrl:invalidate": {
      let v = Gt().safeParse(b);
      if (v.success && (v.data.tag === $t || v.data.tag === Ht)) ir(e.slug)?.ver(v.data.ver, "sync");
      return;
    }
    default:
      return;
  }
}
function ir(e) {
  let n = Z().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}
function Mi(e, n) {
  e.declined.delete(n), dr(e, n);
}
function dr(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}
function Pi(e) {
  e.declined.clear();
  for (let n of [...e.conns.values()]) it(n);
  e.conns.clear();
}
function Di(e, n) {
  for (let r of [...e.conns.values()]) {
    if (Fg(r.owner, n)) continue;
    if (it(r), e.conns.get(r.slug) === r) e.conns.delete(r.slug);
  }
}
function Jbr(e, n) {
  return Bt(e, n) >= 0;
}
function Bt(e, n) {
  return qt(e, n).at(-1) ?? -1;
}
function qt(e, n) {
  let r = n.toLowerCase(), s = [];
  for (let d = 0; d < e.length; d++) {
    let a = e[d];
    try {
      let h = !Xv(a) ? null : a.type === "user" ? mr(a.message?.content) : a.type === "attachment" && a.attachment.type === "queued_command" ? mr(a.attachment.prompt) : null;
      if (h !== null && Bi(h, r)) s.push(d);
    } catch {
    }
  }
  return s;
}
var fr = /^https?:\/\//i, Fi = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i, hr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000", Vi = new RegExp(`[${hr}]+`), Ni = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/, gr = "(<[{'\"`*_~", Ui = new RegExp(`^[${gr}]+`), Gi = /[.,;:!?)\]}'">`*_~\u200b]+$/, $i = new RegExp(`(?<=^|[${hr}])[${gr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"), Ki = "artifact-files";
function Bi(e, n) {
  for (let r of e.matchAll($i)) if (pr(r[1], n)) return true;
  return e.split(Vi).some((r) => pr(r.replace(Ui, ""), n));
}
function pr(e, n) {
  let r = e.replace(Gi, "");
  if (Ni.test(r)) return false;
  if (fr.test(r) || Fi.test(r)) {
    let d = fr.test(r) ? r : `https://${r}`;
    return vZ(d)?.slug === n;
  }
  let s = r.toLowerCase().split(/[/\\]/);
  if (s.length > 1) return s.some((d, a) => d === n && s[a - 1] === Ki);
  return s[0] === n || GF(r) === n;
}
function mr(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e) if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") n.push(r.text);
  return n.length > 0 ? n.join(`
`) : null;
}
var ji = "frame-live.v1", qi = { enqueuePendingNotification: (e) => el(e) }, zi = 25e3;
function opo() {
  Z().live.lastArtifactToolCallAt = Date.now();
}
var Yi = 9e4, Yt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, ✕ the watch in the tasks list or use the kill-all-agents gesture.", Ji = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Xi(e, n, r) {
  let s = e.supervisors.get(n);
  if (s !== void 0) s.explicit = false;
  for (let d of Object.values(r.all())) if (sB(d) && d.status === "running" && d.frameLive?.slug === n && d.frameLive.explicit) r.update(d.id, (a) => sB(a) && a.frameLive !== void 0 ? { ...a, description: Jt(xn({ slug: n, env: Ao() }), false, a.frameLive.armedVia), frameLive: { ...a.frameLive, explicit: false } } : a);
}
function Qi(e, n) {
  let r = Z().live, s = r.supervisors.get(e)?.context.storageV5 ?? Ppo();
  zDn(s);
  let d;
  if (n.taskStop) {
    if (Z().durable.stopLatches.confirmStop(e), !iB(e)) $ct(e, { storageV5: s }), import("../models/hand-back-taken-over-slug.phne.js").then((h) => h.notifyTakenOverSlugStopped(e));
    let { wasWatching: a } = wr({ slug: e, taskRegistry: n.taskRegistry, announce: !n.running, killRow: (h) => {
      if (h.id !== n.taskId) kb(h.id, n.taskRegistry, { userStop: true });
    } });
    d = a;
  } else {
    if (!Zi(r, e, n)) return false;
    te(r, e), d = true;
  }
  if (n.modelOrigin !== true) _wr(e, s);
  return d;
}
function wr(e) {
  let { slug: n, taskRegistry: r } = e, s = Z().live, d = s.supervisors.get(n), a = d !== void 0 && !d.stopped || s.inFlightSubscribes.has(n);
  if (d?.autoReactWiring !== void 0) jvs(n);
  let h = Object.values(r.all()).filter((b) => sB(b) && b.status === "running" && b.frameLive?.slug === n);
  if (e.announce && d !== void 0 && !d.stopped && h.length === 0 && (d.taskId !== void 0 || d.timer !== void 0)) dt(s, d, "watching this artifact was stopped just now");
  else te(s, n);
  for (let b of h) a = true, e.killRow(b);
  if (a && I_(n)) $Ln(n);
  return Epo(n), { wasWatching: a };
}
function Zi(e, n, r) {
  let s = e.supervisors.get(n);
  if (s === void 0 || s.stopped) return false;
  if (r.running) return s.taskId === void 0 || s.taskId === r.taskId;
  if (s.taskId === void 0 || s.taskId !== r.taskId) return false;
  return s.timer !== void 0 || e.inFlightSubscribes.has(n);
}
function te(e, n) {
  let r = e.supervisors.get(n);
  if (r) yhn(r), e.supervisors.delete(n);
  IBn(n), tZn(n), Ve(n)?.sourceEnded();
}
function Re(e, n, r) {
  if (r) return { ...n, humanTurnSnapshot: true };
  if (e === void 0) return n;
  let { humanTurnSnapshot: s, ...d } = n;
  return { ...d, context: e.context, publishTranscript: e.publishTranscript, ...e.humanTurnSnapshot && { humanTurnSnapshot: true } };
}
function br(e, n, r) {
  let s = e.supervisors.get(n)?.autoReactWiring;
  return s?.humanTurnSnapshot === true && (r?.humanTurnSnapshot !== true || s.context !== r.context);
}
function _r(e, n) {
  let r = e.supervisors.get(n.slug);
  if (r && !r.stopped) {
    if (n.carriedVer !== void 0) r.carriedVer = n.carriedVer;
    let d = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (r.lastActivityAt = Date.now(), r.timer !== void 0) clearTimeout(r.timer), r.timer = void 0;
      if (r.stalledSince = void 0, r.lastStalledAt = void 0, r.stallOutAfterMs = void 0, r.taskId === void 0 && !e.inFlightSubscribes.has(n.slug) && wEe(n.context, n.slug).length === 0) r.watchedSince = Date.now(), r.armedVia = n.armedVia, hwr(n.slug);
      else if (n.armedVia === "publish") r.armedVia = "publish";
      else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (d && r.armedVia !== "mcp_write") yD(e, n.slug);
    }
    if (r.explicit = r.explicit || n.explicit, n.autoReactWiring !== void 0) {
      let a = r.autoReactWiring !== void 0;
      if (r.autoReactWiring = Re(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === true), !a) yD(e, n.slug);
    }
    return r;
  }
  let s = { slug: n.slug, url: n.url, getKnownVer: n.getKnownVer, ownPublishes: n.ownPublishes, context: n.context, abort: new AbortController(), explicit: n.explicit, stopped: false, watchedSince: Date.now(), lastActivityAt: Date.now(), armedVia: n.armedVia, consecutiveFailures: 0, ...n.carriedVer !== void 0 && { carriedVer: n.carriedVer }, ...n.autoReactWiring !== void 0 && { autoReactWiring: Re(void 0, n.autoReactWiring, n.humanTurnWiring === true) } };
  return e.supervisors.set(n.slug, s), hwr(n.slug, s.watchedSince), s;
}
function eo(e, n, r, s) {
  if (e.supervisors.get(r) === n) n.taskId = s;
}
function to(e, n) {
  let { rewatchTiming: r } = e;
  if (r.idleTtlMs <= 0) return false;
  if (n.explicit || Ar(e, n) || Date.now() - n.lastActivityAt < r.idleTtlMs) return false;
  return !(n.autoReactWiring !== void 0 && PT() && (!_y(n.slug) || I_(n.slug)));
}
function Ar(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function BDn(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}
function Zbr(e) {
  return Mvs.find((n) => n === e) ?? "publish";
}
function gJt(e) {
  switch (e) {
    case "publish":
      return { task: "auto-armed on publish", row: "armed by a publish", idle: "automatically when you published this artifact" };
    case "attach":
      return { task: "attached via /artifacts", row: "armed when the user attached it from /artifacts", idle: "automatically when you attached this artifact from /artifacts" };
    case "watch":
      return { task: "watch requested", row: "requested by you", idle: "when you asked to watch this artifact" };
    case "resume":
      return { task: "resume requested", row: "re-armed when the user asked to resume replies", idle: "when you asked to resume its comment auto-replies" };
    case "session_resume":
      return { task: "re-armed on session resume", row: "re-armed when this session was resumed", idle: "automatically when this session was resumed" };
    case "mcp_write":
      return { task: "presence while editing via MCP", row: "armed when this session edited the page through an MCP tool", idle: "automatically when this session edited this page through an MCP tool" };
    case "watch_stopped":
      return { task: "watch requested; auto-replies since stopped", row: "requested by you; its auto-replies since stopped by the user", idle: "when you asked to watch this artifact" };
  }
}
function no(e, n) {
  let r = gJt(n.armedVia).idle, s = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
  return `it was armed ${r} and has seen no activity for over ${un(e.rewatchTiming.idleTtlMs, { hideTrailingZeros: true })} ${s}`;
}
function ro(e, n, r) {
  return e === GDn || n >= r.stallThresholdMs;
}
function io(e) {
  let n = PIe(e);
  return n !== null && (C9(n.status) || n.cfMitigated);
}
function oo(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * YTr + e.handshakeDeadlineMs + 6e4;
}
function Qt(e, n, r) {
  let { uptimeMs: s, resumeNeverOpened: d = false, stalled: a = false } = r, { rewatchTiming: h } = e, b = e.supervisors.get(n);
  if (!b || b.stopped) return;
  if (Z().durable.stopLatches.isStopped(n)) {
    if (p("artifact_live_subscribe", "stop_latched"), d) he(e, b, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", { advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed" });
    else dt(e, b);
    return;
  }
  if (to(e, b)) {
    g("artifact_live_subscribe", { idle_retired: true }), he(e, b, no(e, b), "idle", { advice: Oo, passive: true });
    return;
  }
  let v = false, S = false;
  if (a) {
    let R = Date.now();
    if (b.stalledSince === void 0 || b.lastStalledAt === void 0 || b.stallOutAfterMs === void 0 || R - b.lastStalledAt > oo(h)) {
      b.stalledSince = R, b.stallOutAfterMs = h.maxStallMs + Math.round(Math.random() * h.stallOutJitterMs);
      let T = r.httpStatus ?? PIe(r.closeCode)?.status;
      p("artifact_live_subscribe", "stall_run_started", { boot: r.closeCode === void 0, ...T !== void 0 && { http_status: T } });
    } else S = true;
    b.lastStalledAt = R, v = R - b.stalledSince >= b.stallOutAfterMs;
  } else if (b.stalledSince = void 0, b.lastStalledAt = void 0, b.stallOutAfterMs = void 0, s >= h.minUptimeMs) b.consecutiveFailures = 0;
  else if (r.reuseRefused !== true) b.consecutiveFailures++;
  if (b.consecutiveFailures > h.maxConsecutiveFailures || v) {
    if (v) p("artifact_live_subscribe", "rewatch_gave_up", { stalled: true });
    else p("artifact_live_subscribe", "rewatch_gave_up");
    he(e, b, "the live connection kept failing and reconnecting has stopped", Nr, { advice: ft, passive: true });
    return;
  }
  let A = Fme(), x = a && S && (PIe(r.closeCode)?.cfMitigated === true || !A || b.lease === void 0 || !Rfo(b.lease, h, Z().accountEpoch, Date.now() + h.stallMinMs)), K = s > 0 && s >= h.minUptimeMs && r.closeCode !== void 0 && !(r.expired === true && b.transport !== "sync"), L = Ivs({ timing: h, consecutiveFailures: b.consecutiveFailures, leaseMode: A, stalled: a, longStall: x, spread: K });
  if (A && K && r.expired !== true) b.spreadReconnect = true;
  if (b.timer !== void 0) clearTimeout(b.timer);
  b.timer = setTimeout(Rr, L, e, n), b.timer.unref?.(), b.nextRewatchAt = Date.now() + L;
}
function he(e, n, r, s, { advice: d = "watch it again if you still need that", passive: a = false } = {}) {
  if (e.supervisors.get(n.slug) === n) {
    if (te(e, n.slug), !Z().durable.stopLatches.isStopped(n.slug)) {
      if (Pr(e, n.slug, "ended", s), n.autoReactWiring !== void 0) import("../models/hand-back-taken-over-slug.phne.js").then((v) => v.handBackTakenOverSlug(n.slug));
    }
  } else yhn(n);
  let h = n.resumeAnnounce;
  if (h !== void 0) n.resumeAnnounce = void 0, h.onGiveUp();
  if (n.armedVia === "mcp_write") return;
  let b = p1e(() => n.autoReactWiring?.title, n.url);
  el({ value: Hi({ taskType: NK, summary: jt(TDs(b, s)), body: `
<event>${jt(`Watch on ${n.url} ended — ${r}. This session no longer keeps track of new versions of it; ${d}.`)}</event>` }), mode: "task-notification", ...a && { passive: true }, priority: "next", origin: { kind: "task-notification", source: NK, slug: n.slug, displayName: b, watchEnded: true }, agentId: tt() });
}
function dt(e, n, r = "watching this artifact was stopped earlier in this session") {
  n.resumeAnnounce = void 0, he(e, n, r, "stopped", { advice: "do not watch it again unless the user asks you to" });
}
function X(e, n, r, s, d, { unavailable: a = false, httpStatus: h } = {}) {
  return Zt(e, n, r, { unavailable: a, httpStatus: h }), xo(e, n, r, s, d), { outcome: "skipped", reason: s, ...a && { unavailable: true }, ...a && h !== void 0 && { httpStatus: h } };
}
function Zt(e, n, r, { unavailable: s = false, httpStatus: d } = {}) {
  if (r) return;
  let a = e.supervisors.get(n);
  if (a !== void 0 && !a.stopped && a.timer === void 0) Qt(e, n, { uptimeMs: 0, stalled: s, ...d !== void 0 && { httpStatus: d } });
}
async function Rr(e, n) {
  let r = e.supervisors.get(n);
  if (!r || r.stopped) return;
  if (r.timer = void 0, Z().durable.stopLatches.isStopped(n)) {
    p("artifact_live_subscribe", "stop_latched"), dt(e, r);
    return;
  }
  if (r.autoReactWiring !== void 0 && _y(n) && !I_(n)) delete r.autoReactWiring;
  g("artifact_live_subscribe", { rewatch_attempt: true });
  let s = await pe(e, { slug: r.slug, url: r.url, getKnownVer: r.getKnownVer, ownPublishes: r.ownPublishes, context: r.context, signal: r.abort.signal, machineArm: true, seedKnownVerFromBoot: true, ...r.carriedVer !== void 0 && { seedSurfacedVer: r.carriedVer }, ...r.autoReactWiring !== void 0 && { autoReactWiring: r.autoReactWiring } });
  if (s.outcome === "skipped" && s.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(n) !== r) {
    if (s.outcome === "skipped") Zt(e, n, void 0, { unavailable: s.unavailable === true, httpStatus: s.httpStatus });
    return;
  }
  if (s.outcome === "skipped") if (s.reason === "boot_failed" || s.reason === "ws_open_error" || s.reason === "sync_unavailable") r.lastFailure = s.reason, Qt(e, n, { uptimeMs: 0, stalled: s.unavailable === true, ...s.httpStatus !== void 0 && { httpStatus: s.httpStatus } });
  else p("artifact_live_subscribe", `rewatch_stopped_${s.reason}`), he(e, r, c1e(s.reason) ?? s.reason, nn[s.reason] ?? Gr, Po(s.reason));
}
async function so(e, n) {
  let r = e.supervisors.get(n), s = r?.lease;
  if (!Fme() || r === void 0 || r.stopped || s === void 0 || s.probed) return;
  s.probed = true;
  let d;
  try {
    d = await LBn({ slug: n, env: Ao() }, r.abort.signal, { agentPeer: ct(n), syncLive: ct(n), watchBoot: true, credentials: r.context.credentials });
  } catch {
    return;
  }
  if (e.supervisors.get(n) !== r || r.stopped) return;
  let a = d.err === null ? d.assetToken === void 0 ? "public_outside_org" : void 0 : d.status === 404 ? "not_found" : Oq(d) ? "other_org" : void 0;
  if (a !== void 0) {
    p("artifact_live_subscribe", `read_stopped_${a}`), he(e, r, c1e(a) ?? a, nn[a] ?? a, { advice: u1e(a) });
    for (let v of Object.values(r.context.taskRegistry.all())) if (sB(v) && v.status === "running" && v.frameLive?.slug === n) kb(v.id, r.context.taskRegistry, { quiet: true });
    return;
  }
  if (d.err === null && qTr(d.data) !== void 0) {
    g("artifact_live_subscribe", { read_refused_boot_ok: true });
    return;
  }
  let h = d.err === null ? "tokenless" : d.status ?? d.errorCode;
  if (p("artifact_live_subscribe", `read_refused_boot_${h}`), (h === "tokenless" || typeof h === "number" && h < 500 && h !== 408 && h !== 429) && r.lease === s) delete r.lease, delete r.renewable;
}
function yr(e) {
  return dwr(new URL(`/edge-api/frame-live/${e}/ws`, xai()));
}
var ao = 8;
function uo(e) {
  let { slug: n, url: r, ownPublishes: s, getKnownVer: d, autoReact: a, onSurfaced: h } = e, b = e.surfacedVers ?? [];
  function v(R) {
    if (b.push(R), b.length > ao) b.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !b.includes(e.seedSurfacedVer)) v(e.seedSurfacedVer);
  let S = xEe(AEe, REe), A = false, x = false;
  function K() {
    if (kr(n), Gws(n), a && PT()) dme({ slug: n, url: r, env: a.env, tool: a.tool, context: a.context, ...a.publishTranscript !== void 0 && { publishTranscript: a.publishTranscript }, ...a.getWiring !== void 0 && { getWiring: a.getWiring }, abort: a.abort, notify: a.notify, ...a.getTitle !== void 0 && { getTitle: a.getTitle }, ...a.onReadRefused !== void 0 && { onReadRefused: a.onReadRefused } });
  }
  function L(R, T) {
    if (!R || !HC.test(R)) return;
    if (e.presenceOnly?.()) return;
    if (qbo(n, R), b.includes(R)) return;
    let P = T === "sync" && { via_sync: true };
    if (qtn(s, n, R)) {
      g("artifact_live_subscribe", { ...A ? { suppressed_own: true } : { suppressed_catch_up: true }, ...P }), A = true;
      return;
    }
    if (R === d()) return;
    if (DYe(s, n)) {
      g("artifact_live_subscribe", { suppressed_in_flight: true, ...P });
      return;
    }
    if (!S.tryConsume()) {
      if (!x) x = true, p("artifact_live_subscribe", "ver_rate_suppressed", { ...P });
      return;
    }
    x = false, v(R);
    try {
      h?.(R);
    } catch {
    }
    g("artifact_live_subscribe", { surfaced: true, passive: LHt === "passive", ...P });
  }
  return { comment: K, ver: L };
}
function co(e) {
  return (n) => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = qo(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return e.comment(), null;
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var lo = /^\d{1,15}$/;
function Ve(e) {
  return Z().liveDocWatch.headSinks.get(e);
}
function kr(e) {
  let n = Z().live, r = n.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !n.inFlightSubscribes.has(e)) r.lastActivityAt = Date.now();
}
function fo(e, n, r) {
  return (s) => {
    if (s.charCodeAt(0) !== 123) return null;
    let d;
    try {
      d = qo(s);
    } catch {
      return null;
    }
    let a = rt().safeParse(d);
    if (!a.success) return null;
    let { kind: h, actor: b, payload: v } = a.data;
    if (b !== void 0 || a.data.slug !== void 0 && a.data.slug !== n) return null;
    switch (h) {
      case "ctrl:comment":
        return e.comment(), null;
      case "ctrl:invalidate": {
        let S = Gt().safeParse(v);
        if (!S.success) return null;
        if (S.data.tag === $t || S.data.tag === Ht) e.ver(S.data.ver, "sync");
        else if (S.data.tag === or && lo.test(S.data.ver)) kr(n), Ve(n)?.seq(Number(S.data.ver));
        return null;
      }
      case "ctrl:token_refresh": {
        let S = Vt().safeParse(v);
        if (S.success && ve(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
        return null;
      }
      case "ctrl:token_refresh_declined": {
        let S = De().safeParse(v);
        if (S.success && S.data.reason === Ft) r.onExpiryAnnounced();
        return null;
      }
      case "ctrl:comment_hint": {
        let S = sr().safeParse(v);
        if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
        return null;
      }
      default:
        return null;
    }
  };
}
function Er(e, n, r, s, d, a) {
  if (!a(e, r)) return "dead";
  return s && (_y(n) ? d && (e.autoReactArmed !== true || !I_(n) || NIe(n)) : e.autoReactArmed !== true) ? "replace" : "keep";
}
function po(e, n) {
  return WOt(e.id) && Zct(e, n);
}
function mo(e, n, r, s) {
  let d = Date.now(), a = null;
  for (let h of Object.values(e.taskRegistry.all())) {
    if (!sB(h) || h.status !== "running" || h.frameLive?.slug !== n) continue;
    let b = Er(h, n, d, r, s, Zct);
    if (b !== "dead") {
      if (b === "replace") {
        kb(h.id, e.taskRegistry, { quiet: true });
        continue;
      }
      a = h.id;
      continue;
    }
    kb(h.id, e.taskRegistry, { quiet: true, connectionLost: true });
  }
  return a;
}
function Tr(e, n) {
  return Object.values(e.all()).some((r) => sB(r) && r.status === "running" && r.frameLive?.slug === n);
}
function ho(e) {
  return nEr(e, PT, { includeStopLatched: true });
}
function hJt(e) {
  return nEr(e, PT);
}
function bEe(e, n) {
  zDn(n?.storageV5), Iae(), GOt();
  let r = Z().live, s = n?.durable !== false, d = 0, a = /* @__PURE__ */ new Set();
  for (let h of Object.values(e.all())) if (ho(h)) {
    let b = h.autoReactSlug !== void 0 && _y(h.autoReactSlug) && (!I_(h.autoReactSlug) || iB(h.autoReactSlug));
    if (s) {
      if (kb(h.id, e, { quiet: true, userStop: true }), h.autoReactSlug !== void 0) AJt(h.autoReactSlug), a.add(h.autoReactSlug);
    } else if (h.autoReactSlug !== void 0) a.add(h.autoReactSlug);
    if (!b && !(h.autoReactSlug !== void 0 && !s && _y(h.autoReactSlug))) {
      if (d++, !s && h.autoReactSlug !== void 0) eut(h.autoReactSlug), yD(r, h.autoReactSlug);
    }
  }
  for (let h of r.supervisors.values()) {
    if (h.autoReactWiring === void 0) continue;
    if (s) delete h.autoReactWiring;
    if (s && PT() && (!_y(h.slug) || a.has(h.slug))) if (Tr(e, h.slug) || r.inFlightSubscribes.has(h.slug)) Xi(r, h.slug, e);
    else te(r, h.slug), _wr(h.slug, h.context.storageV5);
    if (!a.has(h.slug) && PT() && !_y(h.slug)) if (a.add(h.slug), d++, s) AJt(h.slug), YJt(h.slug);
    else eut(h.slug);
  }
  if (s) eLn({ storageV5: n?.storageV5 });
  else if (d > 0) EEe({ flush: true, storageV5: n?.storageV5 });
  return d;
}
function en(e, n, r, s) {
  if (!I_(n) || NIe(n) || !PT()) return null;
  let d = Cr(e, n);
  if (d === void 0) return null;
  s?.();
  let { live: a, wakes: h } = Z();
  WLn(n), h.liftedAtScanGeneration.set(n, h.scanGeneration), yD(a, n);
  let b = PEe(n).lastWakeArgs;
  if (!WOt(d.id) || b === null) return "cleared";
  return r?.(b), dme({ ...b, seed: false, confirm: void 0, confirmBase: void 0, confirmAfter: void 0, reentry: void 0, idlePass: void 0, suppressSummonStatus: void 0 }), "lifted";
}
function Cr(e, n) {
  return Object.values(e.all()).find((r) => sB(r) && r.status === "running" && r.autoReactArmed === true && r.autoReactSlug === n && Zct(r));
}
function go(e, n) {
  if (n.ownWords) {
    let r = Wvs((s) => dEs(s) || bo(e, UGo(s)));
    if (r > 0) g("artifact_live_subscribe", { notice_latch_released: r });
  }
  return So(e);
}
function bo(e, n) {
  if (n === void 0) return false;
  return Object.values(e.all()).some((r) => r.startTime >= n && _o(r));
}
function _o(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || hht(e)) return n;
  if (!Q7e.has(e.type) || e.type === "in_process_teammate") return false;
  let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [...e.keepaliveReasons].some((d) => d !== "flag:idle-window"), s = "resuming" in e && e.resuming === true;
  return n || r || s;
}
function So(e) {
  let { wakes: n } = Z();
  n.humanTurnAtScanGeneration = n.scanGeneration;
  let r = 0;
  for (let s of [...n.sweptSlugs]) if (en(e, s) !== null) r++;
  if (r > 0) g("artifact_live_subscribe", { unpaused_on_turn: r });
  return r;
}
function yJt() {
  return Z().builtInArtifactHiddenForMcp ? Swr() && PT() : PT() && Swr();
}
function wEe(e, n) {
  let r = [], s, d = () => s ??= EN(), a = Z(), h = a.autoReact.userDisarmed;
  for (let b of Object.values(e.taskRegistry.all())) {
    if (!sB(b) || b.status !== "running" || b.frameLive === void 0 || n !== void 0 && b.frameLive.slug !== n) continue;
    let v = a.live.supervisors.get(b.frameLive.slug);
    r.push({ slug: b.frameLive.slug, taskId: b.id, since: b.frameLive.watchedSince, explicit: v?.explicit ?? b.frameLive.explicit, connected: Zct(b), tokenExpiresAt: v?.lease?.expMs ?? b.frameLive.armedAt + (v?.transport === "sync" ? LLn : Xwr), armedVia: v?.armedVia ?? b.frameLive.armedVia, autoReply: b.autoReactArmed !== true ? Sy(b.frameLive.slug) ? h ? "disarmed" : d() ? "stopped" : "none" : "none" : h ? "disarmed" : !d() ? "none" : b.autoReactSlug !== void 0 && Sy(b.autoReactSlug) ? I_(b.autoReactSlug) ? iB(b.autoReactSlug) ? "yielded" : "paused" : "stopped" : vo(b.frameLive.slug) });
  }
  return r.sort((b, v) => b.since - v.since);
}
function vo(e) {
  let n = Z().autoReact.artifacts.get(e), r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === true ? "declined" : "armed";
}
function ewr(e, n) {
  let { live: r, autoReact: s, wakes: d } = Z(), a = [], h, b = () => h ??= EN();
  for (let v of d.stoppedSlugs) {
    if (n !== void 0 && v !== n) continue;
    if (Tr(e.taskRegistry, v) || r.inFlightSubscribes.has(v) || !s.userDisarmed && !b()) continue;
    let S = r.supervisors.get(v), A = S !== void 0 && !S.stopped ? S : void 0;
    a.push({ slug: v, ...A !== void 0 && { since: A.watchedSince, explicit: A.explicit, armedVia: A.armedVia }, stopKind: I_(v) ? iB(v) ? "yielded" : "interrupt" : "user", autoReply: s.userDisarmed ? "disarmed" : "stopped" });
  }
  return a.sort((v, S) => (v.since ?? Number.POSITIVE_INFINITY) - (S.since ?? Number.POSITIVE_INFINITY));
}
function ut(e, n, { forPublish: r = false } = {}) {
  let { supervisors: s } = e, d = [];
  for (let a of wEe(n)) {
    let h = s.get(a.slug), b = Wr(e, a, n);
    if (b === "explicit" || b === "most_recent_publish") continue;
    if (b === "auto_reply") {
      if (!r || sEs(a.slug)) continue;
      d.push({ row: a, tier: 3 });
      continue;
    }
    d.push({ row: a, tier: h === void 0 || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2 });
  }
  return d.sort((a, h) => {
    if (a.tier !== h.tier) return a.tier - h.tier;
    let b = s.get(a.row.slug), v = s.get(h.row.slug), S = b && !b.stopped ? b.lastActivityAt : 0, A = v && !v.stopped ? v.lastActivityAt : 0;
    return S - A || a.row.since - h.row.since;
  }).map((a) => a.row);
}
function xr(e, n, r, s) {
  let d = e.supervisors.get(n.slug), a = Wr(e, n, r) === "auto_reply";
  if (kb(n.taskId, r.taskRegistry, { quiet: true }), a && !iB(n.slug)) $9e(n.slug, { storageV5: d?.context.storageV5 ?? Ppo() });
  if (d !== void 0 && !d.stopped) he(e, d, s?.why ?? `this session reached its limit of ${jk} artifact watches and made room to watch a newer one${a ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, s?.shortReason ?? "made room for a newer watch", s !== void 0 ? { advice: ft, passive: true } : a ? { advice: "do not watch it again unless the user asks" } : void 0);
  else te(e, n.slug);
  g("artifact_live_subscribe", { evicted_least_active: true, ...a && { evicted_autoreply: true } });
}
function Lr(e, n) {
  let r = e.supervisors.get(n);
  if (r === void 0 || r.stopped) return null;
  if (r.explicit) return "explicit";
  if (Ar(e, r)) return "most_recent_publish";
  return r.autoReactWiring !== void 0 && PT() && (!_y(n) || I_(n)) ? "auto_reply" : null;
}
function Sr(e, n) {
  return Lr(e, n) !== null;
}
function Wr(e, n, r) {
  let s = e.supervisors.get(n.slug);
  if (s !== void 0 && !s.stopped) return Lr(e, n.slug);
  let d = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : hJt(d) ? "auto_reply" : null;
}
function wo(e, n) {
  let r = ut(e, n);
  if (r.length === 0) return false;
  return xr(e, r[0], n, { why: `this session reached its limit of ${jk} artifact watches and made room for a protected watch to reconnect`, shortReason: tn }), true;
}
function spo() {
  let e = Z().live;
  e.handoffGeneration += 1, e.bootingWiredArms.clear(), O3e(xJt(D1())), EEe({ flush: true }), jws(), Iae(), GOt();
  for (let n of [...e.supervisors.keys()]) te(e, n);
  e.armOutcomes.clear(), e.announcedArmFailures.clear(), zvs();
}
function Ro(e) {
  let n = Z().live;
  n.handoffGeneration += 1, Iae(), GOt();
  let r = 0;
  for (let a of [...n.supervisors.values()]) {
    if (!a.stopped) r++;
    if (a.autoReactWiring !== void 0) {
      let { slug: h } = a;
      import("../models/hand-back-taken-over-slug.phne.js").then((b) => b.handBackTakenOverSlug(h));
    }
    delete a.autoReactWiring, te(n, a.slug);
    for (let h of Object.values(a.context.taskRegistry.all())) {
      if (!sB(h) || h.status !== "running" || h.frameLive?.slug !== a.slug) continue;
      kb(h.id, a.context.taskRegistry, { quiet: true });
    }
  }
  if (n.armOutcomes.clear(), n.announcedArmFailures.clear(), r === 0) return r;
  let s = `${r} artifact ${r === 1 ? "watch" : "watches"}`, d = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return el({ value: Hi({ taskType: NK, summary: jt(`Stopped watching ${s} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`), body: `
<event>${jt(d)}</event>` }), mode: "task-notification", passive: true, priority: "next", origin: { kind: "task-notification", source: NK }, agentId: tt() }), r;
}
function ipo(e, n, r) {
  let { wasWatching: s } = Ir(e, n);
  if (Z().live.nonEditorSlugs.delete(e), r !== void 0) {
    let d = Z().live.repliesConsent, a = d.outstanding.get(e);
    if (a !== void 0) {
      if (d.outstanding.delete(e), a.allowed !== true) d.declined.set(e, { namingMessages: a.namingMessages });
    }
    d.approved.delete(e);
  }
  return g("artifact_live_subscribe", { unwatched: s }), { wasWatching: s };
}
function apo(e, n) {
  _wr(e, n.storageV5);
  let { wasWatching: r } = Ir(e, n);
  if (r) g("artifact_live_subscribe", { unwatched: true, artifact_deleted: true });
}
function Ir(e, n) {
  let r = Z().live;
  zDn(n.storageV5), r.armOutcomes.delete(e), Xt(r, e), Vws(e);
  let s = r.supervisors.get(e)?.autoReactWiring !== void 0, { wasWatching: d } = wr({ slug: e, taskRegistry: n.taskRegistry, announce: false, killRow: (a) => {
    let h = a.autoReactArmed === true;
    if (kb(a.id, n.taskRegistry, h ? { quiet: true, userStop: true, modelOrigin: true } : { quiet: true }), h && a.autoReactSlug !== void 0) AJt(a.autoReactSlug);
  } });
  if (s) AJt(e);
  return { wasWatching: d };
}
async function lpo(e) {
  let { slug: n, url: r, publishContext: s, getKnownVer: d, context: a, tool: h, commentVerbsInSchema: b } = e;
  if (!m9(s)) return { outcome: "skipped", reason: "publish_context" };
  let v = Z().live, S = h !== void 0 && b === true && EN(), A = !S ? void 0 : !J_e(a.messages) ? "unattended_turn" : !Jbr(a.messages, n) || !dI(a.messages) ? "not_named_by_user" : v.repliesConsent.declined.has(n) ? "declined" : v.nonEditorSlugs.has(n) ? "not_editor" : e.repliesApproved !== true ? "not_approved" : void 0, x = Or({ tool: S && A === void 0 ? h : void 0, commentVerbsInSchema: b, context: a }), K = x.autoReactWiring !== void 0, L = v.supervisors.get(n)?.autoReactWiring?.title, R = await pe(v, { slug: n, url: r, getKnownVer: d, ownPublishes: a.artifactRegistries.ownPublishes, ...ke(a), ...x, pickUpRecentSummons: K, ...x.autoReactWiring !== void 0 && { autoReactWiring: { ...x.autoReactWiring, title: L }, editorGatedWiring: true } });
  if (K && R.outcome === "armed" && R.degraded === void 0 && !(_y(n) && !I_(n)) && Ne()) lt(n, { title: v.supervisors.get(n)?.autoReactWiring?.title ?? L, storageV5: a.storageV5 });
  if (A !== void 0 && R.outcome === "armed") return { ...R, degraded: A };
  if (A !== void 0 && R.outcome === "already_watching") return { ...R, degraded: A };
  return R;
}
function dpo(e) {
  return Z().live.nonEditorSlugs.has(e);
}
function cpo(e, n, r, s) {
  let d = Z().live.repliesConsent, a = d.outstanding.get(n);
  if (e === void 0) return { declined: d.declined.has(n) || r !== void 0 && a !== void 0 && a.toolUseId !== r && a.allowed !== true, approved: false };
  if (r !== void 0 && a !== void 0 && a.toolUseId !== r) {
    if (d.outstanding.delete(n), a.allowed !== true) d.declined.set(n, { namingMessages: a.namingMessages });
  }
  let h = d.declined.get(n), b = yo(s, n);
  if (h !== void 0 && b !== null && !h.namingMessages.has(b)) d.declined.delete(n);
  return { declined: d.declined.has(n), approved: d.approved.has(n) };
}
function yo(e, n) {
  let r = Bt(e, n);
  return r >= 0 ? e[r]?.uuid ?? null : null;
}
function twr(e, n, r, s, d = false) {
  if (e === void 0) return;
  Z().live.repliesConsent.outstanding.set(n, { toolUseId: r, ...d && { allowed: true }, namingMessages: new Set(qt(s, n).flatMap((a) => s[a]?.uuid !== void 0 ? [s[a].uuid] : [])) });
}
function upo(e, n) {
  if (e === void 0 || n === void 0) return;
  let { outstanding: r } = Z().live.repliesConsent;
  for (let [s, d] of r) if (d.toolUseId === n) return r.delete(s), { slug: s };
  return;
}
function ppo(e, n, r, s) {
  let d = Z().live.repliesConsent;
  if (e === void 0) return false;
  let a = n?.slug === r;
  if (a && s) d.approved.add(r), d.declined.delete(r);
  return a || d.approved.has(r);
}
function _Jt(e) {
  return Z().live.repliesConsent.declined.has(e);
}
function fpo(e) {
  let { declined: n, outstanding: r } = Z().live.repliesConsent, s = r.get(e);
  return n.has(e) || s !== void 0 && s.allowed !== true;
}
function ko(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) r = { arming: false }, e.mcpWriteSlugs.set(n, r);
  return r;
}
var Eo = /* @__PURE__ */ new Set(["not_found", "no_subscription_token", "publish_context", "invalid_slug", "remote"]), To = 5e3;
function vr(e, n) {
  tAr(e, n), setTimeout((r, s) => nAr(r, s), To, e, n).unref?.();
}
async function bTi(e, n, r) {
  try {
    if (!lr.test(e)) return;
    let s = Z(), d = s.live;
    if (d.disposed) return;
    let a = d.supervisors.get(e), h = n.artifactRegistries.ownPublishes;
    if (a !== void 0 && !a.stopped) {
      if (vr(h, e), d.inFlightSubscribes.has(e)) return;
      if (a.lastActivityAt = Date.now(), a.timer !== void 0 && a.consecutiveFailures === 0 && a.stalledSince === void 0) clearTimeout(a.timer), a.timer = void 0, a.nextRewatchAt = void 0, Rr(d, e);
      return;
    }
    let b = ko(d, e);
    if (d.inFlightSubscribes.has(e)) {
      if (b.arming) vr(h, e);
      return;
    }
    let { publishContext: v } = $me({ agentId: n.agentId, agentType: n.agentContext?.agentType, isNonInteractiveSession: n.options.isNonInteractiveSession });
    if (!m9(v)) return;
    if (b.declinedEpoch === s.accountEpoch) return;
    let S = s.accountEpoch;
    b.arming = true, await pe(d, { slug: e, url: xn({ slug: e, env: Ao() }), getKnownVer: r, ownPublishes: h, ...ke(n), seedKnownVerFromBoot: true, mcpWrite: true }).then((A) => {
      if (b.arming = false, A.outcome === "skipped" && Eo.has(A.reason)) b.declinedEpoch = S;
    }, (A) => {
      b.arming = false, l(A);
    });
  } catch (s) {
    l(s);
  }
}
async function mpo(e) {
  let { slug: n, url: r, publishContext: s, getKnownVer: d, context: a } = e;
  if (Z().autoReact.userDisarmed) return { outcome: "refused", reason: "session_disarmed" };
  if (!m9(s)) return { outcome: "skipped", reason: "publish_context" };
  if (!e.commentVerbsInSchema) return { outcome: "skipped", reason: "comments_off" };
  if (!_y(n)) return { outcome: "skipped", reason: "not_stopped" };
  if (!EN()) return { outcome: "skipped", reason: "not_enabled" };
  let h = Z().live;
  if (a.abortController.signal.aborted) return { outcome: "skipped", reason: "cancelled" };
  let b = Cr(a.taskRegistry, n)?.id, v = en(a.taskRegistry, n, (S) => {
    eI(n), S.notify({ summary: GIr(p1e(S.getTitle, r)), detail: `Auto-replies on artifact ${r} were resumed by a resume_replies request — they had been paused when the user interrupted the session (Ctrl+C or Stop). ${Yt}` });
  }, () => {
    let S = h.supervisors.get(n);
    if (S !== void 0 && !S.stopped) S.autoReactWiring = Re(S.autoReactWiring, { tool: e.tool, commentVerbsInSchema: e.commentVerbsInSchema, context: a, title: S.autoReactWiring?.title }, true);
  });
  if (v !== null && b !== void 0) {
    if (g("artifact_live_subscribe", { resumed_in_place: true }), v === "cleared") Z().wakes.pendingResumeDisclosure.add(n);
    return { outcome: "armed", taskId: b, inPlace: v === "lifted", ...v === "cleared" && { connecting: true } };
  }
  return pe(h, { slug: n, url: r, getKnownVer: d, ownPublishes: a.artifactRegistries.ownPublishes, ...ke(a), seedKnownVerFromBoot: true, autoReactWiring: { tool: e.tool, commentVerbsInSchema: e.commentVerbsInSchema, context: a, title: h.supervisors.get(n)?.autoReactWiring?.title }, userResumeWiring: true, approvedRelatchGen: e.approvedRelatchGen });
}
function nwr(e, n) {
  let { live: r } = Z();
  if (!r.inFlightSubscribes.has(e)) {
    n();
    return;
  }
  let s = r.armSettleWaiters.get(e) ?? [];
  s.push(n), r.armSettleWaiters.set(e, s);
}
function rwr(e) {
  let n = Z().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}
async function gpo(e) {
  let { slug: n, url: r, getKnownVer: s, tool: d, commentVerbsInSchema: a, context: h } = e;
  if (d !== void 0 && rc()) xpo().catch(() => {
    return;
  });
  let b = Z(), v = await pe(b.live, { slug: n, url: r, getKnownVer: s, ownPublishes: h.artifactRegistries.ownPublishes, ...ke(h), ...Or({ tool: d, commentVerbsInSchema: a, context: h }) });
  if (d !== void 0 && a === true && v.outcome !== "skipped" && Ne()) lt(n, { title: b.live.supervisors.get(n)?.autoReactWiring?.title, storageV5: h.storageV5 });
  return v;
}
function Or(e) {
  let { tool: n, commentVerbsInSchema: r, context: s } = e;
  return { seedKnownVerFromBoot: true, explicit: true, pickUpRecentSummons: true, ...n !== void 0 && r === true && { autoReactWiring: { tool: n, commentVerbsInSchema: r, context: s } } };
}
async function xIe(e) {
  let { slug: n, url: r, version: s, publishContext: d, getKnownVer: a, tool: h, commentVerbsInSchema: b, title: v, context: S } = e;
  if (h !== void 0 && rc()) xpo().catch(() => {
    return;
  });
  let A = S.artifactRegistries.ownPublishes, x = Z().live;
  if (s !== void 0) {
    FHt(A, n, s, { merged: !Lme(A, n, s) });
    let T = x.supervisors.get(n);
    if (T !== void 0 && !T.stopped) T.lastActivityAt = Date.now();
    if (m9(d)) x.mostRecentPublishSlug = n;
  }
  if (!m9(d)) return p("artifact_live_subscribe", "publish_context", { publish_context: c(d) }), { outcome: "skipped", reason: "publish_context" };
  let K = h !== void 0 && b === true, L = e.carriedPublishConsent !== true && e.resumedPublishConsent !== true && e.chainPublish !== true && e.adoptedPublish !== true && J_e(S.messages), R = await pe(x, { slug: n, url: r, getKnownVer: a, ownPublishes: A, ...ke(S), ...e.onOpen !== void 0 && e.onGiveUp !== void 0 && { onOpen: e.onOpen, onGiveUp: e.onGiveUp }, ...e.seedKnownVerFromBoot === true && { seedKnownVerFromBoot: true }, ...(e.resumedPublishConsent === true || e.carriedPublishConsent === true) && { requireEditor: true }, ...e.sessionResume === true && { sessionResume: true }, ...L && s !== void 0 && { freshPublish: true }, ...e.announceArmlessEnd === true && { announceArmlessEnd: true }, ...e.resumedPublishConsent === true && K && { pickUpRecentSummons: true }, ...K && { autoReactWiring: { tool: h, commentVerbsInSchema: b, context: S, title: v, ...e.publishTranscript !== void 0 && { publishTranscript: e.publishTranscript } }, ...L && { freshPublishWiring: true } } });
  if ((s !== void 0 || e.adoptedPublish === true) && R.outcome !== "skipped") {
    let { autoReact: T, wakes: P } = Z(), ie = !K ? "bare_watch_comments_off" : T.userDisarmed ? "bare_watch_session_disarmed" : !F9e() ? "bare_watch_autoreact_off" : _y(n) && !L && !(I_(n) && !NIe(n) && P.humanTurnAtScanGeneration === P.scanGeneration) ? "bare_watch_slug_stopped" : void 0;
    if (ie !== void 0) p("artifact_live_subscribe", ie, { publish_context: c(d) });
  }
  if (K && R.outcome !== "skipped" && !(R.outcome === "already_watching" && (e.resumedPublishConsent === true || e.carriedPublishConsent === true)) && !(R.outcome === "armed" && R.degraded !== void 0) && Ne()) lt(n, { title: x.supervisors.get(n)?.autoReactWiring?.title ?? v, storageV5: S.storageV5 });
  return R;
}
function Ne() {
  return !Z().autoReact.userDisarmed && F9e();
}
function lt(e, n) {
  if (Z().builtInArtifactHiddenForMcp) {
    Ipo(e, { storageV5: n.storageV5 });
    return;
  }
  hEs(e, n);
}
function Jt(e, n, r) {
  return `live updates for artifact ${e} (${gJt(BDn(n, r)).task})`;
}
function ke(e) {
  return { context: AOt(e), signal: e.abortController.signal };
}
function COt(e, n) {
  return () => Vte(e(), n);
}
function Mr(e) {
  if (!Nme()) return { reason: "flag_off" };
  if (i.CLAUDE_CODE_REMOTE) return { reason: "remote" };
  return Co(yr(e));
}
function ct(e) {
  return Nme() && at(e) === null && !JJs(e);
}
function Co(e) {
  if (Pai()) return { reason: "cp_override" };
  let n = wJt(e);
  if (n !== null) return { reason: "egress_denied", egressKind: n.kind };
  return null;
}
function hpo(e) {
  let { context: n, slug: r, wantWiring: s, canClearLatch: d } = e, a = Date.now();
  for (let h of Object.values(n.taskRegistry.all())) if (sB(h) && h.status === "running" && h.frameLive?.slug === r && Er(h, r, a, s, d, po) === "keep") return true;
  return false;
}
function jDn(e) {
  if (Z().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!m9(e.publishContext)) return "publish_context";
  return Mr(e.slug)?.reason ?? null;
}
var TOt = "auto-replies armed", owr = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) — the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)", swr = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) — that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks — the user asking is not itself the take-back); no comment notifications arrive here meanwhile", iwr = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread", awr = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function zt() {
  return mw() ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${TOt}, and plain comments never notify — read them with ${Hd('action "comments"', () => `the ${Mq("comments")}`)} when asked` : "";
}
function c1e(e) {
  switch (e) {
    case "flag_off":
      return "the live-subscribe feature flag is off in this session's cached config, so this session does not keep track of new versions of this artifact published elsewhere";
    case "publish_context":
      return "only a main-loop session (interactive, SDK, or background) holds the watch, not a subagent, teammate, or print session";
    case "stop_latched":
      return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";
    case "remote":
      return "remote sessions do not hold the watch";
    case "cp_override":
      return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";
    case "egress_denied":
      return "network egress to the claude.ai edge is denied by policy, so this session does not keep track of new versions of this artifact published elsewhere";
    case "not_found":
      return "no such artifact for this account (it was deleted, or it has not been shared with the user)";
    case "other_org":
      return PYe;
    case "public_outside_org":
      return $tn;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${jk} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${jk} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
    case "invalid_slug":
      return "that is not an artifact this session can name";
    case "cancelled":
      return "the request was cancelled before the connection opened";
    case "ws_open_error":
      return "the live connection could not be opened from this environment";
    case "sync_unavailable":
      return "the live channel is not available to this session right now";
    default:
      return null;
  }
}
function SJt(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background — not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session — this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally — that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "publish_context":
      return "Live subscription: none — this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
    case "remote_unsupported": {
      let n = mw();
      return `Live subscription: not supported yet from remote sessions — nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
    }
    default: {
      let n = c1e(e);
      return n !== null ? `Live subscription: skipped — ${n}.` : `Live subscription: skipped (${uA(e, 64)}).`;
    }
  }
}
var ypo = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function lwr(e) {
  let { slug: n, url: r, getKnownVer: s, context: d } = e;
  return pe(Z().live, { slug: n, url: r, getKnownVer: s, ownPublishes: d.artifactRegistries.ownPublishes, ...ke(d), seedKnownVerFromBoot: true });
}
async function pe(e, n) {
  let { slug: r, url: s, getKnownVer: d, ownPublishes: a, context: h, seedKnownVerFromBoot: b, seedSurfacedVer: v, explicit: S = false, signal: A } = n;
  ROt();
  let x = e.supervisors.get(r)?.carriedVer;
  e.endAll ??= Ro;
  let K = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema, L = n.userResumeWiring === true ? "resume" : S ? "watch" : n.sessionResume === true ? "session_resume" : n.mcpWrite === true ? "mcp_write" : b ? "attach" : "publish";
  if (!lr.test(r)) return { outcome: "skipped", reason: "invalid_slug" };
  e.armOutcomes.delete(r);
  let R = Z().durable.stopLatches;
  l7({ storageV5: h.storageV5 });
  let T = n.userResumeWiring === true ? n.approvedRelatchGen : void 0, P = () => R.isStopped(r) && (T === void 0 || R.latchGeneration(r) !== T);
  if (P()) return p("artifact_live_subscribe", "stop_latched"), { outcome: "skipped", reason: "stop_latched" };
  let ie = Mr(r);
  if (ie !== null) {
    if (ie.reason === "cp_override") p("artifact_live_subscribe", "cp_override_active");
    else if (ie.reason === "egress_denied") p("artifact_live_subscribe", `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`);
    return { outcome: "skipped", reason: ie.reason };
  }
  let Hr = yr(r), pt = ct(r), Ee = (n.freshPublishWiring === true || n.userResumeWiring === true) && !n.signal.aborted, mt = e.supervisors.get(r)?.autoReactWiring, ae = mo(h, r, K, Ee);
  if (ae !== null || e.inFlightSubscribes.has(r)) {
    if (ae === null && T !== void 0 && R.isStopped(r)) return p("artifact_live_subscribe", "arm_in_flight"), { outcome: "skipped", reason: "arm_in_flight" };
    if (!(L === "resume" && ae === null && !e.supervisors.has(r))) _r(e, { slug: r, url: s, getKnownVer: d, ownPublishes: a, context: h, explicit: S, machineArm: n.machineArm, armedVia: L, ...n.requireEditor !== true && n.editorGatedWiring !== true && { autoReactWiring: n.autoReactWiring, humanTurnWiring: Ee } });
    if (ae !== null) {
      let C = e.supervisors.get(r);
      if (C !== void 0) {
        let J = Jt(s, C.explicit, C.armedVia);
        h.taskRegistry.update(ae, (D) => {
          if (!sB(D) || D.frameLive === void 0) return D;
          if (D.description === J && D.frameLive.explicit === C.explicit && D.frameLive.armedVia === C.armedVia) return D;
          return { ...D, description: J, frameLive: { ...D.frameLive, explicit: C.explicit, armedVia: C.armedVia } };
        });
      }
    }
    if (ae !== null && n.freshPublishWiring === true && !n.signal.aborted) en(h.taskRegistry, r);
    if (ae === null && n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== true && n.editorGatedWiring !== true) {
      let C = e.pendingInFlightWiring.get(r), J = n.freshPublishWiring === true && !n.signal.aborted, D = J || C === void 0 ? { scanGeneration: Z().wakes.scanGeneration, stopGeneration: p9(r) } : { scanGeneration: C.scanGeneration, stopGeneration: C.stopGeneration };
      if (e.pendingInFlightWiring.set(r, { wiring: Re(C?.wiring, n.autoReactWiring, Ee), freshPublishWiring: J || C?.freshPublishWiring === true, ...D }), e.inFlightWiredIntent.add(r), Ne()) Ipo(r, { storageV5: h.storageV5 });
      if (J && F9e()) e.bootingWiredArms.set(r, { title: n.autoReactWiring.title, freshPublish: true, ...D });
    }
    return { outcome: "already_watching", ...ae !== null && { taskId: ae } };
  }
  let Y = { url: s, announce: n.announceArmlessEnd === true && !n.machineArm, handoffGen: e.handoffGeneration, getTitle: () => e.supervisors.get(r)?.autoReactWiring?.title ?? n.autoReactWiring?.title }, rn = wEe(h).length + e.inFlightSubscribes.size;
  if (n.machineArm && wEe(h).length >= jk) {
    if (!Sr(e, r) || ut(e, h).length === 0) return p("artifact_live_subscribe", "watch_cap_reconnect"), { outcome: "skipped", reason: "watch_cap_reconnect" };
  }
  if (n.mcpWrite && rn >= jk) return p("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
  let on = !n.machineArm && n.freshPublish === true;
  if (!n.machineArm && rn >= jk && ut(e, h, { forPublish: on }).length === 0) return p("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
  let Te = Z().wakes.scanGeneration, Ue = p9(r), sn = n.machineArm ? e.supervisors.get(r)?.lastActivityAt : void 0, an = e.handoffGeneration;
  if (Lvs(Qi), Bvs(Epo), Nvs((C) => go(h.taskRegistry, C)), e.inFlightSubscribes.add(r), e.inFlightGenerations.set(r, an), n.autoReactWiring !== void 0) e.inFlightWiredIntent.add(r);
  let Ce, xe = false;
  try {
    if (n.autoReactWiring?.commentVerbsInSchema === true && n.requireEditor !== true && n.machineArm !== true && n.userResumeWiring !== true && F9e()) e.bootingWiredArms.set(r, { title: n.autoReactWiring.title, freshPublish: n.freshPublishWiring === true && !n.signal.aborted, scanGeneration: Te, stopGeneration: Ue });
    let C = () => e.handoffGeneration !== an || e.retiredInFlightArms.has(r), J = Fme();
    if (!J) {
      let w = e.supervisors.get(r);
      if (w !== void 0) delete w.lease, delete w.renewable;
    }
    let D = Z().accountEpoch, ge = J && n.machineArm === true ? e.supervisors.get(r)?.lease : void 0, F = ge !== void 0 && (ge.transport === "live" || pt) && Rfo(ge, e.rewatchTiming, D) ? ge : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let w = await Qk(h.storageV5).catch(() => {
        return;
      });
      if (!Fg(me(F.token), w)) F = void 0;
      if (A.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    }
    let W, ht = false, cn = 0;
    if (F !== void 0) W = { err: null, token: F.token, transport: F.transport, ver: F.ver, editor: void 0, tokenExp: void 0, renewable: false };
    else {
      let w = J && !pt && n.machineArm === true && e.supervisors.get(r)?.renewable === true;
      try {
        let j;
        if (w) {
          let be = await Vxs(r, A, h.credentials);
          if (be.err === null) j = be, ht = true;
          else {
            p("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(r);
            if (ue !== void 0) delete ue.renewable;
            if (A.aborted || C()) return X(e, r, true, "cancelled", Y);
          }
        }
        cn = Date.now(), W = j ?? await zxs(r, A, h.credentials, { syncLive: pt, ...n.machineArm === true && { lean: e.supervisors.get(r)?.bootedVersion } });
      } catch {
        return X(e, r, n.machineArm, A.aborted || C() ? "cancelled" : "boot_failed", Y);
      }
    }
    let Kr = Date.now();
    if (C()) return X(e, r, n.machineArm, "cancelled", Y);
    if (W.err !== null) {
      let w = A.aborted ? "cancelled" : W.status === 404 ? "not_found" : Oq(W) ? "other_org" : W.publicOutsideOrg === true ? "public_outside_org" : "boot_failed", j = w === "boot_failed" && (W.unavailable === true || W.noAnswer === true && Date.now() - cn >= e.rewatchTiming.stallThresholdMs);
      return X(e, r, n.machineArm, w, Y, { unavailable: j, httpStatus: W.status });
    }
    let Ge = n.requireEditor === true && !W.editor, se = Ge || n.editorGatedWiring === true && n.autoReactWiring !== void 0 && W.editor !== true, dn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
    if (W.editor === true) e.nonEditorSlugs.delete(r);
    if (se) {
      if (e.inFlightWiredIntent.delete(r), e.bootingWiredArms.delete(r), !Ge && Z().accountEpoch === D) e.nonEditorSlugs.add(r);
    }
    let ln = W.title === void 0 ? null : eC(W.title), le = se || n.autoReactWiring === void 0 ? void 0 : ln === null ? n.autoReactWiring : { ...n.autoReactWiring, title: ln }, gt = se ? void 0 : n.onOpen, fn = se ? void 0 : n.onGiveUp, B = W.transport;
    if (B === "sync" && (!ct(r) || W.token === void 0 || !ve(W.token))) return p("artifact_live_subscribe", "sync_unavailable"), X(e, r, n.machineArm, "sync_unavailable", Y, { unavailable: true });
    let Le = W.token;
    if (!Le) return p("artifact_live_subscribe", se ? dn : "no_subscription_token"), X(e, r, n.machineArm, Ge ? "not_editor" : "no_subscription_token", Y);
    if (se) p("artifact_live_subscribe", dn);
    let $e = W.ver, Br = b ? () => d() ?? $e : d, O = F ?? (J ? xvs({ transport: B, token: Le, ver: $e, accountEpoch: D, expUnixSeconds: B === "sync" ? et(Le) : W.tokenExp, receivedAtMs: Kr }) : void 0);
    if (A.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    let He = wEe(h).length + e.inFlightSubscribes.size - 1, bt = e.supervisors.get(r), jr = n.machineArm === true && sn !== void 0 && bt !== void 0 && !bt.stopped && bt.lastActivityAt > sn, pn = wEe(h).length + e.pendingRegistrations;
    if (n.machineArm && !jr && He >= jk) {
      if (pn >= jk) {
        if (!Sr(e, r) || !wo(e, h)) return p("artifact_live_subscribe", "watch_cap_reconnect"), { outcome: "skipped", reason: "watch_cap_reconnect" };
      }
    } else if (n.mcpWrite && He >= jk) return p("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
    else if (He >= jk) {
      let w = He - jk + 1, j = ut(e, h, { forPublish: on });
      if (j.length < w) {
        if (n.machineArm) return p("artifact_live_subscribe", "watch_cap_reconnect"), { outcome: "skipped", reason: "watch_cap_reconnect" };
        return p("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
      }
      if (pn >= jk) xr(e, j[0], h, n.machineArm ? { why: `this session reached its limit of ${jk} artifact watches and made room for an already-held watch to reconnect`, shortReason: tn } : void 0);
    }
    e.pendingRegistrations++, xe = true;
    let q = e.supervisors.get(r), qr = q !== void 0 && !q.stopped && q.explicit, _t = S || qr, St = q !== void 0 && !q.stopped, mn = St ? q.taskId : void 0, zr = q === void 0, Yr = S && q !== void 0 && !q.explicit, hn = !n.machineArm && q !== void 0 && q.armedVia === "mcp_write" && L !== "publish" && L !== "mcp_write", gn = hn ? q.autoReactWiring : void 0, bn = le !== void 0 && !br(e, r, mt), _n = n.userResumeWiring === true && bn && St && q.autoReactWiring?.humanTurnSnapshot === true, vt = e.supervisors.get(r)?.carriedVer, wt = vt !== void 0 && vt !== x ? vt : v, y = _r(e, { slug: r, url: s, getKnownVer: d, ownPublishes: a, context: h, explicit: S, machineArm: n.machineArm, armedVia: L, carriedVer: wt ?? W.ver, ...bn && { autoReactWiring: le }, humanTurnWiring: Ee && !_n });
    if (F === void 0 && y.armedVia !== "mcp_write") qbo(r, $e);
    if (F === void 0 && !ht) y.bootedVersion = $e;
    let Jr = y.autoReactWiring;
    if (O !== void 0 && O.accountEpoch === Z().accountEpoch) {
      if (y.lease = O, F === void 0 && W.renewable) y.renewable = true;
      else if (F === void 0) delete y.renewable;
    } else delete y.lease, delete y.renewable;
    let Xr = y.lastActivityAt;
    if (gt !== void 0 && fn !== void 0) y.resumeAnnounce = { onOpen: gt, onGiveUp: fn, wired: le !== void 0 };
    let At = L === "resume" && y.armedVia !== "watch" && y.armedVia !== "resume" ? y.armedVia : void 0;
    if (At !== void 0) y.armedVia = "resume";
    y.transport = B;
    let ne = false, Sn = V(), vn = false, Rt, Ke, wn = false, We, Qr = new AbortController(), Q = se ? void 0 : e.pendingInFlightWiring.get(r);
    if (!se) e.pendingInFlightWiring.delete(r);
    let fe = le ?? Q?.wiring, Zr = Q?.wiring.humanTurnSnapshot === true && (mt?.humanTurnSnapshot !== true || Q.wiring.context !== mt.context);
    if (Q !== void 0 && (le === void 0 || Zr) && Q.stopGeneration === p9(r)) {
      let w = e.supervisors.get(r);
      if (w !== void 0 && !w.stopped) w.autoReactWiring = Re(w.autoReactWiring, { ...Q.wiring, title: Q.wiring.title ?? w.autoReactWiring?.title }, Q.wiring.humanTurnSnapshot === true);
    }
    let An = n.freshPublishWiring === true || Q?.freshPublishWiring === true;
    if (Q?.freshPublishWiring === true) Te = Q.scanGeneration, Ue = Q.stopGeneration;
    let ee = n.userResumeWiring === true, ei = Ee || fe?.humanTurnSnapshot === true, yt = () => e.supervisors.get(r)?.autoReactWiring?.title ?? fe?.title, I = fe === void 0 || !fe.commentVerbsInSchema ? void 0 : { env: Ao(), tool: fe.tool, context: fe.context, ...fe.publishTranscript !== void 0 && { publishTranscript: fe.publishTranscript }, getWiring: () => {
      let w = e.supervisors.get(r)?.autoReactWiring;
      return w?.humanTurnSnapshot === true || !ei ? w : void 0;
    }, abort: Qr, getTitle: yt, onReadRefused: () => {
      so(e, r);
    }, notify: (w) => {
      if ("coalesce" in w) {
        Cvs({ queue: qi, slug: r, family: w.coalesce.family, artifactName: w.coalesce.artifactName, threadId: w.coalesce.threadId, detail: w.detail, mergeDetails: "append", ownGesture: w.ownGesture === true });
        return;
      }
      el({ value: Hi({ taskType: "artifact-auto-react", summary: jt(w.summary), body: `
${jt(w.detail)}` }), mode: "task-notification", origin: { kind: "task-notification", source: "artifact-auto-react", slug: r, displayName: p1e(yt, s) }, uuid: oNn(w.handOff, w.ownGesture === true ? r : void 0), ...w.handOff !== void 0 && { artifactCommentTurn: "handoff" }, agentId: tt() });
    } };
    y.surfacedVers ??= [];
    let Rn = y.wake, Be = uo({ slug: r, url: s, ownPublishes: a, presenceOnly: () => e.supervisors.get(r)?.armedVia === "mcp_write", getKnownVer: Br, surfacedVers: y.surfacedVers, ...wt !== void 0 && { seedSurfacedVer: wt }, onSurfaced: (w) => {
      let j = e.supervisors.get(r);
      if (j && !j.stopped) j.carriedVer = w, j.lastActivityAt = Date.now();
    }, autoReact: I });
    y.wake = Be;
    let kt = 0, Et, ti = F?.opened === true ? F : void 0;
    try {
      let w = await bJt({ ws: B === "sync" ? { url: Pe(r, { commentHint: I !== void 0 && PT() && !_y(r), versionNotices: true }), protocols: [Ze, Le] } : { url: Hr, protocols: [ji, Le] }, ...B === "sync" && { headers: { "User-Agent": NF() } }, description: Jt(s, _t, y.armedVia), timeout_ms: 0, persistent: true, quietLifecycle: true, ...mn !== void 0 && { reuseTaskId: mn }, ambient: true, handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs, autoReactArmed: I !== void 0, autoReactSlug: I !== void 0 ? r : void 0, frameLive: { slug: r, explicit: _t, watchedSince: y.watchedSince, armedVia: y.armedVia }, transform: B === "sync" ? fo(Be, r, { onTokenRefresh: (H, N) => {
        if (O !== void 0 && Fg(me(O.token), me(H))) Pvs(O, { token: H, expUnixSeconds: N, receivedAtMs: Date.now() });
      }, onExpiryAnnounced: () => {
        wn = true;
      }, onCommentHint: (H, N) => {
        let Ie = Et;
        Et = void 0;
        let _e = H && Ie !== void 0 && uEs(r, Ie, N);
        g("artifact_live_subscribe", { comment_hint: true, comments_empty: H, seed_parked: Ie !== void 0, seed_skipped: _e, sync_transport: true });
      } }) : co(Be), keepalive: B === "sync" ? { openFrames: [], frame: _({ kind: "ping", slug: r }), intervalMs: Z().presence.timing.keepaliveMs, sendEveryMs: () => st(e, Z().presence.timing.keepaliveMs), deadlineMs: Z().presence.timing.keepaliveDeadlineMs ?? Kt(Z().presence.timing.keepaliveMs) } : { openFrames: ["ping", "hb"], frame: "ping", intervalMs: zi }, onSender: (H) => {
        if (B === "sync") {
          Ke = (N) => H(Nt(r, N)), Xe(e, `watch:${r}`, Ke);
          return;
        }
        Rt = H, $n(e, r, H);
      }, onSenderClosed: () => {
        if (Ke !== void 0) Qe(e, `watch:${r}`, Ke);
        if (Rt !== void 0) Hn(e, r, Rt);
      }, onLifecycle: (H, N, Ie) => {
        if (H === "open") {
          ne = true, y.lastFailure = void 0, We = { stalledSince: y.stalledSince, lastStalledAt: y.lastStalledAt, stallOutAfterMs: y.stallOutAfterMs }, y.stalledSince = void 0, y.lastStalledAt = void 0, y.stallOutAfterMs = void 0;
          let Oe = y.spreadReconnect === true;
          if (y.spreadReconnect = void 0, kt = Date.now(), O !== void 0) O.opened = true;
          if (T !== void 0 && A.aborted && R.isStopped(r) && y.taskId !== void 0) {
            kb(y.taskId, h.taskRegistry, { quiet: true }), te(e, r), p("artifact_live_subscribe", "stop_latched");
            return;
          }
          let Me = e.supervisors.get(r);
          if (Me !== void 0 && !Me.stopped) if (B === "sync") XJs(r), Ve(r)?.reopened();
          else ar({ slug: r, url: s, context: h }), Ve(r)?.sourceEnded();
          g("artifact_live_subscribe", { armed: true, ...B === "sync" && { sync_transport: true }, ..._t && { explicit: true }, ...F !== void 0 && { token_reused: true, lease_remaining_min: Math.max(0, Math.floor((F.expMs - kt) / 6e4)) }, ...ht && { token_renewed: true } });
          let En = I !== void 0 && Z().wakes.scanGeneration !== Te, ri = p9(r) !== Ue, { wakes: ce } = Z(), ii = ce.liftedAtScanGeneration.get(r) === ce.scanGeneration || ce.humanTurnAtScanGeneration === ce.scanGeneration;
          if (En && !ii && !_y(r) && PT()) eut(r), u9(1, [], { catchUp: false, nameChordGesture: !ye(), passive: !ye() }), EEe({ flush: true });
          if (T !== void 0 && !A.aborted) R.clearByApprovedRewatch(r, T);
          if (I !== void 0) PEe(r).lastWakeArgs = { slug: r, url: s, ...I };
          let Tn = ee && P();
          if (ee && I !== void 0 && !A.aborted && !Tn && Ne()) {
            let G = e.supervisors.get(r)?.autoReactWiring;
            lt(r, { title: G?.title, storageV5: G?.context.storageV5 });
          }
          if (I !== void 0 && A.aborted) ;
          else if (I !== void 0) if (!ee && I_(r) && !NIe(r) && ce.humanTurnAtScanGeneration === ce.scanGeneration) WLn(r), ce.liftedAtScanGeneration.set(r, ce.scanGeneration), yD(e, r), dme({ slug: r, url: s, ...I, seed: false });
          else if (_y(r) && (En || ri || Tn || !(An || ee))) ;
          else if (_y(r)) {
            let G = I_(r), de = iB(r);
            if (PT() && (ee || !G || de)) eI(r), ptt(r), I.notify({ summary: (ee ? GIr : wDs)(p1e(I.getTitle, s)), detail: `Auto-replies on artifact ${s} were ${ee ? "resumed by a resume_replies request" : "re-enabled by this publish"} — they had been ${de ? "handed to another session of this conversation that resumed it or published there" : G ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${G && !de ? Yt : Ji}` });
            if (!G || de) AJt(r);
            Qvs(r), MEs(r), WLn(r), yD(e, r), dme({ slug: r, url: s, ...I, seed: true });
          } else {
            if (ce.pendingResumeDisclosure.delete(r)) eI(r), ptt(r), I.notify({ summary: GIr(p1e(I.getTitle, s)), detail: `Auto-replies on artifact ${s} were resumed by a resume_replies request — they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${Yt}` });
            if (dme({ slug: r, url: s, ...I, seed: true, ...n.pickUpRecentSummons === true && n.machineArm !== true && { pickUpRecentSummons: true }, ...n.machineArm === true && Oe && Fme() && { deferMs: Ovs(e.rewatchTiming) } }), B === "sync") {
              let G = PEe(r);
              Et = { kickCount: G.kickCount, cancelGeneration: G.cancelGeneration };
            }
          }
          let qe = e.supervisors.get(r), Wt = qe?.resumeAnnounce;
          if (qe !== void 0 && Wt !== void 0) {
            qe.resumeAnnounce = void 0;
            let { autoReact: G } = Z(), de = I !== void 0 && !Sy(r) && !G.userDisarmed && G.enabledMemo === true;
            if (!A.aborted && !qe.stopped && !R.isStopped(r) && (de || !Wt.wired && I === void 0)) Wt.onOpen();
          }
          if (I !== void 0 && (An || ee || S) && !vn && !A.aborted && !R.isStopped(r) && !Sy(r) && !Z().autoReact.userDisarmed && Z().autoReact.wakeEnabledMemo === true) {
            vn = true;
            let G = REs([r], Date.now());
            (async () => {
              let de = await import("../shared/admit-dropped-ids-by-destination.xxa3.js"), ze = await import("../auth/capture-process-start-time-async.ey1k.js"), Ye = await N9e({ records: await de.listRegisteredSessionRecords(), sessionId: Sn, selfPid: process.pid, isRunning: ze.isProcessRunning, isSameProcess: ze.provenSameProcessAsync });
              if (Ye.verdict !== "live") {
                G.end();
                return;
              }
              let { requestReplyTakeover: oi } = await import("../models/hand-back-taken-over-slug.phne.js"), It = (await oi({ holders: [Ye.holder, ...Ye.otherHolders], holdersIncomplete: Ye.unproven === true, conversationId: Sn, slugs: [r], reason: "claim", alreadyReplying: true, claim: G })).yielded.has(r), Cn = !It && G.lost.has(r), Je = p1e(() => yt(), s);
              el({ value: Hi({ taskType: NK, summary: jt(It ? `Another session of this conversation handed its replies on ${Je} to this one` : Cn ? `This session handed its replies on ${Je} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${Je}`), body: `
<event>${jt(It ? `Another live session of this same conversation was also armed to reply to comments on ${s}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Cn ? `Another live session of this same conversation claimed the replies to comments on ${s} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do — a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${s}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>` }), mode: "task-notification", passive: true, priority: "next", origin: { kind: "task-notification", source: NK, slug: r, displayName: Je }, agentId: tt() });
            })().catch(() => {
              G.end();
            });
          }
          return;
        }
        let _e = ne ? Date.now() - kt : 0, Tt = !ne && io(N), Ct = B === "sync" ? N === UOt && (wn || O !== void 0 && Date.now() >= O.expMs - Yi) : N === Tvs, je = B === "sync" && (ne && N === UOt && !Ct || !ne && PIe(N)?.status === 404), xt = je || !ne && (Tt || ro(N, Ie, e.rewatchTiming)), Lt = ne || xt ? void 0 : ti, z = e.supervisors.get(r);
        if (je && ne && _e < e.rewatchTiming.minUptimeMs && z !== void 0 && z.stalledSince === void 0 && We?.stalledSince !== void 0) z.stalledSince = We.stalledSince, z.lastStalledAt = We.lastStalledAt, z.stallOutAfterMs = We.stallOutAfterMs;
        if (z !== void 0 && B === "sync" && N === BOt && O !== void 0 && z.lease === O) delete z.lease;
        if (O !== void 0 && z?.lease === O && (!Fme() || !Tt && !je && !Afo(O, { expired: Ct, refused: Lt !== void 0, healthy: ne && _e >= e.rewatchTiming.minUptimeMs }))) {
          if (delete z.lease, !O.opened) delete z.renewable;
        }
        if (ne) p("artifact_live_subscribe", `socket_closed_${N ?? "unknown"}`, { chain_spared: Z().autoReact.artifacts.get(r)?.scanning === true });
        else if (Lt !== void 0) p("artifact_live_subscribe", "reuse_connect_failed");
        else {
          let Oe = PIe(N), Me = { ...xt && { stalled: true }, ...Tt && { shed: true }, ...Oe !== null && { http_status: Oe.status, cf_mitigated: Oe.cfMitigated } };
          if (Object.keys(Me).length > 0) m("artifact_live_subscribe", "connect_failed", Me);
          else m("artifact_live_subscribe", "connect_failed");
        }
        if (z !== void 0 && !z.stopped) z.lastFailure = _e < e.rewatchTiming.minUptimeMs ? N ?? "unknown" : void 0;
        Qt(e, r, { uptimeMs: je ? 0 : _e, ...N !== void 0 && { closeCode: N }, resumeNeverOpened: ee && !ne, reuseRefused: Lt !== void 0, stalled: xt, expired: Ct });
      } }, h);
      if (eo(e, y, r, w.data.taskId), xe) e.pendingRegistrations--, xe = false;
      let j = e.supervisors.get(r);
      if (j === void 0 || j !== y) return kb(w.data.taskId, h.taskRegistry, { quiet: true }), Zt(e, r, n.machineArm), { outcome: "skipped", reason: "cancelled" };
      if (C()) return kb(w.data.taskId, h.taskRegistry, { quiet: true }), te(e, r), { outcome: "skipped", reason: "cancelled" };
      if (P()) {
        if (kb(w.data.taskId, h.taskRegistry, { quiet: true }), p("artifact_live_subscribe", "stop_latched"), e.armOutcomes.delete(r), Xt(e, r), St || y.lastActivityAt !== Xr) dt(e, y);
        else te(e, r);
        return { outcome: "skipped", reason: "stop_latched" };
      }
      let be = ee && A.aborted;
      if (be && T !== void 0 && R.isStopped(r)) return kb(w.data.taskId, h.taskRegistry, { quiet: true }), te(e, r), { outcome: "skipped", reason: "cancelled" };
      if (e.armOutcomes.delete(r), Xt(e, r), be) return { outcome: "skipped", reason: "cancelled" };
      if (ee && (Z().wakes.scanGeneration !== Te || p9(r) !== Ue)) return { outcome: "skipped", reason: "stopped_again" };
      if (_n && le !== void 0) {
        let H = e.supervisors.get(r);
        if (H === y && !H.stopped && !br(e, r, Jr)) H.autoReactWiring = Re(H.autoReactWiring, { ...le, title: H.autoReactWiring?.title ?? le.title }, true);
      }
      let ue = se ? void 0 : e.pendingInFlightWiring.get(r), yn = _y(r), ni = yn || I !== void 0 && Z().wakes.scanGeneration !== Te, kn = ue !== void 0 && ue.freshPublishWiring && ue.scanGeneration === Z().wakes.scanGeneration && ue.stopGeneration === p9(r);
      if (ue === void 0 || A.aborted || !(I === void 0 ? !yn || kn : !ee && ni && kn)) return { outcome: "armed", taskId: w.data.taskId, ...se && { degraded: "not_editor" } };
      e.pendingInFlightWiring.delete(r), Ce = ue, kb(w.data.taskId, h.taskRegistry, { quiet: true });
    } catch {
      let w = e.supervisors.get(r);
      if (zr && w === y && !(w !== void 0 && w.explicit && !S)) te(e, r);
      else if (Yr && w !== void 0 && w === q) w.explicit = false;
      if (At !== void 0 && w === y && w.armedVia === "resume") w.armedVia = At;
      else if (hn && w === y && w.armedVia === L && !w.explicit) {
        if (w.armedVia = "mcp_write", gn === void 0) delete w.autoReactWiring;
        else w.autoReactWiring = gn;
        yD(e, r);
      }
      if (w !== void 0 && w === y && w.wake === Be) if (Rn === void 0) delete w.wake;
      else w.wake = Rn;
      if (w !== void 0 && gt !== void 0) w.resumeAnnounce = void 0;
      if (O !== void 0 && w?.lease === O && !Afo(O, { expired: false, refused: false, healthy: false })) {
        if (delete w.lease, !O.opened) delete w.renewable;
      }
      return m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"), X(e, r, n.machineArm, "ws_open_error", Y);
    }
  } finally {
    e.inFlightSubscribes.delete(r), e.inFlightWiredIntent.delete(r), e.retiredInFlightArms.delete(r), e.inFlightGenerations.delete(r), e.bootingWiredArms.delete(r);
    let C = e.supervisors.get(r);
    if (C === void 0 || C.stopped) Ve(r)?.sourceEnded();
    let J = e.armSettleWaiters.get(r) ?? [];
    e.armSettleWaiters.delete(r);
    for (let D of J) try {
      D();
    } catch (ge) {
      l(ge);
    }
    if (e.pendingInFlightWiring.delete(r), xe) e.pendingRegistrations--, xe = false;
  }
  if (Ce === void 0) throw Error("armLiveSubscription: late-park fall-through lost its park");
  return pe(e, { ...n, machineArm: void 0, userResumeWiring: void 0, approvedRelatchGen: void 0, sessionResume: void 0, pickUpRecentSummons: void 0, editorGatedWiring: void 0, autoReactWiring: Ce.wiring, freshPublishWiring: Ce.freshPublishWiring, freshPublish: n.freshPublish === true || Ce.freshPublishWiring });
}
function Pr(e, n, r, s) {
  BOr(e.armOutcomes, n, { outcome: r, reason: s, at: Date.now() }, FOr);
}
function xo(e, n, r, s, d) {
  if (r || e.handoffGeneration !== d.handoffGen || e.retiredInFlightArms.has(n)) return;
  let a = e.supervisors.get(n);
  if (a !== void 0 && !a.stopped && a.timer !== void 0) {
    if (s !== "cancelled") a.lastFailure = s;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let h = Z().durable.stopLatches.isStopped(n);
  if (!h) Pr(e, n, "failed", s);
  if (d.announce && s !== "cancelled" && !h) Do(e, n, d, s);
}
var Dr = "artifact not found", Lo = "there is nothing to retry unless the artifact is shared with the user again", Fr = "other organization", Vr = "public, outside your organization", Wo = `there is nothing to retry until ${IYe}`, Io = "there is nothing to retry: read it with the read action instead", ft = "it will not come back on its own — watch it again only if the user asks or your current task still depends on its republishes", Oo = "watch it again when you next work on this artifact", Mo = "there is nothing to re-watch while live updates are switched off";
function Po(e) {
  switch (e) {
    case "not_found":
    case "other_org":
    case "public_outside_org":
      return { advice: u1e(e) };
    case "flag_off":
      return { advice: Mo, passive: true };
    default:
      return { advice: ft, passive: true };
  }
}
function u1e(e) {
  switch (e) {
    case "not_found":
    case Dr:
      return Lo;
    case "other_org":
    case Fr:
      return Wo;
    case "public_outside_org":
    case Vr:
      return Io;
    case Nr:
    case Ur:
    case Gr:
    case tn:
      return ft;
    default:
      return;
  }
}
var Nr = "connection lost", Ur = "no live credential", Gr = "could not reconnect", tn = "made room for another watch", nn = { boot_failed: "could not connect", ws_open_error: "could not connect", sync_unavailable: "could not connect", not_found: Dr, other_org: Fr, public_outside_org: Vr, no_subscription_token: Ur, watch_cap: "watch limit reached" };
function Xt(e, n) {
  jOr(e.announcedArmFailures, n), WDn(n);
}
function WDn(e) {
  D_((n) => n.origin?.kind === "task-notification" && n.origin.source === NK && n.origin.slug === e && (n.origin.armFailed === true || n.origin.watchEnded === true));
}
function Do(e, n, r, s) {
  if (!lsn(e.announcedArmFailures, `${n}:${s}`, $Or)) return;
  let d = c1e(s) ?? s, a = u1e(s) ?? (Z().builtInArtifactHiddenForMcp ? void 0 : UOr);
  $r({ slug: n, artifactName: p1e(r.getTitle, r.url), shortReason: nn[s] ?? "not armed", event: `The live subscription for ${r.url} did not arm — ${d}. This session is NOT watching it and does not keep track of new versions of it; ${a === void 0 ? "do not claim to be watching it" : `${a}, and do not claim to be watching it meanwhile`}.` });
}
function $r(e) {
  el({ value: Hi({ taskType: NK, summary: jt(ADs(e.artifactName, e.shortReason)), body: `
<event>${jt(e.event)}</event>` }), mode: "task-notification", priority: "next", origin: { kind: "task-notification", source: NK, slug: e.slug, displayName: e.artifactName, armFailed: true }, agentId: tt() });
}
function _po(e) {
  let { slug: n, url: r, liveDocLoss: s, settlement: d } = e;
  if (d.settled === "registered") {
    WDn(n);
    return;
  }
  if (d.settled !== "unregistered" || !Wn(n, d.reason)) return;
  let { reason: a, detail: h, serverMessage: b } = d, v = s ?? `This session will NOT be woken when ${mw() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`, S = Qbr(a);
  $r({ slug: n, artifactName: p1e(e.getTitle, r), shortReason: "wake subscription not registered", event: `The durable wake subscription for ${r} was not registered (${a}${h !== void 0 ? `: ${h}` : ""}) — ${UDn(a, b)} ${v}${S === null ? "" : `; ${S}`} — do not claim to be subscribed to it meanwhile.` });
}
function Spo(e) {
  return e.connected && !WOt(e.taskId);
}
function bpo(e, n) {
  let r = Z().live, s = /* @__PURE__ */ new Set();
  for (let S of Object.values(e.taskRegistry.all())) if (sB(S) && S.status === "running" && S.frameLive !== void 0) s.add(S.frameLive.slug);
  let d = Z().durable.stopLatches, a = (S) => (n === void 0 || S === n) && !s.has(S) && !d.isStopped(S), h = new Set(ewr(e, n).map((S) => S.slug)), b = [], v = /* @__PURE__ */ new Set();
  for (let S of r.inFlightSubscribes) {
    if (!a(S) || (r.inFlightGenerations.get(S) ?? r.handoffGeneration) !== r.handoffGeneration || r.retiredInFlightArms.has(S)) continue;
    v.add(S);
    let A = r.supervisors.get(S), x = A !== void 0 && !A.stopped ? A : void 0;
    b.push({ slug: S, state: "arming", reconnect: x?.taskId !== void 0, failures: x?.consecutiveFailures ?? 0, ...x?.lastFailure !== void 0 && { lastFailure: x.lastFailure } });
  }
  for (let S of r.supervisors.values()) {
    if (!a(S.slug) || v.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if (v.add(S.slug), h.has(S.slug)) continue;
    b.push({ slug: S.slug, state: "backing_off", failures: S.consecutiveFailures, maxFailures: r.rewatchTiming.maxConsecutiveFailures, nextAt: S.nextRewatchAt ?? Date.now(), ...S.lastFailure !== void 0 && { lastFailure: S.lastFailure } });
  }
  for (let [S, A] of r.armOutcomes) {
    if (!a(S) || v.has(S)) continue;
    b.push({ slug: S, state: A.outcome, reason: A.reason, at: A.at });
  }
  return b;
}
export {
  $Dn,
  $ws,
  BDn,
  COt,
  FDn,
  Fws,
  Jbr,
  NDn,
  Nct,
  Nws,
  Qbr,
  SJt,
  Spo,
  TOt,
  UDn,
  Uws,
  WDn,
  Xbr,
  Zbr,
  _Jt,
  _po,
  apo,
  awr,
  bEe,
  bTi,
  bpo,
  c1e,
  cpo,
  dpo,
  epo,
  ewr,
  fpo,
  gJt,
  gpo,
  hJt,
  hpo,
  ipo,
  iwr,
  jDn,
  lpo,
  lwr,
  mpo,
  npo,
  nwr,
  opo,
  owr,
  ppo,
  rpo,
  rwr,
  spo,
  swr,
  tpo,
  twr,
  u1e,
  upo,
  wEe,
  xIe,
  yJt,
  ypo
};
