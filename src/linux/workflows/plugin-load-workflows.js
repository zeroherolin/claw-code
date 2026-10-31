// linux/workflows/plugin-load-workflows.js — Claude Code 2.1.310（linux）模块 chunk-wab8bs58.js
import { Fs } from "../telemetry/anthropic-workspace-id.js";
import { Koe, Voe, br } from "./chunk-a1595c7e.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { epe, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { Qt } from "../settings/workflow-launch-exec.js";
import { mr } from "./chunk-5e65bb82.js";
import { wE, ows } from "./chunk-d9a07e26.js";
import { gv } from "../plugins/entry-refused.js";
import { Ie, $yn } from "../plugins/chunk-c198f87f.js";
import { Gte, fi } from "../core/conversation-engine.js";
import { Qk } from "../fs/reply-across-default-dirs.js";
import { QC, PAe } from "../context/org-memory-writes-setting-changed.js";
import { nQt } from "./built-in.js";
import { rtr } from "../shared/allow-bundled-skills.js";
import { hg, la } from "../shared/first-truncation.js";
import { join as E } from "path";
async function _(o, a, r, n, p) {
  let w = ie(), e;
  try {
    e = await w.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async (l) => {
    if (!(l.isFile() || l.isSymbolicLink())) return null;
    if (!l.name.endsWith(".js")) return null;
    return v(E(o, l.name), a, r, n, p);
  }))).filter((l) => l !== null);
}
async function v(o, a, r, n, p) {
  let w = ie();
  if (epe(w, o, p)) return null;
  try {
    let e = await Qk(w, o, QC);
    if (e === null) return t(`Plugin workflow ${o}: not a regular file or exceeds ${QC} bytes — skipping`, { level: "warn" }), null;
    let s = PAe(e), l = wE(s, { validateBody: false });
    if ("error" in l) return t(`Plugin workflow ${o} has invalid meta: ${l.error} — skipping`, { level: "warn" }), null;
    let u = `${a}:${l.meta.name}`;
    return { source: "plugin", plugin: r, pluginManifest: n, name: u, description: l.meta.description, whenToUse: l.meta.whenToUse, phases: l.meta.phases, script: s, filePath: o };
  } catch (e) {
    return t(`Failed to load workflow from ${o}: ${e}`, { level: "error" }), null;
  }
}
function P(o) {
  let a = Ie();
  return a.workflows ??= (async () => {
    let { enabled: r, errors: n } = await fi(o), p = [];
    if (n.length > 0) t(`Plugin loading errors: ${n.map((e) => gv(e)).join(", ")}`);
    let w = null;
    for (let e of r) {
      let s = /* @__PURE__ */ new Set(), l = p.length;
      if (e.workflowsPath) try {
        let u = await _(e.workflowsPath, e.name, e.source, e.manifest, s);
        if (p.push(...u), u.length > 0) t(`Loaded ${u.length} workflows from plugin ${e.name} default directory`);
      } catch (u) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${u}`, { level: "error" });
      }
      if (e.workflowsPaths) for (let u of e.workflowsPaths) try {
        let c = await ie().stat(u);
        if (c.isDirectory()) {
          let k = await _(u, e.name, e.source, e.manifest, s);
          if (p.push(...k), k.length > 0) t(`Loaded ${k.length} workflows from plugin ${e.name} custom path: ${u}`);
        } else if (c.isFile() && u.endsWith(".js")) {
          let k = await v(u, e.name, e.source, e.manifest, s);
          if (k) p.push(k), t(`Loaded workflow from plugin ${e.name} custom file: ${u}`);
        }
      } catch (d) {
        w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${u}: ${d}`, { level: "error" });
      }
      if (e.serverPluginId !== void 0) for (let u of p.slice(l)) u.serverPluginId = e.serverPluginId;
    }
    if (t(`Total plugin workflows loaded: ${p.length}`), w) m("plugin_load_workflows", w);
    else g("plugin_load_workflows");
    return p;
  })(), a.workflows;
}
import { join as h } from "path";
function W(o, a) {
  if (!a || ows(o.script)) return true;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse — keeping the ${a.source} copy`, { level: "warn" }), false;
}
function S(o) {
  let a = /* @__PURE__ */ new Map();
  for (let r of o) {
    if (!W(r, a.get(r.name))) continue;
    a.set(r.name, r);
  }
  return [...a.values()];
}
import { join as F } from "path";
function fOt() {
  return F(Le(), "workflows");
}
async function T(o, a) {
  try {
    return await Gte("workflows", o);
  } catch (r) {
    if (Fs(r)) return t(`loadWorkflowsDir: project-dir walk failed: ${r.code}`, { level: "error" }), a.walkFailed = true, [];
    throw r;
  }
}
async function D(o, a, r, n) {
  if (n !== void 0 && a === "userSettings") return L(n, o, r);
  let p = ie(), w;
  try {
    w = await p.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(w.map(async (s) => {
    if (!(s.isFile() || s.isSymbolicLink())) return null;
    if (!s.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(s.name)) r.nearMissExt++;
      return null;
    }
    let l = h(o, s.name), u;
    try {
      u = await p.readFileBytes(l, QC + 1);
    } catch {
      return r.skippedUnreadable++, null;
    }
    if (u.byteLength > QC) return t(`Workflow ${l} exceeds ${QC} bytes — skipping`, { level: "warn" }), r.skippedOversize++, null;
    let d = PAe(u.toString("utf-8")), c = wE(d, { validateBody: false });
    if ("error" in c) return t(`Workflow ${l} has invalid meta: ${c.error} — skipping`, { level: "warn" }), r.skippedInvalidMeta++, null;
    return { source: a, name: c.meta.name, description: c.meta.description, whenToUse: c.meta.whenToUse, phases: c.meta.phases, script: d, filePath: l };
  }))).filter((s) => s !== null);
}
async function L(o, a, r) {
  let n = [];
  switch ((await la((e) => o.listEntries({ namespace: "userConfigDir", dir: "workflows" }, e === void 0 ? void 0 : { cursor: e }), (e) => {
    for (let s of e) {
      if (s.kind !== "key" || s.key.namespace !== "userConfigDir") continue;
      let l = s.key.relPath.at(-1);
      if (l === void 0 || s.key.relPath.length !== 1) continue;
      if (!l.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(l)) r.nearMissExt++;
        continue;
      }
      n.push({ key: s.key, name: l });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      t(`User workflows listing of ${a} truncated at ${hg} pages — loading the ${n.length} workflow files seen`, { level: "warn" }), r.userListingTruncated = true;
      break;
  }
  return (await Promise.all(n.map(async ({ key: e, name: s }) => {
    let l = await o.read([{ key: e, offset: 0, length: QC + 1 }]);
    if (!l.ok) return t(`Workflow ${h(a, s)} could not be read through the storage backend (${l.error.code}) — skipping`, { level: "warn" }), r.skippedUnreadable++, null;
    let u = l.value.items[0];
    if (u === void 0 || !u.found) return r.skippedUnreadable++, null;
    let d = h(a, s);
    if (u.value.byteLength > QC) return t(`Workflow ${d} exceeds ${QC} bytes — skipping`, { level: "warn" }), r.skippedOversize++, null;
    let c = PAe(Buffer.from(u.value).toString("utf-8")), k = wE(c, { validateBody: false });
    if ("error" in k) return t(`Workflow ${d} has invalid meta: ${k.error} — skipping`, { level: "warn" }), r.skippedInvalidMeta++, null;
    return { source: "userSettings", name: k.meta.name, description: k.meta.description, whenToUse: k.meta.whenToUse, phases: k.meta.phases, script: c, filePath: d };
  }))).filter((e) => e !== null);
}
async function b(o, a) {
  let r = fOt(), n = { skippedInvalidMeta: 0, skippedOversize: 0, skippedUnreadable: 0, nearMissExt: 0, walkFailed: false, userListingTruncated: false }, p = await T(o, n), [w, ...e] = await Promise.all([Qt("userSettings") ? D(r, "userSettings", n, a) : Promise.resolve([]), ...Qt("projectSettings") ? p.map((d) => D(d, "projectSettings", n)) : []]), s = /* @__PURE__ */ new Map();
  for (let d of w) {
    if (!W(d, s.get(d.name))) continue;
    s.set(d.name, d);
  }
  for (let d = e.length - 1; d >= 0; d--) for (let c of e[d]) {
    if (!W(c, s.get(c.name))) continue;
    s.set(c.name, c);
  }
  let l = n.walkFailed && Qt("projectSettings"), u = n.skippedInvalidMeta + n.skippedOversize + n.skippedUnreadable;
  if (l || n.userListingTruncated || u > 0 || n.nearMissExt > 0) f("workflow_discover", l ? "project_dir_walk_failed" : n.userListingTruncated ? "user_listing_truncated" : n.skippedInvalidMeta > 0 ? "invalid_meta" : n.skippedOversize > 0 ? "oversize" : n.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", { found: s.size, skipped_invalid_meta: n.skippedInvalidMeta, skipped_oversize: n.skippedOversize, skipped_unreadable: n.skippedUnreadable, near_miss_ext: n.nearMissExt, ...n.userListingTruncated && { user_listing_truncated: true } });
  else g("workflow_discover", { found: s.size });
  return [...s.values()].sort((d, c) => d.name.localeCompare(c.name));
}
var nws = "CLAUDE_REMOTE_WORKFLOW_SCRIPT", yuo = "CLAUDE_REMOTE_WORKFLOW_ARGS", rws = "CLAUDE_WORKFLOW_NAME_ONLY";
function Oct() {
  return i.CLAUDE_WORKFLOW_NAME_ONLY;
}
function ZUe(o, a) {
  return Koe(br().allWorkflows, `${rtr()}:${Oct()}:${Voe(o)}`, () => M(o, a));
}
async function M(o, a) {
  if (mr("workflows") || Oct()) return [...nQt()];
  let [r, n] = await Promise.all([b(o, a), P(a)]), p = S(n), w = nQt(), e = new Map(w.map((y) => [y.name, y])), s = O(p, e);
  for (let y of s) e.set(y.name, y);
  let l = O(r, e), u = new Set(l.map((y) => y.name)), d = s.filter((y) => !u.has(y.name)), c = /* @__PURE__ */ new Set([...u, ...d.map((y) => y.name)]);
  return [...w.filter((y) => !c.has(y.name)), ...d, ...l];
}
function O(o, a) {
  return o.filter((r) => W(r, a.get(r.name)));
}
async function tQt(o, a, r) {
  return (await ZUe(a, r)).find((p) => p.name === o);
}
function xSr() {
  br().allWorkflows.clear(), $yn();
}
export {
  Oct,
  ZUe,
  fOt,
  nws,
  rws,
  tQt,
  xSr,
  yuo
};
