// remote/chunk-d5mc68h9.js — Claude Code 2.1.310 模块 chunk-d5mc68h9.js
import { wu } from "../mcp/chunk-ykcv164t.js";
var e = "self_hosted_runner_";
function QXt(n) {
  return n.startsWith(e);
}
function iHn(n) {
  return wu([...n]).some(QXt);
}
function pdo(n) {
  return wu([n]).filter((t) => !QXt(t)).join(",");
}
function fdo(n) {
  if (n === void 0) return false;
  let t = typeof n === "string" ? n : String(n);
  return wu([t]).some(QXt);
}
function K_s(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!fdo(o)) return typeof t === "string" ? n : { ...n, tools: o };
  return { ...n, tools: pdo(o) };
}
export {
  K_s,
  QXt,
  fdo,
  iHn,
  pdo
};
