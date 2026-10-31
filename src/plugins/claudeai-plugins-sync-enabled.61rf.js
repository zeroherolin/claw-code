// plugins/claudeai-plugins-sync-enabled.61rf.js — Claude Code 2.1.310 模块 chunk-61rf7zjj.js
import { c } from "../agents/third-party.ydpb.js";
import { d, v, Cie, ui } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X, Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { cf } from "../models/claude-3-5-sonnet.21mz.js";
import { ZTt } from "../auth/oauth-2025-04-20.ke15.js";
import { nt, U, es, yC, mie, gie, sTn, Ree, aTn, dTn, Mos, Hos, RW, Iee, Pn } from "../context/not-admin-owned.ersa.js";
import { i } from "../shared/environment.9a41.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { St, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Te, $n } from "../models/total-tokens-reminder.psq3.js";
import { rxe, ni, Ks } from "../shell/invalid-type.qnva.js";
import { u3t } from "../remote/local-agent.we9a.js";
import { Ud, _K } from "./skills-dir.cemw.js";
import { rr } from "../artifacts/chunk-m8t7qekn.js";
import { Ekn, Tst, Y } from "../shared/async-hooks.923e.js";
import { Qt } from "../settings/workflow-launch-exec.t4r2.js";
import { kS, ln, $h, fe, NYo, JRe, fpe, tk, yse, WNe, Vsr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { ua, Ln, pa, Wt, k } from "../settings/global-config-and-gates.27xj.js";
import { mb, ER } from "../shared/chunk-cg45s1mf.js";
import { Xjr, vce, Uet, yf, sj, sL, u8s } from "./entry-refused.bp7z.js";
import { XCe } from "./plugin-command-source-refresh.bf5t.js";
import { mr } from "../workflows/chunk-0c6r1zf7.js";
import { Ec, JCe } from "../shared/aarch64-unknown-linux-musl.2d37.js";
import { Ra } from "../shared/chunk-r0nkfxqh.js";
import { iG, zet } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { ge, zo, dr, Ct } from "../vendor/zod/invalid-return-type.ezsz.js";
import { D } from "../shared/chunk-6rnejvk7.js";
import { o, E, M, oe, C, u, B, T } from "../vendor/zod/string-format.k395.js";
import { od } from "../shared/sk-ant-sid.0hme.js";
var r_ = 1e6;
async function Ne(e) {
  let n = (r, p) => (t(`[plugins-scope] ${r}: ${p}`), r);
  if (!mb("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!$n()) return n("send", "not a first-party provider session");
  if (St()) return n("send", "essential traffic only");
  if (od()) return n("send", "CCR session token");
  try {
    await pa({ credentials: e });
  } catch (r) {
    t(`[plugins-scope] pre-check token freshen failed: ${d(r)}`);
  }
  let s = Ln();
  if (!s?.accessToken) return n("send", "no claude.ai token");
  if (s.scopes?.includes(ZTt)) return n("send", "token carries user:plugins");
  if (!s.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (s.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}
var Ke = 1e4;
async function pHe(e, n, s = Ke) {
  if (e?.aborted) return "send";
  let r = Ne(n).catch((y) => (t(`[plugins-scope] unexpected gate error: ${d(y)}`), "send")), p;
  if (!e) p = await Pe(r, s);
  else {
    let y, S = new Promise((h) => {
      y = () => h(void 0), e.addEventListener("abort", y, { once: true });
    });
    try {
      p = await Pe(Promise.race([r, S]), s);
    } finally {
      e.removeEventListener("abort", y);
    }
  }
  return p ?? "send";
}
import { createWriteStream as tn } from "fs";
import { open as on, rm as ke, writeFile as sn } from "fs/promises";
import { Transform as rn } from "stream";
import { pipeline as an } from "stream/promises";
function b$r(e) {
  let n = (r, p) => {
    let y = kS(r, p);
    return y.settings === null && WNe(y.errors).length > 0;
  }, s = ["userSettings", "localSettings", "flagSettings"].some((r) => {
    let p = ln(r);
    if (p === void 0) return false;
    switch (r) {
      case "flagSettings":
        return n(p, yC() ?? mie());
      case "localSettings": {
        let y = $h();
        return n(p) || y !== void 0 && y !== p && n(y);
      }
      case "userSettings":
        return n(p);
    }
  });
  return ze(e) || yse().length > 0 && tk() !== "helper" || s || NYo(e.settingKey) || gie() && JRe() || ER(e.policyKey) === "unregistered";
}
function w$r(e) {
  if (!Vsr(e.settingKey)) return false;
  if (!e.isTierInPlay()) return false;
  if (Te() !== "firstParty") return false;
  if (i.ANTHROPIC_UNIX_SOCKET) return false;
  if (Pn()) return false;
  if (ua().source !== "claude.ai") return false;
  if (St()) return false;
  if (!mb(e.policyKey)) return false;
  return K(e);
}
function GQe() {
  return ua().source === "claude.ai" && !Pn();
}
function K(e) {
  return k(e.flagName, false) === true;
}
function E$r(e) {
  return !zet() && F5n(e);
}
function F5n(e) {
  let n = ER(e.policyKey);
  return n === "cache_miss" || n === "route_missing";
}
function ze(e) {
  let n = ER(e.policyKey);
  return !Vsr(e.settingKey) || n === "org_denied" || n === "latched";
}
function v$r(e) {
  let n = [...fpe(), fe("userSettings")], s = ER(e.policyKey);
  return n.some((r) => r?.[e.settingKey] === false) || s === "org_denied" || s === "latched";
}
import { join as Ve, resolve as Ye, sep as I } from "path";
import { sep as $e } from "path";
function D5n(e, n) {
  if (e.type !== n.type) return false;
  let s = (r, p) => (r.if ?? "") === (p.if ?? "");
  switch (e.type) {
    case "command": {
      let r = iG();
      return n.type === "command" && e.command === n.command && _(e.args ?? null) === _(n.args ?? null) && (e.shell ?? r) === (n.shell ?? r) && s(e, n);
    }
    case "prompt":
      return n.type === "prompt" && e.prompt === n.prompt && s(e, n);
    case "agent":
      return n.type === "agent" && e.prompt === n.prompt && s(e, n);
    case "http":
      return n.type === "http" && e.url === n.url && s(e, n);
    case "mcp_tool":
      return n.type === "mcp_tool" && e.server === n.server && e.tool === n.tool && _(e.input ?? {}) === _(n.input ?? {}) && s(e, n);
    case "script":
      return n.type === "script" && (e.script ?? null) === (n.script ?? null) && (e.file ?? null) === (n.file ?? null) && s(e, n);
    case "function":
      return false;
  }
}
function Ue(e) {
  return e.map((n) => ({ matcher: n.matcher, skillRoot: n.skillRoot, ...n.personal === true && { personal: true }, ...n.checkout === true && { checkout: true }, hooks: n.hooks.map((s) => s.hook).filter((s) => s.type !== "function") }));
}
function Ge(e) {
  return e.map((n) => ({ matcher: n.matcher, hooks: n.hooks.map((s) => s.hook).filter((s) => s.type === "function") })).filter((n) => n.hooks.length > 0);
}
class ie {
  sessions = /* @__PURE__ */ new Map();
  draws = /* @__PURE__ */ new Map();
  skillDraws(e) {
    let n = this.draws.get(e) ?? /* @__PURE__ */ new Map();
    return this.draws.set(e, n), n;
  }
  add(e, n, s, r, p) {
    this.addEntry(e, n, s, r, p?.onHookSuccess, p?.skillRoot, p?.personal === true, p?.checkout === true);
  }
  addFunctionHook(e, n, s, r, p, y) {
    let S = y?.id || `function-hook-${Date.now()}-${Math.random()}`, h = { type: "function", id: S, timeout: y?.timeout || 5e3, callback: r, errorMessage: p };
    return this.addEntry(e, n, s, h, void 0, void 0, false, false), S;
  }
  addEntry(e, n, s, r, p, y, S, h) {
    let w = this.sessions.get(e) ?? { hooks: {} }, P = w.hooks[n] || [], R = P.findIndex((H) => H.matcher === s && H.skillRoot === y && H.personal === true === S && H.checkout === true === h), x;
    if (R >= 0) {
      x = [...P];
      let H = x[R], F = H.hooks.findIndex((A) => r.type === "function" ? Boolean(r.id) && A.hook.type === "function" && A.hook.id === r.id : D5n(A.hook, r)), O = F >= 0 ? H.hooks.with(F, { ...H.hooks[F], hook: r }) : [...H.hooks, { hook: r, onHookSuccess: p }];
      x[R] = { ...H, hooks: O };
    } else x = [...P, { matcher: s, skillRoot: y, ...S && { personal: true }, ...h && { checkout: true }, hooks: [{ hook: r, onHookSuccess: p }] }];
    this.sessions.set(e, { hooks: { ...w.hooks, [n]: x } }), We(this.sessions), Iee(), t(`Added session hook for event ${n} in session ${e}`);
  }
  remove(e, n, s, r) {
    let p = this.sessions.get(e);
    if (p) {
      let S = (p.hooks[n] || []).map((w) => {
        if (r !== void 0 && w.skillRoot !== r.skillRoot) return w;
        let P = w.hooks.filter((R) => !D5n(R.hook, s));
        return P.length > 0 ? { ...w, hooks: P } : null;
      }).filter((w) => w !== null), h = S.length > 0 ? { ...p.hooks, [n]: S } : { ...p.hooks };
      if (S.length === 0) delete h[n];
      this.sessions.set(e, { ...p, hooks: h }), Iee();
    }
    t(`Removed session hook for event ${n} in session ${e}`);
  }
  clear(e) {
    this.sessions.delete(e), this.draws.delete(e), Iee(), t(`Cleared all session hooks for session ${e}`);
  }
  get(e, n) {
    let s = /* @__PURE__ */ new Map(), r = this.sessions.get(e);
    if (!r) return s;
    for (let p of n ? [n] : Ud) {
      let y = r.hooks[p];
      if (y) s.set(p, Ue(y));
    }
    return s;
  }
  getFunctionHooks(e, n) {
    let s = /* @__PURE__ */ new Map(), r = this.sessions.get(e);
    if (!r) return s;
    for (let p of n ? [n] : Ud) {
      let y = r.hooks[p];
      if (y) {
        let S = Ge(y);
        if (S.length > 0) s.set(p, S);
      }
    }
    return s;
  }
  getEntry(e, n, s, r, p) {
    let y = this.sessions.get(e)?.hooks[n];
    if (!y) return;
    for (let S of y) if ((S.matcher === s || s === "") && S.skillRoot === p.skillRoot) {
      let h = S.hooks.find((w) => D5n(w.hook, r));
      if (h) return h;
    }
    return;
  }
  has(e, n) {
    return this.sessions.get(e)?.hooks[n] !== void 0;
  }
}
var Be = new W(() => /* @__PURE__ */ new Set());
function V() {
  return es(Be);
}
function We(e) {
  Ekn(V(), e);
}
function L5n() {
  let e = [];
  for (let n of Tst(V())) for (let s of n.values()) for (let r of Ud) for (let p of s.hooks[r] ?? []) for (let { hook: y } of p.hooks) if (y.type !== "function") e.push({ event: r, hook: y, skillRoot: p.skillRoot });
  return e;
}
function ae(e) {
  if (e.size === 0) return 0;
  let n = 0;
  for (let s of Tst(V())) for (let [r, p] of s) {
    let y = {}, S = n;
    for (let h of Ud) {
      let w = [];
      for (let P of p.hooks[h] ?? []) if (P.skillRoot !== void 0 && e.has(P.skillRoot)) n += P.hooks.length;
      else w.push(P);
      if (w.length > 0) y[h] = w;
    }
    if (n > S) s.set(r, { ...p, hooks: y });
  }
  if (n > 0) Iee();
  return n;
}
function Ude() {
  return new ie();
}
var je = { sync_off: (e) => `${e} sync is off (a setting or the organization's policy).`, account_change: () => "A sign-out, or a sign-in not verified as the same account.", skill_gone: () => "Those skills are gone from this account's list or from the disk." };
function N5n(e) {
  let n = e + $e, s = /* @__PURE__ */ new Set();
  for (let { skillRoot: r } of L5n()) if (r?.startsWith(n)) s.add(r);
  return s;
}
function jcn(e, n, s) {
  let r = ae(n);
  if (r === 0) return;
  t(`Hooks of ${e.hooksOf} removed: ${r}. ${je[s](e.sync)}`), Y("info", e.event, { count: r, reason: s });
}
var le = { sync: "Plugins", hooksOf: "synced plugins' skills", event: "plugins_sync_skill_hooks_removed" }, ue = new W(() => /* @__PURE__ */ new Set());
function ce() {
  try {
    let e = cf();
    return e === null ? void 0 : Ye(Ve(e, sj));
  } catch (e) {
    t(`The synced plugins' folder could not be made absolute (${v(e) ?? d(e)})`, { level: "error" });
    return;
  }
}
function qVs() {
  let e = ce();
  if (e !== void 0) es(ue).add(e);
}
function Z() {
  let e = new Set(es(ue)), n = ce();
  if (n !== void 0) e.add(n);
  return e;
}
function zcn(e) {
  return e !== void 0 && Ks(e) === ni;
}
function gNo(e, n) {
  if (!zcn(e) || n === void 0) return [];
  return [...Z()].filter((s) => n.startsWith(s + I));
}
async function hNo() {
  try {
    return await sL() ?? u8s();
  } catch (e) {
    return l(e), null;
  }
}
function Vcn(e, n) {
  let [s = ""] = n.slice(e.length + 1).split(I);
  return yf(Uet(s));
}
function YVs(e, n, s) {
  try {
    let r = sTn(), p = n.map((S) => S + I + e).find((S) => s.startsWith(S + I));
    if (r === null || r.bucket !== e || p === void 0) return;
    let y = Vcn(p, s);
    return Array.from(r.dirsById.values()).some((S) => S.has(y)) ? void 0 : "not_listed";
  } catch (r) {
    return Y("warn", "plugins_sync_last_list_unreadable"), l(r), "list_unreadable";
  }
}
function XVs(e, n, s) {
  if (e === null) return "no_account";
  return n.some((r) => s.startsWith(r + I + e + I)) ? void 0 : "other_account";
}
var q = { sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy", other_account: "its plugin was synced for another account", no_account: "no account could be resolved for its synced plugin", not_listed: "the account's latest complete list of plugins does not hold its plugin's folder", list_unreadable: "this session's record of the account's plugins could not be read", no_folder: "its plugin's folder could not be found under the synced plugins' folder" };
function Qyt(e) {
  return q[e];
}
function JVs(e, n, s) {
  let r = [...s.hooks ? ["its hooks"] : [], ...s.grant ? ["the tools its allowed-tools grants"] : []].join(" and without ");
  t(`Plugin skill '${e}' runs without ${r}: ${q[n]}.`, { level: "warn" }), Y("info", "plugins_sync_skill_hooks_refused", { reason: n });
}
function QVs(e, n) {
  t(`Plugin command '${e}' was not run: ${q[n]}.`, { level: "warn" }), Y("info", "plugins_sync_command_refused", { reason: n });
}
function C$r(e) {
  let n = /* @__PURE__ */ new Set();
  for (let s of Z()) for (let r of N5n(s)) n.add(r);
  jcn(le, n, e);
}
function ZVs({ bucket: e, delistedDirs: n, listedDirs: s }) {
  try {
    let r = /* @__PURE__ */ new Set();
    for (let p of Z()) {
      let y = p + I + e;
      for (let S of N5n(y)) {
        let h = Vcn(y, S);
        if (n.has(h) && !s.has(h)) r.add(S);
      }
    }
    return jcn(le, r, "skill_gone"), true;
  } catch (r) {
    return Y("warn", "plugins_sync_skill_hooks_removal_failed"), l(r), false;
  }
}
var L = { settingKey: "syncClaudeAiPlugins", policyKey: "allow_account_plugins_sync", flagName: "tengu_claudeai_plugins_sync_enabled", isTierInPlay: () => wre() };
function U5n() {
  I8();
  let e = Ze() && !RW();
  return Mos(e), e;
}
function I8() {
  let e = b$r(L);
  if (Hos(e), e && A$r()) C$r("sync_off");
}
function bre() {
  return I8(), RW();
}
function M1t() {
  return A$r();
}
function eKs() {
  return !M1t() && (bre() || F5n(L));
}
function B5n() {
  return Ree().length > 0 || Kcn();
}
function Kcn() {
  return j5n() || T$r();
}
function T$r() {
  return !j5n() && K(L) && GQe();
}
function yNo() {
  return j5n() || GQe();
}
function H1t() {
  return K(L) && GQe() && wre() && !bre();
}
function tKs() {
  return K(L);
}
function j5n() {
  return i.CLAUDE_CODE_SYNC_PLUGINS || i.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function Zyt() {
  return E$r(L);
}
function wre() {
  return !mr("plugins") && Qt("userSettings");
}
function Ze() {
  return w$r(L);
}
function A$r() {
  return v$r(L);
}
function R$r(e, n) {
  if (!n.ok) return n.reason === "no-auth" ? { success: false, error: n.detail, kind: "no_auth" } : { success: false, error: n.reason, kind: "gated" };
  let s = W5n().safeParse(n.data);
  if (s.success) {
    let r = s.data.error.type ?? "error_envelope_no_type";
    return Y("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", { serverError: r, status: n.status }), { success: false, error: r, kind: "server_error", status: n.status };
  }
  return Y("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"), { success: false, error: `malformed list-${e} response`, kind: "malformed" };
}
function x$r(e) {
  let { kind: n, message: s } = ui(e), r = Cie(v(e));
  return { success: false, error: s, kind: n, ...r !== void 0 && { errno: r } };
}
function $J(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}
function zQe(e) {
  return e.status === 403 || e.kind === "no_scope" || $J(e);
}
function VQe(e) {
  return { kind: c(e.kind), ...e.status !== void 0 && { status: e.status }, ...e.errno !== void 0 && { errno: e.errno } };
}
var W5n = f(() => Ct({ error: Ct({ type: ge().optional(), message: ge().nullish().catch(void 0) }) }));
function G5n(e) {
  try {
    let n = W5n().safeParse(ee(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type";
  } catch {
  }
  return "non_json_body";
}
var Je = ["prompt", "agent", "http", "mcp_tool"], Qe = f(() => u({ type: T("command"), command: o(), args: C(o()).nullish(), if: o().nullish(), shell: o().nullish(), timeout: E().nullish(), on_failure: B(["continue", "block"]).nullish().catch("block"), status_message: o().nullish(), once: M().nullish(), async: M().nullish(), async_rewake: M().nullish(), rewake_message: o().nullish(), rewake_summary: o().nullish() })), en = f(() => C(u({ event: o(), matchers: C(u({ matcher: o().nullish(), hooks: C(oe()) })) })));
function de(e) {
  if (!Array.isArray(e.hook_modules) || e.hook_modules.length > 0) return;
  let n = en().safeParse(e.hooks === null ? [] : e.hooks);
  if (!n.success) return;
  let s = {}, r = 0, p = false, y = /* @__PURE__ */ new Set(), S = Ud;
  for (let { event: P, matchers: R } of n.data) {
    if (!S.includes(P)) {
      r += R.reduce((x, H) => x + H.hooks.length, 0);
      continue;
    }
    for (let { matcher: x, hooks: H } of R) {
      let F = H.flatMap((O) => {
        let A = Qe().safeParse(O);
        if (!A.success) {
          p = true;
          let N = D(O) ? Je.find((De) => De === O.type) : void 0;
          if (N !== void 0) y.add(N);
          return [];
        }
        let b = A.data;
        return [{ type: "command", command: b.command, ...b.args != null && { args: b.args }, ...b.if != null && { if: b.if }, ...b.shell != null && { shell: b.shell }, ...b.timeout != null && { timeout: b.timeout }, ...b.on_failure != null && { onFailure: b.on_failure }, ...b.status_message != null && { statusMessage: b.status_message }, ...b.once != null && { once: b.once }, ...b.async != null && { async: b.async }, ...b.async_rewake != null && { asyncRewake: b.async_rewake }, ...b.rewake_message != null && { rewakeMessage: b.rewake_message }, ...b.rewake_summary != null && { rewakeSummary: b.rewake_summary } }];
      });
      if (F.length > 0) (s[P] ??= []).push({ ...x != null && { matcher: x }, hooks: F });
    }
  }
  let h = _K().safeParse(s);
  if (!h.success) return;
  let w = { hooks: h.data, unknownEvents: r };
  return p ? { ...w, hasOtherKinds: true, otherKinds: [...y] } : w;
}
function pe(e, { components: n = false } = {}) {
  let s = Xjr(e.installation_preference);
  return { pluginId: e.id, name: e.name, description: e.description ?? "", version: e.version ?? null, updatedAt: e.updated_at ?? null, ...typeof e.marketplace_name === "string" && e.marketplace_name && { marketplaceName: e.marketplace_name }, ...s && { installationPreference: s }, ...typeof e.presents_as === "string" && e.presents_as && { presentsAs: e.presents_as }, ...n && Array.isArray(e.components) && { components: e.components.flatMap((r) => {
    let p = nn().safeParse(r);
    if (!p.success) return [];
    let { type: y, name: S, description: h } = p.data;
    return [{ type: y, name: S, ...h != null && { description: h } }];
  }) } };
}
var nn = f(() => u({ type: o(), name: o(), description: o().nullish() }));
function me(e) {
  return e.enabled !== false;
}
function z5n(e) {
  return e.map((n) => _([n.pluginId, n.name, n.version, n.updatedAt])).toSorted().join(`
`);
}
var un = 1e4, ne = 6e4, he = 500, ye = 100, J = 20, Q = XCe;
function cn() {
  return i.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? ne;
}
var _e = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
var we = "&include_component_details=true&include_hooks=true", dn = "&wrapped_skills_as_plugins=true", ho = Me(`${_e}${we}`, 0);
async function fn(e) {
  let n = await e();
  if (n.ok) return n;
  return await X(he), e();
}
async function KQe(e = {}) {
  let n = await pn(`${_e}${e.componentDetails === true ? we : ""}${e.convertedSkillsAsPlugins === true ? dn : ""}`, e);
  return n.success ? { success: true, plugins: n.rows.map((s) => pe(s, { components: e.componentDetails === true })), ...n.degraded && { degraded: n.degraded }, ...n.convertedSkillsAsPlugins && { convertedSkillsAsPlugins: n.convertedSkillsAsPlugins }, ...e.componentDetails === true && !gn() && { hooks: new Map(n.rows.flatMap((s) => {
    let r = mn(s) ? void 0 : de(s);
    return r === void 0 ? [] : [[s.id, r]];
  })) } } : n;
}
async function pn(e, n) {
  if (await pHe(n.signal, n.credentials) === "skip_no_scope") return { success: false, error: "claude.ai login lacks the user:plugins scope in this session", kind: "no_scope" };
  let r = await Se(e, n);
  if (r.success || r.status === 403) return r;
  await X(he);
  let p = await Se(e, n);
  return !p.success && $J(p) && !$J(r) ? { success: false, error: p.error, kind: p.kind } : p;
}
async function Se(e, n) {
  let s = [], r = false, p = true;
  try {
    for (let y = 0; y < J; y++) {
      let S = await Wt.get(Me(e, y), { auth: "teleport-org", isBackground: n.isBackground, timeout: un, credentials: n.credentials, earlyAnswer: n.earlyAnswer });
      if (!S.ok || !Array.isArray(S.data?.plugins)) {
        let h = R$r("plugins", S);
        return y > 0 && $J(h) ? { success: false, error: h.error, kind: h.kind } : h;
      }
      if (s.push(...S.data.plugins.filter(me)), r ||= S.data.degraded === true, p &&= S.data.converted_skills_as_plugins === true, S.data.has_more !== true) return { success: true, rows: [...s.filter((h) => h.installation_preference === "required"), ...s.filter((h) => h.installation_preference !== "required")], ...r && { degraded: r }, ...p && { convertedSkillsAsPlugins: p } };
    }
    return Y("warn", "plugins_sync_list_page_cap", { pages: J, collected: s.length }), { success: false, error: `list-plugins page cap (${J}) exceeded`, kind: "page_cap" };
  } catch (y) {
    return x$r(y);
  }
}
function gn() {
  let e = ER("allow_account_plugins_sync"), n = e === "cache_miss" || e === "route_missing";
  return I8(), RW() || e !== null && !(n && zet());
}
function mn(e) {
  return e.enabled !== true || e.skills_display_degraded === true;
}
function _No(e, n) {
  let s = [];
  if (n) s.push(`version=${encodeURIComponent(n)}`);
  if (i.CLAUDE_CODE_CCR_SURFACE === "tag") s.push("included_default_marketplaces=claude-tag-plugins");
  let r = s.length > 0 ? `?${s.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${r}`;
}
async function P$r(e, n, s, r = {}) {
  return fn(() => kn(e, n, s, r));
}
async function kn(e, n, s, r) {
  let p = _No(e, s);
  if (i.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return yn(p, n, r);
  let y = 0, S = false;
  try {
    let x = function() {
      S = true, R.destroy(Error("plugin download stream stalled"));
    }, h = await Wt.get(p, { auth: "teleport-org", isBackground: r.isBackground, timeout: ne, responseType: "stream", credentials: r.credentials });
    if (!h.ok || !h.data) {
      let A = h.ok ? "empty_body" : h.reason;
      return Y("warn", "plugins_sync_download_not_ok", { reason: A }), { ok: false, reason: A };
    }
    let w = cn(), P, R = new rn({ transform(A, b, N) {
      if (clearTimeout(P), P = setTimeout(x, w), y += A.length, y > Q) N(Error("plugin zip exceeds download byte cap"));
      else N(null, A);
    }, flush(A) {
      clearTimeout(P), A();
    } });
    P = setTimeout(x, w);
    try {
      await an(h.data, R, tn(n));
    } finally {
      clearTimeout(P);
    }
    let H = Buffer.alloc(2048), F = await on(n, "r"), O;
    try {
      O = (await F.read(H, 0, H.length, 0)).bytesRead;
    } finally {
      await F.close();
    }
    if (O < 2 || H[0] !== 80 || H[1] !== 75) {
      await ke(n, { force: true });
      let A = O === 0 ? "empty_body" : G5n(H.subarray(0, O));
      return Y("warn", "plugins_sync_download_not_zip", { serverError: A, bodyLen: y }), { ok: false, reason: A };
    }
    return { ok: true };
  } catch (h) {
    await ke(n, { force: true }).catch(() => {
    });
    let w = h?.response?.data;
    if (w !== null && typeof w === "object" && "destroy" in w && typeof w.destroy === "function") w.destroy();
    let P = h !== null && typeof h === "object" && "code" in h ? h.code : void 0, R = S ? "timeout" : y > Q ? "too_large" : P === "ECONNRESET" || P === "EPIPE" || P === "ETIMEDOUT" ? "network" : ui(h).kind;
    return Y("warn", "plugins_sync_download_exception", { kind: R }), { ok: false, reason: R };
  }
}
async function yn(e, n, s) {
  try {
    let r = await Wt.get(e, { auth: "teleport-org", isBackground: s.isBackground, timeout: ne, responseType: "arraybuffer", maxContentLength: Q, credentials: s.credentials });
    if (!r.ok || !r.data) {
      let y = r.ok ? "empty_body" : r.reason;
      return Y("warn", "plugins_sync_download_not_ok", { reason: y }), { ok: false, reason: y };
    }
    let p = Buffer.from(r.data);
    if (p.length < 2 || p[0] !== 80 || p[1] !== 75) {
      let y = p.length === 0 ? "empty_body" : G5n(p);
      return Y("warn", "plugins_sync_download_not_zip", { serverError: y, bodyLen: p.length }), { ok: false, reason: y };
    }
    return await sn(n, p), { ok: true };
  } catch (r) {
    let { kind: p } = ui(r);
    return Y("warn", "plugins_sync_download_exception", { kind: p }), { ok: false, reason: p };
  }
}
function Me(e, n) {
  return `${e}&limit=${ye}&offset=${n * ye}`;
}
function hGe(e) {
  let n = e.sessionRefsGate;
  if (n.ccrSessionID() === void 0) {
    let s = i.CLAUDE_CODE_SESSION_ID;
    if (s && rr(s) !== s) n.latchCcrSessionID(s);
  }
  return n.ccrSessionID();
}
function Sn(e) {
  return hGe(e) !== void 0;
}
function DO(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!i.CLAUDE_CODE_SYNC_SESSION_REFS && Sn(e));
}
class z {
  texts = /* @__PURE__ */ new Map();
  readingForCalls = /* @__PURE__ */ new Map();
  lastReadForCalls = Promise.resolve(void 0);
}
class be {
  syncPromise = null;
  firstSyncPromise = null;
  firstListDeferred = null;
  firstRoundSettled = false;
  firstRoundEmitted = false;
  resyncTimer = null;
  resyncRunRound = null;
  resyncArmed = null;
  stopAwaitingActivity = null;
  consecutiveFailedRounds = 0;
  lostRowsRecheckMs = 100;
  bucketGeneration = null;
  pendingDownloads = /* @__PURE__ */ new Map();
  placeholders = /* @__PURE__ */ new Map();
  listedSkills = /* @__PURE__ */ new Map();
  listedOwnerships = /* @__PURE__ */ new Map();
  listedSkillsAnswer = "none_yet";
  listNeverStarted = false;
  hostMountKinds = /* @__PURE__ */ new Map();
  hostMountWorkOutstanding = null;
  hostMountWorkStartedAt = 0;
  hostMountWorkIsCatalogs = false;
  hostCatalog = new z();
  missingSkillResyncAt = -1 / 0;
  missingSkillResync = null;
  reset() {
    if (this.syncPromise = null, this.firstSyncPromise = null, this.firstListDeferred = null, this.firstRoundEmitted = false, this.firstRoundSettled = false, dTn(false), aTn(false), this.resyncTimer) clearTimeout(this.resyncTimer), this.resyncTimer = null;
    this.resyncRunRound = null, this.resyncArmed = null, this.stopAwaitingActivity?.(), this.consecutiveFailedRounds = 0, this.lostRowsRecheckMs = 100, this.bucketGeneration = null, this.listedSkills.clear(), this.listedOwnerships.clear(), this.listedSkillsAnswer = "none_yet", this.listNeverStarted = false, this.hostMountKinds.clear(), this.hostMountWorkOutstanding = null, this.hostMountWorkStartedAt = 0, this.hostMountWorkIsCatalogs = false, this.hostCatalog = new z(), this.pendingDownloads.clear(), this.placeholders.clear(), this.missingSkillResyncAt = -1 / 0, this.missingSkillResync = null;
  }
}
var hn = new W(() => new be());
function nf() {
  return hn.of(U().host);
}
var _n = f(() => {
  let e = ge().nullish().transform((r) => r ?? ""), n = Ct({ id: e, name: e, description: e, version: e, directory: e, marketplace_name: ge().nullish().catch(void 0), is_official: zo().nullish().catch(void 0) }).transform(({ marketplace_name: r, is_official: p, ...y }) => ({ ...y, ...r && { marketplaceName: r }, ...p === true && { isOfficial: true } })), s = dr(n).nullish().transform((r) => r ?? []);
  return Ct({ skills: s, plugins: s }).strict();
}), wn = 3e4, Mn = 500;
class Ae {
  inflight = null;
  featureEventReported = /* @__PURE__ */ new Set();
  startupResponse = null;
  fetch() {
    if (!this.inflight) {
      let e = bn().finally(() => {
        if (this.inflight === e) this.inflight = null;
      });
      this.inflight = e;
    }
    return this.inflight;
  }
  discardInflight() {
    this.inflight = null, this.startupResponse = null;
  }
  async listEntries(e, { startup: n }) {
    let s = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins", r = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let p = await (n ? this.startupResponse ??= this.fetch() : this.fetch());
    if (!p.ok) {
      if (a(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", { unavailable: p.reason === "unavailable" }), r) m(s, p.reason);
      return { success: false, error: `manifest ${p.reason}`, kind: "manifest" };
    }
    if (r) g(s);
    return { success: true, entries: p[e] };
  }
}
var yGe = new nt(() => new Ae());
async function bn() {
  let e = await He();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await X(Mn), He();
}
async function He() {
  try {
    let e = await Wt.get("/worker/skill-manifest", { host: "ccr-session", auth: "session-jwt", headers: { "anthropic-version": "2023-06-01" }, timeout: wn, validateStatus: () => true });
    if (!e.ok) {
      if (e.reason === "no-auth") return Y("warn", "session_refs_manifest_no_auth"), { ok: false, reason: "no_auth" };
      return Y("warn", "session_refs_manifest_gated", { reason: e.reason }), { ok: false, reason: "gated" };
    }
    if (e.status === 503) return Y("warn", "session_refs_manifest_unavailable"), { ok: false, reason: "unavailable" };
    if (e.status >= 300) return Y("warn", "session_refs_manifest_http_error", { status: e.status }), { ok: false, reason: "http_error" };
    let n = _n().safeParse(e.data);
    if (!n.success) return Y("warn", "session_refs_manifest_malformed"), { ok: false, reason: "malformed" };
    return { ok: true, skills: n.data.skills.filter((s) => s.id), plugins: n.data.plugins.filter((s) => s.id) };
  } catch (e) {
    let { kind: n } = ui(e);
    return Y("warn", "session_refs_manifest_exception", { kind: n }), { ok: false, reason: "transport" };
  }
}
import { lstat as Re, open as Hn, realpath as xe } from "fs/promises";
import { join as j } from "path";
function k$r(e) {
  return e.length >= 2 && e[0] === 80 && e[1] === 75;
}
var Wcn = "/mnt/skills", te = { public: "anthropic", examples: "anthropic-example" }, Gcn = "public", re = 3e3, An = 33554432, Rn = 6e5, vn = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;
function uNo(e, n, s) {
  s.set(n.reason, (s.get(n.reason) ?? 0) + 1), Y("info", "skills_sync_host_mount_miss", { kind: e, ...n });
}
function $5n(e) {
  return Object.fromEntries(Array.from(e, ([n, s]) => [`mount_miss_${n}`, s]));
}
function En(e) {
  if (e.creator_type !== "anthropic" || e.id !== e.name || !rxe(e.name)) return;
  if (e.source === te.public) return "public";
  return e.source === te.examples && e.is_public_provisioned === true ? "examples" : void 0;
}
function $Vs(e) {
  let { hostMountKinds: n } = nf();
  n.clear();
  for (let s of e) {
    let r = En(s);
    if (r !== void 0) n.set(s.id, r);
  }
}
function Ce() {
  return u3t() && JCe() !== 0;
}
function UVs(e) {
  let n = nf().hostMountKinds.get(e.skillId);
  return n !== void 0 && Ce() && e.name === e.skillId && e.source === te[n] && e.requestedVersion === void 0 ? n : void 0;
}
async function BVs(e, n) {
  if (!Ce()) return null;
  let s = { deadline: performance.now() + re, spentMs: 0, waitedMs: 0 }, r = await ve(s, () => Fe(e)), p = Ra(1, (y, S, h) => ve(s, () => xn(y, S, h)));
  return { async readZip(y, S) {
    let h = "reason" in r ? r : r.get(y) ?? G, w = "reason" in h ? h : await p(j(Wcn, y, `${S.name}.skill`), S.updatedAt, h.device);
    if ("zip" in w) return w.zip;
    uNo(y, w, n);
    return;
  }, spentMs: () => Math.round(s.spentMs), waitedMs: () => Math.round(s.waitedMs) };
}
async function ve(e, n) {
  let s = nf();
  while (s.hostMountWorkOutstanding !== null && s.hostMountWorkIsCatalogs) {
    let S = s.hostMountWorkOutstanding, h = performance.now(), w = Math.min(e.deadline, s.hostMountWorkStartedAt + re) - h;
    if (w > 0) await Pe(S.catch(() => {
    }), w), e.waitedMs += performance.now() - h;
    if (s.hostMountWorkOutstanding === S) break;
  }
  let r = performance.now();
  if (s.hostMountWorkOutstanding !== null) return { reason: "earlier_work_outstanding" };
  if (r >= e.deadline) return { reason: "budget_spent" };
  let p = Oe(s, n, r, false), y = await Pe(p, e.deadline - r);
  return e.spentMs += performance.now() - r, y ?? { reason: "timed_out" };
}
async function pNo(e) {
  let n = nf();
  while (n.hostMountWorkOutstanding !== null) {
    let s = n.hostMountWorkOutstanding;
    if (await s.catch(() => {
    }), n.hostMountWorkOutstanding === s) n.hostMountWorkOutstanding = null;
  }
  return Oe(n, e, performance.now(), true);
}
function jVs() {
  let e = nf();
  return e.hostMountWorkOutstanding !== null && performance.now() - e.hostMountWorkStartedAt >= re;
}
function Oe(e, n, s, r) {
  let p = n();
  e.hostMountWorkOutstanding = p, e.hostMountWorkStartedAt = s, e.hostMountWorkIsCatalogs = r;
  let y = () => {
    if (e.hostMountWorkOutstanding === p) e.hostMountWorkOutstanding = null;
  };
  return p.then(y, y), p;
}
var G = { reason: "not_a_mount" };
async function Fe(e) {
  let n = await Re(Wcn).catch(se), s = "reason" in n || n.isDirectory() ? n : G, r = /* @__PURE__ */ new Map();
  for (let p of e) {
    if ("reason" in s) {
      r.set(p, s);
      continue;
    }
    let y = await Re(j(Wcn, p)).catch(se);
    r.set(p, "reason" in y ? y : y.isDirectory() && y.dev !== s.dev ? { device: y.dev } : G);
  }
  return r;
}
function se(e) {
  let n = v(e);
  return n === "ENOENT" ? { reason: "no_mount" } : { reason: "probe_failed", code: n ?? "unknown" };
}
function xn(e, n, s) {
  return Le(e, s, An, async (r, p) => {
    let y = n !== null && vn.test(n) ? Date.parse(n) : Number.NaN;
    if (Number.isNaN(y)) return { reason: "row_date_unreadable" };
    if (p.mtimeMs <= y + Rn) return { reason: "not_newer_than_row" };
    let S = await r.readFile();
    return k$r(S) ? { zip: S } : { reason: "not_zip" };
  });
}
async function fNo(e) {
  return (await Fe(/* @__PURE__ */ new Set([e]))).get(e) ?? G;
}
async function WVs() {
  let e = await fNo(Gcn), n = "reason" in e ? e : await xe(j(Wcn, Gcn)).then((s) => ({ device: e.device, root: s }), se);
  if ("reason" in n) Y("warn", "skill_host_catalog_not_read", n);
  return n;
}
async function GVs(e, n, s) {
  let r = j(e, n, "SKILL.md"), p = await Ee(r) ?? await mNo(r, s, r_);
  return "reason" in p ? p : await Ee(r) ?? { text: p.text, filePath: r };
}
async function Ee(e) {
  try {
    return await xe(e) === e ? void 0 : { reason: "file_is_link" };
  } catch (n) {
    return Ie(n);
  }
}
function mNo(e, n, s) {
  return Le(e, n, s, async (r) => ({ text: await r.readFile({ encoding: "utf-8" }) }));
}
async function Le(e, n, s, r) {
  let p;
  try {
    p = await Hn(e, Ec());
    let y = await p.stat();
    if (y.dev !== n) return { reason: "file_on_other_device" };
    if (!y.isFile()) return { reason: "not_a_file" };
    if (y.size > s) return { reason: "too_large" };
    return await r(p, y);
  } catch (y) {
    return Ie(y);
  } finally {
    await p?.close().catch(() => {
    });
  }
}
function Ie(e) {
  let n = v(e);
  switch (n) {
    case "ENOENT":
      return { reason: "file_absent" };
    case "ELOOP":
      return { reason: "file_is_link" };
    default:
      return { reason: "read_failed", code: n ?? "unknown" };
  }
}
function zVs(e) {
  return { skillId: e.id, name: e.name, description: e.description ?? "", source: e.source ?? "custom", updatedAt: e.updated_at ?? null, ...typeof e.backing_plugin_id === "string" && vce(e.backing_plugin_id) && { backingPluginId: e.backing_plugin_id }, ...e.user_invocable != null && { userInvocable: e.user_invocable === true }, ...e.disable_model_invocation != null && { disableModelInvocation: e.disable_model_invocation !== false } };
}
function VVs(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === true) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}
function KVs(e) {
  return e.enabled !== false;
}
var gGe = "collision-loser";
export {
  $5n,
  $J,
  $Vs,
  A$r,
  B5n,
  BVs,
  C$r,
  D5n,
  DO,
  E$r,
  F5n,
  G5n,
  GQe,
  GVs,
  Gcn,
  H1t,
  I8,
  JVs,
  KQe,
  KVs,
  Kcn,
  L5n,
  M1t,
  N5n,
  P$r,
  QVs,
  Qyt,
  R$r,
  T$r,
  U5n,
  UVs,
  Ude,
  VQe,
  VVs,
  Vcn,
  W5n,
  WVs,
  Wcn,
  XVs,
  YVs,
  ZVs,
  Zyt,
  _No,
  b$r,
  bre,
  eKs,
  fNo,
  gGe,
  gNo,
  hGe,
  hNo,
  j5n,
  jVs,
  jcn,
  k$r,
  mNo,
  nf,
  pHe,
  pNo,
  qVs,
  r_,
  tKs,
  uNo,
  v$r,
  w$r,
  wre,
  x$r,
  yGe,
  yNo,
  z5n,
  zQe,
  zVs,
  zcn
};
