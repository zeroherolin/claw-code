// shared/chunk-mx0zhxnp.js — Claude Code 2.1.310 模块 chunk-mx0zhxnp.js
import { wi } from "../plugins/skills-dir.cemw.js";
import { qor } from "../mcp/toolbox-mcp-server-id.fewh.js";
function hYe(t) {
  let r = [];
  for (let o of t) {
    if (!wi(o)) continue;
    let { config: e } = o, n = e && typeof e === "object" && "url" in e && typeof e.url === "string" ? e.url : null;
    if (n !== null && qor(n)) r.push(o);
  }
  return r.length === 1 ? r[0] : null;
}
export {
  hYe
};
