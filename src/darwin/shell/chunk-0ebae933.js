// darwin/shell/chunk-0ebae933.js — Claude Code 2.1.310（darwin）模块 chunk-1nwpdsxe.js
import { d, v } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { nUs } from "../fs/ccr-left-running-programs-note.js";
import { mkdirSync as c, readFileSync as s } from "fs";
import { posix as u } from "path";
var B4t = "/sys/fs/cgroup/cpuacct";
function wAn(e) {
  for (let n of e.split(`
`)) {
    let [, o, ...r] = n.split(":");
    if (o === "cpuacct" && r.length > 0) return r.join(":");
  }
  return;
}
function EAn(e, n = c) {
  let o = e.split("/").filter(Boolean);
  if (o.length < 2 || o.at(-1)?.startsWith("cc-") || o.includes("..")) return;
  let r = u.join(B4t, e, nUs);
  try {
    n(r);
  } catch (i) {
    if (v(i) !== "EEXIST") {
      t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${v(i) ?? d(i)})`);
      return;
    }
  }
  return r;
}
function nat(e) {
  try {
    let n = Number(s(e, "utf8"));
    return Number.isFinite(n) ? n / 1e6 : void 0;
  } catch {
    return;
  }
}
export {
  B4t,
  EAn,
  nat,
  wAn
};
