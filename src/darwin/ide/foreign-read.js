// darwin/ide/foreign-read.js — Claude Code 2.1.310（darwin）模块 chunk-2ne7y9a0.js
import { Z } from "../artifacts/same-account.js";
import { xn } from "../artifacts/cobalt-plinth-lovage.js";
import { Ts } from "../settings/global-config-and-gates.js";
import { At, aH, tc, ZP, ym, NU } from "../artifacts/artifact-share-status.js";
import { hw, Nxs } from "../artifacts/template-instance.js";
import { kD } from "../artifacts/cobalt-plinth-samphire.js";
import { Ih, mS, Zbt, sh, ae } from "../permissions/max-thinking-tokens.js";
import { CJs, ev, d4, P2t, MQ, iR, tv, IDe, RF, p_e, Rx } from "../settings/gable-onyx-sluice.js";
import { ZW, c7, aB, eMt, yte, BIe } from "../agents/artifact-inherited-type-grant.js";
import { wP, fEr, Mae, YOt, gEr } from "../artifacts/artifact-routine-first-publish-unasked.js";
import { qn } from "../web/allow-web-fetch.js";
function FIe() {
  return Z().frozenMultiFile ?? kD();
}
function vN(t) {
  return iR() && sh(t);
}
function J9e() {
  return { behavior: "deny", message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.", decisionReason: { type: "safetyCheck", reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session", classifierApprovable: false } };
}
function tQt(t, e = "file_path") {
  return { behavior: "deny", message: `cannot read ${e} (${t}) — the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`, decisionReason: { type: "safetyCheck", reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session", classifierApprovable: false } };
}
function $Ie(t, e, n) {
  if (fte(t, e.slug) || eMt(At(e.slug), n)) return true;
  if (!(fEr && ae(t).mode === "plan")) {
    let o = At(e.slug);
    if (RF(o)) return P2t("foreign_read", e.slug) || MQ(Zbt(t), "artifactAssetReadHumanConsentSlugs", e.slug);
    return n || ZP(o) && YOt(e) === false || (IDe(n, e) ? P2t("foreign_read", e.slug) : d4("foreign_read", e.slug));
  }
  return MQ(Zbt(t), ae(t).mode === "plan" || IDe(n, e) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug);
}
function Oae(t, e, n, s = "copy") {
  let o = At(e.slug);
  if (s === "copy" && Rx(o)) return gEr(t, e.slug);
  let i = tc(o);
  return i && (!ZW(o) || aB(o)) && !(n === "files" && c7(o)) || $Ie(t, e, i);
}
function fte(t, e) {
  return g(ae(t).mode, e);
}
function g(t, e) {
  return t !== "plan" && f(e);
}
function f(t) {
  let e = At(t);
  return ZP(e) && !RF(e) && e?.lastProbeIssuedAt !== void 0 && !aH(e.lastProbeIssuedAt) && Nxs(t);
}
function Q9e(t, e) {
  return cEr(ae(t).mode, e);
}
function cEr(t, e) {
  return t !== "plan" && XLn(e);
}
function XLn(t) {
  return p(t) && f(t);
}
function p(t) {
  let e = At(t);
  return e !== void 0 && e.probeFailed !== true && e.mode === "org";
}
function m(t, e) {
  let n = At(e);
  return ae(t).mode !== "plan" && n?.probeFailed === true && n.probeGone === true && n.lastProbeIssuedAt !== void 0 && !aH(n.lastProbeIssuedAt) && hw(e) === "first_party_type";
}
function mte(t, e, n = false) {
  let s = wP("read", t, e);
  return (n ? Q9e(e, t.slug) : fte(e, t.slug) || m(e, t.slug)) ? { ask: false, foreignRead: true, attested: true } : ev(s);
}
function JLn(t, e) {
  let n = At(t.slug), s = Rx(n) ? ev({ ...wP("read", t, e), owned: false, outsideOrg: true }) : mte(t, e);
  return s.ask && s.about === "outside_org" ? { ...s, answeredBy: CJs, informedOnly: true } : s;
}
function Vfo(t, e) {
  if (mS(t) || vN(t)) return () => "none";
  let n = tv(e) || p_e(e.slug);
  if (!Ih(t)) return (a) => n && !a ? "none" : "save";
  let s = ae(t), o = s.mode === "auto", i = s.shouldAvoidPermissionPrompts === true;
  return (a) => o && !(n && !a) ? "save" : i ? "none" : "ask";
}
function HTi(t, e, n) {
  if (!(ym(e.slug) && !Ts(t.agentContext))) return yte("webfetch", t, e.slug, false), null;
  let o = n(), i = xn(e);
  return ({ forcedBy: a, personOnly: u }) => {
    let r = a ?? o;
    yte("webfetch", t, e.slug, true, r !== null);
    let l = `${u?.lead ?? `Claude wants to fetch the artifact at ${i}`} — prompted by the new-comments notification; its content enters this conversation`;
    if (r === null) {
      let c = Mae(t, "Nothing was fetched", l);
      if (c !== null) return c;
    }
    let d = r === null ? l : `${l} — your ${r.ruleValue.toolName} ask rule covers ${r.ruleValue.toolName !== qn && r.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
    return { behavior: "ask", message: d, decisionReason: { type: "safetyCheck", reason: d, classifierApprovable: r === null && u === void 0 }, ...r !== null && { matchedAskRule: r }, suppressAlwaysAllowRule: true, localDisplayOnly: true };
  };
}
function DTi(t, e) {
  if (BIe("webfetch", t, e.slug, false) && !Ts(t.agentContext)) NU(e.slug);
}
export {
  $Ie,
  DTi,
  FIe,
  HTi,
  J9e,
  JLn,
  Oae,
  Q9e,
  Vfo,
  XLn,
  cEr,
  fte,
  mte,
  tQt,
  vN
};
