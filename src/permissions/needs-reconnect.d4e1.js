// permissions/needs-reconnect.d4e1.js — Claude Code 2.1.310 模块 chunk-d4e160pv.js
var TZt = "ListConnectors", ryo = "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.";
var oyo = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable — treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings. To recommend connectors the user does NOT have yet, use SearchMcpRegistry → SuggestConnectors instead; this tool does not itself connect anything.`, syo = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable — treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings. enabledInChat: false with installState: "needs_reconnect" means the connector needs the user to sign in to it again — tell them to do that from the connector card, or from their connector settings if they see no card, and do not tell them to enable it for this chat. To recommend connectors the user does NOT have yet, use SearchMcpRegistry → SuggestConnectors instead; this tool does not itself connect anything.`;
export {
  TZt,
  oyo,
  ryo,
  syo
};
