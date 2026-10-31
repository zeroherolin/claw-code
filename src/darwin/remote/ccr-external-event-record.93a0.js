// darwin/remote/ccr-external-event-record.93a0.js — Claude Code 2.1.310（darwin）模块 chunk-d1anmpzz.js
import { k } from "../settings/global-config-and-gates.js";
import { L } from "../context/not-admin-owned.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { dkt } from "../agents/session-stable-address.js";
import { L1r, X3s, yTe } from "../tasks/bridge-ingress-demoted.js";
import { y7 } from "../shared/chunk-7894c314.js";
import { pMe, hmt, Ple, Ige, UT } from "../core/conversation-engine.js";
import { Yqn, hUt, f0o, aWs, lWs, dWs, cWs } from "../context/team-memory-sync.js";
import { ydr, lCn } from "../shared/pasted-content.js";
function Vhs(r) {
  return k("tengu_ccr_external_event_record", false) ? r : void 0;
}
function C(r, c, u) {
  let s = c.flat(), f = Yqn(r), m = hUt(r, s, f), i = new Set(m.map((e) => r.slice(e.from, e.to))), l = (e) => {
    let a = f(e), o = a(0);
    for (let d of m) {
      if (o !== -1 && o < d.from) o = a(d.from);
      if (o === -1) return false;
      if (o + e.length <= d.to) return true;
    }
    return false;
  };
  if (c.some((e) => !e.some((a) => i.has(a)) && !e.some(l))) p("sdk_pasted_content", "inline_paste_not_found");
  let _ = pMe();
  return cWs(r, dWs(m, lWs(r, f0o([...m, ...aWs(r, s, f)]), u)), (e) => ({ opener: ydr(_), body: Ple(e), closer: lCn(_) }), Ple);
}
function e9e(r, c, u) {
  let s = r ?? "", { texts: f, problem: m } = L1r(c), i = X3s(u);
  if (m !== void 0) p("sdk_pasted_content", m);
  if (i.problem !== void 0) p("sdk_pasted_content", i.problem);
  if (f.length === 0 && i.texts.length === 0) return s;
  let l = UT();
  if (m === void 0 && i.problem === void 0) g("sdk_pasted_content", { tagged: l, ...i.texts.length > 0 && { inline: true } });
  if (f.length === 0 && !l) return s;
  let _ = i.texts.map((t) => t.trim()).filter((t) => t.length >= hmt).map((t) => L([t, yTe(`x${t}`).slice(1).trim(), yTe(`${t}x`).slice(0, -1).trim(), yTe(t).trim()].flatMap((n) => [n, dkt(n), y7(n)])).filter((n) => n.length >= hmt)), e = (t) => !l ? t : Array.isArray(u) ? C(t, _, i.texts.map((n) => n.trim()).filter((n) => n !== "" && n.length < hmt)) : Ple(t), a = f.map((t) => l ? Ige(t) : `

${t}`).join("");
  if (typeof s === "string") return y7(e(s) + a);
  let o = s.findLastIndex((t) => t.type === "text"), d = s.map((t, n) => t.type !== "text" ? t : n === o ? { ...t, text: e(t.text) } : l ? { ...t, text: Ple(t.text) } : t), P = d[o];
  return y7(P?.type !== "text" ? a === "" ? d : [...d, { type: "text", text: a }] : [...d.slice(0, o), { ...P, text: P.text + a }, ...d.slice(o + 1)]);
}
export {
  Vhs,
  e9e
};
