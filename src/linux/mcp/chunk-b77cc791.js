// linux/mcp/chunk-b77cc791.js — Claude Code 2.1.310（linux）模块 chunk-2sb1rsed.js
import { Cn } from "../fs/gitlab-runner-authentication-token.js";
import { mfe } from "../shell/invalid-type.js";
function LJr(t, n) {
  let e = Cn(t), r = n.map(Cn).sort(), s = mfe(e, r.map((d) => ({ name: d })), { maxEditDistance: 2 });
  if (s) return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8, a = r.slice(0, o).join(", "), i = r.length > o ? ` (and ${r.length - o} more — run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}
function VAn(t, n, e) {
  if (e && n.length === 0) return `No MCP server named "${Cn(t)}". ${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."}`;
  return LJr(t, n) + (e ? ` (${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."})` : "");
}
export {
  LJr,
  VAn
};
