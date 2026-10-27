// shared/project-read.m6hx.js — Claude Code 2.1.310 模块 chunk-m6hxss92.js
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
function D4n(t, e, r, n) {
  return { method: "project_read", path: t, ...e !== void 0 && { version: e }, ...r, ...n };
}
function LDo(t) {
  return { method: "project_read", path: t };
}
function L4n({ docId: t, read: e }) {
  return { input: _(LDo(t)), result: _(e) };
}
export {
  D4n,
  L4n,
  LDo
};
