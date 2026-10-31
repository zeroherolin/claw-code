// darwin/shared/project-read.js — Claude Code 2.1.310（darwin）模块 chunk-m6hxss92.js
import { _ } from "../fs/gitlab-runner-authentication-token.js";
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
