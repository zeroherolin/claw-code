// darwin/settings/chunk-1fd38b27.js — Claude Code 2.1.310（darwin）模块 chunk-r94bz11h.js
import { bos, wos } from "../context/not-admin-owned.js";
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
function HPn() {
  wos(structuredClone(fe("policySettings")));
}
function o8t() {
  let t = bos();
  if (t === void 0) return true;
  return !Bun.deepEquals(t, fe("policySettings"));
}
export {
  HPn,
  o8t
};
