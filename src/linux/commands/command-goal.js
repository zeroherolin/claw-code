// linux/commands/command-goal.js — Claude Code 2.1.310（linux）模块 chunk-gz2xf6vs.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { ye, Pn } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
var e = { type: "local-jsx", name: "goal", description: "Set a goal Claude checks before stopping", argumentHint: "[<condition> | clear]", immediate: true }, o = { type: "local", name: "goal", supportsNonInteractive: true, thinClientDispatch: "post-text", description: "Set a goal — keep working until the condition is met", get isHidden() {
  return !ye();
}, isEnabled: () => ye() || Pn(), load: () => import("../shared/goal-set.js") }, n = e;
export {
  n as default,
  o as goalNonInteractive
};
