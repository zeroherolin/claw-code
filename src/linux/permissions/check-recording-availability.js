// linux/permissions/check-recording-availability.js — Claude Code 2.1.310（linux）模块 chunk-1g7w7v7r.js
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
import { Pv } from "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import { _d } from "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-8eee6836.js";
import { it } from "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-6da6c5a3.js";
import { spawn as m } from "child_process";
import { readFile as P } from "fs/promises";
import { homedir as b } from "os";
import { join as R } from "path";
var G = R(b(), ".cache", "coder-audio", "port"), X = R(b(), ".cache", "coder-audio", "token");
class A {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = false;
}
var u = new W(() => new A());
var p = { started: true };
var k = { started: false, superseded: false, hint: null, expected: false };
function f(e) {
  return e.audioNapiPromise ??= (async () => {
    let o = Date.now(), r = await import("../auth/is-native-audio-available.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r;
  })(), e.audioNapiPromise;
}
var v = 16e3, w = 1, D = "2.0", h = "3%";
async function c(e) {
  return (await it(e, ["--version"], { timeout: 3e3, useCwd: false })).code === 0;
}
function x(e) {
  return e.arecordProbe ??= new Promise((o) => {
    let r = m("arecord", ["-f", "S16_LE", "-r", String(v), "-c", String(w), "-t", "raw", "/dev/null"], { stdio: ["ignore", "ignore", "pipe"], windowsHide: true }), s = "";
    r.stderr?.on("data", (a) => {
      s += a.toString();
    });
    let n = setTimeout((a, d) => {
      a.kill("SIGTERM"), d({ ok: true, stderr: "" });
    }, 150, r, o);
    r.once("close", (a) => {
      clearTimeout(n), o({ ok: a === 0, stderr: s.trim() });
    }), r.once("error", () => {
      clearTimeout(n), o({ ok: false, stderr: "arecord: command not found" });
    });
  }), e.arecordProbe;
}
function g(e) {
  return e.linuxAlsaCardsProbe ??= P("/proc/asound/cards", "utf8").then((o) => {
    let r = o.trim();
    return r !== "" && !r.includes("no soundcards");
  }, () => false), e.linuxAlsaCardsProbe;
}
async function E() {
  if (await c("apt-get")) return { cmd: "sudo", args: ["apt-get", "install", "-y", "sox"], displayCommand: "sudo apt-get install sox" };
  if (await c("dnf")) return { cmd: "sudo", args: ["dnf", "install", "-y", "sox"], displayCommand: "sudo dnf install sox" };
  if (await c("pacman")) return { cmd: "sudo", args: ["pacman", "-S", "--noconfirm", "sox"], displayCommand: "sudo pacman -S sox" };
  return null;
}
async function me(e) {
  let o = u.of(e);
  if ((await f(o)).isNativeAudioAvailable() && await g(o)) return { available: true, missing: [], installCommand: null };
  if (await c("arecord")) return { available: true, missing: [], installCommand: null };
  let s = [];
  if (!await c("sox")) s.push("sox (rec command)");
  let n = s.length > 0 ? await E() : null;
  return { available: s.length === 0, missing: s, installCommand: n?.displayCommand ?? null };
}
async function ve(e) {
  if (!(await f(u.of(e))).isNativeAudioAvailable()) return true;
  if ((await F(e, (s) => {
  }, () => {
  }, { silenceDetection: false })).started) return N(e), true;
  return false;
}
async function we(e, o = {}) {
  if (Pv() || i.CLAUDE_CODE_REMOTE) return { available: false, reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.` };
  let r = u.of(e);
  if ((await f(r)).isNativeAudioAvailable() && await g(r)) return { available: true, reason: null };
  let n = `Voice mode could not find a working audio recorder in WSL.

WSL2 with WSLg provides audio via PulseAudio — install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.`;
  if (await c("arecord")) {
    let d = await x(r);
    if (d.ok) return { available: true, reason: null };
    t(`[voice] arecord probe failed: ${d.stderr}`);
  }
  let a = await c("sox");
  if (a && await c("rec")) return { available: true, reason: null };
  if (O() === "wsl") return { available: false, reason: n };
  if (!a) {
    let d = await E();
    return { available: false, reason: d ? `Voice mode requires SoX for audio recording. Install it with: ${d.displayCommand}` : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox` };
  }
  return { available: false, reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.` };
}
async function F(e, o, r, s) {
  t("[voice] startRecording called, platform=linux");
  let n = u.of(e), a = await f(n), d = a.isNativeAudioAvailable() && await g(n), l = s?.silenceDetection !== false;
  if (d) {
    if (n.nativeRecordingActive || a.isNativeRecordingActive()) a.stopNativeRecording(), n.nativeRecordingActive = false;
    if (a.startNativeRecording((S) => {
      o(S);
    }, () => {
      if (l) n.nativeRecordingActive = false, r();
    })) return n.nativeRecordingActive = true, p;
  }
  if (await c("arecord") && (await x(n)).ok) return T(n, o, r) ? p : k;
  return C(n, o, r, s) ? p : k;
}
function C(e, o, r, s) {
  let n = s?.silenceDetection !== false, a = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(v), "-e", "signed", "-b", "16", "-c", String(w), "-"];
  if (n) a.push("silence", "1", "0.1", h, "1", D, h);
  let d = m("rec", a, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ..._d("helper") });
  return e.activeRecorder = d, d.stdout?.on("data", (l) => {
    o(l);
  }), d.stderr?.on("data", () => {
  }), d.on("close", () => {
    e.activeRecorder = null, r();
  }), d.on("error", (l) => {
    t(`[voice] SoX rec spawn failed: ${l instanceof Error ? l.message : String(l)}`, { level: "error" }), e.activeRecorder = null, r();
  }), true;
}
function T(e, o, r) {
  let s = ["-f", "S16_LE", "-r", String(v), "-c", String(w), "-t", "raw", "-q", "-"], n = m("arecord", s, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ..._d("helper") });
  return e.activeRecorder = n, n.stdout?.on("data", (a) => {
    o(a);
  }), n.stderr?.on("data", () => {
  }), n.on("close", () => {
    e.activeRecorder = null, r();
  }), n.on("error", (a) => {
    t(`[voice] arecord recorder spawn error: ${a}`, { level: "error" }), e.activeRecorder = null, r();
  }), true;
}
function N(e) {
  let o = u.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = false;
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null;
}
export {
  we as checkRecordingAvailability,
  me as checkVoiceDependencies,
  ve as requestMicrophonePermission,
  F as startRecording,
  N as stopRecording
};
