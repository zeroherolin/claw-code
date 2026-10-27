// shared/chunk-tnwm3ppq.js — Claude Code 2.1.310 模块 chunk-tnwm3ppq.js
import { J } from "../context/not-admin-owned.ersa.js";
import { Zo } from "../fs/utf-8.fmbx.js";
import { vc } from "../artifacts/utf-8.vzjz.js";
import { Rjt } from "../fs/unadoptable-session-id.vxq1.js";
import { sep as i } from "path";
function sht(t) {
  if (J()) return null;
  let e = `${Rjt()}${i}`, n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function n1s(t) {
  if (t?.file_path?.startsWith(vc())) return "Reading Plan";
  if (t?.file_path && sht(t.file_path)) return "Read agent output";
  return "Read";
}
function eOo(t) {
  if (!t?.file_path) return null;
  let e = sht(t.file_path);
  if (e) return e;
  return Zo(t.file_path);
}
export {
  eOo,
  n1s,
  sht
};
