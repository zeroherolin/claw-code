// shared/chunk-r32hxyb9.js — Claude Code 2.1.310 模块 chunk-r32hxyb9.js
import { P2s, L2s } from "../context/team-memory-sync.0s3j.js";
import { Wie } from "../remote/chunk-12vv3hpq.js";
function gRt({ sessionId: t, getAccessToken: s, fetchSession: i, initial: e, createOrigin: d }) {
  if (!Wie()) return;
  let n = false, r = (o) => P2s(o, n);
  return L2s({ ...e && { initial: e.then(r) }, read: () => i(t, { accessToken: s() }).then(r) });
}
export {
  gRt
};
