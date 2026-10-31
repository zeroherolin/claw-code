// darwin/hooks/plugin-function-hooks-switch-followed.js — Claude Code 2.1.310（darwin）模块 chunk-e90f9rce.js
import { nt, U, ye } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { X, Nt, Pe } from "../shared/chunk-57ff8cc1.js";
import { UEt, j_, e3r, rKe, pl, Fi, Xnt, oNe, jf, Ti, kn, k, Nj, SH } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { XY, qb, Cot, xse } from "../shell/invalid-type.js";
import { nr } from "../remote/moved-directory.js";
import { gpe } from "../models/total-tokens-reminder.js";
import { fx, xdn, oQe, AJ, ZNr, Pdn, Ob } from "../telemetry/chunk-d4426fa7.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { _Qs } from "../mcp/spawn-to-exec-ms.js";
import { zB, $Do, cre, tGe } from "../telemetry/started-after-init-empty.js";
var H = (o) => oNe() || UEt(o);
var nQe = (o) => UEt(o) && !oNe();
var v = (o) => o.hasHeld || nQe(o);
var hyt = (o) => e3r.of(o).fetchHold;
function ire() {
  return hyt(U().host);
}
var z = () => (ye() || v(ire())) && H(ire()) && !Fi() && kn(j_, fx).source === "fallback";
var j0e = () => jf() && kn(j_, fx).source === "disk" && ZNr();
var V = () => v(ire()) && j0e() && Ob();
var A = () => H(ire()) && j0e() && !Ob();
var Y = () => A() && Xnt();
var Adn = () => Nj(kn(j_, fx).source);
function Bhe() {
  try {
    return kn(j_, fx).source === "disabled";
  } catch (o) {
    return l(o), false;
  }
}
var iF = () => cre() && nr() && (!Adn() || Bhe());
function mSi() {
  xdn.isFollowed = true;
}
function JUt() {
  let o = Ie();
  if (iF() && o.hooksModulesWakeBound === "ahead") o.hooksModulesWakeBound = "passed", t(`the rollout flag (${j_}) is not answered within this wake's wait: the organization's hooks modules load at what the switch reads, a person's wait for the answer`);
}
var R = 6e4;
var G = "Mods you installed aren't running in this session. Your organization's settings couldn't be read, so it isn't known whether it allows them.";
var D = "the follow of the rollout switch did not end and is given up";
function j(o) {
  return o instanceof Error && o.message === D ? "timeout" : "load_failed";
}
var T = "installed mods are off for now: the rollout switch for them reads off; they load again when it reads on, and built-in mods keep running";
function S() {
  let o = Ie().hooksModulesSwitchRead;
  return o !== void 0 && !j0e() && !iF() && (o.isLoadOwed || o.isOn !== Ob());
}
function y() {
  let o = Ie().hooksModulesSwitchRead;
  return o !== void 0 && o.isOn && S() && !Ob();
}
function V2e(o, e, s) {
  let r = Ie(), { hooksModulesSwitchRead: n, hooksModulesSwitchFollowing: a } = r;
  if (a !== void 0) return a.then(() => y() ? V2e(o, e, s) ?? void 0 : void 0).catch(l);
  if (n === void 0 || !S()) return null;
  let f = Ob(), c = r.loadedModules.length;
  t(`installed plugins' hooks modules ${f ? "load" : "unload"}: the rollout flag (${j_}) reads ${f ? "on" : "off"} in a running session`);
  let p = () => {
    r.hooksModulesSwitchRead = { ...r.hooksModulesSwitchRead ?? n, isOn: false };
  }, h = (f ? Promise.resolve() : Promise.resolve().then(s).then(p, l)).then(o), L = () => {
    r.hooksModulesSwitchRead = { ...r.hooksModulesSwitchRead ?? n, isLoadOwed: true };
  };
  h.catch(L);
  let F = Nt(h, R, D).then(() => {
    g("plugin_function_hooks_switch_followed", { is_turned_on: f });
  }, (x) => {
    L(), m("plugin_function_hooks_switch_followed", j(x), { is_turned_on: f }), t(`installed plugins' hooks modules: the load that follows the rollout flag failed: ${d(x)}`, { level: "error" });
  }).then(() => {
    if (!f && r.loadedModules.length < c) e(T);
  }).catch(l).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = F, F;
}
function HCe() {
  let o = Ie().hooksModulesSwitchRead?.isManagedPending === true;
  try {
    let e = !Ob() && kn(j_, fx).source === "payload";
    return o && cre() && nr() && !e;
  } catch (e) {
    return l(e), o;
  }
}
function w(o, e, s) {
  let r = Ie();
  if (Bhe()) JUt();
  let n = r.hooksModulesWakeBound === "taken", a = r.hooksModulesWakeBound === "passed" && iF(), u = !(r.hooksModulesWakeBound === "ahead" && iF()) && HCe();
  if (!(r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && (a || u || n))) return null;
  if (n && !u) {
    if (r.hooksModulesWakeBound = "loaded", r.hooksModulesSwitchRead?.isPersonsOut === true) e(G);
    return null;
  }
  let c = Nt(o(), R, "the load at the end of the wake's wait did not end and is given up").then(() => {
    let p = r.hooksModulesSwitchRead, E = p?.isManagedPending !== true;
    if (E) r.hooksModulesWakeBound = "loaded";
    if (E && p?.isPersonsOut === true) e(G);
  }, (p) => {
    t(`the load of an organization's hooks modules at the end of the wake's wait failed: ${d(p)}`, { level: "error" });
  }).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = c, c.then(() => y() ? V2e(o, e, s) ?? void 0 : void 0).catch(l);
}
function gSi(o) {
  let { registry: e } = o, s = o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0, r = !s && e.hooksModulesWakeBound === "taken", n = s && e.hooksModulesWakeBound === "passed" && iF() && Bhe();
  if (r) e.hooksModulesWakeBound = "passed";
  if (n) e.hooksModulesWakeBound = "taken";
}
async function Z() {
  return await Ti().catch(() => {
    return;
  }), Y() ? Ti().catch(() => {
    return;
  }) : void 0;
}
function P() {
  return iF() ? i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? $Do : zB;
}
var q = () => Math.max(0, P() - _Qs());
function Q(o) {
  let e = o.timedOut, s = !e && Fi();
  return e ? `no answer within ${P()}ms` : s ? "the flag payload landed" : "the fetch settled with no payload";
}
async function _(o = Ti) {
  let e = await tGe({ initialize: o, budgetMs: q() });
  t(`installed plugins' hooks modules held ${Math.round(e.waitMs)}ms for the rollout flag (${j_}): ` + Q(e));
}
async function hSi() {
  return Adn() ? void 0 : _();
}
var J = 3e4;
function oo(o) {
  return nQe(o) && rKe() ? o.over.promise : Promise.resolve();
}
var b = (o) => Pe(oo(o), J);
async function ySi() {
  await oQe();
  let o = A(), e = z() || V(), s = (o || e) && !iF(), r = o ? Z : Ti;
  if (s) await b(ire());
  return s ? _(r) : void 0;
}
var eo = { override: "from a local override", payload: "from GrowthBook (this session's payload)", disk: "from GrowthBook (the disk cache of an earlier session)", disabled: "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)", fallback: "from the default (a cold GrowthBook cache, no payload yet)" };
var W = 6e4;
function to(o = Date.now()) {
  let e = Ie(), s = e.hooksModulesSwitchRereading;
  if (s !== void 0) return s;
  let r = e.hooksModulesSwitchRead;
  if (!(r !== void 0 && nr() && o - r.askedAt >= W)) return null;
  e.hooksModulesSwitchRead = { ...r, askedAt: o };
  let f = (r.askedAt === 0 ? _() : tGe({ initialize: () => SH().then(Ti), budgetMs: zB }).then(() => {
    return;
  })).finally(() => {
    e.hooksModulesSwitchRereading = void 0;
  });
  return e.hooksModulesSwitchRereading = f, f;
}
function C(o, e, s) {
  let r = () => V2e(o, e, s) ?? w(o, e, s), n = to();
  return n !== null ? n.catch(l).then(() => (JUt(), r() ?? void 0)) : r();
}
var Rdn = 1e4;
function _Si(o) {
  if (!(j0e() && !Ob())) return;
  let s = pl(() => {
    if (!Fi()) return;
    if (s(), Ob()) t(`installed plugins' hooks modules load late: the rollout flag (${j_}) answered on after the load went on over a saved off`), o();
  });
}
var rQe = { served: "the rollout switch served off", saved: "the rollout switch was saved off by an earlier session and is not refreshed yet", unanswered: "this wake's flag fetch has not answered the rollout switch; they load at a turn start once it reads on", unfetched: "this wake fetches no rollout switch; an organization's load at once, a person's once the organization's settings have been read", unfetchedOut: "this wake fetches no rollout switch and the organization's settings could not be read; an organization's load at once, a person's stay out for this wake" };
function gGs() {
  let o = iF() && Ob(), e = j0e(), s = o && Bhe();
  if (s && Ie().hooksModulesSwitchRead?.isPersonsOut === true) return rQe.unfetchedOut;
  return s ? rQe.unfetched : o ? rQe.unanswered : e ? rQe.saved : rQe.served;
}
function ro(o, e, s) {
  let r = Ie(), n = r.loadedModules.length;
  return Promise.resolve().then(o).then(() => {
    if (r.loadedModules.length < n) e(T);
    s();
  });
}
function SSi() {
  return eo[kn(j_, fx).source];
}
var hGs = ["NODE_ENV", "DISABLE_GROWTHBOOK", "DISABLE_TELEMETRY", "DO_NOT_TRACK", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_INTERNAL_FC_OVERRIDES", ...gpe];
function bSi(o, e, s) {
  let r = C(o, e, s);
  return r === null ? null : Pe(r, Rdn).then(() => {
    return;
  }).catch(l);
}
var Cdn = 18e4;
class so {
  busy = false;
  running = null;
  key = null;
  edgeAt = 0;
  busySince = 0;
  idleWaiters = /* @__PURE__ */ new Set();
  endWaiters = /* @__PURE__ */ new Set();
  valveTimer = null;
}
var me = new nt(() => new so());
function M() {
  return me.of(U());
}
function io(o) {
  if (o.valveTimer !== null) clearTimeout(o.valveTimer), o.valveTimer = null;
  let e = [...o.idleWaiters];
  o.idleWaiters.clear(), no(e);
}
function no(o) {
  for (let e of o) queueMicrotask(e);
}
function Tdn(o, e = null) {
  let s = M(), r = e === null || e === s.key;
  if (o ? s.busy && r : !s.busy || !r) return;
  if (s.busy) io(s), no([...s.endWaiters]), s.endWaiters.clear();
  s.busy = o, s.running = o ? Symbol("foreground turn") : null, s.key = o ? e : null, s.busySince = o ? performance.now() : 0, s.edgeAt = Date.now();
}
function z2e() {
  return M().busy;
}
function ao(o) {
  let e = M();
  if (e.busy) e.endWaiters.add(o);
  else queueMicrotask(o);
}
function pGs() {
  return M().edgeAt;
}
function qNr(o = performance.now(), e = Cdn) {
  let s = M();
  return s.busy && o - s.busySince < e;
}
function fGs(o = performance.now(), e = Cdn) {
  let s = M();
  return s.busy && o - s.busySince >= e;
}
function mGs(o, e, s = Cdn) {
  if (e.aborted) return () => {
  };
  let r = M(), n = false, a = () => {
    if (e.removeEventListener("abort", u), !n && !e.aborted) o();
  }, u = () => {
    n = true, r.idleWaiters.delete(a), e.removeEventListener("abort", u);
  };
  if (!qNr(performance.now(), s)) return queueMicrotask(a), u;
  if (r.idleWaiters.add(a), e.addEventListener("abort", u, { once: true }), r.valveTimer === null) {
    let f = r.busySince + s - performance.now();
    r.valveTimer = setTimeout(io, Math.max(0, f), r), r.valveTimer.unref?.();
  }
  return u;
}
function wSi(o) {
  let e = { isStopped: false, isWaiting: false };
  function s() {
    if (e.isWaiting = false, !e.isStopped && S()) o();
  }
  let r = pl(() => {
    if (!e.isWaiting && S()) e.isWaiting = true, ao(s);
  });
  return () => {
    e.isStopped = true, r();
  };
}
function ESi(o, e, s) {
  let r = Ie();
  if (!(r.hooksModulesWakeBound === "ahead" && r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && iF())) return null;
  let a = b(ire()).then(() => _()).then(() => (r.hooksModulesSwitchFollowing = void 0, JUt(), V2e(o, e, s) ?? w(o, e, s) ?? void 0)).catch(l).finally(() => {
    if (r.hooksModulesSwitchFollowing === a) r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = a, a;
}
function sDo() {
  try {
    return Fi() || kn(j_, fx).source === "payload";
  } catch {
    return false;
  }
}
var YNr = () => Pdn() !== k(j_, fx);
function vSi(o) {
  let e = o.registry.hooksModulesSwitchRead;
  if (e?.isManagedPending !== true) return false;
  if (!(o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0)) return t(`the load of an organization's hooks modules stays owed: its set ${o.isSetKnown ? "is known" : "is not known yet"}, the load ${o.isLoadFaultless ? "ran" : "did not run faultless"}, ${o.unmet.length} named plugin(s) not found or not loaded`), false;
  return o.registry.hooksModulesSwitchRead = o.isDecided ? { ...e, isManagedPending: false } : void 0, true;
}
var iDo = "Your organization's mods could not be loaded, so this turn was not run.";
async function lo(o, e, s, r) {
  let n = Ie(), a = { isEnded: false }, u = { wake: () => {
  } }, f = /* @__PURE__ */ new Set(), c = new AbortController(), p = pl(() => u.wake()), E = n.hookRegistrationEnded.subscribe(() => u.wake()), h = { hasMoved: false, passesBefore: 0 }, L = xse(() => {
    h.hasMoved = true, h.passesBefore = n.hookRegistrationEpoch, u.wake();
  }), F = () => h.hasMoved && n.hookRegistrationEpoch === h.passesBefore, x = { isPassed: false }, B = { isMet: false }, N = () => !a.isEnded && !x.isPassed && !B.isMet && HCe(), uo = X(s, c.signal).then(() => {
    x.isPassed = true;
  });
  e.then(() => {
    a.isEnded = true;
  });
  try {
    while (N()) {
      let K = { isOver: false }, po = X(W, c.signal, { unref: true }).then(() => {
        K.isOver = true;
      }), co = F(), I = Promise.resolve().then(() => o(co)).catch(l);
      h.hasMoved = false;
      while (N() && !K.isOver && !(F() && f.has(I))) {
        let ho = new Promise((O) => {
          u.wake = O;
        }), go = [I, n.hooksModulesSwitchFollowing, ...n.hookRegistrationsInFlight].flatMap((O) => O === void 0 || f.has(O) ? [] : [O]).map((O) => Promise.allSettled([O]).then(() => f.add(O)));
        await Promise.race([po, uo, e, ho, ...go]), B.isMet = !x.isPassed && f.has(I) && !F() && r();
      }
    }
    return x.isPassed ? "limit" : B.isMet ? "dead-end" : "released";
  } finally {
    c.abort(), p(), E(), L();
  }
}
var fo = 3e5;
var mo = "Waiting for your organization's mods to load.";
function XNr(o, e) {
  let s = Ie(), n = `${Cot() ? "ended" : "under way"} since reset ${XY()}`, a = qb() ?? n, u = s.organizationsStatusLoad;
  if (!e && u?.standing === a) return u.pass;
  let f = Promise.resolve().then(o), c = { standing: a, pass: f }, p = () => {
    if (s.organizationsStatusLoad === c) s.organizationsStatusLoad = void 0;
  };
  return s.organizationsStatusLoad = c, f.then(p, p), f;
}
var JNr = "Your organization's policy could not be read, so this session cannot run a turn.";
function kSi(o, e, s, r, n) {
  if (!HCe()) return null;
  let a = { isEnded: false }, u = { end: "released" }, f = () => Ie().hooksModulesSwitchRead?.isManagedPending === true, c = () => V2e(o, e, s) ?? w(o, e, s);
  return r.then(() => {
    a.isEnded = true;
  }), Promise.resolve().then(() => e(mo)).catch(l).then(() => lo((p) => C(p ? () => XNr(o, false) : o, e, s), r, fo, n)).then((p) => {
    u.end = p;
  }).catch(l).then(() => !HCe() && f() ? Pe(ro(s, e, c), Rdn) : void 0).catch(l).then(() => {
    let p = u.end === "dead-end";
    if (!HCe()) return { kind: "start" };
    return a.isEnded ? { kind: "ended" } : { kind: "failed", message: p ? JNr : iDo };
  });
}
function yGs() {
  let o = Ie();
  if (o.hooksModulesSwitchRead === void 0 && Ee()) o.hooksModulesSwitchRead = { isOn: false, askedAt: 0, isLoadOwed: true, isManagedPending: true, isPersonsOut: false };
}
function Ee() {
  try {
    return AJ() === void 0 && iF();
  } catch {
    return true;
  }
}
export {
  Adn,
  Bhe,
  Cdn,
  ESi,
  HCe,
  JNr,
  JUt,
  Rdn,
  SSi,
  Tdn,
  V2e,
  XNr,
  YNr,
  _Si,
  bSi,
  fGs,
  gGs,
  gSi,
  hGs,
  hSi,
  hyt,
  iDo,
  iF,
  ire,
  j0e,
  kSi,
  mGs,
  mSi,
  nQe,
  pGs,
  qNr,
  rQe,
  sDo,
  vSi,
  wSi,
  yGs,
  ySi,
  z2e
};
