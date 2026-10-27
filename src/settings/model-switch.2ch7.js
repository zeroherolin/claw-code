// settings/model-switch.2ch7.js — Claude Code 2.1.310 模块 chunk-2ch73rky.js
import { d, v, ui } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { i } from "../shared/environment.9a41.js";
import { cy, Fbe, ITn } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { he } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { gT } from "../shell/invalid-type.qnva.js";
import { ss } from "../shell/chunk-tjkwy3jp.js";
import { ln, fe, qx, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { NAe, c_n, x4, Xo, Hh, sM, iM, WV, OG, MG, VAe, DF, Xr, HG, DG, cnr, Yni, e1, dh, gH, Doe, Yv, Wb, PVe, dvt, pd, Xe, QQ, I4, VV, Qo, Ft, Nx, wm, Fx, vt, Wt } from "./global-config-and-gates.27xj.js";
import { ifn, RTe, O4s, XZe, $Yn } from "../api/anthropic-client.7pf8.js";
import { ed } from "../models/ccr-unsupported-default-mode-ignored.fdkh.js";
import { Zme } from "../auth/client-data-cache-key.bpey.js";
import { nWe, wne, Kon, qon, Tv, dAo, oE, iS, Uge, $le, uOr } from "../core/conversation-engine.31gx.js";
import { XCs, sZt, QIe, kte, m7 } from "../auth/api-key.1s9q.js";
import { Vgo, iZt, Kgo, zEe } from "../vendor/aws-sdk/denied-by-server.6c7g.js";
import { nc, Vhn, Sa } from "../shared/chunk-wwfwgwca.js";
import { Ot, Fn } from "../models/claude-mythos-preview.rw6s.js";
function y(e, o, s) {
  if (!vt()) return false;
  let a = e !== null ? Ft(e) : pd(), n = a.toLowerCase(), l = n.includes("opus") || n.includes("fable"), r = n.includes("opus-4-6"), c = n.includes("sonnet-4-6");
  if (o && Hh(e)) return true;
  let u = ifn(a);
  if (u !== "pay_per_request" && u !== "included_in_plan") return true;
  if (!wm(n)) return false;
  if (l && s) return false;
  return r || c;
}
function XIe(e, o, s, a) {
  let n = Xo(), l = n && o && (!e || a?.announceKeptOn === true), r = n && !!e && !o;
  return (l ? " · Fast mode ON" : "") + (y(s, o, I4()) ? " · Draws from usage credits" : "") + (r ? " · Fast mode OFF" : "");
}
function YCs(e, o, s) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${y(s, true, I4()) ? " · Draws from usage credits" : ""}` : "Fast mode OFF";
}
function $E(e) {
  let o = QQ(e ?? Wb());
  return e === null ? `${o} (default)` : o;
}
var R = 5e3;
async function O(e) {
  if (e === null) return w("follows_account");
  if (N(e)) return w("not_representable");
  if (QIe() !== "primary") return w("not_primary");
  if (NAe() !== "served") return w("not_served");
  let o = kte();
  if (o === null || o.kind !== "account") return w("no_account_scope");
  return T(o, m7(), e);
}
async function T(e, o, s) {
  let a = { model: Ft(s) };
  try {
    let n = await Wt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, a, { auth: "teleport-org", isBackground: true, timeout: R, validateStatus: () => true });
    if (!n.ok) return t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), p("model_default_server_sync", `declined_${n.reason}`), { status: "skipped", reason: "declined" };
    let l = n.status;
    if (l < 200 || l >= 300) return t(`[servedCatalog] selection write (${o}): HTTP ${l}`), p("model_default_server_sync", `http_${l}`), { status: "error", reason: "http_status", httpStatus: l };
    return t(`[servedCatalog] selection write (${o}) ok`), g("model_default_server_sync"), await A(e, o, n.data, a.model), { status: "ok", httpStatus: l };
  } catch (n) {
    let l = ui(n).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${l}`), p("model_default_server_sync", `network_${l}`), { status: "error", reason: "network" };
  }
}
async function A(e, o, s, a) {
  let n = XCs(e, o);
  if (n === void 0 || n.catalog === null) return;
  let l = c_n().safeParse(s), r = l.success && l.data.id === o ? l.data : { ...n.catalog.state ?? { id: o }, model: a, selection_source: "user_setting" };
  await sZt(e, o, { ...n, staleAt: Math.min(n.staleAt, Date.now()), catalog: { ...n.catalog, state: r } });
}
function w(e) {
  return t(`[servedCatalog] selection write skipped: ${e}`), { status: "skipped", reason: e };
}
function N(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function JIe(e, o, s, a) {
  let n = e === "default" ? null : e;
  if (n === null) {
    let r = DF(Wb(), "switch");
    if (r !== null) return m("model_switch", "denied_by_managed_settings"), { ok: false, message: r, code: "restricted_by_org" };
  }
  let l;
  if (n) {
    let r = B(n);
    if (r !== null) {
      let c = Ot(n.trim().toLowerCase()), u = x4("model");
      switch (r.kind) {
        case "disabled":
          return m("model_switch", "alias_1m_disabled"), { ok: false, message: u ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${n}' isn't available. Run ${u} ${c} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${n}' isn’t available. Switch to ${c} instead.`, code: "alias_1m_disabled" };
        case "unsupported":
          return m("model_switch", "alias_1m_unsupported"), { ok: false, message: u ? `${Qo(r.carrier)} doesn't have a 1M context window, so '${n}' isn't available. Run ${u} ${c} to use it with its standard context window.` : `${Qo(r.carrier)} doesn’t have a 1M context window, so '${n}' isn’t available. Switch to ${c} to use its standard context window.`, code: "alias_1m_unsupported" };
        case "noModeDependentVariant":
          return m("model_switch", "alias_1m_no_mode_variant"), { ok: false, message: u ? `'${n}' isn't available: the ${c} setting switches models in plan mode and has no 1M form. Run ${u} ${c}, or ${u} sonnet[1m] for a 1M context window.` : `'${n}' isn’t available, because the ${c} setting switches models in plan mode and has no 1M form. You can switch to ${c}, or to sonnet[1m] for a 1M context window.`, code: "alias_1m_unsupported" };
      }
    }
  }
  if (n && OG(n, MG())) {
    let r = Yv(n);
    if (r === null) {
      let c = await zEe(n, o, s);
      if (c !== "overturned") {
        m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let u = x4("model");
        return { ok: false, message: `Model '${n}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`, code: c === "probe_failed" ? "check_failed" : "restricted_by_org" };
      }
    } else l = n, n = r;
  } else if (n && !Xr(n)) {
    let r = Yv(n);
    if (r === null) return m("model_switch", W(n)), { ok: false, message: `Model '${n}' is not available. Your organization restricts model selection.`, code: "restricted_by_org" };
    l = n, n = r;
  }
  if (n && jgo(n)) return m("model_switch", "opus_1m_unavailable"), { ok: false, message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n && Wgo(n)) return m("model_switch", "sonnet_1m_unavailable"), { ok: false, message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n) {
    let r = e1(n);
    if (r) switch (r.reason) {
      case "disabled":
        if (r.notOffered) return m("model_switch", "not_offered"), { ok: false, message: r.minimumVersion !== void 0 ? Yni(r.minimumVersion) : cnr(n), code: "not_offered" };
        return m("model_switch", "disabled_by_org"), { ok: false, message: `Model '${n}' is not currently available for your account${r.description ? `. ${r.description}` : "."}`, code: "unavailable_for_account" };
      case "absent": {
        let c = await Vgo(Kgo(n), { forceServerProbe: true, credentials: s }, a?.deadlineMs), u = F(c, a);
        if (!c.valid && !u) {
          m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
          let f = x4("model");
          return { ok: false, message: c.notFound ? `${r.displayName} isn't available for your account yet. ${f ? `Run ${f} to pick another model.` : "Switch to a different model."}` : c.error, ...L(c.notFound || c.permissionDenied ? "unavailable_for_account" : D(c)), ...c.serverRefusedModel === true && l === void 0 && { serverRefusedModel: true } };
        }
        if (c.valid) Zme(o, s);
        return { ok: true, model: iZt(n) ? n.trim().toLowerCase() : n, ...l !== void 0 && { substitutedFrom: l }, ...u && { unconfirmed: true } };
      }
    }
  }
  if (!n) return { ok: true, model: n };
  if (iZt(n)) return { ok: true, model: n.trim().toLowerCase() };
  try {
    let r = await Vgo(n, { credentials: s, ...a?.confirmWithServer === false && { serverProbe: false } }, a?.deadlineMs), c = !r.valid && r.creditsRequired === true && a?.acceptCreditsRequired === true && yFn(E(n)), u = F(r, a), f = !r.valid && r.sharedLimitReached === true && a?.acceptSharedLimitRefusal === true;
    if (!r.valid && !c && !u && !f) return m("model_switch", "invalid_model"), { ok: false, message: r.error, ...L(D(r)), ...r.serverRefusedModel === true && l === void 0 && { serverRefusedModel: true } };
    return { ok: true, model: E(n), ...l !== void 0 && { substitutedFrom: l }, ...!r.valid && c && { creditsRefusal: r.error }, ...u && { unconfirmed: true } };
  } catch (r) {
    return m("model_switch", "validate_exception"), { ok: false, message: `Failed to validate model: ${d(r)}`, code: "check_failed" };
  }
}
function E(e) {
  return e;
}
async function OT(e, o, s, a, n = {}) {
  let l = o(), r = Tv(l), c = I(l, s);
  if (c.length === 0) return { decision: "proceed", skipConfirm: false, messages: [] };
  let u = [], f, M = false, _ = true;
  for (let h of c) {
    let S = await dAo(e, { ...h, requestedModel: s, source: a }, { signal: n.signal });
    if (u.push(...S.messages), S.decision === "block") return { decision: "block", reason: S.reason, messages: u };
    if (S.decision === "ask") M = true, f ??= S.reason;
    else _ = _ && S.skipConfirm;
  }
  if (Tv(o()) !== r) {
    if (n.revalidating) return { decision: "block", reason: "the session model changed while a PreModelSwitch hook was running; pick again", messages: u };
    let h = await OT(e, o, s, a, { ...n, revalidating: true });
    return { ...h, messages: [...u, ...h.messages] };
  }
  return M ? { decision: "ask", reason: f, messages: u } : { decision: "proceed", skipConfirm: _, messages: u };
}
function I(e, o) {
  let s = qon(e), a = e.toolPermissionContext.mode, n = [a, a === "plan" ? "default" : "plan"], l = /* @__PURE__ */ new Set(), r = [];
  for (let c of n) {
    let u = Kon(s, c), f = Kon(o, c), M = `${u}\0${f}`;
    if (u !== f && !l.has(M)) l.add(M), r.push({ fromModel: u, toModel: f });
  }
  return r;
}
function S8e(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${ip(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(ip)].join(`
`);
}
function ip(e) {
  return Sa(nc(Vhn(e.trimEnd())));
}
function o2(e, o, s) {
  return [`Model switch to ${$E(e)} was blocked by a PreModelSwitch hook${o ? `: ${ip(o)}` : ""}`, ...s.map(ip)].join(`
`);
}
async function b8e(e, o, s, a, n, l, r, c, u) {
  let f = s().fastMode;
  if (Fbe(), oE(e, s(), o, l), a((k) => ({ ...k, mainLoopModel: o, mainLoopModelForSession: null })), r !== void 0) p("model_switch", "family_alias_stepped_down");
  else g("model_switch");
  let M = Xo() ? sM(o, f) : !!f;
  if (Xo()) {
    if (WV(), M !== !!f) a((k) => ({ ...k, fastMode: M })), iM(f, M);
  }
  let _ = n ? await FMt(o, c) : null;
  u?.(_);
  let h = _?.kind === "saved", S = `${Uge}${iS($E(o))}${h ? $le : " for this session only"}`;
  return S += XIe(f, M, o, { announceKeptOn: true }), S += $Mt(_), S += (h ? Ugo(o) : "") || Bgo(o), S;
}
var U = 3e3, hFn = 15e3;
async function FMt(e, o, s = U) {
  let a = Un("userSettings", { model: e ?? void 0 }, void 0, o);
  a.then((l) => l.error ? void 0 : O(e)).catch(() => {
  });
  let n = await Pe(a, s);
  if (n === void 0) return p("model_set_default", "unconfirmed"), { kind: "unconfirmed" };
  if (n.error) return m("model_set_default", "write_failed"), { kind: "failed", error: n.error };
  return g("model_set_default"), { kind: "saved" };
}
function $Mt(e) {
  if (e === null || e.kind === "saved") return "";
  let o = ss(ln("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` · couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed": {
      let s = e.error.cause, a = s instanceof Error ? `can't be written (${v(s) ?? s.message})` : "isn't valid JSON";
      return ` · couldn't save it as your default: ${o} ${a}`;
    }
  }
}
function Ugo(e) {
  let o = i.ANTHROPIC_MODEL;
  if (!o || !Xr(o)) return "";
  if (!C(e ?? Wb(), o)) return "";
  return b("ANTHROPIC_MODEL is set to ", VV(o), " — new sessions use that while it is set");
}
function C(e, o) {
  let s = Ft(e), a = Ft(o);
  return gH(e) || Xe(s, { identity: true }) !== Xe(a, { identity: true }) || /\[1m\]$/i.test(s) !== /\[1m\]$/i.test(a);
}
function Bgo(e) {
  let o = qx("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = PVe();
    if (n !== null && e !== null && o !== "flagSettings" && !i.ANTHROPIC_MODEL && C(e, n.model)) return x(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = PVe();
    if (n !== null && !i.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (C(e, n.model)) return x(n);
      return "";
    }
  }
  let s = fe(o)?.model;
  if (s === void 0 || e === s) return "";
  let a = o === "policySettings" ? "Managed settings" : gT(o);
  return b(`${a} pins `, VV(s), " — that applies on restart");
}
function b(e, o, s) {
  return `${he.dim(`
     ${e}`)}${iS(o)}${he.dim(s)}`;
}
function x(e) {
  let o = VV(e.model);
  switch (e.kind) {
    case "org":
      return b("Your organization's default (", o, ") applies on restart");
    case "standard":
      return b("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function P(e) {
  return Ot(e.toLowerCase().trim()) === "opusplan" ? [dh(), Ft(e)] : [Ft(e)];
}
function B(e) {
  let o = e.toLowerCase().trim(), s = Ot(o);
  if (s === o || !iZt(o)) return null;
  if (Nx()) return { kind: "disabled" };
  let a = P(o).find((n) => dvt(n));
  if (a !== void 0) return { kind: "unsupported", carrier: Ot(a) };
  if (gH(s) && Doe(o) === null) return { kind: "noModeDependentVariant" };
  return null;
}
function jgo(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return false;
  if (P(e).every((s) => Fx(s))) return false;
  return !HG() && !I4();
}
var H = /* @__PURE__ */ new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function Wgo(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return false;
  if (H.has(Xe(o.trim(), { identity: true }))) return false;
  if (Fx(Ft(e))) return false;
  return !DG();
}
function Sme(e) {
  return Ft(e ?? Wb());
}
function Qvr(e, o, s, a, n) {
  if (n === void 0) return false;
  let l = cy();
  if (l === 0 || l === a) return false;
  let r = Fn(Sme(e));
  if (r === Fn(Sme(wne({ mainLoopModel: o, mainLoopModelForSession: s })))) return false;
  let c = n.response?.message.model;
  return !(typeof c === "string" && (c === r || ITn(r)?.has(c) === true));
}
function rZt(e) {
  let o = iS($E(e.mainLoopModel)), s = ed(e), a = s !== void 0 ? ` (effort: ${s})` : "", n = nWe(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${uOr}${iS($E(n))} (this session only)${a}
Base model: ${o}`;
  let l = XZe(), r = l !== void 0 ? ` (${$Yn(iS($E(l.previousModel)))})` : "";
  return `${uOr}${o}${r}${a}`;
}
function yFn(e) {
  let o = Ft(e ?? Wb());
  return O4s(o);
}
function Lae(e) {
  if (e === null) return false;
  return RTe(Ft(e));
}
function F(e, o) {
  return false;
}
function D(e) {
  if (e.notFound) return "not_found";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.authFailed) return "auth_failed";
  if (e.creditsRequired && e.serverRefusedModel) return "credits_required";
  if (e.rateLimited) return "rate_limit";
  if (e.retryable) return "check_failed";
  return e.rejected ? "check_rejected" : void 0;
}
function L(e) {
  return e === void 0 ? {} : { code: e };
}
function W(e) {
  try {
    return VAe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
export {
  $E,
  $Mt,
  Bgo,
  FMt,
  JIe,
  Lae,
  OT,
  Qvr,
  S8e,
  Sme,
  Ugo,
  Wgo,
  XIe,
  YCs,
  b8e,
  hFn,
  ip,
  jgo,
  o2,
  rZt,
  yFn
};
