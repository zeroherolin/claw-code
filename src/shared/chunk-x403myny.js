// shared/chunk-x403myny.js — Claude Code 2.1.310 模块 chunk-x403myny.js
import { i } from "./environment.9a41.js";
function Wtt() {
  let e = i.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP ?? 1;
  if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(e);
  return e;
}
export {
  Wtt
};
