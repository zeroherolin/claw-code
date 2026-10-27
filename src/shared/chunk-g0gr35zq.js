// shared/chunk-g0gr35zq.js — Claude Code 2.1.310 模块 chunk-g0gr35zq.js
import { twt } from "../tools/device-session-limit.cjq3.js";
import { randomBytes as o } from "crypto";
import { hostname as s } from "os";
var i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/, a = /^[A-Za-z]{1,64}$/, c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/, m = 8, I = 64, d = 9999, r = { hostname: s, randomHex: (n) => o(n).toString("hex") };
function Tcs(n = r) {
  return `dev-${n.randomHex(m)}`;
}
function sxt(n = r) {
  let [t = ""] = n.hostname().split(".");
  return twt(t, I);
}
function Acs(n, t, e) {
  if (!i.test(n) || !a.test(t) || !Number.isInteger(e) || e < 0 || e > d) throw Error("cannot form a device hook id from these inputs");
  return `${n}/${t}/${e}`;
}
function Swe(n) {
  let t = c.exec(n);
  return t ? { instanceId: t[1], event: t[2], index: Number(t[3]) } : null;
}
export {
  Acs,
  Swe,
  Tcs,
  sxt
};
