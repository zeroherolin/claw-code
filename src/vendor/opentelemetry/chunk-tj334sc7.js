// vendor/opentelemetry/chunk-tj334sc7.js — Claude Code 2.1.310 模块 chunk-tj334sc7.js
import { g9, _q, wte } from "./retry-after.zz36.js";
import { I1e } from "./chunk-2v5724pw.js";
import { fl, Km } from "../../mcp/allowed-warning.j2d4.js";
import { x } from "../react/chunk-meds60nn.js";
var l = x(function(y) {
  Object.defineProperty(y, "__esModule", { value: true });
  y.AggregationTemporalityPreference = void 0;
  var I;
  (function(r) {
    r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE", r[r.LOWMEMORY = 2] = "LOWMEMORY";
  })(I = y.AggregationTemporalityPreference || (y.AggregationTemporalityPreference = {}));
});
var s = x(function(M) {
  Object.defineProperty(M, "__esModule", { value: true });
  M.OTLPMetricExporterBase = M.LowMemoryTemporalitySelector = M.DeltaTemporalitySelector = M.CumulativeTemporalitySelector = void 0;
  var O = Km(), e = I1e(), o = l(), g = g9(), _ = fl(), b = () => e.AggregationTemporality.CUMULATIVE;
  M.CumulativeTemporalitySelector = b;
  var B = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.HISTOGRAM:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.DeltaTemporalitySelector = B;
  var D = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.HISTOGRAM:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.LowMemoryTemporalitySelector = D;
  function j() {
    let r = (O.getStringFromEnv("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (r === "cumulative") return M.CumulativeTemporalitySelector;
    if (r === "delta") return M.DeltaTemporalitySelector;
    if (r === "lowmemory") return M.LowMemoryTemporalitySelector;
    return _.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${r}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), M.CumulativeTemporalitySelector;
  }
  function N(r) {
    if (r != null) {
      if (r === o.AggregationTemporalityPreference.DELTA) return M.DeltaTemporalitySelector;
      else if (r === o.AggregationTemporalityPreference.LOWMEMORY) return M.LowMemoryTemporalitySelector;
      return M.CumulativeTemporalitySelector;
    }
    return j();
  }
  var w = Object.freeze({ type: e.AggregationType.DEFAULT });
  function q(r) {
    return r?.aggregationPreference ?? (() => w);
  }
  class L extends g.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(r, E) {
      super(r);
      this._aggregationSelector = q(E), this._aggregationTemporalitySelector = N(E?.temporalityPreference);
    }
    selectAggregation(r) {
      return this._aggregationSelector(r);
    }
    selectAggregationTemporality(r) {
      return this._aggregationTemporalitySelector(r);
    }
  }
  M.OTLPMetricExporterBase = L;
});
var R = x(function(f) {
  Object.defineProperty(f, "__esModule", { value: true });
  f.OTLPMetricExporter = void 0;
  var S = s(), A = _q(), n = wte();
  class d extends S.OTLPMetricExporterBase {
    constructor(r) {
      super(n.createOtlpHttpExportDelegate(n.convertLegacyHttpOptions(r ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/json" }), A.JsonMetricsSerializer), r);
    }
  }
  f.OTLPMetricExporter = d;
});
var C = x(function(T) {
  Object.defineProperty(T, "__esModule", { value: true });
  T.OTLPMetricExporter = void 0;
  var G = R();
  Object.defineProperty(T, "OTLPMetricExporter", { enumerable: true, get: function() {
    return G.OTLPMetricExporter;
  } });
});
var U = x(function(m) {
  Object.defineProperty(m, "__esModule", { value: true });
  m.OTLPMetricExporter = void 0;
  var h = C();
  Object.defineProperty(m, "OTLPMetricExporter", { enumerable: true, get: function() {
    return h.OTLPMetricExporter;
  } });
});
var INn = x(function(t) {
  Object.defineProperty(t, "__esModule", { value: true });
  t.OTLPMetricExporterBase = t.LowMemoryTemporalitySelector = t.DeltaTemporalitySelector = t.CumulativeTemporalitySelector = t.AggregationTemporalityPreference = t.OTLPMetricExporter = void 0;
  var F = U();
  Object.defineProperty(t, "OTLPMetricExporter", { enumerable: true, get: function() {
    return F.OTLPMetricExporter;
  } });
  var Y = l();
  Object.defineProperty(t, "AggregationTemporalityPreference", { enumerable: true, get: function() {
    return Y.AggregationTemporalityPreference;
  } });
  var a = s();
  Object.defineProperty(t, "CumulativeTemporalitySelector", { enumerable: true, get: function() {
    return a.CumulativeTemporalitySelector;
  } });
  Object.defineProperty(t, "DeltaTemporalitySelector", { enumerable: true, get: function() {
    return a.DeltaTemporalitySelector;
  } });
  Object.defineProperty(t, "LowMemoryTemporalitySelector", { enumerable: true, get: function() {
    return a.LowMemoryTemporalitySelector;
  } });
  Object.defineProperty(t, "OTLPMetricExporterBase", { enumerable: true, get: function() {
    return a.OTLPMetricExporterBase;
  } });
});
export {
  INn
};
