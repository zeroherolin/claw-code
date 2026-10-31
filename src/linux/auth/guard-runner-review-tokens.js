// linux/auth/guard-runner-review-tokens.js — Claude Code 2.1.310（linux）模块 chunk-d7xnw6q1.js
import { O2 } from "../shared/chunk-960c3301.js";
function E() {
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review" && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") O2(() => {
  });
}
export {
  E as guardRunnerReviewTokens
};
