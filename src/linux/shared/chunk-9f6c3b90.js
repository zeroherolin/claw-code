// linux/shared/chunk-9f6c3b90.js — Claude Code 2.1.310（linux）模块 chunk-v01ffcwn.js
import { i } from "./environment.js";
function Ltt() {
  let e = i.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP ?? 1;
  if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(e);
  return e;
}
export {
  Ltt
};
