// darwin/vendor/highlight/plugin-hljs-languages.js — Claude Code 2.1.310（darwin）模块 chunk-5eqxcfjz.js
import { S, Dn } from "../../agents/third-party.js";
import { p } from "../../telemetry/chunk-9d6962d2.js";
import { t } from "../../fs/gitlab-runner-authentication-token.js";
import { l } from "../../artifacts/cowritten-artifact-html.js";
import { M3o, xoi, lrr, KVe, Ivt } from "../../settings/global-config-and-gates.js";
import { extname as Fr } from "path";
function N(r) {
  let e = 0;
  for (let o = r.indexOf(`
`); o >= 0; o = r.indexOf(`
`, o + 1)) e += 1;
  return e;
}
class h extends Error {
  constructor() {
    super("highlighting this text takes more work than its length allows");
    this.name = "HighlightBoundError";
  }
}
function f(r, e) {
  if (r.left -= e, r.left < 0) throw new h();
}
var Sr = 32;
var Er = 64;
var xr = 4096;
var yr = 24;
var _r = 3;
var Tr = 16;
var b = (r, e) => class o extends r {
  static isBounded = true;
  held = 0;
  breaks = 0;
  height = 0;
  constructor(n) {
    super(n);
    f(e, Tr);
  }
  openNode(n) {
    this.held += 1, f(e, 1), super.openNode(n), this.grownTo(this.stack.length - 1);
  }
  addText(n) {
    let s = N(n);
    this.held += n.length, this.breaks += s, f(e, n.length + s * (this.stack.length - 1) ** 2), super.addText(n);
  }
  __addSublanguage(n, s) {
    if (n instanceof o) {
      let i = this.stack.length + n.height;
      this.held += n.held, this.breaks += n.breaks, this.grownTo(i), f(e, n.breaks * i ** 2);
    }
    super.__addSublanguage(n, s);
  }
  toHTML() {
    return f(e, this.held), super.toHTML();
  }
  grownTo(n) {
    if (this.height = Math.max(this.height, n), this.height > Sr) f(e, Number.POSITIVE_INFINITY);
  }
};
var H = (r) => typeof r === "function" && "openNode" in r.prototype && !("isBounded" in r);
var I = (r, e) => [...[("subLanguage" in e ? e.subLanguage : void 0) ?? []].flat().filter((o) => typeof o === "string").map((o) => r.getLanguage(o)), ...e.contains ?? [], ..."variants" in e ? e.variants ?? [] : [], "starts" in e ? e.starts : void 0];
class A extends Error {
  constructor() {
    super("this text is too long, or its lines are, for a grammar");
    this.name = "HighlightLimitError";
  }
}
var x = 5e4;
var v = 16e3;
var D = 2e4;
var G = 8e3;
var C = 8e3;
var P = 2e4;
var k = 2e4;
var d = /* @__PURE__ */ new Map([["asciidoc", v], ["gcode", D], ["http", G], ["nestedtext", C], ["sas", P], ["wren", k]]);
var W = Math.min(x, ...d.values());
var y = /* @__PURE__ */ new Set(["abnf", "accesslog", "ada", "angelscript", "applescript", "arcade", "arduino", "asciidoc", "aspectj", "autohotkey", "awk", "bash", "brainfuck", "c", "cal", "clojure", "clojure-repl", "coffeescript", "cos", "cpp", "crmsh", "crystal", "csharp", "css", "dart", "delphi", "django", "dns", "dockerfile", "dos", "dsconfig", "dts", "dust", "elixir", "erb", "erlang", "excel", "fsharp", "gams", "gauss", "gcode", "go", "graphql", "groovy", "haml", "handlebars", "haskell", "http", "ini", "java", "javascript", "jboss-cli", "julia", "julia-repl", "kotlin", "latex", "leaf", "less", "livecodeserver", "livescript", "llvm", "markdown", "matlab", "mipsasm", "mojolicious", "monkey", "moonscript", "nestedtext", "nginx", "nim", "nix", "node-repl", "nsis", "objectivec", "ocaml", "parser3", "perl", "pgsql", "php", "php-template", "pony", "powershell", "processing", "profile", "properties", "protobuf", "puppet", "python", "python-repl", "qml", "r", "reasonml", "roboconf", "routeros", "ruby", "rust", "sas", "scala", "scheme", "scilab", "scss", "shell", "smali", "smalltalk", "sml", "stan", "stata", "stylus", "swift", "tap", "tcl", "tp", "twig", "typescript", "vbnet", "vbscript", "vbscript-html", "verilog", "wren", "x86asm", "xl", "xml", "xquery", "yaml", "zephir"]);
var L = /* @__PURE__ */ new Set([...d.keys(), ...y]);
var Aan = 256;
var CKn = 16e6;
var j = /<(?:script|style)(?=\s|>)/iu;
var z = "[`~<";
var c = /* @__PURE__ */ new Map([["markdown", [z, j]]]);
var Z = /\s+|[^\n]+/g;
function U(r, e) {
  let o = 0;
  for (let n of e === void 0 ? "" : r) o += e?.includes(n) === true ? 1 : 0;
  return e === void 0 ? r.length : o;
}
function _(r, e) {
  let o = 0;
  if (r.length <= Aan) return o;
  for (let [n] of r.matchAll(Z)) {
    let s = n.length > Aan;
    o += s ? U(n, e) * n.length : 0;
  }
  return o;
}
var F = (r) => r.length <= W && _(r, void 0) <= CKn;
function J(r, e) {
  let o = c.get(e);
  return o === void 0 || o[1].test(r) ? void 0 : o[0];
}
function oOo(r, e) {
  return y.has(e) && r.length > Aan ? _(r, J(r, e)) : 0;
}
var sOo = (r, e) => r.length <= (d.get(e) ?? x) && oOo(r, e) <= CKn;
function iOo(r, e) {
  let o = new Map([...L].flatMap((a) => {
    let g = r.getLanguage(a);
    return g === void 0 ? [] : [[g, a]];
  })), n = /* @__PURE__ */ new Set(), s = L.has(e) ? [] : [r.getLanguage(e)], i = e;
  while (s.length > 0) {
    let a = s.pop();
    if (typeof a !== "object" || a === null || n.has(a)) continue;
    let m = "subLanguage" in a && Array.isArray(a.subLanguage) && a.subLanguage.length === 0 ? [...o.values()].find((cr) => !c.has(cr)) ?? o.values().next().value : o.get(a);
    if (m !== void 0 && !c.has(m)) return m;
    i = m ?? i, n.add(a), s.push(...m === void 0 ? I(r, a) : []);
  }
  return i;
}
var B = (r) => ({ "before:highlight": ({ code: e, language: o }) => {
  if (!F(e) && !sOo(e, iOo(r, o))) throw new A();
} });
function K(r, e) {
  let o = /* @__PURE__ */ new Set(), n = [e], s = 0;
  while (n.length > 0) {
    let i = n.pop();
    if (typeof i !== "object" || i === null || o.has(i)) continue;
    o.add(i);
    let a = "subLanguage" in i ? i.subLanguage : void 0, g = Array.isArray(a);
    s = Math.max(s, g ? a.length || Number.POSITIVE_INFINITY : 0), n.push(...[a ?? []].flat().filter((m) => typeof m === "string").map((m) => r.getLanguage(m)), ...i.contains ?? [], ..."variants" in i ? i.variants ?? [] : [], "starts" in i ? i.starts : void 0);
  }
  return s;
}
function X(r, e) {
  let o = /* @__PURE__ */ new WeakMap(), n = 0;
  function s(i) {
    let a = r.listLanguages().length;
    if (i === void 0) return 0;
    if (a !== n) o = /* @__PURE__ */ new WeakMap(), n = a;
    let g = o.get(i) ?? K(r, i);
    return o.set(i, g), Math.min(g, a, e);
  }
  return (i, a) => xr + a * (yr + _r * s(r.getLanguage(i)));
}
var Y = (r, e) => ({ "before:highlight": (o) => {
  r.left = e(o.language, o.code.length);
}, "after:highlight": () => {
  let o = r.left < 0;
  if (r.left = Number.POSITIVE_INFINITY, o) throw new h();
} });
function M(r, e) {
  let o = r.highlightAuto("", [])._emitter.constructor;
  if ("isBounded" in o) return;
  if (r.addPlugin(B(r)), !H(o)) return;
  let n = { left: Number.POSITIVE_INFINITY };
  r.configure({ __emitter: b(o, n) }), r.addPlugin(Y(n, X(r, e)));
}
var Rr = (r) => M(r, Er);
var q = ["begin", "end", "match", "illegal"];
var Q = (r) => (e) => {
  let o = r.get(typeof e === "string" ? e : e.source);
  try {
    return o === void 0 ? e : new RegExp(o);
  } catch {
    return e;
  }
};
function T(r) {
  return typeof r === "object" && r !== null && Object.isFrozen(r) ? { ...r } : r;
}
function V(r, e) {
  let o = /* @__PURE__ */ new Set(), n = [r], s = Q(e);
  while (n.length > 0) {
    let i = n.pop();
    if (!(typeof i === "object" && i !== null) || o.has(i)) continue;
    o.add(i);
    for (let g of q) {
      let m = i[g];
      if (m !== void 0 && m !== null) i[g] = Array.isArray(m) ? m.map(s) : s(m);
    }
    i.contains &&= i.contains.map(T), i.variants &&= i.variants.map(T), i.starts &&= T(i.starts), n.push(...i.contains ?? [], ...i.variants ?? [], i.starts);
  }
  return r;
}
var Nr = 1e3;
var rr = 1e3;
var br = 16;
var Hr = 1e3;
var Ir = 12;
var vr = 1500;
var Dr = 1e4;
var Gr = 16;
var w = (r) => [String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+)+` + String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`, String.raw`(?=[a-zA-Z_])` + String.raw`(?:(?=decltype\(auto\))|(?<!${r}[a-zA-Z_]\w*?))` + String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+){1,${Gr}}` + String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`];
var er = [w("")];
var tr = [[String.raw`[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` + String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` + String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`, String.raw`(?<! )[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` + String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` + String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`], [String.raw`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`, String.raw`(?:(?<! )[ ]+)?(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`]];
var O = [w("(?!struct)")];
var or = [[String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)+` + String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`, String.raw`(?=[a-zA-Z])(?<![a-zA-Z]\w*?)` + String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)` + String.raw`{1,${Ir}}[a-zA-Z]\w*\s*` + String.raw`(<[^=]{1,${rr}}?>\s*)?\(`], [String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`, String.raw`[a-zA-Z]\w*\s*` + String.raw`(<[^=]{1,${rr}}?>\s*)?\(`]];
var nr = [String.raw`(?:\.|\.\/|\/)?(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` + String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+)(?:(\.|\/)(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` + String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+))*`, String.raw`(\[\]|\[[^\]]+\]|[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+)(?==)`].map((r) => [r, r.replaceAll(String.raw`[^\]]+\]`, String.raw`[^\]]{1,${Nr}}\]`)]);
var ir = [[String.raw`(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))*` + String.raw`(?=\s*=\s*[^#\s])`, String.raw`(?:(?<![A-Za-z0-9_-])[A-Za-z0-9_-]+|` + String.raw`(?<!\\)"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))` + String.raw`{0,${br}}` + String.raw`(?=\s*=\s*[^#\s])`]];
var sr = [["(`{3,})[^`](.|\\n)*?\\1`*[ ]*", "(`{3,})[^`][^\\r\\u2028\\u2029]*?\\1`*[ ]*"], [String.raw`(~{3,})[^~](.|\n)*?\1~*[ ]*`, String.raw`(~{3,})[^~][^\r\u2028\u2029]*?\1~*[ ]*`]];
var ar = [[String.raw`\[.*?\]\(.*?\)`, String.raw`\[(?=(.*?\]\())\1.*?\)`], [String.raw`\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)`, String.raw`\[(?=(.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/)))` + String.raw`\1.*?\)`], [String.raw`\[.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/.*?\)`, String.raw`\[(?=(.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/))\1.*?\)`], [String.raw`\[.+?\]\([./?&#].*?\)`, String.raw`\[(?=(.+?\]\([./?&#]))\1.*?\)`]];
var pr = [String.raw`(?:s|tr|y)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`(?:\\.|[^\\\/])*?\1[dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\((?:\\.|[^\\\/])*?\)\(` + String.raw`(?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\[(?:\\.|[^\\\/])*?\]\[` + String.raw`(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\{(?:\\.|[^\\\/])*?\}\{` + String.raw`(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`, String.raw`(?:(?:m|qr)?)\/(?:\\.|[^\\\/])*?\/[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\((?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\[(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\{(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`].map((r) => [r, r.replaceAll(")*?", `){0,${vr}}?`)]);
var gr = [[String.raw`\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` + "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)", String.raw`\b([1-9](_?[0-9])*|0(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` + "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)"]];
var mr = [[String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b)`, String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)` + String.raw`{0,${Hr}}?[^\S\n]*\1\b)`]];
var lr = [[String.raw`b?r(#*)"(.|\n)*?"\1(?!#)`, String.raw`b?r(#*)"[^]{0,${Dr}}?"\1(?!#)`]];
var ur = /* @__PURE__ */ new Map([["arduino", O], ["c", er], ["cpp", O], ["csharp", or], ["handlebars", nr], ["ini", ir], ["markdown", [...ar, ...sr]], ["perl", pr], ["python", gr], ["ruby", mr], ["rust", lr]]);
var R = (r, e) => (o) => {
  let n = e(o);
  try {
    return V(n, new Map([...tr, ...ur.get(r) ?? []]));
  } catch {
    return e(o);
  }
};
var jr = /^[a-z0-9][a-z0-9_+#.-]{0,63}$/, zr = 16;
function Zr(r) {
  return r.default ?? r;
}
class dr {
  hljs = null;
  loaded = /* @__PURE__ */ new Set();
  failed = /* @__PURE__ */ new Set();
  runtimeDepsEnsured = /* @__PURE__ */ new WeakSet();
  pluginLanguages = /* @__PURE__ */ new Map();
  pluginAliases = /* @__PURE__ */ new Set();
  generation = 0;
  core(r) {
    if (this.hljs) return this.hljs;
    let e = r.loadCore();
    Rr(e);
    for (let [o, n] of Object.entries(M3o)) if (!e.getLanguage(o)) e.registerLanguage(o, R(o, n));
    for (let [o, n] of this.pluginLanguages) if (!e.getLanguage(o)) this.registerResolvedPluginLanguage(e, o, n, { emitSadTelemetry: true });
    return this.hljs = e, e;
  }
  ensureLanguage(r, e) {
    let o = this.core(e), n = r.toLowerCase(), s = e.resolveId(n);
    if (s !== null) {
      if (this.failed.has(s)) return null;
      if (!this.loaded.has(s)) {
        let a = e.loaders[s];
        if (typeof a !== "function") return null;
        try {
          o.registerLanguage(s, R(s, Zr(a())));
        } catch (g) {
          return this.failed.add(s), l(g), null;
        }
        this.loaded.add(s);
        for (let g of e.subLanguageDeps[s] ?? []) this.ensureLanguage(g, e);
      }
      return s;
    }
    let i = o.getLanguage(n);
    if (!i) return null;
    if (!this.runtimeDepsEnsured.has(i)) {
      this.runtimeDepsEnsured.add(i);
      for (let a of Ur(i)) if (a !== n) this.ensureLanguage(a, e);
    }
    return n;
  }
  get pluginGrammarGeneration() {
    return this.generation;
  }
  clearPluginLanguages() {
    if (this.generation++, this.hljs) for (let r of this.pluginLanguages.keys()) this.hljs.unregisterLanguage(r);
    this.pluginLanguages.clear(), this.pluginAliases.clear();
  }
  isReservedLanguageId(r) {
    return Object.prototype.hasOwnProperty.call(KVe, r) || Object.prototype.hasOwnProperty.call(Ivt, r) || Object.prototype.hasOwnProperty.call(M3o, r) || xoi.has(r) || this.pluginLanguages.has(r) || this.pluginAliases.has(r);
  }
  isPluginLanguageId(r) {
    return this.pluginLanguages.has(r) || this.pluginAliases.has(r);
  }
  addPluginLanguage(r, e, o) {
    if (this.isReservedLanguageId(r)) return false;
    let n = o.map((i) => i.toLowerCase()).filter((i) => jr.test(i) && i !== r && !this.isReservedLanguageId(i)).slice(0, zr), s = (i) => {
      let a = e(i);
      return a.name = r, a.aliases = n, a.disableAutodetect = true, a;
    };
    this.pluginLanguages.set(r, s);
    for (let i of n) this.pluginAliases.add(i);
    if (this.hljs && !this.hljs.getLanguage(r)) return this.registerResolvedPluginLanguage(this.hljs, r, s, { emitSadTelemetry: false });
    return true;
  }
  registerResolvedPluginLanguage(r, e, o, { emitSadTelemetry: n }) {
    try {
      let s = R(e, o)(r);
      return r.registerLanguage(e, () => s), r.highlight("", { language: e, ignoreIllegals: true }), true;
    } catch (s) {
      if (this.pluginLanguages.delete(e), r.getLanguage(e)) r.unregisterLanguage(e);
      if (n) p("plugin_hljs_languages", "resolve_failed");
      return t(`plugin hljs grammar '${e}' failed to resolve at registration: ${s instanceof Error ? s.message : String(s)}`, { level: "error" }), false;
    }
  }
}
function Ur(r) {
  let e = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  function n(s) {
    if (s === null || typeof s !== "object" || o.has(s)) return;
    o.add(s);
    let i = s;
    for (let a of [i.subLanguage ?? []].flat()) if (typeof a === "string") e.add(a);
    for (let a of i.contains ?? []) n(a);
    n(i.starts);
    for (let a of i.variants ?? []) n(a);
  }
  return n(r), e;
}
var u0e = new dr();
function Ran(r) {
  let e = r.toLowerCase();
  return Object.prototype.hasOwnProperty.call(KVe, e) ? e : Object.prototype.hasOwnProperty.call(Ivt, e) ? Ivt[e] ?? null : null;
}
async function g$t(r) {
  let e = Fr(r).slice(1);
  if (!e) return S("unknown");
  let o = e.toLowerCase(), n = Ran(o);
  if (n !== null) return hr(KVe[n]);
  if (u0e.isPluginLanguageId(o)) return S("plugin");
  return hr(Object.prototype.hasOwnProperty.call(lrr, o) ? lrr[o] : void 0);
}
function hr(r) {
  return r === void 0 ? S("unknown") : Dn(r);
}
export {
  Aan,
  CKn,
  Ran,
  g$t,
  iOo,
  oOo,
  sOo,
  u0e
};
