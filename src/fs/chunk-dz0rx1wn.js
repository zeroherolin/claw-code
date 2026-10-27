// fs/chunk-dz0rx1wn.js — Claude Code 2.1.310 模块 chunk-dz0rx1wn.js
import { ie, t } from "./gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { QTt } from "../shared/chunk-vqcstnkm.js";
import { Ee } from "../shared/chunk-f9xfyhm1.js";
import { readdir as m, readFile as f } from "fs/promises";
import { release as p } from "os";
var d = Ee({ value: false }, (e) => {
  e.value = false;
});
function c() {
  return d.value;
}
function $Yr() {
  if (c()) return;
  try {
    return ie().readFileSync("/proc/version", { encoding: "utf8" }).toLowerCase();
  } catch {
    return;
  }
}
var $es = ["macos", "wsl"];
class u {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead = false;
  platform;
  wslVersion = null;
  macOSMajorVersion = null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead) this.fallbackProcVersion = this.sources.readProcVersionSync(), this.fallbackProcVersionRead = true;
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos";
      else if (this.sources.platform === "win32") this.platform = "windows";
      else if (this.sources.platform === "linux") if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) this.platform = "wsl";
      else {
        let e = this.kernelString();
        this.platform = e !== void 0 && QTt(e) ? "wsl" : "linux";
      }
      else this.platform = "unknown";
    } catch (e) {
      l(e), this.platform = "unknown";
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1];
    else if (e.includes("microsoft")) this.wslVersion = "1";
    else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    return this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : void 0, this.macOSMajorVersion;
  }
  getLinuxDistroInfo() {
    return this.linuxDistroInfo ??= this.readLinuxDistroInfo();
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = { linuxKernel: this.sources.osRelease() };
    try {
      let r = await this.sources.readOsRelease();
      for (let s of r.split(`
`)) {
        let n = s.match(/^(ID|VERSION_ID)=(.*)$/);
        if (n && n[1] && n[2]) {
          let i = n[2].replace(/^"|"$/g, "");
          if (n[1] === "ID") e.linuxDistroId = i;
          else e.linuxDistroVersion = i;
        }
      }
    } catch {
    }
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux") return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (e) {
      t(`Failed to read /proc/version for WSL detection: ${e}`, { level: "error" });
      return;
    }
    this.platform = void 0, this.wslVersion = null;
  }
}
var h;
function o() {
  return h ??= new u({ platform: "darwin", env: process.env, readProcVersionSync: $Yr, readProcVersion: () => f("/proc/version", { encoding: "utf8" }), osRelease: p, readOsRelease: () => f("/etc/os-release", "utf8") });
}
function Afi() {
  return o().prime();
}
function O() {
  return o().getPlatform();
}
function e$e(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
function p3e() {
  return o().getWslVersion();
}
function odr() {
  return o().getLinuxDistroInfo();
}
function Rfi() {
  return o().getMacOSMajorVersion();
}
var g = [[".git", "git"], [".hg", "mercurial"], [".svn", "svn"], [".p4config", "perforce"], ["$tf", "tfs"], [".tfvc", "tfs"], [".jj", "jujutsu"], [".sl", "sapling"]];
async function xfi(e) {
  let r = /* @__PURE__ */ new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? ie().cwd(), n = new Set(await m(s));
    for (let [i, a] of g) if (n.has(i)) r.add(a);
  } catch {
  }
  return [...r];
}
export {
  $Yr,
  $es,
  Afi,
  O,
  Rfi,
  e$e,
  odr,
  p3e,
  xfi
};
