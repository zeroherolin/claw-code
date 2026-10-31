// darwin/ui/oauth-console-selected.js — Claude Code 2.1.310（darwin）模块 chunk-3d5y5dgh.js
import { __asset_src } from "../../runtime/assets.js";
import { S, c } from "../agents/third-party.js";
import { R, d, v } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { eie, fk } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I, re, qg, dc } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { bLe, Ati, GEt, zEt, Czt, UAe, Tzt, U_e, Rti, VEt, wLe, Poe, hVe, _Ve, Azt, hS, y_n, e3o, OKr, MKr, Iri, vnt, sRe, knt, FKr, Rue, bvt, gn, aM, BVe, oZ, b3o, psi, As, Re } from "../settings/global-config-and-gates.js";
import { Sl } from "../mcp/allowed-warning.js";
import { Oi } from "../git/utf-8.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { ln, mt, jNe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Te } from "../models/total-tokens-reminder.js";
import { Vn, TZ } from "../auth/permission-error.js";
import { Nse, Lar, Aqe, UZ, Nar } from "../auth/profile-explicit.js";
import { lf } from "../settings/ax-sr-suggestion-nav.js";
import { Nce } from "../context/account-memory-text-not-identified.js";
import { R2, H0 } from "../telemetry/focus-events.js";
import { p2e } from "../terminal/wl-copy.js";
import { dMt, Fks, $ks, Uks, jEr, Bks, Wks } from "../auth/user-oauth.js";
import { w } from "./chunk-0ed4c357.js";
import { il } from "../shared/chunk-9bbd1b38.js";
import { pD } from "../terminal/aria-preserve-whitespace.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { pn, rt, s, n, Yt, GR, Vr } from "../telemetry/render-glyph-cardinality.js";
import { Pfe, zX, VX } from "./tmux-buffer.js";
import { Ce } from "../shared/chunk-bdaaea45.js";
import { lt, um } from "../shared/chunk-76877d92.js";
import { Yo } from "../shared/chunk-e4a3aa33.js";
import { xlt } from "./chunk-03aae52e.js";
import { Cr } from "../commands/aria-preserve-whitespace.js";
import { q } from "../context/chunk-e2302e3b.js";
import { Yxt } from "./bedrock-setup-complete.js";
import { Je } from "./aria-hidden.aa9d.js";
import { cr } from "./chunk-783db08b.js";
import { ji } from "./spinner-stall-cleared.js";
import { Xxt } from "./vertex-setup-complete.js";
import { m5e, qno, Yno, A8t, R8t } from "../auth/oauth-storage-warning.js";
import { T$ } from "../terminal/notification-method-used.js";
import { rq } from "./chunk-e2c1cf01.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { UCs } from "../permissions/chunk-88685f75.js";
import { de, P, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { xQn, PQn, AF } from "../auth/oauth-automatic-redirect.js";
import { RV, Js } from "../ide/opener-missing.js";
import { ge, Sn, Ct } from "../vendor/zod/invalid-return-type.js";
import { Hs } from "../remote/claude-code-remote.js";
import { b, En } from "../vendor/react/chunk-0b0bf45d.js";
j();
class Ge extends Error {
  fallbackCures;
  causeSummary;
  constructor(O, o) {
    super(O, { cause: o.cause });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}
async function Pt(O, o, F = {}) {
  try {
    let z = await eo(O, o, F);
    return g("oauth_console_profile_login"), z;
  } catch (z) {
    if (z instanceof Ge && z.fallbackCures) p("oauth_console_profile_login", "refused_fell_back");
    else m("oauth_console_profile_login", z instanceof Ge ? "refused" : "error");
    throw z;
  }
}
async function eo(O, o, { loginHint: F, loginMethod: z, orgUUID: B, onCallbackListenerUnavailable: V }) {
  try {
    await jEr();
  } catch (N) {
    let se = $ks(N);
    if (se === null) throw N;
    let U = Uks(N);
    throw new Ge(d(N), se && U !== null ? { fallbackCures: true, causeSummary: U, cause: N } : { fallbackCures: false, cause: N });
  }
  let k = await O.startOAuthFlow(o, { loginWithClaudeAi: false, oauthClient: { clientId: dMt, scopes: Fks }, loginHint: F, loginMethod: z, orgUUID: B, onCallbackListenerUnavailable: V }), T = no(k);
  if (T instanceof Error) throw await Et(k), T;
  await oo(await to());
  let M = await qno(k, {}), ue;
  try {
    let N = k.tokenAccount;
    ue = await Bks({ accessToken: k.accessToken, refreshToken: T.refreshToken, expiresAtMs: T.expiresAtMs, scopes: k.scopes, organizationUuid: N?.organizationUuid ?? k.profile?.organization.uuid, organizationName: N?.organizationName ?? k.profile?.organization.name, accountEmail: N?.emailAddress ?? k.profile?.account.email, workspaceId: N?.workspaceId, workspaceName: N?.workspaceName });
  } catch (N) {
    if (!await Wks(T.refreshToken)) await Et(k);
    throw N;
  }
  return await y_n(k.accessToken).catch((N) => t(String(N), { level: "error" })), await Yno({ ...M }), ue;
}
async function to() {
  if (Te() !== "firstParty") return null;
  let O = Vn();
  O.invalidateCache?.();
  let o = (await O.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? { refreshToken: o.refreshToken, clientId: o.clientId } : null;
}
async function oo(O) {
  if (O === null) return;
  await hS(O.refreshToken, O.clientId);
  try {
    await Vn().mutate((o) => ({ ...o, claudeAiOauth: void 0 }));
  } catch (o) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${d(o)}`, { level: "error" });
  }
}
function no(O) {
  if (!O.scopes.includes(fk)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!O.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (O.expiresAt === null || !Number.isFinite(O.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return { refreshToken: O.refreshToken, expiresAtMs: O.expiresAt };
}
async function Et(O) {
  if (O.refreshToken) await hS(O.refreshToken, dMt);
}
j();
var ro = "urn:ietf:params:oauth:grant-type:device_code", io = "claude_code", ao = /* @__PURE__ */ new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]), ht = 254, so = "Sign-in timed out while waiting for you to continue. Try again.", Ut = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function wt(O) {
  let o = d(O);
  if (o.includes(zEt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (o.includes(Czt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (Tzt(O) !== void 0) return Ut;
  return o;
}
function lo(O) {
  let o = O?.response?.data;
  if (typeof o !== "object" || o === null) return;
  let F = o.error_description;
  if (typeof F !== "string") return;
  return re(qg(F), 300).trim() || void 0;
}
function uo(O) {
  let o = v(O) ?? v(O?.cause), F = d(O);
  if (!(o !== void 0 && ao.has(o) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(F))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust store by default on the native binary and Node ≥22.15, so if the CA is already installed there, upgrade to a current runtime. Otherwise set NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting — e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` — or add it under `env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
var co = f(() => Ct({ device_authorization_endpoint: ge().optional(), token_endpoint: ge().optional(), revocation_endpoint: ge().nullish().catch(void 0) }));
function Rt(O, o, F) {
  let z = OKr(O, o);
  if (z) return z;
  if (o) t(`[gateway-login] ignoring advertised endpoint ${o} (not same-origin with ${O}); using ${F}`);
  return `${O}${F}`;
}
var go = f(() => Ct({ device_code: ge(), user_code: ge(), verification_uri: ge(), verification_uri_complete: ge().optional(), expires_in: Sn(), interval: Sn().optional() }));
function yt({ onDone: O, onCancel: o, initialUrl: F, namedBy: z, internalNetworks: B, screenLocked: V }) {
  let { credentials: k } = Me(), [T, M] = y({ state: "url_input" }), ue = void 0, N = F ?? void 0, se = z === "developer" ? `Gateway URL from your settings file (${ln("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):", U = A(0), Z = A(false), ke = A(false);
  P(() => () => {
    U.current += 1;
  }, []);
  let ve = V ? () => M({ state: "url_input" }) : o;
  function pe() {
    U.current += 1, ve();
  }
  async function ye(W) {
    let D = ++U.current;
    M({ state: "connecting" });
    try {
      let x = bLe(W), G = await Ati(x, B, z);
      if (D !== U.current) return;
      ke.current = G.basis === "vouched";
      let Y = G.basis === "network" ? G.network : void 0, i = G.basis === "allowlisted" ? G.entry : void 0, we = G.basis === "allowlisted" ? G.judged : Y ? await GEt(x, 1e4, Y) : void 0;
      if (D !== U.current) return;
      let h = await Sl.get(`${x}/.well-known/oauth-authorization-server`, { headers: { "User-Agent": Hs() }, timeout: 1e4, ...G.basis === "allowlisted" && { httpsAgent: U_e(G.judged.fingerprint, x, true), maxRedirects: 0 } });
      if (D !== U.current) return;
      let _ = co().safeParse(h.data), te = _.success ? _.data : void 0, oe = OKr(x, te?.revocation_endpoint);
      if (te?.revocation_endpoint && !oe) t(`[gateway-login] ignoring advertised revocation endpoint ${te.revocation_endpoint} (not same-origin with ${x}); sign-out will not revoke`);
      let fe = { deviceAuthorizationEndpoint: Rt(x, te?.device_authorization_endpoint, "/oauth/device_authorization"), tokenEndpoint: Rt(x, te?.token_endpoint, "/oauth/token"), ...oe && { revocationEndpoint: oe } }, { hostname: be, fingerprint: u, localAddress: C, remoteAddress: E } = we ?? await GEt(x);
      if (D !== U.current) return;
      let H = await UAe(be, k);
      if (D !== U.current) return;
      if (H === u) await Se(x, fe, u, i);
      else M({ state: "trust_prompt", url: x, hostname: be, fingerprint: u, previouslyPinned: H, endpoints: fe, allowlistEntry: i, ...Y && { route: `from ${C} to ${E}, both inside declared ${Y}` } });
    } catch (x) {
      if (D !== U.current) return;
      let G = uo(x);
      M(G ? { state: "error", message: G, detail: d(x) } : { state: "error", message: wt(x) });
    }
  }
  async function Se(W, D, x, G) {
    let Y = ++U.current;
    M({ state: "connecting" });
    try {
      let i = U_e(x, D.deviceAuthorizationEndpoint), { data: we } = await Sl.post(D.deviceAuthorizationEndpoint, new URLSearchParams({ surface: io }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": Hs() }, timeout: 1e4, maxRedirects: 0, ...i && { httpsAgent: i } });
      if (Y !== U.current) return;
      let h = go().safeParse(we);
      if (!h.success) throw Error("gateway device authorization endpoint returned malformed response");
      let _ = h.data;
      Js(_.verification_uri_complete ?? _.verification_uri), M({ state: "polling", url: W, userCode: _.user_code, verificationUri: _.verification_uri }), await L(W, D, _.device_code, _.interval ?? 5, Y, x, G);
    } catch (i) {
      if (Y !== U.current) return;
      if (MKr(i) === "slow_down") {
        M({ state: "error", message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.", detail: lo(i) });
        return;
      }
      M({ state: "error", message: wt(i) });
    }
  }
  async function L(W, D, x, G, Y, i, we) {
    let { tokenEndpoint: h } = D, _ = Math.max(1, G);
    while (Y === U.current) {
      if (await X(_ * 1e3), Y !== U.current) return;
      try {
        let te = U_e(i, h), { data: oe } = await Sl.post(h, new URLSearchParams({ grant_type: ro, device_code: x }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": Hs() }, timeout: 1e4, maxRedirects: 0, ...te && { httpsAgent: te } });
        if (Y !== U.current) return;
        let fe = e3o().safeParse(oe);
        if (!fe.success) throw Error("gateway token endpoint returned malformed response");
        await he(W, D, fe.data, Y, we);
        return;
      } catch (te) {
        if (Y !== U.current) return;
        let oe = MKr(te);
        if (oe === "authorization_pending") continue;
        if (oe === "slow_down") {
          _ += 5;
          continue;
        }
        if (oe === "expired_token") {
          M({ state: "error", message: "Sign-in timed out before the browser flow completed. Try again." });
          return;
        }
        if (oe === "access_denied") {
          M({ state: "error", message: "Sign-in was denied in the browser." });
          return;
        }
        M({ state: "error", message: wt(te) });
        return;
      }
    }
  }
  async function he(W, D, x, G, Y) {
    let i = x.email ?? "", we = re(i, 16 * ht), h = dc(we), _ = we.length < i.length || h.length > ht ? `${re(h, ht)}…` : h, te = { url: W, jwt: x.access_token, expiresAt: Date.now() + x.expires_in * 1e3, tokenEndpoint: D.tokenEndpoint, ...D.revocationEndpoint && { revocationEndpoint: D.revocationEndpoint }, ...x.refresh_token && { idpRefreshToken: x.refresh_token }, ..._ && { email: _ }, vouchedAtLogin: ke.current }, { hostname: oe, fingerprint: fe } = await GEt(W);
    if (G !== U.current) return;
    let be = await UAe(oe, k);
    if (G !== U.current) return;
    if (be !== fe) {
      M({ state: "error", message: Ut });
      return;
    }
    if (_) {
      Z.current = false, M({ state: "confirm_account", auth: te, allowlistEntry: Y, email: _, saving: false });
      return;
    }
    await ce(te, Y, G);
  }
  async function ce(W, D, x) {
    try {
      await Iri(W, k, D);
    } catch (G) {
      if (x !== U.current) return;
      let Y = d(G);
      t(`[gateway-login] secureStorage write failed: ${Y}`, { level: "error" }), M({ state: "error", message: Y });
      return;
    }
    if (x !== U.current) return;
    Nce({ action: "login", success: true, authMethod: "oauth" }), O();
  }
  let xe = T.state === "url_input";
  switch (lt("confirm:yes", () => {
    if (N) ye(N);
  }, { context: "Confirmation", isActive: xe }), lt("confirm:no", V ? () => false : o, { context: "Confirmation", isActive: xe }), um((W, D) => D.escape, { isActive: T.state === "confirm_account" && T.saving }), T.state) {
    case "url_input":
      if (!N) return r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: "Cloud gateway" }), e(n, { color: "warning", children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator." })] });
      return r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: "Cloud gateway" }), e(n, { children: se }), e(s, { borderDimColor: true, borderStyle: "round", paddingLeft: 1, children: e(n, { children: N }) }), r(n, { dimColor: true, children: ["Press Enter to connect", V ? "" : " · Esc for other login methods"] })] });
    case "polling":
      return e(Dt, { userCode: T.userCode, verificationUri: T.verificationUri, onCancel: pe });
    case "connecting":
      return e(It, { label: "Connecting to gateway…", onCancel: pe });
    case "trust_prompt":
      return r(s, { flexDirection: "column", gap: 1, children: [r(n, { bold: true, children: ["Trust gateway ", e(n, { color: "suggestion", children: T.hostname }), "?"] }), T.previouslyPinned ? e(n, { color: "warning", children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation." }) : e(n, { children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway." }), T.route && r(n, { dimColor: true, children: ["Connecting ", T.route] }), r(n, { dimColor: true, children: ["Certificate fingerprint (SHA-256): ", T.fingerprint.slice(0, 16), "…"] }), e(cr, { hideIndexes: true, confirmLabel: "Yes, trust this gateway", cancelLabel: V ? "No, go back" : "No, cancel login", focus: "cancel", onConfirm: () => {
        let W = U.current;
        Rti(T.hostname, T.fingerprint, k).then(() => {
          if (W !== U.current) return;
          return Se(T.url, T.endpoints, T.fingerprint, T.allowlistEntry);
        }).catch((D) => {
          if (W !== U.current) return;
          M({ state: "error", message: d(D) });
        });
      }, onCancel: pe })] });
    case "confirm_account":
      return r(s, { flexDirection: "column", gap: 1, children: [r(n, { bold: true, children: ["Signed in to Cloud gateway as", " ", e(n, { color: "suggestion", children: T.email })] }), T.saving ? r(s, { gap: 1, children: [e(ji, {}), e(n, { dimColor: true, children: "Finishing sign-in…" })] }) : r(Q, { children: [e(n, { children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again." }), e(cr, { hideIndexes: true, focus: "cancel", confirmLabel: "Yes, continue", cancelLabel: V ? "No, go back" : "No, cancel login", onConfirm: () => {
        if (Z.current) return;
        if (Z.current = true, T.auth.expiresAt <= Date.now() && !T.auth.idpRefreshToken) {
          M({ state: "error", message: so });
          return;
        }
        let W = U.current;
        M((D) => D.state === "confirm_account" ? { ...D, saving: true } : D), ce(T.auth, T.allowlistEntry, W);
      }, onCancel: () => {
        if (Z.current) return;
        Z.current = true, t("[gateway-login] signed-in account declined; nothing saved"), ve();
      } })] })] });
    case "error":
      return e(Nt, { message: T.message, detail: T.detail, onCancel: ve });
  }
}
function Dt(O) {
  let B = w(13), { userCode: o, verificationUri: F, onCancel: z } = O, V;
  if (B[0] === b) V = { context: "Confirmation" }, B[0] = V;
  else V = B[0];
  lt("confirm:no", z, V);
  let k, T;
  if (B[1] === b) k = e(n, { bold: true, children: "Cloud gateway · sign in" }), T = e(n, { children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:" }), B[1] = k, B[2] = T;
  else k = B[1], T = B[2];
  let M;
  if (B[3] !== o) M = e(s, { borderDimColor: true, borderStyle: "round", paddingX: 2, children: e(n, { bold: true, color: "suggestion", children: o }) }), B[3] = o, B[4] = M;
  else M = B[4];
  let ue;
  if (B[5] === b) ue = e(n, { dimColor: true, children: "Browser didn't open? Visit:" }), B[5] = ue;
  else ue = B[5];
  let N;
  if (B[6] !== F) N = r(s, { flexDirection: "column", children: [ue, e(n, { dimColor: true, wrap: "wrap", children: F })] }), B[6] = F, B[7] = N;
  else N = B[7];
  let se, U;
  if (B[8] === b) se = r(s, { gap: 1, children: [e(ji, {}), e(n, { dimColor: true, children: "Waiting for sign-in to complete in your browser…" })] }), U = e(n, { dimColor: true, children: "Press Esc to cancel" }), B[8] = se, B[9] = U;
  else se = B[8], U = B[9];
  let Z;
  if (B[10] !== M || B[11] !== N) Z = r(s, { flexDirection: "column", gap: 1, children: [k, T, M, N, se, U] }), B[10] = M, B[11] = N, B[12] = Z;
  else Z = B[12];
  return Z;
}
function It(O) {
  let z = w(7), { label: o, onCancel: F } = O, B;
  if (z[0] === b) B = { context: "Confirmation" }, z[0] = B;
  else B = z[0];
  lt("confirm:no", F, B);
  let V;
  if (z[1] === b) V = e(ji, {}), z[1] = V;
  else V = z[1];
  let k;
  if (z[2] !== o) k = r(s, { gap: 1, children: [V, e(n, { children: o })] }), z[2] = o, z[3] = k;
  else k = z[3];
  let T;
  if (z[4] === b) T = e(n, { dimColor: true, children: "Press Esc to cancel" }), z[4] = T;
  else T = z[4];
  let M;
  if (z[5] !== k) M = r(s, { flexDirection: "column", gap: 1, children: [k, T] }), z[5] = k, z[6] = M;
  else M = z[6];
  return M;
}
function Nt(O) {
  let B = w(9), { message: o, detail: F, onCancel: z } = O, V;
  if (B[0] === b) V = { context: "Confirmation" }, B[0] = V;
  else V = B[0];
  lt("confirm:no", z, V);
  let k;
  if (B[1] !== o) k = r(n, { color: "error", children: ["Error: ", o] }), B[1] = o, B[2] = k;
  else k = B[2];
  let T;
  if (B[3] !== F) T = F && e(n, { dimColor: true, children: F }), B[3] = F, B[4] = T;
  else T = B[4];
  let M;
  if (B[5] === b) M = e(n, { dimColor: true, children: "Press Esc to go back" }), B[5] = M;
  else M = B[5];
  let ue;
  if (B[6] !== k || B[7] !== T) ue = r(s, { flexDirection: "column", gap: 1, children: [k, T, M] }), B[6] = k, B[7] = T, B[8] = ue;
  else ue = B[8];
  return ue;
}
function Vo(xt) {
  return xt.title;
}
function Xo(Ve) {
  return { label: r(n, { children: [Ve.title, " · ", e(n, { dimColor: true, children: Ve.hint })] }), value: Ve.value };
}
function Ko(et) {
  return et.value === "foundry";
}
var Co = "Paste code here if prompted > ", tt = "The recommended sign-in isn't available on this machine";
function vo(O) {
  let o = Math.round(O / 86400);
  if (o < 1) return "less than a day";
  if (o === 365) return "1 year";
  return `${o} ${I(o, "day")}`;
}
function MPe({ onDone: O, onAuthSuccess: o, onHybridSignIn: F, onFreshPickerChange: z, onAccountOnHold: B, startingMessage: V, mode: k = "login", expiresIn: T, forceLoginMethod: M, urlOutdent: ue = 0, allowContinueWithoutLogin: N = false }) {
  let se = il(), { storageV5: U, credentials: Z } = Me(), ke = Yo((ae) => ae.proactivityLevel), ve = Yo((ae) => ae.toolPermissionContext), pe = (se ? rq : 0) + ue, ye = mt(), { forceLoginGatewayUrl: Se, gatewayInternalNetworks: L } = jNe(), [he] = y(vnt), ce = Se ?? he, xe = Se !== void 0 ? "administrator" : "developer", W = oZ(), D = W === "gateway", x = D ? "gateway" : M ?? W, G = x === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : x === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null, Y = null, i = pD(), we = pn(), [h, _] = y(() => {
    if (k === "setup-token") return { state: "ready_to_start" };
    if (x === "claudeai" || x === "console") return { state: "ready_to_start" };
    if (D || he) return { state: "gateway_setup" };
    return { state: "idle" };
  }), te = A(false);
  P(() => {
    if (h.state !== "idle" && h.state !== "platform_setup" && h.state !== "console_method") te.current = true;
    z?.(h.state === "idle" && !te.current);
  }, [h.state, z]);
  let [oe, fe] = y(""), [be, u] = y(0), [C] = y(() => new AF()), [E, H] = y(() => k === "setup-token" || x === "claudeai"), [ne, ie] = y(false), [me, _e] = y(null), He = b3o(), Ne = Te() === "firstParty" && !He && ye.forceLoginOrgUUID === void 0 && x !== "claudeai", We = wLe(), at = Poe("firstParty") === void 0, Jt = ye.forceLoginMethod !== void 0 && E !== (ye.forceLoginMethod === "claudeai"), $e = typeof ye.forceLoginOrgUUID === "string" && !Jt ? ye.forceLoginOrgUUID : void 0, [Ye, st] = y(false), [qe, ut] = y(false), { copiedVia: ct, copy: dt, reset: Ae } = Pfe(h.state === "waiting_for_login" ? h.url : null), Fe = qe ? PQn : Co, Ze = Ce().columns - Fe.length - 1, [je] = y(() => H0() && R2() !== "off");
  P(() => {
    if (x === "claudeai") a("tengu_oauth_claudeai_forced", {});
    else if (x === "console") a("tengu_oauth_console_forced", {});
    else if (D && true && k !== "setup-token") a("tengu_oauth_gateway_forced", {});
  }, [x, D, k]), Vr(() => {
    if (h.state === "about_to_retry") _(h.nextState);
  }, h.state === "about_to_retry" ? 1e3 : null, [h]), lt("confirm:yes", () => {
    if (h.state !== "storage_failed" && !(h.state === "success" && h.hybrid)) a(h.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", { loginWithClaudeAi: E });
    O();
  }, { context: "Confirmation", isActive: h.state === "success" && k !== "setup-token" || h.state === "storage_failed" && h.sessionAuth === "fresh" || h.state === "gateway_done" });
  let Ue = GR(), gt = A(false);
  lt("confirm:yes", () => {
    if (gt.current) return;
    gt.current = true, Re((ae) => ({ ...ae, hasCompletedOnboarding: true, lastOnboardingVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION }), U).then(() => {
      Ue.exit();
      let ae = ke !== void 0 && ve !== void 0 ? UCs({ proactivityLevel: ke, toolPermissionContext: ve }) : void 0;
      import("../shell/exec-relaunch.js").then((Ee) => Ee.execRelaunch(ae ? { proactivity: ae } : {}));
    });
  }, { context: "Confirmation", isActive: h.state === "bedrock_done" || h.state === "vertex_done" }), lt("confirm:yes", () => _({ state: "platform_setup" }), { context: "Confirmation", isActive: h.state === "aws_refresh_done" }), lt("confirm:yes", () => {
    if (h.state === "error" && h.toRetry) fe(""), _({ state: "about_to_retry", nextState: h.toRetry });
    else if (h.state === "storage_failed" && h.sessionAuth !== "fresh") fe(""), _({ state: "about_to_retry", nextState: x === "claudeai" || x === "console" ? { state: "ready_to_start" } : { state: "idle" } });
  }, { context: "Confirmation", isActive: h.state === "error" && !!h.toRetry || h.state === "storage_failed" && h.sessionAuth !== "fresh" }), lt("confirm:no", () => O(), { context: "Confirmation", isActive: N && (h.state === "storage_failed" && h.sessionAuth !== "fresh" || h.state === "error") }), lt("confirm:yes", () => _({ state: "idle" }), { context: "Confirmation", isActive: h.state === "account_on_hold" && k !== "setup-token" }), P(() => {
    if (/^c+$/.test(oe) && h.state === "waiting_for_login" && Ye) fe(""), dt(h.url);
  }, [oe, h, Ye, dt]);
  async function Qe(ae, Ee) {
    if (!ae.trim()) {
      fe(""), u(0);
      return;
    }
    try {
      let [Pe, le] = ae.split("#");
      if (!Pe || !le) {
        _({ state: "error", message: "Invalid code. Please make sure the full code was copied", toRetry: { state: "waiting_for_login", url: Ee } });
        return;
      }
      a("tengu_oauth_manual_entry", {}), C.handleManualAuthCodeInput({ authorizationCode: Pe, state: le });
    } catch (Pe) {
      l(Pe), _({ state: "error", message: d(Pe), toRetry: { state: "waiting_for_login", url: Ee } });
    }
  }
  let xt = A(new AbortController());
  P(() => {
    let ae = xt.current;
    return () => ae.abort();
  }, []);
  let Ve = de(async () => {
    let ae = false;
    ut(false);
    let Ee = () => {
      ae = true, ut(true);
    }, Pe = (le) => {
      if (Ae(), st(false), _({ state: "waiting_for_login", url: le }), ae || RV()) st(true);
      else we.setTimeout(() => st(true), 3e3);
    };
    _e(null);
    try {
      let le = hVe("firstParty");
      if (le !== void 0) throw new VEt(le);
      if (a("tengu_oauth_flow_start", { loginWithClaudeAi: E }), ne && k !== "setup-token") {
        if (!Ne) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
        try {
          await Pt(C, async (K) => Pe(K), { orgUUID: $e, onCallbackListenerUnavailable: Ee }), _({ state: "success" }), o?.(), T$({ message: "Claude Code login successful", notificationType: "auth_success" }, i, { storageV5: U, credentials: Z });
          return;
        } catch (K) {
          if (!(K instanceof Ge) || !K.fallbackCures) throw K;
          let Le = Oi(d(K));
          _e({ cause: K.causeSummary !== null ? Oi(K.causeSummary) : Le, message: Le }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${Le}`, { level: "warn" });
        }
      }
      let ft, De = await C.startOAuthFlow(async (K) => Pe(K), { loginWithClaudeAi: E, inferenceOnly: k === "setup-token", expiresIn: k === "setup-token" ? T ?? eie : void 0, orgUUID: $e, onCallbackListenerUnavailable: Ee, settingsOnlyGrant: ft }).catch((K) => {
        if (K instanceof UZ) throw K;
        let Le = K.message.includes("Token exchange failed"), Ie = TZ(K);
        throw _({ state: "error", message: Ie ?? (Le ? "Failed to exchange authorization code for access token. Please try again." : K.message), toRetry: k === "setup-token" ? { state: "ready_to_start" } : { state: "idle" } }), a("tengu_oauth_token_exchange_error", { ...lf(K), ssl_error: Ie !== null }), K;
      });
      if (k === "setup-token") _({ state: "success", token: De.accessToken, expiresAt: De.expiresAt ?? void 0 }), o?.();
      else {
        let K = await BVe(De);
        if (K.outcome === "refused") throw new R(K.rejection.message, "ConsoleOAuthFlow: org pin refused the new token");
        let Le = await m5e(De, { storageV5: U, credentials: Z }), Ie = await aM(Z, K.outcome === "permitted" ? K.verified : void 0);
        if (!Ie.valid) {
          let pt = await R8t(Ie, Le?.storage, { storageV5: U, credentials: Z });
          throw Error(pt?.restored === false ? `${Ie.message}
${A8t(pt)}` : Ie.message);
        }
        let Oe = Le?.storage;
        if (Oe && !Oe.success) {
          if (_({ state: "storage_failed", backendName: Oe.backendName, sessionAuth: Oe.sessionAuth, transient: Oe.transient }), a("tengu_oauth_persist_failure_shown", { storageBackend: psi(Oe.backendName), session_auth: c(Oe.sessionAuth), transient: Oe.transient === true }), Oe.sessionAuth === "fresh") o?.();
          T$({ message: Oe.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved", notificationType: "auth_storage_failure" }, i, { storageV5: U, credentials: Z });
        } else _({ state: "success" }), o?.(), T$({ message: "Claude Code login successful", notificationType: "auth_success" }, i, { storageV5: U, credentials: Z });
      }
    } catch (le) {
      if (Nar(le)) {
        _({ state: "account_on_hold", message: Lar(Aqe(le.errorUri)) }), a("tengu_oauth_error", { account_on_hold: true });
        return;
      }
      let ft = le instanceof UZ ? le.displayMessage : d(le), De = TZ(le);
      _({ state: "error", message: De ?? ft, ...Azt(le) && { verbatim: true }, toRetry: { state: k === "setup-token" || x === "claudeai" || x === "console" && !Ne ? "ready_to_start" : x === "console" ? "console_method" : "idle" } }), a("tengu_oauth_error", { ...lf(le), ssl_error: De !== null });
    }
  }, [C, E, ne, Ne, k, T, $e, i, we, o, F, x, U, Z, Ae]), et = A(false);
  return P(() => {
    if (h.state === "ready_to_start" && !et.current) et.current = true, process.nextTick((ae, Ee) => {
      ae().finally(() => {
        Ee.current = false;
      });
    }, Ve, et);
  }, [h.state, Ve]), Vr(() => {
    a("tengu_oauth_success", { loginWithClaudeAi: E }), O();
  }, k === "setup-token" && h.state === "success" ? 500 : null, [k, h, E, O]), Vr(() => B?.(), k === "setup-token" && h.state === "account_on_hold" ? 500 : null, [k, h, B]), P(() => () => {
    C.cleanup();
  }, [C]), r(s, { flexDirection: "column", gap: 1, children: [h.state === "waiting_for_login" && Ye && r(s, { flexDirection: "column", gap: 1, paddingBottom: 1, marginX: pe ? -pe : void 0, children: [r(s, { flexDirection: "column", paddingX: pe, children: [qe && e(n, { children: xQn }), r(s, { children: [e(n, { dimColor: true, children: qe ? "Use the URL below to sign in " : "Browser didn't open? Use the url below to sign in " }), e(zX, { via: ct })] }), e(VX, { via: ct })] }), e(s, { children: e(Yt, { url: h.url, assumeSupport: true, children: e(n, { dimColor: true, children: h.url }) }) }), je && e(s, { paddingX: pe, children: r(n, { dimColor: true, children: ["Hold ", p2e(), " while selecting to use your terminal's native copy"] }) })] }, "urlToCopy"), k === "setup-token" && h.state === "success" && h.token && r(s, { flexDirection: "column", gap: 1, paddingTop: 1, children: [e(n, { color: "success", children: "✓ Long-lived authentication token created successfully!" }), r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Your OAuth token (valid for", " ", vo(h.expiresAt !== void 0 && Number.isFinite(h.expiresAt) ? Math.round((h.expiresAt - Date.now()) / 1e3) : T ?? eie), "):"] }), e(n, { color: "warning", children: h.token }), e(n, { dimColor: true, children: "Store this token securely. You won't be able to see it again." }), e(n, { dimColor: true, children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>" })] })] }, "tokenOutput"), e(s, { flexDirection: "column", gap: 1, children: e(Qt, { oauthStatus: h, mode: k, startingMessage: V, forcedMethodMessage: G, gatewayUnsupportedWarning: null, forceLoginGatewayUrl: ce, gatewayNamedBy: xe, gatewayInternalNetworks: L, gatewayScreenLocked: D, keyMintFallbackReason: me, showPastePrompt: Ye, pasteCodePrompt: Fe, pastedCode: oe, setPastedCode: fe, cursorOffset: be, setCursorOffset: u, textInputColumns: Ze, handleSubmitCode: Qe, setOAuthStatus: _, setLoginWithClaudeAi: H, setConsoleProfileLogin: ie, consoleProfileLoginAllowed: Ne, allowedProviders: We, firstPartyLoginAllowed: at, onAuthSuccess: o, allowContinueWithoutLogin: N }) })] });
}
function Tt(O) {
  let F = w(4), { onComplete: o } = O, z;
  if (F[0] !== o) z = () => {
    let B = sRe();
    if (!B) {
      o(false);
      return;
    }
    if (knt() && !As()) {
      o(false);
      return;
    }
    let V = new AbortController();
    return FKr(B, V.signal).then((k) => {
      if (V.signal.aborted) {
        return;
      }
      if (k) Rue(), bvt();
      o(k);
    }), () => V.abort();
  }, F[0] = o, F[1] = z;
  else z = F[1];
  let T;
  if (F[2] === b) T = [], F[2] = T;
  else T = F[2];
  P(z, T);
  let M;
  if (F[3] === b) M = r(s, { flexDirection: "column", gap: 1, children: [r(s, { children: [e(ji, {}), e(n, { children: "Running awsAuthRefresh…" })] }), e(xlt, {})] }), F[3] = M;
  else M = F[3];
  return M;
}
var Gt = [{ value: "bedrock", providers: ["bedrock"], title: "Amazon Bedrock", hint: "interactive setup" }, { value: "aws_refresh", providers: ["anthropicAws", "bedrock", "mantle"], title: "Claude Platform on AWS", hint: "refresh credentials" }, { value: "foundry", providers: ["foundry"], title: "Microsoft Foundry", hint: "opens docs" }, { value: "vertex", providers: ["vertex"], title: "Google Vertex AI", hint: "interactive setup" }];
function Qt(O) {
  let i = w(184), { oauthStatus: o, mode: F, startingMessage: z, forcedMethodMessage: B, gatewayUnsupportedWarning: V, forceLoginGatewayUrl: k, gatewayNamedBy: T, gatewayInternalNetworks: M, gatewayScreenLocked: ue, keyMintFallbackReason: N, showPastePrompt: se, pasteCodePrompt: U, pastedCode: Z, setPastedCode: ke, cursorOffset: ve, setCursorOffset: pe, textInputColumns: ye, handleSubmitCode: Se, setOAuthStatus: L, setLoginWithClaudeAi: he, setConsoleProfileLogin: ce, consoleProfileLoginAllowed: xe, allowedProviders: W, firstPartyLoginAllowed: D, onAuthSuccess: x, allowContinueWithoutLogin: G } = O, Y = rt(), we;
  if (i[0] === b) we = sRe(), i[0] = we;
  else we = i[0];
  let h = we, _;
  if (i[1] !== G || i[2] !== W || i[3] !== xe || i[4] !== ve || i[5] !== D || i[6] !== k || i[7] !== B || i[8] !== M || i[9] !== T || i[10] !== ue || i[11] !== V || i[12] !== Se || i[13] !== Y || i[14] !== N || i[15] !== F || i[16] !== o.backendName || i[17] !== o.message || i[18] !== o.ok || i[19] !== o.sessionAuth || i[20] !== o.state || i[21] !== o.toRetry || i[22] !== o.token || i[23] !== o.transient || i[24] !== o.url || i[25] !== o.verbatim || i[26] !== x || i[27] !== U || i[28] !== Z || i[29] !== ce || i[30] !== pe || i[31] !== he || i[32] !== L || i[33] !== ke || i[34] !== se || i[35] !== z || i[36] !== ye) {
    _ = En;
    Jt: {
      let te;
      if (i[38] !== W) te = (oe) => (W === void 0 || oe.providers.some((fe) => W.includes(fe))) && (oe.value !== "aws_refresh" || !!h), i[38] = W, i[39] = te;
      else te = i[39];
      let be = Gt.filter(te);
      switch (o.state) {
        case "idle": {
          const u = z ? z : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
          let C;
          if (i[40] !== u) C = e(n, { bold: true, children: u }), i[40] = u, i[41] = C;
          else C = i[41];
          let E;
          if (i[42] !== V) E = V && e(n, { color: "warning", children: V }), i[42] = V, i[43] = E;
          else E = i[43];
          const H = !D && be.length === 0 && e(n, { color: "error", children: Poe("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator." });
          let ne;
          if (i[44] === b) ne = e(n, { children: "Select login method:" }), i[44] = ne;
          else ne = i[44];
          let ie;
          if (i[45] !== D) ie = D ? [{ label: r(n, { children: ["Claude account with subscription ·", " ", e(n, { dimColor: true, children: "Pro, Max, Team, or Enterprise" }), false] }), value: "claudeai" }, { label: r(n, { children: ["Anthropic Console account ·", " ", e(n, { dimColor: true, children: "API usage billing" })] }), value: "console" }] : [], i[45] = D, i[46] = ie;
          else ie = i[46];
          const me = be.length > 0 ? [{ label: r(n, { children: ["3rd-party platform ·", " ", e(n, { dimColor: true, children: be.map(Vo).join(", ") })] }), value: "platform" }] : [];
          let _e;
          if (i[47] !== me || i[48] !== ie) _e = [...ie, ...me], i[47] = me, i[48] = ie, i[49] = _e;
          else _e = i[49];
          let He;
          if (i[50] !== xe || i[51] !== ce || i[52] !== he || i[53] !== L) He = (Ne) => {
            if (Ne === "platform") a("tengu_oauth_platform_selected", {}), L({ state: "platform_setup" });
            else if (Ne === "claudeai") a("tengu_oauth_claudeai_selected", {}), he(true), ce(false), L({ state: "ready_to_start" });
            else if (xe) a("tengu_oauth_console_selected", {}), L({ state: "console_method" });
            else a("tengu_oauth_console_selected", {}), he(false), ce(false), L({ state: "ready_to_start" });
          }, i[50] = xe, i[51] = ce, i[52] = he, i[53] = L, i[54] = He;
          else He = i[54];
          let We;
          if (i[55] !== _e || i[56] !== He) We = e(s, { children: e(Je, { options: _e, onChange: He }) }), i[55] = _e, i[56] = He, i[57] = We;
          else We = i[57];
          let at;
          if (i[58] !== We || i[59] !== C || i[60] !== E || i[61] !== H) at = r(s, { flexDirection: "column", gap: 1, children: [C, E, H, ne, We] }), i[58] = We, i[59] = C, i[60] = E, i[61] = H, i[62] = at;
          else at = i[62];
          _ = at;
          break Jt;
        }
        case "gateway_setup": {
          let u;
          if (i[63] !== x || i[64] !== L) u = () => {
            x?.(), L({ state: "gateway_done" });
          }, i[63] = x, i[64] = L, i[65] = u;
          else u = i[65];
          let C;
          if (i[66] !== L) C = () => L({ state: "idle" }), i[66] = L, i[67] = C;
          else C = i[67];
          let E;
          if (i[68] !== k || i[69] !== M || i[70] !== T || i[71] !== ue || i[72] !== u || i[73] !== C) E = e(yt, { initialUrl: k, namedBy: T, internalNetworks: M, screenLocked: ue, onDone: u, onCancel: C }), i[68] = k, i[69] = M, i[70] = T, i[71] = ue, i[72] = u, i[73] = C, i[74] = E;
          else E = i[74];
          _ = E;
          break Jt;
        }
        case "gateway_done": {
          let u;
          if (i[75] === b) u = e(n, { color: "success", children: "Connected to Cloud gateway." }), i[75] = u;
          else u = i[75];
          let C;
          if (i[76] === b) C = r(s, { flexDirection: "column", gap: 1, marginTop: 1, children: [u, r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue."] })] }), i[76] = C;
          else C = i[76];
          _ = C;
          break Jt;
        }
        case "console_method": {
          let u, C;
          if (i[77] === b) u = e(n, { bold: true, children: "Anthropic Console account" }), C = e(n, { children: "How do you want to sign in?" }), i[77] = u, i[78] = C;
          else u = i[77], C = i[78];
          let E;
          if (i[79] === b) E = { label: r(n, { children: ["Sign in with your Console account", " ", e(n, { dimColor: true, children: "(recommended)" })] }), value: "wif" }, i[79] = E;
          else E = i[79];
          let H;
          if (i[80] === b) H = e(n, { dimColor: true, children: "(legacy)" }), i[80] = H;
          else H = i[80];
          let ne;
          if (i[81] === b) ne = [E, { label: r(n, { children: ["Create an API key ", H, " ·", " ", e(n, { dimColor: true, children: "adds a key to your Console workspace" })] }), value: "api-key" }, { label: "Go back", value: "back" }], i[81] = ne;
          else ne = i[81];
          let ie;
          if (i[82] !== L) ie = () => L({ state: "idle" }), i[82] = L, i[83] = ie;
          else ie = i[83];
          let me;
          if (i[84] !== ce || i[85] !== he || i[86] !== L) me = ($e) => {
            if ($e === "back") {
              L({ state: "idle" });
              return;
            }
            if (he(false), $e === "wif") a("tengu_oauth_console_token_selected", {}), ce(true);
            else a("tengu_oauth_console_api_key_selected", {}), ce(false);
            L({ state: "ready_to_start" });
          }, i[84] = ce, i[85] = he, i[86] = L, i[87] = me;
          else me = i[87];
          let _e;
          if (i[88] !== me || i[89] !== ie) _e = r(s, { flexDirection: "column", gap: 1, children: [u, C, e(s, { children: e(Je, { options: ne, onCancel: ie, onChange: me }) })] }), i[88] = me, i[89] = ie, i[90] = _e;
          else _e = i[90];
          _ = _e;
          break Jt;
        }
        case "platform_setup": {
          let u;
          if (i[91] === b) u = e(n, { bold: true, children: "Using 3rd-party platforms" }), i[91] = u;
          else u = i[91];
          const C = [...be.map(Xo), { label: "Go back", value: "back" }];
          let E, H;
          if (i[92] !== L) E = (Ye) => {
            st: switch (Ye) {
              case "bedrock": {
                a("tengu_oauth_bedrock_wizard_launched", {}), L({ state: "bedrock_wizard" });
                break st;
              }
              case "aws_refresh": {
                a("tengu_oauth_aws_refresh_launched", {}), L({ state: "aws_refresh_running" });
                break st;
              }
              case "foundry": {
                a("tengu_oauth_platform_docs_opened", { platform: S("foundry") }), Js("https://code.claude.com/docs/en/microsoft-foundry"), L({ state: "idle" });
                break st;
              }
              case "vertex": {
                a("tengu_oauth_vertex_wizard_launched", {}), L({ state: "vertex_wizard" });
                break st;
              }
              default: {
                L({ state: "idle" });
              }
            }
          }, H = () => L({ state: "idle" }), i[92] = L, i[93] = E, i[94] = H;
          else E = i[93], H = i[94];
          _ = r(s, { flexDirection: "column", gap: 1, children: [u, e(Je, { options: C, onChange: E, onCancel: H }), be.some(Ko) && r(n, { dimColor: true, children: ["Foundry: ", e(Yt, { url: "https://code.claude.com/docs/en/microsoft-foundry", children: "https://code.claude.com/docs/en/microsoft-foundry" })] })] });
          break Jt;
        }
        case "aws_refresh_running": {
          let u;
          if (i[95] !== L) u = e(Tt, { onComplete: (qe) => L({ state: "aws_refresh_done", ok: qe }) }), i[95] = L, i[96] = u;
          else u = i[96];
          _ = u;
          break Jt;
        }
        case "aws_refresh_done": {
          let u;
          if (i[97] !== o.ok) u = o.ok ? e(n, { color: "success", children: "AWS credentials refreshed." }) : e(n, { color: "error", children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal." }), i[97] = o.ok, i[98] = u;
          else u = i[98];
          let C;
          if (i[99] === b) C = r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue."] }), i[99] = C;
          else C = i[99];
          let E;
          if (i[100] !== u) E = r(s, { flexDirection: "column", gap: 1, children: [u, C] }), i[100] = u, i[101] = E;
          else E = i[101];
          _ = E;
          break Jt;
        }
        case "bedrock_wizard": {
          let u;
          if (i[102] !== L) u = e(Yxt, { onComplete: (ut) => L({ state: "bedrock_done", message: ut }), onCancel: () => L({ state: "platform_setup" }), exitOnCtrlCD: true }), i[102] = L, i[103] = u;
          else u = i[103];
          _ = u;
          break Jt;
        }
        case "bedrock_done":
        case "vertex_done": {
          let u;
          if (i[104] !== o.message) u = e(n, { color: "success", children: o.message }), i[104] = o.message, i[105] = u;
          else u = i[105];
          let C;
          if (i[106] === b) C = r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to restart Claude Code."] }), i[106] = C;
          else C = i[106];
          let E;
          if (i[107] !== u) E = r(s, { flexDirection: "column", gap: 1, children: [u, C] }), i[107] = u, i[108] = E;
          else E = i[108];
          _ = E;
          break Jt;
        }
        case "vertex_wizard": {
          let u;
          if (i[109] !== L) u = e(Xxt, { onComplete: (ct) => L({ state: "vertex_done", message: ct }), onCancel: () => L({ state: "platform_setup" }), exitOnCtrlCD: true }), i[109] = L, i[110] = u;
          else u = i[110];
          _ = u;
          break Jt;
        }
        case "waiting_for_login": {
          let u;
          if (i[111] !== B) u = B && e(s, { children: e(n, { dimColor: true, children: B }) }), i[111] = B, i[112] = u;
          else u = i[112];
          let C;
          if (i[113] !== N) C = N && e(s, { children: e(n, { dimColor: true, children: `${tt} (${N.cause}), so this sign-in will create an API key.` }) }), i[113] = N, i[114] = C;
          else C = i[114];
          let E;
          if (i[115] !== se) E = !se && r(s, { children: [e(ji, {}), e(n, { children: "Opening browser to sign in…" })] }), i[115] = se, i[116] = E;
          else E = i[116];
          let H;
          if (i[117] !== ve || i[118] !== Se || i[119] !== Y || i[120] !== o.url || i[121] !== U || i[122] !== Z || i[123] !== pe || i[124] !== ke || i[125] !== se || i[126] !== ye) H = se && r(s, { children: [e(n, { children: U }), e(Cr, { value: Z, onChange: ke, onSubmit: (dt) => Se(dt, o.url), cursorOffset: ve, onChangeCursorOffset: pe, columns: ye, mask: "*", focus: true, showCursor: Y })] }), i[117] = ve, i[118] = Se, i[119] = Y, i[120] = o.url, i[121] = U, i[122] = Z, i[123] = pe, i[124] = ke, i[125] = se, i[126] = ye, i[127] = H;
          else H = i[127];
          let ne;
          if (i[128] !== u || i[129] !== C || i[130] !== E || i[131] !== H) ne = r(s, { flexDirection: "column", gap: 1, children: [u, C, E, H] }), i[128] = u, i[129] = C, i[130] = E, i[131] = H, i[132] = ne;
          else ne = i[132];
          _ = ne;
          break Jt;
        }
        case "creating_api_key": {
          let u;
          if (i[133] === b) u = e(s, { flexDirection: "column", gap: 1, children: r(s, { children: [e(ji, {}), e(n, { children: "Creating API key for Claude Code…" })] }) }), i[133] = u;
          else u = i[133];
          _ = u;
          break Jt;
        }
        case "about_to_retry": {
          let u;
          if (i[134] === b) u = e(s, { flexDirection: "column", gap: 1, children: e(n, { color: "permission", children: "Retrying…" }) }), i[134] = u;
          else u = i[134];
          _ = u;
          break Jt;
        }
        case "success": {
          let u;
          if (i[135] !== F || i[136] !== o.token) u = F === "setup-token" && o.token ? null : r(Q, { children: [gn()?.emailAddress ? r(n, { dimColor: true, children: ["Logged in as", " ", e(n, { children: gn()?.emailAddress })] }) : null, r(n, { color: "success", children: ["Login successful. Press ", e(n, { bold: true, children: "Enter" }), " to continue…"] })] }), i[135] = F, i[136] = o.token, i[137] = u;
          else u = i[137];
          let C;
          if (i[138] !== u) C = e(s, { flexDirection: "column", children: u }), i[138] = u, i[139] = C;
          else C = i[139];
          _ = C;
          break Jt;
        }
        case "storage_failed": {
          let u;
          if (i[140] !== o.backendName) u = Zt(o.backendName), i[140] = o.backendName, i[141] = u;
          else u = i[141];
          let Ae = u;
          let C;
          if (i[142] !== Ae || i[143] !== o.sessionAuth || i[144] !== o.transient) C = e(s, { flexDirection: "column", children: o.sessionAuth === "fresh" ? r(Q, { children: [e(n, { color: "warning", children: o.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${Ae}.` : `Logged in for now, but your new credentials could not be saved to ${Ae}.` }), e(n, { color: "warning", children: o.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code." })] }) : o.sessionAuth === "previous" ? r(Q, { children: [r(n, { color: "error", children: ["Sign-in completed in the browser, but your new credentials could not be saved to ", Ae, " — a previous login's credentials are still in place and will be used instead."] }), e(n, { dimColor: true, children: "(Your new sign-in did not replace the existing credentials.)" })] }) : r(Q, { children: [r(n, { color: "error", children: ["Sign-in completed in the browser, but your credentials could not be saved to ", Ae, " — you are not logged in."] }), e(n, { dimColor: true, children: "(No previous login on this machine is usable right now either.)" })] }) }), i[142] = Ae, i[143] = o.sessionAuth, i[144] = o.transient, i[145] = C;
          else C = i[145];
          let E;
          if (i[146] === b) E = e(n, { dimColor: true, children: "To avoid having to log in again each session:" }), i[146] = E;
          else E = i[146];
          let H;
          if (i[147] !== Ae) H = r(n, { dimColor: true, children: ["  ", "• fix access to ", Ae, ", then run /login again"] }), i[147] = Ae, i[148] = H;
          else H = i[148];
          let ne;
          if (i[149] === b) ne = r(n, { dimColor: true, children: ["  ", "• or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN"] }), i[149] = ne;
          else ne = i[149];
          let ie;
          if (i[150] !== H) ie = r(s, { flexDirection: "column", children: [E, H, ne] }), i[150] = H, i[151] = ie;
          else ie = i[151];
          let me;
          if (i[152] !== G || i[153] !== o.sessionAuth) me = o.sessionAuth === "fresh" ? r(n, { color: "permission", children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue…"] }) : r(n, { color: "permission", children: ["Press ", e(n, { bold: true, children: "Enter" }), " to retry.", " ", G ? e(n, { dimColor: true, children: e(q, { chord: "escape", action: "continue without logging in", parens: true }) }) : null] }), i[152] = G, i[153] = o.sessionAuth, i[154] = me;
          else me = i[154];
          let _e;
          if (i[155] !== me || i[156] !== C || i[157] !== ie) _e = r(s, { flexDirection: "column", gap: 1, children: [C, ie, me] }), i[155] = me, i[156] = C, i[157] = ie, i[158] = _e;
          else _e = i[158];
          _ = _e;
          break Jt;
        }
        case "account_on_hold": {
          let u;
          if (i[159] !== o.message) u = e(n, { color: "warning", children: o.message }), i[159] = o.message, i[160] = u;
          else u = i[160];
          let C;
          if (i[161] !== F) C = F !== "setup-token" && r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to go back to login options."] }), i[161] = F, i[162] = C;
          else C = i[162];
          let E;
          if (i[163] !== u || i[164] !== C) E = r(s, { flexDirection: "column", gap: 1, children: [u, C] }), i[163] = u, i[164] = C, i[165] = E;
          else E = i[165];
          _ = E;
          break Jt;
        }
        case "error": {
          let Fe, u, C, E;
          if (i[166] !== o.message || i[167] !== o.verbatim) {
            let Ze = o.verbatim ? /\s(https:\/\/\S+)$/.exec(o.message) : null;
            let je = Ze?.[1];
            let Ue = je && Nse(je);
            let gt = je && Ue ? je.slice(Ue.length) : "";
            let Qe = Ue ? _Ve(Ue) : void 0;
            Fe = s;
            u = "column";
            C = 1;
            E = Ze && Ue ? r(s, { flexDirection: "column", children: [e(n, { color: "error", children: o.message.slice(0, Ze.index) }), r(n, { color: "error", children: [Qe ? e(Yt, { url: Qe, assumeSupport: true, children: e(n, { color: "error", children: Qe }) }) : Ue, gt] })] }) : e(n, { color: "error", children: o.verbatim ? o.message : `OAuth error: ${o.message}` });
            i[166] = o.message, i[167] = o.verbatim, i[168] = Fe, i[169] = u, i[170] = C, i[171] = E;
          } else Fe = i[168], u = i[169], C = i[170], E = i[171];
          let H;
          if (i[172] !== N) H = N && e(n, { dimColor: true, children: `${tt}: ${N.message}` }), i[172] = N, i[173] = H;
          else H = i[173];
          let ne;
          if (i[174] !== G || i[175] !== o.toRetry) ne = (o.toRetry || G) && e(s, { marginTop: 1, children: r(n, { color: "permission", children: [o.toRetry && r(Q, { children: ["Press ", e(n, { bold: true, children: "Enter" }), " to retry.", " "] }), G ? e(n, { dimColor: true, children: e(q, { chord: "escape", action: "continue without logging in", parens: true }) }) : null] }) }), i[174] = G, i[175] = o.toRetry, i[176] = ne;
          else ne = i[176];
          let ie;
          if (i[177] !== Fe || i[178] !== u || i[179] !== C || i[180] !== E || i[181] !== H || i[182] !== ne) ie = r(Fe, { flexDirection: u, gap: C, children: [E, H, ne] }), i[177] = Fe, i[178] = u, i[179] = C, i[180] = E, i[181] = H, i[182] = ne, i[183] = ie;
          else ie = i[183];
          _ = ie;
          break Jt;
        }
        default: {
          _ = null;
          break Jt;
        }
      }
    }
    i[1] = G, i[2] = W, i[3] = xe, i[4] = ve, i[5] = D, i[6] = k, i[7] = B, i[8] = M, i[9] = T, i[10] = ue, i[11] = V, i[12] = Se, i[13] = Y, i[14] = N, i[15] = F, i[16] = o.backendName, i[17] = o.message, i[18] = o.ok, i[19] = o.sessionAuth, i[20] = o.state, i[21] = o.toRetry, i[22] = o.token, i[23] = o.transient, i[24] = o.url, i[25] = o.verbatim, i[26] = x, i[27] = U, i[28] = Z, i[29] = ce, i[30] = pe, i[31] = he, i[32] = L, i[33] = ke, i[34] = se, i[35] = z, i[36] = ye, i[37] = _;
  } else _ = i[37];
  if (_ !== En) return _;
}
function Zt(O) {
  switch (O) {
    case "keychain":
      return "the macOS Keychain";
    case "keychain-with-plaintext-fallback":
      return "the macOS Keychain or the credentials file";
    case "windows-credman":
      return "Windows Credential Manager";
    case "windows-credman-with-plaintext-fallback":
      return "Windows Credential Manager or the credentials file";
    case "plaintext":
      return "the credentials file";
    default:
      return "secure storage";
  }
}
export {
  MPe
};
