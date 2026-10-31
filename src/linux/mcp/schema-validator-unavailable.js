// linux/mcp/schema-validator-unavailable.js — Claude Code 2.1.310（linux）模块 chunk-h9mf9k3y.js
import { b } from "../agents/third-party.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { EWr, r9s } from "../context/tool-result-clearing-after-idle-server-report.js";
import { H } from "../shared/chunk-7027e6d5.js";
var s = "https://json-schema.org/draft/2020-12/schema", c;
function f() {
  if (c === void 0) {
    try {
      let e = import.meta.require("../vendor/ajv/uri-reference.ce66.js");
      c = typeof e.default === "function" ? e.default : null;
    } catch {
      c = null;
    }
    if (c === null) t("MCP: draft 2020-12 meta-validator unavailable — tool schema checks fail open", { level: "warn" }), a("tengu_mcp_degraded", { reason: b("schema_validator_unavailable") });
  }
  return c;
}
function h() {
  return false;
}
function v(e) {
  if (!H(e) || !H(e.properties)) return null;
  for (let r of Object.keys(e.properties)) if (!EWr.test(r)) return r;
  return null;
}
function m(e) {
  return S(f(), e, h());
}
function S(e, r, i) {
  let l = v(r);
  if (l !== null) return { valid: false, check: "propertyKey", detail: `property key ${_(l.slice(0, 80))} does not match ${EWr}` };
  if (e === null) return { valid: true };
  let n = r;
  if (H(r)) {
    let o = Object.entries(r);
    if (o.some(([, u]) => u === null)) o = o.filter(([, u]) => u !== null), n = Object.fromEntries(o);
    let d = n.$schema;
    if (d !== void 0) if (i) {
      let { $schema: u, ...p } = n;
      n = p;
    } else if (typeof d === "string" && (d === s || d === `${s}#`)) ;
    else return { valid: true };
  }
  try {
    if (e(n)) return { valid: true };
    let o = e.errors?.[0];
    return { valid: false, check: "meta", detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid" };
  } catch (o) {
    return { valid: false, check: "meta", detail: `validation threw: ${o instanceof Error ? o.message : String(o)}` };
  }
}
function etn(e, r) {
  let i = r9s(e);
  if (i.outcome === "drop") return { verdict: "drop", cause: "schema_unsupported", reason: i.reason };
  if (i.outcome === "normalized" && !r.normalizeEnabled) return { verdict: "drop", cause: "normalize_gated", reason: `its input schema uses top-level ${i.combinators.join("/")}, which the Anthropic API does not accept` };
  let l = i.outcome === "normalized" ? { schema: i.schema, note: i.note, combinators: i.combinators } : void 0, n = m(l?.schema ?? e);
  if (n.valid) return { verdict: "send", normalized: l, apiWouldReject: void 0 };
  if (!r.apiValidateEnabled) return { verdict: "send", normalized: l, apiWouldReject: n };
  return { verdict: "drop", cause: "api_invalid", normalized: l, rejection: n };
}
export {
  etn
};
