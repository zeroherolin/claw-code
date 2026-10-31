// darwin/vendor/opentelemetry/chunk-4f59563b.js — Claude Code 2.1.310（darwin）模块 chunk-c466gese.js
import { xQt } from "../grpc/proto3-optional.js";
import { g9, _q } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { x } from "../react/chunk-0b0bf45d.js";
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
