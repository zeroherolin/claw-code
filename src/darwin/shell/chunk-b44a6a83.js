// darwin/shell/chunk-b44a6a83.js — Claude Code 2.1.310（darwin）模块 chunk-zz9rkeqd.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { XJ, UO } from "./sandbox.js";
var e = { disabled: "The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.", missing: "The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it." };
function jjn(n) {
  return n?.seclogon === "disabled" || n?.seclogon === "missing" ? e[n.seclogon] : void 0;
}
async function Wjn() {
  if (O() !== "windows") return;
  let n = await XJ({ srtWin: UO() }).catch((o) => {
    t(`[sandbox] could not read the sandbox status: ${d(o)}`, { level: "error" });
    return;
  });
  return jjn(n?.user);
}
export {
  Wjn,
  jjn
};
