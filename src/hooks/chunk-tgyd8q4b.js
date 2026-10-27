// hooks/chunk-tgyd8q4b.js — Claude Code 2.1.310 模块 chunk-tgyd8q4b.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { kp } from "../settings/workflow-launch-exec.t4r2.js";
import { Dy } from "../shared/chunk-9m922vm4.js";
import { pLe } from "../shared/chunk-s0p49rh9.js";
import { Ud } from "../plugins/skills-dir.cemw.js";
function MLn(o) {
  if (!o || Object.keys(o).length === 0) return false;
  for (let n of Ud) {
    let e = o[n];
    if (!e || e.length === 0) continue;
    for (let r of e) if ((r.hooks?.length ?? 0) > 0) return true;
  }
  return false;
}
function wvs(o, n, e, r, m = false, l = false, u = false, p) {
  if (!e || Object.keys(e).length === 0) return;
  pLe(e, p);
  let s = 0;
  for (let i of Ud) {
    let f = e[i];
    if (!f || f.length === 0) continue;
    let a = i;
    if (m && i === "Stop") a = "SubagentStop", t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);
    for (let c of f) {
      let S = c.matcher ?? "", g = c.hooks;
      if (!g || g.length === 0) continue;
      for (let h of g) o.add(n, a, S, h, { personal: l, checkout: u }), s++;
    }
  }
  if (s > 0) t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`);
}
function Jct(o) {
  return Dy() && o !== void 0 && kp.has(o);
}
export {
  Jct,
  MLn,
  wvs
};
