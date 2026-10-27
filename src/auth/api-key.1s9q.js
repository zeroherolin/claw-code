// auth/api-key.1s9q.js — Claude Code 2.1.310 模块 chunk-1s9q3k6s.js
import { as } from "../fs/async-hooks.9s1z.js";
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { v, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { St } from "../artifacts/cowritten-artifact-html.thm2.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { wr, Qs } from "../models/total-tokens-reminder.psq3.js";
import { i } from "../shared/environment.9a41.js";
import { Ctr, i_n, a_n, Ptr, Ezt, T4, _ti, c_n, Itr, kc, B_, K_n, pR, vt, Pnt, gn, Oj, kL, urr, kn } from "../settings/global-config-and-gates.27xj.js";
import { Nc } from "../remote/local-agent.we9a.js";
import { Hpe } from "./profile-explicit.b7t3.js";
import { on } from "./env-quad.nmae.js";
import { o, E, u, B, T } from "../vendor/zod/string-format.k395.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { join as l } from "path";
var p = 2, Zvr = 36e5, ekr = 0.1;
function Ggo(e2, r) {
  return Math.round(e2 * (1 + ekr * (2 * r - 1)));
}
var y = f(() => u({ version: T(p), fetchedAt: E(), staleAt: E(), etag: o().refine(T4).optional(), organizationUuid: o().refine((r) => Vt(r)?.toLowerCase() === r).optional(), resolution: B(Itr).optional(), catalog: u({ surface: B(Ptr), config: _ti(), state: c_n().optional() }).nullable() }).transform((r) => {
  if (r.etag === void 0 || r.catalog === null || !i_n(r.catalog)) return r;
  let { etag: n, ...a } = r;
  return a;
}));
function G1e(e2) {
  switch (e2.kind) {
    case "account":
      return "org";
    case "token":
    case "api_key":
    case "profile":
    case "federation":
      return "orgless";
  }
}
function GEe(e2) {
  switch (e2.kind) {
    case "account":
    case "token":
      return "oauth";
    case "api_key":
      return "api_key";
    case "profile":
      return "profile";
    case "federation":
      return "federation";
  }
}
function tkr(e2, r) {
  if (e2 === null || r === null) return false;
  switch (e2.kind) {
    case "account":
      return r.kind === "account" && e2.orgUuid === r.orgUuid && e2.accountScope === r.accountScope;
    case "token":
      return r.kind === "token" && e2.tokenScope === r.tokenScope;
    case "api_key":
      return r.kind === "api_key" && e2.keyScope === r.keyScope;
    case "profile":
      return r.kind === "profile" && e2.profileScope === r.profileScope;
    case "federation":
      return r.kind === "federation" && e2.federationScope === r.federationScope;
  }
}
function Eut(e2, r) {
  switch (e2.kind) {
    case "account":
      return l(kL(), `${e2.orgUuid}-${e2.accountScope}-${r}.json`);
    case "token":
      return l(kL(), `tok-${e2.tokenScope}-${r}.json`);
    case "api_key":
      return l(kL(), `key-${e2.keyScope}-${r}.json`);
    case "profile":
      return l(kL(), `prof-${e2.profileScope}-${r}.json`);
    case "federation":
      return l(kL(), `fed-${e2.federationScope}-${r}.json`);
  }
}
function d() {
  return wr().servedCatalogByKey;
}
function oZt(e2, r) {
  switch (e2.kind) {
    case "account":
      return `${e2.orgUuid}:${e2.accountScope}:${r}`;
    case "token":
      return `tok:${e2.tokenScope}:${r}`;
    case "api_key":
      return `key:${e2.keyScope}:${r}`;
    case "profile":
      return `prof:${e2.profileScope}:${r}`;
    case "federation":
      return `fed:${e2.federationScope}:${r}`;
  }
}
function XCs(e2, r) {
  return d().get(oZt(e2, r)) ?? void 0;
}
var s = Ezt + 4096;
async function k(e2) {
  let r;
  try {
    r = await Oj().readRange(e2, 0, s + 1);
  } catch (a) {
    if (!G(a)) t(`[servedCatalog] cache read failed: ${v(a) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = y().safeParse(ot(r.toString("utf8"), false));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}
async function nkr(e2, r) {
  let n = oZt(e2, r), a = d().get(n);
  if (a !== void 0) return a ?? void 0;
  let c = await k(Eut(e2, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), await zgo(e2, r);
    return;
  }
  return await S(n, c), c;
}
async function zgo(e2, r) {
  d().set(oZt(e2, r), null);
  try {
    await Oj().delete(Eut(e2, r));
  } catch (n) {
    if (!G(n)) t(`[servedCatalog] cache delete failed: ${v(n) ?? "unknown"}`);
  }
}
async function sZt(e2, r, n) {
  await S(oZt(e2, r), n);
  try {
    let a = Oj();
    await a.mkdir(kL()), await a.atomicWrite(Eut(e2, r), _(n), 384);
  } catch (a) {
    t(`[servedCatalog] cache write failed: ${v(a) ?? "unknown"}`);
  }
}
async function S(e2, r) {
  if (A(e2, r), r.catalog !== null) await urr(Ctr(r.catalog));
}
function A(e2, r) {
  if (d().set(e2, r), r.catalog !== null) a_n(r.catalog);
}
function JCs({ catalog: e2, etag: r, organizationUuid: n, resolution: a, now: c = Date.now(), random: m = Math.random() }) {
  return { version: p, fetchedAt: c, staleAt: g(c, m), ...r !== void 0 && (e2 === null || !i_n(e2)) && { etag: r }, ...n !== void 0 && { organizationUuid: n }, ...a !== void 0 && { resolution: a }, catalog: e2 };
}
function QCs(e2, r = Date.now(), n = Math.random()) {
  return { ...e2, fetchedAt: r, staleAt: g(r, n) };
}
function g(e2, r) {
  return e2 + Ggo(Zvr, r);
}
function vut(e2, r = Date.now()) {
  let n = e2.fetchedAt + Zvr * (1 + ekr);
  return r < e2.fetchedAt || r >= e2.staleAt || e2.staleAt > n;
}
var O = "tengu_delegated_quail", F = { mode: "off" };
function UMt({ skipEssentialTrafficGate: e2 = false } = {}) {
  if (as(i.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (Sr()) return "bare";
  if (!e2 && St()) return "essential_traffic";
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!Qs()) return "not_first_party";
  let r = h();
  if (r.scope === null) return r.reason;
  if (!on("allow_model_catalog")) return "policy";
  return null;
}
function QIe() {
  if (UMt() !== null) return "off";
  return rkr("served");
}
function rkr(e2) {
  let { value: r, source: n } = kn(O, F);
  return R(r, n, e2);
}
function R(e2, r, n) {
  return w(e2, n);
}
function w(e2, r) {
  switch (I(e2, r)) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    default:
      return "off";
  }
}
function I(e2, r) {
  if (e2 === null || typeof e2 !== "object") return;
  let n;
  if (r === "served") n = "served" in e2 ? e2.served : void 0;
  else n = "published" in e2 ? e2.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in e2 ? e2.mode : void 0;
}
function U() {
  let e2 = i.CLAUDE_CODE_ORGANIZATION_UUID ?? gn()?.organizationUuid;
  return Vt(e2)?.toLowerCase() ?? null;
}
var C = 12;
function h() {
  if (!vt()) return x();
  let e2 = pR(), r = e2 === "store" ? Vt(gn()?.accountUuid) : Vt(i.CLAUDE_CODE_ACCOUNT_UUID), n = U();
  if (r !== null && n !== null) return { scope: { kind: "account", orgUuid: n, accountScope: et(r.toLowerCase()).slice(0, C) } };
  switch (e2) {
    case "env":
    case "fd": {
      let a = Pnt();
      if (a === null) return { scope: null, reason: "no_account" };
      return { scope: { kind: "token", tokenScope: a.slice(0, C) } };
    }
    case "store":
    case "none":
      return { scope: null, reason: n === null ? "no_org" : "no_account" };
  }
}
function x() {
  if (false) switch (e) {
    case "none":
    case "ANTHROPIC_API_KEY":
    case "/login managed key":
  }
  return { scope: null, reason: "not_claude_ai_auth" };
}
function w8e() {
  if (!Qs()) return "third_party";
  if (vt()) switch (pR()) {
    case "env":
    case "fd":
      return "host_token";
    case "store":
    case "none":
      return "claudeai_login";
  }
  if (B_()) return "auth_token_env";
  switch (K_n().source) {
    case "ANTHROPIC_API_KEY":
      return "api_key_env";
    case "/login managed key":
      return "api_key_login";
    case "apiKeyHelper":
      return "api_key_helper";
    case "none":
      return L() ?? "none";
  }
}
function L() {
  if (!kc()) return null;
  return Hpe() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function kte() {
  return h().scope;
}
function m7() {
  if (i.CLAUDE_CODE_REMOTE) return "ccr";
  if (Nc()) return "ccd";
  return "cc";
}
export {
  Eut,
  G1e,
  GEe,
  Ggo,
  JCs,
  QCs,
  QIe,
  UMt,
  XCs,
  Zvr,
  ekr,
  kte,
  m7,
  nkr,
  oZt,
  rkr,
  sZt,
  tkr,
  vut,
  w8e,
  zgo
};
