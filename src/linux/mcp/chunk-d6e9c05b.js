// linux/mcp/chunk-d6e9c05b.js — Claude Code 2.1.310（linux）模块 chunk-mg0tfavz.js
import { Ro } from "../settings/workflow-launch-exec.js";
import { tu, Bw, TI } from "../shell/invalid-type.js";
import { pe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
var AV = ["userSettings", "flagSettings", "policySettings"];
function P_e(t) {
  let i = new Set(Ro()), e = lue(t), n, r;
  for (let s of AV) {
    if (!i.has(s)) continue;
    let g = pe(s)?.pluginConfigs;
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
function lue(t) {
  let i = TI(t);
  if (i.length > 0) return [...i.toReversed(), t];
  let e = `@${tu}`, n = t.endsWith(e) ? t.slice(0, -e.length) : "";
  return n !== "" && !n.includes("@") ? [n, t] : [t];
}
function Jer(t) {
  let i = new Set(Ro()), e;
  for (let n of AV) {
    if (!i.has(n)) continue;
    let r = _9(pe(n)?.enabledPlugins, t);
    if (r !== void 0) e = r;
  }
  return e;
}
function o2t(t, i) {
  let e = Bw(i), n = TI(e);
  if (n.length === 0) return { deciding: i, written: i, replaced: [] };
  let r = n.filter((s) => t?.[s] !== void 0);
  return { deciding: t?.[e] === void 0 ? r[0] ?? e : e, written: e, replaced: r };
}
function _9(t, i) {
  let e = Bw(i);
  return [e, ...TI(e), i].map((n) => t?.[n]).find((n) => n !== void 0);
}
export {
  AV,
  Jer,
  P_e,
  _9,
  lue,
  o2t
};
