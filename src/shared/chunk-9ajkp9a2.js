// shared/chunk-9ajkp9a2.js — Claude Code 2.1.310 模块 chunk-9ajkp9a2.js
import { Fu } from "../shell/invalid-type.qnva.js";
import { $hn, jwt } from "../auth/none-at-claim.x354.js";
import { Bc } from "../settings/global-config-and-gates.27xj.js";
import { et } from "./chunk-tftf1nn4.js";
import { Ee } from "./chunk-f9xfyhm1.js";
var Pgn = Ee(Bc(), (e) => e.set(null));
function P2r(e, o) {
  let r = Fu() ? $hn() : null;
  if (r?.kind === "bearer" && et(r.token) === e && !jwt()) Pgn.set(o ?? null);
}
export {
  P2r,
  Pgn
};
