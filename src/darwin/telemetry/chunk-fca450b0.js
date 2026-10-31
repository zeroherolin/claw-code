// darwin/telemetry/chunk-fca450b0.js — Claude Code 2.1.310（darwin）模块 chunk-rywxmw04.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
var BEr = "[3P telemetry] OTEL diag error:";
class Omo {
  error(r, ...e) {
    if (i.CLAUDE_CODE_OTEL_DIAG_STDERR) process.stderr.write(`${BEr} ${r}
`);
    t(`${BEr} ${r}`, { level: "error" });
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
  BEr,
  Omo
};
