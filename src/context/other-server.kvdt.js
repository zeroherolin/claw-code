// context/other-server.kvdt.js — Claude Code 2.1.310 模块 chunk-kvdtmm6k.js
import { gwn } from "../mcp/claude-browser.hdf6.js";
var a = void 0;
function u(e) {
  return e.startsWith(gwn) && !e.slice(gwn.length).includes("__") || a !== void 0 && e === a;
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
function xV(e) {
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
function HQn(e) {
  return (o) => e.has(o) ? "verified" : "unplaced";
}
function OQ(e, o, n) {
  switch (o?.(e)) {
    case "verified":
      return true;
    case "other_server":
      return n === "history" && u(e);
    default:
      return u(e);
  }
}
function cAe(e) {
  return OQ(e.name, () => s(e), "live");
}
export {
  HQn,
  OQ,
  cAe,
  xV
};
