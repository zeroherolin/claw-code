// shared/it2-setup.dgyb.js — Claude Code 2.1.310 模块 chunk-dgybhh21.js
import { f } from "./chunk-nyvhtfb3.js";
import { os } from "./chunk-98em9746.js";
import { M, u, B } from "../vendor/zod/string-format.k395.js";
var VIt = os({ kind: "it2_setup", payload: f(() => u({ tmuxAvailable: M() })), result: f(() => B(["installed", "use-tmux", "cancelled"])), default: "cancelled" });
export {
  VIt
};
