// darwin/chrome/browser-batch.js — Claude Code 2.1.310（darwin）模块 chunk-ny0f62md.js
import { vn } from "../shared/chunk-3c6e6b31.js";
var Va = "claude-in-chrome", Qor = "javascript_tool";
function vE(e) {
  return vn(e) === Va;
}
var t = "--claude-in-chrome-mcp";
function R9o(e) {
  if (e.type !== void 0 && e.type !== "stdio") return false;
  return (e.command?.includes(t) ?? false) || (e.args?.some((o) => o.includes(t)) ?? false);
}
var sai = ["file_upload", "browser_batch"], Rkt = [Qor, "read_page", "find", "form_input", "computer", "browser_batch", "navigate", "resize_window", "gif_creator", "upload_image", "get_page_text", "tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "read_console_messages", "read_network_requests", "shortcuts_list", "shortcuts_execute", "file_upload", "switch_browser", "list_connected_browsers", "select_browser"], LRe = "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.", iai = "Nothing was uploaded, and nothing else in this call ran. An upload may not run without a person's approval, and uploads can't be approved here yet. Repeating the call won't help. Ask the user to choose the file in their browser themselves.", Zor = "file_upload cannot run inside browser_batch in this session, and nothing in this call ran. If file_upload is among your tools, call it on its own.";
function NRe() {
  return { type: "stdio", command: process.execPath, args: [t], scope: "dynamic" };
}
export {
  LRe,
  NRe,
  Qor,
  R9o,
  Rkt,
  Va,
  Zor,
  iai,
  sai,
  vE
};
