// shared/input-schema-not-checked.xf9s.js — Claude Code 2.1.310 模块 chunk-xf9sgh91.js
import { L } from "../context/not-admin-owned.ersa.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { p } from "../telemetry/chunk-wn8xtaqg.js";
import { _Rs, w7 } from "./egress-blocked.6n8q.js";
import { eAe } from "../tools/structured-output-tool.j28z.js";
import { Dg, nb, tAe, zmn, oJn, Vmn, sJn, hWo, PWr, yWo, _Wo, IWr, SWo, bWo, wWo, EWo } from "../vendor/ajv/uri-reference.j4b6.js";
import { mn } from "./chunk-1a0taxx3.js";
import { x } from "../vendor/react/chunk-meds60nn.js";
var T = x(function(z) {
  Object.defineProperty(z, "__esModule", { value: true });
  z.dynamicAnchor = void 0;
  var A = Dg(), Te = tAe(), O = sJn(), G = PWr(), Fe = { keyword: "$dynamicAnchor", schemaType: "string", code: (e) => U(e, e.schema) };
  function U(e, r) {
    let { gen: a, it: n } = e;
    n.schemaEnv.root.dynamicAnchors[r] = true;
    let o = A._`${Te.default.dynamicAnchors}${A.getProperty(r)}`, i = n.errSchemaPath === "#" ? n.validateName : Ve(e);
    a.if(A._`!${o}`, () => a.assign(o, i));
  }
  z.dynamicAnchor = U;
  function Ve(e) {
    let { schemaEnv: r, schema: a, self: n } = e.it, { root: o, baseId: i, localRefs: u, meta: m } = r.root, { schemaId: s } = n.opts, f = new O.SchemaEnv({ schema: a, schemaId: s, root: o, baseId: i, localRefs: u, meta: m });
    return O.compileSchema.call(n, f), G.getValidate(e, f);
  }
  z.default = Fe;
});
var F = x(function(Z) {
  Object.defineProperty(Z, "__esModule", { value: true });
  Z.dynamicRef = void 0;
  var k = Dg(), We = tAe(), M = PWr(), Le = { keyword: "$dynamicRef", schemaType: "string", code: (e) => Y(e, e.schema) };
  function Y(e, r) {
    let { gen: a, keyword: n, it: o } = e;
    if (r[0] !== "#") throw Error(`"${n}" only supports hash fragment reference`);
    let i = r.slice(1);
    if (o.allErrors) u();
    else {
      let s = a.let("valid", false);
      u(s), e.ok(s);
    }
    function u(s) {
      if (o.schemaEnv.root.dynamicAnchors[i]) {
        let f = a.let("_v", k._`${We.default.dynamicAnchors}${k.getProperty(i)}`);
        a.if(f, m(f, s), m(o.validateName, s));
      } else m(o.validateName, s)();
    }
    function m(s, f) {
      return f ? () => a.block(() => {
        M.callRef(e, s), a.let(f, true);
      }) : () => M.callRef(e, s);
    }
  }
  Z.dynamicRef = Y;
  Z.default = Le;
});
var te = x(function(ee) {
  Object.defineProperty(ee, "__esModule", { value: true });
  var J = T(), Q = nb(), Ke = { keyword: "$recursiveAnchor", schemaType: "boolean", code(e) {
    if (e.schema) J.dynamicAnchor(e, "");
    else Q.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
  } };
  ee.default = Ke;
});
var ne = x(function(ae) {
  Object.defineProperty(ae, "__esModule", { value: true });
  var re = F(), Ue = { keyword: "$recursiveRef", schemaType: "string", code: (e) => re.dynamicRef(e, e.schema) };
  ae.default = Ue;
});
var se = x(function(oe) {
  Object.defineProperty(oe, "__esModule", { value: true });
  var Xe = T(), Ye = F(), Ze = te(), Be = ne(), Je = [Xe.default, Ye.default, Ze.default, Be.default];
  oe.default = Je;
});
var ce = x(function(ie) {
  Object.defineProperty(ie, "__esModule", { value: true });
  var I = IWr(), et = { keyword: "dependentRequired", type: "object", schemaType: "object", error: I.error, code: (e) => I.validatePropertyDeps(e) };
  ie.default = et;
});
var me = x(function(de) {
  Object.defineProperty(de, "__esModule", { value: true });
  var ue = IWr(), rt = { keyword: "dependentSchemas", type: "object", schemaType: "object", code: (e) => ue.validateSchemaDeps(e) };
  de.default = rt;
});
var pe = x(function(fe) {
  Object.defineProperty(fe, "__esModule", { value: true });
  var le = nb(), nt = { keyword: ["maxContains", "minContains"], type: "array", schemaType: "number", code({ keyword: e, parentSchema: r, it: a }) {
    if (r.contains === void 0) le.checkStrictMode(a, `"${e}" without "contains" is ignored`);
  } };
  fe.default = nt;
});
var ye = x(function(he) {
  Object.defineProperty(he, "__esModule", { value: true });
  var st = ce(), it = me(), ct = pe(), ut = [st.default, it.default, ct.default];
  he.default = ut;
});
var ge = x(function($e) {
  Object.defineProperty($e, "__esModule", { value: true });
  var y = Dg(), N = nb(), mt = tAe(), lt = { message: "must NOT have unevaluated properties", params: ({ params: e }) => y._`{unevaluatedProperty: ${e.unevaluatedProperty}}` }, ft = { keyword: "unevaluatedProperties", type: "object", schemaType: ["boolean", "object"], trackErrors: true, error: lt, code(e) {
    let { gen: r, schema: a, data: n, errsCount: o, it: i } = e;
    if (!o) throw Error("ajv implementation error");
    let { allErrors: u, props: m } = i;
    if (m instanceof y.Name) r.if(y._`${m} !== true`, () => r.forIn("key", n, (h) => r.if(f(m, h), () => s(h))));
    else if (m !== true) r.forIn("key", n, (h) => m === void 0 ? s(h) : r.if(g(m, h), () => s(h)));
    i.props = true, e.ok(y._`${o} === ${mt.default.errors}`);
    function s(h) {
      if (a === false) {
        if (e.setParams({ unevaluatedProperty: h }), e.error(), !u) r.break();
        return;
      }
      if (!N.alwaysValidSchema(i, a)) {
        let P = r.name("valid");
        if (e.subschema({ keyword: "unevaluatedProperties", dataProp: h, dataPropType: N.Type.Str }, P), !u) r.if(y.not(P), () => r.break());
      }
    }
    function f(h, P) {
      return y._`!${h} || !${h}[${P}]`;
    }
    function g(h, P) {
      let c = [];
      for (let l in h) if (h[l] === true) c.push(y._`${P} !== ${l}`);
      return y.and(...c);
    }
  } };
  $e.default = ft;
});
var ve = x(function(be) {
  Object.defineProperty(be, "__esModule", { value: true });
  var b = Dg(), C = nb(), ht = { message: ({ params: { len: e } }) => b.str`must NOT have more than ${e} items`, params: ({ params: { len: e } }) => b._`{limit: ${e}}` }, yt = { keyword: "unevaluatedItems", type: "array", schemaType: ["boolean", "object"], error: ht, code(e) {
    let { gen: r, schema: a, data: n, it: o } = e, i = o.items || 0;
    if (i === true) return;
    let u = r.const("len", b._`${n}.length`);
    if (a === false) e.setParams({ len: i }), e.fail(b._`${u} > ${i}`);
    else if (typeof a == "object" && !C.alwaysValidSchema(o, a)) {
      let s = r.var("valid", b._`${u} <= ${i}`);
      r.if(b.not(s), () => m(s, i)), e.ok(s);
    }
    o.items = true;
    function m(s, f) {
      r.forRange("i", f, u, (g) => {
        if (e.subschema({ keyword: "unevaluatedItems", dataProp: g, dataPropType: C.Type.Num }, s), !o.allErrors) r.if(b.not(s), () => r.break());
      });
    }
  } };
  be.default = yt;
});
var je = x(function(_e) {
  Object.defineProperty(_e, "__esModule", { value: true });
  var gt = ge(), bt = ve(), vt = [gt.default, bt.default];
  _e.default = vt;
});
var qe = x(function(Pe) {
  Object.defineProperty(Pe, "__esModule", { value: true });
  var jt = yWo(), Pt = _Wo(), qt = SWo(), At = se(), Rt = ye(), St = je(), wt = bWo(), E = wWo(), Ot = [At.default, jt.default, Pt.default, (0, qt.default)(true), wt.default, E.metadataVocabulary, E.contentVocabulary, Rt.default, St.default];
  Pe.default = Ot;
});
var Ae = x(function(Pr, xt) {
  xt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/schema", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true, "https://json-schema.org/draft/2020-12/vocab/applicator": true, "https://json-schema.org/draft/2020-12/vocab/unevaluated": true, "https://json-schema.org/draft/2020-12/vocab/validation": true, "https://json-schema.org/draft/2020-12/vocab/meta-data": true, "https://json-schema.org/draft/2020-12/vocab/format-annotation": true, "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Core and Validation specifications meta-schema", allOf: [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], type: ["object", "boolean"], $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", properties: { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: true, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: true, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: true }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: true } } };
});
var Re = x(function(qr, Mt) {
  Mt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/applicator", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": true }, $dynamicAnchor: "meta", title: "Applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } } };
});
var Se = x(function(Ar, It) {
  It.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/unevaluated", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": true }, $dynamicAnchor: "meta", title: "Unevaluated applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } } };
});
var we = x(function(Rr, Nt) {
  Nt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/content", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Content vocabulary meta-schema", type: ["object", "boolean"], properties: { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } } };
});
var Oe = x(function(Sr, Ct) {
  Ct.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/core", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true }, $dynamicAnchor: "meta", title: "Core vocabulary meta-schema", type: ["object", "boolean"], properties: { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, $defs: { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } } };
});
var ke = x(function(wr, Et) {
  Et.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/format-annotation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": true }, $dynamicAnchor: "meta", title: "Format vocabulary meta-schema for annotation results", type: ["object", "boolean"], properties: { format: { type: "string" } } };
});
var xe = x(function(Or, Tt) {
  Tt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/meta-data", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": true }, $dynamicAnchor: "meta", title: "Meta-data vocabulary meta-schema", type: ["object", "boolean"], properties: { title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true } } };
});
var Me = x(function(kr, Ft) {
  Ft.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/validation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": true }, $dynamicAnchor: "meta", title: "Validation vocabulary meta-schema", type: ["object", "boolean"], properties: { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, const: true, enum: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, $defs: { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
});
var Ne = x(function(Ie) {
  Object.defineProperty(Ie, "__esModule", { value: true });
  var Vt = Ae(), Dt = Re(), Wt = Se(), Lt = we(), Ht = Oe(), Kt = ke(), Gt = xe(), Ut = Me(), zt = ["/properties"];
  function Xt(e) {
    return [Vt, Dt, Wt, Lt, Ht, r(this, Kt), Gt, r(this, Ut)].forEach((a) => this.addMetaSchema(a, void 0, false)), this;
    function r(a, n) {
      return e ? a.$dataMetaSchema(n, zt) : n;
    }
  }
  Ie.default = Xt;
});
var Ce = x(function(v, D) {
  Object.defineProperty(v, "__esModule", { value: true });
  v.MissingRefError = v.ValidationError = v.CodeGen = v.Name = v.nil = v.stringify = v.str = v._ = v.KeywordCxt = v.Ajv2020 = void 0;
  var Zt = hWo(), Bt = qe(), Jt = EWo(), Qt = Ne(), V = "https://json-schema.org/draft/2020-12/schema";
  class S extends Zt.default {
    constructor(e = {}) {
      super({ ...e, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if (super._addVocabularies(), Bt.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator) this.addKeyword(Jt.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: e, meta: r } = this.opts;
      if (!r) return;
      Qt.default.call(this, e), this.refs["http://json-schema.org/schema"] = V;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(V) ? V : void 0);
    }
  }
  v.Ajv2020 = S;
  D.exports = v = S;
  D.exports.Ajv2020 = S;
  Object.defineProperty(v, "__esModule", { value: true });
  v.default = S;
  var er = zmn();
  Object.defineProperty(v, "KeywordCxt", { enumerable: true, get: function() {
    return er.KeywordCxt;
  } });
  var R = Dg();
  Object.defineProperty(v, "_", { enumerable: true, get: function() {
    return R._;
  } });
  Object.defineProperty(v, "str", { enumerable: true, get: function() {
    return R.str;
  } });
  Object.defineProperty(v, "stringify", { enumerable: true, get: function() {
    return R.stringify;
  } });
  Object.defineProperty(v, "nil", { enumerable: true, get: function() {
    return R.nil;
  } });
  Object.defineProperty(v, "Name", { enumerable: true, get: function() {
    return R.Name;
  } });
  Object.defineProperty(v, "CodeGen", { enumerable: true, get: function() {
    return R.CodeGen;
  } });
  var tr = oJn();
  Object.defineProperty(v, "ValidationError", { enumerable: true, get: function() {
    return tr.default;
  } });
  var rr = Vmn();
  Object.defineProperty(v, "MissingRefError", { enumerable: true, get: function() {
    return rr.default;
  } });
});
var Ee = "https://json-schema.org/draft/2020-12/schema", W = 5, H = /* @__PURE__ */ new WeakMap();
function or(e, { tool: r, feature: a }) {
  if (!mn(e)) return null;
  let n = H.get(e);
  if (n !== void 0) return n;
  if (eAe()) return t(`[${r}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`), H.set(e, null), null;
  let o = null, i = e.$schema;
  if (i === void 0 || i === Ee || i === `${Ee}#`) try {
    let { Ajv2020: u } = Ce();
    o = new u({ allErrors: true, strict: false, validateFormats: false }).compile(e);
  } catch (u) {
    t(`[${r}] input schema not checked: Ajv could not compile it: ${d(u)}`, { level: "warn" });
  }
  else t(`[${r}] input schema not checked: it declares ${_(i)}, and only draft 2020-12 is checked`, { level: "warn" });
  if (o === null) p(a, "input_schema_not_checked");
  return H.set(e, o), o;
}
var sr = /* @__PURE__ */ new Set(["allOf", "anyOf", "contains", "if", "oneOf"]), ir = { array: "a list", boolean: "true or false", integer: "a whole number", number: "a number", object: "an object", string: "text" };
function DUn(e, r, a) {
  let n = or(r, a);
  if (n === null || n(e)) return;
  let o = mn(r) && mn(r.properties) ? Object.keys(r.properties) : [], i = new Set(mn(r) && Array.isArray(r.required) ? r.required : []), { ignoreInside: u } = a, m = (n.errors ?? []).filter((c) => u === void 0 || !c.instancePath.startsWith(`/${u}/`) && !(c.instancePath === `/${u}` && sr.has(c.keyword)));
  if (m.length === 0) return;
  let s = m.flatMap((c) => {
    let l = c.params.additionalProperty;
    return c.keyword === "additionalProperties" && c.instancePath === "" && typeof l === "string" ? [l] : [];
  }), f = new Map(s.map((c) => [c, o.find((l) => cr(c, l))])), g = L([...s.map((c) => {
    let l = f.get(c);
    return `it has no argument ${w7(c)}${l === void 0 ? "" : ` (did you mean ${w7(l)}?)`}`;
  }), ...m.flatMap((c) => {
    let l = _Rs(c.instancePath), j = c.params;
    switch (c.keyword) {
      case "additionalProperties":
        return l === void 0 ? [] : [`${l} has no field ${w7(String(j.additionalProperty))}`];
      case "required": {
        let q = String(j.missingProperty);
        if (l !== void 0) return [`${l} needs the field ${w7(q)}`];
        return [...f.values()].includes(q) ? [] : [`the argument ${w7(q)} is required`];
      }
      case "type": {
        let q = (Array.isArray(j.type) ? j.type : [j.type]).filter((w) => w !== "null");
        return q.length === 0 ? [] : [`${l ?? "the arguments"} must be ${q.map((w) => ir[String(w)] ?? String(w)).join(" or ")}`];
      }
      case "minLength":
        return [j.limit === 1 ? `${l ?? "the arguments"} must not be empty` : `${l ?? "the arguments"} must be at least ${String(j.limit)} characters`];
      case "maxLength":
        return [`${l ?? "the arguments"} must be at most ${String(j.limit)} characters`];
      case "maxItems":
        return [`${l ?? "the arguments"} must have at most ${String(j.limit)} entries`];
      case "enum":
        if (Array.isArray(j.allowedValues)) return [`${l ?? "the arguments"} must be one of ${j.allowedValues.map((q) => _(q)).join(", ")}`];
        break;
    }
    return [`${l ?? "the arguments"} ${c.message ?? "are not valid"}`];
  })]);
  if (g.length === 0) return;
  let h = g.length > W ? `, and ${g.length - W} more` : "", P = o.map((c) => i.has(c) ? `${c} (required)` : c);
  return { listed: `${g.slice(0, W).join("; ")}${h}`, takes: P.length === 0 ? "" : ` ${a.tool} takes ${P.join(", ")}.` };
}
function cr(e, r) {
  let a = e.toLowerCase(), n = r.toLowerCase();
  return a === n || n.endsWith(`_${a}`) || n.startsWith(`${a}_`) || a.endsWith(`_${n}`) || a.startsWith(`${n}_`);
}
import { isAbsolute as ur } from "path";
var uBe = 4096;
function B0t(e, r) {
  let { tool: a, local: n, ref: o, refWord: i, maxFiles: u, nothingDone: m } = r;
  if (!Array.isArray(e)) return K(r);
  if (e.length > u) return { error: `${a} takes at most ${u} files; this call has ${e.length}. ${m}`, code: "too_many_files" };
  let s = [];
  for (let f of e) {
    if (!mn(f)) return K(r);
    if (f[o] !== void 0) return { error: `${a} file entries must give a \`${n}\`; this client uploads the file and fills in the ${i} itself. If these ${i}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${a} again with paths. ${m}`, code: `model_${o}` };
    let g = f[n];
    if (typeof g !== "string" || g === "" || g.length > uBe) return K(r);
    if (!ur(g)) return { error: `Cannot attach "${g}": ${a} file paths must be absolute paths as this session sees them. ${m}`, code: "relative_path" };
    s.push(g);
  }
  return s;
}
function K({ tool: e, arg: r, local: a, nothingDone: n }) {
  return { error: `${e} \`${r}\` must be a list of objects, each with a \`${a}\` of at most ${uBe} characters, such as [{"${a}": "/absolute/path/to/report.csv"}]. ${n}`, code: "bad_entry" };
}
export {
  B0t,
  DUn,
  uBe
};
