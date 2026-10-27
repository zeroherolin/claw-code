// shared/goal-proposal.6vet.js — Claude Code 2.1.310 模块 chunk-6vetkpyt.js
import { f } from "./chunk-nyvhtfb3.js";
import { os } from "./chunk-98em9746.js";
import { o, M, u } from "../vendor/zod/string-format.k395.js";
var Tte = os({ kind: "goal_proposal", payload: f(() => u({ condition: o() })), result: f(() => u({ approved: M(), explicit: M().optional() })), default: { approved: false } });
export {
  Tte
};
