// linux/context/other-server.js — Claude Code 2.1.310（linux）模块 chunk-pzpqyt29.js
import { QSn } from "../mcp/claude-browser.js";
var a = void 0;
function u(e) {
  return e.startsWith(QSn) && !e.slice(QSn.length).includes("__") || a !== void 0 && e === a;
}
function s(e) {
  let o = e.mcpInfo;
  if (o === void 0) return "unplaced";
  if (o.accountMemoryServer === true) return "verified";
  let n = o.source ?? (o.serverType === "sdk" ? "sdk" : void 0);
  return n === void 0 || n === "sdk" ? "unplaced" : "other_server";
}
function y(e, o) {
  if (e === "verified" || o === "verified") return "verified";
  return e === "unplaced" || o === "unplaced" ? "unplaced" : "other_server";
}
function _V(e) {
  let o = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new WeakMap(), d = (r) => {
    let c = n.get(r);
    if (c === void 0) {
      let t = /* @__PURE__ */ new Map();
      for (let i of r) {
        let f = s(i);
        for (let l of [i.name, ...i.aliases ?? []]) t.set(l, y(t.get(l), f));
      }
      c = t, n.set(r, c);
    }
    return c;
  };
  return (r) => {
    if (o.has(r)) return "verified";
    let c = e(), t = c === void 0 ? "unplaced" : d(c).get(r) ?? "unplaced";
    if (t === "verified") o.add(r);
    return t;
  };
}
function h7n(e) {
  return (o) => e.has(o) ? "verified" : "unplaced";
}
function k7(e, o, n) {
  switch (o?.(e)) {
    case "verified":
      return true;
    case "other_server":
      return n === "history" && u(e);
    default:
      return u(e);
  }
}
function oCe(e) {
  return k7(e.name, () => s(e), "live");
}
export {
  _V,
  h7n,
  k7,
  oCe
};
