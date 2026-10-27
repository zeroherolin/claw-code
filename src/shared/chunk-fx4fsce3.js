// shared/chunk-fx4fsce3.js — Claude Code 2.1.310 模块 chunk-fx4fsce3.js
import { st } from "../git/utf8-keep-bom.c49x.js";
function apn(t) {
  let r = t.match(/^([A-Z]):(.*)$/i);
  if (!r) return null;
  return `/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\", "/")}`;
}
class _Ze {
  wslDistroName;
  constructor(t) {
    this.wslDistroName = t;
  }
  async toLocalPath(t) {
    if (!t) return t;
    if (this.wslDistroName) {
      let o = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (o && o[1] !== this.wslDistroName) return t;
    }
    let { stdout: r, code: e } = await st("wslpath", ["-u", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return apn(t) ?? t.replaceAll("\\", "/");
  }
  async toIDEPath(t) {
    if (!t) return t;
    let { stdout: r, code: e } = await st("wslpath", ["-w", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return t;
  }
}
function Yqs(t, r) {
  let e = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (e) return e[1] === r;
  return true;
}
export {
  Yqs,
  _Ze,
  apn
};
