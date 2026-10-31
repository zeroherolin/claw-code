// darwin/shared/action-not-found.e210.js — Claude Code 2.1.310（darwin）模块 chunk-ek51kpdj.js
import { Md } from "./chunk-d52cd1ac.js";
import { L2, Hcn, zyt } from "../telemetry/keybinding-customization-release.js";
import { P, A, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function Ca(e, i, t) {
  let o = Md(), n = o ? Hcn(e, i, o.bindings) : void 0, r = n === void 0, f = o ? "action_not_found" : "no_context", d = A(false);
  if (P(() => {
    if (r && !d.current) d.current = true, zyt(e, i, t, f);
  }, [r, e, i, t, f]), n === void 0) return t;
  return n === null ? "" : L2(n);
}
export {
  Ca
};
