// linux/vendor/opentelemetry/chunk-ad88bb54.js — Claude Code 2.1.310（linux）模块 chunk-tp5t5jbp.js
import { s3, l4, mte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var e = Ce(s3()), o = Ce(l4()), r = Ce(mte());
class t extends e.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/x-protobuf" }), o.ProtobufTraceSerializer));
  }
}
export {
  t as OTLPTraceExporter
};
