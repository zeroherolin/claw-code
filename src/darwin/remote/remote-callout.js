// darwin/remote/remote-callout.js — Claude Code 2.1.310（darwin）模块 chunk-5t48zsyc.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { os } from "../shared/chunk-869ced06.js";
import { u, B } from "../vendor/zod/string-format.js";
var jX = os({ kind: "remote_callout", payload: f(() => u({})), result: f(() => B(["enable", "dismiss", "cancelled"])), default: "cancelled", hideWhile: ["panel", "draft"] });
export {
  jX
};
