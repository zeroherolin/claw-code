// linux/vendor/opentelemetry/chunk-9559ac9c.js — Claude Code 2.1.310（linux）模块 chunk-v74e52zr.js
import { bNn } from "./chunk-c00e7059.js";
import { b7t } from "../grpc/proto3-optional.js";
import { l4 } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { x } from "../react/chunk-0b0bf45d.js";
var u = x(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.OTLPMetricExporter = void 0;
  var o = bNn(), e = b7t(), c = l4();
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
