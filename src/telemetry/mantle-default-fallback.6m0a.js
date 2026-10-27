// telemetry/mantle-default-fallback.6m0a.js — Claude Code 2.1.310 模块 chunk-6m0a64c2.js
import { Rf, mrs, hrs } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { a } from "./chunk-wq923bwc.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { Fo, Te } from "../models/total-tokens-reminder.psq3.js";
import { Kzt, Qni, GV, Tqo, l_, mnr, avt, ILe, IVe, Xe } from "../settings/global-config-and-gates.27xj.js";
import { H3n, PCe } from "../context/team-memory-sync.0s3j.js";
import { Ot } from "../models/claude-mythos-preview.rw6s.js";
var eO = { fable: "Fable", sonnet: "Sonnet", opus: "Opus", haiku: "Haiku" };
async function yMt(l, s, d = H3n) {
  let r;
  try {
    return await Promise.race([s, new Promise((o) => {
      r = setTimeout((u, n, f) => {
        t(`[3p-probe] ${n} hit ${f}ms deadline; proceeding without it`), u([]);
      }, d, o, l, d);
    })]);
  } finally {
    clearTimeout(r);
  }
}
async function m(l, s, d, r = H3n) {
  let o = Date.now(), u = await yMt(`${l}-fallback`, s(), r), n = r - (Date.now() - o), f = n > 0 ? await yMt(`${l}-document-default`, d(), n) : [];
  return [u, f];
}
function _(l) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !GV("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !GV("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return i.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !GV("haiku");
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return i.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return false;
  }
}
function k(l, s) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      i.set("ANTHROPIC_DEFAULT_SONNET_MODEL", s);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      i.set("ANTHROPIC_DEFAULT_OPUS_MODEL", s);
      break;
    default:
      return;
  }
  Kzt(l, s), Qni(l, s);
}
function dvr() {
  mrs({ sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !GV("sonnet"), opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !GV("opus") });
}
async function ngo(l) {
  dvr();
  let s = l?.pendingUserModel?.trim(), r = mnr(s === "default" || s === "inherit" || s === "" ? void 0 : s ?? void 0), o = ILe(), u = r != null && r !== "" ? r : s !== void 0 && r == null ? o ?? void 0 : l_() ?? o ?? void 0;
  switch (Te()) {
    case "bedrock":
      return { lines: await D(u), hasHardFailure: false };
    case "vertex":
      return { lines: await p(u), hasHardFailure: false };
    case "mantle": {
      let n = false;
      if (o !== null) {
        let e = Ot(o.trim().toLowerCase());
        n = !(e === "opus" || e === "best" || Xe(e) === Xe(Fo[avt].firstParty)) && IVe();
      }
      let f = r != null && r !== "" || l_() != null || n;
      return T(f);
    }
    default:
      return { lines: [], hasHardFailure: false };
  }
}
function b(l, s) {
  let d = [];
  for (let r of l) hrs(r.candidate), a(s === "bedrock" ? "tengu_bedrock_default_fallback" : "tengu_vertex_default_fallback", { tier: c(r.tier ?? "default"), default_key: S("document_default"), fallback_key: S("tier_default"), cross_tier: S("false") }), d.push(`Default model: ${r.name} not available on this account — not used as this session's default`);
  return d;
}
async function D(l) {
  let { checkBedrockDefaultAvailability: s, checkBedrockDocumentDefaults: d, seedEnvDefaultForUserPin: r } = await import("../models/aws-credential-selectors.8nkz.js"), o = r(l);
  if (o && !_(o.envVar)) k(o.envVar, o.value);
  let [u, n] = await m("bedrock", s, d), f = [];
  for (let e of u) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, Kzt(e.envVar, e.fallbackBedrockId), e.tier === "sonnet") Tqo("bedrock", e.fallbackBedrockId, PCe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable — using ${e.fallbackName}`;
    a("tengu_bedrock_default_fallback", { tier: c(e.tier), default_key: e.documentTargetId ? S("document_target") : c(e.defaultKey), fallback_key: c(e.fallbackKey), cross_tier: S(e.crossTier ? "true" : "false") }), f.push(e.crossTier ? `${eO[e.tier]}: ${e.defaultName} not available — using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${eO[e.tier]}: ${e.defaultName} not available — using ${e.fallbackName} for this session`);
  }
  return f.push(...b(n, "bedrock")), f;
}
async function p(l) {
  let { checkVertexDefaultAvailability: s, checkVertexDocumentDefaults: d, seedEnvDefaultForUserPin: r } = await import("../models/check-vertex-default-availability.7e11.js"), o = r(l);
  if (o && !_(o.envVar)) k(o.envVar, o.value);
  let [u, n] = await m("vertex", s, d), f = [];
  for (let e of u) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, Kzt(e.envVar, e.fallbackVertexId), e.tier === "sonnet") Tqo("vertex", e.fallbackVertexId, PCe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable — using ${e.fallbackName}`;
    a("tengu_vertex_default_fallback", { tier: c(e.tier), default_key: e.documentTargetId ? S("document_target") : c(e.defaultKey), fallback_key: c(e.fallbackKey), cross_tier: S(e.crossTier ? "true" : "false") }), f.push(e.crossTier ? `${eO[e.tier]}: ${e.defaultName} not available — using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${eO[e.tier]}: ${e.defaultName} not available — using ${e.fallbackName} for this session`);
  }
  return f.push(...b(n, "vertex")), f;
}
async function T(l) {
  let { checkMantleDefaultAvailability: s } = await import("./check-mantle-default-availability.h37m.js"), d = await yMt("mantle-fallback", s(void 0, { userPinned: l })), r = [], o = false, u;
  for (let n of d) if (n.kind === "adminPin") {
    if (!l) Rf(n.adminMantleId), u = n.adminMantleId;
  } else if (n.kind === "pinRefuted") {
    if (!l) Rf(n.workingMantleId), u = n.workingMantleId, a("tengu_mantle_default_fallback", { default_key: c(n.defaultKey), fallback_key: c(n.workingKey), admin_pin_refuted: S("true") }), r.push(`${eO[n.tier]}: the admin-configured Opus model is not available on this account — using ${n.workingName} for this session`);
  } else if (n.kind === "fallback") {
    let f = false;
    if (!_(n.envVar)) process.env[n.envVar] = n.fallbackMantleId, Kzt(n.envVar, n.fallbackMantleId), f = true;
    if (!l) Rf(n.fallbackMantleId), u = n.fallbackMantleId, f = true;
    if (f) a("tengu_mantle_default_fallback", { default_key: c(n.defaultKey), fallback_key: c(n.fallbackKey) }), r.push(`${eO[n.tier]}: ${n.defaultName} not available — using ${n.fallbackName} for this session`);
  } else o = true, a("tengu_mantle_default_fallback", { default_key: S("exhausted") }), r.push(`${eO[n.tier]}: no accessible model (tried ${n.triedNames.join(", ")}). Enable ${n.defaultName} in Amazon Bedrock (Mantle).`);
  return { lines: r, hasHardFailure: o, mantleOverride: u };
}
export {
  dvr,
  eO,
  ngo,
  yMt
};
