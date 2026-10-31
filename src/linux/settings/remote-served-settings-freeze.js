// linux/settings/remote-served-settings-freeze.js — Claude Code 2.1.310（linux）模块 chunk-kvgf3sc0.js
import { b, c } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { F } from "../context/not-admin-owned.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { hH, Fx, Foe } from "./global-config-and-gates.js";
import { kq, i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ist } from "../context/tool-cgroup-exclude-classes.js";
import { J$ } from "../shell/chunk-fea9c492.js";
import { Ss, er } from "./workflow-launch-exec.js";
import { ZVt, eTt, wZ, t9o, Esr, n9o, r9o, o9o } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { wb } from "../mcp/allowed-warning.js";
import { ez } from "./built-in.js";
import { Gi } from "../context/org-memory-writes-setting-changed.js";
import { mYn, AWs, Ei } from "../context/team-memory-sync.js";
import { Uwe } from "../fs/remote-tool-serving.js";
import { aQ } from "./settings-change-staged.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { homedir as B } from "os";
var z = "tengu_synchronous_bunny";
function C() {
  return gr(z, { safe: true });
}
var W = "served-settings-changed", D = "served-settings-changed-between", L = "served-settings-taken-as-found", G = "served-settings-record-unavailable", H = 5e3;
function j() {
  try {
    Foe();
    let s = kq("git", i.PATH ?? "");
    if (s === null || J$("git") === null) return false;
    let r = Ist(s, ["--version"], { reject: false, timeout: H, cwd: B(), stdin: "ignore" });
    if (r.exitCode !== 0 || !String(r.stdout).startsWith("git version")) return false;
    return !Fx({ onIndeterminate: "untracked" });
  } catch (s) {
    return l(N(s)), false;
  }
}
var K = { project: "projectSettings", local: "localSettings", legacy: "localSettings" };
function w(s) {
  try {
    er(), ez({ userLayer: "retain" });
  } catch (r) {
    l(N(r));
  }
  try {
    hH().reset();
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
  let d = a, t = r, f = performance.now(), u = () => {
    queueMicrotask(() => w(["projectSettings", "localSettings"]));
    return;
  };
  return () => {
    let h = n9o() !== t;
    if (!h && performance.now() - f < P) return d;
    f = performance.now();
    try {
      let p = eTt(), S = mYn(s, p, wZ, "look", ZVt);
      if (S.heldBack.filter((T) => !S.firstSeen.some((E) => E.slot === T)).length === 0) return u();
      t = p.key, d = Esr(S.seeds);
    } catch (p) {
      if (l(N(p)), h) return u();
    }
    return d;
  };
}
function tOn(s, r = Uwe()) {
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
  }, t, f, u, h = false, p, S = true;
  try {
    S = AWs();
  } catch (e) {
    l(N(e));
  }
  try {
    let e = eTt();
    p = e.key, t = mYn(r, e, wZ, "engage", ZVt, wb(j));
    let o = t.matching;
    u = Esr(t.sandboxTurnedOn ? mYn(r, e, wZ, "look", ZVt).seeds : t.seeds), f = t9o({ files: t.seeds, onOwnWrite: (n, _) => {
      if (!o.has(n)) return;
      try {
        r.recordFile(n, aQ(_), "own_write"), h = true;
      } catch (v) {
        throw o.delete(n), m("remote_served_settings_freeze", "own_write_not_recorded"), v;
      }
    } });
  } catch (e) {
    throw m("remote_served_settings_freeze", "engage_failed"), d(G, Ei["served_settings.record_unavailable"]), e;
  }
  if (a({ op: b("engaged") }), t.firstSeen.length > 0) {
    let e = t.firstSeen.some((o) => o.widening);
    if (a({ op: b("baseline"), files_present: F(t.firstSeen, (o) => o.present), prior_serving: S, widening_keys: e }), S && e) d(L, Ei["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) a({ op: b("held_back"), files: t.heldBack.length, unreadable: t.unreadable, hook_waiting: t.hookWaiting }), d(D, Ei["served_settings.held_back"]);
  let y = Ss(), T = x.has(y);
  if (f.began && (t.heldBack.length > 0 || T)) w(T ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map((e) => K[e])));
  x.add(y);
  let E = (e) => {
    a({ op: b("held_change"), when: c(e) }), d(W, Ei["served_settings.changed_while_attached"]);
  }, k = false, R = (e) => {
    if (k) return;
    try {
      if (o9o() === "changed") k = true, E(e);
    } catch (o) {
      l(N(o)), k = true, E(e);
    }
  }, A = Ss().onInvalidate(() => R("during_attach")), O = false, I = t.sandboxTurnedOn || !f.began && y.repoTierFreeze.tier("localSettings")?.settings?.sandbox?.enabled === true;
  return { hookWaiting: t.hookWaiting, sandboxTurnedOn: I, end: () => {
    if (O) return;
    O = true, A(), R("at_end");
    let e;
    try {
      let n = eTt(), _ = mYn(r, n, wZ, "look", ZVt);
      e = _.heldBack.length > 0 ? Esr(_.seeds) : void 0;
      try {
        r.noteServed(n.key, [..._.matching]);
      } catch (v) {
        l(N(v));
      }
    } catch (n) {
      l(N(n)), e = u;
    }
    let o;
    try {
      o = f.release().last;
    } catch (n) {
      l(N(n)), o = true;
    }
    if (!o) return;
    try {
      if (e !== void 0) r9o(e, V(r, p, e));
      else if (k || h || t.heldBack.length > 0) w(["projectSettings", "localSettings"]);
    } catch (n) {
      l(N(n));
    }
  } };
}
export {
  tOn
};
