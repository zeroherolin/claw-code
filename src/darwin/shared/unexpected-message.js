// darwin/shared/unexpected-message.js — Claude Code 2.1.310（darwin）模块 chunk-q1azmzmz.js
import { D } from "./chunk-7027e6d5.js";
function b1n(e) {
  return "method" in e && "id" in e && e.id !== null;
}
var hpt = Object.freeze({}), ypt = Object.freeze({ name: "claude-code", title: "Claude Code", description: "Anthropic's agentic coding tool", websiteUrl: "https://claude.com/claude-code" }), n = Symbol("swallow");
class ntn {
  serverName;
  sendMcpMessage;
  isClosed = false;
  manifestInitializeResult;
  manifestToolsListResult;
  swallowNextInitializedNotification = false;
  outcome;
  onclose;
  onerror;
  onmessage;
  constructor(e, t, i) {
    this.serverName = e;
    this.sendMcpMessage = t;
    this.manifestInitializeResult = i?.initializeResult, this.manifestToolsListResult = i?.toolsListResult, this.outcome = i === void 0 ? "none" : "pending";
  }
  get manifestOutcome() {
    return this.outcome;
  }
  async start() {
  }
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    let t = this.answerFromManifest(e);
    if (t === n) return;
    if (t !== void 0) {
      queueMicrotask(() => this.onmessage?.(t));
      return;
    }
    let i = await this.sendMcpMessage(this.serverName, e);
    if (this.onmessage) this.onmessage(i);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = true, this.onclose?.();
  }
  answerFromManifest(e) {
    if (this.manifestInitializeResult === void 0 && this.manifestToolsListResult === void 0 && !this.swallowNextInitializedNotification) return;
    if (!("method" in e)) {
      this.dropManifest("unexpected_message");
      return;
    }
    switch (e.method) {
      case "initialize": {
        let t = this.manifestInitializeResult;
        if (t === void 0 || !("id" in e)) {
          this.dropManifest("unexpected_message");
          return;
        }
        this.manifestInitializeResult = void 0;
        let i = e.params;
        if (i === void 0 || typeof i.protocolVersion !== "string" || i.protocolVersion !== t.protocolVersion) {
          this.dropManifest("protocol_version_mismatch");
          return;
        }
        if (!r(i.capabilities)) {
          this.dropManifest("client_capabilities_declared");
          return;
        }
        if (!o(t)) {
          this.dropManifest("malformed_result");
          return;
        }
        return this.swallowNextInitializedNotification = true, this.outcome = "replayed", { jsonrpc: "2.0", id: e.id, result: t };
      }
      case "notifications/initialized": {
        if (!this.swallowNextInitializedNotification) {
          this.dropManifest("unexpected_message");
          return;
        }
        return this.swallowNextInitializedNotification = false, n;
      }
      case "tools/list": {
        let t = this.manifestToolsListResult;
        if (t === void 0 || !("id" in e) || this.swallowNextInitializedNotification || e.params !== void 0 && e.params.cursor !== void 0) {
          this.dropManifest("unexpected_message");
          return;
        }
        if (this.manifestToolsListResult = void 0, !o(t)) return;
        return { jsonrpc: "2.0", id: e.id, result: t };
      }
      default: {
        this.dropManifest("unexpected_message");
        return;
      }
    }
  }
  dropManifest(e) {
    if (this.manifestInitializeResult = void 0, this.manifestToolsListResult = void 0, this.swallowNextInitializedNotification = false, this.outcome === "pending") this.outcome = e;
  }
}
function r(e) {
  return D(e) && Object.keys(e).length === 0;
}
function o(e) {
  let t = e._meta;
  if (t === void 0) return true;
  if (!D(t)) return false;
  let { progressToken: i } = t;
  if (i !== void 0 && typeof i !== "string" && typeof i !== "number") return false;
  let s = t["io.modelcontextprotocol/related-task"];
  return s === void 0 || D(s) && typeof s.taskId === "string";
}
class KSo {
  sendMcpMessage;
  isClosed = false;
  constructor(e) {
    this.sendMcpMessage = e;
  }
  onclose;
  onerror;
  onmessage;
  async start() {
  }
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage(e);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = true, this.onclose?.();
  }
}
export {
  KSo,
  b1n,
  hpt,
  ntn,
  ypt
};
