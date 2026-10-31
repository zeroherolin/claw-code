// linux/settings/chunk-bbdd224a.js — Claude Code 2.1.310（linux）模块 chunk-x4q79z9e.js
import { aE, mB } from "../shell/invalid-type.js";
import { tT } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { TQn } from "./built-in.js";
import { FY } from "../permissions/frontmatter-grant-withheld.js";
import { Fhr, BPt, jPt, Bhr, jhr, Whr, Ghr, zhr } from "./chunk-d220c95d.js";
import { o7 } from "../context/org-memory-writes-setting-changed.js";
import { join as i, resolve as f } from "path";
function Poo(o, { backstop: t = false } = {}) {
  return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !t && (o.hookSources.length > 0 || o.commandHelperSources.length > 0);
}
function Ioo() {
  return { allowRules: BPt(), additionalDirectories: jPt(), hookSources: [], commandHelperSources: [] };
}
function NOn(o) {
  let t = f(o), m = mB(t, tT), r = aE(i(t, ".claude", "settings.json")).settings, c = i(m, ".claude", "settings.local.json"), a = i(t, ".claude", "settings.local.json"), s = [aE(c).settings, ...a === c ? [] : [aE(a).settings]].filter((e) => e !== null), S = s.length === 0 ? null : { permissions: { additionalDirectories: s.flatMap((e) => e.permissions?.additionalDirectories ?? []) } }, u = { projectSettings: r, localSettings: S }, p = { sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]], read: (e) => u[e] ?? null, rules: (e) => e === "localSettings" ? s.flatMap((h) => FY(h, e)) : FY(u[e] ?? null, e) }, d = (e) => jhr(e) || Whr(e) || Ghr(e) || Bhr(e) || zhr(e), l = [], n = [];
  if (Fhr(r)) l.push(".claude/settings.json");
  if (s.some(Fhr)) l.push(".claude/settings.local.json");
  let g = TQn(t);
  if (g !== null) l.push(o7(g));
  if (d(r)) n.push(".claude/settings.json");
  if (s.some(d)) n.push(".claude/settings.local.json");
  return { allowRules: BPt(p), additionalDirectories: jPt(p), hookSources: l, commandHelperSources: n };
}
export {
  Ioo,
  NOn,
  Poo
};
