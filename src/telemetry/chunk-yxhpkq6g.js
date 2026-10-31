// telemetry/chunk-yxhpkq6g.js — Claude Code 2.1.310 模块 chunk-yxhpkq6g.js
import { J } from "../context/not-admin-owned.ersa.js";
import { R, N, d } from "./anthropic-workspace-id.36ys.js";
import { fd, Ng, $Ve, np, $oe, j_, irr, b4o, Ux, jf, kn, k } from "../settings/global-config-and-gates.27xj.js";
import { Sr, Mr } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { _, ee, _d, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { fr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { ma, Cwn, I8o, O8o, Qai, Vn } from "../auth/secure-storage-credentials-write.vafw.js";
import { ost } from "../auth/profile-explicit.b7t3.js";
import { mr } from "../workflows/chunk-0c6r1zf7.js";
import { Oy, Ph } from "../settings/built-in.5fzv.js";
import { mn } from "../shared/chunk-1a0taxx3.js";
import { sd } from "../remote/chunk-t0kv6pst.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
var fx = true;
var h = "no hooks module loads in a claude-code-server tenant, whose process serves many people";
var H = "no hooks module loads in a tool server's daemon, which can hold the person's token and runs its caller's shell commands";
function AJ() {
  if (J()) return h;
  return sd() ? H : void 0;
}
var c = () => Sr() || fd() || Boolean(i.ANTHROPIC_API_KEY) || Boolean(fr()?.env?.ANTHROPIC_API_KEY) || $Ve() !== null || Boolean(Ng()) || np() || ost() || !$oe({ envBearerFallbackFor: irr() }).error;
import { isDeepStrictEqual as L } from "util";
function y(e) {
  return I8o(e) ?? [e];
}
async function _Gs(e, o, r) {
  let m = y(e);
  return Cwn(async () => {
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
async function QNr(e, o, r) {
  let m = [];
  for (let [s, n] of y(e).entries()) {
    let l = x(e, s, r), a;
    try {
      n.invalidateCache?.(), a = await (n.readAsyncStrict?.(l, { inaccessibleAs: "failure", unreadableFileAs: "failure", unparsableEntryAs: "failure" }) ?? n.readAsync(l));
    } catch (u) {
      t(`[secureStorage] strict read of ${n.name} rejected: ${d(u)}`, { level: "warn" }), a = ma;
    }
    if (a !== ma && a != null && !mn(a)) a = ma;
    m.push({ name: n.name, value: a === ma ? ma : o(_d((n.osGuarded === true ? a : O8o(a ?? null)) ?? {})) });
  }
  return m;
}
function P(e, o) {
  if (!mn(o) || Object.keys(o).length === 0) return o;
  let r = e(_d(o));
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
  return ee(_(e));
}
function x(e, o, r) {
  return I8o(e) === void 0 || o > 0 ? r : void 0;
}
async function F() {
  if (c()) return false;
  let [e, o] = await Promise.all([QNr(Vn(), (r) => r.claudeAiOauth !== void 0), O() !== "macos" || Qai()]);
  return o && e.every((r) => r.value === false);
}
var f = Ee({ isLifted: false, lifting: void 0 }, (e) => {
  e.isLifted = false, e.lifting = void 0;
});
function b() {
  return f.lifting ??= F().then((e) => {
    f.isLifted = e;
  }, (e) => {
    t(`credential stores not read strictly: ${d(e)}`);
  }), f.lifting;
}
var xdn = Ee({ isFollowed: false }, (e) => {
  e.isFollowed = false;
});
var p = /* @__PURE__ */ new Set(["disk", "payload"]);
async function oQe() {
  let e = kn(j_, fx);
  return !xdn.isFollowed && jf() && e.value !== fx && p.has(e.source) ? b() : void 0;
}
var w = () => !f.isLifted || c();
function ZNr() {
  try {
    return b4o() || w();
  } catch (e) {
    return t(`GrowthBook: credential sources not read (${N(e).name})`), true;
  }
}
var v = () => !xdn.isFollowed && jf() && p.has(kn(j_, fx).source) && !ZNr();
function Pdn() {
  let e = k(j_, fx), o = e !== fx, r = o && (Ux() || v());
  if (o) oQe();
  return r ? fx : e;
}
var Ob = () => AJ() === void 0 && Pdn();
var Idn = () => Ob() && !mr("hooks") && !Mr();
var eFr = () => Idn() && !Ph() && !Oy();
export {
  AJ,
  Idn,
  Ob,
  Pdn,
  QNr,
  ZNr,
  _Gs,
  eFr,
  fx,
  oQe,
  xdn
};
