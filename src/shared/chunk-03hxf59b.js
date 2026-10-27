// shared/chunk-03hxf59b.js — Claude Code 2.1.310 模块 chunk-03hxf59b.js
import { eBn, yBe } from "../mcp/project-approval.4sms.js";
function vQt(e, n) {
  return { targets: e.filter((t) => eBn(t, n)), outOfBandNote: yBe(e, true, n) };
}
async function kQt(e, n) {
  let t = await Promise.allSettled(e.map((o) => n(o.name))), r = 0;
  for (let o of t) if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return { results: t, connected: r };
}
export {
  kQt,
  vQt
};
