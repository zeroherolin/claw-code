// shared/chunk-wnqh3675.js — Claude Code 2.1.310 模块 chunk-wnqh3675.js
import { Og, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function r0(r) {
  if (typeof r === "string") return r;
  if (typeof r === "number") return String(r);
  if (!r) return "";
  if (Array.isArray(r)) return r.map(r0).join("");
  if (Og(r)) return r0(r.props.children);
  return "";
}
export {
  r0
};
