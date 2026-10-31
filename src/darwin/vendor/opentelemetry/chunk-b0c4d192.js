// darwin/vendor/opentelemetry/chunk-b0c4d192.js — Claude Code 2.1.310（darwin）模块 chunk-smga0khq.js
import { g9, _q, wte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ae } from "../react/chunk-0b0bf45d.js";
var t = Ae(g9()), e = Ae(_q()), o = Ae(wte());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/x-protobuf" }), e.ProtobufLogsSerializer));
  }
}
export {
  r as OTLPLogExporter
};
