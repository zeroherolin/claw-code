// linux/ide/chunk-2bb82cbe.js — Claude Code 2.1.310（linux）模块 chunk-pxbfpj2f.js
import { i } from "../shared/environment.js";
import { platform as r } from "os";
function jUe() {
  return r() === "darwin" && i.terminal === "Apple_Terminal" || i.terminal === "vscode" || i.terminal === "cursor" || i.terminal === "windsurf" || i.terminal === "alacritty" || i.terminal === "zed";
}
export {
  jUe
};
