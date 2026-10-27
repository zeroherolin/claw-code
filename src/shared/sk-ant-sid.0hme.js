// shared/sk-ant-sid.0hme.js — Claude Code 2.1.310 模块 chunk-0hmeyj8y.js
import { N3e, Wbe } from "../context/not-admin-owned.ersa.js";
import { $se, E8r, v8r } from "../auth/descriptor-direct.zd2z.js";
function s() {
  return E8r({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: $se, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? $se, label: "token", fileLabel: "session ingress token", getCached: N3e, setCached: Wbe, skipInReviewOrigin: true });
}
async function bui(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await v8r({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: $se, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? $se, label: "token", fileLabel: "session ingress token", getCached: N3e, setCached: Wbe, credentials: e, skipInReviewOrigin: true });
}
function od() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return s();
}
function TFe() {
  return od() !== null;
}
function dW() {
  let e = od();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = { Cookie: `sessionKey=${e}` }, r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n;
  }
  return uxe(e);
}
function uxe(e) {
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function Yar(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export {
  TFe,
  Yar,
  bui,
  dW,
  od,
  uxe
};
