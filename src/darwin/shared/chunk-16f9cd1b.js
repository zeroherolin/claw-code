// darwin/shared/chunk-16f9cd1b.js — Claude Code 2.1.310（darwin）模块 chunk-9ajkp9a2.js
import { Fu } from "../shell/invalid-type.js";
import { $hn, jwt } from "../auth/none-at-claim.js";
import { Bc } from "../settings/global-config-and-gates.js";
import { et } from "./chunk-061dbb8e.js";
import { Ee } from "./chunk-fee3c428.js";
var Pgn = Ee(Bc(), (e) => e.set(null));
function P2r(e, o) {
  let r = Fu() ? $hn() : null;
  if (r?.kind === "bearer" && et(r.token) === e && !jwt()) Pgn.set(o ?? null);
}
export {
  P2r,
  Pgn
};
