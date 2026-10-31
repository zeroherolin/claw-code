// linux/shared/chunk-339a284e.js — Claude Code 2.1.310（linux）模块 chunk-ttxbg7sf.js
import { ZXo } from "../shell/invalid-type.js";
import { Xkt, HNe, sfe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
function $Le() {
  if (!Xkt()) throw Error("the MDM settings have not been read yet");
  if (sfe()) throw Error("an admin-owned settings document could not be read");
  if (ZXo() !== void 0) throw Error("the managed-settings path was overridden");
  let e = HNe()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e;
}
export {
  $Le
};
