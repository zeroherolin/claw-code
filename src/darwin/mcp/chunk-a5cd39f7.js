// darwin/mcp/chunk-a5cd39f7.js — Claude Code 2.1.310（darwin）模块 chunk-4sncr48f.js
var GD = "WaitForMcpServers";
function eNo() {
  return ["Wait for MCP servers that are still connecting and whose tools are not", "yet in your tool list. Pass `servers` to wait for specific ones, or omit", "it to wait for all pending servers (once none is pending, a call without", "`servers` reports any server that failed to connect or is not configured).", "", ...["If the user's request needs tools from a still-connecting server, call this", "tool to wait for it. Once it connects, its tools will be added to your tool", "list and you can use them directly. Returns ready=true when servers are", "ready, ready=false if they failed to connect, need authentication, or are", "disabled."], "", "You do not need to ask the user for confirmation to use this tool."].join(`
`);
}
function Zh(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === true;
}
function BQe(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}
export {
  BQe,
  GD,
  Zh,
  eNo
};
