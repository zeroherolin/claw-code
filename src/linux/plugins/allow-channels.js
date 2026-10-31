// linux/plugins/allow-channels.js — Claude Code 2.1.310（linux）模块 chunk-3b0cphjr.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { mc } from "../shell/invalid-type.js";
import { k } from "../settings/global-config-and-gates.js";
import { on, Xc } from "../auth/env-quad.js";
import { o, T, u } from "../vendor/zod/string-format.js";
var l = p(() => T(u({ marketplace: o(), plugin: o() })));
function MSr() {
  let e = k("tengu_harbor_ledger", []), n = l().safeParse(e);
  return n.success ? n.data : [];
}
function QB() {
  return on("allow_channels") && k("tengu_harbor", false);
}
function yOt() {
  if (!k("tengu_harbor", false)) return true;
  let e = Xc("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function oQt(e) {
  if (!e) return false;
  let { name: n, marketplace: r } = mc(e);
  if (!r) return false;
  return MSr().some((t) => t.plugin === n && t.marketplace === r);
}
export {
  MSr,
  QB,
  oQt,
  yOt
};
