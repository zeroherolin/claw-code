// darwin/remote/tool-container.472f.js — Claude Code 2.1.310（darwin）模块 chunk-tvnp96jj.js
import { i } from "../shared/environment.js";
import { ee } from "../fs/gitlab-runner-authentication-token.js";
import { sv } from "../shared/chunk-537f65d6.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { o, E, u } from "../vendor/zod/string-format.js";
function UJr(n) {
  switch (n.kind) {
    case "stdout-reader":
      return { authToken: void 0, tunnel: void 0 };
    case "bearer-minter":
      return { authToken: n.authToken, tunnel: void 0 };
    case "tool-container":
    case "runner":
      return { authToken: void 0, tunnel: n.tunnel };
  }
}
var h = f(() => u({ runner: u({ pid: E().int().positive(), proc_start: o().min(1) }).optional() }));
async function Avi({ transport: n, port: e, line: a }) {
  let { parseSessionTunnelEnvelope: l, sessionTunnelRefusal: c } = await import("../settings/parse-session-tunnel-envelope.js"), r = l(a), d = c(n, e, r);
  if (d !== void 0 || r === void 0) return { refusal: `--session-tunnel ${d ?? "needs an envelope on standard input"}` };
  let t = m(a);
  if (t === "unreadable") return { refusal: '--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"' };
  if (t === void 0) return { kind: "tool-container", tunnel: r };
  let s = { pid: t.pid, procStart: t.proc_start };
  if (i.CCR_AGENT_PROXY_ENABLED) return { refusal: "--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay" };
  let { isRunnerSeen: p } = await import("../cli/exit-when-runner-is-gone.js");
  if (!await p(s)) return { refusal: `--session-tunnel cannot see the runner that started it (process ${s.pid}), so it could not tell when that runner is gone` };
  return { kind: "runner", tunnel: r, runner: s };
}
function m(n) {
  if (n === void 0) return;
  try {
    let e = h().safeParse(ee(n));
    return e.success ? e.data.runner : "unreadable";
  } catch {
    return "unreadable";
  }
}
function Rvi(n) {
  let e = sv.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;
  if (sv.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"), n !== void 0) return n;
  return e === void 0 ? { kind: "stdout-reader" } : { kind: "bearer-minter", authToken: e };
}
export {
  Avi,
  Rvi,
  UJr
};
