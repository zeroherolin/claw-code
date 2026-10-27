// mcp/toolbox-mcp-server-id.fewh.js — Claude Code 2.1.310 模块 chunk-fewhvqt5.js
import { He } from "../fs/async-hooks.9s1z.js";
import { L, U, STn } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { m3e } from "../auth/oauth-2025-04-20.ke15.js";
import { Tbe } from "../cli/chunk-33ax6j5s.js";
import { rr } from "../artifacts/chunk-m8t7qekn.js";
import { yd } from "../remote/self-hosted.qq4m.js";
import { xkt, kd, dse } from "../context/fetch-project-timeline.g27d.js";
import { Brt, d1, hwn, n5, jrt } from "./claude-browser.hdf6.js";
import { fvn, yFe } from "../shared/chunk-xz73gv4f.js";
import { Va } from "../chrome/browser-batch.ny0f.js";
import { Yi } from "../shared/chunk-e76vd23z.js";
import { cn } from "../shared/chunk-dpjnt83j.js";
import { fA } from "./always-allow.9m89.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
class q {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  subagentBroughtOwnArtifactsServer = false;
  cliOwnedConfigs = /* @__PURE__ */ new WeakSet();
  cliOwnedFirstPartyServerIds = /* @__PURE__ */ new WeakMap();
  cliOwnedFileUploadSwitches = /* @__PURE__ */ new WeakMap();
  cliOwnedBearerProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedAsyncBearerProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedResponseObservers = /* @__PURE__ */ new WeakMap();
  cliOwnedRequestHeaderProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedBeforeRequestHooks = /* @__PURE__ */ new WeakMap();
  cliOwnedCredentialRequestHeaders = /* @__PURE__ */ new WeakMap();
  cliOwnedWithheldBearerRefusals = /* @__PURE__ */ new WeakMap();
  cliOwnedResendDeciders = /* @__PURE__ */ new WeakMap();
  ccrInjectedConfigs = /* @__PURE__ */ new WeakSet();
  ccrMetaEntries = /* @__PURE__ */ new WeakSet();
  ownToolContainerConfigs = /* @__PURE__ */ new WeakSet();
  ownReplyServerConfigs = /* @__PURE__ */ new WeakSet();
  clientAuthProviders = /* @__PURE__ */ new WeakMap();
  clientFirstPartyBearers = /* @__PURE__ */ new WeakMap();
  clientTasksDeclaredBeforeServerList = /* @__PURE__ */ new WeakMap();
  firstToolsListReports = /* @__PURE__ */ new WeakMap();
  toolsListAhead = /* @__PURE__ */ new WeakMap();
  stepUpReauthFlights = /* @__PURE__ */ new Map();
  stepUpReauthExhausted = /* @__PURE__ */ new Map();
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = false;
  identityChangedThisProcess = false;
  identityTrippedHandler = null;
  identityTripUnowned = false;
  headlessMcpTeardown = null;
  headlessConnectorMountInFlight = void 0;
  transientRetryPasses = /* @__PURE__ */ new Map();
  awaitsNextTurnRedial = null;
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  discoverVerdictsRead = null;
  discoverVerdictsWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = /* @__PURE__ */ new Map();
  claudeAiConfigsFetch = null;
  claudeAiConnectorIdIndex = void 0;
  claudeAiConnectorListStatus = "pending";
  claudeAiConnectorListGeneration = 0;
  claudeAiConnectorListFetchSeq = 0;
  claudeAiConnectorListSettledSeq = 0;
  claudeAiConfigsFetchTransientFailures = /* @__PURE__ */ new WeakSet();
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = /* @__PURE__ */ new Set();
  needsAuthNoticedThisSession = /* @__PURE__ */ new Set();
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = false;
  officialUrls = void 0;
  vscodeClient = null;
  stopVscodePolicyGatesRefresh = null;
  notificationErrorHookedClients = /* @__PURE__ */ new WeakSet();
  toolRefreshSequences = /* @__PURE__ */ new WeakMap();
  droppedToolsSeqByConnection = /* @__PURE__ */ new WeakMap();
  toolsListErrorByResult = /* @__PURE__ */ new WeakMap();
  discoveryFetchErrors = /* @__PURE__ */ new WeakMap();
  rawToolsByResult = /* @__PURE__ */ new WeakMap();
  rawCommandsByResult = /* @__PURE__ */ new WeakMap();
  rawResourcesByResult = /* @__PURE__ */ new WeakMap();
  rawFetchedAtByResult = /* @__PURE__ */ new WeakMap();
  persistedDiscoveryRounds = /* @__PURE__ */ new WeakSet();
  listChangedRefetchHandlers = /* @__PURE__ */ new WeakMap();
  burnedListingDiscoverPriors = /* @__PURE__ */ new Set();
  skillsFunnelSeen = /* @__PURE__ */ new Set();
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = /* @__PURE__ */ new WeakSet();
  supersededDials = /* @__PURE__ */ new WeakSet();
  swrRefreshDialsInFlight = /* @__PURE__ */ new WeakSet();
  reauthDecisionSinkForTest = void 0;
  holdStaleReauthEntryForTest = false;
  stdioProbeTimeoutMsForTest = void 0;
  oauthCallbackListeners = /* @__PURE__ */ new Map();
  oauthCallbackSubmitters = /* @__PURE__ */ new Map();
  activeOAuthFlows = /* @__PURE__ */ new Map();
  authLost = He();
  reauthReconnect = He();
  cachedAdopt = He();
  cachedDialFailed = He();
}
var ue = new W(() => new q());
function xt() {
  return ue.of(U().host);
}
function $or(e) {
  return xt().clientAuthProviders.has(Yi(e.client));
}
function EZ(e, r) {
  let n = xt();
  if (n.cliOwnedConfigs.add(e), r?.firstPartyServer !== void 0) n.cliOwnedFirstPartyServerIds.set(e, r.firstPartyServer.id), n.cliOwnedFileUploadSwitches.set(e, r.firstPartyServer.allowsFileUpload);
  if (r?.getBearerToken) n.cliOwnedBearerProviders.set(e, r.getBearerToken);
  if (r?.resolveBearerToken) n.cliOwnedAsyncBearerProviders.set(e, r.resolveBearerToken);
  if (r?.onResponse) n.cliOwnedResponseObservers.set(e, r.onResponse);
  if (r?.requestHeaders) n.cliOwnedRequestHeaderProviders.set(e, r.requestHeaders);
  if (r?.beforeRequest) n.cliOwnedBeforeRequestHooks.set(e, r.beforeRequest);
  if (r?.credentialRequestHeaders) n.cliOwnedCredentialRequestHeaders.set(e, new Set(r.credentialRequestHeaders.map((t) => t.toLowerCase())));
  if (r?.resendAfter) n.cliOwnedResendDeciders.set(e, r.resendAfter);
  if (r?.withheldBearerRefusal !== void 0) n.cliOwnedWithheldBearerRefusals.set(e, r.withheldBearerRefusal);
  return e;
}
function Uor(e) {
  return typeof e === "object" && e !== null ? xt().cliOwnedWithheldBearerRefusals.get(e) : void 0;
}
function Kd(e) {
  return typeof e === "object" && e !== null && xt().cliOwnedConfigs.has(e);
}
function Trt(e) {
  return typeof e === "object" && e !== null ? xt().cliOwnedFirstPartyServerIds.get(e) : void 0;
}
function qii(e) {
  if (typeof e !== "object" || e === null) return true;
  let r = xt().cliOwnedFileUploadSwitches.get(e);
  if (r === void 0) return Trt(e) === void 0;
  return r();
}
function TKe(e) {
  if (typeof e !== "object" || e === null) return false;
  let r = xt();
  return r.cliOwnedBearerProviders.has(e) || r.cliOwnedAsyncBearerProviders.has(e);
}
function pe(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = xt().cliOwnedBearerProviders.get(e);
  if (!r) return null;
  try {
    return r() || null;
  } catch {
    return null;
  }
}
async function Bor(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = xt().cliOwnedAsyncBearerProviders.get(e);
  if (!r) return pe(e);
  try {
    return await r() || null;
  } catch {
    return null;
  }
}
async function jor(e, r) {
  if (typeof e !== "object" || e === null) return;
  try {
    await xt().cliOwnedBeforeRequestHooks.get(e)?.(r);
  } catch {
  }
}
function Wor(e, r) {
  if (typeof e !== "object" || e === null) return {};
  let n = xt().cliOwnedRequestHeaderProviders.get(e);
  if (!n) return {};
  try {
    return n(r);
  } catch {
    return {};
  }
}
function LVt(e, r) {
  return typeof e === "object" && e !== null && (xt().cliOwnedCredentialRequestHeaders.get(e)?.has(r.toLowerCase()) ?? false);
}
async function NVt(e, r, n) {
  if (typeof e !== "object" || e === null) return false;
  try {
    let t = xt().cliOwnedResendDeciders.get(e);
    return t === void 0 ? false : await t({ status: r.status, headers: r.headers }, n);
  } catch {
    return false;
  }
}
function Gor(e, r) {
  if (typeof e !== "object" || e === null) return;
  let n = xt().cliOwnedResponseObservers.get(e);
  if (!n) return;
  try {
    n({ method: r.method, status: r.status, headers: r.headers, requestHeaders: r.requestHeaders, bearerFingerprint: r.bearerFingerprint });
  } catch {
  }
}
import { posix as g } from "path";
var S = (e) => JSON.stringify(e);
var V = /* @__PURE__ */ new Set(["api.anthropic.com", "api-staging.anthropic.com"]), fe = /* @__PURE__ */ new Set([...V, ...m3e.map((e) => new URL(e).hostname)]);
function E9o(e) {
  return V.has(e);
}
function Kii(e) {
  let r = hSe();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected" ? { code: r.code, reason: r.reason } : { code: "view_mismatch", reason: "the eager argv scan sees a --sdk-url value commander did not bind" };
  }
  if (r.status === "rejected") return { code: r.code, reason: r.reason };
  if (r.status === "absent" || r.url !== e) return { code: "view_mismatch", reason: "the --sdk-url value commander bound disagrees with the eager argv scan" };
  return null;
}
function Ckt(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return { code: "unparseable", reason: `could not parse ${S(e)} as a URL` };
  }
  if (fe.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:") return { code: "bad_scheme", reason: `scheme ${S(r.protocol)} is not permitted for host ${S(r.hostname)}; only wss:// and https:// are accepted` };
    return null;
  }
  return { code: "not_allowlisted", reason: `host ${S(r.hostname)} is not an approved Anthropic endpoint` };
}
function hSe() {
  let e = STn();
  if (e !== void 0) return { status: "ok", url: e };
  let r = Tbe("--sdk-url"), n = r.filter(Boolean).at(-1);
  if (!n) return { status: "absent" };
  if (new Set(r).size > 1) return { status: "rejected", code: "conflicting", reason: "conflicting --sdk-url occurrences" };
  let t = Ckt(n);
  if (t) return { status: "rejected", ...t };
  return { status: "ok", url: n };
}
function SNe(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e;
}
var Fh = "remote-browser", M = "972fb542-4a76-509d-9058-f6b954ee456c", Lbn = ["browser_click", "browser_close_file_chooser", "browser_close_window", "browser_drag", "browser_drag_to_offset", "browser_file_upload", "browser_fill_form", "browser_handle_dialog", "browser_hover", "browser_list_downloads", "browser_navigate", "browser_navigate_back", "browser_open_window", "browser_press_and_hold", "browser_press_key", "browser_resize", "browser_save_download", "browser_select_option", "browser_snapshot", "browser_tabs", "browser_take_screenshot", "browser_type", "browser_wait_for"], v9o = "tengu_recursive_puddle", C = null, b = Ee({ on: false }, (e) => {
  e.on = false;
}), z = Ee({ allowed: false }, (e) => {
  e.allowed = false;
});
function Yii(e) {
  let r = C;
  return C = e, b.on = false, r;
}
function Nbn() {
  let e = C?.(v9o, false) === true;
  if (e) b.on = true;
  return e;
}
function y() {
  return z.allowed;
}
function AKe() {
  return Nbn() || b.on || z.allowed;
}
var f = ["/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/", "/v2/ccr-sessions/", "/v1/code/"], Xii = "spent";
function k9o() {
  return yd.bridgeCarrier ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "SESSION_INGRESS_URL", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"] : [];
}
function Wp(e) {
  let r = yd.atStartup;
  if (!r) return false;
  let n, t;
  try {
    n = new URL(e), t = new URL(r);
  } catch {
    return false;
  }
  if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : n.origin) !== t.origin) return false;
  return f.some((o) => n.pathname.includes(o));
}
function bNe(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return false;
  if (!Wp(r.url)) return false;
  switch (yd.bridgeCarrier) {
    case void 0:
      return true;
    case "child":
      return "scope" in r && r.scope === "dynamic" && e === kd;
    case "descendant":
      return false;
  }
}
function me(e, r) {
  let n = p(e, r);
  if (!n) return false;
  if (n.pathname === xkt) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return f.some((s) => n.pathname.includes(s)) && t.length === 1 && t[0] === dse;
}
function Jii(e) {
  let r = Rrt();
  if (r === null) return false;
  let n = p(e, r);
  if (!n) return false;
  let t = ySe.exec(n.pathname)?.[1];
  if (t === void 0) return false;
  if (!yd.ownCcrSessionIds.some((d) => rr(d) === rr(t))) return false;
  let s = [...n.searchParams.keys()], o = n.searchParams.getAll("toolbox_mcp_server_id"), i = n.searchParams.get("mcp_server_id"), a = n.searchParams.get("mcp_url");
  return new Set(s).size === s.length && s.every((d) => Kor.includes(d)) && o.length === 1 && o[0] === jrt && (i === null || ee().has(i)) && (a === null || p(a, r) !== null);
}
function Qii(e) {
  if (!Wp(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  let n = [...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id")];
  if (n.length === 0) return false;
  let t;
  try {
    t = decodeURIComponent(r.pathname);
  } catch {
    return true;
  }
  let s = g.normalize(t), o;
  for (let c of [ySe, _, k, T]) if (o = c.exec(r.pathname)?.[1] ?? c.exec(s)?.[1], o !== void 0) break;
  if (o === void 0 && ["/v2/ccr-sessions/", "/v1/code/sessions/", "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"].some((c) => r.pathname.includes(c) || t.includes(c) || s.includes(c))) return true;
  if (o === ie && yd.ownCcrSessionIds.length === 0) return true;
  let a = ee(), d = o === void 0 ? [] : re(rr(o));
  return n.some((c) => a.has(c) || d.includes(c) || c.toLowerCase() === Va);
}
function ee() {
  let e = /* @__PURE__ */ new Set([jrt]);
  for (let r of yd.ownCcrSessionIds) for (let n of re(rr(r))) e.add(n);
  return e;
}
function re(e) {
  return x(e, Va);
}
function x(e, r) {
  return [`cse_${e}`, `session_${e}`].map((n) => n5(n, r));
}
var ge = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;
function zor(e, r) {
  if (e !== d1 || r.scope !== "dynamic" || Kd(r) || !("url" in r) || typeof r.url !== "string" || !Wp(r.url)) return false;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return false;
  }
  if (n.username !== "" || n.password !== "" || n.hash !== "") return false;
  if (ge.test(n.pathname)) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return ySe.test(n.pathname) && t.length === 1 && t[0] === hwn;
}
function Zii(e) {
  if (!("url" in e) || typeof e.url !== "string" || Kd(e)) return false;
  let r = "headers" in e ? e.headers : void 0, n = Object.entries(typeof r === "object" && r !== null ? r : {}), t = n.flatMap(([s, o]) => u(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [o.trim()] : []);
  if ("headersHelper" in e && e.headersHelper) return Wp(e.url);
  return we(e.url, t, n.flat().filter((s) => typeof s === "string"));
}
function he(e) {
  return [hwn, ...e.flatMap((r) => {
    let n = rr(r);
    return [`cse_${n}`, `session_${n}`].map((t) => n5(t, d1));
  })].map(u);
}
function v(e, r, { orItsName: n = true } = {}) {
  if (n && m(e).some((s) => s.replace(ye, "") === d1)) return true;
  let t = e;
  for (let s = 0; s <= 3; s++) {
    if (ne(t, r)) return true;
    let o = se(t);
    if (s === 3 && o !== t) return true;
    t = o;
  }
  return false;
}
function ne(e, r) {
  let n = [e, e.replace(/%[0-9a-f]{2}/gi, "")].map(u);
  return r.some((t) => n.some((s) => s.includes(t)));
}
var Y = /[\\\p{Cc}]/u, te = /[%?#\\\s\p{Cc}]/u, G = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;
function u(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "");
}
function we(e, r = [], n = r) {
  if (!Wp(e)) return false;
  if (e.length > 32768) return true;
  let t;
  try {
    t = new URL(e);
  } catch {
    return false;
  }
  if ([e, ...r].some((l) => l.includes("${"))) return true;
  if (Me(t.pathname)) return true;
  let s = [...[...t.searchParams].flat(), ...[t.hash, t.username, t.password].filter((l) => l !== ""), ...n];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return true;
  let o = L(s.flatMap(m));
  if (o.some((l) => A(l, Re)) || O(t, ["mcp_url"]).some((l) => Se(l, t.hostname))) return true;
  let i = O(t, ["mcp_server_id", "toolbox_mcp_server_id"]), a = [t.pathname, g.normalize(t.pathname)], d = h(k, a) ?? h(T, a), c = h(ySe, a) ?? h(_, a) ?? d, { ownCcrSessionIds: D } = yd, j = L([...a, ...o].flatMap((l) => P.flatMap((R) => {
    let H = l.indexOf(R), N = H === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(l.slice(H + R.length))?.[0];
    return N === void 0 ? [] : [N];
  })));
  if (j.length > 8) return true;
  let w = he(L([...D, ...c === void 0 ? [] : [c], ...j]));
  if ([...o, ...m(t.pathname + t.search + t.hash)].some((l) => ne(l, w))) return true;
  if ([...r, ...d === void 0 ? [] : [d]].some((l) => v(l, w)) || t.pathname.split("/").some((l) => v(l, w, { orItsName: false }))) return true;
  let F = c === ie && D.length === 0;
  if (r.length > 0 && F) return true;
  if (i.length === 0) return false;
  if (c === void 0 ? P.some((l) => a.some((R) => R.includes(l))) : F) return true;
  return i.some((l) => v(l, w));
}
function O(e, r) {
  let n = r.map(u);
  return [...e.searchParams].filter(([t]) => m(t).some((s) => n.includes(u(s)))).map(([, t]) => t);
}
function h(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t;
  }
  return;
}
var FVt = ["/v2/ccr-sessions/", "/v1/code/sessions/"], P = [...FVt, "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"], Re = [...P, "/v1/code/local/", "/v1/code/mcp/"];
function Se(e, r) {
  return !be(e, r) && (te.test(e) || A(e, f));
}
function m(e) {
  let r = [e], n = [e];
  for (let t = 1; t <= 3; t++) n = L(n.flatMap((s) => [K(s), K(s.replace(_e, (o, i, a) => o.length === 3 ? o : `	%${i}${a}	`))])), r.push(...n);
  return L(r);
}
var ye = /[\s\p{Cc}\ufffd+]/gu, _e = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;
function K(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, (r) => new TextDecoder().decode(Uint8Array.from(r.slice(1).split("%"), (n) => parseInt(n, 16))));
}
function A(e, r) {
  let n = Z(e);
  return r.some((t) => {
    let s = Z(t).filter((o) => o !== "");
    return [[...s, "memory", "mcp"], [...s, "mcp", "memory"], ...s.includes("mcp") ? [[...s, "memory"]] : []].some((o) => Ce(n, o));
  });
}
function Z(e) {
  return e.toLowerCase().split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u).flatMap((r) => [...r.split(/[\s\p{Cc}\ufffd+]+/u), ""]);
}
function Ce(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "", o = 0;
    for (let i = t; ; i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (o += a.length, o === s.length) {
        n++, t = i;
        break;
      }
    }
  }
  return n === r.length;
}
function Me(e) {
  if (te.test(e) || A(e, f)) return true;
  let r = e.toLowerCase();
  return [r, g.normalize(r)].some((n) => f.some((t) => {
    let s = n.indexOf(t);
    return s !== -1 && ve(n.slice(s));
  }));
}
function be(e, r) {
  let n = G.exec(e)?.[0];
  if (n === void 0 || Y.test(e) || !URL.canParse(e) || X(e, r)) return false;
  for (let t = 0; t <= 3; t++) {
    let s = se(n);
    if (s === n) return true;
    if (Y.test(s) || !G.test(s) || s.toLowerCase().includes(E(r)) || URL.canParse(s) && X(s, r)) return false;
    n = s;
  }
  return false;
}
function X(e, r) {
  return [E(r), ""].includes(E(new URL(e).hostname));
}
function E(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r);
}
function ve(e) {
  return [e, g.normalize(e)].some((r) => {
    let n = r.split("/").filter((s) => s !== ""), t = n.indexOf("memory");
    return t !== -1 && n.includes("mcp", t + 1) || n.some((s, o) => s === "mcp" && n[o + 1] === "memory");
  });
}
function se(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, (r) => String.fromCharCode(Number.parseInt(r.slice(1), 16)));
  }
}
var ySe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/, _ = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;
function oe(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`;
}
var Oe = new RegExp(`^${oe("[A-Za-z0-9_-]+")}mcp$`);
function C9o(e) {
  return Wp(e) && Oe.test(new URL(e).pathname);
}
var Pe = new RegExp(`^${oe("[^/]+")}`);
function Art(e) {
  if (!Wp(e)) return false;
  let r;
  try {
    r = g.normalize(decodeURIComponent(new URL(e).pathname));
  } catch {
    return true;
  }
  return Pe.test(r);
}
var k = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/, T = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/, ie = "-";
function Vor(e, r, n) {
  let t = p(e, r);
  if (!t) return null;
  let s = ySe.exec(t.pathname), o = xe(t, r);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`;
}
var Kor = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"], r4r = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function xe(e, r) {
  let n = [...e.searchParams.keys()];
  if (new Set(n).size !== n.length || n.some((i) => !Kor.includes(i)) || e.searchParams.get("toolbox_mcp_server_id") !== dse) return null;
  let t = new URLSearchParams(), s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let i = p(s, r);
    if (!i || i.pathname !== xkt || i.search !== "") return null;
    t.set("mcp_url", `${r}${xkt}`);
  }
  let o = e.searchParams.get("mcp_server_id");
  if (o !== null) {
    if (!r4r.test(o)) return null;
    t.set("mcp_server_id", o);
  }
  return t.set("toolbox_mcp_server_id", dse), t.toString();
}
function p(e, r) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  return n.origin === r && n.username === "" && n.password === "" && n.hash === "" ? n : null;
}
function Rrt() {
  let e = yd.atStartup;
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}
function Fbn(e) {
  let r = Rrt(), n = r === null ? null : p(e, r);
  if (!n) return false;
  let t = (ySe.exec(n.pathname) ?? _.exec(n.pathname))?.[1];
  return t !== void 0 && yd.ownCcrSessionIds.some((s) => rr(s) === rr(t));
}
function qor(e) {
  let r = Rrt();
  return r !== null && me(e, r);
}
function Tkt(e) {
  let r = Rrt(), n = r === null ? null : p(e, r), t = n ? ySe.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [...n.searchParams.keys()], o = n.searchParams.get("mcp_server_id"), i = n.searchParams.get("toolbox_mcp_server_id");
  if (new Set(s).size !== s.length || s.some((a) => !Kor.includes(a)) || o === null || !r4r.test(o) || i === null) return null;
  return { sessionSegment: t, mcpServerId: o, toolboxMcpServerId: i, upstreamUrl: n.searchParams.get("mcp_url") ?? void 0 };
}
function Akt(e) {
  return e !== void 0 && Ckt(e) === null ? new URL(e).origin : null;
}
var Ae = "/v1/code/mcp/hearthbot", Ue = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;
function Yor(e) {
  if (!Wp(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === Ae || Ue.test(r.pathname));
}
var ke = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/email\/mcp$/;
function eai(e, r) {
  if (e !== Brt || r.scope !== "dynamic" || Kd(r) || !("url" in r) || typeof r.url !== "string" || !Wp(r.url)) return false;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return false;
  }
  return n.username === "" && n.password === "" && n.hash === "" && n.search === "" && ke.test(n.pathname);
}
var ae = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/remote-browser\/mcp$/;
function tai(e) {
  if (!Wp(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return (r.protocol === "https:" || r.protocol === "http:") && r.username === "" && r.password === "" && r.hash === "" && r.search === "" && ae.test(r.pathname);
}
function T9o(e) {
  if (!y() || !Fbn(e)) return false;
  let r = new URL(e), n = ySe.exec(r.pathname)?.[1], t = r.searchParams.get("mcp_server_id");
  return n !== void 0 && [...r.searchParams.keys()].length === 2 && r.searchParams.get("toolbox_mcp_server_id") === M && x(rr(n), Fh).some((s) => s === t);
}
function nai(e, r) {
  if (!y() || !Wp(r)) return false;
  let n = new URL(r), t = O(n, ["mcp_server_id", "toolbox_mcp_server_id"]).flatMap(m);
  if (t.some(Ie)) return !(e === Fh && T9o(r));
  let s = m(n.pathname).map((i) => g.normalize(i).replace(/\/+$/, "")), o = [...yd.ownCcrSessionIds, ...[ySe, _, k, T].flatMap((i) => h(i, s) ?? [])].flatMap((i) => x(rr(i), Fh)).map(le);
  return s.some((i) => ae.test(i)) || t.some((i) => u(i) === u(Fh) || o.some((a) => I(i).includes(a)));
}
var Te = /(?![0-9])\p{Nd}/u;
function Ie(e) {
  return y() && (Te.test(e) || I(e).includes(le(M)));
}
function le(e) {
  return I(e).replace(/^0+/, "");
}
function I(e) {
  let r = fA(e)?.replaceAll("-", "") ?? "", n = e.toLowerCase().replaceAll("urn:", "").replaceAll("uuid:", "").replace(/[^0-9a-f]/g, "");
  return `${r}${n}`;
}
var B = /* @__PURE__ */ new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]), ce = "/devices/mcp";
function o4r(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && B.has(r.hostname);
}
function wNe(e) {
  if ("url" in e && typeof e.url === "string" && Wp(e.url)) return true;
  return Kd(e);
}
function de(e) {
  if (!Wp(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0;
}
var Le = /* @__PURE__ */ new Set(["http:", "https:", "ws:", "wss:"]);
function Xor(e) {
  let r = de(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Le.has(n.protocol) ? n.hostname.toLowerCase() : void 0;
}
function DRe(e) {
  let r = de(e);
  if (!r) return false;
  try {
    let n = new URL(r);
    return B.has(n.hostname) && n.pathname === ce;
  } catch {
    return false;
  }
}
var rai = [...B].map((e) => `https://${e}${ce}`);
function lse(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return r.search = "", r.username = "", r.password = "", r.hash = "", r.toString().replace(/\/$/, "");
  } catch {
    return;
  }
}
function i1(e) {
  return e ? cn(e) : void 0;
}
function oai(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e);
  if (r.origin === "null") return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${r.origin}/…` : r.origin;
}
function RKe(e) {
  return "url" in e ? e.url : null;
}
function xrt(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [r.command, ...r.args ?? []];
}
function A9o(e) {
  if (!f.some((r) => e.includes(r))) return e;
  try {
    return new URL(e).searchParams.get("mcp_url") || e;
  } catch {
    return e;
  }
}
function npe(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown");
}
function Jor(e) {
  let { authoredUnexpanded: r, expanded: n, cliOwned: t } = e, s = e.detail ?? "endpoint";
  if (r) {
    let i = RKe(r);
    if (i) {
      if (s === "endpoint") return yFe(i);
      if (Be(i)) return J(i);
      return Q(i) ?? J(i);
    }
    let a = xrt(r);
    if (a) return s === "endpoint" ? yFe(a.join(" ")) : void 0;
    return s === "endpoint" ? npe(r) : void 0;
  }
  let o = RKe(n);
  if (o) {
    let i = t && Wp(o) ? A9o(o) : o, a = Q(i);
    if (a !== void 0) return a;
  }
  return s === "endpoint" ? npe(n) : void 0;
}
function Q(e) {
  try {
    let r = new URL(e).origin;
    return r === "null" ? void 0 : r;
  } catch {
    return;
  }
}
function $bn(e, r = e) {
  let n = (i) => {
    let a = e.length;
    for (let d of ["/", "?", "#", "\\"]) {
      let c = r.indexOf(d, i);
      if (c !== -1 && c < a) a = c;
    }
    return a;
  }, t = r.indexOf("://"), s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0, o = n(s);
  return { scheme: e.slice(0, s), authority: e.slice(s, o), rest: e.slice(o) };
}
function Be(e) {
  return $bn(e, fvn(e)).authority.includes("${");
}
function J(e) {
  let r = fvn(e), { scheme: n, authority: t } = $bn(r), s = n.length, o = s + t.length;
  if (r.includes("@", o)) return yFe(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"), a = e.slice(i === -1 ? s : s + i + 1, o);
  if (a === "") return;
  return yFe(e.slice(0, s) + a);
}
export {
  $bn,
  $or,
  A9o,
  AKe,
  Akt,
  Art,
  Bor,
  C9o,
  Ckt,
  DRe,
  E9o,
  EZ,
  FVt,
  Fbn,
  Fh,
  Gor,
  Jii,
  Jor,
  Kd,
  Kii,
  Kor,
  LVt,
  Lbn,
  NVt,
  Nbn,
  Qii,
  RKe,
  Rrt,
  SNe,
  T9o,
  TKe,
  Tkt,
  Trt,
  Uor,
  Vor,
  Wor,
  Wp,
  Xii,
  Xor,
  Yii,
  Yor,
  Zii,
  bNe,
  eai,
  hSe,
  i1,
  jor,
  k9o,
  lse,
  nai,
  npe,
  o4r,
  oai,
  qii,
  qor,
  r4r,
  rai,
  tai,
  v9o,
  wNe,
  xrt,
  xt,
  ySe,
  zor
};
