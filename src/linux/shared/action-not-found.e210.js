// linux/shared/action-not-found.e210.js — Claude Code 2.1.310（linux）模块 chunk-rv488r12.js
import { Md } from "./chunk-d52cd1ac.js";
import { AG, bcn, $yt } from "../telemetry/keybinding-customization-release.js";
import { P, C, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function ka(e, i, t) {
  let o = Md(), n = o ? bcn(e, i, o.bindings) : void 0, r = n === void 0, f = o ? "action_not_found" : "no_context", d = C(false);
  if (P(() => {
    if (r && !d.current) d.current = true, $yt(e, i, t, f);
  }, [r, e, i, t, f]), n === void 0) return t;
  return n === null ? "" : AG(n);
}
export {
  ka
};
