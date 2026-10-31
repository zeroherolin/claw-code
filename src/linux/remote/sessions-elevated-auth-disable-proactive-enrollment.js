// linux/remote/sessions-elevated-auth-disable-proactive-enrollment.js — Claude Code 2.1.310（linux）模块 chunk-w89b9cst.js
import { Ht } from "../fs/content-encoding.js";
import { De } from "../fs/async-hooks.93b1.js";
import { U, ye } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { roi, Hz, $i, Nx, kn, k, cS, N4r } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { jy, Cp, _, t } from "../fs/gitlab-runner-authentication-token.js";
import { _t, l } from "../artifacts/cowritten-artifact-html.js";
import { z$e } from "../fs/chunk-ce5d00cd.js";
import { Mt } from "../terminal/chunk-3ca478a4.js";
import { Fn } from "../models/total-tokens-reminder.js";
import { Kn } from "../auth/permission-error.js";
import { U7s, s2r, i2r } from "./bridge-message-received.js";
import { Ptt } from "../shell/bridge-folder-already-served.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { Ds } from "./claude-code-remote.js";
import { hostname as j } from "os";
var a = "tengu_sessions_elevated_auth_enforcement", u = "require_trusted_devices", O = "tengu_sessions_elevated_auth_disable_proactive_enrollment", z = 3e5, K = 864e5;
class P {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
  automaticEnrollmentNoticePending = false;
  automaticEnrollmentNoticeRaised = De();
  signInEnrollmentsInFlight = 0;
}
var v = new W(() => new P()), Ihn = "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";
function Wzr() {
  let e = v.of(U().host), n = e.automaticEnrollmentNoticePending;
  return e.automaticEnrollmentNoticePending = false, n;
}
function X2o(e) {
  return v.of(U().host).automaticEnrollmentNoticeRaised.subscribe(e);
}
function J2o() {
  if (Wzr()) process.stderr.write(`${Ihn}
`);
}
var Wwt = "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function h_e() {
  return k(O, false);
}
function N() {
  return import.meta.require("../cli/admit-prefetched-policy-limits.js");
}
function E() {
  return import.meta.require("../cli/admit-cached-response.js");
}
function f9() {
  if (!k(a, false)) return false;
  return E().isPolicyAllowed(u);
}
function bCe() {
  if (!k(a, false)) return false;
  return E().isPolicyEnforced(u);
}
function Q2o() {
  if (!gr(a, { safe: true })) return false;
  let e = E();
  return e.isPolicyEnforcedOrHintedByRefusedCache(u) || e.isPolicyVerdictAbsent();
}
function KRi() {
  return i.CLAUDE_CODE_REMOTE === true && !i.CLAUDE_TRUSTED_DEVICE_TOKEN && bCe();
}
var b = "not reachable with this tool from a cloud session: that session requires a trusted device, and this cloud session has none to show", Gzr = `${b}. Tell your user it was not sent; do not look for another tool to send it with`, Y = /^(?:cse|session)_[0-9A-Za-z_-]{1,128}$/;
function VRi(e, n) {
  let r = `Nothing was sent: Remote Control session '${e}' is`;
  return n === void 0 || !Y.test(n.sessionId) ? `${r} ${Gzr}.` : `${r} ${b}. This target may be reachable with ${n.sendTool}, the session service's own tool, if your user has allowed this cloud session to reach that computer; that session's id there is "${n.sessionId}". A tool of that name on any other server is not it.`;
}
function SCe() {
  if (!gr("tengu_bridge_attestation_enforce", { safe: true })) return s2r;
  if (!gr(a, { safe: true }) || !E().isPolicyEnforcedOrHintedByRefusedCache(u)) return s2r;
  return J();
}
var Z = "VERIFIED_KEYLESS_DEVICE", F = "tengu_bridge_attestation_enforce_config";
function J() {
  try {
    let { value: e, source: n } = kn(F, {});
    switch (n) {
      case "payload":
        return Nx() ? C(e, A()) : i2r(e);
      case "disk":
        return C(e, A());
      case "override":
        return C(e, L());
      default:
        return L();
    }
  } catch {
    return A();
  }
}
function L() {
  return $i() && !Nx() ? i2r(Hz()[F] ?? {}) : A();
}
function A() {
  return { enforce: true, acceptLevel: Z, acceptStatuses: /* @__PURE__ */ new Set() };
}
function C(e, n) {
  return { ...n, acceptLevel: U7s(i2r(e).acceptLevel, n.acceptLevel) };
}
function Ohn() {
  let e = v.of(U().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let n = Q();
  return e.storedTokenRead = n, n;
}
async function Q() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await Kn().readAsync())?.trustedDeviceToken;
}
async function Ow() {
  if (!f9() || roi()) return;
  return Ohn();
}
async function yZn() {
  if (!bCe()) return false;
  if (await Ohn()) return false;
  return true;
}
async function X() {
  if (!await yZn()) return null;
  if (h_e()) return Wwt;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function Z2o(e) {
  return await cS(a), await zzr(e), X();
}
function Uce(e, n) {
  t(`${e} untrusted_device read as ${n.kind}${"subReason" in n ? ` (sub_reason ${Mt(n.subReason, 64)})` : ""}; not re-enrolling`);
}
function FU() {
  v.of(U().host).storedTokenRead = void 0;
}
async function Bce(e, n) {
  if (!f9()) return;
  FU();
  let r = await Ow();
  if (!r || r === e) {
    let o = await Lbi(r), h = v.of(U().host);
    if (o !== "none") t(o === "recent" ? "[trusted-device] The refused device token is one an earlier refusal enrolled; not enrolling again" : "[trusted-device] The stored time of the last enrollment after a refusal is unusable; not enrolling until a sign-in clears it");
    else if (Date.now() - h.lastEnrollAttemptAtMs >= z) h.lastEnrollAttemptAtMs = Date.now(), await Mhn({ trigger: "server_denied", credentials: n }), r = await Ow();
  }
  if (!r || r === e) return;
  return t("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"), r;
}
async function Lbi(e) {
  if (!e) return "none";
  let n = await Kn().readAsync(), r = n?.trustedDeviceEnrolledAfterRefusalAtMs;
  if (n?.trustedDeviceToken !== e || r === void 0) return "none";
  let o = Date.now();
  if (!Number.isSafeInteger(r) || r <= 0 || r > o) return "unusable";
  return o - r < K ? "recent" : "none";
}
async function tzt(e, n, r) {
  let o = await Bce(e, r);
  if (!o) return;
  return n(o);
}
var ee = "the server requires a trusted device, and trusted-device enrollment is not turned on for this session, so this computer was not enrolled. Try again in a few minutes; if it keeps failing, contact your administrator", eKo = "session expired for trusted-device check — run /login to re-authenticate";
function loe(e, n = { justEnrolled: false }) {
  if (e?.kind === "signature_wanted") return Ptt;
  if (!f9()) return ee;
  if (h_e()) return Wwt;
  return n.justEnrolled ? "this computer was just enrolled as a trusted device, but the server has not accepted it yet. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry" : "this computer is not a trusted device for your account yet, and it could not be enrolled automatically right now. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry";
}
async function zzr(e) {
  if (!bCe()) return;
  if (FU(), !await yZn()) return;
  if (h_e()) return;
  t("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"), await Mhn({ lazy: true, credentials: e });
}
async function qRi(e) {
  if (!f9()) return Cp("trusted_devices_off");
  if (FU(), await Ohn()) return jy(void 0);
  if (h_e()) return Cp("enrollment_paused");
  return t("[trusted-device] Not enrolled, enrolling for a device-bound session"), await Mhn({ trigger: "device_bind", credentials: e }), await Ow() ? jy(void 0) : Cp("not_given");
}
function tKo() {
  let { isClaudeAISubscriber: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js");
  if (!Fn() || !e()) {
    _Zn();
    return;
  }
  if (h_e()) {
    _Zn();
    return;
  }
  FU(), Kn().mutate((n) => n.trustedDeviceToken || n.trustedDeviceEnrolledAfterRefusalAtMs !== void 0 ? { ...n, trustedDeviceToken: void 0, trustedDeviceEnrolledAfterRefusalAtMs: void 0 } : n).catch(() => {
  });
}
async function _Zn() {
  let e = Kn();
  if ((await e.readAsync().catch(() => null))?.trustedDeviceEnrolledAfterRefusalAtMs === void 0) return;
  await e.mutate((r) => r.trustedDeviceEnrolledAfterRefusalAtMs === void 0 ? r : { ...r, trustedDeviceEnrolledAfterRefusalAtMs: void 0 }).catch(() => {
  });
}
function Nbi() {
  return x(k(a, false));
}
async function YRi() {
  if (i.CLAUDE_CODE_REMOTE === true) return "no_cloud_container";
  if (!w()) return "no";
  return await Pe((async () => {
    let n = await cS(a);
    if (!n) return N4r(a) ? "no_gate_off" : "no";
    await N().waitForPolicyLimitsToLoad();
    let r = x(n), o = E();
    return r === "no" && w() && !o.isPolicyEnforced(u) && (!o.isPolicyLimitsEligible() || o.isSessionVerdictFromServerFetch() && !o.isSessionVerdictDisowned()) ? "no_not_required" : r;
  })(), te).catch(() => {
    return;
  }) ?? Nbi();
}
var te = 5e3;
function x(e) {
  if (!e || !w() || !E().isPolicyEnforced(u)) return "no";
  return h_e() ? "paused" : "enrolls";
}
function w() {
  let { isClaudeAISubscriber: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js");
  return !(i.CLAUDE_CODE_REMOTE === true || i.DISABLE_LOGIN_COMMAND || !Fn() || !e() || process.env.CLAUDE_TRUSTED_DEVICE_TOKEN || _t());
}
async function Mhn({ trigger: e = "proactive", lazy: n = false, credentials: r }) {
  let { isClaudeAISubscriber: o, isConsumerSubscriber: h, getClaudeAIOAuthTokens: H, checkAndRefreshOAuthTokenIfNeeded: M } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js"), { loginToHandOn: V } = import.meta.require("../auth/ask-launcher-host-login-identity-again.js");
  if (!Fn() || !o()) return;
  if (i.CLAUDE_CODE_REMOTE === true) {
    t("[trusted-device] In a cloud container, skipping enrollment");
    return;
  }
  let T = v.of(U().host), D = e === "proactive" && !n;
  if (D) T.signInEnrollmentsInFlight++;
  try {
    if (!await cS(a)) {
      t(`[trusted-device] Gate ${a} is off, skipping enrollment`);
      return;
    }
    if (h_e()) {
      t(`[trusted-device] Proactive enrollment disabled via ${O}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      t("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
      return;
    }
    await N().waitForPolicyLimitsToLoad();
    let y = E(), I = y.isPolicyEnforced(u), B = e === "server_denied" || e === "device_bind" && h();
    if (!(I || B && y.isPolicyAllowed(u))) {
      t(`[trusted-device] Org has not enabled ${u}, skipping enrollment`);
      return;
    }
    let p = { trigger: c(e), org_enforced: I };
    if (_t()) {
      t("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await M({ credentials: r });
    let R = V(H())?.accessToken;
    if (!R) {
      t("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let G = rn().BASE_API_URL, f;
    try {
      f = await Ht.post(`${G}/api/auth/trusted_devices`, { display_name: `Claude Code on ${j()} · ${z$e("linux")}` }, { headers: { "User-Agent": Ds(), Authorization: `Bearer ${R}`, "Content-Type": "application/json" }, timeout: 1e4, validateStatus: (s) => s < 500 });
    } catch (s) {
      t(`[trusted-device] Enrollment request failed: ${d(s)}`), m("bridge_trusted_device_enroll", "request_failed", p);
      return;
    }
    if (f.status !== 200 && f.status !== 201) {
      t(`[trusted-device] Enrollment failed ${f.status}: ${_(f.data).slice(0, 200)}`), m("bridge_trusted_device_enroll", "http_error", p);
      return;
    }
    let S = f.data?.device_token;
    if (!S || typeof S !== "string") {
      t("[trusted-device] Enrollment response missing device_token field"), m("bridge_trusted_device_enroll", "missing_token", p);
      return;
    }
    try {
      let s = await Kn().mutate((q) => ({ ...q, trustedDeviceToken: S, trustedDeviceEnrolledAfterRefusalAtMs: e === "server_denied" ? Date.now() : void 0 }));
      if (!s.success) {
        t(`[trusted-device] Failed to persist token: ${s.warning ?? "unknown"}`), m("bridge_trusted_device_enroll", "storage_failed", p);
        return;
      }
      FU(), t(`[trusted-device] Enrolled device_id=${f.data.device_id ?? "unknown"}`), g("bridge_trusted_device_enroll", p);
    } catch (s) {
      t(`[trusted-device] Storage write failed: ${d(s)}`), m("bridge_trusted_device_enroll", "storage_failed", p);
      return;
    }
    if (D || T.signInEnrollmentsInFlight > 0) return;
    try {
      if (ye()) {
        if (t(`[trusted-device] ${Ihn}`), process.stderr.isTTY) process.stderr.write(`${Ihn}
`);
      } else T.automaticEnrollmentNoticePending = true, T.automaticEnrollmentNoticeRaised.emit();
    } catch (s) {
      l(s);
    }
  } catch (y) {
    t(`[trusted-device] Enrollment error: ${d(y)}`), m("bridge_trusted_device_enroll", "unexpected_error", { trigger: c(e) });
  } finally {
    if (D) T.signInEnrollmentsInFlight--;
  }
}
export {
  Bce,
  FU,
  Gzr,
  Ihn,
  J2o,
  KRi,
  Lbi,
  Mhn,
  Nbi,
  Ohn,
  Ow,
  Q2o,
  SCe,
  Uce,
  VRi,
  Wwt,
  Wzr,
  X2o,
  YRi,
  Z2o,
  _Zn,
  bCe,
  eKo,
  f9,
  h_e,
  loe,
  qRi,
  tKo,
  tzt,
  yZn,
  zzr
};
