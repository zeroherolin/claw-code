// mcp/cobalt-plinth-yew.bkr0.js — Claude Code 2.1.310 模块 chunk-bkr0w26r.js
import { k } from "../settings/global-config-and-gates.27xj.js";
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { i, Zn } from "../shared/environment.9a41.js";
import { Nc } from "../remote/local-agent.we9a.js";
import { Vo } from "./claude-browser.hdf6.js";
import { lai } from "../context/fetch-project-timeline.g27d.js";
import { Nr } from "./always-allow.9m89.js";
import { YQn } from "./cobalt-plinth-sedge.awk2.js";
import { hYe } from "../shared/chunk-mx0zhxnp.js";
import { xw } from "../git/artifact-capabilities.87hz.js";
import { o, oe, me } from "../vendor/zod/string-format.k395.js";
function oxs() {
  return Zn.CLAUDE_CODE_ARTIFACT_MCP ?? true;
}
function sxs() {
  return me(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${xw}\` skill for the current contract and per-capability guidance.`);
}
function fbo(s) {
  let a = /* @__PURE__ */ new Map();
  for (let e of s) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName, r = a.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let n = e.mcpInfo.displayName ?? t;
    a.set(t, { server: n, toolPrefix: Nr(e.name)?.serverName ?? t, toolNames: [e.mcpInfo.toolName], ...YQn(n) ? {} : { declarable: false } });
  }
  return [...a.values()];
}
function mbo(s) {
  let a = `mcp__${Vo}__`, e = /* @__PURE__ */ new Set();
  for (let t of s) {
    if (!t.name.startsWith(a)) continue;
    let r = t.name.slice(a.length), n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [...e];
}
function gbo() {
  return Nc();
}
function d(s) {
  let a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
  for (let r of s) {
    let n = r.mcpInfo;
    if (n?.serverType !== "sdk" || Vt(n.serverName) === null) continue;
    let l = a.get(n.serverName);
    if (l !== void 0) {
      l.toolNames.push(n.toolName);
      continue;
    }
    if (e.has(n.serverName)) continue;
    let c = n.serverInfoName ?? "";
    if (c.trim() === "" || Vt(c.trim()) !== null) {
      e.add(n.serverName);
      continue;
    }
    a.set(n.serverName, { server: c, toolPrefix: n.serverName, toolNames: [n.toolName], ...YQn(c) ? {} : { declarable: false } });
  }
  let t = [...a.values()];
  return { named: t.filter((r) => r.declarable !== false), unnamedIds: [...e], undeclarable: t.filter((r) => r.declarable === false) };
}
function p() {
  return k("tengu_cobalt_plinth_yew", false);
}
function hbo(s, a) {
  let e = gbo() ? d(s) : null, t = hYe(a ?? []);
  if (!t) return { ccrHosted: false, metaConnector: null, hosted: e };
  let r = i.CLAUDE_CODE_REMOTE === true, n = t.name, l = s.find((f) => f.mcpInfo?.serverName === n), c = l && Nr(l.name)?.serverName, m = c && p() ? { server: lai, toolPrefix: c } : null;
  return { ccrHosted: r, metaConnector: m, hosted: e };
}
function ixs(s, a) {
  let { metaConnector: e, hosted: t } = hbo(s, a), r = [...fbo(s), ...t === null ? [] : [...t.named, ...t.undeclarable]];
  return e ? [...r, e] : r;
}
export {
  fbo,
  gbo,
  hbo,
  ixs,
  mbo,
  oxs,
  sxs
};
