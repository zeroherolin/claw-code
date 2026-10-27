// shared/start-hosted-worker-vitals-emitter.nr0s.js — Claude Code 2.1.310 模块 chunk-nr0sx2y6.js
import "./chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import "./chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "./chunk-3y73jbfr.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../cli/chunk-33ax6j5s.js";
import { SNe } from "../mcp/toolbox-mcp-server-id.fewh.js";
import { _t, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "./chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "./chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "./chunk-nrx8c90j.js";
import { i } from "./environment.9a41.js";
import "./chunk-4kxy1036.js";
import "../remote/local-agent.we9a.js";
import "../remote/moved-directory.z3m0.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "./async-hooks.m2fg.js";
import "../fs/utf-8.7pve.js";
import "../shell/chunk-gx93fya1.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.fmbx.js";
import { $se, AFe } from "../auth/descriptor-direct.zd2z.js";
import { CAn } from "../shell/ccr-vitals-emitter.t6q3.js";
import { bl } from "../fs/reply-across-default-dirs.esvz.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "./chunk-bhdett2m.js";
import "./chunk-n07cvysj.js";
import "../remote/chunk-t0kv6pst.js";
async function _({ sessionId: e, sdkUrl: s }) {
  try {
    let r = i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? $se;
    if (!(await bl(r, AFe))?.trim()) {
      t("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let o = await CAn({ sessionId: e, apiBaseUrl: SNe(new URL(s)).origin, tokenFilePath: r, binaryResolution: "search", log: t });
    if (o) _t(() => o.stop());
  } catch (r) {
    t(`[vitals] not started: ${d(r)}`);
  }
}
export {
  _ as startHostedWorkerVitalsEmitter
};
