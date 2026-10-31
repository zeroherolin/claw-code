// darwin/remote/fetch-failed.js — Claude Code 2.1.310（darwin）模块 chunk-j21cee0s.js
import { uc } from "../agents/chunk-93a99f2c.js";
import { nt } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { KL } from "../terminal/chunk-3ca478a4.js";
import { pZn } from "../telemetry/service-error-detail-not-plain.js";
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { i } from "../shared/environment.js";
import { SKe, IVt, Abn } from "../agents/session-stable-address.js";
import { J8n } from "../context/session-state-changed.js";
import { Mn } from "../shared/ccd-session-mgmt.js";
var P3 = "SendFile", Azs = "Send one or more files to another Claude Code session";
function Rzs(e, r) {
  return `Send files to another Claude Code session — a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over — a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${Mn} instead. For agents inside this session (subagents, teammates), also use ${Mn} — they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${uc}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${r} MiB, at most ${e} files per send. Files must exist on the local filesystem — write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${P3}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`;
}
var IFr = "Remote Control";
function UDo(e) {
  return SKe(e) ? "cloud" : IFr;
}
var v = 3e5;
class _ {
  listed = void 0;
  inFlight = void 0;
  record(e, r, n) {
    this.listed = { at: Date.now(), listed: e, identityKey: r, truncated: n };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var b = new nt(() => new _());
async function Nyt(e = { refresh: true }) {
  {
    let { primePeerIdentityOwner: r } = import.meta.require("./adopt-self-bridge-title-from-roster.js");
    await r(e);
  }
}
function p() {
  let { getPeerBridgeIdentity: e } = import.meta.require("./adopt-self-bridge-title-from-roster.js"), r = e();
  return r?.live ? r.key : null;
}
async function $4n(e, r) {
  {
    let n = p();
    if (!n) return { rows: [], failed: false, identityKey: null };
    let o = b.of(e), s = o.inFlight;
    if (s !== void 0 && s.identityKey === n) return s.promise;
    let { listBridgePeerSessions: a } = import.meta.require("./classify-bridge-send-error.js"), l = { record: void 0 }, c = Date.now(), f = (async () => {
      try {
        let g = { failed: false, truncated: false }, h;
        try {
          h = await a(g, r);
        } catch (y) {
          return t(`[bridge:population] fetch threw: ${d(y)} — treated as failed`, { level: "warn" }), { rows: [], failed: true, identityKey: n };
        }
        return t(`[bridge:population] fetched ${h.length} rows in ${Date.now() - c}ms${g.failed ? " (FAILED — not recordable)" : ""}${g.truncated ? " (truncated at page budget)" : ""}`), { rows: h, failed: g.failed, ...g.truncated && { truncated: true }, identityKey: n };
      } finally {
        o.settle(l.record);
      }
    })();
    return l.record = { identityKey: n, promise: f }, o.begin(l.record), f;
  }
  return { rows: [], failed: false, identityKey: null };
}
function U4n(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return false;
}
function ocn(e, r, n) {
  {
    let o = p();
    if (!o) return;
    if (r.identityKey !== o) {
      t("[bridge:population] walk ran under a previous identity — ignoring its outcome for the current one");
      return;
    }
    let s = b.of(e);
    if (r.failed) {
      let a = s.listed;
      if (a !== void 0 && a.identityKey === o) s.forget(), t("[bridge:population] failed walk — cleared the printed set (going cold, never sticky)");
      return;
    }
    s.record(n, o, r.truncated === true), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}
function B4n(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let o = b.of(e), s = o.listed;
    if (s !== void 0 && s.identityKey === n) o.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function j4n(e) {
  return BDo(e)?.rows;
}
function BDo(e) {
  {
    let r = p(), n = b.of(e).listed;
    if (!r || n === void 0 || n.identityKey !== r) return;
    let o = Date.now() - n.at;
    if (o >= 0 && o < v) return t(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${o}ms)`), { rows: n.listed, truncated: n.truncated };
  }
  return;
}
function jDo(e, r, n) {
  let o = IVt(r), s = new Set(n.filter((a) => !Abn(r, a.id)).map((a) => rr(a.id)));
  return e.filter((a) => {
    let l = rr(a.id);
    return !o.has(l) && !s.has(l);
  });
}
function scn(e, r) {
  return jDo(e, [], r);
}
function S1t(e) {
  return e === "timeout" || e === "fetch_failed";
}
var I = 3e4, P = 5e3;
class C {
  memo = void 0;
  inFlight = void 0;
  record(e, r, n) {
    if (n !== S()) return;
    this.memo = { at: Date.now(), sessions: e, truncated: r, credential: n };
  }
  begin(e, r) {
    this.inFlight = { promise: e, credential: r };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let r = this.memo;
    if (r === void 0 || r.credential !== e) return;
    let n = Date.now() - r.at;
    return n >= 0 && n < I ? r : void 0;
  }
}
function S() {
  let { walkCredentialKey: e } = import.meta.require("./adopt-self-bridge-title-from-roster.js");
  return e();
}
var B = new nt(() => new C());
async function vQe(e, r) {
  {
    let { hasCloudPeerAccess: n } = import.meta.require("./has-cloud-peer-access.js");
    if (!n()) return { sessions: [], unavailable: "gate_off" };
    let { walkCcrSessionList: o } = import.meta.require("./walk-ccr-session-list.js"), s = B.of(e), a = S(), l = s.warm(a);
    if (l !== void 0) return { sessions: l.sessions, unavailable: void 0, ...l.truncated && { truncated: true } };
    let c = s.inFlight, f = c !== void 0 && c.credential === a ? c.promise : R(s, o, a, r), g = await Pe(f, P);
    if (g === void 0) return t(`[agents:cloud] session list not ready within ${P}ms — not searched this call, disclosing`, { level: "warn" }), { sessions: [], unavailable: "timeout" };
    if (a !== S()) return t("[agents:cloud] session list walk ran under a superseded credential — not served, disclosing", { level: "warn" }), { sessions: [], unavailable: "fetch_failed" };
    return g;
  }
  return { sessions: [], unavailable: void 0 };
}
function R(e, r, n, o) {
  let s = i.CLAUDE_CODE_REMOTE === true, a = s ? rr(i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (a === "") {
    let { getPeerBridgeIdentity: c } = import.meta.require("./adopt-self-bridge-title-from-roster.js"), f = c()?.bridgeSessionId;
    a = typeof f === "string" ? rr(f) : "";
  }
  let l = (async () => {
    let c, f = { truncated: false };
    try {
      c = await r({ status: f, throwOnError: true, exhaustive: true, includeBridgeKind: s, credentials: o });
    } catch (u) {
      return t(`[agents:cloud] session list threw: ${u instanceof TypeError ? "malformed session-list response — " : ""}${pZn(u)}`, { level: "error" }), { sessions: [], unavailable: "fetch_failed" };
    }
    let g = false;
    if (s) {
      let { isRemoteControlPeerUnreachableFromHere: u } = import.meta.require("../auth/clear-trusted-device-token.js");
      g = u();
    }
    let y = (a === "" ? c : c.filter((u) => rr(u.id) !== a)).map((u) => {
      let w = Date.parse(u.last_event_at ?? u.created_at ?? "");
      return { id: u.id, title: u.title ?? null, lastActive: Number.isNaN(w) ? void 0 : w, workerStatus: u.worker_status === "running" || u.worker_status === "idle" || u.worker_status === "requires_action" ? u.worker_status : void 0, remoteControl: u.environment_kind === "bridge", unreachableFromHere: g && u.environment_kind === "bridge", ...J8n(u.external_metadata), ...u.environment_kind === "bridge" && u.connection_status === "disconnected" && { offline: true } };
    });
    return e.record(y, f.truncated, n), { sessions: y, unavailable: void 0, ...f.truncated && { truncated: true } };
  })();
  return e.begin(l, n), l.finally(() => e.settle(l)), l;
}
function W4n(e) {
  {
    let { hasCloudPeerAccess: r } = import.meta.require("./has-cloud-peer-access.js");
    if (!r()) return;
    return B.of(e).warm(S())?.sessions;
  }
  return;
}
var b1t = "target is an elevated-security session unreachable from a cloud session", w1t = "target session reports it cannot receive cross-session messages";
function WDo(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === b1t) return "bridge_auth";
    if (e.decisionReason.reason === w1t) return "recipient_gate_off";
  }
  return "permission_denied";
}
function Fyt(e, r, n, o) {
  try {
    let s = W4n(e)?.find((c) => rr(c.id) === rr(r));
    if (!s?.unreachableFromHere) return;
    let { formatUnreachableElevatedRefusal: a } = import.meta.require("../auth/clear-trusted-device-token.js"), l;
    try {
      l = s.acceptsPeerMessages === false ? void 0 : o?.();
    } catch {
      l = void 0;
    }
    return a(n, l === void 0 ? void 0 : { sendTool: l, sessionId: s.id });
  } catch (s) {
    t(`[agents:cloud] warm unreachable lookup failed (${KL(d(s))}) — treating as not known unreachable`, { level: "warn" });
    return;
  }
}
var icn = "can't receive cross-session messages (off in that session)";
function nGe(e, r, n) {
  try {
    let o = rr(r);
    if (!(W4n(e)?.some((a) => rr(a.id) === o && a.acceptsPeerMessages === false) === true || j4n(e)?.some((a) => rr(a.id) === o && a.acceptsPeerMessages === false) === true)) return;
    return `Not sent: '${n}' ${icn} — its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes — re-run ListAgents after they do).`;
  } catch (o) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${KL(d(o))}) — treating as unknown`, { level: "warn" });
    return;
  }
}
function G4n(e, r) {
  try {
    let n = rr(r), o = W4n(e)?.find((a) => rr(a.id) === n), s = j4n(e)?.find((a) => rr(a.id) === n);
    if (o !== void 0 && !o.remoteControl || s !== void 0 && SKe(s)) return false;
    if (s?.inboundReportUnavailable && o?.acceptsPeerMessages === void 0) return false;
    return !(o?.acceptsPeerMessages === true || s?.acceptsPeerMessages === true);
  } catch (n) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${KL(d(n))}) — treating as unreported`, { level: "warn" }), true;
  }
}
export {
  $4n,
  Azs,
  B4n,
  BDo,
  Fyt,
  G4n,
  IFr,
  Nyt,
  P3,
  Rzs,
  S1t,
  U4n,
  UDo,
  W4n,
  WDo,
  b1t,
  icn,
  j4n,
  jDo,
  nGe,
  ocn,
  scn,
  vQe,
  w1t
};
