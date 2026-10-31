// linux/hooks/not-loaded.js — Claude Code 2.1.310（linux）模块 chunk-9xbceqjs.js
import { wn, ke, ao, WTn, bW } from "../context/not-admin-owned.js";
import { Lcr } from "../shared/chunk-52531bf1.js";
import { lqe } from "../mcp/allowed-warning.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ni, pot, Vs } from "../shell/invalid-type.js";
import { Ud } from "../plugins/skills-dir.js";
import { fe } from "../shared/async-hooks.5238.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { er } from "../settings/workflow-launch-exec.js";
import { I5r, J5, ZV } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { vp } from "../commands/claude-code.js";
import { _p, j8 } from "../plugins/entry-refused.js";
import { ure, wBt, w6n, fre } from "../plugins/claudeai-plugins-sync-enabled.js";
import { oS } from "../settings/built-in.js";
import { CJ, A3, vEo, uG, dKn, fgt, cRo, fRo, _Kn, Vge, fi } from "../core/conversation-engine.js";
import { Rn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { fQ } from "../context/team-memory-sync.js";
import { Ub } from "../tools/worktree-entered-existing.js";
import { qYe, qJr } from "../context/skill-host-catalog.js";
import { JYe } from "../shell/chunk-e2cdfabc.js";
import { t3n } from "../plugins/chunk-53f86049.js";
import { Ts } from "../shared/chunk-82eb5142.js";
import { Up } from "../shared/chunk-5584a49f.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { o, v, M, oe, T, u, me, B } from "../vendor/zod/string-format.js";
import { isAbsolute as K, sep as V } from "path";
function Hcr() {
  return ZV() || I5r(J5()) !== void 0;
}
function z(n, { accountListing: e, lastCompleteList: s }, t, r) {
  try {
    if (!w6n()) return "sync_not_armed";
    if (!fre() || bW()) return "sync_off";
    if (e === "refused") return "listing_refused";
    if (s === null || t === null) return "unknown";
    let a = _p(n), i = /* @__PURE__ */ new Set();
    for (let [d, h] of s.dirsById) for (let y of h) if (_p(Vge(y)) === a) i.add(d);
    if (i.size === 0) return "absent_from_listing";
    let c = t.find((d) => d.bucket === s.bucket && d.pluginId !== void 0 && i.has(d.pluginId));
    switch (c?.outcome) {
      case void 0:
        return "no_copy_at_load";
      case "held_back":
        return "held_back";
      case "not_loaded": {
        let d = pot(c.pluginName, ni);
        return r.some((h) => h.type === "synced-plugin-shadowed" && h.source === d) ? "local_copy_wins" : "not_loaded";
      }
      case "loaded":
        return "unknown";
    }
  } catch (a) {
    return Y("warn", "plugins_sync_absence_unreadable"), l(a), "unknown";
  }
}
var vis = "RunPluginHook", Eis = "RunPluginHookIf", UJr = p(() => u({ pluginId: o(), hookEvent: B(Ud), command: o(), args: T(o()).optional(), if: o().optional(), timeout: v().positive().optional(), jsonInput: o(), hookIndex: v().int().nonnegative().optional() })), G = p(() => u({ session_id: o().regex(dKn), cwd: o(), effort: u({ level: o().regex(dKn) }).optional() })), D = p(() => me(o(), oe())), J = /(?:^|_)(?:path|dir|cwd|directory)$/;
var q = /* @__PURE__ */ new Set(["file_path", "trigger_file_path", "parent_file_path"]), E = 1048576;
var F = "this machine's policy cannot be read for now", X = "this machine's policy would stop claude from starting", C = "The hook printed more than is passed on.";
function N(n, e) {
  if (qYe(n) <= E) return n;
  let s = { ...n, output: C, repairedInput: void 0 };
  if (qYe(s) <= E) return s;
  let t = { ...s, stderr: C, ...vEo(e, n.status) && { stdioClosedWithoutEnd: true } };
  if (qYe(t) <= E) return t;
  if (n.status !== 2 && !n.stdioIncomplete && !n.stdioClosedWithoutEnd && A3.has(e) && !fgt(e)) return { stdout: "", stderr: C, output: C, status: 1, spawnFailed: true, ...n.aborted && { aborted: true } };
  let r = { ...t, stdout: "", stdioClosedWithoutEnd: true }, a = { ...r, stderr: n.stderr };
  return n.stderr !== "" && qYe(a) <= E ? a : r;
}
var Qn = p(() => u({ stdout: o(), stderr: o(), output: o(), status: v(), aborted: M().optional(), spawnFailed: M().optional(), notStarted: M().optional(), stdioIncomplete: M().optional(), stdioClosedWithoutEnd: M().optional(), repairedInput: D().optional() })), Q = "this machine has not settled its plugins yet: ask again", Z = "no enabled plugin with that id", nn = "anthropic/pluginAbsence", on = "the plugin declares no such hook for that event here", W = "this machine keeps the plugin's hooks off (its settings or policy, how it was launched, or a folder nobody has trusted)", en = "this machine could not judge the hook's condition";
class S extends Lcr {
}
class b extends Error {
}
async function BJr(n, e, s) {
  let t = s.toolUseContext();
  return jJr(n, t, (r) => qJr(s, t.abortController.signal, r));
}
async function jJr(n, e, s) {
  let { storageV5: t, credentials: r } = e, a = e.abortController.signal, { pluginId: i, hookEvent: c, command: d, args: h, if: y, timeout: I, jsonInput: R, hookIndex: P } = UJr().parse(n);
  if (er(), j(i), vp(i)) throw Error("a built-in plugin's hooks are not run for another machine");
  let m = await A(i, t, r);
  if (m.plugin === void 0 && s !== void 0) {
    let g = await s(async () => (m = await A(i, t, r), m.plugin !== void 0));
    if (m.plugin === void 0) m = await A(i, t, r);
    let { accountListing: O, syncErrors: k } = e.session.pluginsSync;
    if (m.plugin === void 0 && (!g || O === "pending" || k.some((L) => {
      if (!("plugin" in L) || L.plugin === void 0) return false;
      try {
        return Vge(j8(L.plugin, V)) === i;
      } catch {
        return false;
      }
    }))) throw new b(Q);
  }
  let { plugin: f } = m;
  if (f === void 0) throw new S(Z, Vs(i) === ni ? { [nn]: z(i, e.session.pluginsSync, WTn(), m.warnings) } : void 0);
  U(f);
  let w = _Kn(f)[c].flatMap((g) => g.hooks).find((g) => g.type === "command" && g.command === d && wn(g.args, h) && (y === void 0 || g.if === y));
  if (w === void 0 || w.type !== "command") {
    let { errors: g } = await fi(t, r), O = f;
    if (g.some((k) => "plugin" in k && k.plugin === O.name)) throw Error("this machine could not read the plugin's hooks for now");
    throw new S(on);
  }
  let x = QCt(R);
  if (y !== void 0 && w.if && !await ZCt(w.if, x)) return { summary: "its condition does not hold", output: { stdout: "", stderr: "", output: "", status: 0 } };
  return a.throwIfAborted(), er(), j(f.source), U(f), eRt({ ...w, timeout: I ?? w.timeout }, c, x, P, e, { root: f.path, id: f.source });
}
function QCt(n) {
  let e = JSON.parse(n), s = G().parse(e), t = fe(), r = tn(D().parse(e), (d) => K(d) && Up(ao(), d, false));
  r.cwd = t;
  let i = (typeof r.tool_name === "string" ? Rn(JYe(true), r.tool_name) : void 0)?.coerceInput?.(r.tool_input)?.input, c = H(i) ? i : void 0;
  if (c) r.tool_input = c;
  return { envContext: fQ(s), cwd: t, stdin: r, repairedInput: c };
}
function tn({ scratchpad_dir: n, ...e }, s) {
  let t = { ...e, transcript_path: "" }, r = e.hook_event_name === "InstructionsLoaded" && (e.memory_type === "Project" || e.memory_type === "Local");
  for (let [a, i] of Object.entries(e)) if (J.test(a) && !(r && q.has(a) && typeof i === "string" && s(i))) t[a] = "";
  if (!t.file_path) t.globs = void 0;
  return t;
}
async function ZCt(n, { stdin: e, cwd: s }) {
  let t = lqe().safeParse(e), r = t.success ? await fRo(n, t.data, Ub(), s) : null;
  if (r === null) throw new S(en);
  return r;
}
async function eRt(n, e, { envContext: s, cwd: t, stdin: r, repairedInput: a }, i, { abortController: c, storageV5: d, credentials: h }, y, I = false, R) {
  let P = Ts(c.signal, { timeoutMs: n.timeout ? n.timeout * 1e3 : void 0 }), m = await cRo({ hook: n, hookEvent: e, jsonInput: _(r), envContext: s, project: { originalCwd: ke(), projectRoot: ao() }, cwd: t, hookIndex: i, signal: P.signal, plugin: y, skillRoot: R, managed: I, fitted: (f) => N(f, e), storageV5: d, credentials: h }).finally(P.cleanup);
  if (rn.has(e)) CJ();
  return { summary: `exit ${m.status}`, output: N({ ...m, repairedInput: a }, e) };
}
function WJr() {
  if (oS()) throw new b(F);
}
function j(n) {
  if (WJr(), XAn(), !t3n(n) || uG()) throw new S(W);
}
function XAn() {
  if (Hcr()) throw new b(oS() ? F : X);
}
function U(n) {
  if (Vs(n.source) === ni && ure()) {
    if (wBt()) throw new S(W);
    throw Error("this machine's settings hold account plugins for now");
  }
}
var rn = /* @__PURE__ */ new Set(["SessionStart", "Setup", "CwdChanged", "FileChanged"]);
async function A(n, e, s) {
  let { enabled: t, warnings: r } = await fi(e, s);
  return { plugin: Vs(n) === ni ? t.find((i) => Vs(i.source) === ni && Vge(i.path) === n) : t.find((i) => i.source === n), warnings: r };
}
export {
  BJr,
  Eis,
  Hcr,
  QCt,
  UJr,
  WJr,
  XAn,
  ZCt,
  eRt,
  jJr,
  vis
};
