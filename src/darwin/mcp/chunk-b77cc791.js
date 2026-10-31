// darwin/mcp/chunk-b77cc791.js — Claude Code 2.1.310（darwin）模块 chunk-sxezd9qj.js
import { An } from "../fs/gitlab-runner-authentication-token.js";
import { wpe } from "../shell/invalid-type.js";
function iJr(t, n) {
  let e = An(t), r = n.map(An).sort(), s = wpe(e, r.map((d) => ({ name: d })), { maxEditDistance: 2 });
  if (s) return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8, a = r.slice(0, o).join(", "), i = r.length > o ? ` (and ${r.length - o} more — run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}
function uAn(t, n, e) {
  if (e && n.length === 0) return `No MCP server named "${An(t)}". ${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."}`;
  return iJr(t, n) + (e ? ` (${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."})` : "");
}
export {
  iJr,
  uAn
};
