// darwin/hooks/not-loaded.js — Claude Code 2.1.310（darwin）模块 chunk-fp1v73am.js
import { wn, ke, ao, iTn, RW } from "../context/not-admin-owned.js";
import { Qcr } from "../shared/chunk-52531bf1.js";
import { hKe } from "../mcp/allowed-warning.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ni, bot, Ks } from "../shell/invalid-type.js";
import { Ud } from "../plugins/skills-dir.js";
import { pe } from "../shared/async-hooks.5238.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { er } from "../settings/workflow-launch-exec.js";
import { e5r, a5, dK } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { wf } from "../commands/claude-code.js";
import { yf, X8 } from "../plugins/entry-refused.js";
import { bre, M1t, B5n, wre } from "../plugins/claudeai-plugins-sync-enabled.js";
import { sb } from "../settings/built-in.js";
import { D7, L9, Jvo, w2, P6n, Sgt, $Ro, BRo, $6n, Qge, pi } from "../core/conversation-engine.js";
import { Rn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { bJ } from "../context/team-memory-sync.js";
import { BS } from "../tools/worktree-entered-existing.js";
import { n4e, hJr } from "../context/skill-host-catalog.js";
import { o4e } from "../shell/chunk-e2cdfabc.js";
import { P9n } from "../plugins/chunk-53f86049.js";
import { Cs } from "../shared/chunk-82eb5142.js";
import { Uf } from "../shared/chunk-5584a49f.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { o, E, M, oe, C, u, me, B } from "../vendor/zod/string-format.js";
import { isAbsolute as K, sep as V } from "path";
function Xcr() {
  return dK() || e5r(a5()) !== void 0;
}
function z(n, { accountListing: e, lastCompleteList: s }, t, r) {
  try {
    if (!B5n()) return "sync_not_armed";
    if (!wre() || RW()) return "sync_off";
    if (e === "refused") return "listing_refused";
    if (s === null || t === null) return "unknown";
    let a = yf(n), i = /* @__PURE__ */ new Set();
    for (let [d, h] of s.dirsById) for (let y of h) if (yf(Qge(y)) === a) i.add(d);
    if (i.size === 0) return "absent_from_listing";
    let c = t.find((d) => d.bucket === s.bucket && d.pluginId !== void 0 && i.has(d.pluginId));
    switch (c?.outcome) {
      case void 0:
        return "no_copy_at_load";
      case "held_back":
        return "held_back";
      case "not_loaded": {
        let d = bot(c.pluginName, ni);
        return r.some((h) => h.type === "synced-plugin-shadowed" && h.source === d) ? "local_copy_wins" : "not_loaded";
      }
      case "loaded":
        return "unknown";
    }
  } catch (a) {
    return Y("warn", "plugins_sync_absence_unreadable"), l(a), "unknown";
  }
}
var Zis = "RunPluginHook", eas = "RunPluginHookIf", lJr = f(() => u({ pluginId: o(), hookEvent: B(Ud), command: o(), args: C(o()).optional(), if: o().optional(), timeout: E().positive().optional(), jsonInput: o(), hookIndex: E().int().nonnegative().optional() })), G = f(() => u({ session_id: o().regex(P6n), cwd: o(), effort: u({ level: o().regex(P6n) }).optional() })), U = f(() => me(o(), oe())), J = /(?:^|_)(?:path|dir|cwd|directory)$/;
var q = /* @__PURE__ */ new Set(["file_path", "trigger_file_path", "parent_file_path"]), b = 1048576;
var F = "this machine's policy cannot be read for now", X = "this machine's policy would stop claude from starting", I = "The hook printed more than is passed on.";
function N(n, e) {
  if (n4e(n) <= b) return n;
  let s = { ...n, output: I, repairedInput: void 0 };
  if (n4e(s) <= b) return s;
  let t = { ...s, stderr: I, ...Jvo(e, n.status) && { stdioClosedWithoutEnd: true } };
  if (n4e(t) <= b) return t;
  if (n.status !== 2 && !n.stdioIncomplete && !n.stdioClosedWithoutEnd && L9.has(e) && !Sgt(e)) return { stdout: "", stderr: I, output: I, status: 1, spawnFailed: true, ...n.aborted && { aborted: true } };
  let r = { ...t, stdout: "", stdioClosedWithoutEnd: true }, a = { ...r, stderr: n.stderr };
  return n.stderr !== "" && n4e(a) <= b ? a : r;
}
var Qn = f(() => u({ stdout: o(), stderr: o(), output: o(), status: E(), aborted: M().optional(), spawnFailed: M().optional(), notStarted: M().optional(), stdioIncomplete: M().optional(), stdioClosedWithoutEnd: M().optional(), repairedInput: U().optional() })), Q = "this machine has not settled its plugins yet: ask again", Z = "no enabled plugin with that id", nn = "anthropic/pluginAbsence", on = "the plugin declares no such hook for that event here", W = "this machine keeps the plugin's hooks off (its settings or policy, how it was launched, or a folder nobody has trusted)", en = "this machine could not judge the hook's condition";
class S extends Qcr {
}
class H extends Error {
}
async function dJr(n, e, s) {
  let t = s.toolUseContext();
  return cJr(n, t, (r) => hJr(s, t.abortController.signal, r));
}
async function cJr(n, e, s) {
  let { storageV5: t, credentials: r } = e, a = e.abortController.signal, { pluginId: i, hookEvent: c, command: d, args: h, if: y, timeout: R, jsonInput: O, hookIndex: P } = lJr().parse(n);
  if (er(), j(i), wf(i)) throw Error("a built-in plugin's hooks are not run for another machine");
  let p = await x(i, t, r);
  if (p.plugin === void 0 && s !== void 0) {
    let g = await s(async () => (p = await x(i, t, r), p.plugin !== void 0));
    if (p.plugin === void 0) p = await x(i, t, r);
    let { accountListing: L, syncErrors: k } = e.session.pluginsSync;
    if (p.plugin === void 0 && (!g || L === "pending" || k.some((A) => {
      if (!("plugin" in A) || A.plugin === void 0) return false;
      try {
        return Qge(X8(A.plugin, V)) === i;
      } catch {
        return false;
      }
    }))) throw new H(Q);
  }
  let { plugin: m } = p;
  if (m === void 0) throw new S(Z, Ks(i) === ni ? { [nn]: z(i, e.session.pluginsSync, iTn(), p.warnings) } : void 0);
  v(m);
  let w = $6n(m)[c].flatMap((g) => g.hooks).find((g) => g.type === "command" && g.command === d && wn(g.args, h) && (y === void 0 || g.if === y));
  if (w === void 0 || w.type !== "command") {
    let { errors: g } = await pi(t, r), L = m;
    if (g.some((k) => "plugin" in k && k.plugin === L.name)) throw Error("this machine could not read the plugin's hooks for now");
    throw new S(on);
  }
  let T = aRt(O);
  if (y !== void 0 && w.if && !await lRt(w.if, T)) return { summary: "its condition does not hold", output: { stdout: "", stderr: "", output: "", status: 0 } };
  return a.throwIfAborted(), er(), j(m.source), v(m), dRt({ ...w, timeout: R ?? w.timeout }, c, T, P, e, { root: m.path, id: m.source });
}
function aRt(n) {
  let e = JSON.parse(n), s = G().parse(e), t = pe(), r = tn(U().parse(e), (d) => K(d) && Uf(ao(), d, false));
  r.cwd = t;
  let i = (typeof r.tool_name === "string" ? Rn(o4e(true), r.tool_name) : void 0)?.coerceInput?.(r.tool_input)?.input, c = D(i) ? i : void 0;
  if (c) r.tool_input = c;
  return { envContext: bJ(s), cwd: t, stdin: r, repairedInput: c };
}
function tn({ scratchpad_dir: n, ...e }, s) {
  let t = { ...e, transcript_path: "" }, r = e.hook_event_name === "InstructionsLoaded" && (e.memory_type === "Project" || e.memory_type === "Local");
  for (let [a, i] of Object.entries(e)) if (J.test(a) && !(r && q.has(a) && typeof i === "string" && s(i))) t[a] = "";
  if (!t.file_path) t.globs = void 0;
  return t;
}
async function lRt(n, { stdin: e, cwd: s }) {
  let t = hKe().safeParse(e), r = t.success ? await BRo(n, t.data, BS(), s) : null;
  if (r === null) throw new S(en);
  return r;
}
async function dRt(n, e, { envContext: s, cwd: t, stdin: r, repairedInput: a }, i, { abortController: c, storageV5: d, credentials: h }, y, R = false, O) {
  let P = Cs(c.signal, { timeoutMs: n.timeout ? n.timeout * 1e3 : void 0 }), p = await $Ro({ hook: n, hookEvent: e, jsonInput: _(r), envContext: s, project: { originalCwd: ke(), projectRoot: ao() }, cwd: t, hookIndex: i, signal: P.signal, plugin: y, skillRoot: O, managed: R, fitted: (m) => N(m, e), storageV5: d, credentials: h }).finally(P.cleanup);
  if (rn.has(e)) D7();
  return { summary: `exit ${p.status}`, output: N({ ...p, repairedInput: a }, e) };
}
function uJr() {
  if (sb()) throw new H(F);
}
function j(n) {
  if (uJr(), pAn(), !P9n(n) || w2()) throw new S(W);
}
function pAn() {
  if (Xcr()) throw new H(sb() ? F : X);
}
function v(n) {
  if (Ks(n.source) === ni && bre()) {
    if (M1t()) throw new S(W);
    throw Error("this machine's settings hold account plugins for now");
  }
}
var rn = /* @__PURE__ */ new Set(["SessionStart", "Setup", "CwdChanged", "FileChanged"]);
async function x(n, e, s) {
  let { enabled: t, warnings: r } = await pi(e, s);
  return { plugin: Ks(n) === ni ? t.find((i) => Ks(i.source) === ni && Qge(i.path) === n) : t.find((i) => i.source === n), warnings: r };
}
export {
  Xcr,
  Zis,
  aRt,
  cJr,
  dJr,
  dRt,
  eas,
  lJr,
  lRt,
  pAn,
  uJr
};
