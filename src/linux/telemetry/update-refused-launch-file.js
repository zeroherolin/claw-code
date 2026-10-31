// linux/telemetry/update-refused-launch-file.js — Claude Code 2.1.310（linux）模块 chunk-f7xqx2r2.js
import { __asset_src } from "../../runtime/assets.js";
import { c } from "../agents/third-party.js";
import { d } from "./anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { hc, i } from "../shared/environment.js";
import { q, aF, gee, PB } from "../context/not-admin-owned.js";
import { uW, ie } from "../fs/gitlab-runner-authentication-token.js";
import { Rf, zw, b2, Xl, l } from "../artifacts/cowritten-artifact-html.js";
import { he } from "../terminal/xterm-ghostty.js";
import { eo } from "../remote/chunk-8d3e7b64.js";
import { a } from "./chunk-9097a12b.js";
import { Ut, X_e, pa } from "../settings/global-config-and-gates.js";
import { r2r } from "../remote/bridge-message-received.js";
import { fc } from "../agents/in-process-teammate.32be.js";
import { uT, II } from "../context/tool-cgroup-exclude-classes.js";
import { os } from "../shell/chunk-8eebd6c6.js";
import { Nst, Wfe, ySe } from "../context/utf-8.js";
import { CI } from "../shell/invalid-type.js";
import { _rt } from "../git/ssh-placeholder.js";
import { uZ } from "../settings/ax-sr-suggestion-nav.js";
import { zd } from "../remote/chunk-8734517b.js";
import { ghe, Nne, hhe, kht, Pg, jan, rde } from "./bg-roster-parse-failed.js";
import { Zb } from "../agents/in-process-teammate.9720.js";
import { MY } from "../context/org-memory-writes-setting-changed.js";
import { ae, ZAe } from "../permissions/max-thinking-tokens.js";
import { D2n, TNt, H2n, xd, Qa, K3, Ik, Ru, V3 } from "../core/conversation-engine.js";
import { eU } from "../context/team-memory-sync.js";
import { nm } from "../shared/chunk-471874cc.js";
import { i_t } from "../settings/shared-if-writable.js";
import { FQ, xu, E8 } from "../fs/chunk-dacd9872.js";
import { ZX, pve, Rct, Q2, C3e, mve, nLn } from "../shell/prompt-input-exit.js";
import { Bco, FSs, QUe } from "../mcp/monitor-ws.js";
import { QX } from "../shared/chunk-2983cda0.js";
import { ve } from "../shared/chunk-fee3c428.js";
import { spawn as x } from "child_process";
import { randomUUID as H } from "crypto";
import { existsSync as N, statSync as B } from "fs";
import { realpath as M } from "fs/promises";
import { homedir as W } from "os";
import { basename as G, dirname as j, join as U } from "path";
async function hSr() {
  let r = await hc("claude"), e = nm()[0], [n, p] = await Promise.all([r ? M(r).catch(() => r) : null, e ? M(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return E8({ cmd: r, prefixArgs: [], target: r });
  return xu();
}
function Y(r) {
  switch (r.kind) {
    case "newer":
      return `Successfully updated from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION} to version ${r.version}`;
    case "older":
      return `Successfully downgraded from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION} to version ${r.version}`;
    case "same":
    case "unknown":
      return "Session resumed";
  }
}
var J = Symbol("staff, over Remote Control");
function z(r) {
  if (eU(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return QX(e) ? e : "not_typed";
}
function K(r, ...e) {
  if (r !== J && !QX(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return Rct(...e);
}
var P = (r) => ({ type: "system", subtype: "local_command", content: r, level: "info", timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: H(), isMeta: false }), L = ve(/* @__PURE__ */ new Map(), (r) => r.clear());
function Q(r, e) {
  let n = (o, u) => (a("tengu_update_refused", { foreground: c(o) }), u), p = "To use the installed version, exit and start Claude Code again";
  if (C3e(r) !== void 0) {
    let u = Qa(), m = xd();
    if (u || m === null) return n(u ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if (K3() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
    if (e === void 0) {
      let f = L.get(m);
      if (f === void 0) try {
        f = B(m).size > 0 ? void 0 : "empty";
      } catch {
        f = "missing";
      }
      if (f !== void 0) return L.set(m, f), n("gone", f === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found. It may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.");
    }
  }
  let y = nLn();
  if (!N(y)) return n("no_folder", `Can't restart this session here. Its folder, ${MY(os(y))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  let v = PB().map((o) => o.trim()), C = v.find((o, u) => {
    let m = v[u - 1];
    if (m !== "--settings" && m !== "--mcp-config" || o === "" || o.startsWith("{")) return false;
    try {
      let f = m === "--settings" && !CI(o) ? uW(ie(), o).resolvedPath : o;
      return !B(f).isFile();
    } catch {
      return true;
    }
  });
  if (C !== void 0) return a("tengu_update_refused_launch_file", {}), n("launch_file", `Can't restart this session. It was started with ${MY(os(C))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`);
  if (zd()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!N(xu().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let S = H2n(D2n);
  if (S !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${S} is on hold, so this session is staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION}. Nothing was changed.`);
  return;
}
var RTi = async (r, e) => {
  if (uT()) return { type: "text", value: "/restart isn't available in this environment." };
  let n = z(e);
  if (n === "not_owner") return a("tengu_update_refused", { not_owner: true }), a("tengu_update_refused_not_owner", {}), { type: "text", value: "/restart isn't available over Remote Control." };
  let p = Ut() ? i.CLAUDE_JOB_DIR : void 0;
  if (Ut() && (!X_e() || !p)) {
    a("tengu_update_refused", { bg_session: true });
    let t = X_e() ? null : Pg();
    return { type: "text", value: t ? `This is a background session — press ← to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session — press ← to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)." };
  }
  if (!p) {
    let t = xd(), b = U(Zb(nLn()), `${q()}.jsonl`);
    if (t && t !== b) {
      a("tengu_update_refused", { transcript_path_drift: true });
      let _ = MY(os(nLn())), A = j(t), g = await ySe(t), s = g && (Nst(g.tail, "relocated", "relocatedCwd") ?? Wfe(g.head, "cwd"));
      return { type: "text", value: `Cannot /update — ${s && Zb(s) === A ? `this session belongs to ${MY(os(s))} but is running in ${_}` : `this session is running in ${_} but its transcript is in ${MY(os(A))}`}. Restart manually with --resume to continue on the latest version.` };
    }
  }
  let y = (t) => {
    if (!QUe(e.taskRegistry.all())) return;
    return a("tengu_update_refused", { active_tasks: true, ...t && { deferred: t } }), "Can't restart while work is running in the background — wait for it to finish (or stop it via /tasks), then try again.";
  }, v = (t) => {
    let b = Nne(ae(e), aF());
    if (b.length === 0) return y(t);
    a("tengu_update_refused", { uncarriable: true });
    let _ = Qa() ? "" : " (add --continue to return to this conversation)";
    return `Can't switch to the new version from inside this session — it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${_}.`;
  }, C = p ? y() : v();
  if (C !== void 0) return { type: "text", value: C };
  if (p) {
    let t = G(p);
    if (await Q2(e.messages, e.storageV5), !await Nt(Ru(), 3e4, "session flush").then(() => true, () => false)) return a("tengu_update_refused", { bg_flush_failed: true }), { type: "text", value: "Couldn't save the session to disk, so nothing was restarted — try /restart again in a moment." };
    let _ = await hSr(), A = y(true);
    if (A !== void 0) return { type: "text", value: A };
    let g = i_t({ ...process.env });
    for (let s of _rt) delete g[s];
    delete g.CLAUDE_JOB_DIR;
    for (let s of Object.keys(g)) if (s.startsWith("CLAUDE_BG_")) delete g[s];
    a("tengu_update_bg_respawn", { carried_comment_monitor: Bco() && FSs(e.taskRegistry.all()) });
    try {
      let s = x(_.cmd, [..._.prefixArgs, "respawn", t], { detached: true, stdio: "ignore", windowsHide: true, env: g, cwd: W() });
      II(s.pid), s.on("error", (I) => {
        l(I);
      }), s.unref();
    } catch (s) {
      return l(s), a("tengu_update_refused", { bg_spawn_failed: true }), { type: "text", value: `Couldn't restart automatically — press ← to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` };
    }
    return { type: "text", value: `Restarting this session on the latest version… If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.` };
  }
  if (n === "not_typed") return a("tengu_update_refused", { foreground: c(n) }), a("tengu_update_refused_not_typed", {}), { type: "text", value: "Can't restart automatically. Type /restart at the prompt." };
  let S = Q(e.messages, e.storageV5);
  if (S !== void 0) return { type: "text", value: S };
  await Q2(e.messages, e.storageV5);
  let o = v(true);
  if (o !== void 0) return { type: "text", value: o };
  let u = ae(e), m = [...ghe(u, ZAe(e)), ...hhe(u, gee())], f = fc() ? void 0 : e.getAppState().teamContext?.teamName;
  await mve();
  let k = v(true);
  if (k !== void 0) return { type: "text", value: k };
  let h = zd(), O = h?.bridgeSessionId, D = h?.getLastSequenceNum(), F = h?.outboundOnly, V = h?.sessionGroupingId;
  if (O) e.setAppState((t) => t.replBridgeSkipNextArchive ? t : { ...t, replBridgeSkipNextArchive: true }), h.writeSdkMessages([r2r("Switching to latest Claude Code… reconnecting", q())]), await Nt(h.flush(), 2e3, "bridge flush").catch(() => {
  }), await h.teardown({ skipArchive: true });
  let w = {};
  if (f) w.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = f;
  Object.assign(w, uZ()), Object.assign(w, kht(u.additionalWorkingDirectories)), Object.assign(w, rde(O, D, F, V, jan(h, V3())) ?? {});
  let E = xu(), T = await ZX(e.messages, "relaunch", {}, e.storageV5), R = C3e(e.messages) !== void 0;
  if (R && !T) {
    try {
      await Ik([...e.messages, P(`<${Rf}>/restart</${Rf}>
<${zw}>restart</${zw}>
<${b2}></${b2}>`), P(`<${Xl}>${Y(TNt(E.target))}</${Xl}>`)], void 0, void 0, void 0, e.storageV5);
    } catch (t) {
      l(t);
    }
    await Q2(e.messages, e.storageV5);
  }
  a(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", { from_version: pa({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION), target_version: pa(D2n(E.target)), native_install: FQ() });
  try {
    return await K(n, T, { launcher: E, freshIfNoTranscript: !R, extraArgs: m, proactivity: { proactivityLevel: e.getProactivityLevel(), toolPermissionContext: u }, env: Object.keys(w).length > 0 ? w : void 0, preSpawn: () => {
      process.stdout.write(R && K3() !== 0 ? he.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`);
    } }, e.storageV5);
  } catch (t) {
    if (!T) throw t;
    return l(t), { type: "text", value: eo(e.session) ? pve("Couldn't restart Claude Code (detail withheld on this connection).", d(t)) : `Couldn't restart Claude Code — ${d(t)}.` };
  }
};
export {
  RTi,
  hSr
};
