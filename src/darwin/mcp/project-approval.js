// darwin/mcp/project-approval.js — Claude Code 2.1.310（darwin）模块 chunk-4smsqa8c.js
import { Rr } from "../telemetry/anthropic-workspace-id.js";
import { az } from "../shell/invalid-type.js";
import { F } from "../context/not-admin-owned.js";
import { co, mre, Uzs, gcn, MO } from "./declared-tools-dropped-at-compaction.js";
import { lZ } from "../settings/global-config-and-gates.js";
import { wi } from "../plugins/skills-dir.js";
function wve(e) {
  return e.type;
}
function yTr(e) {
  return e.type === "failed" && !MO(e) || e.type === "needs-auth";
}
function eBn(e, n) {
  return yTr(e) && !n(e.name);
}
function _Ht(e) {
  let n = wve(e);
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
function hBe(e) {
  return `"${co(e)}" is disabled — enable it in /mcp first`;
}
function SHt(e, n) {
  return `MCP server ${co(e)} is disabled — enable it (mcp_toggle) before ${n}`;
}
function Tpt(e, n) {
  return `MCP server ${co(e)} is not approved for this project — approve it in /mcp before ${n}`;
}
function Qae(e) {
  return `"${co(e)}" was disabled in another session — disable and re-enable it in /mcp, or restart, to reconnect`;
}
function Ctn(e) {
  let n = co(e), t = `"${e}" was re-enabled in another session, so this disable didn't persist — /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return az(e) && [...t].length <= 1024 ? t : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function yBe(e, n, t) {
  if (!n) {
    let o = F(e, (s) => s.type === "disabled" && !t(s.name));
    if (o === 0) return null;
    let l = F(e, (s) => s.type === "disabled" && t(s.name));
    return `${o} MCP server(s) were re-enabled in another session, so this disable didn't persist for them — enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "");
  }
  let r = e.filter((o) => o.type !== "disabled" && wve(o) !== "needs-approval" && t(o.name));
  if (r.length === 0) return null;
  let i = F(r, wi), c = F(r, (o) => !wi(o) && MO(o)), d = r.length - i - c, a = [];
  if (d > 0) a.push(`${d} MCP server(s) were disabled in another session — disable and re-enable them in /mcp, or restart, to reconnect.`);
  if (c > 0) a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet — there's nothing to reconnect until they are.`);
  if (i > 0) a.push(`${i} MCP server(s) are still available in this session but were disabled in another — they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
  return a.join(" ");
}
function _Tr(e) {
  return `"${co(e)}" is blocked by your organization's managed policy — it can't be authenticated or reconnected here`;
}
function _Be(e) {
  return `Claude Code refuses MCP server "${co(e)}" because it reserves that address for its own use. No administrator set this. Retrying won't help, only removing it or changing its address.`;
}
function STr(e) {
  return `"${co(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project — approve it via /mcp first, then authenticate or reconnect it`;
}
function b6(e, n, t, r) {
  return n === "project-approval" ? STr(e) : lZ(e, t) ? _Be(e) : r ?? _Tr(e);
}
function dbo(e, n, t, r) {
  if (n !== "project-approval" && lZ(e, t)) return new Rr(_Be(e), "MCP server refused at a reserved address");
  return n === "project-approval" ? new Rr(STr(e), "MCP server not approved for this project") : new Rr(r ?? _Tr(e), "MCP server blocked by enterprise managed policy");
}
function WS(e, n, t) {
  return e === "project-approval" ? { error: Uzs, errorCode: "APPROVAL_REQUIRED" } : { error: lZ(n, t) ? gcn : mre, errorCode: "POLICY_BLOCKED" };
}
function tBn(e) {
  return e.type === "failed" && e.errorCode === "POLICY_BLOCKED";
}
function Ttn(e) {
  return `"${co(e)}" is still available in this session, but another session disabled it — it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function cbo(e, n) {
  if (n === "ide") throw new Rr("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find((i) => i.name === n), r = t && _Ht(t);
  if (r) throw new Rr(r === "disabled" ? hBe(n) : r === "pending" ? `"${co(n)}" is already reconnecting — retries can take a few minutes when a server keeps failing` : `"${co(n)}" is pending approval — approve it in the terminal first`);
}
export {
  Ctn,
  Qae,
  SHt,
  STr,
  Tpt,
  Ttn,
  WS,
  _Be,
  _Ht,
  _Tr,
  b6,
  cbo,
  dbo,
  eBn,
  hBe,
  tBn,
  wve,
  yBe,
  yTr
};
