// linux/shared/chunk-c60ee8b6.js — Claude Code 2.1.310（linux）模块 chunk-1ky5r8qb.js
import { q, G9r, kX, WSe } from "../context/not-admin-owned.js";
import { rcr } from "../fs/node-modules.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { ngn } from "./project-docs.js";
import { createHash as s } from "crypto";
import { join as i } from "path";
function yx() {
  return kX() ?? i(WSe() ?? R_t(), q());
}
function R_t() {
  return i(Le(), "uploads");
}
function x_t() {
  return [R_t(), WSe() ?? ngn()];
}
function q3n(t, e) {
  return `${t}-${u(e)}`;
}
function B$o(t) {
  return s("sha256").update(t.toLowerCase()).digest("hex").slice(0, 8);
}
var a = /^[A-Za-z0-9_-]{8}-/;
function o(t) {
  return rcr(t.replace(/_+$/, ""));
}
function u(t) {
  return o(t) ? t + "_" : t;
}
function l4s(t) {
  let e = t.replace(a, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t;
}
var c = 1024;
function d4s(t, e) {
  let n = G9r();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r);
  }
  n.set(t, e);
}
function Wun(t) {
  return G9r().get(t);
}
export {
  B$o,
  R_t,
  Wun,
  d4s,
  l4s,
  q3n,
  x_t,
  yx
};
