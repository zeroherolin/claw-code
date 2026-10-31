// linux/cli/chunk-29c07bf4.js — Claude Code 2.1.310（linux）模块 chunk-ehkxehn3.js
import { i } from "../shared/environment.js";
var dMt = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function hNn() {
  let { columns: r, rows: e } = process.stdout;
  if (!r || !e) return {};
  return { [dMt]: `${r}x${e}` };
}
function wks() {
  let r = i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if (delete process.env[dMt], r === void 0 || !process.stdout.isTTY) return;
  let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);
  if (!e) return;
  process.stdout.columns ||= Number(e[1]), process.stdout.rows ||= Number(e[2]);
}
export {
  dMt,
  hNn,
  wks
};
