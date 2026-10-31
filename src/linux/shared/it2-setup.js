// linux/shared/it2-setup.js — Claude Code 2.1.310（linux）模块 chunk-gd09dpdj.js
import { p } from "./chunk-2fe3b2b7.js";
import { us } from "./chunk-869ced06.js";
import { M, u, B } from "../vendor/zod/string-format.js";
var $It = us({ kind: "it2_setup", payload: p(() => u({ tmuxAvailable: M() })), result: p(() => B(["installed", "use-tmux", "cancelled"])), default: "cancelled" });
export {
  $It
};
