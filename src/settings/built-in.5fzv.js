// settings/built-in.5fzv.js — Claude Code 2.1.310 模块 chunk-5fzvzdp1.js
import { es, gie, Iee } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { Mr } from "../models/claude-3-5-sonnet.21mz.js";
import { er, Qt } from "./workflow-launch-exec.t4r2.js";
import { fe, JRe, fr, CS, WNe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Shn } from "./chunk-z6gbwywb.js";
import { Dy } from "../shared/chunk-9m922vm4.js";
function ud(o) {
  let t = fe("policySettings")?.strictPluginOnlyCustomization;
  if (t === true) return true;
  if (Array.isArray(t)) return t.includes(o);
  return false;
}
var p = /* @__PURE__ */ new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function o4(o) {
  return o !== void 0 && p.has(o);
}
function a(o) {
  return o;
}
function o7s() {
  return null;
}
function s7s(o) {
  return false;
}
function WJn(o) {
  return null;
}
var c = "cli";
class g {
  snapshotKey = () => c;
  snapshotsBySessionId = /* @__PURE__ */ new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(), t = this.snapshotsBySessionId.get(o);
    if (!t) t = { initialHooksConfig: null }, this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    let t = this.current();
    if (t.initialHooksConfig = o, Dy()) t.userHooksConfig = fe("userSettings")?.hooks ?? {};
    else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = fe("policySettings")?.hooks ?? {};
    } catch {
      t.policyHooksConfig = "unreadable";
    }
  }
  evict(o) {
    if (o === c) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var k = new W(() => new g());
function e() {
  return es(k);
}
function r() {
  let o = fe("policySettings");
  if (o?.disableAllHooks === true) return {};
  if (o?.allowManagedHooksOnly === true || Mr()) return o?.hooks ?? {};
  if (ud("hooks")) return o?.hooks ?? {};
  let t = fr();
  if (t.disableAllHooks === true) {
    if (!GJn()) return o?.hooks ?? {};
    return m(f.filter(Qt).map((n) => fe(n)?.hooks));
  }
  return a(t.hooks ?? {});
}
var f = ["userSettings", "flagSettings", "policySettings"];
function m(o) {
  let t = {};
  for (let n of o) for (let [s, l] of Object.entries(n ?? {})) {
    let i = s;
    t[i] = [...t[i] ?? [], ...l ?? []];
  }
  return t;
}
function GJn() {
  return d() && !sb();
}
function f2o() {
  return d() && sb();
}
function d() {
  if (!Dy() || Mr() || ud("hooks") || fr().disableAllHooks !== true) return false;
  return fe("policySettings")?.allowManagedHooksOnly !== true && f.filter(Qt).every((t) => fe(t)?.disableAllHooks !== true);
}
function Oy() {
  return Mr() || TQ();
}
function TQ() {
  let o = fe("policySettings");
  if (o?.allowManagedHooksOnly === true) return true;
  if (fr().disableAllHooks === true && o?.disableAllHooks !== true) return true;
  return false;
}
function zJn() {
  return Mr() || fe("policySettings")?.allowManagedHooksOnly === true || sb();
}
function sb() {
  return WNe(CS()).length > 0 || gie() && JRe();
}
function VJn() {
  return zJn() || ud("hooks");
}
function Ph() {
  return fe("policySettings")?.disableAllHooks === true;
}
function oY() {
  return Ph() || TQ();
}
function m2o() {
  e().store(r()), Iee();
}
function dG(o) {
  er(o), e().store(r()), Iee();
}
async function f2t(o) {
  let t = await Shn(o);
  try {
    e().store(r()), Iee();
  } finally {
    t?.();
  }
}
function* g2o() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function cG() {
  let o = e().current();
  if (o.initialHooksConfig === null) er(), e().store(r()), Iee();
  return o.initialHooksConfig;
}
function f2r() {
  return cG(), e().current().policyHooksConfig ?? "unreadable";
}
function m2r() {
  return cG(), e().current().userHooksConfig ?? (Dy() ? fe("userSettings")?.hooks ?? {} : {});
}
export {
  GJn,
  Oy,
  Ph,
  TQ,
  VJn,
  WJn,
  cG,
  dG,
  f2o,
  f2r,
  f2t,
  g2o,
  m2o,
  m2r,
  o4,
  o7s,
  oY,
  s7s,
  sb,
  ud,
  zJn
};
