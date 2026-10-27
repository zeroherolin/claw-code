// vendor/opentelemetry/chunk-v16bdmaf.js — Claude Code 2.1.310 模块 chunk-v16bdmaf.js
import { g9, _q, wte } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { Ae } from "../react/chunk-meds60nn.js";
var e = Ae(g9()), o = Ae(_q()), r = Ae(wte());
class t extends e.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/x-protobuf" }), o.ProtobufTraceSerializer));
  }
}
export {
  t as OTLPTraceExporter
};
