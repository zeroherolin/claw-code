// linux/shared/project-docs.js — Claude Code 2.1.310（linux）模块 chunk-yv5e7kyr.js
import { i } from "./environment.js";
import { posix as _ } from "path";
var { dirname: o, isAbsolute: n, join: e, normalize: E, relative: T, sep: p } = _, fLe = "/mnt/user-data/uploads", Get = "/uploads", BWo = "/uploads/cowork-folders/", Z2e = e(o(fLe), "outputs"), egn = "/mnt/attach/outputs", O = e(o(fLe), "attachments"), c = e(o(fLe), "project-docs"), u = "/home/claude", zet = "/uploads/.home", nGt = "/outputs", xU = ".stage-tmp.";
function tgn(t) {
  if (!t) return fLe;
  if (!n(t)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return E(t);
}
function uV() {
  return tgn(i.CLAUDE_STAGE_FILE_ROOT);
}
function Ece() {
  return e(o(uV()), "outputs");
}
function Vre() {
  return u;
}
function ngn() {
  return O;
}
function jWo() {
  return c;
}
var qWr = [fLe, Z2e];
function WWo() {
  return qWr;
}
function rgn(t, s) {
  let r = T(t, s);
  return !(r === ".." || r.startsWith(".." + p) || n(r));
}
export {
  BWo,
  Ece,
  Get,
  Vre,
  WWo,
  Z2e,
  egn,
  fLe,
  jWo,
  nGt,
  ngn,
  qWr,
  rgn,
  tgn,
  uV,
  xU,
  zet
};
