// darwin/remote/upgrade-teleport-cache.js — Claude Code 2.1.310（darwin）模块 chunk-q4aah97n.js
import { _t, ee, qo, MR, t } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Jf, cVn, DHr } from "../core/conversation-engine.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { Sae, Hlo, Dlo } from "../shared/non-https.js";
import { f0, Fpo, jpo, vwr, NJt } from "./direct-served.js";
import { Mf } from "../agents/chunk-1782da8d.js";
import { o, E, M, u } from "../vendor/zod/string-format.js";
var _ = 1, QJr = "upgrade_relay_marker";
function k(e) {
  return e === QJr;
}
var h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, S = f(() => u({ schema_version: E().int(), conversation_uuid: o().regex(h), anchor_line_uuid: o().regex(h), anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/), model: o().min(1).optional(), automation_tools: M().optional().catch(void 0) })), y = 16384;
function mur(e) {
  if (Buffer.byteLength(e, "utf8") > y) return { ok: false, reason: `marker exceeds the ${y}-byte cap` };
  let i;
  try {
    i = ee(e);
  } catch {
    return { ok: false, reason: "marker is not valid JSON" };
  }
  let a = u({ schema_version: E().int() }).loose().safeParse(i);
  if (!a.success) return { ok: false, reason: "marker has no integer schema_version" };
  if (a.data.schema_version > _) return { ok: false, reason: `marker schema_version ${a.data.schema_version} exceeds this consumer's ceiling ${_}` };
  if (a.data.schema_version < 1) return { ok: false, reason: `marker schema_version ${a.data.schema_version} is below the producer's floor of 1` };
  let s = S().safeParse(i);
  if (!s.success) return { ok: false, reason: `marker shape invalid: ${s.error.issues[0]?.message ?? "unknown issue"}` };
  return { ok: true, marker: s.data };
}
var w = f(() => u({ type: o().optional(), subtype: o().optional(), uuid: o().optional(), content: o().optional() }).loose()), v = { armed: false, code: "latch_not_inactive", reason: "teleport state is not inactive" };
function awe(e) {
  Y(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var T = 67108864;
function x(e) {
  try {
    let i = qo(e), a = w().safeParse(i);
    return a.success ? a.data : null;
  } catch {
    return null;
  }
}
function L({ rawSeedLines: e, liveMessages: i, ingressOrigin: a, remoteSessionId: s }) {
  if (f0().status !== "inactive") return v;
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
  return gur({ markerLineUuid: r, markerContent: n, liveMessages: i, ingressOrigin: a, remoteSessionId: s });
}
function gur({ markerLineUuid: e, markerContent: i, liveMessages: a, ingressOrigin: s, remoteSessionId: d }) {
  if (f0().status !== "inactive") return v;
  let r = mur(i);
  if (!r.ok) return { armed: false, code: "marker_refused", reason: r.reason };
  let n = a.map((l) => l.uuid), c = n.indexOf(r.marker.anchor_line_uuid);
  if (c === -1) return { armed: false, code: "anchor_not_in_view", reason: "marker anchor line uuid is not present in the hydrated view" };
  if (n.indexOf(r.marker.anchor_line_uuid, c + 1) !== -1) return { armed: false, code: "anchor_not_unique", reason: "marker anchor line uuid occurs more than once in the hydrated view — refusing a possibly planted duplicate" };
  if (a.slice(c + 1).some((l) => l.type === "attachment" && l.attachment.type === "thinking_stripped" && DHr(l.attachment) === void 0)) return { armed: false, code: "relay_already_ended", reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view" };
  let m = n.slice(0, c + 1);
  return Fpo({ status: "active", marker: r.marker, markerLineUuid: e, preAnchorLineUuids: m, ingressOrigin: s, remoteSessionId: d }), t(`teleport relay armed (server-driven): marker line ${e}, anchor ${r.marker.anchor_line_uuid}, ${m.length} guarded pre-anchor lines`), { armed: true };
}
function Dvi(e, i) {
  if (vwr(), !Dlo()) {
    awe({ outcome: "absent" });
    return;
  }
  if (i) {
    b(`boot_unreached_${e}`);
    return;
  }
  p("upgrade_teleport_cache", `boot_unreached_${e}`), awe({ outcome: "refused", error_code: `boot_unreached_${e}` }), t(`teleport relay carriers present but the resume lane exited before boot (${e}) — standard path`, { level: "warn" });
}
async function O(e, i) {
  let a = Jf(e), s = Mf(a, i);
  if (s !== void 0) {
    let r = await cVn(s.key, T, s.backend).catch((n) => {
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
  let { content: d } = await MR(a, T);
  return d;
}
async function Lvi(e, i, a, s) {
  try {
    let d = Sae();
    if (!d) {
      let r = Hlo();
      if (r !== null) p("upgrade_teleport_cache", "env_config_refused"), awe({ outcome: "refused", error_code: "env_config_refused", cause: r }), t(`teleport relay carriers present but env config refused (${r}) — standard path`, { level: "warn" });
      else awe({ outcome: "absent" });
      return;
    }
    try {
      let r = await O(e, a), n = L({ rawSeedLines: r.split(`
`), liveMessages: i, ingressOrigin: d.ingressOrigin, remoteSessionId: d.remoteSessionId });
      if (s && !n.armed && n.code === "no_marker_line") b(n.code);
      else if (!n.armed) p("upgrade_teleport_cache", n.code), awe({ outcome: "refused", error_code: n.code }), t(`teleport relay not armed: ${n.reason}`);
      else g("upgrade_teleport_cache"), awe({ outcome: "armed" });
    } catch (r) {
      p("upgrade_teleport_cache", "boot_failed"), awe({ outcome: "refused", error_code: "boot_failed" }), t(`teleport relay boot failed: ${String(r)}`, { level: "warn" });
    }
  } finally {
    vwr();
  }
}
function b(e) {
  _t(NJt), jpo(e), awe({ outcome: "awaiting_handoff" }), t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
export {
  Dvi,
  Lvi,
  QJr,
  awe,
  gur,
  mur
};
