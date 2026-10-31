// agents/register-managed-agents-secure-guard.bt1q.js — Claude Code 2.1.310 模块 chunk-bt1q6nhj.js
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import { m$, PA } from "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import { S, c } from "./third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../cli/chunk-33ax6j5s.js";
import "../mcp/toolbox-mcp-server-id.fewh.js";
import "../artifacts/chunk-m8t7qekn.js";
import "../remote/self-hosted.qq4m.js";
import "../context/fetch-project-timeline.g27d.js";
import "../mcp/claude-browser.hdf6.js";
import "../shared/chunk-xz73gv4f.js";
import "../shared/chunk-cg45s1mf.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import "../shared/chunk-nyvhtfb3.js";
import "../auth/profile-explicit.b7t3.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import "../shared/chunk-5x6nmyvf.js";
import "../git/utf-8.vh7e.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../shared/async-hooks.m2fg.js";
import "../shared/async-hooks.923e.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import "../shared/chunk-z6efcye4.js";
import "../git/utf8-keep-bom.c49x.js";
import "../shell/chunk-gx93fya1.js";
import "../git/chunk-q8vnfcnf.js";
import "../shared/chunk-abagh0tt.js";
import "../shared/chunk-daaayw23.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.7pve.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../fs/utf-8.fmbx.js";
import "../fs/async-hooks.2k4e.js";
import "../plugins/chunk-x0a7sawk.js";
import "../shell/invalid-type.qnva.js";
import "../fs/chunk-w461d8x8.js";
import "../remote/local-agent.we9a.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import "../terminal/chunk-9vttrktj.js";
import "../mcp/chunk-ykcv164t.js";
import "../mcp/always-allow.9m89.js";
import "../plugins/skills-dir.cemw.js";
import "../fs/chunk-gzs70jxe.js";
import "../settings/workflow-launch-exec.t4r2.js";
import "../shared/chunk-s56ftfc1.js";
import "../remote/moved-directory.z3m0.js";
import "../models/total-tokens-reminder.psq3.js";
import "../mcp/init-function-end.wpfb.js";
import "../shell/spawn-error.7yg0.js";
import "../fs/content-encoding.v6wj.js";
import "../auth/descriptor-direct.zd2z.js";
import "../fs/ca-certs-load.ft7b.js";
import "../git/ssh-placeholder.1144.js";
import "../telemetry/chunk-8c3dyx0k.js";
import "../fs/redirected-statement.agpk.js";
import "../telemetry/chunk-w9t64bcr.js";
import { tj, _Wt } from "../shell/tree-sitter-parse-abort.f8t3.js";
import { Gs } from "../shared/chunk-7f6mb04e.js";
import { Be, Tt } from "../mcp/allowed-warning.j2d4.js";
import "../shared/chunk-dpjnt83j.js";
import "../models/claude-mythos-preview.rw6s.js";
import "../shared/sk-ant-sid.0hme.js";
import "../shared/chunk-s06z5etx.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import "../shared/chunk-19a02m7w.js";
import "../remote/chunk-t0kv6pst.js";
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
    let { SKILL_FILES: r } = await import("../skills/skill-claude-api.t6ee.js");
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
