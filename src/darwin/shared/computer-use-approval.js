// darwin/shared/computer-use-approval.js — Claude Code 2.1.310（darwin）模块 chunk-ftvwrje3.js
import { f } from "./chunk-2fe3b2b7.js";
import { Hte } from "../terminal/system-settings.js";
import { os } from "./chunk-869ced06.js";
import { Eu } from "../vendor/zod/string-format.js";
var C0t = os({ kind: "computer_use_approval", payload: f(() => Eu((e) => typeof e === "object" && e !== null)), result: f(() => Eu((e) => typeof e === "object" && e !== null)), default: { granted: [], denied: [], flags: Hte } });
export {
  C0t
};
