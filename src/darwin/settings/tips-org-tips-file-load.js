// darwin/settings/tips-org-tips-file-load.js — Claude Code 2.1.310（darwin）模块 chunk-0bkxz5k7.js
import { N, v, G } from "../telemetry/anthropic-workspace-id.js";
import { qM } from "../fs/node-modules.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { ee, i$e, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { Qt, kp } from "./workflow-launch-exec.js";
import { WXo, RS } from "../shell/invalid-type.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { No } from "../fs/chunk-86be9585.js";
import { fe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { oe, C, u, Fe } from "../vendor/zod/string-format.js";
import { constants as y } from "fs";
import { open as U, realpath as j } from "fs/promises";
import { isAbsolute as k } from "path";
var Zdo = "org-tip:", zSr = "custom-tip-", x = 500, B = 200, h = 262144, R = "Tip", H = /^[A-Za-z0-9._-]{1,64}$/, X = 40, P = ["policySettings", "flagSettings", "userSettings"], K = [...kp], Y = "org-tip:file:", J = /* @__PURE__ */ new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]), Z = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function L(e) {
  return i$e(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(Z, "").replace(/ {2,}/g, " ").trim();
}
function q(e) {
  if (e === void 0) return R;
  let i = re(L(e), X);
  return i === "" ? R : i;
}
var Q = f(() => Fe([C(oe()), u({ tips: C(oe()) }).transform((e) => e.tips)]));
async function V(e) {
  try {
    let i = O() === "windows" ? 0 : y.O_NOFOLLOW | y.O_NONBLOCK, r = await U(await j(e), y.O_RDONLY | i), n;
    try {
      let d = await r.stat();
      if (!d.isFile()) return m("tips_org_tips_file_load", "not_regular_file"), t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, { level: "warn" }), { entries: [], transient: false };
      if (d.size > h) return m("tips_org_tips_file_load", "too_large"), t(`spinnerTipsOverride.tipsFile ${e} is larger than ${h} bytes; ignoring it`, { level: "warn" }), { entries: [], transient: false };
      let c = Buffer.alloc(h + 1), { bytesRead: _ } = await r.read(c, 0, c.length, 0);
      if (_ > h) return m("tips_org_tips_file_load", "too_large"), { entries: [], transient: false };
      n = No(c.toString("utf8", 0, _));
    } finally {
      await r.close();
    }
    let a = Q().safeParse(ee(n)), l = a.success ? WXo().parse(a.data) : void 0;
    if (l === void 0) return m("tips_org_tips_file_load", "wrong_shape"), t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, { level: "warn" }), { entries: [], transient: false };
    return g("tips_org_tips_file_load"), { entries: l, transient: false };
  } catch (i) {
    let r = v(i), n = G(i) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : i instanceof SyntaxError ? "parse_failed" : "read_failed";
    return m("tips_org_tips_file_load", n), t(G(i) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${N(i).message}`, { level: "warn" }), { entries: [], transient: r !== void 0 && J.has(r) };
  }
}
class A {
  #e = /* @__PURE__ */ new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = V(e).then((n) => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return this.#e.set(e, r), r;
  }
}
var te = new W(() => new A());
function ie() {
  if (RS()?.spinnerTipsOverride?.tipsFile) return t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", { level: "warn" }), true;
  return false;
}
function ne(e) {
  if (!e) return;
  if (!k(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, { level: "warn" });
    return;
  }
  if (qM(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", { level: "warn" });
    return;
  }
  try {
    let i = ut(e);
    return qM(i) ? void 0 : i;
  } catch (i) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${N(i).message}`, { level: "warn" });
    return;
  }
}
function b(e) {
  let i = [];
  for (let r of e) {
    if (!Qt(r)) continue;
    let n = fe(r)?.spinnerTipsOverride;
    if (n) i.push({ source: r, override: n });
  }
  return i;
}
function z(e, i) {
  return e.find((r) => r.override[i] !== void 0)?.override[i];
}
function wIe() {
  let e = b(P);
  if (z(e, "excludeDefault") !== true) return false;
  return e.some((i) => !!i.override.tipsFile) || e.some((i) => (i.override.tips?.length ?? 0) > 0);
}
async function FHn(e) {
  let i = b(P), r = b(K);
  if (i.length === 0 && r.length === 0) return { tips: [], trustedCount: 0 };
  let n = q(z(i, "label")), a = i.find((s) => !!s.override.tipsFile), l = a?.source, d = ne(l === "policySettings" && ie() ? void 0 : a?.override.tipsFile);
  for (let { source: s, override: o } of r) if (o.tipsFile || o.label !== void 0) t(`spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`, { level: "warn" });
  let c = d ? (await te.of(e).read(d)).entries : [], _ = /* @__PURE__ */ new Set(), S = [], E = (s, o, p, T, M) => {
    if (S.length >= B) return;
    let F = L(o);
    if (F === "") {
      t(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, { level: "warn" });
      return;
    }
    if (F.length > x) {
      t(`spinnerTipsOverride: tip "${s}" is longer than ${x} characters; dropped`, { level: "warn" });
      return;
    }
    if (_.has(s)) {
      t(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, { level: "warn" });
      return;
    }
    _.add(s), S.push({ id: s, label: M, content: async () => F, cooldownSessions: p, priority: T, isRelevant: async () => true, providerAgnostic: true });
  }, I = 0;
  for (let { source: s, override: o } of i) {
    for (let p of o.tips ?? []) w(p, `${zSr}${I++}`, n, E);
    if (s === l) c.forEach((p, T) => w(p, `${Y}${T}`, n, E));
  }
  let D = S.length;
  for (let { source: s, override: o } of r) for (let p of o.tips ?? []) {
    let T = `${zSr}${I++}`;
    if (typeof p === "string") w(p, T, R, E);
    else t(`spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`, { level: "warn" });
  }
  return { tips: S, trustedCount: D };
}
function w(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return;
  }
  if (typeof e.text !== "string") {
    t('spinnerTipsOverride: tip object without a "text" string; dropped', { level: "warn" });
    return;
  }
  if (typeof e.id !== "string" || !H.test(e.id)) {
    t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', { level: "warn" });
    return;
  }
  let a = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1e3) : 0, l = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${Zdo}${e.id}`, e.text, a, l, r);
}
export {
  FHn,
  Zdo,
  wIe,
  zSr
};
