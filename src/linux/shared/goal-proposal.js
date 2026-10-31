// linux/shared/goal-proposal.js — Claude Code 2.1.310（linux）模块 chunk-426edz56.js
import { p } from "./chunk-2fe3b2b7.js";
import { us } from "./chunk-869ced06.js";
import { o, M, u } from "../vendor/zod/string-format.js";
var bte = us({ kind: "goal_proposal", payload: p(() => u({ condition: o() })), result: p(() => u({ approved: M(), explicit: M().optional() })), default: { approved: false } });
export {
  bte
};
