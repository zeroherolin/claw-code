// darwin/mcp/chunk-d6e9c05b.js — Claude Code 2.1.310（darwin）模块 chunk-w6e08qgm.js
import { Ro } from "../settings/workflow-launch-exec.js";
import { nu, jw, xI } from "../shell/invalid-type.js";
import { fe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
var NV = ["userSettings", "flagSettings", "policySettings"];
function N_e(t) {
  let i = new Set(Ro()), e = gue(t), n, r;
  for (let s of NV) {
    if (!i.has(s)) continue;
    let g = fe(s)?.pluginConfigs;
    for (let u of e) {
      let o = g?.[u];
      if (o?.options) n = { ...n, ...o.options };
      if (o?.mcpServers) {
        r = r ?? {};
        for (let [l, c] of Object.entries(o.mcpServers)) r[l] = { ...r[l], ...c };
      }
    }
  }
  return { options: n, mcpServers: r };
}
function gue(t) {
  let i = xI(t);
  if (i.length > 0) return [...i.toReversed(), t];
  let e = `@${nu}`, n = t.endsWith(e) ? t.slice(0, -e.length) : "";
  return n !== "" && !n.includes("@") ? [n, t] : [t];
}
function gtr(t) {
  let i = new Set(Ro()), e;
  for (let n of NV) {
    if (!i.has(n)) continue;
    let r = TY(fe(n)?.enabledPlugins, t);
    if (r !== void 0) e = r;
  }
  return e;
}
function hzt(t, i) {
  let e = jw(i), n = xI(e);
  if (n.length === 0) return { deciding: i, written: i, replaced: [] };
  let r = n.filter((s) => t?.[s] !== void 0);
  return { deciding: t?.[e] === void 0 ? r[0] ?? e : e, written: e, replaced: r };
}
function TY(t, i) {
  let e = jw(i);
  return [e, ...xI(e), i].map((n) => t?.[n]).find((n) => n !== void 0);
}
export {
  NV,
  N_e,
  TY,
  gtr,
  gue,
  hzt
};
