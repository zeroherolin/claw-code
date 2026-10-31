// darwin/plugins/chunk-7442e98a.js — Claude Code 2.1.310（darwin）模块 chunk-bcrhd1w1.js
import { S } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { bn, Ns, Zx, mc, PCt, wot } from "../shell/invalid-type.js";
import { Vk } from "../commands/claude-code.js";
import { VE } from "../mcp/third-party.js";
import { Mv, R3, vDo } from "./plugin-enabled-for-session.js";
import { Rd, GT } from "../core/conversation-engine.js";
async function _we(n, i, r) {
  let o = Zx(n), { name: a, marketplace: e } = mc(o);
  if (e === bn && Mv().nameRegistration === void 0) await Rd(r);
  let l = R3(a, e, i), m = PCt(e);
  if (!m && e !== Ns && !wot(a, e)) return l;
  let s = false;
  try {
    s = await c(o, a, e, r);
  } catch (u) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`);
  }
  return { ...l, ...m && e !== void 0 && { marketplace_name_redacted: vDo(e) }, ...!s && { plugin_name_redacted: S(VE) } };
}
async function c(n, i, r, o) {
  if (wot(i, r)) return true;
  if (r === Ns) return Vk(i) !== void 0;
  return await GT(n, o) !== null;
}
export {
  _we
};
