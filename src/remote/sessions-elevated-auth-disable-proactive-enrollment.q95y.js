// remote/sessions-elevated-auth-disable-proactive-enrollment.q95y.js — Claude Code 2.1.310 模块 chunk-q95yt0s4.js
import { Dt } from "../fs/content-encoding.v6wj.js";
import { He } from "../fs/async-hooks.9s1z.js";
import { U, ye } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { rn } from "../auth/oauth-2025-04-20.ke15.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { Boi, GG, Fi, Ux, kn, k, ub, o3r } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { dy, Af, _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { St, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { e$e } from "../fs/chunk-dz0rx1wn.js";
import { Mt } from "../terminal/chunk-9vttrktj.js";
import { $n } from "../models/total-tokens-reminder.psq3.js";
import { Vn } from "../auth/secure-storage-credentials-write.vafw.js";
import { kZs, Tzr, Azr } from "./bridge-message-received.ndzn.js";
import { Ntt } from "../shell/bridge-folder-already-served.sc9q.js";
import { gr } from "../shared/chunk-7bt27r62.js";
import { Hs } from "./claude-code-remote.yeyj.js";
import { hostname as j } from "os";
var a = "tengu_sessions_elevated_auth_enforcement", u = "require_trusted_devices", O = "tengu_sessions_elevated_auth_disable_proactive_enrollment", z = 3e5, K = 864e5;
class P {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
  automaticEnrollmentNoticePending = false;
  automaticEnrollmentNoticeRaised = He();
  signInEnrollmentsInFlight = 0;
}
var v = new W(() => new P()), qhn = "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";
function czr() {
  let e = v.of(U().host), n = e.automaticEnrollmentNoticePending;
  return e.automaticEnrollmentNoticePending = false, n;
}
function k6o(e) {
  return v.of(U().host).automaticEnrollmentNoticeRaised.subscribe(e);
}
function C6o() {
  if (czr()) process.stderr.write(`${qhn}
`);
}
var Xwt = "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function v_e() {
  return k(O, false);
}
function N() {
  return import.meta.require("../cli/admit-prefetched-policy-limits.z1w7.js");
}
function E() {
  return import.meta.require("../cli/admit-cached-response.q82q.js");
}
function bY() {
  if (!k(a, false)) return false;
  return E().isPolicyAllowed(u);
}
function CAe() {
  if (!k(a, false)) return false;
  return E().isPolicyEnforced(u);
}
function T6o() {
  if (!gr(a, { safe: true })) return false;
  let e = E();
  return e.isPolicyEnforcedOrHintedByRefusedCache(u) || e.isPolicyVerdictAbsent();
}
function Pxi() {
  return i.CLAUDE_CODE_REMOTE === true && !i.CLAUDE_TRUSTED_DEVICE_TOKEN && CAe();
}
var b = "not reachable with this tool from a cloud session: that session requires a trusted device, and this cloud session has none to show", uzr = `${b}. Tell your user it was not sent; do not look for another tool to send it with`, Y = /^(?:cse|session)_[0-9A-Za-z_-]{1,128}$/;
function Ixi(e, n) {
  let r = `Nothing was sent: Remote Control session '${e}' is`;
  return n === void 0 || !Y.test(n.sessionId) ? `${r} ${uzr}.` : `${r} ${b}. This target may be reachable with ${n.sendTool}, the session service's own tool, if your user has allowed this cloud session to reach that computer; that session's id there is "${n.sessionId}". A tool of that name on any other server is not it.`;
}
function TAe() {
  if (!gr("tengu_bridge_attestation_enforce", { safe: true })) return Tzr;
  if (!gr(a, { safe: true }) || !E().isPolicyEnforcedOrHintedByRefusedCache(u)) return Tzr;
  return J();
}
var Z = "VERIFIED_KEYLESS_DEVICE", F = "tengu_bridge_attestation_enforce_config";
function J() {
  try {
    let { value: e, source: n } = kn(F, {});
    switch (n) {
      case "payload":
        return Ux() ? C(e, A()) : Azr(e);
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
  return Fi() && !Ux() ? Azr(GG()[F] ?? {}) : A();
}
function A() {
  return { enforce: true, acceptLevel: Z, acceptStatuses: /* @__PURE__ */ new Set() };
}
function C(e, n) {
  return { ...n, acceptLevel: kZs(Azr(e).acceptLevel, n.acceptLevel) };
}
function Yhn() {
  let e = v.of(U().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let n = Q();
  return e.storedTokenRead = n, n;
}
async function Q() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await Vn().readAsync())?.trustedDeviceToken;
}
async function Mw() {
  if (!bY() || Boi()) return;
  return Yhn();
}
async function DZn() {
  if (!CAe()) return false;
  if (await Yhn()) return false;
  return true;
}
async function X() {
  if (!await DZn()) return null;
  if (v_e()) return Xwt;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function A6o(e) {
  return await ub(a), await pzr(e), X();
}
function Kce(e, n) {
  t(`${e} untrusted_device read as ${n.kind}${"subReason" in n ? ` (sub_reason ${Mt(n.subReason, 64)})` : ""}; not re-enrolling`);
}
function GU() {
  v.of(U().host).storedTokenRead = void 0;
}
async function qce(e, n) {
  if (!bY()) return;
  GU();
  let r = await Mw();
  if (!r || r === e) {
    let o = await Sbi(r), h = v.of(U().host);
    if (o !== "none") t(o === "recent" ? "[trusted-device] The refused device token is one an earlier refusal enrolled; not enrolling again" : "[trusted-device] The stored time of the last enrollment after a refusal is unusable; not enrolling until a sign-in clears it");
    else if (Date.now() - h.lastEnrollAttemptAtMs >= z) h.lastEnrollAttemptAtMs = Date.now(), await Xhn({ trigger: "server_denied", credentials: n }), r = await Mw();
  }
  if (!r || r === e) return;
  return t("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"), r;
}
async function Sbi(e) {
  if (!e) return "none";
  let n = await Vn().readAsync(), r = n?.trustedDeviceEnrolledAfterRefusalAtMs;
  if (n?.trustedDeviceToken !== e || r === void 0) return "none";
  let o = Date.now();
  if (!Number.isSafeInteger(r) || r <= 0 || r > o) return "unusable";
  return o - r < K ? "recent" : "none";
}
async function fGt(e, n, r) {
  let o = await qce(e, r);
  if (!o) return;
  return n(o);
}
var ee = "the server requires a trusted device, and trusted-device enrollment is not turned on for this session, so this computer was not enrolled. Try again in a few minutes; if it keeps failing, contact your administrator", R6o = "session expired for trusted-device check — run /login to re-authenticate";
function goe(e, n = { justEnrolled: false }) {
  if (e?.kind === "signature_wanted") return Ntt;
  if (!bY()) return ee;
  if (v_e()) return Xwt;
  return n.justEnrolled ? "this computer was just enrolled as a trusted device, but the server has not accepted it yet. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry" : "this computer is not a trusted device for your account yet, and it could not be enrolled automatically right now. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry";
}
async function pzr(e) {
  if (!CAe()) return;
  if (GU(), !await DZn()) return;
  if (v_e()) return;
  t("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"), await Xhn({ lazy: true, credentials: e });
}
async function Oxi(e) {
  if (!bY()) return Af("trusted_devices_off");
  if (GU(), await Yhn()) return dy(void 0);
  if (v_e()) return Af("enrollment_paused");
  return t("[trusted-device] Not enrolled, enrolling for a device-bound session"), await Xhn({ trigger: "device_bind", credentials: e }), await Mw() ? dy(void 0) : Af("not_given");
}
function x6o() {
  let { isClaudeAISubscriber: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.0dnm.js");
  if (!$n() || !e()) {
    LZn();
    return;
  }
  if (v_e()) {
    LZn();
    return;
  }
  GU(), Vn().mutate((n) => n.trustedDeviceToken || n.trustedDeviceEnrolledAfterRefusalAtMs !== void 0 ? { ...n, trustedDeviceToken: void 0, trustedDeviceEnrolledAfterRefusalAtMs: void 0 } : n).catch(() => {
  });
}
async function LZn() {
  let e = Vn();
  if ((await e.readAsync().catch(() => null))?.trustedDeviceEnrolledAfterRefusalAtMs === void 0) return;
  await e.mutate((r) => r.trustedDeviceEnrolledAfterRefusalAtMs === void 0 ? r : { ...r, trustedDeviceEnrolledAfterRefusalAtMs: void 0 }).catch(() => {
  });
}
function bbi() {
  return x(k(a, false));
}
async function Mxi() {
  if (i.CLAUDE_CODE_REMOTE === true) return "no_cloud_container";
  if (!w()) return "no";
  return await Pe((async () => {
    let n = await ub(a);
    if (!n) return o3r(a) ? "no_gate_off" : "no";
    await N().waitForPolicyLimitsToLoad();
    let r = x(n), o = E();
    return r === "no" && w() && !o.isPolicyEnforced(u) && (!o.isPolicyLimitsEligible() || o.isSessionVerdictFromServerFetch() && !o.isSessionVerdictDisowned()) ? "no_not_required" : r;
  })(), te).catch(() => {
    return;
  }) ?? bbi();
}
var te = 5e3;
function x(e) {
  if (!e || !w() || !E().isPolicyEnforced(u)) return "no";
  return v_e() ? "paused" : "enrolls";
}
function w() {
  let { isClaudeAISubscriber: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.0dnm.js");
  return !(i.CLAUDE_CODE_REMOTE === true || i.DISABLE_LOGIN_COMMAND || !$n() || !e() || process.env.CLAUDE_TRUSTED_DEVICE_TOKEN || St());
}
async function Xhn({ trigger: e = "proactive", lazy: n = false, credentials: r }) {
  let { isClaudeAISubscriber: o, isConsumerSubscriber: h, getClaudeAIOAuthTokens: H, checkAndRefreshOAuthTokenIfNeeded: M } = import.meta.require("../auth/acquire-o-auth-refresh-lock.0dnm.js"), { loginToHandOn: V } = import.meta.require("../auth/ask-launcher-host-login-identity-again.skb6.js");
  if (!$n() || !o()) return;
  if (i.CLAUDE_CODE_REMOTE === true) {
    t("[trusted-device] In a cloud container, skipping enrollment");
    return;
  }
  let T = v.of(U().host), D = e === "proactive" && !n;
  if (D) T.signInEnrollmentsInFlight++;
  try {
    if (!await ub(a)) {
      t(`[trusted-device] Gate ${a} is off, skipping enrollment`);
      return;
    }
    if (v_e()) {
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
    if (St()) {
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
      f = await Dt.post(`${G}/api/auth/trusted_devices`, { display_name: `Claude Code on ${j()} · ${e$e("darwin")}` }, { headers: { "User-Agent": Hs(), Authorization: `Bearer ${R}`, "Content-Type": "application/json" }, timeout: 1e4, validateStatus: (s) => s < 500 });
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
      let s = await Vn().mutate((q) => ({ ...q, trustedDeviceToken: S, trustedDeviceEnrolledAfterRefusalAtMs: e === "server_denied" ? Date.now() : void 0 }));
      if (!s.success) {
        t(`[trusted-device] Failed to persist token: ${s.warning ?? "unknown"}`), m("bridge_trusted_device_enroll", "storage_failed", p);
        return;
      }
      GU(), t(`[trusted-device] Enrolled device_id=${f.data.device_id ?? "unknown"}`), g("bridge_trusted_device_enroll", p);
    } catch (s) {
      t(`[trusted-device] Storage write failed: ${d(s)}`), m("bridge_trusted_device_enroll", "storage_failed", p);
      return;
    }
    if (D || T.signInEnrollmentsInFlight > 0) return;
    try {
      if (ye()) {
        if (t(`[trusted-device] ${qhn}`), process.stderr.isTTY) process.stderr.write(`${qhn}
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
  A6o,
  C6o,
  CAe,
  DZn,
  GU,
  Ixi,
  Kce,
  LZn,
  Mw,
  Mxi,
  Oxi,
  Pxi,
  R6o,
  Sbi,
  T6o,
  TAe,
  Xhn,
  Xwt,
  Yhn,
  bY,
  bbi,
  czr,
  fGt,
  goe,
  k6o,
  pzr,
  qce,
  qhn,
  uzr,
  v_e,
  x6o
};
