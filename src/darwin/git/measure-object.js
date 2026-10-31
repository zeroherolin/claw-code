// darwin/git/measure-object.js — Claude Code 2.1.310（darwin）模块 chunk-eryfrvk6.js
import { pe } from "../shared/async-hooks.5238.js";
import { i } from "../shared/environment.js";
import { di, Ze } from "../shared/chunk-d2c47492.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { VOe, ane, H9, qOe, NWn, IDt, lne } from "../core/conversation-engine.js";
import { ZB, Ffn, Ufn, RXn, xXn, PXn, det, eWt } from "../context/org-memory-writes-setting-changed.js";
import { gr } from "../shared/chunk-7e745eb7.js";
var tOe = /[\t\n\v\f\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/, w = new RegExp(`^${tOe.source}`);
var te = new RegExp(`${`['"‘-‟]`}+`, "g");
function _9(e) {
  let t = e.replace(w, "");
  for (; ; ) if (t.startsWith("<#")) {
    let n = t.indexOf("#>", 2);
    if (n < 0) break;
    t = t.slice(n + 2).replace(w, "");
  } else if (t.startsWith("#")) {
    let n = t.search(/[\r\n]/);
    if (n < 0) break;
    t = t.slice(n).replace(w, "");
  } else break;
  return t;
}
function fB(e) {
  return e.replace(te, "");
}
var ne = new RegExp(`^${`['"‘-‟]`}+|${`['"‘-‟]`}+$`, "g");
function h7(e) {
  return e.replace(ne, "");
}
function R(e) {
  if (e === "'" || e >= "‘" && e <= "‛") return "single";
  if (e === '"' || e >= "“" && e <= "„") return "double";
  return null;
}
function Fae(e) {
  let t = "", n = null;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (a === "`") {
      if (n === "single") t += "``";
      else if (r + 1 < e.length) t += a + e[r + 1], r++;
      else t += a;
      continue;
    }
    let s = R(a);
    if (n === null) {
      if (s !== null) {
        n = s;
        continue;
      }
      t += a;
    } else if (s === n) {
      if (r + 1 < e.length && R(e[r + 1]) === s) {
        t += e[r + 1], r++;
        continue;
      }
      n = null;
    } else t += a;
  }
  return t;
}
function XR(e) {
  return F(e, void 0);
}
var re = { t: "	", n: `
`, r: "\r", f: "\f", v: "\v" };
function E(e) {
  return F(e, re);
}
var se = { "0": "\0" };
function y(e) {
  return F(e, se);
}
function F(e, t) {
  return e.replace(/`(?:(`)|[\r\n]+\s*|u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, r, a, s) => {
    if (r !== void 0) return "`";
    if (a !== void 0) {
      let c = parseInt(a, 16);
      return c <= 1114111 ? String.fromCodePoint(c) : "�";
    }
    if (s === void 0) return "";
    if (t && s in t) return t[s];
    return s;
  });
}
var QFn = /[\t\n\v\f\r ]+/, MTs = new RegExp(`^${QFn.source}`);
import { statSync as ge } from "fs";
import { join as de } from "path";
var kho = ["-verbose", "-debug"], P = ["-erroraction", "-warningaction", "-informationaction", "-progressaction"], b = ["-ea", "-wa", "-infa", "-proga"], x = ["-errorvariable", "-warningvariable", "-informationvariable", "-outvariable", "-pipelinevariable"], I = ["-ev", "-wv", "-iv", "-ov", "-pv"], Cho = [...P, ...x, "-outbuffer", ...b], T = /* @__PURE__ */ new Set([...kho, ...Cho]);
function N(e) {
  if (e.length < 2) return false;
  return b.includes(e) || P.some((t) => t.startsWith(e));
}
var ke = /* @__PURE__ */ new Set([...P, ...b]), D = /* @__PURE__ */ new Set(["silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4"]);
function k(e) {
  if (e.length < 2) return false;
  return I.includes(e) || x.some((t) => t.startsWith(e));
}
var W = /* @__PURE__ */ new Set(["global", "script", "local", "private", "variable"]), M = /* @__PURE__ */ new Set(["psdefaultparametervalues", "confirmpreference", "debugpreference", "erroractionpreference", "errorview", "formatenumerationlimit", "informationpreference", "maximumhistorycount", "ofs", "outputencoding", "progresspreference", "psemailserver", "psmoduleautoloadingpreference", "psnativecommandargumentpassing", "psnativecommanduseerroractionpreference", "pssessionapplicationname", "pssessionconfigurationname", "pssessionoption", "psstyle", "transcript", "verbosepreference", "warningpreference", "whatifpreference", "logcommandhealthevent", "logcommandlifecycleevent", "logenginehealthevent", "logenginelifecycleevent", "logproviderhealthevent", "logproviderlifecycleevent", "maximumaliascount", "maximumdrivecount", "maximumerrorcount", "maximumfunctioncount", "maximumvariablecount"]), H = [...P, ...x, "-outbuffer", "-verbose", "-debug"], ae = H.filter((e) => e !== "-progressaction");
function oe(e, t) {
  let n = null;
  for (let r of t) if (r.startsWith(e)) {
    if (n !== null) return null;
    n = r;
  }
  return n;
}
function ie(e, t) {
  if (e.length < 2) return false;
  for (let n of [H, ae]) {
    let r = oe(e, n);
    if (r !== null && t.includes(r)) return true;
  }
  return false;
}
var le = /* @__PURE__ */ new Set([...I, "-ea", "-wa", "-p"]), ce = false;
function ue(e, t, n, r) {
  if (!r && le.has(e)) return false;
  return t.includes(e) || ie(e, n);
}
function B(e, t, n) {
  return ue(e, t, n, ce);
}
function j(e) {
  return B(e, I, x);
}
function U(e) {
  return B(e, b, P);
}
var HTs = /* @__PURE__ */ new Set(["add", "clear", "close", "copy", "enter", "exit", "find", "format", "get", "hide", "join", "lock", "move", "new", "open", "optimize", "pop", "push", "redo", "remove", "rename", "reset", "resize", "resume", "search", "select", "set", "show", "skip", "split", "step", "switch", "undo", "unlock", "watch", "connect", "disconnect", "read", "receive", "send", "write", "backup", "checkpoint", "compare", "compress", "convert", "convertfrom", "convertto", "dismount", "edit", "expand", "export", "group", "import", "initialize", "limit", "merge", "mount", "out", "publish", "restore", "save", "sync", "unpublish", "update", "debug", "measure", "ping", "repair", "resolve", "test", "trace", "approve", "assert", "build", "complete", "confirm", "deny", "deploy", "disable", "enable", "install", "invoke", "register", "request", "restart", "start", "stop", "submit", "suspend", "uninstall", "unregister", "wait", "block", "grant", "protect", "revoke", "unblock", "unprotect", "use", "sort", "tee", "where", "foreach"]), fe = ["-variable", "-sessionvariable", "-responseheadersvariable", "-statuscodevariable"];
function V(e) {
  if (e.length < 3) return false;
  return fe.some((t) => t.startsWith(e));
}
var me = /* @__PURE__ */ new Set(["--list-runtimes", "--list-sdks"]);
function s2(e, t) {
  let n = (t?.elementTypes ?? []).slice(1), r = t?.args ?? [], a = t?.children;
  for (let s = 0; s < n.length; s++) {
    if (n[s] !== "StringConstant" && n[s] !== "Parameter") {
      if (!/[$(@{[]/.test(r[s] ?? "")) continue;
      return true;
    }
    if (n[s] === "Parameter") {
      let c = a?.[s];
      if (c) {
        if (c.some((o) => o.type !== "StringConstant")) return true;
      } else {
        let o = r[s] ?? "", l = o.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(o.slice(l + 1))) return true;
      }
    }
  }
  return false;
}
var G = Object.assign(/* @__PURE__ */ Object.create(null), { "get-childitem": { safeFlags: ["-Path", "-LiteralPath", "-Filter", "-Include", "-Exclude", "-Recurse", "-Depth", "-Name", "-Force", "-Attributes", "-Directory", "-File", "-Hidden", "-ReadOnly", "-System"] }, "get-content": { safeFlags: ["-Path", "-LiteralPath", "-TotalCount", "-Head", "-Tail", "-Raw", "-Encoding", "-Delimiter", "-ReadCount"] }, "get-item": { safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"] }, "get-itemproperty": { safeFlags: ["-Path", "-LiteralPath", "-Name"] }, "test-path": { safeFlags: ["-Path", "-LiteralPath", "-PathType", "-Filter", "-Include", "-Exclude", "-IsValid", "-NewerThan", "-OlderThan"] }, "resolve-path": { safeFlags: ["-Path", "-LiteralPath", "-Relative"] }, "get-filehash": { safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"] }, "get-acl": { safeFlags: ["-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude"] }, "set-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] }, "push-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] }, "pop-location": { safeFlags: ["-PassThru", "-StackName"] }, "select-string": { safeFlags: ["-Path", "-LiteralPath", "-Pattern", "-InputObject", "-SimpleMatch", "-CaseSensitive", "-Quiet", "-List", "-NotMatch", "-AllMatches", "-Encoding", "-Context", "-Raw", "-NoEmphasis"] }, "convertto-json": { safeFlags: ["-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray"] }, "convertfrom-json": { safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"] }, "convertto-csv": { safeFlags: ["-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes"] }, "convertfrom-csv": { safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"] }, "convertto-xml": { safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"] }, "convertto-html": { safeFlags: ["-InputObject", "-Property", "-Head", "-Title", "-Body", "-Pre", "-Post", "-As", "-Fragment"] }, "format-hex": { safeFlags: ["-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset"] }, "get-member": { safeFlags: ["-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force"] }, "get-unique": { safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"] }, "compare-object": { safeFlags: ["-ReferenceObject", "-DifferenceObject", "-Property", "-SyncWindow", "-CaseSensitive", "-Culture", "-ExcludeDifferent", "-IncludeEqual", "-PassThru"] }, "join-string": { safeFlags: ["-InputObject", "-Property", "-Separator", "-SingleQuote", "-DoubleQuote", "-FormatString"] }, "get-random": { safeFlags: ["-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle"] }, "convert-path": { safeFlags: ["-Path", "-LiteralPath"] }, "join-path": { safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"] }, "split-path": { safeFlags: ["-Path", "-LiteralPath", "-Qualifier", "-NoQualifier", "-Parent", "-Leaf", "-LeafBase", "-Extension", "-IsAbsolute"] }, "get-itempropertyvalue": { safeFlags: ["-Path", "-LiteralPath", "-Name"] }, "get-psprovider": { safeFlags: ["-PSProvider"] }, "get-computerinfo": { allowAllFlags: true }, "get-host": { allowAllFlags: true }, "get-date": { safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"] }, "get-location": { safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"] }, "get-psdrive": { safeFlags: ["-Name", "-PSProvider", "-Scope"] }, "get-module": { safeFlags: ["-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition"] }, "get-alias": { safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"] }, "get-history": { safeFlags: ["-Id", "-Count"] }, "get-culture": { allowAllFlags: true }, "get-uiculture": { allowAllFlags: true }, "get-timezone": { safeFlags: ["-Name", "-Id", "-ListAvailable"] }, "get-uptime": { allowAllFlags: true }, "write-output": { safeFlags: ["-InputObject", "-NoEnumerate"], additionalCommandIsDangerousCallback: s2 }, "write-host": { safeFlags: ["-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor"], additionalCommandIsDangerousCallback: s2 }, "start-sleep": { safeFlags: ["-Seconds", "-Milliseconds", "-Duration"], additionalCommandIsDangerousCallback: s2 }, "format-table": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "format-list": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "format-wide": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "format-custom": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "measure-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "select-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "sort-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "group-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "where-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "out-string": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "out-host": { allowAllFlags: true, additionalCommandIsDangerousCallback: s2 }, "get-netadapter": { safeFlags: ["-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical"] }, "get-netipaddress": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type"] }, "get-netroute": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix"] }, "get-dnsclient": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias"] }, "get-winevent": { safeFlags: ["-LogName", "-ListLog", "-ListProvider", "-ProviderName", "-Path", "-MaxEvents", "-FilterXPath", "-Force", "-Oldest"] }, git: {}, gh: {}, docker: {}, ipconfig: { safeFlags: ["/all", "/allcompartments"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("/") && !n.startsWith("-")) }, netstat: { safeFlags: ["-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y"] }, systeminfo: { safeFlags: ["/FO", "/NH"] }, tasklist: { safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"] }, "where.exe": { allowAllFlags: true }, hostname: { safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")) }, whoami: { safeFlags: ["/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh"] }, ver: { allowAllFlags: true }, arp: { safeFlags: ["-a", "-g", "-v", "-n"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")) }, route: { safeFlags: ["print", "PRINT", "-4", "-6"], additionalCommandIsDangerousCallback: (e, t) => {
  if (!t) return true;
  return t.args.find((r) => !r.startsWith("-"))?.toLowerCase() !== "print";
} }, getmac: { safeFlags: ["/FO", "/NH", "/V"] }, tree: { safeFlags: ["/F", "/A", "/Q", "/L"] }, findstr: { safeFlags: ["/B", "/E", "/L", "/R", "/S", "/I", "/X", "/V", "/N", "/M", "/O", "/P", "/C", "/G", "/D", "/A"] }, dotnet: {} }), he = /* @__PURE__ */ new Set(["out-null"]), Se = /* @__PURE__ */ new Set(["format-table", "format-list", "format-wide", "format-custom", "measure-object", "select-object", "sort-object", "group-object", "where-object", "out-string", "out-host"]), Ce = /* @__PURE__ */ new Set(["where.exe"]), Ee = /* @__PURE__ */ new Set(["git", "gh", "docker", "dotnet"]), Pe = ["", ".exe", ".bat", ".cmd", ".com", ".ps1", ".vbs", ".js", ".wsf", ".vbe", ".jse", ".wsh", ".msc", ".cpl"];
class Y {
  listByPathext = /* @__PURE__ */ new Map();
  regexByPathext = /* @__PURE__ */ new Map();
  list() {
    let e = i.PATHEXT ?? "", t = this.listByPathext.get(e);
    if (t === void 0) {
      let n = new Set(Pe);
      for (let r of e.split(";").slice(0, 64)) {
        let a = r.trim().toLowerCase();
        if (a.startsWith(".") && a.length <= 16) n.add(a);
      }
      t = [...n], this.listByPathext.set(e, t);
    }
    return t;
  }
  regex() {
    let e = i.PATHEXT ?? "", t = this.regexByPathext.get(e);
    if (t === void 0) {
      let n = this.list().filter((r) => r !== "").map((r) => di(r.slice(1)));
      t = new RegExp(`\\.(${n.join("|")})$`, "i"), this.regexByPathext.set(e, t);
    }
    return t;
  }
}
var Z = new Y();
function Ae() {
  return Z.list();
}
function be() {
  return Z.regex();
}
function pkr(e) {
  let t = new Set(fkr(e).map((n) => n.stem));
  return t.delete(""), Array.from(t);
}
function fkr(e) {
  let t = be(), n = /* @__PURE__ */ new Set(), r = [];
  for (let a of [(s) => s, fB, h7, Fae]) {
    let s = xe(e, a);
    if (n.has(s)) continue;
    n.add(s), r.push({ base: s, stem: s.replace(t, "") });
  }
  return r;
}
function xe(e, t) {
  let r = t(e).replace(/^[A-Za-z]:(?![\\/])/, ""), a = [];
  for (let s of r.split(/[\\/]+/)) {
    let c = ZB(s.replace(/:.*$/, ""));
    if (c === "." || c === "") continue;
    if (c === "..") {
      if (a.length > 0 && a.at(-1) !== "..") a.pop();
      else a.push("..");
      continue;
    }
    a.push(c);
  }
  return (a.at(-1) ?? "").toLowerCase();
}
function we(e) {
  if (O() !== "windows") return null;
  let t = pe(), n = /* @__PURE__ */ new Set();
  for (let { base: r, stem: a } of fkr(e)) for (let s of r === a ? [a] : [a, r]) {
    if (s === "" || n.has(s)) continue;
    n.add(s);
    for (let c of Ae()) {
      let o = de(t, s + c);
      try {
        if (ge(o).isFile()) return s + c;
      } catch {
      }
    }
  }
  return null;
}
var Fe = /\.(exe|cmd|bat|com)$/;
function fw(e) {
  let t = e.toLowerCase();
  if (!t.includes("\\") && !t.includes("/")) t = t.replace(Fe, "");
  let n = ane[t];
  if (n) return n.toLowerCase();
  return t;
}
function ZFn(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return true;
  let n = fw(e);
  return n === "set-location" || n === "push-location" || n === "pop-location" || n === "new-psdrive" || O() === "windows" && (n === "ndr" || n === "mount");
}
function qMt(e) {
  let t = fw(e);
  return he.has(t);
}
function Tho(e, t) {
  let n = fw(e.name);
  if (!Se.has(n)) return false;
  return Put(e, t);
}
function Aho(e) {
  if (e.statementType !== "PipelineAst") return false;
  if (e.commands.length === 0) return false;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return false;
  return true;
}
function Ie(e) {
  let t = e.toLowerCase(), n = G[t];
  if (n) return n;
  let r = fw(t);
  if (r !== t) return G[r];
  return;
}
function DTs(e) {
  let t = e.trim();
  if (!t) return false;
  if (/\$\(/.test(t)) return true;
  if (/(?:^|[^\w.])@\w+/.test(t)) return true;
  if (/\.\w+\s*\(/.test(t)) return true;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return true;
  if (/--%/.test(t)) return true;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return true;
  if (/::/.test(t)) return true;
  return false;
}
function YMt(e, t) {
  if (!e.trim()) return false;
  if (!t) return false;
  if (!t.valid) return false;
  let r = lne(t);
  if (r.hasScriptBlocks || r.hasSubExpressions || r.hasExpandableStrings || r.hasSplatting || r.hasMemberInvocations || r.hasAssignments || r.hasStopParsing) return false;
  let a = NWn(t);
  if (a.length === 0) return false;
  if (a.reduce((c, o) => c + o.commands.length, 0) > 1) {
    if (a.some((o) => o.commands.some((l) => ZFn(l.name)))) return false;
  }
  for (let c of a) {
    if (!c || c.commands.length === 0) return false;
    if (c.redirections.length > 0) {
      if (c.redirections.some((u) => !u.isMerging && !IDt(u.target))) return false;
    }
    let o = c.commands[0];
    if (!o) return false;
    if (!Put(o, e)) return false;
    for (let l = 1; l < c.commands.length; l++) {
      let u = c.commands[l];
      if (!u || u.nameType === "application") return false;
      if (qMt(u.name) && u.args.length === 0) continue;
      if (!Put(u, e)) return false;
    }
    if (c.nestedCommands && c.nestedCommands.length > 0) return false;
  }
  return true;
}
var A = (e, t = false) => t && e.length > 1 && e[1] === "-" ? e : e.replace(/(?!^)[-']/g, "");
function XMt(e, t, n = "full") {
  let r = n === "full" ? N : U;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    if (!H9.has(s[0])) continue;
    if (t !== void 0 && t[a + 1] !== void 0 && t[a + 1] !== "Parameter") continue;
    let c = s[0] === "-" ? s : "-" + s.slice(1), o = c.indexOf(":"), l = (o > 0 ? c.slice(0, o) : c).toLowerCase(), u = null;
    if (!r(l) && !r(A(l, n === "exact"))) {
      let d = XR(l.replace(/`[\r\n]+\s*/g, "")).toLowerCase(), S = d.indexOf(":", 1), p = S > 0 ? d.slice(0, S) : d;
      if (!r(p) && !r(A(p, n === "exact")) && !/[^\x20-\x7e]/.test(d)) continue;
      if (S > 0) {
        let C = d.slice(S + 1);
        u = C.trim() !== "" ? C : e[a + 1] ?? "";
      }
    }
    let f = o > 0 ? c.slice(o + 1) : null, m = (u ?? (f !== null && f.trim() !== "" ? f : e[a + 1] ?? "")).toLowerCase().replace(/^['"]|['"]$/g, "").trim();
    if (m.length > 0 && !D.has(m)) return true;
  }
  return false;
}
function JMt(e, t, n = "full") {
  let r = n === "full" ? k : j, a = (s) => r(s) || n === "full" && (s.endsWith("variable") || V(s));
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    if (!H9.has(c[0])) continue;
    if (t !== void 0 && t[s + 1] !== void 0 && t[s + 1] !== "Parameter") continue;
    let o = c[0] === "-" ? c : "-" + c.slice(1), l = _(o), u = (l !== null ? o.slice(0, l.colonIdx) : o).toLowerCase();
    if (!a(u) && !a(A(u, n === "exact"))) {
      let p = XR(u.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
      if (p !== u && (a(p) || a(A(p, n === "exact")))) return true;
      let C = p.indexOf(":", 1);
      if (C > 0 && a(A(p.slice(0, C), n === "exact"))) return true;
      if (/[^\x20-\x7e]/.test(p)) return true;
      continue;
    }
    let f;
    if (l !== null) {
      if (l.isHereString) return true;
      if (l.post.includes("$") || l.post.includes("`")) return true;
      f = l.postResolved !== "" ? l.postResolved : e[s + 1] ?? "";
    } else f = e[s + 1] ?? "";
    if (f.includes("$") || f.includes("`")) return true;
    let g = fB(_9(f)).toLowerCase().trim();
    if (g.length === 0) continue;
    let m = g.startsWith("+") ? g.slice(1) : g, d = m.lastIndexOf(":"), S = m;
    if (d >= 0) {
      let p = m.slice(0, d);
      if (!W.has(p) && !/^[0-9]+$/.test(p)) return true;
      S = m.slice(d + 1);
    }
    if (!/^[a-z0-9_]+$/.test(S)) return true;
    if (M.has(S)) return true;
  }
  return false;
}
function h(e) {
  return e.includes('"') || /[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1;
}
function _(e) {
  if (e.length === 0 || !(H9.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = _9(e.slice(t + 1)), r = _9(n.replace(/`[\r\n]+\s*/g, "")), a = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(r);
  return { colonIdx: t, post: n, postResolved: r, isHereString: a };
}
function v(e, t = true) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (h(e) || h(E(n))) return true;
  if (t) {
    let r = _(e);
    if (r !== null) {
      let { post: a, postResolved: s } = r;
      if (r.isHereString) return true;
      let c = fB(s), o = fB(a), l = h7(s), u = h7(a), f = Fae(s), g = Fae(a);
      if (h(c) || h(o) || h(E(c)) || h(l) || h(u) || h(E(l)) || h(f) || h(g) || h(E(f))) return true;
    }
  }
  return false;
}
var _e = "tengu_hazy_peach";
function Rho() {
  return gr(_e, { safe: true });
}
function Put(e, t) {
  if (e.nameType === "application") {
    let o = Rho() ? QFn : /\s/, l = e.text.split(o, 1)[0]?.toLowerCase() ?? "";
    if (!Ce.has(l)) return false;
  }
  let n = Ie(e.name);
  if (!n) return false;
  if (n.regex && !n.regex.test(t)) return false;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return false;
  if (!e.elementTypes) return false;
  for (let o = 1; o < e.elementTypes.length; o++) {
    let l = e.elementTypes[o];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[o - 1] ?? "")) continue;
      return false;
    }
    if (l === "Parameter") {
      let u = e.children?.[o - 1];
      if (u) {
        if (u.some((f) => f.type !== "StringConstant")) return false;
      } else {
        let f = e.args[o - 1] ?? "", g = f.indexOf(":");
        if (g > 0 && /[$(@{[]/.test(f.slice(g + 1))) return false;
      }
    }
  }
  let r = fw(e.name), a = Ee.has(r), s = r.includes("-"), c = e.nameType !== "cmdlet";
  if (O() === "windows") {
    if (c || a) {
      for (let o of e.args) if (v(o, !s || e.nameType === "application")) return false;
    }
    if (we(e.name) !== null) return false;
  }
  if (!s || e.nameType === "application") for (let o = 1; o < e.elementTypes.length; o++) {
    let l = e.elementTypes[o];
    if (l !== "StringConstant" && l !== "Parameter") return false;
    if (l === "Parameter" && !a && (e.args[o - 1] ?? "").includes(":")) return false;
  }
  if (a) {
    let o = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let u = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let f = _(u);
        if (f !== null) {
          if (f.isHereString) return false;
          o ??= e.args.slice(0, l - 1), o.push(u.slice(0, f.colonIdx), XR(fB(f.postResolved)));
          continue;
        }
      }
      o?.push(u);
    }
    if (o !== null && !Q(r, o)) return false;
    return Q(r, e.args);
  }
  if (s && XMt(e.args, e.elementTypes)) return false;
  if (s && JMt(e.args, e.elementTypes)) return false;
  if (n.allowAllFlags) return true;
  if (!n.safeFlags || n.safeFlags.length === 0) return !e.args.some((l, u) => {
    if (s) return qOe(l, e.elementTypes?.[u + 1]);
    return l.startsWith("-") || false;
  });
  for (let o = 0; o < e.args.length; o++) {
    let l = e.args[o];
    if (s ? qOe(l, e.elementTypes?.[o + 1]) : l.startsWith("-") || false) {
      let f = s ? "-" + l.slice(1) : l;
      if (s || l.startsWith("/")) {
        let d = f.indexOf(":");
        if (d > 0) f = f.substring(0, d);
      }
      let g = f.toLowerCase();
      if (s && T.has(g)) continue;
      if (!(s ? n.safeFlags.some((d) => d.toLowerCase() === g) : n.safeFlags.includes(f))) return false;
    }
  }
  return true;
}
function Q(e, t) {
  for (let n of t) if (n.length > 0 && n[0] !== "-" && H9.has(n[0])) return false;
  switch (e) {
    case "git":
      return Re(t);
    case "gh":
      return ye(t);
    case "docker":
      return Oe(t);
    case "dotnet":
      return Ne(t);
    default:
      return false;
  }
}
var ve = /* @__PURE__ */ new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--bare", "--attr-source", "--help", "-h", "--shallow-file"]), J = /* @__PURE__ */ new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--shallow-file"]), Le = ["-c", "-C"];
function z(e) {
  return !e.includes("=") && J.has(e);
}
function ee(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n] ?? "", a = t[n] ?? "";
    if (a.includes("\0") || y(r).includes("\0")) return false;
    if (det(a) !== det(r) || a === "--" !== (r === "--")) return false;
    if (det(r) && r !== a && z(r) !== z(a)) return false;
  }
  return true;
}
function L(e) {
  return e.map((t) => VOe(XR(t.replace(/`[\r\n]+\s*/g, ""))));
}
function Re(e) {
  let t = L(e);
  if (!ee(e, t)) return false;
  return X(e) && X(t);
}
function X(e) {
  if (e.length === 0) return true;
  if (O() === "windows") {
    for (let u of e) if (v(u)) return false;
  }
  for (let u of e) if (u.includes("$")) return false;
  let t = 0;
  while (t < e.length) {
    let u = e[t];
    if (!u || !u.startsWith("-")) break;
    for (let m of Le) if (u.length > m.length && u.startsWith(m) && (m === "-C" || u[m.length] !== "-")) return false;
    let f = u.includes("="), g = f ? Ze(u, "=") : u;
    if (ve.has(g)) return false;
    if (!f && J.has(g)) t += 2;
    else t++;
  }
  if (t >= e.length) return true;
  let n = e[t]?.toLowerCase() || "", r = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "", a = `git ${n} ${r}`, s = `git ${n}`, c = Ffn[a], o = 2;
  if (!c) c = Ffn[s], o = 1;
  if (!c) return false;
  let l = e.slice(t + o);
  if (n === "ls-remote") {
    let u = false;
    for (let f of l) {
      if (!u && f === "--") {
        u = true;
        continue;
      }
      if (u || f === "-" || !f.startsWith("-")) return false;
    }
  }
  if (c.additionalCommandIsDangerousCallback && c.additionalCommandIsDangerousCallback("", l)) return false;
  return eWt(l, 0, c, { commandName: "git" });
}
function ye(e) {
  let t = L(e);
  if (!ee(e, t)) return false;
  return K(e) && K(t);
}
function K(e) {
  return false;
}
var q = new Set(RXn.filter((e) => /^-[^-]$/.test(e)).map((e) => e[1])), Te = [...RXn.filter((e) => e.startsWith("--")), "--tls"];
function Oe(e) {
  if (e.length === 0) return true;
  let t = L(e);
  if (O() === "windows") {
    for (let s of e) if (v(s)) return false;
  }
  for (let s of t) if (s.includes("$")) return false;
  for (let s of t) {
    if (s[0] === "-" && s[1] !== "-") for (let o = 1; o < s.length; o++) {
      let l = s[o];
      if (q.has(l)) return false;
      if (l !== "h" && q.has(l.toLowerCase())) return false;
    }
    let c = s.toLowerCase();
    if (Te.some((o) => c.startsWith(o))) return false;
  }
  let n = `docker ${t[0]?.toLowerCase()}`;
  if (PXn.includes(n)) return true;
  let r = xXn[n];
  if (!r) return false;
  let a = t.slice(1);
  if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback("", a)) return false;
  return eWt(a, 0, r);
}
function Ne(e) {
  if (e.length === 0) return false;
  for (let t of e) if (!me.has(t.toLowerCase())) return false;
  return true;
}
export {
  Aho,
  Cho,
  DTs,
  Fae,
  HTs,
  JMt,
  MTs,
  Put,
  QFn,
  Rho,
  Tho,
  XMt,
  XR,
  YMt,
  ZFn,
  _9,
  fB,
  fkr,
  fw,
  h7,
  kho,
  pkr,
  qMt,
  s2,
  tOe
};
