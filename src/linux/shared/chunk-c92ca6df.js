// linux/shared/chunk-c92ca6df.js — Claude Code 2.1.310（linux）模块 chunk-8y8a50w5.js
import { WJn } from "./chunk-22f77b65.js";
function mIe(e, r) {
  return e.toLocaleString("en-US", { month: "short", day: "numeric", ...r?.includeYear && { year: "numeric" }, hour: "numeric", minute: "2-digit", timeZone: WJn() }).replace(/,? at |, (?=\d{1,2}:)/, " ").replace(/[ \u202f]([AP]M)/i, (o, t) => t.toLowerCase());
}
export {
  mIe
};
