// settings/chunk-wt44aey8.js — Claude Code 2.1.310 模块 chunk-wt44aey8.js
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { ti } from "../agents/tool-use-id.maye.js";
import { qye } from "../plugins/not-found.2nbd.js";
import { Lv } from "../shared/chunk-emh9bc9e.js";
import { Ni } from "../shared/chunk-gqevy7zx.js";
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
