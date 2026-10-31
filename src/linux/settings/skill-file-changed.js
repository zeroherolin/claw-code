// linux/settings/skill-file-changed.js — Claude Code 2.1.310（linux）模块 chunk-xpkw9eye.js
import { FE } from "../fs/files-directories.js";
import { De } from "../fs/async-hooks.93b1.js";
import { L, ke, ao, Jf, no, J, Ol } from "../context/not-admin-owned.js";
import { b } from "../agents/third-party.js";
import { Qe, N, d } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Pm, bt, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { hr, oi } from "../git/utf-8.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { lne, sG, RP, FN, j$t, eDe, R1, mFs, MVn } from "../core/conversation-engine.js";
import { zG } from "../plugins/entry-refused.js";
import { z } from "../shared/chunk-be29de51.js";
import * as p from "path";
var se = 1e3, le = 500, ce = 300, ue = 2e3, Z = 3e4, de = 6e4, U = "<skill-watcher-idle-wake>", V = 1e4, fe = 2e3, K = true;
async function he(r) {
  let s = await eDe(ao(), r), n = ke(), k = n !== ao() ? await eDe(n, r) : [], h = /* @__PURE__ */ new Map();
  for (let m of [...s, ...k]) h.set(m.name, m.type === "prompt" ? m.contentHash ?? "" : "");
  return h;
}
function me(r) {
  let s = r?.stabilityThreshold ?? se, n = r?.pollInterval ?? le, k = r?.reloadDebounce ?? ce, h = r?.chokidarInterval ?? ue, m, v = r?.getFingerprint ?? (() => he(m)), _ = r?.now ?? Date.now, M = r?.lastInteractionTime ?? Jf, g = De(), y = sG.subscribe(() => g.emit()), e = null, c = null, P = null, G = false, C = [], D = 0, j = /* @__PURE__ */ new Set(), T = null, O = false, w = false, E = null, F = null, B;
  async function ne(i, o) {
    if (O || w || J()) return;
    if (O = true, B = i, m = o, !E) E = mFs(() => {
      RP(), g.emit();
    });
    let f = ++D, u = await ee(o);
    if (w || f !== D) return;
    if (C = u, C.length === 0) return;
    if (T = await v().catch(() => null), w || f !== D) return;
    t(`Watching for changes in skill/command directories: ${C.join(", ")}...`), e = H(h);
    let I = e;
    if (await new Promise((S) => I.once("ready", () => S())), K) P = setInterval(W, V), P.unref?.();
    F = bt(A);
  }
  function H(i) {
    let o = FE.watch(C, { persistent: true, ignoreInitial: true, depth: 2, awaitWriteFinish: { stabilityThreshold: s, pollInterval: n }, ignored: (f, u) => {
      if (u && !u.isFile() && !u.isDirectory() && !u.isSymbolicLink()) return true;
      if (f.split(/[/\\]/).some((I) => I === ".git")) return true;
      if (u?.isFile()) return !f.endsWith(".md");
      return false;
    }, ignorePermissionErrors: true, usePolling: K, interval: i, binaryInterval: i, atomic: true });
    return o.on("add", x), o.on("change", x), o.on("unlink", x), o.on("error", (f) => t(`[skills] watcher error: ${d(f)}`, { level: "warn" })), o;
  }
  function W() {
    if (w || !e) return;
    let i = _() - M() > de;
    if (i === G) return;
    G = i;
    let o = i ? Z : h;
    if (t(`[skills] ${i ? "idle" : "active"} — switching poll interval to ${o}ms`), e.close(), e = H(o), !i) q(U);
  }
  async function re() {
    if (!O || w) return;
    let i = await ee(m);
    if (w) return;
    let o = L([...C, ...i]);
    if (o.length === C.length) return;
    let f = ++D;
    if (C = o, t(`[skills] session moved — watching skill/command directories: ${C.join(", ")}`), e) e.close();
    e = H(G ? Z : h);
    let u = e, I = new Promise((S) => u.once("ready", () => S()));
    if (await Promise.race([I, X(fe, void 0, { unref: true })]), w || f !== D) return;
    if (K && P === null) P = setInterval(W, V), P.unref?.();
    F ??= bt(A);
  }
  function A() {
    if (w = true, F) F(), F = null;
    if (E) E(), E = null;
    if (P) clearInterval(P), P = null;
    let i = Promise.resolve();
    if (e) i = e.close(), e = null;
    if (c) clearTimeout(c), c = null;
    return j.clear(), y(), g.clear(), i;
  }
  function x(i) {
    t(`Detected skill change: ${i}`), a("tengu_skill_file_changed", { source: b("chokidar") }), q(i);
  }
  function q(i) {
    if (j.add(i), c) clearTimeout(c);
    c = setTimeout(async () => {
      c = null;
      let o = [...j];
      j.clear();
      let f = o.length === 1 && o[0] === U;
      if (!f) {
        let S = o.find((Y) => Y !== U) ?? o[0];
        if (await oe(S)) {
          t(`ConfigChange hook blocked skill reload (${o.length} paths)`);
          return;
        }
      }
      R1();
      let u = await v().catch(() => null);
      if (u === null) {
        FN(), lne(), Q();
        return;
      }
      if (T !== null && u.size === T.size && [...T].every(([S, Y]) => u.get(S) === Y) && f) {
        lne();
        return;
      }
      FN(), lne(), await MVn().catch((S) => t(`[skills] re-reading the moved directory's skills failed: ${d(S)}`, { level: "warn" })), T = u, Q();
    }, k);
  }
  function oe(i) {
    if (!B) return l(Error("skillChangeDetector: ConfigChange hook gate not wired")), Promise.resolve(true);
    return B("skills", i);
  }
  function Q() {
    try {
      g.emit();
    } catch (i) {
      for (let o of i instanceof AggregateError ? i.errors : [i]) l(Qe(N(o), "skillChangeDetector: subscriber threw during reload"));
    }
  }
  function ae() {
    if (w) return;
    y(), y = sG.subscribe(() => g.emit());
  }
  return { initialize: ne, dispose: A, rehome: re, [Symbol.asyncDispose]: A, subscribe: g.subscribe, rebridgeSkillsChanged: ae, _checkIdleTransitionForTest: W };
}
var Oae = me();
async function ee(r) {
  let s = ie(), n = [], k = j$t("userSettings", "skills");
  if (k) try {
    await s.stat(k), n.push(k);
  } catch {
  }
  if (k) {
    let e = p.join(k, zG);
    try {
      await s.stat(e), n.push(e);
    } catch {
    }
  }
  let h = j$t("userSettings", "commands");
  if (h) try {
    await s.stat(h), n.push(h);
  } catch {
  }
  let m = j$t("projectSettings", "skills");
  if (m) try {
    let e = p.resolve(m);
    if (z() && r !== void 0) {
      if (await R(r, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {
  }
  let v = hr(ke()), _ = oi(ke());
  if (no() === null && v && _ && v !== _) {
    let e = p.join(v, ".claude", "skills"), c = p.join(_, ".claude", "skills");
    if (!n.includes(e) && !await te(s, r, e) && await te(s, r, c)) n.push(c);
  }
  let M = j$t("projectSettings", "commands");
  if (M) try {
    let e = p.resolve(M);
    if (z() && r !== void 0) {
      if (await R(r, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {
  }
  let g = j$t("userSettings", "agents");
  if (g) try {
    await s.stat(g), n.push(g);
  } catch {
  }
  let y = j$t("projectSettings", "agents");
  if (y) try {
    let e = p.resolve(y);
    if (z() && r !== void 0) {
      if (await R(r, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {
  }
  for (let e of Ol()) {
    let c = p.join(e, ".claude", "skills");
    try {
      if (z() && r !== void 0) {
        if (await R(r, p.resolve(c))) n.push(c);
      } else await s.stat(c), n.push(c);
    } catch {
    }
  }
  return n;
}
async function R(r, s) {
  let n = await r.hostFiles.stat(Pm.workspace(s));
  return n.ok && n.value.kind !== "absent";
}
async function te(r, s, n) {
  try {
    if (z() && s !== void 0) return await R(s, n);
    return await r.stat(n), true;
  } catch {
    return false;
  }
}
export {
  Oae
};
