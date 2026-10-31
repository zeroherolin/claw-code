// linux/shared/chunk-01a82714.js — Claude Code 2.1.310（linux）模块 chunk-df6f3hb4.js
import { Ai } from "../settings/global-config-and-gates.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Dy } from "../auth/policy-limits-principal-changed.js";
import { Lsn, Nsn, bKn } from "../core/conversation-engine.js";
import { tz } from "../settings/built-in.js";
import { KW } from "../remote/managed-settings-security-dialog-accepted.js";
import { zGe } from "../telemetry/started-after-init-empty.js";
var f = 3e3;
function qro(e = {}) {
  let r = e.firstFlagFetchWaitMs ?? f, o = false, i;
  return { get ready() {
    return o;
  }, whenReady: () => i ??= d(r).then(() => {
    o = true, c();
  }) };
}
async function d(e) {
  let r = performance.now();
  try {
    tz();
  } catch (s) {
    l(N(s));
  }
  let o = false, [i, a, m, g] = await Promise.all([n("the plugin-hook registration pass", async () => {
    await Nsn();
  }), n("the remote managed-settings load", KW), n("the policy-limits load", Dy), n("the first flag fetch", async () => {
    let { timedOut: s } = await zGe({ initialize: Ai, budgetMs: e });
    o = !s;
  })]);
  t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}
async function n(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (i) {
    t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, { level: "error" }), l(N(i));
  }
  return Math.round(performance.now() - o);
}
async function c() {
  try {
    let e = await Lsn(false) ?? await bKn();
    if (e !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, { level: "error" });
  } catch (e) {
    l(N(e));
  }
}
export {
  qro
};
