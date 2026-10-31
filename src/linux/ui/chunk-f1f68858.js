// linux/ui/chunk-f1f68858.js — Claude Code 2.1.310（linux）模块 chunk-3gehn1tm.js
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { i } from "../shared/environment.js";
import { w } from "./chunk-0ed4c357.js";
import { z7 } from "../settings/global-config-and-gates.js";
import { ls } from "./chunk-6c28faa3.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Ee } from "./chunk-067d565d.js";
import { we } from "./keybinding-auto-hints.js";
import { YI } from "../telemetry/mantle-default-fallback.js";
import { Je } from "./aria-hidden.aa9d.js";
import { mt } from "./aria-label.132c.js";
import { ji } from "./spinner-stall-cleared.js";
import { ft } from "../shared/chunk-c602eee2.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Gt, de, be, P, ee, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { Ot } from "../models/claude-mythos-preview.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
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
var ve = Gt(null);
function t6e(x) {
  let h = w(40), { steps: o, stepProps: m, initialData: p, onComplete: b, onCancel: t, children: u, title: l, showStepCounter: d, exitOnCtrlCD: g } = x, I;
  if (h[0] !== p) I = p === void 0 ? {} : p, h[0] = p, h[1] = I;
  else I = h[1];
  let F = I, A = d === void 0 ? true : d, se = g === void 0 ? false : g, [v, c] = y(0), [f, a] = y(F), [k, B] = y(false), J;
  if (h[2] === S) J = [], h[2] = J;
  else J = h[2];
  let [M, Ce] = y(J), en, tn;
  if (h[3] !== k || h[4] !== b || h[5] !== f) en = () => {
    if (k) Ce([]), b(f);
  }, tn = [k, f, b], h[3] = k, h[4] = b, h[5] = f, h[6] = en, h[7] = tn;
  else en = h[6], tn = h[7];
  P(en, tn);
  let nn;
  if (h[8] !== v || h[9] !== M || h[10] !== o.length) nn = () => {
    if (v < o.length - 1) {
      if (M.length > 0) Ce((mo) => [...mo, v]);
      c(Sn);
    } else B(true);
  }, h[8] = v, h[9] = M, h[10] = o.length, h[11] = nn;
  else nn = h[11];
  let lt = nn, on;
  if (h[12] !== v || h[13] !== M || h[14] !== t) on = () => {
    if (M.length > 0) {
      let rn = M.at(-1);
      if (rn !== void 0) Ce(Dn), c(rn);
    } else if (v > 0) c(Tn);
    else if (t) t();
  }, h[12] = v, h[13] = M, h[14] = t, h[15] = on;
  else on = h[15];
  let dt = on, an;
  if (h[16] !== v || h[17] !== o.length) an = (pt) => {
    if (pt >= 0 && pt < o.length) Ce((go) => [...go, v]), c(pt);
  }, h[16] = v, h[17] = o.length, h[18] = an;
  else an = h[18];
  let ct = an, sn;
  if (h[19] !== t) sn = () => {
    if (Ce([]), t) t();
  }, h[19] = t, h[20] = sn;
  else sn = h[20];
  let Re = sn, ln = ls(se ? void 0 : Re), ut = ln.pending ? `Press ${ln.keyName} again to ${se ? "exit" : "cancel"}` : null, dn;
  if (h[21] === S) dn = (xo) => {
    a((bo) => ({ ...bo, ...xo }));
  }, h[21] = dn;
  else dn = h[21];
  let ko = dn, pn;
  if (h[22] !== Re || h[23] !== v || h[24] !== dt || h[25] !== lt || h[26] !== ct || h[27] !== ut || h[28] !== A || h[29] !== o.length || h[30] !== l || h[31] !== f) pn = { currentStepIndex: v, totalSteps: o.length, wizardData: f, setWizardData: a, updateWizardData: ko, goNext: lt, goBack: dt, goToStep: ct, cancel: Re, title: l, showStepCounter: A, pendingExitHint: ut }, h[22] = Re, h[23] = v, h[24] = dt, h[25] = lt, h[26] = ct, h[27] = ut, h[28] = A, h[29] = o.length, h[30] = l, h[31] = f, h[32] = pn;
  else pn = h[32];
  let gt = pn, Ie = o[v];
  if (!Ie || k) {
    return null;
  }
  let ze;
  if (h[33] !== Ie || h[34] !== u || h[35] !== m) ze = u || e(Ie, { ...m }), h[33] = Ie, h[34] = u, h[35] = m, h[36] = ze;
  else ze = h[36];
  let cn;
  if (h[37] !== gt || h[38] !== ze) cn = e(ve.Provider, { value: gt, children: ze }), h[37] = gt, h[38] = ze, h[39] = cn;
  else cn = h[39];
  return cn;
}
function ep() {
  let x = be(ve);
  if (!x) throw Error("useWizard must be used within a WizardProvider");
  return x;
}
function su(x) {
  let c = w(15), { title: o, color: m, children: p, subtitle: b, footerText: t } = x, u = m === void 0 ? "suggestion" : m, { currentStepIndex: l, totalSteps: d, title: g, showStepCounter: h, goBack: I, pendingExitHint: F } = ep(), A = o || g || "Wizard", se = h !== false ? ` (${l + 1}/${d})` : "";
  const v = `${A}${se}`;
  let f;
  if (c[0] !== p || c[1] !== u || c[2] !== I || c[3] !== b || c[4] !== v) f = e(we, { title: v, subtitle: b, onCancel: I, color: u, hideInputGuide: true, isCancelActive: false, children: p }), c[0] = p, c[1] = u, c[2] = I, c[3] = b, c[4] = v, c[5] = f;
  else f = c[5];
  let a;
  if (c[6] !== l || c[7] !== t || c[8] !== F) a = F ?? t ?? r(Ee, { children: [e(V, { chord: ["up", "down"], action: "navigate" }), e(V, { chord: "enter", action: "select" }), e(ft, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: l > 0 ? "go back" : "cancel" })] }), c[6] = l, c[7] = t, c[8] = F, c[9] = a;
  else a = c[9];
  let k;
  if (c[10] !== a) k = e(s, { marginLeft: 2, marginTop: 1, children: e(n, { dimColor: true, children: a }) }), c[10] = a, c[11] = k;
  else k = c[11];
  let B;
  if (c[12] !== f || c[13] !== k) B = r(Q, { children: [f, k] }), c[12] = f, c[13] = k, c[14] = B;
  else B = c[14];
  return B;
}
var SF = ["sonnet", "opus", "haiku", "fable"];
function Oe() {
  return { sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL, opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL, haiku: i.ANTHROPIC_DEFAULT_HAIKU_MODEL, fable: i.ANTHROPIC_DEFAULT_FABLE_MODEL };
}
j();
function Oxt({ provider: x, onPins: o }) {
  let { goBack: m, goNext: p, wizardData: b } = ep(), t = ee(() => x.resolveTierDefaults(b), []), u = ee(() => Oe(), []), [l, d] = y(() => Object.fromEntries(SF.map((a) => [a, u[a] ?? t[a].auto ?? t[a].fallback]))), [g, h] = y({ sonnet: "pending", opus: "pending", haiku: "pending", fable: "pending" }), [I, F] = y("summary"), A = SF.map((a) => e(it, { candidate: l[a], probe: (k) => x.probe(b, k), onState: (k) => h((B) => ({ ...B, [a]: k })) }, a));
  if (I !== "summary") {
    let a = I.picking;
    return r(Q, { children: [A, e(Zt, { tier: a, provider: x, wizardData: b, fallback: t[a].fallback, current: l[a], existingPin: u[a], onPick: (k) => {
      d((M) => ({ ...M, [a]: k }));
      let B = SF.indexOf(a), J = SF[B + 1];
      F(J ? { picking: J } : "summary");
    }, onCancel: () => F("summary") }, a)] });
  }
  let v = SF.every((a) => g[a] !== "pending") && SF.some((a) => g[a] !== "pending" && g[a].ok), c = v && SF.some((a) => {
    let k = g[a];
    return k !== "pending" && k.ok && z7(l[a]);
  }), f = (a) => {
    if (a === "manual") {
      F({ picking: "sonnet" });
      return;
    }
    if (a === "pin" || a === "pin1m") {
      let k = (B) => {
        let J = g[B];
        if (J === "pending" || !J.ok) return;
        let M = l[B];
        return a === "pin1m" && z7(M) ? Kt(M) : M;
      };
      o({ pinSonnet: k("sonnet"), pinOpus: k("opus"), pinHaiku: k("haiku"), pinFable: k("fable") });
    } else o({ pinSonnet: void 0, pinOpus: void 0, pinHaiku: void 0, pinFable: void 0 });
    p();
  };
  return r(Q, { children: [A, e(su, { subtitle: "Pin model versions", children: r(s, { flexDirection: "column", gap: 1, children: [e(n, { children: x.intro }), r(s, { flexDirection: "column", children: [e(n, { dimColor: true, children: "Each candidate is tested with a one-token request:" }), SF.map((a) => e(st, { label: YI[a], modelId: l[a], state: g[a], reasonLabel: x.reasonLabel }, a))] }), e(Je, { options: [...v ? [{ label: "Pin the working models", value: "pin" }] : [], ...c ? [{ label: "Pin the working models with 1M context", value: "pin1m" }] : [], { label: "Choose different models…", value: "manual" }, { label: "Skip — use Claude Code defaults (auto-updates)", value: "skip" }], onChange: f, onCancel: m })] }) })] });
}
function Kt(x) {
  return /\[1m\]$/i.test(x) ? x : `${x}[1m]`;
}
function it(x) {
  let b = w(6), { candidate: o, probe: m, onState: p } = x, t;
  if (b[0] !== o || b[1] !== p || b[2] !== m) t = () => {
    let u = false;
    return p("pending"), m(o).then((l) => {
      if (!u) p(l);
    }), () => {
      u = true;
    };
  }, b[0] = o, b[1] = p, b[2] = m, b[3] = t;
  else t = b[3];
  let d;
  if (b[4] !== o) d = [o], b[4] = o, b[5] = d;
  else d = b[5];
  return P(t, d), null;
}
function Zt({ tier: x, provider: o, wizardData: m, fallback: p, current: b, existingPin: t, onPick: u, onCancel: l }) {
  let d = ee(() => {
    let c = o.listTierCandidates(x, m);
    for (let f of [p, b, t]) if (f && !c.includes(f)) c.push(f);
    return c;
  }, [x, p, b, t]), [g, h] = y(() => Object.fromEntries(d.map((c) => [c, "pending"])));
  P(() => {
    let c = false;
    for (let f of d) o.probe(m, f).then((a) => {
      if (!c) h((k) => ({ ...k, [f]: a }));
    });
    return () => {
      c = true;
    };
  }, []);
  let I = d.every((c) => g[c] !== "pending"), F = (c) => {
    let f = g[c];
    return f !== void 0 && f !== "pending" && f.ok;
  }, A = ee(() => {
    if (!I) return d;
    return [...d].sort((c, f) => (F(c) ? 0 : 1) - (F(f) ? 0 : 1));
  }, [d, g, I]), se = A.map((c) => ({ value: c, label: e(at, { id: c, state: g[c] ?? "pending", reasonLabel: o.reasonLabel, suffix: c === t ? "(currently pinned)" : c === p ? "(built-in default)" : c === b ? "(selected)" : void 0 }) })), v = () => {
    for (let c of o.preferOnSettle ?? []) {
      let f = c === "current" ? b : p;
      if (F(f)) return f;
    }
    return A.find(F);
  };
  return e(su, { subtitle: `Pin ${YI[x]} model`, children: r(s, { flexDirection: "column", gap: 1, children: [e(n, { dimColor: true, children: o.pickerSubtitle(x, m) }), e(Je, { options: se, defaultValue: I ? v() : b, onChange: u, onCancel: l }, I ? "settled" : "pending")] }) });
}
function at(x) {
  let t = w(19), { id: o, state: m, suffix: p, reasonLabel: b } = x;
  if (m === "pending") {
    let u2;
    if (t[0] === S) u2 = e(mt, { status: "pending", withSpace: true }), t[0] = u2;
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
    if (t[6] === S) u2 = e(mt, { status: "success", withSpace: true }), t[6] = u2;
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
  if (t[12] === S) u = e(mt, { status: "error", withSpace: true }), t[12] = u;
  else u = t[12];
  const l = p && ` ${p}`, d = b[m.reason];
  let g;
  if (t[13] !== d) g = r(n, { color: "error", children: ["(", d, ")"] }), t[13] = d, t[14] = g;
  else g = t[14];
  let h;
  if (t[15] !== o || t[16] !== l || t[17] !== g) h = r(n, { dimColor: true, children: [u, o, l, " ", g] }), t[15] = o, t[16] = l, t[17] = g, t[18] = h;
  else h = t[18];
  return h;
}
function st(x) {
  let t = w(26), { label: o, modelId: m, state: p, reasonLabel: b } = x;
  if (p === "pending") {
    let u2, l2;
    if (t[0] === S) u2 = e(n, { children: "  " }), l2 = e(ji, {}), t[0] = u2, t[1] = l2;
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
    if (t[7] === S) u2 = e(mt, { status: "success", withSpace: true }), t[7] = u2;
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
  if (t[15] === S) u = e(mt, { status: "error", withSpace: true }), t[15] = u;
  else u = t[15];
  let l;
  if (t[16] !== o) l = o.padEnd(7), t[16] = o, t[17] = l;
  else l = t[17];
  let d;
  if (t[18] !== m) d = e(n, { dimColor: true, children: m }), t[18] = m, t[19] = d;
  else d = t[19];
  const g = b[p.reason];
  let h;
  if (t[20] !== g) h = r(n, { color: "error", children: ["(", g, ")"] }), t[20] = g, t[21] = h;
  else h = t[21];
  let I;
  if (t[22] !== l || t[23] !== d || t[24] !== h) I = r(n, { children: ["  ", u, l, "→ ", d, " ", h] }), t[22] = l, t[23] = d, t[24] = h, t[25] = I;
  else I = t[25];
  return I;
}
async function PPn(x, o, m) {
  let p;
  try {
    p = await x();
  } catch (b) {
    return { ok: false, reason: m(b) };
  }
  try {
    return await p.messages.create({ model: Ot(o), max_tokens: 1, messages: [{ role: "user", content: "." }] }), { ok: true };
  } catch (b) {
    let t = b?.status;
    if (t === 401) return { ok: false, reason: "auth" };
    if (t === 403) return { ok: false, reason: "permission" };
    if (t === 400 || t === 404) return { ok: false, reason: "model" };
    if (t === 429) return { ok: true };
    if (t === void 0) return { ok: false, reason: "network" };
    return { ok: false, reason: "other" };
  }
}
export {
  Oxt,
  PPn,
  SF,
  ep,
  su,
  t6e
};
