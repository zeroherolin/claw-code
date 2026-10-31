// linux/shared/chunk-16f9cd1b.js — Claude Code 2.1.310（linux）模块 chunk-hshhqqgx.js
import { Lu } from "../shell/invalid-type.js";
import { vhn, Hwt } from "../auth/none-at-claim.js";
import { Bc } from "../settings/global-config-and-gates.js";
import { et } from "./chunk-061dbb8e.js";
import { ve } from "./chunk-fee3c428.js";
var ggn = ve(Bc(), (e) => e.set(null));
function dGr(e, o) {
  let r = Lu() ? vhn() : null;
  if (r?.kind === "bearer" && et(r.token) === e && !Hwt()) ggn.set(o ?? null);
}
export {
  dGr,
  ggn
};
