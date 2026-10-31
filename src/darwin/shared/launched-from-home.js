// darwin/shared/launched-from-home.js — Claude Code 2.1.310（darwin）模块 chunk-3vj2k686.js
import { S } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { aMo, lMo, dMo } from "../context/team-memory-sync.js";
function tve(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return { ...aMo(o) && { only_refused_by: S("windows_profile_on_mount_without_drive") }, ...lMo(o) && { on_volume_mounted_twice: true }, ...dMo(o) && { mount_source_unread: true } };
  } catch (r) {
    return l(N(r)), {};
  }
}
export {
  tve
};
