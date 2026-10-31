// darwin/agents/register-managed-agents-secure-guard.js — Claude Code 2.1.310（darwin）模块 chunk-bt1q6nhj.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { m$, PA } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { S, c } from "./third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import "../cli/chunk-af2447be.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../artifacts/chunk-a6c9d164.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-1b1c4439.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../shared/chunk-2fe3b2b7.js";
import "../auth/profile-explicit.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-537f65d6.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shell/invalid-type.js";
import "../fs/chunk-475c6783.js";
import "../remote/local-agent.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-86be9585.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../remote/moved-directory.js";
import "../models/total-tokens-reminder.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../git/ssh-placeholder.js";
import "../telemetry/chunk-b109a1d6.js";
import "../fs/redirected-statement.js";
import "../telemetry/chunk-addb1ac7.js";
import { tj, _Wt } from "../shell/tree-sitter-parse-abort.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { Be, Tt } from "../mcp/allowed-warning.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
var G = /* @__PURE__ */ new Map([["--agent-id", /^agent_[A-Za-z0-9]+$/], ["--environment-id", /^env_[A-Za-z0-9]+$/], ["--vault-id", /^vlt_[A-Za-z0-9]+$/]]), B = /^[1-9][0-9]*$/, J = /\bant\b/i, H = /(?:^|[^A-Za-z0-9_])(?:agent|env|vlt)_(?:staging|vrtx|bdrk)_/, p = /(?:^|[^A-Za-z0-9_])(?:agent|env|vlt)_local_/g, q = /^(?:--[a-z][a-z-]*=)?(?:agent|env|vlt)_local_01[1-9A-HJ-NP-Za-km-z]{22}$/, P = /['"\\`\u2018-\u201f]/g, V = /^(?:~?\/(?:[\w.-]+\/)*)?ant(?:\.exe)?$/, K = /^ant(?:\.exe)?$/, X = /* @__PURE__ */ new Set(["&", "subshell", "compound_statement", "if_statement", "case_statement"]), I = String.raw`'([^'"\r\n\u2018-\u201f]*)'|([\w:./=~-]+)`, Y = /^(?:cd '[^'"\r\n\u2018-\u201f]*' && )+/, Q = /^(?:Set-Location -LiteralPath '[^'"\r\n\u2018-\u201f]*'(?: -ErrorAction Stop)?; )+/, ee = "Claude Code did not run this command: it holds a --transform from the /claude-api managed-agents-secure instructions but is not that `ant` command as written. Run each of those commands alone and exactly as written, with each ID typed inside its single quotes (agent_, env_ or vlt_, then only letters and digits). Add --version only to `ant beta:agents retrieve`, as a whole number with no leading zero. If an ID or version read from the account has another form, do not run the command: ask the developer about it, and mark each report row that needs it CAN'T TELL.", te = "Claude Code did not run this command: it holds an ID starting agent_, env_ or vlt_ then staging_, vrtx_ or bdrk_, which `ant` commands may not use. Do not run the command another way: tell the developer which ID was refused and ask where it came from. If this is part of /claude-api managed-agents-secure, mark each report row that needs it CAN'T TELL.", ne = "Claude Code did not run this command: it holds an ID starting agent_local_, env_local_ or vlt_local_, and the ID or the command around it is not in the one form Claude Code accepts. Such IDs come from a self-hosted or local Managed Agents server. Each such ID in the command must have the form agent_, env_ or vlt_, then local_01, then 22 letters and digits other than 0, O, I and l, and must be typed in full as its own argument to ant or ant.exe, named in lowercase with no path. Only cd into a folder, or another ant command, may come before ant; do not run ant through or feed it from another program such as timeout, echo or xargs. The command must be Bash made of plain commands joined by &&, || or ;, with at most one | after ant, into a program such as jq. It must not use: & to run a command in the background; VAR=value, export or any other variable setting; a redirect such as > file or 2>&1; if, for, while, case or function; a ( ) or { } group; $ variables; $( ), <( ), >( ) or backtick substitutions; or here-documents or <<< strings. To reach a self-hosted server, pass its address with ant's --base-url flag, not a variable. If ant is not on PATH, ask the developer to add its folder to PATH in their shell settings and restart Claude Code. If this is part of /claude-api managed-agents-secure, do not run the command again: mark each report row that needs the ID CAN'T TELL. Otherwise, if the ID came from such a server and already has that form, you may run the command again following these rules; if not, do not change the ID: ask the developer where it came from.", M = "Claude Code did not run this command: /claude-api managed-agents-secure does not support self-hosted or local Managed Agents servers, whose IDs start agent_local_, env_local_ or vlt_local_. Do not run the command another way: tell the developer which ID was refused and that /claude-api managed-agents-secure checks only agents on Anthropic's Managed Agents API, ask where the ID came from, and mark each report row that needs it CAN'T TELL.", x = { type: "callback", callback: oe, timeout: 10, internal: true }, R;
function he() {
  if ((PA()?.PreToolUse ?? []).some((s) => s.hooks.some((o) => o === x))) return;
  m$({ PreToolUse: [{ matcher: `${Be}|${Tt}|${Gs}`, hooks: [x] }] });
}
async function oe(r) {
  if (r.hook_event_name !== "PreToolUse") return {};
  let s = r.tool_input, o = typeof s === "object" && s !== null && "command" in s ? s.command : void 0;
  if (typeof o !== "string") return {};
  let d = r.tool_name === Tt ? "powershell" : "bash", h = o.replace(P, ""), n = d === "bash" ? await tj(o) : void 0, z = n?.kind === "simple" ? J.test(h) || n.commands.some(({ argv: e }) => e.some((t) => /(?:^|\/)ant(?:\.exe)?$/i.test(t))) : true, b = n?.kind === "simple" ? n.commands.flatMap(({ argv: e }) => e).join(" ") : "", w = [o, o.replace(/\\\n/g, "")].map((e) => e.replace(P, "")), O = w.some((e) => (e.match(p) ?? []).length > 0) || (b.match(p) ?? []).length > 0, j = n?.kind === "simple" ? n.commands.findLastIndex(({ argv: e }) => e.some((t) => (t.match(p) ?? []).length > 0)) : -1, y = O && n?.kind === "simple" && !/\$\(|`|<<|[<>]\(/.test(o) && _Wt(n.commands).ok && n.bareAssignmentNames.length === 0 && n.hasLoop === false && n.tree !== void 0 && !U(n.tree) && n.commands.every(({ argv: e, argvSourceLiteral: t, envVars: _, redirects: m }, i) => t === true && _.length === 0 && (i > j || m.length === 0 && (K.test(e[0] ?? "") || e.length === 2 && e[0] === "cd" && (e[1]?.match(p) ?? []).length === 0))) ? n.commands.flatMap(({ argv: e }) => e.filter((t) => (t.match(p) ?? []).length > 0)) : void 0, D = y !== void 0 && y.every((e) => q.test(e)) && w.every((e) => (e.match(p) ?? []).length === y.length), A = w.some((e) => H.test(e)) || H.test(b);
  if (z && (A || O && !D)) {
    a("tengu_claude_api_ant_command_refused", { shell: c(d), cause: A ? S("id_with_second_part") : S("id_with_local_part") });
    let e = !A && (await W().catch(() => [])).some(({ transform: t }) => h.includes(t));
    return F(A ? te : e ? M : ne);
  }
  let v = await W(), l, k;
  if (d === "powershell") {
    l = v.find(({ transform: t }) => h.includes(t))?.words;
    let e = o.replace(Q, "");
    k = /^[ \t\n]*['"]/.test(e) ? void 0 : E(e);
  } else if (n?.kind !== "simple") l = v.find(({ transform: e }) => h.includes(e))?.words;
  else {
    let e = n.commands.filter(({ argv: i }) => v.some(({ transform: g }) => i.includes(g)));
    l = (v.find(({ transform: i }) => e.some(({ argv: g }) => g.includes(i))) ?? v.find(({ transform: i }) => h.includes(i)))?.words;
    let t = n.commands.at(-1), _ = n.commands.slice(0, -1), m = E(o.replace(Y, ""));
    k = e.length === 1 && n.bareAssignmentNames.length === 0 && n.hasLoop === false && t !== void 0 && t === e[0] && m !== void 0 && m.length === t.argv.length && m.every((i, g) => i === t.argv[g]) && t.envVars.length === 0 && t.redirects.length === 0 && t.argvSourceLiteral === true && _.every(({ argv: i, envVars: g, redirects: Z }) => i.length === 2 && i[0] === "cd" && g.length === 0 && Z.length === 0) ? t.argv : void 0;
  }
  if (l === void 0) return {};
  let u = k ?? [], f = l[1] === "beta:agents" && l[2] === "retrieve" ? u.findIndex((e, t) => t > 2 && (e === "--version" || e.startsWith("--version="))) : -1, L = u[f]?.startsWith("--version=") === true, T = L ? u[f]?.slice(10) : u[f + 1], C = f === -1 ? u : T !== void 0 && B.test(T) && !(u[f - 1] ?? "").startsWith("-") ? [...u.slice(0, f), ...u.slice(f + (L ? 1 : 2))] : [];
  if (C.length === l.length && l.every((e, t) => {
    let _ = G.get(l[t - 1] ?? ""), m = C[t] ?? "";
    return _ !== void 0 ? _.test(m) : t === 0 ? V.test(m) : m === e;
  })) return {};
  let N = O && D;
  return a("tengu_claude_api_ant_command_refused", { shell: c(d), cause: N ? S("local_id") : S("managed_agents_secure_command_changed") }), F(N ? M : ee);
}
async function W() {
  if (R === void 0) {
    let { SKILL_FILES: r } = await import("../skills/skill-claude-api.js");
    R = (r["shared/managed-agents-secure.md"] ?? "").split(`
`).filter((s) => s.startsWith("ant beta:")).flatMap((s) => {
      let o = E(s), d = o?.indexOf("--transform") ?? -1, h = d === -1 ? void 0 : o?.[d + 1];
      return o !== void 0 && h ? [{ words: o, transform: h }] : [];
    });
  }
  return R;
}
function U(r) {
  return X.has(r.type) || r.children.some((s) => U(s));
}
function E(r) {
  let s = r.replace(/^[ \t\n]+|[ \t\n]+$/g, "");
  if (!new RegExp(`^(?:${I})(?:[ \\t]+(?:${I}))*$`).test(s)) return;
  return [...s.matchAll(new RegExp(I, "g"))].map((d) => d[1] ?? d[2] ?? "");
}
function F(r) {
  return { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: r } };
}
export {
  he as registerManagedAgentsSecureGuard
};
