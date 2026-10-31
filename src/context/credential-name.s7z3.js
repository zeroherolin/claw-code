// context/credential-name.s7z3.js — Claude Code 2.1.310 模块 chunk-s7z3e2n6.js
import { Ve } from "../telemetry/anthropic-workspace-id.36ys.js";
import { nt } from "./not-admin-owned.ersa.js";
import { Ui } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { i } from "../shared/environment.9a41.js";
import { Due } from "../settings/global-config-and-gates.27xj.js";
import { AI } from "../settings/workflow-launch-exec.t4r2.js";
import { u1 } from "../shared/chunk-cg45s1mf.js";
import { _De, g2r } from "../shared/project-docs.pfj1.js";
import { Pa, Lf } from "./org-memory-writes-setting-changed.w8x9.js";
import { Pd, yu, oo, qa } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { bBt, cZe, T_t, B9n, Kun } from "../fs/file-upload.g3fv.js";
import { uBe } from "../shared/input-schema-not-checked.xf9s.js";
import { Ebr, Bco, vbr, jco } from "../auth/managed-agents-task-file-upload.6r37.js";
import { bfe } from "../mcp/repo-rules-read-failed.nm96.js";
import { b7 } from "../shared/egress-blocked.6n8q.js";
import { o, u, Ue, Fe, T } from "../vendor/zod/string-format.k395.js";
import { normalize as O, sep as E } from "path";
var Y = /* @__PURE__ */ new Set(["canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", bfe, ...jco]);
var Z = /* @__PURE__ */ new Set(["not_uploaded_here", ...Bco]), S = new nt(() => ({ last: Promise.resolve(), uploaded: /* @__PURE__ */ new Set() })), y = f(() => Ue({ path: o().min(1).max(uBe) })), ee = f(() => Fe([u({ ok: T(true), file_id: o(), name: o() }), u({ ok: T(false), code: o().max(64) })]));
async function fvi(e, t, n, r, s) {
  let { path: a } = y().parse(e);
  if (s === bfe) return { summary: `not uploaded: ${s}`, output: { ok: false, code: s } };
  let d = S.of(n), c = () => R(a, t, n, r, s), m = d.last.then(c, c);
  d.last = m;
  let p = await m;
  if (p.ok) d.uploaded.add(p.file_id);
  return { summary: p.ok ? "uploaded" : `not uploaded: ${p.code}`, output: p };
}
var P = f(() => Ue({ file_id: o().min(1).max(256) })), te = f(() => Fe([u({ ok: T(true) }), u({ ok: T(false), code: o().max(64) })]));
async function mvi(e, t) {
  let { file_id: n } = P().parse(e);
  if (!S.of(t).uploaded.delete(n)) return { summary: "not deleted: not_uploaded_here", output: { ok: false, code: "not_uploaded_here" } };
  let r = await vbr([n]);
  return r === void 0 ? { summary: "deleted", output: { ok: true } } : { summary: `not deleted: ${r}`, output: { ok: false, code: r } };
}
async function R(e, t, n, r, s) {
  if (t.aborted) return { ok: false, code: "canceled" };
  let a = u1() ? "policy_pending" : b7();
  if (a !== void 0) return { ok: false, code: a };
  if (!Due()) return { ok: false, code: "no_token" };
  let d = O(e), { realDirectory: c } = r;
  try {
    if (!k(d) && await cZe(d, d, { realDirectory: c }) === "credential_name") return { ok: false, code: "credential_name" };
  } catch {
    return { ok: false, code: "path_rejected" };
  }
  let m = await iRt(e, n, r, s);
  if (m === void 0) return { ok: false, code: "path_rejected" };
  let p = await cZe(d, m, { attached: k(d) && k(m), realDirectory: c });
  if (p !== void 0) return { ok: false, code: p === "credential_name" ? p : "path_rejected" };
  try {
    return await Ebr(m, void 0, t);
  } catch (g) {
    if (Ve(g)) return { ok: false, code: "canceled" };
    return l(g), { ok: false, code: "unexpected" };
  }
}
function k(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) && _(e, _De);
}
async function iRt(e, t, n, r) {
  let s;
  try {
    s = await n.localFileAt(e);
  } catch {
    return;
  }
  let a = O(e);
  return bBt(s) || h(a, s, r) || !await D(a, s, t, n) ? void 0 : s;
}
async function D(e, t, n, { realDirectory: r, home: s }) {
  if (await T_t(t, r)) return false;
  if (A(e, t)) return true;
  let a = n.project?.originalCwd;
  if (a === void 0 || a === "") return false;
  let d = await r(s);
  if (d === void 0) return false;
  return d !== a && !_(d, a) && _(t, a);
}
function h(e, t, n) {
  if (n === void 0) return false;
  if (oo(n, Lf, F(Pd(n), e, t)) || qa(n, Lf, F(yu(n), e, t))) return true;
  let r = [Ui(e), Ui(t)];
  if (r.some((s) => s.unresolved)) return true;
  return r.some((s) => s.spellings.some((a) => Pa(a, n, "read", "deny") !== null || Pa(a, n, "read", "ask") !== null));
}
function aJr(e) {
  return oo(e, Lf) !== null || qa(e, Lf) !== null;
}
function F(e, t, n) {
  return A(t, n) ? e.filter(x) : e;
}
function x({ source: e }) {
  return !AI.some((t) => t === e);
}
function A(e, t) {
  if (!i.CLAUDE_CODE_REMOTE) return false;
  let n = B9n();
  return g2r.some((r) => _(t, r)) || n !== void 0 && Kun(e, t, n);
}
function _(e, t) {
  return e.startsWith(t + E);
}
export {
  aJr,
  fvi,
  iRt,
  mvi
};
