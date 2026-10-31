// darwin/auth/not-authenticated.js — Claude Code 2.1.310（darwin）模块 chunk-wqqgrv0s.js
import { iy } from "../context/tool-cgroup-exclude-classes.js";
import { hc } from "../shared/environment.js";
async function CIe({ allowNetworkFallbackForOldGh: n }) {
  if (!await hc("gh")) return { status: "not_installed" };
  try {
    let t = await iy("gh", ["auth", "token"], { stdout: "ignore", stderr: "pipe", timeout: 5e3, reject: false });
    if (t.exitCode === 0) return { status: "authenticated", supportsAuthTokenCommand: true };
    if (t.timedOut) return { status: "unknown", error: "`gh auth token` timed out" };
    if (/not logged in|no oauth token/i.test(t.stderr)) return { status: "not_authenticated" };
    if (/unknown command/i.test(t.stderr) || Number.isInteger(t.exitCode) && t.stderr.trim() === "") {
      if (!n) return { status: "unknown", error: "this GitHub CLI version has no `gh auth token`" };
      let e = await iy("gh", ["auth", "status"], { stdout: "ignore", stderr: "pipe", timeout: 5e3, reject: false });
      if (e.exitCode === 0) return { status: "authenticated", supportsAuthTokenCommand: false };
      if (e.timedOut) return { status: "unknown", error: "`gh auth status` timed out" };
      if (/logged in to/i.test(e.stderr)) return { status: "authenticated", supportsAuthTokenCommand: false };
      if (/not logged in/i.test(e.stderr)) return { status: "not_authenticated" };
      return { status: "unknown", error: e.stderr.trim() || "`gh auth status` failed to run" };
    }
    return { status: "unknown", error: t.stderr.trim() || "`gh auth token` failed to run" };
  } catch {
    return { status: "not_installed" };
  }
}
export {
  CIe
};
