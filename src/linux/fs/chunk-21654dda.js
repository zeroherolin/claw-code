// linux/fs/chunk-21654dda.js — Claude Code 2.1.310（linux）模块 chunk-tv3shk24.js
import { te } from "./gitlab-runner-authentication-token.js";
import { O } from "./chunk-ce5d00cd.js";
import { tii } from "./daemon-worker.js";
import { ve } from "../shared/chunk-fee3c428.js";
import { readlinkSync as e } from "fs";
import { hostname as u } from "os";
class o {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var hqe = ve(new o(), (t) => {
  t.pidDomain = void 0;
});
function lbe() {
  if (hqe.pidSpace === null) {
    let t = "";
    try {
      t = e("/proc/self/ns/pid");
    } catch {
      t = "";
    }
    hqe.pidSpace = `${u()}${t === "" ? "" : "#" + t}`;
  }
  return hqe.pidSpace;
}
function hR() {
  return hqe.pidDomain ??= (async () => tii(O()))().catch((t) => {
    throw hqe.pidDomain = void 0, t;
  }), hqe.pidDomain;
}
import { timingSafeEqual as f } from "crypto";
import { readFile as a } from "fs/promises";
async function pkt(t) {
  try {
    let n = te(await a(t, "utf8"));
    if (n === null || typeof n !== "object") return;
    let i = {};
    if ("rvAuth" in n && typeof n.rvAuth === "string") i.rvAuth = n.rvAuth;
    if ("ptyAuth" in n && typeof n.ptyAuth === "string") i.ptyAuth = n.ptyAuth;
    if ("claimAuth" in n && typeof n.claimAuth === "string") i.claimAuth = n.claimAuth;
    return i;
  } catch {
    return;
  }
}
function A0(t, n) {
  if (typeof t !== "string" || !n || t.length === 0) return false;
  let i = Buffer.from(t), r = Buffer.from(n);
  if (i.length !== r.length) return false;
  return f(i, r);
}
export {
  A0,
  hR,
  hqe,
  lbe,
  pkt
};
