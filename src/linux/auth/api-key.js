// linux/auth/api-key.js — Claude Code 2.1.310（linux）模块 chunk-7wy55s2g.js
import { is } from "../fs/async-hooks.93b1.js";
import { Kt } from "../shared/chunk-3b9c376b.js";
import { E, G } from "../telemetry/anthropic-workspace-id.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { ot } from "../fs/chunk-86be9585.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Sr, Qs } from "../models/total-tokens-reminder.js";
import { i } from "../shared/environment.js";
import { atr, Wyn, Gyn, ftr, c2t, g5, Dei, Vyn, ptr, kc, U_, P_n, dR, Et, Ent, gn, Aj, w0, Vnr, kn } from "../settings/global-config-and-gates.js";
import { Nc } from "../remote/local-agent.js";
import { xfe } from "./profile-explicit.js";
import { on } from "./env-quad.js";
import { o, v, u, B, A } from "../vendor/zod/string-format.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { join as l } from "path";
var f = 2, $Er = 36e5, FEr = 0.1;
function Sgo(e2, r) {
  return Math.round(e2 * (1 + FEr * (2 * r - 1)));
}
var y = p(() => u({ version: A(f), fetchedAt: v(), staleAt: v(), etag: o().refine(g5).optional(), organizationUuid: o().refine((r) => Kt(r)?.toLowerCase() === r).optional(), resolution: B(ptr).optional(), catalog: u({ surface: B(ftr), config: Dei(), state: Vyn().optional() }).nullable() }).transform((r) => {
  if (r.etag === void 0 || r.catalog === null || !Wyn(r.catalog)) return r;
  let { etag: n, ...a } = r;
  return a;
}));
function HBe(e2) {
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
function Fve(e2) {
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
function UEr(e2, r) {
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
function but(e2, r) {
  switch (e2.kind) {
    case "account":
      return l(w0(), `${e2.orgUuid}-${e2.accountScope}-${r}.json`);
    case "token":
      return l(w0(), `tok-${e2.tokenScope}-${r}.json`);
    case "api_key":
      return l(w0(), `key-${e2.keyScope}-${r}.json`);
    case "profile":
      return l(w0(), `prof-${e2.profileScope}-${r}.json`);
    case "federation":
      return l(w0(), `fed-${e2.federationScope}-${r}.json`);
  }
}
function d() {
  return Sr().servedCatalogByKey;
}
function q7t(e2, r) {
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
function wTs(e2, r) {
  return d().get(q7t(e2, r)) ?? void 0;
}
var s = c2t + 4096;
async function k(e2) {
  let r;
  try {
    r = await Aj().readRange(e2, 0, s + 1);
  } catch (a) {
    if (!G(a)) t(`[servedCatalog] cache read failed: ${E(a) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = y().safeParse(ot(r.toString("utf8"), false));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}
async function BEr(e2, r) {
  let n = q7t(e2, r), a = d().get(n);
  if (a !== void 0) return a ?? void 0;
  let c = await k(but(e2, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), await wgo(e2, r);
    return;
  }
  return await S(n, c), c;
}
async function wgo(e2, r) {
  d().set(q7t(e2, r), null);
  try {
    await Aj().delete(but(e2, r));
  } catch (n) {
    if (!G(n)) t(`[servedCatalog] cache delete failed: ${E(n) ?? "unknown"}`);
  }
}
async function Y7t(e2, r, n) {
  await S(q7t(e2, r), n);
  try {
    let a = Aj();
    await a.mkdir(w0()), await a.atomicWrite(but(e2, r), _(n), 384);
  } catch (a) {
    t(`[servedCatalog] cache write failed: ${E(a) ?? "unknown"}`);
  }
}
async function S(e2, r) {
  if (O(e2, r), r.catalog !== null) await Vnr(atr(r.catalog));
}
function O(e2, r) {
  if (d().set(e2, r), r.catalog !== null) Gyn(r.catalog);
}
function vTs({ catalog: e2, etag: r, organizationUuid: n, resolution: a, now: c = Date.now(), random: m = Math.random() }) {
  return { version: f, fetchedAt: c, staleAt: g(c, m), ...r !== void 0 && (e2 === null || !Wyn(e2)) && { etag: r }, ...n !== void 0 && { organizationUuid: n }, ...a !== void 0 && { resolution: a }, catalog: e2 };
}
function ETs(e2, r = Date.now(), n = Math.random()) {
  return { ...e2, fetchedAt: r, staleAt: g(r, n) };
}
function g(e2, r) {
  return e2 + Sgo($Er, r);
}
function Sut(e2, r = Date.now()) {
  let n = e2.fetchedAt + $Er * (1 + FEr);
  return r < e2.fetchedAt || r >= e2.staleAt || e2.staleAt > n;
}
var F = "tengu_delegated_quail", R = { mode: "off" };
function MMt({ skipEssentialTrafficGate: e2 = false } = {}) {
  if (is(i.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (wr()) return "bare";
  if (!e2 && _t()) return "essential_traffic";
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!Qs()) return "not_first_party";
  let r = h();
  if (r.scope === null) return r.reason;
  if (!on("allow_model_catalog")) return "policy";
  return null;
}
function KIe() {
  if (MMt() !== null) return "off";
  return jEr("served");
}
function jEr(e2) {
  let { value: r, source: n } = kn(F, R);
  return T(r, n, e2);
}
function T(e2, r, n) {
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
  return Kt(e2)?.toLowerCase() ?? null;
}
var C = 12;
function h() {
  if (!Et()) return x();
  let e2 = dR(), r = e2 === "store" ? Kt(gn()?.accountUuid) : Kt(i.CLAUDE_CODE_ACCOUNT_UUID), n = U();
  if (r !== null && n !== null) return { scope: { kind: "account", orgUuid: n, accountScope: et(r.toLowerCase()).slice(0, C) } };
  switch (e2) {
    case "env":
    case "fd": {
      let a = Ent();
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
function m8e() {
  if (!Qs()) return "third_party";
  if (Et()) switch (dR()) {
    case "env":
    case "fd":
      return "host_token";
    case "store":
    case "none":
      return "claudeai_login";
  }
  if (U_()) return "auth_token_env";
  switch (P_n().source) {
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
  return xfe() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function yte() {
  return h().scope;
}
function aJ() {
  if (i.CLAUDE_CODE_REMOTE) return "ccr";
  if (Nc()) return "ccd";
  return "cc";
}
export {
  $Er,
  BEr,
  ETs,
  FEr,
  Fve,
  HBe,
  KIe,
  MMt,
  Sgo,
  Sut,
  UEr,
  Y7t,
  aJ,
  but,
  jEr,
  m8e,
  q7t,
  vTs,
  wTs,
  wgo,
  yte
};
