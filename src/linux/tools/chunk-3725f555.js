// linux/tools/chunk-3725f555.js — Claude Code 2.1.310（linux）模块 chunk-eedg8dqe.js
import { mV } from "./device-session-limit.js";
import { Qu, Nmn, nj } from "../context/tool-result-clearing-after-idle-server-report.js";
import { fe } from "../shared/async-hooks.5238.js";
import { randomBytes as l } from "crypto";
function jvi(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return Gcr(e?.content ?? "", t.data, e?.is_error === true);
}
function Gcr(o, t, e = false, r = []) {
  return nj({ envelope: { v: Qu, outcome: "completed", target: T5t(), is_error: e, content: Nmn(o), output: t, ...r.length > 0 && { notes: r } }, content: o });
}
function T5t() {
  return { name: mV(), working_dir: fe() };
}
export {
  Gcr,
  T5t,
  jvi
};
