// linux/remote/remote-attach-record-lookup.js — Claude Code 2.1.310（linux）模块 chunk-75fts3nr.js
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Gm } from "../telemetry/flag-off.js";
import { QTe } from "../fs/file-upload.js";
function eat() {
  return Gm() || QTe();
}
function oas(e) {
  switch (e.kind) {
    case "elsewhere":
      return "elsewhere";
    case "nowhere":
      return e.hasOwnSessionRecord ? "here_only" : "nowhere";
    case "unknown":
      return e.why === "not_looked" ? "not_looked" : "unknown";
  }
}
function fCn(e, o) {
  a("tengu_remote_attach_record_lookup", { outcome: c(e), entry_point: c(o) });
}
export {
  eat,
  fCn,
  oas
};
