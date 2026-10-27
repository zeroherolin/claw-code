// vendor/opentelemetry/chunk-c466gese.js — Claude Code 2.1.310 模块 chunk-c466gese.js
import { xQt } from "../grpc/proto3-optional.3vy3.js";
import { g9, _q } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { x } from "../react/chunk-meds60nn.js";
var u = x(function(s) {
  Object.defineProperty(s, "__esModule", { value: true });
  s.OTLPLogExporter = void 0;
  var e = xQt(), t = _q(), o = g9();
  class p extends o.OTLPExporterBase {
    constructor(L = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L, "LOGS"), t.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  s.OTLPLogExporter = p;
});
var n = x(function(r) {
  Object.defineProperty(r, "__esModule", { value: true });
  r.OTLPLogExporter = void 0;
  var i = u();
  Object.defineProperty(r, "OTLPLogExporter", { enumerable: true, get: function() {
    return i.OTLPLogExporter;
  } });
});
var stdin_default = n();
export {
  stdin_default as default
};
