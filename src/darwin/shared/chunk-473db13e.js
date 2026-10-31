// darwin/shared/chunk-473db13e.js — Claude Code 2.1.310（darwin）模块 chunk-mx9cfrrx.js
import { Or } from "./chunk-d2c47492.js";
function tPn(e, n = /* @__PURE__ */ new Date()) {
  let r = a(n), t = c(g(e));
  return t ? `${r}-${t}.txt` : `conversation-${r}.txt`;
}
function a(e) {
  let n = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), t = String(e.getDate()).padStart(2, "0"), s = String(e.getHours()).padStart(2, "0"), i = String(e.getMinutes()).padStart(2, "0"), o = String(e.getSeconds()).padStart(2, "0");
  return `${n}-${r}-${t}-${s}${i}${o}`;
}
function g(e) {
  let n = e.find((s) => s.type === "user");
  if (!n || n.type !== "user") return "";
  let r = n.message?.content, t = "";
  if (typeof r === "string") t = r.trim();
  else if (Array.isArray(r)) {
    let s = r.findLast((i) => i.type === "text");
    if (s && "text" in s) t = s.text.trim();
  }
  if (t = Or(t), t.length > 50) t = t.substring(0, 49) + "…";
  return t;
}
function c(e) {
  return e.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
export {
  tPn
};
