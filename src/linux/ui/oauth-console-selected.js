// linux/ui/oauth-console-selected.js — Claude Code 2.1.310（linux）模块 chunk-214fx1an.js
import { __asset_src } from "../../runtime/assets.js";
import { b, c } from "../agents/third-party.js";
import { R, d, E } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Kse, fk } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I, re, qg, dc } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { m0e, Wei, Nvt, $vt, p2t, DCe, m2t, M_e, Gei, Fvt, g0e, Eoe, aVe, dVe, g2t, gb, e_n, T4o, uqr, fqr, Vni, hnt, ZCe, ynt, yqr, wue, pEt, gn, tM, OVe, X7, z4o, Roi, Cs, Re } from "../settings/global-config-and-gates.js";
import { _l } from "../mcp/allowed-warning.js";
import { Oi } from "../git/utf-8.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { ln, pt, LNe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { Kn, _Z } from "../auth/permission-error.js";
import { Ise, kar, T4e, FZ, Tar } from "../auth/profile-explicit.js";
import { dp } from "../settings/ax-sr-suggestion-nav.js";
import { Pce } from "../context/account-memory-text-not-identified.js";
import { _G, PD } from "../telemetry/focus-events.js";
import { tGe } from "../terminal/wl-copy.js";
import { nMt, iks, aks, lks, Tvr, dks, uks } from "../auth/user-oauth.js";
import { w } from "./chunk-0ed4c357.js";
import { sl } from "../shared/chunk-9bbd1b38.js";
import { dL } from "../terminal/aria-preserve-whitespace.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { fn, rt, s, n, Yt, BR, Kr } from "../telemetry/render-glyph-cardinality.js";
import { Epe, LX, NX } from "./tmux-buffer.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { lt, um } from "../shared/chunk-76877d92.js";
import { qo } from "../shared/chunk-e4a3aa33.js";
import { ylt } from "./chunk-03aae52e.js";
import { Tr } from "../commands/aria-preserve-whitespace.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Pxt } from "./bedrock-setup-complete.js";
import { Je } from "./aria-hidden.aa9d.js";
import { dr } from "./chunk-783db08b.js";
import { ji } from "./spinner-stall-cleared.js";
import { Ixt } from "./vertex-setup-complete.js";
import { e6e, Kto, Vto, t8t, n8t } from "../auth/oauth-storage-warning.js";
import { wF } from "../terminal/notification-method-used.js";
import { Vq } from "./chunk-e2c1cf01.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { uTs } from "../permissions/chunk-88685f75.js";
import { de, P, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { u7n, f7n, E$ } from "../auth/oauth-automatic-redirect.js";
import { yV, Js } from "../ide/opener-missing.js";
import { ge, bn, Tt } from "../vendor/zod/invalid-return-type.js";
import { Ds } from "../remote/claude-code-remote.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
class Ge extends Error {
  fallbackCures;
  causeSummary;
  constructor(k, o) {
    super(k, { cause: o.cause });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}
async function Pt(k, o, F = {}) {
  try {
    let z = await eo(k, o, F);
    return g("oauth_console_profile_login"), z;
  } catch (z) {
    if (z instanceof Ge && z.fallbackCures) f("oauth_console_profile_login", "refused_fell_back");
    else m("oauth_console_profile_login", z instanceof Ge ? "refused" : "error");
    throw z;
  }
}
async function eo(k, o, { loginHint: F, loginMethod: z, orgUUID: B, onCallbackListenerUnavailable: K }) {
  try {
    await Tvr();
  } catch (N) {
    let se = aks(N);
    if (se === null) throw N;
    let U = lks(N);
    throw new Ge(d(N), se && U !== null ? { fallbackCures: true, causeSummary: U, cause: N } : { fallbackCures: false, cause: N });
  }
  let A = await k.startOAuthFlow(o, { loginWithClaudeAi: false, oauthClient: { clientId: nMt, scopes: iks }, loginHint: F, loginMethod: z, orgUUID: B, onCallbackListenerUnavailable: K }), O = no(A);
  if (O instanceof Error) throw await Et(A), O;
  await oo(await to());
  let M = await Kto(A, {}), ue;
  try {
    let N = A.tokenAccount;
    ue = await dks({ accessToken: A.accessToken, refreshToken: O.refreshToken, expiresAtMs: O.expiresAtMs, scopes: A.scopes, organizationUuid: N?.organizationUuid ?? A.profile?.organization.uuid, organizationName: N?.organizationName ?? A.profile?.organization.name, accountEmail: N?.emailAddress ?? A.profile?.account.email, workspaceId: N?.workspaceId, workspaceName: N?.workspaceName });
  } catch (N) {
    if (!await uks(O.refreshToken)) await Et(A);
    throw N;
  }
  return await e_n(A.accessToken).catch((N) => t(String(N), { level: "error" })), await Vto({ ...M }), ue;
}
async function to() {
  if (Ae() !== "firstParty") return null;
  let k = Kn();
  k.invalidateCache?.();
  let o = (await k.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? { refreshToken: o.refreshToken, clientId: o.clientId } : null;
}
async function oo(k) {
  if (k === null) return;
  await gb(k.refreshToken, k.clientId);
  try {
    await Kn().mutate((o) => ({ ...o, claudeAiOauth: void 0 }));
  } catch (o) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${d(o)}`, { level: "error" });
  }
}
function no(k) {
  if (!k.scopes.includes(fk)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!k.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (k.expiresAt === null || !Number.isFinite(k.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return { refreshToken: k.refreshToken, expiresAtMs: k.expiresAt };
}
async function Et(k) {
  if (k.refreshToken) await gb(k.refreshToken, nMt);
}
j();
var ro = "urn:ietf:params:oauth:grant-type:device_code", io = "claude_code", ao = /* @__PURE__ */ new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]), ht = 254, so = "Sign-in timed out while waiting for you to continue. Try again.", Ut = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function wt(k) {
  let o = d(k);
  if (o.includes($vt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (o.includes(p2t)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (m2t(k) !== void 0) return Ut;
  return o;
}
function lo(k) {
  let o = k?.response?.data;
  if (typeof o !== "object" || o === null) return;
  let F = o.error_description;
  if (typeof F !== "string") return;
  return re(qg(F), 300).trim() || void 0;
}
function uo(k) {
  let o = E(k) ?? E(k?.cause), F = d(k);
  if (!(o !== void 0 && ao.has(o) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(F))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust store by default on the native binary and Node ≥22.15, so if the CA is already installed there, upgrade to a current runtime. Otherwise set NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting — e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` — or add it under `env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
var co = p(() => Tt({ device_authorization_endpoint: ge().optional(), token_endpoint: ge().optional(), revocation_endpoint: ge().nullish().catch(void 0) }));
function Rt(k, o, F) {
  let z = uqr(k, o);
  if (z) return z;
  if (o) t(`[gateway-login] ignoring advertised endpoint ${o} (not same-origin with ${k}); using ${F}`);
  return `${k}${F}`;
}
var go = p(() => Tt({ device_code: ge(), user_code: ge(), verification_uri: ge(), verification_uri_complete: ge().optional(), expires_in: bn(), interval: bn().optional() }));
function yt({ onDone: k, onCancel: o, initialUrl: F, namedBy: z, internalNetworks: B, screenLocked: K }) {
  let { credentials: A } = Me(), [O, M] = y({ state: "url_input" }), ue = void 0, N = F ?? void 0, se = z === "developer" ? `Gateway URL from your settings file (${ln("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):", U = C(0), Z = C(false), ke = C(false);
  P(() => () => {
    U.current += 1;
  }, []);
  let Ce = K ? () => M({ state: "url_input" }) : o;
  function pe() {
    U.current += 1, Ce();
  }
  async function ye(W) {
    let D = ++U.current;
    M({ state: "connecting" });
    try {
      let T = m0e(W), G = await Wei(T, B, z);
      if (D !== U.current) return;
      ke.current = G.basis === "vouched";
      let Y = G.basis === "network" ? G.network : void 0, i = G.basis === "allowlisted" ? G.entry : void 0, we = G.basis === "allowlisted" ? G.judged : Y ? await Nvt(T, 1e4, Y) : void 0;
      if (D !== U.current) return;
      let h = await _l.get(`${T}/.well-known/oauth-authorization-server`, { headers: { "User-Agent": Ds() }, timeout: 1e4, ...G.basis === "allowlisted" && { httpsAgent: M_e(G.judged.fingerprint, T, true), maxRedirects: 0 } });
      if (D !== U.current) return;
      let _ = co().safeParse(h.data), te = _.success ? _.data : void 0, oe = uqr(T, te?.revocation_endpoint);
      if (te?.revocation_endpoint && !oe) t(`[gateway-login] ignoring advertised revocation endpoint ${te.revocation_endpoint} (not same-origin with ${T}); sign-out will not revoke`);
      let fe = { deviceAuthorizationEndpoint: Rt(T, te?.device_authorization_endpoint, "/oauth/device_authorization"), tokenEndpoint: Rt(T, te?.token_endpoint, "/oauth/token"), ...oe && { revocationEndpoint: oe } }, { hostname: ve, fingerprint: u, localAddress: v, remoteAddress: x } = we ?? await Nvt(T);
      if (D !== U.current) return;
      let H = await DCe(ve, A);
      if (D !== U.current) return;
      if (H === u) await Se(T, fe, u, i);
      else M({ state: "trust_prompt", url: T, hostname: ve, fingerprint: u, previouslyPinned: H, endpoints: fe, allowlistEntry: i, ...Y && { route: `from ${v} to ${x}, both inside declared ${Y}` } });
    } catch (T) {
      if (D !== U.current) return;
      let G = uo(T);
      M(G ? { state: "error", message: G, detail: d(T) } : { state: "error", message: wt(T) });
    }
  }
  async function Se(W, D, T, G) {
    let Y = ++U.current;
    M({ state: "connecting" });
    try {
      let i = M_e(T, D.deviceAuthorizationEndpoint), { data: we } = await _l.post(D.deviceAuthorizationEndpoint, new URLSearchParams({ surface: io }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": Ds() }, timeout: 1e4, maxRedirects: 0, ...i && { httpsAgent: i } });
      if (Y !== U.current) return;
      let h = go().safeParse(we);
      if (!h.success) throw Error("gateway device authorization endpoint returned malformed response");
      let _ = h.data;
      Js(_.verification_uri_complete ?? _.verification_uri), M({ state: "polling", url: W, userCode: _.user_code, verificationUri: _.verification_uri }), await L(W, D, _.device_code, _.interval ?? 5, Y, T, G);
    } catch (i) {
      if (Y !== U.current) return;
      if (fqr(i) === "slow_down") {
        M({ state: "error", message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.", detail: lo(i) });
        return;
      }
      M({ state: "error", message: wt(i) });
    }
  }
  async function L(W, D, T, G, Y, i, we) {
    let { tokenEndpoint: h } = D, _ = Math.max(1, G);
    while (Y === U.current) {
      if (await X(_ * 1e3), Y !== U.current) return;
      try {
        let te = M_e(i, h), { data: oe } = await _l.post(h, new URLSearchParams({ grant_type: ro, device_code: T }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": Ds() }, timeout: 1e4, maxRedirects: 0, ...te && { httpsAgent: te } });
        if (Y !== U.current) return;
        let fe = T4o().safeParse(oe);
        if (!fe.success) throw Error("gateway token endpoint returned malformed response");
        await he(W, D, fe.data, Y, we);
        return;
      } catch (te) {
        if (Y !== U.current) return;
        let oe = fqr(te);
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
  async function he(W, D, T, G, Y) {
    let i = T.email ?? "", we = re(i, 16 * ht), h = dc(we), _ = we.length < i.length || h.length > ht ? `${re(h, ht)}…` : h, te = { url: W, jwt: T.access_token, expiresAt: Date.now() + T.expires_in * 1e3, tokenEndpoint: D.tokenEndpoint, ...D.revocationEndpoint && { revocationEndpoint: D.revocationEndpoint }, ...T.refresh_token && { idpRefreshToken: T.refresh_token }, ..._ && { email: _ }, vouchedAtLogin: ke.current }, { hostname: oe, fingerprint: fe } = await Nvt(W);
    if (G !== U.current) return;
    let ve = await DCe(oe, A);
    if (G !== U.current) return;
    if (ve !== fe) {
      M({ state: "error", message: Ut });
      return;
    }
    if (_) {
      Z.current = false, M({ state: "confirm_account", auth: te, allowlistEntry: Y, email: _, saving: false });
      return;
    }
    await ce(te, Y, G);
  }
  async function ce(W, D, T) {
    try {
      await Vni(W, A, D);
    } catch (G) {
      if (T !== U.current) return;
      let Y = d(G);
      t(`[gateway-login] secureStorage write failed: ${Y}`, { level: "error" }), M({ state: "error", message: Y });
      return;
    }
    if (T !== U.current) return;
    Pce({ action: "login", success: true, authMethod: "oauth" }), k();
  }
  let xe = O.state === "url_input";
  switch (lt("confirm:yes", () => {
    if (N) ye(N);
  }, { context: "Confirmation", isActive: xe }), lt("confirm:no", K ? () => false : o, { context: "Confirmation", isActive: xe }), um((W, D) => D.escape, { isActive: O.state === "confirm_account" && O.saving }), O.state) {
    case "url_input":
      if (!N) return r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: "Cloud gateway" }), e(n, { color: "warning", children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator." })] });
      return r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: "Cloud gateway" }), e(n, { children: se }), e(s, { borderDimColor: true, borderStyle: "round", paddingLeft: 1, children: e(n, { children: N }) }), r(n, { dimColor: true, children: ["Press Enter to connect", K ? "" : " · Esc for other login methods"] })] });
    case "polling":
      return e(Dt, { userCode: O.userCode, verificationUri: O.verificationUri, onCancel: pe });
    case "connecting":
      return e(It, { label: "Connecting to gateway…", onCancel: pe });
    case "trust_prompt":
      return r(s, { flexDirection: "column", gap: 1, children: [r(n, { bold: true, children: ["Trust gateway ", e(n, { color: "suggestion", children: O.hostname }), "?"] }), O.previouslyPinned ? e(n, { color: "warning", children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation." }) : e(n, { children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway." }), O.route && r(n, { dimColor: true, children: ["Connecting ", O.route] }), r(n, { dimColor: true, children: ["Certificate fingerprint (SHA-256): ", O.fingerprint.slice(0, 16), "…"] }), e(dr, { hideIndexes: true, confirmLabel: "Yes, trust this gateway", cancelLabel: K ? "No, go back" : "No, cancel login", focus: "cancel", onConfirm: () => {
        let W = U.current;
        Gei(O.hostname, O.fingerprint, A).then(() => {
          if (W !== U.current) return;
          return Se(O.url, O.endpoints, O.fingerprint, O.allowlistEntry);
        }).catch((D) => {
          if (W !== U.current) return;
          M({ state: "error", message: d(D) });
        });
      }, onCancel: pe })] });
    case "confirm_account":
      return r(s, { flexDirection: "column", gap: 1, children: [r(n, { bold: true, children: ["Signed in to Cloud gateway as", " ", e(n, { color: "suggestion", children: O.email })] }), O.saving ? r(s, { gap: 1, children: [e(ji, {}), e(n, { dimColor: true, children: "Finishing sign-in…" })] }) : r(Q, { children: [e(n, { children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again." }), e(dr, { hideIndexes: true, focus: "cancel", confirmLabel: "Yes, continue", cancelLabel: K ? "No, go back" : "No, cancel login", onConfirm: () => {
        if (Z.current) return;
        if (Z.current = true, O.auth.expiresAt <= Date.now() && !O.auth.idpRefreshToken) {
          M({ state: "error", message: so });
          return;
        }
        let W = U.current;
        M((D) => D.state === "confirm_account" ? { ...D, saving: true } : D), ce(O.auth, O.allowlistEntry, W);
      }, onCancel: () => {
        if (Z.current) return;
        Z.current = true, t("[gateway-login] signed-in account declined; nothing saved"), Ce();
      } })] })] });
    case "error":
      return e(Nt, { message: O.message, detail: O.detail, onCancel: Ce });
  }
}
function Dt(k) {
  let B = w(13), { userCode: o, verificationUri: F, onCancel: z } = k, K;
  if (B[0] === S) K = { context: "Confirmation" }, B[0] = K;
  else K = B[0];
  lt("confirm:no", z, K);
  let A, O;
  if (B[1] === S) A = e(n, { bold: true, children: "Cloud gateway · sign in" }), O = e(n, { children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:" }), B[1] = A, B[2] = O;
  else A = B[1], O = B[2];
  let M;
  if (B[3] !== o) M = e(s, { borderDimColor: true, borderStyle: "round", paddingX: 2, children: e(n, { bold: true, color: "suggestion", children: o }) }), B[3] = o, B[4] = M;
  else M = B[4];
  let ue;
  if (B[5] === S) ue = e(n, { dimColor: true, children: "Browser didn't open? Visit:" }), B[5] = ue;
  else ue = B[5];
  let N;
  if (B[6] !== F) N = r(s, { flexDirection: "column", children: [ue, e(n, { dimColor: true, wrap: "wrap", children: F })] }), B[6] = F, B[7] = N;
  else N = B[7];
  let se, U;
  if (B[8] === S) se = r(s, { gap: 1, children: [e(ji, {}), e(n, { dimColor: true, children: "Waiting for sign-in to complete in your browser…" })] }), U = e(n, { dimColor: true, children: "Press Esc to cancel" }), B[8] = se, B[9] = U;
  else se = B[8], U = B[9];
  let Z;
  if (B[10] !== M || B[11] !== N) Z = r(s, { flexDirection: "column", gap: 1, children: [A, O, M, N, se, U] }), B[10] = M, B[11] = N, B[12] = Z;
  else Z = B[12];
  return Z;
}
function It(k) {
  let z = w(7), { label: o, onCancel: F } = k, B;
  if (z[0] === S) B = { context: "Confirmation" }, z[0] = B;
  else B = z[0];
  lt("confirm:no", F, B);
  let K;
  if (z[1] === S) K = e(ji, {}), z[1] = K;
  else K = z[1];
  let A;
  if (z[2] !== o) A = r(s, { gap: 1, children: [K, e(n, { children: o })] }), z[2] = o, z[3] = A;
  else A = z[3];
  let O;
  if (z[4] === S) O = e(n, { dimColor: true, children: "Press Esc to cancel" }), z[4] = O;
  else O = z[4];
  let M;
  if (z[5] !== A) M = r(s, { flexDirection: "column", gap: 1, children: [A, O] }), z[5] = A, z[6] = M;
  else M = z[6];
  return M;
}
function Nt(k) {
  let B = w(9), { message: o, detail: F, onCancel: z } = k, K;
  if (B[0] === S) K = { context: "Confirmation" }, B[0] = K;
  else K = B[0];
  lt("confirm:no", z, K);
  let A;
  if (B[1] !== o) A = r(n, { color: "error", children: ["Error: ", o] }), B[1] = o, B[2] = A;
  else A = B[2];
  let O;
  if (B[3] !== F) O = F && e(n, { dimColor: true, children: F }), B[3] = F, B[4] = O;
  else O = B[4];
  let M;
  if (B[5] === S) M = e(n, { dimColor: true, children: "Press Esc to go back" }), B[5] = M;
  else M = B[5];
  let ue;
  if (B[6] !== A || B[7] !== O) ue = r(s, { flexDirection: "column", gap: 1, children: [A, O, M] }), B[6] = A, B[7] = O, B[8] = ue;
  else ue = B[8];
  return ue;
}
function jo(xt) {
  return xt.title;
}
function Vo(Ve) {
  return { label: r(n, { children: [Ve.title, " · ", e(n, { dimColor: true, children: Ve.hint })] }), value: Ve.value };
}
function Xo(et) {
  return et.value === "foundry";
}
var Co = "Paste code here if prompted > ", tt = "The recommended sign-in isn't available on this machine";
function vo(k) {
  let o = Math.round(k / 86400);
  if (o < 1) return "less than a day";
  if (o === 365) return "1 year";
  return `${o} ${I(o, "day")}`;
}
function APe({ onDone: k, onAuthSuccess: o, onHybridSignIn: F, onFreshPickerChange: z, onAccountOnHold: B, startingMessage: K, mode: A = "login", expiresIn: O, forceLoginMethod: M, urlOutdent: ue = 0, allowContinueWithoutLogin: N = false }) {
  let se = sl(), { storageV5: U, credentials: Z } = Me(), ke = qo((ae) => ae.proactivityLevel), Ce = qo((ae) => ae.toolPermissionContext), pe = (se ? Vq : 0) + ue, ye = pt(), { forceLoginGatewayUrl: Se, gatewayInternalNetworks: L } = LNe(), [he] = y(hnt), ce = Se ?? he, xe = Se !== void 0 ? "administrator" : "developer", W = X7(), D = W === "gateway", T = D ? "gateway" : M ?? W, G = T === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : T === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null, Y = null, i = dL(), we = fn(), [h, _] = y(() => {
    if (A === "setup-token") return { state: "ready_to_start" };
    if (T === "claudeai" || T === "console") return { state: "ready_to_start" };
    if (D || he) return { state: "gateway_setup" };
    return { state: "idle" };
  }), te = C(false);
  P(() => {
    if (h.state !== "idle" && h.state !== "platform_setup" && h.state !== "console_method") te.current = true;
    z?.(h.state === "idle" && !te.current);
  }, [h.state, z]);
  let [oe, fe] = y(""), [ve, u] = y(0), [v] = y(() => new E$()), [x, H] = y(() => A === "setup-token" || T === "claudeai"), [ne, ie] = y(false), [me, _e] = y(null), He = z4o(), Ne = Ae() === "firstParty" && !He && ye.forceLoginOrgUUID === void 0 && T !== "claudeai", We = g0e(), at = Eoe("firstParty") === void 0, Jt = ye.forceLoginMethod !== void 0 && x !== (ye.forceLoginMethod === "claudeai"), $e = typeof ye.forceLoginOrgUUID === "string" && !Jt ? ye.forceLoginOrgUUID : void 0, [Ye, st] = y(false), [qe, ut] = y(false), { copiedVia: ct, copy: dt, reset: be } = Epe(h.state === "waiting_for_login" ? h.url : null), Fe = qe ? f7n : Co, Ze = Te().columns - Fe.length - 1, [je] = y(() => PD() && _G() !== "off");
  P(() => {
    if (T === "claudeai") a("tengu_oauth_claudeai_forced", {});
    else if (T === "console") a("tengu_oauth_console_forced", {});
    else if (D && true && A !== "setup-token") a("tengu_oauth_gateway_forced", {});
  }, [T, D, A]), Kr(() => {
    if (h.state === "about_to_retry") _(h.nextState);
  }, h.state === "about_to_retry" ? 1e3 : null, [h]), lt("confirm:yes", () => {
    if (h.state !== "storage_failed" && !(h.state === "success" && h.hybrid)) a(h.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", { loginWithClaudeAi: x });
    k();
  }, { context: "Confirmation", isActive: h.state === "success" && A !== "setup-token" || h.state === "storage_failed" && h.sessionAuth === "fresh" || h.state === "gateway_done" });
  let Ue = BR(), gt = C(false);
  lt("confirm:yes", () => {
    if (gt.current) return;
    gt.current = true, Re((ae) => ({ ...ae, hasCompletedOnboarding: true, lastOnboardingVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION }), U).then(() => {
      Ue.exit();
      let ae = ke !== void 0 && Ce !== void 0 ? uTs({ proactivityLevel: ke, toolPermissionContext: Ce }) : void 0;
      import("../shell/exec-relaunch.js").then((Ee) => Ee.execRelaunch(ae ? { proactivity: ae } : {}));
    });
  }, { context: "Confirmation", isActive: h.state === "bedrock_done" || h.state === "vertex_done" }), lt("confirm:yes", () => _({ state: "platform_setup" }), { context: "Confirmation", isActive: h.state === "aws_refresh_done" }), lt("confirm:yes", () => {
    if (h.state === "error" && h.toRetry) fe(""), _({ state: "about_to_retry", nextState: h.toRetry });
    else if (h.state === "storage_failed" && h.sessionAuth !== "fresh") fe(""), _({ state: "about_to_retry", nextState: T === "claudeai" || T === "console" ? { state: "ready_to_start" } : { state: "idle" } });
  }, { context: "Confirmation", isActive: h.state === "error" && !!h.toRetry || h.state === "storage_failed" && h.sessionAuth !== "fresh" }), lt("confirm:no", () => k(), { context: "Confirmation", isActive: N && (h.state === "storage_failed" && h.sessionAuth !== "fresh" || h.state === "error") }), lt("confirm:yes", () => _({ state: "idle" }), { context: "Confirmation", isActive: h.state === "account_on_hold" && A !== "setup-token" }), P(() => {
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
      a("tengu_oauth_manual_entry", {}), v.handleManualAuthCodeInput({ authorizationCode: Pe, state: le });
    } catch (Pe) {
      l(Pe), _({ state: "error", message: d(Pe), toRetry: { state: "waiting_for_login", url: Ee } });
    }
  }
  let xt = C(new AbortController());
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
      if (be(), st(false), _({ state: "waiting_for_login", url: le }), ae || yV()) st(true);
      else we.setTimeout(() => st(true), 3e3);
    };
    _e(null);
    try {
      let le = aVe("firstParty");
      if (le !== void 0) throw new Fvt(le);
      if (a("tengu_oauth_flow_start", { loginWithClaudeAi: x }), ne && A !== "setup-token") {
        if (!Ne) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
        try {
          await Pt(v, async (q) => Pe(q), { orgUUID: $e, onCallbackListenerUnavailable: Ee }), _({ state: "success" }), o?.(), wF({ message: "Claude Code login successful", notificationType: "auth_success" }, i, { storageV5: U, credentials: Z });
          return;
        } catch (q) {
          if (!(q instanceof Ge) || !q.fallbackCures) throw q;
          let Le = Oi(d(q));
          _e({ cause: q.causeSummary !== null ? Oi(q.causeSummary) : Le, message: Le }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${Le}`, { level: "warn" });
        }
      }
      let ft, De = await v.startOAuthFlow(async (q) => Pe(q), { loginWithClaudeAi: x, inferenceOnly: A === "setup-token", expiresIn: A === "setup-token" ? O ?? Kse : void 0, orgUUID: $e, onCallbackListenerUnavailable: Ee, settingsOnlyGrant: ft }).catch((q) => {
        if (q instanceof FZ) throw q;
        let Le = q.message.includes("Token exchange failed"), Ie = _Z(q);
        throw _({ state: "error", message: Ie ?? (Le ? "Failed to exchange authorization code for access token. Please try again." : q.message), toRetry: A === "setup-token" ? { state: "ready_to_start" } : { state: "idle" } }), a("tengu_oauth_token_exchange_error", { ...dp(q), ssl_error: Ie !== null }), q;
      });
      if (A === "setup-token") _({ state: "success", token: De.accessToken, expiresAt: De.expiresAt ?? void 0 }), o?.();
      else {
        let q = await OVe(De);
        if (q.outcome === "refused") throw new R(q.rejection.message, "ConsoleOAuthFlow: org pin refused the new token");
        let Le = await e6e(De, { storageV5: U, credentials: Z }), Ie = await tM(Z, q.outcome === "permitted" ? q.verified : void 0);
        if (!Ie.valid) {
          let mt = await n8t(Ie, Le?.storage, { storageV5: U, credentials: Z });
          throw Error(mt?.restored === false ? `${Ie.message}
${t8t(mt)}` : Ie.message);
        }
        let Oe = Le?.storage;
        if (Oe && !Oe.success) {
          if (_({ state: "storage_failed", backendName: Oe.backendName, sessionAuth: Oe.sessionAuth, transient: Oe.transient }), a("tengu_oauth_persist_failure_shown", { storageBackend: Roi(Oe.backendName), session_auth: c(Oe.sessionAuth), transient: Oe.transient === true }), Oe.sessionAuth === "fresh") o?.();
          wF({ message: Oe.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved", notificationType: "auth_storage_failure" }, i, { storageV5: U, credentials: Z });
        } else _({ state: "success" }), o?.(), wF({ message: "Claude Code login successful", notificationType: "auth_success" }, i, { storageV5: U, credentials: Z });
      }
    } catch (le) {
      if (Tar(le)) {
        _({ state: "account_on_hold", message: kar(T4e(le.errorUri)) }), a("tengu_oauth_error", { account_on_hold: true });
        return;
      }
      let ft = le instanceof FZ ? le.displayMessage : d(le), De = _Z(le);
      _({ state: "error", message: De ?? ft, ...g2t(le) && { verbatim: true }, toRetry: { state: A === "setup-token" || T === "claudeai" || T === "console" && !Ne ? "ready_to_start" : T === "console" ? "console_method" : "idle" } }), a("tengu_oauth_error", { ...dp(le), ssl_error: De !== null });
    }
  }, [v, x, ne, Ne, A, O, $e, i, we, o, F, T, U, Z, be]), et = C(false);
  return P(() => {
    if (h.state === "ready_to_start" && !et.current) et.current = true, process.nextTick((ae, Ee) => {
      ae().finally(() => {
        Ee.current = false;
      });
    }, Ve, et);
  }, [h.state, Ve]), Kr(() => {
    a("tengu_oauth_success", { loginWithClaudeAi: x }), k();
  }, A === "setup-token" && h.state === "success" ? 500 : null, [A, h, x, k]), Kr(() => B?.(), A === "setup-token" && h.state === "account_on_hold" ? 500 : null, [A, h, B]), P(() => () => {
    v.cleanup();
  }, [v]), r(s, { flexDirection: "column", gap: 1, children: [h.state === "waiting_for_login" && Ye && r(s, { flexDirection: "column", gap: 1, paddingBottom: 1, marginX: pe ? -pe : void 0, children: [r(s, { flexDirection: "column", paddingX: pe, children: [qe && e(n, { children: u7n }), r(s, { children: [e(n, { dimColor: true, children: qe ? "Use the URL below to sign in " : "Browser didn't open? Use the url below to sign in " }), e(LX, { via: ct })] }), e(NX, { via: ct })] }), e(s, { children: e(Yt, { url: h.url, assumeSupport: true, children: e(n, { dimColor: true, children: h.url }) }) }), je && e(s, { paddingX: pe, children: r(n, { dimColor: true, children: ["Hold ", tGe(), " while selecting to use your terminal's native copy"] }) })] }, "urlToCopy"), A === "setup-token" && h.state === "success" && h.token && r(s, { flexDirection: "column", gap: 1, paddingTop: 1, children: [e(n, { color: "success", children: "✓ Long-lived authentication token created successfully!" }), r(s, { flexDirection: "column", gap: 1, children: [r(n, { children: ["Your OAuth token (valid for", " ", vo(h.expiresAt !== void 0 && Number.isFinite(h.expiresAt) ? Math.round((h.expiresAt - Date.now()) / 1e3) : O ?? Kse), "):"] }), e(n, { color: "warning", children: h.token }), e(n, { dimColor: true, children: "Store this token securely. You won't be able to see it again." }), e(n, { dimColor: true, children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>" })] })] }, "tokenOutput"), e(s, { flexDirection: "column", gap: 1, children: e(Qt, { oauthStatus: h, mode: A, startingMessage: K, forcedMethodMessage: G, gatewayUnsupportedWarning: null, forceLoginGatewayUrl: ce, gatewayNamedBy: xe, gatewayInternalNetworks: L, gatewayScreenLocked: D, keyMintFallbackReason: me, showPastePrompt: Ye, pasteCodePrompt: Fe, pastedCode: oe, setPastedCode: fe, cursorOffset: ve, setCursorOffset: u, textInputColumns: Ze, handleSubmitCode: Qe, setOAuthStatus: _, setLoginWithClaudeAi: H, setConsoleProfileLogin: ie, consoleProfileLoginAllowed: Ne, allowedProviders: We, firstPartyLoginAllowed: at, onAuthSuccess: o, allowContinueWithoutLogin: N }) })] });
}
function Ot(k) {
  let F = w(4), { onComplete: o } = k, z;
  if (F[0] !== o) z = () => {
    let B = ZCe();
    if (!B) {
      o(false);
      return;
    }
    if (ynt() && !Cs()) {
      o(false);
      return;
    }
    let K = new AbortController();
    return yqr(B, K.signal).then((A) => {
      if (K.signal.aborted) {
        return;
      }
      if (A) wue(), pEt();
      o(A);
    }), () => K.abort();
  }, F[0] = o, F[1] = z;
  else z = F[1];
  let O;
  if (F[2] === S) O = [], F[2] = O;
  else O = F[2];
  P(z, O);
  let M;
  if (F[3] === S) M = r(s, { flexDirection: "column", gap: 1, children: [r(s, { children: [e(ji, {}), e(n, { children: "Running awsAuthRefresh…" })] }), e(ylt, {})] }), F[3] = M;
  else M = F[3];
  return M;
}
var Gt = [{ value: "bedrock", providers: ["bedrock"], title: "Amazon Bedrock", hint: "interactive setup" }, { value: "aws_refresh", providers: ["anthropicAws", "bedrock", "mantle"], title: "Claude Platform on AWS", hint: "refresh credentials" }, { value: "foundry", providers: ["foundry"], title: "Microsoft Foundry", hint: "opens docs" }, { value: "vertex", providers: ["vertex"], title: "Google Vertex AI", hint: "interactive setup" }];
function Qt(k) {
  let i = w(184), { oauthStatus: o, mode: F, startingMessage: z, forcedMethodMessage: B, gatewayUnsupportedWarning: K, forceLoginGatewayUrl: A, gatewayNamedBy: O, gatewayInternalNetworks: M, gatewayScreenLocked: ue, keyMintFallbackReason: N, showPastePrompt: se, pasteCodePrompt: U, pastedCode: Z, setPastedCode: ke, cursorOffset: Ce, setCursorOffset: pe, textInputColumns: ye, handleSubmitCode: Se, setOAuthStatus: L, setLoginWithClaudeAi: he, setConsoleProfileLogin: ce, consoleProfileLoginAllowed: xe, allowedProviders: W, firstPartyLoginAllowed: D, onAuthSuccess: T, allowContinueWithoutLogin: G } = k, Y = rt(), we;
  if (i[0] === S) we = ZCe(), i[0] = we;
  else we = i[0];
  let h = we, _;
  if (i[1] !== G || i[2] !== W || i[3] !== xe || i[4] !== Ce || i[5] !== D || i[6] !== A || i[7] !== B || i[8] !== M || i[9] !== O || i[10] !== ue || i[11] !== K || i[12] !== Se || i[13] !== Y || i[14] !== N || i[15] !== F || i[16] !== o.backendName || i[17] !== o.message || i[18] !== o.ok || i[19] !== o.sessionAuth || i[20] !== o.state || i[21] !== o.toRetry || i[22] !== o.token || i[23] !== o.transient || i[24] !== o.url || i[25] !== o.verbatim || i[26] !== T || i[27] !== U || i[28] !== Z || i[29] !== ce || i[30] !== pe || i[31] !== he || i[32] !== L || i[33] !== ke || i[34] !== se || i[35] !== z || i[36] !== ye) {
    _ = vn;
    Jt: {
      let te;
      if (i[38] !== W) te = (oe) => (W === void 0 || oe.providers.some((fe) => W.includes(fe))) && (oe.value !== "aws_refresh" || !!h), i[38] = W, i[39] = te;
      else te = i[39];
      let ve = Gt.filter(te);
      switch (o.state) {
        case "idle": {
          const u = z ? z : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
          let v;
          if (i[40] !== u) v = e(n, { bold: true, children: u }), i[40] = u, i[41] = v;
          else v = i[41];
          let x;
          if (i[42] !== K) x = K && e(n, { color: "warning", children: K }), i[42] = K, i[43] = x;
          else x = i[43];
          const H = !D && ve.length === 0 && e(n, { color: "error", children: Eoe("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator." });
          let ne;
          if (i[44] === S) ne = e(n, { children: "Select login method:" }), i[44] = ne;
          else ne = i[44];
          let ie;
          if (i[45] !== D) ie = D ? [{ label: r(n, { children: ["Claude account with subscription ·", " ", e(n, { dimColor: true, children: "Pro, Max, Team, or Enterprise" }), false] }), value: "claudeai" }, { label: r(n, { children: ["Anthropic Console account ·", " ", e(n, { dimColor: true, children: "API usage billing" })] }), value: "console" }] : [], i[45] = D, i[46] = ie;
          else ie = i[46];
          const me = ve.length > 0 ? [{ label: r(n, { children: ["3rd-party platform ·", " ", e(n, { dimColor: true, children: ve.map(jo).join(", ") })] }), value: "platform" }] : [];
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
          if (i[58] !== We || i[59] !== v || i[60] !== x || i[61] !== H) at = r(s, { flexDirection: "column", gap: 1, children: [v, x, H, ne, We] }), i[58] = We, i[59] = v, i[60] = x, i[61] = H, i[62] = at;
          else at = i[62];
          _ = at;
          break Jt;
        }
        case "gateway_setup": {
          let u;
          if (i[63] !== T || i[64] !== L) u = () => {
            T?.(), L({ state: "gateway_done" });
          }, i[63] = T, i[64] = L, i[65] = u;
          else u = i[65];
          let v;
          if (i[66] !== L) v = () => L({ state: "idle" }), i[66] = L, i[67] = v;
          else v = i[67];
          let x;
          if (i[68] !== A || i[69] !== M || i[70] !== O || i[71] !== ue || i[72] !== u || i[73] !== v) x = e(yt, { initialUrl: A, namedBy: O, internalNetworks: M, screenLocked: ue, onDone: u, onCancel: v }), i[68] = A, i[69] = M, i[70] = O, i[71] = ue, i[72] = u, i[73] = v, i[74] = x;
          else x = i[74];
          _ = x;
          break Jt;
        }
        case "gateway_done": {
          let u;
          if (i[75] === S) u = e(n, { color: "success", children: "Connected to Cloud gateway." }), i[75] = u;
          else u = i[75];
          let v;
          if (i[76] === S) v = r(s, { flexDirection: "column", gap: 1, marginTop: 1, children: [u, r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue."] })] }), i[76] = v;
          else v = i[76];
          _ = v;
          break Jt;
        }
        case "console_method": {
          let u, v;
          if (i[77] === S) u = e(n, { bold: true, children: "Anthropic Console account" }), v = e(n, { children: "How do you want to sign in?" }), i[77] = u, i[78] = v;
          else u = i[77], v = i[78];
          let x;
          if (i[79] === S) x = { label: r(n, { children: ["Sign in with your Console account", " ", e(n, { dimColor: true, children: "(recommended)" })] }), value: "wif" }, i[79] = x;
          else x = i[79];
          let H;
          if (i[80] === S) H = e(n, { dimColor: true, children: "(legacy)" }), i[80] = H;
          else H = i[80];
          let ne;
          if (i[81] === S) ne = [x, { label: r(n, { children: ["Create an API key ", H, " ·", " ", e(n, { dimColor: true, children: "adds a key to your Console workspace" })] }), value: "api-key" }, { label: "Go back", value: "back" }], i[81] = ne;
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
          if (i[88] !== me || i[89] !== ie) _e = r(s, { flexDirection: "column", gap: 1, children: [u, v, e(s, { children: e(Je, { options: ne, onCancel: ie, onChange: me }) })] }), i[88] = me, i[89] = ie, i[90] = _e;
          else _e = i[90];
          _ = _e;
          break Jt;
        }
        case "platform_setup": {
          let u;
          if (i[91] === S) u = e(n, { bold: true, children: "Using 3rd-party platforms" }), i[91] = u;
          else u = i[91];
          const v = [...ve.map(Vo), { label: "Go back", value: "back" }];
          let x, H;
          if (i[92] !== L) x = (Ye) => {
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
                a("tengu_oauth_platform_docs_opened", { platform: b("foundry") }), Js("https://code.claude.com/docs/en/microsoft-foundry"), L({ state: "idle" });
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
          }, H = () => L({ state: "idle" }), i[92] = L, i[93] = x, i[94] = H;
          else x = i[93], H = i[94];
          _ = r(s, { flexDirection: "column", gap: 1, children: [u, e(Je, { options: v, onChange: x, onCancel: H }), ve.some(Xo) && r(n, { dimColor: true, children: ["Foundry: ", e(Yt, { url: "https://code.claude.com/docs/en/microsoft-foundry", children: "https://code.claude.com/docs/en/microsoft-foundry" })] })] });
          break Jt;
        }
        case "aws_refresh_running": {
          let u;
          if (i[95] !== L) u = e(Ot, { onComplete: (qe) => L({ state: "aws_refresh_done", ok: qe }) }), i[95] = L, i[96] = u;
          else u = i[96];
          _ = u;
          break Jt;
        }
        case "aws_refresh_done": {
          let u;
          if (i[97] !== o.ok) u = o.ok ? e(n, { color: "success", children: "AWS credentials refreshed." }) : e(n, { color: "error", children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal." }), i[97] = o.ok, i[98] = u;
          else u = i[98];
          let v;
          if (i[99] === S) v = r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue."] }), i[99] = v;
          else v = i[99];
          let x;
          if (i[100] !== u) x = r(s, { flexDirection: "column", gap: 1, children: [u, v] }), i[100] = u, i[101] = x;
          else x = i[101];
          _ = x;
          break Jt;
        }
        case "bedrock_wizard": {
          let u;
          if (i[102] !== L) u = e(Pxt, { onComplete: (ut) => L({ state: "bedrock_done", message: ut }), onCancel: () => L({ state: "platform_setup" }), exitOnCtrlCD: true }), i[102] = L, i[103] = u;
          else u = i[103];
          _ = u;
          break Jt;
        }
        case "bedrock_done":
        case "vertex_done": {
          let u;
          if (i[104] !== o.message) u = e(n, { color: "success", children: o.message }), i[104] = o.message, i[105] = u;
          else u = i[105];
          let v;
          if (i[106] === S) v = r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to restart Claude Code."] }), i[106] = v;
          else v = i[106];
          let x;
          if (i[107] !== u) x = r(s, { flexDirection: "column", gap: 1, children: [u, v] }), i[107] = u, i[108] = x;
          else x = i[108];
          _ = x;
          break Jt;
        }
        case "vertex_wizard": {
          let u;
          if (i[109] !== L) u = e(Ixt, { onComplete: (ct) => L({ state: "vertex_done", message: ct }), onCancel: () => L({ state: "platform_setup" }), exitOnCtrlCD: true }), i[109] = L, i[110] = u;
          else u = i[110];
          _ = u;
          break Jt;
        }
        case "waiting_for_login": {
          let u;
          if (i[111] !== B) u = B && e(s, { children: e(n, { dimColor: true, children: B }) }), i[111] = B, i[112] = u;
          else u = i[112];
          let v;
          if (i[113] !== N) v = N && e(s, { children: e(n, { dimColor: true, children: `${tt} (${N.cause}), so this sign-in will create an API key.` }) }), i[113] = N, i[114] = v;
          else v = i[114];
          let x;
          if (i[115] !== se) x = !se && r(s, { children: [e(ji, {}), e(n, { children: "Opening browser to sign in…" })] }), i[115] = se, i[116] = x;
          else x = i[116];
          let H;
          if (i[117] !== Ce || i[118] !== Se || i[119] !== Y || i[120] !== o.url || i[121] !== U || i[122] !== Z || i[123] !== pe || i[124] !== ke || i[125] !== se || i[126] !== ye) H = se && r(s, { children: [e(n, { children: U }), e(Tr, { value: Z, onChange: ke, onSubmit: (dt) => Se(dt, o.url), cursorOffset: Ce, onChangeCursorOffset: pe, columns: ye, mask: "*", focus: true, showCursor: Y })] }), i[117] = Ce, i[118] = Se, i[119] = Y, i[120] = o.url, i[121] = U, i[122] = Z, i[123] = pe, i[124] = ke, i[125] = se, i[126] = ye, i[127] = H;
          else H = i[127];
          let ne;
          if (i[128] !== u || i[129] !== v || i[130] !== x || i[131] !== H) ne = r(s, { flexDirection: "column", gap: 1, children: [u, v, x, H] }), i[128] = u, i[129] = v, i[130] = x, i[131] = H, i[132] = ne;
          else ne = i[132];
          _ = ne;
          break Jt;
        }
        case "creating_api_key": {
          let u;
          if (i[133] === S) u = e(s, { flexDirection: "column", gap: 1, children: r(s, { children: [e(ji, {}), e(n, { children: "Creating API key for Claude Code…" })] }) }), i[133] = u;
          else u = i[133];
          _ = u;
          break Jt;
        }
        case "about_to_retry": {
          let u;
          if (i[134] === S) u = e(s, { flexDirection: "column", gap: 1, children: e(n, { color: "permission", children: "Retrying…" }) }), i[134] = u;
          else u = i[134];
          _ = u;
          break Jt;
        }
        case "success": {
          let u;
          if (i[135] !== F || i[136] !== o.token) u = F === "setup-token" && o.token ? null : r(Q, { children: [gn()?.emailAddress ? r(n, { dimColor: true, children: ["Logged in as", " ", e(n, { children: gn()?.emailAddress })] }) : null, r(n, { color: "success", children: ["Login successful. Press ", e(n, { bold: true, children: "Enter" }), " to continue…"] })] }), i[135] = F, i[136] = o.token, i[137] = u;
          else u = i[137];
          let v;
          if (i[138] !== u) v = e(s, { flexDirection: "column", children: u }), i[138] = u, i[139] = v;
          else v = i[139];
          _ = v;
          break Jt;
        }
        case "storage_failed": {
          let u;
          if (i[140] !== o.backendName) u = Zt(o.backendName), i[140] = o.backendName, i[141] = u;
          else u = i[141];
          let be = u;
          let v;
          if (i[142] !== be || i[143] !== o.sessionAuth || i[144] !== o.transient) v = e(s, { flexDirection: "column", children: o.sessionAuth === "fresh" ? r(Q, { children: [e(n, { color: "warning", children: o.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${be}.` : `Logged in for now, but your new credentials could not be saved to ${be}.` }), e(n, { color: "warning", children: o.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code." })] }) : o.sessionAuth === "previous" ? r(Q, { children: [r(n, { color: "error", children: ["Sign-in completed in the browser, but your new credentials could not be saved to ", be, " — a previous login's credentials are still in place and will be used instead."] }), e(n, { dimColor: true, children: "(Your new sign-in did not replace the existing credentials.)" })] }) : r(Q, { children: [r(n, { color: "error", children: ["Sign-in completed in the browser, but your credentials could not be saved to ", be, " — you are not logged in."] }), e(n, { dimColor: true, children: "(No previous login on this machine is usable right now either.)" })] }) }), i[142] = be, i[143] = o.sessionAuth, i[144] = o.transient, i[145] = v;
          else v = i[145];
          let x;
          if (i[146] === S) x = e(n, { dimColor: true, children: "To avoid having to log in again each session:" }), i[146] = x;
          else x = i[146];
          let H;
          if (i[147] !== be) H = r(n, { dimColor: true, children: ["  ", "• fix access to ", be, ", then run /login again"] }), i[147] = be, i[148] = H;
          else H = i[148];
          let ne;
          if (i[149] === S) ne = r(n, { dimColor: true, children: ["  ", "• or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN"] }), i[149] = ne;
          else ne = i[149];
          let ie;
          if (i[150] !== H) ie = r(s, { flexDirection: "column", children: [x, H, ne] }), i[150] = H, i[151] = ie;
          else ie = i[151];
          let me;
          if (i[152] !== G || i[153] !== o.sessionAuth) me = o.sessionAuth === "fresh" ? r(n, { color: "permission", children: ["Press ", e(n, { bold: true, children: "Enter" }), " to continue…"] }) : r(n, { color: "permission", children: ["Press ", e(n, { bold: true, children: "Enter" }), " to retry.", " ", G ? e(n, { dimColor: true, children: e(V, { chord: "escape", action: "continue without logging in", parens: true }) }) : null] }), i[152] = G, i[153] = o.sessionAuth, i[154] = me;
          else me = i[154];
          let _e;
          if (i[155] !== me || i[156] !== v || i[157] !== ie) _e = r(s, { flexDirection: "column", gap: 1, children: [v, ie, me] }), i[155] = me, i[156] = v, i[157] = ie, i[158] = _e;
          else _e = i[158];
          _ = _e;
          break Jt;
        }
        case "account_on_hold": {
          let u;
          if (i[159] !== o.message) u = e(n, { color: "warning", children: o.message }), i[159] = o.message, i[160] = u;
          else u = i[160];
          let v;
          if (i[161] !== F) v = F !== "setup-token" && r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Enter" }), " to go back to login options."] }), i[161] = F, i[162] = v;
          else v = i[162];
          let x;
          if (i[163] !== u || i[164] !== v) x = r(s, { flexDirection: "column", gap: 1, children: [u, v] }), i[163] = u, i[164] = v, i[165] = x;
          else x = i[165];
          _ = x;
          break Jt;
        }
        case "error": {
          let Fe, u, v, x;
          if (i[166] !== o.message || i[167] !== o.verbatim) {
            let Ze = o.verbatim ? /\s(https:\/\/\S+)$/.exec(o.message) : null;
            let je = Ze?.[1];
            let Ue = je && Ise(je);
            let gt = je && Ue ? je.slice(Ue.length) : "";
            let Qe = Ue ? dVe(Ue) : void 0;
            Fe = s;
            u = "column";
            v = 1;
            x = Ze && Ue ? r(s, { flexDirection: "column", children: [e(n, { color: "error", children: o.message.slice(0, Ze.index) }), r(n, { color: "error", children: [Qe ? e(Yt, { url: Qe, assumeSupport: true, children: e(n, { color: "error", children: Qe }) }) : Ue, gt] })] }) : e(n, { color: "error", children: o.verbatim ? o.message : `OAuth error: ${o.message}` });
            i[166] = o.message, i[167] = o.verbatim, i[168] = Fe, i[169] = u, i[170] = v, i[171] = x;
          } else Fe = i[168], u = i[169], v = i[170], x = i[171];
          let H;
          if (i[172] !== N) H = N && e(n, { dimColor: true, children: `${tt}: ${N.message}` }), i[172] = N, i[173] = H;
          else H = i[173];
          let ne;
          if (i[174] !== G || i[175] !== o.toRetry) ne = (o.toRetry || G) && e(s, { marginTop: 1, children: r(n, { color: "permission", children: [o.toRetry && r(Q, { children: ["Press ", e(n, { bold: true, children: "Enter" }), " to retry.", " "] }), G ? e(n, { dimColor: true, children: e(V, { chord: "escape", action: "continue without logging in", parens: true }) }) : null] }) }), i[174] = G, i[175] = o.toRetry, i[176] = ne;
          else ne = i[176];
          let ie;
          if (i[177] !== Fe || i[178] !== u || i[179] !== v || i[180] !== x || i[181] !== H || i[182] !== ne) ie = r(Fe, { flexDirection: u, gap: v, children: [x, H, ne] }), i[177] = Fe, i[178] = u, i[179] = v, i[180] = x, i[181] = H, i[182] = ne, i[183] = ie;
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
    i[1] = G, i[2] = W, i[3] = xe, i[4] = Ce, i[5] = D, i[6] = A, i[7] = B, i[8] = M, i[9] = O, i[10] = ue, i[11] = K, i[12] = Se, i[13] = Y, i[14] = N, i[15] = F, i[16] = o.backendName, i[17] = o.message, i[18] = o.ok, i[19] = o.sessionAuth, i[20] = o.state, i[21] = o.toRetry, i[22] = o.token, i[23] = o.transient, i[24] = o.url, i[25] = o.verbatim, i[26] = T, i[27] = U, i[28] = Z, i[29] = ce, i[30] = pe, i[31] = he, i[32] = L, i[33] = ke, i[34] = se, i[35] = z, i[36] = ye, i[37] = _;
  } else _ = i[37];
  if (_ !== vn) return _;
}
function Zt(k) {
  switch (k) {
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
  APe
};
