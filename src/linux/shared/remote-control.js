// linux/shared/remote-control.js — Claude Code 2.1.310（linux）模块 chunk-nyp7c93y.js
import { rn } from "../auth/oauth-2025-04-20.js";
import { Fn } from "../models/total-tokens-reminder.js";
import { Ln, il, Et, IVe } from "../settings/global-config-and-gates.js";
import { bZ } from "../auth/auth-launcher-host-login.js";
import { z } from "./chunk-be29de51.js";
import { hostname as n } from "os";
function Sx() {
  return;
}
function Aye() {
  return;
}
function NE() {
  let e = Sx();
  if (e !== void 0) return e;
  if (!Fn() || !Et()) return;
  return bZ(Ln())?.accessToken;
}
async function Fk(e) {
  if (!(z() && e !== void 0)) return NE();
  let r = Sx();
  if (r !== void 0) return r;
  if (!Fn() || !await IVe(e)) return;
  return bZ(await il(e))?.accessToken;
}
function h$() {
  return Aye() ?? rn().BASE_API_URL;
}
function a2e() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export {
  Aye,
  Fk,
  NE,
  Sx,
  a2e,
  h$
};
