// shared/allow-large.djgw.js — Claude Code 2.1.310 模块 chunk-djgw0xdn.js
import o from "path";
var qe = "Read", cSe = "allow_large", wbn = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp"]);
function uNe(t) {
  let e = o.extname(t).toLowerCase().slice(1);
  return wbn.has(e) || e === "pdf";
}
export {
  cSe,
  qe,
  uNe,
  wbn
};
