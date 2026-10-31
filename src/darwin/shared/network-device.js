// darwin/shared/network-device.js — Claude Code 2.1.310（darwin）模块 chunk-wsnywt0j.js
import { kw } from "../fs/redirected-statement.js";
import { Gye, Eet, nbt, Sjr, bjr, wjr, mWt, gWt, $Xn, UXn, Ejr, jXn, Hze } from "../shell/tree-sitter-parse-abort.js";
function Pun(e) {
  return bjr.test(e) || S9n(e);
}
function S9n(e) {
  return nbt.test(e) || Sjr.test(e) || wjr.test(e) || $Xn.test(e) || UXn.test(e) || Ejr.test(e);
}
function rZe(e) {
  return e.type === "ERROR" || e.children.some(rZe);
}
var T = /* @__PURE__ */ new Set(["program", "list", "pipeline"]), E = /* @__PURE__ */ new Set(["&&", "||", "|", ";", "&", "|&", `
`]), $O = 1e4, P = 65536, U = 16;
function nh(e) {
  if (!e) return [];
  if (e.length > $O) return [e];
  let t = kw().parse(e);
  if (!t) return [e];
  let r = [], s = (i) => {
    if (E.has(i.type) || i.type === "comment") return;
    if (i.type === "redirected_statement") {
      for (let n of i.children) if (!n.type.endsWith("_redirect")) s(n);
      return;
    }
    if (T.has(i.type)) {
      for (let n of i.children) s(n);
      return;
    }
    r.push(i.text);
  };
  return s(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t), r;
}
function tFo(e) {
  if (e.length > $O) return true;
  let t = kw().parse(e);
  if (t?.type !== "program") return true;
  let r = t;
  while (r !== void 0 && (T.has(r.type) || r.type === "redirected_statement")) {
    let s = r.children.findLastIndex((i) => !E.has(i.type) && i.type !== "comment" && !i.type.endsWith("_redirect"));
    if (r.type === "list" && r.children[s - 1]?.type === "&&") return true;
    r = r.children[s];
  }
  return false;
}
function g_t(e) {
  if (!e || e.length > $O) return [];
  let t = kw().parse(e);
  return t ? rUr(t) : [];
}
function rUr(e) {
  return oUr(e) ?? [];
}
function oUr(e, { unparsedBodyOverruns: t = false } = {}) {
  let r = [], s = P, i = U, n = false, o = (l) => {
    if (n) return;
    if (l.type === "command") r.push(l.text), s -= l.text.length;
    let f = sUr(l);
    if (f !== null) i -= 1, s -= f.length;
    if (s < 0 || i < 0) {
      n = true;
      return;
    }
    if (f !== null) {
      let u = kw()?.parse(f);
      if (u) o(u);
      else if (t) n = true;
      return;
    }
    for (let u of l.children) o(u);
  };
  return o(e), n ? null : r;
}
function sUr(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}
function Iun(e) {
  if (!e || e.length > $O) return null;
  let t = kw().parse(e);
  if (!t) return null;
  return W(t);
}
function iUr(e) {
  if (!e || e.length > $O) return null;
  let t = kw().parse(e);
  if (!t) return null;
  if (rZe(t) || jXn(t) !== null || v(t) || D(t) || aUr(e)) return null;
  if (e.includes("`")) return null;
  let r = W(t);
  if (r === null) return null;
  return r.some(X) ? null : r;
}
var O = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/, k = /[;&|<>\n]/, B = /(?:^|[ \t])[-/]/, F = /[()]/;
function H(e) {
  let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
  return t === -1 || /['"\\]/.test(e.slice(t));
}
function X(e) {
  if (O.test(e) && C(e)) return true;
  let t = Hze(e), r = e.replace(/['"\\]/g, "");
  if (O.test(t) && (k.test(t) || F.test(t) || B.test(r) && H(e))) return true;
  return Y.test(e) || G(e);
}
var Y = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;
function G(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t !== void 0) {
      if (t === '"' && s === "\\") r++;
      else if (s === t) t = void 0;
      continue;
    }
    if (s === "\\") {
      r++;
      continue;
    }
    if (s === "'" || s === '"') {
      t = s;
      continue;
    }
    if (s === "$" && e[r + 1] === '"') return true;
  }
  return false;
}
var Z = /* @__PURE__ */ new Set(["file_descriptor", "number", ">&", "<&"]);
function D(e) {
  if (e.type.endsWith("_redirect")) {
    if (!q(e)) return true;
  }
  return e.children.some(D);
}
function q(e) {
  let t = e.children.map((s) => s.type);
  if (!(t.length === 2 && t[0] !== "file_descriptor" || t.length === 3 && t[0] === "file_descriptor")) return false;
  return e.children.every((s) => {
    if (!Z.has(s.type) || s.children.length !== 0) return false;
    return s.type === "number" || s.type === "file_descriptor" ? /^\d+$/.test(s.text) : true;
  });
}
function W(e) {
  let t = [], r = true, s = (i) => {
    if (!r) return;
    if (E.has(i.type) || i.type === "comment") return;
    if (i.type === "redirected_statement") {
      for (let n of i.children) {
        if (n.type.endsWith("_redirect")) {
          if (x(n)) {
            r = false;
            return;
          }
          continue;
        }
        s(n);
      }
      return;
    }
    if (T.has(i.type)) {
      for (let n of i.children) s(n);
      return;
    }
    if (i.type === "negated_command") {
      for (let n of i.children) if (n.type !== "!") s(n);
      return;
    }
    if (i.type === "command" || i.type === "variable_assignment") {
      if (x(i)) {
        r = false;
        return;
      }
      t.push(i.text);
      return;
    }
    r = false;
  };
  return s(e), r ? t : null;
}
function x(e) {
  let t = e.type === "command" || e.type === "variable_assignment";
  for (let r of e.children) {
    if (r.type === "subshell" && t) return true;
    if (x(r)) return true;
  }
  return false;
}
function aUr(e) {
  if (!e) return false;
  if (e.length > $O) return true;
  let t = kw()?.parse(e);
  if (!t) return true;
  let r = false, s = (i) => {
    if (r) return;
    if (i.type === "expansion" && i.text.includes("(")) {
      r = true;
      return;
    }
    for (let n of i.children) s(n);
  };
  return s(t), r;
}
function Dv(e) {
  if (!e || e.length > $O) return [];
  let t = kw().parse(e);
  if (!t) return [];
  let r = Gye(t, null);
  if (!r) return [];
  return Eet(r);
}
var R = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "arithmetic_expansion"]);
function S(e) {
  if (R.has(e.type)) return true;
  return e.children.some(S);
}
var M = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "subshell"]);
function v(e) {
  if (M.has(e.type)) return true;
  return e.children.some(v);
}
var z = /* @__PURE__ */ new Set(["ansi_c_string", "translated_string"]);
function N(e) {
  if (z.has(e.type)) return true;
  return e.children.some(N);
}
var I = /* @__PURE__ */ new Set(["<", ">", ">>", "<<", "<<-", "<<<", "<&", ">&", "&>", "&>>", ">|", ">&-", "<&-", "file_descriptor", "heredoc_start", "heredoc_body", "heredoc_content", "heredoc_end"]);
function A(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((n) => !I.has(n.type)), r = e.children.some((n) => n.type === ">&-" || n.type === "<&-"), s = !r && e.children.some((n) => n.type === ">&" || n.type === "<&") && t.some((n) => y(n).startsWith("-")), i = e.type === "heredoc_redirect" || r || s ? 0 : 1;
    if (t.length > i) return true;
  }
  return e.children.some(A);
}
function b(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find((i) => i.type === "heredoc_start")?.text ?? "";
    if (!(r.length >= 2 && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"'))) || r.includes("\\")) return true;
  }
  return e.children.some(b);
}
function nFo(e, t) {
  if (!e) return false;
  if (e.length > $O || Pun(e)) return true;
  let r = kw().parse(e);
  if (!r || rZe(r)) return true;
  let s = (o) => A(o) || b(o) || S(o) || N(o) || o.type !== "heredoc_redirect" && C(o.text) || o.type !== "heredoc_redirect" && !o.children.every((l) => I.has(l.type) || w(l, /\s/.test(l.text))) || o.type !== "heredoc_redirect" && o.children.some((l) => l.type === "word" && l.text.startsWith("=")), i = (o) => {
    if (R.has(o.type)) return;
    if (o.type === "command") return o;
    let l;
    for (let f of o.children) {
      if (f.type.endsWith("_redirect")) continue;
      let u = i(f);
      if (u) l = u;
    }
    return l;
  }, n = (o) => {
    if (R.has(o.type)) return false;
    if (o.type === "redirected_statement") {
      let l = o.children.find((u) => u.type === "command") ?? i(o), f = l ? t(l.text) : true;
      for (let u of o.children) if (u.type.endsWith("_redirect")) {
        if (f && s(u)) return true;
      } else if (n(u)) return true;
      return false;
    }
    if (o.type === "command") {
      let l = t(o.text);
      for (let f of o.children) if (f.type.endsWith("_redirect")) {
        if (l && s(f)) return true;
      } else if (n(f)) return true;
      return false;
    }
    if (o.type.endsWith("_redirect")) return s(o);
    return o.children.some(n);
  };
  return n(r);
}
var K = /* @__PURE__ */ new Set(["word", "string", "raw_string", "number"]), Q = /(?:^|[^\\])(?:\\\\)*[;|&<>]/, j = /(?:^|[^\\])(?:\\\\)*\\$/;
function w(e, t = false) {
  if (e.type === "concatenation") return e.children.every((r) => w(r, t));
  if (e.type === "word") {
    if (mWt.test(e.text)) return false;
    if (Q.test(e.text) || j.test(e.text)) return false;
    if (t && gWt.test(e.text)) return false;
    return true;
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
  }
  return K.has(e.type);
}
function C(e) {
  let t = null, r = false, s = false;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    if (t === "'") {
      if (n === "'") t = null;
      continue;
    }
    if (t === '"') {
      if (n === "\\" && i + 1 < e.length && '$`"\\'.includes(e[i + 1])) {
        i++;
        continue;
      }
      if (n === "`") return true;
      if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return true;
      if (n === '"') t = null;
      continue;
    }
    if (n === "\\") {
      i++;
      continue;
    }
    if (n === "`") return true;
    if (n === "$" && (e[i + 1] === "'" || e[i + 1] === '"')) return true;
    if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return true;
    if (n === "=" && e[i + 1] === "(") return true;
    if (n === "*" || n === "?" || n === "[") return true;
    if (n === "'" || n === '"') {
      t = n;
      continue;
    }
    if (n === `
`) return false;
    if (n === " " || n === "	") {
      r = false, s = false;
      continue;
    }
    if (n === "{") {
      r = true;
      continue;
    }
    if (r && (n === "," || n === "." && e[i + 1] === ".")) {
      s = true;
      continue;
    }
    if (n === "}" && r && s) return true;
  }
  return t !== null;
}
function rFo(e) {
  if (!e || e.length > $O) return true;
  if (Pun(e)) return true;
  if (C(e)) return true;
  let t = kw().parse(e);
  if (!t || rZe(t)) return true;
  let r = t.children.filter((i) => i.type !== "comment");
  if (r.length !== 1 || r[0].type !== "command" && !(r[0].type === "redirected_statement" && r[0].children.some((i) => i.type === "command"))) return true;
  if (S(t) || N(t) || A(t) || b(t)) return true;
  let s = Gye(t, null);
  if (!s) return true;
  for (let i of s.children) {
    if (i.type === "command_name" || i.type === "variable_assignment") continue;
    if (i.type.endsWith("_redirect")) continue;
    if (!w(i, /\s/.test(i.text))) return true;
  }
  return false;
}
function y(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) => r === `
` ? "" : r);
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) => r === `
` ? "" : r);
    default:
      return e.text;
  }
}
function tTe(e) {
  let t = { commandWithoutRedirections: e, redirections: [], hasDangerousRedirection: false, dangerousRedirectionReason: void 0 };
  if (!e || e.length > $O) return t;
  let r = kw().parse(e);
  if (!r) return t;
  let s = [], i = false, n, o = (u) => {
    if (u.type === "file_redirect") {
      let d = null, g = false, a = null, L = 0;
      for (let c of u.children) if (c.type === ">" || c.type === "&>" || c.type === ">|") d = ">";
      else if (c.type === ">>" || c.type === "&>>" || c.type === ">>|") d = ">>";
      else if (c.type === ">&") d = ">", g = true;
      else if (c.type === "<&") {
        let _ = u.children.filter((p) => p !== c && p.type !== "file_descriptor");
        if (_.length > 1 || _.some((p) => y(p).startsWith("-"))) {
          if (i = true, n !== "network_device") n = "shell_expansion";
        }
        return;
      } else if (c.type === ">&-" || c.type === "<&-") {
        if (u.children.filter((p) => p !== c && p.type !== "file_descriptor").length > 0) {
          if (i = true, n !== "network_device") n = "shell_expansion";
        }
        return;
      } else if (c.type === "<") {
        let _ = u.children.filter((m) => m !== c && m.type !== "file_descriptor");
        if (_.length > 1) {
          if (i = true, n !== "network_device") n = "shell_expansion";
          return;
        }
        let p = _[0];
        if (p) {
          let m = y(p);
          if (/^\/dev\/(tcp|udp)\//.test(m)) i = true, n = "network_device";
        }
        return;
      } else if (c.type !== "file_descriptor") a = c, L++;
      if (!d || !a) return;
      if (L > 1) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      if (g && y(a).startsWith("-")) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      if (a.type === "number" && a.children.length === 0 && g) return;
      if (!(a.type === "word" && a.children.length === 0 || a.type === "number" && a.children.length === 0 || a.type === "raw_string" || a.type === "string" && !a.children.some((c) => c.type !== "string_content" && c.type !== '"'))) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      let h = y(a);
      if (/^~|[*?[]/.test(h)) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      if (h.startsWith("!") || h.startsWith("=")) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      if (g && !/^[A-Za-z0-9./_-]+$/.test(h)) {
        if (i = true, n !== "network_device") n = "shell_expansion";
        return;
      }
      if (/^\/dev\/(tcp|udp)\//.test(h)) {
        i = true, n = "network_device";
        return;
      }
      s.push({ target: h, operator: d });
      return;
    }
    for (let d of u.children) o(d);
  };
  o(r);
  let l = [], f = (u) => {
    if (u.type === "comment") return;
    if (u.type === "redirected_statement") {
      for (let d of u.children) if (!d.type.endsWith("_redirect")) f(d);
      return;
    }
    if (T.has(u.type)) {
      for (let d of u.children) f(d);
      return;
    }
    l.push(u.text);
  };
  return f(r.type === "ERROR" && r.children[0]?.type === "program" ? r.children[0] : r), { commandWithoutRedirections: l.length > 0 ? l.join(" ") : e, redirections: s, hasDangerousRedirection: i, dangerousRedirectionReason: n };
}
export {
  $O,
  Dv,
  Iun,
  Pun,
  S9n,
  aUr,
  g_t,
  iUr,
  nFo,
  nh,
  oUr,
  rFo,
  rUr,
  rZe,
  sUr,
  tFo,
  tTe
};
