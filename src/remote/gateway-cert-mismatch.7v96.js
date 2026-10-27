// remote/gateway-cert-mismatch.7v96.js — Claude Code 2.1.310 模块 chunk-7v96f43f.js
import { n7 } from "../shared/chunk-msm71d2b.js";
import { u$, vee, Rit, Wr, k$e, Pn } from "../context/not-admin-owned.ersa.js";
import { N, d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Nt } from "../shared/chunk-3kevgx4j.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { zAt } from "../models/claude-3-5-sonnet.21mz.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { NFn } from "../artifacts/chunk-qdjaz4y7.js";
import { jX } from "./remote-callout.5t48.js";
import { tvt, xri, vnt, xj, Fg, gn, n1, Ut, uI } from "../settings/global-config-and-gates.27xj.js";
import { Wg } from "../plugins/skills-dir.cemw.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { Tn } from "../mcp/allowed-warning.j2d4.js";
import { I4s } from "../api/anthropic-client.7pf8.js";
import { SZ } from "../settings/ax-sr-suggestion-nav.8qsa.js";
import { N6e } from "../shell/bridge-folder-already-served.sc9q.js";
import { Yhn, x6o, LZn, Xhn } from "./sessions-elevated-auth-disable-proactive-enrollment.q95y.js";
import { ZJs } from "../artifacts/same-account.bxg8.js";
import { Px } from "../settings/non-string-value.58dq.js";
import { h_o } from "../artifacts/artifact-roster-refresh.31xe.js";
import { kGo } from "../settings/gable-onyx-sluice.5y5b.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { AMe, Za, Xn, Ey, Bt } from "../core/conversation-engine.31gx.js";
import { $D } from "../context/team-memory-sync.0s3j.js";
import { gce, Fre, fBo, SBo, bBo } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { ae, oAe } from "../permissions/max-thinking-tokens.hx3h.js";
import { l$o } from "../shell/sandbox.aet2.js";
import { ktt, Fhn } from "../auth/policy-limits-principal-changed.cb7h.js";
import { Fhe, rre, $he, iyt } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { YEr, Kks, SQt, T1e, TNn } from "./managed-settings-security-dialog-accepted.19jv.js";
import { il } from "../shared/chunk-bezz9j8a.js";
import { n, GR } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { lt } from "../shared/chunk-vj9gqe2s.js";
import { Gn } from "../shared/chunk-p82eferg.js";
import { ds } from "../ui/chunk-2bwm2gye.js";
import { Wlt } from "../shared/chunk-q3z3d485.js";
import { we } from "../ui/keybinding-auto-hints.yb17.js";
import { MPe } from "../ui/oauth-console-selected.3d5y.js";
import { $xt, VPn } from "../settings/not-due.vtxe.js";
import { uxt } from "../shared/managed-settings-security.x5f7.js";
import { su } from "../shared/chunk-bwprpqap.js";
import { o8t } from "../settings/chunk-r94bz11h.js";
import { Ygs } from "../auth/lane-unavailable.a2fw.js";
import { a6, gq } from "../shell/prompt-input-exit.dr3v.js";
import { sPn } from "../shared/chunk-vh1jat80.js";
import { aw, HA } from "../ui/chunk-5ffz46a0.js";
import { pt } from "../shared/chunk-2ktb785b.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { VW } from "./bridge-failed.4jhd.js";
import { A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
function Tgi() {
  fBo(gce());
}
async function EPe(o, s, a) {
  if (o.onChangeAPIKey(), !s) return { bridgeDisconnected: false, accountSwitched: false, relaunching: false };
  let u = Wr(), c = u !== null && u !== a.previousGatewayAuth;
  if (Te() === "gateway") {
    let f = a.onConsentNeeded, m = { release: null }, U = f ? Kks(() => (m.release ??= YEr(), f())) : null;
    try {
      let M;
      try {
        M = await TNn(uxt, o.storageV5, o.credentials);
      } finally {
        U?.();
      }
      let D = Wr(), v = ce(D);
      if (c && !M.fetchSucceeded && M.failure?.errorKind === "gateway_cert_mismatch") return await de(o, D, Agi(v, M.failure.gatewayPinMismatch));
      if (!M.fetchSucceeded || o8t()) {
        let B = M.fetchSucceeded ? void 0 : M.failure;
        return await ue(o, Rgi(v, B, c), (H) => xgi(v, B, H, c)), x;
      }
      if (Tn()) return x;
      sPn("gateway"), Px(), l$o();
    } finally {
      if (!Tn()) m.release?.();
    }
  } else T1e(uxt, o.storageV5, o.credentials);
  Rit();
  let g = Fhn().catch(() => {
  });
  g.then(() => {
    if (kGo()) h_o({ credentials: o.credentials, storageV5: o.storageV5, timeoutMs: 5e3 });
  }).catch(() => {
  }), n1(), uI(), Nt(g, ktt, "post-login policy limits refresh").catch(() => {
  }).then(() => Ygs()).then(() => {
  }).catch((f) => l(f));
  let { setAppState: p } = a, h = n7.of(o.session), _ = () => h.credentialsPersisted(), O = a.previousAccount, C = gn(), E = Fg(O, C), { replBridgeEnabled: F, replBridgeOutboundOnly: I } = o.getAppState(), R = O?.accountUuid !== void 0 && !E, S = R && F && !I;
  if (R) p((f) => {
    if (!(f.replBridgeEnabled || f.replBridgeError !== void 0)) return f;
    return t("[bridge:repl] Account changed via /login — disconnecting Remote Control session"), { ...f, replBridgeEnabled: false, replBridgeExplicit: false, replBridgeOutboundOnly: false, replBridgeError: void 0, replBridgeErrorKind: void 0, notifications: Wlt(f.notifications, VW) };
  });
  if (Fre(), SBo(), ZJs(C), a.setAppState(NFn), R) if (bBo(), a.setAppState((f) => ({ ...f, replBridgeSessionGroupingId: void 0, replBridgeInitialName: void 0, ultrareviewOverageConfirmed: false })), I4s(), o.dialogStore) o.dialogStore.dismissKind(jX.kind);
  else l(Error("runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"));
  if (E && await Yhn()) t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment"), await LZn(), _();
  else {
    x6o();
    let f = Xhn({ credentials: o.credentials }).then(_, _);
    if (a.awaitEnrollment) await f;
  }
  let { host: G } = o.session, k = o.getAppState();
  if (VPn(G), tvt(), !Pn()) $xt(G, ae(o), p, k.fastMode);
  return Tgi(), h.loginCompleted(), { bridgeDisconnected: S, accountSwitched: R, relaunching: false };
}
var se = 16;
function J(o) {
  return `${o.slice(0, se)}…`;
}
function ce(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}
var x = { bridgeDisconnected: false, accountSwitched: false, relaunching: true };
async function de(o, s, a) {
  for (let g = k$e(); g; g = k$e()) await g.catch(() => {
  });
  let u = Wr();
  if (await xri(u && s && u.url === s.url ? u : s, o.credentials), await SQt(o.storageV5), Tn()) return { ...x, gatewayLoginError: a };
  let c = !Za();
  if (c) await a6(o.messages, o.storageV5);
  return await Xn(0, "other", { finalMessage: `${a}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${c ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.` }), { ...x, gatewayLoginError: a };
}
function Agi(o, s) {
  let a = s?.presentedFingerprint && s.pinnedFingerprint ? `TLS certificate ${J(s.presentedFingerprint)} instead of the one you trusted (${J(s.pinnedFingerprint)})` : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${a}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function le(o, s) {
  switch (o.errorKind) {
    case "timeout":
      return "the request timed out";
    case "network_error":
      return "couldn't connect to the gateway";
    case "http_401":
    case "api_key_not_sent":
      return s ? "the gateway did not accept the new credential" : "the gateway did not accept this session's credential";
    case "http_403":
      return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";
    case "no_auth_available":
      return "no credential was on hand for the request";
    case "profile_credential_error":
      return "the profile credential could not authenticate the request (details with --debug)";
    case "http_4xx":
    case "http_5xx":
      return o.httpStatus === void 0 ? "the gateway answered with an unexpected status" : `the gateway answered HTTP ${o.httpStatus}`;
    case "parse_error":
      return "the gateway's response was not valid managed settings";
    case "ruled_empty":
      return "no setting in the gateway's response could be applied as written";
    case "gateway_cert_mismatch":
      return "the gateway's TLS certificate did not match the one you trusted";
    case "gateway_public_address":
      return "the gateway's name resolved to a public address, so the request was not sent";
    case "gateway_pin_refused":
      return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";
    case "gateway_pin_unreadable":
      return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";
    case "unknown_error":
      return "something unexpected went wrong (details with --debug)";
  }
}
function oe(o, s, a) {
  if (s) {
    let u = le(s, a);
    return a ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})` : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return a ? `Signed in to Cloud gateway ${o}` : `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function Rgi(o, s, a, u = !Za()) {
  let c = u ? "…" : " (this conversation is not saved, so it starts fresh)…", g = oe(o, s, a);
  return s ? `${g}. Restarting Claude Code to retry${c}` : `${g}. Restarting Claude Code to apply ${a ? "your organization's managed settings" : "them"}${c}`;
}
function xgi(o, s, a, u, c = !Za()) {
  return `${oe(o, s, u)}. ${s ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${a}, so this session is ending instead. Your sign-in is saved: start claude again the same way${c ? " (add --continue to return to this conversation)" : ""}.`;
}
async function ue(o, s, a) {
  if (Tn()) return;
  let u = (h) => Xn(0, "other", { finalMessage: a(h) });
  if (await a6($D(o), o.storageV5), Tn()) return;
  if (Ut()) return u("a background session cannot restart itself (sign in from a session started directly with `claude`)");
  let c = ae(o), g = rre(c, u$());
  if (g.length > 0) return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
  let p = { proactivityLevel: o.getProactivityLevel(), toolPermissionContext: c };
  try {
    await gq({ freshIfNoTranscript: true, extraArgs: [...Fhe(c, oAe(o)), ...$he(c, vee())], proactivity: p, env: { ...SZ(), ...iyt(c.additionalWorkingDirectories) }, preSpawn: () => process.stdout.write(`
${s}
`) }, o.storageV5);
  } catch (h) {
    return l(N(h)), u(`it could not restart itself (${d(h)})`);
  }
}
function cxt(o, s, a, { envTokenWasSet: u = false, envWarningOnce: c } = {}) {
  if (a.gatewayLoginError !== void 0 || a.relaunching) return [a.gatewayLoginError];
  let g = s ? void 0 : AMe();
  if (g?.kind === "refused") return [g.notice, { display: "system" }];
  let p = s ? Pgi(o, a) : void 0, h = Mgi({ envTokenWasSet: u, gatewayActive: Te() === "gateway", willAutoQuery: p?.shouldQuery === true });
  if (h === "out-of-band" && c && !c.delivered) c.delivered = true, o.applyMessageOp({ type: "append", messages: [Bt(Bcs, "notice")] });
  return [Hgi(s, { bridgeDisconnected: a.bridgeDisconnected, includeEnvTokenWarning: h === "inline" }), p];
}
function Pgi(o, s) {
  if (s.accountSwitched || s.relaunching) return;
  let a = Ey(o.messages);
  if (a?.isApiErrorMessage && a.error === "authentication_failed") return { display: "system", shouldQuery: true };
  return;
}
var re = "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function Igi() {
  return "Signed in. Review your organization's managed settings to continue.";
}
function Ogi() {
  return i.CLAUDE_CODE_OAUTH_TOKEN ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${re}` : void 0;
}
var Bcs = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${re}`;
function Mgi(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}
function Hgi(o, s) {
  if (!o) return "Login interrupted";
  let a = s.bridgeDisconnected ? `Login successful. ${N6e}` : "Login successful";
  return s.includeEnvTokenWarning ? `${a}

${Bcs}` : a;
}
async function rki(o, s) {
  if (Te() === "firstParty" && xj()) return o(`Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${zAt()} to sign in.`, { display: "system" }), null;
  let a = Ogi(), u = a !== void 0, c = gn(), g = c && { accountUuid: c.accountUuid, organizationUuid: c.organizationUuid }, p = Wr(), h = { delivered: false };
  return e(bwe, { startingMessage: a, onDone: async (_, O, C) => {
    let E = false, F = await EPe(s, _, { setAppState: C, previousAccount: g, previousGatewayAuth: p, onConsentNeeded: () => (E = true, o(Igi(), { display: "system" }), Wg()) }), I = cxt(s, _, F, { envTokenWasSet: u, envWarningOnce: h });
    if (E) {
      let [R] = I;
      if (R) s.applyMessageOp({ type: "append", messages: [Bt(R, "notice")] });
      return;
    }
    o(...I);
  }, onHybridSignIn: void 0 });
}
function bwe(o) {
  let p = w(33), s = su(), a = Gn(), u = il(), [c, g] = y(false), h;
  if (p[0] === b) h = () => g(true), p[0] = h;
  else h = p[0];
  let _ = h, O = A(false), C = A(null), [E, F] = y(false), I;
  if (p[1] !== s || p[2] !== o || p[3] !== a) I = (R) => {
    if (O.current) {
      return;
    }
    if (O.current = true, F(true), C.current !== null && o.onHybridSignIn) {
      o.onHybridSignIn(C.current);
      return;
    }
    o.onDone(R, s, a);
  }, p[1] = s, p[2] = o, p[3] = a, p[4] = I;
  else I = p[4];
  let S = I, G;
  if (p[5] !== c || p[6] !== S) G = () => S(c), p[5] = c, p[6] = S, p[7] = G;
  else G = p[7];
  let k = G, f;
  if (p[8] === b) f = { context: "Settings" }, p[8] = f;
  else f = p[8];
  lt("confirm:no", k, f);
  let [m] = y(AMe), U;
  if (p[9] !== m.kind) U = () => m.kind === "any-method" && vnt() !== void 0, p[9] = m.kind, p[10] = U;
  else U = p[10];
  let [M] = y(U), { exit: D } = GR(), [v, B] = y(m.kind === "refused"), H;
  if (p[11] !== D || p[12] !== S || p[13] !== v) H = () => {
    if (v && !O.current) {
      S(false);
      return;
    }
    D();
  }, p[11] = D, p[12] = S, p[13] = v, p[14] = H;
  else H = p[14];
  let T = ds(H);
  const Q = (c || M) && !T.pending;
  let K;
  if (p[15] !== E || p[16] !== T.keyName || p[17] !== T.pending || p[18] !== v || p[19] !== m.kind) K = T.pending ? r(n, { children: ["Press ", T.keyName, " again to", " ", v && !E ? "cancel" : "exit"] }) : e(pt, { action: "confirm:no", context: "Settings", fallback: "Esc", description: m.kind === "refused" ? "close" : "cancel" }), p[15] = E, p[16] = T.keyName, p[17] = T.pending, p[18] = v, p[19] = m.kind, p[20] = K;
  else K = p[20];
  let z;
  if (p[21] !== S || p[22] !== u || p[23] !== o.onHybridSignIn || p[24] !== o.startingMessage || p[25] !== m.kind || p[26] !== m.notice) z = m.kind === "refused" ? e(n, { children: m.notice }) : e(MPe, { onDone: () => S(true), onAuthSuccess: _, onHybridSignIn: o.onHybridSignIn && ((Ee) => {
    C.current = Ee, _();
  }), onFreshPickerChange: B, startingMessage: o.startingMessage, forceLoginMethod: m.kind === "claudeai-only" ? "claudeai" : void 0, urlOutdent: u ? HA : aw }), p[21] = S, p[22] = u, p[23] = o.onHybridSignIn, p[24] = o.startingMessage, p[25] = m.kind, p[26] = m.notice, p[27] = z;
  else z = p[27];
  let ie;
  if (p[28] !== k || p[29] !== Q || p[30] !== K || p[31] !== z) ie = e(we, { title: "Login", onCancel: k, color: "permission", isCancelActive: false, hideInputGuide: Q, inputGuide: K, children: z }), p[28] = k, p[29] = Q, p[30] = K, p[31] = z, p[32] = ie;
  else ie = p[32];
  return ie;
}
export {
  Agi,
  Bcs,
  EPe,
  Hgi,
  Igi,
  Mgi,
  Ogi,
  Pgi,
  Rgi,
  Tgi,
  bwe,
  cxt,
  rki,
  xgi
};
