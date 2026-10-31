// darwin/shared/action-not-found.c239.js — Claude Code 2.1.310（darwin）模块 chunk-hpy9am98.js
import { Md } from "./chunk-d52cd1ac.js";
import { zyt } from "../telemetry/keybinding-customization-release.js";
import { P, A, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function qs(n, e, t) {
  let r = Md(), i = r?.getDisplayText(n, e), o = i === void 0, s = r ? "action_not_found" : "no_context", u = A(false);
  if (P(() => {
    if (o && !u.current) u.current = true, zyt(n, e, t, s);
  }, [o, n, e, t, s]), o) return t;
  return i === null ? "" : i;
}
export {
  qs
};
