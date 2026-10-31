// linux/shared/chunk-3c923a97.js — Claude Code 2.1.310（linux）模块 chunk-1k75jqmm.js
import { HBn, l1e } from "../mcp/project-approval.js";
function f7t(e, n) {
  return { targets: e.filter((t) => HBn(t, n)), outOfBandNote: l1e(e, true, n) };
}
async function p7t(e, n) {
  let t = await Promise.allSettled(e.map((o) => n(o.name))), r = 0;
  for (let o of t) if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return { results: t, connected: r };
}
export {
  f7t,
  p7t
};
