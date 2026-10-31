// linux/computer-use/browser-batch.js — Claude Code 2.1.310（linux）模块 chunk-ra80mpyg.js
import { Hte } from "./ref-1.js";
import { jD } from "../chrome/chrome-open-url.js";
import { tne } from "../core/conversation-engine.js";
import { H } from "../shared/chunk-7027e6d5.js";
var a = { navigate: "navigate", read_page: "read the page", get_page_text: "extract page text", find: "find an element", form_input: "fill in a form field", javascript_tool: "run JavaScript", read_console_messages: "read console messages", read_network_requests: "read network requests", upload_image: "upload an image", file_upload: "upload a file", select_browser: "select a browser", gif_creator: "record a GIF of the page", shortcuts_execute: "run a saved browser shortcut", tabs_create_mcp: "open a new browser tab" }, i = { screenshot: "take a screenshot", left_click: "click", right_click: "right-click", middle_click: "middle-click", double_click: "double-click", triple_click: "triple-click", type: "type text", key: "press keys", hold_key: "hold a key", scroll: "scroll", scroll_to: "scroll to an element", left_click_drag: "drag", zoom: "zoom in", hover: "hover", mouse_move: "move the mouse", left_mouse_down: "press the mouse button", left_mouse_up: "release the mouse button", cursor_position: "read the cursor position", wait: "wait" }, c = 4;
function l(o) {
  let e = o.slice(0, c), r = o.length - e.length;
  if (r > 0) e.push(`${r} more`);
  if (e.length === 1) return e[0] ?? "";
  if (e.length === 2) return `${e[0]} and ${e[1]}`;
  return `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
function u(o) {
  if (!Array.isArray(o.actions)) return [];
  let e = /* @__PURE__ */ new Set(), r = [];
  for (let t of o.actions) {
    if (!H(t) || typeof t.name !== "string") continue;
    let n = H(t.input) ? t.input : {};
    if (t.name === "browser_batch" || Hte.has(t.name) && tne(t.name, n)) continue;
    let s = y9e(t.name, n);
    if (!e.has(s)) e.add(s), r.push(s);
  }
  return r;
}
function y9e(o, e) {
  let r = o.startsWith(jD) ? o.slice(jD.length) : o;
  if (r === "computer") {
    let t = typeof e.action === "string" ? e.action : void 0;
    if (t && i[t]) return i[t];
    return "use the browser";
  }
  if (r === "browser_batch") {
    let t = u(e);
    return t.length > 0 ? l(t) : "use the browser";
  }
  if (r === "tabs_context_mcp") return e.createIfEmpty ? "create a browser window and read your tabs" : "read your browser tabs";
  return a[r] ?? "use the browser";
}
export {
  y9e
};
