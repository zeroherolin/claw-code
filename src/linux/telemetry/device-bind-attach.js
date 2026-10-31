// linux/telemetry/device-bind-attach.js — Claude Code 2.1.310（linux）模块 chunk-epkb0qsy.js
import { b, c } from "../agents/third-party.js";
import { d } from "./anthropic-workspace-id.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, f } from "./chunk-9d6962d2.js";
import { bt, t } from "../fs/gitlab-runner-authentication-token.js";
import { yHs, yzn, _zn, _Hs } from "../core/conversation-engine.js";
import { IZt } from "../auth/device-key-store.js";
import { ras, nwe } from "../remote/other-state.js";
import { sho, iho } from "../shared/device-unbound-creates.js";
import { dzt } from "./flag-off.js";
import { H5t } from "../remote/device-bridge-connect-failed.js";
import { Jq } from "../shared/not-held.js";
import { _me } from "../shared/chunk-945711c0.js";
import { Vve } from "../remote/allow-remote-sessions.js";
async function NQr(e) {
  let i = e.session.then((r) => ({ read: true, session: r }), (r) => ({ read: false, error: r }));
  if (!await (e.isEnabled ?? dzt)().catch(() => false)) return { status: "disabled" };
  let o = await i;
  if (!o.read) return B("session_unreadable", o.error);
  if (o.session.archived) return { status: "disabled" };
  if (o.session.boundDeviceId === void 0) {
    let r = await (e.readUnboundCreateReason ?? ((A) => sho(A, yHs, iho(e.storageV5))))(e.sessionId).catch(() => {
      return;
    });
    return a("tengu_device_bind_attach", { outcome: b("session_unbound"), created_here: r !== void 0 }), r === void 0 ? { status: "not_applicable" } : { status: "created_unbound", reason: r };
  }
  let s;
  try {
    s = (e.isEgressAllowed ?? Vve)();
  } catch {
    s = false;
  }
  if (!s) return y("egress");
  let n = await (e.getAccount?.() ?? _me(e.credentials));
  if (n.status === "missing") return y("account");
  if (n.status === "mismatch") return y("account_mismatch");
  let l = await (e.loadLocalDevice?.(n.accountUuid) ?? IZt(n.accountUuid, e.credentials)).then((r) => ({ read: true, held: r }), (r) => ({ read: false, error: r }));
  if (!l.read) return B("local_device_unreadable", l.error);
  if (l.held === void 0) return y("no_device_here");
  let v = l.held.rowPk.toLowerCase();
  if (v !== o.session.boundDeviceId.toLowerCase()) return y("other_device");
  let { toolHostLink: h } = o.session;
  return a("tengu_device_bind_attach", { outcome: b("bound"), tool_host_link: c(h) }), g("device_bind_attach"), { status: "bound", deviceId: v, held: l.held, toolHostLink: h };
}
function $Qr(e) {
  return { archived: e.session_status === "archived", boundDeviceId: e.bound_device_uuid, toolHostLink: ras(e.tool_host_status, e.device_bind_posture) };
}
async function nEi(e, { isEnabled: i = dzt, isEgressAllowed: o = Vve } = {}) {
  if (e.catch(() => {
  }), !await i().catch(() => false)) return;
  let { archived: s, boundDeviceId: n } = await e;
  if (s) return;
  try {
    return o() ? n : void 0;
  } catch {
    return;
  }
}
function FQr(e) {
  return e.then((i) => i.status === "bound", () => false);
}
function UQr(e) {
  return e.then((i) => i.status === "bound" ? i.deviceId : void 0, () => {
    return;
  });
}
function BQr(e) {
  return e.then((i) => i.status === "bound" ? i.held : void 0, () => {
    return;
  });
}
function k({ viewerOnly: e, binding: i }) {
  return !e && i.status === "bound" && nwe(i.toolHostLink) ? { owner: true, deviceId: i.deviceId } : { owner: false };
}
async function dur(e, i) {
  try {
    let o = await i();
    return o.session_status !== "archived" && typeof o.bound_device_uuid === "string" && o.bound_device_uuid.toLowerCase() === e.toLowerCase();
  } catch (o) {
    t(`[attachBinding] re-reading the session's binding failed (keeping it): ${d(o)}`);
    return;
  }
}
async function rEi({ sessionId: e, binding: i, deviceBridge: o, onNotice: s, repositoryTrust: n, readSession: l }) {
  return (await import("../remote/served-tools-attach-options.js")).servedToolsAttachOptions({ owner: i.then((v) => {
    let h = k({ viewerOnly: false, binding: v });
    return () => h;
  }, () => () => ({ owner: false })), cloudClient: true, ...o && { deviceBridge: o }, ...s && { onNotice: s }, ...n && { repositoryTrust: n }, stillBound: () => i.then((v) => v.status === "bound" ? dur(v.deviceId, l) : void 0, () => {
    return;
  }), plumbing: (await import("./served-session-plumbing.js")).servedSessionPlumbing(e) });
}
var jQr = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function WQr(e, i = {}) {
  let o = { status: "disabled" }, s = (u, p) => t(`[remote-tools] ${u}: ${p}`), n = [], l = (u) => {
    let p = n ?? [];
    n = void 0, p.forEach(([_, D]) => {
      try {
        u(_, D);
      } catch {
        s(_, D);
      }
    });
  }, v = i.onNotice ?? s, h = false, r, A, S = e.catch((u) => (t(`[deviceBind] attach binding failed unexpectedly: ${d(u)}`), o)).then(async (u) => {
    if (u.status !== "bound" || nwe(u.toolHostLink)) return u;
    if (h) return o;
    let p = i.loadHoldSettings ? await i.loadHoldSettings() : (await import("../settings/hold-settings-beside-a-helper.js")).holdSettingsBesideAHelper;
    if (h) return o;
    return r = p((_, D) => n ? void n.push([_, D]) : v(_, D)), A = bt(async () => r?.end()), l(v), u;
  });
  return S.then(() => {
    if (r !== void 0) g("attach_settings_held_beside_helper");
  }, (u) => {
    m("attach_settings_held_beside_helper", "hold_failed"), l(s), t(`[deviceBind] attach could not hold the settings beside the session's helper: ${d(u)}`);
  }).catch(() => {
  }), { binding: S.catch(() => o), kept: S.then(() => true, () => false), end: () => {
    h = true, A?.(), r?.end();
  } };
}
function GQr(e) {
  let i = e.binding.catch((n) => (t(`[deviceBind] attach binding failed unexpectedly: ${d(n)}`), { status: "disabled" })), o = false, s;
  return i.then((n) => {
    if (o || n.status !== "bound" || !nwe(n.toolHostLink)) return;
    s = (e.startRegistration ?? H5t)({ sessionId: e.sessionId, getAccessToken: e.getAccessToken, orgUuid: e.orgUuid, getDeviceId: () => n.deviceId, cloudClient: e.cloudClient, storageV5: e.storageV5, ...e.dirSync !== void 0 && { dirSync: e.dirSync }, ...e.folderRelation !== void 0 && { folderRelation: e.folderRelation }, ...e.onNotice && { onNotice: e.onNotice }, ...e.servedSettingsChanged && { servedSettingsChanged: e.servedSettingsChanged }, ...e.deviceMcpQuestion && { deviceMcpQuestion: e.deviceMcpQuestion } });
  }).catch((n) => {
    t(`[deviceBind] attach could not start the device registration: ${d(n)}`);
  }), { announceSettled: (n) => s?.announceSettled(n), serving: i.then(() => s?.serving), notice: i.then((n) => n.status === "unbound" ? { text: _zn(n.reason), toast: true } : n.status === "created_unbound" ? { text: yzn(n.reason), toast: true } : n.status === "bound" && e.toolServingOn && !nwe(n.toolHostLink) ? _Hs(n.toolHostLink) : void 0), stop: async () => {
    o = true, await s?.stop();
  }, heldServedCall: (n) => s?.heldServedCall(n) ?? Jq };
}
function y(e) {
  return a("tengu_device_bind_attach", { outcome: c(e) }), f("device_bind_attach", e), { status: "unbound", reason: e };
}
function B(e, i) {
  if (a("tengu_device_bind_attach", { outcome: c(e) }), e === "session_unreadable") f("device_bind_attach", e);
  else m("device_bind_attach", e);
  return t(`[deviceBind] attach could not check the session's binding (${e}): ${d(i)}`), { status: "unbound", reason: e };
}
export {
  $Qr,
  BQr,
  FQr,
  GQr,
  NQr,
  UQr,
  WQr,
  dur,
  jQr,
  nEi,
  rEi
};
