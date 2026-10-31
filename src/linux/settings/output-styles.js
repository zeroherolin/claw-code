// linux/settings/output-styles.js — Claude Code 2.1.310（linux）模块 chunk-54jzcsty.js
import { Ad } from "../shared/chunk-d2c47492.js";
import { ezn } from "../core/conversation-engine.js";
import { qne } from "../context/team-memory-sync.js";
import { W6n } from "../shared/chunk-052ccb69.js";
import { posix as r } from "path";
var D = r.dirname(qne), l = "/mnt/user-data/working", yho = r.join(l, qne), v8e = 32, Iae = 524288, uZt = 2097152, _ho = 200, E = 237, a = 4, wte = "CLAUDE.md", XIe = "rules", E8e = "output-styles", KMt = "settings.json", e = ".md", p = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u, c = /^\p{M}/u;
function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= E && !t.startsWith(".") && !W6n(t) && !t.includes("\\") && !p.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}
function u(t) {
  return t.length > e.length && t.endsWith(e);
}
function fZt(t) {
  return ezn(t);
}
function M(t) {
  return u(fZt(t));
}
function JIe(t) {
  if (t.length > _ho || !Ad(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === wte ? "claude_md" : null;
  let s = o.slice(0, -1), _ = o.at(-1) ?? "";
  if (!u(_) || s.some(M)) return null;
  if (o.length > a) return null;
  return i === XIe ? "rule" : i === E8e ? "output_style" : null;
}
function VMt(t) {
  return JIe(t) !== null;
}
function Rut(t) {
  let n = JIe(t);
  return n === null ? null : { destination: t, kind: n };
}
export {
  E8e,
  Iae,
  JIe,
  KMt,
  Rut,
  VMt,
  XIe,
  _ho,
  fZt,
  uZt,
  v8e,
  wte,
  yho
};
