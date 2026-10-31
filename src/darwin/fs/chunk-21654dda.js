// darwin/fs/chunk-21654dda.js — Claude Code 2.1.310（darwin）模块 chunk-q5g832za.js
import { ee } from "./gitlab-runner-authentication-token.js";
import { O } from "./chunk-ce5d00cd.js";
import { Uii } from "./daemon-worker.js";
import { Ee } from "../shared/chunk-fee3c428.js";
import { hostname as o } from "os";
class e {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var kKe = Ee(new e(), (n) => {
  n.pidDomain = void 0;
});
function gSe() {
  if (kKe.pidSpace === null) {
    let n = "";
    kKe.pidSpace = `${o()}${n === "" ? "" : "#" + n}`;
  }
  return kKe.pidSpace;
}
function SR() {
  return kKe.pidDomain ??= (async () => Uii(O()))().catch((n) => {
    throw kKe.pidDomain = void 0, n;
  }), kKe.pidDomain;
}
import { timingSafeEqual as u } from "crypto";
import { readFile as a } from "fs/promises";
async function wkt(n) {
  try {
    let t = ee(await a(n, "utf8"));
    if (t === null || typeof t !== "object") return;
    let i = {};
    if ("rvAuth" in t && typeof t.rvAuth === "string") i.rvAuth = t.rvAuth;
    if ("ptyAuth" in t && typeof t.ptyAuth === "string") i.ptyAuth = t.ptyAuth;
    if ("claimAuth" in t && typeof t.claimAuth === "string") i.claimAuth = t.claimAuth;
    return i;
  } catch {
    return;
  }
}
function xL(n, t) {
  if (typeof n !== "string" || !t || n.length === 0) return false;
  let i = Buffer.from(n), r = Buffer.from(t);
  if (i.length !== r.length) return false;
  return u(i, r);
}
export {
  SR,
  gSe,
  kKe,
  wkt,
  xL
};
