// darwin/mcp/bridge-host-profile-collect.js — Claude Code 2.1.310（darwin）模块 chunk-cy2wjj4v.js
import { S, ce } from "../agents/third-party.js";
import { Ye, d } from "../telemetry/anthropic-workspace-id.js";
import { L } from "../context/not-admin-owned.js";
import { Pe, si } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { NYr, Les, nCn, i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O, odr } from "../fs/chunk-ce5d00cd.js";
import { ot } from "../fs/chunk-86be9585.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { hot, e9r } from "../shell/invalid-type.js";
import { er, Qt, AI } from "../settings/workflow-launch-exec.js";
import { XRe, hli, $Ne, ek, fe, Gf, CS } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { NWr } from "../context/tool-result-clearing-after-idle-server-report.js";
import { e8, pm } from "../core/conversation-engine.js";
import { WPt, VOn } from "../shared/chunk-367ec787.js";
import { o, u } from "../vendor/zod/string-format.js";
import { readdir as x, readFile as C, stat as V } from "fs/promises";
import { release as N } from "os";
import { join as F } from "path";
var z = 1500, A = 262144, X = 32, B = 16, w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/, j = /^[a-z0-9_]{1,16}$/, U = /^[a-z0-9._-]{1,24}$/, J = /^[A-Za-z0-9_.-]{1,64}$/, G = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...NYr], Y = /* @__PURE__ */ new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]), q = "/System/Library/CoreServices/SystemVersion.plist", y = "/Applications", W = "/Library/Developer/CommandLineTools/usr/bin", Z = "/usr/local/cuda/version.json", K = "/proc/driver/nvidia/version", Q = f(() => u({ cuda: u({ version: o() }) }));
function M() {
  let n = k("tengu_bridge_host_profile", "off");
  return hot.find((e) => e === n) ?? "off";
}
function zOn(n) {
  if (ee()) return "off";
  let e = (s) => s?.remoteControl?.shareHostProfile, r = [...Gf(), fe("policySettings"), fe("flagSettings"), fe("userSettings")].map(e), _ = hot.find((s) => r.includes(s)) ?? n, c = [_, ...AI.filter(Qt).map((s) => e(fe(s)))];
  return hot.find((s) => c.includes(s)) ?? _;
}
function ee() {
  return [...CS(), ...ek("flagSettings"), ...ek("userSettings"), ...AI.filter(Qt).flatMap((e) => ek(e))].some((e) => {
    if (e.path === "") return true;
    if (e.statusOnly) return false;
    if (e.severity !== "warning") return true;
    return e.path === e9r || e.path === "remoteControl" || e.path.startsWith("remoteControl.");
  });
}
async function Vms(n) {
  if (n === void 0) return;
  try {
    let e = M();
    if (e === "off") return;
    let r = await $Ne();
    er();
    let _ = zOn(e), c = hli(), s;
    XRe(r.mdm, r.hkcu, r.wslInherits, r.whereAsked);
    try {
      er(), s = zOn(e);
    } finally {
      XRe(c.mdm, c.hkcu, c.wslInherits, c.whereAsked), er();
    }
    let P = hot.find((h) => h === _ || h === s) ?? "off";
    if (P === "off") return;
    if (P === "basic" && n.mcp_servers !== void 0) {
      let { mcp_servers: h, ...b } = n;
      return b;
    }
    return n;
  } catch (e) {
    l(e);
    return;
  }
}
async function qoo(n) {
  try {
    let e = M();
    if (e === "off") return;
    let r = zOn(e);
    if (r === "off") {
      a("tengu_bridge_host_profile_collect", { outcome: S("disabled") });
      return;
    }
    return await te({ includeMcpServers: r === "full", signal: n });
  } catch (e) {
    l(e);
    return;
  }
}
async function te({ includeMcpServers: n, signal: e }) {
  let r = Date.now(), _ = H();
  try {
    let c = await Yoo({ includeMcpServers: n, signal: e });
    if (c === void 0) return;
    let { profile: s, complete: P, aborted: h } = c;
    if (a("tengu_bridge_host_profile_collect", { outcome: P ? S("ok") : h ? S("aborted") : S("partial"), duration_ms: Date.now() - r, tools_count: s.tools.length, mcp_count: s.mcp_servers?.length ?? 0, platform: ce(_), arch: ce("arm64"), wsl: s.wsl === true }), P) g("bridge_host_profile");
    else if (!h) p("bridge_host_profile", "deadline");
    return s;
  } catch (c) {
    l(c), a("tengu_bridge_host_profile_collect", { outcome: S("error"), duration_ms: Date.now() - r, platform: ce(_), arch: ce("arm64") }), m("bridge_host_profile", "error");
    return;
  }
}
async function Yoo({ includeMcpServers: n, signal: e, alsoLookFor: r = [], maxTools: _ = X }) {
  let c = H();
  if (c === void 0) return;
  let s = [...G, ...r], P = { pathTools: /* @__PURE__ */ new Set(), mcpServers: [] }, h = [oe(c, P), se(P), nCn(s, P.pathTools)];
  if (c === "darwin") h.push(re(P), ne(P));
  if (c === "linux") h.push(ie(P));
  if (n) h.push(ae(P));
  let b = Pe(Promise.all(h.map((E) => E.catch((D) => {
    l(D);
  }))).then(() => true), z).then((E) => E === true), v = false, I = e === void 0 ? await b : await si(b, e, () => new Ye()).catch(() => (v = true, false));
  return { profile: { platform: c, ...j.test("arm64") && { arch: "arm64" }, ...P.osVersion !== void 0 && { os_version: P.osVersion }, ...P.distro !== void 0 && { distro: P.distro }, ...O() === "wsl" && { wsl: true }, tools: le(c, P, s, _), ...n && { mcp_servers: P.mcpServers.slice(0, B) }, collected_at: (/* @__PURE__ */ new Date()).toISOString() }, complete: I, aborted: v };
}
function H() {
  switch ("darwin") {
    case "darwin":
    case "linux":
    case "win32":
      return "darwin";
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
      let r = await odr();
      if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) e.osVersion = r.linuxDistroVersion;
      let _ = r?.linuxDistroId?.toLowerCase();
      if (_ && U.test(_)) e.distro = _;
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
  let _ = VOn(r), c = WPt(_) ? _[e] : void 0;
  return typeof c === "string" && w.test(c) ? c : void 0;
}
async function re(n) {
  let e;
  try {
    e = await x(y);
  } catch {
    return;
  }
  let r = e.filter((s) => /^Xcode.*\.app$/.test(s)).sort((s, P) => P.localeCompare(s, void 0, { numeric: true }));
  if (r.length === 0) return;
  let _ = r.includes("Xcode.app") ? "Xcode.app" : r[0], c = await T(F(y, _, "Contents", "version.plist"), "CFBundleShortVersionString");
  n.xcode = c === void 0 ? "xcode" : `xcode@${c}`;
}
async function ne(n) {
  if (await R(W)) n.clt = "clt";
}
async function se(n) {
  let e = i.ANDROID_HOME ?? i.ANDROID_SDK_ROOT;
  if (e === void 0 || !await Les(e) || !await R(e)) return;
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
  for (let r of e8) {
    if (r === "project") continue;
    let _;
    try {
      _ = Object.keys(pm(r, { expandVars: false }).servers);
    } catch (s) {
      t(`[bridge:host-profile] could not read ${r} MCP config: ${d(s)}`, { level: "warn" });
      continue;
    }
    let c = r === "managed" ? "enterprise" : r;
    for (let s of _) {
      if (!J.test(s) || e.has(s)) continue;
      e.add(s), n.mcpServers.push({ name: s, scope: c });
    }
  }
}
function le(n, e, r, _) {
  let c = n !== "darwin" || e.xcode !== void 0 || e.clt !== void 0, s = r.filter((h) => e.pathTools.has(h) && (c || !Y.has(h))), P = [e.xcode, e.clt, ...s.filter((h) => h === "swift"), e.androidSdk, e.cuda, ...s.filter((h) => h !== "swift")].filter((h) => h !== void 0 && NWr.test(h));
  return L(P).slice(0, _);
}
export {
  Vms,
  Yoo,
  qoo,
  zOn
};
