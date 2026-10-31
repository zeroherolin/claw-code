// linux/shared/sk-ant-sid.js — Claude Code 2.1.310（linux）模块 chunk-gvf25gp4.js
import { xYe, LSe } from "../context/not-admin-owned.js";
import { Pse, $3r, F3r } from "../auth/descriptor-direct.js";
function s() {
  return $3r({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: Pse, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse, label: "token", fileLabel: "session ingress token", getCached: xYe, setCached: LSe, skipInReviewOrigin: true });
}
async function uci(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await F3r({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: Pse, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse, label: "token", fileLabel: "session ingress token", getCached: xYe, setCached: LSe, credentials: e, skipInReviewOrigin: true });
}
function od() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return s();
}
function y$e() {
  return od() !== null;
}
function eW() {
  let e = od();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = { Cookie: `sessionKey=${e}` }, r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n;
  }
  return oxe(e);
}
function oxe(e) {
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function Sar(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export {
  Sar,
  eW,
  od,
  oxe,
  uci,
  y$e
};
