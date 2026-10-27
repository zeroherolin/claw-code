// shared/user-prompt.qxay.js — Claude Code 2.1.310 模块 chunk-qxay8m0g.js
import { g$ } from "../context/not-admin-owned.ersa.js";
import { yJs, bi } from "../context/account-memory-text-not-identified.y6np.js";
import { mde } from "../context/team-memory-sync.0s3j.js";
function aLn(t, r) {
  bi("user_prompt", { prompt_length: String(r?.length ?? 0), ...yJs(r), ...t.attributes });
}
function jS(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let { name: e, args: n } = mde(r);
  if (!e) return null;
  let o = "(MCP)";
  if (n === o) return { commandName: `${e} ${o}`, args: "", isMcp: true };
  if (n.startsWith(o) && /\s/.test(n.charAt(o.length))) return { commandName: `${e} ${o}`, args: n.slice(o.length).trimStart(), isMcp: true };
  return { commandName: e, args: n, isMcp: false };
}
function OIe(t, r) {
  if (!t.subcommands) return;
  let e = r.trimStart(), n = e.search(/\s/), o = n === -1 ? e : e.slice(0, n), s = o ? t.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let m = n === -1 ? "" : e.slice(n + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return { targetName: s, consumedToken: o, remainingArgs: m };
}
function MJt(t, r) {
  let e = g$();
  if (r === void 0) {
    aLn(t, t.text);
    return;
  }
  r({ text: t.text, attributes: { ...e && { "prompt.id": e }, ...t.attributes } });
}
var OOt = (t) => typeof t === "string" ? t : t.map((r) => ({ ...r }));
export {
  MJt,
  OIe,
  OOt,
  aLn,
  jS
};
