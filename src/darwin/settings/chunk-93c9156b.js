// darwin/settings/chunk-93c9156b.js — Claude Code 2.1.310（darwin）模块 chunk-pnh8wpnq.js
import { AA, PE } from "../context/not-admin-owned.js";
import { Ro } from "./workflow-launch-exec.js";
import { $m, KO, Hu } from "../plugins/entry-refused.js";
import { E_ } from "../shared/environment.js";
import { mg, fe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { Yft, DFs, R0r, jE, KN, pm, wy } from "../core/conversation-engine.js";
import { Cjo, _mn } from "../permissions/frontmatter-grant-withheld.js";
var a = R0r.filter((e) => e !== "userSettings");
function z5e(e) {
  if (Cjo()) return false;
  if (_mn()) return true;
  return (e ?? KPt()).length > 0;
}
function KPt(e = Xhr()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${E_()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (KO()) return false;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return false;
    let s = l.source;
    if (s.source === "url") return !!s.headersHelper && /^https:\/\//i.test(s.url) && Hu(s) && !u(t, s.url);
    if (s.source === "settings") return Hu(s) && !p(t) && s.plugins.some((n) => !!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !$m(`${n.name}@${t}`));
    return false;
  });
}
function u(e, r) {
  let o = Ro();
  if (a.some((t) => o.includes(t) && Object.hasOwn(fe(t)?.extraKnownMarketplaces ?? {}, e))) return true;
  return DFs({ source: "url", url: r }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(jE(), e);
}
function i(e) {
  if (PE() || wy()) return false;
  let { servers: r } = pm(e, { expandVars: false });
  return Object.entries(r).some(([o, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && Yft(o) === "rejected") && KN(o, t));
}
function Xhr() {
  if (AA()) return [];
  let e = Ro(), r = e.includes("localSettings") ? fe("localSettings") : null, o = [];
  if (e.includes("projectSettings") && !mg() && c(fe("projectSettings"), r)) o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export {
  KPt,
  Xhr,
  z5e
};
