// darwin/agents/chunk-a6cc40b3.js — Claude Code 2.1.310（darwin）模块 chunk-9e0559c6.js
import { wn } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { gM } from "./session-stable-address.js";
import { CB, _O } from "../core/conversation-engine.js";
import { us } from "./in-process-teammate.b77f.js";
import { Yu } from "../git/bridge-child-tool-diff.js";
function f(r, i) {
  if (Object.hasOwn(r, i)) return r[i];
  return Object.values(r).find((n) => Yu(n) && n.identity.resumableAgentId === i);
}
function IFn(r, i) {
  return new Map([...r].filter(([, n]) => {
    let e = f(i, n);
    if (e === void 0) return false;
    if (!us(e.status)) return true;
    return _O(e) && "keepaliveReasons" in e && e.keepaliveReasons !== void 0 && [...e.keepaliveReasons].some((s) => s !== CB);
  }));
}
var Aut = { markTypeInvoked() {
}, registerName() {
}, allocateName(r) {
  return r;
}, nameOf() {
  return;
}, clearTodos() {
}, setTeammate() {
}, setSendMessagePin() {
} };
function gTs(r, i) {
  return { markTypeInvoked(n) {
    i((e) => e.agentTypesInvokedThisSession.has(n) ? e : { ...e, agentTypesInvokedThisSession: new Set(e.agentTypesInvokedThisSession).add(n) });
  }, registerName(n, e) {
    if (gM(n)) {
      t(`[registerName] refused reserved or agent-id-shaped name "${n}" for ${e}`);
      return;
    }
    i((s) => {
      if (s.agentNameRegistry.get(n) === e) return s;
      let a = new Map(s.agentNameRegistry);
      return a.set(n, e), { ...s, agentNameRegistry: a };
    });
  }, allocateName(n) {
    let e = u(n), s = r(), a = s.agentNameRegistry, g = new Set(Object.values(s.teamContext?.teammates ?? {}).map((o) => o.name));
    for (let o = 1; ; o++) {
      let m = o === 1 ? e : `${e}-${o}`;
      if (gM(m) || g.has(m)) continue;
      let d = a.get(m);
      if (d === void 0 || f(s.tasks, d) === void 0) return m;
    }
  }, nameOf(n) {
    for (let [e, s] of r().agentNameRegistry) if (s === n) return e;
    return;
  }, clearTodos(n) {
    i((e) => {
      if (!(n in e.todos)) return e;
      let { [n]: s, ...a } = e.todos;
      return { ...e, todos: a };
    });
  }, setSendMessagePin(n, e) {
    i((s) => {
      let a = Object.hasOwn(s.sendMessagePins, n) ? s.sendMessagePins[n] : void 0;
      if (wn(a, e)) return s;
      return { ...s, sendMessagePins: { ...s.sendMessagePins, [n]: e } };
    });
  }, setTeammate(n, e) {
    if (e !== void 0 && gM(e.name)) {
      t(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${n}`);
      return;
    }
    i((s) => {
      let a = s.teamContext;
      if (!a) return s;
      let g = a.teammates?.[n];
      if (e === void 0) {
        if (!g) return s;
        let { [n]: o, ...m } = a.teammates;
        return { ...s, teamContext: { ...a, teammates: m } };
      }
      if (g === e) return s;
      return { ...s, teamContext: { ...a, teammates: { ...a.teammates, [n]: e } } };
    });
  } };
}
function u(r) {
  let i = r.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
  return i.length > 0 ? i : "agent";
}
export {
  Aut,
  IFn,
  gTs
};
