// darwin/settings/chunk-ea11cbf9.js — Claude Code 2.1.310（darwin）模块 chunk-wt44aey8.js
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { ti } from "../agents/tool-use-id.js";
import { qye } from "../plugins/not-found.js";
import { Lv } from "../shared/chunk-cbf69fda.js";
import { Ni } from "../shared/chunk-669ef766.js";
var WD = (o) => Ni(`classic.${o}`, void 0, Lv(`classic.${o}`));
var kDo = Object.freeze(["allowManagedModsOnly"]);
function gFr() {
  let o = fe("policySettings")?.pluginConfigs?.[qye]?.options ?? {};
  return ti(kDo.map((s) => [s, o[s] ?? null]));
}
export {
  WD,
  gFr,
  kDo
};
