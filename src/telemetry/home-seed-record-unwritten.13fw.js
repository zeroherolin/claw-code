// telemetry/home-seed-record-unwritten.13fw.js — Claude Code 2.1.310 模块 chunk-13fw7xya.js
import { rr } from "../artifacts/chunk-m8t7qekn.js";
import { mI, ue } from "../settings/global-config-and-gates.27xj.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { a } from "./chunk-wq923bwc.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { o, E, C, u, T } from "../vendor/zod/string-format.k395.js";
import { createHash as l } from "crypto";
var S = 64, c = f(() => u({ generation: E().int().min(1), etag: o().optional(), allow: C(o()), at: E(), tried: T(true).optional() }));
function Who(n) {
  return l("sha256").update(n, "utf8").digest("hex").slice(0, 32);
}
function m(n) {
  return rr(n);
}
function bZt(n) {
  let e = ue().remoteHomeSettingsSent?.[m(n)];
  if (e === void 0) return;
  let r = c().safeParse(e);
  return r.success ? r.data : void 0;
}
function UTs(n) {
  let e = bZt(n);
  return e !== void 0 && e.tried !== true;
}
async function gkr(n, e, r) {
  let i = m(n);
  if (!await mI((d) => ({ ...d, remoteHomeSettingsSent: w({ ...d.remoteHomeSettingsSent, [i]: p(d.remoteHomeSettingsSent?.[i], e) }) }), r)) a("tengu_home_seed_record_unwritten", {}), t("home settings: the record of what was sent could not be written", { level: "warn" });
}
function p(n, e) {
  let r = c().safeParse(n).data, { tried: i, ...s } = e, d = !e.etag && (r ? r.tried : e.tried);
  return { ...s, ...d && { tried: true }, generation: Math.max(e.generation, r?.generation ?? 0), allow: e.allow.filter((g) => e.etag || !r || r.allow.includes(g)) };
}
function w(n) {
  let e = Object.entries(n).flatMap(([r, i]) => {
    let s = c().safeParse(i);
    return s.success && Number.isFinite(s.data.at) ? [[r, s.data]] : [];
  });
  return Object.fromEntries(e.toSorted(([, r], [, i]) => i.at - r.at).slice(0, S));
}
export {
  UTs,
  Who,
  bZt,
  gkr
};
