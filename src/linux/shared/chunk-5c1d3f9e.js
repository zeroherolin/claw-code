// linux/shared/chunk-5c1d3f9e.js — Claude Code 2.1.310（linux）模块 chunk-rnxkk435.js
function wo(r) {
  return r.map((t) => {
    let n = String(t);
    if (n === "") return "''";
    if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) return n;
    return "'" + n.replaceAll("'", `'"'"'`) + "'";
  }).join(" ");
}
export {
  wo
};
