// settings/mcp-tool.y5js.js — Claude Code 2.1.310 模块 chunk-y5js5hc5.js
import { VH, Gc } from "../shared/chunk-j79dwkaq.js";
import { Sr, Mr, uy, zAt } from "../models/claude-3-5-sonnet.21mz.js";
import { mr } from "../vendor/highlight/chunk-0c6r1zf7.js";
import { Qt } from "./workflow-launch-exec.t4r2.js";
import { fe, fr, Xm } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { ud, Oy, sb, Ph, oY } from "./built-in.5fzv.js";
import { Gre, Q0 } from "../plugins/not-found.2nbd.js";
import { OLr, MLr, CO, TO, Aln } from "../context/team-memory-sync.0s3j.js";
import { qxt, T8t, f5e } from "../context/tool-name.9mtw.js";
import { XO } from "../telemetry/stop-hook-removed.w16m.js";
function igr(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return { ...t, headers: Object.fromEntries(Object.keys(t.headers).map((o) => [o, ""])) };
}
function v(t) {
  let o = 0, n = fe(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) o += c.hooks?.length ?? 0;
  }
  return o;
}
function R(t) {
  switch (t.type) {
    case "command":
      return "Command";
    case "prompt":
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
    case "script":
      return t.file !== void 0 ? "Script file" : "Script";
    default:
      return "Definition";
  }
}
function E(t) {
  if (t.type === "script") return t.file ?? t.script ?? "";
  return CO(t);
}
function w(t) {
  if (t.source === "sessionHook") return !oY() && (!XO() || MLr(t.config));
  if (mr("hooks")) return false;
  if (t.source === "builtinHook") return true;
  if (Ph()) return false;
  if (t.source === "policySettings") return true;
  let o = Oy() || XO();
  if (t.source === "pluginHook") {
    let n = t.pluginName ?? "", s = XO() ? OLr(n) : Q0()?.has(n) === true;
    return !Mr() && (!o || s);
  }
  return !o && !ud("hooks");
}
function S(t) {
  let o = t.config, n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings", s = igr(o);
  return { event: t.event, matcher: Gc(t.matcher ?? ""), source: t.source, sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : Aln(t.source), ...t.pluginName !== void 0 && { pluginName: Gc(t.pluginName) }, type: o.type, displayText: TO(o), commandText: VH(E(o)), contentLabel: R(o), ..."if" in o && o.if !== void 0 && { condition: Gc(o.if) }, ..."timeout" in o && typeof o.timeout === "number" && { timeout: o.timeout }, ..."statusMessage" in o && o.statusMessage !== void 0 && o.statusMessage !== "" && { statusMessage: Gc(o.statusMessage) }, ..."once" in o && o.once === true && { runsOnce: true }, ...o.type === "command" && (o.async === true || o.asyncRewake === true) && { runsInBackground: true }, ...!w(t) && { disabled: true }, ...n && { editable: { matcher: t.matcher ?? "", config: s, ...s !== o && { headersRedacted: true } } } };
}
function h(t, o) {
  let n = [];
  for (let s of ["flagSettings", "policySettings"]) {
    let c = fe(s)?.hooks?.[t];
    if (!Array.isArray(c)) continue;
    for (let u of c) {
      if ((u.matcher ?? "") !== o) continue;
      for (let r of u.hooks) n.push(S({ event: t, config: r, matcher: o, source: s }));
    }
  }
  return n;
}
function yps(t) {
  let o = fe("policySettings"), n = o?.allowManagedHooksOnly === true, s = ud("hooks"), c = o?.disableAllHooks === true, u = fr()?.disableAllHooks === true, r = qxt([]), g = T8t(t, []), b = (e) => e.source === "sessionHook" || e.source === "pluginHook" || e.source === "builtinHook" || Qt(e.source), m = !n && !s, p = [], d = [];
  for (let e of Object.keys(r)) {
    let M = f5e(g, e), a = [], y = /* @__PURE__ */ new Set();
    for (let i of M) if (y.add(i), a.push(...(g[e]?.[i] ?? []).filter(b).map(S)), m) a.push(...h(e, i));
    if (m) {
      let i = /* @__PURE__ */ new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = fe(l)?.hooks?.[e];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) i.add(H);
        }
      }
      for (let l of [...i].sort()) a.push(...h(e, l));
    }
    if (a.length > 0) p.push({ name: e, summary: r[e].summary, supportsMatcher: r[e].matcherMetadata !== void 0 || a.some((i) => i.matcher !== ""), hookCount: a.length }), d.push(...a);
  }
  let f = Xm().errors.filter((e) => e.severity !== "warning").map((e) => ({ file: e.file, path: e.path, message: e.message }));
  return { events: p, hooks: d, eventCatalog: Object.keys(r).map((e) => ({ name: e, summary: r[e].summary, supportsMatcher: r[e].matcherMetadata !== void 0 || e === "FileChanged" })), policy: { disabledByPolicy: c, managedOnly: n, pluginOnly: s, allDisabled: u, policyHookCount: v("policySettings"), ...sb() && { policyUnreadable: true } }, ...Mr() && { safeMode: { managedHooksStillApply: Gre(), exitHint: uy() } }, ...Sr() && mr("hooks") && { bareMode: { exitHint: zAt() } }, ...f.length > 0 && { errors: f } };
}
export {
  igr,
  yps
};
