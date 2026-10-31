// darwin/shared/chunk-1b02414a.js — Claude Code 2.1.310（darwin）模块 chunk-r32hxyb9.js
import { P2s, L2s } from "../context/team-memory-sync.js";
import { Wie } from "../remote/chunk-6cda5263.js";
function gRt({ sessionId: t, getAccessToken: s, fetchSession: i, initial: e, createOrigin: d }) {
  if (!Wie()) return;
  let n = false, r = (o) => P2s(o, n);
  return L2s({ ...e && { initial: e.then(r) }, read: () => i(t, { accessToken: s() }).then(r) });
}
export {
  gRt
};
