// vendor/opentelemetry/chunk-1kwxb66b.js — Claude Code 2.1.310 模块 chunk-1kwxb66b.js
import { xQt } from "../grpc/proto3-optional.3vy3.js";
import { g9, _q } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { x } from "../react/chunk-meds60nn.js";
var s = x(function(p) {
  Object.defineProperty(p, "__esModule", { value: true });
  p.OTLPTraceExporter = void 0;
  var e = xQt(), t = _q(), o = g9();
  class c extends o.OTLPExporterBase {
    constructor(u = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u, "TRACES"), t.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
    }
  }
  p.OTLPTraceExporter = c;
});
var l = x(function(r) {
  Object.defineProperty(r, "__esModule", { value: true });
  r.OTLPTraceExporter = void 0;
  var i = s();
  Object.defineProperty(r, "OTLPTraceExporter", { enumerable: true, get: function() {
    return i.OTLPTraceExporter;
  } });
});
var stdin_default = l();
export {
  stdin_default as default
};
