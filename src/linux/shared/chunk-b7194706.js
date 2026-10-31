// linux/shared/chunk-b7194706.js — Claude Code 2.1.310（linux）模块 chunk-ej3beqha.js
import { it } from "../git/utf8-keep-bom.js";
function Gun(t) {
  let r = t.match(/^([A-Z]):(.*)$/i);
  if (!r) return null;
  return `/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\", "/")}`;
}
class cZe {
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
    let { stdout: r, code: e } = await it("wslpath", ["-u", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return Gun(t) ?? t.replaceAll("\\", "/");
  }
  async toIDEPath(t) {
    if (!t) return t;
    let { stdout: r, code: e } = await it("wslpath", ["-w", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return t;
  }
}
function c4s(t, r) {
  let e = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (e) return e[1] === r;
  return true;
}
export {
  Gun,
  c4s,
  cZe
};
