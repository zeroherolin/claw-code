// darwin/agents/chunk-a37a2039.js — Claude Code 2.1.310（darwin）模块 chunk-qk26vwx0.js
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
var q$e = { heading: "Learn the moves", body: "Quick lessons on the things power users do — plan mode, undo, subagents, memory. About 5 minutes. Come back any time with /powerup.", banner: "New here? Type /powerup for a 5-minute tour — modes, undo, @-mentions, and how to teach Claude your rules." };
function Ueo() {
  let e = i.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (e === "banner" || e === "step") return e;
  return k("tengu_birch_lantern", "off");
}
export {
  Ueo,
  q$e
};
