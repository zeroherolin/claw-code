// darwin/shared/skill-directory-reload.js — Claude Code 2.1.310（darwin）模块 chunk-3crwebzz.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { TD, yne, g2, WN } from "../core/conversation-engine.js";
import { Uae } from "../settings/skill-file-changed.js";
async function H8e() {
  TD(), WN(), yne(), g2.emit();
  try {
    await Uae.rehome(), g("skill_directory_reload");
  } catch (r) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`, { level: "error" }), p("skill_directory_reload", "rehome_failed");
  }
}
export {
  H8e
};
