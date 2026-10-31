// linux/shared/chunk-b6642a2b.js — Claude Code 2.1.310（linux）模块 chunk-9wdcf55q.js
var Y_t = 10;
function KFo(e) {
  if (typeof e === "string") return s(e, 9);
  if (!Array.isArray(e)) return false;
  let t = 0;
  for (let r of e) {
    if (t += 1, t > 10) return true;
    if (!uAe(r)) continue;
    let n = r.text, o = 0;
    while (t <= 10) {
      if (o = n.indexOf(`
`, o), o === -1) break;
      o++, t++;
    }
    if (t > 10) return true;
  }
  return false;
}
function uAe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text" && "text" in e && typeof e.text === "string";
}
function s(e, t) {
  let r = 0;
  for (let n = 0; n <= t; n++) {
    if (r = e.indexOf(`
`, r), r === -1) return false;
    r++;
  }
  return true;
}
export {
  KFo,
  Y_t,
  uAe
};
