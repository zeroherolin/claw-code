// shared/chunk-cf9z5v65.js — Claude Code 2.1.310 模块 chunk-cf9z5v65.js
import { nt, U } from "../context/not-admin-owned.ersa.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
var r = new nt(() => ({ store: void 0 })), n = { maxBytes: 0, save: async () => null };
function fLo(e) {
  return r.peek(e)?.store ?? (e.host.launchOptions.diskless() ? n : void 0);
}
function uS() {
  return fLo(U());
}
async function sGe(e, o) {
  try {
    return await e.save(o);
  } catch {
    return t("A result could not be saved where the model reads files", { level: "error" }), null;
  }
}
export {
  fLo,
  sGe,
  uS
};
