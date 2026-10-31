// linux/mcp/chunk-0e2a1db6.js — Claude Code 2.1.310（linux）模块 chunk-9z5ybxhe.js
import { Ve } from "../terminal/chunk-3ca478a4.js";
var g = { Task: "Agent", KillShell: "TaskStop", KillBash: "TaskStop", ListPeers: "ListAgents", Brief: "SendUserMessage", ListMcpResources: "ListMcpResourcesTool", ReadMcpResource: "ReadMcpResourceTool", ReadMcpResourceDir: "ReadMcpResourceDirTool" };
var l = g;
function gc(e) {
  return Object.hasOwn(l, e) ? l[e] : e;
}
function Cse(e) {
  let n = [];
  for (let [t, r] of Object.entries(l)) if (r === e) n.push(t);
  return n;
}
var mar = "workspace", _4e = `mcp__${mar}__bash`, gar = `mcp__${mar}__web_fetch`;
function Rse(e, n) {
  let t = n && Object.hasOwn(n, e) ? n[e] : void 0;
  return t !== void 0 && t !== e ? [e, t] : [e];
}
function cq(e, n) {
  if (!n) return [];
  let t = [];
  for (let [r, o] of Object.entries(n)) if (o === e) t.push(r);
  return t;
}
function Tv(e) {
  return e.includes("*");
}
function wM(e, n) {
  return h(e)(n);
}
function h(e) {
  let n = e.split("*"), t = n[0] ?? "";
  if (n.length === 1) return (i) => t === i;
  let r = n.at(-1) ?? "", o, s = [];
  return (i) => {
    let c = i.length - r.length;
    if (c < t.length || !i.startsWith(t) || !i.endsWith(r)) return false;
    o ??= n.slice(1, -1).filter((a) => a !== "");
    let u = t.length;
    for (let [a, f] of o.entries()) {
      let d = (s[a] ??= C(f))(i, u, c);
      if (d === -1) return false;
      u = d + f.length;
    }
    return true;
  };
}
function oEn(e, n, t) {
  let r = 0, o = 0;
  for (; ; ) {
    let s = p(e, t, r), i = p(n, t, o);
    if (e.charAt(s) !== n.charAt(i) || !wM(e.slice(r, s), n.slice(o, i))) return false;
    if (s === e.length) return true;
    r = s + 1, o = i + 1;
  }
}
function p(e, n, t) {
  let r = t;
  while (r < e.length && !n.includes(e.charAt(r))) r++;
  return r;
}
function tAt(e, n) {
  return wM(e, n);
}
function har(e) {
  return h(e);
}
function m(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function kfe(e, n) {
  let t = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r) => `\\${r}`);
  if (n?.escapeGlobs) t = t.replaceAll("*", "\\*");
  if (t.startsWith("!") || t.startsWith("#")) t = `\\${t}`;
  return t = t.replace(/\s+$/, (r) => Array.from(r, (o) => `\\${o}`).join("")), t;
}
function sEn(e) {
  return e.replace(/\\([^])/g, (n, t) => iEn(t) ? t : n);
}
var A = /^[\\[\]!#()|+^$*?\s]$/;
function iEn(e) {
  return A.test(e);
}
var b = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function TQo(e) {
  return b.test(e);
}
function AQo(e) {
  return CQo(e).replaceAll("\\\\", "\\");
}
function CQo(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function X9(e) {
  if (typeof e === "string" && !e.includes("(") && !e.includes(")")) return { kind: "bare" };
  let n = R(e, "("), t = E(e, ")");
  if (n === -1 && t === -1) return { kind: "bare" };
  let r = e.substring(0, n);
  if (n === -1 || t <= n || t !== e.length - 1 || /[()]/.test(r)) return { kind: "malformed" };
  return { kind: "call", toolName: r, rawContent: e.substring(n + 1, t) };
}
function Bn(e) {
  let n = X9(e);
  if (n.kind !== "call" || !n.toolName) return { toolName: gc(e) };
  if (n.rawContent === "" || n.rawContent === "*") return { toolName: gc(n.toolName) };
  let t = AQo(n.rawContent);
  return { toolName: gc(n.toolName), ruleContent: t };
}
function RQo(e) {
  let n = X9(e);
  return n.kind === "call" && n.toolName ? n.toolName : e;
}
function dn(e) {
  if (!e.ruleContent) return e.toolName;
  let n = m(e.ruleContent);
  return `${e.toolName}(${n})`;
}
var Zj = "!";
function oci(e) {
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (r === void 0) continue;
    let o = e[t + 1];
    if (r === Zj && o !== void 0 && !o.startsWith(Zj) && !o.startsWith("(")) {
      n.push(Zj + o), t++;
      continue;
    }
    n.push(r);
  }
  return n;
}
function sci(e) {
  return e.lastIndexOf("(") > e.lastIndexOf(")");
}
function nAt(e) {
  return `Error: the --disallowed-tools rule "${Ve(e, 64)}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`;
}
function Su(e) {
  if (e.length === 0) return [];
  let n = [];
  for (let t of e) {
    if (!t) continue;
    let r = "", o = false;
    for (let s of t) switch (s) {
      case "(":
        o = true, r += s;
        break;
      case ")":
        o = false, r += s;
        break;
      case ",":
        if (o) r += s;
        else {
          if (r.trim()) n.push(r.trim());
          r = "";
        }
        break;
      case " ":
        if (o) r += s;
        else if (r.trim()) n.push(r.trim()), r = "";
        break;
      default:
        if (r || s.trim()) r += s;
    }
    if (r.trim()) n.push(r.trim());
  }
  return n;
}
function R(e, n) {
  for (let t = 0; t < e.length; t++) if (e[t] === n) {
    let r = 0, o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}
function E(e, n) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] === n) {
    let r = 0, o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}
function C(e) {
  if (!e.includes(e.charAt(0), 1)) return (t, r, o) => {
    let s = t.indexOf(e, r);
    return s + e.length > o ? -1 : s;
  };
  let n = new Int32Array(e.length);
  for (let t = 1, r = 0; t < e.length; t++) {
    while (r > 0 && e.charCodeAt(t) !== e.charCodeAt(r)) r = n[r - 1] ?? 0;
    if (e.charCodeAt(t) === e.charCodeAt(r)) r++;
    n[t] = r;
  }
  return (t, r, o) => {
    for (let s = r, i = 0; s < o; s++) {
      while (i > 0 && t.charCodeAt(s) !== e.charCodeAt(i)) i = n[i - 1] ?? 0;
      if (t.charCodeAt(s) === e.charCodeAt(i)) i++;
      if (i === e.length) return s - e.length + 1;
    }
    return -1;
  };
}
export {
  AQo,
  Bn,
  CQo,
  Cse,
  RQo,
  Rse,
  Su,
  TQo,
  Tv,
  X9,
  Zj,
  _4e,
  cq,
  dn,
  gar,
  gc,
  har,
  iEn,
  kfe,
  mar,
  nAt,
  oEn,
  oci,
  sEn,
  sci,
  tAt,
  wM
};
