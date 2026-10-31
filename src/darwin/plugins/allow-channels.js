// darwin/plugins/allow-channels.js — Claude Code 2.1.310（darwin）模块 chunk-h6adv9bf.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { mc } from "../shell/invalid-type.js";
import { k } from "../settings/global-config-and-gates.js";
import { on, Jc } from "../auth/env-quad.js";
import { o, C, u } from "../vendor/zod/string-format.js";
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
