// linux/chrome/browser-batch.js — Claude Code 2.1.310（linux）模块 chunk-j4601ec1.js
import { En } from "../shared/chunk-3c6e6b31.js";
var za = "claude-in-chrome", Dor = "javascript_tool";
function vv(e) {
  return En(e) === za;
}
var t = "--claude-in-chrome-mcp";
function Z6o(e) {
  if (e.type !== void 0 && e.type !== "stdio") return false;
  return (e.command?.includes(t) ?? false) || (e.args?.some((o) => o.includes(t)) ?? false);
}
var wii = ["file_upload", "browser_batch"], Skt = [Dor, "read_page", "find", "form_input", "computer", "browser_batch", "navigate", "resize_window", "gif_creator", "upload_image", "get_page_text", "tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "read_console_messages", "read_network_requests", "shortcuts_list", "shortcuts_execute", "file_upload", "switch_browser", "list_connected_browsers", "select_browser"], IRe = "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.", vii = "Nothing was uploaded, and nothing else in this call ran. An upload may not run without a person's approval, and uploads can't be approved here yet. Repeating the call won't help. Ask the user to choose the file in their browser themselves.", Hor = "file_upload cannot run inside browser_batch in this session, and nothing in this call ran. If file_upload is among your tools, call it on its own.";
function ORe() {
  return { type: "stdio", command: process.execPath, args: [t], scope: "dynamic" };
}
export {
  Dor,
  Hor,
  IRe,
  ORe,
  Skt,
  Z6o,
  vii,
  vv,
  wii,
  za
};
