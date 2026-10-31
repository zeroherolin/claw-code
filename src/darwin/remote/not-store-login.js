// darwin/remote/not-store-login.js — Claude Code 2.1.310（darwin）模块 chunk-w9259j2j.js
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { BAe, Lh, al, cRe, gn, sT, j4, Qk } from "../settings/global-config-and-gates.js";
import { vx } from "../shared/remote-control.js";
import { eL, CTe } from "../telemetry/bridge-resume-respects-local-owner.js";
async function Lyo(d) {
  let r = sT();
  if (r?.accountUuid) return { accountUuid: r.accountUuid, organizationUuid: r.organizationUuid || void 0 };
  if (!CTe() || St()) return;
  let c = d(), o = c === void 0 ? void 0 : await p0t(c);
  if (o === void 0) t("[bridge:owner-pin] daemon owner not declared: no bootstrap stamp, and the daemon credential is absent or was not attributed by the server in time — spawned sessions run the unverified inbox path", { level: "warn" });
  return o;
}
var F = 1e3, S = 3e5, _ = 15e3, R = 4, V = 1e4, H = 3e3;
async function Nyo(d) {
  return vx() === void 0 && eL() && await Lh(d) === "store";
}
async function yAs(d) {
  return (await Fyo(d)).pin;
}
async function Fyo({ getAccessToken: d, storageV5: r, credentials: c, presetOwner: o }) {
  let O = d();
  if (O === void 0) return { pin: void 0, reason: "no_token" };
  if (!CTe() || St()) return { pin: void 0, reason: "disabled" };
  if (o === void 0 && !await Nyo(c)) return { pin: void 0, reason: "not_store_login" };
  let k = await Qk(r), i, s = O, u = false;
  if (o !== void 0) {
    i = { accountUuid: o.accountUuid, organizationUuid: o.organizationUuid || void 0 };
    let n = await A(O) ? "unknown" : await B(O);
    if (n === "foreign") return { pin: void 0, reason: "not_owner" };
    if (n === "unknown" && !a(k)) return { pin: void 0, reason: "unresolved" };
  } else {
    if (!k?.accountUuid) return { pin: void 0, reason: "no_identity" };
    i = { accountUuid: k.accountUuid, organizationUuid: k.organizationUuid || void 0 };
  }
  let D = o === void 0 ? sT() : void 0;
  if (D !== void 0 && !v(D) && !await z()) return t("[bridge:owner-pin] identity sources disagree and the credential could not be validated — session runs unpinned"), { pin: void 0, reason: "unresolved" };
  let f, l, C = 0, P = "unchanged", g = 0, w, p, h, E = R;
  function a(n) {
    return n !== void 0 && Boolean(n.accountUuid) && n.accountUuid === i.accountUuid && (!n.organizationUuid || !i.organizationUuid || n.organizationUuid === i.organizationUuid);
  }
  function v(n) {
    if (!a(n)) return false;
    return i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? (n.organizationUuid || void 0) }, u = true, true;
  }
  async function z() {
    let n = await p0t(s);
    if (n === void 0) return false;
    return i = n, u = true, true;
  }
  async function B(n) {
    let e = await p0t(n);
    if (e === void 0) return "unknown";
    if (!a(e)) return "foreign";
    return i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? e.organizationUuid }, s = n, u = true, "owner";
  }
  async function A(n) {
    let e = await al(c).catch(() => null);
    return e?.accessToken === n && e.expiresAt !== null && e.expiresAt <= Date.now();
  }
  function x() {
    if (!u && o !== void 0) return true;
    if (!u) {
      let e = sT();
      if (e !== void 0 && !v(e)) return true;
    }
    let n = gn();
    return Boolean(n?.accountUuid) && !a(n);
  }
  function T(n) {
    if (C = Date.now() + n, E = R, n > 0) P = "unchanged", g = Date.now() + V;
  }
  function m(n) {
    if (C = Date.now() + _, n === "inconclusive") P = n, g = Date.now() + V;
    if (w === void 0 || h !== void 0 || E === 0) return n;
    return E--, h = setTimeout(() => {
      h = void 0;
      try {
        if (x()) w?.();
      } catch {
      }
    }, _), n;
  }
  async function N(n) {
    if (l !== void 0) await l;
    let e = void 0;
    if (!u && o !== void 0) {
      if (e = await cRe(r, c).catch(() => {
        return;
      }), e === void 0) return m("inconclusive");
      let y = await A(e.accessToken) ? "unknown" : await B(e.accessToken);
      if (y === "foreign") return T(0), "changed";
      if (y === "unknown") return m(a(e) ? "unchanged" : "inconclusive");
    } else if (!u) {
      let y = sT();
      if (!(y !== void 0 && v(y)) && !await z()) return m("inconclusive");
    }
    if (e ??= await cRe(r, c).catch(() => {
      return;
    }), !e?.accountUuid) return m(n ? "inconclusive" : "unchanged");
    let b = a(e);
    if (e.accessToken === s) return T(b ? _ : S), "unchanged";
    let U = await A(e.accessToken) ? void 0 : await p0t(e.accessToken);
    if (U === void 0) return m("inconclusive");
    if (a(U)) return t("[bridge:owner-pin] the server attributes the rotated credential to the owner — re-baselining"), i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? U.organizationUuid }, s = e.accessToken, T(b ? _ : S), "unchanged";
    return T(0), "changed";
  }
  let I = { identityLooksChanged: x, confirmChanged(n) {
    if (n?.fresh) {
      g = 0;
      let e = f;
      if (e !== void 0) return e.then(() => I.confirmChanged({ fresh: true }));
    } else if (f === void 0 && Date.now() < g) return Promise.resolve(P);
    return f ??= N(n?.fresh === true).finally(() => {
      f = void 0;
    }), f;
  }, noteAcceptedToken(n) {
    let e = n !== s;
    if (s = n, g = 0, !e || l !== void 0 || !CTe()) return;
    l = Qk(r).then(async (b) => {
      if (!b?.accountUuid || a(b)) return;
      let U = await z();
      t(U ? "[bridge:owner-pin] request accepted while the identity file names another account — re-pinned to the tenant the server attributes the credential to" : "[bridge:owner-pin] request accepted while the identity file names another account, but the credential could not be attributed — keeping the pinned owner");
    }).finally(() => {
      l = void 0;
    });
  }, ownerToken: () => s, ownerVerified: () => u, subscribe(n) {
    w = n;
    let e = j4(() => {
      try {
        if (Date.now() < C || !x()) return;
      } catch {
        return;
      }
      clearTimeout(p), p = setTimeout(() => {
        p = void 0, w?.();
      }, F);
    });
    return () => {
      w = void 0, clearTimeout(p), p = void 0, clearTimeout(h), h = void 0, e();
    };
  } };
  return { pin: I };
}
async function p0t(d) {
  let r = await Pe(BAe(d).catch(() => {
    return;
  }), H);
  return r?.account_uuid ? { accountUuid: r.account_uuid, organizationUuid: r.organization_uuid || void 0 } : void 0;
}
export {
  Fyo,
  Lyo,
  Nyo,
  p0t,
  yAs
};
