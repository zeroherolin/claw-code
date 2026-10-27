// shared/outcome-of.956r.js — Claude Code 2.1.310 模块 chunk-956r6r4h.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
function Jd(e, o, r = {}, u = "debug") {
  let n = e === void 0 ? "[remote-tools]" : `[remote-tools call=${e}]`, g = Object.entries(r).flatMap(([d, i]) => i === void 0 ? [] : [`${d}=${i}`]).join(" ");
  t(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, { level: u });
}
function CQt(e) {
  return e === "outcome_of" ? "verbose" : "debug";
}
export {
  CQt,
  Jd
};
