// darwin/remote/owner-unverified.js — Claude Code 2.1.310（darwin）模块 chunk-jhztrg66.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { pa } from "../settings/global-config-and-gates.js";
import { tm } from "../settings/non-string-value.js";
import { Uk, _F } from "../shared/remote-control.js";
import { BZe, l1o } from "./bridge-project-files-write.js";
import { eL, CTe } from "../telemetry/bridge-resume-respects-local-owner.js";
import { DEo } from "./bridge-inbox-fetch.js";
import { Mw } from "./sessions-elevated-auth-disable-proactive-enrollment.js";
import { Fyo } from "./not-store-login.js";
var w = ["CLAUDE_BRIDGE_BASE_URL", "USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];
function v() {
  let e = tm();
  if (e !== void 0 && w.some((r) => process.env[r] !== e[r])) return;
  try {
    return _F();
  } catch {
    return;
  }
}
function g(e, r = "bridge_inbox_fetch") {
  return m(r, e), { ok: false, reason: e };
}
async function l(e) {
  let r = mo().supervisedBridgeSession;
  if (r === null) return { stop: "no_bridge" };
  if (St()) return { stop: "traffic_disabled" };
  if (!eL()) return { stop: "no_token" };
  let a = v();
  if (a === void 0) return { stop: "base_url_override" };
  let { credentials: o, storageV5: n } = e, i = await Uk(o);
  if (i === void 0) return { stop: "no_token" };
  let s = await p(r, e, i);
  if (s) return { stop: s };
  try {
    await pa({ credentials: o, storageV5: n });
  } catch (_) {
    t(`[bridge] supervised send: token refresh failed: ${d(_)}`, { level: "error" });
  }
  let u = await Uk(o);
  if (u === void 0) return { stop: "no_token" };
  let c = await Mw(), f = await p(r, e, u, { fresh: true });
  if (f) return { stop: f };
  return { send: { sessionId: r.bridgeSessionId, baseUrl: a, accessToken: u, deviceToken: c } };
}
function aAi() {
  return mo().supervisedBridgeSession !== null;
}
async function lAi(e, r, a, o) {
  let n = await l(o);
  if ("stop" in n) return g(n.stop, l1o(e));
  let { sessionId: i, baseUrl: s, accessToken: u, deviceToken: c } = n.send;
  return BZe(e, { sessionId: i, repo: r, prNumber: a, baseUrl: s, getAccessToken: () => u, getTrustedDeviceToken: () => Promise.resolve(c) });
}
function S(e, { credentials: r, storageV5: a }, o) {
  if (e.inboxOwner !== void 0) return e.inboxOwner;
  let n = { mint: Fyo({ getAccessToken: () => o, storageV5: a, credentials: r, presetOwner: e.owner }), changed: false };
  e.inboxOwner = n;
  let i = (s) => {
    if (!s && e.inboxOwner === n) e.inboxOwner = void 0;
  };
  return n.mint.then((s) => i(s.pin !== void 0 || s.reason === "not_owner"), () => i(false)), n;
}
async function p(e, r, a, o) {
  if (!CTe()) return;
  if (e.owner === void 0) return "owner_unverified";
  let n = S(e, r, a);
  if (n.changed) return "owner_changed";
  let i;
  try {
    i = await n.mint;
  } catch (s) {
    return t(`[bridge] inbox fetch: owner pin could not be minted: ${d(s)}`, { level: "error" }), "owner_unverified";
  }
  if (i.pin === void 0) switch (i.reason) {
    case "no_token":
      return "no_token";
    case "no_identity":
    case "unresolved":
      return "owner_unverified";
    case "not_owner":
      return n.changed = true, "owner_changed";
    case "not_store_login":
      return "owner_unverified";
    case "disabled":
      return;
  }
  if (o?.fresh || i.pin.identityLooksChanged()) {
    let s = await i.pin.confirmChanged(o);
    if (s === "changed" || n.changed) return n.changed = true, "owner_changed";
    if (s === "inconclusive") return "owner_unverified";
  }
  if (o?.fresh && !i.pin.ownerVerified()) return "owner_unverified";
  return n.changed ? "owner_changed" : void 0;
}
async function Dyo(e, r) {
  let a = await l(r);
  if ("stop" in a) return g(a.stop);
  let { sessionId: o, baseUrl: n, accessToken: i, deviceToken: s } = a.send;
  return DEo({ sessionId: o, fileId: e, baseUrl: n, getAccessToken: () => i, getTrustedDeviceToken: () => Promise.resolve(s) });
}
export {
  Dyo,
  aAi,
  lAi
};
