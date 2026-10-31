// linux/shared/chunk-53dd95bc.js — Claude Code 2.1.310（linux）模块 chunk-2rr85c4a.js
import { i } from "./environment.js";
import { pf, m6 } from "../artifacts/chunk-a6c9d164.js";
function yAe() {
  if (i.CLAUDE_CODE_REMOTE !== true) return;
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
  return m6(e) ? pf(e) : void 0;
}
export {
  yAe
};
