// vendor/opentelemetry/chunk-r74t7453.js — Claude Code 2.1.310 模块 chunk-r74t7453.js
import { g9, _q, wte } from "./retry-after.zz36.js";
import "./chunk-2v5724pw.js";
import { Ae } from "../react/chunk-meds60nn.js";
var t = Ae(g9()), o = Ae(_q()), r = Ae(wte());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", { "Content-Type": "application/json" }), o.JsonTraceSerializer));
  }
}
export {
  e as OTLPTraceExporter
};
