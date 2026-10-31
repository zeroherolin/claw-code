// linux/vendor/opentelemetry/chunk-7d33c318.js — Claude Code 2.1.310（linux）模块 chunk-p02hybsn.js
import { bNn } from "./chunk-c00e7059.js";
import { l4, mte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var o = Ce(bNn()), p = Ce(l4()), r = Ce(mte());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/x-protobuf" }), p.ProtobufMetricsSerializer), e);
  }
}
export {
  t as OTLPMetricExporter
};
