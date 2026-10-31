// darwin/artifacts/artifact-durable-subscribe.js — Claude Code 2.1.310（darwin）模块 chunk-4h4v931j.js
import { Vt } from "../shared/chunk-3b9c376b.js";
import { HX } from "../context/not-admin-owned.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { St, l } from "./cowritten-artifact-html.js";
import { UM, t } from "../fs/gitlab-runner-authentication-token.js";
import { re, qg } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { lr } from "./cobalt-plinth-lovage.js";
import { T2 } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { Te } from "../models/total-tokens-reminder.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { nr } from "../remote/moved-directory.js";
import { Z } from "./same-account.js";
import { Dzt } from "../settings/global-config-and-gates.js";
import { pEs, fEs, IIe, mEs, l7, rLn } from "./artifact-comment-monitor.js";
import { Fws, $ws, npo, rpo } from "./slate-lantern-hush.js";
import { mw } from "../shared/chunk-de23d3ee.js";
import { ole } from "./cobalt-plinth-samphire.js";
import { ejn, JHt, qte, E0, Kwo, JR, cu } from "./cobalt-plinth-comfrey.js";
import { hYe } from "../shared/chunk-84e3ba80.js";
import { Xc } from "../shared/chunk-a5f59e6a.js";
function R() {
  return Z().durable.rows;
}
async function N(e, n) {
  let r = Z().durable.slugOps, o = (r.get(e) ?? Promise.resolve()).then(n, n), d = o.then(() => {
    return;
  }, () => {
    return;
  });
  r.set(e, d);
  try {
    return await o;
  } finally {
    if (r.get(e) === d) r.delete(e);
  }
}
function j0n() {
  return [...R().values()];
}
function fIe(e) {
  return R().get(e);
}
var ve = [3e4, 12e4, 6e5];
function C_s(e, n) {
  if (!i.CLAUDE_CODE_REMOTE || e === null) return;
  if (e.readFailed) {
    if (p("artifact_durable_subscribe", "registry_unread"), n.reread !== void 0) Se(n.reread, n);
    return;
  }
  oe(e, n);
}
async function Se(e, n, r = ve) {
  for (let a of r) {
    if (await X(a, void 0, { unref: true }), Z().durable.registrySink !== null) return true;
    let o;
    try {
      o = await e();
    } catch (d) {
      t(`[artifact] worker-state re-read threw: ${String(d)}`);
      continue;
    }
    if (o === null || o.readFailed) continue;
    try {
      oe(o, n);
    } catch (d) {
      return l(d), false;
    }
    return g("artifact_durable_subscribe", { registry_reread: true }), true;
  }
  return p("artifact_durable_subscribe", "registry_reread_failed"), false;
}
function oe(e, n) {
  let r = mEs(e.internal?.artifact_durable_watches), { durable: a } = Z();
  for (let o of r?.orphans ?? []) a.orphanTriggers.add(o);
  for (let o of r?.rows ?? []) {
    if (a.unwatchedSlugs.has(o.slug) && !a.rows.has(o.slug)) {
      G(o);
      continue;
    }
    if (a.slugOps.has(o.slug)) {
      a.pendingRestoredRows.set(o.slug, o), H(N(o.slug, async () => {
        a.pendingRestoredRows.delete(o.slug), G(o), IIe();
      }));
      continue;
    }
    G(o);
  }
  rLn(r?.stopped ?? /* @__PURE__ */ new Map(), n);
  for (let o of /* @__PURE__ */ new Set([...a.rows.keys(), ...a.pendingRestoredRows.keys(), ...a.slugOps.keys()])) if (a.stopLatches.isStopped(o)) Ce(o);
  if (pEs(n.sink), r !== null) fEs();
  if (IIe(), r !== null && r.rows.length + r.stopped.size > 0) g("artifact_durable_subscribe", { restored_rows: r.rows.length, restored_stops: r.stopped.size }), t(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
}
function Ce(e) {
  let { durable: n } = Z(), r = () => {
    let a = n.rows.get(e);
    if (a === void 0 || !n.stopLatches.isStopped(e)) return;
    n.rows.delete(e), n.unwatchedSlugs.add(e);
    for (let o of [a.triggerId, ...a.unreleased ?? []]) n.orphanTriggers.add(o);
    p("artifact_durable_subscribe", "restored_stop_retired_row");
  };
  if (n.slugOps.has(e)) {
    H(N(e, async () => {
      r(), IIe();
    }));
    return;
  }
  r();
}
function G(e) {
  let { durable: n } = Z(), r = n.rows.get(e.slug);
  if (r !== void 0 || n.unwatchedSlugs.has(e.slug) || n.stopLatches.isStopped(e.slug)) {
    for (let a of [e.triggerId, ...e.unreleased ?? []]) if (a !== r?.triggerId) n.orphanTriggers.add(a);
    return;
  }
  n.rows.set(e.slug, { ...e, restored: true });
}
function se(e) {
  let n = hYe(e);
  if (!n) return null;
  let r = HX();
  if (!r) return null;
  return { found: n, dial: r };
}
function T_s(e) {
  return se(e) !== null;
}
async function ie(e, n, r) {
  let a = se(e);
  if (!a) return null;
  try {
    return await a.dial(a.found, r?.detachedFromUser ? { timeoutMs: 15e3 } : { signal: n });
  } catch {
    return null;
  }
}
function x(e, n) {
  let r = new RegExp(`^${n}:\\s*(\\S+)`, "m").exec(e);
  return r && r[1] ? r[1] : null;
}
function De(e) {
  let n = x(e, "url"), r = x(e, "trigger_id"), a = x(e, "sealed_secret");
  if (!n || !r || !a) return null;
  return { url: n, triggerId: r, sealedSecret: a };
}
function Me(e) {
  return x(e, "trigger_id");
}
var Ee = "/integrations/v1/code/webhook-triggers/", We = "/fire", ke = ["published", "comment"], J = ["published"];
function A_s() {
  return i.CLAUDE_CODE_REMOTE ? null : "not_remote";
}
function Rlo() {
  let e = Z().durable, n = e.subscribeForbidden;
  if (n) if (!n.relayActive && E0(ejn)) j();
  else return { reason: "subscribe_forbidden", serverMessage: n.serverMessage };
  let r = e.subscribeUnrelayed;
  return r ? { reason: "relay_unavailable", ...r } : null;
}
function j() {
  let e = Z().durable;
  if (e.subscribeForbidden === null) return;
  e.subscribeForbidden = null, npo("subscribe_forbidden");
}
function le() {
  let e = Z().durable;
  if (e.subscribeUnrelayed === null) return;
  e.subscribeUnrelayed = null, npo("relay_unavailable");
}
var ue = "watch_url";
function Ae(e, n) {
  let r = false;
  for (let a of e) {
    if (a.mcpInfo?.serverName !== n) continue;
    if (a.mcpInfo.toolName === ue) return true;
    r = true;
  }
  return r ? false : null;
}
function xlo() {
  return nr() && qte() && !E0(ejn) && !Dzt();
}
function Plo(e) {
  if (!i.CLAUDE_CODE_REMOTE) return null;
  let { watchUrlWithheld: n, watchUrlGranted: r } = Z().durable;
  if (n) return n;
  if (r) return null;
  let a = hYe(e.clients);
  return a?.type === "connected" && Ae(e.tools, a.name) === false ? "tool_not_offered" : null;
}
function Ie(e, n) {
  if (Vt(n) === null) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === Ee + n + We;
}
function Fe(e) {
  return e.includes("trigger limit reached") || e.includes("maximum number of webhook triggers");
}
function Oe(e) {
  return e.includes("a session with an originator account");
}
function xe(e) {
  if (e.includes("tool is not available to this session")) return "tool_not_offered";
  if (e.includes("bound to a desktop device")) return "session_device_bound";
  if (e.includes("tool is not enabled for this organization") || e.includes("Session webhooks are not enabled for this organization")) return "org_not_enabled";
  return null;
}
var Le = [["cannot be found or is no longer active", "session_not_found"], ["not available in this deployment", "unavailable_in_deployment"]];
function Ue(e) {
  for (let [n, r] of Le) if (e.includes(n)) return r;
  return null;
}
var Q = 160, Ne = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/, $e = 40, He = /^[(']?\d{1,5}[)'.,;:!?%]*$/, de = /^[-\u2013\u2014.,;:!?()]{1,3}$/, Be = /(?!\u0020)\p{Zs}|[\p{M}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu, ce = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/, k = "[redacted]", L = "[url]", ze = 2048;
function fe(e) {
  return e.length <= $e && Ne.test(e);
}
function ee(e) {
  return e === void 0 || e !== L && e !== k && fe(e);
}
function Ge(e, n, r) {
  return fe(e) || de.test(e) || He.test(e) && ee(n) && ee(r);
}
var te = /(?:^|[^A-Za-z_])(url|trigger_id)[ \t]*:|sealed_secret/i;
function ne(e) {
  if (te.test(e)) return;
  let n = re(e, ze), r = n.split(ce).map((s) => qg(s.replaceAll("	", " ")).replace(Be, ""));
  if (r.some((s) => te.test(s))) return;
  let a = r.findIndex((s) => s.trim() !== "");
  if (a === -1) return;
  let o = r[a] ?? "", d = a === r.length - 1 && n.length < e.length, f = o.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${L} `).split(/\s+/).filter((s) => s !== "");
  if (d && f.length > 0) f[f.length - 1] = k;
  let h = f.map((s, c) => s === L || Ge(s, f[c - 1], f[c + 1]) ? s : k).filter((s, c, y) => s !== k || y[c - 1] !== k);
  if (!h.some((s) => s !== k && s !== L && !de.test(s))) return;
  let b = h.join(" ");
  return b.length > Q ? `${re(b, Q - 3)}...` : b;
}
function je(e) {
  let n = "content" in e ? e.content : void 0;
  if (!Array.isArray(n)) return "";
  let r = [];
  for (let a of n) if (typeof a === "object" && a !== null && "type" in a && a.type === "text" && "text" in a && typeof a.text === "string") r.push(a.text);
  return r.join(`
`);
}
async function be(e, n, r) {
  try {
    let a = await T2(e, { name: n, arguments: r }, { timeout: 15e3 });
    return { isError: "isError" in a && a.isError === true, text: je(a) };
  } catch {
    return null;
  }
}
async function D(e, n) {
  let r = await be(e, "unwatch_url", { trigger_id: n });
  return r !== null && !r.isError;
}
async function ge(e) {
  let { durable: n } = Z(), r = [...n.orphanTriggers];
  if (r.length === 0) return;
  let a = await Promise.all(r.map((d) => D(e, d))), o = 0;
  if (r.forEach((d, f) => {
    if (a[f]) n.orphanTriggers.delete(d);
    else o++;
  }), o > 0) p("artifact_durable_subscribe", "orphan_trigger_release_failed");
  IIe();
}
async function pe(e, n, r, a) {
  try {
    let o = await cu.postRelayBound(e, n, { headers: Xc(), timeout: 15e3, refreshOAuth: true, credentials: a, ...r && { signal: r } });
    return { res: o, relayed: o.route === "relay" };
  } catch (o) {
    return { res: void 0, relayed: JR(o) };
  }
}
function me(e) {
  return e.relayed ? { relayed: true } : {};
}
function U(e) {
  return e.relayed ? [{ relay: true }] : [];
}
async function J_r(e) {
  let { slug: n, context: r, detachedFromUser: a } = e;
  Fws(n);
  let o;
  try {
    let d = Ke(n, r, a);
    return H(d), o = await d, Ye(o), o;
  } finally {
    let d = $ws(n, o);
    try {
      e.onSettled?.(d);
    } catch (f) {
      l(f);
    }
  }
}
function H(e) {
  let { pendingOps: n } = Z().durable;
  n.add(e);
  let r = () => void n.delete(e);
  e.then(r, r), UM(Ve);
}
async function Ve() {
  await Pe(Promise.allSettled([...Z().durable.pendingOps]), 1e4);
}
async function Ke(e, n, r) {
  return N(e, async () => {
    let a = R().get(e);
    if (a?.restored && !r) {
      let o = await ae(e, n, false, a);
      if (o.outcome === "subscribed") return o;
      let d = o.outcome === "already_watching" ? o.outcome : o.outcome === "failed" && o.kept ? "outcome_unknown" : o.reason;
      return p("artifact_durable_subscribe", `refresh_${d}`), t(`[artifact] restored durable watch not refreshed: reason=${d}`), _e(R().get(e) ?? a);
    }
    return ae(e, n, r);
  });
}
function Ye(e) {
  switch (e.outcome) {
    case "subscribed":
      if (e.downgraded) {
        p("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
        break;
      }
      g("artifact_durable_subscribe", ...U(e));
      break;
    case "already_watching":
      g("artifact_durable_subscribe", { already_watching: true, ...e.restored && { restored: true } });
      break;
    case "skipped":
      p("artifact_durable_subscribe", e.reason);
      break;
    case "failed": {
      let n = Xe(e), [r] = U(e), a = { ...e.status !== void 0 && { status: e.status }, ...e.gatewayDeclined !== void 0 && { gateway_declined: e.gatewayDeclined }, ...r }, o = Object.keys(a).length > 0 ? [a] : [];
      if (n !== void 0) p("artifact_durable_subscribe", n, ...o);
      else m("artifact_durable_subscribe", e.reason, o[0]);
      let d = e.status !== void 0 ? ` status=${e.status}` : "", f = e.serverMessage !== void 0 ? ` server="${e.serverMessage}"` : "";
      t(`[artifact] durable watch failed: reason=${e.reason}${d}${f}`, { level: n !== void 0 ? "debug" : "warn" });
      break;
    }
  }
}
function Xe(e) {
  switch (e.reason) {
    case "aborted":
      return "aborted";
    case "no_originator":
      return e.latched ? "no_originator_latched" : void 0;
    case "subscribe_forbidden":
      return e.latched ? "subscribe_forbidden_latched" : "subscribe_forbidden";
    case "relay_unavailable":
      return e.latched ? "relay_unavailable_latched" : "relay_unavailable";
    default:
      return;
  }
}
function _e(e) {
  return { outcome: "already_watching", triggerId: e.triggerId, since: e.since, events: e.events, ...e.restored && { restored: true } };
}
async function ae(e, n, r, a) {
  if (!lr.test(e)) return { outcome: "failed", reason: "invalid_slug" };
  let o = R().get(e);
  if (o && o !== a) return _e(o);
  if (l7({ storageV5: n.storageV5 }), Z().durable.stopLatches.isStopped(e)) return { outcome: "skipped", reason: "stop_latched" };
  if (St() || Te() !== "firstParty") return { outcome: "failed", reason: "client_policy" };
  if (xlo()) return { outcome: "skipped", reason: "relay_not_served" };
  if (r && Z().durable.originatorRefused) return { outcome: "failed", reason: "no_originator", latched: true };
  let d = Rlo();
  if (r && d) return d.reason === "subscribe_forbidden" ? { outcome: "failed", reason: "subscribe_forbidden", latched: true, serverMessage: d.serverMessage } : { outcome: "failed", reason: "relay_unavailable", latched: true, status: d.status, relayed: true, fromGateway: true };
  let f = r ? Plo(n.getMcp()) : null;
  if (f) return { outcome: "skipped", reason: f };
  let h = await ie(n.getMcp().clients, n.abortController.signal, r ? { detachedFromUser: r } : void 0);
  if (!h) {
    if (!r && n.abortController.signal.aborted) return { outcome: "failed", reason: "aborted" };
    return { outcome: "skipped", reason: "no_wake_minter" };
  }
  await ge(h);
  let b = await be(h, ue, {});
  if (!b || b.isError) {
    let _ = b ? ne(b.text) : void 0, v = _ !== void 0 ? { serverMessage: _ } : {};
    if (b && Fe(b.text)) return { outcome: "failed", reason: "trigger_limit", ...v };
    if (b && Oe(b.text)) {
      let F = Z().durable, W = F.originatorRefused;
      return F.originatorRefused = true, W ? { outcome: "failed", reason: "no_originator", latched: true, ...v } : { outcome: "failed", reason: "no_originator", ...v };
    }
    let E = b ? xe(b.text) : null;
    if (E) return Z().durable.watchUrlWithheld = E, { outcome: "skipped", reason: E };
    return { outcome: "failed", reason: (b ? Ue(b.text) : null) ?? "mint_failed", ...v };
  }
  let s = Z().durable;
  s.originatorRefused = false, s.watchUrlWithheld = null, s.watchUrlGranted = true;
  let c = De(b.text);
  if (!c) {
    let _ = Me(b.text);
    if (_) await D(h, _);
    return { outcome: "failed", reason: "mint_failed" };
  }
  if (!Ie(c.url, c.triggerId)) return await D(h, c.triggerId), { outcome: "failed", reason: "mint_failed" };
  if (!r && n.abortController.signal.aborted) return { outcome: "failed", reason: await D(h, c.triggerId) ? "aborted" : "watch_trigger_release_failed" };
  let y, w = false, S = {}, A = false, P = false, C, T = false, I = mw() ? ke : J, V = false, K = `/api/frame/subscribe/${e}`, B = qte() ? JHt("POST", K) : null, he = E0(B), ye = B !== null && Kwo(B), Y = () => pe(K, { url: c.url, sealed_secret: c.sealedSecret, events: I }, r ? void 0 : n.abortController.signal, n.credentials), M = await Y();
  if (M.res?.ok && M.res.fromFrame && M.res.status === 400 && I.includes("comment")) I = J, V = true, M = await Y();
  let O = me(M), { res: u } = M;
  if (!u) T = !r && n.abortController.signal.aborted;
  else if (u.ok) {
    if (y = u.status, w = u.status >= 200 && u.status < 300, !w) {
      let _ = typeof u.data === "string" ? u.data.trim() : void 0, v = u.response?.headers?.["content-type"], E = _ !== void 0 && _ !== "" && !ce.test(_) && !/[<>]/.test(_) && typeof v === "string" && v.toLowerCase().startsWith("text/plain"), z = ole(u.data), F = u.fromFrame && (z !== null || E), W = F ? ne(z?.error ?? _ ?? "") : void 0;
      S = { ...!u.fromFrame && { fromGateway: true }, ...u.gatewayDeclined !== void 0 && { gatewayDeclined: u.gatewayDeclined }, ...W !== void 0 && { serverMessage: W } };
      let Re = u.route === "relay" || !(ye || u.gatewayDeclined === 0);
      if (u.status === 403 && E && W !== void 0 && Re && a === void 0) A = true, P = s.subscribeForbidden !== null, s.subscribeForbidden = { serverMessage: W, relayActive: he };
      else if (F && u.status >= 400 && u.status < 500 && u.status !== 401 && u.status !== 403) j();
    } else if (u.fromFrame) j();
    if (u.fromFrame) le();
  } else if (u.reason === "relay-unavailable" || u.reason === "relay-not-served") {
    if (u.status !== 0) {
      if (C = "relay_unavailable", y = u.status, S = { fromGateway: true }, a === void 0) P = s.subscribeUnrelayed !== null, s.subscribeUnrelayed = { status: y };
    }
  } else C = u.reason === "no-auth" ? "no_auth" : "client_policy";
  if (!w) {
    let _ = !u || u.ok && (!u.fromFrame || u.status >= 500);
    if (a !== void 0 && _) return R().set(e, { ...a, unreleased: [...a.unreleased ?? [], c.triggerId] }), IIe(), t(`[artifact] refresh subscribe outcome unknown; keeping trigger ${c.triggerId} beside ${a.triggerId}`), { outcome: "failed", reason: T ? "aborted" : "subscribe_failed", status: y, kept: true, ...O, ...S };
    let v = await D(h, c.triggerId);
    if (T) return { outcome: "failed", reason: v ? "aborted" : "watch_trigger_release_failed", ...O };
    return { outcome: "failed", reason: C ?? (A ? "subscribe_forbidden" : "subscribe_failed"), status: y, ...O, ...S, ...P && { latched: true } };
  }
  let q = (/* @__PURE__ */ new Date()).toISOString();
  R().set(e, { slug: e, triggerId: c.triggerId, since: q, events: I }), IIe();
  let we = a ? [a.triggerId, ...a.unreleased ?? []].filter((_) => _ !== c.triggerId) : [];
  if ((await Promise.all(we.map((_) => D(h, _)))).includes(false)) p("artifact_durable_subscribe", "superseded_trigger_release_failed");
  return { outcome: "subscribed", triggerId: c.triggerId, since: q, events: I, ...V && { downgraded: true }, ...O };
}
async function W0n(e) {
  let { slug: n, context: r } = e;
  if (rpo(n), !R().has(n) && !i.CLAUDE_CODE_REMOTE) return { wasWatching: false, teardown: "unsent" };
  if (!lr.test(n)) return { wasWatching: false, teardown: "unsent" };
  let a = N(n, () => Ze(n, r));
  return H(a), a;
}
async function Ze(e, n) {
  let r = R().get(e);
  Z().durable.unwatchedSlugs.add(e);
  let a = false, o = "dispatched", d = false, f, h = false, b = await pe(`/api/frame/unsubscribe/${e}`, {}, n.abortController.signal, n.credentials), s = U(me(b)), { res: c } = b;
  if (!c) d = n.abortController.signal.aborted;
  else if (c.ok) {
    if (a = c.status >= 200 && c.status < 300, c.fromFrame) le();
  } else if (o = "refused", c.reason === "relay-unavailable" || c.reason === "relay-not-served") if (c.status !== 0) f = c.status;
  else h = true;
  let y = true;
  if (r || Z().durable.orphanTriggers.size > 0) {
    let w = await ie(n.getMcp().clients, n.abortController.signal, { detachedFromUser: true });
    if (r) {
      let S = [r.triggerId, ...r.unreleased ?? []], A = w === null ? S.map(() => false) : await Promise.all(S.map((C) => D(w, C)));
      y = !A.includes(false);
      let { durable: P } = Z();
      S.forEach((C, T) => {
        if (!A[T]) P.orphanTriggers.add(C);
      }), R().delete(e), IIe();
    }
    if (w !== null) await ge(w);
  }
  if (a && y) g("artifact_durable_subscribe", { unwatch: true, ...s[0] });
  else if (d && y) p("artifact_durable_subscribe", "unwatch_aborted", ...s);
  else if (f !== void 0 && y) p("artifact_durable_subscribe", "unwatch_relay_unavailable", { status: f, ...s[0] });
  else {
    let w = c?.ok && !a ? { status: c.status, ...s[0] } : f !== void 0 ? { status: f, ...s[0], trigger_release_failed: true } : s[0];
    m("artifact_durable_subscribe", a ? "unwatch_trigger_release_failed" : f !== void 0 ? "unwatch_relay_unavailable" : o === "refused" && !h ? "unwatch_client_policy" : "unwatch_failed", ...w ? [w] : []);
  }
  return { wasWatching: r !== void 0, teardown: o };
}
export {
  A_s,
  C_s,
  J_r,
  Plo,
  Rlo,
  T_s,
  W0n,
  fIe,
  j0n,
  xlo
};
