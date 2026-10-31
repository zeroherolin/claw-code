// darwin/shared/project-docs.js — Claude Code 2.1.310（darwin）模块 chunk-pfj1naa8.js
import { i } from "./environment.js";
import { posix as _ } from "path";
var { dirname: o, isAbsolute: n, join: e, normalize: E, relative: T, sep: p } = _, _De = "/mnt/user-data/uploads", Jet = "/uploads", h2o = "/uploads/cowork-folders/", d6e = e(o(_De), "outputs"), ggn = "/mnt/attach/outputs", O = e(o(_De), "attachments"), c = e(o(_De), "project-docs"), u = "/home/claude", Qet = "/uploads/.home", m2t = "/outputs", MU = ".stage-tmp.";
function hgn(t) {
  if (!t) return _De;
  if (!n(t)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return E(t);
}
function EV() {
  return hgn(i.CLAUDE_STAGE_FILE_ROOT);
}
function Pce() {
  return e(o(EV()), "outputs");
}
function Zre() {
  return u;
}
function ygn() {
  return O;
}
function y2o() {
  return c;
}
var g2r = [_De, d6e];
function _2o() {
  return g2r;
}
function _gn(t, s) {
  let r = T(t, s);
  return !(r === ".." || r.startsWith(".." + p) || n(r));
}
export {
  EV,
  Jet,
  MU,
  Pce,
  Qet,
  Zre,
  _2o,
  _De,
  _gn,
  d6e,
  g2r,
  ggn,
  h2o,
  hgn,
  m2t,
  y2o,
  ygn
};
