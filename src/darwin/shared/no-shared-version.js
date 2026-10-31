// darwin/shared/no-shared-version.js — Claude Code 2.1.310（darwin）模块 chunk-qxjybm0y.js
import { L } from "../context/not-admin-owned.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "./chunk-2fe3b2b7.js";
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { ra } from "../settings/global-config-and-gates.js";
import { at, qt, Be } from "../mcp/allowed-warning.js";
import { qe } from "./allow-large.js";
import { mn } from "./chunk-62f8d501.js";
import { o, E, C, Ue } from "../vendor/zod/string-format.js";
import { createHash as u } from "crypto";
var Jit = "anthropic/returnToolOutput", iur = [2], bas = 4194304;
function IJr() {
  return true;
}
function mAn(e) {
  return mn(e) && e.tool_host_interface !== void 0;
}
var d = 64;
var l = 1024, a = 1024, p = 65536, i = f(() => C(E().int()).max(d)), c = f(() => C(o().min(1).max(a)).max(l).refine((e) => e.reduce((n, t) => n + t.length, 0) <= p)), y = f(() => Ue({ versions: i(), deny_rules_digest: o().regex(/^[0-9a-f]{64}$/) }));
function was(e) {
  let n = s(e)?.[Jit];
  if (n === void 0) return { kind: "absent" };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return { kind: "malformed" };
  if (m(t.data).length === 0) return { kind: "no_shared_version", versions: t.data };
  let r = y().safeParse(n);
  return r.success ? { kind: "requested", denyRulesDigest: r.data.deny_rules_digest } : { kind: "malformed" };
}
function m(e) {
  return iur.filter((n) => e.includes(n));
}
var O = { [Be]: [qe, at], [at]: [qe], [qt]: [at, qe], [ra]: [at, qe] }, T = L([Be, ...Object.values(O).flat()]);
function OJr(e) {
  return L(e.map(Bn).filter(({ toolName: n, ruleContent: t }) => t !== void 0 && T.includes(n)).map(dn)).toSorted();
}
function MJr(e) {
  return c().safeParse(e).success;
}
function Eas(e) {
  return u("sha256").update(_(e)).digest("hex");
}
function vas({ tools: e, denyRules: n }) {
  return { versions: [...iur], tools: [...e], deny_rules: OJr(n) };
}
function s(e) {
  return mn(e) ? e : void 0;
}
export {
  Eas,
  IJr,
  Jit,
  MJr,
  OJr,
  bas,
  iur,
  mAn,
  vas,
  was
};
