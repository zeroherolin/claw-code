// vendor/opentelemetry/chunk-h7gn8b9p.js — Claude Code 2.1.310 模块 chunk-h7gn8b9p.js
import { INn } from "./chunk-tj334sc7.js";
import { xQt } from "../grpc/proto3-optional.3vy3.js";
import { _q } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { x } from "../react/chunk-meds60nn.js";
var u = x(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.OTLPMetricExporter = void 0;
  var o = INn(), e = xQt(), c = _q();
  class p extends o.OTLPMetricExporterBase {
    constructor(t) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"), c.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), t);
    }
  }
  i.OTLPMetricExporter = p;
});
var _ = x(function(r) {
  Object.defineProperty(r, "__esModule", { value: true });
  r.OTLPMetricExporter = void 0;
  var l = u();
  Object.defineProperty(r, "OTLPMetricExporter", { enumerable: true, get: function() {
    return l.OTLPMetricExporter;
  } });
});
var stdin_default = _();
export {
  stdin_default as default
};
