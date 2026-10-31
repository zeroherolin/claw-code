// telemetry/update-refused-launch-file.tmy0.js — Claude Code 2.1.310 模块 chunk-tmy0w0v2.js
import { __asset_src } from "../runtime/assets.js";
import { c } from "../agents/third-party.ydpb.js";
import { d } from "./anthropic-workspace-id.36ys.js";
import { Nt } from "../shared/chunk-3kevgx4j.js";
import { hc, i } from "../shared/environment.9a41.js";
import { V, u$, vee, D1 } from "../context/not-admin-owned.ersa.js";
import { SW, ie } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Ap, Vw, Rz, Xl, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { eo } from "../remote/chunk-7nwr416d.js";
import { a } from "./chunk-wq923bwc.js";
import { Ut, nSe, fa } from "../settings/global-config-and-gates.27xj.js";
import { kzr } from "../remote/bridge-message-received.ndzn.js";
import { pc } from "../agents/in-process-teammate.5te1.js";
import { fC, HI } from "../context/tool-cgroup-exclude-classes.t1za.js";
import { ss } from "../shell/chunk-tjkwy3jp.js";
import { Wst, Xpe, vbe } from "../context/utf-8.yzy3.js";
import { II } from "../shell/invalid-type.qnva.js";
import { Crt } from "../git/ssh-placeholder.1144.js";
import { SZ } from "../settings/ax-sr-suggestion-nav.8qsa.js";
import { zd } from "../remote/chunk-c1rfegja.js";
import { Fhe, rre, $he, iyt, Pg, ddn, wde } from "./bg-roster-parse-failed.yhsj.js";
import { eb } from "../agents/in-process-teammate.040f.js";
import { G3 } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { ae, oAe } from "../permissions/max-thinking-tokens.hx3h.js";
import { t6n, NNt, n6n, xd, Za, n8, Ok, Pu, r8 } from "../core/conversation-engine.31gx.js";
import { rU } from "../context/team-memory-sync.0s3j.js";
import { nm } from "../shared/chunk-pg9vp681.js";
import { __t } from "../settings/shared-if-writable.m1rj.js";
import { KJ, Iu, M8 } from "../fs/chunk-tcpay5ps.js";
import { i7, _Ee, Ict, a6, H9e, SEe, gDn } from "../shell/prompt-input-exit.dr3v.js";
import { uuo, mws, a1e } from "../mcp/monitor-ws.srey.js";
import { s7 } from "../shared/chunk-dkyg2dyf.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
import { spawn as H } from "child_process";
import { randomUUID as W } from "crypto";
import { existsSync as N, statSync as B } from "fs";
import { realpath as M } from "fs/promises";
import { homedir as G } from "os";
import { basename as j, dirname as U, join as Y } from "path";
async function Obr() {
  let r = await hc("claude"), e = nm()[0], [n, p] = await Promise.all([r ? M(r).catch(() => r) : null, e ? M(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return M8({ cmd: r, prefixArgs: [], target: r });
  return Iu();
}
function J(r) {
  switch (r.kind) {
    case "newer":
      return `Successfully updated from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION} to version ${r.version}`;
    case "older":
      return `Successfully downgraded from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION} to version ${r.version}`;
    case "same":
    case "unknown":
      return "Session resumed";
  }
}
var q = Symbol("staff, over Remote Control");
function z(r) {
  if (rU(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return s7(e) ? e : "not_typed";
}
function K(r, ...e) {
  if (r !== q && !s7(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return Ict(...e);
}
var P = (r) => ({ type: "system", subtype: "local_command", content: r, level: "info", timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: W(), isMeta: false }), L = Ee(/* @__PURE__ */ new Map(), (r) => r.clear());
function Q(r, e) {
  let n = (o, u) => (a("tengu_update_refused", { foreground: c(o) }), u), p = "To use the installed version, exit and start Claude Code again";
  if (H9e(r) !== void 0) {
    let u = Za(), m = xd();
    if (u || m === null) return n(u ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if (n8() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
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
  let y = gDn();
  if (!N(y)) return n("no_folder", `Can't restart this session here. Its folder, ${G3(ss(y))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  let v = D1().map((o) => o.trim()), C = v.find((o, u) => {
    let m = v[u - 1];
    if (m !== "--settings" && m !== "--mcp-config" || o === "" || o.startsWith("{")) return false;
    try {
      let f = m === "--settings" && !II(o) ? SW(ie(), o).resolvedPath : o;
      return !B(f).isFile();
    } catch {
      return true;
    }
  });
  if (C !== void 0) return a("tengu_update_refused_launch_file", {}), n("launch_file", `Can't restart this session. It was started with ${G3(ss(C))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`);
  if (zd()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!N(Iu().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let S = n6n(t6n);
  if (S !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${S} is on hold, so this session is staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}. Nothing was changed.`);
  return;
}
var hTi = async (r, e) => {
  if (fC()) return { type: "text", value: "/restart isn't available in this environment." };
  let n = z(e);
  if (n === "not_owner") return a("tengu_update_refused", { not_owner: true }), a("tengu_update_refused_not_owner", {}), { type: "text", value: "/restart isn't available over Remote Control." };
  let p = Ut() ? i.CLAUDE_JOB_DIR : void 0;
  if (Ut() && (!nSe() || !p)) {
    a("tengu_update_refused", { bg_session: true });
    let t = nSe() ? null : Pg();
    return { type: "text", value: t ? `This is a background session — press ← to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session — press ← to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)." };
  }
  if (!p) {
    let t = xd(), b = Y(eb(gDn()), `${V()}.jsonl`);
    if (t && t !== b) {
      a("tengu_update_refused", { transcript_path_drift: true });
      let _ = G3(ss(gDn())), A = U(t), g = await vbe(t), s = g && (Wst(g.tail, "relocated", "relocatedCwd") ?? Xpe(g.head, "cwd"));
      return { type: "text", value: `Cannot /update — ${s && eb(s) === A ? `this session belongs to ${G3(ss(s))} but is running in ${_}` : `this session is running in ${_} but its transcript is in ${G3(ss(A))}`}. Restart manually with --resume to continue on the latest version.` };
    }
  }
  let y = (t) => {
    if (!a1e(e.taskRegistry.all())) return;
    return a("tengu_update_refused", { active_tasks: true, ...t && { deferred: t } }), "Can't restart while work is running in the background — wait for it to finish (or stop it via /tasks), then try again.";
  }, v = (t) => {
    let b = rre(ae(e), u$());
    if (b.length === 0) return y(t);
    a("tengu_update_refused", { uncarriable: true });
    let _ = Za() ? "" : " (add --continue to return to this conversation)";
    return `Can't switch to the new version from inside this session — it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${_}.`;
  }, C = p ? y() : v();
  if (C !== void 0) return { type: "text", value: C };
  if (p) {
    let t = j(p);
    if (await a6(e.messages, e.storageV5), !await Nt(Pu(), 3e4, "session flush").then(() => true, () => false)) return a("tengu_update_refused", { bg_flush_failed: true }), { type: "text", value: "Couldn't save the session to disk, so nothing was restarted — try /restart again in a moment." };
    let _ = await Obr(), A = y(true);
    if (A !== void 0) return { type: "text", value: A };
    let g = __t({ ...process.env });
    for (let s of Crt) delete g[s];
    delete g.CLAUDE_JOB_DIR;
    for (let s of Object.keys(g)) if (s.startsWith("CLAUDE_BG_")) delete g[s];
    a("tengu_update_bg_respawn", { carried_comment_monitor: uuo() && mws(e.taskRegistry.all()) });
    try {
      let s = H(_.cmd, [..._.prefixArgs, "respawn", t], { detached: true, stdio: "ignore", windowsHide: true, env: g, cwd: G() });
      HI(s.pid), s.on("error", (I) => {
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
  await a6(e.messages, e.storageV5);
  let o = v(true);
  if (o !== void 0) return { type: "text", value: o };
  let u = ae(e), m = [...Fhe(u, oAe(e)), ...$he(u, vee())], f = pc() ? void 0 : e.getAppState().teamContext?.teamName;
  await SEe();
  let k = v(true);
  if (k !== void 0) return { type: "text", value: k };
  let h = zd(), O = h?.bridgeSessionId, D = h?.getLastSequenceNum(), F = h?.outboundOnly, x = h?.sessionGroupingId;
  if (O) e.setAppState((t) => t.replBridgeSkipNextArchive ? t : { ...t, replBridgeSkipNextArchive: true }), h.writeSdkMessages([kzr("Switching to latest Claude Code… reconnecting", V())]), await Nt(h.flush(), 2e3, "bridge flush").catch(() => {
  }), await h.teardown({ skipArchive: true });
  let w = {};
  if (f) w.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = f;
  Object.assign(w, SZ()), Object.assign(w, iyt(u.additionalWorkingDirectories)), Object.assign(w, wde(O, D, F, x, ddn(h, r8())) ?? {});
  let E = Iu(), T = await i7(e.messages, "relaunch", {}, e.storageV5), R = H9e(e.messages) !== void 0;
  if (R && !T) {
    try {
      await Ok([...e.messages, P(`<${Ap}>/restart</${Ap}>
<${Vw}>restart</${Vw}>
<${Rz}></${Rz}>`), P(`<${Xl}>${J(NNt(E.target))}</${Xl}>`)], void 0, void 0, void 0, e.storageV5);
    } catch (t) {
      l(t);
    }
    await a6(e.messages, e.storageV5);
  }
  a(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", { from_version: fa({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION), target_version: fa(t6n(E.target)), native_install: KJ() });
  try {
    return await K(n, T, { launcher: E, freshIfNoTranscript: !R, extraArgs: m, proactivity: { proactivityLevel: e.getProactivityLevel(), toolPermissionContext: u }, env: Object.keys(w).length > 0 ? w : void 0, preSpawn: () => {
      process.stdout.write(R && n8() !== 0 ? he.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`);
    } }, e.storageV5);
  } catch (t) {
    if (!T) throw t;
    return l(t), { type: "text", value: eo(e.session) ? _Ee("Couldn't restart Claude Code (detail withheld on this connection).", d(t)) : `Couldn't restart Claude Code — ${d(t)}.` };
  }
};
export {
  Obr,
  hTi
};
