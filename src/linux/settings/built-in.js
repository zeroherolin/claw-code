// linux/settings/built-in.js — Claude Code 2.1.310（linux）模块 chunk-rve8yzwm.js
import { es, aie, Eee } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Mr } from "../models/claude-3-5-sonnet.js";
import { er, Qt } from "./workflow-launch-exec.js";
import { pe, KRe, pr, kb, NNe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { rhn } from "./chunk-10c0eeb6.js";
import { My } from "../shared/chunk-b09058c6.js";
function ud(o) {
  let t = pe("policySettings")?.strictPluginOnlyCustomization;
  if (t === true) return true;
  if (Array.isArray(t)) return t.includes(o);
  return false;
}
var p = /* @__PURE__ */ new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function VY(o) {
  return o !== void 0 && p.has(o);
}
function a(o) {
  return o;
}
function SXs() {
  return null;
}
function wXs(o) {
  return false;
}
function TQn(o) {
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
    if (t.initialHooksConfig = o, My()) t.userHooksConfig = pe("userSettings")?.hooks ?? {};
    else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = pe("policySettings")?.hooks ?? {};
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
  let o = pe("policySettings");
  if (o?.disableAllHooks === true) return {};
  if (o?.allowManagedHooksOnly === true || Mr()) return o?.hooks ?? {};
  if (ud("hooks")) return o?.hooks ?? {};
  let t = pr();
  if (t.disableAllHooks === true) {
    if (!AQn()) return o?.hooks ?? {};
    return m(f.filter(Qt).map((n) => pe(n)?.hooks));
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
function AQn() {
  return d() && !oS();
}
function $Wo() {
  return d() && oS();
}
function d() {
  if (!My() || Mr() || ud("hooks") || pr().disableAllHooks !== true) return false;
  return pe("policySettings")?.allowManagedHooksOnly !== true && f.filter(Qt).every((t) => pe(t)?.disableAllHooks !== true);
}
function Py() {
  return Mr() || _7();
}
function _7() {
  let o = pe("policySettings");
  if (o?.allowManagedHooksOnly === true) return true;
  if (pr().disableAllHooks === true && o?.disableAllHooks !== true) return true;
  return false;
}
function CQn() {
  return Mr() || pe("policySettings")?.allowManagedHooksOnly === true || oS();
}
function oS() {
  return NNe(kb()).length > 0 || aie() && KRe();
}
function RQn() {
  return CQn() || ud("hooks");
}
function Ph() {
  return pe("policySettings")?.disableAllHooks === true;
}
function X8() {
  return Ph() || _7();
}
function FWo() {
  e().store(r()), Eee();
}
function ez(o) {
  er(o), e().store(r()), Eee();
}
async function tGt(o) {
  let t = await rhn(o);
  try {
    e().store(r()), Eee();
  } finally {
    t?.();
  }
}
function* UWo() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function tz() {
  let o = e().current();
  if (o.initialHooksConfig === null) er(), e().store(r()), Eee();
  return o.initialHooksConfig;
}
function KWr() {
  return tz(), e().current().policyHooksConfig ?? "unreadable";
}
function VWr() {
  return tz(), e().current().userHooksConfig ?? (My() ? pe("userSettings")?.hooks ?? {} : {});
}
export {
  $Wo,
  AQn,
  CQn,
  FWo,
  KWr,
  Ph,
  Py,
  RQn,
  SXs,
  TQn,
  UWo,
  VWr,
  VY,
  X8,
  _7,
  ez,
  oS,
  tGt,
  tz,
  ud,
  wXs
};
