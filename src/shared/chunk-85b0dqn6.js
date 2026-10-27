// shared/chunk-85b0dqn6.js — Claude Code 2.1.310 模块 chunk-85b0dqn6.js
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { utr } from "./chunk-a7h42vwk.js";
import { PG } from "./chunk-hfd91m80.js";
import { to } from "./chunk-vjef4vba.js";
var EUr = to();
function gu(o) {
  let t = Ie().admissionText;
  if ((o.judgedUnder ?? null) === t) return true;
  let r = o.args.pluginStorageId;
  return PG(r) || !utr(r, EUr.get()?.() ?? null);
}
export {
  EUr,
  gu
};
