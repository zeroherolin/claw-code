// darwin/vendor/opentelemetry/chunk-bf8b4d14.js — Claude Code 2.1.310（darwin）模块 chunk-4pvjbm36.js
import { g9, _q, wte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ae } from "../react/chunk-0b0bf45d.js";
var t = Ae(g9()), e = Ae(_q()), o = Ae(wte());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/json" }), e.JsonLogsSerializer));
  }
}
export {
  r as OTLPLogExporter
};
