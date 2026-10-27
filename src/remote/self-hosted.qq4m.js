// remote/self-hosted.qq4m.js — Claude Code 2.1.310 模块 chunk-qq4mp4x7.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { C5 } from "../artifacts/chunk-m8t7qekn.js";
class o {
  captured = r();
  capturedOwn = n();
  carrier = s();
  ownSessionIds = i();
  selfHostedRunnerChild = t();
  get atStartup() {
    return this.captured;
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn;
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds;
  }
  get isSelfHostedRunnerChild() {
    return this.selfHostedRunnerChild;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    this.captured = r(), this.capturedOwn = n(), this.carrier = s(), this.ownSessionIds = i(), this.selfHostedRunnerChild = t();
  }
}
var yd = new o();
function r() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function n() {
  return process.env.SESSION_INGRESS_URL !== void 0;
}
function s() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Ne(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}
function i() {
  return [process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID].filter((e) => e !== void 0 && C5(e));
}
function t() {
  return Ne(process.env.CLAUDE_CODE_REMOTE) && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
export {
  yd
};
