// darwin/shared/chunk-c60ee8b6.js — Claude Code 2.1.310（darwin）模块 chunk-1w4xax5d.js
import { V, gXr, OX, Xbe } from "../context/not-admin-owned.js";
import { Scr } from "../fs/node-modules.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { ygn } from "./project-docs.js";
import { createHash as s } from "crypto";
import { join as i } from "path";
function bx() {
  return OX() ?? i(Xbe() ?? L_t(), V());
}
function L_t() {
  return i(Le(), "uploads");
}
function N_t() {
  return [L_t(), Xbe() ?? ygn()];
}
function m8n(t, e) {
  return `${t}-${u(e)}`;
}
function _$o(t) {
  return s("sha256").update(t.toLowerCase()).digest("hex").slice(0, 8);
}
var a = /^[A-Za-z0-9_-]{8}-/;
function o(t) {
  return Scr(t.replace(/_+$/, ""));
}
function u(t) {
  return o(t) ? t + "_" : t;
}
function Kqs(t) {
  let e = t.replace(a, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t;
}
var c = 1024;
function qqs(t, e) {
  let n = gXr();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r);
  }
  n.set(t, e);
}
function ipn(t) {
  return gXr().get(t);
}
export {
  Kqs,
  L_t,
  N_t,
  _$o,
  bx,
  ipn,
  m8n,
  qqs
};
