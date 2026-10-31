// linux/settings/chunk-ea11cbf9.js — Claude Code 2.1.310（linux）模块 chunk-0sy839zk.js
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { ti } from "../agents/tool-use-id.js";
import { jye } from "../plugins/not-found.js";
import { HE } from "../shared/chunk-cbf69fda.js";
import { Ni } from "../shared/chunk-669ef766.js";
var UL = (o) => Ni(`classic.${o}`, void 0, HE(`classic.${o}`));
var UHo = Object.freeze(["allowManagedModsOnly"]);
function WNr() {
  let o = pe("policySettings")?.pluginConfigs?.[jye]?.options ?? {};
  return ti(UHo.map((s) => [s, o[s] ?? null]));
}
export {
  UHo,
  UL,
  WNr
};
