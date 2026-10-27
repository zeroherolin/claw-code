// plugins/user-install.g2n3.js — Claude Code 2.1.310 模块 chunk-g2n359d1.js
import { ue } from "../settings/global-config-and-gates.27xj.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Vp, On } from "../shell/invalid-type.qnva.js";
import { Sp } from "./not-found.2nbd.js";
import { rL, iL } from "./entry-refused.bp7z.js";
import { ytr } from "./chunk-hxt89a41.js";
import { hDo, E4n, v4n, wDo } from "./plugin-enabled-for-session.9xx8.js";
var d = 14, f = 10;
async function d8e() {
  try {
    let e = ytr();
    if (e === void 0) return [];
    if (iL() !== null) return [];
    let { enabled: s } = await e;
    if (s.length === 0) return [];
    let u = Sp(), l = rL(), c = ue().numStartups, g = Date.now(), r = [];
    for (let n of s) {
      let { marketplace: o } = On(n.repository);
      if (!o || Vp(o)) continue;
      if (wDo(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = E4n(n.repository);
      if (!i) continue;
      if (hDo(n.repository)) continue;
      let { sessionsSinceLastUse: m, daysSinceLastUse: a } = v4n(i, c, g);
      if (a >= d && m >= f) r.push({ pluginId: n.repository, name: n.name, daysSinceLastUse: a });
    }
    return r.sort((n, o) => o.daysSinceLastUse - n.daysSinceLastUse), r;
  } catch (e) {
    return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`, { level: "error" }), [];
  }
}
function Hks(e) {
  if (iL() !== null) return null;
  let s = E4n(e);
  if (!s) return null;
  if (hDo(e)) return 0;
  return v4n(s, ue().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export {
  Hks,
  d8e
};
