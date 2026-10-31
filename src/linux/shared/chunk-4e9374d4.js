// linux/shared/chunk-4e9374d4.js — Claude Code 2.1.310（linux）模块 chunk-7nfw1dx3.js
import { Og, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function ZM(r) {
  if (typeof r === "string") return r;
  if (typeof r === "number") return String(r);
  if (!r) return "";
  if (Array.isArray(r)) return r.map(ZM).join("");
  if (Og(r)) return ZM(r.props.children);
  return "";
}
export {
  ZM
};
