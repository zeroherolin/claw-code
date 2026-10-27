// vendor/opentelemetry/chunk-smga0khq.js — Claude Code 2.1.310 模块 chunk-smga0khq.js
import { g9, _q, wte } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { Ae } from "../react/chunk-meds60nn.js";
var t = Ae(g9()), e = Ae(_q()), o = Ae(wte());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/x-protobuf" }), e.ProtobufLogsSerializer));
  }
}
export {
  r as OTLPLogExporter
};
