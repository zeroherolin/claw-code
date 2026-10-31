// linux/telemetry/home-seed-record-unwritten.js — Claude Code 2.1.310（linux）模块 chunk-rn3z3xww.js
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { uI, ue } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "./chunk-9097a12b.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { o, v, T, u, A } from "../vendor/zod/string-format.js";
import { createHash as l } from "crypto";
var f = 64, c = p(() => u({ generation: v().int().min(1), etag: o().optional(), allow: T(o()), at: v(), tried: A(true).optional() }));
function dho(n) {
  return l("sha256").update(n, "utf8").digest("hex").slice(0, 32);
}
function m(n) {
  return rr(n);
}
function lZt(n) {
  let e = ue().remoteHomeSettingsSent?.[m(n)];
  if (e === void 0) return;
  let r = c().safeParse(e);
  return r.success ? r.data : void 0;
}
function aAs(n) {
  let e = lZt(n);
  return e !== void 0 && e.tried !== true;
}
async function ZEr(n, e, r) {
  let i = m(n);
  if (!await uI((d) => ({ ...d, remoteHomeSettingsSent: w({ ...d.remoteHomeSettingsSent, [i]: S(d.remoteHomeSettingsSent?.[i], e) }) }), r)) a("tengu_home_seed_record_unwritten", {}), t("home settings: the record of what was sent could not be written", { level: "warn" });
}
function S(n, e) {
  let r = c().safeParse(n).data, { tried: i, ...s } = e, d = !e.etag && (r ? r.tried : e.tried);
  return { ...s, ...d && { tried: true }, generation: Math.max(e.generation, r?.generation ?? 0), allow: e.allow.filter((g) => e.etag || !r || r.allow.includes(g)) };
}
function w(n) {
  let e = Object.entries(n).flatMap(([r, i]) => {
    let s = c().safeParse(i);
    return s.success && Number.isFinite(s.data.at) ? [[r, s.data]] : [];
  });
  return Object.fromEntries(e.toSorted(([, r], [, i]) => i.at - r.at).slice(0, f));
}
export {
  ZEr,
  aAs,
  dho,
  lZt
};
