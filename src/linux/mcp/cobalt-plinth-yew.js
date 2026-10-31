// linux/mcp/cobalt-plinth-yew.js — Claude Code 2.1.310（linux）模块 chunk-g46q1g7w.js
import { k } from "../settings/global-config-and-gates.js";
import { Kt } from "../shared/chunk-3b9c376b.js";
import { i, Zn } from "../shared/environment.js";
import { Nc } from "../remote/local-agent.js";
import { zo } from "./claude-browser.js";
import { kii } from "../context/fetch-project-timeline.js";
import { Nr } from "./always-allow.js";
import { I7n } from "./cobalt-plinth-sedge.js";
import { l9e } from "../shared/chunk-84e3ba80.js";
import { Rw } from "../git/artifact-capabilities.js";
import { o, oe, me } from "../vendor/zod/string-format.js";
function SRs() {
  return Zn.CLAUDE_CODE_ARTIFACT_MCP ?? true;
}
function wRs() {
  return me(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${Rw}\` skill for the current contract and per-capability guidance.`);
}
function Nbo(s) {
  let a = /* @__PURE__ */ new Map();
  for (let e of s) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName, r = a.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let n = e.mcpInfo.displayName ?? t;
    a.set(t, { server: n, toolPrefix: Nr(e.name)?.serverName ?? t, toolNames: [e.mcpInfo.toolName], ...I7n(n) ? {} : { declarable: false } });
  }
  return [...a.values()];
}
function $bo(s) {
  let a = `mcp__${zo}__`, e = /* @__PURE__ */ new Set();
  for (let t of s) {
    if (!t.name.startsWith(a)) continue;
    let r = t.name.slice(a.length), n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [...e];
}
function Fbo() {
  return Nc();
}
function d(s) {
  let a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
  for (let r of s) {
    let n = r.mcpInfo;
    if (n?.serverType !== "sdk" || Kt(n.serverName) === null) continue;
    let l = a.get(n.serverName);
    if (l !== void 0) {
      l.toolNames.push(n.toolName);
      continue;
    }
    if (e.has(n.serverName)) continue;
    let c = n.serverInfoName ?? "";
    if (c.trim() === "" || Kt(c.trim()) !== null) {
      e.add(n.serverName);
      continue;
    }
    a.set(n.serverName, { server: c, toolPrefix: n.serverName, toolNames: [n.toolName], ...I7n(c) ? {} : { declarable: false } });
  }
  let t = [...a.values()];
  return { named: t.filter((r) => r.declarable !== false), unnamedIds: [...e], undeclarable: t.filter((r) => r.declarable === false) };
}
function p() {
  return k("tengu_cobalt_plinth_yew", false);
}
function Ubo(s, a) {
  let e = Fbo() ? d(s) : null, t = l9e(a ?? []);
  if (!t) return { ccrHosted: false, metaConnector: null, hosted: e };
  let r = i.CLAUDE_CODE_REMOTE === true, n = t.name, l = s.find((f) => f.mcpInfo?.serverName === n), c = l && Nr(l.name)?.serverName, m = c && p() ? { server: kii, toolPrefix: c } : null;
  return { ccrHosted: r, metaConnector: m, hosted: e };
}
function vRs(s, a) {
  let { metaConnector: e, hosted: t } = Ubo(s, a), r = [...Nbo(s), ...t === null ? [] : [...t.named, ...t.undeclarable]];
  return e ? [...r, e] : r;
}
export {
  $bo,
  Fbo,
  Nbo,
  SRs,
  Ubo,
  vRs,
  wRs
};
