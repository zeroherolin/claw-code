// shared/chunk-j2hye7a5.js — Claude Code 2.1.310 模块 chunk-j2hye7a5.js
import { i } from "./environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { homedir as r } from "os";
import { join as o } from "path";
function Fho() {
  if (O() === "windows" && i.APPDATA) return o(i.APPDATA, "gcloud");
  return o(r(), ".config", "gcloud");
}
function s$n() {
  return i.CLOUDSDK_CONFIG || Fho();
}
export {
  Fho,
  s$n
};
