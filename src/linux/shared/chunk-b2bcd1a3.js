// linux/shared/chunk-b2bcd1a3.js — Claude Code 2.1.310（linux）模块 chunk-64ygy579.js
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Ver } from "./chunk-23ad546c.js";
import { wz } from "./chunk-7c8c6c5a.js";
import { to } from "./chunk-499997af.js";
var tUr = to();
function mu(o) {
  let t = Ie().admissionText;
  if ((o.judgedUnder ?? null) === t) return true;
  let r = o.args.pluginStorageId;
  return wz(r) || !Ver(r, tUr.get()?.() ?? null);
}
export {
  mu,
  tUr
};
