// linux/shell/gave-up.js — Claude Code 2.1.310（linux）模块 chunk-rjdks4dd.js
import { es } from "../context/not-admin-owned.js";
import { d, G } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { hn } from "../fs/async-hooks.7959.js";
import { Nfi } from "../remote/local-agent.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { os } from "./chunk-8eebd6c6.js";
import { _I, pe, Gp, ife } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Xmo } from "../fs/unattended-serving-runs.js";
import { g_e } from "../shared/chunk-37f396c1.js";
import { o, u, B, A } from "../vendor/zod/string-format.js";
import { homedir as U, hostname as S } from "os";
import { dirname as y, join as P } from "path";
function VW(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var $Nn = 1, FNn = "unattended-serving:v1:auto-arm-classifier", D = "unattended-serving-consent.json", T = p(() => u({ version: A($Nn), choice: B(["accepted", "declined"]), terms: o(), decidedAt: o(), hostname: o() }));
function g() {
  return P(U(), ".claude", "state", D);
}
function _Mt(e = S()) {
  return g_e(VW(e));
}
function lEr() {
  return `change it in /config, or delete ${os(g())} to be asked again`;
}
function h() {
  return { readText: async () => {
    try {
      return await hn().read(g());
    } catch (e) {
      if (G(e)) return;
      throw e;
    }
  }, writeText: async (e) => {
    let n = g();
    await hn().mkdir(y(n), 448), await hn().atomicWrite(n, e, 384);
  }, now: () => /* @__PURE__ */ new Date(), hostname: S };
}
async function RBe(e) {
  let n = e === void 0 ? i() : void 0, r = Date.now(), a = n?.writes, { choice: s, unreadable: v, staleYes: f } = await E(e ?? h()), l = n !== void 0 && _I() && await Xmo(Nfi()), m = l && (await fEr({ start: true })).confined;
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !c(n) || r >= n.view.readAt)) {
    if (n.view = { choice: s, readAt: r, unreadable: v, staleYes: f === true, hostAllows: m, grantOutsideSandbox: l && !m }, c(n)) n.staleUnresolved = false;
  }
  return s;
}
async function E(e) {
  let n;
  try {
    n = await e.readText();
  } catch (r) {
    return t(`unattended-serving consent: store unreadable (${d(r)})`, { level: "warn" }), { choice: "unset", unreadable: true };
  }
  if (n === void 0) return { choice: "unset", unreadable: false };
  try {
    let r = T().safeParse(te(n));
    if (!r.success) return { choice: "unset", unreadable: true };
    let a = r.data.choice === "declined" || VW(r.data.hostname) === VW(e.hostname()) && r.data.terms === FNn;
    return { choice: a ? r.data.choice : "unset", unreadable: false, staleYes: !a && r.data.choice === "accepted" };
  } catch {
    return { choice: "unset", unreadable: true };
  }
}
async function xBe(e, n) {
  if (e === "accepted" && u4()) return t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", { level: "warn" }), false;
  let r = n === void 0 ? i() : void 0, a = n ?? h();
  try {
    if (await a.writeText(_({ version: $Nn, choice: e, terms: FNn, decidedAt: a.now().toISOString(), hostname: VW(a.hostname()) }, null, 2) + `
`), r !== void 0) r.writes += 1, r.view = { choice: e, readAt: Date.now(), unreadable: false, staleYes: false, hostAllows: r.view?.hostAllows === true, grantOutsideSandbox: r.view?.grantOutsideSandbox === true }, r.staleUnresolved = false;
    return true;
  } catch (s) {
    return t(`unattended-serving consent: answer not saved (${d(s)})`, { level: "warn" }), false;
  }
}
var N = 3e3, M = new W(() => ({ view: void 0, refresh: void 0, refreshStartedAt: void 0, abandoned: void 0, staleUnresolved: false, writes: 0 }));
function i() {
  return es(M);
}
function iJ() {
  let e = i();
  if (!c(e)) x(e);
  return e.view?.choice ?? "unset";
}
function c(e, n = Date.now()) {
  if (e.view === void 0) return false;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function gut(e = Date.now()) {
  return c(i(), e);
}
var b = 1500;
async function bMt(e) {
  let n = i();
  if (c(n)) return;
  let r = x(n), a, s, v = e?.aborted === true ? Promise.resolve("gave_up") : new Promise((f) => {
    a = setTimeout((l) => l("gave_up"), b, f), s = () => f("gave_up"), e?.addEventListener("abort", s, { once: true });
  });
  if (await Promise.race([r, v]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
  if (!c(n)) n.staleUnresolved = true, w(n, r);
}
function w(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return false;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = n, n.finally(() => {
    if (e.abandoned === n) e.abandoned = void 0;
  }), true;
}
function x(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= b || !w(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = RBe().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}
function dEr() {
  return iJ() === "accepted";
}
function u4() {
  return cEr() !== void 0;
}
function cEr() {
  let e = (n) => n?.remoteTools?.allowUnattendedServing === false;
  return Gp().some(e) || ife().some(e) || e(pe("policySettings")) ? "managed" : e(pe("userSettings")) ? "user" : void 0;
}
function D7t() {
  iJ();
}
function uEr() {
  let { view: e } = i();
  return e?.unreadable === true || e?.staleYes === true;
}
function qmo() {
  return i().view?.unreadable === true;
}
async function fEr({ start: e }) {
  try {
    let { classifyDeviceSandboxPosture: n, ensureDeviceSandboxPosture: r, readDeviceSandboxSnapshot: a } = await import("./classify-device-sandbox-posture.js");
    return e ? await r() : n(a(), { requireStarted: false });
  } catch (n) {
    return t(`unattended-serving consent: command sandbox could not be asked, taken as not confining (${d(n)})`, { level: "warn" }), { confined: false, reason: "sandbox_failed_to_start" };
  }
}
function O() {
  return i().view?.hostAllows === true;
}
function Ymo() {
  let e = i();
  return !e.staleUnresolved && e.view?.grantOutsideSandbox === true;
}
function C(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function d8e() {
  try {
    let e = i();
    return !u4() && !e.staleUnresolved && C(e, e.view?.hostAllows === true);
  } catch {
    return false;
  }
}
function SMt(e) {
  try {
    let n = dEr(), r = i();
    return u4() || r.staleUnresolved || !n && !C(r, e ?? O());
  } catch (n) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${d(n)})`, { level: "warn" }), true;
  }
}
export {
  $Nn,
  D7t,
  FNn,
  RBe,
  SMt,
  VW,
  Ymo,
  _Mt,
  bMt,
  cEr,
  d8e,
  dEr,
  fEr,
  gut,
  iJ,
  lEr,
  qmo,
  u4,
  uEr,
  xBe
};
