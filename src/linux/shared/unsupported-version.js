// linux/shared/unsupported-version.js — Claude Code 2.1.310（linux）模块 chunk-ckkksczh.js
import { ot } from "../fs/chunk-86be9585.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { p } from "./chunk-2fe3b2b7.js";
import { Bd, M, u, B, A } from "../vendor/zod/string-format.js";
var t = 1, f = 65536, r = p(() => Bd().min(0).default(0)), m = p(() => u({ version: Bd() })), n = p(() => u({ version: A(t), generation: Bd().min(1), appliedBeforeFirstAsk: M(), outcome: B(["applied", "partial"]), filesApplied: r(), filesRefused: r(), settingsWritten: M().default(false), replacedForeign: r(), writtenAtMs: Bd().min(0) }));
function lho(o) {
  let e = n().safeParse({ ...o, version: t });
  if (!e.success) throw Error("home ready row is off-schema");
  return Buffer.from(_(e.data));
}
function B$n(o) {
  if (o.length > f) return { ok: false, reason: "oversize" };
  let e = ot(o.toString("utf8"), false), s = m().safeParse(e);
  if (s.success && s.data.version !== t) return { ok: false, reason: "unsupported_version" };
  let a = n().safeParse(e);
  if (!a.success) return { ok: false, reason: "malformed" };
  let { version: l, ...i } = a.data;
  return { ok: true, ready: i };
}
export {
  B$n,
  lho
};
