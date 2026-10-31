// linux/shared/chunk-49bf58d9.js — Claude Code 2.1.310（linux）模块 chunk-4ga6249h.js
import { Pe } from "./chunk-57ff8cc1.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { mlr } from "../shell/chunk-8eebd6c6.js";
import { $P } from "../context/team-memory-sync.js";
import { BTo } from "../core/conversation-engine.js";
var e = 2e3;
async function vPt() {
  if (O() === "windows") {
    $P();
    return;
  }
  await Pe(BTo().catch(() => {
    return;
  }), e);
}
function Jfs() {
  return O() === "windows" || mlr() !== void 0;
}
export {
  Jfs,
  vPt
};
