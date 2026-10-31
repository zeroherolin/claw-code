// linux/remote/ccr-external-event-record.93a0.js — Claude Code 2.1.310（linux）模块 chunk-nbjjsjd2.js
import { k } from "../settings/global-config-and-gates.js";
import { L } from "../context/not-admin-owned.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { nkt } from "../agents/session-stable-address.js";
import { kBr, bYs, gAe } from "../tasks/bridge-ingress-demoted.js";
import { cJ } from "../shared/chunk-7894c314.js";
import { iMe, dmt, wle, Age, NA } from "../core/conversation-engine.js";
import { U4n, _Ut, fDo, Ljs, Njs, $js, Fjs } from "../context/team-memory-sync.js";
import { tdr, zkn } from "../shared/pasted-content.js";
function vhs(r) {
  return k("tengu_ccr_external_event_record", false) ? r : void 0;
}
function C(r, c, u) {
  let s = c.flat(), m = U4n(r), p = _Ut(r, s, m), i = new Set(p.map((e) => r.slice(e.from, e.to))), l = (e) => {
    let a = m(e), o = a(0);
    for (let d of p) {
      if (o !== -1 && o < d.from) o = a(d.from);
      if (o === -1) return false;
      if (o + e.length <= d.to) return true;
    }
    return false;
  };
  if (c.some((e) => !e.some((a) => i.has(a)) && !e.some(l))) f("sdk_pasted_content", "inline_paste_not_found");
  let _ = iMe();
  return Fjs(r, $js(p, Njs(r, fDo([...p, ...Ljs(r, s, m)]), u)), (e) => ({ opener: tdr(_), body: wle(e), closer: zkn(_) }), wle);
}
function V6e(r, c, u) {
  let s = r ?? "", { texts: m, problem: p } = kBr(c), i = bYs(u);
  if (p !== void 0) f("sdk_pasted_content", p);
  if (i.problem !== void 0) f("sdk_pasted_content", i.problem);
  if (m.length === 0 && i.texts.length === 0) return s;
  let l = NA();
  if (p === void 0 && i.problem === void 0) g("sdk_pasted_content", { tagged: l, ...i.texts.length > 0 && { inline: true } });
  if (m.length === 0 && !l) return s;
  let _ = i.texts.map((t) => t.trim()).filter((t) => t.length >= dmt).map((t) => L([t, gAe(`x${t}`).slice(1).trim(), gAe(`${t}x`).slice(0, -1).trim(), gAe(t).trim()].flatMap((n) => [n, nkt(n), cJ(n)])).filter((n) => n.length >= dmt)), e = (t) => !l ? t : Array.isArray(u) ? C(t, _, i.texts.map((n) => n.trim()).filter((n) => n !== "" && n.length < dmt)) : wle(t), a = m.map((t) => l ? Age(t) : `

${t}`).join("");
  if (typeof s === "string") return cJ(e(s) + a);
  let o = s.findLastIndex((t) => t.type === "text"), d = s.map((t, n) => t.type !== "text" ? t : n === o ? { ...t, text: e(t.text) } : l ? { ...t, text: wle(t.text) } : t), P = d[o];
  return cJ(P?.type !== "text" ? a === "" ? d : [...d, { type: "text", text: a }] : [...d.slice(0, o), { ...P, text: P.text + a }, ...d.slice(o + 1)]);
}
export {
  V6e,
  vhs
};
