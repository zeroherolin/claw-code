// linux/telemetry/chunk-fca450b0.js — Claude Code 2.1.310（linux）模块 chunk-qsxtzz8v.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
var Kvr = "[3P telemetry] OTEL diag error:";
class Imo {
  error(r, ...e) {
    if (i.CLAUDE_CODE_OTEL_DIAG_STDERR) process.stderr.write(`${Kvr} ${r}
`);
    t(`${Kvr} ${r}`, { level: "error" });
  }
  warn(r, ...e) {
    t(`[3P telemetry] OTEL diag warn: ${r}`, { level: "warn" });
  }
  info(r, ...e) {
    return;
  }
  debug(r, ...e) {
    return;
  }
  verbose(r, ...e) {
    return;
  }
}
export {
  Imo,
  Kvr
};
