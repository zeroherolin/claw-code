// fs/backed-up.p1qn.js — Claude Code 2.1.310 模块 chunk-p1qnbfcw.js
import { Aie } from "./async-hooks.9s1z.js";
import { qmi } from "../shared/chunk-3y73jbfr.js";
import { X, Nt } from "../shared/chunk-3kevgx4j.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
import { lstatSync as C, readFileSync as x, rmSync as S, unlinkSync as b, writeFileSync as h } from "fs";
import { join as c } from "path";
var m = "exit-cause", bCn = "session_in_use", y = "exit-detail", P = 200;
function Kw(e, t) {
  let r = t ?? process.env.CLAUDE_JOB_DIR;
  if (!r) return;
  try {
    h(c(r, m), e);
  } catch {
  }
}
function KIi(e, t, r) {
  let n = r ?? process.env.CLAUDE_JOB_DIR, o = t.trim();
  if (!n || !o) return;
  try {
    h(c(n, y), `${e}
${o.slice(0, P)}`);
  } catch {
  }
}
function Lts(e) {
  return E(c(e, m));
}
function Nts(e, t) {
  let r = E(c(e, y));
  if (!r) return;
  let n = r.indexOf(`
`);
  return n !== -1 && r.slice(0, n) === t ? r.slice(n + 1) : void 0;
}
function E(e) {
  try {
    let t = C(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        S(e, { recursive: true, force: true });
      } catch {
      }
      return;
    }
    let r = x(e, "utf8");
    return b(e), r;
  } catch {
    return;
  }
}
var Odr = /* @__PURE__ */ new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]), _ = /* @__PURE__ */ new Set(["EISDIR", "ENOTCONN", "ECONNRESET"]);
function P3t(e) {
  let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : void 0;
  return t !== void 0 && (_.has(t) || Odr.has(t));
}
function Mbe(e, t) {
  e.on("error", (r) => {
    if (r.code !== void 0 && Odr.has(r.code)) {
      try {
        e.destroy?.();
      } catch {
      }
      t?.(r.code);
    }
  });
}
function Fts(e) {
  Mbe(process.stdin, (t) => e("stdin", t)), Mbe(process.stdout, (t) => e("stdout", t)), process.stdout.on("error", () => {
    i.markErrored();
  }), Mbe(process.stderr), process.stderr.on("error", () => {
    p.giveUpOnUnflushed();
  });
}
function Mdr(e, t, r) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, r) === false ? "backed-up" : "accepted";
}
class a {
  everWritten = false;
  drainPromise = void 0;
  bytesQueued = 0;
  bytesFlushed = 0;
  notifyFlushProgress = void 0;
  notifyExternallyClocked = void 0;
  externallyClockedPromise = void 0;
  externallyClocked = false;
  errored = false;
  flushConfirmedPromise = void 0;
  flushCloseListener = void 0;
  markEverWritten() {
    this.everWritten = true;
  }
  recordQueued(e) {
    this.bytesQueued += e;
  }
  recordFlushed(e) {
    this.bytesFlushed += e, this.notifyFlushProgress?.();
  }
  markErrored() {
    this.errored = true, this.notifyFlushProgress?.();
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed;
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let e = process.stdout;
      if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise((t) => e.end(t));
    }
    return this.drainPromise;
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0) this.flushConfirmedPromise = new Promise((e) => {
      let t = () => {
        if (this.outstandingBytes() <= 0) this.notifyFlushProgress = void 0, e();
      };
      this.notifyFlushProgress = t, this.flushCloseListener = t, process.stdout.once("close", t), t();
    });
    return this.flushConfirmedPromise;
  }
  isExternallyClocked() {
    return this.externallyClocked;
  }
  ensureExternallyClockedPromise() {
    return this.externallyClockedPromise ??= new Promise((e) => {
      this.notifyExternallyClocked = e;
    });
  }
  markExternallyClocked() {
    this.externallyClocked = true, this.ensureExternallyClockedPromise(), this.notifyExternallyClocked?.(), this.notifyExternallyClocked = void 0;
  }
  reset() {
    if (this.flushCloseListener !== void 0) process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new a());
  }
}
var i = new a();
function Ur(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (Mdr(process.stdout, e, () => {
    i.recordFlushed(t);
  }) !== "dropped") i.recordQueued(t);
}
async function I3t(e = 2e3, { scaleBudgetToQueue: t = true } = {}) {
  let r = i.endStdoutOnce();
  if (r === void 0) return;
  let n = Promise.all([r, i.fullyFlushed()]);
  await Nt(t ? Promise.race([n, D(e)]) : n, t ? eXr(e) : e, "stdout drain timeout (exit)").catch(() => {
  });
}
function cie() {
  i.markExternallyClocked();
}
function $ts() {
  return i.isExternallyClocked();
}
function D(e) {
  return i.ensureExternallyClockedPromise().then(() => X(e));
}
var T = 262144, k = 3e4;
function ZYr() {
  return i.outstandingBytes();
}
function eXr(e = 2e3) {
  return Math.min(k, Math.max(e, Math.ceil(ZYr() * 1e3 / T)));
}
var v = 1048576, w = 1e4, A = Aie((e) => e());
class f {
  unflushed = { length: 0, since: 0 };
  droppedCount = 0;
  droppedTotal = 0;
  write(e, t) {
    let r = this.unflushed;
    if (t && r.length >= v && (this.droppedCount > 0 || Date.now() - r.since >= w)) {
      this.droppedCount++, this.droppedTotal++;
      return;
    }
    let n = "writing", o = () => {
      let d = n === "unflushed";
      if (n = "flushed", d) r.length -= e.length, this.reportDropped();
    };
    if (A(() => Mdr(process.stderr, e, o)) === "backed-up" && n === "writing") {
      if (n = "unflushed", r.length === 0) r.since = Date.now();
      r.length += e.length;
    }
  }
  giveUpOnUnflushed() {
    this.unflushed = { length: 0, since: 0 }, this.reportDropped();
  }
  getDroppedTotal() {
    return this.droppedTotal;
  }
  reset() {
    Object.assign(this, new f());
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < v) {
      let e = this.droppedCount;
      this.droppedCount = 0, this.write(`[stderr messages dropped before this line: ${e}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]
`, false);
    }
  }
}
var p = Ee(new f(), (e) => e.reset());
function Oz(e, { mayDrop: t = false } = {}) {
  p.write(e, t);
}
function Uts() {
  return p.getDroppedTotal();
}
function Fxe(e) {
  if (console.error(e), !qmi()) Kw("exit_with_error");
  process.exit(1);
}
function wCn(e, t) {
  let r = e;
  if (r.readableEnded || r.destroyed) return Promise.resolve(false);
  return new Promise((n) => {
    let o = (u) => {
      clearTimeout(l), e.off("end", s), e.off("close", s), e.off("data", d), n(u);
    }, s = () => o(false), d = () => {
      if (clearTimeout(l), r.readableEnded || r.destroyed) o(false);
    }, l = setTimeout(o, t, true);
    e.once("end", s), e.once("close", s), e.once("data", d);
  });
}
async function* ECn(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"), r = false, n = null, o = () => {
    r = true, n?.();
  };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!r) {
      let d = s.next();
      d.catch(() => {
      });
      let l = new Promise((g) => {
        n = () => g(t);
      }), u = await Promise.race([d, l]);
      if (n = null, u === t || u.done) return;
      yield String(u.value);
    }
  } finally {
    e.off("close", o), s.return?.().catch(() => {
    });
  }
}
export {
  $ts,
  ECn,
  Fts,
  Fxe,
  I3t,
  KIi,
  Kw,
  Lts,
  Mbe,
  Mdr,
  Nts,
  Odr,
  Oz,
  P3t,
  Ur,
  Uts,
  ZYr,
  bCn,
  cie,
  eXr,
  wCn
};
