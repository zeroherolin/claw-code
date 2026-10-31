// linux/cli/tty-stream-error.js — Claude Code 2.1.310（linux）模块 chunk-draaxner.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { PAn } from "./chunk-af2447be.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ASe } from "../fs/backed-up.js";
import { dp, Wp } from "../settings/ax-sr-suggestion-nav.js";
import { wks } from "./chunk-29c07bf4.js";
import { openSync as o } from "fs";
import { ReadStream as s } from "tty";
function p() {
  if (process.stdin.isTTY) return { kind: "stdin" };
  if (Ne(false)) return { kind: "unavailable", reason: "ci" };
  if (PAn() === "mcp") return { kind: "unavailable", reason: "mcp" };
  try {
    let n = o("/dev/tty", "r"), e = new s(n);
    return ASe(e), e.on("error", (r) => {
      a("tengu_tty_stream_error", dp(r)), t(`/dev/tty stream error: ${r}`, { level: "debug" });
    }), e.isTTY = true, { kind: "override", stream: e };
  } catch (n) {
    return t(`Could not open /dev/tty for stdin override: ${n}`, { level: "error" }), { kind: "unavailable", reason: "tty_unavailable" };
  }
}
class i {
  input = null;
  get() {
    return this.input ??= p();
  }
  reset() {
    this.input = null;
  }
}
var dut = new i();
function MC(n = false) {
  wks();
  let e = dut.get(), r = { exitOnCtrlC: n };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = Wp(), r;
}
export {
  MC,
  dut
};
