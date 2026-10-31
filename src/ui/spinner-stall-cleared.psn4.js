// ui/spinner-stall-cleared.psn4.js — Claude Code 2.1.310 模块 chunk-psn490kp.js
import { F, tt, Lz } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { i } from "../shared/environment.9a41.js";
import { Kg, Sit } from "../shared/chunk-j79dwkaq.js";
import { it, k, ue } from "../settings/global-config-and-gates.27xj.js";
import { eE } from "../shared/chunk-y6x1q9pp.js";
import { w } from "./chunk-zqxc4qtb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { kR } from "../shell/invalid-type.qnva.js";
import { le } from "../shared/chunk-abagh0tt.js";
import { ft, HTt, un, pv, Ri, SA } from "../fs/async-hooks.2k4e.js";
import { sQ } from "../api/anthropic-client.7pf8.js";
import { pn, rt, s, n, Wa } from "../telemetry/render-glyph-cardinality.7car.js";
import { FW, pN, cc } from "./truncate-end.8a5j.js";
import { K, Yo } from "../shared/chunk-p82eferg.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { DIn, wUe, WR, EUe, P_, Yg, cw } from "../shared/xterm-ghostty.n6f6.js";
import { CPr } from "../core/conversation-engine.31gx.js";
import { $gn } from "../models/ccr-unsupported-default-mode-ignored.fdkh.js";
import { r2e } from "../core/system-prompt-blocks.dpjp.js";
import { ky } from "../git/bridge-child-tool-diff.m7a8.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { wIe } from "../settings/tips-org-tips-file-load.0bkx.js";
import { dD } from "../shared/active-time-ledger.06st.js";
import { Ge } from "./aria-hidden.by9c.js";
import { Ofe } from "../fs/chunk-f47yy7ak.js";
import { dgr } from "./in-progress.nxtd.js";
import { UW, $8t, vIn, iPt } from "../context/not-a-retry-status.yspg.js";
import { ve } from "./chunk-kjz7kbmb.js";
import { q } from "../context/chunk-d05584w8.js";
import { DE } from "./aria-hidden.wzb3.js";
import { Xy, Zxt, Hwe } from "./chunk-2zdz421s.js";
import { Ife } from "./aria-hidden.kytf.js";
import { Wd } from "../shared/chunk-vx3s7x6j.js";
import { Kh } from "../telemetry/chunk-eewnxw2v.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { Ooo, Moo, FPt } from "../remote/bridge-failed.4jhd.js";
import { HHn, cbs } from "../shared/chunk-86x25gje.js";
import { P, te, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { $a } from "../shared/chunk-380qngfk.js";
import { b, En } from "../vendor/react/chunk-meds60nn.js";
j();
j();
j();
var he = { r: 171, g: 43, b: 63 };
function P8t(l) {
  let f = w(97), { message: t, mode: u, messageColor: o, glimmerIndex: m, flashOpacity: g, shimmerColor: h, stalledIntensity: M, thinkingIntensity: E } = l, _ = M === void 0 ? 0 : M, B = E === void 0 ? 0 : E, v = eE(), C;
  if (f[0] !== t) {
    C = [];
    for (const { segment: G } of $a().segment(t)) C.push({ segment: G, width: le(G) });
    f[0] = t, f[1] = C;
  } else C = f[1];
  let O;
  if (f[2] !== t) O = le(t), f[2] = t, f[3] = O;
  else O = f[3];
  let S;
  if (f[4] !== C || f[5] !== O) S = { segments: C, messageWidth: O }, f[4] = C, f[5] = O, f[6] = S;
  else S = f[6];
  let { segments: I, messageWidth: T } = S;
  if (!t) {
    return null;
  }
  if (_ > 0) {
    let L = v[o];
    let R2;
    if (f[7] !== L || f[8] !== t || f[9] !== _) {
      R2 = En;
      Mt: {
        let et = L ? cw(L) : null;
        if (et) {
          let z = P_(et, he, WR(_));
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
      f[7] = L, f[8] = t, f[9] = _, f[10] = R2;
    } else R2 = f[10];
    if (R2 !== En) return R2;
    let V = _ > 0.5 ? "error" : o;
    let d2;
    if (f[19] !== V || f[20] !== t) d2 = e(n, { color: V, children: t }), f[19] = V, f[20] = t, f[21] = d2;
    else d2 = f[21];
    let p2;
    if (f[22] !== V) p2 = e(n, { color: V, children: " " }), f[22] = V, f[23] = p2;
    else p2 = f[23];
    let x2;
    if (f[24] !== d2 || f[25] !== p2) x2 = r(Q, { children: [d2, p2] }), f[24] = d2, f[25] = p2, f[26] = x2;
    else x2 = f[26];
    return x2;
  }
  if (B > 0) {
    let St = v[o];
    let R2;
    if (f[27] !== St || f[28] !== t || f[29] !== v.warning || f[30] !== B) {
      R2 = En;
      ut: {
        let Z = St ? cw(St) : null;
        let U = cw(v.warning);
        if (Z && U) {
          let mt = P_(Z, U, WR(B));
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
      f[27] = St, f[28] = t, f[29] = v.warning, f[30] = B, f[31] = R2;
    } else R2 = f[31];
    if (R2 !== En) return R2;
    let J = B > 0.5 ? "warning" : o;
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
    let gt = v[o];
    let dt = v[h];
    let R2;
    if (f[48] !== gt || f[49] !== g || f[50] !== t || f[51] !== o || f[52] !== dt) {
      R2 = En;
      pt: {
        let ht = gt ? cw(gt) : null;
        let Lt = dt ? cw(dt) : null;
        if (ht && Lt) {
          let At = P_(ht, Lt, WR(g));
          const d3 = e(n, { color: Yg(At), children: t });
          let p3;
          if (f[54] !== o) p3 = e(n, { color: o, children: " " }), f[54] = o, f[55] = p3;
          else p3 = f[55];
          let x3;
          if (f[56] !== d3 || f[57] !== p3) x3 = r(Q, { children: [d3, p3] }), f[56] = d3, f[57] = p3, f[58] = x3;
          else x3 = f[58];
          R2 = x3;
          break pt;
        }
      }
      f[48] = gt, f[49] = g, f[50] = t, f[51] = o, f[52] = dt, f[53] = R2;
    } else R2 = f[53];
    if (R2 !== En) return R2;
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
  if (f[75] !== xt || f[76] !== I || f[77] !== wt) {
    let lt = 0;
    ot = "";
    at = "";
    Y = "";
    for (const { segment: bt, width: Rt } of I) {
      if (lt + Rt <= xt) ot = ot + bt;
      else if (lt > wt) Y = Y + bt;
      else at = at + bt;
      lt = lt + Rt;
    }
    f[75] = xt, f[76] = I, f[77] = wt, f[78] = Y, f[79] = ot, f[80] = at;
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
  let g = A(l), h = A(t), M = A(0), E = A(l), _ = A(m);
  if (t > h.current || _.current !== m) _.current = m, g.current = l, h.current = t, M.current = 0, E.current = l;
  else if (t < h.current) h.current = t;
  let B;
  if (u) B = 0, g.current = l;
  else B = l - g.current;
  let v = B > 1e4 && !u, f = v ? Math.min((B - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || M.current > 0)) {
    let G = l - E.current;
    if (G >= 50) {
      let O = Math.floor(G / 50), S = M.current;
      for (let I = 0; I < O; I++) {
        let T = f - S;
        if (Math.abs(T) < 0.01) {
          S = f;
          break;
        }
        S += T * 0.1;
      }
      M.current = S, E.current = l;
    }
  } else M.current = f, E.current = l;
  let C = o ? f : M.current;
  return { isStalled: v, stalledIntensity: C, timeSinceLastToken: B };
}
var Nn = [1e4, 45e3, 3e5], Pn = 2e3, Wn = 2e3, Dn = 200, se = 10, Gn = 1e4, $n = 2e4, jn = 3e4, Vn = 45e3;
function Hn(l) {
  let t = EUe(l, Wn);
  return Math.round(t * (DIn().length - 1));
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
  return WR((Math.sin(l / 1e3 * Math.PI) + 1) / 2);
}
function Ke({ mode: l, reducedMotion: t, hasActiveTools: u, responseLength: o, message: m, overrideColor: g, loadingStartTime: h, totalPausedMs: M, pauseStartTime: E, thinkingStatus: _, effortSuffix: B, isCompacting: v, compactingStartTime: f, showToolCallTimer: C, outputLimitRecovery: G = null, agentId: O, glimmerParked: S = false }) {
  let [I, T] = Wa(t ? null : l === "requesting" && !S ? 50 : 100), L = Date.now(), et = v && f !== null ? Math.max(0, L - f) : E !== null ? E - h - M : L - h - M, z = A(je()), N = { now: L, isThinking: l === "thinking", hasActiveTools: u, thinkingStatus: _, showToolCallTimer: C, outputLimitRecovery: G };
  z.current = Ve(z.current, N);
  let d = He(z.current, N), p = Ue(z.current, N), x = o, Mt = u || l === "thinking" || v && l !== "responding" || E !== null, { isStalled: V, stalledIntensity: St, timeSinceLastToken: Z } = Fe(T, x, Mt, t, O), U = A(/* @__PURE__ */ new Set()), mt = A(0), W = A(O);
  if (W.current !== O) W.current = O, U.current = /* @__PURE__ */ new Set(), mt.current = 0;
  if (Z === 0) {
    if (U.current.size > 0) a("tengu_spinner_stall_cleared", { max_stall_ms: Math.round(mt.current), mode: c(l), override_color: g != null, response_length: x, thresholds_fired: U.current.size }), U.current = /* @__PURE__ */ new Set(), mt.current = 0;
  } else {
    if (Z > mt.current) mt.current = Z;
    for (let X of Nn) if (Z >= X && !U.current.has(X)) U.current.add(X), a("tengu_spinner_stalled_ui", { threshold_ms: X, mode: c(l), override_color: g != null, time_since_last_token_ms: Math.round(Z), response_length: x, render_loop_dark: Z - X > 5e3 });
  }
  let ut = t ? 0 : Hn(T), J = l === "requesting" ? 50 : Dn, gt = te(() => le(m), [m]), dt = gt + 2 * se, ht = Math.floor(T / J), Lt = t ? -100 : V ? -100 : l === "requesting" ? ht % dt - se : gt + se - ht % dt, At = t ? 0 : l === "tool-use" ? qn(T) : 0, pt = A(x), nt = A(T), kt = A(O);
  if (kt.current !== O || Math.abs(x - pt.current) > Pn) kt.current = O, pt.current = x, nt.current = T;
  if (t) pt.current = x, nt.current = T;
  else {
    let X = Math.floor((T - nt.current) / 50);
    if (X > 0) {
      nt.current += X * 50;
      for (let Et = 0; Et < X; Et++) {
        let yt = x - pt.current;
        if (yt === 0) break;
        let Ot = Math.abs(yt), Bt;
        if (Ot < 70) Bt = 3;
        else if (Ot < 200) Bt = Math.max(8, Math.ceil(Ot * 0.15));
        else Bt = 50;
        pt.current = yt > 0 ? Math.min(pt.current + Bt, x) : Math.max(pt.current - Bt, x);
      }
    }
  }
  let wt = pt.current, xt = Math.round(wt / 4), Y = A(0), ot = A(T);
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
  let at = t ? p : Y.current, lt = un(et), bt = le(lt), Rt = xt, Ct = Ri(Rt), _t = `${ne.arrowDown} ${Ct} tokens`, Wt = le(_t), It = d.kind === "thinking" ? Kn(d.thinkingMs) : "thinking", st;
  switch (d.kind) {
    case "tool-running":
      st = `running tool for ${un(d.toolMs)}`;
      break;
    case "tool-done":
      st = `ran tool for ${un(d.toolMs)}`;
      break;
    case "recovering":
      st = Fn(d.recovery);
      break;
    case "thinking":
      st = `${It}${B}`;
      break;
    case "thought-for":
      st = Un(d.thoughtMs);
      break;
    case "none":
      st = null;
      break;
  }
  let H = st ? le(st) : 0;
  return { viewportRef: I, time: T, elapsedMs: et, frame: ut, glimmerIndex: Lt, flashOpacity: At, stalledIntensity: St, thinkingIntensity: at, statusText: d, progressiveThinkingBase: It, thinkingText: st, thinkingWidth: H, timerText: lt, timerWidth: bt, totalTokens: Rt, tokenCount: Ct, tokensWidth: Wt, glimmerMessageWidth: gt };
}
function qe(l) {
  let [t, u] = y(null), o = A(null), m = A([]), g = pn();
  return P(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let h of m.current) h();
        m.current = [], o.current = Date.now(), u("thinking");
      }
    } else if (o.current !== null) {
      let h = Date.now() - o.current, M = Math.max(0, 2e3 - h);
      o.current = null;
      let E = () => {
        u(h), m.current.push(g.setTimeout(() => u(null), 2e3));
      };
      if (M > 0) m.current.push(g.setTimeout(E, M));
      else E();
    }
  }, [l, g]), P(() => () => {
    for (let h of m.current) h();
    m.current = [];
  }, []), t;
}
var Yn = le(" · "), Ye = le("thinking"), zn = 16e3, Jn = { r: 153, g: 153, b: 153 }, Qn = { r: 185, g: 185, b: 185 }, ze = 3e3, Zn = 2;
function Xn(l, t, u) {
  let o = (l - ze) / 1e3, m = l < ze ? 0 : (Math.sin(o * Math.PI * 2 / Zn) + 1) / 2, g = P_(Jn, Qn, WR(m));
  return Yg(u && t > 0 ? P_(g, u, WR(t)) : g);
}
function nn({ mode: l, reducedMotion: t, hasActiveTools: u, responseLengthRef: o, message: m, messageColor: g, shimmerColor: h, overrideColor: M, loadingStartTimeRef: E, totalPausedMsRef: _, pauseStartTimeRef: B, spinnerSuffix: v, verbose: f, columns: C, thinkingStatus: G, effortSuffix: O, isCompacting: S = false, compactingStartTime: I = null, showToolCallTimer: T = false, retryStatus: L = null, outputLimitRecovery: R = null, agentId: et }) {
  let z = Ke({ mode: l, reducedMotion: t, hasActiveTools: u, responseLength: o.current, message: m, overrideColor: M, loadingStartTime: E.current, totalPausedMs: _.current, pauseStartTime: B.current, thinkingStatus: G, effortSuffix: O, isCompacting: S, compactingStartTime: I, showToolCallTimer: T, outputLimitRecovery: R, agentId: et }), N = eE(), d = rt(), p = DE(f), { viewportRef: x, time: Mt, elapsedMs: V, frame: St, glimmerIndex: Z, flashOpacity: U, stalledIntensity: mt, thinkingIntensity: W, statusText: ut, progressiveThinkingBase: J, timerText: gt, timerWidth: dt, totalTokens: ht, tokenCount: Lt, tokensWidth: At, glimmerMessageWidth: pt } = z, { thinkingText: nt, thinkingWidth: kt } = z, wt = pt + 2, xt = Yn, Y = nt !== null, ot = f || Y || S || ht > 0 || V > zn || Boolean(v), at = C - wt - 5, lt = Y && at > kt;
  if (!lt && Y && ut.kind === "thinking" && (O || J !== "thinking")) {
    if (at > Ye) nt = "thinking", kt = Ye, lt = true;
  }
  let bt = lt ? kt + xt : 0, Rt = ot && at > bt + dt, Ct = bt + (Rt ? dt + xt : 0), _t = ot && ht > 0 && at > Ct + At, Wt = lt && ut.kind === "thinking" && !v && !Rt && !_t, It = W > 0 ? cw(N.warning) : null, st = Xn(Mt, W, It), H = !It && W > 0.5 ? "warning" : void 0, X = W > 0 ? "warning" : void 0, Et = [...v ? [e(n, { dimColor: true, children: v }, "suffix")] : [], ...!d && Rt ? [e(n, { dimColor: true, children: gt }, "elapsedTime")] : [], ...!d && _t ? [r(s, { flexDirection: "row", children: [e(on, { mode: l }), r(n, { dimColor: true, children: [Lt, " tokens"] })] }, "tokens")] : [], ...!d && lt && nt ? [ut.kind === "thinking" && !t ? e(n, { color: H ?? st, children: Wt ? `(${nt})` : nt }, "thinking") : e(n, { dimColor: !X, color: X, children: nt }, "thinking")] : []], yt = Et.length > 0 ? Wt ? e(ve, { children: Et }) : r(Q, { children: [e(n, { dimColor: true, children: "(" }), e(ve, { children: Et }), e(n, { dimColor: true, children: ")" })] }) : null;
  if (S && L === null && p) return e(s, { ref: x, flexDirection: "column", marginTop: 1, width: "100%", children: e(Zxt, { tone: "dim", text: Kg(m, "…") }) });
  return e(s, { ref: x, flexDirection: "column", width: "100%", children: e(s, { flexDirection: "row", flexWrap: "wrap", marginTop: 1, width: "100%", children: L ? e(sIn, { status: L, columns: C }) : r(Q, { children: [e(Ife, { frame: St, messageColor: g, stalledIntensity: M ? 0 : mt, thinkingIntensity: M ? 0 : W, reducedMotion: t, time: Mt }), e(P8t, { message: m, mode: l, messageColor: g, glimmerIndex: Z, flashOpacity: U, shimmerColor: h, stalledIntensity: M ? 0 : mt, thinkingIntensity: M ? 0 : W }), yt] }) }) });
}
function sIn(l) {
  let m = w(57), { status: t, columns: u } = l, o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1e3)) * 1e3, g;
  if (m[0] !== t.kind) g = t.kind === "low_priority_waiting" ? sQ().waitBanner : null, m[0] = t.kind, m[1] = g;
  else g = m[1];
  let h = g;
  const M = o >= 3e5;
  let E;
  if (m[2] !== o || m[3] !== M) E = un(o, { mostSignificantOnly: M }), m[2] = o, m[3] = M, m[4] = E;
  else E = m[4];
  let _ = E, B;
  if (m[5] === b) B = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: "error", children: kR }) }), m[5] = B;
  else B = m[5];
  let v = B;
  if (t.kind === "stalled") {
    let f2;
    if (m[6] === b) f2 = e(n, { color: "error", children: "Waiting for API response" }), m[6] = f2;
    else f2 = m[6];
    let C2;
    if (m[7] !== _) C2 = r(Q, { children: [v, r(s, { flexShrink: 1, children: [f2, r(n, { dimColor: true, children: [" · will retry in ", _, " · check your network"] })] })] }), m[7] = _, m[8] = C2;
    else C2 = m[8];
    return C2;
  }
  if (t.kind === "low_priority_waiting") {
    let G = ` · next try in ${_} · attempt ${t.attempt} · esc to interrupt`;
    let O = Math.max(10, u - 2 - le(G) - 2);
    let f2;
    if (m[9] === b) f2 = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: "warning", children: kR }) }), m[9] = f2;
    else f2 = m[9];
    const C2 = h ?? "";
    let S2;
    if (m[10] !== O || m[11] !== C2) S2 = ft(C2, O), m[10] = O, m[11] = C2, m[12] = S2;
    else S2 = m[12];
    let I2;
    if (m[13] !== S2) I2 = e(n, { color: "warning", children: S2 }), m[13] = S2, m[14] = I2;
    else I2 = m[14];
    let T2;
    if (m[15] !== G) T2 = e(n, { dimColor: true, children: G }), m[15] = G, m[16] = T2;
    else T2 = m[16];
    let L2;
    if (m[17] !== I2 || m[18] !== T2) L2 = r(Q, { children: [f2, r(s, { flexShrink: 1, children: [I2, T2] })] }), m[17] = I2, m[18] = T2, m[19] = L2;
    else L2 = m[19];
    return L2;
  }
  if (t.kind === "auto_mode_unavailable") {
    let f2;
    if (m[20] === b) f2 = e(n, { color: "error", children: "Auto mode check unavailable" }), m[20] = f2;
    else f2 = m[20];
    const C2 = ` · next try in ${_} · attempt ${t.attempt}/${t.maxRetries} · `;
    let S2;
    if (m[21] === b) S2 = e(q, { chord: "escape", action: "interrupt", format: { keyCase: "lower" } }), m[21] = S2;
    else S2 = m[21];
    let I2;
    if (m[22] !== C2) I2 = r(Q, { children: [v, r(s, { flexShrink: 1, children: [f2, r(n, { dimColor: true, children: [C2, S2] })] })] }), m[22] = C2, m[23] = I2;
    else I2 = m[23];
    return I2;
  }
  let R = t.error.noResponse;
  if (R) {
    let et = t.attempt >= t.maxRetries;
    let f2;
    if (m[24] !== R.retryWaitMs) f2 = pv(R.retryWaitMs), m[24] = R.retryWaitMs, m[25] = f2;
    else f2 = m[25];
    let z = f2;
    let N = et ? ` · retrying once, waiting up to ${z}` : ` · retrying, waiting up to ${z} · attempt ${t.attempt}/${t.maxRetries}`;
    let d = Math.max(10, u - 2 - le(N) - 2);
    let C2;
    if (m[26] !== R.waitedMs) C2 = pv(R.waitedMs), m[26] = R.waitedMs, m[27] = C2;
    else C2 = m[27];
    const S2 = `No response from the API after ${C2}`;
    let I2;
    if (m[28] !== d || m[29] !== S2) I2 = ft(S2, d), m[28] = d, m[29] = S2, m[30] = I2;
    else I2 = m[30];
    let T2;
    if (m[31] !== I2) T2 = e(n, { color: "error", children: I2 }), m[31] = I2, m[32] = T2;
    else T2 = m[32];
    let L2;
    if (m[33] !== N) L2 = e(n, { dimColor: true, children: N }), m[33] = N, m[34] = L2;
    else L2 = m[34];
    let p;
    if (m[35] !== L2 || m[36] !== T2) p = r(s, { children: [T2, L2] }), m[35] = L2, m[36] = T2, m[37] = p;
    else p = m[37];
    let x;
    if (m[38] === b) x = e(n, { dimColor: true, children: "A proxy or gateway that buffers streaming responses can cause this · set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait" }), m[38] = x;
    else x = m[38];
    let Mt;
    if (m[39] !== p) Mt = r(Q, { children: [v, r(s, { flexBasis: 0, flexDirection: "column", flexGrow: 1, flexShrink: 1, children: [p, x] })] }), m[39] = p, m[40] = Mt;
    else Mt = m[40];
    return Mt;
  }
  let V = t.error.rateLimits, f;
  if (m[41] !== V) f = V?.resetsAt ? ` (${SA(V.resetsAt)})` : "", m[41] = V, m[42] = f;
  else f = m[42];
  let Z = ` · Retrying in ${_}${f} · attempt ${t.attempt}/${t.maxRetries}`, U = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || V, C;
  if (m[43] !== V || m[44] !== U || m[45] !== t.error.formatted) {
    let mt = V?.rateLimitType ? r2e(V.rateLimitType) : "usage limit";
    C = !U ? vIn : V ? `${mt[0]?.toUpperCase()}${mt.slice(1)} reached` : t.error.formatted;
    m[43] = V, m[44] = U, m[45] = t.error.formatted, m[46] = C;
  } else C = m[46];
  let W = C, ut = Math.max(10, u - 2 - le(Z) - 2), S;
  if (m[47] !== ut || m[48] !== W) S = ft(W, ut), m[47] = ut, m[48] = W, m[49] = S;
  else S = m[49];
  let J = S, I;
  if (m[50] !== J) I = e(n, { color: "error", children: J }), m[50] = J, m[51] = I;
  else I = m[51];
  let T;
  if (m[52] !== Z) T = e(n, { dimColor: true, children: Z }), m[52] = Z, m[53] = T;
  else T = m[53];
  let L;
  if (m[54] !== I || m[55] !== T) L = r(Q, { children: [v, r(s, { flexShrink: 1, children: [I, T] })] }), m[54] = I, m[55] = T, m[56] = L;
  else L = m[56];
  return L;
}
function on(l) {
  let u = w(2), { mode: t } = l;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let o;
      if (u[0] === b) o = e(s, { width: 2, children: e(n, { "aria-hidden": true, dimColor: true, children: ne.arrowDown }) }), u[0] = o;
      else o = u[0];
      return o;
    }
    case "requesting": {
      let o;
      if (u[1] === b) o = e(s, { width: 2, children: e(n, { "aria-hidden": true, dimColor: true, children: ne.arrowUp }) }), u[1] = o;
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
function tr(v) {
  return v.settings.prefersReducedMotion;
}
var $t = "…";
function agr(l) {
  let S = w(22), { mode: t, overrideMessage: u, overrideColor: o, overrideShimmerColor: m, isCompacting: g, compactingHintText: h, compactingStartTime: M, turnEffort: E, turnModel: _, retryStatus: B, outputLimitRecovery: v, defaultVerb: f } = iPt(l.agentId), C = K(Zo), G = K(Xo), O = i.CLAUDE_CODE_BRIEF, I, T;
  if (S[0] !== f || S[1] !== t || S[2] !== u || S[3] !== l.agentId) I = () => ({ requestId: l.agentId ?? "main", props: { word: f, message: u, suffix: $t, mode: t } }), T = [l.agentId, f, u, t], S[0] = f, S[1] = t, S[2] = u, S[3] = l.agentId, S[4] = I, S[5] = T;
  else I = S[4], T = S[5];
  let L = cc.useRenderInput("Spinner", I, T), R;
  if (S[6] !== C || S[7] !== G) R = Lz() && (O || k("tengu_kairos_brief", false)) && C && !G, S[6] = C, S[7] = G, S[8] = R;
  else R = S[8];
  let et = R, z;
  if (S[9] !== et || S[10] !== h || S[11] !== M || S[12] !== g || S[13] !== t || S[14] !== v || S[15] !== o || S[16] !== m || S[17] !== l || S[18] !== B || S[19] !== E || S[20] !== _) z = (N) => et ? e(yn, { mode: t, overrideMessage: N.props.message }) : e(Rn, { ...l, mode: t, overrideMessage: N.props.message, overrideColor: o, overrideShimmerColor: m, isCompacting: g, compactingHintText: h, compactingStartTime: M, turnEffort: E, turnModel: _, retryStatus: B, outputLimitRecovery: v, defaultVerb: N.props.word, suffix: N.props.suffix ?? $t }), S[9] = et, S[10] = h, S[11] = M, S[12] = g, S[13] = t, S[14] = v, S[15] = o, S[16] = m, S[17] = l, S[18] = B, S[19] = E, S[20] = _, S[21] = z;
  else z = S[21];
  return cc.useRenderHook(L, z);
}
function Rn({ mode: l, loadingStartTimeRef: t, totalPausedMsRef: u, pauseStartTimeRef: o, responseLengthRef: m, overrideColor: g, overrideShimmerColor: h, overrideMessage: M, isCompacting: E, compactingHintText: _, compactingStartTime: B, spinnerSuffix: v, verbose: f, hasActiveTools: C = false, turnEffort: G, turnModel: O, retryStatus: S, outputLimitRecovery: I, defaultVerb: T, suffix: L, agentId: R }) {
  let et = Wd(), z = rt(), N = Kh(et.prefersReducedMotion) || z, d = K((H) => H.spinnerTip), p = K((H) => H.spinnerTipLabel), x = K((H) => H.briefTranscript), Mt = K((H) => H.expandedView) === "tasks", V = Ce(), St = DE(f) ? Hwe : 0, Z = Math.max(1, V.columns - St), U = Ofe(), mt = qe(l), W = R === void 0 || R === tt(), ut = W ? U?.find((H) => H.status !== "pending" && H.status !== "completed") : void 0, J = W ? Qo(U) : void 0, [gt] = y(() => UW($8t()) ?? "Working"), dt = ut ? [ut.activeForm, ut.subject].map((H) => H?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0, ht = M ?? (dt === void 0 ? void 0 : HTt(dt, Z)) ?? (T || gt), At = L === $t && Sit.test(ht) ? ht : ht + L;
  P(() => {
    let H = "spinner-" + l;
    return dD.startCLIActivity(H), () => {
      dD.endCLIActivity(H);
    };
  }, [l]);
  let pt = Xy(), nt = $gn(O ?? it(), pt, G ?? void 0), kt = o.current !== null ? o.current - t.current - u.current : Date.now() - t.current - u.current, wt = "claude", xt = "claudeShimmer", Y = g ?? wt, ot = h ?? xt, at = k("tengu_shining_fractals", false), lt = false, bt = et.spinnerTipsEnabled !== false, Rt = bt && kt > 18e5, Ct = bt && kt > 3e4 && !ue().btwUseCount, _t = lt ? d : wIe() ? d : Rt && !J ? "Use /clear to start fresh when switching topics and free up context" : Ct && !J ? "Use /btw to ask a quick side question without interrupting Claude's current work" : d, It = J ? `Next: ${J.subject.replace(/\s+/g, " ").trim()}` : d === HHn && x ? cbs : _t ? `${_t === d && p ? p : "Tip"}: ${_t}` : void 0, st;
  if (S?.kind === "retrying") {
    let H = S.error.status === 529 || S.error.formatted.toLowerCase().includes("overload"), X = S.attempt >= Math.min(3, S.maxRetries);
    if (H && X) st = CPr().trim();
  }
  return r(s, { flexDirection: "column", width: "100%", alignItems: "flex-start", paddingLeft: St, children: [e(nn, { mode: l, reducedMotion: N, hasActiveTools: C, responseLengthRef: m, message: At, messageColor: Y, shimmerColor: ot, overrideColor: g, loadingStartTimeRef: t, totalPausedMsRef: u, pauseStartTimeRef: o, spinnerSuffix: v, verbose: f, columns: Z, thinkingStatus: mt, effortSuffix: nt, isCompacting: E, compactingStartTime: B, showToolCallTimer: at, retryStatus: S, outputLimitRecovery: I, agentId: R }), W && Mt && U && U.length > 0 ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(dgr, { tasks: U }) }) }) : E && _ ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, children: _ }) }) }) : S ? st ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, children: st }) }) }) : null : It ? e(s, { width: "100%", flexDirection: "column", children: e(Ge, { children: e(n, { dimColor: true, wrap: J ? "truncate-end" : "wrap", children: It }) }) }) : null] });
}
var vt = 2, jt = 3, Uo = 12, Fo = 1;
function Jt(l, t, u) {
  let o = t > 0 ? `${t} in background` : "", m = l - vt - jt, g = m - (o ? 1 + le(o) : 0);
  if (o && g < (u ? Uo : Fo)) return { labelBudget: m, rightText: "" };
  return { labelBudget: g, rightText: o };
}
function yn({ mode: l, overrideMessage: t }) {
  let u = Wd(), o = rt(), m = Kh(u.prefersReducedMotion) || o, [g] = y(() => UW($8t()) ?? "Working"), h = K((p) => p.remoteConnectionStatus);
  P(() => {
    let p = "spinner-" + l;
    return dD.startCLIActivity(p), () => {
      dD.endCLIActivity(p);
    };
  }, [l]);
  let [, M] = Wa(m ? null : 120), E = K((p) => F(Object.values(p.tasks), ky) + p.remoteBackgroundTasks.length), _ = h === "reconnecting" || h === "disconnected", { columns: B } = Ce(), { labelBudget: v, rightText: f } = Jt(B, E, _), C = ft(t ?? g, v), G = ft(h === "reconnecting" ? "Reconnecting" : "Disconnected", v), O = _ ? G : C, S = Math.floor(M / 300) % 3, I = m ? Sit.test(O) ? "   " : "…  " : ".".repeat(S + 1).padEnd(3), T = te(() => le(C), [C]), L = m || _ ? -100 : Moo(Math.floor(M / Ooo), T), { before: R, shimmer: et, after: z } = FPt(C, L), N = (_ ? le(G) : T) + jt, d = Math.max(1, B - vt - N - le(f));
  return r(s, { flexDirection: "row", width: "100%", marginTop: 1, paddingLeft: vt, children: [_ ? e(n, { color: "error", children: G + I }) : r(Q, { children: [R ? e(n, { dimColor: true, children: R }) : null, et ? e(n, { children: et }) : null, z ? e(n, { dimColor: true, children: z }) : null, e(n, { dimColor: true, children: I })] }), f ? r(Q, { children: [e(n, { children: " ".repeat(d) }), e(n, { color: "subtle", children: f })] }) : null] });
}
function Qno() {
  let l = K((B) => B.remoteConnectionStatus), t = K((B) => F(Object.values(B.tasks), ky) + B.remoteBackgroundTasks.length), { columns: u } = Ce(), o = l === "reconnecting" || l === "disconnected", { labelBudget: m, rightText: g } = Jt(u, t, o), h = l === "reconnecting" ? 1 : 0, M = ft(l === "reconnecting" ? "Reconnecting" : "Disconnected", m + jt - h), E = !o ? "" : l === "reconnecting" && !M.endsWith("…") ? M + "…" : M;
  if (!E && !g) return e(s, { height: 2 });
  let _ = Math.max(1, u - vt - le(E) - le(g));
  return e(s, { marginTop: 1, paddingLeft: vt, children: r(n, { children: [E ? e(n, { color: "error", children: E }) : null, g ? r(Q, { children: [e(n, { children: " ".repeat(_) }), e(n, { color: "subtle", children: g })] }) : null] }) });
}
function ji() {
  let m = w(9), l = rt(), t = Kh(Yo(tr)) || l, [u, o] = Wa(t ? null : 120);
  if (t) {
    let g2;
    if (m[0] === b) g2 = e(n, { color: "text", children: "●" }), m[0] = g2;
    else g2 = m[0];
    let h2;
    if (m[1] !== u) h2 = e(s, { ref: u, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: g2 }), m[1] = u, m[2] = h2;
    else h2 = m[2];
    return h2;
  }
  let g;
  if (m[3] === b) g = wUe(), m[3] = g;
  else g = m[3];
  let M = g, E = Math.floor(o / 120) % M.length;
  const h = M[E];
  let _;
  if (m[4] !== h) _ = e(n, { color: "text", children: h }), m[4] = h, m[5] = _;
  else _ = m[5];
  let B;
  if (m[6] !== u || m[7] !== _) B = e(s, { ref: u, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: _ }), m[6] = u, m[7] = _, m[8] = B;
  else B = m[8];
  return B;
}
function Sps({ entries: l, responseLength: t, event: u }) {
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
  P8t,
  Qno,
  Sps,
  agr,
  ji,
  sIn
};
