// shared/none-yet.56v1.js — Claude Code 2.1.310 模块 chunk-56v1nx8q.js
import { yf, X8 } from "../plugins/entry-refused.bp7z.js";
import { nf, VVs } from "../plugins/claudeai-plugins-sync-enabled.61rf.js";
import { basename as r, sep as n } from "path";
function eAs(i) {
  let s = nf(), { listedOwnerships: t } = s;
  t.clear(), s.listedSkillsAnswer = "none_yet";
  for (let e of i) {
    let l;
    try {
      l = yf(r(X8(e.name, n)));
    } catch {
      continue;
    }
    if (!t.has(l)) t.set(l, { listedName: e.name, ownership: VVs(e), savedFromAChat: typeof e.backing_plugin_id === "string" });
  }
  s.listedSkillsAnswer = "a_list";
}
function ayo(i) {
  return nf().listedOwnerships.get(yf(i));
}
export {
  ayo,
  eAs
};
