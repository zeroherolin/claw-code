// darwin/permissions/check-recording-availability.js — Claude Code 2.1.310（darwin）模块 chunk-9adyf6xj.js
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import { IE } from "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import { Cd } from "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-8eee6836.js";
import { st } from "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-6da6c5a3.js";
import { spawn as R } from "child_process";
import { homedir as m } from "os";
import { join as v } from "path";
var V = v(m(), ".cache", "coder-audio", "port"), M = v(m(), ".cache", "coder-audio", "token");
class g {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = false;
}
var l = new W(() => new g());
var w = { started: true };
var h = { started: false, superseded: false, hint: null, expected: false };
function f(e) {
  return e.audioNapiPromise ??= (async () => {
    let o = Date.now(), r = await import("../auth/is-native-audio-available.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r;
  })(), e.audioNapiPromise;
}
var k = 16e3, x = 1, E = "2.0", S = "3%";
async function u(e) {
  return (await st(e, ["--version"], { timeout: 3e3, useCwd: false })).code === 0;
}
async function b() {
  if (await u("brew")) return { cmd: "brew", args: ["install", "sox"], displayCommand: "brew install sox" };
  return null;
}
async function ce(e) {
  let o = l.of(e);
  if ((await f(o)).isNativeAudioAvailable()) return { available: true, missing: [], installCommand: null };
  let s = [];
  if (!await u("sox")) s.push("sox (rec command)");
  let n = s.length > 0 ? await b() : null;
  return { available: s.length === 0, missing: s, installCommand: n?.displayCommand ?? null };
}
async function le(e) {
  if (!(await f(l.of(e))).isNativeAudioAvailable()) return true;
  if ((await y(e, (s) => {
  }, () => {
  }, { silenceDetection: false })).started) return C(e), true;
  return false;
}
async function ue(e, o = {}) {
  if (IE() || i.CLAUDE_CODE_REMOTE) return { available: false, reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.` };
  let r = l.of(e);
  if ((await f(r)).isNativeAudioAvailable()) return { available: true, reason: null };
  let n = `Voice mode could not find a working audio recorder in WSL.

WSL2 with WSLg provides audio via PulseAudio — install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.`, d = await u("sox");
  if (d && await u("rec")) return { available: true, reason: null };
  if (O() === "wsl") return { available: false, reason: n };
  if (!d) {
    let a = await b();
    return { available: false, reason: a ? `Voice mode requires SoX for audio recording. Install it with: ${a.displayCommand}` : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox` };
  }
  return { available: false, reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.` };
}
async function y(e, o, r, s) {
  t("[voice] startRecording called, platform=darwin");
  let n = l.of(e), d = await f(n), a = d.isNativeAudioAvailable() && true, c = s?.silenceDetection !== false;
  if (a) {
    if (n.nativeRecordingActive || d.isNativeRecordingActive()) d.stopNativeRecording(), n.nativeRecordingActive = false;
    if (d.startNativeRecording((p) => {
      o(p);
    }, () => {
      if (c) n.nativeRecordingActive = false, r();
    })) return n.nativeRecordingActive = true, w;
  }
  return P(n, o, r, s) ? w : h;
}
function P(e, o, r, s) {
  let n = s?.silenceDetection !== false, d = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(k), "-e", "signed", "-b", "16", "-c", String(x), "-"];
  if (n) d.push("silence", "1", "0.1", S, "1", E, S);
  let a = R("rec", d, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ...Cd("helper") });
  return e.activeRecorder = a, a.stdout?.on("data", (c) => {
    o(c);
  }), a.stderr?.on("data", () => {
  }), a.on("close", () => {
    e.activeRecorder = null, r();
  }), a.on("error", (c) => {
    t(`[voice] SoX rec spawn failed: ${c instanceof Error ? c.message : String(c)}`, { level: "error" }), e.activeRecorder = null, r();
  }), true;
}
function C(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = false;
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null;
}
export {
  ue as checkRecordingAvailability,
  ce as checkVoiceDependencies,
  le as requestMicrophonePermission,
  y as startRecording,
  C as stopRecording
};
