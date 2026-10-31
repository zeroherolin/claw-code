// linux/shared/start-hosted-worker-vitals-emitter.js — Claude Code 2.1.310（linux）模块 chunk-1rj35x4j.js
import "./chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import "../cli/chunk-af2447be.js";
import { pNe } from "../mcp/toolbox-mcp-server-id.js";
import { bt, t } from "../fs/gitlab-runner-authentication-token.js";
import "./chunk-50219e50.js";
import "../fs/backed-up.js";
import "./chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "./chunk-0870a9b4.js";
import { i } from "./environment.js";
import "./chunk-de56f88d.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "./async-hooks.5238.js";
import "../fs/utf-8.8f8e.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import { Pse, _$e } from "../auth/descriptor-direct.js";
import { dCn } from "../shell/ccr-vitals-emitter.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "./chunk-8bf008d9.js";
import "./chunk-6da6c5a3.js";
import "../remote/chunk-95151620.js";
async function _({ sessionId: e, sdkUrl: s }) {
  try {
    let r = i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse;
    if (!(await bl(r, _$e))?.trim()) {
      t("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let o = await dCn({ sessionId: e, apiBaseUrl: pNe(new URL(s)).origin, tokenFilePath: r, binaryResolution: "search", log: t });
    if (o) bt(() => o.stop());
  } catch (r) {
    t(`[vitals] not started: ${d(r)}`);
  }
}
export {
  _ as startHostedWorkerVitalsEmitter
};
