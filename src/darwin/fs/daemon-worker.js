// darwin/fs/daemon-worker.js — Claude Code 2.1.310（darwin）模块 chunk-e01m27p0.js
import { readFile as r, readlink as s } from "fs/promises";
import { hostname as i } from "os";
import { join as u } from "path";
function Nii(n) {
  return u(n, "sessions");
}
var Ekt = 262144;
function Fii(n) {
  let e = n.replace(/\.json$/, ""), t = parseInt(e, 10);
  if (isNaN(t)) return null;
  return { pid: t, canonical: String(t) === e };
}
var d = ["interactive", "bg", "daemon", "daemon-worker"];
function a(n) {
  return d.includes(n) ? n : void 0;
}
var p = ["busy", "shell", "idle", "waiting"];
function c(n) {
  return p.includes(n) ? n : void 0;
}
var S = 4e15;
function OVt(n) {
  return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= S;
}
function Hbn(n) {
  return OVt(n) ? n : void 0;
}
function $ii(n) {
  let e = typeof n === "object" && n !== null ? n : {};
  return { cwd: typeof e.cwd === "string" ? e.cwd : "?", startedAt: Hbn(e.startedAt) ?? 0, procStart: typeof e.procStart === "string" ? e.procStart : void 0, ...typeof e.procStartFt === "string" && { procStartFt: e.procStartFt }, kind: a(e.kind), sessionId: typeof e.sessionId === "string" ? e.sessionId : void 0, status: c(e.status), entrypoint: typeof e.entrypoint === "string" ? e.entrypoint : void 0, ...typeof e.pidDomain === "string" && { pidDomain: e.pidDomain } };
}
function Ja(n) {
  if (n <= 1) return false;
  try {
    return process.kill(n, 0), true;
  } catch {
    return false;
  }
}
async function Uii(n) {
  if (n === "windows") return `darwin:${i().toLowerCase()}`;
  if (n !== "linux" && n !== "wsl") return "darwin";
  let [e, t] = await Promise.all([r("/etc/machine-id", "utf8").then((o) => o.trim(), () => ""), s("/proc/self/ns/pid").catch(() => "")]);
  return `darwin:${e}:${t}`;
}
export {
  $ii,
  Ekt,
  Fii,
  Hbn,
  Ja,
  Nii,
  OVt,
  Uii
};
