// linux/artifacts/extract-inline-script-hashes.js — Claude Code 2.1.310（linux）模块 chunk-yn6dvbvf.js
import { dCr, X1n } from "../vendor/parse5/unexpected-character-in-attribute-name.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import { re } from "../shared/chunk-d2c47492.js";
import "../shared/chunk-dda594a8.js";
import { aWt, d7, c7 } from "../vendor/highlight/file-path.js";
import { P1e, Cwo, Owo, Y1n, Mwo, aCr, Dwo, enn } from "./ws-status-note.js";
import { Hwo } from "../vendor/parse5/annotation-xml.35fd.js";
import { Yft } from "../shared/chunk-a8f5d051.js";
import { tnn, Gme, Uv } from "../vendor/parse5/chunk-0d75725b.js";
import { et } from "../shared/chunk-061dbb8e.js";
var S = new RegExp(`^${P1e}$`), W = "http://www.w3.org/2000/svg", _ = "http://www.w3.org/1998/Math/MathML", x = 512;
function ee(e) {
  let t = /* @__PURE__ */ new Set(), h = (s) => {
    if ((s.tagName ?? "").toLowerCase() === "script") {
      if ((Uv(s, "type") ?? "").trim().toLowerCase() !== "application/json" && Uv(s, "src") === void 0) t.add(et(b(s)));
    }
    for (let i of s.childNodes ?? []) h(i);
    for (let i of s.content?.childNodes ?? []) h(i);
  };
  return h(Gme(X1n(e))), t;
}
function b(e) {
  let t = "";
  for (let h of e.childNodes ?? []) if (h.nodeName === "#text") t += h.value ?? "";
  return t;
}
var N = 117;
function o(e, t) {
  let h = t.get(e);
  if (h !== void 0) return h;
  let s = `<${e.tagName ?? e.nodeName}`, i = false;
  for (let f of e.attrs ?? []) {
    if (s.length > N) {
      i = true;
      break;
    }
    s += ` ${re(f.name, 40).replace(/[<>"'=]/g, "")}="…"`;
  }
  s += i ? " …>" : ">";
  let r = c7(s), p = (r.length > 120 ? `${re(r, N)}…` : r).replace(/\s+/g, " ");
  return t.set(e, p), p;
}
var T = /* @__PURE__ */ new Set(["href", "xlink:href", "src", "action", "formaction", "poster", "cite"]), A = /(^|[\t\n\f\r ])opener([\t\n\f\r ]|$)/i, M = /* @__PURE__ */ new Set(["iframe", "embed", "object", "base", "form", "link", "noscript", "frameset", "frame", "plaintext", "select"]), V = /* @__PURE__ */ new Set(["select", "template", "frameset", "colgroup", "caption", "table", "tbody", "thead", "tfoot", "tr", "td", "th", "body", "head", "html"]), H = /* @__PURE__ */ new Set(["xmp", "noembed", "noframes", "plaintext", "noscript"]), O = /* @__PURE__ */ new Set(["animate", "set", "animatetransform", "animatecolor"]), G = /* @__PURE__ */ new Set(["a", "image"]), P = 200;
class L extends Array {
  static [Symbol.species] = Array;
  overflow = 0;
  push(...e) {
    for (let t of e) if (this.length < P) super.push(t);
    else this.overflow++;
    return this.length;
  }
}
function z(e, t, h, s) {
  let i = (e.tagName ?? "").toLowerCase(), r = e.namespaceURI === W, a = t.violations;
  for (let n of e.attrs ?? []) {
    let l = n.name.toLowerCase();
    if (l.startsWith("on") && l.length > 2) {
      a.push({ rule: "event-handler-attribute", where: o(e, t.snippets), hint: `Remove the ${c7(re(n.name, 60))} attribute — inline event handlers are not allowed; interactivity comes only from the blessed scripts.` });
      continue;
    }
    if (l === "ping") {
      a.push({ rule: "ping-attribute", where: o(e, t.snippets), hint: "Remove the ping attribute — it is a scriptless beacon." });
      continue;
    }
    if (l === "referrerpolicy") {
      a.push({ rule: "referrerpolicy-attribute", where: o(e, t.snippets), hint: "Remove the referrerpolicy attribute — the page keeps its default referrer policy." });
      continue;
    }
    if (l === "rel" && A.test(n.value)) {
      a.push({ rule: "rel-opener-attribute", where: o(e, t.snippets), hint: 'Remove the opener token from rel — it hands the opened page a window.opener handle back to this one. rel="noopener noreferrer" is fine.' });
      continue;
    }
    if (l === "target") {
      if (!/^_(?:blank|self)$/i.test(n.value)) a.push({ rule: "target-attribute", where: o(e, t.snippets), hint: 'Only target="_blank" or target="_self" are allowed — other targets navigate outside this page.' });
      continue;
    }
    if (l === "data-anchor" && !Cwo.test(n.value)) {
      a.push({ rule: "bad-anchor-value", where: o(e, t.snippets), hint: "data-anchor must be 1-120 chars of letters, digits, space, or . _ : / @ # ( ) + - (no markup or quote characters)." });
      continue;
    }
    if (l === "srcset") {
      for (let v of n.value.split(",")) {
        let w = v.trim().split(/\s+/)[0];
        if (w !== void 0 && w !== "" && !Yft(w)) a.push({ rule: "unsafe-url", where: o(e, t.snippets), hint: `srcset entry "${c7(re(w, 60))}" — only http(s), mailto, relative, or fragment URLs are allowed.` });
      }
      continue;
    }
    if (r && (l === "href" || l === "xlink:href")) {
      if (G.has(i)) {
        if (!Yft(n.value)) a.push({ rule: "unsafe-url", where: o(e, t.snippets), hint: "Only http(s), mailto, relative, or fragment URLs are allowed." });
      } else if (!d7(n.value).startsWith("#")) a.push({ rule: "svg-nonlocal-reference", where: o(e, t.snippets), hint: `<${c7(re(i, 60))}> may only reference fragments within the page (href="#…").` });
      continue;
    }
    if (T.has(l) && !Yft(n.value)) a.push({ rule: "unsafe-url", where: o(e, t.snippets), hint: "Only http(s), mailto, relative, or fragment URLs are allowed." });
  }
  let p = Uv(e, "data-ws-state");
  if (p !== void 0) t.banners.push({ value: p, node: e });
  let f = Uv(e, Owo);
  if (f !== void 0) t.deliverableKinds.push(f);
  let g = !r && i === "script" && (Uv(e, "type") ?? "").trim().toLowerCase() === "application/json" && Uv(e, "src") === void 0 && Uv(e, "id") === "ws-decisions";
  if (Uv(e, "id") === "ws-decisions" && !g) t.wsIdMisuse.push(e), a.push({ rule: "island-id-misuse", where: o(e, t.snippets), hint: "Only the ws-decisions JSON script element may carry this id — the page script locates the island by it." });
  let d = s, c = Uv(e, "data-decision-id");
  if (c !== void 0) if (d = c, !S.test(c)) a.push({ rule: "bad-decision-id", where: o(e, t.snippets), hint: "data-decision-id must match the slug grammar." });
  else {
    let n = t.items.get(c);
    if (n !== void 0) n.count++;
    else t.items.set(c, { state: Uv(e, "data-decision-state") ?? "", resolvedChoice: Uv(e, "data-resolved-choice"), resolvedCustom: Uv(e, "data-resolved-custom"), leanChoice: Uv(e, "data-lean-choice"), choices: [], count: 1 });
  }
  let u = Uv(e, "data-choice");
  if (u !== void 0) if (d === null) t.orphanChoices.push(e);
  else if (!S.test(u)) a.push({ rule: "bad-choice-token", where: o(e, t.snippets), hint: "data-choice must match the slug grammar." });
  else t.items.get(d)?.choices.push(u);
  if (i === "script") {
    if (r) return a.push({ rule: "svg-script", where: o(e, t.snippets), hint: "Remove it — scripts are not allowed inside SVG diagrams." }), d;
    if (Uv(e, "src") !== void 0) {
      if (!(Uv(e, "src") === aWt && (e.attrs ?? []).length === 1 && (e.childNodes ?? []).length === 0)) a.push({ rule: "script-src", where: o(e, t.snippets), hint: "External scripts are not allowed — the page must be self-contained." });
      return d;
    }
    if ((Uv(e, "type") ?? "").trim().toLowerCase() === "application/json") {
      if (g) t.islands.push({ text: b(e), node: e });
      else a.push({ rule: "unknown-data-island", where: o(e, t.snippets), hint: "Only the ws-decisions island may use a JSON script element — the session extracts the island mechanically, and a second JSON block could confuse that extraction." });
      return d;
    }
    let l = et(b(e));
    if (!h.has(l)) a.push({ rule: "script-not-blessed", where: o(e, t.snippets), hint: "Inline scripts must be byte-identical copies of the blessed template scripts. Re-copy the script from the template; never edit or add scripts." });
    return d;
  }
  if (i === "math" && e.namespaceURI === _) return a.push({ rule: "mathml-not-allowed", where: o(e, t.snippets), hint: "<math> is not allowed on a workshop page — MathML subtrees are serialization-hazard surfaces (mutation-XSS carriers); render formulas as text or SVG." }), d;
  if (r && i === "style") return a.push({ rule: "svg-style", where: o(e, t.snippets), hint: "Remove it — <style> inside SVG is a serialization-hazard surface (mutation-XSS carrier); use the page-level <style> block or SVG presentation attributes." }), d;
  if (r && H.has(i)) return a.push({ rule: "svg-rawtext-hazard", where: o(e, t.snippets), hint: `Remove it — <${i}> inside SVG is a serialization-hazard surface (mutation-XSS carrier); SVG diagrams need none of the rawtext-named elements.` }), d;
  if (r && (i === "iframe" || i === "embed" || i === "object")) return a.push({ rule: "refused-element", where: o(e, t.snippets), hint: `<${i}> is not allowed on a workshop page, inside or outside SVG.` }), d;
  if (r && V.has(i)) return a.push({ rule: "refused-element", where: o(e, t.snippets), hint: `Remove it — <${i}> is not an SVG element, and browsers and this verifier parse what follows it differently, so later markup could go uninspected.` }), d;
  if (!r && M.has(i)) return a.push({ rule: "refused-element", where: o(e, t.snippets), hint: i === "form" ? "Forms are not allowed (scriptless submission is an exfiltration channel). Inputs and buttons WITHOUT a form are fine for mock-ups." : i === "link" ? "Link elements are not allowed — inline styles in the <style> block instead." : i === "noscript" ? "noscript is not allowed — its contents bypass inspection (raw text to scripting-enabled parsers) yet render for JS-off viewers." : i === "select" ? "<select> is not allowed — browsers and this verifier parse its contents differently, so markup inside it would go uninspected. Mock up the control with a list or buttons instead." : i === "frameset" || i === "frame" ? `<${i}> is not allowed — frameset documents replace the page with embedded documents.` : `<${i}> is not allowed on a workshop page.` }), d;
  if (!r && i === "meta" && Uv(e, "http-equiv") !== void 0) return a.push({ rule: "meta-http-equiv", where: o(e, t.snippets), hint: "http-equiv metas (CSP/refresh) are not allowed; a charset meta is fine." }), d;
  if (!r && i === "meta" && ["referrer", "origin-trial"].includes((Uv(e, "name") ?? "").trim().toLowerCase())) return a.push({ rule: "meta-behavior", where: o(e, t.snippets), hint: "referrer and origin-trial metas are not allowed; charset/viewport/description metas are fine." }), d;
  if (r && i === "foreignobject") return a.push({ rule: "svg-foreignobject", where: o(e, t.snippets), hint: "foreignObject embeds arbitrary HTML inside SVG — draw with native SVG shapes and <text> instead." }), d;
  if (r && O.has(i)) {
    let n = (Uv(e, "attributename") ?? "").trim().toLowerCase();
    if (n.startsWith("on") || T.has(n) || n === "style" || n === "class" || n === "srcset" || n === "data-anchor" || n === "target" || n === "rel" || n === "ping" || n === "referrerpolicy") return a.push({ rule: "svg-smil-target", where: o(e, t.snippets), hint: "SMIL may only animate geometry and paint properties — never URL (href/src/srcset…), navigation (target/rel/ping/referrerpolicy), script (on*), style/class, or workshop-surface attributes." }), d;
  }
  return d;
}
function y(e, t, h, s, i = false, r = 0) {
  if (r > x) {
    if (!t.nestingTruncated) t.nestingTruncated = true, t.violations.push({ rule: "markup-nests-too-deeply", where: o(e, t.snippets), hint: `Markup nests deeper than ${x} elements — browsers flatten past this depth, so restructure the page with flatter markup.` });
    return;
  }
  let a = s;
  if (e.tagName !== void 0) {
    if (a = z(e, t, h, s), i && (Uv(e, "id") === "ws-decisions" || Uv(e, "data-decision-id") !== void 0 || Uv(e, "data-choice") !== void 0)) t.violations.push({ rule: "template-content-surface", where: o(e, t.snippets), hint: "Workshop surface (the island or decision markup) must not sit inside <template> content — the page script can never see it there." });
  }
  for (let p of e.childNodes ?? []) y(p, t, h, a, i, r + 1);
  for (let p of e.content?.childNodes ?? []) y(p, t, h, a, true, r + 1);
}
function te(e, t, h = "strict") {
  try {
    if (Hwo(e)) return { ok: false, violations: [{ rule: "markup-nests-too-deeply", where: "(document)", hint: "The page has too many nested or unclosed elements to verify affordably — close open tags and restructure with flatter markup." }] };
    return j(e, t, h);
  } catch (s) {
    return { ok: false, violations: [{ rule: "verifier-error", where: "(document)", hint: `The verifier could not examine this page (${c7(s instanceof Error ? s.name : "error")}) — refusing rather than publishing unexamined markup; simplify the page structure.` }] };
  }
}
function j(e, t, h) {
  let s = C(e, t, h);
  if (!s.ok || !s.workshopSurface) return s;
  let i = R(e), r = C(i, t, "strict");
  if (!r.ok) return { ok: false, violations: [{ rule: "reparse-divergence", where: "(document)", hint: "The page verifies as written, but the parse→serialize round trip every decision confirm republishes does not — restructure the markup flagged below so the serialized form stays within contract." }, ...r.violations.slice(0, 6)] };
  let a = R(i);
  if (a !== i) {
    let p = 0, f = Math.min(i.length, a.length);
    while (p < f && i[p] === a[p]) p++;
    let g = Math.max(0, p - 40), d = i.charCodeAt(g);
    if (d >= 56320 && d <= 57343) g++;
    let c = i.slice(g, p + 80), u = c.charCodeAt(c.length - 1);
    if (u >= 55296 && u <= 56319) c = c.slice(0, -1);
    return { ok: false, violations: [{ rule: "reparse-not-fixed-point", where: `(document, first divergence near "…${c7(re(c, 117).replace(/\s+/g, " "))}…")`, hint: "The page serializes to different bytes on a second parse→serialize round, so each decision confirm would keep rewriting it — this indicates parser/serializer-divergent markup; simplify the construct at the quoted position." }] };
  }
  return s;
}
function R(e) {
  let t = Gme(X1n(e));
  return k(t), dCr(t);
}
var D = /* @__PURE__ */ new Set(["pre", "textarea", "listing"]);
function k(e) {
  if (D.has((e.tagName ?? "").toLowerCase()) && e.namespaceURI === tnn) {
    let t = e.childNodes?.[0];
    if (t !== void 0 && t.nodeName === "#text" && (t.value ?? "").startsWith(`
`)) t.value = `
${t.value}`;
  }
  for (let t of e.childNodes ?? []) k(t);
  for (let t of e.content?.childNodes ?? []) k(t);
}
function C(e, t, h) {
  let s = { violations: new L(), snippets: /* @__PURE__ */ new WeakMap(), nestingTruncated: false, islands: [], banners: [], deliverableKinds: [], wsIdMisuse: [], items: /* @__PURE__ */ new Map(), orphanChoices: [] }, i = Gme(X1n(e, { sourceCodeLocationInfo: true }));
  y(i, s, t, null);
  let r = s.violations, a = 0, p = "in-progress", f = aCr(e, "ws-decisions").length, g = s.nestingTruncated;
  if (h === "probe" && !g && s.islands.length === 0 && s.wsIdMisuse.length === 0 && f === 0) return { ok: true, workshopSurface: false };
  for (let c of s.islands) {
    let u = c.node.sourceCodeLocation?.startTag;
    if (u === void 0 || u === null) {
      r.push({ rule: "island-noncanonical-spelling", where: o(c.node, s.snippets), hint: "The island element has no source location — refusing rather than skipping the canonical-spelling check." });
      continue;
    }
    let n = e.slice(u.startOffset, u.endOffset), l = aCr(n, "ws-decisions");
    if (l.length !== 1 || l[0][1] !== n.length) r.push({ rule: "island-noncanonical-spelling", where: o(c.node, s.snippets), hint: `The ws-decisions island's open tag must END with the exact bytes ${Mwo} (double-quoted id attribute, last in the tag, as the template ships it; a page read back from the server may carry the server's own data-id after the id, nothing else) — the session's mechanical extraction scans for that sequence.` });
    let m = c.node.sourceCodeLocation?.endTag;
    if (m === void 0 || m === null) {
      r.push({ rule: "island-noncanonical-spelling", where: o(c.node, s.snippets), hint: "The island element has no close-tag source location — refusing rather than skipping the canonical-spelling check." });
      continue;
    }
    if (e.slice(m.startOffset, m.endOffset) !== "<\/script>") r.push({ rule: "island-noncanonical-spelling", where: o(c.node, s.snippets), hint: "The ws-decisions island's close tag must be exactly the lowercase <\/script> as the template ships it — case-variant or attribute-bearing closes split the island locators." });
  }
  let d = f;
  if (d !== s.islands.length) r.push({ rule: "island-sentinel-ambiguity", where: "(document)", hint: `The island open-tag ending ${Mwo} (counting the form a server read-back carries, with the server's data-id after the id) appears ${d} time(s) but ${s.islands.length} real island element(s) exist — the session's mechanical island extraction scans for exactly that sequence. Keep the island's id attribute LAST in its script tag (as the template ships it), and escape or rephrase any other text containing the sequence.` });
  for (let c of s.orphanChoices) r.push({ rule: "orphan-choice", where: o(c, s.snippets), hint: "data-choice elements must sit inside a data-decision-id item — a free-floating option row is a forged affordance." });
  if (s.islands.length > 1) r.push({ rule: "duplicate-island", where: o(s.islands[1].node, s.snippets), hint: "Exactly one ws-decisions island per page." });
  else if (s.islands.length === 0) {
    if (s.items.size > 0) r.push({ rule: "missing-island", where: "(document)", hint: "Decision items exist but there is no ws-decisions island — the session reads decisions ONLY from the island." });
  } else {
    let c = Dwo(s.islands[0].text);
    if (c === null) r.push({ rule: "island-grammar", where: o(s.islands[0].node, s.snippets), hint: 'The ws-decisions island failed the entry grammar: one {"items":[…]} object, each entry exactly {id, opts, state, choice, custom} with slug ids and opts, state open|resolved, and the resolution invariant (open: neither choice nor custom; resolved: exactly one). Re-emit the island from your decision blocks.' });
    else {
      let u = new Set(c.map((n) => n.id));
      for (let n of c) {
        let l = s.items.get(n.id);
        if (l === void 0) {
          r.push({ rule: "island-markup-mismatch", where: `island entry "${n.id}"`, hint: "Every island entry needs exactly one matching data-decision-id element." });
          continue;
        }
        if (l.count !== 1) {
          r.push({ rule: "duplicate-decision-item", where: `data-decision-id "${n.id}"`, hint: "Each decision id may appear on exactly one element." });
          continue;
        }
        if (l.state !== n.state) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: `Island says state "${c7(n.state)}" but the markup says "${c7(re(l.state, 60))}" — flip them together.` });
        if (n.state === "open" && (l.resolvedChoice !== void 0 || l.resolvedCustom !== void 0)) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: "An open item must carry neither data-resolved-choice nor data-resolved-custom — remove the stray resolution attribute." });
        if (n.state === "resolved") {
          if ((l.resolvedChoice ?? null) !== n.choice) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: "data-resolved-choice must equal the island entry choice (and be absent for typed answers)." });
          if ((l.resolvedCustom ?? null) !== n.custom) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: "data-resolved-custom must equal the island entry custom, byte for byte (and be absent for option picks)." });
        }
        let m = [...l.choices].sort(), v = [...n.opts].sort();
        if (m.length !== v.length || m.some((w, I) => w !== v[I])) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: "The data-choice rows must match the island opts exactly, one row per opt." });
        if (l.leanChoice !== void 0 && !n.opts.includes(l.leanChoice)) r.push({ rule: "island-markup-mismatch", where: `decision "${n.id}"`, hint: "data-lean-choice must be one of the island entry opts." });
      }
      for (let n of s.items.keys()) if (!u.has(n)) r.push({ rule: "forged-decision-item", where: `data-decision-id "${n}"`, hint: "Every decision item must have a ws-decisions island entry — a call-item without one is a forged decision surface." });
      E(s, c, r), a = c.length, p = enn(c);
    }
  }
  if (s.islands.length === 0) E(s, [], r);
  if (r.overflow > 0) r[r.length] = { rule: "violation-cap-reached", where: "(document)", hint: `${r.overflow} more violations were found but not recorded — fix the violation classes listed above and re-publish.` };
  return r.length === 0 ? { ok: true, workshopSurface: true, decisionCount: a, workshopState: p, deliverables: Y1n(s.deliverableKinds) } : { ok: false, violations: r };
}
var U = /* @__PURE__ */ new Set(["in-progress", "ready", "started"]);
function E(e, t, h) {
  if (e.banners.length === 0) return;
  let s = enn(t);
  for (let i of e.banners) if (!U.has(i.value)) h.push({ rule: "banner-state-invalid", where: o(i.node, e.snippets), hint: "data-ws-state must be one of in-progress|ready|started." });
  else if (i.value !== s) h.push({ rule: "banner-state-mismatch", where: o(i.node, e.snippets), hint: `data-ws-state says "${c7(i.value)}" but the island derives "${s}" — flip them together (text stays yours; the attribute is the wire contract).` });
}
export {
  ee as extractInlineScriptHashes,
  te as verifyWorkshopHtml
};
