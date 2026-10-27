// remote/moved-directory.z3m0.js — Claude Code 2.1.310 模块 chunk-z3m0wxsd.js
import { Grs, zrs, Wbe, GM } from "../context/not-admin-owned.ersa.js";
import { VTn } from "../fs/chunk-kqpf5fh3.js";
import { Yn, Rc, OA, Qi, Kf } from "../fs/node-modules.gp4v.js";
import { i } from "../shared/environment.9a41.js";
import { s$ } from "./local-agent.we9a.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
import { isAbsolute as u } from "path";
function xqt(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let r = Kf(e.slice(0, 3));
  if (r == null || !Yn(r)) return [];
  let n = Kf(e);
  if (n == null || !Yn(n)) return [];
  let t = OA(r), o = OA(n);
  if (t == null || o == null || t !== o) return [];
  return [e, n];
}
function nr() {
  return i.CLAUDE_CODE_REMOTE === true && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function zg() {
  return i.CLAUDE_CODE_REMOTE === true && i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}
function xM() {
  return nr() || zg();
}
function Uvn() {
  return zg() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function kui(e) {
  return Uvn() && e === void 0 ? ["memory"] : void 0;
}
function Cui(e, r) {
  return !(e && Uvn() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) && !i.CLAUDE_CODE_DISABLE_WORKING_SYNC) ? "not_admitted" : r === VTn ? "admitted" : "moved_directory";
}
function XZ() {
  return zg() && Grs();
}
function ETt() {
  return VTn;
}
var s = Ee(/* @__PURE__ */ new Map(), (e) => e.clear()), d = 6e4;
function Bvn(e) {
  let r = s.get(e);
  if (r !== void 0 && (r.share !== void 0 || Date.now() - r.askedAt < d)) return r.share ?? e;
  let n = xqt(e)[1];
  return s.set(e, { share: n, askedAt: Date.now() }), n ?? e;
}
function Pqt(e, r) {
  return u(e) && !Rc(e) && !Qi(e, r);
}
function Tui() {
  return zg() && zrs();
}
function cC() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}
function xFe() {
  return cC() && !s$();
}
function Jar(e) {
  return e.hostedWorker || cC() && e.transportPersists !== false;
}
function gz() {
  return i.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
function PM() {
  return Uvn() && gz();
}
function KQo() {
  return PM() ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_SESSION_INGRESS_TOKEN_FILE"] : [];
}
function Aui(e, r) {
  if (!PM()) return false;
  if (e === "CLAUDE_CODE_SESSION_ACCESS_TOKEN") {
    if (r !== "") Wbe(r);
    return true;
  }
  if (e === "CLAUDE_CODE_OAUTH_TOKEN") {
    if (r !== "") GM(r);
    return true;
  }
  return false;
}
export {
  Aui,
  Bvn,
  Cui,
  ETt,
  Jar,
  KQo,
  PM,
  Pqt,
  Tui,
  Uvn,
  XZ,
  cC,
  gz,
  kui,
  nr,
  xFe,
  xM,
  xqt,
  zg
};
