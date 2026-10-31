// linux/mcp/bridge-host-profile-collect.js — Claude Code 2.1.310（linux）模块 chunk-hhwwdjaf.js
import { b, ce } from "../agents/third-party.js";
import { Ye, d } from "../telemetry/anthropic-workspace-id.js";
import { L } from "../context/not-admin-owned.js";
import { Pe, si } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { f9r, tes, Fkn, i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O, jlr } from "../fs/chunk-ce5d00cd.js";
import { ot } from "../fs/chunk-86be9585.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { dot, P6r } from "../shell/invalid-type.js";
import { er, Qt, vI } from "../settings/workflow-launch-exec.js";
import { zRe, Hai, MNe, ZE, pe, Gp, kb } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { hWr } from "../context/tool-result-clearing-after-idle-server-report.js";
import { G3, fm } from "../core/conversation-engine.js";
import { LPt, DOn } from "../shared/chunk-367ec787.js";
import { o, u } from "../vendor/zod/string-format.js";
import { readdir as x, readFile as C, stat as V } from "fs/promises";
import { release as N } from "os";
import { join as F } from "path";
var z = 1500, A = 262144, X = 32, B = 16, w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/, j = /^[a-z0-9_]{1,16}$/, U = /^[a-z0-9._-]{1,24}$/, J = /^[A-Za-z0-9_.-]{1,64}$/, G = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...f9r], Y = /* @__PURE__ */ new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]), q = "/System/Library/CoreServices/SystemVersion.plist", y = "/Applications", W = "/Library/Developer/CommandLineTools/usr/bin", Z = "/usr/local/cuda/version.json", K = "/proc/driver/nvidia/version", Q = p(() => u({ cuda: u({ version: o() }) }));
function M() {
  let n = k("tengu_bridge_host_profile", "off");
  return dot.find((e) => e === n) ?? "off";
}
function MOn(n) {
  if (ee()) return "off";
  let e = (s) => s?.remoteControl?.shareHostProfile, r = [...Gp(), pe("policySettings"), pe("flagSettings"), pe("userSettings")].map(e), S = dot.find((s) => r.includes(s)) ?? n, c = [S, ...vI.filter(Qt).map((s) => e(pe(s)))];
  return dot.find((s) => c.includes(s)) ?? S;
}
function ee() {
  return [...kb(), ...ZE("flagSettings"), ...ZE("userSettings"), ...vI.filter(Qt).flatMap((e) => ZE(e))].some((e) => {
    if (e.path === "") return true;
    if (e.statusOnly) return false;
    if (e.severity !== "warning") return true;
    return e.path === P6r || e.path === "remoteControl" || e.path.startsWith("remoteControl.");
  });
}
async function Sms(n) {
  if (n === void 0) return;
  try {
    let e = M();
    if (e === "off") return;
    let r = await MNe();
    er();
    let S = MOn(e), c = Hai(), s;
    zRe(r.mdm, r.hkcu, r.wslInherits, r.whereAsked);
    try {
      er(), s = MOn(e);
    } finally {
      zRe(c.mdm, c.hkcu, c.wslInherits, c.whereAsked), er();
    }
    let _ = dot.find((P) => P === S || P === s) ?? "off";
    if (_ === "off") return;
    if (_ === "basic" && n.mcp_servers !== void 0) {
      let { mcp_servers: P, ...h } = n;
      return h;
    }
    return n;
  } catch (e) {
    l(e);
    return;
  }
}
async function Too(n) {
  try {
    let e = M();
    if (e === "off") return;
    let r = MOn(e);
    if (r === "off") {
      a("tengu_bridge_host_profile_collect", { outcome: b("disabled") });
      return;
    }
    return await te({ includeMcpServers: r === "full", signal: n });
  } catch (e) {
    l(e);
    return;
  }
}
async function te({ includeMcpServers: n, signal: e }) {
  let r = Date.now(), S = H();
  try {
    let c = await Aoo({ includeMcpServers: n, signal: e });
    if (c === void 0) return;
    let { profile: s, complete: _, aborted: P } = c;
    if (a("tengu_bridge_host_profile_collect", { outcome: _ ? b("ok") : P ? b("aborted") : b("partial"), duration_ms: Date.now() - r, tools_count: s.tools.length, mcp_count: s.mcp_servers?.length ?? 0, platform: ce(S), arch: ce(process.arch), wsl: s.wsl === true }), _) g("bridge_host_profile");
    else if (!P) f("bridge_host_profile", "deadline");
    return s;
  } catch (c) {
    l(c), a("tengu_bridge_host_profile_collect", { outcome: b("error"), duration_ms: Date.now() - r, platform: ce(S), arch: ce(process.arch) }), m("bridge_host_profile", "error");
    return;
  }
}
async function Aoo({ includeMcpServers: n, signal: e, alsoLookFor: r = [], maxTools: S = X }) {
  let c = H();
  if (c === void 0) return;
  let s = [...G, ...r], _ = { pathTools: /* @__PURE__ */ new Set(), mcpServers: [] }, P = [oe(c, _), se(_), Fkn(s, _.pathTools)];
  if (c === "darwin") P.push(re(_), ne(_));
  if (c === "linux") P.push(ie(_));
  if (n) P.push(ae(_));
  let h = Pe(Promise.all(P.map((E) => E.catch((D) => {
    l(D);
  }))).then(() => true), z).then((E) => E === true), v = false, I = e === void 0 ? await h : await si(h, e, () => new Ye()).catch(() => (v = true, false));
  return { profile: { platform: c, ...j.test(process.arch) && { arch: process.arch }, ..._.osVersion !== void 0 && { os_version: _.osVersion }, ..._.distro !== void 0 && { distro: _.distro }, ...O() === "wsl" && { wsl: true }, tools: le(c, _, s, S), ...n && { mcp_servers: _.mcpServers.slice(0, B) }, collected_at: (/* @__PURE__ */ new Date()).toISOString() }, complete: I, aborted: v };
}
function H() {
  switch ("linux") {
    case "darwin":
    case "linux":
    case "win32":
      return "linux";
    default:
      return;
  }
}
async function oe(n, e) {
  switch (n) {
    case "darwin":
      e.osVersion = await T(q, "ProductVersion");
      return;
    case "linux": {
      let r = await jlr();
      if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) e.osVersion = r.linuxDistroVersion;
      let S = r?.linuxDistroId?.toLowerCase();
      if (S && U.test(S)) e.distro = S;
      return;
    }
    case "win32": {
      let r = N();
      if (w.test(r)) e.osVersion = r;
      return;
    }
  }
}
async function T(n, e) {
  let r = await bl(n, A);
  if (r === null) return;
  let S = DOn(r), c = LPt(S) ? S[e] : void 0;
  return typeof c === "string" && w.test(c) ? c : void 0;
}
async function re(n) {
  let e;
  try {
    e = await x(y);
  } catch {
    return;
  }
  let r = e.filter((s) => /^Xcode.*\.app$/.test(s)).sort((s, _) => _.localeCompare(s, void 0, { numeric: true }));
  if (r.length === 0) return;
  let S = r.includes("Xcode.app") ? "Xcode.app" : r[0], c = await T(F(y, S, "Contents", "version.plist"), "CFBundleShortVersionString");
  n.xcode = c === void 0 ? "xcode" : `xcode@${c}`;
}
async function ne(n) {
  if (await R(W)) n.clt = "clt";
}
async function se(n) {
  let e = i.ANDROID_HOME ?? i.ANDROID_SDK_ROOT;
  if (e === void 0 || !await tes(e) || !await R(e)) return;
  n.androidSdk = "android-sdk";
}
async function ie(n) {
  let e = await bl(Z, A);
  if (e !== null) {
    let r = Q().safeParse(ot(e, false));
    n.cuda = r.success && w.test(r.data.cuda.version) ? `cuda@${r.data.cuda.version}` : "cuda";
    return;
  }
  try {
    await C(K, "utf8"), n.cuda = "cuda";
  } catch {
  }
}
async function R(n) {
  try {
    return (await V(n)).isDirectory();
  } catch {
    return false;
  }
}
async function ae(n) {
  let e = /* @__PURE__ */ new Set();
  for (let r of G3) {
    if (r === "project") continue;
    let S;
    try {
      S = Object.keys(fm(r, { expandVars: false }).servers);
    } catch (s) {
      t(`[bridge:host-profile] could not read ${r} MCP config: ${d(s)}`, { level: "warn" });
      continue;
    }
    let c = r === "managed" ? "enterprise" : r;
    for (let s of S) {
      if (!J.test(s) || e.has(s)) continue;
      e.add(s), n.mcpServers.push({ name: s, scope: c });
    }
  }
}
function le(n, e, r, S) {
  let c = n !== "darwin" || e.xcode !== void 0 || e.clt !== void 0, s = r.filter((P) => e.pathTools.has(P) && (c || !Y.has(P))), _ = [e.xcode, e.clt, ...s.filter((P) => P === "swift"), e.androidSdk, e.cuda, ...s.filter((P) => P !== "swift")].filter((P) => P !== void 0 && hWr.test(P));
  return L(_).slice(0, S);
}
export {
  Aoo,
  MOn,
  Sms,
  Too
};
