// darwin/auth/guard-runner-review-tokens.js — Claude Code 2.1.310（darwin）模块 chunk-1vxe0t56.js
import { Bz } from "../shared/chunk-d7d58ade.js";
function E() {
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review" && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") Bz(() => {
  });
}
export {
  E as guardRunnerReviewTokens
};
