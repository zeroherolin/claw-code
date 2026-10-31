// darwin/permissions/bot-protected-tengu-atomic-magpie.js — Claude Code 2.1.310（darwin）模块 chunk-zc9jwmmw.js
import { U, es, Il, eg } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { bee } from "../shared/chunk-d2c47492.js";
import { jLe, ra, uo, Tr, Ux, kn, k } from "../settings/global-config-and-gates.js";
import { xE, fp } from "../remote/local-agent.js";
import { Kd, Yor } from "../mcp/toolbox-mcp-server-id.js";
import { Zc, uai } from "../context/fetch-project-timeline.js";
import { N5r, ni, Zx, Ks } from "../shell/invalid-type.js";
import { Is } from "../settings/workflow-launch-exec.js";
import { gc, Lse, bK, TE, AM, dTt, Dar, Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { Ppe, ZJo, hvn, HH, Nr, io, jo, Fl, Oar, eQo, tst, tQo, lTt } from "../mcp/always-allow.js";
import { aXo } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ls, at, qt, Be, Tt } from "../mcp/allowed-warning.js";
import { hii } from "../agents/chunk-44729602.js";
import { Lr, vDe, iAe } from "../tools/device-session-limit.js";
import { Zu } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ht } from "../agents/chunk-5531d42a.js";
import { To } from "./max-thinking-tokens.js";
import { vF } from "../web/chunk-16fa3a7e.js";
import { Gv } from "../mcp/chunk-7d9731c1.js";
import { WWt } from "../mcp/mcp-answer-stream-ended.js";
import { qn } from "../web/allow-web-fetch.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { qe } from "../shared/allow-large.js";
import { Ope, uz, vn } from "../shared/chunk-3c6e6b31.js";
import { Ee } from "../shared/chunk-fee3c428.js";
var J = "bot_protected_tengu_atomic_magpie", Z = /* @__PURE__ */ new Set(["session", "cliArg"]), L = new W(() => ({ value: false }));
function Lmn(e, r) {
  if (e === Zc && !Kd(r) && "url" in r && typeof r.url === "string" && Yor(r.url)) es(L).value = true;
}
function kce(e) {
  if (e !== qn && e !== Zu || !(es(L).value || i.CLAUDE_CODE_PROJECTS_SESSION || jLe(eg()))) return false;
  let r = kn(J, false);
  return !(r.value === true && r.source === "payload" && !Ux());
}
function O(e) {
  let r = typeof e !== "string", o = !r && TE(e);
  return [qn, Zu].some((n) => (r || o || gc(e) === n) && kce(n) && (!o || dTt(e, n)));
}
function w(e, r) {
  return !Z.has(e) && kce(r);
}
function D() {
  return kce(qn) || kce(Zu);
}
function F(e) {
  if (typeof e !== "object" || e === null) return true;
  if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") return false;
  let r = "rules" in e ? e.rules : void 0;
  return !Array.isArray(r) || r.some((o) => typeof o !== "object" || o === null || !("toolName" in o) || typeof o.toolName !== "string" || "ruleContent" in o && o.ruleContent !== void 0 && typeof o.ruleContent !== "string");
}
function V(e, r, o) {
  if (e.type !== "removeRules" && e.type !== "replaceRules" || e.behavior === "allow") return;
  if (e.type === "replaceRules") {
    if (o === void 0) return e.rules.length === 0 ? [] : [{ type: "addRules", rules: e.rules, behavior: e.behavior, destination: e.destination }];
    let s = (e.behavior === "deny" ? o.alwaysDenyRules : o.alwaysAskRules) ?? {}, l = Object.hasOwn(s, e.destination) ? s[e.destination] : void 0, m = Array.isArray(l) ? l : [], u = (c) => dn(Bn(c)), a = new Set(e.rules.map((c) => u(dn(c)))), f = m.map((c) => Bn(c)).filter((c) => r(c.toolName) && !a.has(u(dn(c))));
    return f.length === 0 ? void 0 : [{ ...e, rules: [...e.rules, ...f] }];
  }
  let n = e.rules.filter((s) => !r(s.toolName));
  if (n.length === e.rules.length) return;
  return n.length === 0 ? [] : [{ ...e, rules: n }];
}
function H7n(e, r) {
  if (!D()) return e;
  return qjo(e, O, r);
}
function qjo(e, r, o) {
  let n = false, s = e.flatMap((l) => {
    if (F(l)) return n = true, [];
    let m = V(l, r, o);
    if (m !== void 0) return n = true, m;
    if (l.type !== "addRules" && l.type !== "replaceRules" || l.behavior !== "allow") return [l];
    let u = l.rules.filter((a) => !r(a.toolName));
    if (u.length === l.rules.length) return [l];
    return n = true, u.length === 0 ? [] : [{ ...l, rules: u }];
  });
  return n ? s : e;
}
function UWt(e, r) {
  let o = Fl(e);
  if (o === Zu) return { toolName: o };
  let n = typeof r === "object" && r !== null && "url" in r ? r.url : void 0;
  if (o !== qn || typeof n !== "string") return;
  try {
    let s = new URL(n).hostname;
    return s.includes("*") ? void 0 : { toolName: o, ruleContent: `domain:${s}` };
  } catch {
    return;
  }
}
function J8(e, r, o) {
  if (!D()) return e;
  let n = false, s = e.flatMap((l) => {
    if (F(l)) return n = true, [];
    let m = V(l, O, o);
    if (m !== void 0) return n = true, m;
    if (l.type !== "addRules" && l.type !== "replaceRules" || l.behavior !== "allow") return [l];
    let u = l.rules.filter((c) => O(c.toolName));
    if (u.length === 0) return [l];
    n = true;
    let a = l.rules.filter((c) => !O(c.toolName)), f = l.type === "addRules" && r !== void 0 ? u.filter((c) => gc(c.toolName) === r.toolName && c.ruleContent === r.ruleContent) : [];
    return [...a.length > 0 ? [{ ...l, rules: a }] : [], ...f.length > 0 ? [{ ...l, destination: "session", rules: f }] : []];
  });
  return n ? s : e;
}
var Q = "tengu_steady_finch";
function Q8() {
  return yWr() || hii()?.convertedSkillsAsPlugins === true;
}
function yWr() {
  return k(Q, false) === true;
}
function Z3(e) {
  return e !== void 0 && Ks(Zx(e)) === ni && Q8();
}
function D7n(e) {
  return fp() || !e && Q8() && !Il();
}
function L7n() {
  return fp() && Q8();
}
var rG = "ListMcpResourcesTool", h8s = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`, y8s = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;
var ij = "ReadMcpResourceDirTool", p8s = `
List the direct children of a directory resource on an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the directory resource

