// mcp/emit-tripwire-event.zkve.js — Claude Code 2.1.310 模块 chunk-zkvegk0m.js
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import { S, c } from "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { izo } from "../telemetry/chunk-mnx6nmek.js";
import { Zs } from "../telemetry/chunk-wq923bwc.js";
import { qi } from "../shared/async-hooks.t1gs.js";
import "../settings/global-config-and-gates.27xj.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import "../git/utf-8.vh7e.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../artifacts/chunk-m8t7qekn.js";
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
import "../fs/chunk-gzs70jxe.js";
import "../shared/chunk-nyvhtfb3.js";
import "../remote/local-agent.we9a.js";
import "./toolbox-mcp-server-id.fewh.js";
import "./claude-browser.hdf6.js";
import "../cli/chunk-33ax6j5s.js";
import "../remote/self-hosted.qq4m.js";
import "../context/fetch-project-timeline.g27d.js";
import "../shared/chunk-xz73gv4f.js";
import "../shell/invalid-type.qnva.js";
import "../settings/workflow-launch-exec.t4r2.js";
import "../fs/chunk-w461d8x8.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import "../terminal/chunk-9vttrktj.js";
import "./chunk-ykcv164t.js";
import "./always-allow.9m89.js";
import "../plugins/skills-dir.cemw.js";
import "../shared/chunk-s56ftfc1.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import "../remote/moved-directory.z3m0.js";
import "./init-function-end.wpfb.js";
import "../models/total-tokens-reminder.psq3.js";
import "../shell/spawn-error.7yg0.js";
import "../vendor/chalk/xterm-ghostty.qrwz.js";
import "./allowed-warning.j2d4.js";
import "../fs/content-encoding.v6wj.js";
import "../auth/descriptor-direct.zd2z.js";
import "../vendor/aws-sdk/ca-certs-load.ft7b.js";
import "../shared/chunk-cg45s1mf.js";
import "../auth/secure-storage-credentials-write.vafw.js";
import "../auth/claude-code-user.tvhr.js";
import "../shell/find-generic-password.dx7z.js";
import "../auth/profile-explicit.b7t3.js";
import "../fs/chunk-tzqhxyjb.js";
import "../fs/chunk-q5g832za.js";
import "../shared/chunk-w13tcac4.js";
import "../auth/auth-launcher-host-login.9f3m.js";
import "../permissions/turn-abort.yvwf.js";
import "../settings/ax-sr-suggestion-nav.8qsa.js";
import "../fs/reply-across-default-dirs.esvz.js";
import "../telemetry/chunk-8c3dyx0k.js";
import "../telemetry/chunk-w9t64bcr.js";
import "../agents/chunk-j350yvzv.js";
import "../git/get-url.pbym.js";
import "../shared/chunk-nfgwaxf2.js";
import "../shared/chunk-vf2gp3w9.js";
import "../artifacts/cobalt-plinth-lovage.hxm5.js";
import "../computer-use/chunk-ec42nx0x.js";
import "../workflows/chunk-exaq0a52.js";
import "../agents/session-stable-address.6kf8.js";
import "../agents/in-process-teammate.5te1.js";
import "../shared/chunk-5x6nmyvf.js";
import "../git/ssh-placeholder.1144.js";
import { jO } from "../telemetry/mcp-sdk-generation.2z48.js";
import "../shared/chunk-ztrzej16.js";
import "../shared/chunk-zmrs49f3.js";
import "../shared/chunk-dpjnt83j.js";
import "../models/claude-mythos-preview.rw6s.js";
import "../shared/sk-ant-sid.0hme.js";
import "../shared/chunk-s06z5etx.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../vendor/aws-sdk/chunk-yc0hxjyg.js";
import "../shared/chunk-n07cvysj.js";
import "../shared/chunk-19a02m7w.js";
import "../remote/chunk-t0kv6pst.js";
function n(t, e) {
  if (!qi().claim("mcp_tree_id_tripwire")) return;
  izo(Zs("tengu_mcp_tripwire", { expected: c(t), loaded: e === "v1" || e === "v2" ? c(e) : S("other") }).catch(() => {
  }));
}
function m() {
  if (jO() === "v2") {
    let i = import.meta.require("./apply-capability-serve-time-miss.3j3b.js"), o = i.MCP_TREE_ID;
    if (o !== "v2") throw n("v2", o), Error("MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2");
    return i;
  }
  let t = import.meta.require("./apply-capability-serve-time-miss.pghm.js"), e = t.MCP_TREE_ID;
  if (e !== "v1") throw n("v1", e), Error("MCP runtime accessor tripwire: resolved generation is v1 but the loaded client module does not carry MCP_TREE_ID v1");
  return t;
}
function d() {
  if (jO() === "v2") return import.meta.require("./apply-capability-serve-time-miss.3j3b.js").createSep2663TaskBinding;
  return;
}
function l() {
  if (jO() === "v2") return import.meta.require("../auth/authorization-url-for-debug-log.bspk.js");
  return import.meta.require("../auth/authorization-url-for-debug-log.vjcw.js");
}
function y() {
  if (jO() === "v2") return import.meta.require("../hooks/handle-elicitation-request.ew1e.js");
  return import.meta.require("../hooks/handle-elicitation-request.v3mk.js");
}
function _() {
  if (jO() === "v2") return import.meta.require("./bound-mcp-status-message.tevr.js");
  return import.meta.require("./bound-mcp-status-message.4xb5.js");
}
function v() {
  if (jO() === "v2") return import.meta.require("./get-mcp-error-code.9cz9.js");
  return import.meta.require("./get-mcp-error-code.dqvb.js");
}
function j() {
  if (jO() === "v2") return import.meta.require("./read-mcp-directory.xpsf.js");
  return import.meta.require("./read-mcp-directory.c0en.js");
}
function M() {
  if (jO() === "v2") return import.meta.require("../auth/is-claude-ai-bearer-rejected-error.acax.js");
  return import.meta.require("../auth/is-claude-ai-bearer-rejected-error.8b41.js");
}
function E() {
  if (jO() === "v2") return import.meta.require("../auth/acquire-idp-id-token.zq2t.js");
  return import.meta.require("../auth/acquire-idp-id-token.f4st.js");
}
function h() {
  return import.meta.require("./get-mcp-skill.3ec9.js");
}
export {
  n as emitTripwireEvent,
  l as mcpAuthModule,
  m as mcpClientModule,
  j as mcpDirectoryReadModule,
  y as mcpElicitationHandlerModule,
  M as mcpIsListAuthErrorModule,
  v as mcpSdkErrorClassificationModule,
  d as mcpSep2663TaskBinding,
  h as mcpSkillsListModule,
  _ as mcpTaskWatcherModule,
  E as mcpXaaIdpLoginModule
};
