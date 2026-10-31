// linux/remote/upgrade-teleport-cache.js — Claude Code 2.1.310（linux）模块 chunk-s86g77r1.js
import { bt, te, Vo, PR, t } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Jp, WKn, gHr } from "../core/conversation-engine.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { uae, Vlo, qlo } from "../shared/non-https.js";
import { dD, Ipo, Hpo, hvr, QQt } from "./direct-served.js";
import { Mp } from "../agents/chunk-1782da8d.js";
import { o, v, M, u } from "../vendor/zod/string-format.js";
var _ = 1, CQr = "upgrade_relay_marker";
function k(e) {
  return e === CQr;
}
var h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, E = p(() => u({ schema_version: v().int(), conversation_uuid: o().regex(h), anchor_line_uuid: o().regex(h), anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/), model: o().min(1).optional(), automation_tools: M().optional().catch(void 0) })), y = 16384;
function Qcr(e) {
  if (Buffer.byteLength(e, "utf8") > y) return { ok: false, reason: `marker exceeds the ${y}-byte cap` };
  let i;
  try {
    i = te(e);
  } catch {
    return { ok: false, reason: "marker is not valid JSON" };
  }
  let a = u({ schema_version: v().int() }).loose().safeParse(i);
  if (!a.success) return { ok: false, reason: "marker has no integer schema_version" };
  if (a.data.schema_version > _) return { ok: false, reason: `marker schema_version ${a.data.schema_version} exceeds this consumer's ceiling ${_}` };
  if (a.data.schema_version < 1) return { ok: false, reason: `marker schema_version ${a.data.schema_version} is below the producer's floor of 1` };
  let s = E().safeParse(i);
  if (!s.success) return { ok: false, reason: `marker shape invalid: ${s.error.issues[0]?.message ?? "unknown issue"}` };
  return { ok: true, marker: s.data };
}
var w = p(() => u({ type: o().optional(), subtype: o().optional(), uuid: o().optional(), content: o().optional() }).loose()), b = { armed: false, code: "latch_not_inactive", reason: "teleport state is not inactive" };
function twe(e) {
  Y(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var T = 67108864;
function x(e) {
  try {
    let i = Vo(e), a = w().safeParse(i);
    return a.success ? a.data : null;
  } catch {
    return null;
  }
}
function L({ rawSeedLines: e, liveMessages: i, ingressOrigin: a, remoteSessionId: s }) {
  if (dD().status !== "inactive") return b;
  let d = null;
  for (let c = e.length - 1; c >= 0; c--) {
    let m = e[c];
    if (m.trim() === "") continue;
    let l = x(m);
    if (l?.type === "system" && k(l.subtype)) {
      d = l;
      break;
    }
  }
  if (d === null) return { armed: false, code: "no_marker_line", reason: "no teleport marker line in the seed transcript" };
  let r = d.uuid, n = d.content;
  if (typeof r !== "string" || typeof n !== "string") return { armed: false, code: "marker_line_shape", reason: "marker line is missing its uuid or string content" };
  return Zcr({ markerLineUuid: r, markerContent: n, liveMessages: i, ingressOrigin: a, remoteSessionId: s });
}
function Zcr({ markerLineUuid: e, markerContent: i, liveMessages: a, ingressOrigin: s, remoteSessionId: d }) {
  if (dD().status !== "inactive") return b;
  let r = Qcr(i);
  if (!r.ok) return { armed: false, code: "marker_refused", reason: r.reason };
  let n = a.map((l) => l.uuid), c = n.indexOf(r.marker.anchor_line_uuid);
  if (c === -1) return { armed: false, code: "anchor_not_in_view", reason: "marker anchor line uuid is not present in the hydrated view" };
  if (n.indexOf(r.marker.anchor_line_uuid, c + 1) !== -1) return { armed: false, code: "anchor_not_unique", reason: "marker anchor line uuid occurs more than once in the hydrated view — refusing a possibly planted duplicate" };
  if (a.slice(c + 1).some((l) => l.type === "attachment" && l.attachment.type === "thinking_stripped" && gHr(l.attachment) === void 0)) return { armed: false, code: "relay_already_ended", reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view" };
  let m = n.slice(0, c + 1);
  return Ipo({ status: "active", marker: r.marker, markerLineUuid: e, preAnchorLineUuids: m, ingressOrigin: s, remoteSessionId: d }), t(`teleport relay armed (server-driven): marker line ${e}, anchor ${r.marker.anchor_line_uuid}, ${m.length} guarded pre-anchor lines`), { armed: true };
}
function Xvi(e, i) {
  if (hvr(), !qlo()) {
    twe({ outcome: "absent" });
    return;
  }
  if (i) {
    R(`boot_unreached_${e}`);
    return;
  }
  f("upgrade_teleport_cache", `boot_unreached_${e}`), twe({ outcome: "refused", error_code: `boot_unreached_${e}` }), t(`teleport relay carriers present but the resume lane exited before boot (${e}) — standard path`, { level: "warn" });
}
async function O(e, i) {
  let a = Jp(e), s = Mp(a, i);
  if (s !== void 0) {
    let r = await WKn(s.key, T, s.backend).catch((n) => {
      t(`teleport relay seed read through storage threw; falling back to the file: ${String(n)}`, { level: "warn" });
      return;
    });
    if (r === null) throw Error("seed transcript stream not found");
    if (r?.ok) return r.content;
    if (r !== void 0) {
      let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
      if (n === "ELOOP" || n === "ENXIO") throw t(`teleport relay seed read refused by storage (${n}); the file is not re-read directly`, { level: "warn" }), Error("seed transcript refused by storage: a linked or indirect transcript file is not read");
      t(`teleport relay seed read through storage failed (${r.error.code}); falling back to the file`, { level: "warn" });
    }
  }
  let { content: d } = await PR(a, T);
  return d;
}
async function Jvi(e, i, a, s) {
  try {
    let d = uae();
    if (!d) {
      let r = Vlo();
      if (r !== null) f("upgrade_teleport_cache", "env_config_refused"), twe({ outcome: "refused", error_code: "env_config_refused", cause: r }), t(`teleport relay carriers present but env config refused (${r}) — standard path`, { level: "warn" });
      else twe({ outcome: "absent" });
      return;
    }
    try {
      let r = await O(e, a), n = L({ rawSeedLines: r.split(`
`), liveMessages: i, ingressOrigin: d.ingressOrigin, remoteSessionId: d.remoteSessionId });
      if (s && !n.armed && n.code === "no_marker_line") R(n.code);
      else if (!n.armed) f("upgrade_teleport_cache", n.code), twe({ outcome: "refused", error_code: n.code }), t(`teleport relay not armed: ${n.reason}`);
      else g("upgrade_teleport_cache"), twe({ outcome: "armed" });
    } catch (r) {
      f("upgrade_teleport_cache", "boot_failed"), twe({ outcome: "refused", error_code: "boot_failed" }), t(`teleport relay boot failed: ${String(r)}`, { level: "warn" });
    }
  } finally {
    hvr();
  }
}
function R(e) {
  bt(QQt), Hpo(e), twe({ outcome: "awaiting_handoff" }), t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
export {
  CQr,
  Jvi,
  Qcr,
  Xvi,
  Zcr,
  twe
};
