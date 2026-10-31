// linux/shell/chunk-b44a6a83.js — Claude Code 2.1.310（linux）模块 chunk-kngqmjg3.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { jQ, HO } from "./sandbox.js";
var e = { disabled: "The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.", missing: "The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it." };
function wjn(n) {
  return n?.seclogon === "disabled" || n?.seclogon === "missing" ? e[n.seclogon] : void 0;
}
async function vjn() {
  if (O() !== "windows") return;
  let n = await jQ({ srtWin: HO() }).catch((o) => {
    t(`[sandbox] could not read the sandbox status: ${d(o)}`, { level: "error" });
    return;
  });
  return wjn(n?.user);
}
export {
  vjn,
  wjn
};
