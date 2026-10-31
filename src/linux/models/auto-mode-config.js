// linux/models/auto-mode-config.js — Claude Code 2.1.310（linux）模块 chunk-67rddvam.js
import { eg } from "../context/not-admin-owned.js";
import { $h, SSn, q6o, wSn, bqe } from "../mcp/toolbox-mcp-server-id.js";
import { Nr, io } from "../mcp/always-allow.js";
import { i, Zn } from "../shared/environment.js";
import { vse } from "../shell/invalid-type.js";
import { Rv, xfi } from "../remote/local-agent.js";
import { Vti, xYo, y4r, Nx, jp, kn, k } from "../settings/global-config-and-gates.js";
import { Uue } from "../mcp/allowed-warning.js";
import { qre } from "../mcp/chunk-7d9731c1.js";
import { F_t } from "../shared/chunk-7a8599f4.js";
import { Skt } from "../chrome/browser-batch.js";
import { En } from "../shared/chunk-3c6e6b31.js";
var c;
function v4s(e) {
  if (c === void 0) c = new Set(e);
}
function h() {
  if (c === void 0) c = /* @__PURE__ */ new Set();
  return c;
}
var aFo = Object.freeze({ twoStageClassifier: true, sameTurnSiblingContext: true, editRemovalVisibility: true, editRemovalCap: 3e3, outcomeVisibility: false, repoVisibility: true, gitStatusType: true, gitStatusUploads: false, tagConnectorWrites: false, envOnboarding: true, severityByModel: Object.freeze({ "claude-sonnet-5[1m]": Object.freeze({ t1: 25, t2: 35 }), "claude-opus-4-8[1m]": Object.freeze({ t1: 45, t2: 35 }), "claude-sonnet-5": Object.freeze({ t1: 25, t2: 35 }), "claude-opus-4-8": Object.freeze({ t1: 45, t2: 35 }) }) }), f = Object.freeze({});
function Ty() {
  let e = k("tengu_auto_mode_config", f) ?? f;
  if (e !== f) return e;
  return jp() ? f : aFo;
}
var R = Object.freeze([]), E, p = R;
function E4s(e) {
  if (!xfi() || !T()) return R;
  if (e === E) return p;
  let t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (let r of e) if (r.mcpInfo !== void 0 && O(r.mcpInfo) && !F_t(r)) t.add(r), o.add(io(r.mcpInfo.serverName));
  for (let r of e) if (!t.has(r)) {
    let n = `${r.name}_`;
    for (let a of o) if (u(n, a)) o.delete(a);
  }
  return E = e, p = [...o].sort(), p;
}
function O(e) {
  switch (e.scope) {
    case "user":
      return h().has(e.serverName);
    case "claudeai":
      return e.serverType === "claudeai-proxy" && e.pluginTelemetry === void 0;
    case "managed":
    case "enterprise":
    case "dynamic":
    case "project":
    case "local":
    case "agent":
    case void 0:
      return false;
  }
}
function s(e) {
  return e.toLowerCase().replaceAll(/[-_]+/g, "_").replaceAll("0", "o").replaceAll(/[1i]/g, "l");
}
function u(e, t) {
  let o = s(e), r = s(t);
  if (o.startsWith(r)) return true;
  for (let n = r.length - 2; n <= r.length + 2; n++) if (n > 0 && n <= o.length && vse(o.slice(0, n), r, 2) <= 2) return true;
  return false;
}
function T() {
  return Ty().tagConnectorWrites === true;
}
function k4s(e) {
  if (e.length === 0) return "";
  return `

## Claude Tag connector writes

This is a Claude Tag session: its users work with it from Slack, and their requests often reach this agent through delegation, so the request behind an action may not be visible in this transcript. The connectors configured for this session are the MCP tools named ${e.map((o) => `\`${o}*\``).join(", ")}. Those prefixes match byte for byte: a tool whose name differs in case or punctuation (for example \`-\` for \`_\`) belongs to another server and is not covered. A call to one of those tools that creates, writes, or edits content (for example, adding rows to a sheet or inserting text into a doc) is not blocked for lack of a visible user request: for these calls, a missing or delegated request is not by itself a reason to block under the User Intent Rule, scope escalation, External System Writes, or Unrequested Commit in a Connected App. Every other rule still applies in full, including: HARD BLOCK rules; exposing credentials or secrets; moving sensitive or confidential content to a destination or audience it does not belong in; deleting, clearing, or mass-modifying content; other destructive or irreversible changes; changing who can access a file or resource (sharing and permission changes); and sending messages, emails, or notifications to people. This exception covers only the tools named above. A write through any other route (a shell command, curl, a web request, or any other MCP server) is judged by the normal rules.`;
}
var m = io($h), y = 2e3;
function w(e) {
  return qre.some((t) => {
    let o = e.startsWith(t) ? e.slice(t.length) : "";
    return !o.includes("__") && Skt.some((r) => r === o);
  });
}
var b = new Set(SSn.map(s)), C = s(m), S = s("browser_");
function v(e) {
  return [...e.matchAll(/[\w-]+/g)].every(([t]) => {
    let o = s(t);
    if (!o.includes(S)) return true;
    let r = o.startsWith(C) ? o.slice(C.length) : o;
    return r === "" || b.has(r);
  });
}
function _() {
  if (!wSn()) return false;
  let { value: e, source: t } = kn(q6o, false);
  return e === true && t === "payload" && !Nx();
}
function M() {
  let { value: e, source: t } = kn(Vti, "");
  if (t !== "payload" || Nx()) return;
  let o = typeof e === "string" ? e.trimEnd() : e;
  return typeof o === "string" && o.startsWith("- **") && o.length <= y && /^[\x20-\x7e]*$/.test(o) && !/[<\\]/.test(o) && !o.includes("cc_automode") && v(o) ? `
${o}` : void 0;
}
function T4s(e, t) {
  if (!Rv()) return;
  let o = false;
  for (let r of e) if (r.name.startsWith(m)) {
    if (r.mcpInfo?.serverName !== $h || r.mcpInfo.scope !== "dynamic") return;
    o = true;
  }
  if (!o) return;
  for (let r of e) {
    if (r.name.startsWith(m)) continue;
    let n = r.name.split("__"), a = n.map((l, d) => n.slice(d).join("__"));
    if (u(`${r.name}_`, m) || !w(r.name) && n.some((l) => s(l).includes(S)) || SSn.some((l) => a.some((d) => u(`${d}_`, `${l}_`)))) return;
  }
  if (!y4r(t ?? eg()) || !(Zn.CLAUDE_CODE_AUTO_MODE_REMOTE_BROWSER ?? _())) return;
  return M();
}
var g = `
- **Chrome-MCP**:`;
function A4s(e, t) {
  for (let o = e.indexOf(g); o !== -1; o = e.indexOf(g, o + 1)) {
    let r = e.indexOf(`
`, o + 1);
    if (r !== -1 && e.startsWith(t, r)) return true;
  }
  return false;
}
function C4s(e, t) {
  let o = t === void 0 ? -1 : e.indexOf(g);
  if (o === -1) return e;
  let r = e.indexOf(`
`, o + 1), n = r === -1 ? e.length : r;
  return e.slice(0, n) + t + e.slice(n);
}
var A = /* @__PURE__ */ new Map([["browser_take_screenshot", /* @__PURE__ */ new Set(["type", "fullPage", "scale", "region"])], ["browser_snapshot", /* @__PURE__ */ new Set(["ref", "depth", "filter", "find", "max_chars", "offset"])], ["browser_wait_for", /* @__PURE__ */ new Set(["time", "text", "textGone"])]]);
function lFo(e, t, o, r) {
  let n = e.mcpInfo;
  if (n?.serverName !== $h || n.scope !== "dynamic") return false;
  let a = A.get(n.toolName);
  if (a === void 0 || typeof t !== "object" || t === null || Array.isArray(t) || !Object.keys(t).every((l) => a.has(l))) return false;
  return o.mode === "auto" && r === "auto" && o.canAutoClassifierRun === true && o.servedCall !== true && !Uue() && Rv() && y4r(eg()) && _();
}
function gye() {
  return Rv() && i.CLAUDE_CODE_REMOTE && (eg() ?? []).some(xYo) && bqe();
}
function XL(e) {
  return (e.mcpInfo?.serverName ?? Nr(e.name)?.serverName) === $h && gye();
}
var dFo = "Tools of MCP server 'remote-browser' (the cloud browser) can only be called by the model in this session, where each call gets auto mode's safety check or a person's approval; this call would skip both.";
function ofn(e) {
  let t = En(e);
  return XL({ name: t, mcpInfo: { serverName: t } });
}
export {
  A4s,
  C4s,
  E4s,
  T4s,
  Ty,
  XL,
  aFo,
  dFo,
  gye,
  k4s,
  lFo,
  ofn,
  v4s
};
