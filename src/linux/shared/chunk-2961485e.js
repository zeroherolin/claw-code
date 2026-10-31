// linux/shared/chunk-2961485e.js — Claude Code 2.1.310（linux）模块 chunk-xteh8x99.js
import { YSt } from "../tools/device-session-limit.js";
import { randomBytes as o } from "crypto";
import { hostname as s } from "os";
var i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/, a = /^[A-Za-z]{1,64}$/, c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/, m = 8, I = 64, d = 9999, r = { hostname: s, randomHex: (n) => o(n).toString("hex") };
function Yds(n = r) {
  return `dev-${n.randomHex(m)}`;
}
function XRt(n = r) {
  let [t = ""] = n.hostname().split(".");
  return YSt(t, I);
}
function Xds(n, t, e) {
  if (!i.test(n) || !a.test(t) || !Number.isInteger(e) || e < 0 || e > d) throw Error("cannot form a device hook id from these inputs");
  return `${n}/${t}/${e}`;
}
function pwe(n) {
  let t = c.exec(n);
  return t ? { instanceId: t[1], event: t[2], index: Number(t[3]) } : null;
}
export {
  XRt,
  Xds,
  Yds,
  pwe
};
