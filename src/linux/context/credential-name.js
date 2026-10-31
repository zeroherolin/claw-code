// linux/context/credential-name.js — Claude Code 2.1.310（linux）模块 chunk-96dyabkb.js
import { Ke } from "../telemetry/anthropic-workspace-id.js";
import { nt } from "./not-admin-owned.js";
import { Ui } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { i } from "../shared/environment.js";
import { Rue } from "../settings/global-config-and-gates.js";
import { vI } from "../settings/workflow-launch-exec.js";
import { iB } from "../shared/chunk-f98598c3.js";
import { fLe, qWr } from "../shared/project-docs.js";
import { xa, Lp } from "./org-memory-writes-setting-changed.js";
import { Pd, hu, oo, Va } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { l1t, nZe, __t, w3n, xun } from "../fs/file-upload.js";
import { n1e } from "../shared/input-schema-not-checked.js";
import { oSr, hco, sSr, yco } from "../auth/managed-agents-task-file-upload.js";
import { ppe } from "../mcp/repo-rules-read-failed.js";
import { fJ } from "../shared/egress-blocked.js";
import { o, u, Ue, $e, A } from "../vendor/zod/string-format.js";
import { normalize as F, sep as E } from "path";
var Y = /* @__PURE__ */ new Set(["canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", ppe, ...yco]);
var Z = /* @__PURE__ */ new Set(["not_uploaded_here", ...hco]), O = new nt(() => ({ last: Promise.resolve(), uploaded: /* @__PURE__ */ new Set() })), y = p(() => Ue({ path: o().min(1).max(n1e) })), ee = p(() => $e([u({ ok: A(true), file_id: o(), name: o() }), u({ ok: A(false), code: o().max(64) })]));
async function Pvi(e, t, n, r, s) {
  let { path: a } = y().parse(e);
  if (s === ppe) return { summary: `not uploaded: ${s}`, output: { ok: false, code: s } };
  let d = O.of(n), c = () => R(a, t, n, r, s), m = d.last.then(c, c);
  d.last = m;
  let f = await m;
  if (f.ok) d.uploaded.add(f.file_id);
  return { summary: f.ok ? "uploaded" : `not uploaded: ${f.code}`, output: f };
}
var P = p(() => Ue({ file_id: o().min(1).max(256) })), te = p(() => $e([u({ ok: A(true) }), u({ ok: A(false), code: o().max(64) })]));
async function Ivi(e, t) {
  let { file_id: n } = P().parse(e);
  if (!O.of(t).uploaded.delete(n)) return { summary: "not deleted: not_uploaded_here", output: { ok: false, code: "not_uploaded_here" } };
  let r = await sSr([n]);
  return r === void 0 ? { summary: "deleted", output: { ok: true } } : { summary: `not deleted: ${r}`, output: { ok: false, code: r } };
}
async function R(e, t, n, r, s) {
  if (t.aborted) return { ok: false, code: "canceled" };
  let a = iB() ? "policy_pending" : fJ();
  if (a !== void 0) return { ok: false, code: a };
  if (!Rue()) return { ok: false, code: "no_token" };
  let d = F(e), { realDirectory: c } = r;
  try {
    if (!_(d) && await nZe(d, d, { realDirectory: c }) === "credential_name") return { ok: false, code: "credential_name" };
  } catch {
    return { ok: false, code: "path_rejected" };
  }
  let m = await JCt(e, n, r, s);
  if (m === void 0) return { ok: false, code: "path_rejected" };
  let f = await nZe(d, m, { attached: _(d) && _(m), realDirectory: c });
  if (f !== void 0) return { ok: false, code: f === "credential_name" ? f : "path_rejected" };
  try {
    return await oSr(m, void 0, t);
  } catch (k) {
    if (Ke(k)) return { ok: false, code: "canceled" };
    return l(k), { ok: false, code: "unexpected" };
  }
}
function _(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) && T(e, fLe);
}
async function JCt(e, t, n, r) {
  let s;
  try {
    s = await n.localFileAt(e);
  } catch {
    return;
  }
  let a = F(e);
  return l1t(s) || h(a, s, r) || !await D(a, s, t, n) ? void 0 : s;
}
async function D(e, t, n, { realDirectory: r, home: s }) {
  if (await __t(t, r)) return false;
  if (S(e, t)) return true;
  let a = n.project?.originalCwd;
  if (a === void 0 || a === "") return false;
  let d = await r(s);
  if (d === void 0) return false;
  return d !== a && !T(d, a) && T(t, a);
}
function h(e, t, n) {
  if (n === void 0) return false;
  if (oo(n, Lp, g(Pd(n), e, t)) || Va(n, Lp, g(hu(n), e, t))) return true;
  let r = [Ui(e), Ui(t)];
  if (r.some((s) => s.unresolved)) return true;
  return r.some((s) => s.spellings.some((a) => xa(a, n, "read", "deny") !== null || xa(a, n, "read", "ask") !== null));
}
function $Jr(e) {
  return oo(e, Lp) !== null || Va(e, Lp) !== null;
}
function g(e, t, n) {
  return S(t, n) ? e.filter(x) : e;
}
function x({ source: e }) {
  return !vI.some((t) => t === e);
}
function S(e, t) {
  if (!i.CLAUDE_CODE_REMOTE) return false;
  let n = w3n();
  return qWr.some((r) => T(t, r)) || n !== void 0 && xun(e, t, n);
}
function T(e, t) {
  return e.startsWith(t + E);
}
export {
  $Jr,
  Ivi,
  JCt,
  Pvi
};
