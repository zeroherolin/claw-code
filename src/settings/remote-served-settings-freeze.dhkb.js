// settings/remote-served-settings-freeze.dhkb.js — Claude Code 2.1.310 模块 chunk-dhkbjbzq.js
import { S, c } from "../agents/third-party.ydpb.js";
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { F } from "../context/not-admin-owned.ersa.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { bH, Bx, Voe } from "./global-config-and-gates.27xj.js";
import { HK, i } from "../shared/environment.9a41.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Nst } from "../context/tool-cgroup-exclude-classes.t1za.js";
import { t$ } from "../shell/chunk-gx93fya1.js";
import { ws, er } from "./workflow-launch-exec.t4r2.js";
import { pKt, lCt, xZ, OYo, Usr, MYo, HYo, DYo } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { ES } from "../mcp/allowed-warning.j2d4.js";
import { dG } from "./built-in.5fzv.js";
import { Gi } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { v3n, JWs, vi } from "../context/team-memory-sync.0s3j.js";
import { zwe } from "../fs/remote-tool-serving.kcs3.js";
import { gJ } from "./settings-change-staged.z8pz.js";
import { gr } from "../shared/chunk-7bt27r62.js";
import { homedir as B } from "os";
var z = "tengu_synchronous_bunny";
function C() {
  return gr(z, { safe: true });
}
var W = "served-settings-changed", D = "served-settings-changed-between", L = "served-settings-taken-as-found", G = "served-settings-record-unavailable", H = 5e3;
function j() {
  try {
    Voe();
    let s = HK("git", i.PATH ?? "");
    if (s === null || t$("git") === null) return false;
    let r = Nst(s, ["--version"], { reject: false, timeout: H, cwd: B(), stdin: "ignore" });
    if (r.exitCode !== 0 || !String(r.stdout).startsWith("git version")) return false;
    return !Bx({ onIndeterminate: "untracked" });
  } catch (s) {
    return l(N(s)), false;
  }
}
var K = { project: "projectSettings", local: "localSettings", legacy: "localSettings" };
function b(s) {
  try {
    er(), dG({ userLayer: "retain" });
  } catch (r) {
    l(N(r));
  }
  try {
    bH().reset();
  } catch (r) {
    l(N(r));
  }
  for (let r of s) try {
    Gi.notifyChange(r);
  } catch (a) {
    l(N(a));
  }
}
var P = 2e3, x = /* @__PURE__ */ new WeakSet();
function V(s, r, a) {
  let d = a, t = r, f = performance.now(), h = () => {
    queueMicrotask(() => b(["projectSettings", "localSettings"]));
    return;
  };
  return () => {
    let _ = MYo() !== t;
    if (!_ && performance.now() - f < P) return d;
    f = performance.now();
    try {
      let p = lCt(), u = v3n(s, p, xZ, "look", pKt);
      if (u.heldBack.filter((E) => !u.firstSeen.some((k) => k.slot === E)).length === 0) return h();
      t = p.key, d = Usr(u.seeds);
    } catch (p) {
      if (l(N(p)), _) return h();
    }
    return d;
  };
}
function gOn(s, r = zwe()) {
  if (!C()) return;
  let a = (e) => {
    try {
      g("remote_served_settings_freeze", e);
    } catch (o) {
      l(N(o));
    }
  }, d = (e, o) => {
    try {
      s?.(e, o);
    } catch (n) {
      l(N(n));
    }
  }, t, f, h, _ = false, p, u = true;
  try {
    u = JWs();
  } catch (e) {
    l(N(e));
  }
  try {
    let e = lCt();
    p = e.key, t = v3n(r, e, xZ, "engage", pKt, ES(j));
    let o = t.matching;
    h = Usr(t.sandboxTurnedOn ? v3n(r, e, xZ, "look", pKt).seeds : t.seeds), f = OYo({ files: t.seeds, onOwnWrite: (n, y) => {
      if (!o.has(n)) return;
      try {
        r.recordFile(n, gJ(y), "own_write"), _ = true;
      } catch (w) {
        throw o.delete(n), m("remote_served_settings_freeze", "own_write_not_recorded"), w;
      }
    } });
  } catch (e) {
    throw m("remote_served_settings_freeze", "engage_failed"), d(G, vi["served_settings.record_unavailable"]), e;
  }
  if (a({ op: S("engaged") }), t.firstSeen.length > 0) {
    let e = t.firstSeen.some((o) => o.widening);
    if (a({ op: S("baseline"), files_present: F(t.firstSeen, (o) => o.present), prior_serving: u, widening_keys: e }), u && e) d(L, vi["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) a({ op: S("held_back"), files: t.heldBack.length, unreadable: t.unreadable, hook_waiting: t.hookWaiting }), d(D, vi["served_settings.held_back"]);
  let T = ws(), E = x.has(T);
  if (f.began && (t.heldBack.length > 0 || E)) b(E ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map((e) => K[e])));
  x.add(T);
  let k = (e) => {
    a({ op: S("held_change"), when: c(e) }), d(W, vi["served_settings.changed_while_attached"]);
  }, v = false, R = (e) => {
    if (v) return;
    try {
      if (DYo() === "changed") v = true, k(e);
    } catch (o) {
      l(N(o)), v = true, k(e);
    }
  }, A = ws().onInvalidate(() => R("during_attach")), O = false, I = t.sandboxTurnedOn || !f.began && T.repoTierFreeze.tier("localSettings")?.settings?.sandbox?.enabled === true;
  return { hookWaiting: t.hookWaiting, sandboxTurnedOn: I, end: () => {
    if (O) return;
    O = true, A(), R("at_end");
    let e;
    try {
      let n = lCt(), y = v3n(r, n, xZ, "look", pKt);
      e = y.heldBack.length > 0 ? Usr(y.seeds) : void 0;
      try {
        r.noteServed(n.key, [...y.matching]);
      } catch (w) {
        l(N(w));
      }
    } catch (n) {
      l(N(n)), e = h;
    }
    let o;
    try {
      o = f.release().last;
    } catch (n) {
      l(N(n)), o = true;
    }
    if (!o) return;
    try {
      if (e !== void 0) HYo(e, V(r, p, e));
      else if (v || _ || t.heldBack.length > 0) b(["projectSettings", "localSettings"]);
    } catch (n) {
      l(N(n));
    }
  } };
}
export {
  gOn
};
