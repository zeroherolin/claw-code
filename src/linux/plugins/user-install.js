// linux/plugins/user-install.js — Claude Code 2.1.310（linux）模块 chunk-ta9cgaw3.js
import { ue } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Vf, On } from "../shell/invalid-type.js";
import { Sf } from "./not-found.js";
import { e0, r0 } from "./entry-refused.js";
import { Zer } from "./chunk-c198f87f.js";
import { JHo, u5n, f5n, nLo } from "./plugin-enabled-for-session.js";
var d = 14, f = 10;
async function n8e() {
  try {
    let e = Zer();
    if (e === void 0) return [];
    if (r0() !== null) return [];
    let { enabled: s } = await e;
    if (s.length === 0) return [];
    let u = Sf(), l = e0(), c = ue().numStartups, g = Date.now(), r = [];
    for (let n of s) {
      let { marketplace: o } = On(n.repository);
      if (!o || Vf(o)) continue;
      if (nLo(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = u5n(n.repository);
      if (!i) continue;
      if (JHo(n.repository)) continue;
      let { sessionsSinceLastUse: m, daysSinceLastUse: a } = f5n(i, c, g);
      if (a >= d && m >= f) r.push({ pluginId: n.repository, name: n.name, daysSinceLastUse: a });
    }
    return r.sort((n, o) => o.daysSinceLastUse - n.daysSinceLastUse), r;
  } catch (e) {
    return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`, { level: "error" }), [];
  }
}
function nks(e) {
  if (r0() !== null) return null;
  let s = u5n(e);
  if (!s) return null;
  if (JHo(e)) return 0;
  return f5n(s, ue().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export {
  n8e,
  nks
};
