// linux/mcp/claudeai-proxy.8e2e.js — Claude Code 2.1.310（linux）模块 chunk-e40v5eqb.js
import { wi } from "../plugins/skills-dir.js";
import { Ir } from "../shell/invalid-type.js";
import { UD } from "./mcp-drive-file-reference-upload.js";
import { Sii } from "./toolbox-mcp-server-id.js";
import { Nrr } from "./allowed-warning.js";
var t = "(value set by your organization)";
function Y6e(r, e) {
  if (e !== "managed") return r;
  return { ...r, url: Sii(r.url) ?? t, ...r.headers && { headers: Ir(r.headers, () => t) } };
}
function Idt(r) {
  return r === "cached" ? "pending" : r;
}
function eDn(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = Y6e({ type: e.config.type, url: e.config.url, headers: e.config.headers }, e.config.scope);
    else if (e.config.type === "claudeai-proxy") o = { type: "claudeai-proxy", url: e.config.url, id: e.config.id };
    else if (e.config.type === "stdio" || e.config.type === void 0) o = { type: "stdio", command: e.config.command, args: e.config.args };
    return { name: e.name, status: Idt(e.type), config: o, scope: e.config.scope, source: UD(e.name, e.config), serverInfo: wi(e) ? e.serverInfo : void 0, error: e.type === "failed" ? e.error : void 0, error_code: Nrr(e) };
  });
}
export {
  Idt,
  Y6e,
  eDn
};
