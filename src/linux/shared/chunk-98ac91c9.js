// linux/shared/chunk-98ac91c9.js — Claude Code 2.1.310（linux）模块 chunk-bedhwrf8.js
import { xJ, F4 } from "../core/conversation-engine.js";
import { Ns } from "../shell/invalid-type.js";
var r = [{ pluginSource: `${F4}@${Ns}`, serverName: xJ, title: "Claude Test (built into Claude Code)", personOnly: true }];
function Ibo(i, n) {
  return r.find((e) => e.pluginSource === n && e.serverName === i)?.title;
}
function yft(i, n) {
  return Ibo(i, n) !== void 0;
}
function PBn(i, n) {
  return r.some((e) => e.personOnly && e.serverName === i && (!n || e.pluginSource === n));
}
function ltn(i, n, e, t) {
  return e === "password" && t.type === "string" && !("format" in t && t.format !== void 0) && !("enum" in t) && !("oneOf" in t) && yft(i, n);
}
export {
  Ibo,
  PBn,
  ltn,
  yft
};
