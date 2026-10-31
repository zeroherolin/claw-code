// linux/settings/model-switch.js — Claude Code 2.1.310（linux）模块 chunk-5jf37pks.js
import { d, E, ui } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { ly, ISe, mAn } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { he } from "../terminal/xterm-ghostty.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { fA } from "../shell/invalid-type.js";
import { os } from "../shell/chunk-8eebd6c6.js";
import { ln, pe, Kx, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { ICe, Vyn, _5, Yo, Dh, ZO, eM, OV, Ez, kz, UCe, I$, Xr, Tz, Az, Ktr, uni, YU, dh, uH, Roe, qE, jS, wVe, nEt, fd, Xe, G7, S5, HV, Qo, $t, Dx, wm, Hx, Et, jt } from "./global-config-and-gates.js";
import { jfn, vAe, HYs, UZe, g9n } from "../api/anthropic-client.js";
import { ed } from "../models/ccr-unsupported-default-mode-ignored.js";
import { qme } from "../auth/client-data-cache-key.js";
import { Kje, fne, Oon, Mon, TE, DAo, rv, sb, Hge, Ple, zIr } from "../core/conversation-engine.js";
import { wTs, Y7t, KIe, yte, aJ } from "../auth/api-key.js";
import { vgo, X7t, Ego, Uve } from "../permissions/denied-by-server.js";
import { nc, xhn, _a } from "../shared/chunk-37f396c1.js";
import { Ot, $n } from "../models/claude-mythos-preview.js";
function k(e, o, s) {
  if (!Et()) return false;
  let a = e !== null ? $t(e) : fd(), n = a.toLowerCase(), l = n.includes("opus") || n.includes("fable"), r = n.includes("opus-4-6"), c = n.includes("sonnet-4-6");
  if (o && Dh(e)) return true;
  let u = jfn(a);
  if (u !== "pay_per_request" && u !== "included_in_plan") return true;
  if (!wm(n)) return false;
  if (l && s) return false;
  return r || c;
}
function GIe(e, o, s, a) {
  let n = Yo(), l = n && o && (!e || a?.announceKeptOn === true), r = n && !!e && !o;
  return (l ? " · Fast mode ON" : "") + (k(s, o, S5()) ? " · Draws from usage credits" : "") + (r ? " · Fast mode OFF" : "");
}
function STs(e, o, s) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${k(s, true, S5()) ? " · Draws from usage credits" : ""}` : "Fast mode OFF";
}
function $v(e) {
  let o = G7(e ?? jS());
  return e === null ? `${o} (default)` : o;
}
var R = 5e3;
async function C(e) {
  if (e === null) return w("follows_account");
  if (N(e)) return w("not_representable");
  if (KIe() !== "primary") return w("not_primary");
  if (ICe() !== "served") return w("not_served");
  let o = yte();
  if (o === null || o.kind !== "account") return w("no_account_scope");
  return T(o, aJ(), e);
}
async function T(e, o, s) {
  let a = { model: $t(s) };
  try {
    let n = await jt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, a, { auth: "teleport-org", isBackground: true, timeout: R, validateStatus: () => true });
    if (!n.ok) return t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), f("model_default_server_sync", `declined_${n.reason}`), { status: "skipped", reason: "declined" };
    let l = n.status;
    if (l < 200 || l >= 300) return t(`[servedCatalog] selection write (${o}): HTTP ${l}`), f("model_default_server_sync", `http_${l}`), { status: "error", reason: "http_status", httpStatus: l };
    return t(`[servedCatalog] selection write (${o}) ok`), g("model_default_server_sync"), await A(e, o, n.data, a.model), { status: "ok", httpStatus: l };
  } catch (n) {
    let l = ui(n).kind;
    return t(`[servedCatalog] selection write (${o}) failed: ${l}`), f("model_default_server_sync", `network_${l}`), { status: "error", reason: "network" };
  }
}
async function A(e, o, s, a) {
  let n = wTs(e, o);
  if (n === void 0 || n.catalog === null) return;
  let l = Vyn().safeParse(s), r = l.success && l.data.id === o ? l.data : { ...n.catalog.state ?? { id: o }, model: a, selection_source: "user_setting" };
  await Y7t(e, o, { ...n, staleAt: Math.min(n.staleAt, Date.now()), catalog: { ...n.catalog, state: r } });
}
function w(e) {
  return t(`[servedCatalog] selection write skipped: ${e}`), { status: "skipped", reason: e };
}
function N(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function zIe(e, o, s, a) {
  let n = e === "default" ? null : e;
  if (n === null) {
    let r = I$(jS(), "switch");
    if (r !== null) return m("model_switch", "denied_by_managed_settings"), { ok: false, message: r, code: "restricted_by_org" };
  }
  let l;
  if (n) {
    let r = B(n);
    if (r !== null) {
      let c = Ot(n.trim().toLowerCase()), u = _5("model");
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
  if (n && Ez(n, kz())) {
    let r = qE(n);
    if (r === null) {
      let c = await Uve(n, o, s);
      if (c !== "overturned") {
        m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
        let u = _5("model");
        return { ok: false, message: `Model '${n}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`, code: c === "probe_failed" ? "check_failed" : "restricted_by_org" };
      }
    } else l = n, n = r;
  } else if (n && !Xr(n)) {
    let r = qE(n);
    if (r === null) return m("model_switch", W(n)), { ok: false, message: `Model '${n}' is not available. Your organization restricts model selection.`, code: "restricted_by_org" };
    l = n, n = r;
  }
  if (n && _go(n)) return m("model_switch", "opus_1m_unavailable"), { ok: false, message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n && bgo(n)) return m("model_switch", "sonnet_1m_unavailable"), { ok: false, message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n) {
    let r = YU(n);
    if (r) switch (r.reason) {
      case "disabled":
        if (r.notOffered) return m("model_switch", "not_offered"), { ok: false, message: r.minimumVersion !== void 0 ? uni(r.minimumVersion) : Ktr(n), code: "not_offered" };
        return m("model_switch", "disabled_by_org"), { ok: false, message: `Model '${n}' is not currently available for your account${r.description ? `. ${r.description}` : "."}`, code: "unavailable_for_account" };
      case "absent": {
        let c = await vgo(Ego(n), { forceServerProbe: true, credentials: s }, a?.deadlineMs), u = F(c, a);
        if (!c.valid && !u) {
          m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
          let p = _5("model");
          return { ok: false, message: c.notFound ? `${r.displayName} isn't available for your account yet. ${p ? `Run ${p} to pick another model.` : "Switch to a different model."}` : c.error, ...L(c.notFound || c.permissionDenied ? "unavailable_for_account" : D(c)), ...c.serverRefusedModel === true && l === void 0 && { serverRefusedModel: true } };
        }
        if (c.valid) qme(o, s);
        return { ok: true, model: X7t(n) ? n.trim().toLowerCase() : n, ...l !== void 0 && { substitutedFrom: l }, ...u && { unconfirmed: true } };
      }
    }
  }
  if (!n) return { ok: true, model: n };
  if (X7t(n)) return { ok: true, model: n.trim().toLowerCase() };
  try {
    let r = await vgo(n, { credentials: s, ...a?.confirmWithServer === false && { serverProbe: false } }, a?.deadlineMs), c = !r.valid && r.creditsRequired === true && a?.acceptCreditsRequired === true && o$n(O(n)), u = F(r, a), p = !r.valid && r.sharedLimitReached === true && a?.acceptSharedLimitRefusal === true;
    if (!r.valid && !c && !u && !p) return m("model_switch", "invalid_model"), { ok: false, message: r.error, ...L(D(r)), ...r.serverRefusedModel === true && l === void 0 && { serverRefusedModel: true } };
    return { ok: true, model: O(n), ...l !== void 0 && { substitutedFrom: l }, ...!r.valid && c && { creditsRefusal: r.error }, ...u && { unconfirmed: true } };
  } catch (r) {
    return m("model_switch", "validate_exception"), { ok: false, message: `Failed to validate model: ${d(r)}`, code: "check_failed" };
  }
}
function O(e) {
  return e;
}
async function xA(e, o, s, a, n = {}) {
  let l = o(), r = TE(l), c = I(l, s);
  if (c.length === 0) return { decision: "proceed", skipConfirm: false, messages: [] };
  let u = [], p, M = false, _ = true;
  for (let h of c) {
    let S = await DAo(e, { ...h, requestedModel: s, source: a }, { signal: n.signal });
    if (u.push(...S.messages), S.decision === "block") return { decision: "block", reason: S.reason, messages: u };
    if (S.decision === "ask") M = true, p ??= S.reason;
    else _ = _ && S.skipConfirm;
  }
  if (TE(o()) !== r) {
    if (n.revalidating) return { decision: "block", reason: "the session model changed while a PreModelSwitch hook was running; pick again", messages: u };
    let h = await xA(e, o, s, a, { ...n, revalidating: true });
    return { ...h, messages: [...u, ...h.messages] };
  }
  return M ? { decision: "ask", reason: p, messages: u } : { decision: "proceed", skipConfirm: _, messages: u };
}
function I(e, o) {
  let s = Mon(e), a = e.toolPermissionContext.mode, n = [a, a === "plan" ? "default" : "plan"], l = /* @__PURE__ */ new Set(), r = [];
  for (let c of n) {
    let u = Oon(s, c), p = Oon(o, c), M = `${u}\0${p}`;
    if (u !== p && !l.has(M)) l.add(M), r.push({ fromModel: u, toModel: p });
  }
  return r;
}
function f8e(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${af(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(af)].join(`
`);
}
function af(e) {
  return _a(nc(xhn(e.trimEnd())));
}
function YW(e, o, s) {
  return [`Model switch to ${$v(e)} was blocked by a PreModelSwitch hook${o ? `: ${af(o)}` : ""}`, ...s.map(af)].join(`
`);
}
async function p8e(e, o, s, a, n, l, r, c, u) {
  let p = s().fastMode;
  if (ISe(), rv(e, s(), o, l), a((b) => ({ ...b, mainLoopModel: o, mainLoopModelForSession: null })), r !== void 0) f("model_switch", "family_alias_stepped_down");
  else g("model_switch");
  let M = Yo() ? ZO(o, p) : !!p;
  if (Yo()) {
    if (OV(), M !== !!p) a((b) => ({ ...b, fastMode: M })), eM(p, M);
  }
  let _ = n ? await IMt(o, c) : null;
  u?.(_);
  let h = _?.kind === "saved", S = `${Hge}${sb($v(o))}${h ? Ple : " for this session only"}`;
  return S += GIe(p, M, o, { announceKeptOn: true }), S += OMt(_), S += (h ? hgo(o) : "") || ygo(o), S;
}
var U = 3e3, r$n = 15e3;
async function IMt(e, o, s = U) {
  let a = Un("userSettings", { model: e ?? void 0 }, void 0, o);
  a.then((l) => l.error ? void 0 : C(e)).catch(() => {
  });
  let n = await Pe(a, s);
  if (n === void 0) return f("model_set_default", "unconfirmed"), { kind: "unconfirmed" };
  if (n.error) return m("model_set_default", "write_failed"), { kind: "failed", error: n.error };
  return g("model_set_default"), { kind: "saved" };
}
function OMt(e) {
  if (e === null || e.kind === "saved") return "";
  let o = os(ln("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` · couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed": {
      let s = e.error.cause, a = s instanceof Error ? `can't be written (${E(s) ?? s.message})` : "isn't valid JSON";
      return ` · couldn't save it as your default: ${o} ${a}`;
    }
  }
}
function hgo(e) {
  let o = i.ANTHROPIC_MODEL;
  if (!o || !Xr(o)) return "";
  if (!y(e ?? jS(), o)) return "";
  return v("ANTHROPIC_MODEL is set to ", HV(o), " — new sessions use that while it is set");
}
function y(e, o) {
  let s = $t(e), a = $t(o);
  return uH(e) || Xe(s, { identity: true }) !== Xe(a, { identity: true }) || /\[1m\]$/i.test(s) !== /\[1m\]$/i.test(a);
}
function ygo(e) {
  let o = Kx("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = wVe();
    if (n !== null && e !== null && o !== "flagSettings" && !i.ANTHROPIC_MODEL && y(e, n.model)) return x(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = wVe();
    if (n !== null && !i.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (y(e, n.model)) return x(n);
      return "";
    }
  }
  let s = pe(o)?.model;
  if (s === void 0 || e === s) return "";
  let a = o === "policySettings" ? "Managed settings" : fA(o);
  return v(`${a} pins `, HV(s), " — that applies on restart");
}
function v(e, o, s) {
  return `${he.dim(`
     ${e}`)}${sb(o)}${he.dim(s)}`;
}
function x(e) {
  let o = HV(e.model);
  switch (e.kind) {
    case "org":
      return v("Your organization's default (", o, ") applies on restart");
    case "standard":
      return v("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function P(e) {
  return Ot(e.toLowerCase().trim()) === "opusplan" ? [dh(), $t(e)] : [$t(e)];
}
function B(e) {
  let o = e.toLowerCase().trim(), s = Ot(o);
  if (s === o || !X7t(o)) return null;
  if (Dx()) return { kind: "disabled" };
  let a = P(o).find((n) => nEt(n));
  if (a !== void 0) return { kind: "unsupported", carrier: Ot(a) };
  if (uH(s) && Roe(o) === null) return { kind: "noModeDependentVariant" };
  return null;
}
function _go(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return false;
  if (P(e).every((s) => Hx(s))) return false;
  return !Tz() && !S5();
}
var H = /* @__PURE__ */ new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function bgo(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return false;
  if (H.has(Xe(o.trim(), { identity: true }))) return false;
  if (Hx($t(e))) return false;
  return !Az();
}
function pme(e) {
  return $t(e ?? jS());
}
function NEr(e, o, s, a, n) {
  if (n === void 0) return false;
  let l = ly();
  if (l === 0 || l === a) return false;
  let r = $n(pme(e));
  if (r === $n(pme(fne({ mainLoopModel: o, mainLoopModelForSession: s })))) return false;
  let c = n.response?.message.model;
  return !(typeof c === "string" && (c === r || mAn(r)?.has(c) === true));
}
function V7t(e) {
  let o = sb($v(e.mainLoopModel)), s = ed(e), a = s !== void 0 ? ` (effort: ${s})` : "", n = Kje(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${zIr}${sb($v(n))} (this session only)${a}
Base model: ${o}`;
  let l = UZe(), r = l !== void 0 ? ` (${g9n(sb($v(l.previousModel)))})` : "";
  return `${zIr}${o}${r}${a}`;
}
function o$n(e) {
  let o = $t(e ?? jS());
  return HYs(o);
}
function Rae(e) {
  if (e === null) return false;
  return vAe($t(e));
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
    return UCe(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
export {
  $v,
  GIe,
  IMt,
  NEr,
  OMt,
  Rae,
  STs,
  V7t,
  YW,
  _go,
  af,
  bgo,
  f8e,
  hgo,
  o$n,
  p8e,
  pme,
  r$n,
  xA,
  ygo,
  zIe
};
