// git/remote-workspace-diff-fetch.6qej.js — Claude Code 2.1.310 模块 chunk-6qej4ndt.js
import { ao } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { wZo } from "./utf-8.vh7e.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { tr, ET } from "../shared/async-hooks.m2fg.js";
import { pl, Re, ue, Na, ch } from "../settings/global-config-and-gates.27xj.js";
import { cYr } from "../fs/utf-8.fmbx.js";
import { lc } from "../fs/async-hooks.2k4e.js";
import { ND, NB, FKn, E$t, v1s, v$t, FB, jKn, c2e } from "./bridge-child-tool-diff.m7a8.js";
import { Ttt } from "../auth/env-quad.nmae.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { i0, vk } from "../shared/chunk-h1g05r4t.js";
import { K } from "../shared/chunk-p82eferg.js";
import { W0e } from "../shared/chunk-rmqyvpf6.js";
import { Es } from "../shared/chunk-y284hsxm.js";
import { n, Yt } from "../telemetry/render-glyph-cardinality.7car.js";
import { Wd } from "../shared/chunk-vx3s7x6j.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { are, Eyt } from "../shared/cc-plugin-diff.rahj.js";
import { Gt, Se, P, te, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
import { resolve as bt, sep as be, win32 as ke } from "path";
j();
var V = () => ({ isSidebarOn: c2e(), isOwnedByPlugin: jKn() });
function nno() {
  let [t, r] = y(V), o = Wd(), s = K((i) => i.panelFileView !== null);
  return P(() => {
    let i = () => r((u) => {
      let S = V();
      return u.isSidebarOn === S.isSidebarOn && u.isOwnedByPlugin === S.isOwnedByPlugin ? u : S;
    });
    i();
    let a = pl(i), f = W0e(i);
    return () => {
      a(), f();
    };
  }, [o]), t.isSidebarOn && (s || !t.isOwnedByPlugin);
}
j();
var q = 400, _mr = 150, de = 2e3, I = { hunks: /* @__PURE__ */ new Map(), skippedLarge: /* @__PURE__ */ new Set() };
async function z(t, r, o) {
  try {
    let s = await FKn(t, o, r);
    if (o?.aborted) return null;
    if (s === null) return p("repl_diff_read", "git_diff_failed"), null;
    let i = s.stats.filesCount === 0 ? I : await v1s(o, E$t(s));
    if (o?.aborted) return null;
    if (i === null) p("repl_diff_read", "git_hunks_failed");
    else g("repl_diff_read");
    return { result: s, hunks: i };
  } catch (s) {
    if (o?.aborted) return null;
    return l(s), p("repl_diff_read", "git_diff_threw"), null;
  }
}
class X {
  #e = null;
  set(t, r, o, s) {
    this.#e = { baseMode: t, refreshKey: r, round: o, at: s };
  }
  take(t, r) {
    let o = this.#e;
    if (o === null) return;
    if (r - o.at > de) {
      this.#e = null;
      return;
    }
    if (o.baseMode !== t) return;
    return this.#e = null, { round: o.round, refreshKey: o.refreshKey };
  }
  get isPrimed() {
    return this.#e !== null;
  }
}
var Y = new W(() => new X());
async function xPn(t, r, o, s) {
  let i = await z(t, r, s);
  if (s?.aborted) return;
  Y.of(t).set(r, o, i && { result: i.result, baseMode: r, hunks: i.hunks ?? I }, Date.now());
}
function Smr(t = 0, r = true, o = "auto") {
  let i = Se(vk)?.setTimeout ?? i0, a = Es(), [f] = y(() => r ? Y.of(a).take(o, Date.now()) : void 0), [u, S] = y(f?.round ?? null), [k, M] = y(f === void 0), L = A(f !== void 0), U = A(f !== void 0 && f.refreshKey === t), [se, ae] = y(0);
  return P(() => wZo(() => ae((R) => R + 1)), []), P(() => {
    if (!r) return;
    if (U.current) {
      U.current = false;
      return;
    }
    let R = false, C = new AbortController();
    async function G() {
      let D = await z(a, o, C.signal);
      if (R) return;
      if (D !== null) {
        let h = E$t(D.result);
        S((x) => ({ result: D.result, baseMode: o, hunks: D.hunks ?? (x !== null && E$t(x.result) === h ? x.hunks : I) }));
      }
      L.current = true, M(false);
    }
    let _ = i(G, L.current || t !== 0 ? _mr : 0);
    return () => {
      R = true, _(), C.abort();
    };
  }, [t, r, se, o, a]), te(() => {
    if (!u) return { stats: null, files: [], hunks: /* @__PURE__ */ new Map(), loading: r && k, source: { kind: "working-tree" }, baseMode: o };
    let { stats: R, perFileStats: C, source: G } = u.result, _ = [];
    for (let [D, h] of C) {
      let x = h.isUntracked, N = u.hunks.skippedLarge.has(D), fe = h.added + h.removed, le = !N && !h.isBinary && fe > q;
      _.push({ path: D, linesAdded: h.added, linesRemoved: h.removed, isBinary: h.isBinary, isLargeFile: N, isTruncated: le, isUntracked: x, preSession: h.preSession });
    }
    return _.sort((D, h) => D.path.localeCompare(h.path)), { stats: R, files: _, hunks: u.hunks.hunks, loading: false, source: G, baseMode: u.baseMode, noCommits: u.result.noCommits };
  }, [u, k, r, o]);
}
function T(t) {
  return { stats: null, files: [], hunks: /* @__PURE__ */ new Map(), loading: t, source: { kind: "working-tree" }, baseMode: "auto" };
}
function pe(t) {
  let r = new Set(t.skippedLarge), o = new Set(t.restricted), s = t.perFileStats.map((i) => {
    let a = r.has(i.path);
    return { path: i.path, linesAdded: i.added, linesRemoved: i.removed, isBinary: i.isBinary, isLargeFile: a, isTruncated: !a && !i.isBinary && i.added + i.removed > q, isUntracked: i.isUntracked, isRestricted: o.has(i.path) };
  }).sort((i, a) => i.path.localeCompare(a.path));
  return { stats: t.stats, files: s, hunks: new Map(t.hunks.map((i) => [i.path, i.hunks])), loading: false, source: t.source, baseMode: "branch-point" };
}
function ce(t) {
  let [r, o] = y(() => ({ data: T(t), notice: null }));
  return P(() => {
    if (!t) return;
    let s = tr();
    if (!s || !ET("controlChannel")) {
      p("remote_workspace_diff_fetch", "no_channel"), o({ data: T(false), notice: "Workspace changes aren't available over this connection — showing per-turn changes only" });
      return;
    }
    let i = false;
    return s.sendControlRequest({ subtype: "get_workspace_diff" }).then((a) => {
      if (i) return;
      g("remote_workspace_diff_fetch"), o({ data: a.diff ? pe(a.diff) : T(false), notice: null });
    }).catch((a) => {
      if (i) return;
      let f = d(a), u = f.includes("Unsupported control request subtype") ? "unsupported_subtype" : NB(a);
      if (u === "unsupported_subtype") p("remote_workspace_diff_fetch", u);
      else m("remote_workspace_diff_fetch", u);
      o({ data: T(false), notice: u === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes — showing per-turn changes only" : a instanceof ND ? "Timed out fetching workspace changes — showing per-turn changes only" : u === "disconnected" || u === "not_connected" ? "Lost the connection to the cloud session — showing per-turn changes only" : u === "not_delivered" ? "Couldn't reach the cloud session — showing per-turn changes only" : `Couldn't fetch workspace changes: ${f}` });
    }), () => {
      i = true;
    };
  }, [t]), r;
}
function Xto(t) {
  let r = Smr(0, !t), o = ce(t);
  return t ? o : { data: r, notice: null };
}
class J {
  lastLoggedSessionId = null;
  autoOpenPending = false;
}
var t8t = new W(() => new J()), Fus = new W(() => ({ lastLoggedSessionId: null })), PPn = new W(() => Ee({ cycled: false }, (t) => {
  t.cycled = false;
}));
var me = "The diff panel shows git changes — the current directory isn’t in a git repository", Jto = "The diff panel isn’t available right now — run /diff again to see your changes";
function Qto(t) {
  t8t.of(t).autoOpenPending = true;
}
function $us(t) {
  let r = t8t.of(t), o = r.autoOpenPending;
  return r.autoOpenPending = false, o;
}
function Q(t) {
  t8t.of(t).autoOpenPending = false;
}
function IPn() {
  return v$t();
}
function bmr({ enabled: t, fullscreen: r, columns: o, isThinClient: s, isMainFocused: i, hasGitRepo: a }) {
  return t && r && !s && i && o >= are && a;
}
function Zto(t) {
  let r = ue().diffSidebarOpen;
  if (r === false) return false;
  return t >= (r === true ? are : Eyt) && IPn();
}
function Z(t, r, o, s) {
  let i = o === "diff" ? "convo" : "diff";
  Q(t), r((f) => f.replTab === i && f.panelFileView === null ? f : { ...f, replTab: i, panelFileView: null });
  let a = i === "diff";
  if (ue().diffSidebarOpen !== a) Re((f) => ({ ...f, diffSidebarOpen: a }), s);
  return g("repl_tab_switch", { tab: c(i) }), i;
}
async function he(t, r, o, s, i) {
  if (await xPn(t, n8t(), s), r() === "diff") return;
  Z(t, o, "convo", i);
}
var ge = "Diff panel shown", De = "Diff panel hidden", Uus = 2e3;
function Bus(t) {
  switch (t.status) {
    case "shown":
      return ge;
    case "hidden":
      return De;
    case "refused":
      return t.text;
  }
}
function OPn({ host: t, getReplTab: r, setAppState: o, columns: s, trackSequence: i, storageV5: a }) {
  if (r() === "diff") return Z(t, o, "diff", a), { status: "hidden" };
  if (!c2e()) return { status: "refused", reason: "unavailable", text: Jto };
  if (!IPn()) return { status: "refused", reason: "no-git", text: me };
  if (s < are) return { status: "refused", reason: "too-narrow", text: `Resize your terminal to at least ${are} columns to show the diff panel` };
  return { status: "shown", settled: he(t, r, o, i, a).catch(l) };
}
function dUe(t, r) {
  Q(t), r((o) => o.replTab === "convo" && o.panelFileView === null ? o : { ...o, replTab: "convo", panelFileView: null });
}
function eno(t, r, o) {
  if (dUe(t, r), ue().diffSidebarOpen !== false) Re((s) => ({ ...s, diffSidebarOpen: false }), o);
  g("repl_tab_switch", { tab: c("convo") });
}
var v = ["session", "uncommitted", "branch"];
function n8t() {
  let t = Na().diffSidebarBaseMode;
  return t === "uncommitted" || t === "branch" ? t : "session";
}
function tno(t, r) {
  let o = v[(v.indexOf(t) + 1) % v.length] ?? "session";
  return ch((s) => s.diffSidebarBaseMode === o ? s : { ...s, diffSidebarBaseMode: o }, r), g("repl_diff_base_switch", { mode: c(o) }), o;
}
function r8t(t) {
  return Ttt(we(t));
}
function we(t) {
  let r = ao(), o = O() === "windows", s = o ? ke.sep : be, i = (S) => o ? S.replaceAll("/", s).toLowerCase() : S, a = i(t), f = i(r);
  if (a.length !== t.length || f.length !== r.length) return t;
  if (a === f) return "";
  let u = f.endsWith(s) ? f : f + s;
  return a.startsWith(u) ? t.slice(u.length) : t;
}
j();
import { homedir as ne } from "os";
import { isAbsolute as _e, sep as Pe } from "path";
import { isAbsolute as ye, win32 as ee } from "path";
function H(t) {
  if (O() === "windows") return ee.isAbsolute(t) && ee.parse(t).root.length > 1;
  return ye(t);
}
var MPn = Gt(null);
function hy(t) {
  let a = w(9), { filePath: r, children: o } = t, s = Se(MPn), i = o ?? r;
  if (E(r) || typeof i === "string" && E(i)) {
    let f2;
    if (a[0] === b) f2 = e(n, { dimColor: true, children: cYr }), a[0] = f2;
    else f2 = a[0];
    return f2;
  }
  let f;
  if (a[1] !== s || a[2] !== i) f = s !== null && typeof i === "string" ? lc(i, s) : i, a[1] = s, a[2] = i, a[3] = f;
  else f = a[3];
  let u = f, S;
  if (a[4] !== r) S = H(r) ? FB(r) : null, a[4] = r, a[5] = S;
  else S = a[5];
  let k = S, M;
  if (a[6] !== u || a[7] !== k) M = k === null ? e(n, { children: u }) : e(Yt, { url: k, children: u }), a[6] = u, a[7] = k, a[8] = M;
  else M = a[8];
  return M;
}
function E(t) {
  let r = Ae(t);
  return _e(r) ? r8t(r) : Ttt(r);
}
function Ae(t) {
  if (t === "~") return ne();
  return t.startsWith("~" + Pe) ? ne() + t.slice(1) : t;
}
export {
  $us,
  Bus,
  Fus,
  IPn,
  Jto,
  MPn,
  OPn,
  PPn,
  Qto,
  Smr,
  Uus,
  Xto,
  Zto,
  _mr,
  bmr,
  dUe,
  eno,
  hy,
  n8t,
  nno,
  r8t,
  t8t,
  tno,
  xPn
};
