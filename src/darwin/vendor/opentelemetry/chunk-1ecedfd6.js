// darwin/vendor/opentelemetry/chunk-1ecedfd6.js — Claude Code 2.1.310（darwin）模块 chunk-r74t7453.js
import { g9, _q, wte } from "./retry-after.js";
import "./chunk-2557fff3.js";
import { Ae } from "../react/chunk-0b0bf45d.js";
var t = Ae(g9()), o = Ae(_q()), r = Ae(wte());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/json" }), o.JsonTraceSerializer));
  }
}
export {
  e as OTLPTraceExporter
};
