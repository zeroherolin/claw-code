// linux/plugins/chunk-7442e98a.js — Claude Code 2.1.310（linux）模块 chunk-188443zx.js
import { b } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Sn, Ns, Jx, mc, vTt, mot } from "../shell/invalid-type.js";
import { zk } from "../commands/claude-code.js";
import { zv } from "../mcp/third-party.js";
import { OE, bY, oLo } from "./plugin-enabled-for-session.js";
import { Rd, BA } from "../core/conversation-engine.js";
async function fwe(n, i, r) {
  let o = Jx(n), { name: a, marketplace: e } = mc(o);
  if (e === Sn && OE().nameRegistration === void 0) await Rd(r);
  let l = bY(a, e, i), m = vTt(e);
  if (!m && e !== Ns && !mot(a, e)) return l;
  let s = false;
  try {
    s = await c(o, a, e, r);
  } catch (u) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`);
  }
  return { ...l, ...m && e !== void 0 && { marketplace_name_redacted: oLo(e) }, ...!s && { plugin_name_redacted: b(zv) } };
}
async function c(n, i, r, o) {
  if (mot(i, r)) return true;
  if (r === Ns) return zk(i) !== void 0;
  return await BA(n, o) !== null;
}
export {
  fwe
};
