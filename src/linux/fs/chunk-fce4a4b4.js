// linux/fs/chunk-fce4a4b4.js — Claude Code 2.1.310（linux）模块 chunk-7v3kphse.js
import { u5 } from "../shared/chunk-e1c578e0.js";
import { d, Us, $B } from "../telemetry/anthropic-workspace-id.js";
import { Yn, A_, uy, Fl } from "./node-modules.js";
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { ie, t } from "./gitlab-runner-authentication-token.js";
import { di, Ft } from "../shared/chunk-d2c47492.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { ifi, Lst } from "./utf-8.aa9a.js";
import { dZ } from "../mcp/allowed-warning.js";
import { Qtt } from "../telemetry/tab-read-sep.js";
import { ZHr, ihe, J3 } from "../settings/settings-change-staged.js";
import { j$e, Bse } from "./not-utf8.js";
import { Ac } from "../context/chunk-3825aa29.js";
import { resolve as k } from "path";
var D = 1e3, P = 16777216;
class I {
  cache;
  constructor(e = D, n = P) {
    this.cache = new Ac({ max: e, maxSize: n, sizeCalculation: (r) => Math.max(1, r.content.length) });
  }
  readFile(e) {
    let n = ie(), r;
    try {
      r = n.statSync(e);
    } catch (c) {
      throw this.cache.delete(e), c;
    }
    if (!r.isFile()) this.cache.delete(e), j$e(r, e, void 0);
    let i = this.cache.get(e);
    if (i && i.mtime === r.mtimeMs) return { content: i.content, encoding: i.encoding };
    let s = ifi(e), o = n.readFileSync(e, { encoding: s }).replaceAll(`\r
`, `
`);
    return this.cache.set(e, { content: o, encoding: s, mtime: r.mtimeMs }), { content: o, encoding: s };
  }
  invalidate(e) {
    this.cache.delete(e);
  }
  getStats() {
    return { size: this.cache.size, totalChars: this.cache.calculatedSize, entries: Array.from(this.cache.keys()) };
  }
}
var z = new W(() => new I());
function m(e) {
  let { content: n } = z.of(U().host).readFile(e);
  return n;
}
function Qgt(e) {
  return /\.(md|mdx)$/i.test(e);
}
function Zgt(e) {
  let n = e.split(/(\r\n|\n|\r)/), r = "";
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s !== void 0) if (i % 2 === 0) r += s.replace(/\s+$/, "");
    else r += s;
  }
  return r;
}
var O = { "<fnr>": "<function_results>", "<n>": "<name>", "</n>": "</name>", "<o>": "<output>", "</o>": "</output>", "<e>": "<error>", "</e>": "</error>", "<s>": "<system>", "</s>": "</system>", "<r>": "<result>", "</r>": "</result>", "< META_START >": "<META_START>", "< META_END >": "<META_END>", "< EOT >": "<EOT>", "< META >": "<META>", "< SOS >": "<SOS>", "\n\nH:": `

Human:`, "\n\nA:": `

Assistant:` };
function GHr(e) {
  let n = e, r = [];
  for (let [i, s] of Object.entries(O)) {
    let o = n;
    if (n = n.replaceAll(i, s), o !== n) r.push({ from: i, to: s });
  }
  return { result: n, appliedReplacements: r };
}
var x = "‘", h = "’", A = "“", w = "”";
function b(e) {
  return e.replaceAll(x, "'").replaceAll(h, "'").replaceAll(A, '"').replaceAll(w, '"');
}
var y = /\\u[0-9a-fA-F]{4}/, T = /[\u0080-\uffff]/;
function _(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, i) => r !== void 0 ? n : String.fromCharCode(parseInt(i, 16)));
}
function H(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 128) {
      n += "\\\\u";
      for (let s of i.toString(16).padStart(4, "0")) n += s >= "a" ? `[${s}${s.toUpperCase()}]` : s;
    } else n += di(e[r]);
  }
  return n;
}
function C(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) >= 128) n++;
  return e.length + 5 * n;
}
function R(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r;
}
function L(e, n) {
  if (R(e, e.length) % 2 === 1) return null;
  let r = e[0] === "\\" ? [0] : [], i = 0;
  for (let o = 0; o < e.length; o++) if (e.charCodeAt(o) >= 128) r.push(i), i += 6;
  else i += 1;
  let s = H(e);
  try {
    let o = new RegExp(s, "g");
    for (let c = o.exec(n); c !== null; c = o.exec(n)) {
      let l = c.index;
      if (r.every((a) => R(n, l + a) % 2 === 0)) return n.indexOf(c[0]) === l ? c[0] : null;
      o.lastIndex = l + 1;
    }
    return null;
  } catch (o) {
    return t(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${s.length}-character pattern (${o instanceof Error ? o.name : "non-Error"})`), null;
  }
}
function yUs(e) {
  return y.test(e) || T.test(e);
}
function ZVn(e, n, r) {
  if (e === n) return r;
  if (T.test(e) && C(e) === n.length && L(e, n) !== null) {
    let i = /* @__PURE__ */ new Map(), s = 0, o = 0;
    for (let c = 0, l = 0; c < e.length; c++) {
      let a = e.charCodeAt(c);
      if (a >= 128) {
        let u = n.slice(l + 2, l + 6);
        i.set(a, u);
        for (let f of u) if (f >= "a" && f <= "f") o++;
        else if (f >= "A" && f <= "F") s++;
        l += 6;
      } else l += 1;
    }
    return r.replace(/[\u0080-\uffff]/g, (c) => {
      let l = c.charCodeAt(0), a = i.get(l);
      if (a !== void 0) return "\\u" + a;
      let u = l.toString(16).padStart(4, "0");
      return "\\u" + (s > o ? u.toUpperCase() : u);
    });
  }
  if (y.test(e) && _(e) === n) return _(r);
  return r;
}
function oDe(e, n) {
  if (e.includes(n)) return n;
  let r = b(n), s = b(e).indexOf(r);
  if (s !== -1) return e.substring(s, s + n.length);
  if (y.test(n)) {
    let o = _(n);
    if (o !== n && e.includes(o)) return o;
  }
  if (T.test(n)) {
    if (C(n) > e.length || !e.includes("\\u")) return null;
    return L(n, e);
  }
  return null;
}
function eht(e, n, r) {
  if (e === n) return r;
  let i = n.includes(A) || n.includes(w), s = n.includes(x) || n.includes(h);
  if (!i && !s) return r;
  let o = r;
  if (i) o = Q(o);
  if (s) o = j(o);
  return o;
}
function N(e, n) {
  if (n === 0) return true;
  let r = e[n - 1];
  return r === " " || r === "	" || r === `
` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "—" || r === "–";
}
function Q(e) {
  let n = [...e], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === '"') r.push(N(n, i) ? A : w);
  else r.push(n[i]);
  return r.join("");
}
function j(e) {
  let n = [...e], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === "'") {
    let s = i > 0 ? n[i - 1] : void 0, o = i < n.length - 1 ? n[i + 1] : void 0, c = s !== void 0 && /\p{L}/u.test(s), l = o !== void 0 && /\p{L}/u.test(o);
    if (c && l) r.push(h);
    else r.push(N(n, i) ? x : h);
  } else r.push(n[i]);
  return r.join("");
}
function B(e, n, r, i = false) {
  let s = i ? (c, l, a) => c.replaceAll(l, () => a) : (c, l, a) => c.replace(l, () => a);
  if (r !== "") return s(e, n, r);
  return !n.endsWith(`
`) && e.includes(n + `
`) ? s(e, n + `
`, r) : s(e, n, r);
}
function can({ filePath: e, fileContents: n, oldString: r, newString: i, replaceAll: s = false }) {
  return AIo({ filePath: e, fileContents: n, edits: [{ old_string: r, new_string: i, replace_all: s }] });
}
function AIo({ filePath: e, fileContents: n, edits: r }) {
  if (S(n, r)) return { patch: J3({ filePath: e, fileContents: n, edits: [{ old_string: n, new_string: n, replace_all: false }] }), updatedFile: "" };
  let i = F(n, r);
  return { patch: ihe({ filePath: e, oldContent: n, newContent: i, convertTabs: true }), updatedFile: i };
}
function S(e, n) {
  return !e && n.length === 1 && n[0] !== void 0 && n[0].old_string === "" && n[0].new_string === "";
}
function F(e, n) {
  if (S(e, n)) return "";
  let r = e, i = [];
  for (let s of n) {
    let o = s.old_string.replace(/\n+$/, "");
    for (let l of i) if (o !== "" && l.includes(o)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let c = r;
    if (r = s.old_string === "" ? s.new_string : B(r, s.old_string, s.new_string, s.replace_all), r === c) throw new dZ("String not found in file. Failed to apply edit.");
    i.push(s.new_string);
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r;
}
var E = 8192;
function _Us(e, n) {
  let r = u5("file.txt", "file.txt", e, n, void 0, void 0, { context: 8, timeout: ZHr });
  if (!r) return "";
  let i = Qtt(), s = r.hunks.map((p) => ({ startLine: p.oldStart, content: p.lines.filter((g) => !g.startsWith("-") && !g.startsWith("\\")).map((g) => g.slice(1)).join(`
`), tabAwareSeparator: i })).map(Lst).join(`
...
`);
  if (s.length <= E) return s;
  let o = s.lastIndexOf(`
`, E), c = o > 0 ? s.slice(0, o) : s.slice(0, E), l = 1, a = 1, f = Ft(s, `
`, c.length + l) + a;
  return `${c}

... [${f} lines truncated] ...`;
}
function bUs(e) {
  return e.map((n) => {
    let r = [], i = [];
    for (let s of n.lines) if (s.startsWith(" ")) r.push(s.slice(1)), i.push(s.slice(1));
    else if (s.startsWith("-")) r.push(s.slice(1));
    else if (s.startsWith("+")) i.push(s.slice(1));
    return { old_string: r.join(`
`), new_string: i.join(`
`), replace_all: false };
  });
}
function M(e) {
  return Us(e) || $B(e) || Bse(e);
}
function zHr({ file_path: e, edits: n }) {
  if (n.length === 0) return { file_path: e, edits: n };
  let r = Qgt(e);
  try {
    let i = ut(e);
    if ((Yn(e) || Yn(i)) && !(Fl(e) || Fl(i)) || A_(e) || A_(i) || uy(e) || uy(i)) return { file_path: e, edits: n };
    let s = m(i);
    return { file_path: e, edits: n.map(({ old_string: o, new_string: c, replace_all: l }) => {
      let a = r ? c : Zgt(c);
      if (s.includes(o)) return { old_string: o, new_string: a, replace_all: l };
      let { result: u, appliedReplacements: f } = GHr(o);
      if (s.includes(u)) {
        let p = a;
        for (let { from: g, to: v } of f) p = p.replaceAll(g, v);
        return { old_string: u, new_string: p, replace_all: l };
      }
      return { old_string: o, new_string: a, replace_all: l };
    }) };
  } catch (i) {
    if (!M(i)) t(`Failed to read ${e} for edit normalization: ${i instanceof Error ? i.message : String(i)}`, { level: "error" });
  }
  return { file_path: e, edits: n };
}
function X(e, n, r) {
  if (e.length === n.length && e.every((l, a) => {
    let u = n[a];
    return u !== void 0 && l.old_string === u.old_string && l.new_string === u.new_string && l.replace_all === u.replace_all;
  })) return true;
  let i = null, s = null, o = null, c = null;
  try {
    i = F(r, e);
  } catch (l) {
    s = d(l);
  }
  try {
    o = F(r, n);
  } catch (l) {
    c = d(l);
  }
  if (s !== null && c !== null) return s === c;
  if (s !== null || c !== null) return false;
  return i === o;
}
function CIo(e, n) {
  return e.file_path === n.file_path && e.edits.length === n.edits.length && e.edits.every((r, i) => {
    let s = n.edits[i];
    return s !== void 0 && r.old_string === s.old_string && r.new_string === s.new_string && r.replace_all === s.replace_all;
  });
}
function SUs(e, n) {
  if (e.file_path !== n.file_path) return false;
  if (CIo(e, n)) return true;
  let r = "";
  if ((!Yn(e.file_path) || Fl(e.file_path)) && !A_(e.file_path) && !uy(e.file_path) && !uy(k(e.file_path))) try {
    r = m(e.file_path);
  } catch (i) {
    if (!M(i)) throw i;
  }
  return X(e.edits, n.edits, r);
}
export {
  AIo,
  CIo,
  GHr,
  Qgt,
  SUs,
  ZVn,
  Zgt,
  _Us,
  bUs,
  can,
  eht,
  oDe,
  yUs,
  zHr
};
