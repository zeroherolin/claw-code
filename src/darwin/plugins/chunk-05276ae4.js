// darwin/plugins/chunk-05276ae4.js — Claude Code 2.1.310（darwin）模块 chunk-x4bvxrq4.js
import { J_ } from "../context/not-admin-owned.js";
import { a$ } from "../artifacts/cowritten-artifact-html.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Te } from "../models/total-tokens-reminder.js";
import { Nir, Ns, jw, IH, mc, jg } from "../shell/invalid-type.js";
import { Mt } from "../terminal/chunk-3ca478a4.js";
import { fe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { vt, or } from "../settings/global-config-and-gates.js";
import { gi, Vrt } from "../shared/chunk-dda594a8.js";
import { ckt } from "../agents/session-stable-address.js";
import { Ybr, kOt } from "./allow-channels.js";
import { Cpt } from "../shared/chunk-e33ca221.js";
import { o, u, me, B, T } from "../vendor/zod/string-format.js";
var wOt = f(() => u({ method: T("notifications/claude/channel"), params: u({ content: o(), meta: me(o(), o()).optional() }) })), Kbr = "notifications/claude/channel/permission", Vuo = f(() => u({ method: T(Kbr), params: u({ request_id: o(), behavior: B(["allow", "deny"]) }) })), Kuo = "notifications/claude/channel/permission_request", m = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function EOt(e, i, n) {
  let r = Object.entries(n ?? {}), [c, a] = g(r, ([p]) => m.test(p));
  if (a.length > 0) t(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${m.source}: ${a.map(([p]) => p).join(", ")}`, { level: "warn" });
  let s = c.map(([p, l]) => ` ${p}="${gi(l)}"`).join(""), d = Vrt(a$, ckt(i));
  return `<${a$} source="${gi(e)}"${s}>
${d}
</${a$}>`;
}
function g(e, i) {
  let n = [], r = [];
  for (let c of e) (i(c) ? n : r).push(c);
  return [n, r];
}
function LDn(e) {
  if (e) return { entries: e, source: "org" };
  return { entries: Ybr(), source: "ledger" };
}
function quo(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function Lct(e) {
  if (vt()) {
    let i = or();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== true;
  }
  return e !== null && e.channelsEnabled !== true;
}
function lme(e, i) {
  let n = e.split(":");
  return i.find((r) => r.kind === "server" ? e === r.name : n[0] === "plugin" && (n[1] === r.name || n[1] === IH(r.name, `${r.name}@${r.marketplace}`)));
}
function qbr(e, i) {
  let n = e ? mc(e) : void 0, r = mc(jw(`${i.name}@${i.marketplace}`)).name;
  return n?.marketplace !== void 0 && n.marketplace === i.marketplace && (i.dev ? n.name === r : jg(n.name, r));
}
function vOt(e, i, n, r) {
  if (!Cpt(i)) return { action: "skip", kind: "capability", reason: "server did not declare claude/channel capability" };
  if (r === "modern") return { action: "skip", kind: "era", reason: "connection negotiated a modern protocol revision with no unsolicited notification path" };
  if (Te() !== "firstParty") return { action: "skip", kind: "provider", reason: "channels are not available on third-party providers" };
  if (kOt()) return { action: "skip", kind: "disabled", reason: "channels feature is not currently available" };
  let c = fe("policySettings");
  if (Lct(c)) return { action: "skip", kind: "policy", reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)" };
  let a = lme(e, J_());
  if (!a) return { action: "skip", kind: "session", reason: `server ${e} not in --channels list for this session` };
  if (a.kind === "plugin") {
    let s = n ? mc(n) : void 0;
    if (s?.marketplace === void 0 || !qbr(n, a)) return { action: "skip", kind: "marketplace", reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== void 0 ? Mt(`${s.name}@${s.marketplace}`) : "from an unknown source"}` };
    if (!a.dev) {
      let { entries: d, source: p } = LDn(c?.allowedChannelPlugins);
      if (!d.some((l) => l.marketplace === s.marketplace && (l.plugin === s.name || l.marketplace === Ns && Nir(l.plugin) === s.name))) {
        let l = Mt(`${s.name}@${s.marketplace}`);
        return { action: "skip", kind: "allowlist", reason: p === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)` };
      }
    }
  } else if (!a.dev) return { action: "skip", kind: "allowlist", reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)` };
  return { action: "register" };
}
export {
  EOt,
  Kbr,
  Kuo,
  LDn,
  Lct,
  Vuo,
  lme,
  qbr,
  quo,
  vOt,
  wOt
};
