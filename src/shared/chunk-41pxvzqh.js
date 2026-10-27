// shared/chunk-41pxvzqh.js — Claude Code 2.1.310 模块 chunk-41pxvzqh.js
import { N7, Yq } from "../core/conversation-engine.31gx.js";
import { Ns } from "../shell/invalid-type.qnva.js";
var r = [{ pluginSource: `${Yq}@${Ns}`, serverName: N7, title: "Claude Test (built into Claude Code)", personOnly: true }];
function nbo(i, n) {
  return r.find((e) => e.pluginSource === n && e.serverName === i)?.title;
}
function Spt(i, n) {
  return nbo(i, n) !== void 0;
}
function V1n(i, n) {
  return r.some((e) => e.personOnly && e.serverName === i && (!n || e.pluginSource === n));
}
function ftn(i, n, e, t) {
  return e === "password" && t.type === "string" && !("format" in t && t.format !== void 0) && !("enum" in t) && !("oneOf" in t) && Spt(i, n);
}
export {
  Spt,
  V1n,
  ftn,
  nbo
};
