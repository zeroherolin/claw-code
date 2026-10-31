// darwin/shared/goal-proposal.js — Claude Code 2.1.310（darwin）模块 chunk-6vetkpyt.js
import { f } from "./chunk-2fe3b2b7.js";
import { os } from "./chunk-869ced06.js";
import { o, M, u } from "../vendor/zod/string-format.js";
var Tte = os({ kind: "goal_proposal", payload: f(() => u({ condition: o() })), result: f(() => u({ approved: M(), explicit: M().optional() })), default: { approved: false } });
export {
  Tte
};
