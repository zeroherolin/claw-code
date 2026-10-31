// linux/mcp/project-approval.js — Claude Code 2.1.310（linux）模块 chunk-f786enhh.js
import { Rr } from "../telemetry/anthropic-workspace-id.js";
import { Qz } from "../shell/invalid-type.js";
import { F } from "../context/not-admin-owned.js";
import { co, ore, Zzs, Zdn, RO } from "./declared-tools-dropped-at-compaction.js";
import { eZ } from "../settings/global-config-and-gates.js";
import { wi } from "../plugins/skills-dir.js";
function gEe(e) {
  return e.type;
}
function JTr(e) {
  return e.type === "failed" && !RO(e) || e.type === "needs-auth";
}
function HBn(e, n) {
  return JTr(e) && !n(e.name);
}
function iHt(e) {
  let n = gEe(e);
  switch (n) {
    case "disabled":
    case "pending":
    case "needs-approval":
      return n;
    case "connected":
    case "failed":
    case "needs-auth":
    case "cached":
      return null;
    default:
      return n;
  }
}
function a1e(e) {
  return `"${co(e)}" is disabled — enable it in /mcp first`;
}
function aHt(e, n) {
  return `MCP server ${co(e)} is disabled — enable it (mcp_toggle) before ${n}`;
}
function bft(e, n) {
  return `MCP server ${co(e)} is not approved for this project — approve it in /mcp before ${n}`;
}
function Gae(e) {
  return `"${co(e)}" was disabled in another session — disable and re-enable it in /mcp, or restart, to reconnect`;
}
function ctn(e) {
  let n = co(e), t = `"${e}" was re-enabled in another session, so this disable didn't persist — /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return Qz(e) && [...t].length <= 1024 ? t : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function l1e(e, n, t) {
  if (!n) {
    let o = F(e, (s) => s.type === "disabled" && !t(s.name));
    if (o === 0) return null;
    let l = F(e, (s) => s.type === "disabled" && t(s.name));
    return `${o} MCP server(s) were re-enabled in another session, so this disable didn't persist for them — enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "");
  }
  let r = e.filter((o) => o.type !== "disabled" && gEe(o) !== "needs-approval" && t(o.name));
  if (r.length === 0) return null;
  let i = F(r, wi), c = F(r, (o) => !wi(o) && RO(o)), d = r.length - i - c, a = [];
  if (d > 0) a.push(`${d} MCP server(s) were disabled in another session — disable and re-enable them in /mcp, or restart, to reconnect.`);
  if (c > 0) a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet — there's nothing to reconnect until they are.`);
  if (i > 0) a.push(`${i} MCP server(s) are still available in this session but were disabled in another — they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
  return a.join(" ");
}
function QTr(e) {
  return `"${co(e)}" is blocked by your organization's managed policy — it can't be authenticated or reconnected here`;
}
function d1e(e) {
  return `Claude Code refuses MCP server "${co(e)}" because it reserves that address for its own use. No administrator set this. Retrying won't help, only removing it or changing its address.`;
}
function ZTr(e) {
  return `"${co(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project — approve it via /mcp first, then authenticate or reconnect it`;
}
function dK(e, n, t, r) {
  return n === "project-approval" ? ZTr(e) : eZ(e, t) ? d1e(e) : r ?? QTr(e);
}
function Mbo(e, n, t, r) {
  if (n !== "project-approval" && eZ(e, t)) return new Rr(d1e(e), "MCP server refused at a reserved address");
  return n === "project-approval" ? new Rr(ZTr(e), "MCP server not approved for this project") : new Rr(r ?? QTr(e), "MCP server blocked by enterprise managed policy");
}
function jb(e, n, t) {
  return e === "project-approval" ? { error: Zzs, errorCode: "APPROVAL_REQUIRED" } : { error: eZ(n, t) ? Zdn : ore, errorCode: "POLICY_BLOCKED" };
}
function LBn(e) {
  return e.type === "failed" && e.errorCode === "POLICY_BLOCKED";
}
function utn(e) {
  return `"${co(e)}" is still available in this session, but another session disabled it — it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function Dbo(e, n) {
  if (n === "ide") throw new Rr("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find((i) => i.name === n), r = t && iHt(t);
  if (r) throw new Rr(r === "disabled" ? a1e(n) : r === "pending" ? `"${co(n)}" is already reconnecting — retries can take a few minutes when a server keeps failing` : `"${co(n)}" is pending approval — approve it in the terminal first`);
}
export {
  Dbo,
  Gae,
  HBn,
  JTr,
  LBn,
  Mbo,
  QTr,
  ZTr,
  a1e,
  aHt,
  bft,
  ctn,
  d1e,
  dK,
  gEe,
  iHt,
  jb,
  l1e,
  utn
};
