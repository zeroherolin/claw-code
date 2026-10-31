// linux/auth/claude-code-user.js — Claude Code 2.1.310（linux）模块 chunk-vbnb89qh.js
import { U, J } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { rn } from "./oauth-2025-04-20.js";
import { createHash as c } from "crypto";
import { homedir as o, userInfo as l } from "os";
import { join as u } from "path";
var dsr = "-credentials";
function O0() {
  let e = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (e !== void 0) return (e || u(o(), ".claude")).normalize("NFC");
  return Le();
}
function URe() {
  return J() ? null : O0();
}
function wbe(e = "") {
  let n = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR, t = n !== void 0 ? !n : !process.env.CLAUDE_CONFIG_DIR, r = n !== void 0 ? n.normalize("NFC") : Le(), a = t ? "" : `-${c("sha256").update(r).digest("hex").substring(0, 8)}`;
  return `Claude Code${rn().OAUTH_FILE_SUFFIX}${e}${a}`;
}
var s = /^[a-zA-Z0-9._-]+$/;
function JV() {
  let e;
  try {
    e = process.env.USER || l().username;
  } catch {
    e = "claude-code-user";
  }
  if (!s.test(e)) return "claude-code-user";
  return e;
}
var kai = 3e4;
class i {
  cache = { data: null, cachedAt: 0 };
  generation = 0;
  readInFlight = null;
  lastReadFailure = null;
  keychainHoldsItem = false;
  lastKnown = null;
  legacyApiKeyPrefetch = null;
}
var d = new W(() => new i());
function BRe() {
  return d.of(U().host);
}
function Tai() {
  let e = BRe();
  e.cache = { data: e.cache.data, cachedAt: 0 }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}
function X5() {
  let e = BRe();
  e.cache = { data: null, cachedAt: 0 }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}
function Aai(e, n, t = BRe()) {
  if (t.cache.cachedAt !== 0 || t.generation !== n) return;
  let r = null;
  if (e) try {
    r = JSON.parse(e);
  } catch {
    return;
  }
  t.cache = { data: r, cachedAt: Date.now() };
}
function Cai(e, n, t) {
  if (e.generation === t) e.keychainHoldsItem = n;
}
function Rai(e) {
  if (!e) return "empty";
  let n = e.toLowerCase();
  if (n.includes("errsecduplicateitem") || n.includes("already exists")) return "duplicate_item";
  if (n.includes("unable to open") || n.includes("could not open")) return "keychain_unavailable";
  if (n.includes("errsecnodefaultkeychain") || n.includes("default keychain") || n.includes("no keychain")) return "no_keychain";
  if (n.includes("errsecitemnotfound") || n.includes("item could not be found")) return "item_not_found";
  if (n.includes("errsecinteractionnotallowed") || n.includes("interaction is not allowed") || n.includes("no user interaction")) return "interaction_not_allowed";
  if (n.includes("errsecusercanceled") || n.includes("cancel")) return "user_canceled";
  if (n.includes("errsecauthfailed") || n.includes("authorization") || n.includes("authentication") || n.includes("name or passphrase")) return "auth_failed";
  if (n.includes("locked") || n.includes("unlock")) return "keychain_locked";
  return "other";
}
export {
  Aai,
  BRe,
  Cai,
  JV,
  O0,
  Rai,
  Tai,
  URe,
  X5,
  dsr,
  kai,
  wbe
};
