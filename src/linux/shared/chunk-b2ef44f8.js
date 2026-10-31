// linux/shared/chunk-b2ef44f8.js — Claude Code 2.1.310（linux）模块 chunk-2af27mew.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { uVt } from "./chunk-cb8096b1.js";
import { Kj, $Ne } from "./chunk-141502d8.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var nio = {};
$r(nio, { default: () => nio, endsInARowOf: () => _gi, unsettledBy: () => xyr, workerEndingOf: () => bgi });
function _gi(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var xyr = (e) => ({ reason: `Error: ${d(e)}`, kind: e instanceof uVt ? "passing" : "lasting" });
var o = 5, m = `It did not pass in ${o} tries`, p = "it is held for good, or refused to this process", t = "Start the daemon again once this is mended.", a = `${m}: ${p}. ${t}`;
function bgi(e, n) {
  let r = e.kind === "passing", s = r && n + 1 < o, i = r ? a : t;
  return s ? { code: $Ne, said: `${e.reason}
` } : { code: Kj, said: `${e.reason}
${i}
` };
}
export {
  _gi,
  bgi,
  nio,
  xyr
};
