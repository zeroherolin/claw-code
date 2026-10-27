// telemetry/bedrock-probe-result.h2pr.js — Claude Code 2.1.310 模块 chunk-h2prfk66.js
import { c, Kr } from "../agents/third-party.ydpb.js";
import { a } from "./chunk-wq923bwc.js";
import { Nee } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { gI, jx, rVt, Vb, o1, fM, dNe } from "../mcp/allowed-warning.j2d4.js";
import { Fo, Te } from "../models/total-tokens-reminder.psq3.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { o_n, BEt, mLe, Szt, p_n, LVr, Bf, wt, P_n, YQ, LG, pnr, lI, M_n, F_n, bm, fd, Tue, HY, nZ } from "../settings/global-config-and-gates.27xj.js";
import { dce } from "../api/anthropic-client.7pf8.js";
import { XEe, Out, Mut, q1e, Y1e, r$n, o$n } from "../context/service-account-impersonation-url.xtgg.js";
import { Kln, qln, J0o, Yln, Xln, Jln, f8, M2e, H2e, Qln, Xht } from "../context/team-memory-sync.0s3j.js";
function M() {
  return qln(M_n);
}
async function UTi() {
  if (Te() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Yln(M(), (u) => u.includes("application-inference-profile"));
  if (e.length === 0) return [];
  a("tengu_bedrock_upgrade_check", { stale_tiers: Kr(e.length) });
  let o;
  try {
    o = await o_n();
  } catch {
    return [];
  }
  let l = Szt(await gI()), r = [];
  for (let u of e) {
    let k = Fo[u.defaultKey].firstParty, g = BEt(o, k, l);
    if (!g) continue;
    if (f8(g)) {
      t(`[bedrock-upgrade] ${M2e(u.tier, "upgrade", [g])}`);
      continue;
    }
    let A = bm(Fo[u.pinnedKey].firstParty), _ = bm(Fo[u.defaultKey].firstParty);
    if (!A || !_) continue;
    r.push({ tier: u.tier, envVar: u.envVar, fromKey: u.pinnedKey, fromMarketingName: A, toKey: u.defaultKey, toMarketingName: _, toBedrockId: g });
  }
  let m = (await Promise.all(r.map(async (u) => {
    let k = await ONn(u.toBedrockId, u.tier, { isDefault: true, versionTooOld: "unavailable" });
    return a("tengu_bedrock_probe_result", { tier: c(u.tier), model_id: wt(u.toBedrockId), accessible: k }), k ? u : null;
  }))).filter((u) => u !== null);
  return t(`[bedrock-upgrade] tiersWithPin=${e.length} candidates=${m.length}`), m;
}
function BTi(e) {
  return Xln(e, M());
}
async function jTi() {
  if (Te() !== "bedrock") return [];
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = Kln(Date.now()), o = mt().modelOverrides, l = J0o() ? await gI() : void 0, r = M(), f = Jln(r, o);
  if (f.length === 0) return [];
  a("tengu_bedrock_default_check", { unpinned_tiers: Kr(f.length) });
  let m;
  try {
    m = await o_n();
  } catch {
    m = [];
  }
  let u = l ?? await gI(), k = Szt(u), g = f.some((s) => s.tier === "sonnet"), A = await Promise.all(f.map(async (s) => {
    let h = Fo[s.defaultKey], b = r[s.tier].documentTarget, E = r[s.tier].fromDocument === true, T = b === void 0 ? void 0 : O(b.modelId, m, k), n = T ?? w(s.defaultKey, m, k);
    if (!n) return null;
    if (f8(n)) return t(`[bedrock-fallback] ${M2e(s.tier, "check", [n])}`), null;
    await S(s, n, m, k, o, b, E, g);
    let p = {}, y = await ONn(n, s.tier, { isDefault: true, ...r[s.tier].fromDocument && { versionTooOld: "unavailable" }, onVerdict: (v, C) => {
      p.verdict = v, p.at = C;
    } });
    if (a("tengu_bedrock_probe_result", { tier: c(s.tier), model_id: wt(n), accessible: y }), y || p.verdict === "temporary") return null;
    if (p.verdict === "refused") LG(n, YQ(n), (p.at ?? Date.now()) + XEe);
    let d = await B(s.defaultKey, s.tier, m, k, o, e, b !== void 0, E);
    if (!d) return null;
    if (p.verdict !== "refused") {
      if (!(d.answeredLive === true || d.adminMapped === true || await ONn(d.regionalId, d.crossTier ? "sonnet" : s.tier, { live: true }))) return null;
      if (p.verdict === "denied" && d.adminMapped !== true) LG(n, YQ(n), Date.now() + XEe), jhi(n, s.tier, "refused");
    }
    let D = b?.name ?? bm(h.firstParty), R = bm(Fo[d.key].firstParty);
    if (!D || !R) return null;
    return { tier: s.tier, envVar: s.envVar, defaultKey: s.defaultKey, defaultName: D, ...T !== void 0 && { documentTargetId: T }, fallbackKey: d.key, fallbackName: R, fallbackBedrockId: d.regionalId, ...d.crossTier && { crossTier: true } };
  })), _ = [];
  for (let s of A) if (s !== null) _.push(s);
  return t(`[bedrock-fallback] unpinnedTiers=${f.length} fallbacks=${_.length}`), _;
}
async function WTi() {
  if (Te() !== "bedrock" || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || !F_n()) return [];
  await gI(), await o_n().catch(() => {
    return;
  });
  let e = await Qln(async (o, l) => {
    let r = {}, f = await ONn(o, l, { isDefault: true, versionTooOld: "unavailable", onVerdict: (m) => {
      r.verdict = m;
    } });
    return a("tengu_bedrock_probe_result", { tier: c(l ?? "default"), model_id: wt(o), accessible: f }), f || r.verdict === "temporary";
  }, mt().modelOverrides);
  return t(`[bedrock-fallback] refutedDocumentDefaults=${e.length}`), e;
}
async function S(e, o, l, r, f, m, u, k) {
  let g = (n, p) => ({ id: p, name: bm(Fo[n].firstParty) ?? Fo[n].firstParty }), A = (n) => Boolean(f?.[Fo[n].firstParty]), _ = (n) => A(n) && !f8(String(Bf()[n])), s = (n) => n.flatMap((p) => {
    let y = w(p, l, r);
    return y && !f8(y) ? [g(p, y)] : [];
  }), h = (n, p) => s(H2e(n, p).filter((y) => !A(y))), b = H2e(e.defaultKey, e.tier, m !== void 0), E = u ? b.find(_) : void 0, T = [m === void 0 ? g(e.defaultKey, o) : { id: o, name: m.name }, ...s((E === void 0 ? b : b.slice(0, b.indexOf(E))).filter((n) => !A(n)))];
  if (E !== void 0) T.push(g(E, String(Bf()[E])));
  else if (e.tier === "opus") {
    let n = w(lI, l, r), p = !n ? [] : !f8(n) ? [g(lI, n)] : k ? h(lI, "sonnet") : [];
    T.push(...p.map((y) => ({ ...y, crossTier: true })));
  }
  P_n("bedrock", e.tier, e.envVar, T), await Promise.all(T.slice(1).map(async (n) => {
    let p = n.crossTier ? "sonnet" : e.tier, y = await I(n.id, p);
    if (y?.state === "refused") LG(n.id, YQ(n.id), y.at + XEe);
  })).catch(() => {
  });
}
function w(e, o, l) {
  let r = Fo[e], f = BEt(o, r.firstParty, l);
  if (f) return f;
  if (!r.bedrock) return null;
  return mLe(r.bedrock, l);
}
function O(e, o, l) {
  let r = p_n(e);
  return (r === void 0 ? void 0 : LVr(r, o, l)) ?? e;
}
async function B(e, o, l, r, f, m, u = false, k = false) {
  let g = [];
  function A(d, D) {
    return d.flatMap((R) => {
      let v = w(R, l, r);
      if (!v) return [];
      if (f8(v)) return g.push(D === o ? v : `${v} (the cross-tier Sonnet default)`), [];
      return [{ key: R, regionalId: v, probeTier: D }];
    });
  }
  let _ = (d) => Boolean(f?.[Fo[d].firstParty]), s = (d) => _(d) && !f8(String(Bf()[d])), h = H2e(e, o, u), b = k ? h.find(s) : void 0, E = (b === void 0 ? h : h.slice(0, h.indexOf(b))).filter((d) => !_(d)), T = [A(E, o)];
  if (o === "opus" && b === void 0) T.push(A([lI], "sonnet"));
  if (g.length > 0) t(`[bedrock-fallback] ${M2e(o, "fallback", g)}`);
  let n = /* @__PURE__ */ new Set(), p = (d) => ({ onVerdict: (D, R) => {
    if (D === "refused") LG(d.regionalId, YQ(d.regionalId), (R ?? Date.now()) + XEe);
    else if (D === "accessible") {
      if (pnr(d.regionalId), R === void 0) n.add(d.regionalId);
    }
  } }), y = await o$n(T, (d, D) => ONn(d.regionalId, d.probeTier, { ...D && { live: D }, ...u && d.key === e && { isDefault: true }, ...k && { versionTooOld: "unavailable" }, ...p(d) }), async (d) => (await I(d.regionalId, d.probeTier))?.state === "refused", m);
  if (!y) return b === void 0 ? null : { key: b, regionalId: String(Bf()[b]), adminMapped: true };
  return { key: y.key, regionalId: y.regionalId, ...y.probeTier !== o && { crossTier: true }, ...n.has(y.regionalId) && { answeredLive: true } };
}
async function ONn(e, o, l) {
  let r = await P(o);
  if (r === void 0) return l?.onVerdict?.("temporary"), false;
  return await r$n("bedrock", await K(r), e, () => L(e, r), l) === "accessible";
}
async function jhi(e, o, l) {
  try {
    let r = await P(o), f = r && await K(r);
    if (f) await Y1e(f, e, l);
  } catch (r) {
    t(`[3p-model-memory] bedrock record failed: ${r}`);
  }
}
async function P(e) {
  try {
    return e === "haiku" && Nee(i.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await gI();
  } catch {
    return;
  }
}
function K(e) {
  return Mut("bedrock", () => [e, i.ANTHROPIC_BEDROCK_BASE_URL, i.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...lvr(), Out()]);
}
async function I(e, o) {
  let l = await P(o), r = l && await K(l);
  return r ? q1e(r, e) : void 0;
}
function lvr() {
  let e = mt();
  return [i.AWS_PROFILE, i.AWS_CONFIG_FILE, i.AWS_SHARED_CREDENTIALS_FILE, i.AWS_ACCESS_KEY_ID, i.AWS_ROLE_ARN, i.AWS_WEB_IDENTITY_TOKEN_FILE, i.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, i.AWS_CONTAINER_CREDENTIALS_FULL_URI, e.awsCredentialExport, e.awsAuthRefresh];
}
async function L(e, o) {
  try {
    let [{ AnthropicBedrock: l }, { getProxyFetchOptions: r }] = await Promise.all([import("../vendor/aws-sdk/anthropic-bedrock.zzg3.js"), import("../auth/clear-proxy-auth-helper-cache.02cg.js")]), f = { awsRegion: o, maxRetries: 0, timeout: 8e3, fetchOptions: r({ url: i.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o}.amazonaws.com` }) }, m, u = dce(), k = i.AWS_BEARER_TOKEN_BEDROCK;
    if (k) m = new l({ ...f, apiKey: k, defaultHeaders: { ...u, ...Vb(), ...o1(), Authorization: `Bearer ${k}`, ...!jx() && { "X-Api-Key": null } } });
    else {
      let g = i.CLAUDE_CODE_SKIP_BEDROCK_AUTH, A = fd(), _ = { authToken: null, defaultHeaders: { ...u, ...Vb(), ...o1(), Authorization: null, ...!jx() && { "X-Api-Key": null } }, ...fM }, s = g ? dNe() : void 0, h = g || A ? null : await HY();
      m = h ? new l({ ...f, ..._, awsAccessKey: h.accessKeyId, awsSecretKey: h.secretAccessKey, awsSessionToken: h.sessionToken }) : new l({ ...f, ...g && !s && { skipAuth: true, authToken: null, defaultHeaders: { ...u, ...o1() }, ...fM }, ...g && s && { apiKey: s.match(/^Bearer (.+)$/i)?.[1] ?? s, defaultHeaders: { ...u, ...o1(), Authorization: s, ...rVt() } }, ...!g && _, ...!g && A && { providerChainResolver: Tue("Bedrock").providerChainResolver }, ...!g && !A && { providerChainResolver: nZ(o) } });
    }
    return await m.messages.create(Xht(e)), { accessible: true };
  } catch (l) {
    if (l?.status === 429) return { accessible: true };
    return { accessible: false, error: l };
  }
}
export {
  BTi,
  ONn,
  UTi,
  WTi,
  jTi,
  jhi,
  lvr
};
