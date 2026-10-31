// linux/remote/chunk-95151620.js — Claude Code 2.1.310（linux）模块 chunk-6jbh8yja.js
import { Ne } from "../fs/async-hooks.93b1.js";
function vFe() {
  return Ne(process.env.CLAUDE_CODE_REMOTE) && String(process.env.CLAUDE_CODE_ENVIRONMENT_KIND ?? "").trim() === "";
}
var s = /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function sd() {
  {
    let e = process.argv;
    if (e[2] !== "mcp" || e[3] !== "serve") return false;
    let [, , t, ...r] = e.slice(2), n = t === "--transport=http" ? r : t === "--transport" && r[0] === "http" ? r.slice(1) : void 0;
    return vFe() && n !== void 0 && n.every((o) => s.test(o));
  }
  return false;
}
export {
  sd,
  vFe
};
