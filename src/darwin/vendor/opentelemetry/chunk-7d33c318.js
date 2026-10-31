// darwin/vendor/opentelemetry/chunk-7d33c318.js — Claude Code 2.1.310（darwin）模块 chunk-7s0dmn98.js
import { INn } from "./chunk-c00e7059.js";
import { _q, wte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ae } from "../react/chunk-0b0bf45d.js";
var o = Ae(INn()), p = Ae(_q()), r = Ae(wte());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/x-protobuf" }), p.ProtobufMetricsSerializer), e);
  }
}
export {
  t as OTLPMetricExporter
};
