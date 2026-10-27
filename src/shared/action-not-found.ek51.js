// shared/action-not-found.ek51.js — Claude Code 2.1.310 模块 chunk-ek51kpdj.js
import { Md } from "./chunk-5zq7df98.js";
import { L2, Hcn, zyt } from "../telemetry/keybinding-customization-release.66sh.js";
import { P, A, j } from "../vendor/react/chunk-s8vmszp2.js";
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
