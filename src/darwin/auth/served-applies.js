// darwin/auth/served-applies.js — Claude Code 2.1.310（darwin）模块 chunk-bnkraxzx.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { v, G } from "../telemetry/anthropic-workspace-id.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { ot } from "../fs/chunk-86be9585.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { wr, Te, $n, Xx } from "../models/total-tokens-reminder.js";
import { i } from "../shared/environment.js";
import { Ctr, Ttr, a_n, wzt, Ptr, T4, vzt, $Ae, lnt, bti, dnt, Oj, kL, urr } from "../settings/global-config-and-gates.js";
import { on } from "./env-quad.js";
import { GEe, UMt, rkr, kte } from "./api-key.js";
import { Djn, NEo } from "../fs/compiled-roots.js";
import { o, E, oe, u, B, T } from "../vendor/zod/string-format.js";
import { join as R } from "path";
var C = 2, h = 36e5, m = 0.1, O = ["hosted", "custom_url", "file"], D = f(() => u({ version: T(C), fetchedAt: E(), staleAt: E(), etag: o().refine(T4).optional(), source: B(O), documentBytes: o(), sidecar: oe(), rootId: o(), document: dnt() }));
function TMn(e) {
  return R(kL(), `published-${e}.json`);
}
function s() {
  return wr().publishedCatalogByKey;
}
var g = $Ae * 3 + lnt + 4096;
async function xyr(e) {
  let a = s().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = TMn(e), n;
  try {
    n = await Oj().readRange(r, 0, g + 1);
  } catch (d) {
    if (!G(d)) t(`[publishedCatalog] cache read failed: ${v(d) ?? "unknown"}`);
    s().set(e, null);
    return;
  }
  let l = n.length > g ? void 0 : D().safeParse(ot(n.toString("utf8"), false));
  if (!l?.success) {
    t(`[publishedCatalog] cache file ${l === void 0 ? "oversized" : "invalid"}, discarding`), await pio(e);
    return;
  }
  return await Pyr(e, l.data, { verified: false }), l.data;
}
async function pio(e) {
  s().set(e, null);
  try {
    await Oj().delete(TMn(e));
  } catch {
  }
}
function Qgs(e) {
  s().set(e, null);
}
async function fio(e, a) {
  await Pyr(e, a, { verified: true });
  try {
    let r = Oj();
    await r.mkdir(kL()), await r.atomicWrite(TMn(e), _(a), 384);
  } catch (r) {
    t(`[publishedCatalog] cache write failed: ${v(r) ?? "unknown"}`);
  }
}
async function Pyr(e, a, { verified: r }) {
  if (s().set(e, a), r && a.rootId !== Djn) for (let n of S(a.document)) Ttr(n);
  await mio(a.document);
}
async function mio(e) {
  let a = S(e);
  for (let r of a) a_n(r);
  await urr(new Set(a.flatMap((r) => [...Ctr(r)])));
}
function S(e) {
  return Ptr.flatMap((a) => {
    let r = e.surfaces[a], n = r === void 0 ? null : vzt(r, a);
    return n === null ? [] : [n];
  });
}
function Zgs({ document: e, documentBytes: a, sidecar: r, etag: n, source: l, rootId: d, now: p = Date.now(), random: x = Math.random() }) {
  return { version: C, fetchedAt: p, staleAt: b(p, x), ...n !== void 0 && { etag: n }, source: l, documentBytes: Buffer.from(a).toString("base64"), sidecar: r, rootId: d, document: e };
}
function ehs(e, a = Date.now(), r = Math.random()) {
  return { ...e, fetchedAt: a, staleAt: b(a, r) };
}
function b(e, a) {
  let r = 1 + m * (2 * a - 1);
  return e + Math.round(h * r);
}
function gio(e, a = Date.now()) {
  let r = bti(e.expires_at);
  return r !== void 0 && a >= r;
}
function J5e(e, a = Date.now()) {
  let r = e.fetchedAt + h * (1 + m);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || gio(e.document, a);
}
var w = [];
function c() {
  return w;
}
function P(e) {
  return e === "bedrock" || e === "vertex" || e === "foundry" || e === "mantle";
}
function AMn() {
  let e = UMt();
  if (e === "essential_traffic" && NEo()) {
    let a = UMt({ skipEssentialTrafficGate: true });
    return y(a);
  }
  return y(e);
}
function Iyr(e) {
  return e.source === "fallback" && e.credential !== void 0 && A(e.credential);
}
function k(e) {
  return e !== null && A(GEe(e));
}
function A(e) {
  switch (e) {
    case "oauth":
      return false;
    case "api_key":
    case "profile":
    case "federation":
      return true;
  }
}
function y(e) {
  switch (e) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return e;
    case "not_first_party":
      return L();
    case "not_claude_ai_auth":
    case "api_key_helper":
      return on("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (k(kte())) return wzt()?.source === "served" ? "served_applies" : null;
      return "served_applies";
  }
}
function L() {
  let e = Te();
  if (e === "gateway") return "cloud_gateway";
  let a = Xx(e), r = !a && $n(), n = a ? "platform_flag_off" : r && !NEo() ? "gateway_flag_off" : null;
  if (n !== null && rkr("published") === "off") return n;
  if ((a || r) && !I()) return "release_off";
  if (P(e) && !M(e)) return "release_off";
  return null;
}
function I() {
  return c().length > 0;
}
function M(e) {
  return c().includes(e) || Ne(i.CLAUDE_CODE_MODEL_CATALOG);
}
function nXt() {
  return AMn() === null;
}
function RMn() {
  return $n() || Xx() ? rkr("published") : "primary";
}
function hio() {
  if (!nXt()) return "off";
  return RMn();
}
export {
  AMn,
  Iyr,
  J5e,
  Pyr,
  Qgs,
  RMn,
  TMn,
  Zgs,
  ehs,
  fio,
  gio,
  hio,
  mio,
  nXt,
  pio,
  xyr
};
