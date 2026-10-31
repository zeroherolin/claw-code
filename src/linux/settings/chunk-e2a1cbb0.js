// linux/settings/chunk-e2a1cbb0.js — Claude Code 2.1.310（linux）模块 chunk-ef26pcgm.js
import { kVe, TVe, Cs } from "./global-config-and-gates.js";
import { pe, pr } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { dEn, MZ, est } from "../fs/ca-certs-load.js";
function zUe() {
  let e = TVe("proxyAuthHelper", (pr() || {}).proxyAuthHelper), r = MZ() !== e;
  if (dEn({ helper: e, fromProjectOrLocal: pe("projectSettings")?.proxyAuthHelper === e || pe("localSettings")?.proxyAuthHelper === e || kVe("proxyAuthHelper"), trustAccepted: Cs }), r) est();
}
export {
  zUe
};
