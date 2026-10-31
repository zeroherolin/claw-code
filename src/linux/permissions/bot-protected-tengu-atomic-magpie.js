// linux/permissions/bot-protected-tengu-atomic-magpie.js — Claude Code 2.1.310（linux）模块 chunk-39ayby14.js
import { U, es, Il, eg } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { fee } from "../shared/chunk-d2c47492.js";
import { L0e, ra, uo, Ar, Nx, kn, k } from "../settings/global-config-and-gates.js";
import { Rv, mf } from "../remote/local-agent.js";
import { Vd, Ior } from "../mcp/toolbox-mcp-server-id.js";
import { Qc, Cii } from "../context/fetch-project-timeline.js";
import { p6r, ni, Jx, Vs } from "../shell/invalid-type.js";
import { Is } from "../settings/workflow-launch-exec.js";
import { gc, Rse, cq, Tv, wM, tAt, har, Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { Efe, vQo, eEn, IH, Nr, io, Xo, $l, par, EQo, qot, kQo, eAt } from "../mcp/always-allow.js";
import { P9o } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ls, at, qt, Be, At } from "../mcp/allowed-warning.js";
import { nii } from "../agents/chunk-44729602.js";
import { Lr, yLe, eCe } from "../tools/device-session-limit.js";
import { Zu } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ht } from "../agents/chunk-5531d42a.js";
import { Ao } from "./max-thinking-tokens.js";
import { b$ } from "../tools/structured-output-tool.js";
import { WE } from "../mcp/chunk-7d9731c1.js";
import { DWt } from "../mcp/mcp-answer-stream-ended.js";
import { qn } from "../web/allow-web-fetch.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { qe } from "../shared/allow-large.js";
import { Tfe, n2, En } from "../shared/chunk-3c6e6b31.js";
import { ve } from "../shared/chunk-fee3c428.js";
var J = "bot_protected_tengu_atomic_magpie", Z = /* @__PURE__ */ new Set(["session", "cliArg"]), L = new W(() => ({ value: false }));
function wmn(e, r) {
  if (e === Qc && !Vd(r) && "url" in r && typeof r.url === "string" && Ior(r.url)) es(L).value = true;
}
function yce(e) {
  if (e !== qn && e !== Zu || !(es(L).value || i.CLAUDE_CODE_PROJECTS_SESSION || L0e(eg()))) return false;
  let r = kn(J, false);
  return !(r.value === true && r.source === "payload" && !Nx());
}
function O(e) {
  let r = typeof e !== "string", o = !r && Tv(e);
  return [qn, Zu].some((n) => (r || o || gc(e) === n) && yce(n) && (!o || tAt(e, n)));
}
function w(e, r) {
  return !Z.has(e) && yce(r);
}
function D() {
  return yce(qn) || yce(Zu);
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
function hJn(e, r) {
  if (!D()) return e;
  return bjo(e, O, r);
}
function bjo(e, r, o) {
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
function RWt(e, r) {
  let o = $l(e);
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
function W8(e, r, o) {
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
function G8() {
  return Xjr() || nii()?.convertedSkillsAsPlugins === true;
}
function Xjr() {
  return k(Q, false) === true;
}
function jY(e) {
  return e !== void 0 && Vs(Jx(e)) === ni && G8();
}
function yJn(e) {
  return mf() || !e && G8() && !Il();
}
function _Jn() {
  return mf() && G8();
}
var qG = "ListMcpResourcesTool", O3s = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`, M3s = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;
var Z1 = "ReadMcpResourceDirTool", R3s = `
List the direct children of a directory resource on an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the directory resource

Only usable against a server that has declared support for directory listing. The listing is not recursive.
`, x3s = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${DWt}" — call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;
var o0 = "ReadMcpResourceTool", P3s = `
Reads a specific resource from an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the resource to read

Usage examples:
- Read a resource from a server: \`readMcpResource({ server: "myserver", uri: "my-resource-uri" })\`
`, I3s = `
Reads a specific resource from an MCP server, identified by server name and resource URI.

Parameters:
- server (required): The name of the MCP server from which to read the resource
- uri (required): The URI of the resource to read
`;
var H = ve(/* @__PURE__ */ new Set(), (e) => e.clear());
function bJn(e, r) {
  let o = e.toolName;
  if (H.has(o)) return;
  H.add(o), t(r.mcpInfo ? `Allow rule "${o}" does not allow the tools named "${io(r.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${io(r.mcpInfo.serverName)}*".` : `Allow rule "${o}" does not allow "${r.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, { level: "warn" });
}
var ee = new W(() => /* @__PURE__ */ new Set());
function Jjr(e, r) {
  for (let o of r) b().add(Xo(e, o));
}
function M(e) {
  if (!e.startsWith("mcp__")) return false;
  for (let r of b()) if (e === r || eAt(e, { name: r })) return true;
  return false;
}
function D3s() {
  return b().size > 0;
}
function b() {
  return ee.of(U().host);
}
var re = [], SJn = [...re, "python", "python3", "python2", "node", "deno", "tsx", "ruby", "perl", "php", "lua", "npx", "bunx", "npm run", "yarn run", "pnpm run", "bun run", "bash", "sh", "ssh"], Sjo = [...SJn, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo"], Qjr = ["curl", "wget", "kubectl", "aws", "gcloud", "gsutil"], Zjr = [], B = /* @__PURE__ */ new Set([...Qjr, ...Zjr]), G = { kubectl: /* @__PURE__ */ new Set(["exec", "apply", "create", "delete", "run", "cp", "port-forward", "proxy", "patch", "edit", "replace", "attach", "debug", "scale", "rollout", "drain", "cordon", "taint"]), ...false }, j = [...Sjo, ...[]];
function eWr(e, r) {
  if (e !== Be) return false;
  if (r === void 0 || r === "") return true;
  if (/^[\s*]+$/.test(r)) return true;
  return wJn(r, j);
}
function wJn(e, r) {
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
function tWr(e, r) {
  if (e !== At) return false;
  if (r === void 0 || r === "") return true;
  if (/^[\s*]+$/.test(r)) return true;
  let o = r.trim().toLowerCase();
  if (o === "*") return true;
  let n = [...SJn, "pwsh", "powershell", "cmd", "wsl", "iex", "invoke-expression", "icm", "invoke-command", "start-process", "saps", "start", "start-job", "sajb", "start-threadjob", "invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "register-objectevent", "register-engineevent", "register-wmievent", "register-scheduledjob", "new-pssession", "nsn", "enter-pssession", "etsn", "add-type", "new-object"];
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
function bbi(e, r) {
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
function F2e() {
  return Rv() || P9o();
}
function xWt(e, r) {
  let o = `${e}\0${r ?? ""}`, n = K.lookup(o);
  if (n !== void 0) return n;
  let s = eWr(e, r) || tWr(e, r) || bbi(e, r) || ne(e) || e === import.meta.require("../shared/appifact-repl-tool-name.js").APPIFACT_REPL_TOOL_NAME;
  return K.remember(o, s), s;
}
function vmn(e) {
  return M($l(e)) || Rv() && xWt(e.name, void 0);
}
function _ce(e, r) {
  if ((e === Be || e === At) && F2e()) return true;
  if (M(e)) return true;
  return xWt(e, r);
}
function H3s(e) {
  if (e === Be || e === At) return F2e() ? void 0 : e;
  if (WE(e) || _ce(e, void 0) || vJn(e)) return;
  return e === qt || e === ra ? at : e;
}
var te = new Set(Array.from(Cii, (e) => Xo(Qc, e)));
function vJn(e) {
  return te.has(e);
}
var ej = [...Is, "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy", "hostCredential"], U2e = ["toolsNarrowing", "command"], se = /* @__PURE__ */ new Set([import.meta.require("../shared/end-conversation-gb-flag.js").END_CONVERSATION_TOOL_NAME]);
function YG(e) {
  return !e.mcpInfo && se.has(e.name);
}
function YD(e) {
  if (Ls(e.mode, e.servedCall === true)) {
    let n = i.CLAUDE_CODE_EVAL_CONFINED ? { cliArg: e.alwaysAllowRules.cliArg } : e.alwaysAllowRules, s = [];
    for (let l of ej) {
      let m = n[l];
      if (m === void 0) continue;
      for (let u of m) {
        let a = Bn(u);
        if (_ce(a.toolName, a.ruleContent)) continue;
        if (vJn(a.toolName)) continue;
        if (w(l, a.toolName)) continue;
        s.push({ source: l, ruleBehavior: "allow", ruleValue: a });
      }
    }
    return s;
  }
  if (i.CLAUDE_CODE_EVAL_CONFINED) return B2e({ cliArg: e.alwaysAllowRules.cliArg }, "allow");
  let r = B2e(e.alwaysAllowRules, "allow"), o;
  for (let [n, s] of r.entries()) if (w(s.source, s.ruleValue.toolName)) o ??= r.slice(0, n);
  else o?.push(s);
  return o ?? r;
}
function B2e(e, r) {
  let o = [];
  for (let n of ej) {
    let s = e[n];
    if (s === void 0) continue;
    for (let l of s) o.push({ source: n, ruleBehavior: r, ruleValue: Bn(l) });
  }
  return o;
}
function Pd(e) {
  return B2e(e.alwaysDenyRules, "deny");
}
function hu(e) {
  return B2e(e.alwaysAskRules, "ask");
}
function sLe(e, r, o = {}) {
  if (r.ruleValue.ruleContent !== void 0) return false;
  return y(e, r, o);
}
function y(e, r, { proxyExpansion: o = false, globMatching: n = false, toolAliases: s } = {}, l = x(r), m = S(e, s)) {
  if (r.ruleBehavior !== "allow" && e.mcpInfo !== void 0) {
    let d = { proxyExpansion: o, globMatching: n, toolAliases: s };
    if (m.otherDenyOrAskReads().some((T) => y({ name: T.name }, r, d, l, T))) return true;
    let p = eEn(r.ruleValue.toolName, m.name);
    if (p !== void 0 && y({ name: p.row }, I(p.rule, r), d)) return true;
  }
  let u = m.name;
  if (r.ruleValue.toolName === u) return true;
  let a = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (a !== void 0 && e.mcpInfo === void 0 && r.ruleValue.toolName === a) return true;
  if (o && Rse(r.ruleValue.toolName, s).includes(u)) return true;
  let { matchesGlob: f } = l;
  if (n && f !== void 0 && (f(u) || o && m.aliasSources().some(f))) return true;
  let c = l.coversMcpTool(m.mcpInfo());
  if (r.ruleBehavior === "allow") {
    if (!c) return false;
    if (kQo(r.ruleValue.toolName, e)) return true;
    return bJn(r.ruleValue, e), false;
  }
  return c || X(r) && m.mcpServerRuleNames().includes(r.ruleValue.toolName);
}
function X({ source: e, ruleValue: r }) {
  return e !== "mcpServerPolicy" && r.toolName.startsWith(IH);
}
function x({ ruleValue: { toolName: e } }) {
  let r, o;
  return { matchesGlob: Tv(e) ? (n) => (r ??= har(e))(n) : void 0, coversMcpTool: (n) => (o ??= EQo(e))(n) };
}
function S(e, r) {
  let o = $l(e), n, s, l, m;
  return { name: o, mcpInfo: () => m === void 0 ? m = Nr(o) : m, aliasSources: () => n ??= cq(o, r), mcpServerRuleNames: () => s ??= qot(e), otherDenyOrAskReads: () => l ??= par(e).map((u) => S({ name: u }, r)) };
}
function tj(e, r) {
  return YD(e).find((o) => sLe(r, o)) || null;
}
function E(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function UE(e, r, o, n = x(o), s, l = false) {
  let m = { proxyExpansion: E(o), globMatching: true, toolAliases: e.toolAliases };
  if (y(r, o, m, n, s)) return true;
  if (("aliasSkillToolNames" in r ? r.aliasSkillToolNames : void 0)?.some((f) => y({ name: f }, o, m, n))) return true;
  let a = "packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames : void 0;
  if (a === void 0 || Tv(o.ruleValue.toolName) && !yJn(l)) return false;
  return a.some((f) => y({ name: f }, o, m, n));
}
function oo(e, r, o, n = false) {
  if (YG(r)) return null;
  let s;
  return (o ?? Pd(e)).find((l) => v(r, l, e, void 0, s ??= S(r, e.toolAliases), n)) || null;
}
function wjo(e) {
  return /^[\s*]+$/.test(e);
}
function ie(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"));
}
var q = [at, qt, ra], z = [qe, Ar, uo], le = /* @__PURE__ */ new Map([[qe, { deny: [...z, at, qt], ask: z }], [at, { deny: q, ask: q }]]);
function C({ ruleBehavior: e, ruleValue: { toolName: r, ruleContent: o } }, n) {
  if (o === void 0 || e === "allow") return false;
  return r === Be ? n === Be && wjo(o) : ie(o) && (le.get(r)?.[e] ?? []).includes(n);
}
function v(e, r, o, n, s, l = false) {
  if (r.ruleValue.ruleContent === void 0) return UE(o, e, r, n, s, l);
  let { name: m, aliasSources: u } = s ?? S(e, o.toolAliases), a = r.ruleValue.toolName === m, f = E(r);
  return u().some((c) => c !== m && (f && C(r, c) || a && C(I(c, r), c)));
}
function I(e, r) {
  return { ...r, ruleValue: { ...r.ruleValue, toolName: e } };
}
function vjo(e) {
  if (Tv(e)) return true;
  let r = Nr(e);
  return r !== null && r.toolName === void 0;
}
function Emn(e, r) {
  let o = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l = [], m = [];
  for (let u of r) {
    let { toolName: a, ruleContent: f } = u.ruleValue;
    if (f !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, p]) => C(u, d) || p === a && C(I(d, u), d))) m.push(u);
      continue;
    }
    if (vjo(a) || vQo(a)) {
      l.push({ rule: u, ruleName: x(u) });
      continue;
    }
    if (X(u)) s.add(a);
    n.add(a);
    let c = E(u) ? Rse(a, e.toolAliases) : [a];
    for (let d of c) o.add(d);
  }
  return { names: o, parentNames: n, mcpServerNames: s, patterns: l, withContent: m };
}
function zye(e) {
  let r = Pd(e);
  return { rules: r, index: Emn(e, r) };
}
function WAe(e, r, o) {
  if (YG(o) || r.names.size === 0 && r.patterns.length === 0 && r.withContent.length === 0) return false;
  let n = S(o, e.toolAliases);
  if (r.names.has(n.name)) return true;
  if (n.otherDenyOrAskReads().some((u) => r.names.has(u.name) || u.mcpServerRuleNames().some((a) => r.mcpServerNames.has(a)))) return true;
  let s = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (s !== void 0 && o.mcpInfo === void 0 && r.parentNames.has(s)) return true;
  let l = "aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0;
  if (l?.some((u) => r.names.has(u))) return true;
  let m = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (m?.some((u) => r.names.has(u))) return true;
  if (r.mcpServerNames.size > 0 && (n.mcpServerRuleNames().some((u) => r.mcpServerNames.has(u)) || [...l ?? [], ...m ?? []].some((u) => qot({ name: u }).some((a) => r.mcpServerNames.has(a))))) return true;
  return r.patterns.some(({ rule: u, ruleName: a }) => v(o, u, e, a, n)) || n.aliasSources().length > 0 && r.withContent.some((u) => v(o, u, e, void 0, n));
}
function L3s(e, r) {
  if (!YG(r)) return false;
  if (YD(e).some((n) => n.ruleValue.toolName === r.name)) return false;
  return Pd(e).some((n) => sLe(r, n, { proxyExpansion: E(n), globMatching: true, toolAliases: e.toolAliases }));
}
function bce(e, r, o) {
  return Pd(e).find((n) => n.ruleValue.toolName === r && n.ruleValue.ruleContent === o) || null;
}
function N3s(e, r, o) {
  return hu(e).find((n) => n.ruleValue.toolName === r && n.ruleValue.ruleContent === o) || null;
}
function $3s(e, r, o) {
  let n = /* @__PURE__ */ new Set();
  for (let s of Pd(r)) if (s.ruleValue.toolName === o && s.ruleValue.ruleContent !== void 0) n.add(s.ruleValue.ruleContent);
  return e.filter((s) => !n.has(s.agentType));
}
function Va(e, r, o) {
  if (YG(r)) return null;
  let n;
  return (o ?? hu(e)).find((s) => v(r, s, e, void 0, n ??= S(r, e.toolAliases))) || null;
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
function hSt(e, r) {
  return `Permission to use ${e} with ${r.ruleValue.ruleContent} has been denied.`;
}
var me = /* @__PURE__ */ new Set([qG, Z1, o0, b$]);
function bp(e, r, o, n) {
  let s = $l(r), l = [..."aliasSkillToolNames" in r ? r.aliasSkillToolNames ?? [] : [], ..."packagingAliasSkillToolNames" in r ? r.packagingAliasSkillToolNames ?? [] : []], m = [[s, false], ...par(r).map((a) => [a, false]), ...r.mcpInfo !== void 0 && Efe() ? (n === "deny" ? Pd(e) : hu(e)).map((a) => a.ruleValue.toolName).filter((a) => {
    let f = eEn(a, s);
    return f !== void 0 && f.rule === f.row;
  }).map((a) => [a, false]) : [], ...l.map((a) => [a, false]), ...cq(s, e.toolAliases).map((a) => [a, true])];
  for (let [a, f] of m) {
    let c = GAe(e, a, n).filter((d) => !f || E(d));
    for (let [d = "", p] of new Map(c.map((T) => [T.ruleValue.ruleContent, T]))) {
      let T = ue(d);
      if (T === null) continue;
      let { key: A, expected: R } = T;
      if (A === r.ruleContentField) continue;
      let h = A === yLe && !Object.hasOwn(o, A) && Object.hasOwn(o, Lr) ? Lr : A;
      if (!Object.hasOwn(o, h)) continue;
      let g = ae(o[h]);
      if (g === null) continue;
      if (wM(R, g.trim())) return p;
      if (h === "server" && me.has(a)) {
        let _ = R.replace(/[^a-zA-Z0-9_*-]/g, "_"), N = _.replace(/_+/g, "_").replace(/_$/, "").replace(/_?\*/g, "*");
        if ([g.trim(), g].map(En).flatMap((P) => [P, fee(P, "_").replace(/^_+/, "")]).some((P) => R.startsWith(Tfe) ? wM(N, P) : wM(_, P) || R.includes("*") && !_.startsWith("_") && `${P}_`.startsWith(n2) && wM(N, P))) return p;
      }
      if (h === Lr && (R.includes("*") ? wM(R.toLowerCase(), g.trim()) : eCe(R, g.trim()))) return p;
      if (s === Ao && h === "skill") {
        let _ = g.trim(), N = p6r(_);
        if (N !== void 0) {
          if ((!R.includes("*") || mf()) && wM(R, N)) return p;
        }
      }
    }
  }
  let u = "familyParentToolName" in r ? r.familyParentToolName : void 0;
  if (u !== void 0 && r.mcpInfo === void 0 && r.toFamilyParentInput !== void 0) return bp(e, { name: u, ruleContentField: r.ruleContentField }, r.toFamilyParentInput(o), n);
  return null;
}
function jre(e, r, o) {
  return YT(e, $l(r), o);
}
function YT(e, r, o) {
  let n = /* @__PURE__ */ new Map();
  for (let s of GAe(e, r, o)) if (s.ruleValue.ruleContent !== void 0) n.set(s.ruleValue.ruleContent, s);
  return n;
}
function GAe(e, r, o) {
  let n = [];
  switch (o) {
    case "allow":
      n = YD(e);
      break;
    case "deny":
      n = Pd(e);
      break;
    case "ask":
      n = hu(e);
      break;
  }
  let s = [];
  for (let l of n) if (l.ruleValue.toolName === r && l.ruleValue.ruleContent !== void 0 && l.ruleBehavior === o) s.push(l);
  return s;
}
export {
  $3s,
  B2e,
  D3s,
  Emn,
  F2e,
  G8,
  GAe,
  H3s,
  I3s,
  Jjr,
  L3s,
  M3s,
  N3s,
  O3s,
  P3s,
  Pd,
  Qjr,
  R3s,
  RWt,
  SJn,
  Sjo,
  U2e,
  UE,
  Va,
  W8,
  WAe,
  Xjr,
  YD,
  YG,
  YT,
  Z1,
  Zjr,
  _Jn,
  _ce,
  bJn,
  bbi,
  bce,
  bjo,
  bp,
  eWr,
  ej,
  hJn,
  hSt,
  hu,
  jY,
  jre,
  o0,
  oo,
  qG,
  sLe,
  tWr,
  tj,
  vJn,
  vjo,
  vmn,
  wJn,
  wjo,
  wmn,
  x3s,
  xWt,
  yJn,
  yce,
  zye
};
