// darwin/shared/unsupported-version.js — Claude Code 2.1.310（darwin）模块 chunk-nrfsjyqm.js
import { ot } from "../fs/chunk-86be9585.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "./chunk-2fe3b2b7.js";
import { Bd, M, u, B, T } from "../vendor/zod/string-format.js";
var t = 1, m = 65536, r = f(() => Bd().min(0).default(0)), p = f(() => u({ version: Bd() })), n = f(() => u({ version: T(t), generation: Bd().min(1), appliedBeforeFirstAsk: M(), outcome: B(["applied", "partial"]), filesApplied: r(), filesRefused: r(), settingsWritten: M().default(false), replacedForeign: r(), writtenAtMs: Bd().min(0) }));
function jho(o) {
  let e = n().safeParse({ ...o, version: t });
  if (!e.success) throw Error("home ready row is off-schema");
  return Buffer.from(_(e.data));
}
function i$n(o) {
  if (o.length > m) return { ok: false, reason: "oversize" };
  let e = ot(o.toString("utf8"), false), s = p().safeParse(e);
  if (s.success && s.data.version !== t) return { ok: false, reason: "unsupported_version" };
  let a = n().safeParse(e);
  if (!a.success) return { ok: false, reason: "malformed" };
  let { version: l, ...i } = a.data;
  return { ok: true, ready: i };
}
export {
  i$n,
  jho
};
