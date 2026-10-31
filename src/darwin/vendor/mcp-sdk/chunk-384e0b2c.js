// darwin/vendor/mcp-sdk/chunk-384e0b2c.js — Claude Code 2.1.310（darwin）模块 chunk-mcb3r2r5.js
import { R } from "../../telemetry/anthropic-workspace-id.js";
import { f } from "../../shared/chunk-2fe3b2b7.js";
import { Cir, kse } from "../../shell/invalid-type.js";
import { Fh } from "../../mcp/toolbox-mcp-server-id.js";
import { Yi } from "../../shared/chunk-62a451b1.js";
import { vn } from "../../shared/chunk-3c6e6b31.js";
import { yt } from "../zod/string-format.js";
var l = /* @__PURE__ */ new Set(["server/discover", "initialize", "notifications/initialized", "ping", "tools/list", "tools/call", "notifications/cancelled", "notifications/roots/list_changed"]);
function ix(e) {
  return kse({ serverName: e.name }) ? new R(Cir, "hosted desktop reached past its tools") : void 0;
}
function a0e(e, o) {
  let t = ix(e);
  if (t === void 0) return;
  let i = o.send.bind(o);
  o.send = async (n, ...s) => {
    if (!("method" in n ? typeof n.method === "string" && l.has(n.method) : !Array.isArray(n) && "id" in n && ("result" in n || "error" in n))) throw t;
    return i(n, ...s);
  };
}
function c(e) {
  if (vn(e.name) !== Fh) return;
  let o = import.meta.require("../../ide/is-remote-browser-mode-floor-on.js");
  return o.refusesRemoteBrowserCallOutsideChecks(e.name) ? Promise.reject(new R(o.REMOTE_BROWSER_OUTSIDE_CHECKS_REFUSED, "cloud browser called outside its permission check")) : void 0;
}
function r(e, o) {
  let t = ix(e) ?? void 0;
  return t && Promise.reject(t);
}
var d = "toolbox.text_blocks_left_out";
async function T2(e, o, t, i = false) {
  let n = await (r(e, i ? o.name : void 0) ?? c(e) ?? import.meta.require("../../mcp/emit-tripwire-event.js").mcpClientModule().invokeToolRaw(e.client, o, t));
  if (n._meta?.[d] !== void 0 && !(Array.isArray(n.content) && n.content.some((s) => s.type === "text"))) throw new R(`The result of MCP tool "${o.name}" on server "${e.name}" arrived without its text. A result that is too large arrives this way. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.`, "MCP tool result arrived without its text blocks");
  return n;
}
function Xgt(e, o, t) {
  return r(e) ?? import.meta.require("../../mcp/emit-tripwire-event.js").mcpClientModule().readResourceRaw(e.client, o, t);
}
function Jgt(e, o) {
  return r(e) ?? import.meta.require("../../mcp/emit-tripwire-event.js").mcpClientModule().listToolsRaw(e.client, o);
}
var a = f(() => yt({}));
function OIo(e, o, t) {
  return r(e) ?? (o.method === "tools/call" ? c(e) : void 0) ?? Yi(e.client).request(o, a(), { ...t, cacheMode: "bypass" });
}
function Y6(e, o, t) {
  import.meta.require("../../mcp/emit-tripwire-event.js").mcpClientModule().onMcpNotification(e, o, t);
}
function dhe(e, o) {
  Yi(e.client).onclose = o;
}
function sUs(e, o) {
  let t = Yi(e.client), i = t.onclose;
  t.onclose = () => {
    i?.(), o();
  };
}
function iUs(e, o) {
  return r(e) ?? Yi(e.client).notification(o);
}
function aUs(e, o) {
  Yi(e.client)?.transport?.onmessage?.(o);
}
export {
  Jgt,
  OIo,
  T2,
  Xgt,
  Y6,
  a0e,
  aUs,
  dhe,
  iUs,
  ix,
  sUs
};
