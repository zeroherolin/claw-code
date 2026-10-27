// shared/session-id.mf36.js — Claude Code 2.1.310 模块 chunk-mf36pcq7.js
import { Z } from "../artifacts/same-account.bxg8.js";
import { Uu, hX } from "../remote/local-agent.we9a.js";
import { D$o, Sye, hF, G_t } from "./chunk-z4jb9fnd.js";
function XHt() {
  let n = Uu();
  return n ? { entrypoint: n.toLowerCase().slice(0, 64) } : {};
}
function _Ar() {
  let n = D$o();
  return n && !hX() ? { session_id: n } : {};
}
var Gwo = 36e5;
function JBn() {
  let n = Z().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < Gwo) return {};
  return { ...XHt(), ..._Ar() };
}
function QBn() {
  Z().sessionHintsRefusedAt = Date.now();
}
var SAr = ["entrypoint", "session_id", "request_id"], u = new Set(SAr);
function ZBn(n, s, i) {
  let o = SAr.filter((t) => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = hF(s);
  if (!Sye.test(e)) return [];
  let r = o.filter((t) => G_t(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some((t) => !u.has(t) && G_t(e, t)) ? [] : o;
}
function ann(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}
function gPs(n) {
  let { entrypoint: s, session_id: i, request_id: o, ...e } = n;
  return e;
}
export {
  Gwo,
  JBn,
  QBn,
  SAr,
  XHt,
  ZBn,
  _Ar,
  ann,
  gPs
};
