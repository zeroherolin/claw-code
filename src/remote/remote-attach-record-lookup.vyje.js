// remote/remote-attach-record-lookup.vyje.js — Claude Code 2.1.310 模块 chunk-vyjeyzsn.js
import { c } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Gm } from "../telemetry/flag-off.7h9d.js";
import { oTe } from "../fs/file-upload.g3fv.js";
function iat() {
  return Gm() || oTe();
}
function Nas(e) {
  switch (e.kind) {
    case "elsewhere":
      return "elsewhere";
    case "nowhere":
      return e.hasOwnSessionRecord ? "here_only" : "nowhere";
    case "unknown":
      return e.why === "not_looked" ? "not_looked" : "unknown";
  }
}
function OAn(e, o) {
  a("tengu_remote_attach_record_lookup", { outcome: c(e), entry_point: c(o) });
}
export {
  Nas,
  OAn,
  iat
};
