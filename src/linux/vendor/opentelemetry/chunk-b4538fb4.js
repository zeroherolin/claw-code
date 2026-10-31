// linux/vendor/opentelemetry/chunk-b4538fb4.js — Claude Code 2.1.310（linux）模块 chunk-5t1va11j.js
import { b7t } from "../grpc/proto3-optional.js";
import { s3, l4 } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { x } from "../react/chunk-0b0bf45d.js";
var s = x(function(p) {
  Object.defineProperty(p, "__esModule", { value: true });
  p.OTLPTraceExporter = void 0;
  var e = b7t(), t = l4(), o = s3();
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
