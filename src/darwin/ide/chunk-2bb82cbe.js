// darwin/ide/chunk-2bb82cbe.js — Claude Code 2.1.310（darwin）模块 chunk-rkkx3mwy.js
import { i } from "../shared/environment.js";
import { platform as r } from "os";
function XUe() {
  return r() === "darwin" && i.terminal === "Apple_Terminal" || i.terminal === "vscode" || i.terminal === "cursor" || i.terminal === "windsurf" || i.terminal === "alacritty" || i.terminal === "zed";
}
export {
  XUe
};
