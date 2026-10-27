// cli/tty-stream-error.a1a1.js — Claude Code 2.1.310 模块 chunk-a1a1j6w7.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Ykn } from "./chunk-33ax6j5s.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Mbe } from "../fs/backed-up.p1qn.js";
import { lf, Wf } from "../settings/ax-sr-suggestion-nav.8qsa.js";
import { Zks } from "./chunk-q1qhrnhf.js";
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
