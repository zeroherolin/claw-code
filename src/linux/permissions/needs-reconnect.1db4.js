// linux/permissions/needs-reconnect.1db4.js — Claude Code 2.1.310（linux）模块 chunk-mf2b7b0w.js
import { H7e } from "../shared/needs-reconnect.js";
var D7e = "SearchMcpRegistry", I0o = "Search the MCP connector registry by keyword to discover connectors that might help complete the task.", e = `Search the MCP connector registry by keyword. Call this when connecting to an MCP server might help complete the task — whether or not the user named a specific product.

Named-product examples:
- "check my Asana tasks" → keywords ["asana", "tasks", "todo"]
- "find issues in Jira" → keywords ["jira", "issues"]

Intent-based examples (no product named):
- "help me manage my tasks" → keywords ["tasks", "todo", "project management"]
- "pull up the design mockups" → keywords ["design", "figma", "mockup"]

Returns a ranked list with directoryUuid, name, description, sample tool names, installState (org-level), and enabledInChat (this session). Results include the org's custom connectors (ones the org configured that are not in the public directory) when they match the keywords. enabledInChat: false with installState: "connected" means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings.`, n = ` enabledInChat: false with installState: "needs_reconnect" means the connector needs the user to sign in to it again; if the task needs it, call ${H7e} with its directoryUuid so the app can offer them a way to do that, and do not tell them to enable it for this chat.`, t = " If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.", O0o = e + t, M0o = e + n + t;
export {
  D7e,
  I0o,
  M0o,
  O0o
};
