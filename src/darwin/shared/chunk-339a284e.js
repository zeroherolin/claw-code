// darwin/shared/chunk-339a284e.js — Claude Code 2.1.310（darwin）模块 chunk-jyhkt2nk.js
import { P7o } from "../shell/invalid-type.js";
import { oCt, BNe, ppe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
function GDe() {
  if (!oCt()) throw Error("the MDM settings have not been read yet");
  if (ppe()) throw Error("an admin-owned settings document could not be read");
  if (P7o() !== void 0) throw Error("the managed-settings path was overridden");
  let e = BNe()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e;
}
export {
  GDe
};
