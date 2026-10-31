// darwin/shell/register-scheduledjob.js — Claude Code 2.1.310（darwin）模块 chunk-mmvmg9vj.js
import { F7n } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { ane } from "../core/conversation-engine.js";
var who = /* @__PURE__ */ new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"]), Eho = /* @__PURE__ */ new Set(["invoke-command", "invoke-expression", "start-job", "start-threadjob", "register-scheduledjob", "register-engineevent", "register-objectevent", "register-wmievent", "new-pssession", "enter-pssession"]), vho = /* @__PURE__ */ new Set(["import-module", "ipmo", "install-module", "save-module", "update-module", "install-script", "save-script"]), o = ["pwsh", "powershell", "cmd", "bash", "wsl", "sh", "start-process", "start", "add-type", "new-object"];
function s(t) {
  return Object.entries(ane).filter(([, e]) => t.has(e.toLowerCase())).map(([e]) => e);
}
var r = /* @__PURE__ */ new Set(["invoke-webrequest", "invoke-restmethod"]), n = /* @__PURE__ */ new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]), i = /* @__PURE__ */ new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "wmic.exe"]), a = /* @__PURE__ */ new Set(["select-object", "sort-object", "group-object", "where-object", "measure-object", "write-output", "write-host", "start-sleep", "format-table", "format-list", "format-wide", "format-custom", "out-string", "out-host", "ipconfig", "hostname", "route", "arp"]), OTs = (() => {
  let t = /* @__PURE__ */ new Set([...o, ...who, ...Eho, ...vho, ...r, ...n, ...i, ...a, "foreach-object", ...F7n.filter((e) => !e.includes(" "))]);
  return /* @__PURE__ */ new Set([...t, ...s(t)]);
})();
export {
  Eho,
  OTs,
  vho,
  who
};
