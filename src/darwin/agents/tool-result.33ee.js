// darwin/agents/tool-result.33ee.js — Claude Code 2.1.310（darwin）模块 chunk-jc4cvqy8.js
import { ht, dp } from "./chunk-5531d42a.js";
import { Sg } from "../shared/chunk-3b9c376b.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { wn } from "../context/not-admin-owned.js";
import { oc } from "./in-process-teammate.32be.js";
import { Hb } from "./swarm-team-file-update.js";
import { Bc } from "../settings/global-config-and-gates.js";
import { So, gM, mNe, X4, J4, mkt, Srt } from "./session-stable-address.js";
import { hM } from "../fs/reply-across-default-dirs.js";
import { vQe } from "../remote/fetch-failed.js";
import { sje, hxr, ako } from "../core/conversation-engine.js";
import { Mn } from "../shared/ccd-session-mgmt.js";
import { o, u, B, T } from "../vendor/zod/string-format.js";
var qlo = Object.freeze({ delivered: () => {
  return;
}, refused: () => {
  return;
}, [Symbol.dispose]: () => {
  return;
} });
function k() {
  let e = Bc();
  return { setSessionSendRunner: e.set, runSessionSend: (t) => {
    let r = e.get();
    return r ? r(t) : Promise.resolve({ send: t.raised, delivering: qlo });
  } };
}
var c = k();
var ghi = c.runSessionSend;
var hhi = "Delivered by a plugin hook; nothing else was sent.";
var yhi = c.setSessionSendRunner;
async function D_s({ session: e, to: t, message: r, resolved: d, appState: n, agentLifecycle: s, storageV5: i, credentials: p }) {
  if (typeof r !== "string") return { kind: "proceed", pin: void 0 };
  let a = h(d);
  if (a === null) return { kind: "proceed", pin: void 0 };
  let l = So(a.name), m = Object.hasOwn(n.sendMessagePins, l) ? n.sendMessagePins[l] : void 0;
  if (m !== void 0 && m.id === a.id) return { kind: "proceed", pin: m };
  if (m !== void 0) {
    let y = X4(t) !== null;
    if (!y && t === a.name && t !== m.name) return { kind: "proceed", pin: void 0 };
    if (!y) {
      let x = oc(n.teamContext), [R, P, A] = await Promise.all([x ? Hb(x, i) : null, hxr(), vQe(e, p)]), _ = J4(n, { teamFile: R, sessions: P, cloud: A.sessions, bridge: ako(e) }), g = mkt(_.byName, l);
      return { kind: "rebound", name: a.name, previous: m, next: g?.kind === "one" && g.candidate.id === a.id ? g.candidate : void 0 };
    }
  }
  let S = { id: a.id, name: a.name, ref: Srt(a.kind, a.id) };
  return s.setSendMessagePin(l, S), { kind: "proceed", pin: S };
}
function h(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return { kind: "subagent", id: e.agentId, name: e.agentName };
  }
}
var C = f(() => u({ success: T(true), pin: u({ name: o().min(1).max(hM), id: o().max(1024).refine((e) => Sg(e) !== null), ref: o().regex(new RegExp(`^${mNe}$`)) }) }));
function Klo(e) {
  let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  for (let d of e) if (d.type === "assistant") {
    let n = d.message.content;
    if (!Array.isArray(n)) continue;
    for (let s of n) if (s.type === "tool_use" && s.name === Mn) r.add(s.id);
  } else if (d.type === "user") {
    let n = d.message.content;
    if (!Array.isArray(n)) continue;
    if (n.find((p) => p.type === "tool_result" && !p.is_error && r.has(p.tool_use_id)) === void 0) continue;
    let i = C().safeParse(d.toolUseResult);
    if (!i.success) continue;
    t.set(So(i.data.pin.name), { id: i.data.pin.id, name: i.data.pin.name, ref: i.data.pin.ref });
  }
  return Object.fromEntries(t);
}
function L_s(e, t) {
  let r = Klo(e);
  return wn(r, t) ? null : r;
}
var L = f(() => u({ name: o().regex(sje).refine((e) => !gM(e)) })), D = f(() => u({ status: B(["async_launched", "completed"]), agentId: o() }));
function eHn(e, t) {
  let r = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  for (let n of e) if (n.type === "assistant" && Array.isArray(n.message.content)) {
    for (let s of n.message.content) if (s.type === "tool_use" && (s.name === ht || s.name === dp)) {
      let i = L().safeParse(s.input);
      if (i.success && !t.has(i.data.name)) r.set(s.id, i.data.name);
    }
  } else if (n.type === "user" && Array.isArray(n.message.content)) {
    let [s, ...i] = n.message.content.filter((m) => m.type === "tool_result"), p = s !== void 0 && i.length === 0 && !s.is_error ? r.get(s.tool_use_id) : void 0;
    if (p === void 0) continue;
    let a = D().safeParse(n.toolUseResult), l = a.success ? Sg(a.data.agentId) : null;
    if (l !== null) d.set(p, l);
  }
  return d.size > 0 ? new Map([...t, ...d]) : null;
}
export {
  D_s,
  Klo,
  L_s,
  eHn,
  ghi,
  hhi,
  qlo,
  yhi
};
