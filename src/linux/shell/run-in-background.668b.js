// linux/shell/run-in-background.668b.js — Claude Code 2.1.310（linux）模块 chunk-thfm0d3y.js
import { sk } from "./invalid-type.js";
function $gs(e, n) {
  let a = sk().safeParse(n.dangerouslyDisableSandbox);
  if (a.success && a.data) return { deniedFlag: "dangerouslyDisableSandbox", message: `unsandboxed execution (dangerouslyDisableSandbox) is not available to ${e}. If the command failed with a sandbox violation, the operation cannot be performed in this context — do not retry it.` };
  let o = sk().safeParse(n.run_in_background);
  if (o.success && o.data) return { deniedFlag: "run_in_background", message: `run_in_background is not available to ${e} — run the command in the foreground.` };
  return { sanitizedInput: { ...n, dangerouslyDisableSandbox: false, run_in_background: false } };
}
export {
  $gs
};
