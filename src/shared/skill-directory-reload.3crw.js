// shared/skill-directory-reload.3crw.js — Claude Code 2.1.310 模块 chunk-3crwebzz.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { TD, yne, g2, WN } from "../core/conversation-engine.31gx.js";
import { Uae } from "../settings/skill-file-changed.tv36.js";
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
