// darwin/shared/chunk-9e8feed3.js — Claude Code 2.1.310（darwin）模块 chunk-j2hye7a5.js
import { i } from "./environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
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
