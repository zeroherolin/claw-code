// shared/chunk-emh9bc9e.js — Claude Code 2.1.310 模块 chunk-emh9bc9e.js
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { Db } from "./chunk-b6n7b0tm.js";
import { XNe } from "../shell/invalid-type.qnva.js";
var $un = (o) => o.name === XNe && Db(o);
var Lv = (o) => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ie().loadedModules.filter((t) => !(e && $un(t)));
};
export {
  $un,
  Lv
};
