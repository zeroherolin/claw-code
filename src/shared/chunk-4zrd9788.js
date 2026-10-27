// shared/chunk-4zrd9788.js — Claude Code 2.1.310 模块 chunk-4zrd9788.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { vVt } from "./chunk-ztrzej16.js";
import { tW, GNe } from "./chunk-10nfjyrq.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var Lco = {};
Fr(Lco, { default: () => Lco, endsInARowOf: () => Thi, unsettledBy: () => wbr, workerEndingOf: () => Ahi });
function Thi(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var wbr = (e) => ({ reason: `Error: ${d(e)}`, kind: e instanceof vVt ? "passing" : "lasting" });
var o = 5, m = `It did not pass in ${o} tries`, p = "it is held for good, or refused to this process", t = "Start the daemon again once this is mended.", a = `${m}: ${p}. ${t}`;
function Ahi(e, n) {
  let r = e.kind === "passing", s = r && n + 1 < o, i = r ? a : t;
  return s ? { code: GNe, said: `${e.reason}
` } : { code: tW, said: `${e.reason}
${i}
` };
}
export {
  Ahi,
  Lco,
  Thi,
  wbr
};
