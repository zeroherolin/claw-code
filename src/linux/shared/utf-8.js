// linux/shared/utf-8.js — Claude Code 2.1.310（linux）模块 chunk-971jjch9.js
import { Yn, Sg } from "../fs/node-modules.js";
import { Pq } from "./chunk-d2c47492.js";
import { posix as a } from "path";
var p7n = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`, c = new RegExp(`^[${p7n}]+`, "u");
function NGo(n) {
  return n.replace(c, "");
}
function kGr(n, r = FGo(n)) {
  return Yn(n) || lwt(n) || Pq.test(r[0]) || r.map(NGo).some((e) => Yn(e) || lwt(e));
}
var u = /^\.\.\//;
function lwt(n) {
  return Sg(n) || Sg(a.normalize(n).replace(u, "/")) || l(n) && Sg("/" + n);
}
function l(n) {
  let r = a.normalize(n);
  return r === ".." || r.startsWith("../");
}
function $Go(n) {
  let r = n.slice(7);
  return kGr(r) || kGr(r.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g, f = /^%[0-9A-Fa-f]{2}/;
function FGo(n) {
  if (!n.includes("%")) return [n, n];
  let r = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true });
  return [n.replace(i, (e, t) => {
    let o = t + e.length;
    return r.decode(s(e), { stream: f.test(n.slice(o, o + 3)) });
  }), n.replace(i, (e) => Array.from(s(e), (t) => String.fromCharCode(t)).join(""))];
}
function s(n) {
  return Uint8Array.from(n.slice(1).split("%"), (r) => parseInt(r, 16));
}
export {
  $Go,
  FGo,
  NGo,
  kGr,
  lwt,
  p7n
};
