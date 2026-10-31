// darwin/chrome/chrome-permission-prompt.js — Claude Code 2.1.310（darwin）模块 chunk-ahtr3f8r.js
import { Wte } from "../computer-use/ref-1.js";
import { tpt, k0t, G8e, Mte, nUn } from "../permissions/not-signed-in.js";
import { V } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { Ye } from "../telemetry/anthropic-workspace-id.js";
import { Jl, X, Nt } from "../shared/chunk-57ff8cc1.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { ee } from "../fs/gitlab-runner-authentication-token.js";
import { Ze } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.js";
import { b_ } from "../remote/local-agent.js";
import { Ls, Ki } from "../mcp/allowed-warning.js";
import { tu, PH } from "../shell/invalid-type.js";
import { GLe, EE, k } from "../settings/global-config-and-gates.js";
import { nr } from "../remote/moved-directory.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { zi } from "../remote/chunk-7e620e0d.js";
import { JS } from "../telemetry/image-resize-fallback.js";
import { _ft, cne, f2n, YN } from "../core/conversation-engine.js";
import { Gv } from "../mcp/chunk-7d9731c1.js";
import { V0, W2 } from "./chrome-open-url.js";
import { ld } from "../telemetry/tool-result.js";
import { _B, kYe, UTr, Upt, DHt, CBn, vxs } from "../permissions/chunk-ecacee0b.js";
import { ZAs } from "../shared/chunk-244836c1.js";
import { nRs, rRs } from "./roster-changed.js";
import { E_o, den } from "../shared/chunk-0d726e57.js";
import { eUn } from "../shared/chunk-909b5542.js";
import { CYe } from "../computer-use/browser-batch.js";
import { RBn } from "./chrome-tool-call-disconnected.js";
import { wB } from "../shared/resource-link.js";
import { Va } from "./browser-batch.js";
import { D } from "../shared/chunk-7027e6d5.js";
function x(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${_B(o.host)}`;
}
function te(e, o) {
  let t = x(e), i = x(o);
  return t === void 0 || i === void 0 || t !== i;
}
function F(e, o) {
  let t = zi().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return te(t, o) ? { from: t, to: o } : void 0;
}
function B(e, o) {
  zi().lastExecutedTabUrlByScope.set(e, o);
}
var re = "Browser extension is not connected. The user's app may now be showing a card that sets up a browser for Claude. In one or two short sentences, tell them that you need a browser for this, and that they can set up the Claude desktop app or Claude in Chrome in the card below. Give no links or other installation steps, and stop until they reply.";
async function N(e, { agentId: o, messages: t, options: { messageClientPlatform: i, refreshTools: r, tools: s } }) {
  let [d, ...b] = e.content ?? [];
  if (!(d?.type === "text" && b.length === 0 && eUn(d.text) && o === void 0 && nr() && b_() && (i === "web_claude_ai" || i === "desktop_app") && GLe(t) && !zi().bridgeBinding?.context.getPersistedDeviceId?.() && k("tengu_memoized_owl", false) && !(r?.() ?? s).some((a) => Gv(a.name) && !a.name.startsWith(V0)) && await rRs())) return e;
  return g("chrome_setup_card_answer"), { content: [{ type: "text", text: re }] };
}
var Q = 200;
function H(e, o) {
  let t = zi().resolvedHostByToolUseId;
  if (t.size >= Q) t.clear();
  t.set(e, o);
}
function ne(e, o) {
  let t = zi().resolvedUrlByToolUseId;
  if (t.size >= Q) t.clear();
  t.set(e, o);
}
function J() {
  let { key: e, fromHost: o } = E_o();
  if (o) return { sessionId: e };
  let t = V();
  return { sessionId: t };
}
function bAi(e, o) {
  zi().bridgeBinding = { context: e, socketClient: o };
}
function j(e, o) {
  let t = V0.slice(0, -2), i = `${V0}*`;
  for (let r of Object.values(e.alwaysAllowRules)) for (let s of r ?? []) {
    let d = s.replace(/\(\*?\)$/, "");
    if (d === o || d === t || d === i) return true;
  }
  return false;
}
var se = /* @__PURE__ */ new Set(["tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "resize_window", "shortcuts_list", "list_connected_browsers"]), ie = /* @__PURE__ */ new Set(["switch_browser", "select_browser"]), le = { tab_missing: "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.", batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.", batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.", batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.", batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch." };
function ce(e, o) {
  let t = [];
  if (e === "browser_batch") {
    if (!Array.isArray(o.actions)) return { kind: "deny", code: "batch_malformed_item" };
    for (let s of o.actions) {
      if (!D(s) || typeof s.name !== "string" || s.name === "browser_batch") return { kind: "deny", code: "batch_malformed_item" };
      t.push({ name: s.name, input: D(s.input) ? s.input : {} });
    }
  } else t.push({ name: e, input: o });
  let i = /* @__PURE__ */ new Set(), r = false;
  for (let s of t) {
    if (s.name === "navigate") {
      r = true;
      continue;
    }
    if (ie.has(s.name)) {
      if (t.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (se.has(s.name)) continue;
    if (r) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof s.input.tabId !== "number") return { kind: "deny", code: "tab_missing" };
    i.add(s.input.tabId);
  }
  if (i.size === 0) return { kind: "none" };
  if (i.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...i][0] };
}
var Z = 5e3, de = 2500, ue = /* @__PURE__ */ new Set(["connect_timeout", "no_browser_selected_timeout", "browser_selected_late_timeout", "answer_timeout"]);
async function G(e) {
  let o = Jl.monotonicNow(), t = Promise.withResolvers(), i = new AbortController(), r = O({ onSentToSelectedBrowser: t.resolve }).then((u) => (i.abort(), q(u, e))), s = { sent: false }, d = t.promise.then(async () => {
    await X(de, i.signal);
    let u = Z - (Jl.monotonicNow() - o), a = zi().bridgeBinding?.socketClient;
    if (i.signal.aborted || u <= 0 || a?.isConnected() !== true || a.hasActiveSelection?.() !== true) return;
    s.sent = true;
    let n = q(await O({ capMs: u }), e);
    if (L(n)) return n;
    if (n.ok || !ue.has(n.failure)) s.callMs = n.callMs;
    return;
  }).catch((u) => {
    l(u);
    return;
  }), b = await Promise.race([r.then(() => {
    return;
  }), d]);
  if (b === void 0) {
    let u = await r;
    if (s.sent && !u.ok && u.failure === "answer_timeout") return { ...u, failure: "answer_timeout_after_retry", retryCallMs: s.callMs };
    return u;
  }
  return r.then((u) => {
    let a = { connect_ms: u.connectMs, call_ms: u.callMs, retry_call_ms: b.callMs }, n = L(u);
    if (n) {
      if (_B(n.host) !== _B(L(b)?.host ?? "")) p("chrome_permission_prompt", "tab_lookup_hosts_differed", a);
      return;
    }
    let _ = u.ok ? "non_web_tab_url" : u.failure;
    if (_ === "answer_timeout") {
      p("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", a);
      return;
    }
    p("chrome_permission_prompt", "tab_lookup_rescued_after_failure", { ...a, first_lookup_failure: c(_) });
  }).catch(l), b;
}
function z(e) {
  return { connect_ms: e.connectMs, call_ms: e.callMs, ...!e.ok && e.retryCallMs !== void 0 && { retry_call_ms: e.retryCallMs } };
}
function L(e) {
  return e.ok ? DHt(e.url) : void 0;
}
function q(e, o) {
  if (!e.ok) return e;
  let { tabs: t, connectMs: i, callMs: r } = e, s = t.findIndex((b) => b == null || b.tabId === o), d = t[s];
  if (s === -1) return { ok: false, failure: t.length === 0 ? "empty_tab_list" : "tab_not_listed", connectMs: i, callMs: r };
  if (d == null || typeof d.url !== "string") return { ok: false, failure: "malformed_tab_list", connectMs: i, callMs: r };
  if (d.url === "") return { ok: false, failure: "tab_url_empty", connectMs: i, callMs: r };
  return { ok: true, url: d.url, connectMs: i, callMs: r };
}
async function O(e) {
  let o = Jl.monotonicNow(), t = {}, i;
  try {
    let b = zi().bridgeBinding;
    if (!b) return { ok: false, failure: "binding_missing", connectMs: 0, callMs: 0 };
    let { socketClient: u } = b;
    i = await Nt((async () => {
      if (!await u.ensureConnected()) return "not_connected";
      if (t.browserSelected = u.hasActiveSelection?.(), t.startedAt = Jl.monotonicNow(), t.browserSelected === true) e?.onSentToSelectedBrowser?.();
      let a = await u.callTool("tabs_context_mcp", { createIfEmpty: false, includePermissionState: false }, { permissionMode: "ask", sessionScope: J() });
      if (!a) return "empty_result";
      if (a.error) return `tool_error_${tpt("tabs_context_mcp", k0t(a.error))}`;
      let n = a.result?.content, _ = Array.isArray(n) && n[0] && typeof n[0] === "object" && "text" in n[0] && typeof n[0].text === "string" ? n[0].text : void 0;
      if (!_) return "no_text";
      let C;
      try {
        C = ee(_);
      } catch {
        return _.includes("createIfEmpty") ? "no_tab_group" : "not_json";
      }
      let y = C?.availableTabs;
      return Array.isArray(y) ? y : "no_tab_list";
    })().catch((a) => {
      if (t.startedAt === void 0) return "connect_threw";
      if (a instanceof Error && (a.name === "SocketConnectionError" || a.name === "ToolCallLostError")) return "connection_lost";
      if (a instanceof G8e) return "no_extension";
      if (a instanceof Mte) return "extension_disconnected";
      return "call_threw";
    }), e?.capMs ?? Z, "queryTabUrl bridge call").catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (u.hasActiveSelection?.() === false) return "no_browser_selected_timeout";
      return t.browserSelected === false ? "browser_selected_late_timeout" : "answer_timeout";
    });
  } catch {
    i = "other_threw";
  }
  let r = Jl.monotonicNow(), s = Math.round((t.startedAt ?? r) - o), d = t.startedAt === void 0 ? 0 : Math.round(r - t.startedAt);
  return typeof i === "string" ? { ok: false, failure: i, connectMs: s, callMs: d } : { ok: true, tabs: i, connectMs: s, callMs: d };
}
ZAs(async () => {
  let e = await O();
  return e.ok ? e.tabs : void 0;
});
var me = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function W(e) {
  return { type: "text", text: `[Image from Claude in Chrome — ${e}; not inlined]` };
}
function fe(e) {
  if (!e) return false;
  let o = Ze(e, ";").trim().toLowerCase();
  return me.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function pe(e, o) {
  let t = ld(o), i = [];
  for (let r of e.content ?? []) if (r.type === "text") i.push({ type: "text", text: r.text });
  else if (r.type === "image") if (fe(r.mimeType)) try {
    let { block: s } = await JS({ data: String(r.data), mediaType: r.mimeType, limits: t });
    i.push(s);
  } catch {
    i.push(W("could not be decoded"));
  }
  else i.push(W(`unsupported type ${r.mimeType ?? "unknown"}`));
  return i;
}
function _e(e) {
  if (!Array.isArray(e.actions)) return false;
  return e.actions.some((o) => {
    if (!D(o) || typeof o.name !== "string") return true;
    return o.name === "browser_batch" || Wte.has(o.name) && !cne(o.name, D(o.input) ? o.input : {});
  });
}
function oe(e) {
  if (!Array.isArray(e.actions)) return [];
  let o = [];
  for (let t of e.actions) {
    if (!D(t)) continue;
    let i = D(t.input) ? t.input : {};
    if (t.name === "browser_batch") {
      let d = oe(i);
      if (d === "unvettable") return d;
      o.push(...d);
      continue;
    }
    if (t.name !== "navigate" || typeof i.url !== "string") continue;
    let r = i.url.trim().toLowerCase();
    if (r === "back" || r === "forward") continue;
    let s = DHt(i.url);
    if (!s) return "unvettable";
    o.push(s.host, CBn(s));
  }
  return o;
}
function Y(e, o) {
  return { source: o, ruleBehavior: "allow", ruleValue: { toolName: W2, ruleContent: e } };
}
function K(e, o, t) {
  let i = CYe(e, o);
  return t ? `Allow Claude in Chrome to ${i} on ${t}?` : `Allow Claude in Chrome to ${i}?`;
}
function be(e, o) {
  return async (t) => {
    let i;
    try {
      i = new URL(t.url);
    } catch {
    }
    let r = !!i?.host && e.has(_B(i.host)) && !UTr(o, _B(CBn({ url: i.href })));
    if (!r) m("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}
async function he(e, o, t, i, r, s, d) {
  let b = zi().bridgeBinding;
  if (!b) throw m("chrome_permission_prompt", "binding_missing"), Error("Claude in Chrome bridge is not initialized in this session.");
  if (t.aborted) throw new Ye("Claude in Chrome tool call aborted");
  let u, a = new Promise((S, h) => {
    u = () => h(new Ye("Claude in Chrome tool call aborted")), t.addEventListener("abort", u, { once: true });
  }), n, _ = s?.mark("external");
  try {
    n = await Promise.race([nUn(b.context, b.socketClient, e, f2n(o ?? {}), r), a]);
  } finally {
    if (_?.(), u) t.removeEventListener("abort", u);
  }
  if (n.isError) {
    let S = (n.content ?? []).flatMap((A) => A.type === "text" ? [A.text] : []).join(`
`) || `${e} failed`, h = n._meta, w = h?.toolCallFailureCause, v = h?.isBridgeTimeout === true ? "bridge_timeout" : h?.isFrontLoadBoundExceeded === true ? "front_load_bound_exceeded" : w === "connection_lost_mid_call" || w === "connection_lost_before_call" ? w : void 0, M = D(h) ? wB(h) : void 0;
    throw Object.assign(new EE(S, "Claude in Chrome tool returned error", M ? { _meta: M } : void 0, `chrome_${v ?? tpt(e, S)}`), { mcpErrorSource: "other" });
  }
  let C = await pe(await N(n, d), i), y = wB(n._meta);
  return { data: C, ...y && { mcpMeta: { _meta: y } } };
}
function b_o(e) {
  let o = `${V0}${e}`;
  return { checkPermissions: async (r, s) => {
    RBn(s.options?.messageClientPlatform);
    let d = s.toolUseId, b = Wte.has(e);
    if (b && cne(e, r)) {
      let f = ae(s);
      if (f?.chromeHostToolAsksEnabled !== false && f?.mcpAskForTools?.[Va]?.includes(e) === true && f.shouldAvoidPermissionPrompts !== true && f.mode !== "dontAsk") return { behavior: "ask", message: "Claude in Chrome requires permission.", suppressAlwaysAllowRule: true, decisionReason: { type: "other", reason: "Claude in Chrome action" }, metadata: { command: { name: o, description: K(e, r, void 0) } } };
      return { behavior: "allow", updatedInput: r };
    }
    let u = b && !cne(e, r) || e === "browser_batch" && _e(r);
    if (e === "navigate" && typeof r.url === "string" && (r.url.trim().toLowerCase() === "back" || r.url.trim().toLowerCase() === "forward")) return { behavior: "allow", updatedInput: r };
    let a = e === "browser_batch" ? vxs(r) : { input: r, toolName: e }, n;
    if (a && a.toolName === "navigate" && typeof a.input.url === "string") {
      if (n = DHt(a.input.url), !n) return m("chrome_permission_prompt", "non_web_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable URL", classifierApprovable: false } };
    } else if (a && typeof a.input.tabId === "number") {
      let f = await G(a.input.tabId);
      if (!f.ok) return m("chrome_permission_prompt", `tab_url_unresolved_${f.failure}`, z(f)), { behavior: "deny", message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: tab URL unresolved", classifierApprovable: false } };
      if (n = DHt(f.url), !n) return m("chrome_permission_prompt", "non_web_tab_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable tab URL", classifierApprovable: false } };
    }
    let _ = ae(s), C = tu(s.options?.tools?.find((f) => Rt(f, o)), _), y = C === "bypassPermissions" || PH(C, _.isBypassPermissionsModeAvailable), S = _.chromeNavigationClassifierEnabled === true && !y && (_.chromeClassifierFloorEnabled === true || Ls(C)), h, w, v = () => {
      if (!d) return;
      if (w === void 0) zi().resolvedUrlByToolUseId.delete(d);
      else ne(d, w);
      if (h === void 0) _ft(d);
    };
    if (S) {
      let f = ce(e, r);
      if (f.kind === "deny") return m("chrome_permission_prompt", f.code), v(), { behavior: "deny", message: le[f.code], decisionReason: { type: "safetyCheck", reason: `Claude in Chrome: ${f.code}`, classifierApprovable: false } };
      if (f.kind === "tab") {
        let R = n && a?.toolName !== "navigate" && a?.input.tabId === f.tabId ? { ok: true, url: n.url, connectMs: 0, callMs: 0 } : await G(f.tabId), U = R.ok ? DHt(R.url) : void 0;
        if (U === void 0) return m("chrome_permission_prompt", `tab_url_unresolved_${R.ok ? "non_web_tab_url" : R.failure}`, z(R)), v(), { behavior: "deny", message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: tab URL unresolved", classifierApprovable: false } };
        if (h = F(den(), U.url), !(u && _.mode === "plan")) w = U.url;
      }
    }
    v();
    let M = e === "browser_batch" ? oe(r) : [];
    if (M === "unvettable") return m("chrome_permission_prompt", "non_web_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable URL", classifierApprovable: false } };
    let A = kYe(_), I = [...n ? [n.host, CBn(n)] : [], ...M].map((f) => Upt(A, f)).find((f) => f !== void 0);
    if (I) return p("chrome_permission_prompt", "domain_rule_denied"), I;
    let T = false, E;
    if (n) {
      let f = _B(n.host), R = A.sourceOf.get(f) ?? "session";
      if (T = A.allowed.has(f), E = T ? Y(n.host, R) : void 0, T && h === void 0 && _.chromeClassifierFloorEnabled !== true && !u) {
        if (d) H(d, n);
        return { behavior: "allow", updatedInput: r, decisionReason: { type: "rule", rule: Y(n.host, R) } };
      }
      if (d && (T || _.chromeClassifierFloorEnabled === true || !j(_, o))) H(d, n);
    }
    let P = zi().bridgeBinding;
    if (d && P && !y && !(_.chromeClassifierFloorEnabled !== true && j(_, o)) && await nRs(s.abortController.signal)) return { behavior: "deny", message: P.context.onToolCallDisconnected(), decisionReason: { type: "other", reason: "Claude in Chrome: no browser connected" } };
    if (u && _.mode === "plan") return { behavior: "passthrough", message: "Claude in Chrome requires permission.", suggestions: [{ type: "addRules", rules: [{ toolName: o, ruleContent: void 0 }], behavior: "allow", destination: "session" }] };
    return { behavior: "ask", message: "Claude in Chrome requires permission.", suggestions: n ? T ? void 0 : [{ type: "addRules", rules: [{ toolName: W2, ruleContent: n.host }], behavior: "allow", destination: "session" }] : [{ type: "addRules", rules: [{ toolName: o, ruleContent: void 0 }], behavior: "allow", destination: "session" }], decisionReason: h ? { type: "safetyCheck", reason: "Claude in Chrome: cross-site navigation pending", classifierApprovable: true } : { type: "other", reason: n ? `Claude in Chrome action on ${n.host}` : "Claude in Chrome action" }, metadata: { command: { name: o, description: K(e, r, n?.host), chrome: n ? { ...n, domainAllowed: T, navigation: h, ...E && { grantRule: E, classifierUnavailable: _.chromeClassifierFloorEnabled === true && _.canAutoClassifierRun === false } } : void 0 } } };
  }, call: async (r, s, d, b, u, a) => {
    let n = s.toolUseId, _ = n ? zi().resolvedHostByToolUseId.get(n) : void 0, C = _?.host, y = n ? zi().resolvedUrlByToolUseId.get(n) : void 0;
    if (n) zi().resolvedHostByToolUseId.delete(n), zi().resolvedUrlByToolUseId.delete(n);
    let S = ae(s), h = kYe(S), w = h.allowed, v = [...h.allowedRaw];
    if (C && !w.has(_B(C))) w.add(_B(C)), v.push(C);
    let M = s.options?.tools?.find((f) => Rt(f, o)), A = tu(M, S), I = A === "bypassPermissions" || A === "auto" && s.autoModeClassified === true && C !== void 0 && h.denied.size === 0 && _?.keepHostPin !== true, T = J(), E = I ? { permissionMode: "skip_all_permission_checks", sessionScope: T } : C ? { permissionMode: "follow_a_plan", allowedDomains: v, onPermissionRequest: be(w, h.denied), sessionScope: T } : v.length > 0 ? { permissionMode: "follow_a_plan", allowedDomains: v, sessionScope: T } : { permissionMode: "ask", sessionScope: T }, P = await he(e, r, s.abortController.signal, s.options.mainLoopModel, E, a?.timing, s);
    if (y !== void 0) B(den(), y);
    if (C) g("chrome_permission_prompt");
    return P;
  }, ignoresWholeToolAllowRule: (r) => Wte.has(e) && cne(e, r) };
}
export {
  bAi,
  b_o
};
