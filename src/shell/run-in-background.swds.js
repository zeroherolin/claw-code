// shell/run-in-background.swds.js — Claude Code 2.1.310 模块 chunk-swds9389.js
import { ik } from "./invalid-type.qnva.js";
function Shs(e, n) {
  let a = ik().safeParse(n.dangerouslyDisableSandbox);
  if (a.success && a.data) return { deniedFlag: "dangerouslyDisableSandbox", message: `unsandboxed execution (dangerouslyDisableSandbox) is not available to ${e}. If the command failed with a sandbox violation, the operation cannot be performed in this context — do not retry it.` };
  let o = ik().safeParse(n.run_in_background);
  if (o.success && o.data) return { deniedFlag: "run_in_background", message: `run_in_background is not available to ${e} — run the command in the foreground.` };
  return { sanitizedInput: { ...n, dangerouslyDisableSandbox: false, run_in_background: false } };
}
export {
  Shs
};
