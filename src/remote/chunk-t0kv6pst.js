// remote/chunk-t0kv6pst.js — Claude Code 2.1.310 模块 chunk-t0kv6pst.js
function I$e() {
  return false;
}
var s = /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function sd() {
  {
    let e = process.argv;
    if (e[2] !== "mcp" || e[3] !== "serve") return false;
    let [, , t, ...r] = e.slice(2), n = t === "--transport=http" ? r : t === "--transport" && r[0] === "http" ? r.slice(1) : void 0;
    return I$e() && n !== void 0 && n.every((o) => s.test(o));
  }
  return false;
}
export {
  I$e,
  sd
};