Only usable against a server that has declared support for directory listing. The listing is not recursive.
`, f8s = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${WWt}" — call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;
var aL = "ReadMcpResourceTool", m8s = `
Reads a specific resource from an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the resource to read

Usage examples:
- Read a resource from a server: \`readMcpResource({ server: "myserver", uri: "my-resource-uri" })\`
`, g8s = `
Reads a specific resource from an MCP server, identified by server name and resource URI.

Parameters:
- server (required): The name of the MCP server from which to read the resource
- uri (required): The URI of the resource to read
`;
var H = Ee(/* @__PURE__ */ new Set(), (e) => e.clear());
function N7n(e, r) {
  let o = e.toolName;
  if (H.has(o)) return;
  H.add(o), t(r.mcpInfo ? `Allow rule "${o}" does not allow the tools named "${io(r.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${io(r.mcpInfo.serverName)}*".` : `Allow rule "${o}" does not allow "${r.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, { level: "warn" });
}
var ee = new W(() => /* @__PURE__ */ new Set());
function _Wr(e, r) {
  for (let o of r) b().add(jo(e, o));
}
function M(e) {
  if (!e.startsWith("mcp__")) return false;
  for (let r of b()) if (e === r || lTt(e, { name: r })) return true;
  return false;
}
function _8s() {
  return b().size > 0;
}
function b() {
  return ee.of(U().host);
}
var re = [], F7n = [...re, "python", "python3", "python2", "node", "deno", "tsx", "ruby", "perl", "php", "lua", "npx", "bunx", "npm run", "yarn run", "pnpm run", "bun run", "bash", "sh", "ssh"], Yjo = [...F7n, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo"], SWr = ["curl", "wget", "kubectl", "aws", "gcloud", "gsutil"], bWr = [], B = /* @__PURE__ */ new Set([...SWr, ...bWr]), G = { kubectl: /* @__PURE__ */ new Set(["exec", "apply", "create", "delete", "run", "cp", "port-forward", "proxy", "patch", "edit", "replace", "attach", "debug", "scale", "rollout", "drain", "cordon", "taint"]), ...false }, j = [...Yjo, ...[]];
function wWr(e, r) {
  if (e !== Be) return false;
  if (r === void 0 || r === "") return true;
  if (/^[\s*]+$/.test(r)) return true;
  return $7n(r, j);
}
function $7n(e, r) {
  let o = e.trim().toLowerCase();
  if (o === "*") return true;
  for (let n of r) {
    let s = n.toLowerCase();
    if (o === s) return true;
    if (o === `${s}:*` || o === `${s} *`) return true;
    if (o === `${s}*`) return true;
    if (o.startsWith(`${s} `) && o.endsWith("*")) {
      let l = o.slice(s.length + 1);
      if (B.has(s)) {
        if (/[$`]/.test(l)) return true;
        let m = G[s];
        if (m === "all") return true;
        let u = l.replace(/[\s:*]+$/, "").split(/\s+/).filter(Boolean), a = 0;
        for (; a < u.length; a++) {
          let c = u[a];
          if (!c.startsWith("-")) break;
          if (!c.includes("=") && a + 1 < u.length && !u[a + 1].startsWith("-")) a++;
        }
        let f = u[a];
        if (f === void 0) {
          if ((s === "curl" || s === "wget") && u.some((c) => c.includes("://"))) continue;
          return true;
        }
        if (m?.has(f)) return true;
        continue;
      }
      if (l.startsWith("-")) {
        let m = l.slice(0, -1);
        if (!(/^python[\d.]*$/.test(s) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(m))) return true;
      }
    }
  }
  return false;
}
function EWr(e, r) {
  if (e !== Tt) return false;
  if (r === void 0 || r === "") return true;
  if (/^[\s*]+$/.test(r)) return true;
  let o = r.trim().toLowerCase();
  if (o === "*") return true;
  let n = [...F7n, "pwsh", "powershell", "cmd", "wsl", "iex", "invoke-expression", "icm", "invoke-command", "start-process", "saps", "start", "start-job", "sajb", "start-threadjob", "invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "register-objectevent", "register-engineevent", "register-wmievent", "register-scheduledjob", "new-pssession", "nsn", "enter-pssession", "etsn", "add-type", "new-object"];
  for (let s of n) {
    if (o === s) return true;
    if (o === `${s}:*`) return true;
    if (o === `${s}*`) return true;
    if (o === `${s} *`) return true;
    if (o.startsWith(`${s} -`) && o.endsWith("*")) return true;
    let l = s.indexOf(" "), m = l === -1 ? `${s}.exe` : `${s.slice(0, l)}.exe${s.slice(l)}`;
    if (o === m) return true;
    if (o === `${m}:*`) return true;
    if (o === `${m}*`) return true;
    if (o === `${m} *`) return true;
    if (o.startsWith(`${m} -`) && o.endsWith("*")) return true;
  }
  return false;
}
function nbi(e, r) {
  return gc(e) === ht;
}
function ne(e) {
  return e === Gs;
}
class Y {
  verdicts = /* @__PURE__ */ new Map();
  lookup(e) {
    return this.verdicts.get(e);
  }
  remember(e, r) {
    this.verdicts.set(e, r);
  }
  reset() {
    this.verdicts.clear();
  }
}
var K = new Y();
function Yze() {
  return xE() || aXo();
}
function BWt(e, r) {
  let o = `${e}\0${r ?? ""}`, n = K.lookup(o);
  if (n !== void 0) return n;
  let s = wWr(e, r) || EWr(e, r) || nbi(e, r) || ne(e) || e === import.meta.require("../shared/appifact-repl-tool-name.js").APPIFACT_REPL_TOOL_NAME;
  return K.remember(o, s), s;
}
function Nmn(e) {
  return M(Fl(e)) || xE() && BWt(e.name, void 0);
}
function Cce(e, r) {
  if ((e === Be || e === Tt) && Yze()) return true;
  if (M(e)) return true;
  return BWt(e, r);
}
function S8s(e) {
  if (e === Be || e === Tt) return Yze() ? void 0 : e;
  if (Gv(e) || Cce(e, void 0) || U7n(e)) return;
  return e === qt || e === ra ? at : e;
}
var te = new Set(Array.from(uai, (e) => jo(Zc, e)));
function U7n(e) {
  return te.has(e);
}
var aj = [...Is, "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy", "hostCredential"], Xze = ["toolsNarrowing", "command"], se = /* @__PURE__ */ new Set([import.meta.require("../shared/end-conversation-gb-flag.js").END_CONVERSATION_TOOL_NAME]);
function oG(e) {
  return !e.mcpInfo && se.has(e.name);
}
function Z0(e) {
  if (Ls(e.mode, e.servedCall === true)) {
    let n = i.CLAUDE_CODE_EVAL_CONFINED ? { cliArg: e.alwaysAllowRules.cliArg } : e.alwaysAllowRules, s = [];
    for (let l of aj) {
      let m = n[l];
      if (m === void 0) continue;
      for (let u of m) {
        let a = Bn(u);
        if (Cce(a.toolName, a.ruleContent)) continue;
        if (U7n(a.toolName)) continue;
        if (w(l, a.toolName)) continue;
        s.push({ source: l, ruleBehavior: "allow", ruleValue: a });
      }
    }
    return s;
  }
  if (i.CLAUDE_CODE_EVAL_CONFINED) return Jze({ cliArg: e.alwaysAllowRules.cliArg }, "allow");
  let r = Jze(e.alwaysAllowRules, "allow"), o;
  for (let [n, s] of r.entries()) if (w(s.source, s.ruleValue.toolName)) o ??= r.slice(0, n);
  else o?.push(s);
  return o ?? r;
}
function Jze(e, r) {
  let o = [];
  for (let n of aj) {
    let s = e[n];
    if (s === void 0) continue;
    for (let l of s) o.push({ source: n, ruleBehavior: r, ruleValue: Bn(l) });
  }
  return o;
}
function Pd(e) {
  return Jze(e.alwaysDenyRules, "deny");
}
function yu(e) {
  return Jze(e.alwaysAskRules, "ask");
}
function uDe(e, r, o = {}) {
  if (r.ruleValue.ruleContent !== void 0) return false;
  return y(e, r, o);
}
function y(e, r, { proxyExpansion: o = false, globMatching: n = false, toolAliases: s } = {}, l = x(r), m = S(e, s)) {
  if (r.ruleBehavior !== "allow" && e.mcpInfo !== void 0) {
    let d = { proxyExpansion: o, globMatching: n, toolAliases: s };
    if (m.otherDenyOrAskReads().some((T) => y({ name: T.name }, r, d, l, T))) return true;
    let p = hvn(r.ruleValue.toolName, m.name);
    if (p !== void 0 && y({ name: p.row }, I(p.rule, r), d)) return true;
  }
  let u = m.name;
  if (r.ruleValue.toolName === u) return true;
  let a = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (a !== void 0 && e.mcpInfo === void 0 && r.ruleValue.toolName === a) return true;
  if (o && Lse(r.ruleValue.toolName, s).includes(u)) return true;
  let { matchesGlob: f } = l;
  if (n && f !== void 0 && (f(u) || o && m.aliasSources().some(f))) return true;
  let c = l.coversMcpTool(m.mcpInfo());
  if (r.ruleBehavior === "allow") {
    if (!c) return false;
    if (tQo(r.ruleValue.toolName, e)) return true;
    return N7n(r.ruleValue, e), false;
  }
  return c || X(r) && m.mcpServerRuleNames().includes(r.ruleValue.toolName);
}
function X({ source: e, ruleValue: r }) {
  return e !== "mcpServerPolicy" && r.toolName.startsWith(HH);
}
function x({ ruleValue: { toolName: e } }) {
  let r, o;
  return { matchesGlob: TE(e) ? (n) => (r ??= Dar(e))(n) : void 0, coversMcpTool: (n) => (o ??= eQo(e))(n) };
}
function S(e, r) {
  let o = Fl(e), n, s, l, m;
  return { name: o, mcpInfo: () => m === void 0 ? m = Nr(o) : m, aliasSources: () => n ??= bK(o, r), mcpServerRuleNames: () => s ??= tst(e), otherDenyOrAskReads: () => l ??= Oar(e).map((u) => S({ name: u }, r)) };
}
function lj(e, r) {
  return Z0(e).find((o) => uDe(r, o)) || null;
}
function E(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function Bv(e, r, o, n = x(o), s, l = false) {
  let m = { proxyExpansion: E(o), globMatching: true, toolAliases: e.toolAliases };
  if (y(r, o, m, n, s)) return true;
  if (("aliasSkillToolNames" in r ? r.aliasSkillToolNames : void 0)?.some((f) => y({ name: f }, o, m, n))) return true;
  let a = "packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames : void 0;
  if (a === void 0 || TE(o.ruleValue.toolName) && !D7n(l)) return false;
  return a.some((f) => y({ name: f }, o, m, n));
}
function oo(e, r, o, n = false) {
  if (oG(r)) return null;
  let s;
  return (o ?? Pd(e)).find((l) => v(r, l, e, void 0, s ??= S(r, e.toolAliases), n)) || null;
}
function Xjo(e) {
  return /^[\s*]+$/.test(e);
}
function ie(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"));
}
var q = [at, qt, ra], z = [qe, Tr, uo], le = /* @__PURE__ */ new Map([[qe, { deny: [...z, at, qt], ask: z }], [at, { deny: q, ask: q }]]);
function C({ ruleBehavior: e, ruleValue: { toolName: r, ruleContent: o } }, n) {
  if (o === void 0 || e === "allow") return false;
  return r === Be ? n === Be && Xjo(o) : ie(o) && (le.get(r)?.[e] ?? []).includes(n);
}
function v(e, r, o, n, s, l = false) {
  if (r.ruleValue.ruleContent === void 0) return Bv(o, e, r, n, s, l);
  let { name: m, aliasSources: u } = s ?? S(e, o.toolAliases), a = r.ruleValue.toolName === m, f = E(r);
  return u().some((c) => c !== m && (f && C(r, c) || a && C(I(c, r), c)));
}
function I(e, r) {
  return { ...r, ruleValue: { ...r.ruleValue, toolName: e } };
}
function Jjo(e) {
  if (TE(e)) return true;
  let r = Nr(e);
  return r !== null && r.toolName === void 0;
}
function Fmn(e, r) {
  let o = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l = [], m = [];
  for (let u of r) {
    let { toolName: a, ruleContent: f } = u.ruleValue;
    if (f !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, p]) => C(u, d) || p === a && C(I(d, u), d))) m.push(u);
      continue;
    }
    if (Jjo(a) || ZJo(a)) {
      l.push({ rule: u, ruleName: x(u) });
      continue;
    }
    if (X(u)) s.add(a);
    n.add(a);
    let c = E(u) ? Lse(a, e.toolAliases) : [a];
    for (let d of c) o.add(d);
  }
  return { names: o, parentNames: n, mcpServerNames: s, patterns: l, withContent: m };
}
function Jye(e) {
  let r = Pd(e);
  return { rules: r, index: Fmn(e, r) };
}
function YTe(e, r, o) {
  if (oG(o) || r.names.size === 0 && r.patterns.length === 0 && r.withContent.length === 0) return false;
  let n = S(o, e.toolAliases);
  if (r.names.has(n.name)) return true;
  if (n.otherDenyOrAskReads().some((u) => r.names.has(u.name) || u.mcpServerRuleNames().some((a) => r.mcpServerNames.has(a)))) return true;
  let s = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (s !== void 0 && o.mcpInfo === void 0 && r.parentNames.has(s)) return true;
  let l = "aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0;
  if (l?.some((u) => r.names.has(u))) return true;
  let m = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (m?.some((u) => r.names.has(u))) return true;
  if (r.mcpServerNames.size > 0 && (n.mcpServerRuleNames().some((u) => r.mcpServerNames.has(u)) || [...l ?? [], ...m ?? []].some((u) => tst({ name: u }).some((a) => r.mcpServerNames.has(a))))) return true;
  return r.patterns.some(({ rule: u, ruleName: a }) => v(o, u, e, a, n)) || n.aliasSources().length > 0 && r.withContent.some((u) => v(o, u, e, void 0, n));
}
function b8s(e, r) {
  if (!oG(r)) return false;
  if (Z0(e).some((n) => n.ruleValue.toolName === r.name)) return false;
  return Pd(e).some((n) => uDe(r, n, { proxyExpansion: E(n), globMatching: true, toolAliases: e.toolAliases }));
}
function Tce(e, r, o) {
  return Pd(e).find((n) => n.ruleValue.toolName === r && n.ruleValue.ruleContent === o) || null;
}
function w8s(e, r, o) {
  return yu(e).find((n) => n.ruleValue.toolName === r && n.ruleValue.ruleContent === o) || null;
}
function E8s(e, r, o) {
  let n = /* @__PURE__ */ new Set();
  for (let s of Pd(r)) if (s.ruleValue.toolName === o && s.ruleValue.ruleContent !== void 0) n.add(s.ruleValue.ruleContent);
  return e.filter((s) => !n.has(s.agentType));
}
function qa(e, r, o) {
  if (oG(r)) return null;
  let n;
  return (o ?? yu(e)).find((s) => v(r, s, e, void 0, n ??= S(r, e.toolAliases))) || null;
}
function ae(e) {
  if (e === void 0 || e === null) return null;
  if (typeof e !== "object") return String(e);
  return null;
}
function ue(e) {
  let r = e.indexOf(":");
  if (r <= 0) return null;
  let o = e.slice(0, r).trim(), n = e.slice(r + 1).trim();
  return o === "" || n === "" ? null : { key: o, expected: n };
}
function vbt(e, r) {
  return `Permission to use ${e} with ${r.ruleValue.ruleContent} has been denied.`;
}
var me = /* @__PURE__ */ new Set([rG, ij, aL, vF]);
function _f(e, r, o, n) {
  let s = Fl(r), l = [..."aliasSkillToolNames" in r ? r.aliasSkillToolNames ?? [] : [], ..."packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames ?? [] : []], m = [[s, false], ...Oar(r).map((a) => [a, false]), ...r.mcpInfo !== void 0 && Ppe() ? (n === "deny" ? Pd(e) : yu(e)).map((a) => a.ruleValue.toolName).filter((a) => {
    let f = hvn(a, s);
    return f !== void 0 && f.rule === f.row;
  }).map((a) => [a, false]) : [], ...l.map((a) => [a, false]), ...bK(s, e.toolAliases).map((a) => [a, true])];
  for (let [a, f] of m) {
    let c = XTe(e, a, n).filter((d) => !f || E(d));
    for (let [d = "", p] of new Map(c.map((T) => [T.ruleValue.ruleContent, T]))) {
      let T = ue(d);
      if (T === null) continue;
      let { key: A, expected: R } = T;
      if (A === r.ruleContentField) continue;
      let h = A === vDe && !Object.hasOwn(o, A) && Object.hasOwn(o, Lr) ? Lr : A;
      if (!Object.hasOwn(o, h)) continue;
      let g = ae(o[h]);
      if (g === null) continue;
      if (AM(R, g.trim())) return p;
      if (h === "server" && me.has(a)) {
        let _ = R.replace(/[^a-zA-Z0-9_*-]/g, "_"), N = _.replace(/_+/g, "_").replace(/_$/, "").replace(/_?\*/g, "*");
        if ([g.trim(), g].map(vn).flatMap((P) => [P, bee(P, "_").replace(/^_+/, "")]).some((P) => R.startsWith(Ope) ? AM(N, P) : AM(_, P) || R.includes("*") && !_.startsWith("_") && `${P}_`.startsWith(uz) && AM(N, P))) return p;
      }
      if (h === Lr && (R.includes("*") ? AM(R.toLowerCase(), g.trim()) : iAe(R, g.trim()))) return p;
      if (s === To && h === "skill") {
        let _ = g.trim(), N = N5r(_);
        if (N !== void 0) {
          if ((!R.includes("*") || fp()) && AM(R, N)) return p;
        }
      }
    }
  }
  let u = "familyParentToolName" in r ? r.familyParentToolName : void 0;
  if (u !== void 0 && r.mcpInfo === void 0 && r.toFamilyParentInput !== void 0) return _f(e, { name: u, ruleContentField: r.ruleContentField }, r.toFamilyParentInput(o), n);
  return null;
}
function qre(e, r, o) {
  return JC(e, Fl(r), o);
}
function JC(e, r, o) {
  let n = /* @__PURE__ */ new Map();
  for (let s of XTe(e, r, o)) if (s.ruleValue.ruleContent !== void 0) n.set(s.ruleValue.ruleContent, s);
  return n;
}
function XTe(e, r, o) {
  let n = [];
  switch (o) {
    case "allow":
      n = Z0(e);
      break;
    case "deny":
      n = Pd(e);
      break;
    case "ask":
      n = yu(e);
      break;
  }
  let s = [];
  for (let l of n) if (l.ruleValue.toolName === r && l.ruleValue.ruleContent !== void 0 && l.ruleBehavior === o) s.push(l);
  return s;
}
export {
  $7n,
  BWt,
  Bv,
  Cce,
  D7n,
  E8s,
  EWr,
  F7n,
  Fmn,
  H7n,
  J8,
  JC,
  Jjo,
  Jye,
  Jze,
  L7n,
  Lmn,
  N7n,
  Nmn,
  Pd,
  Q8,
  S8s,
  SWr,
  Tce,
  U7n,
  UWt,
  XTe,
  Xjo,
  Xze,
  YTe,
  Yjo,
  Yze,
  Z0,
  Z3,
  _8s,
  _Wr,
  _f,
  aL,
  aj,
  b8s,
  bWr,
  f8s,
  g8s,
  h8s,
  ij,
  kce,
  lj,
  m8s,
  nbi,
  oG,
  oo,
  p8s,
  qa,
  qjo,
  qre,
  rG,
  uDe,
  vbt,
  w8s,
  wWr,
  y8s,
  yWr,
  yu
};
