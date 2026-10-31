// darwin/shared/chunk-cbf69fda.js — Claude Code 2.1.310（darwin）模块 chunk-emh9bc9e.js
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Db } from "./chunk-cc3dea5c.js";
import { XNe } from "../shell/invalid-type.js";
var $un = (o) => o.name === XNe && Db(o);
var Lv = (o) => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ie().loadedModules.filter((t) => !(e && $un(t)));
};
export {
  $un,
  Lv
};
