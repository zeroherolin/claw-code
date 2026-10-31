// linux/permissions/chunk-74b337a1.js — Claude Code 2.1.310（linux）模块 chunk-4x8yng6e.js
import { Rr } from "../telemetry/anthropic-workspace-id.js";
var O5t = { invalid_path: "sad", unsupported_name: "sad", symlink_in_path: "sad", path_not_canonical: "sad", read_rule: "sad", not_found: "sad", not_a_directory: "sad", os_permission_denied: "sad", workspace_moved: "bad", unexpected_error: "bad" }, t = "list denied: ";
function fF(e, n) {
  return new Rr(`${t}${e}`, n, e);
}
function Zit(e) {
  if (!(e instanceof Rr)) return;
  let n = e.errorClass;
  return n !== void 0 && o(n) && e.message === `${t}${n}` ? n : void 0;
}
function o(e) {
  return Object.hasOwn(O5t, e);
}
export {
  O5t,
  Zit,
  fF
};
