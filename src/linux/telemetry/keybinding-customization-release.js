// linux/telemetry/keybinding-customization-release.js — Claude Code 2.1.310（linux）模块 chunk-ce3m2y48.js
import { FE } from "../fs/files-directories.js";
import { b, c, Hn } from "../agents/third-party.js";
import { d, G } from "./anthropic-workspace-id.js";
import { De } from "../fs/async-hooks.93b1.js";
import { L, ye } from "../context/not-admin-owned.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, f } from "./chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { bt, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { Ze, kl } from "../shared/chunk-d2c47492.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { mfe } from "../shell/invalid-type.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { Sj, aei, XKe, QVo, dei, n2t, n0e, KKr } from "../permissions/caps-lock.js";
import { o, u, me } from "../vendor/zod/string-format.js";
import { vt } from "./chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
import { readFileSync as an } from "fs";
import { readFile as $n, stat as Tn } from "fs/promises";
import { dirname as Nn, join as Ln } from "path";
function dre(n) {
  let r = n.split("+"), e = { key: "", ctrl: false, alt: false, shift: false, meta: false, super: false };
  for (let s of r) {
    let l = s.toLowerCase();
    switch (l) {
      case "ctrl":
      case "control":
        e.ctrl = true;
        break;
      case "alt":
      case "opt":
      case "option":
        e.alt = true;
        break;
      case "shift":
        e.shift = true;
        break;
      case "meta":
        e.meta = true;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        e.super = true;
        break;
      case "esc":
        e.key = "escape";
        break;
      case "return":
        e.key = "enter";
        break;
      case "del":
        e.key = "delete";
        break;
      case "space":
        e.key = " ";
        break;
      case "↑":
        e.key = "up";
        break;
      case "↓":
        e.key = "down";
        break;
      case "←":
        e.key = "left";
        break;
      case "→":
        e.key = "right";
        break;
      default:
        e.key = l;
        break;
    }
  }
  return e;
}
function RQ(n) {
  if (n === " ") return [dre("space")];
  return n.trim().split(/\s+/).map(dre);
}
function hn(n) {
  let r = [];
  if (n.ctrl) r.push("ctrl");
  if (n.alt) r.push("alt");
  if (n.shift) r.push("shift");
  if (n.meta) r.push("meta");
  if (n.super) r.push("cmd");
  let e = nn(n.key);
  return r.push(e), r.join("+");
}
function nn(n) {
  switch (n) {
    case "escape":
      return "Esc";
    case " ":
      return "space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "↑";
    case "down":
      return "↓";
    case "left":
      return "←";
    case "right":
      return "→";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return n;
  }
}
function AG(n) {
  return n.map(hn).join(" ");
}
function G$r(n, r = "linux") {
  let e = [];
  if (n.ctrl) e.push("ctrl");
  if (n.alt || n.meta) e.push(r === "macos" ? "opt" : "alt");
  if (n.shift) e.push("shift");
  if (n.super) e.push(r === "macos" ? "cmd" : "super");
  let s = nn(n.key);
  return e.push(s), e.join("+");
}
function qhe(n, r = "linux") {
  return n.map((e) => G$r(e, r)).join(" ");
}
function Yhe(n) {
  let r = [];
  for (let e of n) for (let [s, l] of Object.entries(e.bindings)) r.push({ chord: RQ(s), action: l, context: e.context });
  return r;
}
var wn = p(() => u({ context: o(), bindings: me(o(), o().nullable()) }));
function _n(n) {
  return wn().safeParse(n).success;
}
function P(n) {
  return Array.isArray(n) && n.every(_n);
}
var sn = n2t, en = [{ name: "ctrl", aliases: ["control"] }, { name: "alt", aliases: ["opt", "option"] }, { name: "shift" }, { name: "meta" }, { name: "cmd", aliases: ["command", "super", "win"] }], tn = ["ctrl", "alt", "shift", "meta", "super"], rn = 3, E = 80;
function Kn(n) {
  return sn.includes(n);
}
function xn(n, r) {
  let e = n.trim(), s = n === " " ? [] : e.split(/\s+/), l = n !== " " && n.split("+").some((B) => !B.trim()), y = /\s\+|\+\s/.test(e) && s.some((B) => dre(B).key === "");
  if (l || y) {
    let B = kl(n, E);
    return { type: "parse_error", severity: "error", message: l ? `Empty key part in "${B}"` : `A space next to "+" splits "${B}" into separate presses, and one of them has no key`, key: n, suggestion: l ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"' };
  }
  let h = [], _ = [], w = true;
  for (let B of s) {
    let J = B.split("+"), kn = J.findLastIndex((W) => dre(W).key !== ""), Z = dre(B), R = [];
    for (let [W, N] of J.entries()) {
      if (W === kn || dre(N).key === "") {
        R.push(N);
        continue;
      }
      h.push(N);
      let U = mfe(N.toLowerCase(), en);
      if (U === void 0) {
        w = false;
        continue;
      }
      let Q = dre(U);
      if (tn.some((A) => Z[A] && Q[A])) continue;
      R.push(U);
      for (let A of tn) Z[A] ||= Q[A];
    }
    _.push(R.join("+"));
  }
  if (h.length === 0) return null;
  let K = L(h), x = K.length > rn + 1 ? rn : K.length, v = K.slice(0, x).map((B) => `"${kl(B, E)}"`);
  if (K.length > x) v.push(`${K.length - x} more`);
  let C = new Intl.ListFormat("en", { type: "conjunction" }).format(v), T = new Intl.ListFormat("en", { type: "disjunction" }).format(en.map((B) => B.name)), yn = K.length === 1 ? "is not a modifier" : "are not modifiers", pn = r ? ` in ${r}` : "", mn = kl(n, E), bn = kl(AG(RQ(n)), E), X = _.join(" ");
  return { type: "parse_error", severity: "error", message: `${C} ${yn}, so "${mn}"${pn} applies to "${bn}" instead`, key: n, suggestion: w && X.length <= E ? `Did you mean "${X}"?` : `Use ${T} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"` };
}
function vn(n, r) {
  let e = [];
  if (typeof n !== "object" || n === null) return e.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} is not an object` }), e;
  let s = n, l = s.context, y;
  if (typeof l !== "string") e.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} missing "context" field` });
  else if (!Kn(l)) e.push({ type: "invalid_context", severity: "error", message: `Unknown context "${l}"`, context: l, suggestion: `Valid contexts: ${sn.join(", ")}` });
  else y = l;
  if (typeof s.bindings !== "object" || s.bindings === null) return e.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} missing "bindings" field` }), e;
  let h = s.bindings;
  for (let [_, w] of Object.entries(h)) {
    let K = xn(_, y);
    if (K) K.context = y, e.push(K);
    if (w !== null && typeof w !== "string") e.push({ type: "invalid_action", severity: "error", message: `Invalid action for "${_}": must be a string or null`, key: _, context: y });
    else if (typeof w === "string" && w.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(w)) e.push({ type: "invalid_action", severity: "warning", message: `Invalid command binding "${w}" for "${_}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`, key: _, context: y, action: w });
      if (y && y !== "Chat") e.push({ type: "invalid_action", severity: "warning", message: `Command binding "${w}" must be in "Chat" context, not "${y}"`, key: _, context: y, action: w, suggestion: 'Move this binding to a block with "context": "Chat"' });
    } else if (typeof w === "string" && !KKr(w) && !QVo(w)) e.push({ type: "invalid_action", severity: "error", message: `Unknown action "${w}" for "${_}"${y ? ` in ${y}` : ""} — this binding is ignored`, key: _, context: y, action: w, suggestion: Cn(w) });
    else if (w === "voice:pushToTalk") {
      let x = RQ(_)[0];
      if (x && !x.ctrl && !x.alt && !x.shift && !x.meta && !x.super && /^[a-z]$/.test(x.key)) e.push({ type: "invalid_action", severity: "warning", message: `Binding "${_}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`, key: _, context: y, action: w });
    }
  }
  return e;
}
function Cn(n) {
  let r, e = 1 / 0;
  for (let h of n0e) {
    let _ = Bn(n.toLowerCase(), h.toLowerCase());
    if (_ < e) e = _, r = h;
  }
  if (r && e <= 2) return `Did you mean "${r}"?`;
  let s = Ze(n, ":"), l = n0e.filter((h) => h.startsWith(`${s}:`));
  if (l.length > 0) return `Valid "${s}:" actions: ${l.join(", ")}`;
  return `Valid action namespaces: ${L(n0e.map((h) => Ze(h, ":"))).map((h) => `${h}:`).join(", ")}`;
}
function Bn(n, r) {
  let e = Array.from({ length: r.length + 1 }, (s, l) => l);
  for (let s = 1; s <= n.length; s++) {
    let l = [s];
    for (let y = 1; y <= r.length; y++) {
      let h = n[s - 1] === r[y - 1] ? 0 : 1;
      l[y] = Math.min((e[y] ?? 0) + 1, (l[y - 1] ?? 0) + 1, (e[y - 1] ?? 0) + h);
    }
    e = l;
  }
  return e[r.length] ?? 0;
}
function M(n) {
  let r = [], e = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, s;
  while ((s = e.exec(n)) !== null) {
    let l = s[1];
    if (!l) continue;
    let _ = n.slice(0, s.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown", w = /"([^"]+)"\s*:/g, K = /* @__PURE__ */ new Map(), x;
    while ((x = w.exec(l)) !== null) {
      let v = x[1];
      if (!v) continue;
      let C = (K.get(v) ?? 0) + 1;
      if (K.set(v, C), C === 2) r.push({ type: "duplicate", severity: "warning", message: `Duplicate key "${v}" in ${_} bindings`, key: v, context: _, suggestion: "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored." });
    }
  }
  return r;
}
function Sn(n) {
  let r = [];
  if (!Array.isArray(n)) return r.push({ type: "parse_error", severity: "error", message: "keybindings.json must contain an array", suggestion: "Wrap your bindings in [ ]" }), r;
  for (let e = 0; e < n.length; e++) r.push(...vn(n[e], e));
  return r;
}
function Pn(n) {
  let r = [], e = /* @__PURE__ */ new Map();
  for (let s of n) {
    let l = e.get(s.context) ?? /* @__PURE__ */ new Map();
    e.set(s.context, l);
    for (let [y, h] of Object.entries(s.bindings)) {
      let _ = XKe(y), w = l.get(_);
      if (w && w !== h) r.push({ type: "duplicate", severity: "warning", message: `Duplicate binding "${y}" in ${s.context} context`, key: y, context: s.context, action: h ?? "null (unbind)", suggestion: `Previously bound to "${w}". Only the last binding will be used.` });
      l.set(_, h ?? "null");
    }
  }
  return r;
}
function An(n) {
  let r = [], e = aei();
  for (let s of n) {
    let l = AG(s.chord), y = XKe(l);
    for (let h of e) if (XKe(h.key) === y) r.push({ type: "reserved", severity: h.severity, message: `"${l}" may not work: ${h.reason}`, key: l, context: s.context, action: s.action ?? void 0 });
  }
  return r;
}
function En(n) {
  let r = [];
  for (let e of n) for (let [s, l] of Object.entries(e.bindings)) {
    let y = s.split(" ").map((h) => dre(h));
    r.push({ chord: y, action: l, context: e.context });
  }
  return r;
}
function D(n, r) {
  let e = [];
  if (e.push(...Sn(n)), P(n)) {
    e.push(...Pn(n));
    let l = En(n);
    e.push(...An(l));
  }
  let s = /* @__PURE__ */ new Set();
  return e.filter((l) => {
    let y = `${l.type}:${l.key}:${l.context}`;
    if (s.has(y)) return false;
    return s.add(y), true;
  });
}
function xQ() {
  return k("tengu_keybinding_customization_release", true);
}
var Mn = 500, Dn = 200;
function Fn() {
  let n = { bindings: null, warmedFromBackend: false, warmAttempted: false, warnings: [], watcher: null, initialized: false, disposed: false, lastCustomBindingsLogDate: null, loggedShortcutFallbacks: /* @__PURE__ */ new Set(), actionFiredLoggedAt: /* @__PURE__ */ new Map(), changed: De(), [Symbol.dispose]() {
    if (n.disposed = true, n.watcher) n.watcher.close(), n.watcher = null;
    n.changed.clear();
  } };
  return n;
}
var VC = Fn();
function Y(n, r) {
  let e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  if (n.lastCustomBindingsLogDate === e) return;
  n.lastCustomBindingsLogDate = e, a("tengu_custom_keybindings_loaded", { user_binding_count: r });
}
function _cn() {
  return Ln(Le(), "keybindings.json");
}
var e0o = We.state("keybindings");
function F() {
  return Yhe(Sj);
}
function j(n) {
  return Yhe(dei(n)).filter((r) => r.action === null || KKr(r.action));
}
function H(n) {
  for (let r of n) t(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` — ${r.suggestion}` : ""}`, { level: "warn" });
}
function S(n, r) {
  if (n?.suppressFeatureEvents) return;
  if (r === "ok") g("keybinding_load_user_config");
  else m("keybinding_load_user_config", r);
}
function V() {
  return !xQ() || mr("keybindings");
}
function fKs(n) {
  let r = F();
  if (V()) return r;
  if (z() && n !== void 0) return r;
  try {
    let e = an(_cn(), "utf-8"), s = te(e), l = typeof s === "object" && s !== null && "bindings" in s ? s.bindings : void 0;
    return P(l) ? [...r, ...j(l)] : r;
  } catch {
    return r;
  }
}
async function dn(n, r, e) {
  let s = F();
  if (!xQ() || mr("keybindings")) return { bindings: s, warnings: [] };
  let l = _cn();
  if (r) {
    let y = await r.read([e0o]);
    if (!y.ok) {
      let _ = y.error, w = vt(_);
      if (t(`[keybindings] Error loading ${l}: ${w}`), e?.suppressFeatureEvents) f("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return S(e, "keybinding_config_parse_error"), { bindings: s, warnings: [{ type: "parse_error", severity: "error", message: `Failed to parse keybindings.json: ${w}` }] };
    }
    let h = y.value.items[0];
    if (!h.found) return S(e, "ok"), { bindings: s, warnings: [] };
    return jn(Buffer.from(h.value).toString("utf-8"), n, s, l, e);
  }
  try {
    let y = await $n(l, "utf-8"), h = te(y), _;
    if (typeof h === "object" && h !== null && "bindings" in h) _ = h.bindings;
    else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), S(e, "keybinding_config_invalid_format"), { bindings: s, warnings: [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }] };
    if (!P(_)) {
      let C = !Array.isArray(_) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", T = !Array.isArray(_) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${C}`), S(e, "keybinding_config_invalid_structure"), { bindings: s, warnings: [{ type: "parse_error", severity: "error", message: C, suggestion: T }] };
    }
    let w = j(_);
    t(`[keybindings] Loaded ${w.length} user bindings from ${l}`);
    let K = [...s, ...w];
    Y(n, w.length);
    let v = [...M(y), ...D(_, K)];
    if (v.length > 0) t(`[keybindings] Found ${v.length} validation issue(s)`), H(v);
    return S(e, "ok"), { bindings: K, warnings: v };
  } catch (y) {
    if (G(y)) return S(e, "ok"), { bindings: s, warnings: [] };
    return t(`[keybindings] Error loading ${l}: ${d(y)}`), S(e, "keybinding_config_parse_error"), { bindings: s, warnings: [{ type: "parse_error", severity: "error", message: `Failed to parse keybindings.json: ${d(y)}` }] };
  }
}
function jn(n, r, e, s, l) {
  try {
    let y = te(n), h;
    if (typeof y === "object" && y !== null && "bindings" in y) h = y.bindings;
    else return t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), S(l, "keybinding_config_invalid_format"), { bindings: e, warnings: [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }] };
    if (!P(h)) {
      let v = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", C = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return t(`[keybindings] Invalid keybindings.json: ${v}`), S(l, "keybinding_config_invalid_structure"), { bindings: e, warnings: [{ type: "parse_error", severity: "error", message: v, suggestion: C }] };
    }
    let _ = j(h);
    t(`[keybindings] Loaded ${_.length} user bindings from ${s}`);
    let w = [...e, ..._];
    Y(r, _.length);
    let x = [...M(n), ...D(h, w)];
    if (x.length > 0) t(`[keybindings] Found ${x.length} validation issue(s)`), H(x);
    return S(l, "ok"), { bindings: w, warnings: x };
  } catch (y) {
    return t(`[keybindings] Error loading ${s}: ${d(y)}`), S(l, "keybinding_config_parse_error"), { bindings: e, warnings: [{ type: "parse_error", severity: "error", message: `Failed to parse keybindings.json: ${d(y)}` }] };
  }
}
async function pKs(n, r) {
  if (n.bindings) return n.bindings;
  if (n.warmAttempted) return;
  if (ye()) return;
  if (V()) return;
  let e = await dn(n, r, { suppressFeatureEvents: true });
  if (n.warmAttempted = true, e.warnings.length > 0) return e.bindings;
  if (!n.bindings) n.bindings = e.bindings, n.warnings = [], n.warmedFromBackend = true, g("keybinding_load_user_config");
  return n.bindings;
}
function gn(n) {
  if (!n.warmedFromBackend) return false;
  if (V()) return n.bindings = null, n.warnings = [], n.warmedFromBackend = false, true;
  return n.warmedFromBackend = false, false;
}
function X5n(n) {
  if (n.bindings && !gn(n)) return n.bindings;
  return yBt(n).bindings;
}
function yBt(n) {
  if (n.bindings && !gn(n)) return { bindings: n.bindings, warnings: n.warnings };
  n.warmedFromBackend = false;
  let r = F();
  if (!xQ() || mr("keybindings")) return n.bindings = r, n.warnings = [], { bindings: n.bindings, warnings: n.warnings };
  let e = _cn();
  try {
    let s = an(e, "utf-8"), l = te(s), y;
    if (typeof l === "object" && l !== null && "bindings" in l) y = l.bindings;
    else return m("keybinding_load_user_config", "keybinding_config_invalid_format"), n.bindings = r, n.warnings = [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }], { bindings: n.bindings, warnings: n.warnings };
    if (!P(y)) {
      let w = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", K = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return m("keybinding_load_user_config", "keybinding_config_invalid_structure"), n.bindings = r, n.warnings = [{ type: "parse_error", severity: "error", message: w, suggestion: K }], { bindings: n.bindings, warnings: n.warnings };
    }
    let h = j(y);
    t(`[keybindings] Loaded ${h.length} user bindings from ${e}`), n.bindings = [...r, ...h], Y(n, h.length);
    let _ = M(s);
    if (n.warnings = [..._, ...D(y, n.bindings)], n.warnings.length > 0) t(`[keybindings] Found ${n.warnings.length} validation issue(s)`), H(n.warnings);
    return g("keybinding_load_user_config"), { bindings: n.bindings, warnings: n.warnings };
  } catch (s) {
    if (G(s)) return g("keybinding_load_user_config"), n.bindings = r, n.warnings = [], { bindings: n.bindings, warnings: n.warnings };
    return t(`[keybindings] Error loading ${e}: ${d(s)}`), m("keybinding_load_user_config", "keybinding_config_parse_error"), n.bindings = r, n.warnings = [{ type: "parse_error", severity: "error", message: `Failed to parse keybindings.json: ${d(s)}` }], { bindings: n.bindings, warnings: n.warnings };
  }
}
async function mKs(n) {
  if (n.initialized || n.disposed) return;
  if (!xQ() || mr("keybindings")) {
    t("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = _cn(), e = Nn(r);
  try {
    if (!(await Tn(e)).isDirectory()) {
      t(`[keybindings] Not watching: ${e} is not a directory`), f("keybinding_watcher_init", "watch_dir_inaccessible");
      return;
    }
  } catch {
    t(`[keybindings] Not watching: ${e} does not exist`), f("keybinding_watcher_init", "watch_dir_inaccessible");
    return;
  }
  n.initialized = true, t(`[keybindings] Watching for changes to ${r}`), n.watcher = FE.watch(r, { persistent: true, ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: Mn, pollInterval: Dn }, ignorePermissionErrors: true, usePolling: true, interval: 2e3, atomic: true }), n.watcher.on("add", (s) => on(n, s)), n.watcher.on("change", (s) => on(n, s)), n.watcher.on("unlink", (s) => In(n, s)), n.watcher.on("error", (s) => t(`[keybindings] watcher error: ${d(s)}`, { level: "warn" })), bt(n), g("keybinding_watcher_init");
}
async function on(n, r) {
  t(`[keybindings] Detected change to ${r}`);
  try {
    let e = await dn(n);
    n.bindings = e.bindings, n.warnings = e.warnings, n.warmedFromBackend = false, n.changed.emit(e), g("keybinding_hot_reload");
  } catch (e) {
    t(`[keybindings] Error reloading: ${d(e)}`), f("keybinding_hot_reload", "keybinding_reload_failed");
  }
}
function In(n, r) {
  t(`[keybindings] Detected deletion of ${r}`);
  let e = F();
  n.bindings = e, n.warnings = [], n.warmedFromBackend = false, n.changed.emit({ bindings: e, warnings: [] });
}
var q = { "†": "t" };
function cn(n) {
  return Object.hasOwn(q, n);
}
var z$r = { π: "alt+p", ø: "alt+o" };
function t0o(n) {
  return Object.hasOwn(z$r, n);
}
function U1() {
  let n = O();
  if (n === "macos") return n;
  if (i.LC_TERMINAL === "iTerm2" || i.TERM_PROGRAM === "Apple_Terminal" || i.TERM_PROGRAM === "iTerm.app") return "macos";
  return n;
}
var On = { escape: "escape", return: "enter", tab: "tab", backspace: "backspace", delete: "delete", up: "up", down: "down", left: "left", right: "right", pageup: "pageup", pagedown: "pagedown", wheelup: "wheelup", wheeldown: "wheeldown", home: "home", end: "end" };
function bcn(n, r, e) {
  let s = false, l;
  for (let y = 0; y < e.length; y++) {
    let h = e[y];
    if (!h || h.context !== r || h.action !== n) continue;
    if (s = true, !ln(e, y)) l = h.chord;
  }
  if (l) return l;
  return s ? null : void 0;
}
function n0o(n, r, e) {
  let s = [];
  return e.forEach((l, y) => {
    if (l.context === r && l.action === n && !ln(e, y)) s.push(l.chord);
  }), s;
}
function J5n(n, r, e, s) {
  let l, y = -1;
  for (let h of n0o(n, r, e)) {
    let _ = s.some((C) => C.context === r && C.action === n && I(C.chord, h)), w = h.length === 1 ? h[0] : void 0, K = w !== void 0 && !w.ctrl && !w.alt && !w.meta && !w.super, x = 0;
    if (K && Rn.has(w.key)) x = 2;
    else if (K && w.key.length === 1) x = 1;
    let v = (_ ? 0 : 3) + x;
    if (v > y) l = h, y = v;
  }
  return l;
}
var Rn = /* @__PURE__ */ new Set(["up", "down", "left", "right", "enter", "escape", "tab", " ", "pageup", "pagedown", "home", "end", "backspace", "delete"]);
function ln(n, r) {
  let e = n[r];
  if (!e) return false;
  for (let s = r + 1; s < n.length; s++) {
    let l = n[s];
    if (l && l.context === e.context && I(l.chord, e.chord)) return true;
  }
  return false;
}
function r0o(n, r, e) {
  let s = null;
  for (let l of e) {
    if (l.context !== r || l.chord.length !== 1) continue;
    let y = l.chord[0];
    if (y && ZGe(y, n)) s = l.action;
  }
  return s;
}
function Q5n(n, r, e) {
  let s;
  for (let l of e) {
    if (l.chord.length !== 1 || !r.includes(l.context)) continue;
    let y = l.chord[0];
    if (y && ZGe(y, n)) s = l.action;
  }
  return s;
}
function gKs(n, r, e) {
  let s = /* @__PURE__ */ new Set();
  for (let l of e) {
    let y = l.chord[0];
    if (l.context !== n || l.chord.length !== 1 || l.action === null || !y) continue;
    let h = Q5n(y, [n, "Global"], e), _ = Q5n(y, [r, "Global"], e);
    if (h === l.action && _ && _ !== h) s.add(_);
  }
  return s;
}
function I(n, r) {
  if (n.length !== r.length) return false;
  for (let e = 0; e < n.length; e++) {
    let s = n[e], l = r[e];
    if (!s || !l || !ZGe(s, l)) return false;
  }
  return true;
}
function C7e(n, r, e) {
  let s = bcn(n, r, e);
  return s ? qhe(s, U1()) : s;
}
function NTe(n) {
  let r = n.name === "enter" ? `
` : n.key, e = n.meta;
  if (O() === "macos" && !n.meta && !n.ctrl && cn(r)) r = q[r], e = true;
  let s = On[n.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!s) return null;
  let y = !(n.shift && r.length === 1 && n.name.length === 1 && r !== n.name && r.toLowerCase() === r.toUpperCase()) && (n.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return { key: s, ctrl: n.ctrl, alt: e, shift: y, meta: e, super: n.superKey };
}
function ZGe(n, r) {
  return n.key === r.key && n.ctrl === r.ctrl && n.shift === r.shift && (n.alt || n.meta) === (r.alt || r.meta) && n.super === r.super;
}
function un(n, r) {
  if (n.length >= r.chord.length) return false;
  for (let e = 0; e < n.length; e++) {
    let s = n[e], l = r.chord[e];
    if (!s || !l) return false;
    if (!ZGe(s, l)) return false;
  }
  return true;
}
function R7e(n, r, e, s) {
  if (n.name === "escape" && s !== null) return { type: "chord_cancelled" };
  let l = NTe(n);
  if (!l) {
    if (s !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let y = s ? [...s, l] : [l], h = null, _;
  for (let w of e) {
    if (!r.includes(w.context)) continue;
    if (w.chord.length > y.length) {
      if (un(y, w)) h ??= /* @__PURE__ */ new Map(), h.set(AG(w.chord), w.action);
    } else if (I(y, w.chord)) _ = w;
  }
  if (h !== null) {
    for (let w of h.values()) if (w !== null) return { type: "chord_started", pending: y };
  }
  if (_) {
    if (_.action === null) return { type: "unbound" };
    return { type: "match", action: _.action };
  }
  if (s !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
function K$r(n, r, e, s) {
  if (n.name === "escape" && s !== null) return { type: "chord_cancelled" };
  let l = NTe(n);
  if (!l) {
    if (s !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let y = s ? [...s, l] : [l], h = new Set(r), _ = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (let K of e) {
    if (!h.has(K.context)) continue;
    if (K.chord.length > y.length) {
      if (un(y, K)) _.set(AG(K.chord), K.action);
    } else if (I(y, K.chord)) w.set(K.context, K);
  }
  for (let K of _.values()) if (K !== null) return { type: "chord_started", pending: y };
  for (let K of r) {
    let x = w.get(K);
    if (x) {
      if (x.action === null) return { type: "unbound" };
      return { type: "match", action: x.action };
    }
  }
  if (s !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
var Wn = new Set(n0e);
function fn(n) {
  if (n.startsWith("command:")) return b("command:custom");
  if (Wn.has(n)) return Hn(n);
  return b("unknown");
}
var zn = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function Un(n) {
  return zn.test(n) ? Hn(n) : b("invalid");
}
var Yn = 1e3;
function Scn(n) {
  let r = Date.now(), e = VC.actionFiredLoggedAt, s = e.get(n);
  if (s !== void 0 && r - s < Yn) return;
  e.set(n, r), a("tengu_keybinding_fired", { action_id: fn(n) });
}
function $yt(n, r, e, s) {
  a("tengu_keybinding_fallback_used", { action: fn(n), context: c(r), fallback: Un(e), reason: c(s) });
}
export {
  $yt,
  AG,
  C7e,
  G$r,
  J5n,
  K$r,
  NTe,
  Q5n,
  R7e,
  RQ,
  Scn,
  U1,
  VC,
  X5n,
  Yhe,
  ZGe,
  _cn,
  bcn,
  dre,
  e0o,
  fKs,
  gKs,
  mKs,
  n0o,
  pKs,
  qhe,
  r0o,
  t0o,
  xQ,
  yBt,
  z$r
};
