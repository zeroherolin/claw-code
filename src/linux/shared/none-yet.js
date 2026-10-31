// linux/shared/none-yet.js — Claude Code 2.1.310（linux）模块 chunk-3gxbxty5.js
import { _p, j8 } from "../plugins/entry-refused.js";
import { op, aVs } from "../plugins/claudeai-plugins-sync-enabled.js";
import { basename as r, sep as n } from "path";
function wAs(i) {
  let s = op(), { listedOwnerships: t } = s;
  t.clear(), s.listedSkillsAnswer = "none_yet";
  for (let e of i) {
    let l;
    try {
      l = _p(r(j8(e.name, n)));
    } catch {
      continue;
    }
    if (!t.has(l)) t.set(l, { listedName: e.name, ownership: aVs(e), savedFromAChat: typeof e.backing_plugin_id === "string" });
  }
  s.listedSkillsAnswer = "a_list";
}
function Cho(i) {
  return op().listedOwnerships.get(_p(i));
}
export {
  Cho,
  wAs
};
