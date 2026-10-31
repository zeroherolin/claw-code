// darwin/permissions/chunk-74b337a1.js — Claude Code 2.1.310（darwin）模块 chunk-7e2vm8nv.js
import { Rr } from "../telemetry/anthropic-workspace-id.js";
var W4t = { invalid_path: "sad", unsupported_name: "sad", symlink_in_path: "sad", path_not_canonical: "sad", read_rule: "sad", not_found: "sad", not_a_directory: "sad", os_permission_denied: "sad", workspace_moved: "bad", unexpected_error: "bad" }, t = "list denied: ";
function h$(e, n) {
  return new Rr(`${t}${e}`, n, e);
}
function oat(e) {
  if (!(e instanceof Rr)) return;
  let n = e.errorClass;
  return n !== void 0 && o(n) && e.message === `${t}${n}` ? n : void 0;
}
function o(e) {
  return Object.hasOwn(W4t, e);
}
export {
  W4t,
  h$,
  oat
};
