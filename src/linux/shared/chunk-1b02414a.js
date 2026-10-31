// linux/shared/chunk-1b02414a.js — Claude Code 2.1.310（linux）模块 chunk-31h8fs6m.js
import { sGs, uGs } from "../context/team-memory-sync.js";
import { Hie } from "../remote/chunk-6cda5263.js";
function oRt({ sessionId: t, getAccessToken: s, fetchSession: i, initial: e, createOrigin: d }) {
  if (!Hie()) return;
  let n = false, r = (o) => sGs(o, n);
  return uGs({ ...e && { initial: e.then(r) }, read: () => i(t, { accessToken: s() }).then(r) });
}
export {
  oRt
};
