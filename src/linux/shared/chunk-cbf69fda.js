// linux/shared/chunk-cbf69fda.js — Claude Code 2.1.310（linux）模块 chunk-q85nvv4x.js
import { Ie } from "../plugins/chunk-c198f87f.js";
import { DS } from "./chunk-cc3dea5c.js";
import { GNe } from "../shell/invalid-type.js";
var uun = (o) => o.name === GNe && DS(o);
var HE = (o) => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ie().loadedModules.filter((t) => !(e && uun(t)));
};
export {
  HE,
  uun
};
