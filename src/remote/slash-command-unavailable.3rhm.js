// remote/slash-command-unavailable.3rhm.js — Claude Code 2.1.310 模块 chunk-3rhma2ha.js
import { S } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { m } from "../telemetry/chunk-wn8xtaqg.js";
import { err, Mnt } from "../settings/global-config-and-gates.27xj.js";
import { cgt, pWe, m7e, oMr, q$, Oe, H_ } from "../core/conversation-engine.31gx.js";
import { Uo, Gd, Bs, CCe } from "../context/team-memory-sync.0s3j.js";
import { w8, xJ } from "../plugins/plugin-enabled-for-session.9xx8.js";
import { jS, OIe } from "../shared/user-prompt.qxay.js";
function Iki(o) {
  let { inputString: e, context: n, uuid: r, origin: t, verifiedSlackHumanTurn: s } = o, i = b(e, n.options.commands, false);
  if (i === void 0) return { kind: "none" };
  let { folded: d, effectiveCmd: l } = i, c = pWe(l, { origin: t, relayAuthored: s === true });
  if (cgt(l) && c) return { kind: "updated", effectiveSkipSlash: false, effectiveInput: e, effectiveContext: n };
  let u = m7e(l);
  if (u && Gd(l)) {
    let f = { ...u, isEnabled: () => Gd(l) };
    return { kind: "updated", effectiveSkipSlash: false, effectiveInput: d ? `/${u.name}${d.args ? ` ${d.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`), effectiveContext: { ...n, options: { ...n.options, commands: [f, ...n.options.commands] } }, bridgeRewrite: f };
  }
  return { kind: "blocked", result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "bridge" }) };
}
function h(o, e) {
  if (!pWe(o, { origin: e.origin, relayAuthored: e.relayAuthored })) return false;
  if (o === e.bridgeRewrite) return true;
  if (!e.relayAuthored && !e.bridgeCarried) return true;
  return e.inboundOrigin === err || e.inboundOrigin === Mnt || oMr(o);
}
function Oki(o) {
  let { inputString: e, context: n, uuid: r, origin: t, inboundOrigin: s } = o, i = b(e, n.options.commands, true);
  if (i === void 0 || h(i.effectiveCmd, { origin: t, relayAuthored: true, inboundOrigin: s, bridgeCarried: false, bridgeRewrite: void 0 })) return { kind: "none" };
  return { kind: "blocked", result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "relay" }) };
}
function Mki(o) {
  let { cmd: e, commandName: n, args: r, inputString: t, uuid: s, author: i } = o;
  if (h(e, i)) return;
  let d = jS(t);
  return p({ target: { parsed: { commandName: d?.commandName ?? n, args: r, isMcp: false }, cmd: e, folded: void 0, effectiveCmd: e }, inputString: t, uuid: s, origin: i.origin, surface: i.bridgeCarried ? "bridge" : "relay" });
}
function p({ target: { parsed: o, cmd: e, folded: n, effectiveCmd: r }, inputString: t, uuid: s, origin: i, surface: d }) {
  let { sanitizedName: l, skillNameHash: c } = w8({ rawName: e.name, canonicalName: e.name, isMcp: e.loadedFrom === "mcp", isBuiltIn: q$().has(e.name), isBundled: e.type === "prompt" && e.source === "bundled", isOfficial: e.type === "prompt" && xJ(e) });
  a("tengu_slash_command_unavailable", { command_name: l, ...c, surface: d === "bridge" ? S("bridge") : S("relay"), reason: d === "bridge" ? S("unavailable_over_remote_control") : S("withheld_from_relay_participant") }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${Uo(e)} ${n.consumedToken}` : `/${Uo(r)}`, f = d === "bridge" ? `${u} isn't available over Remote Control.` : `${u} isn't available to a relay participant.`, g = CCe(e, o.args) || CCe(r, n ? n.args : o.args) ? `/${o.commandName} ***` : t, C = Oe({ content: g, uuid: s, origin: i });
  return C.queueSkipSlashCommands = true, { messages: [C, H_(`<local-command-stdout>${f}</local-command-stdout>`)], shouldQuery: false, resultText: f };
}
function b(o, e, n) {
  let r = jS(o);
  if (r === null) return;
  let t = Bs(r.commandName, e), s = r.args;
  if (n && (t === void 0 || !Gd(t))) {
    let c = s.trimStart(), u = c.search(/\s/), f = u === -1 ? c : c.slice(0, u), g = f ? Bs(`${r.commandName}:${f}`, e) : void 0;
    if (g) t = g, s = u === -1 ? "" : c.slice(u + 1).trimStart();
  }
  if (!t) return;
  let i = OIe(t, s), d = i ? Bs(i.targetName, e) : void 0, l = i && d && Gd(d) ? { command: d, consumedToken: i.consumedToken, args: i.remainingArgs } : void 0;
  return { parsed: s === r.args ? r : { ...r, args: s }, cmd: t, folded: l, effectiveCmd: l ? l.command : t };
}
function zno(o, e) {
  let n = b(o, e, false);
  if (n === void 0) return true;
  let { effectiveCmd: r } = n;
  return r.type === "prompt" && cgt(r);
}
export {
  Iki,
  Mki,
  Oki,
  zno
};
