// darwin/hooks/create-device-hooks-worker.js — Claude Code 2.1.310（darwin）模块 chunk-bka0z1nh.js
import { sor, ikt, ior } from "../mcp/allowed-warning.js";
import "../permissions/classifier-transcript-too-long.js";
import "../shared/chunk-2fe3b2b7.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { F, J } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { ga, ei, lie, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import { wJ, b2e } from "../context/team-memory-sync.js";
import "../tools/device-session-limit.js";
import { Zxn, ePn } from "./chunk-180a6084.js";
import { Swe } from "../shared/chunk-2961485e.js";
var te = 65536, oe = 600, Z = 200, re = 5e3, ae = 3e5;
function ee(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}
function ne(o, m) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some((v) => v.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== o.event || !wJ(m.event)) return "event_not_allowed";
  return "awaiting_upload";
}
function he(o) {
  let m = null, v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  o.registry.onLeaseExpired((l) => o.forwarder.removeForOwner(l.instanceId));
  let M = () => o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled(), b = () => {
    let l = o.registry.current();
    if (l !== null) o.forwarder.removeForOwner(l.instanceId), o.templateRunner.remove(l.instanceId);
    o.registry.clear(), y.clear(), o.templates.clear();
  }, O = async () => {
    let l = m !== null && !m.settled;
    if (m === null || m.settled) {
      let i = { promise: o.readAccountFlags(), startedAt: o.now(), settled: false };
      i.promise.then(() => i.settled = true, () => i.settled = true), m = i;
    }
    let s = m, a = o.now(), c = Math.max(0, o.flagWaitCapMs - (a - s.startedAt));
    return { state: await Pe(s.promise.then((i) => i ? "on" : "off", () => "pending"), c) ?? "pending", waitMs: o.now() - a, shared: l };
  }, A = async () => {
    let l = { flagWaitMs: 0, sharedFlagRead: false };
    if (M()) return b(), { ok: false, error: "hook_forwarding_disabled: policy", outcome: "disabled_policy", ...l };
    let s = await O(), a = { flagWaitMs: s.waitMs, sharedFlagRead: s.shared };
    if (s.state === "pending") return { ok: false, error: "hook_forwarding_not_ready: feature flags not yet available; retry", outcome: "not_ready", ...a };
    if (s.state === "off") return b(), { ok: false, error: "hook_forwarding_disabled: flag_off", outcome: "disabled_flag_off", ...a };
    if (M()) return b(), { ok: false, error: "hook_forwarding_disabled: policy", outcome: "disabled_policy", ...a };
    return { ok: true, ...a };
  }, P = async (l) => {
    let s = { flagWaitMs: 0, sharedFlagRead: false };
    if (ga(l).length > te) return { ok: false, error: "invalid_registration: request larger than 64 KiB", outcome: "invalid", ...s };
    let a = sor().safeParse(l.request);
    if (!a.success) return { ok: false, error: `invalid_registration: ${ei(a.error.issues[0]?.message ?? "malformed", { maxCodeUnits: Z })}`, outcome: "invalid", ...s };
    if (a.data.worker_epoch !== void 0 && a.data.worker_epoch !== o.workerEpoch) return { ok: false, error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`, outcome: "stale_epoch", ...s };
    let c = await A();
    return c.ok ? { ok: true, parsed: a.data, flagWaitMs: c.flagWaitMs, sharedFlagRead: c.sharedFlagRead } : c;
  }, T = async (l) => {
    let s = await P(l);
    if (!s.ok) return o.telemetry.register({ outcome: s.outcome, accepted: 0, ignored: 0, templatesAwaitingUpload: 0, templatesRefused: 0, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "error", error: s.error };
    let a = s.parsed, c = o.projectRoot(), u = o.cwd(), i = ikt().safeParse({ status: "unregistered", project_dir: c, cwd: u, worker_epoch: o.workerEpoch }).success, d = { project_dir: c, cwd: i ? u : c, worker_epoch: o.workerEpoch }, D = (e, n) => {
      if (o.registry.removeOwner(a.instance_id)) o.forwarder.removeForOwner(a.instance_id), o.templateRunner.remove(a.instance_id);
      return y.delete(a.instance_id), o.telemetry.register({ outcome: "unregistered", accepted: 0, ignored: e.length, templatesAwaitingUpload: 0, templatesRefused: n.length, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "success", response: { status: "unregistered", ...d, ...e.length > 0 && { ignored_ids: e.slice(0, 128) }, ...n.length > 0 && { templates: [...n] } } };
    };
    if (a.hooks.length === 0 && a.templates.length === 0) return D([], []);
    let k = [], _ = [], S = /* @__PURE__ */ new Set();
    for (let e of a.hooks) {
      let n = Swe(e.id), p = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || b2e.test(e.matcher), C = S.has(e.id);
      if (S.add(e.id), C || n === null || n.instanceId !== a.instance_id || n.event !== e.event || !wJ(e.event) || !p) {
        _.push(e.id);
        continue;
      }
      k.push({ id: e.id, event: e.event, ...e.matcher !== void 0 && e.matcher !== "" && e.matcher !== "*" && { matcher: e.matcher }, kind: e.kind, ...e.timeout_s !== void 0 && { timeoutS: e.timeout_s }, source: e.source, hasCondition: e.has_condition === true, targetPinned: e.target_pinned === true });
    }
    let f = {}, R = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), W = y.get(a.instance_id) ?? /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), q = (e) => {
      let n = W.get(e);
      if (n === void 0) return false;
      return R.set(n.matcher, e), f[n.event] = [...f[n.event] ?? [], n.matcher], h.set(e, n), r.add(e), true;
    }, K = (e, n) => {
      if (!Zxn(e) || !v.get(a.instance_id)?.has(e.id)) return;
      let p = { matcher: e.matcher, hooks: [{ type: "callback", timeout: n, callback: async () => (o.telemetry.templateStandInBlocked?.({ template: e.id }), { decision: "block", reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)` }) }] };
      R.set(p, e.id), f[e.event] = [...f[e.event] ?? [], p], h.set(e.id, { event: e.event, matcher: p }), r.add(e.id);
    }, N = new Map(a.templates.map((e) => [e.template, e]));
    for (let e of N.values()) {
      let n = o.templates.template(e.template), p = ne(n, e), C = p === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
      if (n === void 0 || C === void 0) {
        if (g.set(e.template, { template: e.template, status: p }), !q(e.template) && n !== void 0) K(n, ee(e.timeout_s));
        continue;
      }
      let I = ee(e.timeout_s);
      if (await o.templateRunner.resolveInterpreter() === null) {
        if (g.set(e.template, { template: e.template, status: "interpreter_unavailable" }), !q(e.template)) K(n, I);
        continue;
      }
      let j;
      try {
        if (j = await Pe(o.templateRunner.prepare(n, e.digest, C, I), re), j === void 0) throw Error("template prepare timed out");
      } catch (B) {
        if (t(`[deviceHooks] template ${e.template} install failed: ${B instanceof Error ? B.message : String(B)}`, { level: "error" }), g.set(e.template, { template: e.template, status: "install_failed" }), !q(e.template)) K(n, I);
        continue;
      }
      let L = { matcher: n.matcher, hooks: [{ type: "callback", timeout: I, callback: j }] };
      R.set(L, n.id), f[n.event] = [...f[n.event] ?? [], L], h.set(n.id, { event: n.event, matcher: L }), g.set(e.template, { template: e.template, status: "installed" });
    }
    let E = [...g.values()];
    if (M()) return b(), o.telemetry.register({ outcome: "disabled_policy", accepted: 0, ignored: 0, templatesAwaitingUpload: 0, templatesRefused: 0, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "error", error: "hook_forwarding_disabled: policy" };
    let G = a.lease_s ?? oe, z = o.now() + G * 1e3, w = { instanceId: a.instance_id, displayName: ei(a.display_name ?? "", { maxCodeUnits: lie }) || a.instance_id, epoch: o.workerEpoch, leaseExpiresAt: z, entries: k, templates: [...N.values()].flatMap((e) => {
      let n = g.get(e.template)?.status, p = r.has(e.template) ? h.get(e.template)?.event ?? e.event : e.event;
      return (n === "awaiting_upload" || n === "installed" || r.has(e.template)) && wJ(p) ? [{ template: e.template, digest: e.digest, event: p, ...e.timeout_s !== void 0 && { timeoutS: e.timeout_s } }] : [];
    }) };
    if (w.entries.length === 0 && w.templates.length === 0) return D(_, E);
    let { replaced: H, awaySince: X } = o.registry.replaceOwner(w);
    if (H !== void 0) o.forwarder.removeForOwner(H), o.templateRunner.remove(H), y.delete(H);
    o.forwarder.installForOwner(w), o.templateRunner.install(w.instanceId, f, (e, n) => R.get(n) ?? "template"), y.set(w.instanceId, h);
    let Y = v.get(w.instanceId) ?? /* @__PURE__ */ new Set();
    for (let e of g.values()) if (e.status === "installed") Y.add(e.template);
    v.set(w.instanceId, Y);
    let V = F(E, (e) => e.status === "awaiting_upload"), Q = F(E, (e) => e.status === "installed");
    return o.telemetry.register({ outcome: "accepted", accepted: k.length, ignored: _.length, templatesAwaitingUpload: V, templatesInstalled: Q, templatesRefused: E.length - V - Q, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "success", response: { status: "registered", ...d, lease_s: G, lease_expires_at: new Date(z).toISOString(), accepted: k.length, ignored: _.length, ..._.length > 0 && { ignored_ids: _.slice(0, 128) }, templates: E, ...H !== void 0 && { replaced_owner: H }, ...X !== void 0 && { away_since: new Date(X).toISOString() } } };
  }, x = 4e5, U = async (l) => {
    let s = (d, D = "unknown", k = 0) => o.telemetry.upload({ outcome: d, template: D, bytes: k });
    if (ga(l).length > x) return s("invalid"), { kind: "error", error: "invalid_upload: request larger than 400 KB" };
    let a = ior().safeParse(l.request);
    if (!a.success) return s("invalid"), { kind: "error", error: `invalid_upload: ${ei(a.error.issues[0]?.message ?? "malformed", { maxCodeUnits: Z })}` };
    let c = a.data;
    if (c.worker_epoch !== void 0 && c.worker_epoch !== o.workerEpoch) return s("stale_epoch", c.template), { kind: "error", error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}` };
    let u = await A();
    if (!u.ok) return s(u.outcome, c.template), { kind: "error", error: u.error };
    let i = o.templates.accept({ template: c.template, digest: c.digest, contentBase64: c.content_base64 });
    if (!i.ok) return s(i.kind, c.template), { kind: "error", error: i.error };
    return s(i.status, i.template.id, i.bytes), { kind: "success", response: { template: i.template.id, digest: c.digest, status: i.status } };
  };
  return { async handle(l) {
    switch (l.request.subtype) {
      case "register_device_hooks":
        return T(l);
      case "upload_device_hook_template":
        return U(l);
      default:
        return { kind: "error", error: `Unsupported control request subtype: ${l.request.subtype}` };
    }
  } };
}
function se(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}
async function we(o) {
  let [{ isRestrictedToPluginOnly: m }, { isCustomizationDisabled: v }, { shouldHoldDeviceHooksByPolicy: y, shouldDisableAllHooksIncludingManaged: M }, { isAccountGateServed: b, isViolinAmatiEnabled: O }, { getToolServingFlagAnsweredOff: A, isToolServingEnabled: P }, { refreshGrowthBookFeatures: T }, { createDeviceHookRegistry: x, productionRegistryTimer: U }, { createDeviceHookForwarder: l, productionForwarderTimer: s }, { createDeviceHookTemplateStore: a }, { productionDeviceHookTemplateRunner: c, telemetryTemplateId: u }, { logEvent: i }, { fromEnum: d }, { logFeatureBad: D, logFeatureOk: k, logFeatureSad: _ }] = await Promise.all([import("../plugins/is-restricted-to-plugin-only.js"), import("../context/is-claude-md-loading-disabled.js"), import("./are-device-hooks-stood-down.js"), import("../settings/can-forward-home-settings.js"), import("../cli/get-tool-serving-flag-answered-off.js"), import("../cli/answer-next-growth-book-remote-eval-with.js"), import("./create-device-hook-registry.js"), import("./create-device-hook-forwarder.js"), import("./create-device-hook-template-store.js"), import("./production-device-hook-template-runner.js"), import("../telemetry/attach-analytics-sink.js"), import("../telemetry/agent-type-for-analytics-from-definition.js"), import("./cmd-feature.js")]), S = x({ now: Date.now, setTimer: U, onLeaseExpired: () => i("tengu_device_hooks_lease_expired", {}) }), f = l({ registry: S, sender: o.sender, toolAliases: o.toolAliases, now: Date.now, setTimer: s, telemetry: { forwarded: (r) => i("tengu_device_hook_forwarded", { event: d(r.event), outcome: d(r.outcome), fields_dropped: r.fieldsDropped, blocked: r.blocked, rtt_ms: r.rttMs, error_replies_ignored: r.errorRepliesIgnored, malformed_replies_ignored: r.malformedRepliesIgnored }) } }), R = { policy: { pluginOnly: () => m("hooks"), customizationDisabled: () => v("hooks"), managedOnly: y, allDisabled: M }, readAccountFlags: async () => {
    let [r, W] = await Promise.all([P({ cloudClient: true }), O()]);
    if (r && W) {
      if (!ePn()) return true;
      return i("tengu_device_hooks_shelved", { side: d("worker") }), false;
    }
    let h = A({ cloudClient: true }) ?? (!W && b("tengu_violin_amati") ? "tengu_violin_amati" : void 0);
    if (h === void 0) throw T().catch(() => {
    }), Error("account flags not served yet");
    return i("tengu_device_hooks_account_flag_off", { flag: d(h) }), false;
  }, flagWaitCapMs: 5e3, now: Date.now, workerEpoch: se(o.workerEpoch), projectRoot: o.projectRoot, cwd: o.cwd, registry: S, forwarder: f, templates: a(), templateRunner: J() ? { resolveInterpreter: async () => null, prepare: async () => {
    throw Error("no device hook templates in a diskless session");
  }, install: () => {
  }, remove: () => {
  } } : c(o.projectRoot), telemetry: { templateStandInBlocked: (r) => i("tengu_device_hook_template_run", { template: d(u(r.template)), outcome: d("stand_in_blocked"), duration_ms: 0 }), upload: (r) => i("tengu_device_hook_template_upload", { outcome: d(r.outcome), template: d(u(r.template)), bytes: r.bytes }), register: (r) => {
    if (i("tengu_device_hooks_register", { outcome: d(r.outcome), accepted: r.accepted, ignored: r.ignored, templates_awaiting_upload: r.templatesAwaitingUpload, templates_installed: r.templatesInstalled ?? 0, templates_refused: r.templatesRefused, flag_wait_ms: r.flagWaitMs, shared_flag_read: r.sharedFlagRead }), r.outcome === "accepted" || r.outcome === "unregistered") k("device_hooks_register", { accepted: r.accepted });
    else if (r.outcome === "not_ready") _("device_hooks_register", r.outcome);
    else D("device_hooks_register", r.outcome);
  } } }, g = Date.now();
  return { ...R, readAccountFlags: () => {
    let r = Date.now();
    if (r - g >= ae) g = r, T().catch(() => {
    });
    return R.readAccountFlags();
  } };
}
export {
  he as createDeviceHooksWorker,
  we as productionDeviceHooksWorkerDeps
};
