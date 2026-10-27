// shared/chunk-fc5zxj6s.js — Claude Code 2.1.310 模块 chunk-fc5zxj6s.js
import { i } from "./environment.9a41.js";
import { homedir as s } from "os";
import { join as o } from "path";
function r(e) {
  return { env: e?.env ?? process.env, home: e?.homedir ?? i.HOME ?? s() };
}
function IQs(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_STATE_HOME ?? o(t, ".local", "state");
}
function OQs(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_CACHE_HOME ?? o(t, ".cache");
}
function x6e(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_DATA_HOME ?? o(t, ".local", "share");
}
function Chn(e) {
  return o(x6e(e), "claude", "versions");
}
function fY(e) {
  let { home: n } = r(e);
  return o(n, ".local", "bin");
}
export {
  Chn,
  IQs,
  OQs,
  fY,
  x6e
};
