// linux/hooks/chunk-f1b1ba40.js — Claude Code 2.1.310（linux）模块 chunk-7awex5qc.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Tf } from "../settings/workflow-launch-exec.js";
import { My } from "../shared/chunk-b09058c6.js";
import { i0e } from "../shared/chunk-922e3fb8.js";
import { Ud } from "../plugins/skills-dir.js";
function _0n(o) {
  if (!o || Object.keys(o).length === 0) return false;
  for (let n of Ud) {
    let e = o[n];
    if (!e || e.length === 0) continue;
    for (let r of e) if ((r.hooks?.length ?? 0) > 0) return true;
  }
  return false;
}
function zvs(o, n, e, r, m = false, l = false, u = false, p) {
  if (!e || Object.keys(e).length === 0) return;
  i0e(e, p);
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
function qct(o) {
  return My() && o !== void 0 && Tf.has(o);
}
export {
  _0n,
  qct,
  zvs
};
