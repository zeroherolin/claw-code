// linux/ui/spinner-stall-cleared.js — Claude Code 2.1.310（linux）模块 chunk-jfdswx4x.js
import { F, tt, C2 } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { Vg, uit } from "../shared/chunk-d2c47492.js";
import { st, k, ue } from "../settings/global-config-and-gates.js";
import { Zw } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { wR } from "../shell/invalid-type.js";
import { le } from "../shared/chunk-4563156b.js";
import { gt, TAt, un, uE, Ri, yC } from "../fs/async-hooks.7959.js";
import { JQ } from "../api/anthropic-client.js";
import { fn, rt, s, n, ja } from "../telemetry/render-glyph-cardinality.js";
import { xW, lN, cc } from "./truncate-end.b3f5.js";
import { K, qo } from "../shared/chunk-e4a3aa33.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { bIn, pUe, UR, mUe, x_, Yg, dw } from "../shared/xterm-ghostty.js";
import { sPr } from "../core/conversation-engine.js";
import { kgn } from "../models/ccr-unsupported-default-mode-ignored.js";
import { VWe } from "../core/system-prompt-blocks.js";
import { vy } from "../git/bridge-child-tool-diff.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { gIe } from "../settings/tips-org-tips-file-load.js";
import { iL } from "../shared/active-time-ledger.js";
import { Ge } from "./aria-hidden.8741.js";
import { Tpe } from "../fs/chunk-d22723dd.js";
import { Pmr } from "./in-progress.js";
import { IW, A8t, aIn, Jxt } from "../context/not-a-retry-status.js";
import { Ee } from "./chunk-067d565d.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Dv } from "./aria-hidden.c79b.js";
import { Yy, Dxt, Awe } from "./chunk-0a333db6.js";
import { kpe } from "./aria-hidden.4e7d.js";
import { Wd } from "../shared/chunk-d08b9350.js";
import { Vh } from "../telemetry/chunk-56c542d7.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Oro, Mro, _Pt } from "../remote/bridge-failed.js";
import { wHn, Nbs } from "../shared/chunk-1b112122.js";
import { P, ee, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { $a } from "../shared/chunk-5acf247e.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
j();
var he = { r: 171, g: 43, b: 63 };
function o8t(l) {
  let f = w(97), { message: t, mode: u, messageColor: o, glimmerIndex: m, flashOpacity: g, shimmerColor: h, stalledIntensity: M, thinkingIntensity: B } = l, I = M === void 0 ? 0 : M, v = B === void 0 ? 0 : B, L = Zw(), _;
  if (f[0] !== t) {
    _ = [];
    for (const { segment: G } of $a().segment(t)) _.push({ segment: G, width: le(G) });
    f[0] = t, f[1] = _;
  } else _ = f[1];
  let O;
  if (f[2] !== t) O = le(t), f[2] = t, f[3] = O;
  else O = f[3];
  let b;
  if (f[4] !== _ || f[5] !== O) b = { segments: _, messageWidth: O }, f[4] = _, f[5] = O, f[6] = b;
  else b = f[6];
  let { segments: E, messageWidth: T } = b;
  if (!t) {
    return null;
  }
  if (I > 0) {
    let A = L[o];
    let R2;
    if (f[7] !== A || f[8] !== t || f[9] !== I) {
      R2 = vn;
      Mt: {
        let et = A ? dw(A) : null;
        if (et) {
          let z = x_(et, he, UR(I));
          let N = Yg(z);
          let d3;
          if (f[11] !== N || f[12] !== t) d3 = e(n, { color: N, children: t }), f[11] = N, f[12] = t, f[13] = d3;
          else d3 = f[13];
          let p3;
          if (f[14] !== N) p3 = e(n, { color: N, children: " " }), f[14] = N, f[15] = p3;
          else p3 = f[15];
          let x3;
          if (f[16] !== d3 || f[17] !== p3) x3 = r(Q, { children: [d3, p3] }), f[16] = d3, f[17] = p3, f[18] = x3;
          else x3 = f[18];
          R2 = x3;
          break Mt;
        }
      }
      f[7] = A, f[8] = t, f[9] = I, f[10] = R2;
    } else R2 = f[10];
    if (R2 !== vn) return R2;
    let H = I > 0.5 ? "error" : o;
    let d2;
    if (f[19] !== H || f[20] !== t) d2 = e(n, { color: H, children: t }), f[19] = H, f[20] = t, f[21] = d2;
    else d2 = f[21];
    let p2;
    if (f[22] !== H) p2 = e(n, { color: H, children: " " }), f[22] = H, f[23] = p2;
    else p2 = f[23];
    let x2;
    if (f[24] !== d2 || f[25] !== p2) x2 = r(Q, { children: [d2, p2] }), f[24] = d2, f[25] = p2, f[26] = x2;
    else x2 = f[26];
    return x2;
  }
  if (v > 0) {
    let St = L[o];
    let R2;
    if (f[27] !== St || f[28] !== t || f[29] !== L.warning || f[30] !== v) {
      R2 = vn;
      ut: {
        let Z = St ? dw(St) : null;
        let q = dw(L.warning);
        if (Z && q) {
          let mt = x_(Z, q, UR(v));
          let W = Yg(mt);
          let d3;
          if (f[32] !== W || f[33] !== t) d3 = e(n, { color: W, children: t }), f[32] = W, f[33] = t, f[34] = d3;
          else d3 = f[34];
          let p3;
          if (f[35] !== W) p3 = e(n, { color: W, children: " " }), f[35] = W, f[36] = p3;
          else p3 = f[36];
          let x3;
          if (f[37] !== d3 || f[38] !== p3) x3 = r(Q, { children: [d3, p3] }), f[37] = d3, f[38] = p3, f[39] = x3;
          else x3 = f[39];
          R2 = x3;
          break ut;
        }
      }
      f[27] = St, f[28] = t, f[29] = L.warning, f[30] = v, f[31] = R2;
    } else R2 = f[31];
    if (R2 !== vn) return R2;
    let J = v > 0.5 ? "warning" : o;
    let d2;
    if (f[40] !== J || f[41] !== t) d2 = e(n, { color: J, children: t }), f[40] = J, f[41] = t, f[42] = d2;
    else d2 = f[42];
    let p2;
    if (f[43] !== J) p2 = e(n, { color: J, children: " " }), f[43] = J, f[44] = p2;
    else p2 = f[44];
    let x2;
    if (f[45] !== d2 || f[46] !== p2) x2 = r(Q, { children: [d2, p2] }), f[45] = d2, f[46] = p2, f[47] = x2;
    else x2 = f[47];
    return x2;
  }
  if (u === "tool-use") {
    let pt = L[o];
    let ft = L[h];
    let R2;
    if (f[48] !== pt || f[49] !== g || f[50] !== t || f[51] !== o || f[52] !== ft) {
      R2 = vn;
      dt: {
        let ht = pt ? dw(pt) : null;
        let Lt = ft ? dw(ft) : null;
        if (ht && Lt) {
          let At = x_(ht, Lt, UR(g));
          const d3 = e(n, { color: Yg(At), children: t });
          let p3;
          if (f[54] !== o) p3 = e(n, { color: o, children: " " }), f[54] = o, f[55] = p3;
          else p3 = f[55];
          let x3;
          if (f[56] !== d3 || f[57] !== p3) x3 = r(Q, { children: [d3, p3] }), f[56] = d3, f[57] = p3, f[58] = x3;
          else x3 = f[58];
          R2 = x3;
          break dt;
        }
      }
      f[48] = pt, f[49] = g, f[50] = t, f[51] = o, f[52] = ft, f[53] = R2;
    } else R2 = f[53];
    if (R2 !== vn) return R2;
    let nt = g > 0.5 ? h : o;
    let d2;
    if (f[59] !== nt || f[60] !== t) d2 = e(n, { color: nt, children: t }), f[59] = nt, f[60] = t, f[61] = d2;
    else d2 = f[61];
    let p2;
    if (f[62] !== o) p2 = e(n, { color: o, children: " " }), f[62] = o, f[63] = p2;
    else p2 = f[63];
    let x2;
    if (f[64] !== d2 || f[65] !== p2) x2 = r(Q, { children: [d2, p2] }), f[64] = d2, f[65] = p2, f[66] = x2;
    else x2 = f[66];
    return x2;
  }
  let kt = m - 1, wt = m + 1;
  if (kt >= T || wt < 0) {
    let R2;
    if (f[67] !== t || f[68] !== o) R2 = e(n, { color: o, children: t }), f[67] = t, f[68] = o, f[69] = R2;
    else R2 = f[69];
    let d2;
    if (f[70] !== o) d2 = e(n, { color: o, children: " " }), f[70] = o, f[71] = d2;
    else d2 = f[71];
    let p2;
    if (f[72] !== R2 || f[73] !== d2) p2 = r(Q, { children: [R2, d2] }), f[72] = R2, f[73] = d2, f[74] = p2;
    else p2 = f[74];
    return p2;
  }
  let xt = Math.max(0, kt), Y, ot, at;
  if (f[75] !== xt || f[76] !== E || f[77] !== wt) {
    let lt = 0;
    ot = "";
    at = "";
    Y = "";
    for (const { segment: bt, width: Rt } of E) {
      if (lt + Rt <= xt) ot = ot + bt;
      else if (lt > wt) Y = Y + bt;
      else at = at + bt;
      lt = lt + Rt;
    }
    f[75] = xt, f[76] = E, f[77] = wt, f[78] = Y, f[79] = ot, f[80] = at;
  } else Y = f[78], ot = f[79], at = f[80];
  let R;
  if (f[81] !== ot || f[82] !== o) R = ot && e(n, { color: o, children: ot }), f[81] = ot, f[82] = o, f[83] = R;
  else R = f[83];
  let d;
  if (f[84] !== at || f[85] !== h) d = e(n, { color: h, children: at }), f[84] = at, f[85] = h, f[86] = d;
  else d = f[86];
  let p;
  if (f[87] !== Y || f[88] !== o) p = Y && e(n, { color: o, children: Y }), f[87] = Y, f[88] = o, f[89] = p;
  else p = f[89];
  let x;
  if (f[90] !== o) x = e(n, { color: o, children: " " }), f[90] = o, f[91] = x;
  else x = f[91];
  let Ct;
  if (f[92] !== R || f[93] !== d || f[94] !== p || f[95] !== x) Ct = r(Q, { children: [R, d, p, x] }), f[92] = R, f[93] = d, f[94] = p, f[95] = x, f[96] = Ct;
  else Ct = f[96];
  return Ct;
}
j();
function je() {
  return { toolWindowStart: null, toolWindowEnd: null, thinkingBurstStart: null, wasThinking: false };
}
function Ve(l, t) {
  let { toolWindowStart: u, toolWindowEnd: o, thinkingBurstStart: m } = l;
  if (t.hasActiveTools) {
    if (u === null || o !== null) u = t.now;
    o = null;
  } else if (u !== null && o === null) o = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) u = null, o = null;
  if (t.isThinking) {
    if (!l.wasThinking) m = t.now;
  } else m = null;
  return { toolWindowStart: u, toolWindowEnd: o, thinkingBurstStart: m, wasThinking: t.isThinking };
}
function He(l, t) {
  if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
    let u = t.now - l.toolWindowStart;
    if (u >= 2e3) return { kind: "tool-running", toolMs: u };
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return { kind: "recovering", recovery: t.outputLimitRecovery };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
    let u = l.toolWindowEnd - l.toolWindowStart;
    if (u >= 2e3) return { kind: "tool-done", toolMs: u };
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools) return { kind: "thinking", thinkingMs: l.thinkingBurstStart !== null ? t.now - l.thinkingBurstStart : 0 };
  if (typeof t.thinkingStatus === "number") return { kind: "thought-for", thoughtMs: t.thinkingStatus };
  return { kind: "none" };
}
function Ue(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let u = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((u - 1e4) / 1e4, 0), 1);
}
j();
function Fe(l, t, u = false, o = false, m) {
  let g = C(l), h = C(t), M = C(0), B = C(l), I = C(m);
  if (t > h.current || I.current !== m) I.current = m, g.current = l, h.current = t, M.current = 0, B.current = l;
  else if (t < h.current) h.current = t;
  let v;
  if (u) v = 0, g.current = l;
  else v = l - g.current;
  let L = v > 1e4 && !u, f = L ? Math.min((v - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || M.current > 0)) {
    let G = l - B.current;
    if (G >= 50) {
      let O = Math.floor(G / 50), b = M.current;
      for (let E = 0; E < O; E++) {
        let T = f - b;
        if (Math.abs(T) < 0.01) {
          b = f;
          break;
        }
        b += T * 0.1;
      }
      M.current = b, B.current = l;
    }
  } else M.current = f, B.current = l;
  let _ = o ? f : M.current;
  return { isStalled: L, stalledIntensity: _, timeSinceLastToken: v };
}
var Nn = [1e4, 45e3, 3e5], Pn = 2e3, Wn = 2e3, Dn = 200, se = 10, Gn = 1e4, $n = 2e4, jn = 3e4, Vn = 45e3;
function Hn(l) {
  let t = mUe(l, Wn);
  return Math.round(t * (bIn().length - 1));
}
function Un(l) {
  return `thought for ${Math.max(1, Math.round(l / 1e3))}s`;
}
function Fn({ attempt: l, limit: t }) {
  return l > 1 ? `picking the thought back up (${l} of ${t})` : "picking the thought back up";
}
function Kn(l) {
  if (l >= Vn) return "deep in thought";
  if (l >= jn) return "thinking some more";
  if (l >= $n) return "thinking more";
  if (l >= Gn) return "still thinking";
  return "thinking";
}
function qn(l) {
  return UR((Math.sin(l / 1e3 * Math.PI) + 1) / 2);
}
function Ke({ mode: l, reducedMotion: t, hasActiveTools: u, responseLength: o, message: m, overrideColor: g, loadingStartTime: h, totalPausedMs: M, pauseStartTime: B, thinkingStatus: I, effortSuffix: v, isCompacting: L, compactingStartTime: f, showToolCallTimer: _, outputLimitRecovery: G = null, agentId: O, glimmerParked: b = false }) {
  let [E, T] = ja(t ? null : l === "requesting" && !b ? 50 : 100), A = Date.now(), et = L && f !== null ? Math.max(0, A - f) : B !== null ? B - h - M : A - h - M, z = C(je()), N = { now: A, isThinking: l === "thinking", hasActiveTools: u, thinkingStatus: I, showToolCallTimer: _, outputLimitRecovery: G };
  z.current = Ve(z.current, N);
  let d = He(z.current, N), p = Ue(z.current, N), x = o, Mt = u || l === "thinking" || L && l !== "responding" || B !== null, { isStalled: H, stalledIntensity: St, timeSinceLastToken: Z } = Fe(T, x, Mt, t, O), q = C(/* @__PURE__ */ new Set()), mt = C(0), W = C(O);
  if (W.current !== O) W.current = O, q.current = /* @__PURE__ */ new Set(), mt.current = 0;
  if (Z === 0) {
    if (q.current.size > 0) a("tengu_spinner_stall_cleared", { max_stall_ms: Math.round(mt.current), mode: c(l), override_color: g != null, response_length: x, thresholds_fired: q.current.size }), q.current = /* @__PURE__ */ new Set(), mt.current = 0;
  } else {
    if (Z > mt.current) mt.current = Z;
    for (let X of Nn) if (Z >= X && !q.current.has(X)) q.current.add(X), a("tengu_spinner_stalled_ui", { threshold_ms: X, mode: c(l), override_color: g != null, time_since_last_token_ms: Math.round(Z), response_length: x, render_loop_dark: Z - X > 5e3 });
  }
  let ut = t ? 0 : Hn(T), J = l === "requesting" ? 50 : Dn, pt = ee(() => le(m), [m]), ft = pt + 2 * se, ht = Math.floor(T / J), Lt = t ? -100 : H ? -100 : l === "requesting" ? ht % ft - se : pt + se - ht % ft, At = t ? 0 : l === "tool-use" ? qn(T) : 0, dt = C(x), nt = C(T), kt = C(O);
  if (kt.current !== O || Math.abs(x - dt.current) > Pn) kt.current = O, dt.current = x, nt.current = T;
  if (t) dt.current = x, nt.current = T;
  else {
    let X = Math.floor((T - nt.current) / 50);
    if (X > 0) {
      nt.current += X * 50;
      for (let Et = 0; Et < X; Et++) {
        let yt = x - dt.current;
        if (yt === 0) break;
        let Ot = Math.abs(yt), Bt;
        if (Ot < 70) Bt = 3;
        else if (Ot < 200) Bt = Math.max(8, Math.ceil(Ot * 0.15));
        else Bt = 50;
        dt.current = yt > 0 ? Math.min(dt.current + Bt, x) : Math.max(dt.current - Bt, x);
      }
    }
  }
  let wt = dt.current, xt = Math.round(wt / 4), Y = C(0), ot = C(T);
  if (l !== "thinking" || u) Y.current = 0, ot.current = T;
  else if (!t && (p > 0 || Y.current > 0)) {
    let X = T - ot.current;
    if (X >= 50) {
      let Et = Math.floor(X / 50), yt = Y.current;
      for (let Ot = 0; Ot < Et; Ot++) {
        let Bt = p - yt;
        if (Math.abs(Bt) < 0.01) {
          yt = p;
          break;
        }
        yt += Bt * 0.1;
      }
      Y.current = yt, ot.current = T;
    }
  } else Y.current = p, ot.current = T;
  let at = t ? p : Y.current, lt = un(et), bt = le(lt), Rt = xt, Ct = Ri(Rt), _t = `${ne.arrowDown} ${Ct} tokens`, Wt = le(_t), It = d.kind === "thinking" ? Kn(d.thinkingMs) : "thinking", it;
  switch (d.kind) {
    case "tool-running":
      it = `running tool for ${un(d.toolMs)}`;
      break;
    case "tool-done":
      it = `ran tool for ${un(d.toolMs)}`;
      break;
    case "recovering":
      it = Fn(d.recovery);
      break;
    case "thinking":
      it = `${It}${v}`;
      break;
    case "thought-for":
      it = Un(d.thoughtMs);
      break;
    case "none":
      it = null;
      break;
  }
  let U = it ? le(it) : 0;
  return { viewportRef: E, time: T, elapsedMs: et, frame: ut, glimmerIndex: Lt, flashOpacity: At, stalledIntensity: St, thinkingIntensity: at, statusText: d, progressiveThinkingBase: It, thinkingText: it, thinkingWidth: U, timerText: lt, timerWidth: bt, totalTokens: Rt, tokenCount: Ct, tokensWidth: Wt, glimmerMessageWidth: pt };
}
function qe(l) {
  let [t, u] = y(null), o = C(null), m = C([]), g = fn();
  return P(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let h of m.current) h();
        m.current = [], o.current = Date.now(), u("thinking");
      }
    } else if (o.current !== null) {
      let h = Date.now() - o.current, M = Math.max(0, 2e3 - h);
      o.current = null;
      let B = () => {
        u(h), m.current.push(g.setTimeout(() => u(null), 2e3));
      };
      if (M > 0) m.current.push(g.setTimeout(B, M));
      else B();
    }
  }, [l, g]), P(() => () => {
    for (let h of m.current) h();
    m.current = [];
  }, []), t;
}
var Yn = le(" · "), Ye = le("thinking"), zn = 16e3, Jn = { r: 153, g: 153, b: 153 }, Qn = { r: 185, g: 185, b: 185 }, ze = 3e3, Zn = 2;
function Xn(l, t, u) {
  let o = (l - ze) / 1e3, m = l < ze ? 0 : (Math.sin(o * Math.PI * 2 / Zn) + 1) / 2, g = x_(Jn, Qn, UR(m));
  return Yg(u && t > 0 ? x_(g, u, UR(t)) : g);
}
function nn({ mode: l, reducedMotion: t, hasActiveTools: u, responseLengthRef: o, message: m, messageColor: g, shimmerColor: h, overrideColor: M, loadingStartTimeRef: B, totalPausedMsRef: I, pauseStartTimeRef: v, spinnerSuffix: L, verbose: f, columns: _, thinkingStatus: G, effortSuffix: O, isCompacting: b = false, compactingStartTime: E = null, showToolCallTimer: T = false, retryStatus: A = null, outputLimitRecovery: R = null, agentId: et }) {
  let z = Ke({ mode: l, reducedMotion: t, hasActiveTools: u, responseLength: o.current, message: m, overrideColor: M, loadingStartTime: B.current, totalPausedMs: I.current, pauseStartTime: v.current, thinkingStatus: G, effortSuffix: O, isCompacting: b, compactingStartTime: E, showToolCallTimer: T, outputLimitRecovery: R, agentId: et }), N = Zw(), d = rt(), p = Dv(f), { viewportRef: x, time: Mt, elapsedMs: H, frame: St, glimmerIndex: Z, flashOpacity: q, stalledIntensity: mt, thinkingIntensity: W, statusText: ut, progressiveThinkingBase: J, timerText: pt, timerWidth: ft, totalTokens: ht, tokenCount: Lt, tokensWidth: At, glimmerMessageWidth: dt } = z, { thinkingText: nt, thinkingWidth: kt } = z, wt = dt + 2, xt = Yn, Y = nt !== null, ot = f || Y || b || ht > 0 || H > zn || Boolean(L), at = _ - wt - 5, lt = Y && at > kt;
  if (!lt && Y && ut.kind === "thinking" && (O || J !== "thinking")) {
    if (at > Ye) nt = "thinking", kt = Ye, lt = true;
  }
  let bt = lt ? kt + xt : 0, Rt = ot && at > bt + ft, Ct = bt + (Rt ? ft + xt : 0), _t = ot && ht > 0 && at > Ct + At, Wt = lt && ut.kind === "thinking" && !L && !Rt && !_t, It = W > 0 ? dw(N.warning) : null, it = Xn(Mt, W, It), U = !It && W > 0.5 ? "warning" : void 0, X = W > 0 ? "warning" : void 0, Et = [...L ? [e(n, { dimColor: true, children: L }, "suffix")] : [], ...!d && Rt ? [e(n, { dimColor: true, children: pt }, "elapsedTime")] : [], ...!d && _t ? [r(s, { flexDirection: "row", children: [e(on, { mode: l }), r(n, { dimColor: true, children: [Lt, " tokens"] })] }, "tokens")] : [], ...!d && lt && nt ? [ut.kind === "thinking" && !t ? e(n, { color: U ?? it, children: Wt ? `(${nt})` : nt }, "thinking") : e(n, { dimColor: !X, color: X, children: nt }, "thinking")] : []], yt = Et.length > 0 ? Wt ? e(Ee, { children: Et }) : r(Q, { children: [e(n, { dimColor: true, children: "(" }), e(Ee, { children: Et }), e(n, { dimColor: true, children: ")" })] }) : null;
  if (b && A === null && p) return e(s, { ref: x, flexDirection: "column", marginTop: 1, width: "100%", children: e(Dxt, { tone: "dim", text: Vg(m, "…") }) });
  return e(s, { ref: x, flexDirection: "column", width: "100%", children: e(s, { flexDirection: "row", flexWrap: "wrap", marginTop: 1, width: "100%", children: A ? e(IPn, { status: A, columns: _ }) : r(Q, { children: [e(kpe, { frame: St, messageColor: g, stalledIntensity: M ? 0 : mt, thinkingIntensity: M ? 0 : W, reducedMotion: t, time: Mt }), e(o8t, { message: m, mode: l, messageColor: g, glimmerIndex: Z, flashOpacity: q, shimmerColor: h, stalledIntensity: M ? 0 : mt, thinkingIntensity: M ? 0 : W }), yt] }) }) });
}
function IPn(l) {
  let m = w(57), { status: t, columns: u } = l, o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1e3)) * 1e3, g;
  if (m[0] !== t.kind) g = t.kind === "low_priority_waiting" ? JQ().waitBanner : null, m[0] = t.kind, m[1] = g;
  else g = m[1];
  let h = g;
  const M = o >= 3e5;
  let B;
  if (m[2] !== o || m[3] !== M) B = un(o, { mostSignificantOnly: M }), m[2] = o, m[3] = M, m[4] = B;
  else B = m[4];
  let I = B, v;
  if (m[5] === S) v = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: "error", children: wR }) }), m[5] = v;
  else v = m[5];
  let L = v;
  if (t.kind === "stalled") {
    let f2;
    if (m[6] === S) f2 = e(n, { color: "error", children: "Waiting for API response" }), m[6] = f2;
    else f2 = m[6];
    let _2;
    if (m[7] !== I) _2 = r(Q, { children: [L, r(s, { flexShrink: 1, children: [f2, r(n, { dimColor: true, children: [" · will retry in ", I, " · check your network"] })] })] }), m[7] = I, m[8] = _2;
    else _2 = m[8];
    return _2;
  }
  if (t.kind === "low_priority_waiting") {
    let G = ` · next try in ${I} · attempt ${t.attempt} · esc to interrupt`;
    let O = Math.max(10, u - 2 - le(G) - 2);
    let f2;
    if (m[9] === S) f2 = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: "warning", children: wR }) }), m[9] = f2;
    else f2 = m[9];
    const _2 = h ?? "";
    let b2;
    if (m[10] !== O || m[11] !== _2) b2 = gt(_2, O), m[10] = O, m[11] = _2, m[12] = b2;
    else b2 = m[12];
    let E2;
    if (m[13] !== b2) E2 = e(n, { color: "warning", children: b2 }), m[13] = b2, m[14] = E2;
    else E2 = m[14];
    let T2;
    if (m[15] !== G) T2 = e(n, { dimColor: true, children: G }), m[15] = G, m[16] = T2;
    else T2 = m[16];
    let A2;
    if (m[17] !== E2 || m[18] !== T2) A2 = r(Q, { children: [f2, r(s, { flexShrink: 1, children: [E2, T2] })] }), m[17] = E2, m[18] = T2, m[19] = A2;
    else A2 = m[19];
    return A2;
  }
  if (t.kind === "auto_mode_unavailable") {
    let f2;
    if (m[20] === S) f2 = e(n, { color: "error", children: "Auto mode check unavailable" }), m[20] = f2;
    else f2 = m[20];
    const _2 = ` · next try in ${I} · attempt ${t.attempt}/${t.maxRetries} · `;
    let b2;
    if (m[21] === S) b2 = e(V, { chord: "escape", action: "interrupt", format: { keyCase: "lower" } }), m[21] = b2;
    else b2 = m[21];
    let E2;
    if (m[22] !== _2) E2 = r(Q, { children: [L, r(s, { flexShrink: 1, children: [f2, r(n, { dimColor: true, children: [_2, b2] })] })] }), m[22] = _2, m[23] = E2;
    else E2 = m[23];
    return E2;
  }
  let R = t.error.noResponse;
  if (R) {
    let et = t.attempt >= t.maxRetries;
    let f2;
    if (m[24] !== R.retryWaitMs) f2 = uE(R.retryWaitMs), m[24] = R.retryWaitMs, m[25] = f2;
    else f2 = m[25];
    let z = f2;
    let N = et ? ` · retrying once, waiting up to ${z}` : ` · retrying, waiting up to ${z} · attempt ${t.attempt}/${t.maxRetries}`;
    let d = Math.max(10, u - 2 - le(N) - 2);
    let _2;
    if (m[26] !== R.waitedMs) _2 = uE(R.waitedMs), m[26] = R.waitedMs, m[27] = _2;
    else _2 = m[27];
    const b2 = `No response from the API after ${_2}`;
    let E2;
    if (m[28] !== d || m[29] !== b2) E2 = gt(b2, d), m[28] = d, m[29] = b2, m[30] = E2;
    else E2 = m[30];
    let T2;
    if (m[31] !== E2) T2 = e(n, { color: "error", children: E2 }), m[31] = E2, m[32] = T2;
    else T2 = m[32];
    let A2;
    if (m[33] !== N) A2 = e(n, { dimColor: true, children: N }), m[33] = N, m[34] = A2;
    else A2 = m[34];
    let p;
    if (m[35] !== A2 || m[36] !== T2) p = r(s, { children: [T2, A2] }), m[35] = A2, m[36] = T2, m[37] = p;
    else p = m[37];
    let x;
    if (m[38] === S) x = e(n, { dimColor: true, children: "A proxy or gateway that buffers streaming responses can cause this · set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait" }), m[38] = x;
    else x = m[38];
    let Mt;
    if (m[39] !== p) Mt = r(Q, { children: [L, r(s, { flexBasis: 0, flexDirection: "column", flexGrow: 1, flexShrink: 1, children: [p, x] })] }), m[39] = p, m[40] = Mt;
    else Mt = m[40];
    return Mt;
  }
  let H = t.error.rateLimits, f;
  if (m[41] !== H) f = H?.resetsAt ? ` (${yC(H.resetsAt)})` : "", m[41] = H, m[42] = f;
  else f = m[42];
  let Z = ` · Retrying in ${I}${f} · attempt ${t.attempt}/${t.maxRetries}`, q = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || H, _;
  if (m[43] !== H || m[44] !== q || m[45] !== t.error.formatted) {
    let mt = H?.rateLimitType ? VWe(H.rateLimitType) : "usage limit";
    _ = !q ? aIn : H ? `${mt[0]?.toUpperCase()}${mt.slice(1)} reached` : t.error.formatted;
    m[43] = H, m[44] = q, m[45] = t.error.formatted, m[46] = _;
  } else _ = m[46];
  let W = _, ut = Math.max(10, u - 2 - le(Z) - 2), b;
  if (m[47] !== ut || m[48] !== W) b = gt(W, ut), m[47] = ut, m[48] = W, m[49] = b;
  else b = m[49];
  let J = b, E;
  if (m[50] !== J) E = e(n, { color: "error", children: J }), m[50] = J, m[51] = E;
  else E = m[51];
  let T;
  if (m[52] !== Z) T = e(n, { dimColor: true, children: Z }), m[52] = Z, m[53] = T;
  else T = m[53];
  let A;
  if (m[54] !== E || m[55] !== T) A = r(Q, { children: [L, r(s, { flexShrink: 1, children: [E, T] })] }), m[54] = E, m[55] = T, m[56] = A;
  else A = m[56];
  return A;
}
function on(l) {
  let u = w(2), { mode: t } = l;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let o;
      if (u[0] === S) o = e(s, { width: 2, children: e(n, { "aria-hidden": true, dimColor: true, children: ne.arrowDown }) }), u[0] = o;
      else o = u[0];
      return o;
    }
    case "requesting": {
      let o;
      if (u[1] === S) o = e(s, { width: 2, children: e(n, { "aria-hidden": true, dimColor: true, children: ne.arrowUp }) }), u[1] = o;
      else o = u[1];
      return o;
    }
  }
}
function Zo(d) {
  return d.isBriefOnly;
}
function Xo(p) {
  return p.viewingAgentTaskId;
}
function tr(L) {
  return L.settings.prefersReducedMotion;
}
var $t = "…";
function Rmr(l) {
  let b = w(22), { mode: t, overrideMessage: u, overrideColor: o, overrideShimmerColor: m, isCompacting: g, compactingHintText: h, compactingStartTime: M, turnEffort: B, turnModel: I, retryStatus: v, outputLimitRecovery: L, defaultVerb: f } = Jxt(l.agentId), _ = K(Zo), G = K(Xo), O = i.CLAUDE_CODE_BRIEF, E, T;
  if (b[0] !== f || b[1] !== t || b[2] !== u || b[3] !== l.agentId) E = () => ({ requestId: l.agentId ?? "main", props: { word: f, message: u, suffix: $t, mode: t } }), T = [l.agentId, f, u, t], b[0] = f, b[1] = t, b[2] = u, b[3] = l.agentId, b[4] = E, b[5] = T;
  else E = b[4], T = b[5];
  let A = cc.useRenderInput("Spinner", E, T), R;
  if (b[6] !== _ || b[7] !== G) R = C2() && (O || k("tengu_kairos_brief", false)) && _ && !G, b[6] = _, b[7] = G, b[8] = R;
  else R = b[8];
  let et = R, z;
  if (b[9] !== et || b[10] !== h || b[11] !== M || b[12] !== g || b[13] !== t || b[14] !== L || b[15] !== o || b[16] !== m || b[17] !== l || b[18] !== v || b[19] !== B || b[20] !== I) z = (N) => et ? e(yn, { mode: t, overrideMessage: N.props.message }) : e(Rn, { ...l, mode: t, overrideMessage: N.props.message, overrideColor: o, overrideShimmerColor: m, isCompacting: g, compactingHintText: h, compactingStartTime: M, turnEffort: B, turnModel: I, retryStatus: v, outputLimitRecovery: L, defaultVerb: N.props.word, suffix: N.props.suffix ?? $t }), b[9] = et, b[10] = h, b[11] = M, b[12] = g, b[13] = t, b[14] = L, b[15] = o, b[16] = m, b[17] = l, b[18] = v, b[19] = B, b[20] = I, b[21] = z;
  else z = b[21];
  return cc.useRenderHook(A, z);
}
function Rn({ mode: l, loadingStartTimeRef: t, totalPausedMsRef: u, pauseStartTimeRef: o, responseLengthRef: m, overrideColor: g, overrideShimmerColor: h, overrideMessage: M, isCompacting: B, compactingHintText: I, compactingStartTime: v, spinnerSuffix: L, verbose: f, hasActiveTools: _ = false, turnEffort: G, turnModel: O, retryStatus: b, outputLimitRecovery: E, defaultVerb: T, suffix: A, agentId: R }) {
  let et = Wd(), z = rt(), N = Vh(et.prefersReducedMotion) || z, d = K((U) => U.spinnerTip), p = K((U) => U.spinnerTipLabel), x = K((U) => U.briefTranscript), Mt = K((U) => U.expandedView) === "tasks", H = Te(), St = Dv(f) ? Awe : 0, Z = Math.max(1, H.columns - St), q = Tpe(), mt = qe(l), W = R === void 0 || R === tt(), ut = W ? q?.find((U) => U.status !== "pending" && U.status !== "completed") : void 0, J = W ? Qo(q) : void 0, [pt] = y(() => IW(A8t()) ?? "Working"), ft = ut ? [ut.activeForm, ut.subject].map((U) => U?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0, ht = M ?? (ft === void 0 ? void 0 : TAt(ft, Z)) ?? (T || pt), At = A === $t && uit.test(ht) ? ht : ht + A;
  P(() => {
    let U = "spinner-" + l;
    return iL.startCLIActivity(U), () => {
      iL.endCLIActivity(U);
    };
  }, [l]);
  let dt = Yy(), nt = kgn(O ?? st(), dt, G ?? void 0), kt = o.current !== null ? o.current - t.current - u.current : Date.now() - t.current - u.current, wt = "claude", xt = "claudeShimmer", Y = g ?? wt, ot = h ?? xt, at = k("tengu_shining_fractals", false), lt = false, bt = et.spinnerTipsEnabled !== false, Rt = bt && kt > 18e5, Ct = bt && kt > 3e4 && !ue().btwUseCount, _t = lt ? d : gIe() ? d : Rt && !J ? "Use /clear to start fresh when switching topics and free up context" : Ct && !J ? "Use /btw to ask a quick side question without interrupting Claude's current work" : d, It = J ? `Next: ${J.subject.replace(/\s+/g, " ").trim()}` : d === wHn && x ? Nbs : _t ? `${_t === d && p ? p : "Tip"}: ${_t}` : void 0, it;
  if (b?.kind === "retrying") {
    let U = b.error.status === 529 || b.error.formatted.toLowerCase().includes("overload"), X = b.attempt >= Math.min(3, b.maxRetries);
    if (U && X) it = sPr().trim();
  }
  return r(s, { flexDirection: "column", width: "100%", alignItems: "flex-start", paddingLeft: St, children: [e(nn, { mode: l, reducedMotion: N, hasActiveTools: _, responseLengthRef: m, message: At, messageColor: Y, shimmerColor: ot, overrideColor: g, loadingStartTimeRef: t, totalPausedMsRef: u, pauseStartTimeRef: o, spinnerSuffix: L, verbose: f, columns: Z, thinkingStatus: mt, effortSuffix: nt, isCompacting: B, compactingStartTime: v, showToolCallTimer: at, retryStatus: b, outputLimitRecovery: E, agentId: R }), W && Mt && q && q.length > 0 ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(Pmr, { tasks: q }) }) }) : B && I ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, children: I }) }) }) : b ? it ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, children: it }) }) }) : null : It ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, wrap: J ? "truncate-end" : "wrap", children: It }) }) }) : null] });
}
var vt = 2, jt = 3, Uo = 12, Fo = 1;
function Jt(l, t, u) {
  let o = t > 0 ? `${t} in background` : "", m = l - vt - jt, g = m - (o ? 1 + le(o) : 0);
  if (o && g < (u ? Uo : Fo)) return { labelBudget: m, rightText: "" };
  return { labelBudget: g, rightText: o };
}
function yn({ mode: l, overrideMessage: t }) {
  let u = Wd(), o = rt(), m = Vh(u.prefersReducedMotion) || o, [g] = y(() => IW(A8t()) ?? "Working"), h = K((p) => p.remoteConnectionStatus);
  P(() => {
    let p = "spinner-" + l;
    return iL.startCLIActivity(p), () => {
      iL.endCLIActivity(p);
    };
  }, [l]);
  let [, M] = ja(m ? null : 120), B = K((p) => F(Object.values(p.tasks), vy) + p.remoteBackgroundTasks.length), I = h === "reconnecting" || h === "disconnected", { columns: v } = Te(), { labelBudget: L, rightText: f } = Jt(v, B, I), _ = gt(t ?? g, L), G = gt(h === "reconnecting" ? "Reconnecting" : "Disconnected", L), O = I ? G : _, b = Math.floor(M / 300) % 3, E = m ? uit.test(O) ? "   " : "…  " : ".".repeat(b + 1).padEnd(3), T = ee(() => le(_), [_]), A = m || I ? -100 : Mro(Math.floor(M / Oro), T), { before: R, shimmer: et, after: z } = _Pt(_, A), N = (I ? le(G) : T) + jt, d = Math.max(1, v - vt - N - le(f));
  return r(s, { flexDirection: "row", width: "100%", marginTop: 1, paddingLeft: vt, children: [I ? e(n, { color: "error", children: G + E }) : r(Q, { children: [R ? e(n, { dimColor: true, children: R }) : null, et ? e(n, { children: et }) : null, z ? e(n, { dimColor: true, children: z }) : null, e(n, { dimColor: true, children: E })] }), f ? r(Q, { children: [e(n, { children: " ".repeat(d) }), e(n, { color: "subtle", children: f })] }) : null] });
}
function Xto() {
  let l = K((v) => v.remoteConnectionStatus), t = K((v) => F(Object.values(v.tasks), vy) + v.remoteBackgroundTasks.length), { columns: u } = Te(), o = l === "reconnecting" || l === "disconnected", { labelBudget: m, rightText: g } = Jt(u, t, o), h = l === "reconnecting" ? 1 : 0, M = gt(l === "reconnecting" ? "Reconnecting" : "Disconnected", m + jt - h), B = !o ? "" : l === "reconnecting" && !M.endsWith("…") ? M + "…" : M;
  if (!B && !g) return e(s, { height: 2 });
  let I = Math.max(1, u - vt - le(B) - le(g));
  return e(s, { marginTop: 1, paddingLeft: vt, children: r(n, { children: [B ? e(n, { color: "error", children: B }) : null, g ? r(Q, { children: [e(n, { children: " ".repeat(I) }), e(n, { color: "subtle", children: g })] }) : null] }) });
}
function ji() {
  let m = w(9), l = rt(), t = Vh(qo(tr)) || l, [u, o] = ja(t ? null : 120);
  if (t) {
    let g2;
    if (m[0] === S) g2 = e(n, { color: "text", children: "●" }), m[0] = g2;
    else g2 = m[0];
    let h2;
    if (m[1] !== u) h2 = e(s, { ref: u, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: g2 }), m[1] = u, m[2] = h2;
    else h2 = m[2];
    return h2;
  }
  let g;
  if (m[3] === S) g = pUe(), m[3] = g;
  else g = m[3];
  let M = g, B = Math.floor(o / 120) % M.length;
  const h = M[B];
  let I;
  if (m[4] !== h) I = e(n, { color: "text", children: h }), m[4] = h, m[5] = I;
  else I = m[5];
  let v;
  if (m[6] !== u || m[7] !== I) v = e(s, { ref: u, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: I }), m[6] = u, m[7] = I, m[8] = v;
  else v = m[8];
  return v;
}
function Dus({ entries: l, responseLength: t, event: u }) {
  if (u.type === "start") return l.push({ id: u.id, ttftMs: u.ttftMs, firstTokenTime: Date.now(), lastTokenTime: Date.now(), responseLengthBaseline: t, endResponseLength: t }), t;
  let o = u.id != null ? l.find((m) => m.id === u.id) : l.findLast((m) => m.id == null);
  if (!o) return t;
  if (u.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = false, t;
  if (u.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = true, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + u.estimatedTokensDelta, o.outputTokens == null && u.id == null) {
      let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, m + o.thinkingTokenEstimate * 4);
    }
    return t;
  }
  if (u.type === "thinking_signature") {
    if (u.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(u.chars / 4));
        let g = o.thinkingBlockBaseline ?? o.responseLengthBaseline, h = Math.max(t, g + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = h, h;
      }
      let m = t + u.chars;
      return o.endResponseLength = m, m;
    }
    return t;
  }
  if (o.outputTokens = u.outputTokens, o.lastTokenTime = Date.now(), u.id == null) return Math.max(t, o.responseLengthBaseline + u.outputTokens * 4);
  return t;
}
function Qo(l) {
  if (!l) return;
  let t = l.filter((o) => o.status === "pending");
  if (t.length === 0) return;
  let u = new Set(l.filter((o) => o.status !== "completed").map((o) => o.id));
  return t.find((o) => !o.blockedBy.some((m) => u.has(m))) ?? t[0];
}
export {
  Dus,
  IPn,
  Rmr,
  Xto,
  ji,
  o8t
};
