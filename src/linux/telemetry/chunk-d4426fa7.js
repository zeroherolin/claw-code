// linux/telemetry/chunk-d4426fa7.js — Claude Code 2.1.310（linux）模块 chunk-yx1anek5.js
import { J } from "../context/not-admin-owned.js";
import { R, N, d } from "./anthropic-workspace-id.js";
import { pd, Ng, PVe, nf, Ooe, B_, jnr, zYo, Nx, jp, kn, k } from "../settings/global-config-and-gates.js";
import { wr, Mr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { _, te, bd, t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { pr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Sl, dwn, n8o, mai, gai, Kn } from "../auth/permission-error.js";
import { nst } from "../auth/profile-explicit.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { Py, Ph } from "../settings/built-in.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { sd } from "../remote/chunk-95151620.js";
import { ve } from "../shared/chunk-fee3c428.js";
var cx = true;
var h = "no hooks module loads in a claude-code-server tenant, whose process serves many people";
var H = "no hooks module loads in a tool server's daemon, which can hold the person's token and runs its caller's shell commands";
function bQ() {
  if (J()) return h;
  return sd() ? H : void 0;
}
var c = () => wr() || pd() || Boolean(i.ANTHROPIC_API_KEY) || Boolean(pr()?.env?.ANTHROPIC_API_KEY) || PVe() !== null || Boolean(Ng()) || nf() || nst() || !Ooe({ envBearerFallbackFor: jnr() }).error;
import { isDeepStrictEqual as L } from "util";
function y(e) {
  return n8o(e) ?? [e];
}
async function MGs(e, o, r) {
  let m = y(e);
  return dwn(async () => {
    let s = [];
    for (let [n, l] of [...m.entries()].reverse()) {
      let a = false;
      try {
        let { success: u, transient: S } = await l.mutate((g) => {
          let E = P(o, g);
          return a = E !== g, E;
        }, x(e, n, r));
        s[n] = { name: l.name, result: S === void 0 ? { success: u } : { success: u, transient: S }, changed: a };
      } catch (u) {
        s[n] = { name: l.name, error: u };
      }
    }
    return s;
  });
}
async function ONr(e, o, r) {
  let m = [];
  for (let [s, n] of y(e).entries()) {
    let l = x(e, s, r), a;
    try {
      n.invalidateCache?.(), a = await (n.readAsyncStrict?.(l, { inaccessibleAs: "failure", unreadableFileAs: "failure", unparsableEntryAs: "failure" }) ?? n.readAsync(l));
    } catch (u) {
      t(`[secureStorage] strict read of ${n.name} rejected: ${d(u)}`, { level: "warn" }), a = Sl;
    }
    if (a !== Sl && a != null && !mn(a)) a = Sl;
    m.push({ name: n.name, value: a === Sl ? Sl : o(bd((n.osGuarded === true ? a : mai(a ?? null)) ?? {})) });
  }
  return m;
}
function P(e, o) {
  if (!mn(o) || Object.keys(o).length === 0) return o;
  let r = e(bd(o));
  if (!mn(r)) throw new R("removeFromEveryLeg: the remove function did not return a plain object (an async function returns a Promise). Nothing was written to this store.", "secure storage: a remove function did not return a plain object (caller bug, nothing written)");
  let m = D(o), s = D(r), n = Object.keys(s).find((l) => !Object.hasOwn(m, l));
  if (n !== void 0) throw new R(`removeFromEveryLeg: the remove function added the key "${n}". It may only delete keys. Nothing was written to this store.`, "secure storage: a remove function added a key (caller bug, nothing written)");
  if (!A(m, s)) throw new R("removeFromEveryLeg: the remove function added or changed a value. It may only delete keys. Nothing was written to this store.", "secure storage: a remove function added or changed a value (caller bug, nothing written)");
  return L(s, m) ? o : s;
}
function A(e, o) {
  if (!mn(e) || !mn(o)) return L(e, o);
  return Object.keys(o).every((r) => Object.hasOwn(e, r) && A(e[r], o[r]));
}
function D(e) {
  return te(_(e));
}
function x(e, o, r) {
  return n8o(e) === void 0 || o > 0 ? r : void 0;
}
async function F() {
  if (c()) return false;
  let [e, o] = await Promise.all([ONr(Kn(), (r) => r.claudeAiOauth !== void 0), O() !== "macos" || gai()]);
  return o && e.every((r) => r.value === false);
}
var f = ve({ isLifted: false, lifting: void 0 }, (e) => {
  e.isLifted = false, e.lifting = void 0;
});
function b() {
  return f.lifting ??= F().then((e) => {
    f.isLifted = e;
  }, (e) => {
    t(`credential stores not read strictly: ${d(e)}`);
  }), f.lifting;
}
var gdn = ve({ isFollowed: false }, (e) => {
  e.isFollowed = false;
});
var p = /* @__PURE__ */ new Set(["disk", "payload"]);
async function XQe() {
  let e = kn(B_, cx);
  return !gdn.isFollowed && jp() && e.value !== cx && p.has(e.source) ? b() : void 0;
}
var w = () => !f.isLifted || c();
function MNr() {
  try {
    return zYo() || w();
  } catch (e) {
    return t(`GrowthBook: credential sources not read (${N(e).name})`), true;
  }
}
var v = () => !gdn.isFollowed && jp() && p.has(kn(B_, cx).source) && !MNr();
function hdn() {
  let e = k(B_, cx), o = e !== cx, r = o && (Nx() || v());
  if (o) XQe();
  return r ? cx : e;
}
var IS = () => bQ() === void 0 && hdn();
var ydn = () => IS() && !mr("hooks") && !Mr();
var DNr = () => ydn() && !Ph() && !Py();
export {
  DNr,
  IS,
  MGs,
  MNr,
  ONr,
  XQe,
  bQ,
  cx,
  gdn,
  hdn,
  ydn
};
