// linux/shell/register-scheduledjob.js — Claude Code 2.1.310（linux）模块 chunk-4j86wh2n.js
import { SJn } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Qte } from "../core/conversation-engine.js";
var Jgo = /* @__PURE__ */ new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"]), Qgo = /* @__PURE__ */ new Set(["invoke-command", "invoke-expression", "start-job", "start-threadjob", "register-scheduledjob", "register-engineevent", "register-objectevent", "register-wmievent", "new-pssession", "enter-pssession"]), Zgo = /* @__PURE__ */ new Set(["import-module", "ipmo", "install-module", "save-module", "update-module", "install-script", "save-script"]), o = ["pwsh", "powershell", "cmd", "bash", "wsl", "sh", "start-process", "start", "add-type", "new-object"];
function s(t) {
  return Object.entries(Qte).filter(([, e]) => t.has(e.toLowerCase())).map(([e]) => e);
}
var r = /* @__PURE__ */ new Set(["invoke-webrequest", "invoke-restmethod"]), n = /* @__PURE__ */ new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]), i = /* @__PURE__ */ new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "wmic.exe"]), a = /* @__PURE__ */ new Set(["select-object", "sort-object", "group-object", "where-object", "measure-object", "write-output", "write-host", "start-sleep", "format-table", "format-list", "format-wide", "format-custom", "out-string", "out-host", "ipconfig", "hostname", "route", "arp"]), rAs = (() => {
  let t = /* @__PURE__ */ new Set([...o, ...Jgo, ...Qgo, ...Zgo, ...r, ...n, ...i, ...a, "foreach-object", ...SJn.filter((e) => !e.includes(" "))]);
  return /* @__PURE__ */ new Set([...t, ...s(t)]);
})();
export {
  Jgo,
  Qgo,
  Zgo,
  rAs
};
