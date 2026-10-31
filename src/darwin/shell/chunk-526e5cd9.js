// darwin/shell/chunk-526e5cd9.js — Claude Code 2.1.310（darwin）模块 chunk-x28ms7hd.js
function dIe(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function vb(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function l0(t) {
  if (vb(t) === "prompt") return t;
  return t.slice(1);
}
function vIt(t) {
  return t === "!";
}
function gys({ nextValue: t, value: r, cursorOffset: n, mode: o }) {
  let e = vb(t);
  if (n !== 0 || e === "prompt" || e === o) return false;
  return t.length === r.length + 1 || r.length === 0;
}
export {
  dIe,
  gys,
  l0,
  vIt,
  vb
};
