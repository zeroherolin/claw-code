// linux/shared/chunk-8b4d4a17.js — Claude Code 2.1.310（linux）模块 chunk-63gfc77e.js
var SPe = 8;
function dmr(o, u) {
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
  SPe,
  dmr
};
