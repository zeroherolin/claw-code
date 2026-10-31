// linux/shared/chunk-c564b685.js — Claude Code 2.1.310（linux）模块 chunk-ny2y84j1.js
import { i } from "./environment.js";
import { homedir as s } from "os";
import { join as o } from "path";
function r(e) {
  return { env: e?.env ?? process.env, home: e?.homedir ?? i.HOME ?? s() };
}
function VQs(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_STATE_HOME ?? o(t, ".local", "state");
}
function qQs(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_CACHE_HOME ?? o(t, ".cache");
}
function bKe(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_DATA_HOME ?? o(t, ".local", "share");
}
function lhn(e) {
  return o(bKe(e), "claude", "versions");
}
function s9(e) {
  let { home: n } = r(e);
  return o(n, ".local", "bin");
}
export {
  VQs,
  bKe,
  lhn,
  qQs,
  s9
};
