// darwin/cli/tty-stream-error.js — Claude Code 2.1.310（darwin）模块 chunk-a1a1j6w7.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Ykn } from "./chunk-af2447be.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Mbe } from "../fs/backed-up.js";
import { lf, Wf } from "../settings/ax-sr-suggestion-nav.js";
import { Zks } from "./chunk-29c07bf4.js";
import { openSync as o } from "fs";
import { ReadStream as s } from "tty";
function p() {
  if (process.stdin.isTTY) return { kind: "stdin" };
  if (Ne(false)) return { kind: "unavailable", reason: "ci" };
  if (Ykn() === "mcp") return { kind: "unavailable", reason: "mcp" };
  try {
    let n = o("/dev/tty", "r"), e = new s(n);
    return Mbe(e), e.on("error", (r) => {
      a("tengu_tty_stream_error", lf(r)), t(`/dev/tty stream error: ${r}`, { level: "debug" });
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
var put = new i();
function LA(n = false) {
  Zks();
  let e = put.get(), r = { exitOnCtrlC: n };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = Wf(), r;
}
export {
  LA,
  put
};
