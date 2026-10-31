// darwin/settings/chunk-e2a1cbb0.js — Claude Code 2.1.310（darwin）模块 chunk-2kwr337z.js
import { MVe, HVe, As } from "./global-config-and-gates.js";
import { fe, fr } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { Lvn, zZ, ust } from "../fs/ca-certs-load.js";
function ZUe() {
  let e = HVe("proxyAuthHelper", (fr() || {}).proxyAuthHelper), r = zZ() !== e;
  if (Lvn({ helper: e, fromProjectOrLocal: fe("projectSettings")?.proxyAuthHelper === e || fe("localSettings")?.proxyAuthHelper === e || MVe("proxyAuthHelper"), trustAccepted: As }), r) ust();
}
export {
  ZUe
};
