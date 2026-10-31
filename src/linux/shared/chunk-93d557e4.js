// linux/shared/chunk-93d557e4.js — Claude Code 2.1.310（linux）模块 chunk-nzvp0yb4.js
import { ke } from "../context/not-admin-owned.js";
import { YSe } from "../fs/node-modules.js";
import { i } from "./environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { kd } from "../fs/chunk-b6c2193e.js";
import { homedir as o } from "os";
var zco = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function BSs() {
  let r = await kd(process.pid);
  if (r === void 0) return {};
  return { [zco]: `${process.pid}:${r}` };
}
async function jSs() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return false;
  let e = O() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return false;
  if (!YSe(ke(), o())) return false;
  let t = await kd(e, { skipCache: true });
  return t !== void 0 && t === r[2];
}
export {
  BSs,
  jSs,
  zco
};
