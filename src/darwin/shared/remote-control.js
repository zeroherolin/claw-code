// darwin/shared/remote-control.js — Claude Code 2.1.310（darwin）模块 chunk-063dbhcr.js
import { rn } from "../auth/oauth-2025-04-20.js";
import { $n } from "../models/total-tokens-reminder.js";
import { Ln, al, vt, UVe } from "../settings/global-config-and-gates.js";
import { AZ } from "../auth/auth-launcher-host-login.js";
import { z } from "./chunk-be29de51.js";
import { hostname as n } from "os";
function vx() {
  return;
}
function Pye() {
  return;
}
function Fv() {
  let e = vx();
  if (e !== void 0) return e;
  if (!$n() || !vt()) return;
  return AZ(Ln())?.accessToken;
}
async function Uk(e) {
  if (!(z() && e !== void 0)) return Fv();
  let r = vx();
  if (r !== void 0) return r;
  if (!$n() || !await UVe(e)) return;
  return AZ(await al(e))?.accessToken;
}
function _F() {
  return Pye() ?? rn().BASE_API_URL;
}
function dze() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export {
  Fv,
  Pye,
  Uk,
  _F,
  dze,
  vx
};
