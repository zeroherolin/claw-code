// linux/settings/chunk-93c9156b.js — Claude Code 2.1.310（linux）模块 chunk-zvrxpre6.js
import { kC, xv } from "../context/not-admin-owned.js";
import { Ro } from "./workflow-launch-exec.js";
import { Fm, BO, Ou } from "../plugins/entry-refused.js";
import { w_ } from "../shared/environment.js";
import { mg, pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { jpt, XNs, lDr, Bv, WN, fm, by } from "../core/conversation-engine.js";
import { X1o, rmn } from "../permissions/frontmatter-grant-withheld.js";
var a = lDr.filter((e) => e !== "userSettings");
function $6e(e) {
  if (X1o()) return false;
  if (rmn()) return true;
  return (e ?? FPt()).length > 0;
}
function FPt(e = Dhr()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${w_()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (BO()) return false;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return false;
    let s = l.source;
    if (s.source === "url") return !!s.headersHelper && /^https:\/\//i.test(s.url) && Ou(s) && !u(t, s.url);
    if (s.source === "settings") return Ou(s) && !p(t) && s.plugins.some((n) => !!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !Fm(`${n.name}@${t}`));
    return false;
  });
}
function u(e, r) {
  let o = Ro();
  if (a.some((t) => o.includes(t) && Object.hasOwn(pe(t)?.extraKnownMarketplaces ?? {}, e))) return true;
  return XNs({ source: "url", url: r }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(Bv(), e);
}
function i(e) {
  if (xv() || by()) return false;
  let { servers: r } = fm(e, { expandVars: false });
  return Object.entries(r).some(([o, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && jpt(o) === "rejected") && WN(o, t));
}
function Dhr() {
  if (kC()) return [];
  let e = Ro(), r = e.includes("localSettings") ? pe("localSettings") : null, o = [];
  if (e.includes("projectSettings") && !mg() && c(pe("projectSettings"), r)) o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export {
  $6e,
  Dhr,
  FPt
};
