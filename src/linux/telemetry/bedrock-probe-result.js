// linux/telemetry/bedrock-probe-result.js — Claude Code 2.1.310（linux）模块 chunk-0yad9mk1.js
import { c, Vr } from "../agents/third-party.js";
import { a } from "./chunk-9097a12b.js";
import { xee } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { fI, Ux, zKt, zS, ZU, aM, rNe } from "../mcp/allowed-warning.js";
import { $o, Ae } from "../models/total-tokens-reminder.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Byn, Dvt, l0e, a2t, Yyn, gVr, Bp, wt, p_n, B7, Cz, qtr, sI, h_n, w_n, Sm, pd, bue, A9, q7 } from "../settings/global-config-and-gates.js";
import { tce } from "../api/anthropic-client.js";
import { Kve, Out, Mut, jBe, WBe, Q$n, Z$n } from "../context/service-account-impersonation-url.js";
import { Jln, Qln, XDo, Zln, edn, tdn, i8, AGe, CGe, ndn, syt } from "../context/team-memory-sync.js";
function M() {
  return Qln(h_n);
}
async function rAi() {
  if (Ae() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Zln(M(), (u) => u.includes("application-inference-profile"));
  if (e.length === 0) return [];
  a("tengu_bedrock_upgrade_check", { stale_tiers: Vr(e.length) });
  let o;
  try {
    o = await Byn();
  } catch {
    return [];
  }
  let l = a2t(await fI()), r = [];
  for (let u of e) {
    let k = $o[u.defaultKey].firstParty, g = Dvt(o, k, l);
    if (!g) continue;
    if (i8(g)) {
      t(`[bedrock-upgrade] ${AGe(u.tier, "upgrade", [g])}`);
      continue;
    }
    let A = Sm($o[u.pinnedKey].firstParty), _ = Sm($o[u.defaultKey].firstParty);
    if (!A || !_) continue;
    r.push({ tier: u.tier, envVar: u.envVar, fromKey: u.pinnedKey, fromMarketingName: A, toKey: u.defaultKey, toMarketingName: _, toBedrockId: g });
  }
  let m = (await Promise.all(r.map(async (u) => {
    let k = await _Nn(u.toBedrockId, u.tier, { isDefault: true, versionTooOld: "unavailable" });
    return a("tengu_bedrock_probe_result", { tier: c(u.tier), model_id: wt(u.toBedrockId), accessible: k }), k ? u : null;
  }))).filter((u) => u !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${e.length} candidates=${m.length}`), m;
}
function oAi(e) {
  return edn(e, M());
}
async function sAi() {
  if (Ae() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Jln(Date.now()), o = pt().modelOverrides, l = XDo() ? await fI() : void 0, r = M(), f = tdn(r, o);
  if (f.length === 0) return [];
  a("tengu_bedrock_default_check", { unpinned_tiers: Vr(f.length) });
  let m;
  try {
    m = await Byn();
  } catch {
    m = [];
  }
  let u = l ?? await fI(), k = a2t(u), g = f.some((s) => s.tier === "sonnet"), A = await Promise.all(f.map(async (s) => {
    let h = $o[s.defaultKey], b = r[s.tier].documentTarget, E = r[s.tier].fromDocument === true, T = b === void 0 ? void 0 : O(b.modelId, m, k), n = T ?? w(s.defaultKey, m, k);
    if (!n) return null;
    if (i8(n)) return t(`[bedrock-fallback] ${AGe(s.tier, "check", [n])}`), null;
    await S(s, n, m, k, o, b, E, g);
    let p = {}, y = await _Nn(n, s.tier, { isDefault: true, ...r[s.tier].fromDocument && { versionTooOld: "unavailable" }, onVerdict: (v, C) => {
      p.verdict = v, p.at = C;
    } });
    if (a("tengu_bedrock_probe_result", { tier: c(s.tier), model_id: wt(n), accessible: y }), y || p.verdict === "temporary") return null;
    if (p.verdict === "refused") Cz(n, B7(n), (p.at ?? Date.now()) + Kve);
    let d = await B(s.defaultKey, s.tier, m, k, o, e, b !== void 0, E);
    if (!d) return null;
    if (p.verdict !== "refused") {
      if (!(d.answeredLive === true || d.adminMapped === true || await _Nn(d.regionalId, d.crossTier ? "sonnet" : s.tier, { live: true }))) return null;
      if (p.verdict === "denied" && d.adminMapped !== true) Cz(n, B7(n), Date.now() + Kve), shi(n, s.tier, "refused");
    }
    let D = b?.name ?? Sm(h.firstParty), R = Sm($o[d.key].firstParty);
    if (!D || !R) return null;
    return { tier: s.tier, envVar: s.envVar, defaultKey: s.defaultKey, defaultName: D, ...T !== void 0 && { documentTargetId: T }, fallbackKey: d.key, fallbackName: R, fallbackBedrockId: d.regionalId, ...d.crossTier && { crossTier: true } };
  })), _ = [];
  for (let s of A) if (s !== null) _.push(s);
  return t(`[bedrock-fallback] unpinnedTiers=${f.length} fallbacks=${_.length}`), _;
}
async function iAi() {
  if (Ae() !== "bedrock" || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || !w_n()) return [];
  await fI(), await Byn().catch(() => {
    return;
  });
  let e = await ndn(async (o, l) => {
    let r = {}, f = await _Nn(o, l, { isDefault: true, versionTooOld: "unavailable", onVerdict: (m) => {
      r.verdict = m;
    } });
    return a("tengu_bedrock_probe_result", { tier: c(l ?? "default"), model_id: wt(o), accessible: f }), f || r.verdict === "temporary";
  }, pt().modelOverrides);
  return t(`[bedrock-fallback] refutedDocumentDefaults=${e.length}`), e;
}
async function S(e, o, l, r, f, m, u, k) {
  let g = (n, p) => ({ id: p, name: Sm($o[n].firstParty) ?? $o[n].firstParty }), A = (n) => Boolean(f?.[$o[n].firstParty]), _ = (n) => A(n) && !i8(String(Bp()[n])), s = (n) => n.flatMap((p) => {
    let y = w(p, l, r);
    return y && !i8(y) ? [g(p, y)] : [];
  }), h = (n, p) => s(CGe(n, p).filter((y) => !A(y))), b = CGe(e.defaultKey, e.tier, m !== void 0), E = u ? b.find(_) : void 0, T = [m === void 0 ? g(e.defaultKey, o) : { id: o, name: m.name }, ...s((E === void 0 ? b : b.slice(0, b.indexOf(E))).filter((n) => !A(n)))];
  if (E !== void 0) T.push(g(E, String(Bp()[E])));
  else if (e.tier === "opus") {
    let n = w(sI, l, r), p = !n ? [] : !i8(n) ? [g(sI, n)] : k ? h(sI, "sonnet") : [];
    T.push(...p.map((y) => ({ ...y, crossTier: true })));
  }
  p_n("bedrock", e.tier, e.envVar, T), await Promise.all(T.slice(1).map(async (n) => {
    let p = n.crossTier ? "sonnet" : e.tier, y = await I(n.id, p);
    if (y?.state === "refused") Cz(n.id, B7(n.id), y.at + Kve);
  })).catch(() => {
  });
}
function w(e, o, l) {
  let r = $o[e], f = Dvt(o, r.firstParty, l);
  if (f) return f;
  if (!r.bedrock) return null;
  return l0e(r.bedrock, l);
}
function O(e, o, l) {
  let r = Yyn(e);
  return (r === void 0 ? void 0 : gVr(r, o, l)) ?? e;
}
async function B(e, o, l, r, f, m, u = false, k = false) {
  let g = [];
  function A(d, D) {
    return d.flatMap((R) => {
      let v = w(R, l, r);
      if (!v) return [];
      if (i8(v)) return g.push(D === o ? v : `${v} (the cross-tier Sonnet default)`), [];
      return [{ key: R, regionalId: v, probeTier: D }];
    });
  }
  let _ = (d) => Boolean(f?.[$o[d].firstParty]), s = (d) => _(d) && !i8(String(Bp()[d])), h = CGe(e, o, u), b = k ? h.find(s) : void 0, E = (b === void 0 ? h : h.slice(0, h.indexOf(b))).filter((d) => !_(d)), T = [A(E, o)];
  if (o === "opus" && b === void 0) T.push(A([sI], "sonnet"));
  if (g.length > 0) t(`[bedrock-fallback] ${AGe(o, "fallback", g)}`);
  let n = /* @__PURE__ */ new Set(), p = (d) => ({ onVerdict: (D, R) => {
    if (D === "refused") Cz(d.regionalId, B7(d.regionalId), (R ?? Date.now()) + Kve);
    else if (D === "accessible") {
      if (qtr(d.regionalId), R === void 0) n.add(d.regionalId);
    }
  } }), y = await Z$n(T, (d, D) => _Nn(d.regionalId, d.probeTier, { ...D && { live: D }, ...u && d.key === e && { isDefault: true }, ...k && { versionTooOld: "unavailable" }, ...p(d) }), async (d) => (await I(d.regionalId, d.probeTier))?.state === "refused", m);
  if (!y) return b === void 0 ? null : { key: b, regionalId: String(Bp()[b]), adminMapped: true };
  return { key: y.key, regionalId: y.regionalId, ...y.probeTier !== o && { crossTier: true }, ...n.has(y.regionalId) && { answeredLive: true } };
}
async function _Nn(e, o, l) {
  let r = await P(o);
  if (r === void 0) return l?.onVerdict?.("temporary"), false;
  return await Q$n("bedrock", await K(r), e, () => L(e, r), l) === "accessible";
}
async function shi(e, o, l) {
  try {
    let r = await P(o), f = r && await K(r);
    if (f) await WBe(f, e, l);
  } catch (r) {
    t(`[3p-model-memory] bedrock record failed: ${r}`);
  }
}
async function P(e) {
  try {
    return e === "haiku" && xee(i.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await fI();
  } catch {
    return;
  }
}
function K(e) {
  return Mut("bedrock", () => [e, i.ANTHROPIC_BEDROCK_BASE_URL, i.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...Vvr(), Out()]);
}
async function I(e, o) {
  let l = await P(o), r = l && await K(l);
  return r ? jBe(r, e) : void 0;
}
function Vvr() {
  let e = pt();
  return [i.AWS_PROFILE, i.AWS_CONFIG_FILE, i.AWS_SHARED_CREDENTIALS_FILE, i.AWS_ACCESS_KEY_ID, i.AWS_ROLE_ARN, i.AWS_WEB_IDENTITY_TOKEN_FILE, i.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, i.AWS_CONTAINER_CREDENTIALS_FULL_URI, e.awsCredentialExport, e.awsAuthRefresh];
}
async function L(e, o) {
  try {
    let [{ AnthropicBedrock: l }, { getProxyFetchOptions: r }] = await Promise.all([import("../vendor/aws-sdk/anthropic-bedrock.js"), import("../auth/clear-proxy-auth-helper-cache.js")]), f = { awsRegion: o, maxRetries: 0, timeout: 8e3, fetchOptions: r({ url: i.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o}.amazonaws.com` }) }, m, u = tce(), k = i.AWS_BEARER_TOKEN_BEDROCK;
    if (k) m = new l({ ...f, apiKey: k, defaultHeaders: { ...u, ...zS(), ...ZU(), Authorization: `Bearer ${k}`, ...!Ux() && { "X-Api-Key": null } } });
    else {
      let g = i.CLAUDE_CODE_SKIP_BEDROCK_AUTH, A = pd(), _ = { authToken: null, defaultHeaders: { ...u, ...zS(), ...ZU(), Authorization: null, ...!Ux() && { "X-Api-Key": null } }, ...aM }, s = g ? rNe() : void 0, h = g || A ? null : await A9();
      m = h ? new l({ ...f, ..._, awsAccessKey: h.accessKeyId, awsSecretKey: h.secretAccessKey, awsSessionToken: h.sessionToken }) : new l({ ...f, ...g && !s && { skipAuth: true, authToken: null, defaultHeaders: { ...u, ...ZU() }, ...aM }, ...g && s && { apiKey: s.match(/^Bearer (.+)$/i)?.[1] ?? s, defaultHeaders: { ...u, ...ZU(), Authorization: s, ...zKt() } }, ...!g && _, ...!g && A && { providerChainResolver: bue("Bedrock").providerChainResolver }, ...!g && !A && { providerChainResolver: q7(o) } });
    }
    return await m.messages.create(syt(e)), { accessible: true };
  } catch (l) {
    if (l?.status === 429) return { accessible: true };
    return { accessible: false, error: l };
  }
}
export {
  Vvr,
  _Nn,
  iAi,
  oAi,
  rAi,
  sAi,
  shi
};
