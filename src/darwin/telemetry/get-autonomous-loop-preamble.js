// darwin/telemetry/get-autonomous-loop-preamble.js — Claude Code 2.1.310（darwin）模块 chunk-c3j6hpkh.js
import { __asset_text } from "../../runtime/assets.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { ao, no } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { v, Kt } from "./anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { it, Xe, k } from "../settings/global-config-and-gates.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../git/utf-8.js";
import { a } from "./chunk-9097a12b.js";
import "./chunk-9d6962d2.js";
import "../artifacts/chunk-a6c9d164.js";
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
import "../fs/chunk-86be9585.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-1b1c4439.js";
import "../shell/invalid-type.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "../mcp/allowed-warning.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../shared/async-hooks.b037.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../fs/reply-across-default-dirs.js";
import "./chunk-b109a1d6.js";
import "./chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-dda594a8.js";
import { rm } from "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import "../shell/async-hooks.js";
import "../settings/chunk-9121eb73.js";
import { cHe } from "./kairos-push-notifications.js";
import "../shell/chunk-23a29f4d.js";
import "./pewter-owl-model.js";
import { B0 } from "./kairos-brief-stop-hook-text.js";
import { tl, $Qe, lHe, I5n, JA, Fd } from "../agents/chunk-25f20db5.js";
import { dct } from "../git/claude-pr-steward-is-working.js";
import { WO } from "../shared/chunk-fd6326ea.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { LU } from "../models/fable-5-1-prompt-bundle.js";
import "../shared/chunk-e9fc3352.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import { $e } from "../vendor/react/chunk-0b0bf45d.js";
import "../remote/chunk-95151620.js";
import { readFileSync as x } from "fs";
import { readFile as M } from "fs/promises";
import { join as L } from "path";
var p = __asset_text("prompts/loop/loopAutonomousPreamble.md");
var y = __asset_text("prompts/loop/loopAutonomousPreamblePersistent.md");
function c() {
  if (i.CLAUDE_CODE_LOOP_PERSISTENT) return true;
  return k("tengu_kairos_loop_persistent", false);
}
function I() {
  let e = c() ? y : p, t = dct({ forCloudSession: Boolean(i.CLAUDE_CODE_REMOTE) });
  return t ? `${e.trimEnd()}

${t}
` : e;
}
function P() {
  a("tengu_kairos_loop_persistent_activated", { variant: c() });
}
function s(e = false) {
  if (!cHe()) return "";
  let o = !e && c() ? "newly blocked on a decision you won't make alone, you're ending the loop" : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `

Use ${WO} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger — the transcript covers that. One ping per state, not per tick.`;
}
function _() {
  return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically — do not call ${tl} from this tick.${s()}`;
}
function d() {
  let e = it(), t = LU(Xe(e), e), o = B0(), r = o ? `send a brief status update for this tick via ${rm}` : "write a brief status update for this tick", n = t ? `Immediately before re-arming, ${r}.` : `After re-arming, ${r}.`;
  return `

If a ${Gs} is armed (check ${JA}), keep \`delaySeconds\` at 1200–1800s — the ${Gs} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${I5n({ preArmStatus: t, briefMode: o })} To stop the loop, call ${tl} with \`stop: true\` and ${Fd} the monitor (use ${JA} to find its task ID if no longer in context).`;
}
function N() {
  return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive, call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${lHe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) — otherwise the loop ends after this tick.${d()}${s()}`;
}
function A(e) {
  return e === $Qe || e === lHe;
}
function S(e, t) {
  if (!A(t)) return null;
  P();
  let o = t === lHe ? N() : _();
  if (e.autonomousPreambleDelivered || e.lastLoopFileDelivered !== null) return o;
  return e.autonomousPreambleDelivered = true, `${I()}

---

${o}`;
}
var w = "__autonomous_preamble__", D = "<<loop.md>>", l = "<<loop.md-dynamic>>";
function q() {
  return `# /loop tick — loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically — do not call ${tl} from this tick.${s(true)}`;
}
function j() {
  return `# /loop tick — loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive, call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) — otherwise the loop ends after this tick.${d()}${s(true)}`;
}
function B() {
  return `# /loop tick — loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive — and to pick up loop.md if it is recreated — call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) — otherwise the loop ends after this tick.${d()}${s()}`;
}
var h = 25e3;
function U(e) {
  if (e.length <= h) return e;
  let t = e.lastIndexOf(`
`, h);
  return `${e.slice(0, t > 0 ? t : h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`;
}
function W() {
  return b(T()) ?? b(O());
}
function T() {
  return L(no() ?? ao(), ".claude", "loop.md");
}
function O() {
  return L(Le(), "loop.md");
}
function b(e) {
  let t;
  try {
    t = x(e, "utf-8");
  } catch (o) {
    return R(o);
  }
  return g(e, t);
}
async function u(e) {
  let t;
  try {
    t = await M(e, "utf-8");
  } catch (o) {
    return R(o);
  }
  return g(e, t);
}
function R(e) {
  if (Kt(e) || v(e) === "EISDIR") return null;
  throw e;
}
function g(e, t) {
  let o = t.trim();
  if (o.length === 0) return null;
  return { path: e, content: U(o) };
}
async function Y(e) {
  let t = await u(T());
  if (t) return t;
  let o = O();
  if (!e) return u(o);
  let r = await e.read([je.state("loop-file")]);
  if (!r.ok) return u(o);
  let n = r.value.items[0];
  if (!n.found) return null;
  return g(o, Buffer.from(n.value.buffer, n.value.byteOffset, n.value.byteLength).toString("utf-8"));
}
function m(e) {
  return e === D || e === l;
}
function H(e, t) {
  if (!m(t)) return null;
  return E(e, t, W());
}
async function z(e, t, o) {
  if (!m(t)) return null;
  return E(e, t, await Y(o));
}
function E(e, t, o) {
  let r = t === l;
  if (o) {
    let f = r ? j() : q();
    if (e.lastLoopFileDelivered === o.content) return f;
    return e.lastLoopFileDelivered = o.content, `# /loop tick — tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`;
  }
  P();
  let n = r ? B() : _();
  if (e.lastLoopFileDelivered === w || e.autonomousPreambleDelivered) return n;
  return e.lastLoopFileDelivered = w, e.autonomousPreambleDelivered = true, `${I()}

---

${n}`;
}
function ye(e) {
  return A(e) || m(e);
}
function we(e, t) {
  return S(e, t) ?? H(e, t) ?? t;
}
async function ke(e, t, o) {
  return S(e, t) ?? await z(e, t, o) ?? t;
}
export {
  l as LOOP_FILE_DYNAMIC_SENTINEL,
  D as LOOP_FILE_SENTINEL,
  I as getAutonomousLoopPreamble,
  ye as isLoopDefaultSentinel,
  m as isLoopFileSentinel,
  P as logAutonomousLoopActivation,
  Y as readLoopFileAsync,
  we as resolveLoopDefaultFire,
  ke as resolveLoopDefaultFireAsync
};
