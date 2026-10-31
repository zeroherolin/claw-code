// linux/remote/slash-command-unavailable.js — Claude Code 2.1.310（linux）模块 chunk-ja2h0v01.js
import { b } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { Lnr, Ant } from "../settings/global-config-and-gates.js";
import { rgt, nWe, iJe, $Or, GF, Oe, M_ } from "../core/conversation-engine.js";
import { Uo, Gd, Bs, wTe } from "../context/team-memory-sync.js";
import { m8, vQ } from "../plugins/plugin-enabled-for-session.js";
import { Bb, EIe } from "../shared/user-prompt.js";
function XEi(o) {
  let { inputString: e, context: n, uuid: r, origin: t, verifiedSlackHumanTurn: s } = o, i = C(e, n.options.commands, false);
  if (i === void 0) return { kind: "none" };
  let { folded: d, effectiveCmd: l } = i, c = nWe(l, { origin: t, relayAuthored: s === true });
  if (rgt(l) && c) return { kind: "updated", effectiveSkipSlash: false, effectiveInput: e, effectiveContext: n };
  let u = iJe(l);
  if (u && Gd(l)) {
    let f = { ...u, isEnabled: () => Gd(l) };
    return { kind: "updated", effectiveSkipSlash: false, effectiveInput: d ? `/${u.name}${d.args ? ` ${d.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`), effectiveContext: { ...n, options: { ...n.options, commands: [f, ...n.options.commands] } }, bridgeRewrite: f };
  }
  return { kind: "blocked", result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "bridge" }) };
}
function h(o, e) {
  if (!nWe(o, { origin: e.origin, relayAuthored: e.relayAuthored })) return false;
  if (o === e.bridgeRewrite) return true;
  if (!e.relayAuthored && !e.bridgeCarried) return true;
  return e.inboundOrigin === Lnr || e.inboundOrigin === Ant || $Or(o);
}
function JEi(o) {
  let { inputString: e, context: n, uuid: r, origin: t, inboundOrigin: s } = o, i = C(e, n.options.commands, true);
  if (i === void 0 || h(i.effectiveCmd, { origin: t, relayAuthored: true, inboundOrigin: s, bridgeCarried: false, bridgeRewrite: void 0 })) return { kind: "none" };
  return { kind: "blocked", result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "relay" }) };
}
function QEi(o) {
  let { cmd: e, commandName: n, args: r, inputString: t, uuid: s, author: i } = o;
  if (h(e, i)) return;
  let d = Bb(t);
  return p({ target: { parsed: { commandName: d?.commandName ?? n, args: r, isMcp: false }, cmd: e, folded: void 0, effectiveCmd: e }, inputString: t, uuid: s, origin: i.origin, surface: i.bridgeCarried ? "bridge" : "relay" });
}
function p({ target: { parsed: o, cmd: e, folded: n, effectiveCmd: r }, inputString: t, uuid: s, origin: i, surface: d }) {
  let { sanitizedName: l, skillNameHash: c } = m8({ rawName: e.name, canonicalName: e.name, isMcp: e.loadedFrom === "mcp", isBuiltIn: GF().has(e.name), isBundled: e.type === "prompt" && e.source === "bundled", isOfficial: e.type === "prompt" && vQ(e) });
  a("tengu_slash_command_unavailable", { command_name: l, ...c, surface: d === "bridge" ? b("bridge") : b("relay"), reason: d === "bridge" ? b("unavailable_over_remote_control") : b("withheld_from_relay_participant") }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${Uo(e)} ${n.consumedToken}` : `/${Uo(r)}`, f = d === "bridge" ? `${u} isn't available over Remote Control.` : `${u} isn't available to a relay participant.`, g = wTe(e, o.args) || wTe(r, n ? n.args : o.args) ? `/${o.commandName} ***` : t, S = Oe({ content: g, uuid: s, origin: i });
  return S.queueSkipSlashCommands = true, { messages: [S, M_(`<local-command-stdout>${f}</local-command-stdout>`)], shouldQuery: false, resultText: f };
}
function C(o, e, n) {
  let r = Bb(o);
  if (r === null) return;
  let t = Bs(r.commandName, e), s = r.args;
  if (n && (t === void 0 || !Gd(t))) {
    let c = s.trimStart(), u = c.search(/\s/), f = u === -1 ? c : c.slice(0, u), g = f ? Bs(`${r.commandName}:${f}`, e) : void 0;
    if (g) t = g, s = u === -1 ? "" : c.slice(u + 1).trimStart();
  }
  if (!t) return;
  let i = EIe(t, s), d = i ? Bs(i.targetName, e) : void 0, l = i && d && Gd(d) ? { command: d, consumedToken: i.consumedToken, args: i.remainingArgs } : void 0;
  return { parsed: s === r.args ? r : { ...r, args: s }, cmd: t, folded: l, effectiveCmd: l ? l.command : t };
}
function wro(o, e) {
  let n = C(o, e, false);
  if (n === void 0) return true;
  let { effectiveCmd: r } = n;
  return r.type === "prompt" && rgt(r);
}
export {
  JEi,
  QEi,
  XEi,
  wro
};
