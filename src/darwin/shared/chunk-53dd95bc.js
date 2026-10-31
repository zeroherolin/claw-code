// darwin/shared/chunk-53dd95bc.js — Claude Code 2.1.310（darwin）模块 chunk-yage854k.js
import { i } from "./environment.js";
import { pp, C5 } from "../artifacts/chunk-a6c9d164.js";
function wTe() {
  if (i.CLAUDE_CODE_REMOTE !== true) return;
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
  return C5(e) ? pp(e) : void 0;
}
export {
  wTe
};
