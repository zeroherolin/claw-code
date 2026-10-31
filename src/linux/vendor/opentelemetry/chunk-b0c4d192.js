// linux/vendor/opentelemetry/chunk-b0c4d192.js — Claude Code 2.1.310（linux）模块 chunk-da4hmvm5.js
import { s3, l4, mte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var t = Ce(s3()), e = Ce(l4()), o = Ce(mte());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/x-protobuf" }), e.ProtobufLogsSerializer));
  }
}
export {
  r as OTLPLogExporter
};
