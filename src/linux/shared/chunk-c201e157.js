// linux/shared/chunk-c201e157.js — Claude Code 2.1.310（linux）模块 chunk-3syhp75h.js
import { J } from "../context/not-admin-owned.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { Ec } from "../artifacts/utf-8.js";
import { hjt } from "../fs/unadoptable-session-id.js";
import { sep as i } from "path";
function nht(t) {
  if (J()) return null;
  let e = `${hjt()}${i}`, n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function TUs(t) {
  if (t?.file_path?.startsWith(Ec())) return "Reading Plan";
  if (t?.file_path && nht(t.file_path)) return "Read agent output";
  return "Read";
}
function RIo(t) {
  if (!t?.file_path) return null;
  let e = nht(t.file_path);
  if (e) return e;
  return Zo(t.file_path);
}
export {
  RIo,
  TUs,
  nht
};
