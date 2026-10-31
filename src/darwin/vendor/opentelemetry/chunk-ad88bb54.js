// darwin/vendor/opentelemetry/chunk-ad88bb54.js — Claude Code 2.1.310（darwin）模块 chunk-v16bdmaf.js
import { g9, _q, wte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ae } from "../react/chunk-0b0bf45d.js";
var e = Ae(g9()), o = Ae(_q()), r = Ae(wte());
class t extends e.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/x-protobuf" }), o.ProtobufTraceSerializer));
  }
}
export {
  t as OTLPTraceExporter
};
