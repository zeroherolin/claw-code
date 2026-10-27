// context/bg-attach-upgrade.mcwd.js — Claude Code 2.1.310 模块 chunk-mcwdc0xe.js
import { k } from "../settings/global-config-and-gates.27xj.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { freemem as o } from "os";
function eto() {
  let e = k("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return { lowMem: false, level: void 0 };
  if (O() !== "macos") return { lowMem: o() < e, level: void 0 };
  let n = m();
  return { lowMem: n !== void 0 && n >= l, level: n };
}
function wwe() {
  return eto().lowMem;
}
var r = { normal: 1, warning: 2, critical: 4 }, l = r.critical;
function m() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : r[e];
  } catch (e) {
    t(`bg low-mem: memoryPressureLevel failed: ${e instanceof Error ? e.message : String(e)}`, { level: "warn" });
    return;
  }
}
function tto() {
  return k("tengu_bg_attach_upgrade", true);
}
export {
  eto,
  tto,
  wwe
};
