// shared/chunk-016wy1mn.js — Claude Code 2.1.310 模块 chunk-016wy1mn.js
import { Ti } from "../settings/global-config-and-gates.27xj.js";
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Ly } from "../auth/policy-limits-principal-changed.cb7h.js";
import { Jsn, Qsn, U6n } from "../core/conversation-engine.31gx.js";
import { cG } from "../settings/built-in.5fzv.js";
import { t2 } from "../remote/managed-settings-security-dialog-accepted.19jv.js";
import { tGe } from "../telemetry/started-after-init-empty.2bpk.js";
var f = 3e3;
function aoo(e = {}) {
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
    cG();
  } catch (s) {
    l(N(s));
  }
  let o = false, [i, a, m, g] = await Promise.all([n("the plugin-hook registration pass", async () => {
    await Qsn();
  }), n("the remote managed-settings load", t2), n("the policy-limits load", Ly), n("the first flag fetch", async () => {
    let { timedOut: s } = await tGe({ initialize: Ti, budgetMs: e });
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
    let e = await Jsn(false) ?? await U6n();
    if (e !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, { level: "error" });
  } catch (e) {
    l(N(e));
  }
}
export {
  aoo
};
