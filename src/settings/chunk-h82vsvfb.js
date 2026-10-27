// settings/chunk-h82vsvfb.js — Claude Code 2.1.310 模块 chunk-h82vsvfb.js
import { lv, S1 } from "../shell/invalid-type.qnva.js";
import { nC } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { WJn } from "./built-in.5fzv.js";
import { X3 } from "../permissions/frontmatter-grant-withheld.8tyz.js";
import { tyr, YPt, XPt, ryr, oyr, syr, iyr, ayr } from "./chunk-emepk0bf.js";
import { pQ } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { join as i, resolve as f } from "path";
function eso(o, { backstop: t = false } = {}) {
  return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !t && (o.hookSources.length > 0 || o.commandHelperSources.length > 0);
}
function tso() {
  return { allowRules: YPt(), additionalDirectories: XPt(), hookSources: [], commandHelperSources: [] };
}
function ZOn(o) {
  let t = f(o), m = S1(t, nC), r = lv(i(t, ".claude", "settings.json")).settings, c = i(m, ".claude", "settings.local.json"), a = i(t, ".claude", "settings.local.json"), s = [lv(c).settings, ...a === c ? [] : [lv(a).settings]].filter((e) => e !== null), S = s.length === 0 ? null : { permissions: { additionalDirectories: s.flatMap((e) => e.permissions?.additionalDirectories ?? []) } }, u = { projectSettings: r, localSettings: S }, p = { sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]], read: (e) => u[e] ?? null, rules: (e) => e === "localSettings" ? s.flatMap((h) => X3(h, e)) : X3(u[e] ?? null, e) }, d = (e) => oyr(e) || syr(e) || iyr(e) || ryr(e) || ayr(e), l = [], n = [];
  if (tyr(r)) l.push(".claude/settings.json");
  if (s.some(tyr)) l.push(".claude/settings.local.json");
  let g = WJn(t);
  if (g !== null) l.push(pQ(g));
  if (d(r)) n.push(".claude/settings.json");
  if (s.some(d)) n.push(".claude/settings.local.json");
  return { allowRules: YPt(p), additionalDirectories: XPt(p), hookSources: l, commandHelperSources: n };
}
export {
  ZOn,
  eso,
  tso
};
