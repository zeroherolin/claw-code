// darwin/settings/output-styles.js — Claude Code 2.1.310（darwin）模块 chunk-d1dcyrh7.js
import { Td } from "../shared/chunk-d2c47492.js";
import { wGn } from "../core/conversation-engine.js";
import { Jne } from "../context/team-memory-sync.js";
import { v9n } from "../shared/chunk-052ccb69.js";
import { posix as r } from "path";
var D = r.dirname(Jne), l = "/mnt/user-data/working", Jho = r.join(l, Jne), x8e = 32, $ae = 524288, vZt = 2097152, Qho = 200, E = 237, a = 4, Rte = "CLAUDE.md", nOe = "rules", P8e = "output-styles", ZMt = "settings.json", e = ".md", p = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u, c = /^\p{M}/u;
function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= E && !t.startsWith(".") && !v9n(t) && !t.includes("\\") && !p.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}
function u(t) {
  return t.length > e.length && t.endsWith(e);
}
function kZt(t) {
  return wGn(t);
}
function M(t) {
  return u(kZt(t));
}
function rOe(t) {
  if (t.length > Qho || !Td(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === Rte ? "claude_md" : null;
  let s = o.slice(0, -1), _ = o.at(-1) ?? "";
  if (!u(_) || s.some(M)) return null;
  if (o.length > a) return null;
  return i === nOe ? "rule" : i === P8e ? "output_style" : null;
}
function e0t(t) {
  return rOe(t) !== null;
}
function Hut(t) {
  let n = rOe(t);
  return n === null ? null : { destination: t, kind: n };
}
export {
  $ae,
  Hut,
  Jho,
  P8e,
  Qho,
  Rte,
  ZMt,
  e0t,
  kZt,
  nOe,
  rOe,
  vZt,
  x8e
};
