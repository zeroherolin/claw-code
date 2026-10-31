// darwin/shared/it2-setup.js — Claude Code 2.1.310（darwin）模块 chunk-dgybhh21.js
import { f } from "./chunk-2fe3b2b7.js";
import { os } from "./chunk-869ced06.js";
import { M, u, B } from "../vendor/zod/string-format.js";
var VIt = os({ kind: "it2_setup", payload: f(() => u({ tmuxAvailable: M() })), result: f(() => B(["installed", "use-tmux", "cancelled"])), default: "cancelled" });
export {
  VIt
};
