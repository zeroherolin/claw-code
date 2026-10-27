// shared/chunk-d2n9q5xz.js — Claude Code 2.1.310 模块 chunk-d2n9q5xz.js
import { Pe } from "./chunk-3kevgx4j.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { Plr } from "../shell/chunk-tjkwy3jp.js";
import { UP } from "../context/team-memory-sync.0s3j.js";
import { hTo } from "../core/conversation-engine.31gx.js";
var e = 2e3;
async function xPt() {
  if (O() === "windows") {
    UP();
    return;
  }
  await Pe(hTo().catch(() => {
    return;
  }), e);
}
function gfs() {
  return O() === "windows" || Plr() !== void 0;
}
export {
  gfs,
  xPt
};
