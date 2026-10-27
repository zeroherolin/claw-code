// shared/chunk-vxgqfz66.js — Claude Code 2.1.310 模块 chunk-vxgqfz66.js
import { v, G } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { f } from "./chunk-nyvhtfb3.js";
import { wr } from "../models/total-tokens-reminder.psq3.js";
import { Oj, kL } from "../settings/global-config-and-gates.27xj.js";
import { o, E, u, me, T } from "../vendor/zod/string-format.k395.js";
import { join as b } from "path";
var $Eo = "published-floor.json", l = 1, h = 32, a = 65536, F = f(() => u({ version: T(l), sources: me(o().min(1).max(64), u({ version: E().int().nonnegative(), issuedAt: o().max(64), recordedAt: E().int().nonnegative() })) }));
function c() {
  return b(kL(), $Eo);
}
function s() {
  return wr().publishedCatalogFloorMarks;
}
async function Fjn(e) {
  return await m(), s().get(e)?.version ?? 0;
}
async function iDt(e, r, i = Date.now()) {
  await m();
  let n = s().get(e);
  if (n !== void 0 && n.version >= r.version) return;
  s().set(e, { version: r.version, issuedAt: (r.issued_at ?? "").slice(0, 64), recordedAt: i }), await C();
}
function m() {
  let e = wr();
  return e.publishedCatalogFloorRead ??= p().then(g), e.publishedCatalogFloorRead;
}
function g(e) {
  if (e === void 0) return;
  for (let [r, i] of e) {
    let n = s().get(r);
    if (n === void 0 || i.version > n.version) s().set(r, i);
  }
}
async function p() {
  let e;
  try {
    e = await Oj().readRange(c(), 0, a + 1);
  } catch (i) {
    if (!G(i)) t(`[publishedCatalog] floor file read failed: ${v(i) ?? "unknown"}; no persisted version marks this session`);
    return;
  }
  let r = e.length > a ? void 0 : F().safeParse(ot(e.toString("utf8"), false));
  if (!r?.success) {
    t(`[publishedCatalog] floor file ${r === void 0 ? "oversized" : "invalid"}; no persisted version marks this session`);
    return;
  }
  return new Map(Object.entries(r.data.sources));
}
function C() {
  let e = wr(), r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r;
}
async function d() {
  try {
    g(await p());
    let e = [...s().entries()].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, h), r = Oj();
    await r.mkdir(kL()), await r.atomicWrite(c(), _({ version: l, sources: Object.fromEntries(e) }), 384);
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${v(e) ?? "unknown"}`);
  }
}
export {
  $Eo,
  Fjn,
  iDt
};
