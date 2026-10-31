// darwin/telemetry/chunk-9e255522.js — Claude Code 2.1.310（darwin）模块 chunk-mnx6nmek.js
import { es } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
async function g4() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), X(200)]), s.length = 0;
    let [{ settle1PEventLoggingBeforeExit: e, shutdown1PEventLogging: r }, { shutdownDatadog: n }, { shutdownErrorTracking: a }] = await Promise.all([import("./log-event-to1-p.js"), import("../auth/reset-datadog-init.js"), import("../cli/enqueue-error-log.js")]), i = e(), c = [r(), n(), a()];
    await Promise.race([Promise.all(c), X(500)]), await i;
  } catch {
  }
}
class o {
  tasks = [];
}
var u = new W(() => new o());
function t() {
  return es(u).tasks;
}
function izo(s) {
  t().push(s.catch(() => {
  }));
}
export {
  g4,
  izo
};
