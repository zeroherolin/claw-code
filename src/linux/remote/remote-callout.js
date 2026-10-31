// linux/remote/remote-callout.js — Claude Code 2.1.310（linux）模块 chunk-kext8zwr.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { us } from "../shared/chunk-869ced06.js";
import { u, B } from "../vendor/zod/string-format.js";
var DX = us({ kind: "remote_callout", payload: p(() => u({})), result: p(() => B(["enable", "dismiss", "cancelled"])), default: "cancelled", hideWhile: ["panel", "draft"] });
export {
  DX
};
