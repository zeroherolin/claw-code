// linux/shared/user-prompt.js — Claude Code 2.1.310（linux）模块 chunk-3whxc230.js
import { uF } from "../context/not-admin-owned.js";
import { MJs, Si } from "../context/account-memory-text-not-identified.js";
import { lde } from "../context/team-memory-sync.js";
function kLn(t, r) {
  Si("user_prompt", { prompt_length: String(r?.length ?? 0), ...MJs(r), ...t.attributes });
}
function Bb(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let { name: e, args: n } = lde(r);
  if (!e) return null;
  let o = "(MCP)";
  if (n === o) return { commandName: `${e} ${o}`, args: "", isMcp: true };
  if (n.startsWith(o) && /\s/.test(n.charAt(o.length))) return { commandName: `${e} ${o}`, args: n.slice(o.length).trimStart(), isMcp: true };
  return { commandName: e, args: n, isMcp: false };
}
function EIe(t, r) {
  if (!t.subcommands) return;
  let e = r.trimStart(), n = e.search(/\s/), o = n === -1 ? e : e.slice(0, n), s = o ? t.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let m = n === -1 ? "" : e.slice(n + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return { targetName: s, consumedToken: o, remainingArgs: m };
}
function iQt(t, r) {
  let e = uF();
  if (r === void 0) {
    kLn(t, t.text);
    return;
  }
  r({ text: t.text, attributes: { ...e && { "prompt.id": e }, ...t.attributes } });
}
var _Ot = (t) => typeof t === "string" ? t : t.map((r) => ({ ...r }));
export {
  Bb,
  EIe,
  _Ot,
  iQt,
  kLn
};
