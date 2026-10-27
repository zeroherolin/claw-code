// tools/ask-user-question-tool.sdzg.js — Claude Code 2.1.310 模块 chunk-sdzgznsf.js
import { F, NXr, Gxe, nos } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { k, N4o } from "../settings/global-config-and-gates.27xj.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { so } from "../shell/invalid-type.qnva.js";
import { IL } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { RWo, nYs, tn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { mG, JO } from "../models/model-capability-off-from-client-data.g3tc.js";
import { ns, F3s, JBt, sUo, Z8n, U3s, B3s, iUo, j3s, W3s, G3s } from "../shared/chunk-5qjrv5ax.js";
import { fje, zq, Mxr } from "../core/conversation-engine.31gx.js";
import { _j, Ywt } from "../shared/chunk-wwfwgwca.js";
import { cn } from "../shared/chunk-dpjnt83j.js";
import { o, E, M, C, u, Ue, me, B, Oa } from "../vendor/zod/string-format.k395.js";
function G0t(e) {
  return e.map((t) => t.includes(", ") || t.includes('"') ? _(t) : t).join(", ");
}
function D(e) {
  let t = [], n = e;
  for (; ; ) {
    if (n.startsWith('"')) {
      let i = -1, s = false;
      for (let r = 1; r < n.length; r++) {
        let h = n[r];
        if (s) {
          s = false;
          continue;
        }
        if (h === "\\") {
          s = true;
          continue;
        }
        if (h === '"') {
          i = r;
          break;
        }
      }
      if (i === -1) return null;
      try {
        let r = JSON.parse(n.slice(0, i + 1));
        if (typeof r !== "string") return null;
        t.push(r);
      } catch {
        return null;
      }
      n = n.slice(i + 1);
    } else {
      let i = n.indexOf(", "), s = i === -1 ? n : n.slice(0, i);
      if (s.includes('"')) return null;
      t.push(s), n = i === -1 ? "" : n.slice(i);
    }
    if (n === "") break;
    if (!n.startsWith(", ")) return null;
    if (n = n.slice(2), n === "") return null;
  }
  return t;
}
var j = 32768, te = 8192, ne = 32768, oe = 2e3, se = IL - oe, ie = 2e3, re = /* @__PURE__ */ new Set(["answers", "annotations", "response", "followUp"]), ae = "afkTimeoutMs";
function H(e, t) {
  try {
    return ue(e, t);
  } catch {
    return S("threw");
  }
}
function ue(e, t) {
  if (!I(t)) return S("not_an_object");
  for (let p of Object.keys(t)) {
    if (p === ae) return S("host_field");
    if (re.has(p)) {
      if (Object.hasOwn(e, p)) return S("changed_shown_field");
      continue;
    }
    if (!Object.hasOwn(e, p)) return S("unknown_field");
    if (!fje(t[p], e[p]) && !(p === "questions" && !Object.hasOwn(e, "title") && ce(t[p], e[p]))) return S("changed_shown_field");
  }
  let { questions: n, extended: i } = le(v(e, "questions")), s = 0, r = 0, h = /* @__PURE__ */ new Set(), d = { ...e }, m = /* @__PURE__ */ Object.create(null), l = v(t, "answers");
  if (l !== void 0) {
    if (!I(l)) return S("answers");
    for (let p of Object.keys(l)) {
      let R = n.get(p);
      if (R === void 0) return S("answers");
      h.add(p);
      let T = l[p];
      if (typeof T === "string") {
        if (T.length > j) return S("answers");
        s += T.length, m[p] = T;
        continue;
      }
      if (!R.multiSelect || !Array.isArray(T) || T.length > R.optionCount + 1) return S("answers");
      let g = [];
      for (let O = 0; O < T.length; O++) {
        let b = T[O];
        if (typeof b !== "string" || b.length > j) return S("answers");
        g.push(b);
      }
      let y = G0t(g);
      s += y.length, m[p] = y;
    }
  }
  if (!Object.hasOwn(e, "answers")) d.answers = m;
  let w = v(t, "annotations");
  if (w !== void 0) {
    if (!I(w)) return S("annotations");
    let p = /* @__PURE__ */ Object.create(null);
    for (let R of Object.keys(w)) {
      let T = n.get(R), g = w[R];
      if (T === void 0 || !I(g)) return S("annotations");
      h.add(R);
      let y = {};
      for (let O of Object.keys(g)) {
        let b = g[O];
        switch (O) {
          case "preview":
            if (typeof b !== "string" || !de(T, b)) return S("annotations");
            r += b.length, y.preview = b;
            break;
          case "notes":
            if (typeof b !== "string" || b.length > te) return S("annotations");
            s += b.length, y.notes = b;
            break;
          default:
            return S("annotations");
        }
      }
      p[R] = y;
    }
    d.annotations = p;
  }
  let A = v(t, "response");
  if (A !== void 0) {
    if (typeof A !== "string" || A.length > j) return S("response");
    s += A.length, d.response = A;
  }
  let x = v(t, "followUp");
  if (x !== void 0) {
    if (typeof x !== "boolean" || !i) return S("follow_up");
    d.followUp = x;
  }
  for (let p of h) r += p.length;
  if (s > ne || s + r > se) return S("too_large");
  return { kind: "admitted", input: d };
}
function le(e) {
  let t = /* @__PURE__ */ new Map();
  if (!Array.isArray(e)) return { questions: t, extended: false };
  let n = e.length > 0;
  for (let i of e) {
    if (!I(i)) {
      n = false;
      continue;
    }
    if (typeof v(i, "kind") !== "string") n = false;
    let s = v(i, "question");
    if (typeof s !== "string") continue;
    let r = v(i, "options"), h = Array.isArray(r) ? r : [], d = /* @__PURE__ */ new Set();
    for (let m of h) {
      let l = I(m) ? v(m, "preview") : void 0;
      if (typeof l === "string") d.add(l);
    }
    t.set(s, { multiSelect: v(i, "multiSelect") === true, optionCount: h.length, previews: d });
  }
  return { questions: t, extended: n };
}
function ce(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return false;
  let n = t.map((i, s) => {
    let r = e[s];
    if (!I(i) || v(i, "kind") !== "choice" || !I(r) || Object.hasOwn(r, "kind")) return i;
    let { kind: h, ...d } = i;
    return d;
  });
  return fje(e, n);
}
function de(e, t) {
  if (e.previews.has(t)) return true;
  for (let n of e.previews) if (n.length <= ie && Ywt(n) === t && !_j(n)) return true;
  return false;
}
function I(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function v(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
function S(e) {
  return { kind: "refused", rule: e };
}
var K = f(() => u({ label: o().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."), description: o().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."), preview: o().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.") })), X = f(() => K().extend({ description: o().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.") }));
function Y(e) {
  return u({ question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'), header: o().describe(`Very short label displayed as a chip/tag (max ${F3s} chars). Examples: "Auth method", "Library", "Approach".`), options: C(e).min(2).max(4).describe(N4o() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too — group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."), multiSelect: M().default(false).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.") });
}
var N = f(() => Y(K())), pe = f(() => Y(X())), fe = ["choice", "text", "number"], G = f(() => u({ question: N().shape.question, header: N().shape.header, kind: B(fe).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options — for open-ended input. "number": a slider/stepper between min and max — for quantities.'), description: o().optional().describe("Optional single helper line shown under the question."), options: C(X()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`), multiSelect: N().shape.multiSelect, placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'), min: E().optional().describe('"number" questions only (required there): lowest value.'), max: E().optional().describe('"number" questions only (required there): highest value.'), step: E().positive().optional().describe('"number" questions only: increment between values.'), defaultValue: E().optional().describe('"number" questions only: the value the control starts at (within min..max).'), unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".') })), he = f(() => G().superRefine((e, t) => {
  let n = e.kind ?? "choice";
  for (let [h, d] of [["placeholder", "text"], ["min", "number"], ["max", "number"], ["step", "number"], ["defaultValue", "number"], ["unit", "number"]]) if (n !== d && e[h] !== void 0) t.addIssue({ code: "custom", path: [h], message: `${h} applies only to "${d}" questions.` });
  if (n === "choice") {
    if (e.options.length < 2) t.addIssue({ code: "custom", path: ["options"], message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.' });
    return;
  }
  if (e.options.length > 0) t.addIssue({ code: "custom", path: ["options"], message: `A "${n}" question takes no options; remove them or omit kind to ask a choice question.` });
  if (e.multiSelect) t.addIssue({ code: "custom", path: ["multiSelect"], message: `multiSelect applies only to choice questions, not "${n}".` });
  if (n !== "number") return;
  let { min: i, max: s } = e;
  if (i === void 0 || s === void 0 || !(i < s)) {
    t.addIssue({ code: "custom", path: ["min"], message: "A number question needs numeric min and max with min < max." });
    return;
  }
  let { defaultValue: r } = e;
  if (r !== void 0 && (r < i || r > s)) t.addIssue({ code: "custom", path: ["defaultValue"], message: "defaultValue must lie within min..max." });
})), J = f(() => {
  let e = u({ preview: o().optional().describe("The preview content of the selected option, if the question used previews."), notes: o().optional().describe("Free-text notes the user added to their selection.") });
  return me(o(), e).optional().describe("Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.");
}), Q = { check: (e) => {
  let t = e.questions.map((n) => n.question);
  if (t.length !== new Set(t).size) return false;
  for (let n of e.questions) {
    let i = n.options.map((s) => s.label);
    if (i.length !== new Set(i).size) return false;
  }
  return true;
}, message: "Question texts must be unique, option labels must be unique within each question" }, L = 4294967295, P = 256, we = f(() => Oa((e) => {
  if (!Array.isArray(e)) return e;
  let t = e.length;
  if (!Number.isInteger(t) || t < 0 || t > L) return e;
  let n = "";
  for (let i = 0; i < t; i++) {
    let s = e[i];
    if (typeof s !== "string") return e;
    n = i === 0 ? s : n + ", " + s;
  }
  return n;
}, o())), Z = f(() => ({ answers: me(o(), we()).optional().describe("User answers collected by the permission component"), annotations: J(), metadata: u({ source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.') }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.") }));
function ee(e) {
  return Ue({ questions: C(e).min(1).max(4).describe(N4o() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more — split into multiple calls instead." : "Questions to ask the user (1-4 questions)"), ...Z() }).refine(Q.check, { message: Q.message });
}
var ye = f(() => ee(N())), ge = f(() => ee(pe())), be = f(() => Ue({ title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'), questions: C(he()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more — split into multiple calls instead."), ...Z() }).refine(Q.check, { message: Q.message })), Se = f(() => u({ questions: C(N()).describe("The questions that were asked"), answers: me(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"), response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"), annotations: J(), afkTimeoutMs: E().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.") })), ke = f(() => Se().extend({ questions: C(G()).describe("The questions that were asked"), followUp: M().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.") }));
var Qen = "(notes only)";
function W(e) {
  return `No response after ${Math.round(e / 1e3)}s — the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}
function V(e) {
  return { ..."title" in e && e.title && { title: e.title }, questions: Gxe() ? e.questions.map((t) => ({ ...t, kind: "kind" in t && t.kind ? t.kind : "choice" })) : e.questions, ...e.metadata && { metadata: e.metadata } };
}
var Nte = tn({ name: ns, searchHint: "prompt the user with a multiple-choice question", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return U3s;
}, async prompt({ model: e, leanPrompt: t, tools: n, leanRewrite: i }) {
  let s = JO({ model: e, leanPrompt: t }), r = Mxr(n), h = s && mG({ model: e, leanRewrite: i }) ? r ? RWo : nYs : r ? iUo : j3s, d = "";
  if (s) {
    let p = k("tengu_cinder_plover", "").trim();
    d = p ? `
${p}
` : G3s;
  }
  let m = k("tengu_cinder_wren", ""), l = typeof m === "string" ? m.trim() : "", w = l ? `
${l}
` : "", A = Gxe() ? W3s : "", x = NXr();
  if (x === void 0) return h + d + w + A;
  return h + d + w + A + B3s[x];
}, get inputSchema() {
  if (Gxe()) return be();
  return nos() ? ge() : ye();
}, get outputSchema() {
  return ke();
}, userFacingName() {
  return "";
}, validationErrorSteer(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = e.questions;
  if (!Array.isArray(t)) return null;
  let n = false, i = t.length;
  if (!Number.isInteger(i) || i < 0 || i > L) return null;
  for (let s = 0; s < i && s < P; s++) {
    let r = t[s];
    if (typeof r !== "object" || r === null || Array.isArray(r)) continue;
    if (Gxe()) {
      let d = r.kind;
      if (d === "text" || d === "number") continue;
    }
    let h = r.options;
    if (Array.isArray(h) && h.length < 2) {
      n = true;
      break;
    }
  }
  if (!n) return null;
  if (Gxe()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
  return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
}, isEnabled() {
  return zq();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  let t = sUo, n = Gxe();
  try {
    let i = typeof e === "object" && e !== null ? e.questions : void 0;
    if (!Array.isArray(i)) return "[malformed AskUserQuestion input]";
    let s = [], r = i.length;
    if (!Number.isInteger(r) || r < 0 || r > L) return "[malformed AskUserQuestion input]";
    for (let d = 0; d < r; d++) {
      if (s.length >= P) {
        s.push(`[… further question entries elided: reported length ${r}]`);
        break;
      }
      let m = i[d];
      if (typeof m !== "object" || m === null) {
        let g = t(m);
        s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
        continue;
      }
      let l = m.options, w = [];
      if (Array.isArray(l)) {
        let g = l.length;
        for (let y = 0; y < g; y++) {
          if (w.length >= P) {
            w.push("[… further option entries elided]");
            break;
          }
          let O = l[y];
          if (typeof O !== "object" || O === null) {
            w.push(`(${y + 1}) "${t(O)}"`);
            continue;
          }
          let b = O, q = [`(${y + 1}) "${t(b.label)}"`], z = t(b.description);
          if (z) q.push(`— ${z}`);
          let U = t(b.preview);
          if (U) q.push(`[preview: ${U}]`);
          w.push(q.join(" "));
        }
      }
      let A = w.join(" "), x = m.multiSelect === true ? " [multiSelect]" : "", p = t(m.header), R = p ? ` [header: ${p}]` : "", T = "";
      if (n) {
        let g = m;
        for (let [y, O] of [["kind", t(g.kind)], ["description", t(g.description)], ["placeholder", t(g.placeholder)], ["min", Z8n(g.min)], ["max", Z8n(g.max)], ["step", Z8n(g.step)], ["default", Z8n(g.defaultValue)], ["unit", t(g.unit)]]) if (O) T += ` [${y}: ${O}]`;
      }
      s.push(`"${t(m.question)}"${R}${T}${x} options: ${A}`);
    }
    if (s.length === 0) return "[malformed AskUserQuestion input]";
    let h = n ? t(e.title) : "";
    return (h ? `[title: ${h}] ` : "") + s.join(" | ");
  } catch {
    return "[malformed AskUserQuestion input]";
  }
}, admitCardAnswer: H, shownCardInput: V, requiresUserInteraction() {
  return true;
}, renderToolUseMessage() {
  return null;
}, create() {
  return { async validateInput({ questions: e }) {
    if (NXr() !== "html") return { result: true };
    for (let t of e) for (let n of t.options) {
      let i = Ae(n.preview);
      if (i) return { result: false, message: `Option "${n.label}" in question "${t.question}": ${i}`, errorCode: 1 };
    }
    return { result: true };
  }, async checkPermissions(e) {
    return { behavior: "ask", message: "Answer questions?", updatedInput: V(e) };
  }, async call(e) {
    let { answers: t = {}, annotations: n } = e, s = e.questions.map((l) => Array.isArray(l.options) ? l : { ...l, options: [] }), { response: r, afkTimeoutMs: h, followUp: d } = e, m = F(s, ({ question: l }) => {
      let w = t[l];
      return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== Qen;
    });
    return a("tengu_ask_user_question_completed", { extended: Gxe(), questionCount: s.length, choiceCount: F(s, (l) => (l.kind ?? "choice") === "choice" && !l.multiSelect), multiSelectCount: F(s, (l) => (l.kind ?? "choice") === "choice" && l.multiSelect), textCount: F(s, (l) => l.kind === "text"), numberCount: F(s, (l) => l.kind === "number"), answerCount: m, followUp: d === true, outcome: c(h ? "afk_timeout" : d ? "follow_up" : r?.trim() ? "responded" : m > 0 ? "answered" : "unanswered"), ...e.metadata?.source && { source_hash: cn(e.metadata.source) } }), { data: { questions: s, answers: t, ...r?.trim() && { response: r }, ...n && { annotations: n }, ...h && { afkTimeoutMs: h }, ...d === true && { followUp: true } } };
  } };
}, mapToolResultToToolResultBlockParam({ questions: e, answers: t, response: n, annotations: i, afkTimeoutMs: s, followUp: r }, h) {
  let d = e.map(({ question: l }) => {
    let w = so(t, l), A = i && so(i, l), x = w && w !== Qen;
    if (!x && !A?.notes) return null;
    let p = [x ? `"${l}"="${w}"` : `"${l}"=(no option selected)`];
    if (A?.preview) p.push(`selected preview:
${A.preview}`);
    if (A?.notes) p.push(`notes: ${A.notes}`);
    return p.join(" ");
  }).filter((l) => l !== null).join(", "), m;
  if (s) m = d ? `${W(s)}

Before going idle the user had selected: ${d}.` : W(s);
  else if (r) {
    let l = n?.trim() ? ` They also wrote: "${n}".` : "";
    m = d ? `${JBt} before you proceed. So far they answered: ${d}.${l} Call ${ns} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${JBt} before answering.${l} Call ${ns} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
  } else if (n?.trim()) m = `The user responded: ${n}`;
  else if (d) m = e.every(({ question: w, options: A, multiSelect: x, kind: p, min: R, max: T }) => {
    if ((i && so(i, w))?.notes) return false;
    if (p === "text" || p === "number") {
      let q = so(t, w);
      if (q === void 0 || q === "") return true;
      if (p === "text" || typeof q !== "string") return false;
      let z = q.trim(), U = Number(z);
      return /^-?\d+(\.\d+)?$/.test(z) && Number.isFinite(U) && (R === void 0 || U >= R) && (T === void 0 || U <= T);
    }
    let y = so(t, w), O = new Set(A.map((q) => q.label));
    if (Array.isArray(y)) return x && y.length > 0 && y.every((q) => O.has(q));
    if (!y || y === Qen) return true;
    if (O.has(y)) return true;
    if (!x) return false;
    let b = D(y);
    return b !== null && b.length >= 1 && G0t(b) === y && b.every((q) => O.has(q));
  }) ? `Your questions have been answered: ${d}. You can now continue with these answers in mind.` : `The user answered: ${d}. Read the answers carefully — they may request clarification, changes, or that you not proceed — and follow what they actually say.`;
  else m = "The user did not answer the questions.";
  return { type: "tool_result", content: m, tool_use_id: h };
} });
function Ae(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}
export {
  G0t,
  Nte,
  Qen
};
