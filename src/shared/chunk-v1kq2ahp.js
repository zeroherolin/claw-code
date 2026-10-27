// shared/chunk-v1kq2ahp.js — Claude Code 2.1.310 模块 chunk-v1kq2ahp.js
import { re } from "./chunk-j79dwkaq.js";
function wpo(n) {
  if (n === null || typeof n !== "object") return;
  let o = n.protocols;
  if (!Array.isArray(o)) return;
  let t = o.filter((r) => typeof r === "string");
  return t.length > 0 ? t : void 0;
}
function Bws(n) {
  let o = wpo(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map((t) => `"${t}"`).join(", ")})`;
}
var cwr = 4, e = 48;
function EJt(n) {
  let o = n.slice(0, cwr).map((r) => r.length > e ? `${re(r, e)}…` : r), t = n.length - o.length;
  return `${o.map((r) => `"${r}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export {
  Bws,
  EJt,
  cwr,
  wpo
};
