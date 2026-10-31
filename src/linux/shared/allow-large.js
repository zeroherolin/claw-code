// linux/shared/allow-large.js — Claude Code 2.1.310（linux）模块 chunk-0np0053t.js
import o from "path";
var qe = "Read", rbe = "allow_large", oSn = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp"]);
function sNe(t) {
  let e = o.extname(t).toLowerCase().slice(1);
  return oSn.has(e) || e === "pdf";
}
export {
  oSn,
  qe,
  rbe,
  sNe
};
