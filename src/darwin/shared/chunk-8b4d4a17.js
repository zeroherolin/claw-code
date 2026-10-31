// darwin/shared/chunk-8b4d4a17.js — Claude Code 2.1.310（darwin）模块 chunk-8e3cf53x.js
var TPe = 8;
function Cmr(o, u) {
  let e = [], n = "", t = 0;
  for (let r of o) {
    let s = l(r);
    if (t + s > u && n !== "") e.push(n), n = "", t = 0;
    n += r, t += s;
  }
  return e.push(n), e;
}
function l(o) {
  return o.length === 1 && o < "" ? 1 : 2;
}
export {
  Cmr,
  TPe
};
