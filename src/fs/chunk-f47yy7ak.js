// fs/chunk-f47yy7ak.js — Claude Code 2.1.310 模块 chunk-f47yy7ak.js
import { He } from "./async-hooks.9s1z.js";
import { Pn } from "../context/not-admin-owned.ersa.js";
import { d, v, Q_, tg } from "../telemetry/anthropic-workspace-id.36ys.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { t } from "./gitlab-runner-authentication-token.d7b0.js";
import { xe } from "../shared/chunk-fdmmynxd.js";
import { K } from "../shared/chunk-p82eferg.js";
import { s1 } from "../agents/in-process-teammate.5te1.js";
import { mKs, gKs, $k, NO, fU, hKs, zD } from "../context/envelope-pinned-id.a4yh.js";
import { hle } from "../core/conversation-engine.31gx.js";
import { Gt, Se, P, j } from "../vendor/react/chunk-s8vmszp2.js";
import { Et } from "../telemetry/chunk-q6tk46bn.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
j();
import { watch as b } from "fs";
var g = 5e3, T = 50, f = 5e3;
class vgr {
  #c = void 0;
  #d = false;
  #n = null;
  #f = null;
  #i = false;
  #o = null;
  #p = false;
  #l = null;
  #t = null;
  #b = null;
  #y = He();
  #g = 0;
  #a = false;
  #r;
  #s;
  #e = { phase: "idle" };
  #R = 0;
  #S = 0;
  #m = 0;
  #E;
  constructor(s, i = globalThis, e = () => {
  }) {
    this.#r = z() && s !== void 0 ? s : void 0, this.#s = i, this.#E = e;
  }
  #w(s) {
    let i = this.#d;
    if (this.#d = s, s && !i) this.#E();
  }
  getSnapshot = () => this.#d ? void 0 : this.#c;
  subscribe = (s) => {
    let i = this.#y.subscribe(s);
    if (this.#g++, !this.#a) this.#a = true, this.#b = mKs(this.#h), this.#k();
    let e = false;
    return () => {
      if (e) return;
      if (e = true, i(), this.#g--, this.#g === 0) this.#L();
    };
  };
  #V() {
    this.#y.emit();
  }
  #F(s) {
    if (this.#r) {
      this.#T(this.#r, s, false);
      return;
    }
    let i = fU(s);
    if (i === this.#f && this.#n !== null) return;
    this.#n?.close(), this.#n = null, this.#f = i;
    try {
      let e = b(i, this.#h);
      e.on("error", (r) => {
        if (t(`Task list watcher error: ${d(r)}`, { level: "warn" }), this.#n === e) {
          if (this.#f = null, this.#i = true, this.#t === null) this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
        }
      }), e.unref(), this.#n = e, this.#i = false;
    } catch {
    }
  }
  #T(s, i, e) {
    let r = this.#e;
    if (r.phase !== "idle" && r.listId === i && !e) return;
    if (r.phase === "live") r.subscription.unsubscribe();
    let n = ++this.#m;
    this.#e = { phase: "subscribing", listId: i, generation: n, endedEarly: false }, this.#i = true, this.#u();
    let h = (o, p) => {
      if (n !== this.#m) {
        o?.unsubscribe();
        return;
      }
      let c = this.#e;
      if (o && c.phase === "subscribing" && c.endedEarly) {
        if (o.unsubscribe(), e) this.#v(i);
        else this.#T(s, i, true);
        return;
      }
      if (o) {
        this.#e = { phase: "live", listId: i, generation: n, subscription: o, onRetry: e }, this.#i = false, this.#h();
        return;
      }
      if (t(`Task list subscription unavailable: ${p}`, { level: "warn" }), e) {
        this.#v(i);
        return;
      }
      this.#e = { phase: "idle" }, this.#i = true, this.#u();
    }, a;
    try {
      a = s.subscribe({ target: "scope", scope: { namespace: "task", listId: NO(i) } }, (o) => this.#x(o, n));
    } catch (o) {
      h(null, d(o));
      return;
    }
    a.then((o) => o.ok ? h(o.value) : h(null, Et(o.error)), (o) => h(null, d(o)));
  }
  #x(s, i) {
    let e = this.#e;
    if (e.phase === "subscribing" && e.generation === i && !s.ok) {
      e.endedEarly = true;
      return;
    }
    if (!this.#a || e.phase !== "live" || e.generation !== i) return;
    if (s.ok) {
      e.onRetry = false, this.#h();
      return;
    }
    if (t(`Task list subscription ended: ${Et(s.error)}`, { level: "warn" }), e.onRetry || !this.#r) {
      e.subscription.unsubscribe(), this.#v(e.listId);
      return;
    }
    this.#T(this.#r, e.listId, true);
  }
  #v(s) {
    this.#m++, this.#e = { phase: "givenUp", listId: s }, this.#i = true, this.#h();
  }
  #u() {
    if (!this.#a) return;
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
  }
  #h = () => {
    if (this.#l) this.#s.clearTimeout(this.#l);
    this.#l = this.#s.setTimeout(() => void this.#k(), T), this.#l.unref();
  };
  refetch = () => this.#k();
  #k = async () => {
    let s = ++this.#R, i = $k();
    this.#F(i);
    let e;
    try {
      e = await hKs(i, this.#r);
    } catch (a) {
      t(`Task list read failed: ${d(a)}`, { level: "warn" }), e = null;
    }
    if (this.#r && s < this.#S) return;
    if (this.#S = s, e === null) {
      if (this.#a) this.#i = true, this.#u();
      return;
    }
    if (this.#e.phase === "live") this.#i = false;
    let r = e.filter((a) => !a.metadata?._internal);
    if (!this.#a) return;
    let n = r.some((a) => a.status !== "completed"), h = !y(this.#c, r);
    if (h) this.#c = r;
    if (n || r.length === 0) this.#w(r.length === 0), this.#C();
    else if (this.#o === null && !this.#d) if (this.#p) t("Task list reset still in flight; not arming another hide until it settles", { level: "verbose" });
    else this.#o = this.#s.setTimeout(this.#B.bind(this, i), g), this.#o.unref();
    if (h) this.#V();
    if (this.#t) this.#s.clearTimeout(this.#t), this.#t = null;
    if (n || this.#i) {
      if (this.#e.phase === "live") return;
      this.#u();
    }
  };
  #B(s) {
    this.#o = null;
    let i = $k();
    if (i !== s) return;
    this.#p = true, zD(i, this.#r).then(async (e) => {
      if (e.length > 0 && e.every((n) => n.status === "completed") && await gKs(i, this.#r)) this.#c = [], this.#w(true);
      this.#V();
    }).catch((e) => {
      if (this.#r) this.#u();
      if (v(e) === "ELOCKED") {
        t("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
        return;
      }
      if (tg(e) || Q_(e)) {
        t(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${d(e)}`, { level: "warn" });
        return;
      }
      l(e);
    }).finally(() => {
      this.#p = false;
    });
  }
  #C() {
    if (this.#o) this.#s.clearTimeout(this.#o), this.#o = null;
  }
  #L() {
    if (this.#n?.close(), this.#n = null, this.#e.phase === "live") this.#e.subscription.unsubscribe();
    if (this.#e = { phase: "idle" }, this.#m++, this.#f = null, this.#b?.(), this.#b = null, this.#C(), this.#l) this.#s.clearTimeout(this.#l);
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#l = null, this.#t = null, this.#i = false, this.#a = false;
  }
}
var kgr = Gt(null), k = () => {
};
function u() {
  let s = Se(kgr), i = K((r) => r.teamContext);
  if (!(hle() && !Pn() && (!i || s1(i)))) return null;
  if (!s) throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
  return s;
}
function Ofe() {
  return xe(u());
}
function dro() {
  let s = u();
  P(() => {
    if (!s) return;
    return s.subscribe(k);
  }, [s]);
}
function Aps() {
  return xe(u(), S) ?? false;
}
function y(s, i) {
  if (s === void 0 || s.length !== i.length) return false;
  for (let e = 0; e < i.length; e++) {
    let r = s[e], n = i[e];
    if (r.id !== n.id || r.status !== n.status || r.subject !== n.subject || r.activeForm !== n.activeForm || r.owner !== n.owner || r.description !== n.description || !m(r.blockedBy, n.blockedBy) || !m(r.blocks, n.blocks)) return false;
  }
  return true;
}
function m(s, i) {
  if (s.length !== i.length) return false;
  for (let e = 0; e < s.length; e++) if (s[e] !== i[e]) return false;
  return true;
}
function S(s) {
  return s !== void 0 && s.length > 0;
}
export {
  Aps,
  Ofe,
  dro,
  kgr,
  vgr
};
