// linux/shared/launched-from-home.js — Claude Code 2.1.310（linux）模块 chunk-a6mzt5bz.js
import { b } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { iMo, aMo, lMo } from "../context/team-memory-sync.js";
function qve(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return { ...iMo(o) && { only_refused_by: b("windows_profile_on_mount_without_drive") }, ...aMo(o) && { on_volume_mounted_twice: true }, ...lMo(o) && { mount_source_unread: true } };
  } catch (r) {
    return l(N(r)), {};
  }
}
export {
  qve
};
