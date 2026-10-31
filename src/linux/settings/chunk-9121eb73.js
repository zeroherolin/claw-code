// linux/settings/chunk-9121eb73.js — Claude Code 2.1.310（linux）模块 chunk-96sx3c3k.js
import { kbn, uRe, LKt, dI, ue } from "./global-config-and-gates.js";
import { Ro } from "./workflow-launch-exec.js";
import { mg, pe, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
var mCe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function js(n, i) {
  let o = Ro(), r = o.includes("userSettings") && mg();
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e];
    if (t === "projectSettings" && r) continue;
    let s = pe(t)?.[n];
    if (s !== void 0) return { value: s, source: t };
  }
  if (mCe.includes(n)) {
    let e = n, t = ue()[e];
    if (t !== void 0 && t !== dI[e]) {
      let s = kbn(e) ? LKt(e, t) : uRe(e, t);
      if (s !== void 0) return { value: s, source: "legacyGlobalConfig" };
    }
  }
  return { value: i, source: "default" };
}
function r5(n, i, o) {
  Un("userSettings", { [n]: i }, void 0, o);
}
export {
  js,
  mCe,
  r5
};
