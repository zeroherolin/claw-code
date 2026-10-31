// darwin/telemetry/chunk-1fe233de.js — Claude Code 2.1.310（darwin）模块 chunk-cj2f4jwt.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { cf, bie } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { z, Xmi } from "../shared/chunk-be29de51.js";
function nVo(e = Dzr) {
  let o = i.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (Hzr(o) !== "pinned") return;
  return { backend: z() ? e() : void 0, configHome: cf() };
}
function rVo(e) {
  let o = z() ? e.backend : void 0;
  if (o === void 0) return;
  if (!bie(e.configHome)) {
    let r = cf();
    t(r !== null && e.configHome !== null ? `CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access` : `The v5 storage backend is not used: the config home was ${e.configHome ?? "absent"} when it was built at start-up and is ${r ?? "absent"} now`, { level: "warn" });
    return;
  }
  return o;
}
function Hzr(e) {
  if (typeof e !== "boolean") t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, { level: "warn" });
  let o = Xmi(e);
  if (o === "conflict") t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, { level: "warn" });
  return o;
}
function Dzr() {
  if (!z()) return;
  return;
}
export {
  Dzr,
  Hzr,
  nVo,
  rVo
};
