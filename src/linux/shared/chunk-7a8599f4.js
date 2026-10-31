// linux/shared/chunk-7a8599f4.js — Claude Code 2.1.310（linux）模块 chunk-mk2r9qgw.js
import { X } from "./chunk-57ff8cc1.js";
import { io, jc } from "../mcp/always-allow.js";
import { hye } from "./chunk-51932285.js";
import { Pa } from "../agents/chunk-f334f2d3.js";
function lBr(o, e) {
  if (o.type !== "pending") return false;
  let n = io(o.name);
  return !e.some((t) => jc(t, o.name, n));
}
async function dBr(o, e, n) {
  let { maxWaitMs: t, until: s, pollMs: l = 50 } = n, i = (r) => r.clients.some((c) => e(c, r));
  if (!i(o())) return;
  let p = Date.now() + t;
  while (Date.now() < p) {
    await X(l);
    let r = o();
    if (s?.(r) || !i(r)) return;
  }
}
function cFo(o) {
  return o.some(sAe);
}
function sAe(o) {
  return "role" in o.config && o.config.role === "comms";
}
function F_t(o) {
  return o.mcpInfo?.role === "comms";
}
function zde(o) {
  if (Pa()) return o.filter((e) => !F_t(e));
  return o;
}
async function yZe(o) {
  if (!Pa()) return;
  await dBr(o, (e, n) => lBr(e, n.tools) && !sAe(e), { maxWaitMs: hye });
}
export {
  F_t,
  cFo,
  dBr,
  lBr,
  sAe,
  yZe,
  zde
};
