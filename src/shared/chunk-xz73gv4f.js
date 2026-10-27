// shared/chunk-xz73gv4f.js — Claude Code 2.1.310 模块 chunk-xz73gv4f.js
var vqe = String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;
function Xot(e) {
  return new RegExp(vqe).test(e);
}
function pvn(e) {
  let n = [], r = 0;
  for (let t of e.matchAll(new RegExp(vqe, "g"))) n.push(e.slice(r, t.index)), r = t.index + t[0].length;
  return n.push(e.slice(r)), n;
}
function fvn(e) {
  return e.replace(new RegExp(vqe, "g"), (n) => "x".repeat(n.length));
}
function yFe(e) {
  return e.replace(new RegExp(vqe, "g"), (n, r) => `\${${r}}`);
}
export {
  Xot,
  fvn,
  pvn,
  vqe,
  yFe
};
