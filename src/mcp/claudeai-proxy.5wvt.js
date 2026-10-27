// mcp/claudeai-proxy.5wvt.js — Claude Code 2.1.310 模块 chunk-5wvtd2hp.js
import { wi } from "../plugins/skills-dir.cemw.js";
import { Ir } from "../shell/invalid-type.qnva.js";
import { G0 } from "./mcp-drive-file-reference-upload.nfj5.js";
import { oai } from "./toolbox-mcp-server-id.fewh.js";
import { tor } from "./allowed-warning.j2d4.js";
var t = "(value set by your organization)";
function n9e(r, e) {
  if (e !== "managed") return r;
  return { ...r, url: oai(r.url) ?? t, ...r.headers && { headers: Ir(r.headers, () => t) } };
}
function Hdt(r) {
  return r === "cached" ? "pending" : r;
}
function g0n(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = n9e({ type: e.config.type, url: e.config.url, headers: e.config.headers }, e.config.scope);
    else if (e.config.type === "claudeai-proxy") o = { type: "claudeai-proxy", url: e.config.url, id: e.config.id };
    else if (e.config.type === "stdio" || e.config.type === void 0) o = { type: "stdio", command: e.config.command, args: e.config.args };
    return { name: e.name, status: Hdt(e.type), config: o, scope: e.config.scope, source: G0(e.name, e.config), serverInfo: wi(e) ? e.serverInfo : void 0, error: e.type === "failed" ? e.error : void 0, error_code: tor(e) };
  });
}
export {
  Hdt,
  g0n,
  n9e
};
