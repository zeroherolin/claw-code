// linux/shared/chunk-1b1c4439.js — Claude Code 2.1.310（linux）模块 chunk-gg53p5cf.js
var g4e = String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;
function Wot(e) {
  return new RegExp(g4e).test(e);
}
function Xvn(e) {
  let n = [], r = 0;
  for (let t of e.matchAll(new RegExp(g4e, "g"))) n.push(e.slice(r, t.index)), r = t.index + t[0].length;
  return n.push(e.slice(r)), n;
}
function Jvn(e) {
  return e.replace(new RegExp(g4e, "g"), (n) => "x".repeat(n.length));
}
function u$e(e) {
  return e.replace(new RegExp(g4e, "g"), (n, r) => `\${${r}}`);
}
export {
  Jvn,
  Wot,
  Xvn,
  g4e,
  u$e
};
