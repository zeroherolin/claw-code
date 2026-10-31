// darwin/context/stream-no-events-fallback-warning.js — Claude Code 2.1.310（darwin）模块 chunk-gy4whea6.js
import { nt, U, Cu } from "./not-admin-owned.js";
import { v } from "../telemetry/anthropic-workspace-id.js";
import { hst } from "../git/utf-8.js";
import { Tc } from "./chunk-3825aa29.js";
import { Wh } from "../shared/chunk-65fb1c9c.js";
async function ab(e, t, { concurrency: n = Number.POSITIVE_INFINITY, stopOnError: r = true, signal: o } = {}) {
  return new Promise((i, s) => {
    if (e[Symbol.iterator] === void 0 && e[Symbol.asyncIterator] === void 0) throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);
    if (typeof t !== "function") throw TypeError("Mapper function is required");
    if (!(Number.isSafeInteger(n) && n >= 1 || n === Number.POSITIVE_INFINITY)) throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);
    let a = [], c = [], d = /* @__PURE__ */ new Map(), p = false, S = false, y = false, C = 0, f = 0, B = e[Symbol.iterator] === void 0 ? e[Symbol.asyncIterator]() : e[Symbol.iterator](), h = () => {
      l(o.reason);
    }, u = () => {
      o?.removeEventListener("abort", h);
    }, k = (m) => {
      i(m), u();
    }, l = (m) => {
      p = true, S = true, s(m), u();
    };
    if (o) {
      if (o.aborted) l(o.reason);
      o.addEventListener("abort", h, { once: true });
    }
    let b = async () => {
      if (S) return;
      let m = await B.next(), _ = f;
      if (f++, m.done) {
        if (y = true, C === 0 && !S) {
          if (!r && c.length > 0) {
            l(AggregateError(c));
            return;
          }
          if (S = true, d.size === 0) {
            k(a);
            return;
          }
          let g = [];
          for (let [E, j] of a.entries()) {
            if (d.get(E) === I) continue;
            g.push(j);
          }
          k(g);
        }
        return;
      }
      C++, (async () => {
        try {
          let g = await m.value;
          if (S) return;
          let E = await t(g, _);
          if (E === I) d.set(_, E);
          a[_] = E, C--, await b();
        } catch (g) {
          if (r) l(g);
          else {
            c.push(g), C--;
            try {
              await b();
            } catch (E) {
              l(E);
            }
          }
        }
      })();
    };
    (async () => {
      for (let m = 0; m < n; m++) {
        try {
          await b();
        } catch (_) {
          l(_);
          break;
        }
        if (y || p) break;
      }
    })();
  });
}
var I = Symbol("skip");
import { promisify as O } from "util";
import { constants as q, deflateRaw as W, deflateRawSync as K, inflateRaw as H, inflateRawSync as V } from "zlib";
var R = 131072, Y = 32768, Z = 4 * R, X = 32, Q = 2, J = hst, M = 21e4, ee = 256, w = { messages: '"messages":[', system: '],"system":', endOfSystemBlock: '"},{' }, te = 1024;
function P(e = J) {
  return { blocks: /* @__PURE__ */ new Map(), storedBytes: 0, maxStoredBytes: e, evictedForSpaceCount: 0, generation: 0, cancelIdleDrop: void 0, pooledCompression: Promise.resolve() };
}
function fwt(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, e.generation++;
}
function oGo({ body: e, level: t, store: n, clock: r }) {
  let o = ne(e), i = re(e, o, t), s = r.monotonicNow(), a = 0, c = 0, d = o.map((p, S) => {
    let y = N(n, i[S], s);
    if (y !== void 0) a++, c += p.end - p.start;
    return y;
  });
  if (n.blocks.size > 0) z(n, r);
  return { body: e, level: t, blocks: o, keys: i, reused: d, reusedBlockCount: a, reusedBytes: c, generation: n.generation };
}
function iJs({ keys: e, reused: t }) {
  return e.some((n, r) => n !== void 0 && t[r] === void 0);
}
async function aJs(e, t, n, r) {
  let o = await iGo(e, t, n, r), i = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]), s = Buffer.alloc(10);
  return s[0] = 3, s.writeUInt32LE(Bun.hash.crc32(e.body), 2), s.writeUInt32LE(e.body.length % 4294967296, 6), Buffer.concat([i, ...o, s]);
}
class mwt extends Error {
  fault;
  constructor(e, t) {
    super("Request body gzip: a newly compressed block failed its check", t);
    this.fault = e;
  }
}
function sGo(e) {
  let t = v(e);
  return t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR" ? t : void 0;
}
async function iGo(e, t, n, { signal: r, stopIf: o, inBackground: i = false } = {}) {
  let { body: s, level: a, blocks: c, keys: d, reused: p, generation: S } = e, y;
  if (!i && s.length - e.reusedBytes <= Z) y = c.map((f, B) => {
    let h = p[B];
    if (h !== void 0) return h;
    let u = s.subarray(f.start, f.end), k = T(s, f, a), l = K(u, k);
    try {
      A(u, l, V(l, k));
    } catch (b) {
      throw x(b);
    }
    return l;
  });
  else {
    let B = (i ? Promise.resolve() : t.pooledCompression).then(() => {
      r?.throwIfAborted();
      let h = n.monotonicNow();
      return ab(c, async (u, k) => {
        if (o?.()) throw Error("Request body gzip: compression stopped");
        if (p[k] !== void 0) return p[k];
        let l = t.generation === S ? N(t, d[k], h) : void 0;
        if (l !== void 0) return e.reusedBlockCount++, e.reusedBytes += u.end - u.start, l;
        let b = s.subarray(u.start, u.end), m = T(s, u, a), _ = await oe(b, m);
        try {
          A(b, _, await se(_, m));
        } catch (g) {
          throw x(g);
        }
        return _;
      }, { concurrency: i ? Q : X, signal: r });
    });
    if (!i) t.pooledCompression = B.then(() => {
    }, () => {
    });
    y = await B;
  }
  if (t.generation !== S) return y;
  let C = n.monotonicNow();
  return y.forEach((f, B) => {
    let h = d[B];
    if (h !== void 0 && !t.blocks.has(h)) {
      let u = f.buffer.byteLength === f.length;
      ae(t, h, u ? f : Buffer.copyBytesFrom(f), C);
    }
  }), de(t, C), z(t, n), y;
}
function ne(e) {
  let t = e.lastIndexOf(w.system), n = t === -1 ? -1 : e.indexOf(w.endOfSystemBlock, t), r = [e.indexOf(w.messages), t, n !== -1 && n - t <= te ? n + 2 : -1, e.length], o = [], i = 0;
  for (let s of r) {
    if (s <= i) continue;
    for (let a = i; a < s; a += R) o.push({ start: a, end: Math.min(a + R, s), dictionaryStart: Math.max(a - Y, i) });
    i = s;
  }
  return o;
}
function re(e, t, n) {
  let r = t.map((o) => o.end - o.start === R ? Bun.SHA256.hash(e.subarray(o.start, o.end), "base64") : void 0);
  return t.map((o, i) => {
    let s = r[i], a = o.dictionaryStart < o.start ? r[i - 1] : "none";
    return s === void 0 || a === void 0 ? void 0 : `${n}:${a}:${s}`;
  });
}
function oe(e, t) {
  return O(W)(e, t);
}
function se(e, t) {
  return O(H)(e, t);
}
function T(e, t, n) {
  return { level: n, finishFlush: q.Z_SYNC_FLUSH, chunkSize: R, ...t.dictionaryStart < t.start && { dictionary: e.subarray(t.dictionaryStart, t.start) } };
}
function x(e) {
  let t = sGo(e);
  return t === void 0 ? e : new mwt(t, { cause: e });
}
var ie = 65535;
function A(e, t, n) {
  if (!n.equals(e)) throw new mwt("inflates_to_other_bytes");
  if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ie) throw new mwt("no_flush_marker");
}
function N(e, t, n) {
  let r = t === void 0 ? void 0 : e.blocks.get(t);
  if (t === void 0 || r === void 0) return;
  return e.blocks.delete(t), e.blocks.set(t, { compressed: r.compressed, lastUsedAt: n }), r.compressed;
}
function ae(e, t, n, r) {
  let o = { compressed: n, lastUsedAt: r };
  e.blocks.set(t, o), e.storedBytes += G(o);
}
function de(e, t) {
  for (let [n, r] of e.blocks) {
    let o = e.storedBytes > e.maxStoredBytes;
    if (!o && t - r.lastUsedAt < M) return;
    if (e.blocks.delete(n), e.storedBytes -= G(r), o) e.evictedForSpaceCount++;
  }
}
function z(e, t) {
  let n = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = t.setTimeout(() => {
    let r = n.deref();
    if (r !== void 0) fwt(r);
  }, M, { unref: true });
}
function G(e) {
  return ee + e.compressed.length;
}
function D() {
  return /* @__PURE__ */ new WeakMap();
}
function lJs(e, t, n) {
  let r = e.get(t);
  if (r?.fired) return { kind: "already_fired" };
  let o = n?.input_tokens ?? 0, i = n?.cache_read_input_tokens ?? 0, s = n?.cache_creation_input_tokens ?? 0, a = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0), c = s > 0 ? s : a;
  if (o + i + c <= 0) return { kind: "no_usage" };
  if (o < 2e4 || c >= 0.1 * o) {
    let p = r ?? { consecutive: 0, fired: false, okEmitted: false };
    if (!r) e.set(t, p);
    if (p.consecutive = 0, !p.okEmitted && i + c > 0) return p.okEmitted = true, { kind: "confirm" };
    return { kind: "healthy" };
  }
  let d = r ?? { consecutive: 0, fired: false, okEmitted: false };
  if (!r) e.set(t, d);
  if (d.consecutive++, d.consecutive >= 3) return d.fired = true, { kind: "fire", consecutive: d.consecutive, inputTokens: o, cacheReadTokens: i, cacheCreationTokens: c };
  return { kind: "counted", consecutive: d.consecutive };
}
var ntt = "root";
function TF(e) {
  return e ?? "root";
}
var L = 256;
class F {
  promptCacheBreak = { previousStateBySource: /* @__PURE__ */ new Map(), hydrationAttempted: false, pendingPersist: Promise.resolve(), latestQueuedPersist: null, hashSalt: null, summaryForks: /* @__PURE__ */ new Map(), parkedAgentBaselines: /* @__PURE__ */ new Map(), parkedBy: null, classifierLines: /* @__PURE__ */ new Map(), classifierCompactions: /* @__PURE__ */ new Map() };
  threadDecisionTracker = void 0;
  threadInheritedFields = { storedToolsHashByThread: /* @__PURE__ */ new Map(), breakerTripped: false };
  threadDropRecreate = /* @__PURE__ */ new Map();
  threadRequestEnds = /* @__PURE__ */ new Map();
  dumpPrompts = { recentRequests: [], stateByAgent: /* @__PURE__ */ new Map(), retiredInitHashes: new Tc({ max: 1e3 }), appendQueue: Wh() };
  requestReplay = { chains: /* @__PURE__ */ new Map(), chainClears: 0, hashMemos: /* @__PURE__ */ new WeakMap(), unrecordableShapes: /* @__PURE__ */ new Set() };
  lastIngressUuidBySession = /* @__PURE__ */ new Map();
  cacheCoverage = D();
  ccsSenderAddr = { asking: /* @__PURE__ */ new Map(), held: /* @__PURE__ */ new Map() };
  gzipRequestBody = { latchedOff: false, rejectedThisProcess: false, persistedLatchChecked: false, persistedLatchInEffect: false, telemetryByClientRequestId: new Tc({ max: L }), dispatchAtByClientRequestId: new Tc({ max: L }), ccrWorkerSkipReasonsLogged: /* @__PURE__ */ new Set(), blockStore: P(), blocksSwitchedOff: false, blocksBuildGeneration: void 0, blockGzippedResponses: /* @__PURE__ */ new WeakSet() };
  sentPrefix = { ledger: void 0, mode: void 0, persist: Promise.resolve(), persisted: void 0, pendingSeed: void 0, lastReport: /* @__PURE__ */ new WeakMap(), lastVerdict: /* @__PURE__ */ new WeakMap(), renderEpochs: /* @__PURE__ */ new WeakMap(), memoryEpochs: /* @__PURE__ */ new WeakMap(), announced: /* @__PURE__ */ new WeakMap(), excuse: /* @__PURE__ */ new WeakMap(), staged: /* @__PURE__ */ new WeakMap(), boundVerdict: /* @__PURE__ */ new WeakMap() };
  bindingDrops = { seenBlocks: void 0, threadsRead: new Tc({ max: 512 }) };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new Tc({ max: 64 });
  skillHealthMap = void 0;
  headerMemberDropsNoted = /* @__PURE__ */ new Set();
  firedOnceKeys = /* @__PURE__ */ new Set();
  hasFired(e) {
    return this.firedOnceKeys.has(e);
  }
  markFired(e) {
    this.firedOnceKeys.add(e);
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return false;
    return this.firedOnceKeys.add(e), true;
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning");
  }
}
var ce = new nt(() => new F());
function Ci() {
  return ce.of(U());
}
var aGo = /* @__PURE__ */ new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function dJs() {
  return Cu((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    let n = Ci();
    if (n.resetStreamNoEventsWarningLatch(), aGo.has(t)) {
      n.threadDropRecreate.delete(ntt), n.threadRequestEnds.delete(ntt);
      let r = n.gzipRequestBody;
      if (fwt(r.blockStore), r.blocksSwitchedOff === "until_next_conversation") r.blocksSwitchedOff = false;
    }
  });
}
export {
  Ci,
  TF,
  aGo,
  aJs,
  ab,
  dJs,
  fwt,
  iGo,
  iJs,
  lJs,
  mwt,
  ntt,
  oGo,
  sGo
};
