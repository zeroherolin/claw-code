// commands/command-goal.839w.js — Claude Code 2.1.310 模块 chunk-839w0p9z.js
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import { ye, Pn } from "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
var e = { type: "local-jsx", name: "goal", description: "Set a goal Claude checks before stopping", argumentHint: "[<condition> | clear]", immediate: true }, o = { type: "local", name: "goal", supportsNonInteractive: true, thinClientDispatch: "post-text", description: "Set a goal — keep working until the condition is met", get isHidden() {
  return !ye();
}, isEnabled: () => ye() || Pn(), load: () => import("../shared/goal-set.y1fc.js") }, n = e;
export {
  n as default,
  o as goalNonInteractive
};
