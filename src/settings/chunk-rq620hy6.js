// settings/chunk-rq620hy6.js — Claude Code 2.1.310 模块 chunk-rq620hy6.js
import { BSn, yRe, q6t, pI, ue } from "./global-config-and-gates.27xj.js";
import { Ro } from "./workflow-launch-exec.t4r2.js";
import { mg, fe, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
var bAe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function js(n, i) {
  let o = Ro(), r = o.includes("userSettings") && mg();
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e];
    if (t === "projectSettings" && r) continue;
    let s = fe(t)?.[n];
    if (s !== void 0) return { value: s, source: t };
  }
  if (bAe.includes(n)) {
    let e = n, t = ue()[e];
    if (t !== void 0 && t !== pI[e]) {
      let s = BSn(e) ? q6t(e, t) : yRe(e, t);
      if (s !== void 0) return { value: s, source: "legacyGlobalConfig" };
    }
  }
  return { value: i, source: "default" };
}
function m4(n, i, o) {
  Un("userSettings", { [n]: i }, void 0, o);
}
export {
  bAe,
  js,
  m4
};
