// darwin/shared/chunk-93d557e4.js — Claude Code 2.1.310（darwin）模块 chunk-c2x9q9ej.js
import { ke } from "../context/not-admin-owned.js";
import { nwe } from "../fs/node-modules.js";
import { i } from "./environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { vd } from "../fs/chunk-b6c2193e.js";
import { homedir as o } from "os";
var guo = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function hws() {
  let r = await vd(process.pid);
  if (r === void 0) return {};
  return { [guo]: `${process.pid}:${r}` };
}
async function yws() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return false;
  let e = O() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return false;
  if (!nwe(ke(), o())) return false;
  let t = await vd(e, { skipCache: true });
  return t !== void 0 && t === r[2];
}
export {
  guo,
  hws,
  yws
};
