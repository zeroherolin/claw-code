// shared/chunk-hfmb03fw.js — Claude Code 2.1.310 模块 chunk-hfmb03fw.js
import { X } from "./chunk-3kevgx4j.js";
import { io, jc } from "../mcp/always-allow.9m89.js";
import { Eye } from "./chunk-xbqn04a1.js";
import { Ia } from "../agents/chunk-a331t11a.js";
function R1r(o, e) {
  if (o.type !== "pending") return false;
  let n = io(o.name);
  return !e.some((t) => jc(t, o.name, n));
}
async function x1r(o, e, n) {
  let { maxWaitMs: t, until: s, pollMs: l = 50 } = n, i = (r) => r.clients.some((c) => e(c, r));
  if (!i(o())) return;
  let p = Date.now() + t;
  while (Date.now() < p) {
    await X(l);
    let r = o();
    if (s?.(r) || !i(r)) return;
  }
}
function $$o(o) {
  return o.some(uTe);
}
function uTe(o) {
  return "role" in o.config && o.config.role === "comms";
}
function V_t(o) {
  return o.mcpInfo?.role === "comms";
}
function Zde(o) {
  if (Ia()) return o.filter((e) => !V_t(e));
  return o;
}
async function CZe(o) {
  if (!Ia()) return;
  await x1r(o, (e, n) => R1r(e, n.tools) && !uTe(e), { maxWaitMs: Eye });
}
export {
  $$o,
  CZe,
  R1r,
  V_t,
  Zde,
  uTe,
  x1r
};
