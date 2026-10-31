// linux/shared/chunk-84e3ba80.js — Claude Code 2.1.310（linux）模块 chunk-zdentnfg.js
import { wi } from "../plugins/skills-dir.js";
import { Por } from "../mcp/toolbox-mcp-server-id.js";
function l9e(t) {
  let r = [];
  for (let o of t) {
    if (!wi(o)) continue;
    let { config: e } = o, n = e && typeof e === "object" && "url" in e && typeof e.url === "string" ? e.url : null;
    if (n !== null && Por(n)) r.push(o);
  }
  return r.length === 1 ? r[0] : null;
}
export {
  l9e
};
