// remote/remote-callout.5t48.js — Claude Code 2.1.310 模块 chunk-5t48zsyc.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { os } from "../shared/chunk-98em9746.js";
import { u, B } from "../vendor/zod/string-format.k395.js";
var jX = os({ kind: "remote_callout", payload: f(() => u({})), result: f(() => B(["enable", "dismiss", "cancelled"])), default: "cancelled", hideWhile: ["panel", "draft"] });
export {
  jX
};
