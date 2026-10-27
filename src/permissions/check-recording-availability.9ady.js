// permissions/check-recording-availability.9ady.js — Claude Code 2.1.310 模块 chunk-9adyf6xj.js
import "../fs/async-hooks.9s1z.js";
import "../shared/chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import { IE } from "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../shared/chunk-nrx8c90j.js";
import { i } from "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import { Cd } from "../context/tool-cgroup-exclude-classes.t1za.js";
import "../shared/async-hooks.m2fg.js";
import "../shared/chunk-z6efcye4.js";
import { st } from "../git/utf8-keep-bom.c49x.js";
import "../shell/chunk-gx93fya1.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../shared/chunk-81mpzfkq.js";
import "../shared/chunk-n07cvysj.js";
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
    let o = Date.now(), r = await import("../auth/is-native-audio-available.7wbz.js");
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
