// linux/shared/chunk-9e8feed3.js — Claude Code 2.1.310（linux）模块 chunk-7yf7msy4.js
import { i } from "./environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { homedir as r } from "os";
import { join as o } from "path";
function Nho() {
  if (O() === "windows" && i.APPDATA) return o(i.APPDATA, "gcloud");
  return o(r(), ".config", "gcloud");
}
function eFn() {
  return i.CLOUDSDK_CONFIG || Nho();
}
export {
  Nho,
  eFn
};
