// ui/chunk-09hekk2k.js — Claude Code 2.1.310 模块 chunk-09hekk2k.js
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { i } from "../shared/environment.9a41.js";
import { w } from "./chunk-zqxc4qtb.js";
import { ZQ } from "../settings/global-config-and-gates.27xj.js";
import { ds } from "./chunk-2bwm2gye.js";
import { q } from "../context/chunk-d05584w8.js";
import { ve } from "./chunk-kjz7kbmb.js";
import { we } from "./keybinding-auto-hints.yb17.js";
import { eO } from "../telemetry/mantle-default-fallback.6m0a.js";
import { Je } from "./aria-hidden.r9bm.js";
import { gt } from "./aria-label.99qs.js";
import { ji } from "./spinner-stall-cleared.psn4.js";
import { pt } from "../shared/chunk-2ktb785b.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, de, Se, P, te, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { Ot } from "../models/claude-mythos-preview.rw6s.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
j();
function Sn(Co) {
  return Co + 1;
}
function Dn(ho) {
  return ho.slice(0, -1);
}
function Tn(yo) {
  return yo - 1;
}
var ye = Gt(null);
function g5e(x) {
  let v = w(40), { steps: o, stepProps: m, initialData: p, onComplete: k, onCancel: t, children: u, title: l, showStepCounter: d, exitOnCtrlCD: g } = x, I;
  if (v[0] !== p) I = p === void 0 ? {} : p, v[0] = p, v[1] = I;
  else I = v[1];
  let F = I, A = d === void 0 ? true : d, se = g === void 0 ? false : g, [S, c] = y(0), [f, a] = y(F), [C, B] = y(false), J;
  if (v[2] === b) J = [], v[2] = J;
  else J = v[2];
  let [M, ke] = y(J), en, tn;
  if (v[3] !== C || v[4] !== k || v[5] !== f) en = () => {
    if (C) ke([]), k(f);
  }, tn = [C, f, k], v[3] = C, v[4] = k, v[5] = f, v[6] = en, v[7] = tn;
  else en = v[6], tn = v[7];
  P(en, tn);
  let nn;
  if (v[8] !== S || v[9] !== M || v[10] !== o.length) nn = () => {
    if (S < o.length - 1) {
      if (M.length > 0) ke((mo) => [...mo, S]);
      c(Sn);
    } else B(true);
  }, v[8] = S, v[9] = M, v[10] = o.length, v[11] = nn;
  else nn = v[11];
  let lt = nn, on;
  if (v[12] !== S || v[13] !== M || v[14] !== t) on = () => {
    if (M.length > 0) {
      let rn = M.at(-1);
      if (rn !== void 0) ke(Dn), c(rn);
    } else if (S > 0) c(Tn);
    else if (t) t();
  }, v[12] = S, v[13] = M, v[14] = t, v[15] = on;
  else on = v[15];
  let dt = on, an;
  if (v[16] !== S || v[17] !== o.length) an = (ct) => {
    if (ct >= 0 && ct < o.length) ke((go) => [...go, S]), c(ct);
  }, v[16] = S, v[17] = o.length, v[18] = an;
  else an = v[18];
  let ut = an, sn;
  if (v[19] !== t) sn = () => {
    if (ke([]), t) t();
  }, v[19] = t, v[20] = sn;
  else sn = v[20];
  let Ie = sn, ln = ds(se ? void 0 : Ie), ft = ln.pending ? `Press ${ln.keyName} again to ${se ? "exit" : "cancel"}` : null, dn;
  if (v[21] === b) dn = (xo) => {
    a((bo) => ({ ...bo, ...xo }));
  }, v[21] = dn;
  else dn = v[21];
  let ko = dn, pn;
  if (v[22] !== Ie || v[23] !== S || v[24] !== dt || v[25] !== lt || v[26] !== ut || v[27] !== ft || v[28] !== A || v[29] !== o.length || v[30] !== l || v[31] !== f) pn = { currentStepIndex: S, totalSteps: o.length, wizardData: f, setWizardData: a, updateWizardData: ko, goNext: lt, goBack: dt, goToStep: ut, cancel: Ie, title: l, showStepCounter: A, pendingExitHint: ft }, v[22] = Ie, v[23] = S, v[24] = dt, v[25] = lt, v[26] = ut, v[27] = ft, v[28] = A, v[29] = o.length, v[30] = l, v[31] = f, v[32] = pn;
  else pn = v[32];
  let mt = pn, ze = o[S];
  if (!ze || C) {
    return null;
  }
  let Ne;
  if (v[33] !== ze || v[34] !== u || v[35] !== m) Ne = u || e(ze, { ...m }), v[33] = ze, v[34] = u, v[35] = m, v[36] = Ne;
  else Ne = v[36];
  let cn;
  if (v[37] !== mt || v[38] !== Ne) cn = e(ye.Provider, { value: mt, children: Ne }), v[37] = mt, v[38] = Ne, v[39] = cn;
  else cn = v[39];
  return cn;
}
function Qp() {
  let x = Se(ye);
  if (!x) throw Error("useWizard must be used within a WizardProvider");
  return x;
}
function au(x) {
  let c = w(15), { title: o, color: m, children: p, subtitle: k, footerText: t } = x, u = m === void 0 ? "suggestion" : m, { currentStepIndex: l, totalSteps: d, title: g, showStepCounter: v, goBack: I, pendingExitHint: F } = Qp(), A = o || g || "Wizard", se = v !== false ? ` (${l + 1}/${d})` : "";
  const S = `${A}${se}`;
  let f;
  if (c[0] !== p || c[1] !== u || c[2] !== I || c[3] !== k || c[4] !== S) f = e(we, { title: S, subtitle: k, onCancel: I, color: u, hideInputGuide: true, isCancelActive: false, children: p }), c[0] = p, c[1] = u, c[2] = I, c[3] = k, c[4] = S, c[5] = f;
  else f = c[5];
  let a;
  if (c[6] !== l || c[7] !== t || c[8] !== F) a = F ?? t ?? r(ve, { children: [e(q, { chord: ["up", "down"], action: "navigate" }), e(q, { chord: "enter", action: "select" }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: l > 0 ? "go back" : "cancel" })] }), c[6] = l, c[7] = t, c[8] = F, c[9] = a;
  else a = c[9];
  let C;
  if (c[10] !== a) C = e(s, { marginLeft: 2, marginTop: 1, children: e(n, { dimColor: true, children: a }) }), c[10] = a, c[11] = C;
  else C = c[11];
  let B;
  if (c[12] !== f || c[13] !== C) B = r(Q, { children: [f, C] }), c[12] = f, c[13] = C, c[14] = B;
  else B = c[14];
  return B;
}
var C$ = ["sonnet", "opus", "haiku", "fable"];
function We() {
  return { sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL, opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL, haiku: i.ANTHROPIC_DEFAULT_HAIKU_MODEL, fable: i.ANTHROPIC_DEFAULT_FABLE_MODEL };
}
j();
function Jxt({ provider: x, onPins: o }) {
  let { goBack: m, goNext: p, wizardData: k } = Qp(), t = te(() => x.resolveTierDefaults(k), []), u = te(() => We(), []), [l, d] = y(() => Object.fromEntries(C$.map((a) => [a, u[a] ?? t[a].auto ?? t[a].fallback]))), [g, v] = y({ sonnet: "pending", opus: "pending", haiku: "pending", fable: "pending" }), [I, F] = y("summary"), A = C$.map((a) => e(it, { candidate: l[a], probe: (C) => x.probe(k, C), onState: (C) => v((B) => ({ ...B, [a]: C })) }, a));
  if (I !== "summary") {
    let a = I.picking;
    return r(Q, { children: [A, e(Zt, { tier: a, provider: x, wizardData: k, fallback: t[a].fallback, current: l[a], existingPin: u[a], onPick: (C) => {
      d((M) => ({ ...M, [a]: C }));
      let B = C$.indexOf(a), J = C$[B + 1];
      F(J ? { picking: J } : "summary");
    }, onCancel: () => F("summary") }, a)] });
  }
  let S = C$.every((a) => g[a] !== "pending") && C$.some((a) => g[a] !== "pending" && g[a].ok), c = S && C$.some((a) => {
    let C = g[a];
    return C !== "pending" && C.ok && ZQ(l[a]);
  }), f = (a) => {
    if (a === "manual") {
      F({ picking: "sonnet" });
      return;
    }
    if (a === "pin" || a === "pin1m") {
      let C = (B) => {
        let J = g[B];
        if (J === "pending" || !J.ok) return;
        let M = l[B];
        return a === "pin1m" && ZQ(M) ? Kt(M) : M;
      };
      o({ pinSonnet: C("sonnet"), pinOpus: C("opus"), pinHaiku: C("haiku"), pinFable: C("fable") });
    } else o({ pinSonnet: void 0, pinOpus: void 0, pinHaiku: void 0, pinFable: void 0 });
    p();
  };
  return r(Q, { children: [A, e(au, { subtitle: "Pin model versions", children: r(s, { flexDirection: "column", gap: 1, children: [e(n, { children: x.intro }), r(s, { flexDirection: "column", children: [e(n, { dimColor: true, children: "Each candidate is tested with a one-token request:" }), C$.map((a) => e(st, { label: eO[a], modelId: l[a], state: g[a], reasonLabel: x.reasonLabel }, a))] }), e(Je, { options: [...S ? [{ label: "Pin the working models", value: "pin" }] : [], ...c ? [{ label: "Pin the working models with 1M context", value: "pin1m" }] : [], { label: "Choose different models…", value: "manual" }, { label: "Skip — use Claude Code defaults (auto-updates)", value: "skip" }], onChange: f, onCancel: m })] }) })] });
}
function Kt(x) {
  return /\[1m\]$/i.test(x) ? x : `${x}[1m]`;
}
function it(x) {
  let k = w(6), { candidate: o, probe: m, onState: p } = x, t;
  if (k[0] !== o || k[1] !== p || k[2] !== m) t = () => {
    let u = false;
    return p("pending"), m(o).then((l) => {
      if (!u) p(l);
    }), () => {
      u = true;
    };
  }, k[0] = o, k[1] = p, k[2] = m, k[3] = t;
  else t = k[3];
  let d;
  if (k[4] !== o) d = [o], k[4] = o, k[5] = d;
  else d = k[5];
  return P(t, d), null;
}
function Zt({ tier: x, provider: o, wizardData: m, fallback: p, current: k, existingPin: t, onPick: u, onCancel: l }) {
  let d = te(() => {
    let c = o.listTierCandidates(x, m);
    for (let f of [p, k, t]) if (f && !c.includes(f)) c.push(f);
    return c;
  }, [x, p, k, t]), [g, v] = y(() => Object.fromEntries(d.map((c) => [c, "pending"])));
  P(() => {
    let c = false;
    for (let f of d) o.probe(m, f).then((a) => {
      if (!c) v((C) => ({ ...C, [f]: a }));
    });
    return () => {
      c = true;
    };
  }, []);
  let I = d.every((c) => g[c] !== "pending"), F = (c) => {
    let f = g[c];
    return f !== void 0 && f !== "pending" && f.ok;
  }, A = te(() => {
    if (!I) return d;
    return [...d].sort((c, f) => (F(c) ? 0 : 1) - (F(f) ? 0 : 1));
  }, [d, g, I]), se = A.map((c) => ({ value: c, label: e(at, { id: c, state: g[c] ?? "pending", reasonLabel: o.reasonLabel, suffix: c === t ? "(currently pinned)" : c === p ? "(built-in default)" : c === k ? "(selected)" : void 0 }) })), S = () => {
    for (let c of o.preferOnSettle ?? []) {
      let f = c === "current" ? k : p;
      if (F(f)) return f;
    }
    return A.find(F);
  };
  return e(au, { subtitle: `Pin ${eO[x]} model`, children: r(s, { flexDirection: "column", gap: 1, children: [e(n, { dimColor: true, children: o.pickerSubtitle(x, m) }), e(Je, { options: se, defaultValue: I ? S() : k, onChange: u, onCancel: l }, I ? "settled" : "pending")] }) });
}
function at(x) {
  let t = w(19), { id: o, state: m, suffix: p, reasonLabel: k } = x;
  if (m === "pending") {
    let u2;
    if (t[0] === b) u2 = e(gt, { status: "pending", withSpace: true }), t[0] = u2;
    else u2 = t[0];
    let l2;
    if (t[1] !== p) l2 = p && r(n, { dimColor: true, children: [" ", p] }), t[1] = p, t[2] = l2;
    else l2 = t[2];
    let d2;
    if (t[3] !== o || t[4] !== l2) d2 = r(n, { children: [u2, o, l2] }), t[3] = o, t[4] = l2, t[5] = d2;
    else d2 = t[5];
    return d2;
  }
  if (m.ok) {
    let u2;
    if (t[6] === b) u2 = e(gt, { status: "success", withSpace: true }), t[6] = u2;
    else u2 = t[6];
    let l2;
    if (t[7] !== p) l2 = p && r(n, { dimColor: true, children: [" ", p] }), t[7] = p, t[8] = l2;
    else l2 = t[8];
    let d2;
    if (t[9] !== o || t[10] !== l2) d2 = r(n, { children: [u2, o, l2] }), t[9] = o, t[10] = l2, t[11] = d2;
    else d2 = t[11];
    return d2;
  }
  let u;
  if (t[12] === b) u = e(gt, { status: "error", withSpace: true }), t[12] = u;
  else u = t[12];
  const l = p && ` ${p}`, d = k[m.reason];
  let g;
  if (t[13] !== d) g = r(n, { color: "error", children: ["(", d, ")"] }), t[13] = d, t[14] = g;
  else g = t[14];
  let v;
  if (t[15] !== o || t[16] !== l || t[17] !== g) v = r(n, { dimColor: true, children: [u, o, l, " ", g] }), t[15] = o, t[16] = l, t[17] = g, t[18] = v;
  else v = t[18];
  return v;
}
function st(x) {
  let t = w(26), { label: o, modelId: m, state: p, reasonLabel: k } = x;
  if (p === "pending") {
    let u2, l2;
    if (t[0] === b) u2 = e(n, { children: "  " }), l2 = e(ji, {}), t[0] = u2, t[1] = l2;
    else u2 = t[0], l2 = t[1];
    let d2;
    if (t[2] !== o) d2 = o.padEnd(7), t[2] = o, t[3] = d2;
    else d2 = t[3];
    let g2;
    if (t[4] !== m || t[5] !== d2) g2 = r(s, { children: [u2, l2, r(n, { children: [" ", d2, "→ ", m] })] }), t[4] = m, t[5] = d2, t[6] = g2;
    else g2 = t[6];
    return g2;
  }
  if (p.ok) {
    let u2;
    if (t[7] === b) u2 = e(gt, { status: "success", withSpace: true }), t[7] = u2;
    else u2 = t[7];
    let l2;
    if (t[8] !== o) l2 = o.padEnd(7), t[8] = o, t[9] = l2;
    else l2 = t[9];
    let d2;
    if (t[10] !== m) d2 = e(n, { color: "success", children: m }), t[10] = m, t[11] = d2;
    else d2 = t[11];
    let g2;
    if (t[12] !== l2 || t[13] !== d2) g2 = r(n, { children: ["  ", u2, l2, "→ ", d2] }), t[12] = l2, t[13] = d2, t[14] = g2;
    else g2 = t[14];
    return g2;
  }
  let u;
  if (t[15] === b) u = e(gt, { status: "error", withSpace: true }), t[15] = u;
  else u = t[15];
  let l;
  if (t[16] !== o) l = o.padEnd(7), t[16] = o, t[17] = l;
  else l = t[17];
  let d;
  if (t[18] !== m) d = e(n, { dimColor: true, children: m }), t[18] = m, t[19] = d;
  else d = t[19];
  const g = k[p.reason];
  let v;
  if (t[20] !== g) v = r(n, { color: "error", children: ["(", g, ")"] }), t[20] = g, t[21] = v;
  else v = t[21];
  let I;
  if (t[22] !== l || t[23] !== d || t[24] !== v) I = r(n, { children: ["  ", u, l, "→ ", d, " ", v] }), t[22] = l, t[23] = d, t[24] = v, t[25] = I;
  else I = t[25];
  return I;
}
async function oIn(x, o, m) {
  let p;
  try {
    p = await x();
  } catch (k) {
    return { ok: false, reason: m(k) };
  }
  try {
    return await p.messages.create({ model: Ot(o), max_tokens: 1, messages: [{ role: "user", content: "." }] }), { ok: true };
  } catch (k) {
    let t = k?.status;
    if (t === 401) return { ok: false, reason: "auth" };
    if (t === 403) return { ok: false, reason: "permission" };
    if (t === 400 || t === 404) return { ok: false, reason: "model" };
    if (t === 429) return { ok: true };
    if (t === void 0) return { ok: false, reason: "network" };
    return { ok: false, reason: "other" };
  }
}
export {
  C$,
  Jxt,
  Qp,
  au,
  g5e,
  oIn
};
