// linux/remote/chunk-b64f8ec3.js — Claude Code 2.1.310（linux）模块 chunk-mry8a1sf.js
import { Su } from "../mcp/chunk-0e2a1db6.js";
var e = "self_hosted_runner_";
function FXt(n) {
  return n.startsWith(e);
}
function GDn(n) {
  return Su([...n]).some(FXt);
}
function Ylo(n) {
  return Su([n]).filter((t) => !FXt(t)).join(",");
}
function Xlo(n) {
  if (n === void 0) return false;
  let t = typeof n === "string" ? n : String(n);
  return Su([t]).some(FXt);
}
function __s(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!Xlo(o)) return typeof t === "string" ? n : { ...n, tools: o };
  return { ...n, tools: Ylo(o) };
}
export {
  FXt,
  GDn,
  Xlo,
  Ylo,
  __s
};
