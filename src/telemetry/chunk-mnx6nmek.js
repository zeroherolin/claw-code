// telemetry/chunk-mnx6nmek.js — Claude Code 2.1.310 模块 chunk-mnx6nmek.js
import { es } from "../context/not-admin-owned.ersa.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
async function g4() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), X(200)]), s.length = 0;
    let [{ settle1PEventLoggingBeforeExit: e, shutdown1PEventLogging: r }, { shutdownDatadog: n }, { shutdownErrorTracking: a }] = await Promise.all([import("./log-event-to1-p.68b1.js"), import("../auth/reset-datadog-init.jvxf.js"), import("../cli/enqueue-error-log.6gnp.js")]), i = e(), c = [r(), n(), a()];
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
