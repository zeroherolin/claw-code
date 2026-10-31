// darwin/hooks/no-verdict.js — Claude Code 2.1.310（darwin）模块 chunk-k3nf069r.js
import { Xd } from "../telemetry/anthropic-workspace-id.js";
import { YRr, Ryi, Pyi, Brn, jrn, S0s, U7, tmt, aGn, nn, ygt, w2, bgt, H6n, wWe, Oe, Bt, $7e, jVn, JFt } from "../core/conversation-engine.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { xNe } from "../artifacts/cobalt-plinth-lovage.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { gu } from "../shared/chunk-b2bcd1a3.js";
import { P_e, ti, kj } from "../agents/tool-use-id.js";
import { _8 } from "../plugins/plugin-function-hooks-pane-ask.js";
import { iQe, ZUt } from "../shared/chunk-ec79692e.js";
import { CSi, aDo } from "../telemetry/tool-result.js";
import { bD, y8e, dB } from "../shared/chunk-26e3ef65.js";
import { Ni } from "../shared/chunk-669ef766.js";
import { myn, rer } from "../shared/chunk-3309934d.js";
import { D } from "../shared/chunk-7027e6d5.js";
var K = (e, o) => o ? { drop: o.resultText ?? "blocked by a UserPromptSubmit hook" } : { text: e };
import { randomUUID as Se } from "crypto";
var sFn = (e, o = "UserPromptSubmit") => nn({ type: "hook_additional_context", content: [...e], hookName: o, toolUseID: `hook-${Se()}`, hookEvent: "UserPromptSubmit" });
var _ = true;
var U = (e, o) => ({ messages: [{ ...Bt(e, "warning", void 0, _), promptSubmitEnding: { ending: o, promptKept: false } }], shouldQuery: false, resultText: e });
function J(e, o, r) {
  return r === true ? e : `${e}

Original prompt: ${o}`;
}
var PMt = { wasCancelled: true };
var N = (e) => e.wasCancelled === true && (e.blocked === void 0 || e.stopped !== void 0);
var I = (e, o, r) => N(e) ? PMt : { ended: o, stopped: e.stopped, text: r, wasCancelled: e.wasCancelled };
var X = () => U("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", { kind: "no_verdict", noVerdictKind: "hooks_never_ran" });
function Y(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== true ? JFt(e.text, o.name, { midTurn: false }) : e.text;
}
var Z = (e, o, r) => ({ proceeds: { text: e, sessionTitle: o, ...r !== void 0 && r.length > 0 && { context: r } } });
var B = (e, o) => ({ ...e, ...o?.length && { context: o } });
var Ne = (e, o, r) => !e ? { ended: X() } : e.blocked ? B(I(e, e.blocked, o.text), o.context) : { ...Z(Y(o), r, o.context), wasCancelled: e.wasCancelled };
var q = (e) => e.aborted;
function ee(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var oe = "the turn was interrupted while the prompt was checked";
var te = (e) => e instanceof Xd;
var Ve = (e, o) => ti(e) === ti(o?.made);
var j = (e, o) => e || q(o);
var re = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var Ghi = (e, o) => e.plugins !== o.plugins;
function se() {
  let e = /* @__PURE__ */ new WeakMap(), o = 0;
  return { of: (r) => {
    let s = e.get(r);
    if (s === void 0) o += 1, s = o, e.set(r, s);
    return s;
  } };
}
var ne = se();
function v() {
  let e = ZUt("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([ne.of(iQe.plugins()), e.map((r) => [r.plugin, r.generation])]);
}
var Ovr = (e, o) => ({ ...Bt(e, "warning", void 0, _), promptSubmitEnding: { ending: o, promptKept: true } });
var pe = (e) => e === void 0 ? xNe : `${xNe}: ${e}`;
var Mvr = (e) => Oe({ content: e, isMeta: true });
var ie = (e, o, r) => ({ blocked: e, stopped: o, ...r && { wasCancelled: true } });
var me = (e, o) => aGn({ promptSource: e ?? "sdk", wakeupSource: o });
function ue(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== true && o.aborted;
}
async function Hvr({ text: e, typed: o, context: r, result: s, promptSource: d, wakeupSource: c, tiers: a }) {
  let g, u = r.abortController.signal.aborted, S = dB();
  try {
    for await (let n of ygt(e, ae(r).mode, r, me(d, c), a)) {
      if (n.message?.type === "progress") continue;
      if (ue(n, r.abortController.signal)) u = true;
      if (n.blockingError) {
        let i = j(u, r.abortController.signal), p = n.suppressOriginalPrompt === true || o !== e || bD(S) || y8e({ isRunReached: false }), f = n.blockingError.promptEnding;
        return { blocked: U(J(wWe(n.blockingError), e, p), f !== void 0 && "noVerdict" in f ? { kind: "no_verdict", noVerdictKind: f.noVerdict } : { kind: "blocked_by_hook", ...jVn(f?.reason) }), ...i && { wasCancelled: true } };
      }
      if (n.preventContinuation) {
        let i = pe(n.stopReason);
        return s.messages = [...s.messages, Mvr(i), Ovr(i, { kind: "stopped_by_hook", ...jVn(n.stopReason) })], s.shouldQuery = false, s.resultText = i, s.allowedTools = void 0, ie(s, i, j(u, r.abortController.signal));
      }
      if (n.sessionTitle) g = n.sessionTitle;
      let k = n.additionalContexts;
      if (k !== void 0 && k.length > 0) s.messages = [...s.messages, sFn(k)];
      let y = ee(n.message);
      if (y) s.messages = [...s.messages, y];
    }
  } catch (n) {
    let P = myn(n, r.abortController.signal), k = !te(n);
    if (!P) throw n;
    t(k ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return j(u, r.abortController.signal) ? { sessionTitle: g, wasCancelled: true } : { sessionTitle: g };
}
var de = (e) => ({ ...e, messages: [...e.messages], allowedTools: e.allowedTools && [...e.allowedTools] });
var wgo = (e) => H6n(e) !== "" || v() !== "";
var Dvr = () => Ie().loadedModules.some((e) => !_8(e.args.pluginStorageId) && gu(e) && (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit")));
var po = (e) => e === void 0 || e.hooks !== "" || ["prompt.submit", "classic.UserPromptSubmit"].some((o) => ZUt(o).some((r) => r.tier !== "builtin"));
var U1e = (e) => ({ permissionMode: ae(e).mode, hooks: H6n(e), plugins: v(), hooksSkippedByTrust: w2() });
function Ego(e, { latch: o }) {
  let r, s = false;
  return () => {
    if (s || o && r) return r;
    try {
      r = U1e(e());
    } catch (d) {
      r = void 0, s = o, t(`could not read what screens a prompt now: ${d}`, { level: "error" });
    }
    return r;
  };
}
var KQt = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var fe = (e, o) => ({ scratch: e, blocked: o.blocked, sessionTitle: o.sessionTitle, stopped: o.stopped, wasCancelled: o.wasCancelled });
function lo({ typed: e, result: o, context: r, promptSource: s, wakeupSource: d }) {
  let c, a, g = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
  async function S(i, p) {
    let f = p.managedHooksExcluded === true, T = de(f ? a?.scratch ?? o : o), l = fe(T, await Hvr({ text: i, typed: e, context: r, result: T, promptSource: s, wakeupSource: d, tiers: p }));
    return g.delete(i), g.set(i, l), l;
  }
  function n(i, p) {
    let f = S(i, p);
    return u.add(f), f.finally(() => u.delete(f));
  }
  async function P() {
    while (u.size > 0) await Promise.allSettled([...u]);
  }
  function k() {
    let [i, p] = [...g].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? i : void 0;
  }
  async function E(i) {
    let p = await n(i, bgt);
    return a = p, c = p.sessionTitle ?? c, p;
  }
  function y(i) {
    let p = g.get(i);
    if (!p) return;
    return o.messages = p.scratch.messages, o.allowedTools = p.scratch.allowedTools, o.shouldQuery = p.scratch.shouldQuery, o.resultText = p.scratch.resultText, c = p.sessionTitle ?? c, p;
  }
  return { managed: E, pass: n, commit: y, settled: P, blockedText: k, managedRun: () => a, sessionTitle: () => c };
}
var ce = ({ submission: e, attachments: o, origin: r, turnId: s, shouldWait: d }) => ({ text: e.text, wait: d, ...o.length > 0 && { attachments: o }, origin: r, ...s !== void 0 && { turnId: s }, ...e.command !== void 0 && { command: e.command }, ...e.isMeta === true && { isMeta: e.isMeta } });
function zhi(e) {
  let o = false;
  return { origin: e?.origin, settle(r) {
    o = true, e?.settle(r);
  }, settleWhen(r) {
    o = true, r.then((s) => e?.settle(s), () => e?.settle({ drop: re }));
  }, [Symbol.dispose]() {
    if (!o) o = true, e?.settle({ drop: re });
  } };
}
function le(e, o) {
  let r = Ni("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function ge(e, o) {
  let r = new Set(o ?? []);
  for (let s of e.toSorted((d, c) => c.index - d.index)) {
    let d = s.returned, c = D(d) ? d.context : void 0, a = (kj(c) ?? []).filter((u) => !r.has(u));
    if (a.length === 0) continue;
    for (let u of a) r.add(u);
    let g = a.reduce((u, S) => u + S.length, 0);
    t(`prompt.submit: ${s.plugin} put ${a.length} context ${a.length === 1 ? "entry" : "entries"} (${g} characters) on its result after next(); not attached, the prompt had entered`, { level: "warn" });
  }
}
async function iFn({ submission: e, origin: o, bridgeOrigin: r, mode: s, turnId: d, shouldWait: c, context: a, result: g, promptSource: u, wakeupSource: S, queued: n, isStartInput: P, enter: k, bound: E }) {
  if (!P) await U7.get();
  E?.();
  let { signal: y } = a.abortController, i = Ego(() => a, { latch: false }), p = () => po(i()) || Dvr(), f = p(), T = () => f || p();
  if (f && y.aborted) return n?.settle({ drop: oe }), PMt;
  let l = lo({ typed: e.text, result: g, context: a, promptSource: u, wakeupSource: S }), A = jrn(YRr), { unplaceable: H } = e, O = Pyi(async (m, x) => {
    if (H !== void 0 && m !== e.text) return { drop: H };
    let b = await (x.managedHooksOnly ? l.managed(m) : l.pass(m, x));
    if (N(b) && T()) throw P_e(y);
    return K(m, b.blocked);
  }, A.perform), L, M = await rer(Brn(A, CSi(aDo(e.input, e.pastedContents), a.options.mainLoopModel, (m) => tmt({ signal: y, origin: n?.origin, core: { "prompt.submit": O.core }, managed: { "prompt.submit": O.managed }, trace: (x) => {
    if (L) ge(x, L.context);
  } }).prompt.submit(ce({ submission: e, attachments: m, origin: S0s({ origin: o, bridgeOrigin: r, wakeupSource: S, mode: s, promptSource: u }), turnId: d, shouldWait: c })))), y);
  if (M === void 0) {
    await l.settled();
    let m = l.blockedText(), x = m === void 0 ? void 0 : l.commit(m), w = x?.blocked, b = m !== void 0 && x !== void 0 && w !== void 0;
    return t("prompt.submit: interrupted while a hook checked the prompt: " + (b ? "the block given beneath it stands" : "no verdict")), n?.settle(b ? K(m, w) : { drop: oe }), b ? B(I(x, w, m), O.arrivedContext()) : PMt;
  }
  if (M.arrived) {
    let m = M.arrived;
    if (L = m, m.text !== e.text) t(`prompt.submit: text rewritten by a hook (${e.text.length} -> ${m.text.length} chars)`);
    let x = Ne(l.commit(m.text), m, l.sessionTitle()), b = x.wasCancelled === true && T() && x.proceeds ? PMt : x, z = le(k, b);
    return n?.settleWhen(z.then(() => m)), z.then(() => A.done(m), (ke) => A.failed(ke)), b;
  }
  let R = M.answered, h = O.runs.last(), W = Ryi(R, h?.made);
  t(`prompt.submit: dropped (${W.drop})`), n?.settle(W);
  let V = l.managedRun();
  if (V?.blocked) return l.commit(e.text), I(V, V.blocked, e.text);
  if (H !== void 0 && h?.made.drop === H) return { ended: U(H, { kind: "no_verdict", noVerdictKind: "rewrite_unplaceable" }) };
  let C = h ? l.commit(h.input) : void 0, Q = C?.blocked, xe = R.drop !== void 0 && h !== void 0 && !Ve(R, h), ye = O.arrivedContext();
  if (h !== void 0 && C !== void 0 && Q !== void 0 && !xe) return B(I(C, Q, h.input), ye);
  if (y.aborted && (C?.blocked === void 0 || N(C)) && T()) return PMt;
  let G = R.drop !== void 0;
  return { ended: U(G ? `Prompt dropped by a hook: ${$7e(R.drop)}` : `Prompt not submitted: ${YRr}`, G ? { kind: "dropped_by_hook", ...jVn(R.drop) } : { kind: "not_passed_on" }) };
}
export {
  Dvr,
  Ego,
  Ghi,
  Hvr,
  KQt,
  Mvr,
  Ovr,
  PMt,
  U1e,
  iFn,
  sFn,
  wgo,
  zhi
};
