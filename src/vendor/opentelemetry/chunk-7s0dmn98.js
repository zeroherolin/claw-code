// vendor/opentelemetry/chunk-7s0dmn98.js — Claude Code 2.1.310 模块 chunk-7s0dmn98.js
import { INn } from "./chunk-tj334sc7.js";
import { _q, wte } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { Ae } from "../react/chunk-meds60nn.js";
var o = Ae(INn()), p = Ae(_q()), r = Ae(wte());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/x-protobuf" }), p.ProtobufMetricsSerializer), e);
  }
}
export {
  t as OTLPMetricExporter
};
