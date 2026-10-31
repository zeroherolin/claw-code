// linux/tasks/queued-command.js — Claude Code 2.1.310（linux）模块 chunk-7cceajkt.js
import { vi, nt, U, q } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { fun } from "../context/chunk-a8653d40.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { zL } from "../shared/chunk-9d4f4f95.js";
class f {
  #e = /* @__PURE__ */ new Map();
  #n;
  #t = /* @__PURE__ */ new Map();
  #s = 0;
  #i = false;
  #o = false;
  savesWith(e) {
    this.#n = e;
  }
  hold(e, n, s) {
    if (this.#n?.isOn()) this.#t.delete(e), this.#e.set(e, { ending: n, deleteFile: s, lostAtHold: this.#n.lostSoFar() });
  }
  forget(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  withdraw(e) {
    let n = [];
    for (let [s, { ending: i, deleteFile: d }] of this.#e) if (i.toolUseId !== void 0 && e(i.toolUseId)) {
      let r = this.#t.has(s);
      this.forget(s), d(r), n.push(s), t(`MCP task endings: a rewind removes the call that started task ${s}, so its saved ending is being deleted`);
    }
    return n;
  }
  get isConversationSaved() {
    return this.#n?.isOn() ?? false;
  }
  isHeld(e) {
    return this.#e.has(e);
  }
  look(e, n) {
    if (this.#e.size === 0) return;
    let s = q(), i = /* @__PURE__ */ new Map();
    for (let d = 0; d < n; d++) {
      let r = e[d], o = Ewo(r);
      if (o !== void 0) {
        let a = this.#e.get(o);
        if (a?.ending.sessionId === s && a.ending.runId === sCr(r)) i.set(o, r.uuid);
      } else if (i.size === 0) continue;
      else if (r.type === "system" && r.subtype === "compact_boundary") i.clear();
      else if (g(r)) {
        for (let [a, u] of i) this.#t.set(a, [u, r.uuid]);
        i.clear();
      }
    }
    return this.#s++, (d) => {
      if (this.#s--, d) this.#a();
      else this.#d([...this.#e.keys()]);
    };
  }
  #r() {
    if (this.#s > 0) return [];
    let e = [];
    for (let [n, s] of this.#t) {
      let i = this.#e.get(n);
      if (i !== void 0) e.push([n, i, s]);
    }
    return e;
  }
  #d(e) {
    for (let n of e) this.#e.delete(n), this.#t.delete(n), t(`MCP task endings: part of the conversation may not have been saved, so the saved ending of task ${n} is left for the next resume`, { level: "warn" });
  }
  async #a() {
    let e = this.#n;
    if (e === void 0) return;
    if (this.#i) {
      this.#o = true;
      return;
    }
    this.#i = true;
    try {
      for (let n = this.#r(); n.length > 0; n = this.#r()) {
        this.#o = false;
        let s = await e.save(n.flatMap(([, , o]) => o)).catch(() => false), i = e.lostSoFar(), d = n.filter(([o, a]) => this.#e.get(o) === a), r = d.filter(([, o]) => o.lostAtHold === i);
        if (this.#d(d.filter(([, o]) => o.lostAtHold !== i).map(([o]) => o)), !s) {
          if (this.#o) continue;
          if (r.length > 0) t(`MCP task endings: the conversation is not confirmed saved, so ${r.length} saved ending(s) are kept and checked again at the next save or resume`);
          return;
        }
        for (let [o, a] of r) this.#e.delete(o), this.#t.delete(o), a.deleteFile(true), t(`MCP task endings: the model has read the notification of task ${o}, so its saved ending is being deleted`);
      }
    } catch (n) {
      l(n);
    } finally {
      this.#i = false;
    }
  }
}
function g(e) {
  if (e.type !== "assistant" || e.message.model === vi) return false;
  let { content: n } = e.message;
  return Array.isArray(n) && n.some((s) => s.type === "tool_use" || s.type === "text" && s.text.trim() !== "");
}
var R1e = new nt(() => new f());
function Hxs() {
  return R1e.peek(U())?.isConversationSaved ?? false;
}
function B1n(e, n, s) {
  try {
    R1e.peek(U())?.hold(e, n, s);
  } catch (i) {
    l(i);
  }
}
function Lxs(e) {
  R1e.peek(U())?.forget(e);
}
function jHt(e, n, s) {
  try {
    let i = R1e.peek(s ?? U())?.look(e, n);
    return i && ((d) => {
      try {
        i(d);
      } catch (r) {
        l(r);
      }
    });
  } catch (i) {
    l(i);
    return;
  }
}
function Ewo(e) {
  return fun.exec(c(e) ?? "")?.[1];
}
function sCr(e) {
  if (e.type === "user") return e.origin?.kind === "task-notification" && e.origin.subkind === void 0 ? zL(e.origin.runId) : void 0;
  return e.type === "attachment" && e.attachment?.type === "queued_command" && e.attachment.commandMode === "task-notification" && (e.attachment.origin == null || e.attachment.origin.kind === "task-notification" && e.attachment.origin.subkind === void 0) ? zL(e.attachment.runId) : void 0;
}
function c(e) {
  if (sCr(e) === void 0) return;
  if (e.type === "attachment") return e.attachment.type === "queued_command" && typeof e.attachment.prompt === "string" ? e.attachment.prompt : void 0;
  let n = e.type === "user" ? e.message?.content : void 0, s = Array.isArray(n) ? n[0] : n;
  if (typeof s === "string") return s;
  return typeof s === "object" && s !== null && "text" in s && typeof s.text === "string" ? s.text : void 0;
}
export {
  B1n,
  Ewo,
  Hxs,
  Lxs,
  R1e,
  jHt,
  sCr
};
