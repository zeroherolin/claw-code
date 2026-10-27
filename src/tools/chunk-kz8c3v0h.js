// tools/chunk-kz8c3v0h.js — Claude Code 2.1.310 模块 chunk-kz8c3v0h.js
import { CV } from "./device-session-limit.cjq3.js";
import { Qu, Qmn, dj } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { randomBytes as l } from "crypto";
function Svi(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return our(e?.content ?? "", t.data, e?.is_error === true);
}
function our(o, t, e = false, r = []) {
  return dj({ envelope: { v: Qu, outcome: "completed", target: N4t(), is_error: e, content: Qmn(o), output: t, ...r.length > 0 && { notes: r } }, content: o });
}
function N4t() {
  return { name: CV(), working_dir: pe() };
}
export {
  N4t,
  Svi,
  our
};
