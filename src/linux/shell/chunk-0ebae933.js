// linux/shell/chunk-0ebae933.js — Claude Code 2.1.310（linux）模块 chunk-xzfc5kz5.js
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { yFs } from "../fs/ccr-left-running-programs-note.js";
import { mkdirSync as c, readFileSync as s } from "fs";
import { posix as u } from "path";
var R5t = "/sys/fs/cgroup/cpuacct";
function sCn(e) {
  for (let n of e.split(`
`)) {
    let [, o, ...r] = n.split(":");
    if (o === "cpuacct" && r.length > 0) return r.join(":");
  }
  return;
}
function iCn(e, n = c) {
  let o = e.split("/").filter(Boolean);
  if (o.length < 2 || o.at(-1)?.startsWith("cc-") || o.includes("..")) return;
  let r = u.join(R5t, e, yFs);
  try {
    n(r);
  } catch (i) {
    if (E(i) !== "EEXIST") {
      t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${E(i) ?? d(i)})`);
      return;
    }
  }
  return r;
}
function Xit(e) {
  try {
    let n = Number(s(e, "utf8"));
    return Number.isFinite(n) ? n / 1e6 : void 0;
  } catch {
    return;
  }
}
export {
  R5t,
  Xit,
  iCn,
  sCn
};
