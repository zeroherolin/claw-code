// darwin/shared/chunk-c92ca6df.js — Claude Code 2.1.310（darwin）模块 chunk-zcwg2acy.js
import { aJn } from "./chunk-22f77b65.js";
function hIe(e, r) {
  return e.toLocaleString("en-US", { month: "short", day: "numeric", ...r?.includeYear && { year: "numeric" }, hour: "numeric", minute: "2-digit", timeZone: aJn() }).replace(/,? at |, (?=\d{1,2}:)/, " ").replace(/[ \u202f]([AP]M)/i, (o, t) => t.toLowerCase());
}
export {
  hIe
};
