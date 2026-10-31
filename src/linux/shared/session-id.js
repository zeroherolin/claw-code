// linux/shared/session-id.js — Claude Code 2.1.310（linux）模块 chunk-53mweqs6.js
import { Z } from "../artifacts/same-account.js";
import { Uu, lX } from "../remote/local-agent.js";
import { iFo, pye, f$, N_t } from "./chunk-a5f59e6a.js";
function $Ht() {
  let n = Uu();
  return n ? { entrypoint: n.toLowerCase().slice(0, 64) } : {};
}
function QAr() {
  let n = iFo();
  return n && !lX() ? { session_id: n } : {};
}
var mwo = 36e5;
function O1n() {
  let n = Z().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < mwo) return {};
  return { ...$Ht(), ...QAr() };
}
function M1n() {
  Z().sessionHintsRefusedAt = Date.now();
}
var ZAr = ["entrypoint", "session_id", "request_id"], u = new Set(ZAr);
function D1n(n, s, i) {
  let o = ZAr.filter((t) => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = f$(s);
  if (!pye.test(e)) return [];
  let r = o.filter((t) => N_t(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some((t) => !u.has(t) && N_t(e, t)) ? [] : o;
}
function Ktn(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}
function Ixs(n) {
  let { entrypoint: s, session_id: i, request_id: o, ...e } = n;
  return e;
}
export {
  $Ht,
  D1n,
  Ixs,
  Ktn,
  M1n,
  O1n,
  QAr,
  ZAr,
  mwo
};
