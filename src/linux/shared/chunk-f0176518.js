// linux/shared/chunk-f0176518.js — Claude Code 2.1.310（linux）模块 chunk-er8bc2me.js
import { nt, U } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
var r = new nt(() => ({ store: void 0 })), n = { maxBytes: 0, save: async () => null };
function FLo(e) {
  return r.peek(e)?.store ?? (e.host.launchOptions.diskless() ? n : void 0);
}
function cb() {
  return FLo(U());
}
async function YGe(e, o) {
  try {
    return await e.save(o);
  } catch {
    return t("A result could not be saved where the model reads files", { level: "error" }), null;
  }
}
export {
  FLo,
  YGe,
  cb
};
