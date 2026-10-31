// linux/shared/no-shared-version.js — Claude Code 2.1.310（linux）模块 chunk-vnvpyk5w.js
import { L } from "../context/not-admin-owned.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { p } from "./chunk-2fe3b2b7.js";
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { ra } from "../settings/global-config-and-gates.js";
import { at, qt, Be } from "../mcp/allowed-warning.js";
import { qe } from "./allow-large.js";
import { mn } from "./chunk-62f8d501.js";
import { o, v, T, Ue } from "../vendor/zod/string-format.js";
import { createHash as u } from "crypto";
var zit = "anthropic/returnToolOutput", zcr = [2], Gis = 4194304;
function pQr() {
  return true;
}
function QAn(e) {
  return mn(e) && e.tool_host_interface !== void 0;
}
var d = 64;
var l = 1024, a = 1024, c = 65536, i = p(() => T(v().int()).max(d)), y = p(() => T(o().min(1).max(a)).max(l).refine((e) => e.reduce((n, t) => n + t.length, 0) <= c)), f = p(() => Ue({ versions: i(), deny_rules_digest: o().regex(/^[0-9a-f]{64}$/) }));
function zis(e) {
  let n = s(e)?.[zit];
  if (n === void 0) return { kind: "absent" };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return { kind: "malformed" };
  if (m(t.data).length === 0) return { kind: "no_shared_version", versions: t.data };
  let r = f().safeParse(n);
  return r.success ? { kind: "requested", denyRulesDigest: r.data.deny_rules_digest } : { kind: "malformed" };
}
function m(e) {
  return zcr.filter((n) => e.includes(n));
}
var O = { [Be]: [qe, at], [at]: [qe], [qt]: [at, qe], [ra]: [at, qe] }, g = L([Be, ...Object.values(O).flat()]);
function mQr(e) {
  return L(e.map(Bn).filter(({ toolName: n, ruleContent: t }) => t !== void 0 && g.includes(n)).map(dn)).toSorted();
}
function gQr(e) {
  return y().safeParse(e).success;
}
function Kis(e) {
  return u("sha256").update(_(e)).digest("hex");
}
function Vis({ tools: e, denyRules: n }) {
  return { versions: [...zcr], tools: [...e], deny_rules: mQr(n) };
}
function s(e) {
  return mn(e) ? e : void 0;
}
export {
  Gis,
  Kis,
  QAn,
  Vis,
  gQr,
  mQr,
  pQr,
  zcr,
  zis,
  zit
};
