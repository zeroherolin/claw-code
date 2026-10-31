// linux/shared/chunk-c8bb8655.js — Claude Code 2.1.310（linux）模块 chunk-drpfawbj.js
import { re } from "./chunk-d2c47492.js";
function Quo(n) {
  if (n === null || typeof n !== "object") return;
  let o = n.protocols;
  if (!Array.isArray(o)) return;
  let t = o.filter((r) => typeof r === "string");
  return t.length > 0 ? t : void 0;
}
function Sws(n) {
  let o = Quo(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map((t) => `"${t}"`).join(", ")})`;
}
var QSr = 4, e = 48;
function yQt(n) {
  let o = n.slice(0, QSr).map((r) => r.length > e ? `${re(r, e)}…` : r), t = n.length - o.length;
  return `${o.map((r) => `"${r}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export {
  QSr,
  Quo,
  Sws,
  yQt
};
