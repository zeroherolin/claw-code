// darwin/cli/chunk-29c07bf4.js — Claude Code 2.1.310（darwin）模块 chunk-q1qhrnhf.js
import { i } from "../shared/environment.js";
var hMt = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function PNn() {
  let { columns: r, rows: e } = process.stdout;
  if (!r || !e) return {};
  return { [hMt]: `${r}x${e}` };
}
function Zks() {
  let r = i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if (delete process.env[hMt], r === void 0 || !process.stdout.isTTY) return;
  let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);
  if (!e) return;
  process.stdout.columns ||= Number(e[1]), process.stdout.rows ||= Number(e[2]);
}
export {
  PNn,
  Zks,
  hMt
};
