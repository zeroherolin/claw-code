// shared/chunk-s56ftfc1.js — Claude Code 2.1.310 模块 chunk-s56ftfc1.js
import { Qlr } from "../remote/remote-cowork-trigger.ydtw.js";
import { QTt } from "./chunk-vqcstnkm.js";
import { $e } from "../vendor/react/chunk-meds60nn.js";
import { Ee } from "./chunk-f9xfyhm1.js";
import { userInfo as n } from "os";
var t = "com.anthropic.claudecode", qsr = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", Ysr = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", Jwn = "Settings", cXo = "/usr/bin/plutil", Wli = ["-convert", "json", "-o", "-", "--"], Gli = ["-lint", "-s", "--"], zli = 5e3, p5r = 2097152, YKe = "/mnt/c/Windows/System32/reg.exe", TI = "/mnt/c/Program Files/ClaudeCode", r = Ee({ isCoworkCloud: void 0 }, (e) => {
  e.isCoworkCloud = void 0;
});
function hKt() {
  if (r.isCoworkCloud === void 0) {
    let e = process.env.CLAUDE_CODE_ENTRYPOINT;
    r.isCoworkCloud = Qlr.some((o) => o === e);
  }
  return r.isCoworkCloud;
}
function Vli() {
  r.isCoworkCloud = void 0, hKt();
}
function yKt() {
  return false;
}
function Kli() {
  let e = "";
  try {
    e = n().username;
  } catch {
  }
  let o = [];
  if (e) o.push({ path: `/Library/Managed Preferences/${e}/${t}.plist`, label: "per-user managed preferences" });
  return o.push({ path: `/Library/Managed Preferences/${t}.plist`, label: "device-level managed preferences" }), o;
}
export {
  Gli,
  Jwn,
  Kli,
  TI,
  Vli,
  Wli,
  YKe,
  Ysr,
  cXo,
  hKt,
  p5r,
  qsr,
  yKt,
  zli
};
