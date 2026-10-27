// shell/gave-up.tnt0.js — Claude Code 2.1.310 模块 chunk-tnt0dnyd.js
import { es } from "../context/not-admin-owned.ersa.js";
import { d, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { hn } from "../fs/async-hooks.2k4e.js";
import { Efi } from "../remote/local-agent.we9a.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { ss } from "./chunk-tjkwy3jp.js";
import { EI, fe, Gf, fpe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { bgo } from "../fs/unattended-serving-runs.xd9n.js";
import { E_e } from "../shared/chunk-wwfwgwca.js";
import { o, u, B, T } from "../vendor/zod/string-format.k395.js";
import { homedir as U, hostname as p } from "os";
import { dirname as y, join as A } from "path";
function n2(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var JNn = 1, QNn = "unattended-serving:v1:auto-arm-classifier", P = "unattended-serving-consent.json", D = f(() => u({ version: T(JNn), choice: B(["accepted", "declined"]), terms: o(), decidedAt: o(), hostname: o() }));
function m() {
  return A(U(), ".claude", "state", P);
}
function CMt(e = p()) {
  return E_e(n2(e));
}
function vvr() {
  return `change it in /config, or delete ${ss(m())} to be asked again`;
}
function h() {
  return { readText: async () => {
    try {
      return await hn().read(m());
    } catch (e) {
      if (G(e)) return;
      throw e;
    }
  }, writeText: async (e) => {
    let n = m();
    await hn().mkdir(y(n), 448), await hn().atomicWrite(n, e, 384);
  }, now: () => /* @__PURE__ */ new Date(), hostname: p };
}
async function N1e(e) {
  let n = e === void 0 ? i() : void 0, r = Date.now(), a = n?.writes, { choice: s, unreadable: g, staleYes: l } = await E(e ?? h()), v = n !== void 0 && EI() && await bgo(Efi()), S = v && (await Avr({ start: true })).confined;
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !c(n) || r >= n.view.readAt)) {
    if (n.view = { choice: s, readAt: r, unreadable: g, staleYes: l === true, hostAllows: S, grantOutsideSandbox: v && !S }, c(n)) n.staleUnresolved = false;
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
    let r = D().safeParse(ee(n));
    if (!r.success) return { choice: "unset", unreadable: true };
    let a = r.data.choice === "declined" || n2(r.data.hostname) === n2(e.hostname()) && r.data.terms === QNn;
    return { choice: a ? r.data.choice : "unset", unreadable: false, staleYes: !a && r.data.choice === "accepted" };
  } catch {
    return { choice: "unset", unreadable: true };
  }
}
async function F1e(e, n) {
  if (e === "accepted" && wq()) return t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", { level: "warn" }), false;
  let r = n === void 0 ? i() : void 0, a = n ?? h();
  try {
    if (await a.writeText(_({ version: JNn, choice: e, terms: QNn, decidedAt: a.now().toISOString(), hostname: n2(a.hostname()) }, null, 2) + `
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
function f7() {
  let e = i();
  if (!c(e)) x(e);
  return e.view?.choice ?? "unset";
}
function c(e, n = Date.now()) {
  if (e.view === void 0) return false;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function _ut(e = Date.now()) {
  return c(i(), e);
}
var b = 1500;
async function TMt(e) {
  let n = i();
  if (c(n)) return;
  let r = x(n), a, s, g = e?.aborted === true ? Promise.resolve("gave_up") : new Promise((l) => {
    a = setTimeout((v) => v("gave_up"), b, l), s = () => l("gave_up"), e?.addEventListener("abort", s, { once: true });
  });
  if (await Promise.race([r, g]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
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
  let n = N1e().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}
function kvr() {
  return f7() === "accepted";
}
function wq() {
  return Cvr() !== void 0;
}
function Cvr() {
  let e = (n) => n?.remoteTools?.allowUnattendedServing === false;
  return Gf().some(e) || fpe().some(e) || e(fe("policySettings")) ? "managed" : e(fe("userSettings")) ? "user" : void 0;
}
function GQt() {
  f7();
}
function Tvr() {
  let { view: e } = i();
  return e?.unreadable === true || e?.staleYes === true;
}
function _go() {
  return i().view?.unreadable === true;
}
async function Avr({ start: e }) {
  try {
    let { classifyDeviceSandboxPosture: n, ensureDeviceSandboxPosture: r, readDeviceSandboxSnapshot: a } = await import("./classify-device-sandbox-posture.x16x.js");
    return e ? await r() : n(a(), { requireStarted: false });
  } catch (n) {
    return t(`unattended-serving consent: command sandbox could not be asked, taken as not confining (${d(n)})`, { level: "warn" }), { confined: false, reason: "sandbox_failed_to_start" };
  }
}
function O() {
  return i().view?.hostAllows === true;
}
function Sgo() {
  let e = i();
  return !e.staleUnresolved && e.view?.grantOutsideSandbox === true;
}
function C(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function h8e() {
  try {
    let e = i();
    return !wq() && !e.staleUnresolved && C(e, e.view?.hostAllows === true);
  } catch {
    return false;
  }
}
function AMt(e) {
  try {
    let n = kvr(), r = i();
    return wq() || r.staleUnresolved || !n && !C(r, e ?? O());
  } catch (n) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${d(n)})`, { level: "warn" }), true;
  }
}
export {
  AMt,
  Avr,
  CMt,
  Cvr,
  F1e,
  GQt,
  JNn,
  N1e,
  QNn,
  Sgo,
  TMt,
  Tvr,
  _go,
  _ut,
  f7,
  h8e,
  kvr,
  n2,
  vvr,
  wq
};
