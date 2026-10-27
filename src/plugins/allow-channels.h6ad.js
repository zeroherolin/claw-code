// plugins/allow-channels.h6ad.js — Claude Code 2.1.310 模块 chunk-h6adv9bf.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { mc } from "../shell/invalid-type.qnva.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { on, Jc } from "../auth/env-quad.nmae.js";
import { o, C, u } from "../vendor/zod/string-format.k395.js";
var l = f(() => C(u({ marketplace: o(), plugin: o() })));
function Ybr() {
  let e = k("tengu_harbor_ledger", []), n = l().safeParse(e);
  return n.success ? n.data : [];
}
function oB() {
  return on("allow_channels") && k("tengu_harbor", false);
}
function kOt() {
  if (!k("tengu_harbor", false)) return true;
  let e = Jc("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function mJt(e) {
  if (!e) return false;
  let { name: n, marketplace: r } = mc(e);
  if (!r) return false;
  return Ybr().some((t) => t.plugin === n && t.marketplace === r);
}
export {
  Ybr,
  kOt,
  mJt,
  oB
};
