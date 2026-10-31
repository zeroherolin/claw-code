// darwin/shared/chunk-669ef766.js — Claude Code 2.1.310（darwin）模块 chunk-gqevy7zx.js
import { gu } from "./chunk-b2bcd1a3.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { str } from "../hooks/tool-name.js";
import { dLe } from "./chunk-e9b94e10.js";
function Ni(o, e, s) {
  let t = e && dLe(o);
  return (s ?? Ie().loadedModules).some((r) => r.hooks(o) && gu(r) && (e === void 0 || str(r.matcherFor(o), e, t)));
}
export {
  Ni
};
