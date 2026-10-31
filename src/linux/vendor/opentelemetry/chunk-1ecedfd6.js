// linux/vendor/opentelemetry/chunk-1ecedfd6.js — Claude Code 2.1.310（linux）模块 chunk-yye47dbk.js
import { s3, l4, mte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var t = Ce(s3()), o = Ce(l4()), r = Ce(mte());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/json" }), o.JsonTraceSerializer));
  }
}
export {
  e as OTLPTraceExporter
};
