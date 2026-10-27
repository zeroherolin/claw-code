// shared/chunk-gqevy7zx.js — Claude Code 2.1.310 模块 chunk-gqevy7zx.js
import { gu } from "./chunk-85b0dqn6.js";
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { str } from "../hooks/tool-name.v56n.js";
import { dLe } from "./chunk-ms35gg38.js";
function Ni(o, e, s) {
  let t = e && dLe(o);
  return (s ?? Ie().loadedModules).some((r) => r.hooks(o) && gu(r) && (e === void 0 || str(r.matcherFor(o), e, t)));
}
export {
  Ni
};
