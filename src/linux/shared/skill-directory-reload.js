// linux/shared/skill-directory-reload.js — Claude Code 2.1.310（linux）模块 chunk-kkjb9rfw.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { EL, lne, sG, FN } from "../core/conversation-engine.js";
import { Oae } from "../settings/skill-file-changed.js";
async function P8e() {
  EL(), FN(), lne(), sG.emit();
  try {
    await Oae.rehome(), g("skill_directory_reload");
  } catch (r) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`, { level: "error" }), f("skill_directory_reload", "rehome_failed");
  }
}
export {
  P8e
};
