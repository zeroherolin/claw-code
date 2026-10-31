// linux/mcp/f688f3fc-1d05-5bd1-9c48-9854ec083044.js — Claude Code 2.1.310（linux）模块 chunk-fvxn5ew5.js
import { nt, J } from "../context/not-admin-owned.js";
import { Gf } from "./toolbox-mcp-server-id.js";
import { hQn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { s3n } from "./mcp-drive-file-reference-upload.js";
var i = new nt(() => ({ byToolUse: /* @__PURE__ */ new Map() }));
function oRs(e, t) {
  let { byToolUse: r } = i.of(e);
  r.set(t.toolUseId, [...r.get(t.toolUseId) ?? [], t]), hQn(e, t.toolUseId, () => {
    pEe(e, t);
  });
}
function sRs(e, t, r) {
  return i.peek(e)?.byToolUse.get(t)?.find((o) => o.pathFormKey === r && (o.state === "uploading" || o.state === "pending"));
}
function nHt(e, t, r) {
  if (e === void 0 || t === void 0) return;
  if (!Array.isArray(r)) return;
  return i.peek(e)?.byToolUse.get(t)?.find((o) => o.state === "pending" && o.files.length === r.length && o.files.every((n, u) => {
    let s = r[u];
    return typeof s === "object" && s !== null && !Array.isArray(s) && Object.keys(s).length === 2 && "file_id" in s && "name" in s && s.file_id === n.file_id && s.name === n.name;
  }));
}
async function pEe(e, t) {
  if (l(e, t), t.state !== "uploading" && t.state !== "pending") return;
  t.state = "deleted", await t.remove(t.files.map((r) => r.file_id));
}
function IBn(e, t) {
  if (l(e, t), t.state !== "deleted") t.state = "sent";
}
function l(e, t) {
  let { byToolUse: r } = i.of(e), o = (r.get(t.toolUseId) ?? []).filter((n) => n !== t);
  if (o.length === 0) r.delete(t.toolUseId);
  else r.set(t.toolUseId, o);
}
var p = "refusedByCcrProxyBeforeForwarding";
function m3(e) {
  if (typeof e === "object" && e !== null) Object.defineProperty(e, p, { value: true });
  return e;
}
function r9e(e) {
  return typeof e === "object" && e !== null && e[p] === true;
}
var c = "This tool call's approval was for different arguments. Ask the user to approve again — the previous approval cannot be reused.", g = "Nothing ran: the user's approval was stored without this call's arguments, so it could not be tied to the call.";
function OBn(e) {
  return e.includes(c) || e.includes(g);
}
var a = new nt(() => ({ byToolUse: /* @__PURE__ */ new Map() }));
function rHt(e, t, r) {
  a.of(e).byToolUse.set(t, r);
}
function oHt(e, t) {
  a.peek(e)?.byToolUse.delete(t);
}
function MBn(e, t) {
  if (e === void 0 || t === void 0) return;
  return a.peek(e)?.byToolUse.get(t)?.();
}
var f = "/v1/claudeai-agents/mcp", d = "f688f3fc-1d05-5bd1-9c48-9854ec083044", iRs = new nt(() => ({}));
var o9e = /^file_[A-Za-z0-9_-]{1,128}$/, s9e = "get_task";
function sHt(e) {
  return e === "start_task" || e === "update_task";
}
function Ote(e) {
  return s3n(e, { path: f, serverId: d });
}
function DBn(e) {
  if (e.config.type !== "http" || !Gf(e.config.url)) return false;
  if (!J()) return Ote(e);
  try {
    return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((t) => t.toLowerCase() === d);
  } catch {
    return false;
  }
}
export {
  DBn,
  IBn,
  MBn,
  OBn,
  Ote,
  iRs,
  m3,
  nHt,
  o9e,
  oHt,
  oRs,
  pEe,
  r9e,
  rHt,
  s9e,
  sHt,
  sRs
};
