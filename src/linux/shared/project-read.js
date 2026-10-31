// linux/shared/project-read.js — Claude Code 2.1.310（linux）模块 chunk-bt10rkwb.js
import { _ } from "../fs/gitlab-runner-authentication-token.js";
function h5n(t, e, r, n) {
  return { method: "project_read", path: t, ...e !== void 0 && { version: e }, ...r, ...n };
}
function lLo(t) {
  return { method: "project_read", path: t };
}
function y5n({ docId: t, read: e }) {
  return { input: _(lLo(t)), result: _(e) };
}
export {
  h5n,
  lLo,
  y5n
};
