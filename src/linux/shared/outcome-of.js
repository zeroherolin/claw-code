// linux/shared/outcome-of.js — Claude Code 2.1.310（linux）模块 chunk-gmwnnpe9.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
function Jd(e, o, r = {}, u = "debug") {
  let n = e === void 0 ? "[remote-tools]" : `[remote-tools call=${e}]`, g = Object.entries(r).flatMap(([d, i]) => i === void 0 ? [] : [`${d}=${i}`]).join(" ");
  t(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, { level: u });
}
function m7t(e) {
  return e === "outcome_of" ? "verbose" : "debug";
}
export {
  Jd,
  m7t
};
