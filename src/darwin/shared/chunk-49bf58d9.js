// darwin/shared/chunk-49bf58d9.js — Claude Code 2.1.310（darwin）模块 chunk-d2n9q5xz.js
import { Pe } from "./chunk-57ff8cc1.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Plr } from "../shell/chunk-8eebd6c6.js";
import { UP } from "../context/team-memory-sync.js";
import { hTo } from "../core/conversation-engine.js";
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
