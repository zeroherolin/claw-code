// vendor/mcp-sdk/not-in-era.0ynw.js — Claude Code 2.1.310 模块 chunk-0ynwwq2e.js
import { Dtn } from "../../fs/chunk-qvvxpbe1.js";
import { cYe } from "../../fs/same-origin.seyg.js";
import { Htn } from "../../shared/chunk-t8nq64kw.js";
import { TH, iEi } from "../../shared/chunk-fba7zbf4.js";
import { m5, wFe } from "../zod/unrecognized-keys.e5n0.js";
import { ist, d8r, o, tui, Iqe, E, M, sm, BZ, oe, C, u, yt, Fe, Gr, obe, me, B, T, Ea, yT, Oa } from "../zod/string-format.k395.js";
import { EK } from "../../fs/chunk-bhabr0ca.js";
var { create: Rc, defineProperty: ws, getOwnPropertyDescriptor: zc, getOwnPropertyNames: wc, getPrototypeOf: $c } = Object, Ec = Object.prototype.hasOwnProperty, K = (e4, t) => () => (t || e4((t = { exports: {} }).exports, t), t.exports), Pn = (e4, t) => {
  let r = {};
  for (var s in e4) ws(r, s, { get: e4[s], enumerable: true });
  if (t) ws(r, Symbol.toStringTag, { value: "Module" });
  return r;
}, Pc = (e4, t, r, s) => {
  if (t && typeof t === "object" || typeof t === "function") {
    for (var a = wc(t), n = 0, i = a.length, l; n < i; n++) if (l = a[n], !Ec.call(e4, l) && l !== r) ws(e4, l, { get: ((c) => t[c]).bind(null, l), enumerable: !(s = zc(t, l)) || s.enumerable });
  }
  return e4;
}, $s = (e4, t, r) => (r = e4 != null ? Rc($c(e4)) : {}, Pc(t || !e4 || !e4.__esModule ? ws(r, "default", { value: e4, enumerable: true }) : r, e4));
var Ot = "2025-11-25";
var bpt = [Ot, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], mtn = "io.modelcontextprotocol/related-task", xe = "io.modelcontextprotocol/protocolVersion", Nt = "io.modelcontextprotocol/clientInfo", He = "io.modelcontextprotocol/serverInfo", kOe = "io.modelcontextprotocol/clientCapabilities", vr = "io.modelcontextprotocol/subscriptionId", Mt = "io.modelcontextprotocol/logLevel";
var gt = "2.0";
var K1n = -32601;
var Qe = yT(() => Fe([o(), E(), M(), sm(), me(o(), Qe), C(Qe)])), de = me(o(), Qe), Eo = C(Qe), br = Fe([o(), E().int()]), Rr = o(), Es = u({ ttl: E().optional() }), gtn = u({ taskId: o() }), zr = yt({ progressToken: br.optional(), [mtn]: gtn.optional() }), be = u({ _meta: zr.optional() }), _t = be.extend({ task: Es.optional() }), he = u({ method: o(), params: be.loose().optional() }), $e = u({ _meta: zr.optional() }), Ee = u({ method: o(), params: $e.loose().optional() }), wr = yt({ get [He]() {
  return wpt.optional().catch(void 0);
} }), aO = yt({ _meta: wr.optional() }), et = Fe([o(), E().int()]), $r = u({ jsonrpc: T(gt), id: et, ...he.shape }).strict(), Er = u({ jsonrpc: T(gt), ...Ee.shape }).strict(), jt = u({ jsonrpc: T(gt), id: et, result: aO }).strict(), At = u({ jsonrpc: T(gt), id: et.optional(), error: u({ code: E().int(), message: o(), data: oe().optional() }) }).strict(), Yae = Fe([$r, Er, jt, At]), Po = Fe([jt, At]), Pr = aO.strict(), Ps = $e.extend({ requestId: et.optional(), reason: o().optional() }), Tr = Ee.extend({ method: T("notifications/cancelled"), params: Ps }), Ts = u({ src: o(), mimeType: o().optional(), sizes: C(o()).optional(), theme: B(["light", "dark"]).optional() }), tt = u({ icons: C(Ts).optional() }), Ve = u({ name: o(), title: o().optional() }), wpt = Ve.extend({ ...Ve.shape, ...tt.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), kc = obe(u({ applyDefaults: M().optional() }), de), qc = Oa((e4) => {
  if (e4 && typeof e4 === "object" && !Array.isArray(e4) && Object.keys(e4).length === 0) return { form: {} };
  return e4;
}, obe(u({ form: kc.optional(), url: de.optional() }), de.optional())), Cs = yt({ list: de.optional(), cancel: de.optional(), requests: yt({ sampling: yt({ createMessage: de.optional() }).optional(), elicitation: yt({ create: de.optional() }).optional() }).optional() }), ks = yt({ list: de.optional(), cancel: de.optional(), requests: yt({ tools: yt({ call: de.optional() }).optional() }).optional() }), qs = u({ experimental: me(o(), de).optional(), sampling: u({ context: de.optional(), tools: de.optional() }).optional(), elicitation: qc.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: Cs.optional(), extensions: me(o(), de).optional() }), Is = be.extend({ protocolVersion: o(), capabilities: qs, clientInfo: wpt }), Cr = he.extend({ method: T("initialize"), params: Is }), oHt = u({ experimental: me(o(), de).optional(), logging: de.optional(), completions: de.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: ks.optional(), extensions: me(o(), de).optional() }), Ept = aO.extend({ protocolVersion: o(), capabilities: oHt, serverInfo: wpt, instructions: o().optional() }), kr = Ee.extend({ method: T("notifications/initialized"), params: $e.optional() }), Os = he.extend({ method: T("server/discover"), params: be.optional() }), aYe = aO.extend({ supportedVersions: C(o()), capabilities: oHt, instructions: o().optional() }), qr = he.extend({ method: T("ping"), params: be.optional() }), Ns = u({ progress: E(), total: Ea(E()), message: Ea(o()) }), Ms = u({ ...$e.shape, ...Ns.shape, progressToken: br }), Ir = Ee.extend({ method: T("notifications/progress"), params: Ms }), js = be.extend({ cursor: Rr.optional() }), rt = he.extend({ params: js.optional() }), st = aO.extend({ nextCursor: Rr.optional() }), Or = u({ uri: o(), mimeType: Ea(o()), _meta: me(o(), oe()).optional() }), Nr = Or.extend({ text: o() }), To = o().refine((e4) => {
  try {
    return atob(e4), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" }), Mr = Or.extend({ blob: To }), at = B(["user", "assistant"]), Ke = u({ audience: C(at).optional(), priority: E().min(0).max(1).optional(), lastModified: Fe([TH({ offset: true }), TH({ offset: true, precision: -1 })]).optional() }), sHt = u({ ...Ve.shape, ...tt.shape, uri: o(), description: Ea(o()), mimeType: Ea(o()), size: Ea(E()), annotations: Ke.optional(), _meta: Ea(yt({})) }), htn = u({ ...Ve.shape, ...tt.shape, uriTemplate: o(), description: Ea(o()), mimeType: Ea(o()), annotations: Ke.optional(), _meta: Ea(yt({})) }), As = rt.extend({ method: T("resources/list") }), lYe = st.extend({ resources: C(sHt) }), Ls = rt.extend({ method: T("resources/templates/list") }), ytn = st.extend({ resourceTemplates: C(htn) }), Lt = be.extend({ uri: o() }), Us = Lt, Ds = he.extend({ method: T("resources/read"), params: Us }), Vs = aO.extend({ contents: C(Fe([Nr, Mr])) }), xs = Ee.extend({ method: T("notifications/resources/list_changed"), params: $e.optional() }), Fs = Lt, Hs = he.extend({ method: T("resources/subscribe"), params: Fs }), Ks = Lt, Js = he.extend({ method: T("resources/unsubscribe"), params: Ks }), jr = u({ toolsListChanged: M().optional(), promptsListChanged: M().optional(), resourcesListChanged: M().optional(), resourceSubscriptions: C(o()).optional() }), Gs = be.extend({ notifications: jr }), Bs = he.extend({ method: T("subscriptions/listen"), params: Gs }), Ws = $e.extend({ notifications: jr }), Ys = Ee.extend({ method: T("notifications/subscriptions/acknowledged"), params: Ws }), Xs = wr.extend({ [vr]: et }), Zs = aO.extend({ _meta: Xs }), Qs = $e.extend({ uri: o() }), ea = Ee.extend({ method: T("notifications/resources/updated"), params: Qs }), ra = u({ name: o(), description: Ea(o()), required: Ea(M()) }), _tn = u({ ...Ve.shape, ...tt.shape, description: Ea(o()), arguments: Ea(C(ra)), _meta: Ea(yt({})) }), sa = rt.extend({ method: T("prompts/list") }), Stn = st.extend({ prompts: C(_tn) }), aa = be.extend({ name: o(), arguments: me(o(), o()).optional() }), oa = he.extend({ method: T("prompts/get"), params: aa }), Ut = u({ type: T("text"), text: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), Dt = u({ type: T("image"), data: To, mimeType: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), Vt = u({ type: T("audio"), data: To, mimeType: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), na = u({ type: T("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), ia = u({ type: T("resource"), resource: Fe([Nr, Mr]), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), ca = sHt.extend({ type: T("resource_link") }), xt = Fe([Ut, Dt, Vt, ca, ia]), la = u({ role: at, content: xt }), ua = aO.extend({ description: o().optional(), messages: C(la) }), da = Ee.extend({ method: T("notifications/prompts/list_changed"), params: $e.optional() }), ha = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), ma = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }), iHt = u({ ...Ve.shape, ...tt.shape, description: o().optional(), inputSchema: u({ type: T("object"), properties: me(o(), Qe).optional(), required: C(o()).optional() }).catchall(oe()), outputSchema: yt({ $schema: o().optional() }).optional(), annotations: ha.optional(), execution: ma.optional(), _meta: me(o(), oe()).optional() }), pa = rt.extend({ method: T("tools/list") }), dYe = st.extend({ tools: C(iHt) }), Ar = aO.extend({ content: C(xt).default([]), structuredContent: oe().optional(), isError: M().optional() }), btn = Ar.or(aO.extend({ toolResult: oe() })), fa = _t.extend({ name: o(), arguments: me(o(), oe()).optional() }), Sa = he.extend({ method: T("tools/call"), params: fa }), ga = Ee.extend({ method: T("notifications/tools/list_changed"), params: $e.optional() }), Lr = u({ autoRefresh: M().default(true), debounceMs: E().int().nonnegative().default(300) }), Ur = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), _a = be.extend({ level: Ur }), ya = he.extend({ method: T("logging/setLevel"), params: _a }), va = $e.extend({ level: Ur, logger: o().optional(), data: oe() }), ba = Ee.extend({ method: T("notifications/message"), params: va }), Ra = u({ name: o().optional() }), za = u({ hints: C(Ra).optional(), costPriority: E().min(0).max(1).optional(), speedPriority: E().min(0).max(1).optional(), intelligencePriority: E().min(0).max(1).optional() }), wa = u({ mode: B(["auto", "required", "none"]).optional() }), $a = u({ type: T("tool_result"), toolUseId: o().describe("The unique identifier for the corresponding tool call."), content: C(xt), structuredContent: oe().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), Pa = Gr("type", [Ut, Dt, Vt]), St = Gr("type", [Ut, Dt, Vt, na, $a]), Ta = u({ role: at, content: Fe([St, C(St)]), _meta: me(o(), oe()).optional() }), Ca = _t.extend({ messages: C(Ta), modelPreferences: za.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: E().optional(), maxTokens: E().int(), stopSequences: C(o()).optional(), metadata: de.optional(), tools: C(iHt).optional(), toolChoice: wa.optional() }), ka = he.extend({ method: T("sampling/createMessage"), params: Ca }), qa = aO.extend({ model: o(), stopReason: Ea(B(["endTurn", "stopSequence", "maxTokens"]).or(o())), role: at, content: Pa }), Ia = aO.extend({ model: o(), stopReason: Ea(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())), role: at, content: Fe([St, C(St)]) }), Dr = u({ type: T("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), Ft = u({ type: T("string"), title: o().optional(), description: o().optional(), minLength: E().optional(), maxLength: E().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), Ht = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: E().optional(), maximum: E().optional(), default: E().optional() }), Vr = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), default: o().optional() }), xr = u({ type: T("string"), title: o().optional(), description: o().optional(), oneOf: C(u({ const: o(), title: o() })), default: o().optional() }), Fr = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), enumNames: C(o()).optional(), default: o().optional() }), Na = Fe([Vr, xr]), Hr = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ type: T("string"), enum: C(o()) }), default: C(o()).optional() }), Kr = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ anyOf: C(u({ const: o(), title: o() })) }), default: C(o()).optional() }), Ma = Fe([Hr, Kr]), ja = Fe([Fr, Na, Ma]), Jr = Fe([ja, Dr, Ft, Ht]), Kt = _t.extend({ mode: T("form").optional(), message: o(), requestedSchema: u({ type: T("object"), properties: me(o(), Jr), required: C(o()).optional() }).catchall(oe()) }), aHt = _t.extend({ mode: T("url"), message: o(), elicitationId: o(), url: o().url() }), wtn = Fe([Kt, aHt]), Aa = he.extend({ method: T("elicitation/create"), params: wtn }), La = $e.extend({ elicitationId: o() }), Ua = Ee.extend({ method: T("notifications/elicitation/complete"), params: La }), Da = aO.extend({ action: B(["accept", "decline", "cancel"]), content: Oa((e4) => e4 === null ? void 0 : e4, me(o(), Fe([o(), E(), M(), C(o())])).optional()) }), Va = u({ type: T("ref/resource"), uri: o() }), xa = u({ type: T("ref/prompt"), name: o() }), Fa = be.extend({ ref: Fe([xa, Va]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }), Ha = he.extend({ method: T("completion/complete"), params: Fa }), Ka = aO.extend({ completion: yt({ values: C(o()).max(100), total: Ea(E().int()), hasMore: Ea(M()) }) }), Ja = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ga = he.extend({ method: T("roots/list"), params: be.optional() }), Ba = aO.extend({ roots: C(Ja) }), Wa = Ee.extend({ method: T("notifications/roots/list_changed"), params: $e.optional() }), Co = yt({ ttl: E().optional(), pollInterval: E().optional() }), Ya = B(["working", "input_required", "completed", "failed", "cancelled"]), ot = u({ taskId: o(), status: Ya, ttl: Fe([E(), sm()]), createdAt: o(), lastUpdatedAt: o(), pollInterval: Ea(E()), statusMessage: Ea(o()) }), ko = aO.extend({ task: ot }), Xa = $e.merge(ot), qo = Ee.extend({ method: T("notifications/tasks/status"), params: Xa }), Io = he.extend({ method: T("tasks/get"), params: be.extend({ taskId: o() }) }), Oo = aO.merge(ot), No = he.extend({ method: T("tasks/result"), params: be.extend({ taskId: o() }) }), Mo = aO.loose(), jo = rt.extend({ method: T("tasks/list") }), Ao = st.extend({ tasks: C(ot) }), Lo = he.extend({ method: T("tasks/cancel"), params: be.extend({ taskId: o() }) }), Uo = aO.merge(ot), Do = Fe([qr, Cr, Os, Ha, ya, oa, sa, As, Ls, Ds, Hs, Js, Bs, Sa, pa]), Vo = Fe([Tr, Ir, kr, Wa]), xo = Fe([Pr, qa, Ia, Da, Ba]), Fo = Fe([qr, ka, Aa, Ga]), Ho = Fe([Tr, Ir, ba, ea, xs, ga, da, Ys, Ua]), Ko = Fe([Pr, Ept, aYe, Ka, ua, Stn, lYe, ytn, Vs, Ar, dYe, Zs]), ve = Iqe().superRefine((e4, t) => {
  if (!URL.canParse(e4)) return t.addIssue({ code: m5.custom, message: "URL must be parseable", fatal: true }), EK;
}).refine((e4) => {
  let t = new URL(e4);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), Br = yt({ resource: o().url(), authorization_servers: C(ve).optional(), jwks_uri: o().url().optional(), scopes_supported: C(o()).optional(), bearer_methods_supported: C(o()).optional(), resource_signing_alg_values_supported: C(o()).optional(), resource_name: o().optional(), resource_documentation: o().optional(), resource_policy_uri: o().url().optional(), resource_tos_uri: o().url().optional(), tls_client_certificate_bound_access_tokens: M().optional(), authorization_details_types_supported: C(o()).optional(), dpop_signing_alg_values_supported: C(o()).optional(), dpop_bound_access_tokens_required: M().optional() }), vpt = yt({ issuer: o(), authorization_endpoint: ve, token_endpoint: ve, registration_endpoint: ve.optional(), scopes_supported: C(o()).optional(), response_types_supported: C(o()), response_modes_supported: C(o()).optional(), grant_types_supported: C(o()).optional(), token_endpoint_auth_methods_supported: C(o()).optional(), token_endpoint_auth_signing_alg_values_supported: C(o()).optional(), service_documentation: ve.optional(), revocation_endpoint: ve.optional(), revocation_endpoint_auth_methods_supported: C(o()).optional(), revocation_endpoint_auth_signing_alg_values_supported: C(o()).optional(), introspection_endpoint: o().optional(), introspection_endpoint_auth_methods_supported: C(o()).optional(), introspection_endpoint_auth_signing_alg_values_supported: C(o()).optional(), code_challenge_methods_supported: C(o()).optional(), client_id_metadata_document_supported: M().optional(), authorization_response_iss_parameter_supported: M().optional().catch(void 0) }), Za = yt({ issuer: o(), authorization_endpoint: ve, token_endpoint: ve, userinfo_endpoint: ve.optional(), jwks_uri: ve, registration_endpoint: ve.optional(), scopes_supported: C(o()).optional(), response_types_supported: C(o()), response_modes_supported: C(o()).optional(), grant_types_supported: C(o()).optional(), acr_values_supported: C(o()).optional(), subject_types_supported: C(o()), id_token_signing_alg_values_supported: C(o()), id_token_encryption_alg_values_supported: C(o()).optional(), id_token_encryption_enc_values_supported: C(o()).optional(), userinfo_signing_alg_values_supported: C(o()).optional(), userinfo_encryption_alg_values_supported: C(o()).optional(), userinfo_encryption_enc_values_supported: C(o()).optional(), request_object_signing_alg_values_supported: C(o()).optional(), request_object_encryption_alg_values_supported: C(o()).optional(), request_object_encryption_enc_values_supported: C(o()).optional(), token_endpoint_auth_methods_supported: C(o()).optional(), token_endpoint_auth_signing_alg_values_supported: C(o()).optional(), display_values_supported: C(o()).optional(), claim_types_supported: C(o()).optional(), claims_supported: C(o()).optional(), service_documentation: o().optional(), claims_locales_supported: C(o()).optional(), ui_locales_supported: C(o()).optional(), claims_parameter_supported: M().optional(), request_parameter_supported: M().optional(), request_uri_parameter_supported: M().optional(), require_request_uri_registration: M().optional(), op_policy_uri: ve.optional(), op_tos_uri: ve.optional(), client_id_metadata_document_supported: M().optional(), authorization_response_iss_parameter_supported: M().optional().catch(void 0) }), lHt = u({ ...Za.shape, ...vpt.pick({ code_challenge_methods_supported: true }).shape }), dHt = u({ access_token: o(), id_token: o().optional(), token_type: o(), expires_in: wFe().optional(), scope: o().optional(), refresh_token: o().optional() }).strip(), Qa = u({ issued_token_type: T("urn:ietf:params:oauth:token-type:id-jag"), access_token: o(), token_type: o().optional(), expires_in: E().optional(), scope: o().optional() }).strip(), cHt = u({ error: o(), error_description: o().optional(), error_uri: o().optional() }), $o = ve.optional().or(T("").transform(() => {
  return;
})), eo = u({ redirect_uris: C(ve), token_endpoint_auth_method: o().optional(), grant_types: C(o()).optional(), response_types: C(o()).optional(), application_type: o().optional(), client_name: o().optional(), client_uri: ve.optional(), logo_uri: $o, scope: o().optional(), contacts: C(o()).optional(), tos_uri: $o, policy_uri: o().optional(), jwks_uri: ve.optional(), jwks: BZ().optional(), software_id: o().optional(), software_version: o().optional(), software_statement: o().optional() }).strip(), to = u({ client_id: o(), client_secret: o().optional(), client_id_issued_at: E().optional(), client_secret_expires_at: E().optional() }).strip(), Wr = eo.merge(to), Jo = u({ error: o(), error_description: o().optional() }).strip(), Go = u({ token: o(), token_type_hint: o().optional() }).strip();
var Zo = Symbol.for("mcp.sdk.errorBrands");
function bt(e4, t) {
  let r = /* @__PURE__ */ new Set(), s = t;
  while (typeof s === "function") {
    let a = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof a === "string") r.add(a);
    s = Object.getPrototypeOf(s);
  }
  if (r.size === 0) return;
  Object.defineProperty(e4, Zo, { value: r, enumerable: false, configurable: true });
}
function Ie(e4, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e4, "mcpBrand") && typeof e4.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, Zo)) {
      let r = t[Zo];
      if (r && typeof r.has === "function" && r.has(e4.mcpBrand)) return true;
    }
  } catch {
  }
  return Function.prototype[Symbol.hasInstance].call(e4, t);
}
var Xae = (function(e4) {
  return e4.InvalidRequest = "invalid_request", e4.InvalidClient = "invalid_client", e4.InvalidGrant = "invalid_grant", e4.UnauthorizedClient = "unauthorized_client", e4.UnsupportedGrantType = "unsupported_grant_type", e4.InvalidScope = "invalid_scope", e4.AccessDenied = "access_denied", e4.ServerError = "server_error", e4.TemporarilyUnavailable = "temporarily_unavailable", e4.UnsupportedResponseType = "unsupported_response_type", e4.UnsupportedTokenType = "unsupported_token_type", e4.InvalidToken = "invalid_token", e4.MethodNotAllowed = "method_not_allowed", e4.TooManyRequests = "too_many_requests", e4.InvalidClientMetadata = "invalid_client_metadata", e4.InvalidRedirectUri = "invalid_redirect_uri", e4.InsufficientScope = "insufficient_scope", e4.InvalidTarget = "invalid_target", e4;
})({}), Pq = class e extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
  }
  static [Symbol.hasInstance](t) {
    return Ie(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, t);
  }
  constructor(t, r, s) {
    super(r);
    this.code = t, this.errorUri = s, this.name = "OAuthError", bt(this, new.target);
  }
  toResponseObject() {
    let t = { error: this.code, error_description: this.message };
    if (this.errorUri) t.error_uri = this.errorUri;
    return t;
  }
  static fromResponse(t) {
    return new e(t.error, t.error_description ?? t.error, t.error_uri);
  }
}, ii = (function(e4) {
  return e4.NotConnected = "NOT_CONNECTED", e4.AlreadyConnected = "ALREADY_CONNECTED", e4.NotInitialized = "NOT_INITIALIZED", e4.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED", e4.RequestTimeout = "REQUEST_TIMEOUT", e4.ConnectionClosed = "CONNECTION_CLOSED", e4.SendFailed = "SEND_FAILED", e4.InvalidResult = "INVALID_RESULT", e4.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE", e4.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED", e4.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED", e4.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", e4.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED", e4.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED", e4.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION", e4.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN", e4.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT", e4.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", e4.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION", e4;
})({}), Si = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ie(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, e4);
  }
  constructor(e4, t, r) {
    super(t);
    this.code = e4, this.data = r, this.name = "SdkError", bt(this, new.target);
  }
}, IC = class extends Si {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
  }
  constructor(e4, t, r) {
    super(e4, t, r);
    this.name = "SdkHttpError";
  }
  get status() {
    return this.data.status;
  }
  get statusText() {
    return this.data.statusText;
  }
};
function Jn(e4) {
  let t = typeof e4 === "string" ? new URL(e4) : new URL(e4.href);
  return t.hash = "", t;
}
function Gn({ requestedResource: e4, configuredResource: t }) {
  let r = typeof e4 === "string" ? new URL(e4) : new URL(e4.href), s = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== s.origin) return false;
  if (r.pathname.length < s.pathname.length) return false;
  let a = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", n = s.pathname.endsWith("/") ? s.pathname : s.pathname + "/";
  return a.startsWith(n);
}
var Bn = "2026-07-28", sn = [Bn];
function Ge(e4) {
  return e4 >= Bn;
}
function an(e4) {
  return e4.filter((t) => !Ge(t));
}
function rs(e4) {
  return e4.filter((t) => Ge(t));
}
function Wn(e4) {
  let t = e4.structuredContent;
  if (t === void 0) return e4;
  if (!(typeof t !== "object" || t === null || Array.isArray(t))) return e4;
  if (e4.content?.some((r) => r.type === "text") ?? false) return e4;
  return { ...e4, content: [...e4.content ?? [], { type: "text", text: JSON.stringify(t) }] };
}
var Yn = ["task", "inputRequests", "requestState"];
function Ic(e4) {
  if (e4 === null || typeof e4 !== "object" || Array.isArray(e4) || e4.content !== void 0 || Yn.some((t) => t in e4)) return e4;
  return { ...e4, content: [] };
}
function Oc() {
  let e4 = yT(() => Fe([o(), E(), M(), sm(), me(o(), e4), C(e4)])), t = me(o(), e4), r = Fe([o(), E().int()]), s = o(), a = u({ ttl: E().optional() }), n = u({ taskId: o() }), i = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": n.optional() }), l = u({ _meta: i.optional() }), c = l.extend({ task: a.optional() }), d = u({ method: o(), params: l.loose().optional() }), m = u({ _meta: i.optional() }), _ = u({ method: o(), params: m.loose().optional() }), w = yt({ _meta: i.optional() }), P = Fe([o(), E().int()]), y = w.strict(), v = m.extend({ requestId: P.optional(), reason: o().optional() }), p = _.extend({ method: T("notifications/cancelled"), params: v }), h = u({ src: o(), mimeType: o().optional(), sizes: C(o()).optional(), theme: B(["light", "dark"]).optional() }), g = u({ icons: C(h).optional() }), f = u({ name: o(), title: o().optional() }), R = f.extend({ ...f.shape, ...g.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), k = obe(u({ applyDefaults: M().optional() }), t), b = Oa((we) => {
    if (we && typeof we === "object" && !Array.isArray(we) && Object.keys(we).length === 0) return { form: {} };
    return we;
  }, obe(u({ form: k.optional(), url: t.optional() }), t.optional())), S = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ sampling: yt({ createMessage: t.optional() }).optional(), elicitation: yt({ create: t.optional() }).optional() }).optional() }), q = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional() }), L = u({ experimental: me(o(), t).optional(), sampling: u({ context: t.optional(), tools: t.optional() }).optional(), elicitation: b.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: S.optional(), extensions: me(o(), t).optional() }), H = l.extend({ protocolVersion: o(), capabilities: L, clientInfo: R }), j = d.extend({ method: T("initialize"), params: H }), x = u({ experimental: me(o(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: q.optional(), extensions: me(o(), t).optional() }), W = w.extend({ protocolVersion: o(), capabilities: x, serverInfo: R, instructions: o().optional() }), G = _.extend({ method: T("notifications/initialized"), params: m.optional() }), se = d.extend({ method: T("ping"), params: l.optional() }), le = u({ progress: E(), total: Ea(E()), message: Ea(o()) }), ie = u({ ...m.shape, ...le.shape, progressToken: r }), Se = _.extend({ method: T("notifications/progress"), params: ie }), ae = l.extend({ cursor: s.optional() }), N = d.extend({ params: ae.optional() }), U = w.extend({ nextCursor: s.optional() }), F = u({ uri: o(), mimeType: Ea(o()), _meta: me(o(), oe()).optional() }), z = F.extend({ text: o() }), O = o().refine((we) => {
    try {
      return atob(we), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), A = F.extend({ blob: O }), J = B(["user", "assistant"]), Y = u({ audience: C(J).optional(), priority: E().min(0).max(1).optional(), lastModified: Fe([TH({ offset: true }), TH({ offset: true, precision: -1 })]).optional() }), re = u({ ...f.shape, ...g.shape, uri: o(), description: Ea(o()), mimeType: Ea(o()), size: Ea(E()), annotations: Y.optional(), _meta: Ea(yt({})) }), Q = u({ ...f.shape, ...g.shape, uriTemplate: o(), description: Ea(o()), mimeType: Ea(o()), annotations: Y.optional(), _meta: Ea(yt({})) }), ce = N.extend({ method: T("resources/list") }), Pe = U.extend({ resources: C(re) }), I = N.extend({ method: T("resources/templates/list") }), D = U.extend({ resourceTemplates: C(Q) }), V = l.extend({ uri: o() }), X = V, Z = d.extend({ method: T("resources/read"), params: X }), ee = w.extend({ contents: C(Fe([z, A])) }), pe = _.extend({ method: T("notifications/resources/list_changed"), params: m.optional() }), _e = V, Re = d.extend({ method: T("resources/subscribe"), params: _e }), ge = V, ue = d.extend({ method: T("resources/unsubscribe"), params: ge }), Oe = m.extend({ uri: o() }), ye = _.extend({ method: T("notifications/resources/updated"), params: Oe }), Ue = u({ name: o(), description: Ea(o()), required: Ea(M()) }), Me = u({ ...f.shape, ...g.shape, description: Ea(o()), arguments: Ea(C(Ue)), _meta: Ea(yt({})) }), De = N.extend({ method: T("prompts/list") }), Be = U.extend({ prompts: C(Me) }), We = l.extend({ name: o(), arguments: me(o(), o()).optional() }), nt = d.extend({ method: T("prompts/get"), params: We }), it = u({ type: T("text"), text: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), ct = u({ type: T("image"), data: O, mimeType: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), lt = u({ type: T("audio"), data: O, mimeType: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), Gt = u({ type: T("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), Ye = u({ type: T("resource"), resource: Fe([z, A]), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), Bt = re.extend({ type: T("resource_link") }), Ne = Fe([it, ct, lt, Bt, Ye]), Rt = u({ role: J, content: Ne }), zt = w.extend({ description: o().optional(), messages: C(Rt) }), ut = _.extend({ method: T("notifications/prompts/list_changed"), params: m.optional() }), Wt = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), wt = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }), dt = u({ ...f.shape, ...g.shape, description: o().optional(), inputSchema: u({ type: T("object"), properties: me(o(), e4).optional(), required: C(o()).optional() }).catchall(oe()), outputSchema: u({ type: T("object"), properties: me(o(), e4).optional(), required: C(o()).optional() }).catchall(oe()).optional(), annotations: Wt.optional(), execution: wt.optional(), _meta: me(o(), oe()).optional() }), $t = N.extend({ method: T("tools/list") }), Et = U.extend({ tools: C(dt) }), Pt = w.extend({ content: C(Ne), structuredContent: me(o(), oe()).optional(), isError: M().optional() }), ze = c.extend({ name: o(), arguments: me(o(), oe()).optional() }), Yt = d.extend({ method: T("tools/call"), params: ze }), is = _.extend({ method: T("notifications/tools/list_changed"), params: m.optional() }), Tt = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Xt = l.extend({ level: Tt }), Zt = d.extend({ method: T("logging/setLevel"), params: Xt }), Qt = m.extend({ level: Tt, logger: o().optional(), data: oe() }), er = _.extend({ method: T("notifications/message"), params: Qt }), tr = u({ name: o().optional() }), rr = u({ hints: C(tr).optional(), costPriority: E().min(0).max(1).optional(), speedPriority: E().min(0).max(1).optional(), intelligencePriority: E().min(0).max(1).optional() }), sr = u({ mode: B(["auto", "required", "none"]).optional() }), cs = u({ type: T("tool_result"), toolUseId: o().describe("The unique identifier for the corresponding tool call."), content: C(Ne), structuredContent: u({}).loose().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), ar = Gr("type", [it, ct, lt]), Xe = Gr("type", [it, ct, lt, Gt, cs]), or = u({ role: J, content: Fe([Xe, C(Xe)]), _meta: me(o(), oe()).optional() }), nr = c.extend({ messages: C(or), modelPreferences: rr.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: E().optional(), maxTokens: E().int(), stopSequences: C(o()).optional(), metadata: t.optional(), tools: C(dt).optional(), toolChoice: sr.optional() }), ir = d.extend({ method: T("sampling/createMessage"), params: nr }), cr = w.extend({ model: o(), stopReason: Ea(B(["endTurn", "stopSequence", "maxTokens"]).or(o())), role: J, content: ar }), lr = w.extend({ model: o(), stopReason: Ea(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())), role: J, content: Fe([Xe, C(Xe)]) }), ur = u({ type: T("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), dr = u({ type: T("string"), title: o().optional(), description: o().optional(), minLength: E().optional(), maxLength: E().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), hr = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: E().optional(), maximum: E().optional(), default: E().optional() }), mr = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), default: o().optional() }), pr = u({ type: T("string"), title: o().optional(), description: o().optional(), oneOf: C(u({ const: o(), title: o() })), default: o().optional() }), fr = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), enumNames: C(o()).optional(), default: o().optional() }), Sr = Fe([mr, pr]), ht = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ type: T("string"), enum: C(o()) }), default: C(o()).optional() }), mt = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ anyOf: C(u({ const: o(), title: o() })) }), default: C(o()).optional() }), ls = Fe([ht, mt]), us = Fe([fr, Sr, ls]), ke = Fe([us, ur, dr, hr]), qe = c.extend({ mode: T("form").optional(), message: o(), requestedSchema: u({ type: T("object"), properties: me(o(), ke), required: C(o()).optional() }).catchall(oe()) }), gr = c.extend({ mode: T("url"), message: o(), elicitationId: o(), url: o().url() }), je = Fe([qe, gr]), ds = d.extend({ method: T("elicitation/create"), params: je }), hs = m.extend({ elicitationId: o() }), ms = _.extend({ method: T("notifications/elicitation/complete"), params: hs }), ps = w.extend({ action: B(["accept", "decline", "cancel"]), content: Oa((we) => we === null ? void 0 : we, me(o(), Fe([o(), E(), M(), C(o())])).optional()) }), fs = u({ type: T("ref/resource"), uri: o() }), Ss = u({ type: T("ref/prompt"), name: o() }), gs = l.extend({ ref: Fe([Ss, fs]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }), _r = d.extend({ method: T("completion/complete"), params: gs }), _s = w.extend({ completion: yt({ values: C(o()).max(100), total: Ea(E().int()), hasMore: Ea(M()) }) }), ys = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ct = d.extend({ method: T("roots/list"), params: l.optional() }), yr = w.extend({ roots: C(ys) }), vs = _.extend({ method: T("notifications/roots/list_changed"), params: m.optional() }), bs = yt({ ttl: E().optional(), pollInterval: E().optional() }), Rs = B(["working", "input_required", "completed", "failed", "cancelled"]), Ze = u({ taskId: o(), status: Rs, ttl: Fe([E(), sm()]), createdAt: o(), lastUpdatedAt: o(), pollInterval: Ea(E()), statusMessage: Ea(o()) }), Te = w.extend({ task: Ze }), zs = m.merge(Ze), pt = _.extend({ method: T("notifications/tasks/status"), params: zs }), kt = d.extend({ method: T("tasks/get"), params: l.extend({ taskId: o() }) }), qt = w.merge(Ze), It = d.extend({ method: T("tasks/result"), params: l.extend({ taskId: o() }) }), wo = w.loose(), Ce = N.extend({ method: T("tasks/list") }), fe = U.extend({ tasks: C(Ze) }), ft = d.extend({ method: T("tasks/cancel"), params: l.extend({ taskId: o() }) });
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, TaskMetadataSchema: a, RelatedTaskMetadataSchema: n, RequestMetaSchema: i, BaseRequestParamsSchema: l, TaskAugmentedRequestParamsSchema: c, RequestSchema: d, NotificationsParamsSchema: m, NotificationSchema: _, ResultSchema: w, RequestIdSchema: P, EmptyResultSchema: y, CancelledNotificationParamsSchema: v, CancelledNotificationSchema: p, IconSchema: h, IconsSchema: g, BaseMetadataSchema: f, ImplementationSchema: R, ClientTasksCapabilitySchema: S, ServerTasksCapabilitySchema: q, ClientCapabilitiesSchema: L, InitializeRequestParamsSchema: H, InitializeRequestSchema: j, ServerCapabilitiesSchema: x, InitializeResultSchema: W, InitializedNotificationSchema: G, PingRequestSchema: se, ProgressSchema: le, ProgressNotificationParamsSchema: ie, ProgressNotificationSchema: Se, PaginatedRequestParamsSchema: ae, PaginatedRequestSchema: N, PaginatedResultSchema: U, ResourceContentsSchema: F, TextResourceContentsSchema: z, BlobResourceContentsSchema: A, RoleSchema: J, AnnotationsSchema: Y, ResourceSchema: re, ResourceTemplateSchema: Q, ListResourcesRequestSchema: ce, ListResourcesResultSchema: Pe, ListResourceTemplatesRequestSchema: I, ListResourceTemplatesResultSchema: D, ResourceRequestParamsSchema: V, ReadResourceRequestParamsSchema: X, ReadResourceRequestSchema: Z, ReadResourceResultSchema: ee, ResourceListChangedNotificationSchema: pe, SubscribeRequestParamsSchema: _e, SubscribeRequestSchema: Re, UnsubscribeRequestParamsSchema: ge, UnsubscribeRequestSchema: ue, ResourceUpdatedNotificationParamsSchema: Oe, ResourceUpdatedNotificationSchema: ye, PromptArgumentSchema: Ue, PromptSchema: Me, ListPromptsRequestSchema: De, ListPromptsResultSchema: Be, GetPromptRequestParamsSchema: We, GetPromptRequestSchema: nt, TextContentSchema: it, ImageContentSchema: ct, AudioContentSchema: lt, ToolUseContentSchema: Gt, EmbeddedResourceSchema: Ye, ResourceLinkSchema: Bt, ContentBlockSchema: Ne, PromptMessageSchema: Rt, GetPromptResultSchema: zt, PromptListChangedNotificationSchema: ut, ToolAnnotationsSchema: Wt, ToolExecutionSchema: wt, ToolSchema: dt, ListToolsRequestSchema: $t, ListToolsResultSchema: Et, CallToolResultSchema: Pt, CallToolRequestParamsSchema: ze, CallToolRequestSchema: Yt, ToolListChangedNotificationSchema: is, LoggingLevelSchema: Tt, SetLevelRequestParamsSchema: Xt, SetLevelRequestSchema: Zt, LoggingMessageNotificationParamsSchema: Qt, LoggingMessageNotificationSchema: er, ModelHintSchema: tr, ModelPreferencesSchema: rr, ToolChoiceSchema: sr, ToolResultContentSchema: cs, SamplingContentSchema: ar, SamplingMessageContentBlockSchema: Xe, SamplingMessageSchema: or, CreateMessageRequestParamsSchema: nr, CreateMessageRequestSchema: ir, CreateMessageResultSchema: cr, CreateMessageResultWithToolsSchema: lr, BooleanSchemaSchema: ur, StringSchemaSchema: dr, NumberSchemaSchema: hr, UntitledSingleSelectEnumSchemaSchema: mr, TitledSingleSelectEnumSchemaSchema: pr, LegacyTitledEnumSchemaSchema: fr, SingleSelectEnumSchemaSchema: Sr, UntitledMultiSelectEnumSchemaSchema: ht, TitledMultiSelectEnumSchemaSchema: mt, MultiSelectEnumSchemaSchema: ls, EnumSchemaSchema: us, PrimitiveSchemaDefinitionSchema: ke, ElicitRequestFormParamsSchema: qe, ElicitRequestURLParamsSchema: gr, ElicitRequestParamsSchema: je, ElicitRequestSchema: ds, ElicitationCompleteNotificationParamsSchema: hs, ElicitationCompleteNotificationSchema: ms, ElicitResultSchema: ps, ResourceTemplateReferenceSchema: fs, PromptReferenceSchema: Ss, CompleteRequestParamsSchema: gs, CompleteRequestSchema: _r, CompleteResultSchema: _s, RootSchema: ys, ListRootsRequestSchema: Ct, ListRootsResultSchema: yr, RootsListChangedNotificationSchema: vs, TaskCreationParamsSchema: bs, TaskStatusSchema: Rs, TaskSchema: Ze, CreateTaskResultSchema: Te, TaskStatusNotificationParamsSchema: zs, TaskStatusNotificationSchema: pt, GetTaskRequestSchema: kt, GetTaskResultSchema: qt, GetTaskPayloadRequestSchema: It, GetTaskPayloadResultSchema: wo, ListTasksRequestSchema: Ce, ListTasksResultSchema: fe, CancelTaskRequestSchema: ft, CancelTaskResultSchema: w.merge(Ze), ClientRequestSchema: Fe([se, j, _r, Zt, nt, De, ce, I, Z, Re, ue, Yt, $t, kt, It, Ce, ft]), ClientNotificationSchema: Fe([p, Se, G, vs, pt]), ClientResultSchema: Fe([y, cr, lr, ps, yr, qt, fe, Te]), ServerRequestSchema: Fe([se, ir, ds, Ct, kt, It, Ce, ft]), ServerNotificationSchema: Fe([p, Se, er, ye, pe, is, ut, pt, ms]), ServerResultSchema: Fe([y, W, _s, zt, Be, Pe, D, ee, Pt, Et, qt, fe, Te]), CallToolResultWireSchema: oe().superRefine((we, bc) => {
    if (typeof we !== "object" || we === null || Array.isArray(we) || we.content !== void 0) return;
    for (let En of Yn) if (En in we) {
      bc.addIssue({ code: "custom", message: `content is required when the body carries '${En}' — another result family cannot default into an empty tools/call success` });
      return;
    }
  }).transform(Ic).pipe(Pt) };
}
var Nc;
function Xn() {
  return Nc ??= Oc();
}
function Zn(e4) {
  return e4.type !== "object";
}
var Mc = /* @__PURE__ */ new Set(["const", "enum", "default", "examples"]), jc = /* @__PURE__ */ new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function Ac(e4) {
  let t = typeof e4.$schema === "string" ? e4.$schema : void 0;
  if (e4.$id !== void 0) return { ...t !== void 0 && { $schema: t }, type: "object", properties: { result: e4 }, required: ["result"] };
  let r = (s, a) => {
    if (Array.isArray(s)) return s.map((i) => r(i, false));
    if (s === null || typeof s !== "object") return s;
    if (!a && s.$id !== void 0) return s;
    let n = {};
    for (let [i, l] of Object.entries(s)) if (a) n[i] = r(l, false);
    else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string") n[i] = l === "#" ? "#/properties/result" : l.startsWith("#/") ? `#/properties/result${l.slice(1)}` : l;
    else if (Mc.has(i)) n[i] = l;
    else if (jc.has(i)) n[i] = r(l, true);
    else n[i] = r(l, false);
    return n;
  };
  return { ...t !== void 0 && { $schema: t }, type: "object", properties: { result: r(e4, false) }, required: ["result"] };
}
var Qn = { ping: null, initialize: null, "completion/complete": null, "logging/setLevel": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "resources/subscribe": null, "resources/unsubscribe": null, "tools/call": null, "tools/list": null, "tasks/get": null, "tasks/result": null, "tasks/list": null, "tasks/cancel": null, "sampling/createMessage": null, "elicitation/create": null, "roots/list": null }, ei = { "notifications/cancelled": null, "notifications/progress": null, "notifications/initialized": null, "notifications/roots/list_changed": null, "notifications/tasks/status": null, "notifications/message": null, "notifications/resources/updated": null, "notifications/resources/list_changed": null, "notifications/tools/list_changed": null, "notifications/prompts/list_changed": null, "notifications/elicitation/complete": null }, Lc = { ping: null, initialize: null, "completion/complete": null, "logging/setLevel": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "resources/subscribe": null, "resources/unsubscribe": null, "tools/call": null, "tools/list": null, "sampling/createMessage": null, "elicitation/create": null, "roots/list": null }, ro;
function on() {
  if (ro) return ro;
  let e4 = Xn();
  return ro = { requestSchemas: { ping: e4.PingRequestSchema, initialize: e4.InitializeRequestSchema, "completion/complete": e4.CompleteRequestSchema, "logging/setLevel": e4.SetLevelRequestSchema, "prompts/get": e4.GetPromptRequestSchema, "prompts/list": e4.ListPromptsRequestSchema, "resources/list": e4.ListResourcesRequestSchema, "resources/templates/list": e4.ListResourceTemplatesRequestSchema, "resources/read": e4.ReadResourceRequestSchema, "resources/subscribe": e4.SubscribeRequestSchema, "resources/unsubscribe": e4.UnsubscribeRequestSchema, "tools/call": e4.CallToolRequestSchema, "tools/list": e4.ListToolsRequestSchema, "tasks/get": e4.GetTaskRequestSchema, "tasks/result": e4.GetTaskPayloadRequestSchema, "tasks/list": e4.ListTasksRequestSchema, "tasks/cancel": e4.CancelTaskRequestSchema, "sampling/createMessage": e4.CreateMessageRequestSchema, "elicitation/create": e4.ElicitRequestSchema, "roots/list": e4.ListRootsRequestSchema }, notificationSchemas: { "notifications/cancelled": e4.CancelledNotificationSchema, "notifications/progress": e4.ProgressNotificationSchema, "notifications/initialized": e4.InitializedNotificationSchema, "notifications/roots/list_changed": e4.RootsListChangedNotificationSchema, "notifications/tasks/status": e4.TaskStatusNotificationSchema, "notifications/message": e4.LoggingMessageNotificationSchema, "notifications/resources/updated": e4.ResourceUpdatedNotificationSchema, "notifications/resources/list_changed": e4.ResourceListChangedNotificationSchema, "notifications/tools/list_changed": e4.ToolListChangedNotificationSchema, "notifications/prompts/list_changed": e4.PromptListChangedNotificationSchema, "notifications/elicitation/complete": e4.ElicitationCompleteNotificationSchema }, resultSchemas: { ping: e4.EmptyResultSchema, initialize: e4.InitializeResultSchema, "completion/complete": e4.CompleteResultSchema, "logging/setLevel": e4.EmptyResultSchema, "prompts/get": e4.GetPromptResultSchema, "prompts/list": e4.ListPromptsResultSchema, "resources/list": e4.ListResourcesResultSchema, "resources/templates/list": e4.ListResourceTemplatesResultSchema, "resources/read": e4.ReadResourceResultSchema, "resources/subscribe": e4.EmptyResultSchema, "resources/unsubscribe": e4.EmptyResultSchema, "tools/call": e4.CallToolResultWireSchema, "tools/list": e4.ListToolsResultSchema, "sampling/createMessage": e4.CreateMessageResultWithToolsSchema, "elicitation/create": e4.ElicitResultSchema, "roots/list": e4.ListRootsResultSchema } }, ro;
}
function ti(e4) {
  return Object.prototype.hasOwnProperty.call(Qn, e4);
}
function ri(e4) {
  return Object.prototype.hasOwnProperty.call(ei, e4);
}
function Uc(e4) {
  return Object.prototype.hasOwnProperty.call(Lc, e4);
}
function Dc(e4) {
  return Uc(e4) ? on().resultSchemas[e4] : void 0;
}
function Vc(e4) {
  return ti(e4) ? on().requestSchemas[e4] : void 0;
}
function xc(e4) {
  return ri(e4) ? on().notificationSchemas[e4] : void 0;
}
var Eh = Object.keys(Qn), Ph = Object.keys(ei);
function Qo(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function so(e4, t) {
  if (e4 === void 0) return { ok: false, reason: "not-in-era" };
  let r = e4.safeParse(t);
  return r.success ? { ok: true, value: r.data } : { ok: false, reason: "invalid", message: String(r.error) };
}
var jn = { ok: false, reason: "not-in-era" };
function An(e4) {
  return Qo(e4) && Qo(e4.outputSchema) && Zn(e4.outputSchema);
}
function Ln(e4) {
  return e4;
}
var nn = { era: "2025-11-25", hasRequestMethod: ti, hasNotificationMethod: ri, validateRequest: (e4, t) => so(Vc(e4), t), validateResult: (e4, t) => so(Dc(e4), t), validateNotification: (e4, t) => so(xc(e4), t), hasInputRequestMethod: () => false, validateInputRequest: () => jn, validateInputResponse: () => jn, samplingResultVariant: (e4, t) => {
  let r = Xn();
  return so(e4 ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
}, outboundEnvelope: (e4) => {
  return;
}, validateEnvelopeMeta: (e4) => [], projectCallToolResult(e4, t) {
  let r = Wn(e4), s = r.structuredContent;
  if (s === void 0) return r;
  let a = typeof s !== "object" || s === null || Array.isArray(s), n = t !== void 0 && Zn(t);
  if (!a && !n) return r;
  return { ...r, structuredContent: { result: s } };
}, decodeResult(e4, t) {
  if (Qo(t) && "resultType" in t) {
    let r = { ...t };
    return delete r.resultType, { kind: "complete", result: Ln(r) };
  }
  return { kind: "complete", result: Ln(t) };
}, encodeResult(e4, t) {
  if (e4 !== "tools/list") return t;
  let r = t.tools;
  if (!Array.isArray(r) || !r.some((s) => An(s))) return t;
  return { ...t, tools: r.map((s) => An(s) ? { ...s, outputSchema: Ac(s.outputSchema) } : s) };
}, encodeErrorCode: (e4) => e4 === -32002 ? -32602 : e4, checkInboundEnvelope: (e4) => {
  return;
} };
function Fc() {
  let e4 = yT(() => Fe([o(), E(), M(), sm(), me(o(), e4), C(e4)])), t = me(o(), e4), r = Fe([o(), E().int()]), s = o(), a = Fe([o(), E().int()]), n = B(["user", "assistant"]), i = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), l = o().refine((fe) => {
    try {
      return atob(fe), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), c = u({ ttl: E().optional() }), d = u({ taskId: o() }), m = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": d.optional() }), _ = u({ _meta: m.optional() }), w = _.extend({ task: c.optional() }), P = u({ _meta: m.optional() }), y = u({ method: o(), params: P.loose().optional() }), v = u({ src: o(), mimeType: o().optional(), sizes: C(o()).optional(), theme: B(["light", "dark"]).optional() }), p = u({ icons: C(v).optional() }), h = u({ name: o(), title: o().optional() }), g = h.extend({ ...h.shape, ...p.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), f = obe(u({ applyDefaults: M().optional() }), t), R = Oa((fe) => {
    if (fe && typeof fe === "object" && !Array.isArray(fe) && Object.keys(fe).length === 0) return { form: {} };
    return fe;
  }, obe(u({ form: f.optional(), url: t.optional() }), t.optional())), k = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ sampling: yt({ createMessage: t.optional() }).optional(), elicitation: yt({ create: t.optional() }).optional() }).optional() }), b = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional() }), S = u({ experimental: me(o(), t).optional(), sampling: u({ context: t.optional(), tools: t.optional() }).optional(), elicitation: R.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: k.optional(), extensions: me(o(), t).optional() }), q = u({ experimental: me(o(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: b.optional(), extensions: me(o(), t).optional() }), L = u({ progress: E(), total: Ea(E()), message: Ea(o()) }), H = u({ ...P.shape, ...L.shape, progressToken: r }), j = y.extend({ method: T("notifications/progress"), params: H }), x = P.extend({ level: i, logger: o().optional(), data: oe() }), W = y.extend({ method: T("notifications/message"), params: x }), G = u({ uri: o(), mimeType: Ea(o()), _meta: me(o(), oe()).optional() }), se = G.extend({ text: o() }), le = G.extend({ blob: l }), ie = u({ audience: C(n).optional(), priority: E().min(0).max(1).optional(), lastModified: Fe([TH({ offset: true }), TH({ offset: true, precision: -1 })]).optional() }), Se = u({ ...h.shape, ...p.shape, uri: o(), description: Ea(o()), mimeType: Ea(o()), size: Ea(E()), annotations: ie.optional(), _meta: Ea(yt({})) }), ae = u({ ...h.shape, ...p.shape, uriTemplate: o(), description: Ea(o()), mimeType: Ea(o()), annotations: ie.optional(), _meta: Ea(yt({})) }), N = y.extend({ method: T("notifications/resources/list_changed"), params: P.optional() }), U = P.extend({ uri: o() }), F = y.extend({ method: T("notifications/resources/updated"), params: U }), z = u({ name: o(), description: Ea(o()), required: Ea(M()) }), O = u({ ...h.shape, ...p.shape, description: Ea(o()), arguments: Ea(C(z)), _meta: Ea(yt({})) }), A = y.extend({ method: T("notifications/prompts/list_changed"), params: P.optional() }), J = u({ type: T("text"), text: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Y = u({ type: T("image"), data: l, mimeType: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), re = u({ type: T("audio"), data: l, mimeType: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Q = u({ type: T("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), ce = u({ type: T("resource"), resource: Fe([se, le]), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Pe = Se.extend({ type: T("resource_link") }), I = Fe([J, Y, re, Pe, ce]), D = u({ role: n, content: I }), V = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), X = y.extend({ method: T("notifications/tools/list_changed"), params: P.optional() }), Z = u({ name: o().optional() }), ee = u({ hints: C(Z).optional(), costPriority: E().min(0).max(1).optional(), speedPriority: E().min(0).max(1).optional(), intelligencePriority: E().min(0).max(1).optional() }), pe = u({ mode: B(["auto", "required", "none"]).optional() }), _e = u({ type: T("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), Re = u({ type: T("string"), title: o().optional(), description: o().optional(), minLength: E().optional(), maxLength: E().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), ge = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: E().optional(), maximum: E().optional(), default: E().optional() }), ue = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), default: o().optional() }), Oe = u({ type: T("string"), title: o().optional(), description: o().optional(), oneOf: C(u({ const: o(), title: o() })), default: o().optional() }), ye = u({ type: T("string"), title: o().optional(), description: o().optional(), enum: C(o()), enumNames: C(o()).optional(), default: o().optional() }), Ue = Fe([ue, Oe]), Me = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ type: T("string"), enum: C(o()) }), default: C(o()).optional() }), De = u({ type: T("array"), title: o().optional(), description: o().optional(), minItems: E().optional(), maxItems: E().optional(), items: u({ anyOf: C(u({ const: o(), title: o() })) }), default: C(o()).optional() }), Be = Fe([Me, De]), We = Fe([ye, Ue, Be]), nt = Fe([We, _e, Re, ge]), it = w.extend({ mode: T("form").optional(), message: o(), requestedSchema: u({ type: T("object"), properties: me(o(), nt), required: C(o()).optional() }).catchall(oe()) }), ct = u({ type: T("ref/resource"), uri: o() }), lt = u({ type: T("ref/prompt"), name: o() }), Gt = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ye = S.shape, Bt = u({ experimental: Ye.experimental, sampling: Ye.sampling, elicitation: Ye.elicitation, roots: Ye.roots, extensions: Ye.extensions }), Ne = q.shape, Rt = u({ experimental: Ne.experimental, logging: Ne.logging, completions: Ne.completions, prompts: Ne.prompts, resources: Ne.resources, tools: Ne.tools, extensions: Ne.extensions }), zt = yt({ progressToken: r.optional(), [xe]: o(), [Nt]: g.optional(), [kOe]: Bt, [Mt]: i.optional() }), ut = u({ ...h.shape, ...p.shape, description: o().optional(), inputSchema: yt({ $schema: o().optional(), type: T("object") }), outputSchema: yt({ $schema: o().optional() }).optional(), annotations: V.optional(), _meta: me(o(), oe()).optional() }), Wt = u({ type: T("tool_result"), toolUseId: o(), content: C(I), structuredContent: oe().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), wt = Fe([J, Y, re, Q, Wt]), dt = u({ role: n, content: Fe([wt, C(wt)]), _meta: me(o(), oe()).optional() }), $t = o(), Et = yt({ [He]: g.optional().catch(void 0) }), Pt = Et.optional();
  function ze(fe) {
    return yt({ _meta: Pt, resultType: $t.default("complete"), ...fe });
  }
  let Yt = ze({}), is = ze({ nextCursor: s.optional() }), Tt = ze({ content: C(I), structuredContent: oe().optional(), isError: M().optional() }), Xt = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), tools: C(ut), nextCursor: s.optional() }), Zt = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), prompts: C(O), nextCursor: s.optional() }), Qt = ze({ description: o().optional(), messages: C(D) }), er = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), resources: C(Se), nextCursor: s.optional() }), tr = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), resourceTemplates: C(ae), nextCursor: s.optional() }), rr = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), contents: C(Fe([se, le])) }), sr = ze({ completion: u({ values: C(o()).max(100), total: E().int().optional(), hasMore: M().optional() }).loose() }), cs = ze({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]) }), ar = ze({ ttlMs: E().int().min(0).catch(0), cacheScope: B(["public", "private"]).catch("private"), supportedVersions: C(o()), capabilities: Rt, instructions: o().optional() }), Xe = u({ messages: C(dt), modelPreferences: ee.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: E().optional(), maxTokens: E().int(), stopSequences: C(o()).optional(), metadata: t.optional(), tools: C(ut).optional(), toolChoice: pe.optional() }), or = u({ method: T("sampling/createMessage"), params: Xe }), nr = u({ method: T("roots/list"), params: u({ _meta: me(o(), oe()).optional() }).optional() }), ir = u({ ...dt.shape, model: o(), stopReason: o().optional() }), cr = u({ roots: C(Gt) }), lr = u({ action: B(["accept", "decline", "cancel"]), content: me(o(), Fe([o(), E(), M(), C(o())])).optional() }), ur = u({ mode: T("url"), message: o(), url: o().url() }), dr = Fe([it, ur]), hr = u({ method: T("elicitation/create"), params: dr }), mr = Fe([or, nr, hr]), pr = Fe([ir, cr, lr]), fr = me(o(), mr), Sr = me(o(), pr), ht = ze({ inputRequests: fr.optional(), requestState: o().optional() }), mt = { inputResponses: Sr.optional(), requestState: o().optional() }, ls = u({ _meta: zt, ...mt }), us = yt({ progressToken: r.optional() });
  function ke(fe, ft) {
    return u({ method: T(fe), params: u({ _meta: zt, ...ft }) });
  }
  function qe(fe, ft) {
    return u({ method: T(fe), params: u({ _meta: us.optional(), ...ft }).optional() });
  }
  let gr = { name: o(), arguments: me(o(), oe()).optional(), ...mt }, je = { cursor: s.optional() }, ds = ke("tools/call", gr), hs = ke("tools/list", je), ms = ke("prompts/list", je), ps = ke("prompts/get", { name: o(), arguments: me(o(), o()).optional(), ...mt }), fs = ke("resources/list", je), Ss = ke("resources/templates/list", je), gs = ke("resources/read", { uri: o(), ...mt }), _r = { ref: Fe([lt, ct]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }, _s = ke("completion/complete", _r), ys = ke("server/discover", {}), Ct = u({ toolsListChanged: M().optional(), promptsListChanged: M().optional(), resourcesListChanged: M().optional(), resourceSubscriptions: C(o()).optional() }), yr = { notifications: Ct }, vs = ke("subscriptions/listen", yr), bs = Et.extend({ "io.modelcontextprotocol/subscriptionId": a }), Rs = yt({ _meta: bs, resultType: $t.default("complete") }), Ze = { "tools/call": qe("tools/call", gr), "tools/list": qe("tools/list", je), "prompts/get": qe("prompts/get", { name: o(), arguments: me(o(), o()).optional() }), "prompts/list": qe("prompts/list", je), "resources/list": qe("resources/list", je), "resources/templates/list": qe("resources/templates/list", je), "resources/read": qe("resources/read", { uri: o() }), "completion/complete": qe("completion/complete", _r), "server/discover": qe("server/discover", {}), "subscriptions/listen": qe("subscriptions/listen", yr) };
  function Te(fe) {
    return yt({ _meta: Pt, ...fe });
  }
  let zs = { "tools/call": Te({ content: C(I), structuredContent: oe().optional(), isError: M().optional() }), "tools/list": Te({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), tools: C(ut), nextCursor: s.optional() }), "prompts/get": Te({ description: o().optional(), messages: C(D) }), "prompts/list": Te({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), prompts: C(O), nextCursor: s.optional() }), "resources/list": Te({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), resources: C(Se), nextCursor: s.optional() }), "resources/templates/list": Te({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), resourceTemplates: C(ae), nextCursor: s.optional() }), "resources/read": Te({ ttlMs: E().int().min(0), cacheScope: B(["public", "private"]), contents: C(Fe([se, le])) }), "completion/complete": Te({ completion: u({ values: C(o()).max(100), total: E().int().optional(), hasMore: M().optional() }).loose() }), "server/discover": Te({ ttlMs: E().int().min(0).catch(0), cacheScope: B(["public", "private"]).catch("private"), supportedVersions: C(o()), capabilities: Rt, instructions: o().optional() }), "subscriptions/listen": Te({}) }, pt = yt({ "io.modelcontextprotocol/subscriptionId": a.optional() }), kt = u({ method: T("notifications/subscriptions/acknowledged"), params: u({ _meta: pt.optional(), notifications: Ct }) }), qt = u({ _meta: pt.optional(), requestId: a, reason: o().optional() }), It = u({ method: T("notifications/cancelled"), params: qt }), wo = { "notifications/cancelled": It, "notifications/progress": j, "notifications/message": W, "notifications/resources/updated": F, "notifications/resources/list_changed": N, "notifications/tools/list_changed": X, "notifications/prompts/list_changed": A, "notifications/subscriptions/acknowledged": kt }, Ce = (fe) => u({ jsonrpc: T("2.0"), id: Fe([o(), E().int()]), result: fe }).strict();
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, RequestIdSchema: a, RoleSchema: n, LoggingLevelSchema: i, TaskMetadataSchema: c, RelatedTaskMetadataSchema: d, RequestMetaSchema: m, BaseRequestParamsSchema: _, TaskAugmentedRequestParamsSchema: w, NotificationsParamsSchema: P, NotificationSchema: y, IconSchema: v, IconsSchema: p, BaseMetadataSchema: h, ImplementationSchema: g, ClientTasksCapabilitySchema: k, ServerTasksCapabilitySchema: b, ClientCapabilitiesSchema: S, ServerCapabilitiesSchema: q, ProgressSchema: L, ProgressNotificationParamsSchema: H, ProgressNotificationSchema: j, LoggingMessageNotificationParamsSchema: x, LoggingMessageNotificationSchema: W, ResourceContentsSchema: G, TextResourceContentsSchema: se, BlobResourceContentsSchema: le, AnnotationsSchema: ie, ResourceSchema: Se, ResourceTemplateSchema: ae, ResourceListChangedNotificationSchema: N, ResourceUpdatedNotificationParamsSchema: U, ResourceUpdatedNotificationSchema: F, PromptArgumentSchema: z, PromptSchema: O, PromptListChangedNotificationSchema: A, TextContentSchema: J, ImageContentSchema: Y, AudioContentSchema: re, ToolUseContentSchema: Q, EmbeddedResourceSchema: ce, ResourceLinkSchema: Pe, ContentBlockSchema: I, PromptMessageSchema: D, ToolAnnotationsSchema: V, ToolListChangedNotificationSchema: X, ModelHintSchema: Z, ModelPreferencesSchema: ee, ToolChoiceSchema: pe, BooleanSchemaSchema: _e, StringSchemaSchema: Re, NumberSchemaSchema: ge, UntitledSingleSelectEnumSchemaSchema: ue, TitledSingleSelectEnumSchemaSchema: Oe, LegacyTitledEnumSchemaSchema: ye, SingleSelectEnumSchemaSchema: Ue, UntitledMultiSelectEnumSchemaSchema: Me, TitledMultiSelectEnumSchemaSchema: De, MultiSelectEnumSchemaSchema: Be, EnumSchemaSchema: We, PrimitiveSchemaDefinitionSchema: nt, ElicitRequestFormParamsSchema: it, ResourceTemplateReferenceSchema: ct, PromptReferenceSchema: lt, RootSchema: Gt, ClientCapabilities2026Schema: Bt, ServerCapabilities2026Schema: Rt, RequestMetaEnvelopeSchema: zt, ToolSchema: ut, ToolResultContentSchema: Wt, SamplingMessageContentBlockSchema: wt, SamplingMessageSchema: dt, ResultTypeSchema: $t, ResultMetaSchema: Et, ResultSchema: Yt, PaginatedResultSchema: is, CallToolResultSchema: Tt, ListToolsResultSchema: Xt, ListPromptsResultSchema: Zt, GetPromptResultSchema: Qt, ListResourcesResultSchema: er, ListResourceTemplatesResultSchema: tr, ReadResourceResultSchema: rr, CompleteResultSchema: sr, CacheableResultSchema: cs, DiscoverResultSchema: ar, CreateMessageRequestParamsSchema: Xe, CreateMessageRequestSchema: or, ListRootsRequestSchema: nr, CreateMessageResultSchema: ir, ListRootsResultSchema: cr, ElicitResultSchema: lr, ElicitRequestURLParamsSchema: ur, ElicitRequestParamsSchema: dr, ElicitRequestSchema: hr, InputRequestSchema: mr, InputResponseSchema: pr, InputRequestsSchema: fr, InputResponsesSchema: Sr, InputRequiredResultSchema: ht, InputResponseRequestParamsSchema: ls, CallToolRequestSchema: ds, ListToolsRequestSchema: hs, ListPromptsRequestSchema: ms, GetPromptRequestSchema: ps, ListResourcesRequestSchema: fs, ListResourceTemplatesRequestSchema: Ss, ReadResourceRequestSchema: gs, CompleteRequestSchema: _s, DiscoverRequestSchema: ys, SubscriptionFilterSchema: Ct, SubscriptionsListenRequestSchema: vs, SubscriptionsListenResultMetaSchema: bs, SubscriptionsListenResultSchema: Rs, dispatchRequestSchemas: Ze, dispatchResultSchemas: zs, NotificationMetaSchema: pt, SubscriptionsAcknowledgedNotificationSchema: kt, CancelledNotificationParamsSchema: qt, CancelledNotificationSchema: It, notificationSchemas2026: wo, JSONRPCResultResponseSchema: Ce(Yt), CallToolResultResponseSchema: Ce(Fe([Tt, ht])), ListToolsResultResponseSchema: Ce(Xt), ListPromptsResultResponseSchema: Ce(Zt), GetPromptResultResponseSchema: Ce(Fe([Qt, ht])), ListResourcesResultResponseSchema: Ce(er), ListResourceTemplatesResultResponseSchema: Ce(tr), ReadResourceResultResponseSchema: Ce(Fe([rr, ht])), CompleteResultResponseSchema: Ce(sr), DiscoverResultResponseSchema: Ce(ar) };
}
var Hc;
function vt() {
  return Hc ??= Fc();
}
var Kc = ["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"];
function Jc(e4) {
  return Kc.includes(e4);
}
var cn = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Gc(e4) {
  return e4[cn];
}
function si(e4) {
  return typeof e4 === "number" && Number.isSafeInteger(e4) && e4 >= 0;
}
function ai(e4) {
  return e4 === "public" || e4 === "private";
}
var ta = (function(e4) {
  return e4[e4.ParseError = -32700] = "ParseError", e4[e4.InvalidRequest = -32600] = "InvalidRequest", e4[e4.MethodNotFound = -32601] = "MethodNotFound", e4[e4.InvalidParams = -32602] = "InvalidParams", e4[e4.InternalError = -32603] = "InternalError", e4[e4.ResourceNotFound = -32002] = "ResourceNotFound", e4[e4.MissingRequiredClientCapability = -32021] = "MissingRequiredClientCapability", e4[e4.UnsupportedProtocolVersion = -32022] = "UnsupportedProtocolVersion", e4[e4.UrlElicitationRequired = -32042] = "UrlElicitationRequired", e4;
})({}), Ad = class e2 extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
  }
  static [Symbol.hasInstance](t) {
    return Ie(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, t);
  }
  constructor(t, r, s) {
    super(r);
    this.code = t, this.data = s, this.name = "ProtocolError", bt(this, new.target);
  }
  static fromError(t, r, s) {
    if (t === ta.UrlElicitationRequired && s) {
      let a = s;
      if (a.elicitations) return new ni(a.elicitations, r);
    }
    if (t === ta.UnsupportedProtocolVersion && s) {
      let a = s;
      if (Array.isArray(a.supported) && typeof a.requested === "string") return new co({ supported: a.supported, requested: a.requested }, r);
    }
    if (t === ta.InvalidParams || t === ta.ResourceNotFound) {
      let a = s;
      if (typeof a?.uri === "string" && (t === ta.ResourceNotFound || Object.keys(a).length === 1)) return new oi(a.uri, r);
    }
    if (t === ta.MissingRequiredClientCapability && s) {
      let a = s;
      if (a.requiredCapabilities !== null && typeof a.requiredCapabilities === "object" && !Array.isArray(a.requiredCapabilities)) return new ci({ requiredCapabilities: a.requiredCapabilities }, r);
    }
    return new e2(t, r, s);
  }
}, oi = class extends Ad {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
  }
  constructor(e4, t = `Resource not found: ${e4}`) {
    super(ta.InvalidParams, t, { uri: e4 });
  }
  get uri() {
    return this.data.uri;
  }
}, ni = class extends Ad {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
  }
  constructor(e4, t = `URL elicitation${e4.length > 1 ? "s" : ""} required`) {
    super(ta.UrlElicitationRequired, t, { elicitations: e4 });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}, co = class extends Ad {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" });
  }
  constructor(e4, t = `Unsupported protocol version: ${e4.requested}`) {
    super(ta.UnsupportedProtocolVersion, t, e4);
  }
  get supported() {
    return this.data.supported;
  }
  get requested() {
    return this.data.requested;
  }
}, ci = class extends Ad {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.MissingRequiredClientCapabilityError" });
  }
  constructor(e4, t = `Missing required client capabilities: ${Object.keys(e4.requiredCapabilities).join(", ")}`) {
    super(ta.MissingRequiredClientCapability, t, e4);
  }
  get requiredCapabilities() {
    return this.data.requiredCapabilities;
  }
}, Bc = 0, Wc = "private", Yc = ["tools/call", "prompts/get", "resources/read"];
function Xc(e4, t) {
  let r = t.resultType;
  if (r === void 0) return { ...t, resultType: "complete" };
  if (r === "complete") return t;
  if (Yc.includes(e4)) return t;
  throw new Ad(ta.InternalError, `Handler for ${e4} returned resultType '${String(r)}', but results of ${e4} only support 'complete' on protocol revision 2026-07-28`);
}
function Zc(e4, t) {
  let r = Gc(t);
  if (t.resultType !== "complete" || !Jc(e4)) return r === void 0 ? t : sl(t);
  let s = t, a = si(s.ttlMs) ? s.ttlMs : tl(r), n = ai(s.cacheScope) ? s.cacheScope : rl(r), i = { ...s, ttlMs: a, cacheScope: n };
  return delete i[cn], i;
}
function Qc(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function el(e4, t) {
  if (t === void 0) return e4;
  let r = e4._meta;
  if (r === void 0) return { ...e4, _meta: { [He]: t } };
  if (!Qc(r)) return e4;
  if (r[He] !== void 0) return e4;
  return { ...e4, _meta: { ...r, [He]: t } };
}
function tl(e4) {
  return e4 !== void 0 && si(e4.ttlMs) ? e4.ttlMs : Bc;
}
function rl(e4) {
  return e4 !== void 0 && ai(e4.cacheScope) ? e4.cacheScope : Wc;
}
function sl(e4) {
  let t = { ...e4 };
  return delete t[cn], t;
}
var al = ["elicitation/create", "sampling/createMessage", "roots/list"], ao;
function li() {
  if (ao) return ao;
  let e4 = vt();
  return ao = { request: { "elicitation/create": u({ method: T("elicitation/create"), params: e4.ElicitRequestParamsSchema }), "sampling/createMessage": u({ method: T("sampling/createMessage"), params: e4.CreateMessageRequestParamsSchema }), "roots/list": u({ method: T("roots/list"), params: yt({}).optional() }) }, response: { "elicitation/create": e4.ElicitResultSchema, "sampling/createMessage": e4.CreateMessageResultSchema, "roots/list": e4.ListRootsResultSchema } }, ao;
}
function ui(e4) {
  return al.includes(e4);
}
function Bo(e4) {
  return ui(e4) ? li().request[e4] : void 0;
}
function ol(e4) {
  return ui(e4) ? li().response[e4] : void 0;
}
var ln = { "tools/call": null, "tools/list": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "completion/complete": null, "server/discover": null, "subscriptions/listen": null }, di = { "notifications/cancelled": null, "notifications/progress": null, "notifications/message": null, "notifications/resources/updated": null, "notifications/resources/list_changed": null, "notifications/tools/list_changed": null, "notifications/prompts/list_changed": null, "notifications/subscriptions/acknowledged": null };
function hi(e4) {
  return Object.prototype.hasOwnProperty.call(ln, e4);
}
function mi(e4) {
  return Object.prototype.hasOwnProperty.call(di, e4);
}
function nl(e4) {
  return Object.prototype.hasOwnProperty.call(ln, e4);
}
function il(e4) {
  return hi(e4) ? vt().dispatchRequestSchemas[e4] : void 0;
}
function cl(e4) {
  return nl(e4) ? vt().dispatchResultSchemas[e4] : void 0;
}
function ll(e4) {
  return mi(e4) ? vt().notificationSchemas2026[e4] : void 0;
}
var Th = Object.keys(ln), Ch = Object.keys(di);
function Zr(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function Yr(e4, t) {
  if (e4 === void 0) return { ok: false, reason: "not-in-era" };
  let r = e4.safeParse(t);
  return r.success ? { ok: true, value: r.data } : { ok: false, reason: "invalid", message: String(r.error) };
}
var ul = { ok: false, reason: "not-in-era" }, dl = [xe, kOe];
function hl(e4, t) {
  let r = t, s = false, a = () => {
    if (!s) r = { ...r }, s = true;
    return r;
  }, n = t.tools;
  if (e4 === "tools/list" && Array.isArray(n) && n.some((l) => Zr(l) && "execution" in l)) a().tools = n.map((l) => {
    if (!Zr(l) || !("execution" in l)) return l;
    let c = { ...l };
    return delete c.execution, c;
  });
  let i = t.capabilities;
  if (Zr(i) && "tasks" in i) {
    let l = { ...i };
    delete l.tasks, a().capabilities = l;
  }
  return r;
}
var ml = "io.modelcontextprotocol/tasks", pl = /* @__PURE__ */ new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function fl(e4) {
  if (e4 === null || typeof e4 !== "object" || Array.isArray(e4)) return false;
  return typeof e4.taskId === "string" && e4.taskId.length > 0 && pl.has(e4.status) && typeof e4.createdAt === "string" && typeof e4.lastUpdatedAt === "string" && (e4.ttlMs === null || typeof e4.ttlMs === "number") && (e4.pollIntervalMs === void 0 || typeof e4.pollIntervalMs === "number");
}
var un = { era: "2026-07-28", hasRequestMethod: hi, hasNotificationMethod: mi, hasInputRequestMethod: (e4) => Bo(e4) !== void 0, validateRequest: (e4, t) => Yr(il(e4), t), validateResult: (e4, t) => Yr(cl(e4), t), validateNotification: (e4, t) => Yr(ll(e4), t), validateInputRequest: (e4, t) => Yr(Bo(e4), t), validateInputResponse: (e4, t) => Yr(ol(e4), t), samplingResultVariant: () => ul, outboundEnvelope(e4) {
  return { [xe]: e4.protocolVersion, [Nt]: e4.clientInfo, [kOe]: e4.clientCapabilities, ...e4.logLevel !== void 0 && { [Mt]: e4.logLevel } };
}, validateEnvelopeMeta(e4) {
  let t = [];
  for (let s of dl) if (!(s in e4)) t.push({ key: s, problem: "missing" });
  let r = vt().RequestMetaEnvelopeSchema.safeParse(e4);
  if (!r.success) for (let s of r.error.issues) {
    let a = s.path.map(String), n = a.length > 0 ? a.join(".") : "_meta";
    if (a.length === 1 && t.some((i) => i.key === n && i.problem === "missing")) continue;
    t.push({ key: n, problem: s.message });
  }
  return t;
}, projectCallToolResult: (e4) => Wn(e4), inputRequestSchema: Bo, decodeResult(e4, t) {
  if (!Zr(t)) return { kind: "invalid", error: new Si(ii.InvalidResult, `Invalid result for ${e4}: not an object`, { method: e4 }) };
  let r = t.resultType;
  if (r === void 0) return { kind: "invalid", error: new Si(ii.InvalidResult, `Invalid result for ${e4}: missing required resultType — servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, { method: e4, violation: "missing-resultType" }) };
  if (typeof r !== "string") return { kind: "invalid", error: new Si(ii.InvalidResult, `Invalid result for ${e4}: non-string resultType`, { method: e4, resultType: r }) };
  if (r === "input_required") {
    let i = t.inputRequests, l = Zr(i) ? i : {}, c = t.requestState;
    if (Object.keys(l).length === 0 && typeof c !== "string") return { kind: "invalid", error: new Si(ii.InvalidResult, `Invalid result for ${e4}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, { method: e4, violation: "input-required-missing-both" }) };
    return { kind: "input_required", inputRequests: l, ...typeof c === "string" && { requestState: c } };
  }
  if (r === "task") return { kind: "task", result: t };
  if (r !== "complete") return { kind: "invalid", error: new Si(ii.UnsupportedResultType, `Unsupported result type '${r}' for ${e4}`, { resultType: r, method: e4 }) };
  let s = Sl(), a = Object.hasOwn(s, e4) ? s[e4] : void 0;
  if (a !== void 0) {
    let i = a.safeParse(t);
    if (!i.success) return { kind: "invalid", error: new Si(ii.InvalidResult, `Invalid result for ${e4}: ${i.error}`, { method: e4 }) };
  }
  let n = { ...t };
  return delete n.resultType, { kind: "complete", result: n };
}, encodeResult(e4, t, r) {
  return el(Zc(e4, Xc(e4, hl(e4, t))), r);
}, encodeErrorCode: (e4) => e4 === -32002 ? -32602 : e4, checkInboundEnvelope(e4) {
  if (e4.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
  let t = vt().RequestMetaEnvelopeSchema.safeParse(e4.envelope);
  if (!t.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((r) => r.message).join("; ")}`;
} }, oo;
function Sl() {
  if (oo) return oo;
  let e4 = vt();
  return oo = { "tools/call": e4.CallToolResultSchema, "tools/list": e4.ListToolsResultSchema, "prompts/get": e4.GetPromptResultSchema, "prompts/list": e4.ListPromptsResultSchema, "resources/list": e4.ListResourcesResultSchema, "resources/templates/list": e4.ListResourceTemplatesResultSchema, "resources/read": e4.ReadResourceResultSchema, "completion/complete": e4.CompleteResultSchema, "server/discover": e4.DiscoverResultSchema }, oo;
}
var lo = "2026-07-28";
function Je(e4) {
  return e4 !== void 0 && Ge(e4) ? un : nn;
}
function Un(e4) {
  if (e4.revision !== void 0) return Je(e4.revision).era;
  return e4.era === "modern" ? un.era : nn.era;
}
function Wo(e4) {
  return pi.some((t) => t.hasRequestMethod(e4));
}
function Yo(e4) {
  return pi.some((t) => t.hasNotificationMethod(e4));
}
var pi = [nn, un], gl = Pn({ AnnotationsSchema: () => Ke, AudioContentSchema: () => Vt, BaseMetadataSchema: () => Ve, BaseRequestParamsSchema: () => be, BlobResourceContentsSchema: () => Mr, BooleanSchemaSchema: () => Dr, CallToolRequestParamsSchema: () => fa, CallToolRequestSchema: () => Sa, CallToolResultSchema: () => Ar, CancelTaskRequestSchema: () => Lo, CancelTaskResultSchema: () => Uo, CancelledNotificationParamsSchema: () => Ps, CancelledNotificationSchema: () => Tr, ClientCapabilitiesSchema: () => qs, ClientNotificationSchema: () => Vo, ClientRequestSchema: () => Do, ClientResultSchema: () => xo, ClientTasksCapabilitySchema: () => Cs, CompatibilityCallToolResultSchema: () => btn, CompleteRequestParamsSchema: () => Fa, CompleteRequestSchema: () => Ha, CompleteResultSchema: () => Ka, ContentBlockSchema: () => xt, CreateMessageRequestParamsSchema: () => Ca, CreateMessageRequestSchema: () => ka, CreateMessageResultSchema: () => qa, CreateMessageResultWithToolsSchema: () => Ia, CreateTaskResultSchema: () => ko, CursorSchema: () => Rr, DiscoverRequestSchema: () => Os, DiscoverResultSchema: () => aYe, ElicitRequestFormParamsSchema: () => Kt, ElicitRequestParamsSchema: () => wtn, ElicitRequestSchema: () => Aa, ElicitRequestURLParamsSchema: () => aHt, ElicitResultSchema: () => Da, ElicitationCompleteNotificationParamsSchema: () => La, ElicitationCompleteNotificationSchema: () => Ua, EmbeddedResourceSchema: () => ia, EmptyResultSchema: () => Pr, EnumSchemaSchema: () => ja, GetPromptRequestParamsSchema: () => aa, GetPromptRequestSchema: () => oa, GetPromptResultSchema: () => ua, GetTaskPayloadRequestSchema: () => No, GetTaskPayloadResultSchema: () => Mo, GetTaskRequestSchema: () => Io, GetTaskResultSchema: () => Oo, IconSchema: () => Ts, IconsSchema: () => tt, ImageContentSchema: () => Dt, ImplementationSchema: () => wpt, InitializeRequestParamsSchema: () => Is, InitializeRequestSchema: () => Cr, InitializeResultSchema: () => Ept, InitializedNotificationSchema: () => kr, JSONArraySchema: () => Eo, JSONObjectSchema: () => de, JSONRPCErrorResponseSchema: () => At, JSONRPCMessageSchema: () => Yae, JSONRPCNotificationSchema: () => Er, JSONRPCRequestSchema: () => $r, JSONRPCResponseSchema: () => Po, JSONRPCResultResponseSchema: () => jt, JSONValueSchema: () => Qe, LegacyTitledEnumSchemaSchema: () => Fr, ListChangedOptionsBaseSchema: () => Lr, ListPromptsRequestSchema: () => sa, ListPromptsResultSchema: () => Stn, ListResourceTemplatesRequestSchema: () => Ls, ListResourceTemplatesResultSchema: () => ytn, ListResourcesRequestSchema: () => As, ListResourcesResultSchema: () => lYe, ListRootsRequestSchema: () => Ga, ListRootsResultSchema: () => Ba, ListTasksRequestSchema: () => jo, ListTasksResultSchema: () => Ao, ListToolsRequestSchema: () => pa, ListToolsResultSchema: () => dYe, LoggingLevelSchema: () => Ur, LoggingMessageNotificationParamsSchema: () => va, LoggingMessageNotificationSchema: () => ba, ModelHintSchema: () => Ra, ModelPreferencesSchema: () => za, MultiSelectEnumSchemaSchema: () => Ma, NotificationSchema: () => Ee, NotificationsParamsSchema: () => $e, NumberSchemaSchema: () => Ht, PaginatedRequestParamsSchema: () => js, PaginatedRequestSchema: () => rt, PaginatedResultSchema: () => st, PingRequestSchema: () => qr, PrimitiveSchemaDefinitionSchema: () => Jr, ProgressNotificationParamsSchema: () => Ms, ProgressNotificationSchema: () => Ir, ProgressSchema: () => Ns, ProgressTokenSchema: () => br, PromptArgumentSchema: () => ra, PromptListChangedNotificationSchema: () => da, PromptMessageSchema: () => la, PromptReferenceSchema: () => xa, PromptSchema: () => _tn, ReadResourceRequestParamsSchema: () => Us, ReadResourceRequestSchema: () => Ds, ReadResourceResultSchema: () => Vs, RelatedTaskMetadataSchema: () => gtn, RequestIdSchema: () => et, RequestMetaSchema: () => zr, RequestSchema: () => he, ResourceContentsSchema: () => Or, ResourceLinkSchema: () => ca, ResourceListChangedNotificationSchema: () => xs, ResourceRequestParamsSchema: () => Lt, ResourceSchema: () => sHt, ResourceTemplateReferenceSchema: () => Va, ResourceTemplateSchema: () => htn, ResourceUpdatedNotificationParamsSchema: () => Qs, ResourceUpdatedNotificationSchema: () => ea, ResultMetaObjectSchema: () => wr, ResultSchema: () => aO, RoleSchema: () => at, RootSchema: () => Ja, RootsListChangedNotificationSchema: () => Wa, SamplingContentSchema: () => Pa, SamplingMessageContentBlockSchema: () => St, SamplingMessageSchema: () => Ta, ServerCapabilitiesSchema: () => oHt, ServerNotificationSchema: () => Ho, ServerRequestSchema: () => Fo, ServerResultSchema: () => Ko, ServerTasksCapabilitySchema: () => ks, SetLevelRequestParamsSchema: () => _a, SetLevelRequestSchema: () => ya, SingleSelectEnumSchemaSchema: () => Na, StringSchemaSchema: () => Ft, SubscribeRequestParamsSchema: () => Fs, SubscribeRequestSchema: () => Hs, SubscriptionFilterSchema: () => jr, SubscriptionsAcknowledgedNotificationParamsSchema: () => Ws, SubscriptionsAcknowledgedNotificationSchema: () => Ys, SubscriptionsListenRequestParamsSchema: () => Gs, SubscriptionsListenRequestSchema: () => Bs, SubscriptionsListenResultMetaSchema: () => Xs, SubscriptionsListenResultSchema: () => Zs, TaskAugmentedRequestParamsSchema: () => _t, TaskCreationParamsSchema: () => Co, TaskMetadataSchema: () => Es, TaskSchema: () => ot, TaskStatusNotificationParamsSchema: () => Xa, TaskStatusNotificationSchema: () => qo, TaskStatusSchema: () => Ya, TextContentSchema: () => Ut, TextResourceContentsSchema: () => Nr, TitledMultiSelectEnumSchemaSchema: () => Kr, TitledSingleSelectEnumSchemaSchema: () => xr, ToolAnnotationsSchema: () => ha, ToolChoiceSchema: () => wa, ToolExecutionSchema: () => ma, ToolListChangedNotificationSchema: () => ga, ToolResultContentSchema: () => $a, ToolSchema: () => iHt, ToolUseContentSchema: () => na, UnsubscribeRequestParamsSchema: () => Ks, UnsubscribeRequestSchema: () => Js, UntitledMultiSelectEnumSchemaSchema: () => Hr, UntitledSingleSelectEnumSchemaSchema: () => Vr });
var $te = (e4) => $r.safeParse(e4).success, cTr = (e4) => Er.safeParse(e4).success, COe = (e4) => jt.safeParse(e4).success, _ve = (e4) => At.safeParse(e4).success;
var fi = (e4) => typeof e4 === "object" && e4 !== null && !Array.isArray(e4) && e4.resultType === "input_required";
var q1n = (e4) => Cr.safeParse(e4).success, uTr = (e4) => kr.safeParse(e4).success;
var _l = "Mcp-Param-", Dn = "x-mcp-header", yl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, vl = /* @__PURE__ */ new Set(["string", "integer", "boolean", "number"]);
function dn(e4) {
  let t = [], r = /* @__PURE__ */ new Map(), s = (n, i, l) => {
    if (n === null || typeof n !== "object") return;
    let c = n;
    if (Dn in c) {
      if (!l || i.length === 0) return `${no(i)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
      let m = c[Dn];
      if (typeof m !== "string" || m.length === 0) return `${no(i)}: x-mcp-header MUST be a non-empty string`;
      if (!yl.test(m)) return `${no(i)}: x-mcp-header '${m}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
      let _ = typeof c.type === "string" ? c.type : void 0;
      if (_ === void 0 || !vl.has(_)) return `${no(i)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${_ ?? "<none>"}`;
      let w = m.toLowerCase(), P = r.get(w);
      if (P !== void 0) return `x-mcp-header '${m}' is not case-insensitively unique (also declared as '${P}')`;
      r.set(w, m), t.push({ path: i, headerName: m, type: _ });
    }
    let d = c.properties;
    if (d !== null && typeof d === "object") for (let [m, _] of Object.entries(d)) {
      let w = s(_, [...i, m], l);
      if (w !== void 0) return w;
    }
    for (let m of bl) {
      let _ = c[m];
      if (_ === void 0) continue;
      let w = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && Rl.has(m) ? Object.values(_) : [_];
      for (let P of w) {
        let y = s(P, [...i, `<${m}>`], false);
        if (y !== void 0) return y;
      }
    }
  }, a = s(e4, [], true);
  return a === void 0 ? { valid: true, declarations: t } : { valid: false, reason: a };
}
var bl = ["items", "prefixItems", "contains", "additionalProperties", "unevaluatedProperties", "unevaluatedItems", "propertyNames", "patternProperties", "dependentSchemas", "oneOf", "anyOf", "allOf", "not", "if", "then", "else", "$defs", "definitions"], Rl = /* @__PURE__ */ new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function no(e4) {
  return e4.length === 0 ? "<root>" : e4.join(".");
}
var gi = "=?base64?", _i = "?=";
function zl(e4) {
  if (typeof e4 === "string") return e4;
  if (typeof e4 === "boolean") return e4 ? "true" : "false";
  if (typeof e4 === "number") {
    if (!Number.isFinite(e4)) return;
    if (Number.isInteger(e4) && !Number.isSafeInteger(e4)) return;
    return String(e4);
  }
}
function wl(e4) {
  if (e4.length === 0) return true;
  if (e4.startsWith(gi) && e4.endsWith(_i)) return true;
  if (e4 !== e4.trim()) return true;
  for (let t = 0; t < e4.length; t++) {
    let r = e4.codePointAt(t);
    if (r === 9 || r >= 32 && r <= 126) continue;
    return true;
  }
  return false;
}
function $l(e4) {
  let t = new TextEncoder().encode(e4), r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function uo(e4) {
  return wl(e4) ? `${gi}${$l(e4)}${_i}` : e4;
}
function El(e4, t) {
  let r = e4;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function yi(e4, t) {
  let r = {};
  for (let s of e4) {
    let a = El(t, s.path);
    if (a === void 0 || a === null) continue;
    let n = zl(a);
    if (n === void 0) continue;
    r[`${_l}${s.headerName}`] = uo(n);
  }
  return r;
}
var Jt = -32020, kh = [{ rung: "http-method", order: 1, evaluatedAt: "edge", codes: [-32e3], conformance: [], rationale: "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read." }, { rung: "jsonrpc-shape", order: 2, evaluatedAt: "edge", codes: [ta.InvalidRequest], conformance: ["server-stateless"], rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic." }, { rung: "era-classification", order: 3, evaluatedAt: "edge", codes: [Jt, ta.UnsupportedProtocolVersion], conformance: ["server-stateless", "http-header-validation", "http-custom-header-server-validation"], rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions." }, { rung: "envelope", order: 4, evaluatedAt: "edge", codes: [ta.InvalidParams], conformance: ["server-stateless"], rationale: "A present envelope claim with a malformed envelope — and a missing envelope on a request whose protocol-version header names a modern revision — is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400." }, { rung: "method-registry", order: 5, evaluatedAt: "dispatch", codes: [ta.MethodNotFound], conformance: ["server-stateless"], rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision’s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at." }, { rung: "request-params", order: 6, evaluatedAt: "dispatch", codes: [ta.InvalidParams], conformance: [], rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table." }, { rung: "standard-header-validation", order: 7, evaluatedAt: "pre-dispatch", codes: [Jt], conformance: ["http-header-validation"], rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers — presence, sentinel decoding, and `Mcp-Name` ↔ body cross-check — are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier’s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5–6) are consulted." }, { rung: "client-capabilities", order: 8, evaluatedAt: "pre-dispatch", codes: [ta.MissingRequiredClientCapability], conformance: ["server-stateless"], rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced — pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable." }, { rung: "param-header-validation", order: 9, evaluatedAt: "pre-dispatch", codes: [Jt], conformance: ["http-custom-header-server-validation"], rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool’s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung." }], qh = { [ta.ParseError]: 400, [ta.InvalidRequest]: 400, [ta.MethodNotFound]: 404, [ta.UnsupportedProtocolVersion]: 400, [ta.MissingRequiredClientCapability]: 400, [Jt]: 400 };
function ho(e4, t) {
  return d8r(e4, t);
}
function Xr(e4) {
  return new Set(e4.flatMap((t) => Object.keys(t.shape)));
}
function en(e4) {
  if (e4 == null) return false;
  let t = typeof e4;
  if (t !== "object" && t !== "function") return false;
  if (!("~standard" in e4)) return false;
  return typeof e4["~standard"]?.validate === "function";
}
var Vn = false, tn = "draft-2020-12";
function Pl(e4, t = "input") {
  let r = e4["~standard"], s;
  if (r.jsonSchema) s = r.jsonSchema[t]({ target: tn });
  else if (r.vendor === "zod") {
    if (!("_zod" in e4)) throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!Vn) Vn = true, console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    s = ist(e4, { target: tn, io: t });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (t === "output") {
    if (s.type !== void 0) return s;
    return vi(s) ? { type: "object", ...s } : s;
  }
  if (s.type !== void 0 && s.type !== "object") throw Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`);
  return { type: "object", ...s };
}
function vi(e4) {
  if ("properties" in e4 || "patternProperties" in e4 || "additionalProperties" in e4 || "required" in e4) return true;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e4[t];
    if (Array.isArray(r) && r.length > 0) return r.every((s) => s !== null && typeof s === "object" && (s.type === "object" || vi(s)));
  }
  return false;
}
function Tl(e4) {
  if (!e4.path?.length) return e4.message;
  return `${e4.path.map((t) => String(typeof t === "object" ? t.key : t)).join(".")}: ${e4.message}`;
}
async function Xo(e4, t) {
  let r = await e4["~standard"].validate(t);
  if (r.issues && r.issues.length > 0) return { success: false, error: r.issues.map((s) => Tl(s)).join(", ") };
  return { success: true, data: r.value };
}
function Cl(e4) {
  let t = ist(e4, { target: tn, io: "input" });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var kl = /\\\.\\d\{(\d+)\}/;
function ql(e4) {
  let t = kl.exec(e4), r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [false, true].flatMap((s) => [false, true].flatMap((a) => r.map((n) => TH({ local: s, offset: a, precision: n }))));
}
function Il(e4, t) {
  let r;
  switch (e4) {
    case "email":
      r = [tui()];
      break;
    case "uri":
      r = [Iqe()];
      break;
    case "date":
      r = [iEi()];
      break;
    case "date-time":
      r = ql(t);
      break;
  }
  return new Set(r.map((s) => Cl(s)).filter((s) => s !== void 0));
}
function Ol(e4, t, r) {
  if (r !== "zod") return true;
  return Il(e4, t).has(t);
}
function es(e4) {
  return typeof e4 === "object" && e4 !== null && !Array.isArray(e4);
}
function Nl(e4) {
  try {
    return Pl(e4, "input");
  } catch (t) {
    let r = t instanceof Error ? t.message : String(t);
    throw new Ad(ta.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
  }
}
var Ml = /* @__PURE__ */ new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"]);
function hn(e4) {
  return Ml.has(e4) || e4.startsWith("x-");
}
var jl = /* @__PURE__ */ new Set(["$schema", ...Object.keys(Kt.shape.requestedSchema.shape)]), xn = { string: Xr([Ft, Vr, xr, Fr]), number: Xr([Ht]), integer: Xr([Ht]), boolean: Xr([Dr]), array: Xr([Hr, Kr]) }, Al = new Set(Ft.shape.format.unwrap().options);
function Ll(e4, t, r, s) {
  if (!es(e4)) return e4;
  let a = typeof e4.type === "string" && Object.hasOwn(xn, e4.type) ? xn[e4.type] : void 0;
  if (a === void 0) return e4;
  let n = {};
  for (let [i, l] of Object.entries(e4)) if (a.has(i) || hn(i)) n[i] = l;
  else if (i === "pattern" && e4.type === "string" && typeof e4.format === "string") {
    if (!Al.has(e4.format)) n[i] = l;
    else if (typeof l !== "string" || !Ol(e4.format, l, r)) s.push(`${t}.${i}`);
  } else s.push(`${t}.${i}`);
  return n;
}
function Ul(e4, t) {
  let r = {}, s = [];
  for (let [a, n] of Object.entries(e4)) if (a === "properties" && es(n)) r[a] = Object.fromEntries(Object.entries(n).map(([i, l]) => [i, Ll(l, `properties.${i}`, t, s)]));
  else if (jl.has(a)) r[a] = n;
  else if (!hn(a)) s.push(a);
  if (s.length > 0) throw new Ad(ta.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
  return r;
}
function Dl(e4, t) {
  if (!es(e4.properties)) return t;
  let r = Object.entries(e4.properties).filter(([, s]) => !ho(Jr, s).success).map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function rn(e4, t, r = "") {
  if (Array.isArray(e4) && Array.isArray(t)) return e4.flatMap((s, a) => rn(s, t[a], `${r}[${a}]`));
  if (!es(e4) || !es(t)) return [];
  return Object.entries(e4).flatMap(([s, a]) => {
    let n = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return hn(s) ? [] : [n];
    return rn(a, t[s], n);
  });
}
function Vl(e4) {
  if (!en(e4.requestedSchema)) return { ...e4, mode: "form", requestedSchema: e4.requestedSchema };
  let t = e4.requestedSchema["~standard"].vendor, r = Ul(Nl(e4.requestedSchema), t), s = ho(Kt.shape.requestedSchema, r);
  if (!s.success) throw new Ad(ta.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Dl(r, s.error.message)}`);
  let a = rn(r, s.data);
  if (a.length > 0) throw new Ad(ta.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
  let n = (s.data.required ?? []).filter((i) => !Object.prototype.hasOwnProperty.call(s.data.properties, i));
  if (n.length > 0) throw new Ad(ta.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
  return { ...e4, mode: "form", requestedSchema: s.data };
}
function xl(e4) {
  let t = e4.inputRequests !== void 0 && Object.keys(e4.inputRequests).length > 0, r = typeof e4.requestState === "string";
  if (!t && !r) throw TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
  return { resultType: "input_required", ...e4.inputRequests !== void 0 && { inputRequests: e4.inputRequests }, ...e4.requestState !== void 0 && { requestState: e4.requestState } };
}
var Ih = Object.assign(xl, { elicit(e4) {
  try {
    return { method: "elicitation/create", params: Vl(e4) };
  } catch (t) {
    throw t instanceof Ad ? TypeError(t.message, { cause: t }) : t;
  }
}, elicitUrl(e4) {
  return { method: "elicitation/create", params: { ...e4, mode: "url" } };
}, createMessage(e4) {
  return { method: "sampling/createMessage", params: e4 };
}, listRoots() {
  return { method: "roots/list" };
} });
var Fl = true, Hl = 10, Kl = 250;
function bi(e4) {
  return { autoFulfill: e4?.autoFulfill ?? Fl, maxRounds: e4?.maxRounds ?? Hl };
}
function Jl(e4, t, r) {
  let s = t !== void 0 && Object.keys(t).length > 0;
  if (!s && r === void 0) return e4;
  return { ...e4, ...s && { inputResponses: t }, ...r !== void 0 && { requestState: r } };
}
function Gl(e4, t) {
  return `Multi-round-trip request '${e4}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function Bl(e4, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof Si ? t.reason : new Si(ii.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
      t?.removeEventListener("abort", n), r();
    }, e4), n = () => {
      clearTimeout(a), s(t?.reason instanceof Si ? t.reason : new Si(ii.RequestTimeout, String(t?.reason)));
    };
    t?.addEventListener("abort", n, { once: true });
  });
}
function Wl(e4) {
  let t = new AbortController(), r = () => t.abort(e4?.reason);
  if (e4?.addEventListener("abort", r, { once: true }), e4?.aborted) t.abort(e4.reason);
  return { signal: t.signal, abort: (s) => t.abort(s), dispose: () => e4?.removeEventListener("abort", r) };
}
async function Yl(e4) {
  let { config: t, method: r, originalParams: s, requestOptions: a, hooks: n, signal: i } = e4, l = e4.flowStartedAt ?? Date.now(), c = e4.firstPayload, d = 0;
  while (true) {
    if (d += 1, d > t.maxRounds) throw new Si(ii.InputRequiredRoundsExceeded, Gl(r, t.maxRounds), { rounds: t.maxRounds, lastResult: { inputRequests: c.inputRequests, ...c.requestState !== void 0 && { requestState: c.requestState } } });
    a.onprogress?.({ progress: d, message: `Fulfilling input required by '${r}' (round ${d})` });
    let m = Object.entries(c.inputRequests ?? {}), _;
    if (m.length > 0) {
      let y = Wl(i);
      try {
        let v = await Promise.all(m.map(async ([p, h]) => {
          try {
            return [p, await n.dispatchInputRequest(p, h, y.signal)];
          } catch (g) {
            throw y.abort(g), g;
          }
        }));
        _ = Object.fromEntries(v);
      } finally {
        y.dispose();
      }
    } else await Bl(Kl, i);
    let w = { ...a.timeout !== void 0 && { timeout: a.timeout } };
    if (a.maxTotalTimeout !== void 0) {
      let y = Date.now() - l, v = a.maxTotalTimeout - y;
      if (v <= 0) throw new Si(ii.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: a.maxTotalTimeout, totalElapsed: y });
      w.maxTotalTimeout = v;
    }
    let P = await n.retry(Jl(s, _, c.requestState), w);
    if (fi(P)) {
      c = { inputRequests: P.inputRequests ?? {}, ...P.requestState !== void 0 && { requestState: P.requestState } };
      continue;
    }
    return P;
  }
}
var Xl = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"], Zl = { IdJagTokenExchangeResponseSchema: Qa, OAuthClientInformationFullSchema: Wr, OAuthClientInformationSchema: to, OAuthClientMetadataSchema: eo, OAuthClientRegistrationErrorSchema: Jo, OAuthErrorResponseSchema: cHt, OAuthMetadataSchema: vpt, OAuthProtectedResourceMetadataSchema: Br, OAuthTokenRevocationRequestSchema: Go, OAuthTokensSchema: dHt, OpenIdProviderDiscoveryMetadataSchema: lHt, OpenIdProviderMetadataSchema: Za }, Ri = {}, zi = {};
function wi(e4, t) {
  let r = e4.slice(0, -6);
  Ri[r] = t, zi[r] = (s) => t.safeParse(s).success;
}
for (let e4 of Xl) wi(e4, gl[e4]);
for (let [e4, t] of Object.entries(Zl)) wi(e4, t);
var Ql = Object.freeze(Ri), $i = Object.freeze(zi);
function eu(e4) {
  switch (e4) {
    case "initialize":
    case "notifications/initialized":
      return Je(void 0);
    case "server/discover":
      return Je(lo);
    default:
      return;
  }
}
var ss = 6e4, tu = [xe, Nt, kOe, Mt], ru = ["inputResponses", "requestState"];
function Fn(e4, t) {
  let r = e4.params;
  if (!Qr(r)) return { message: e4, lifted: {} };
  let s = r._meta, a = Qr(s) ? tu.filter((c) => c in s) : [], n = t === "request" ? ru.filter((c) => c in r) : [];
  if (a.length === 0 && n.length === 0) return { message: e4, lifted: {} };
  let i = {}, l = { ...r };
  if (a.length > 0 && Qr(s)) {
    let c = {}, d = { ...s };
    for (let m of a) c[m] = s[m], delete d[m];
    if (i.envelope = c, Object.keys(d).length > 0) l._meta = d;
    else delete l._meta;
  }
  for (let c of n) {
    if (c === "inputResponses") i.inputResponses = l[c];
    if (c === "requestState") i.requestState = l[c];
    delete l[c];
  }
  return { message: { ...e4, params: l }, lifted: i };
}
function Hn(e4, t) {
  let r = e4.validateResult(t, void 0);
  if (!r.ok && r.reason === "not-in-era") return;
  return { "~standard": { version: 1, vendor: "mcp-wire-codec", validate(s) {
    let a = e4.validateResult(t, s);
    if (a.ok) return { value: a.value };
    return { issues: [{ message: a.reason === "invalid" ? a.message : `not-in-era: ${t}` }] };
  } } };
}
function mn(e4) {
  return () => e4;
}
var su = mn(void 0), au, Ei = class {
  _transport;
  _requestMessageId = 0;
  _requestHandlers = /* @__PURE__ */ new Map();
  _requestHandlerAbortControllers = /* @__PURE__ */ new Map();
  _notificationHandlers = /* @__PURE__ */ new Map();
  _responseHandlers = /* @__PURE__ */ new Map();
  _progressHandlers = /* @__PURE__ */ new Map();
  _timeoutInfo = /* @__PURE__ */ new Map();
  _pendingDebouncedNotifications = /* @__PURE__ */ new Set();
  _negotiatedProtocolVersion;
  static {
    au = (e4, t) => {
      e4._negotiatedProtocolVersion = t;
    };
  }
  _supportedProtocolVersions;
  onclose;
  onerror;
  fallbackRequestHandler;
  fallbackNotificationHandler;
  constructor(e4) {
    this._options = e4, this._supportedProtocolVersions = e4?.supportedProtocolVersions ?? bpt, this.setNotificationHandler("notifications/cancelled", (t) => {
      this._oncancel(t);
    }), this.setNotificationHandler("notifications/progress", (t) => {
      this._onprogress(t);
    }), this.setRequestHandler("ping", (t) => ({}));
  }
  _shouldDropInbound(e4) {
  }
  _outboundMetaEnvelope() {
  }
  _envelopeOutbound(e4) {
    let t = this._outboundMetaEnvelope();
    if (t === void 0) return e4;
    let r = e4.params ?? {};
    return { ...e4, params: { ...r, _meta: { ...t, ...r._meta } } };
  }
  _resolveNonCompleteResult(e4, t) {
    return Promise.reject(new Si(ii.UnsupportedResultType, `Unsupported result type '${e4.kind}' for ${t.request.method}`, { resultType: e4.kind, method: t.request.method }));
  }
  _getRequestHandler(e4) {
    return this._requestHandlers.get(e4);
  }
  async _oncancel(e4) {
    if (!e4.params.requestId) return;
    this._requestHandlerAbortControllers.get(e4.params.requestId)?.abort(e4.params.reason);
  }
  _setupTimeout(e4, t, r, s, a = false) {
    this._timeoutInfo.set(e4, { timeoutId: setTimeout(s, t), startTime: Date.now(), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: a, onTimeout: s });
  }
  _resetTimeout(e4) {
    let t = this._timeoutInfo.get(e4);
    if (!t) return false;
    let r = Date.now() - t.startTime;
    if (t.maxTotalTimeout && r >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e4), new Si(ii.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: t.maxTotalTimeout, totalElapsed: r });
    return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), true;
  }
  _cleanupTimeout(e4) {
    let t = this._timeoutInfo.get(e4);
    if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e4);
  }
  async connect(e4) {
    this._transport = e4;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      try {
        t?.();
      } finally {
        this._onclose();
      }
    };
    let r = this.transport?.onerror;
    this._transport.onerror = (a) => {
      r?.(a), this._onerror(a);
    };
    let s = this._transport?.onmessage;
    this._transport.onmessage = (a, n) => {
      if (s?.(a, n), COe(a) || _ve(a)) this._onresponse(a);
      else if ($te(a)) this._onrequest(a, n);
      else if (cTr(a)) this._onnotification(a, n);
      else this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
    }, e4.setSupportedProtocolVersions?.(this._supportedProtocolVersions), await this._transport.start();
  }
  _onclose() {
    let e4 = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear();
    for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
    this._timeoutInfo.clear();
    let t = this._requestHandlerAbortControllers;
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    let r = new Si(ii.ConnectionClosed, "Connection closed");
    this._transport = void 0;
    try {
      this.onclose?.();
    } finally {
      for (let s of e4.values()) s(r);
      for (let s of t.values()) s.abort(r);
    }
  }
  _onerror(e4) {
    this.onerror?.(e4);
  }
  _onnotification(e4, t) {
    let { message: r } = Fn(e4, "notification"), s = this._negotiatedWireCodec();
    if (t?.classification === void 0 && this._shouldDropInbound(e4) === "drop") return;
    if (t?.classification !== void 0) {
      let i = Un(t.classification);
      if (i !== s.era) {
        this._onerror(Error(`Era mismatch on inbound notification '${r.method}': classified as ${i} but this instance serves ${s.era}`));
        return;
      }
    }
    if (Yo(r.method) && !s.hasNotificationMethod(r.method)) return;
    let a = this._notificationHandlers.get(r.method), n = this.fallbackNotificationHandler;
    if (a === void 0 && n === void 0) return;
    Promise.resolve().then(() => a === void 0 ? n(r) : a(r, s)).catch((i) => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
  }
  _onrequest(e4, t) {
    let { message: r, lifted: s } = Fn(e4, "request"), a = this._negotiatedWireCodec();
    if (t?.classification === void 0 && this._shouldDropInbound(e4) === "drop") {
      this._onerror(Error(`Dropped inbound request '${e4.method}': not servable on this connection's protocol era`));
      return;
    }
    let n = this._transport, i = (v, p, h) => {
      let g = { jsonrpc: "2.0", id: r.id, error: { code: v, message: p, ...h !== void 0 && { data: h } } };
      n?.send(g).catch((f) => this._onerror(Error(`Failed to send an error response: ${f}`)));
    };
    if (t?.classification !== void 0) {
      let v = Un(t.classification);
      if (v !== a.era) {
        this._onerror(Error(`Era mismatch on inbound request '${r.method}': classified as ${v} but this instance serves ${a.era}`));
        let p = t.classification.revision ?? v;
        i(ta.UnsupportedProtocolVersion, `Unsupported protocol version: ${p}`, { supported: this._supportedProtocolVersions, requested: p });
        return;
      }
    }
    if (Wo(r.method) && !a.hasRequestMethod(r.method)) {
      i(ta.MethodNotFound, "Method not found");
      return;
    }
    let l = this._requestHandlers.get(r.method) ?? this.fallbackRequestHandler;
    if (l === void 0) {
      i(ta.MethodNotFound, "Method not found");
      return;
    }
    let c = a.checkInboundEnvelope(s);
    if (c !== void 0) {
      i(ta.InvalidParams, c);
      return;
    }
    let d = (v, p) => this._notificationViaCodec(this._resolveOutboundCodec(v.method), v, { ...p, relatedRequestId: r.id }), m = (v, p, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(v.method), v, p, { ...h, relatedRequestId: r.id }), _ = new AbortController();
    this._requestHandlerAbortControllers.set(r.id, _);
    let w = s.inputResponses === void 0 ? void 0 : ou(s.inputResponses), P = { sessionId: n?.sessionId, mcpReq: { id: r.id, method: r.method, _meta: r.params?._meta, ...s.envelope !== void 0 && { envelope: s.envelope }, ...w !== void 0 && { inputResponses: w.accepted }, ...w !== void 0 && w.droppedKeys.length > 0 && { droppedInputResponseKeys: w.droppedKeys }, requestState: s.requestState === void 0 ? su : mn(s.requestState), signal: _.signal, send: (v, p, h) => {
      let g = this._resolveOutboundCodec(v.method);
      if (this._assertOutboundRequestInEra(g, v.method), en(p)) return m(v, p, h);
      let f = Hn(g, v.method);
      if (f === void 0) throw TypeError(`'${v.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
      return m(v, f, p);
    }, notify: d }, http: t?.authInfo ? { authInfo: t.authInfo } : void 0 }, y = this.buildContext(P, t);
    Promise.resolve().then(() => l(r, y)).then(async (v) => {
      if (_.signal.aborted) return;
      let p;
      try {
        p = a.encodeResult(r.method, v, this._outboundServerInfo());
      } catch (g) {
        this._onerror(Error(`Failed to encode result for ${r.method}: ${g}`)), i(ta.InternalError, "Internal error");
        return;
      }
      let h = { result: p, jsonrpc: "2.0", id: r.id };
      await n?.send(h);
    }, async (v) => {
      if (_.signal.aborted) return;
      let p = Number.isSafeInteger(v.code) ? v.code : ta.InternalError, h = { jsonrpc: "2.0", id: r.id, error: { code: a.encodeErrorCode(p), message: v.message ?? "Internal error", ...v.data !== void 0 && { data: v.data } } };
      await n?.send(h);
    }).catch((v) => this._onerror(Error(`Failed to send response: ${v}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(r.id) === _) this._requestHandlerAbortControllers.delete(r.id);
    });
  }
  _onprogress(e4) {
    let { progressToken: t, ...r } = e4.params, s = Number(t), a = this._progressHandlers.get(s);
    if (!a) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e4)}`));
      return;
    }
    let n = this._responseHandlers.get(s), i = this._timeoutInfo.get(s);
    if (i && n && i.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (l) {
      this._responseHandlers.delete(s), this._progressHandlers.delete(s), this._cleanupTimeout(s), n(l);
      return;
    }
    a(r);
  }
  _onresponse(e4) {
    let t = Number(e4.id), r = this._responseHandlers.get(t);
    if (r === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e4)}`));
      return;
    }
    if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), COe(e4)) r(e4);
    else r(Ad.fromError(e4.error.code, e4.error.message, e4.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  request(e4, t, r) {
    let s = this._resolveOutboundCodec(e4.method);
    if (this._assertOutboundRequestInEra(s, e4.method), en(t)) return this._requestWithSchemaViaCodec(s, e4, t, r);
    let a = Hn(s, e4.method);
    if (a === void 0) throw TypeError(`'${e4.method}' is not a spec method; pass a result schema as the second argument to request().`);
    return this._requestWithSchemaViaCodec(s, e4, a, t);
  }
  _negotiatedWireCodec() {
    return Je(this._negotiatedProtocolVersion);
  }
  _wireCodec() {
    return this._negotiatedWireCodec();
  }
  _resolveOutboundCodec(e4) {
    if (this._negotiatedProtocolVersion === void 0) {
      let t = eu(e4);
      if (t) return t;
    }
    return this._negotiatedWireCodec();
  }
  _assertOutboundRequestInEra(e4, t) {
    if (t.startsWith("tasks/")) return;
    if (Wo(t) && !e4.hasRequestMethod(t)) throw new Si(ii.MethodNotSupportedByProtocolVersion, `Method '${t}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t, era: e4.era });
  }
  _requestWithSchema(e4, t, r) {
    let s = this._resolveOutboundCodec(e4.method);
    return this._assertOutboundRequestInEra(s, e4.method), this._requestWithSchemaViaCodec(s, e4, t, r);
  }
  _requestWithSchemaViaCodec(e4, t, r, s) {
    let { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i, headers: l } = s ?? {}, c = Date.now(), d, m;
    return new Promise((_, w) => {
      let P = (b) => {
        w(b);
      };
      if (!this._transport) {
        P(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) try {
        this.assertCapabilityForMethod(t.method);
      } catch (b) {
        P(b);
        return;
      }
      if (s?.signal?.aborted) {
        let b = s.signal.reason;
        throw b instanceof Si ? b : new Si(ii.RequestTimeout, String(b));
      }
      let y = e4.era === lo && this._transport.hasPerRequestStream === true ? new AbortController() : void 0, v = this._requestMessageId++;
      m = v;
      let p = { ...t, jsonrpc: "2.0", id: v };
      if (s?.onprogress) this._progressHandlers.set(v, s.onprogress), p.params = { ...t.params, _meta: { ...t.params?._meta, progressToken: v } };
      let h = this._envelopeOutbound(p), g = false, f = (b) => {
        if (g) return;
        if (this._progressHandlers.delete(v), y === void 0) this._transport?.send(this._envelopeOutbound({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: v, reason: String(b) } }), { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i }).catch((S) => this._onerror(Error(`Failed to send cancellation: ${S}`)));
        else y.abort();
        w(b instanceof Si ? b : new Si(ii.RequestTimeout, String(b)));
      };
      this._responseHandlers.set(v, (b) => {
        if (s?.signal?.aborted) return;
        if (g = true, b instanceof Error) return w(b);
        let S;
        try {
          S = e4.decodeResult(t.method, b.result);
        } catch (L) {
          return w(L instanceof Error ? L : Error(String(L)));
        }
        if (S.kind === "invalid") return w(S.error);
        if (S.kind === "task") {
          if (s?.allowTask === true && this._capabilities?.extensions?.[ml] !== void 0 && fl(S.result)) return _(S.result);
          return w(new Si(ii.UnsupportedResultType, `Unsupported result type 'task' for ${t.method}`, { method: t.method }));
        }
        if (S.kind === "input_required") {
          if (s?.allowInputRequired === true) return _(lu(S));
          let L = { codec: e4, request: t, resultSchema: r, options: s, flowStartedAt: c, retry: (H, j) => this._requestWithSchemaViaCodec(e4, H === void 0 ? { method: t.method } : { method: t.method, params: H }, r, j) };
          return _(this._resolveNonCompleteResult(S, L));
        }
        let q = S.result;
        Xo(r, q).then((L) => {
          if (L.success) _(L.data);
          else w(new Si(ii.InvalidResult, `Invalid result for ${t.method}: ${L.error}`));
        }, w);
      }), d = () => f(s?.signal?.reason), s?.signal?.addEventListener("abort", d, { once: true });
      let R = s?.timeout ?? ss, k = () => f(new Si(ii.RequestTimeout, "Request timed out", { timeout: R }));
      this._setupTimeout(v, R, s?.maxTotalTimeout, k, s?.resetTimeoutOnProgress ?? false), this._transport.send(h, { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i, headers: l, requestSignal: y?.signal }).catch((b) => {
        this._progressHandlers.delete(v), w(b);
      });
    }).finally(() => {
      if (d) s?.signal?.removeEventListener("abort", d);
      if (m !== void 0) this._responseHandlers.delete(m), this._cleanupTimeout(m);
    });
  }
  async notification(e4, t) {
    return this._notificationViaCodec(this._resolveOutboundCodec(e4.method), e4, t);
  }
  async _notificationViaCodec(e4, t, r) {
    if (!this._transport) throw new Si(ii.NotConnected, "Not connected");
    if (Yo(t.method) && !e4.hasNotificationMethod(t.method)) throw new Si(ii.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t.method, era: e4.era });
    this.assertNotificationCapability(t.method);
    let s = this._envelopeOutbound({ jsonrpc: "2.0", ...t });
    if ((this._options?.debouncedNotificationMethods ?? []).includes(t.method) && !t.params && !r?.relatedRequestId) {
      if (this._pendingDebouncedNotifications.has(t.method)) return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(t.method), !this._transport) return;
        this._transport?.send(s, r).catch((a) => this._onerror(a));
      });
      return;
    }
    await this._transport.send(s, r);
  }
  setRequestHandler(e4, t, r) {
    this.assertRequestHandlerCapability(e4);
    let s;
    if (typeof t === "function") {
      if (!Wo(e4)) throw TypeError(`'${e4}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
      s = (a, n) => {
        let i = this._negotiatedWireCodec(), l = i.validateRequest(e4, a);
        if (!l.ok && l.reason === "not-in-era") l = i.validateInputRequest(e4, a);
        if (!l.ok) {
          if (l.reason === "not-in-era") throw new Ad(ta.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(l.message);
        }
        return Promise.resolve(t(l.value, n));
      };
    } else if (r) s = async (a, n) => {
      let i = await Xo(t.params, { ...a.params });
      if (!i.success) throw new Ad(ta.InvalidParams, `Invalid params for ${e4}: ${i.error}`);
      return r(i.data, n);
    };
    else throw TypeError("setRequestHandler: handler is required");
    this._requestHandlers.set(e4, this._wrapHandler(e4, s));
  }
  _wrapHandler(e4, t) {
    return t;
  }
  _outboundServerInfo() {
  }
  removeRequestHandler(e4) {
    this._requestHandlers.delete(e4);
  }
  assertCanSetRequestHandler(e4) {
    if (this._requestHandlers.has(e4)) throw Error(`A request handler for ${e4} already exists, which would be overridden`);
  }
  setNotificationHandler(e4, t, r) {
    if (typeof t === "function") {
      if (!Yo(e4)) throw TypeError(`'${e4}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
      this._notificationHandlers.set(e4, (s, a) => {
        let n = a.validateNotification(e4, s);
        if (!n.ok) {
          if (n.reason === "not-in-era") throw new Ad(ta.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(n.message);
        }
        return Promise.resolve(t(n.value));
      });
      return;
    }
    if (!r) throw TypeError("setNotificationHandler: handler is required");
    this._notificationHandlers.set(e4, async (s) => {
      let a = await Xo(t.params, { ...s.params });
      if (!a.success) throw new Ad(ta.InvalidParams, `Invalid params for notification ${e4}: ${a.error}`);
      await r(a.data, s);
    });
  }
  removeNotificationHandler(e4) {
    this._notificationHandlers.delete(e4);
  }
};
function Qr(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function Pi(e4, t) {
  let r = { ...e4 };
  for (let s in t) {
    let a = s, n = t[a];
    if (n === void 0) continue;
    let i = r[a];
    r[a] = Qr(i) && Qr(n) ? { ...i, ...n } : n;
  }
  return r;
}
function io(e4) {
  return typeof e4 === "object" && e4 !== null && !Array.isArray(e4);
}
function ou(e4) {
  let t = {}, r = [];
  if (!io(e4)) return { accepted: t, droppedKeys: r };
  for (let [s, a] of Object.entries(e4)) {
    if (!io(a) || "method" in a || "result" in a) {
      r.push(s);
      continue;
    }
    t[s] = a;
  }
  return { accepted: t, droppedKeys: r };
}
function Kn(e4) {
  throw new Si(ii.SendFailed, `ctx.mcpReq.${e4} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function nu(e4, t, r, s, a) {
  return { sessionId: a, mcpReq: { id: e4, method: t, _meta: r?._meta, requestState: mn(void 0), signal: s, send: () => Kn("send"), notify: () => Kn("notify") } };
}
async function iu(e4, t, r, s, a) {
  if (!io(s) || typeof s.method !== "string") throw new Si(ii.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, { key: r });
  let n = s.method;
  if (!t.hasInputRequestMethod(n)) throw new Si(ii.InvalidResult, `Invalid input request '${r}': '${n}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, { key: r, method: n });
  let i = e4.getRequestHandler(n);
  if (i === void 0) throw new Si(ii.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${n}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, { key: r, method: n });
  let l = io(s.params) ? s.params : void 0;
  return await i({ jsonrpc: "2.0", id: r, method: n, ...l !== void 0 && { params: l } }, e4.buildContext(nu(r, n, l, a, e4.sessionId)));
}
function cu(e4, t) {
  return { ...e4?.signal !== void 0 && { signal: e4.signal }, ...e4?.onprogress !== void 0 && { onprogress: e4.onprogress }, ...e4?.resetTimeoutOnProgress !== void 0 && { resetTimeoutOnProgress: e4.resetTimeoutOnProgress }, ...e4?.headers !== void 0 && { headers: e4.headers }, ...t.timeout !== void 0 && { timeout: t.timeout }, ...t.maxTotalTimeout !== void 0 && { maxTotalTimeout: t.maxTotalTimeout }, ...e4?.allowTask === true && { allowTask: true }, allowInputRequired: true };
}
function Ti(e4, t, r, s) {
  let { codec: a, request: n, options: i, flowStartedAt: l } = s, c = { inputRequests: r.inputRequests, ...r.requestState !== void 0 && { requestState: r.requestState } }, d = { dispatchInputRequest: (m, _, w) => iu(e4, a, m, _, w), retry: (m, _) => s.retry(m, cu(i, _)) };
  return Yl({ config: t, method: n.method, originalParams: n.params, firstPayload: c, flowStartedAt: l, signal: i?.signal, requestOptions: { ...i?.timeout !== void 0 && { timeout: i.timeout }, ...i?.maxTotalTimeout !== void 0 && { maxTotalTimeout: i.maxTotalTimeout }, ...i?.onprogress !== void 0 && { onprogress: i.onprogress } }, hooks: d });
}
function lu(e4) {
  return { resultType: "input_required", inputRequests: e4.inputRequests, ...e4.requestState !== void 0 && { requestState: e4.requestState } };
}
var uu = K((e4) => {
  var t = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, r = /\\([\u000b\u0020-\u00ff])/g, s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
  e4.parse = a;
  function a(l) {
    if (!l) throw TypeError("argument string is required");
    var c = typeof l === "object" ? n(l) : l;
    if (typeof c !== "string") throw TypeError("argument string is required to be a string");
    var d = c.indexOf(";"), m = d !== -1 ? c.slice(0, d).trim() : c.trim();
    if (!s.test(m)) throw TypeError("invalid media type");
    var _ = new i(m.toLowerCase());
    if (d !== -1) {
      var w, P, y;
      t.lastIndex = d;
      while (P = t.exec(c)) {
        if (P.index !== d) throw TypeError("invalid parameter format");
        if (d += P[0].length, w = P[1].toLowerCase(), y = P[2], y.charCodeAt(0) === 34) {
          if (y = y.slice(1, -1), y.indexOf("\\") !== -1) y = y.replace(r, "$1");
        }
        _.parameters[w] = y;
      }
      if (d !== c.length) throw TypeError("invalid parameter format");
    }
    return _;
  }
  function n(l) {
    var c;
    if (typeof l.getHeader === "function") c = l.getHeader("content-type");
    else if (typeof l.headers === "object") c = l.headers && l.headers["content-type"];
    if (typeof c !== "string") throw TypeError("content-type header is missing from object");
    return c;
  }
  function i(l) {
    this.parameters = /* @__PURE__ */ Object.create(null), this.type = l;
  }
}), du = $s(uu(), 1);
function Ci(e4) {
  if (!e4) return;
  try {
    return du.parse(e4).type;
  } catch {
    let t = (e4.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e4.slice(t.length).includes(",")) return;
    return t;
  }
}
var ki = 10485760, rbo = class {
  _buffer;
  _maxBufferSize;
  constructor(e4) {
    this._maxBufferSize = e4?.maxBufferSize ?? ki;
  }
  append(e4) {
    if ((this._buffer?.length ?? 0) + e4.length > this._maxBufferSize) throw this.clear(), Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e4]) : e4;
  }
  readMessage() {
    while (this._buffer) {
      let e4 = this._buffer.indexOf(`
`);
      if (e4 === -1) return null;
      let t = this._buffer.toString("utf8", 0, e4).replace(/\r$/, "");
      this._buffer = this._buffer.subarray(e4 + 1);
      try {
        return pTr(t);
      } catch (r) {
        if (r instanceof SyntaxError) continue;
        throw r;
      }
    }
    return null;
  }
  clear() {
    this._buffer = void 0;
  }
};
function pTr(e4) {
  return Yae.parse(JSON.parse(e4));
}
function obo(e4) {
  return JSON.stringify(e4) + `
`;
}
function ts(e4) {
  if (!e4) return {};
  if (e4 instanceof Headers) return Object.fromEntries(e4.entries());
  if (Array.isArray(e4)) return Object.fromEntries(e4);
  return { ...e4 };
}
function uHt(e4 = fetch, t) {
  if (!t) return e4;
  return async (r, s) => e4(r, { ...t, ...s, headers: s?.headers ? { ...ts(t.headers), ...ts(s.headers) } : t.headers });
}
var mo = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.regexpCode = e4.getEsmExportName = e4.getProperty = e4.safeStringify = e4.stringify = e4.strConcat = e4.addCodeArg = e4.str = e4._ = e4.nil = e4._Code = e4.Name = e4.IDENTIFIER = e4._CodeOrName = void 0;
  var t = class {
  };
  e4._CodeOrName = t, e4.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var r = class extends t {
    constructor(h) {
      super();
      if (!e4.IDENTIFIER.test(h)) throw Error("CodeGen: name must be a valid identifier");
      this.str = h;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  };
  e4.Name = r;
  var s = class extends t {
    constructor(h) {
      super();
      this._items = typeof h === "string" ? [h] : h;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return false;
      let h = this._items[0];
      return h === "" || h === '""';
    }
    get str() {
      var h;
      return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((g, f) => `${g}${f}`, "");
    }
    get names() {
      var h;
      return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((g, f) => {
        if (f instanceof r) g[f.str] = (g[f.str] || 0) + 1;
        return g;
      }, {});
    }
  };
  e4._Code = s, e4.nil = new s("");
  function a(h, ...g) {
    let f = [h[0]], R = 0;
    while (R < g.length) l(f, g[R]), f.push(h[++R]);
    return new s(f);
  }
  e4._ = a;
  let n = new s("+");
  function i(h, ...g) {
    let f = [P(h[0])], R = 0;
    while (R < g.length) f.push(n), l(f, g[R]), f.push(n, P(h[++R]));
    return c(f), new s(f);
  }
  e4.str = i;
  function l(h, g) {
    if (g instanceof s) h.push(...g._items);
    else if (g instanceof r) h.push(g);
    else h.push(_(g));
  }
  e4.addCodeArg = l;
  function c(h) {
    let g = 1;
    while (g < h.length - 1) {
      if (h[g] === n) {
        let f = d(h[g - 1], h[g + 1]);
        if (f !== void 0) {
          h.splice(g - 1, 3, f);
          continue;
        }
        h[g++] = "+";
      }
      g++;
    }
  }
  function d(h, g) {
    if (g === '""') return h;
    if (h === '""') return g;
    if (typeof h == "string") {
      if (g instanceof r || h[h.length - 1] !== '"') return;
      if (typeof g != "string") return `${h.slice(0, -1)}${g}"`;
      if (g[0] === '"') return h.slice(0, -1) + g.slice(1);
      return;
    }
    if (typeof g == "string" && g[0] === '"' && !(h instanceof r)) return `"${h}${g.slice(1)}`;
  }
  function m(h, g) {
    return g.emptyStr() ? h : h.emptyStr() ? g : i`${h}${g}`;
  }
  e4.strConcat = m;
  function _(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : P(Array.isArray(h) ? h.join(",") : h);
  }
  function w(h) {
    return new s(P(h));
  }
  e4.stringify = w;
  function P(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e4.safeStringify = P;
  function y(h) {
    return typeof h == "string" && e4.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
  }
  e4.getProperty = y;
  function v(h) {
    if (typeof h == "string" && e4.IDENTIFIER.test(h)) return new s(`${h}`);
    throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e4.getEsmExportName = v;
  function p(h) {
    return new s(h.toString());
  }
  e4.regexpCode = p;
}), qi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.ValueScope = e4.ValueScopeName = e4.Scope = e4.varKinds = e4.UsedValueState = void 0;
  let t = mo();
  var r = class extends Error {
    constructor(c) {
      super(`CodeGen: "code" for ${c} not defined`);
      this.value = c.value;
    }
  }, s;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(s || (e4.UsedValueState = s = {})), e4.varKinds = { const: new t.Name("const"), let: new t.Name("let"), var: new t.Name("var") };
  var a = class {
    constructor({ prefixes: c, parent: d } = {}) {
      this._names = {}, this._prefixes = c, this._parent = d;
    }
    toName(c) {
      return c instanceof t.Name ? c : this.name(c);
    }
    name(c) {
      return new t.Name(this._newName(c));
    }
    _newName(c) {
      let d = this._names[c] || this._nameGroup(c);
      return `${c}${d.index++}`;
    }
    _nameGroup(c) {
      var d, m;
      if (((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || m === void 0 ? void 0 : m.has(c)) || this._prefixes && !this._prefixes.has(c)) throw Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
      return this._names[c] = { prefix: c, index: 0 };
    }
  };
  e4.Scope = a;
  var n = class extends t.Name {
    constructor(c, d) {
      super(d);
      this.prefix = c;
    }
    setValue(c, { property: d, itemIndex: m }) {
      this.value = c, this.scopePath = t._`.${new t.Name(d)}[${m}]`;
    }
  };
  e4.ValueScopeName = n;
  let i = t._`\n`;
  var l = class extends a {
    constructor(c) {
      super(c);
      this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(c) {
      return new n(c, this._newName(c));
    }
    value(c, d) {
      var m;
      if (d.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let _ = this.toName(c), { prefix: w } = _, P = (m = d.key) !== null && m !== void 0 ? m : d.ref, y = this._values[w];
      if (y) {
        let h = y.get(P);
        if (h) return h;
      } else y = this._values[w] = /* @__PURE__ */ new Map();
      y.set(P, _);
      let v = this._scope[w] || (this._scope[w] = []), p = v.length;
      return v[p] = d.ref, _.setValue(d, { property: w, itemIndex: p }), _;
    }
    getValue(c, d) {
      let m = this._values[c];
      if (!m) return;
      return m.get(d);
    }
    scopeRefs(c, d = this._values) {
      return this._reduceValues(d, (m) => {
        if (m.scopePath === void 0) throw Error(`CodeGen: name "${m}" has no value`);
        return t._`${c}${m.scopePath}`;
      });
    }
    scopeCode(c = this._values, d, m) {
      return this._reduceValues(c, (_) => {
        if (_.value === void 0) throw Error(`CodeGen: name "${_}" has no value`);
        return _.value.code;
      }, d, m);
    }
    _reduceValues(c, d, m = {}, _) {
      let w = t.nil;
      for (let P in c) {
        let y = c[P];
        if (!y) continue;
        let v = m[P] = m[P] || /* @__PURE__ */ new Map();
        y.forEach((p) => {
          if (v.has(p)) return;
          v.set(p, s.Started);
          let h = d(p);
          if (h) {
            let g = this.opts.es5 ? e4.varKinds.var : e4.varKinds.const;
            w = t._`${w}${g} ${p} = ${h};${this.opts._n}`;
          } else if (h = _ === null || _ === void 0 ? void 0 : _(p)) w = t._`${w}${h}${this.opts._n}`;
          else throw new r(p);
          v.set(p, s.Completed);
        });
      }
      return w;
    }
  };
  e4.ValueScope = l;
}), te = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.or = e4.and = e4.not = e4.CodeGen = e4.operators = e4.varKinds = e4.ValueScopeName = e4.ValueScope = e4.Scope = e4.Name = e4.regexpCode = e4.stringify = e4.getProperty = e4.nil = e4.strConcat = e4.str = e4._ = void 0;
  let t = mo(), r = qi();
  var s = mo();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return s._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return s.str;
  } }), Object.defineProperty(e4, "strConcat", { enumerable: true, get: function() {
    return s.strConcat;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return s.nil;
  } }), Object.defineProperty(e4, "getProperty", { enumerable: true, get: function() {
    return s.getProperty;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return s.stringify;
  } }), Object.defineProperty(e4, "regexpCode", { enumerable: true, get: function() {
    return s.regexpCode;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return s.Name;
  } });
  var a = qi();
  Object.defineProperty(e4, "Scope", { enumerable: true, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e4, "ValueScope", { enumerable: true, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e4, "ValueScopeName", { enumerable: true, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e4, "varKinds", { enumerable: true, get: function() {
    return a.varKinds;
  } }), e4.operators = { GT: new t._Code(">"), GTE: new t._Code(">="), LT: new t._Code("<"), LTE: new t._Code("<="), EQ: new t._Code("==="), NEQ: new t._Code("!=="), NOT: new t._Code("!"), OR: new t._Code("||"), AND: new t._Code("&&"), ADD: new t._Code("+") };
  var n = class {
    optimizeNodes() {
      return this;
    }
    optimizeNames(z, O) {
      return this;
    }
  }, i = class extends n {
    constructor(z, O, A) {
      super();
      this.varKind = z, this.name = O, this.rhs = A;
    }
    render({ es5: z, _n: O }) {
      let A = z ? r.varKinds.var : this.varKind, J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${J};` + O;
    }
    optimizeNames(z, O) {
      if (!z[this.name.str]) return;
      if (this.rhs) this.rhs = G(this.rhs, z, O);
      return this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }, l = class extends n {
    constructor(z, O, A) {
      super();
      this.lhs = z, this.rhs = O, this.sideEffects = A;
    }
    render({ _n: z }) {
      return `${this.lhs} = ${this.rhs};` + z;
    }
    optimizeNames(z, O) {
      if (this.lhs instanceof t.Name && !z[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = G(this.rhs, z, O), this;
    }
    get names() {
      return W(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
    }
  }, c = class extends l {
    constructor(z, O, A, J) {
      super(z, A, J);
      this.op = O;
    }
    render({ _n: z }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + z;
    }
  }, d = class extends n {
    constructor(z) {
      super();
      this.label = z, this.names = {};
    }
    render({ _n: z }) {
      return `${this.label}:` + z;
    }
  }, m = class extends n {
    constructor(z) {
      super();
      this.label = z, this.names = {};
    }
    render({ _n: z }) {
      return `break${this.label ? ` ${this.label}` : ""};` + z;
    }
  }, _ = class extends n {
    constructor(z) {
      super();
      this.error = z;
    }
    render({ _n: z }) {
      return `throw ${this.error};` + z;
    }
    get names() {
      return this.error.names;
    }
  }, w = class extends n {
    constructor(z) {
      super();
      this.code = z;
    }
    render({ _n: z }) {
      return `${this.code};` + z;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(z, O) {
      return this.code = G(this.code, z, O), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }, P = class extends n {
    constructor(z = []) {
      super();
      this.nodes = z;
    }
    render(z) {
      return this.nodes.reduce((O, A) => O + A.render(z), "");
    }
    optimizeNodes() {
      let { nodes: z } = this, O = z.length;
      while (O--) {
        let A = z[O].optimizeNodes();
        if (Array.isArray(A)) z.splice(O, 1, ...A);
        else if (A) z[O] = A;
        else z.splice(O, 1);
      }
      return z.length > 0 ? this : void 0;
    }
    optimizeNames(z, O) {
      let { nodes: A } = this, J = A.length;
      while (J--) {
        let Y = A[J];
        if (Y.optimizeNames(z, O)) continue;
        se(z, Y.names), A.splice(J, 1);
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((z, O) => x(z, O.names), {});
    }
  }, y = class extends P {
    render(z) {
      return "{" + z._n + super.render(z) + "}" + z._n;
    }
  }, v = class extends P {
  }, p = class extends y {
  };
  p.kind = "else";
  var h = class z extends y {
    constructor(O, A) {
      super(A);
      this.condition = O;
    }
    render(O) {
      let A = `if(${this.condition})` + super.render(O);
      if (this.else) A += "else " + this.else.render(O);
      return A;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let O = this.condition;
      if (O === true) return this.nodes;
      let A = this.else;
      if (A) {
        let J = A.optimizeNodes();
        A = this.else = Array.isArray(J) ? new p(J) : J;
      }
      if (A) {
        if (O === false) return A instanceof z ? A : A.nodes;
        if (this.nodes.length) return this;
        return new z(le(O), A instanceof z ? [A] : A.nodes);
      }
      if (O === false || !this.nodes.length) return;
      return this;
    }
    optimizeNames(O, A) {
      var J;
      if (this.else = (J = this.else) === null || J === void 0 ? void 0 : J.optimizeNames(O, A), !(super.optimizeNames(O, A) || this.else)) return;
      return this.condition = G(this.condition, O, A), this;
    }
    get names() {
      let O = super.names;
      if (W(O, this.condition), this.else) x(O, this.else.names);
      return O;
    }
  };
  h.kind = "if";
  var g = class extends y {
  };
  g.kind = "for";
  var f = class extends g {
    constructor(z) {
      super();
      this.iteration = z;
    }
    render(z) {
      return `for(${this.iteration})` + super.render(z);
    }
    optimizeNames(z, O) {
      if (!super.optimizeNames(z, O)) return;
      return this.iteration = G(this.iteration, z, O), this;
    }
    get names() {
      return x(super.names, this.iteration.names);
    }
  }, R = class extends g {
    constructor(z, O, A, J) {
      super();
      this.varKind = z, this.name = O, this.from = A, this.to = J;
    }
    render(z) {
      let O = z.es5 ? r.varKinds.var : this.varKind, { name: A, from: J, to: Y } = this;
      return `for(${O} ${A}=${J}; ${A}<${Y}; ${A}++)` + super.render(z);
    }
    get names() {
      return W(W(super.names, this.from), this.to);
    }
  }, k = class extends g {
    constructor(z, O, A, J) {
      super();
      this.loop = z, this.varKind = O, this.name = A, this.iterable = J;
    }
    render(z) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(z);
    }
    optimizeNames(z, O) {
      if (!super.optimizeNames(z, O)) return;
      return this.iterable = G(this.iterable, z, O), this;
    }
    get names() {
      return x(super.names, this.iterable.names);
    }
  }, b = class extends y {
    constructor(z, O, A) {
      super();
      this.name = z, this.args = O, this.async = A;
    }
    render(z) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(z);
    }
  };
  b.kind = "func";
  var S = class extends P {
    render(z) {
      return "return " + super.render(z);
    }
  };
  S.kind = "return";
  var q = class extends y {
    render(z) {
      let O = "try" + super.render(z);
      if (this.catch) O += this.catch.render(z);
      if (this.finally) O += this.finally.render(z);
      return O;
    }
    optimizeNodes() {
      var z, O;
      return super.optimizeNodes(), (z = this.catch) === null || z === void 0 || z.optimizeNodes(), (O = this.finally) === null || O === void 0 || O.optimizeNodes(), this;
    }
    optimizeNames(z, O) {
      var A, J;
      return super.optimizeNames(z, O), (A = this.catch) === null || A === void 0 || A.optimizeNames(z, O), (J = this.finally) === null || J === void 0 || J.optimizeNames(z, O), this;
    }
    get names() {
      let z = super.names;
      if (this.catch) x(z, this.catch.names);
      if (this.finally) x(z, this.finally.names);
      return z;
    }
  }, L = class extends y {
    constructor(z) {
      super();
      this.error = z;
    }
    render(z) {
      return `catch(${this.error})` + super.render(z);
    }
  };
  L.kind = "catch";
  var H = class extends y {
    render(z) {
      return "finally" + super.render(z);
    }
  };
  H.kind = "finally";
  var j = class {
    constructor(z, O = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...O, _n: O.lines ? `
` : "" }, this._extScope = z, this._scope = new r.Scope({ parent: z }), this._nodes = [new v()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(z) {
      return this._scope.name(z);
    }
    scopeName(z) {
      return this._extScope.name(z);
    }
    scopeValue(z, O) {
      let A = this._extScope.value(z, O);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(z, O) {
      return this._extScope.getValue(z, O);
    }
    scopeRefs(z) {
      return this._extScope.scopeRefs(z, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(z, O, A, J) {
      let Y = this._scope.toName(O);
      if (A !== void 0 && J) this._constants[Y.str] = A;
      return this._leafNode(new i(z, Y, A)), Y;
    }
    const(z, O, A) {
      return this._def(r.varKinds.const, z, O, A);
    }
    let(z, O, A) {
      return this._def(r.varKinds.let, z, O, A);
    }
    var(z, O, A) {
      return this._def(r.varKinds.var, z, O, A);
    }
    assign(z, O, A) {
      return this._leafNode(new l(z, O, A));
    }
    add(z, O) {
      return this._leafNode(new c(z, e4.operators.ADD, O));
    }
    code(z) {
      if (typeof z == "function") z();
      else if (z !== t.nil) this._leafNode(new w(z));
      return this;
    }
    object(...z) {
      let O = ["{"];
      for (let [A, J] of z) {
        if (O.length > 1) O.push(",");
        if (O.push(A), A !== J || this.opts.es5) O.push(":"), (0, t.addCodeArg)(O, J);
      }
      return O.push("}"), new t._Code(O);
    }
    if(z, O, A) {
      if (this._blockNode(new h(z)), O && A) this.code(O).else().code(A).endIf();
      else if (O) this.code(O).endIf();
      else if (A) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(z) {
      return this._elseNode(new h(z));
    }
    else() {
      return this._elseNode(new p());
    }
    endIf() {
      return this._endBlockNode(h, p);
    }
    _for(z, O) {
      if (this._blockNode(z), O) this.code(O).endFor();
      return this;
    }
    for(z, O) {
      return this._for(new f(z), O);
    }
    forRange(z, O, A, J, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
      let re = this._scope.toName(z);
      return this._for(new R(Y, re, O, A), () => J(re));
    }
    forOf(z, O, A, J = r.varKinds.const) {
      let Y = this._scope.toName(z);
      if (this.opts.es5) {
        let re = O instanceof t.Name ? O : this.var("_arr", O);
        return this.forRange("_i", 0, t._`${re}.length`, (Q) => {
          this.var(Y, t._`${re}[${Q}]`), A(Y);
        });
      }
      return this._for(new k("of", J, Y, O), () => A(Y));
    }
    forIn(z, O, A, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(z, t._`Object.keys(${O})`, A);
      let Y = this._scope.toName(z);
      return this._for(new k("in", J, Y, O), () => A(Y));
    }
    endFor() {
      return this._endBlockNode(g);
    }
    label(z) {
      return this._leafNode(new d(z));
    }
    break(z) {
      return this._leafNode(new m(z));
    }
    return(z) {
      let O = new S();
      if (this._blockNode(O), this.code(z), O.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(S);
    }
    try(z, O, A) {
      if (!O && !A) throw Error('CodeGen: "try" without "catch" and "finally"');
      let J = new q();
      if (this._blockNode(J), this.code(z), O) {
        let Y = this.name("e");
        this._currNode = J.catch = new L(Y), O(Y);
      }
      if (A) this._currNode = J.finally = new H(), this.code(A);
      return this._endBlockNode(L, H);
    }
    throw(z) {
      return this._leafNode(new _(z));
    }
    block(z, O) {
      if (this._blockStarts.push(this._nodes.length), z) this.code(z).endBlock(O);
      return this;
    }
    endBlock(z) {
      let O = this._blockStarts.pop();
      if (O === void 0) throw Error("CodeGen: not in self-balancing block");
      let A = this._nodes.length - O;
      if (A < 0 || z !== void 0 && A !== z) throw Error(`CodeGen: wrong number of nodes: ${A} vs ${z} expected`);
      return this._nodes.length = O, this;
    }
    func(z, O = t.nil, A, J) {
      if (this._blockNode(new b(z, O, A)), J) this.code(J).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(b);
    }
    optimize(z = 1) {
      while (z-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(z) {
      return this._currNode.nodes.push(z), this;
    }
    _blockNode(z) {
      this._currNode.nodes.push(z), this._nodes.push(z);
    }
    _endBlockNode(z, O) {
      let A = this._currNode;
      if (A instanceof z || O && A instanceof O) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${O ? `${z.kind}/${O.kind}` : z.kind}"`);
    }
    _elseNode(z) {
      let O = this._currNode;
      if (!(O instanceof h)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = O.else = z, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let z = this._nodes;
      return z[z.length - 1];
    }
    set _currNode(z) {
      let O = this._nodes;
      O[O.length - 1] = z;
    }
  };
  e4.CodeGen = j;
  function x(z, O) {
    for (let A in O) z[A] = (z[A] || 0) + (O[A] || 0);
    return z;
  }
  function W(z, O) {
    return O instanceof t._CodeOrName ? x(z, O.names) : z;
  }
  function G(z, O, A) {
    if (z instanceof t.Name) return J(z);
    if (!Y(z)) return z;
    return new t._Code(z._items.reduce((re, Q) => {
      if (Q instanceof t.Name) Q = J(Q);
      if (Q instanceof t._Code) re.push(...Q._items);
      else re.push(Q);
      return re;
    }, []));
    function J(re) {
      let Q = A[re.str];
      if (Q === void 0 || O[re.str] !== 1) return re;
      return delete O[re.str], Q;
    }
    function Y(re) {
      return re instanceof t._Code && re._items.some((Q) => Q instanceof t.Name && O[Q.str] === 1 && A[Q.str] !== void 0);
    }
  }
  function se(z, O) {
    for (let A in O) z[A] = (z[A] || 0) - (O[A] || 0);
  }
  function le(z) {
    return typeof z == "boolean" || typeof z == "number" || z === null ? !z : t._`!${F(z)}`;
  }
  e4.not = le;
  let ie = U(e4.operators.AND);
  function Se(...z) {
    return z.reduce(ie);
  }
  e4.and = Se;
  let ae = U(e4.operators.OR);
  function N(...z) {
    return z.reduce(ae);
  }
  e4.or = N;
  function U(z) {
    return (O, A) => O === t.nil ? A : A === t.nil ? O : t._`${F(O)} ${z} ${F(A)}`;
  }
  function F(z) {
    return z instanceof t.Name ? z : t._`(${z})`;
  }
}), ne = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.checkStrictMode = e4.getErrorPath = e4.Type = e4.useFunc = e4.setEvaluated = e4.evaluatedPropsToName = e4.mergeEvaluated = e4.eachItem = e4.unescapeJsonPointer = e4.escapeJsonPointer = e4.escapeFragment = e4.unescapeFragment = e4.schemaRefOrVal = e4.schemaHasRulesButRef = e4.schemaHasRules = e4.checkUnknownRules = e4.alwaysValidSchema = e4.toHash = void 0;
  let t = te(), r = mo();
  function s(b) {
    let S = {};
    for (let q of b) S[q] = true;
    return S;
  }
  e4.toHash = s;
  function a(b, S) {
    if (typeof S == "boolean") return S;
    if (Object.keys(S).length === 0) return true;
    return n(b, S), !i(S, b.self.RULES.all);
  }
  e4.alwaysValidSchema = a;
  function n(b, S = b.schema) {
    let { opts: q, self: L } = b;
    if (!q.strictSchema) return;
    if (typeof S === "boolean") return;
    let H = L.RULES.keywords;
    for (let j in S) if (!H[j]) k(b, `unknown keyword: "${j}"`);
  }
  e4.checkUnknownRules = n;
  function i(b, S) {
    if (typeof b == "boolean") return !b;
    for (let q in b) if (S[q]) return true;
    return false;
  }
  e4.schemaHasRules = i;
  function l(b, S) {
    if (typeof b == "boolean") return !b;
    for (let q in b) if (q !== "$ref" && S.all[q]) return true;
    return false;
  }
  e4.schemaHasRulesButRef = l;
  function c({ topSchemaRef: b, schemaPath: S }, q, L, H) {
    if (!H) {
      if (typeof q == "number" || typeof q == "boolean") return q;
      if (typeof q == "string") return t._`${q}`;
    }
    return t._`${b}${S}${(0, t.getProperty)(L)}`;
  }
  e4.schemaRefOrVal = c;
  function d(b) {
    return w(decodeURIComponent(b));
  }
  e4.unescapeFragment = d;
  function m(b) {
    return encodeURIComponent(_(b));
  }
  e4.escapeFragment = m;
  function _(b) {
    if (typeof b == "number") return `${b}`;
    return b.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e4.escapeJsonPointer = _;
  function w(b) {
    return b.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e4.unescapeJsonPointer = w;
  function P(b, S) {
    if (Array.isArray(b)) for (let q of b) S(q);
    else S(b);
  }
  e4.eachItem = P;
  function y({ mergeNames: b, mergeToName: S, mergeValues: q, resultToName: L }) {
    return (H, j, x, W) => {
      let G = x === void 0 ? j : x instanceof t.Name ? (j instanceof t.Name ? b(H, j, x) : S(H, j, x), x) : j instanceof t.Name ? (S(H, x, j), j) : q(j, x);
      return W === t.Name && !(G instanceof t.Name) ? L(H, G) : G;
    };
  }
  e4.mergeEvaluated = { props: y({ mergeNames: (b, S, q) => b.if(t._`${q} !== true && ${S} !== undefined`, () => {
    b.if(t._`${S} === true`, () => b.assign(q, true), () => b.assign(q, t._`${q} || {}`).code(t._`Object.assign(${q}, ${S})`));
  }), mergeToName: (b, S, q) => b.if(t._`${q} !== true`, () => {
    if (S === true) b.assign(q, true);
    else b.assign(q, t._`${q} || {}`), p(b, q, S);
  }), mergeValues: (b, S) => b === true ? true : { ...b, ...S }, resultToName: v }), items: y({ mergeNames: (b, S, q) => b.if(t._`${q} !== true && ${S} !== undefined`, () => b.assign(q, t._`${S} === true ? true : ${q} > ${S} ? ${q} : ${S}`)), mergeToName: (b, S, q) => b.if(t._`${q} !== true`, () => b.assign(q, S === true ? true : t._`${q} > ${S} ? ${q} : ${S}`)), mergeValues: (b, S) => b === true ? true : Math.max(b, S), resultToName: (b, S) => b.var("items", S) }) };
  function v(b, S) {
    if (S === true) return b.var("props", true);
    let q = b.var("props", t._`{}`);
    if (S !== void 0) p(b, q, S);
    return q;
  }
  e4.evaluatedPropsToName = v;
  function p(b, S, q) {
    Object.keys(q).forEach((L) => b.assign(t._`${S}${(0, t.getProperty)(L)}`, true));
  }
  e4.setEvaluated = p;
  let h = {};
  function g(b, S) {
    return b.scopeValue("func", { ref: S, code: h[S.code] || (h[S.code] = new r._Code(S.code)) });
  }
  e4.useFunc = g;
  var f;
  (function(b) {
    b[b.Num = 0] = "Num", b[b.Str = 1] = "Str";
  })(f || (e4.Type = f = {}));
  function R(b, S, q) {
    if (b instanceof t.Name) {
      let L = S === f.Num;
      return q ? L ? t._`"[" + ${b} + "]"` : t._`"['" + ${b} + "']"` : L ? t._`"/" + ${b}` : t._`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return q ? (0, t.getProperty)(b).toString() : "/" + _(b);
  }
  e4.getErrorPath = R;
  function k(b, S, q = b.opts.strictSchema) {
    if (!q) return;
    if (S = `strict mode: ${S}`, q === true) throw Error(S);
    b.self.logger.warn(S);
  }
  e4.checkStrictMode = k;
}), Ae = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { data: new t.Name("data"), valCxt: new t.Name("valCxt"), instancePath: new t.Name("instancePath"), parentData: new t.Name("parentData"), parentDataProperty: new t.Name("parentDataProperty"), rootData: new t.Name("rootData"), dynamicAnchors: new t.Name("dynamicAnchors"), vErrors: new t.Name("vErrors"), errors: new t.Name("errors"), this: new t.Name("this"), self: new t.Name("self"), scope: new t.Name("scope"), json: new t.Name("json"), jsonPos: new t.Name("jsonPos"), jsonLen: new t.Name("jsonLen"), jsonPart: new t.Name("jsonPart") };
  e4.default = r;
}), fo = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendErrors = e4.resetErrorsCount = e4.reportExtraError = e4.reportError = e4.keyword$DataError = e4.keywordError = void 0;
  let t = te(), r = ne(), s = Ae();
  e4.keywordError = { message: ({ keyword: p }) => t.str`must pass "${p}" keyword validation` }, e4.keyword$DataError = { message: ({ keyword: p, schemaType: h }) => h ? t.str`"${p}" keyword must be ${h} ($data)` : t.str`"${p}" keyword is invalid ($data)` };
  function a(p, h = e4.keywordError, g, f) {
    let { it: R } = p, { gen: k, compositeRule: b, allErrors: S } = R, q = _(p, h, g);
    if (f !== null && f !== void 0 ? f : b || S) c(k, q);
    else d(R, t._`[${q}]`);
  }
  e4.reportError = a;
  function n(p, h = e4.keywordError, g) {
    let { it: f } = p, { gen: R, compositeRule: k, allErrors: b } = f;
    if (c(R, _(p, h, g)), !(k || b)) d(f, s.default.vErrors);
  }
  e4.reportExtraError = n;
  function i(p, h) {
    p.assign(s.default.errors, h), p.if(t._`${s.default.vErrors} !== null`, () => p.if(h, () => p.assign(t._`${s.default.vErrors}.length`, h), () => p.assign(s.default.vErrors, null)));
  }
  e4.resetErrorsCount = i;
  function l({ gen: p, keyword: h, schemaValue: g, data: f, errsCount: R, it: k }) {
    if (R === void 0) throw Error("ajv implementation error");
    let b = p.name("err");
    p.forRange("i", R, s.default.errors, (S) => {
      if (p.const(b, t._`${s.default.vErrors}[${S}]`), p.if(t._`${b}.instancePath === undefined`, () => p.assign(t._`${b}.instancePath`, (0, t.strConcat)(s.default.instancePath, k.errorPath))), p.assign(t._`${b}.schemaPath`, t.str`${k.errSchemaPath}/${h}`), k.opts.verbose) p.assign(t._`${b}.schema`, g), p.assign(t._`${b}.data`, f);
    });
  }
  e4.extendErrors = l;
  function c(p, h) {
    let g = p.const("err", h);
    p.if(t._`${s.default.vErrors} === null`, () => p.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`), p.code(t._`${s.default.errors}++`);
  }
  function d(p, h) {
    let { gen: g, validateName: f, schemaEnv: R } = p;
    if (R.$async) g.throw(t._`new ${p.ValidationError}(${h})`);
    else g.assign(t._`${f}.errors`, h), g.return(false);
  }
  let m = { keyword: new t.Name("keyword"), schemaPath: new t.Name("schemaPath"), params: new t.Name("params"), propertyName: new t.Name("propertyName"), message: new t.Name("message"), schema: new t.Name("schema"), parentSchema: new t.Name("parentSchema") };
  function _(p, h, g) {
    let { createErrors: f } = p.it;
    if (f === false) return t._`{}`;
    return w(p, h, g);
  }
  function w(p, h, g = {}) {
    let { gen: f, it: R } = p, k = [P(R, g), y(p, g)];
    return v(p, h, k), f.object(...k);
  }
  function P({ errorPath: p }, { instancePath: h }) {
    let g = h ? t.str`${p}${(0, r.getErrorPath)(h, r.Type.Str)}` : p;
    return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
  }
  function y({ keyword: p, it: { errSchemaPath: h } }, { schemaPath: g, parentSchema: f }) {
    let R = f ? h : t.str`${h}/${p}`;
    if (g) R = t.str`${R}${(0, r.getErrorPath)(g, r.Type.Str)}`;
    return [m.schemaPath, R];
  }
  function v(p, { params: h, message: g }, f) {
    let { keyword: R, data: k, schemaValue: b, it: S } = p, { opts: q, propertyName: L, topSchemaRef: H, schemaPath: j } = S;
    if (f.push([m.keyword, R], [m.params, typeof h == "function" ? h(p) : h || t._`{}`]), q.messages) f.push([m.message, typeof g == "function" ? g(p) : g]);
    if (q.verbose) f.push([m.schema, b], [m.parentSchema, t._`${H}${j}`], [s.default.data, k]);
    if (L) f.push([m.propertyName, L]);
  }
}), hu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.boolOrEmptySchema = e4.topBoolOrEmptySchema = void 0;
  let t = fo(), r = te(), s = Ae(), a = { message: "boolean schema is false" };
  function n(c) {
    let { gen: d, schema: m, validateName: _ } = c;
    if (m === false) l(c, false);
    else if (typeof m == "object" && m.$async === true) d.return(s.default.data);
    else d.assign(r._`${_}.errors`, null), d.return(true);
  }
  e4.topBoolOrEmptySchema = n;
  function i(c, d) {
    let { gen: m, schema: _ } = c;
    if (_ === false) m.var(d, false), l(c);
    else m.var(d, true);
  }
  e4.boolOrEmptySchema = i;
  function l(c, d) {
    let { gen: m, data: _ } = c, w = { gen: m, keyword: "false schema", data: _, schema: false, schemaCode: false, schemaValue: false, params: {}, it: c };
    (0, t.reportError)(w, a, void 0, d);
  }
}), Ii = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getRules = e4.isJSONType = void 0;
  let t = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
  function r(a) {
    return typeof a == "string" && t.has(a);
  }
  e4.isJSONType = r;
  function s() {
    let a = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
    return { types: { ...a, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, a.number, a.string, a.array, a.object], post: { rules: [] }, all: {}, keywords: {} };
  }
  e4.getRules = s;
}), Oi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.shouldUseRule = e4.shouldUseGroup = e4.schemaHasRulesForType = void 0;
  function t({ schema: a, self: n }, i) {
    let l = n.RULES.types[i];
    return l && l !== true && r(a, l);
  }
  e4.schemaHasRulesForType = t;
  function r(a, n) {
    return n.rules.some((i) => s(a, i));
  }
  e4.shouldUseGroup = r;
  function s(a, n) {
    var i;
    return a[n.keyword] !== void 0 || ((i = n.definition.implements) === null || i === void 0 ? void 0 : i.some((l) => a[l] !== void 0));
  }
  e4.shouldUseRule = s;
}), po = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.reportTypeError = e4.checkDataTypes = e4.checkDataType = e4.coerceAndCheckDataType = e4.getJSONTypes = e4.getSchemaTypes = e4.DataType = void 0;
  let t = Ii(), r = Oi(), s = fo(), a = te(), n = ne();
  var i;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(i || (e4.DataType = i = {}));
  function l(f) {
    let R = c(f.type);
    if (R.includes("null")) {
      if (f.nullable === false) throw Error("type: null contradicts nullable: false");
    } else {
      if (!R.length && f.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (f.nullable === true) R.push("null");
    }
    return R;
  }
  e4.getSchemaTypes = l;
  function c(f) {
    let R = Array.isArray(f) ? f : f ? [f] : [];
    if (R.every(t.isJSONType)) return R;
    throw Error("type must be JSONType or JSONType[]: " + R.join(","));
  }
  e4.getJSONTypes = c;
  function d(f, R) {
    let { gen: k, data: b, opts: S } = f, q = _(R, S.coerceTypes), L = R.length > 0 && !(q.length === 0 && R.length === 1 && (0, r.schemaHasRulesForType)(f, R[0]));
    if (L) {
      let H = v(R, b, S.strictNumbers, i.Wrong);
      k.if(H, () => {
        if (q.length) w(f, R, q);
        else h(f);
      });
    }
    return L;
  }
  e4.coerceAndCheckDataType = d;
  let m = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function _(f, R) {
    return R ? f.filter((k) => m.has(k) || R === "array" && k === "array") : [];
  }
  function w(f, R, k) {
    let { gen: b, data: S, opts: q } = f, L = b.let("dataType", a._`typeof ${S}`), H = b.let("coerced", a._`undefined`);
    if (q.coerceTypes === "array") b.if(a._`${L} == 'object' && Array.isArray(${S}) && ${S}.length == 1`, () => b.assign(S, a._`${S}[0]`).assign(L, a._`typeof ${S}`).if(v(R, S, q.strictNumbers), () => b.assign(H, S)));
    b.if(a._`${H} !== undefined`);
    for (let x of k) if (m.has(x) || x === "array" && q.coerceTypes === "array") j(x);
    b.else(), h(f), b.endIf(), b.if(a._`${H} !== undefined`, () => {
      b.assign(S, H), P(f, H);
    });
    function j(x) {
      switch (x) {
        case "string":
          b.elseIf(a._`${L} == "number" || ${L} == "boolean"`).assign(H, a._`"" + ${S}`).elseIf(a._`${S} === null`).assign(H, a._`""`);
          return;
        case "number":
          b.elseIf(a._`${L} == "boolean" || ${S} === null
              || (${L} == "string" && ${S} && ${S} == +${S})`).assign(H, a._`+${S}`);
          return;
        case "integer":
          b.elseIf(a._`${L} === "boolean" || ${S} === null
              || (${L} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(H, a._`+${S}`);
          return;
        case "boolean":
          b.elseIf(a._`${S} === "false" || ${S} === 0 || ${S} === null`).assign(H, false).elseIf(a._`${S} === "true" || ${S} === 1`).assign(H, true);
          return;
        case "null":
          b.elseIf(a._`${S} === "" || ${S} === 0 || ${S} === false`), b.assign(H, null);
          return;
        case "array":
          b.elseIf(a._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${S} === null`).assign(H, a._`[${S}]`);
      }
    }
  }
  function P({ gen: f, parentData: R, parentDataProperty: k }, b) {
    f.if(a._`${R} !== undefined`, () => f.assign(a._`${R}[${k}]`, b));
  }
  function y(f, R, k, b = i.Correct) {
    let S = b === i.Correct ? a.operators.EQ : a.operators.NEQ, q;
    switch (f) {
      case "null":
        return a._`${R} ${S} null`;
      case "array":
        q = a._`Array.isArray(${R})`;
        break;
      case "object":
        q = a._`${R} && typeof ${R} == "object" && !Array.isArray(${R})`;
        break;
      case "integer":
        q = L(a._`!(${R} % 1) && !isNaN(${R})`);
        break;
      case "number":
        q = L();
        break;
      default:
        return a._`typeof ${R} ${S} ${f}`;
    }
    return b === i.Correct ? q : (0, a.not)(q);
    function L(H = a.nil) {
      return (0, a.and)(a._`typeof ${R} == "number"`, H, k ? a._`isFinite(${R})` : a.nil);
    }
  }
  e4.checkDataType = y;
  function v(f, R, k, b) {
    if (f.length === 1) return y(f[0], R, k, b);
    let S, q = (0, n.toHash)(f);
    if (q.array && q.object) {
      let L = a._`typeof ${R} != "object"`;
      S = q.null ? L : a._`!${R} || ${L}`, delete q.null, delete q.array, delete q.object;
    } else S = a.nil;
    if (q.number) delete q.integer;
    for (let L in q) S = (0, a.and)(S, y(L, R, k, b));
    return S;
  }
  e4.checkDataTypes = v;
  let p = { message: ({ schema: f }) => `must be ${f}`, params: ({ schema: f, schemaValue: R }) => typeof f == "string" ? a._`{type: ${f}}` : a._`{type: ${R}}` };
  function h(f) {
    let R = g(f);
    (0, s.reportError)(R, p);
  }
  e4.reportTypeError = h;
  function g(f) {
    let { gen: R, data: k, schema: b } = f, S = (0, n.schemaRefOrVal)(f, b, "type");
    return { gen: R, keyword: "type", data: k, schema: b.type, schemaCode: S, schemaValue: S, parentSchema: b, params: {}, it: f };
  }
}), mu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.assignDefaults = void 0;
  let t = te(), r = ne();
  function s(n, i) {
    let { properties: l, items: c } = n.schema;
    if (i === "object" && l) for (let d in l) a(n, d, l[d].default);
    else if (i === "array" && Array.isArray(c)) c.forEach((d, m) => a(n, m, d.default));
  }
  e4.assignDefaults = s;
  function a(n, i, l) {
    let { gen: c, compositeRule: d, data: m, opts: _ } = n;
    if (l === void 0) return;
    let w = t._`${m}${(0, t.getProperty)(i)}`;
    if (d) {
      (0, r.checkStrictMode)(n, `default is ignored for: ${w}`);
      return;
    }
    let P = t._`${w} === undefined`;
    if (_.useDefaults === "empty") P = t._`${P} || ${w} === null || ${w} === ""`;
    c.if(P, t._`${w} = ${(0, t.stringify)(l)}`);
  }
}), Le = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateUnion = e4.validateArray = e4.usePattern = e4.callValidateCode = e4.schemaProperties = e4.allSchemaProperties = e4.noPropertyInData = e4.propertyInData = e4.isOwnProperty = e4.hasPropFunc = e4.reportMissingProp = e4.checkMissingProp = e4.checkReportMissingProp = void 0;
  let t = te(), r = ne(), s = Ae(), a = ne();
  function n(f, R) {
    let { gen: k, data: b, it: S } = f;
    k.if(_(k, b, R, S.opts.ownProperties), () => {
      f.setParams({ missingProperty: t._`${R}` }, true), f.error();
    });
  }
  e4.checkReportMissingProp = n;
  function i({ gen: f, data: R, it: { opts: k } }, b, S) {
    return (0, t.or)(...b.map((q) => (0, t.and)(_(f, R, q, k.ownProperties), t._`${S} = ${q}`)));
  }
  e4.checkMissingProp = i;
  function l(f, R) {
    f.setParams({ missingProperty: R }, true), f.error();
  }
  e4.reportMissingProp = l;
  function c(f) {
    return f.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: t._`Object.prototype.hasOwnProperty` });
  }
  e4.hasPropFunc = c;
  function d(f, R, k) {
    return t._`${c(f)}.call(${R}, ${k})`;
  }
  e4.isOwnProperty = d;
  function m(f, R, k, b) {
    let S = t._`${R}${(0, t.getProperty)(k)} !== undefined`;
    return b ? t._`${S} && ${d(f, R, k)}` : S;
  }
  e4.propertyInData = m;
  function _(f, R, k, b) {
    let S = t._`${R}${(0, t.getProperty)(k)} === undefined`;
    return b ? (0, t.or)(S, (0, t.not)(d(f, R, k))) : S;
  }
  e4.noPropertyInData = _;
  function w(f) {
    return f ? Object.keys(f).filter((R) => R !== "__proto__") : [];
  }
  e4.allSchemaProperties = w;
  function P(f, R) {
    return w(R).filter((k) => !(0, r.alwaysValidSchema)(f, R[k]));
  }
  e4.schemaProperties = P;
  function y({ schemaCode: f, data: R, it: { gen: k, topSchemaRef: b, schemaPath: S, errorPath: q }, it: L }, H, j, x) {
    let W = x ? t._`${f}, ${R}, ${b}${S}` : R, G = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, q)], [s.default.parentData, L.parentData], [s.default.parentDataProperty, L.parentDataProperty], [s.default.rootData, s.default.rootData]];
    if (L.opts.dynamicRef) G.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    let se = t._`${W}, ${k.object(...G)}`;
    return j !== t.nil ? t._`${H}.call(${j}, ${se})` : t._`${H}(${se})`;
  }
  e4.callValidateCode = y;
  let v = t._`new RegExp`;
  function p({ gen: f, it: { opts: R } }, k) {
    let b = R.unicodeRegExp ? "u" : "", { regExp: S } = R.code, q = S(k, b);
    return f.scopeValue("pattern", { key: q.toString(), ref: q, code: t._`${S.code === "new RegExp" ? v : (0, a.useFunc)(f, S)}(${k}, ${b})` });
  }
  e4.usePattern = p;
  function h(f) {
    let { gen: R, data: k, keyword: b, it: S } = f, q = R.name("valid");
    if (S.allErrors) {
      let H = R.let("valid", true);
      return L(() => R.assign(H, false)), H;
    }
    return R.var(q, true), L(() => R.break()), q;
    function L(H) {
      let j = R.const("len", t._`${k}.length`);
      R.forRange("i", 0, j, (x) => {
        f.subschema({ keyword: b, dataProp: x, dataPropType: r.Type.Num }, q), R.if((0, t.not)(q), H);
      });
    }
  }
  e4.validateArray = h;
  function g(f) {
    let { gen: R, schema: k, keyword: b, it: S } = f;
    if (!Array.isArray(k)) throw Error("ajv implementation error");
    if (k.some((H) => (0, r.alwaysValidSchema)(S, H)) && !S.opts.unevaluated) return;
    let q = R.let("valid", false), L = R.name("_valid");
    R.block(() => k.forEach((H, j) => {
      let x = f.subschema({ keyword: b, schemaProp: j, compositeRule: true }, L);
      if (R.assign(q, t._`${q} || ${L}`), !f.mergeValidEvaluated(x, L)) R.if((0, t.not)(q));
    })), f.result(q, () => f.reset(), () => f.error(true));
  }
  e4.validateUnion = g;
}), pu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateKeywordUsage = e4.validSchemaType = e4.funcKeywordCode = e4.macroKeywordCode = void 0;
  let t = te(), r = Ae(), s = Le(), a = fo();
  function n(P, y) {
    let { gen: v, keyword: p, schema: h, parentSchema: g, it: f } = P, R = y.macro.call(f.self, h, g, f), k = m(v, p, R);
    if (f.opts.validateSchema !== false) f.self.validateSchema(R, true);
    let b = v.name("valid");
    P.subschema({ schema: R, schemaPath: t.nil, errSchemaPath: `${f.errSchemaPath}/${p}`, topSchemaRef: k, compositeRule: true }, b), P.pass(b, () => P.error(true));
  }
  e4.macroKeywordCode = n;
  function i(P, y) {
    var v;
    let { gen: p, keyword: h, schema: g, parentSchema: f, $data: R, it: k } = P;
    d(k, y);
    let b = m(p, h, !R && y.compile ? y.compile.call(k.self, g, f, k) : y.validate), S = p.let("valid");
    P.block$data(S, q), P.ok((v = y.valid) !== null && v !== void 0 ? v : S);
    function q() {
      if (y.errors === false) {
        if (j(), y.modifying) l(P);
        x(() => P.error());
      } else {
        let W = y.async ? L() : H();
        if (y.modifying) l(P);
        x(() => c(P, W));
      }
    }
    function L() {
      let W = p.let("ruleErrs", null);
      return p.try(() => j(t._`await `), (G) => p.assign(S, false).if(t._`${G} instanceof ${k.ValidationError}`, () => p.assign(W, t._`${G}.errors`), () => p.throw(G))), W;
    }
    function H() {
      let W = t._`${b}.errors`;
      return p.assign(W, null), j(t.nil), W;
    }
    function j(W = y.async ? t._`await ` : t.nil) {
      let G = k.opts.passContext ? r.default.this : r.default.self, se = !("compile" in y && !R || y.schema === false);
      p.assign(S, t._`${W}${(0, s.callValidateCode)(P, b, G, se)}`, y.modifying);
    }
    function x(W) {
      var G;
      p.if((0, t.not)((G = y.valid) !== null && G !== void 0 ? G : S), W);
    }
  }
  e4.funcKeywordCode = i;
  function l(P) {
    let { gen: y, data: v, it: p } = P;
    y.if(p.parentData, () => y.assign(v, t._`${p.parentData}[${p.parentDataProperty}]`));
  }
  function c(P, y) {
    let { gen: v } = P;
    v.if(t._`Array.isArray(${y})`, () => {
      v.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, a.extendErrors)(P);
    }, () => P.error());
  }
  function d({ schemaEnv: P }, y) {
    if (y.async && !P.$async) throw Error("async keyword in sync schema");
  }
  function m(P, y, v) {
    if (v === void 0) throw Error(`keyword "${y}" failed to compile`);
    return P.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, t.stringify)(v) });
  }
  function _(P, y, v = false) {
    return !y.length || y.some((p) => p === "array" ? Array.isArray(P) : p === "object" ? P && typeof P == "object" && !Array.isArray(P) : typeof P == p || v && typeof P > "u");
  }
  e4.validSchemaType = _;
  function w({ schema: P, opts: y, self: v, errSchemaPath: p }, h, g) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g) throw Error("ajv implementation error");
    let f = h.dependencies;
    if (f === null || f === void 0 ? void 0 : f.some((R) => !Object.prototype.hasOwnProperty.call(P, R))) throw Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (h.validateSchema) {
      if (!h.validateSchema(P[g])) {
        let R = `keyword "${g}" value is invalid at path "${p}": ` + v.errorsText(h.validateSchema.errors);
        if (y.validateSchema === "log") v.logger.error(R);
        else throw Error(R);
      }
    }
  }
  e4.validateKeywordUsage = w;
}), fu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendSubschemaMode = e4.extendSubschemaData = e4.getSubschema = void 0;
  let t = te(), r = ne();
  function s(i, { keyword: l, schemaProp: c, schema: d, schemaPath: m, errSchemaPath: _, topSchemaRef: w }) {
    if (l !== void 0 && d !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (l !== void 0) {
      let P = i.schema[l];
      return c === void 0 ? { schema: P, schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}`, errSchemaPath: `${i.errSchemaPath}/${l}` } : { schema: P[c], schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}${(0, t.getProperty)(c)}`, errSchemaPath: `${i.errSchemaPath}/${l}/${(0, r.escapeFragment)(c)}` };
    }
    if (d !== void 0) {
      if (m === void 0 || _ === void 0 || w === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: d, schemaPath: m, topSchemaRef: w, errSchemaPath: _ };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  e4.getSubschema = s;
  function a(i, l, { dataProp: c, dataPropType: d, data: m, dataTypes: _, propertyName: w }) {
    if (m !== void 0 && c !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: P } = l;
    if (c !== void 0) {
      let { errorPath: v, dataPathArr: p, opts: h } = l;
      y(P.let("data", t._`${l.data}${(0, t.getProperty)(c)}`, true)), i.errorPath = t.str`${v}${(0, r.getErrorPath)(c, d, h.jsPropertySyntax)}`, i.parentDataProperty = t._`${c}`, i.dataPathArr = [...p, i.parentDataProperty];
    }
    if (m !== void 0) {
      if (y(m instanceof t.Name ? m : P.let("data", m, true)), w !== void 0) i.propertyName = w;
    }
    if (_) i.dataTypes = _;
    function y(v) {
      i.data = v, i.dataLevel = l.dataLevel + 1, i.dataTypes = [], l.definedProperties = /* @__PURE__ */ new Set(), i.parentData = l.data, i.dataNames = [...l.dataNames, v];
    }
  }
  e4.extendSubschemaData = a;
  function n(i, { jtdDiscriminator: l, jtdMetadata: c, compositeRule: d, createErrors: m, allErrors: _ }) {
    if (d !== void 0) i.compositeRule = d;
    if (m !== void 0) i.createErrors = m;
    if (_ !== void 0) i.allErrors = _;
    i.jtdDiscriminator = l, i.jtdMetadata = c;
  }
  e4.extendSubschemaMode = n;
}), Ni = K((e4, t) => {
  t.exports = function r(s, a) {
    if (s === a) return true;
    if (s && a && typeof s == "object" && typeof a == "object") {
      if (s.constructor !== a.constructor) return false;
      var n, i, l;
      if (Array.isArray(s)) {
        if (n = s.length, n != a.length) return false;
        for (i = n; i-- !== 0; ) if (!r(s[i], a[i])) return false;
        return true;
      }
      if (s.constructor === RegExp) return s.source === a.source && s.flags === a.flags;
      if (s.valueOf !== Object.prototype.valueOf) return s.valueOf() === a.valueOf();
      if (s.toString !== Object.prototype.toString) return s.toString() === a.toString();
      if (l = Object.keys(s), n = l.length, n !== Object.keys(a).length) return false;
      for (i = n; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(a, l[i])) return false;
      for (i = n; i-- !== 0; ) {
        var c = l[i];
        if (!r(s[c], a[c])) return false;
      }
      return true;
    }
    return s !== s && a !== a;
  };
}), Su = K((e4, t) => {
  var r = t.exports = function(n, i, l) {
    if (typeof i == "function") l = i, i = {};
    l = i.cb || l;
    var c = typeof l == "function" ? l : l.pre || function() {
    }, d = l.post || function() {
    };
    s(i, c, d, n, "", n);
  };
  r.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true }, r.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true }, r.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true }, r.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function s(n, i, l, c, d, m, _, w, P, y) {
    if (c && typeof c == "object" && !Array.isArray(c)) {
      i(c, d, m, _, w, P, y);
      for (var v in c) {
        var p = c[v];
        if (Array.isArray(p)) {
          if (v in r.arrayKeywords) for (var h = 0; h < p.length; h++) s(n, i, l, p[h], d + "/" + v + "/" + h, m, d, v, c, h);
        } else if (v in r.propsKeywords) {
          if (p && typeof p == "object") for (var g in p) s(n, i, l, p[g], d + "/" + v + "/" + a(g), m, d, v, c, g);
        } else if (v in r.keywords || n.allKeys && !(v in r.skipKeywords)) s(n, i, l, p, d + "/" + v, m, d, v, c);
      }
      l(c, d, m, _, w, P, y);
    }
  }
  function a(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
}), So = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getSchemaRefs = e4.resolveUrl = e4.normalizeId = e4._getFullPath = e4.getFullPath = e4.inlineRef = void 0;
  let t = ne(), r = Ni(), s = Su(), a = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function n(p, h = true) {
    if (typeof p == "boolean") return true;
    if (h === true) return !l(p);
    if (!h) return false;
    return c(p) <= h;
  }
  e4.inlineRef = n;
  let i = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function l(p) {
    for (let h in p) {
      if (i.has(h)) return true;
      let g = p[h];
      if (Array.isArray(g) && g.some(l)) return true;
      if (typeof g == "object" && l(g)) return true;
    }
    return false;
  }
  function c(p) {
    let h = 0;
    for (let g in p) {
      if (g === "$ref") return 1 / 0;
      if (h++, a.has(g)) continue;
      if (typeof p[g] == "object") (0, t.eachItem)(p[g], (f) => h += c(f));
      if (h === 1 / 0) return 1 / 0;
    }
    return h;
  }
  function d(p, h = "", g) {
    if (g !== false) h = w(h);
    return m(p, p.parse(h));
  }
  e4.getFullPath = d;
  function m(p, h) {
    return p.serialize(h).split("#")[0] + "#";
  }
  e4._getFullPath = m;
  let _ = /#\/?$/;
  function w(p) {
    return p ? p.replace(_, "") : "";
  }
  e4.normalizeId = w;
  function P(p, h, g) {
    return g = w(g), p.resolve(h, g);
  }
  e4.resolveUrl = P;
  let y = /^[a-z_][-a-z0-9._]*$/i;
  function v(p, h) {
    if (typeof p == "boolean") return {};
    let { schemaId: g, uriResolver: f } = this.opts, R = w(p[g] || h), k = { "": R }, b = d(f, R, false), S = {}, q = /* @__PURE__ */ new Set();
    return s(p, { allKeys: true }, (j, x, W, G) => {
      if (G === void 0) return;
      let se = b + x, le = k[G];
      if (typeof j[g] == "string") le = ie.call(this, j[g]);
      Se.call(this, j.$anchor), Se.call(this, j.$dynamicAnchor), k[x] = le;
      function ie(ae) {
        let N = this.opts.uriResolver.resolve;
        if (ae = w(le ? N(le, ae) : ae), q.has(ae)) throw H(ae);
        q.add(ae);
        let U = this.refs[ae];
        if (typeof U == "string") U = this.refs[U];
        if (typeof U == "object") L(j, U.schema, ae);
        else if (ae !== w(se)) if (ae[0] === "#") L(j, S[ae], ae), S[ae] = j;
        else this.refs[ae] = se;
        return ae;
      }
      function Se(ae) {
        if (typeof ae == "string") {
          if (!y.test(ae)) throw Error(`invalid anchor "${ae}"`);
          ie.call(this, `#${ae}`);
        }
      }
    }), S;
    function L(j, x, W) {
      if (x !== void 0 && !r(j, x)) throw H(W);
    }
    function H(j) {
      return Error(`reference "${j}" resolves to more than one schema`);
    }
  }
  e4.getSchemaRefs = v;
}), as = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getData = e4.KeywordCxt = e4.validateFunctionCode = void 0;
  let t = hu(), r = po(), s = Oi(), a = po(), n = mu(), i = pu(), l = fu(), c = te(), d = Ae(), m = So(), _ = ne(), w = fo();
  function P(I) {
    if (b(I)) {
      if (q(I), k(I)) {
        h(I);
        return;
      }
    }
    y(I, () => (0, t.topBoolOrEmptySchema)(I));
  }
  e4.validateFunctionCode = P;
  function y({ gen: I, validateName: D, schema: V, schemaEnv: X, opts: Z }, ee) {
    if (Z.code.es5) I.func(D, c._`${d.default.data}, ${d.default.valCxt}`, X.$async, () => {
      I.code(c._`"use strict"; ${f(V, Z)}`), p(I, Z), I.code(ee);
    });
    else I.func(D, c._`${d.default.data}, ${v(Z)}`, X.$async, () => I.code(f(V, Z)).code(ee));
  }
  function v(I) {
    return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${I.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
  }
  function p(I, D) {
    I.if(d.default.valCxt, () => {
      if (I.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`), I.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`), I.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`), I.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`), D.dynamicRef) I.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      if (I.var(d.default.instancePath, c._`""`), I.var(d.default.parentData, c._`undefined`), I.var(d.default.parentDataProperty, c._`undefined`), I.var(d.default.rootData, d.default.data), D.dynamicRef) I.var(d.default.dynamicAnchors, c._`{}`);
    });
  }
  function h(I) {
    let { schema: D, opts: V, gen: X } = I;
    y(I, () => {
      if (V.$comment && D.$comment) G(I);
      if (j(I), X.let(d.default.vErrors, null), X.let(d.default.errors, 0), V.unevaluated) g(I);
      L(I), se(I);
    });
  }
  function g(I) {
    let { gen: D, validateName: V } = I;
    I.evaluated = D.const("evaluated", c._`${V}.evaluated`), D.if(c._`${I.evaluated}.dynamicProps`, () => D.assign(c._`${I.evaluated}.props`, c._`undefined`)), D.if(c._`${I.evaluated}.dynamicItems`, () => D.assign(c._`${I.evaluated}.items`, c._`undefined`));
  }
  function f(I, D) {
    let V = typeof I == "object" && I[D.schemaId];
    return V && (D.code.source || D.code.process) ? c._`/*# sourceURL=${V} */` : c.nil;
  }
  function R(I, D) {
    if (b(I)) {
      if (q(I), k(I)) {
        S(I, D);
        return;
      }
    }
    (0, t.boolOrEmptySchema)(I, D);
  }
  function k({ schema: I, self: D }) {
    if (typeof I == "boolean") return !I;
    for (let V in I) if (D.RULES.all[V]) return true;
    return false;
  }
  function b(I) {
    return typeof I.schema != "boolean";
  }
  function S(I, D) {
    let { schema: V, gen: X, opts: Z } = I;
    if (Z.$comment && V.$comment) G(I);
    x(I), W(I);
    let ee = X.const("_errs", d.default.errors);
    L(I, ee), X.var(D, c._`${ee} === ${d.default.errors}`);
  }
  function q(I) {
    (0, _.checkUnknownRules)(I), H(I);
  }
  function L(I, D) {
    if (I.opts.jtd) return ie(I, [], false, D);
    let V = (0, r.getSchemaTypes)(I.schema);
    ie(I, V, !(0, r.coerceAndCheckDataType)(I, V), D);
  }
  function H(I) {
    let { schema: D, errSchemaPath: V, opts: X, self: Z } = I;
    if (D.$ref && X.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(D, Z.RULES)) Z.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function j(I) {
    let { schema: D, opts: V } = I;
    if (D.default !== void 0 && V.useDefaults && V.strictSchema) (0, _.checkStrictMode)(I, "default is ignored in the schema root");
  }
  function x(I) {
    let D = I.schema[I.opts.schemaId];
    if (D) I.baseId = (0, m.resolveUrl)(I.opts.uriResolver, I.baseId, D);
  }
  function W(I) {
    if (I.schema.$async && !I.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function G({ gen: I, schemaEnv: D, schema: V, errSchemaPath: X, opts: Z }) {
    let ee = V.$comment;
    if (Z.$comment === true) I.code(c._`${d.default.self}.logger.log(${ee})`);
    else if (typeof Z.$comment == "function") {
      let pe = c.str`${X}/$comment`, _e = I.scopeValue("root", { ref: D.root });
      I.code(c._`${d.default.self}.opts.$comment(${ee}, ${pe}, ${_e}.schema)`);
    }
  }
  function se(I) {
    let { gen: D, schemaEnv: V, validateName: X, ValidationError: Z, opts: ee } = I;
    if (V.$async) D.if(c._`${d.default.errors} === 0`, () => D.return(d.default.data), () => D.throw(c._`new ${Z}(${d.default.vErrors})`));
    else {
      if (D.assign(c._`${X}.errors`, d.default.vErrors), ee.unevaluated) le(I);
      D.return(c._`${d.default.errors} === 0`);
    }
  }
  function le({ gen: I, evaluated: D, props: V, items: X }) {
    if (V instanceof c.Name) I.assign(c._`${D}.props`, V);
    if (X instanceof c.Name) I.assign(c._`${D}.items`, X);
  }
  function ie(I, D, V, X) {
    let { gen: Z, schema: ee, data: pe, allErrors: _e, opts: Re, self: ge } = I, { RULES: ue } = ge;
    if (ee.$ref && (Re.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(ee, ue))) {
      Z.block(() => re(I, "$ref", ue.all.$ref.definition));
      return;
    }
    if (!Re.jtd) ae(I, D);
    Z.block(() => {
      for (let ye of ue.rules) Oe(ye);
      Oe(ue.post);
    });
    function Oe(ye) {
      if (!(0, s.shouldUseGroup)(ee, ye)) return;
      if (ye.type) {
        if (Z.if((0, a.checkDataType)(ye.type, pe, Re.strictNumbers)), Se(I, ye), D.length === 1 && D[0] === ye.type && V) Z.else(), (0, a.reportTypeError)(I);
        Z.endIf();
      } else Se(I, ye);
      if (!_e) Z.if(c._`${d.default.errors} === ${X || 0}`);
    }
  }
  function Se(I, D) {
    let { gen: V, schema: X, opts: { useDefaults: Z } } = I;
    if (Z) (0, n.assignDefaults)(I, D.type);
    V.block(() => {
      for (let ee of D.rules) if ((0, s.shouldUseRule)(X, ee)) re(I, ee.keyword, ee.definition, D.type);
    });
  }
  function ae(I, D) {
    if (I.schemaEnv.meta || !I.opts.strictTypes) return;
    if (N(I, D), !I.opts.allowUnionTypes) U(I, D);
    F(I, I.dataTypes);
  }
  function N(I, D) {
    if (!D.length) return;
    if (!I.dataTypes.length) {
      I.dataTypes = D;
      return;
    }
    D.forEach((V) => {
      if (!O(I.dataTypes, V)) J(I, `type "${V}" not allowed by context "${I.dataTypes.join(",")}"`);
    }), A(I, D);
  }
  function U(I, D) {
    if (D.length > 1 && !(D.length === 2 && D.includes("null"))) J(I, "use allowUnionTypes to allow union type keyword");
  }
  function F(I, D) {
    let V = I.self.RULES.all;
    for (let X in V) {
      let Z = V[X];
      if (typeof Z == "object" && (0, s.shouldUseRule)(I.schema, Z)) {
        let { type: ee } = Z.definition;
        if (ee.length && !ee.some((pe) => z(D, pe))) J(I, `missing type "${ee.join(",")}" for keyword "${X}"`);
      }
    }
  }
  function z(I, D) {
    return I.includes(D) || D === "number" && I.includes("integer");
  }
  function O(I, D) {
    return I.includes(D) || D === "integer" && I.includes("number");
  }
  function A(I, D) {
    let V = [];
    for (let X of I.dataTypes) if (O(D, X)) V.push(X);
    else if (D.includes("integer") && X === "number") V.push("integer");
    I.dataTypes = V;
  }
  function J(I, D) {
    let V = I.schemaEnv.baseId + I.errSchemaPath;
    D += ` at "${V}" (strictTypes)`, (0, _.checkStrictMode)(I, D, I.opts.strictTypes);
  }
  var Y = class {
    constructor(I, D, V) {
      if ((0, i.validateKeywordUsage)(I, D, V), this.gen = I.gen, this.allErrors = I.allErrors, this.keyword = V, this.data = I.data, this.schema = I.schema[V], this.$data = D.$data && I.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(I, this.schema, V, this.$data), this.schemaType = D.schemaType, this.parentSchema = I.schema, this.params = {}, this.it = I, this.def = D, this.$data) this.schemaCode = I.gen.const("vSchema", Pe(this.$data, I));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, D.schemaType, D.allowUndefined)) throw Error(`${V} value must be ${JSON.stringify(D.schemaType)}`);
      if ("code" in D ? D.trackErrors : D.errors !== false) this.errsCount = I.gen.const("_errs", d.default.errors);
    }
    result(I, D, V) {
      this.failResult((0, c.not)(I), D, V);
    }
    failResult(I, D, V) {
      if (this.gen.if(I), V) V();
      else this.error();
      if (D) {
        if (this.gen.else(), D(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    pass(I, D) {
      this.failResult((0, c.not)(I), void 0, D);
    }
    fail(I) {
      if (I === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(false);
        return;
      }
      if (this.gen.if(I), this.error(), this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    fail$data(I) {
      if (!this.$data) return this.fail(I);
      let { schemaCode: D } = this;
      this.fail(c._`${D} !== undefined && (${(0, c.or)(this.invalid$data(), I)})`);
    }
    error(I, D, V) {
      if (D) {
        this.setParams(D), this._error(I, V), this.setParams({});
        return;
      }
      this._error(I, V);
    }
    _error(I, D) {
      (I ? w.reportExtraError : w.reportError)(this, this.def.error, D);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(I) {
      if (!this.allErrors) this.gen.if(I);
    }
    setParams(I, D) {
      if (D) Object.assign(this.params, I);
      else this.params = I;
    }
    block$data(I, D, V = c.nil) {
      this.gen.block(() => {
        this.check$data(I, V), D();
      });
    }
    check$data(I = c.nil, D = c.nil) {
      if (!this.$data) return;
      let { gen: V, schemaCode: X, schemaType: Z, def: ee } = this;
      if (V.if((0, c.or)(c._`${X} === undefined`, D)), I !== c.nil) V.assign(I, true);
      if (Z.length || ee.validateSchema) {
        if (V.elseIf(this.invalid$data()), this.$dataError(), I !== c.nil) V.assign(I, false);
      }
      V.else();
    }
    invalid$data() {
      let { gen: I, schemaCode: D, schemaType: V, def: X, it: Z } = this;
      return (0, c.or)(ee(), pe());
      function ee() {
        if (V.length) {
          if (!(D instanceof c.Name)) throw Error("ajv implementation error");
          let _e = Array.isArray(V) ? V : [V];
          return c._`${(0, a.checkDataTypes)(_e, D, Z.opts.strictNumbers, a.DataType.Wrong)}`;
        }
        return c.nil;
      }
      function pe() {
        if (X.validateSchema) {
          let _e = I.scopeValue("validate$data", { ref: X.validateSchema });
          return c._`!${_e}(${D})`;
        }
        return c.nil;
      }
    }
    subschema(I, D) {
      let V = (0, l.getSubschema)(this.it, I);
      (0, l.extendSubschemaData)(V, this.it, I), (0, l.extendSubschemaMode)(V, I);
      let X = { ...this.it, ...V, items: void 0, props: void 0 };
      return R(X, D), X;
    }
    mergeEvaluated(I, D) {
      let { it: V, gen: X } = this;
      if (!V.opts.unevaluated) return;
      if (V.props !== true && I.props !== void 0) V.props = _.mergeEvaluated.props(X, I.props, V.props, D);
      if (V.items !== true && I.items !== void 0) V.items = _.mergeEvaluated.items(X, I.items, V.items, D);
    }
    mergeValidEvaluated(I, D) {
      let { it: V, gen: X } = this;
      if (V.opts.unevaluated && (V.props !== true || V.items !== true)) return X.if(D, () => this.mergeEvaluated(I, c.Name)), true;
    }
  };
  e4.KeywordCxt = Y;
  function re(I, D, V, X) {
    let Z = new Y(I, V, D);
    if ("code" in V) V.code(Z, X);
    else if (Z.$data && V.validate) (0, i.funcKeywordCode)(Z, V);
    else if ("macro" in V) (0, i.macroKeywordCode)(Z, V);
    else if (V.compile || V.validate) (0, i.funcKeywordCode)(Z, V);
  }
  let Q = /^\/(?:[^~]|~0|~1)*$/, ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Pe(I, { dataLevel: D, dataNames: V, dataPathArr: X }) {
    let Z, ee;
    if (I === "") return d.default.rootData;
    if (I[0] === "/") {
      if (!Q.test(I)) throw Error(`Invalid JSON-pointer: ${I}`);
      Z = I, ee = d.default.rootData;
    } else {
      let ge = ce.exec(I);
      if (!ge) throw Error(`Invalid JSON-pointer: ${I}`);
      let ue = +ge[1];
      if (Z = ge[2], Z === "#") {
        if (ue >= D) throw Error(Re("property/index", ue));
        return X[D - ue];
      }
      if (ue > D) throw Error(Re("data", ue));
      if (ee = V[D - ue], !Z) return ee;
    }
    let pe = ee, _e = Z.split("/");
    for (let ge of _e) if (ge) ee = c._`${ee}${(0, c.getProperty)((0, _.unescapeJsonPointer)(ge))}`, pe = c._`${pe} && ${ee}`;
    return pe;
    function Re(ge, ue) {
      return `Cannot access ${ge} ${ue} levels up, current level is ${D}`;
    }
  }
  e4.getData = Pe;
}), go = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  var t = class extends Error {
    constructor(r) {
      super("validation failed");
      this.errors = r, this.ajv = this.validation = true;
    }
  };
  e4.default = t;
}), os = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = So();
  var r = class extends Error {
    constructor(s, a, n, i) {
      super(i || `can't resolve reference ${n} from id ${a}`);
      this.missingRef = (0, t.resolveUrl)(s, a, n), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef));
    }
  };
  e4.default = r;
}), _o = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.resolveSchema = e4.getCompilingSchema = e4.resolveRef = e4.compileSchema = e4.SchemaEnv = void 0;
  let t = te(), r = go(), s = Ae(), a = So(), n = ne(), i = as();
  var l = class {
    constructor(h) {
      var g;
      this.refs = {}, this.dynamicAnchors = {};
      let f;
      if (typeof h.schema == "object") f = h.schema;
      this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (g = h.baseId) !== null && g !== void 0 ? g : (0, a.normalizeId)(f === null || f === void 0 ? void 0 : f[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = f === null || f === void 0 ? void 0 : f.$async, this.refs = {};
    }
  };
  e4.SchemaEnv = l;
  function c(h) {
    let g = _.call(this, h);
    if (g) return g;
    let f = (0, a.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: R, lines: k } = this.opts.code, { ownProperties: b } = this.opts, S = new t.CodeGen(this.scope, { es5: R, lines: k, ownProperties: b }), q;
    if (h.$async) q = S.scopeValue("Error", { ref: r.default, code: t._`require("ajv/dist/runtime/validation_error").default` });
    let L = S.scopeName("validate");
    h.validateName = L;
    let H = { gen: S, allErrors: this.opts.allErrors, data: s.default.data, parentData: s.default.parentData, parentDataProperty: s.default.parentDataProperty, dataNames: [s.default.data], dataPathArr: [t.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: S.scopeValue("schema", this.opts.code.source === true ? { ref: h.schema, code: (0, t.stringify)(h.schema) } : { ref: h.schema }), validateName: L, ValidationError: q, schema: h.schema, schemaEnv: h, rootId: f, baseId: h.baseId || f, schemaPath: t.nil, errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: t._`""`, opts: this.opts, self: this }, j;
    try {
      this._compilations.add(h), (0, i.validateFunctionCode)(H), S.optimize(this.opts.code.optimize);
      let x = S.toString();
      if (j = `${S.scopeRefs(s.default.scope)}return ${x}`, this.opts.code.process) j = this.opts.code.process(j, h);
      let W = Function(`${s.default.self}`, `${s.default.scope}`, j)(this, this.scope.get());
      if (this.scope.value(L, { ref: W }), W.errors = null, W.schema = h.schema, W.schemaEnv = h, h.$async) W.$async = true;
      if (this.opts.code.source === true) W.source = { validateName: L, validateCode: x, scopeValues: S._values };
      if (this.opts.unevaluated) {
        let { props: G, items: se } = H;
        if (W.evaluated = { props: G instanceof t.Name ? void 0 : G, items: se instanceof t.Name ? void 0 : se, dynamicProps: G instanceof t.Name, dynamicItems: se instanceof t.Name }, W.source) W.source.evaluated = (0, t.stringify)(W.evaluated);
      }
      return h.validate = W, h;
    } catch (x) {
      if (delete h.validate, delete h.validateName, j) this.logger.error("Error compiling schema, function code:", j);
      throw x;
    } finally {
      this._compilations.delete(h);
    }
  }
  e4.compileSchema = c;
  function d(h, g, f) {
    var R;
    f = (0, a.resolveUrl)(this.opts.uriResolver, g, f);
    let k = h.refs[f];
    if (k) return k;
    let b = P.call(this, h, f);
    if (b === void 0) {
      let S = (R = h.localRefs) === null || R === void 0 ? void 0 : R[f], { schemaId: q } = this.opts;
      if (S) b = new l({ schema: S, schemaId: q, root: h, baseId: g });
    }
    if (b === void 0) return;
    return h.refs[f] = m.call(this, b);
  }
  e4.resolveRef = d;
  function m(h) {
    if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
    return h.validate ? h : c.call(this, h);
  }
  function _(h) {
    for (let g of this._compilations) if (w(g, h)) return g;
  }
  e4.getCompilingSchema = _;
  function w(h, g) {
    return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
  }
  function P(h, g) {
    let f;
    while (typeof (f = this.refs[g]) == "string") g = f;
    return f || this.schemas[g] || y.call(this, h, g);
  }
  function y(h, g) {
    let f = this.opts.uriResolver.parse(g), R = (0, a._getFullPath)(this.opts.uriResolver, f), k = (0, a.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && R === k) return p.call(this, f, h);
    let b = (0, a.normalizeId)(R), S = this.refs[b] || this.schemas[b];
    if (typeof S == "string") {
      let q = y.call(this, h, S);
      if (typeof (q === null || q === void 0 ? void 0 : q.schema) !== "object") return;
      return p.call(this, f, q);
    }
    if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
    if (!S.validate) c.call(this, S);
    if (b === (0, a.normalizeId)(g)) {
      let { schema: q } = S, { schemaId: L } = this.opts, H = q[L];
      if (H) k = (0, a.resolveUrl)(this.opts.uriResolver, k, H);
      return new l({ schema: q, schemaId: L, root: h, baseId: k });
    }
    return p.call(this, f, S);
  }
  e4.resolveSchema = y;
  let v = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function p(h, { baseId: g, schema: f, root: R }) {
    var k;
    if (((k = h.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/") return;
    for (let q of h.fragment.slice(1).split("/")) {
      if (typeof f === "boolean") return;
      let L = f[(0, n.unescapeFragment)(q)];
      if (L === void 0) return;
      f = L;
      let H = typeof f === "object" && f[this.opts.schemaId];
      if (!v.has(q) && H) g = (0, a.resolveUrl)(this.opts.uriResolver, g, H);
    }
    let b;
    if (typeof f != "boolean" && f.$ref && !(0, n.schemaHasRulesButRef)(f, this.RULES)) {
      let q = (0, a.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      b = y.call(this, R, q);
    }
    let { schemaId: S } = this.opts;
    if (b = b || new l({ schema: f, schemaId: S, root: R, baseId: g }), b.schema !== b.root.schema) return b;
  }
}), gu = K((e4, t) => {
  t.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
}), Mi = K((e4, t) => {
  let r = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), s = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function a(y) {
    let v = "", p = 0, h = 0;
    for (h = 0; h < y.length; h++) {
      if (p = y[h].charCodeAt(0), p === 48) continue;
      if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      v += y[h];
      break;
    }
    for (h += 1; h < y.length; h++) {
      if (p = y[h].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      v += y[h];
    }
    return v;
  }
  let n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function i(y) {
    return y.length = 0, true;
  }
  function l(y, v, p) {
    if (y.length) {
      let h = a(y);
      if (h !== "") v.push(h);
      else return p.error = true, false;
      y.length = 0;
    }
    return true;
  }
  function c(y) {
    let v = 0, p = { error: false, address: "", zone: "" }, h = [], g = [], f = false, R = false, k = l;
    for (let b = 0; b < y.length; b++) {
      let S = y[b];
      if (S === "[" || S === "]") continue;
      if (S === ":") {
        if (f === true) R = true;
        if (!k(g, h, p)) break;
        if (++v > 7) {
          p.error = true;
          break;
        }
        if (b > 0 && y[b - 1] === ":") f = true;
        h.push(":");
        continue;
      } else if (S === "%") {
        if (!k(g, h, p)) break;
        k = i;
      } else {
        g.push(S);
        continue;
      }
    }
    if (g.length) if (k === i) p.zone = g.join("");
    else if (R) h.push(g.join(""));
    else h.push(a(g));
    return p.address = h.join(""), p;
  }
  function d(y) {
    if (m(y, ":") < 2) return { host: y, isIPV6: false };
    let v = c(y);
    if (!v.error) {
      let { address: p, address: h } = v;
      if (v.zone) p += "%" + v.zone, h += "%25" + v.zone;
      return { host: p, isIPV6: true, escapedHost: h };
    } else return { host: y, isIPV6: false };
  }
  function m(y, v) {
    let p = 0;
    for (let h = 0; h < y.length; h++) if (y[h] === v) p++;
    return p;
  }
  function _(y) {
    let v = y, p = [], h = -1, g = 0;
    while (g = v.length) {
      if (g === 1) if (v === ".") break;
      else if (v === "/") {
        p.push("/");
        break;
      } else {
        p.push(v);
        break;
      }
      else if (g === 2) {
        if (v[0] === ".") {
          if (v[1] === ".") break;
          else if (v[1] === "/") {
            v = v.slice(2);
            continue;
          }
        } else if (v[0] === "/") {
          if (v[1] === "." || v[1] === "/") {
            p.push("/");
            break;
          }
        }
      } else if (g === 3) {
        if (v === "/..") {
          if (p.length !== 0) p.pop();
          p.push("/");
          break;
        }
      }
      if (v[0] === ".") {
        if (v[1] === ".") {
          if (v[2] === "/") {
            v = v.slice(3);
            continue;
          }
        } else if (v[1] === "/") {
          v = v.slice(2);
          continue;
        }
      } else if (v[0] === "/") {
        if (v[1] === ".") {
          if (v[2] === "/") {
            v = v.slice(2);
            continue;
          } else if (v[2] === ".") {
            if (v[3] === "/") {
              if (v = v.slice(3), p.length !== 0) p.pop();
              continue;
            }
          }
        }
      }
      if ((h = v.indexOf("/", 1)) === -1) {
        p.push(v);
        break;
      } else p.push(v.slice(0, h)), v = v.slice(h);
    }
    return p.join("");
  }
  function w(y, v) {
    let p = v !== true ? escape : unescape;
    if (y.scheme !== void 0) y.scheme = p(y.scheme);
    if (y.userinfo !== void 0) y.userinfo = p(y.userinfo);
    if (y.host !== void 0) y.host = p(y.host);
    if (y.path !== void 0) y.path = p(y.path);
    if (y.query !== void 0) y.query = p(y.query);
    if (y.fragment !== void 0) y.fragment = p(y.fragment);
    return y;
  }
  function P(y) {
    let v = [];
    if (y.userinfo !== void 0) v.push(y.userinfo), v.push("@");
    if (y.host !== void 0) {
      let p = unescape(y.host);
      if (!s(p)) {
        let h = d(p);
        if (h.isIPV6 === true) p = `[${h.escapedHost}]`;
        else p = y.host;
      }
      v.push(p);
    }
    if (typeof y.port === "number" || typeof y.port === "string") v.push(":"), v.push(String(y.port));
    return v.length ? v.join("") : void 0;
  }
  t.exports = { nonSimpleDomain: n, recomposeAuthority: P, normalizeComponentEncoding: w, removeDotSegments: _, isIPv4: s, isUUID: r, normalizeIPv6: d, stringArrayToHexStripped: a };
}), _u = K((e4, t) => {
  let { isUUID: r } = Mi(), s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, a = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
  function n(S) {
    return a.indexOf(S) !== -1;
  }
  function i(S) {
    if (S.secure === true) return true;
    else if (S.secure === false) return false;
    else if (S.scheme) return S.scheme.length === 3 && (S.scheme[0] === "w" || S.scheme[0] === "W") && (S.scheme[1] === "s" || S.scheme[1] === "S") && (S.scheme[2] === "s" || S.scheme[2] === "S");
    else return false;
  }
  function l(S) {
    if (!S.host) S.error = S.error || "HTTP URIs must have a host.";
    return S;
  }
  function c(S) {
    let q = String(S.scheme).toLowerCase() === "https";
    if (S.port === (q ? 443 : 80) || S.port === "") S.port = void 0;
    if (!S.path) S.path = "/";
    return S;
  }
  function d(S) {
    return S.secure = i(S), S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : ""), S.path = void 0, S.query = void 0, S;
  }
  function m(S) {
    if (S.port === (i(S) ? 443 : 80) || S.port === "") S.port = void 0;
    if (typeof S.secure === "boolean") S.scheme = S.secure ? "wss" : "ws", S.secure = void 0;
    if (S.resourceName) {
      let [q, L] = S.resourceName.split("?");
      S.path = q && q !== "/" ? q : void 0, S.query = L, S.resourceName = void 0;
    }
    return S.fragment = void 0, S;
  }
  function _(S, q) {
    if (!S.path) return S.error = "URN can not be parsed", S;
    let L = S.path.match(s);
    if (L) {
      let H = q.scheme || S.scheme || "urn";
      S.nid = L[1].toLowerCase(), S.nss = L[2];
      let j = b(`${H}:${q.nid || S.nid}`);
      if (S.path = void 0, j) S = j.parse(S, q);
    } else S.error = S.error || "URN can not be parsed.";
    return S;
  }
  function w(S, q) {
    if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
    let L = q.scheme || S.scheme || "urn", H = S.nid.toLowerCase(), j = b(`${L}:${q.nid || H}`);
    if (j) S = j.serialize(S, q);
    let x = S, W = S.nss;
    return x.path = `${H || q.nid}:${W}`, q.skipEscape = true, x;
  }
  function P(S, q) {
    let L = S;
    if (L.uuid = L.nss, L.nss = void 0, !q.tolerant && (!L.uuid || !r(L.uuid))) L.error = L.error || "UUID is not valid.";
    return L;
  }
  function y(S) {
    let q = S;
    return q.nss = (S.uuid || "").toLowerCase(), q;
  }
  let v = { scheme: "http", domainHost: true, parse: l, serialize: c }, p = { scheme: "https", domainHost: v.domainHost, parse: l, serialize: c }, h = { scheme: "ws", domainHost: true, parse: d, serialize: m }, g = { scheme: "wss", domainHost: h.domainHost, parse: h.parse, serialize: h.serialize }, k = { http: v, https: p, ws: h, wss: g, urn: { scheme: "urn", parse: _, serialize: w, skipNormalize: true }, "urn:uuid": { scheme: "urn:uuid", parse: P, serialize: y, skipNormalize: true } };
  Object.setPrototypeOf(k, null);
  function b(S) {
    return S && (k[S] || k[S.toLowerCase()]) || void 0;
  }
  t.exports = { wsIsSecure: i, SCHEMES: k, isValidSchemeName: n, getSchemeHandler: b };
}), yu = K((e4, t) => {
  let { normalizeIPv6: r, removeDotSegments: s, recomposeAuthority: a, normalizeComponentEncoding: n, isIPv4: i, nonSimpleDomain: l } = Mi(), { SCHEMES: c, getSchemeHandler: d } = _u();
  function m(g, f) {
    if (typeof g === "string") g = y(p(g, f), f);
    else if (typeof g === "object") g = p(y(g, f), f);
    return g;
  }
  function _(g, f, R) {
    let k = R ? Object.assign({ scheme: "null" }, R) : { scheme: "null" }, b = w(p(g, k), p(f, k), k, true);
    return k.skipEscape = true, y(b, k);
  }
  function w(g, f, R, k) {
    let b = {};
    if (!k) g = p(y(g, R), R), f = p(y(f, R), R);
    if (R = R || {}, !R.tolerant && f.scheme) b.scheme = f.scheme, b.userinfo = f.userinfo, b.host = f.host, b.port = f.port, b.path = s(f.path || ""), b.query = f.query;
    else {
      if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) b.userinfo = f.userinfo, b.host = f.host, b.port = f.port, b.path = s(f.path || ""), b.query = f.query;
      else {
        if (!f.path) if (b.path = g.path, f.query !== void 0) b.query = f.query;
        else b.query = g.query;
        else {
          if (f.path[0] === "/") b.path = s(f.path);
          else {
            if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path) b.path = "/" + f.path;
            else if (!g.path) b.path = f.path;
            else b.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
            b.path = s(b.path);
          }
          b.query = f.query;
        }
        b.userinfo = g.userinfo, b.host = g.host, b.port = g.port;
      }
      b.scheme = g.scheme;
    }
    return b.fragment = f.fragment, b;
  }
  function P(g, f, R) {
    if (typeof g === "string") g = unescape(g), g = y(n(p(g, R), true), { ...R, skipEscape: true });
    else if (typeof g === "object") g = y(n(g, true), { ...R, skipEscape: true });
    if (typeof f === "string") f = unescape(f), f = y(n(p(f, R), true), { ...R, skipEscape: true });
    else if (typeof f === "object") f = y(n(f, true), { ...R, skipEscape: true });
    return g.toLowerCase() === f.toLowerCase();
  }
  function y(g, f) {
    let R = { host: g.host, scheme: g.scheme, userinfo: g.userinfo, port: g.port, path: g.path, query: g.query, nid: g.nid, nss: g.nss, uuid: g.uuid, fragment: g.fragment, reference: g.reference, resourceName: g.resourceName, secure: g.secure, error: "" }, k = Object.assign({}, f), b = [], S = d(k.scheme || R.scheme);
    if (S && S.serialize) S.serialize(R, k);
    if (R.path !== void 0) if (!k.skipEscape) {
      if (R.path = escape(R.path), R.scheme !== void 0) R.path = R.path.split("%3A").join(":");
    } else R.path = unescape(R.path);
    if (k.reference !== "suffix" && R.scheme) b.push(R.scheme, ":");
    let q = a(R);
    if (q !== void 0) {
      if (k.reference !== "suffix") b.push("//");
      if (b.push(q), R.path && R.path[0] !== "/") b.push("/");
    }
    if (R.path !== void 0) {
      let L = R.path;
      if (!k.absolutePath && (!S || !S.absolutePath)) L = s(L);
      if (q === void 0 && L[0] === "/" && L[1] === "/") L = "/%2F" + L.slice(2);
      b.push(L);
    }
    if (R.query !== void 0) b.push("?", R.query);
    if (R.fragment !== void 0) b.push("#", R.fragment);
    return b.join("");
  }
  let v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function p(g, f) {
    let R = Object.assign({}, f), k = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, b = false;
    if (R.reference === "suffix") if (R.scheme) g = R.scheme + ":" + g;
    else g = "//" + g;
    let S = g.match(v);
    if (S) {
      if (k.scheme = S[1], k.userinfo = S[3], k.host = S[4], k.port = parseInt(S[5], 10), k.path = S[6] || "", k.query = S[7], k.fragment = S[8], isNaN(k.port)) k.port = S[5];
      if (k.host) if (i(k.host) === false) {
        let L = r(k.host);
        k.host = L.host.toLowerCase(), b = L.isIPV6;
      } else b = true;
      if (k.scheme === void 0 && k.userinfo === void 0 && k.host === void 0 && k.port === void 0 && k.query === void 0 && !k.path) k.reference = "same-document";
      else if (k.scheme === void 0) k.reference = "relative";
      else if (k.fragment === void 0) k.reference = "absolute";
      else k.reference = "uri";
      if (R.reference && R.reference !== "suffix" && R.reference !== k.reference) k.error = k.error || "URI is not a " + R.reference + " reference.";
      let q = d(R.scheme || k.scheme);
      if (!R.unicodeSupport && (!q || !q.unicodeSupport)) {
        if (k.host && (R.domainHost || q && q.domainHost) && b === false && l(k.host)) try {
          k.host = URL.domainToASCII(k.host.toLowerCase());
        } catch (L) {
          k.error = k.error || "Host's domain name can not be converted to ASCII: " + L;
        }
      }
      if (!q || q && !q.skipNormalize) {
        if (g.indexOf("%") !== -1) {
          if (k.scheme !== void 0) k.scheme = unescape(k.scheme);
          if (k.host !== void 0) k.host = unescape(k.host);
        }
        if (k.path) k.path = escape(unescape(k.path));
        if (k.fragment) k.fragment = encodeURI(decodeURIComponent(k.fragment));
      }
      if (q && q.parse) q.parse(k, R);
    } else k.error = k.error || "URI can not be parsed.";
    return k;
  }
  let h = { SCHEMES: c, normalize: m, resolve: _, resolveComponent: w, equal: P, serialize: y, parse: p };
  t.exports = h, t.exports.default = h, t.exports.fastUri = h;
}), vu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = yu();
  t.code = 'require("ajv/dist/runtime/uri").default', e4.default = t;
}), ji = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = void 0;
  var t = as();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return t.KeywordCxt;
  } });
  var r = te();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return r._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return r.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return r.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return r.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return r.CodeGen;
  } });
  let s = go(), a = os(), n = Ii(), i = _o(), l = te(), c = So(), d = po(), m = ne(), _ = gu(), w = vu(), P = (N, U) => new RegExp(N, U);
  P.code = "new RegExp";
  let y = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), p = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, h = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, g = 200;
  function f(N) {
    var U, F, z, O, A, J, Y, re, Q, ce, Pe, I, D, V, X, Z, ee, pe, _e, Re, ge, ue, Oe, ye, Ue;
    let Me = N.strict, De = (U = N.code) === null || U === void 0 ? void 0 : U.optimize, Be = De === true || De === void 0 ? 1 : De || 0, We = (z = (F = N.code) === null || F === void 0 ? void 0 : F.regExp) !== null && z !== void 0 ? z : P, nt = (O = N.uriResolver) !== null && O !== void 0 ? O : w.default;
    return { strictSchema: (J = (A = N.strictSchema) !== null && A !== void 0 ? A : Me) !== null && J !== void 0 ? J : true, strictNumbers: (re = (Y = N.strictNumbers) !== null && Y !== void 0 ? Y : Me) !== null && re !== void 0 ? re : true, strictTypes: (ce = (Q = N.strictTypes) !== null && Q !== void 0 ? Q : Me) !== null && ce !== void 0 ? ce : "log", strictTuples: (I = (Pe = N.strictTuples) !== null && Pe !== void 0 ? Pe : Me) !== null && I !== void 0 ? I : "log", strictRequired: (V = (D = N.strictRequired) !== null && D !== void 0 ? D : Me) !== null && V !== void 0 ? V : false, code: N.code ? { ...N.code, optimize: Be, regExp: We } : { optimize: Be, regExp: We }, loopRequired: (X = N.loopRequired) !== null && X !== void 0 ? X : g, loopEnum: (Z = N.loopEnum) !== null && Z !== void 0 ? Z : g, meta: (ee = N.meta) !== null && ee !== void 0 ? ee : true, messages: (pe = N.messages) !== null && pe !== void 0 ? pe : true, inlineRefs: (_e = N.inlineRefs) !== null && _e !== void 0 ? _e : true, schemaId: (Re = N.schemaId) !== null && Re !== void 0 ? Re : "$id", addUsedSchema: (ge = N.addUsedSchema) !== null && ge !== void 0 ? ge : true, validateSchema: (ue = N.validateSchema) !== null && ue !== void 0 ? ue : true, validateFormats: (Oe = N.validateFormats) !== null && Oe !== void 0 ? Oe : true, unicodeRegExp: (ye = N.unicodeRegExp) !== null && ye !== void 0 ? ye : true, int32range: (Ue = N.int32range) !== null && Ue !== void 0 ? Ue : true, uriResolver: nt };
  }
  var R = class {
    constructor(N = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), N = this.opts = { ...N, ...f(N) };
      let { es5: U, lines: F } = this.opts.code;
      this.scope = new l.ValueScope({ scope: {}, prefixes: v, es5: U, lines: F }), this.logger = x(N.logger);
      let z = N.validateFormats;
      if (N.validateFormats = false, this.RULES = (0, n.getRules)(), k.call(this, p, N, "NOT SUPPORTED"), k.call(this, h, N, "DEPRECATED", "warn"), this._metaOpts = H.call(this), N.formats) q.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords) L.call(this, N.keywords);
      if (typeof N.meta == "object") this.addMetaSchema(N.meta);
      S.call(this), N.validateFormats = z;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: N, meta: U, schemaId: F } = this.opts, z = _;
      if (F === "id") z = { ..._ }, z.id = z.$id, delete z.$id;
      if (U && N) this.addMetaSchema(z, z[F], false);
    }
    defaultMeta() {
      let { meta: N, schemaId: U } = this.opts;
      return this.opts.defaultMeta = typeof N == "object" ? N[U] || N : void 0;
    }
    validate(N, U) {
      let F;
      if (typeof N == "string") {
        if (F = this.getSchema(N), !F) throw Error(`no schema with key or ref "${N}"`);
      } else F = this.compile(N);
      let z = F(U);
      if (!("$async" in F)) this.errors = F.errors;
      return z;
    }
    compile(N, U) {
      let F = this._addSchema(N, U);
      return F.validate || this._compileSchemaEnv(F);
    }
    compileAsync(N, U) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let { loadSchema: F } = this.opts;
      return z.call(this, N, U);
      async function z(Q, ce) {
        await O.call(this, Q.$schema);
        let Pe = this._addSchema(Q, ce);
        return Pe.validate || A.call(this, Pe);
      }
      async function O(Q) {
        if (Q && !this.getSchema(Q)) await z.call(this, { $ref: Q }, true);
      }
      async function A(Q) {
        try {
          return this._compileSchemaEnv(Q);
        } catch (ce) {
          if (!(ce instanceof a.default)) throw ce;
          return J.call(this, ce), await Y.call(this, ce.missingSchema), A.call(this, Q);
        }
      }
      function J({ missingSchema: Q, missingRef: ce }) {
        if (this.refs[Q]) throw Error(`AnySchema ${Q} is loaded but ${ce} cannot be resolved`);
      }
      async function Y(Q) {
        let ce = await re.call(this, Q);
        if (!this.refs[Q]) await O.call(this, ce.$schema);
        if (!this.refs[Q]) this.addSchema(ce, Q, U);
      }
      async function re(Q) {
        let ce = this._loading[Q];
        if (ce) return ce;
        try {
          return await (this._loading[Q] = F(Q));
        } finally {
          delete this._loading[Q];
        }
      }
    }
    addSchema(N, U, F, z = this.opts.validateSchema) {
      if (Array.isArray(N)) {
        for (let A of N) this.addSchema(A, void 0, F, z);
        return this;
      }
      let O;
      if (typeof N === "object") {
        let { schemaId: A } = this.opts;
        if (O = N[A], O !== void 0 && typeof O != "string") throw Error(`schema ${A} must be string`);
      }
      return U = (0, c.normalizeId)(U || O), this._checkUnique(U), this.schemas[U] = this._addSchema(N, F, U, z, true), this;
    }
    addMetaSchema(N, U, F = this.opts.validateSchema) {
      return this.addSchema(N, U, true, F), this;
    }
    validateSchema(N, U) {
      if (typeof N == "boolean") return true;
      let F;
      if (F = N.$schema, F !== void 0 && typeof F != "string") throw Error("$schema must be a string");
      if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F) return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let z = this.validate(F, N);
      if (!z && U) {
        let O = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(O);
        else throw Error(O);
      }
      return z;
    }
    getSchema(N) {
      let U;
      while (typeof (U = b.call(this, N)) == "string") N = U;
      if (U === void 0) {
        let { schemaId: F } = this.opts, z = new i.SchemaEnv({ schema: {}, schemaId: F });
        if (U = i.resolveSchema.call(this, z, N), !U) return;
        this.refs[N] = U;
      }
      return U.validate || this._compileSchemaEnv(U);
    }
    removeSchema(N) {
      if (N instanceof RegExp) return this._removeAllSchemas(this.schemas, N), this._removeAllSchemas(this.refs, N), this;
      switch (typeof N) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let U = b.call(this, N);
          if (typeof U == "object") this._cache.delete(U.schema);
          return delete this.schemas[N], delete this.refs[N], this;
        }
        case "object": {
          let U = N;
          this._cache.delete(U);
          let F = N[this.opts.schemaId];
          if (F) F = (0, c.normalizeId)(F), delete this.schemas[F], delete this.refs[F];
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(N) {
      for (let U of N) this.addKeyword(U);
      return this;
    }
    addKeyword(N, U) {
      let F;
      if (typeof N == "string") {
        if (F = N, typeof U == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = F;
      } else if (typeof N == "object" && U === void 0) {
        if (U = N, F = U.keyword, Array.isArray(F) && !F.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (G.call(this, F, U), !U) return (0, m.eachItem)(F, (O) => se.call(this, O)), this;
      ie.call(this, U);
      let z = { ...U, type: (0, d.getJSONTypes)(U.type), schemaType: (0, d.getJSONTypes)(U.schemaType) };
      return (0, m.eachItem)(F, z.type.length === 0 ? (O) => se.call(this, O, z) : (O) => z.type.forEach((A) => se.call(this, O, z, A))), this;
    }
    getKeyword(N) {
      let U = this.RULES.all[N];
      return typeof U == "object" ? U.definition : !!U;
    }
    removeKeyword(N) {
      let { RULES: U } = this;
      delete U.keywords[N], delete U.all[N];
      for (let F of U.rules) {
        let z = F.rules.findIndex((O) => O.keyword === N);
        if (z >= 0) F.rules.splice(z, 1);
      }
      return this;
    }
    addFormat(N, U) {
      if (typeof U == "string") U = new RegExp(U);
      return this.formats[N] = U, this;
    }
    errorsText(N = this.errors, { separator: U = ", ", dataVar: F = "data" } = {}) {
      if (!N || N.length === 0) return "No errors";
      return N.map((z) => `${F}${z.instancePath} ${z.message}`).reduce((z, O) => z + U + O);
    }
    $dataMetaSchema(N, U) {
      let F = this.RULES.all;
      N = JSON.parse(JSON.stringify(N));
      for (let z of U) {
        let O = z.split("/").slice(1), A = N;
        for (let J of O) A = A[J];
        for (let J in F) {
          let Y = F[J];
          if (typeof Y != "object") continue;
          let { $data: re } = Y.definition, Q = A[J];
          if (re && Q) A[J] = ae(Q);
        }
      }
      return N;
    }
    _removeAllSchemas(N, U) {
      for (let F in N) {
        let z = N[F];
        if (!U || U.test(F)) {
          if (typeof z == "string") delete N[F];
          else if (z && !z.meta) this._cache.delete(z.schema), delete N[F];
        }
      }
    }
    _addSchema(N, U, F, z = this.opts.validateSchema, O = this.opts.addUsedSchema) {
      let A, { schemaId: J } = this.opts;
      if (typeof N == "object") A = N[J];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof N != "boolean") throw Error("schema must be object or boolean");
      let Y = this._cache.get(N);
      if (Y !== void 0) return Y;
      F = (0, c.normalizeId)(A || F);
      let re = c.getSchemaRefs.call(this, N, F);
      if (Y = new i.SchemaEnv({ schema: N, schemaId: J, meta: U, baseId: F, localRefs: re }), this._cache.set(Y.schema, Y), O && !F.startsWith("#")) {
        if (F) this._checkUnique(F);
        this.refs[F] = Y;
      }
      if (z) this.validateSchema(N, true);
      return Y;
    }
    _checkUnique(N) {
      if (this.schemas[N] || this.refs[N]) throw Error(`schema with key or id "${N}" already exists`);
    }
    _compileSchemaEnv(N) {
      if (N.meta) this._compileMetaSchema(N);
      else i.compileSchema.call(this, N);
      if (!N.validate) throw Error("ajv implementation error");
      return N.validate;
    }
    _compileMetaSchema(N) {
      let U = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, N);
      } finally {
        this.opts = U;
      }
    }
  };
  R.ValidationError = s.default, R.MissingRefError = a.default, e4.default = R;
  function k(N, U, F, z = "error") {
    for (let O in N) {
      let A = O;
      if (A in U) this.logger[z](`${F}: option ${O}. ${N[A]}`);
    }
  }
  function b(N) {
    return N = (0, c.normalizeId)(N), this.schemas[N] || this.refs[N];
  }
  function S() {
    let N = this.opts.schemas;
    if (!N) return;
    if (Array.isArray(N)) this.addSchema(N);
    else for (let U in N) this.addSchema(N[U], U);
  }
  function q() {
    for (let N in this.opts.formats) {
      let U = this.opts.formats[N];
      if (U) this.addFormat(N, U);
    }
  }
  function L(N) {
    if (Array.isArray(N)) {
      this.addVocabulary(N);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let U in N) {
      let F = N[U];
      if (!F.keyword) F.keyword = U;
      this.addKeyword(F);
    }
  }
  function H() {
    let N = { ...this.opts };
    for (let U of y) delete N[U];
    return N;
  }
  let j = { log() {
  }, warn() {
  }, error() {
  } };
  function x(N) {
    if (N === false) return j;
    if (N === void 0) return console;
    if (N.log && N.warn && N.error) return N;
    throw Error("logger must implement log, warn and error methods");
  }
  let W = /^[a-z_$][a-z0-9_$:-]*$/i;
  function G(N, U) {
    let { RULES: F } = this;
    if ((0, m.eachItem)(N, (z) => {
      if (F.keywords[z]) throw Error(`Keyword ${z} is already defined`);
      if (!W.test(z)) throw Error(`Keyword ${z} has invalid name`);
    }), !U) return;
    if (U.$data && !("code" in U || "validate" in U)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function se(N, U, F) {
    var z;
    let O = U === null || U === void 0 ? void 0 : U.post;
    if (F && O) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: A } = this, J = O ? A.post : A.rules.find(({ type: re }) => re === F);
    if (!J) J = { type: F, rules: [] }, A.rules.push(J);
    if (A.keywords[N] = true, !U) return;
    let Y = { keyword: N, definition: { ...U, type: (0, d.getJSONTypes)(U.type), schemaType: (0, d.getJSONTypes)(U.schemaType) } };
    if (U.before) le.call(this, J, Y, U.before);
    else J.rules.push(Y);
    A.all[N] = Y, (z = U.implements) === null || z === void 0 || z.forEach((re) => this.addKeyword(re));
  }
  function le(N, U, F) {
    let z = N.rules.findIndex((O) => O.keyword === F);
    if (z >= 0) N.rules.splice(z, 0, U);
    else N.rules.push(U), this.logger.warn(`rule ${F} is not defined`);
  }
  function ie(N) {
    let { metaSchema: U } = N;
    if (U === void 0) return;
    if (N.$data && this.opts.$data) U = ae(U);
    N.validateSchema = this.compile(U, true);
  }
  let Se = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function ae(N) {
    return { anyOf: [N, Se] };
  }
});
var bu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = { keyword: "id", code() {
    throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  } };
  e4.default = t;
}), pn = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.callRef = e4.getValidate = void 0;
  let t = os(), r = Le(), s = te(), a = Ae(), n = _o(), i = ne(), l = { keyword: "$ref", schemaType: "string", code(m) {
    let { gen: _, schema: w, it: P } = m, { baseId: y, schemaEnv: v, validateName: p, opts: h, self: g } = P, { root: f } = v;
    if ((w === "#" || w === "#/") && y === f.baseId) return k();
    let R = n.resolveRef.call(g, f, y, w);
    if (R === void 0) throw new t.default(P.opts.uriResolver, y, w);
    if (R instanceof n.SchemaEnv) return b(R);
    return S(R);
    function k() {
      if (v === f) return d(m, p, v, v.$async);
      let q = _.scopeValue("root", { ref: f });
      return d(m, s._`${q}.validate`, f, f.$async);
    }
    function b(q) {
      d(m, c(m, q), q, q.$async);
    }
    function S(q) {
      let L = _.scopeValue("schema", h.code.source === true ? { ref: q, code: (0, s.stringify)(q) } : { ref: q }), H = _.name("valid"), j = m.subschema({ schema: q, dataTypes: [], schemaPath: s.nil, topSchemaRef: L, errSchemaPath: w }, H);
      m.mergeEvaluated(j), m.ok(H);
    }
  } };
  function c(m, _) {
    let { gen: w } = m;
    return _.validate ? w.scopeValue("validate", { ref: _.validate }) : s._`${w.scopeValue("wrapper", { ref: _ })}.validate`;
  }
  e4.getValidate = c;
  function d(m, _, w, P) {
    let { gen: y, it: v } = m, { allErrors: p, schemaEnv: h, opts: g } = v, f = g.passContext ? a.default.this : s.nil;
    if (P) R();
    else k();
    function R() {
      if (!h.$async) throw Error("async schema referenced by sync schema");
      let q = y.let("valid");
      y.try(() => {
        if (y.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), S(_), !p) y.assign(q, true);
      }, (L) => {
        if (y.if(s._`!(${L} instanceof ${v.ValidationError})`, () => y.throw(L)), b(L), !p) y.assign(q, false);
      }), m.ok(q);
    }
    function k() {
      m.result((0, r.callValidateCode)(m, _, f), () => S(_), () => b(_));
    }
    function b(q) {
      let L = s._`${q}.errors`;
      y.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${L} : ${a.default.vErrors}.concat(${L})`), y.assign(a.default.errors, s._`${a.default.vErrors}.length`);
    }
    function S(q) {
      var L;
      if (!v.opts.unevaluated) return;
      let H = (L = w === null || w === void 0 ? void 0 : w.validate) === null || L === void 0 ? void 0 : L.evaluated;
      if (v.props !== true) if (H && !H.dynamicProps) {
        if (H.props !== void 0) v.props = i.mergeEvaluated.props(y, H.props, v.props);
      } else {
        let j = y.var("props", s._`${q}.evaluated.props`);
        v.props = i.mergeEvaluated.props(y, j, v.props, s.Name);
      }
      if (v.items !== true) if (H && !H.dynamicItems) {
        if (H.items !== void 0) v.items = i.mergeEvaluated.items(y, H.items, v.items);
      } else {
        let j = y.var("items", s._`${q}.evaluated.items`);
        v.items = i.mergeEvaluated.items(y, j, v.items, s.Name);
      }
    }
  }
  e4.callRef = d, e4.default = l;
}), Ai = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = bu(), r = pn(), s = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", t.default, r.default];
  e4.default = s;
}), Ru = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = t.operators, s = { maximum: { okStr: "<=", ok: r.LTE, fail: r.GT }, minimum: { okStr: ">=", ok: r.GTE, fail: r.LT }, exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE }, exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE } }, a = { keyword: Object.keys(s), type: "number", schemaType: "number", $data: true, error: { message: ({ keyword: n, schemaCode: i }) => t.str`must be ${s[n].okStr} ${i}`, params: ({ keyword: n, schemaCode: i }) => t._`{comparison: ${s[n].okStr}, limit: ${i}}` }, code(n) {
    let { keyword: i, data: l, schemaCode: c } = n;
    n.fail$data(t._`${l} ${s[i].fail} ${c} || isNaN(${l})`);
  } };
  e4.default = a;
}), zu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: { message: ({ schemaCode: s }) => t.str`must be multiple of ${s}`, params: ({ schemaCode: s }) => t._`{multipleOf: ${s}}` }, code(s) {
    let { gen: a, data: n, schemaCode: i, it: l } = s, c = l.opts.multipleOfPrecision, d = a.let("res"), m = c ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : t._`${d} !== parseInt(${d})`;
    s.fail$data(t._`(${i} === 0 || (${d} = ${n}/${i}, ${m}))`);
  } };
  e4.default = r;
}), wu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  function t(r) {
    let s = r.length, a = 0, n = 0, i;
    while (n < s) if (a++, i = r.charCodeAt(n++), i >= 55296 && i <= 56319 && n < s) {
      if (i = r.charCodeAt(n), (i & 64512) === 56320) n++;
    }
    return a;
  }
  e4.default = t, t.code = 'require("ajv/dist/runtime/ucs2length").default';
}), $u = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = wu(), a = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: { message({ keyword: n, schemaCode: i }) {
    let l = n === "maxLength" ? "more" : "fewer";
    return t.str`must NOT have ${l} than ${i} characters`;
  }, params: ({ schemaCode: n }) => t._`{limit: ${n}}` }, code(n) {
    let { keyword: i, data: l, schemaCode: c, it: d } = n, m = i === "maxLength" ? t.operators.GT : t.operators.LT, _ = d.opts.unicode === false ? t._`${l}.length` : t._`${(0, r.useFunc)(n.gen, s.default)}(${l})`;
    n.fail$data(t._`${_} ${m} ${c}`);
  } };
  e4.default = a;
}), Eu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Le(), r = ne(), s = te(), a = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: n }) => s.str`must match pattern "${n}"`, params: ({ schemaCode: n }) => s._`{pattern: ${n}}` }, code(n) {
    let { gen: i, data: l, $data: c, schema: d, schemaCode: m, it: _ } = n, w = _.opts.unicodeRegExp ? "u" : "";
    if (c) {
      let { regExp: P } = _.opts.code, y = P.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(i, P), v = i.let("valid");
      i.try(() => i.assign(v, s._`${y}(${m}, ${w}).test(${l})`), () => i.assign(v, false)), n.fail$data(s._`!${v}`);
    } else {
      let P = (0, t.usePattern)(n, d);
      n.fail$data(s._`!${P}.test(${l})`);
    }
  } };
  e4.default = a;
}), Pu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: { message({ keyword: s, schemaCode: a }) {
    let n = s === "maxProperties" ? "more" : "fewer";
    return t.str`must NOT have ${n} than ${a} properties`;
  }, params: ({ schemaCode: s }) => t._`{limit: ${s}}` }, code(s) {
    let { keyword: a, data: n, schemaCode: i } = s, l = a === "maxProperties" ? t.operators.GT : t.operators.LT;
    s.fail$data(t._`Object.keys(${n}).length ${l} ${i}`);
  } };
  e4.default = r;
}), Tu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Le(), r = te(), s = ne(), a = { keyword: "required", type: "object", schemaType: "array", $data: true, error: { message: ({ params: { missingProperty: n } }) => r.str`must have required property '${n}'`, params: ({ params: { missingProperty: n } }) => r._`{missingProperty: ${n}}` }, code(n) {
    let { gen: i, schema: l, schemaCode: c, data: d, $data: m, it: _ } = n, { opts: w } = _;
    if (!m && l.length === 0) return;
    let P = l.length >= w.loopRequired;
    if (_.allErrors) y();
    else v();
    if (w.strictRequired) {
      let g = n.parentSchema.properties, { definedProperties: f } = n.it;
      for (let R of l) if ((g === null || g === void 0 ? void 0 : g[R]) === void 0 && !f.has(R)) {
        let k = `required property "${R}" is not defined at "${_.schemaEnv.baseId + _.errSchemaPath}" (strictRequired)`;
        (0, s.checkStrictMode)(_, k, _.opts.strictRequired);
      }
    }
    function y() {
      if (P || m) n.block$data(r.nil, p);
      else for (let g of l) (0, t.checkReportMissingProp)(n, g);
    }
    function v() {
      let g = i.let("missing");
      if (P || m) {
        let f = i.let("valid", true);
        n.block$data(f, () => h(g, f)), n.ok(f);
      } else i.if((0, t.checkMissingProp)(n, l, g)), (0, t.reportMissingProp)(n, g), i.else();
    }
    function p() {
      i.forOf("prop", c, (g) => {
        n.setParams({ missingProperty: g }), i.if((0, t.noPropertyInData)(i, d, g, w.ownProperties), () => n.error());
      });
    }
    function h(g, f) {
      n.setParams({ missingProperty: g }), i.forOf(g, c, () => {
        i.assign(f, (0, t.propertyInData)(i, d, g, w.ownProperties)), i.if((0, r.not)(f), () => {
          n.error(), i.break();
        });
      }, r.nil);
    }
  } };
  e4.default = a;
}), Cu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: { message({ keyword: s, schemaCode: a }) {
    let n = s === "maxItems" ? "more" : "fewer";
    return t.str`must NOT have ${n} than ${a} items`;
  }, params: ({ schemaCode: s }) => t._`{limit: ${s}}` }, code(s) {
    let { keyword: a, data: n, schemaCode: i } = s, l = a === "maxItems" ? t.operators.GT : t.operators.LT;
    s.fail$data(t._`${n}.length ${l} ${i}`);
  } };
  e4.default = r;
}), fn = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ni();
  t.code = 'require("ajv/dist/runtime/equal").default', e4.default = t;
}), ku = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = po(), r = te(), s = ne(), a = fn(), n = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: { message: ({ params: { i, j: l } }) => r.str`must NOT have duplicate items (items ## ${l} and ${i} are identical)`, params: ({ params: { i, j: l } }) => r._`{i: ${i}, j: ${l}}` }, code(i) {
    let { gen: l, data: c, $data: d, schema: m, parentSchema: _, schemaCode: w, it: P } = i;
    if (!d && !m) return;
    let y = l.let("valid"), v = _.items ? (0, t.getSchemaTypes)(_.items) : [];
    i.block$data(y, p, r._`${w} === false`), i.ok(y);
    function p() {
      let R = l.let("i", r._`${c}.length`), k = l.let("j");
      i.setParams({ i: R, j: k }), l.assign(y, true), l.if(r._`${R} > 1`, () => (h() ? g : f)(R, k));
    }
    function h() {
      return v.length > 0 && !v.some((R) => R === "object" || R === "array");
    }
    function g(R, k) {
      let b = l.name("item"), S = (0, t.checkDataTypes)(v, b, P.opts.strictNumbers, t.DataType.Wrong), q = l.const("indices", r._`{}`);
      l.for(r._`;${R}--;`, () => {
        if (l.let(b, r._`${c}[${R}]`), l.if(S, r._`continue`), v.length > 1) l.if(r._`typeof ${b} == "string"`, r._`${b} += "_"`);
        l.if(r._`typeof ${q}[${b}] == "number"`, () => {
          l.assign(k, r._`${q}[${b}]`), i.error(), l.assign(y, false).break();
        }).code(r._`${q}[${b}] = ${R}`);
      });
    }
    function f(R, k) {
      let b = (0, s.useFunc)(l, a.default), S = l.name("outer");
      l.label(S).for(r._`;${R}--;`, () => l.for(r._`${k} = ${R}; ${k}--;`, () => l.if(r._`${b}(${c}[${R}], ${c}[${k}])`, () => {
        i.error(), l.assign(y, false).break(S);
      })));
    }
  } };
  e4.default = n;
}), qu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = fn(), a = { keyword: "const", $data: true, error: { message: "must be equal to constant", params: ({ schemaCode: n }) => t._`{allowedValue: ${n}}` }, code(n) {
    let { gen: i, data: l, $data: c, schemaCode: d, schema: m } = n;
    if (c || m && typeof m == "object") n.fail$data(t._`!${(0, r.useFunc)(i, s.default)}(${l}, ${d})`);
    else n.fail(t._`${m} !== ${l}`);
  } };
  e4.default = a;
}), Iu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = fn(), a = { keyword: "enum", schemaType: "array", $data: true, error: { message: "must be equal to one of the allowed values", params: ({ schemaCode: n }) => t._`{allowedValues: ${n}}` }, code(n) {
    let { gen: i, data: l, $data: c, schema: d, schemaCode: m, it: _ } = n;
    if (!c && d.length === 0) throw Error("enum must have non-empty array");
    let w = d.length >= _.opts.loopEnum, P, y = () => P !== null && P !== void 0 ? P : P = (0, r.useFunc)(i, s.default), v;
    if (w || c) v = i.let("valid"), n.block$data(v, p);
    else {
      if (!Array.isArray(d)) throw Error("ajv implementation error");
      let g = i.const("vSchema", m);
      v = (0, t.or)(...d.map((f, R) => h(g, R)));
    }
    n.pass(v);
    function p() {
      i.assign(v, false), i.forOf("v", m, (g) => i.if(t._`${y()}(${l}, ${g})`, () => i.assign(v, true).break()));
    }
    function h(g, f) {
      let R = d[f];
      return typeof R === "object" && R !== null ? t._`${y()}(${l}, ${g}[${f}])` : t._`${l} === ${R}`;
    }
  } };
  e4.default = a;
}), Li = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ru(), r = zu(), s = $u(), a = Eu(), n = Pu(), i = Tu(), l = Cu(), c = ku(), d = qu(), m = Iu(), _ = [t.default, r.default, s.default, a.default, n.default, i.default, l.default, c.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, d.default, m.default];
  e4.default = _;
}), Ui = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateAdditionalItems = void 0;
  let t = te(), r = ne(), s = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: { message: ({ params: { len: n } }) => t.str`must NOT have more than ${n} items`, params: ({ params: { len: n } }) => t._`{limit: ${n}}` }, code(n) {
    let { parentSchema: i, it: l } = n, { items: c } = i;
    if (!Array.isArray(c)) {
      (0, r.checkStrictMode)(l, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    a(n, c);
  } };
  function a(n, i) {
    let { gen: l, schema: c, data: d, keyword: m, it: _ } = n;
    _.items = true;
    let w = l.const("len", t._`${d}.length`);
    if (c === false) n.setParams({ len: i.length }), n.pass(t._`${w} <= ${i.length}`);
    else if (typeof c == "object" && !(0, r.alwaysValidSchema)(_, c)) {
      let y = l.var("valid", t._`${w} <= ${i.length}`);
      l.if((0, t.not)(y), () => P(y)), n.ok(y);
    }
    function P(y) {
      l.forRange("i", i.length, w, (v) => {
        if (n.subschema({ keyword: m, dataProp: v, dataPropType: r.Type.Num }, y), !_.allErrors) l.if((0, t.not)(y), () => l.break());
      });
    }
  }
  e4.validateAdditionalItems = a, e4.default = s;
}), Di = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateTuple = void 0;
  let t = te(), r = ne(), s = Le(), a = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(i) {
    let { schema: l, it: c } = i;
    if (Array.isArray(l)) return n(i, "additionalItems", l);
    if (c.items = true, (0, r.alwaysValidSchema)(c, l)) return;
    i.ok((0, s.validateArray)(i));
  } };
  function n(i, l, c = i.schema) {
    let { gen: d, parentSchema: m, data: _, keyword: w, it: P } = i;
    if (p(m), P.opts.unevaluated && c.length && P.items !== true) P.items = r.mergeEvaluated.items(d, c.length, P.items);
    let y = d.name("valid"), v = d.const("len", t._`${_}.length`);
    c.forEach((h, g) => {
      if ((0, r.alwaysValidSchema)(P, h)) return;
      d.if(t._`${v} > ${g}`, () => i.subschema({ keyword: w, schemaProp: g, dataProp: g }, y)), i.ok(y);
    });
    function p(h) {
      let { opts: g, errSchemaPath: f } = P, R = c.length, k = R === h.minItems && (R === h.maxItems || h[l] === false);
      if (g.strictTuples && !k) {
        let b = `"${w}" is ${R}-tuple, but minItems or maxItems/${l} are not specified or different at path "${f}"`;
        (0, r.checkStrictMode)(P, b, g.strictTuples);
      }
    }
  }
  e4.validateTuple = n, e4.default = a;
}), Ou = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Di(), r = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: (s) => (0, t.validateTuple)(s, "items") };
  e4.default = r;
}), Nu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = Le(), a = Ui(), n = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: i } }) => t.str`must NOT have more than ${i} items`, params: ({ params: { len: i } }) => t._`{limit: ${i}}` }, code(i) {
    let { schema: l, parentSchema: c, it: d } = i, { prefixItems: m } = c;
    if (d.items = true, (0, r.alwaysValidSchema)(d, l)) return;
    if (m) (0, a.validateAdditionalItems)(i, m);
    else i.ok((0, s.validateArray)(i));
  } };
  e4.default = n;
}), Mu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: a, max: n } }) => n === void 0 ? t.str`must contain at least ${a} valid item(s)` : t.str`must contain at least ${a} and no more than ${n} valid item(s)`, params: ({ params: { min: a, max: n } }) => n === void 0 ? t._`{minContains: ${a}}` : t._`{minContains: ${a}, maxContains: ${n}}` }, code(a) {
    let { gen: n, schema: i, parentSchema: l, data: c, it: d } = a, m, _, { minContains: w, maxContains: P } = l;
    if (d.opts.next) m = w === void 0 ? 1 : w, _ = P;
    else m = 1;
    let y = n.const("len", t._`${c}.length`);
    if (a.setParams({ min: m, max: _ }), _ === void 0 && m === 0) {
      (0, r.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (_ !== void 0 && m > _) {
      (0, r.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), a.fail();
      return;
    }
    if ((0, r.alwaysValidSchema)(d, i)) {
      let f = t._`${y} >= ${m}`;
      if (_ !== void 0) f = t._`${f} && ${y} <= ${_}`;
      a.pass(f);
      return;
    }
    d.items = true;
    let v = n.name("valid");
    if (_ === void 0 && m === 1) h(v, () => n.if(v, () => n.break()));
    else if (m === 0) {
      if (n.let(v, true), _ !== void 0) n.if(t._`${c}.length > 0`, p);
    } else n.let(v, false), p();
    a.result(v, () => a.reset());
    function p() {
      let f = n.name("_valid"), R = n.let("count", 0);
      h(f, () => n.if(f, () => g(R)));
    }
    function h(f, R) {
      n.forRange("i", 0, y, (k) => {
        a.subschema({ keyword: "contains", dataProp: k, dataPropType: r.Type.Num, compositeRule: true }, f), R();
      });
    }
    function g(f) {
      if (n.code(t._`${f}++`), _ === void 0) n.if(t._`${f} >= ${m}`, () => n.assign(v, true).break());
      else if (n.if(t._`${f} > ${_}`, () => n.assign(v, false).break()), m === 1) n.assign(v, true);
      else n.if(t._`${f} >= ${m}`, () => n.assign(v, true));
    }
  } };
  e4.default = s;
}), Sn = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateSchemaDeps = e4.validatePropertyDeps = e4.error = void 0;
  let t = te(), r = ne(), s = Le();
  e4.error = { message: ({ params: { property: c, depsCount: d, deps: m } }) => {
    let _ = d === 1 ? "property" : "properties";
    return t.str`must have ${_} ${m} when property ${c} is present`;
  }, params: ({ params: { property: c, depsCount: d, deps: m, missingProperty: _ } }) => t._`{property: ${c},
    missingProperty: ${_},
    depsCount: ${d},
    deps: ${m}}` };
  let a = { keyword: "dependencies", type: "object", schemaType: "object", error: e4.error, code(c) {
    let [d, m] = n(c);
    i(c, d), l(c, m);
  } };
  function n({ schema: c }) {
    let d = {}, m = {};
    for (let _ in c) {
      if (_ === "__proto__") continue;
      let w = Array.isArray(c[_]) ? d : m;
      w[_] = c[_];
    }
    return [d, m];
  }
  function i(c, d = c.schema) {
    let { gen: m, data: _, it: w } = c;
    if (Object.keys(d).length === 0) return;
    let P = m.let("missing");
    for (let y in d) {
      let v = d[y];
      if (v.length === 0) continue;
      let p = (0, s.propertyInData)(m, _, y, w.opts.ownProperties);
      if (c.setParams({ property: y, depsCount: v.length, deps: v.join(", ") }), w.allErrors) m.if(p, () => {
        for (let h of v) (0, s.checkReportMissingProp)(c, h);
      });
      else m.if(t._`${p} && (${(0, s.checkMissingProp)(c, v, P)})`), (0, s.reportMissingProp)(c, P), m.else();
    }
  }
  e4.validatePropertyDeps = i;
  function l(c, d = c.schema) {
    let { gen: m, data: _, keyword: w, it: P } = c, y = m.name("valid");
    for (let v in d) {
      if ((0, r.alwaysValidSchema)(P, d[v])) continue;
      m.if((0, s.propertyInData)(m, _, v, P.opts.ownProperties), () => {
        let p = c.subschema({ keyword: w, schemaProp: v }, y);
        c.mergeValidEvaluated(p, y);
      }, () => m.var(y, true)), c.ok(y);
    }
  }
  e4.validateSchemaDeps = l, e4.default = a;
}), ju = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: { message: "property name must be valid", params: ({ params: a }) => t._`{propertyName: ${a.propertyName}}` }, code(a) {
    let { gen: n, schema: i, data: l, it: c } = a;
    if ((0, r.alwaysValidSchema)(c, i)) return;
    let d = n.name("valid");
    n.forIn("key", l, (m) => {
      a.setParams({ propertyName: m }), a.subschema({ keyword: "propertyNames", data: m, dataTypes: ["string"], propertyName: m, compositeRule: true }, d), n.if((0, t.not)(d), () => {
        if (a.error(true), !c.allErrors) n.break();
      });
    }), a.ok(d);
  } };
  e4.default = s;
}), Vi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Le(), r = te(), s = Ae(), a = ne(), n = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: i }) => r._`{additionalProperty: ${i.additionalProperty}}` }, code(i) {
    let { gen: l, schema: c, parentSchema: d, data: m, errsCount: _, it: w } = i;
    if (!_) throw Error("ajv implementation error");
    let { allErrors: P, opts: y } = w;
    if (w.props = true, y.removeAdditional !== "all" && (0, a.alwaysValidSchema)(w, c)) return;
    let v = (0, t.allSchemaProperties)(d.properties), p = (0, t.allSchemaProperties)(d.patternProperties);
    h(), i.ok(r._`${_} === ${s.default.errors}`);
    function h() {
      l.forIn("key", m, (b) => {
        if (!v.length && !p.length) R(b);
        else l.if(g(b), () => R(b));
      });
    }
    function g(b) {
      let S;
      if (v.length > 8) {
        let q = (0, a.schemaRefOrVal)(w, d.properties, "properties");
        S = (0, t.isOwnProperty)(l, q, b);
      } else if (v.length) S = (0, r.or)(...v.map((q) => r._`${b} === ${q}`));
      else S = r.nil;
      if (p.length) S = (0, r.or)(S, ...p.map((q) => r._`${(0, t.usePattern)(i, q)}.test(${b})`));
      return (0, r.not)(S);
    }
    function f(b) {
      l.code(r._`delete ${m}[${b}]`);
    }
    function R(b) {
      if (y.removeAdditional === "all" || y.removeAdditional && c === false) {
        f(b);
        return;
      }
      if (c === false) {
        if (i.setParams({ additionalProperty: b }), i.error(), !P) l.break();
        return;
      }
      if (typeof c == "object" && !(0, a.alwaysValidSchema)(w, c)) {
        let S = l.name("valid");
        if (y.removeAdditional === "failing") k(b, S, false), l.if((0, r.not)(S), () => {
          i.reset(), f(b);
        });
        else if (k(b, S), !P) l.if((0, r.not)(S), () => l.break());
      }
    }
    function k(b, S, q) {
      let L = { keyword: "additionalProperties", dataProp: b, dataPropType: a.Type.Str };
      if (q === false) Object.assign(L, { compositeRule: true, createErrors: false, allErrors: false });
      i.subschema(L, S);
    }
  } };
  e4.default = n;
}), Au = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = as(), r = Le(), s = ne(), a = Vi(), n = { keyword: "properties", type: "object", schemaType: "object", code(i) {
    let { gen: l, schema: c, parentSchema: d, data: m, it: _ } = i;
    if (_.opts.removeAdditional === "all" && d.additionalProperties === void 0) a.default.code(new t.KeywordCxt(_, a.default, "additionalProperties"));
    let w = (0, r.allSchemaProperties)(c);
    for (let h of w) _.definedProperties.add(h);
    if (_.opts.unevaluated && w.length && _.props !== true) _.props = s.mergeEvaluated.props(l, (0, s.toHash)(w), _.props);
    let P = w.filter((h) => !(0, s.alwaysValidSchema)(_, c[h]));
    if (P.length === 0) return;
    let y = l.name("valid");
    for (let h of P) {
      if (v(h)) p(h);
      else {
        if (l.if((0, r.propertyInData)(l, m, h, _.opts.ownProperties)), p(h), !_.allErrors) l.else().var(y, true);
        l.endIf();
      }
      i.it.definedProperties.add(h), i.ok(y);
    }
    function v(h) {
      return _.opts.useDefaults && !_.compositeRule && c[h].default !== void 0;
    }
    function p(h) {
      i.subschema({ keyword: "properties", schemaProp: h, dataProp: h }, y);
    }
  } };
  e4.default = n;
}), Lu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Le(), r = te(), s = ne(), a = ne(), n = { keyword: "patternProperties", type: "object", schemaType: "object", code(i) {
    let { gen: l, schema: c, data: d, parentSchema: m, it: _ } = i, { opts: w } = _, P = (0, t.allSchemaProperties)(c), y = P.filter((k) => (0, s.alwaysValidSchema)(_, c[k]));
    if (P.length === 0 || y.length === P.length && (!_.opts.unevaluated || _.props === true)) return;
    let v = w.strictSchema && !w.allowMatchingProperties && m.properties, p = l.name("valid");
    if (_.props !== true && !(_.props instanceof r.Name)) _.props = (0, a.evaluatedPropsToName)(l, _.props);
    let { props: h } = _;
    g();
    function g() {
      for (let k of P) {
        if (v) f(k);
        if (_.allErrors) R(k);
        else l.var(p, true), R(k), l.if(p);
      }
    }
    function f(k) {
      for (let b in v) if (new RegExp(k).test(b)) (0, s.checkStrictMode)(_, `property ${b} matches pattern ${k} (use allowMatchingProperties)`);
    }
    function R(k) {
      l.forIn("key", d, (b) => {
        l.if(r._`${(0, t.usePattern)(i, k)}.test(${b})`, () => {
          let S = y.includes(k);
          if (!S) i.subschema({ keyword: "patternProperties", schemaProp: k, dataProp: b, dataPropType: a.Type.Str }, p);
          if (_.opts.unevaluated && h !== true) l.assign(r._`${h}[${b}]`, true);
          else if (!S && !_.allErrors) l.if((0, r.not)(p), () => l.break());
        });
      });
    }
  } };
  e4.default = n;
}), Uu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = ne(), r = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(s) {
    let { gen: a, schema: n, it: i } = s;
    if ((0, t.alwaysValidSchema)(i, n)) {
      s.fail();
      return;
    }
    let l = a.name("valid");
    s.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, l), s.failResult(l, () => s.reset(), () => s.error());
  }, error: { message: "must NOT be valid" } };
  e4.default = r;
}), Du = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: Le().validateUnion, error: { message: "must match a schema in anyOf" } };
  e4.default = t;
}), Vu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: a }) => t._`{passingSchemas: ${a.passing}}` }, code(a) {
    let { gen: n, schema: i, parentSchema: l, it: c } = a;
    if (!Array.isArray(i)) throw Error("ajv implementation error");
    if (c.opts.discriminator && l.discriminator) return;
    let d = i, m = n.let("valid", false), _ = n.let("passing", null), w = n.name("_valid");
    a.setParams({ passing: _ }), n.block(P), a.result(m, () => a.reset(), () => a.error(true));
    function P() {
      d.forEach((y, v) => {
        let p;
        if ((0, r.alwaysValidSchema)(c, y)) n.var(w, true);
        else p = a.subschema({ keyword: "oneOf", schemaProp: v, compositeRule: true }, w);
        if (v > 0) n.if(t._`${w} && ${m}`).assign(m, false).assign(_, t._`[${_}, ${v}]`).else();
        n.if(w, () => {
          if (n.assign(m, true), n.assign(_, v), p) a.mergeEvaluated(p, t.Name);
        });
      });
    }
  } };
  e4.default = s;
}), xu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = ne(), r = { keyword: "allOf", schemaType: "array", code(s) {
    let { gen: a, schema: n, it: i } = s;
    if (!Array.isArray(n)) throw Error("ajv implementation error");
    let l = a.name("valid");
    n.forEach((c, d) => {
      if ((0, t.alwaysValidSchema)(i, c)) return;
      let m = s.subschema({ keyword: "allOf", schemaProp: d }, l);
      s.ok(l), s.mergeEvaluated(m);
    });
  } };
  e4.default = r;
}), Fu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: { message: ({ params: n }) => t.str`must match "${n.ifClause}" schema`, params: ({ params: n }) => t._`{failingKeyword: ${n.ifClause}}` }, code(n) {
    let { gen: i, parentSchema: l, it: c } = n;
    if (l.then === void 0 && l.else === void 0) (0, r.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
    let d = a(c, "then"), m = a(c, "else");
    if (!d && !m) return;
    let _ = i.let("valid", true), w = i.name("_valid");
    if (P(), n.reset(), d && m) {
      let v = i.let("ifClause");
      n.setParams({ ifClause: v }), i.if(w, y("then", v), y("else", v));
    } else if (d) i.if(w, y("then"));
    else i.if((0, t.not)(w), y("else"));
    n.pass(_, () => n.error(true));
    function P() {
      let v = n.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, w);
      n.mergeEvaluated(v);
    }
    function y(v, p) {
      return () => {
        let h = n.subschema({ keyword: v }, w);
        if (i.assign(_, w), n.mergeValidEvaluated(h, _), p) i.assign(p, t._`${v}`);
        else n.setParams({ ifClause: v });
      };
    }
  } };
  function a(n, i) {
    let l = n.schema[i];
    return l !== void 0 && !(0, r.alwaysValidSchema)(n, l);
  }
  e4.default = s;
}), Hu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = ne(), r = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: s, parentSchema: a, it: n }) {
    if (a.if === void 0) (0, t.checkStrictMode)(n, `"${s}" without "if" is ignored`);
  } };
  e4.default = r;
}), xi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ui(), r = Ou(), s = Di(), a = Nu(), n = Mu(), i = Sn(), l = ju(), c = Vi(), d = Au(), m = Lu(), _ = Uu(), w = Du(), P = Vu(), y = xu(), v = Fu(), p = Hu();
  function h(g = false) {
    let f = [_.default, w.default, P.default, y.default, v.default, p.default, l.default, c.default, i.default, d.default, m.default];
    if (g) f.push(r.default, a.default);
    else f.push(t.default, s.default);
    return f.push(n.default), f;
  }
  e4.default = h;
}), Ku = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: s }) => t.str`must match format "${s}"`, params: ({ schemaCode: s }) => t._`{format: ${s}}` }, code(s, a) {
    let { gen: n, data: i, $data: l, schema: c, schemaCode: d, it: m } = s, { opts: _, errSchemaPath: w, schemaEnv: P, self: y } = m;
    if (!_.validateFormats) return;
    if (l) v();
    else p();
    function v() {
      let h = n.scopeValue("formats", { ref: y.formats, code: _.code.formats }), g = n.const("fDef", t._`${h}[${d}]`), f = n.let("fType"), R = n.let("format");
      n.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => n.assign(f, t._`${g}.type || "string"`).assign(R, t._`${g}.validate`), () => n.assign(f, t._`"string"`).assign(R, g)), s.fail$data((0, t.or)(k(), b()));
      function k() {
        if (_.strictSchema === false) return t.nil;
        return t._`${d} && !${R}`;
      }
      function b() {
        let S = P.$async ? t._`(${g}.async ? await ${R}(${i}) : ${R}(${i}))` : t._`${R}(${i})`, q = t._`(typeof ${R} == "function" ? ${S} : ${R}.test(${i}))`;
        return t._`${R} && ${R} !== true && ${f} === ${a} && !${q}`;
      }
    }
    function p() {
      let h = y.formats[c];
      if (!h) {
        k();
        return;
      }
      if (h === true) return;
      let [g, f, R] = b(h);
      if (g === a) s.pass(S());
      function k() {
        if (_.strictSchema === false) {
          y.logger.warn(q());
          return;
        }
        throw Error(q());
        function q() {
          return `unknown format "${c}" ignored in schema at path "${w}"`;
        }
      }
      function b(q) {
        let L = q instanceof RegExp ? (0, t.regexpCode)(q) : _.code.formats ? t._`${_.code.formats}${(0, t.getProperty)(c)}` : void 0, H = n.scopeValue("formats", { key: c, ref: q, code: L });
        if (typeof q == "object" && !(q instanceof RegExp)) return [q.type || "string", q.validate, t._`${H}.validate`];
        return ["string", q, H];
      }
      function S() {
        if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
          if (!P.$async) throw Error("async format in sync schema");
          return t._`await ${R}(${i})`;
        }
        return typeof f == "function" ? t._`${R}(${i})` : t._`${R}.test(${i})`;
      }
    }
  } };
  e4.default = r;
}), Fi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = [Ku().default];
  e4.default = t;
}), Hi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.contentVocabulary = e4.metadataVocabulary = void 0, e4.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], e4.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
}), Ju = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ai(), r = Li(), s = xi(), a = Fi(), n = Hi(), i = [t.default, r.default, (0, s.default)(), a.default, n.metadataVocabulary, n.contentVocabulary];
  e4.default = i;
}), Gu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.DiscrError = void 0;
  var t;
  (function(r) {
    r.Tag = "tag", r.Mapping = "mapping";
  })(t || (e4.DiscrError = t = {}));
}), Ki = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = Gu(), s = _o(), a = os(), n = ne(), i = { keyword: "discriminator", type: "object", schemaType: "object", error: { message: ({ params: { discrError: l, tagName: c } }) => l === r.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`, params: ({ params: { discrError: l, tag: c, tagName: d } }) => t._`{error: ${l}, tag: ${d}, tagValue: ${c}}` }, code(l) {
    let { gen: c, data: d, schema: m, parentSchema: _, it: w } = l, { oneOf: P } = _;
    if (!w.opts.discriminator) throw Error("discriminator: requires discriminator option");
    let y = m.propertyName;
    if (typeof y != "string") throw Error("discriminator: requires propertyName");
    if (m.mapping) throw Error("discriminator: mapping is not supported");
    if (!P) throw Error("discriminator: requires oneOf keyword");
    let v = c.let("valid", false), p = c.const("tag", t._`${d}${(0, t.getProperty)(y)}`);
    c.if(t._`typeof ${p} == "string"`, () => h(), () => l.error(false, { discrError: r.DiscrError.Tag, tag: p, tagName: y })), l.ok(v);
    function h() {
      let R = f();
      c.if(false);
      for (let k in R) c.elseIf(t._`${p} === ${k}`), c.assign(v, g(R[k]));
      c.else(), l.error(false, { discrError: r.DiscrError.Mapping, tag: p, tagName: y }), c.endIf();
    }
    function g(R) {
      let k = c.name("valid"), b = l.subschema({ keyword: "oneOf", schemaProp: R }, k);
      return l.mergeEvaluated(b, t.Name), k;
    }
    function f() {
      var R;
      let k = {}, b = q(_), S = true;
      for (let j = 0; j < P.length; j++) {
        let x = P[j];
        if ((x === null || x === void 0 ? void 0 : x.$ref) && !(0, n.schemaHasRulesButRef)(x, w.self.RULES)) {
          let G = x.$ref;
          if (x = s.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, G), x instanceof s.SchemaEnv) x = x.schema;
          if (x === void 0) throw new a.default(w.opts.uriResolver, w.baseId, G);
        }
        let W = (R = x === null || x === void 0 ? void 0 : x.properties) === null || R === void 0 ? void 0 : R[y];
        if (typeof W != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
        S = S && (b || q(x)), L(W, j);
      }
      if (!S) throw Error(`discriminator: "${y}" must be required`);
      return k;
      function q({ required: j }) {
        return Array.isArray(j) && j.includes(y);
      }
      function L(j, x) {
        if (j.const) H(j.const, x);
        else if (j.enum) for (let W of j.enum) H(W, x);
        else throw Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
      }
      function H(j, x) {
        if (typeof j != "string" || j in k) throw Error(`discriminator: "${y}" values must be unique strings`);
        k[j] = x;
      }
    }
  } };
  e4.default = i;
}), Bu = K((e4, t) => {
  t.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
}), Ji = K((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.MissingRefError = e4.ValidationError = e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = e4.Ajv = void 0;
  let r = ji(), s = Ju(), a = Ki(), n = Bu(), i = ["/properties"], l = "http://json-schema.org/draft-07/schema";
  var c = class extends r.default {
    _addVocabularies() {
      if (super._addVocabularies(), s.default.forEach((P) => this.addVocabulary(P)), this.opts.discriminator) this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let P = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
      this.addMetaSchema(P, l, false), this.refs["http://json-schema.org/schema"] = l;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
    }
  };
  e4.Ajv = c, t.exports = e4 = c, t.exports.Ajv = c, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = c;
  var d = as();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return d.KeywordCxt;
  } });
  var m = te();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return m._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return m.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return m.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return m.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return m.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return m.CodeGen;
  } });
  var _ = go();
  Object.defineProperty(e4, "ValidationError", { enumerable: true, get: function() {
    return _.default;
  } });
  var w = os();
  Object.defineProperty(e4, "MissingRefError", { enumerable: true, get: function() {
    return w.default;
  } });
}), Gi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicAnchor = void 0;
  let t = te(), r = Ae(), s = _o(), a = pn(), n = { keyword: "$dynamicAnchor", schemaType: "string", code: (c) => i(c, c.schema) };
  function i(c, d) {
    let { gen: m, it: _ } = c;
    _.schemaEnv.root.dynamicAnchors[d] = true;
    let w = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`, P = _.errSchemaPath === "#" ? _.validateName : l(c);
    m.if(t._`!${w}`, () => m.assign(w, P));
  }
  e4.dynamicAnchor = i;
  function l(c) {
    let { schemaEnv: d, schema: m, self: _ } = c.it, { root: w, baseId: P, localRefs: y, meta: v } = d.root, { schemaId: p } = _.opts, h = new s.SchemaEnv({ schema: m, schemaId: p, root: w, baseId: P, localRefs: y, meta: v });
    return s.compileSchema.call(_, h), (0, a.getValidate)(c, h);
  }
  e4.default = n;
}), Bi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicRef = void 0;
  let t = te(), r = Ae(), s = pn(), a = { keyword: "$dynamicRef", schemaType: "string", code: (i) => n(i, i.schema) };
  function n(i, l) {
    let { gen: c, keyword: d, it: m } = i;
    if (l[0] !== "#") throw Error(`"${d}" only supports hash fragment reference`);
    let _ = l.slice(1);
    if (m.allErrors) w();
    else {
      let y = c.let("valid", false);
      w(y), i.ok(y);
    }
    function w(y) {
      if (m.schemaEnv.root.dynamicAnchors[_]) {
        let v = c.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
        c.if(v, P(v, y), P(m.validateName, y));
      } else P(m.validateName, y)();
    }
    function P(y, v) {
      return v ? () => c.block(() => {
        (0, s.callRef)(i, y), c.let(v, true);
      }) : () => (0, s.callRef)(i, y);
    }
  }
  e4.dynamicRef = n, e4.default = a;
}), Wu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Gi(), r = ne(), s = { keyword: "$recursiveAnchor", schemaType: "boolean", code(a) {
    if (a.schema) (0, t.dynamicAnchor)(a, "");
    else (0, r.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
  } };
  e4.default = s;
}), Yu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Bi(), r = { keyword: "$recursiveRef", schemaType: "string", code: (s) => (0, t.dynamicRef)(s, s.schema) };
  e4.default = r;
}), Xu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Gi(), r = Bi(), s = Wu(), a = Yu(), n = [t.default, r.default, s.default, a.default];
  e4.default = n;
}), Zu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Sn(), r = { keyword: "dependentRequired", type: "object", schemaType: "object", error: t.error, code: (s) => (0, t.validatePropertyDeps)(s) };
  e4.default = r;
}), Qu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Sn(), r = { keyword: "dependentSchemas", type: "object", schemaType: "object", code: (s) => (0, t.validateSchemaDeps)(s) };
  e4.default = r;
}), ed = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = ne(), r = { keyword: ["maxContains", "minContains"], type: "array", schemaType: "number", code({ keyword: s, parentSchema: a, it: n }) {
    if (a.contains === void 0) (0, t.checkStrictMode)(n, `"${s}" without "contains" is ignored`);
  } };
  e4.default = r;
}), td = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Zu(), r = Qu(), s = ed(), a = [t.default, r.default, s.default];
  e4.default = a;
}), rd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = Ae(), a = { keyword: "unevaluatedProperties", type: "object", schemaType: ["boolean", "object"], trackErrors: true, error: { message: "must NOT have unevaluated properties", params: ({ params: n }) => t._`{unevaluatedProperty: ${n.unevaluatedProperty}}` }, code(n) {
    let { gen: i, schema: l, data: c, errsCount: d, it: m } = n;
    if (!d) throw Error("ajv implementation error");
    let { allErrors: _, props: w } = m;
    if (w instanceof t.Name) i.if(t._`${w} !== true`, () => i.forIn("key", c, (p) => i.if(y(w, p), () => P(p))));
    else if (w !== true) i.forIn("key", c, (p) => w === void 0 ? P(p) : i.if(v(w, p), () => P(p)));
    m.props = true, n.ok(t._`${d} === ${s.default.errors}`);
    function P(p) {
      if (l === false) {
        if (n.setParams({ unevaluatedProperty: p }), n.error(), !_) i.break();
        return;
      }
      if (!(0, r.alwaysValidSchema)(m, l)) {
        let h = i.name("valid");
        if (n.subschema({ keyword: "unevaluatedProperties", dataProp: p, dataPropType: r.Type.Str }, h), !_) i.if((0, t.not)(h), () => i.break());
      }
    }
    function y(p, h) {
      return t._`!${p} || !${p}[${h}]`;
    }
    function v(p, h) {
      let g = [];
      for (let f in p) if (p[f] === true) g.push(t._`${h} !== ${f}`);
      return (0, t.and)(...g);
    }
  } };
  e4.default = a;
}), sd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "unevaluatedItems", type: "array", schemaType: ["boolean", "object"], error: { message: ({ params: { len: a } }) => t.str`must NOT have more than ${a} items`, params: ({ params: { len: a } }) => t._`{limit: ${a}}` }, code(a) {
    let { gen: n, schema: i, data: l, it: c } = a, d = c.items || 0;
    if (d === true) return;
    let m = n.const("len", t._`${l}.length`);
    if (i === false) a.setParams({ len: d }), a.fail(t._`${m} > ${d}`);
    else if (typeof i == "object" && !(0, r.alwaysValidSchema)(c, i)) {
      let w = n.var("valid", t._`${m} <= ${d}`);
      n.if((0, t.not)(w), () => _(w, d)), a.ok(w);
    }
    c.items = true;
    function _(w, P) {
      n.forRange("i", P, m, (y) => {
        if (a.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: r.Type.Num }, w), !c.allErrors) n.if((0, t.not)(w), () => n.break());
      });
    }
  } };
  e4.default = s;
}), ad = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = rd(), r = sd(), s = [t.default, r.default];
  e4.default = s;
}), od = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ai(), r = Li(), s = xi(), a = Xu(), n = td(), i = ad(), l = Fi(), c = Hi(), d = [a.default, t.default, r.default, (0, s.default)(true), l.default, c.metadataVocabulary, c.contentVocabulary, n.default, i.default];
  e4.default = d;
}), nd = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/schema", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true, "https://json-schema.org/draft/2020-12/vocab/applicator": true, "https://json-schema.org/draft/2020-12/vocab/unevaluated": true, "https://json-schema.org/draft/2020-12/vocab/validation": true, "https://json-schema.org/draft/2020-12/vocab/meta-data": true, "https://json-schema.org/draft/2020-12/vocab/format-annotation": true, "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Core and Validation specifications meta-schema", allOf: [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], type: ["object", "boolean"], $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", properties: { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: true, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: true, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: true }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: true } } };
}), id = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/applicator", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": true }, $dynamicAnchor: "meta", title: "Applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } } };
}), cd = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/unevaluated", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": true }, $dynamicAnchor: "meta", title: "Unevaluated applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } } };
}), ld = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/content", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Content vocabulary meta-schema", type: ["object", "boolean"], properties: { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } } };
}), ud = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/core", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true }, $dynamicAnchor: "meta", title: "Core vocabulary meta-schema", type: ["object", "boolean"], properties: { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, $defs: { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } } };
}), dd = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/format-annotation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": true }, $dynamicAnchor: "meta", title: "Format vocabulary meta-schema for annotation results", type: ["object", "boolean"], properties: { format: { type: "string" } } };
}), hd = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/meta-data", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": true }, $dynamicAnchor: "meta", title: "Meta-data vocabulary meta-schema", type: ["object", "boolean"], properties: { title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true } } };
}), md = K((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/validation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": true }, $dynamicAnchor: "meta", title: "Validation vocabulary meta-schema", type: ["object", "boolean"], properties: { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, const: true, enum: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, $defs: { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
}), pd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = nd(), r = id(), s = cd(), a = ld(), n = ud(), i = dd(), l = hd(), c = md(), d = ["/properties"];
  function m(_) {
    return [t, r, s, a, n, w(this, i), l, w(this, c)].forEach((P) => this.addMetaSchema(P, void 0, false)), this;
    function w(P, y) {
      return _ ? P.$dataMetaSchema(y, d) : y;
    }
  }
  e4.default = m;
}), fd = K((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.MissingRefError = e4.ValidationError = e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = e4.Ajv2020 = void 0;
  let r = ji(), s = od(), a = Ki(), n = pd(), i = "https://json-schema.org/draft/2020-12/schema";
  var l = class extends r.default {
    constructor(w = {}) {
      super({ ...w, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if (super._addVocabularies(), s.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator) this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: w, meta: P } = this.opts;
      if (!P) return;
      n.default.call(this, w), this.refs["http://json-schema.org/schema"] = i;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  };
  e4.Ajv2020 = l, t.exports = e4 = l, t.exports.Ajv2020 = l, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = l;
  var c = as();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return c.KeywordCxt;
  } });
  var d = te();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return d._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return d.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return d.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return d.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return d.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return d.CodeGen;
  } });
  var m = go();
  Object.defineProperty(e4, "ValidationError", { enumerable: true, get: function() {
    return m.default;
  } });
  var _ = os();
  Object.defineProperty(e4, "MissingRefError", { enumerable: true, get: function() {
    return _.default;
  } });
}), Sd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.formatNames = e4.fastFormats = e4.fullFormats = void 0;
  function t(j, x) {
    return { validate: j, compare: x };
  }
  e4.fullFormats = { date: t(n, i), time: t(c(true), d), "date-time": t(w(true), P), "iso-time": t(c(), m), "iso-date-time": t(w(), y), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: h, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: H, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: f, int32: { type: "number", validate: b }, int64: { type: "number", validate: S }, float: { type: "number", validate: q }, double: { type: "number", validate: q }, password: true, binary: true }, e4.fastFormats = { ...e4.fullFormats, date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i), time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d), "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, P), "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m), "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i }, e4.formatNames = Object.keys(e4.fullFormats);
  function r(j) {
    return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
  }
  let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function n(j) {
    let x = s.exec(j);
    if (!x) return false;
    let W = +x[1], G = +x[2], se = +x[3];
    return G >= 1 && G <= 12 && se >= 1 && se <= (G === 2 && r(W) ? 29 : a[G]);
  }
  function i(j, x) {
    if (!(j && x)) return;
    if (j > x) return 1;
    if (j < x) return -1;
    return 0;
  }
  let l = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(j) {
    return function(W) {
      let G = l.exec(W);
      if (!G) return false;
      let se = +G[1], le = +G[2], ie = +G[3], Se = G[4], ae = G[5] === "-" ? -1 : 1, N = +(G[6] || 0), U = +(G[7] || 0);
      if (N > 23 || U > 59 || j && !Se) return false;
      if (se <= 23 && le <= 59 && ie < 60) return true;
      let F = le - U * ae, z = se - N * ae - (F < 0 ? 1 : 0);
      return (z === 23 || z === -1) && (F === 59 || F === -1) && ie < 61;
    };
  }
  function d(j, x) {
    if (!(j && x)) return;
    let W = (/* @__PURE__ */ new Date("2020-01-01T" + j)).valueOf(), G = (/* @__PURE__ */ new Date("2020-01-01T" + x)).valueOf();
    if (!(W && G)) return;
    return W - G;
  }
  function m(j, x) {
    if (!(j && x)) return;
    let W = l.exec(j), G = l.exec(x);
    if (!(W && G)) return;
    if (j = W[1] + W[2] + W[3], x = G[1] + G[2] + G[3], j > x) return 1;
    if (j < x) return -1;
    return 0;
  }
  let _ = /t|\s/i;
  function w(j) {
    let x = c(j);
    return function(G) {
      let se = G.split(_);
      return se.length === 2 && n(se[0]) && x(se[1]);
    };
  }
  function P(j, x) {
    if (!(j && x)) return;
    let W = new Date(j).valueOf(), G = new Date(x).valueOf();
    if (!(W && G)) return;
    return W - G;
  }
  function y(j, x) {
    if (!(j && x)) return;
    let [W, G] = j.split(_), [se, le] = x.split(_), ie = i(W, se);
    if (ie === void 0) return;
    return ie || d(G, le);
  }
  let v = /\/|:/, p = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function h(j) {
    return v.test(j) && p.test(j);
  }
  let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function f(j) {
    return g.lastIndex = 0, g.test(j);
  }
  let R = -2147483648, k = 2147483647;
  function b(j) {
    return Number.isInteger(j) && j <= k && j >= R;
  }
  function S(j) {
    return Number.isInteger(j);
  }
  function q() {
    return true;
  }
  let L = /[^\\]\\Z/;
  function H(j) {
    if (L.test(j)) return false;
    try {
      return new RegExp(j), true;
    } catch (x) {
      return false;
    }
  }
}), gd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.formatLimitDefinition = void 0;
  let t = Ji(), r = te(), s = r.operators, a = { formatMaximum: { okStr: "<=", ok: s.LTE, fail: s.GT }, formatMinimum: { okStr: ">=", ok: s.GTE, fail: s.LT }, formatExclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE }, formatExclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE } }, n = { message: ({ keyword: l, schemaCode: c }) => r.str`should be ${a[l].okStr} ${c}`, params: ({ keyword: l, schemaCode: c }) => r._`{comparison: ${a[l].okStr}, limit: ${c}}` };
  e4.formatLimitDefinition = { keyword: Object.keys(a), type: "string", schemaType: "string", $data: true, error: n, code(l) {
    let { gen: c, data: d, schemaCode: m, keyword: _, it: w } = l, { opts: P, self: y } = w;
    if (!P.validateFormats) return;
    let v = new t.KeywordCxt(w, y.RULES.all.format.definition, "format");
    if (v.$data) p();
    else h();
    function p() {
      let f = c.scopeValue("formats", { ref: y.formats, code: P.code.formats }), R = c.const("fmt", r._`${f}[${v.schemaCode}]`);
      l.fail$data((0, r.or)(r._`typeof ${R} != "object"`, r._`${R} instanceof RegExp`, r._`typeof ${R}.compare != "function"`, g(R)));
    }
    function h() {
      let f = v.schema, R = y.formats[f];
      if (!R || R === true) return;
      if (typeof R != "object" || R instanceof RegExp || typeof R.compare != "function") throw Error(`"${_}": format "${f}" does not define "compare" function`);
      let k = c.scopeValue("formats", { key: f, ref: R, code: P.code.formats ? r._`${P.code.formats}${(0, r.getProperty)(f)}` : void 0 });
      l.fail$data(g(k));
    }
    function g(f) {
      return r._`${f}.compare(${d}, ${m}) ${a[_].fail} 0`;
    }
  }, dependencies: ["format"] };
  let i = (l) => (l.addKeyword(e4.formatLimitDefinition), l);
  e4.default = i;
}), _d = K((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let r = Sd(), s = gd(), a = te(), n = new a.Name("fullFormats"), i = new a.Name("fastFormats"), l = (d, m = { keywords: true }) => {
    if (Array.isArray(m)) return c(d, m, r.fullFormats, n), d;
    let [_, w] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
    if (c(d, m.formats || r.formatNames, _, w), m.keywords) (0, s.default)(d);
    return d;
  };
  l.get = (d, m = "full") => {
    let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
    if (!_) throw Error(`Unknown format "${d}"`);
    return _;
  };
  function c(d, m, _, w) {
    var P, y;
    (P = (y = d.opts.code).formats) !== null && P !== void 0 || (y.formats = a._`require("ajv-formats/dist/formats").${w}`);
    for (let v of m) d.addFormat(v, _[v]);
  }
  t.exports = e4 = l, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = l;
}), yd = Ji(), vd = fd(), bd = $s(_d(), 1), Rd = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]), zd = bd.default;
function wd() {
  let e4 = new vd.Ajv2020({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
  return zd(e4), e4;
}
var Etn = class {
  _ajv;
  _userAjv;
  constructor(e4) {
    this._userAjv = e4 !== void 0, this._ajv = e4;
  }
  get ajv() {
    return this._ajv ??= wd();
  }
  getValidator(e4) {
    if (!this._userAjv && "$schema" in e4 && typeof e4.$schema === "string" && !Rd.has(e4.$schema.replace(/#$/, ""))) {
      let s = e4.$schema.slice(0, 200);
      throw Error(`JSON Schema declares an unsupported dialect ("$schema": "${s}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`);
    }
    let t = this.ajv, r = "$id" in e4 && typeof e4.$id === "string" ? t.getSchema(e4.$id) ?? t.compile(e4) : t.compile(e4);
    return (s) => r(s) ? { valid: true, data: s, errorMessage: void 0 } : { valid: false, data: void 0, errorMessage: t.errorsText(r.errors) };
  }
}, Fh = yd.Ajv;
var Wi = false;
var ns = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthClientFlowError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ie(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, e4);
  }
  constructor(e4) {
    super(e4);
    this.name = new.target.name, bt(this, new.target);
  }
}, kpt = class extends ns {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.IssuerMismatchError" });
  }
  kind;
  expected;
  received;
  constructor(e4, t, r) {
    super(`Issuer mismatch in ${e4 === "metadata" ? "authorization server metadata (RFC 8414 §3.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`);
    this.kind = e4, this.expected = t, this.received = r;
  }
}, fTr = class extends ns {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.RegistrationRejectedError" });
  }
  status;
  body;
  submittedMetadata;
  constructor(e4) {
    super(`Dynamic Client Registration rejected (HTTP ${e4.status}): ${e4.body}`);
    this.status = e4.status, this.body = e4.body, this.submittedMetadata = e4.submittedMetadata;
  }
}, uc = class extends ns {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.InsecureTokenEndpointError" });
  }
  tokenEndpoint;
  constructor(e4) {
    super(`Refusing to send credentials to non-https token endpoint '${e4}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`);
    this.tokenEndpoint = e4;
  }
}, gn = class extends ns {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.AuthorizationServerMismatchError" });
  }
  constructor(e4, t) {
    super(`Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e4)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`);
    this.recordedIssuer = e4, this.currentIssuer = t;
  }
}, Yi = class extends ns {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.InsufficientScopeError" });
  }
  requiredScope;
  resourceMetadataUrl;
  errorDescription;
  constructor(e4) {
    super(`Insufficient scope${e4.requiredScope ? `: required "${e4.requiredScope}"` : ""}`);
    this.requiredScope = e4.requiredScope, this.resourceMetadataUrl = e4.resourceMetadataUrl, this.errorDescription = e4.errorDescription;
  }
};
function Xi(e4, t, r) {
  if (e4 === void 0) return;
  if (e4.issuer === void 0) {
    if (r?.canPersistStamp !== false) console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
    return e4;
  }
  return dc(e4.issuer, t) ? e4 : void 0;
}
function dc(e4, t) {
  return e4 === t || e4.endsWith("/") && e4.slice(0, -1) === t || t.endsWith("/") && t.slice(0, -1) === e4;
}
function hc(e4) {
  if (e4 == null) return false;
  let t = e4;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function $d(e4, t, r) {
  let { resourceMetadataUrl: s, scope: a } = mBe(t.response);
  if (await pHt(e4, { serverUrl: t.serverUrl, resourceMetadataUrl: s, scope: a, fetchFn: t.fetchFn, ...r }) !== "AUTHORIZED") throw new lO();
}
function mc(e4, t) {
  return { token: async () => (await e4.tokens())?.access_token, onUnauthorized: async (r) => $d(e4, r, t) };
}
var lO = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnauthorizedError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ie(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, e4);
  }
  constructor(e4) {
    super(e4 ?? "Unauthorized");
    this.name = "UnauthorizedError", bt(this, new.target);
  }
};
function Ro(e4) {
  return e4?.authorization_response_iss_parameter_supported === true;
}
function zo({ iss: e4, expectedIssuer: t, issParameterSupported: r }) {
  if (t === void 0) return;
  if (e4 === void 0) {
    if (r) throw new kpt("authorization_response", t, void 0);
    return;
  }
  if (e4 !== t) throw new kpt("authorization_response", t, e4);
}
function _n(...e4) {
  let t = /* @__PURE__ */ new Set();
  for (let r of e4) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function Ed(e4, t) {
  if (!e4) return false;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e4.split(/\s+/)) if (s && !r.has(s)) return true;
  return false;
}
async function pc(e4, t, r, s, a) {
  if (typeof e4 === "string") return { authorizationCode: e4, iss: t };
  let n = e4.get("iss") ?? void 0, i = e4.get("code");
  if (i) return { authorizationCode: i, iss: n };
  let l = (await r.discoveryState?.())?.authorizationServerMetadata;
  if (!l) try {
    l = (await gTr(s, a)).authorizationServerMetadata;
  } catch {
    l = void 0;
  }
  if (!l) throw new lO("Authorization callback failed and the issuer could not be verified");
  zo({ iss: n, expectedIssuer: l.issuer, issParameterSupported: Ro(l) });
  let c = e4.get("error");
  if (c) throw new Pq(c, e4.get("error_description") ?? c, e4.get("error_uri") ?? void 0);
  throw new lO("Authorization callback contained neither `code` nor `error`");
}
function Pd(e4) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e4);
}
var yn = "code", vn = "S256";
function Td(e4, t) {
  let r = e4.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e4 && e4.token_endpoint_auth_method && Pd(e4.token_endpoint_auth_method) && (t.length === 0 || t.includes(e4.token_endpoint_auth_method))) return e4.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function Cd(e4, t, r, s) {
  let { client_id: a, client_secret: n } = t;
  switch (e4) {
    case "client_secret_basic":
      kd(a, n, r);
      return;
    case "client_secret_post":
      qd(a, n, s);
      return;
    case "none":
      Id(a, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e4}`);
  }
}
function kd(e4, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e4}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function qd(e4, t, r) {
  if (r.set("client_id", e4), t) r.set("client_secret", t);
}
function Id(e4, t) {
  t.set("client_id", e4);
}
function fc(e4) {
  return e4 === "localhost" || e4 === "127.0.0.1" || e4 === "[::1]" || e4 === "::1";
}
function Od(e4) {
  let t = new URL(String(e4));
  if (t.protocol !== "https:" && !fc(t.hostname)) throw new uc(t.href);
  return t;
}
function Nd(e4) {
  for (let t of e4 ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (fc(r.hostname)) return "native";
  }
  return "web";
}
function Md(e4) {
  let t = e4.clientMetadata;
  return { ...t, grant_types: t.grant_types ?? (e4.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]), application_type: t.application_type ?? Nd(t.redirect_uris) };
}
async function Zi(e4) {
  let t = e4 instanceof Response ? e4.status : void 0, r = e4 instanceof Response ? await e4.text() : e4;
  try {
    let s = cHt.parse(JSON.parse(r));
    return Pq.fromResponse(s);
  } catch (s) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${s}. Raw body: ${r}`;
    return new Pq(Xae.ServerError, a);
  }
}
async function pHt(e4, t) {
  try {
    return await bn(e4, t);
  } catch (r) {
    if (r instanceof Pq) {
      if (r.code === Xae.InvalidClient || r.code === Xae.UnauthorizedClient) return await e4.invalidateCredentials?.("client"), await e4.invalidateCredentials?.("tokens"), await bn(e4, t);
      else if (r.code === Xae.InvalidGrant) return await e4.invalidateCredentials?.("tokens"), await bn(e4, t);
    }
    throw r;
  }
}
function jd(e4) {
  let { requestedScope: t, resourceMetadata: r, authServerMetadata: s, clientMetadata: a } = e4, n = t || r?.scopes_supported?.join(" ") || a.scope;
  if (n && s?.scopes_supported?.includes("offline_access") && !n.split(" ").includes("offline_access") && a.grant_types?.includes("refresh_token")) n = `${n} offline_access`;
  return n;
}
async function bn(e4, { serverUrl: t, authorizationCode: r, iss: s, scope: a, resourceMetadataUrl: n, fetchFn: i, skipIssuerMetadataValidation: l, forceReauthorization: c }) {
  let d = Md(e4), m = await e4.discoveryState?.(), _, w, P, y, v = n;
  if (!v && m?.resourceMetadataUrl) v = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (w = m.authorizationServerUrl, _ = m.resourceMetadata, P = m.authorizationServerMetadata ?? await fHt(w, { fetchFn: i, skipIssuerValidation: l }), !_) try {
      _ = await mTr(t, { resourceMetadataUrl: v }, i);
    } catch (j) {
      if (j instanceof TypeError) throw j;
    }
    if (P !== m.authorizationServerMetadata || _ !== m.resourceMetadata) await e4.saveDiscoveryState?.({ authorizationServerUrl: String(w), resourceMetadataUrl: v?.toString(), resourceMetadata: _, authorizationServerMetadata: P });
  } else {
    let j = await gTr(t, { resourceMetadataUrl: v, fetchFn: i, skipIssuerMetadataValidation: l });
    w = j.authorizationServerUrl, P = j.authorizationServerMetadata, _ = j.resourceMetadata, y = { authorizationServerUrl: String(w), resourceMetadataUrl: v?.toString(), resourceMetadata: _, authorizationServerMetadata: P };
  }
  let p = P?.issuer ?? String(w), h = { issuer: p };
  if (await e4.saveAuthorizationServerUrl?.(p), r !== void 0) {
    let j = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (j === void 0) {
      if (e4.saveDiscoveryState !== void 0) throw new gn("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", p);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) — see docs/migration/upgrade-to-v2.md §SEP-2352.");
    } else if (!dc(j, p)) throw new gn(j, p);
  }
  if (y) await e4.saveDiscoveryState?.(y);
  let g = await Ud(t, e4, _);
  if (g) await e4.saveResourceUrl?.(String(g));
  let f = jd({ requestedScope: a, resourceMetadata: _, authServerMetadata: P, clientMetadata: e4.clientMetadata }), R = await Promise.resolve(e4.clientInformation(h)), k = Xi(R, p, { canPersistStamp: e4.saveClientInformation !== void 0 });
  if (k === void 0 && R?.issuer && e4.saveClientInformation === void 0) throw new gn(R.issuer, p);
  if (k && k.issuer === void 0) k = { ...k, issuer: p }, await e4.saveClientInformation?.(k, h);
  if (!k) {
    if (r !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let j = P?.client_id_metadata_document_supported === true, x = e4.clientMetadataUrl;
    if (x && !Ld(x)) throw new Pq(Xae.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${x}`);
    if (j && x) k = { client_id: x, issuer: p }, await e4.saveClientInformation?.(k, h);
    else {
      if (!e4.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      k = { ...await Kd(w, { metadata: P, clientMetadata: d, scope: f, fetchFn: i }), issuer: p }, await e4.saveClientInformation(k, h);
    }
  }
  let b = !e4.redirectUrl;
  if (r !== void 0 || b) {
    if (r !== void 0) zo({ iss: s, expectedIssuer: P?.issuer, issParameterSupported: Ro(P) });
    let j = await Hd(e4, w, { metadata: P, resource: g, authorizationCode: r, iss: s, scope: f, fetchFn: i });
    return await e4.saveTokens({ ...j, issuer: p }, h), "AUTHORIZED";
  }
  let S = Xi(await e4.tokens(h), p);
  if (S && S.issuer === void 0) S = { ...S, issuer: p }, await e4.saveTokens(S, h);
  if (S?.refresh_token && !c) try {
    let j = await ibo(w, { metadata: P, clientInformation: k, refreshToken: S.refresh_token, resource: g, addClientAuthentication: e4.addClientAuthentication, fetchFn: i });
    return await e4.saveTokens({ ...j, issuer: p }, h), "AUTHORIZED";
  } catch (j) {
    if (j instanceof uc) throw j;
    if (!(j instanceof Pq) || j.code === Xae.ServerError) ;
    else throw j;
  }
  let q = e4.state ? await e4.state() : void 0, { authorizationUrl: L, codeVerifier: H } = await sbo(w, { metadata: P, clientInformation: k, state: q, redirectUrl: e4.redirectUrl, scope: f, resource: g });
  return await e4.saveCodeVerifier(H), await e4.redirectToAuthorization(L), "REDIRECT";
}
function Ld(e4) {
  if (!e4) return false;
  try {
    let t = new URL(e4);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return false;
  }
}
async function Ud(e4, t, r) {
  let s = Jn(e4);
  if (t.validateResourceURL) return await t.validateResourceURL(s, r?.resource);
  if (!r) return;
  if (!Gn({ requestedResource: s, configuredResource: r.resource })) throw Error(`Protected resource ${r.resource} does not match expected ${s} (or origin)`);
  return new URL(r.resource);
}
function mBe(e4) {
  let t = e4.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let a = yo(e4, "resource_metadata") || void 0, n;
  if (a) try {
    n = new URL(a);
  } catch {
  }
  let i = yo(e4, "scope") || void 0, l = yo(e4, "error") || void 0, c = yo(e4, "error_description") || void 0;
  return { resourceMetadataUrl: n, scope: i, error: l, errorDescription: c };
}
function yo(e4, t) {
  let r = e4.headers.get("WWW-Authenticate");
  if (!r) return null;
  let s = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`), a = r.match(s);
  if (a) {
    let n = a[1] || a[2];
    if (n) return n;
  }
  return null;
}
async function mTr(e4, t, r = fetch) {
  let s = await xd(e4, "oauth-protected-resource", r, { protocolVersion: t?.protocolVersion, metadataUrl: t?.resourceMetadataUrl });
  if (!s || s.status === 404) throw await s?.text?.().catch(() => {
  }), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!s.ok) throw await s.text?.().catch(() => {
  }), Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
  return Br.parse(await s.json());
}
async function Sc(e4, t, r = fetch) {
  try {
    return await r(e4, { headers: t });
  } catch (s) {
    if (!(s instanceof TypeError) || !Wi) throw s;
    if (t) try {
      return await r(e4, {});
    } catch (a) {
      if (!(a instanceof TypeError)) throw a;
      return;
    }
    return;
  }
}
function Dd(e4, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e4}` : `/.well-known/${e4}${t}`;
}
async function Qi(e4, t, r = fetch) {
  return await Sc(e4, { "MCP-Protocol-Version": t }, r);
}
function Vd(e4, t) {
  if (!e4) return true;
  if (t === "/") return false;
  return e4.status >= 400 && e4.status < 500 || e4.status === 502;
}
async function xd(e4, t, r, s) {
  let a = new URL(e4), n = s?.protocolVersion ?? Ot, i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);
  else {
    let c = Dd(t, a.pathname);
    i = new URL(c, s?.metadataServerUrl ?? a), i.search = a.search;
  }
  let l = await Qi(i, n, r);
  if (!s?.metadataUrl && Vd(l, a.pathname)) l = await Qi(new URL(`/.well-known/${t}`, a), n, r);
  return l;
}
function Fd(e4) {
  let t = typeof e4 === "string" ? new URL(e4) : e4, r = t.pathname !== "/", s = [];
  if (!r) return s.push({ url: new URL("/.well-known/oauth-authorization-server", t.origin), type: "oauth" }, { url: new URL("/.well-known/openid-configuration", t.origin), type: "oidc" }), s;
  let a = t.pathname;
  if (a.endsWith("/")) a = a.slice(0, -1);
  return s.push({ url: new URL(`/.well-known/oauth-authorization-server${a}`, t.origin), type: "oauth" }, { url: new URL(`/.well-known/openid-configuration${a}`, t.origin), type: "oidc" }, { url: new URL(`${a}/.well-known/openid-configuration`, t.origin), type: "oidc" }), s;
}
async function fHt(e4, { fetchFn: t = fetch, protocolVersion: r = Ot, skipIssuerValidation: s = false } = {}) {
  let a = { "MCP-Protocol-Version": r, Accept: "application/json" }, n = Fd(e4);
  for (let { url: i, type: l } of n) {
    let c = await Sc(i, a, t);
    if (!c) continue;
    if (!c.ok) {
      if (await c.text?.().catch(() => {
      }), c.status >= 400 && c.status < 500 || c.status === 502) continue;
      throw Error(`HTTP ${c.status} trying to load ${l === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`);
    }
    let d = l === "oauth" ? vpt.parse(await c.json()) : lHt.parse(await c.json());
    if (!s) {
      let m = typeof e4 === "string" ? e4 : e4.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new kpt("metadata", m, d.issuer);
    }
    return d;
  }
}
async function gTr(e4, t) {
  let r, s;
  try {
    if (r = await mTr(e4, { resourceMetadataUrl: t?.resourceMetadataUrl }, t?.fetchFn), r.authorization_servers && r.authorization_servers.length > 0) s = r.authorization_servers[0];
  } catch (n) {
    if (n instanceof TypeError) throw n;
  }
  if (!s) s = String(new URL("/", e4));
  let a = await fHt(s, { fetchFn: t?.fetchFn, skipIssuerValidation: t?.skipIssuerMetadataValidation });
  return { authorizationServerUrl: s, authorizationServerMetadata: a, resourceMetadata: r };
}
async function sbo(e4, { metadata: t, clientInformation: r, redirectUrl: s, scope: a, state: n, resource: i }) {
  let l;
  if (t) {
    if (l = new URL(t.authorization_endpoint), !t.response_types_supported.includes(yn)) throw Error(`Incompatible auth server: does not support response type ${yn}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(vn)) throw Error(`Incompatible auth server: does not support code challenge method ${vn}`);
  } else l = new URL("/authorize", e4);
  let c = await Dtn(), { code_verifier: d, code_challenge: m } = c;
  if (l.searchParams.set("response_type", yn), l.searchParams.set("client_id", r.client_id), l.searchParams.set("code_challenge", m), l.searchParams.set("code_challenge_method", vn), l.searchParams.set("redirect_uri", String(s)), n) l.searchParams.set("state", n);
  if (a) l.searchParams.set("scope", a);
  if (a?.split(" ").includes("offline_access")) l.searchParams.append("prompt", "consent");
  if (i) l.searchParams.set("resource", i.href);
  return { authorizationUrl: l, codeVerifier: d };
}
function gc(e4, t, r) {
  return new URLSearchParams({ grant_type: "authorization_code", code: e4, code_verifier: t, redirect_uri: String(r) });
}
async function $n(e4, { metadata: t, tokenRequestParams: r, clientInformation: s, addClientAuthentication: a, resource: n, fetchFn: i }) {
  let l = Od(t?.token_endpoint ?? new URL("/token", e4)), c = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
  if (n) r.set("resource", n.href);
  if (a) await a(c, r, l, t);
  else if (s) Cd(Td(s, t?.token_endpoint_auth_methods_supported ?? []), s, c, r);
  let d = await (i ?? fetch)(l, { method: "POST", headers: c, body: r });
  if (!d.ok) throw await Zi(d);
  let m = await d.json();
  try {
    return dHt.parse(m);
  } catch (_) {
    if (typeof m === "object" && m !== null && "error" in m) throw await Zi(JSON.stringify(m));
    throw _;
  }
}
async function BRs(e4, { metadata: t, clientInformation: r, authorizationCode: s, iss: a, codeVerifier: n, redirectUri: i, resource: l, addClientAuthentication: c, fetchFn: d }) {
  return zo({ iss: a, expectedIssuer: t?.issuer, issParameterSupported: Ro(t) }), $n(e4, { metadata: t, tokenRequestParams: gc(s, n, i), clientInformation: r, addClientAuthentication: c, resource: l, fetchFn: d });
}
async function ibo(e4, { metadata: t, clientInformation: r, refreshToken: s, resource: a, addClientAuthentication: n, fetchFn: i }) {
  return { refresh_token: s, ...await $n(e4, { metadata: t, tokenRequestParams: new URLSearchParams({ grant_type: "refresh_token", refresh_token: s }), clientInformation: r, addClientAuthentication: n, resource: a, fetchFn: i }) };
}
async function Hd(e4, t, { metadata: r, resource: s, authorizationCode: a, iss: n, scope: i, fetchFn: l } = {}) {
  if (a !== void 0) zo({ iss: n, expectedIssuer: r?.issuer, issParameterSupported: Ro(r) });
  let c = i ?? e4.clientMetadata.scope, d;
  if (e4.prepareTokenRequest) d = await e4.prepareTokenRequest(c);
  if (!d) {
    if (!a) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e4.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    d = gc(a, await e4.codeVerifier(), e4.redirectUrl);
  }
  let m = await e4.clientInformation({ issuer: r?.issuer ?? String(t) });
  return $n(t, { metadata: r, tokenRequestParams: d, clientInformation: m ?? void 0, addClientAuthentication: e4.addClientAuthentication, resource: s, fetchFn: l });
}
async function Kd(e4, { metadata: t, clientMetadata: r, scope: s, fetchFn: a }) {
  let n;
  if (t) {
    if (!t.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
    n = new URL(t.registration_endpoint);
  } else n = new URL("/register", e4);
  let i = { ...r, ...s === void 0 ? {} : { scope: s } }, l = await (a ?? fetch)(n, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) });
  if (!l.ok) throw new fTr({ status: l.status, body: await l.text(), submittedMetadata: i });
  return Wr.parse(await l.json());
}
var vo = /* @__PURE__ */ new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "server/discover"]), Jd = class {
  _entries = /* @__PURE__ */ new Map();
  _maxEntries;
  _stamp = 0;
  _cappedSize = 0;
  constructor(e4) {
    this._maxEntries = e4?.maxEntries ?? 512;
  }
  get size() {
    return this._entries.size;
  }
  get(e4) {
    return this._entries.get(Rn(e4));
  }
  set(e4, t) {
    let r = Rn(e4), s = vo.has(e4.method), a = !this._entries.has(r);
    if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
      for (let i of this._entries.keys()) if (!vo.has(i.slice(0, i.indexOf("\0")))) {
        this._entries.delete(i), this._cappedSize--;
        break;
      }
    }
    let n = ++this._stamp;
    if (this._entries.set(r, { ...t, stamp: n }), a && !s) this._cappedSize++;
    return n;
  }
  delete(e4) {
    if (this._entries.delete(Rn(e4)) && !vo.has(e4.method)) this._cappedSize--;
  }
  evict(e4) {
    let t = `${e4}\0`, r = vo.has(e4);
    for (let s of this._entries.keys()) if (s.startsWith(t)) {
      if (this._entries.delete(s), !r) this._cappedSize--;
    }
  }
  clear() {
    this._entries.clear(), this._cappedSize = 0;
  }
};
function Rn(e4) {
  return `${e4.method}\0${JSON.stringify([e4.partition ?? "", e4.params ?? ""])}`;
}
function zn(e4, t) {
  return t === void 0 ? e4 : `${e4}\0${t}`;
}
var Gd = 864e5, Bd = class {
  _evictionGeneration = /* @__PURE__ */ new Map();
  _toolIndex;
  _toolOutputValidatorIndex;
  _serverIdentity = "";
  constructor(e4, t, r = () => {
  }, s = "", a = Date.now) {
    this._store = e4, this._isUserSupplied = t, this._reportError = r, this._cachePartition = s, this._now = a;
  }
  now() {
    return this._now();
  }
  setServerIdentity(e4) {
    this._serverIdentity = e4;
  }
  _partitionFor(e4) {
    return JSON.stringify([this._serverIdentity, e4 === "public" ? "" : this._cachePartition]);
  }
  async _probe(e4, t) {
    let r = { method: e4, params: t ?? "" }, s = this._partitionFor("private"), a = await this._store.get({ ...r, partition: s });
    if (a !== void 0) return a;
    let n = this._partitionFor("public");
    if (n === s) return;
    let i = await this._store.get({ ...r, partition: n });
    return i?.scope === "public" ? i : void 0;
  }
  async evict(e4) {
    this._evictionGeneration.set(e4, (this._evictionGeneration.get(e4) ?? 0) + 1), await this._deleteBoth(e4, "");
  }
  async _deleteBoth(e4, t) {
    let r = this._partitionFor("private"), s = this._partitionFor("public");
    try {
      await this._store.delete({ method: e4, params: t, partition: r });
    } catch (a) {
      this._reportError(a);
    }
    if (s !== r) try {
      await this._store.delete({ method: e4, params: t, partition: s });
    } catch (a) {
      this._reportError(a);
    }
  }
  async evictKey(e4, t) {
    let r = zn(e4, t), s = this._evictionGeneration.get(r);
    if (s !== void 0) this._evictionGeneration.set(r, s + 1);
    await this._deleteBoth(e4, t);
  }
  captureGeneration(e4, t) {
    let r = zn(e4, t), s = this._evictionGeneration.get(r) ?? 0;
    return this._evictionGeneration.set(r, s), s;
  }
  async write(e4, t, r, s) {
    if ((this._evictionGeneration.get(zn(e4, s?.params)) ?? 0) !== r) return;
    let a = s?.params ?? "", n = this._partitionFor("private"), i = this._partitionFor("public"), l = (s?.scope ?? "private") === "public" ? i : n;
    try {
      await this._store.set({ method: e4, params: a, partition: l }, { value: Wd(t), expiresAt: s?.expiresAt, scope: s?.scope });
    } catch (c) {
      this._reportError(c);
    }
    if (i !== n) try {
      await this._store.delete({ method: e4, params: a, partition: l === n ? i : n });
    } catch (c) {
      this._reportError(c);
    }
  }
  async read(e4, t) {
    let r = await this._probe(e4, t);
    if (r?.expiresAt === void 0 || !(r.expiresAt > this.now())) return;
    try {
      let s = JSON.parse(r.value);
      if (typeof s !== "object" || s === null || Array.isArray(s)) throw TypeError("cached document is not an object");
      return { value: s };
    } catch (s) {
      this._reportError(s), await this._deleteBoth(e4, t ?? "");
      return;
    }
  }
  resetForReconnect() {
    if (!this._isUserSupplied) this._store.clear();
    this._evictionGeneration.clear(), this._toolIndex = void 0, this._toolOutputValidatorIndex = void 0, this._serverIdentity = "";
  }
  async toolDefinition(e4) {
    let t = await this._probe("tools/list");
    if (t === void 0) {
      this._toolIndex = void 0;
      return;
    }
    if (this._toolIndex?.stamp !== t.stamp) {
      let r = this._decodeListTools(t), s = /* @__PURE__ */ new Map();
      if (r !== void 0) for (let a of r.tools) s.set(a.name, a);
      this._toolIndex = { stamp: t.stamp, byName: s };
    }
    return this._toolIndex.byName.get(e4);
  }
  async outputValidator(e4, t) {
    let r = await this._probe("tools/list");
    if (r === void 0) {
      this._toolOutputValidatorIndex = void 0;
      return;
    }
    if (this._toolOutputValidatorIndex?.stamp !== r.stamp) {
      let s = this._decodeListTools(r) ?? { tools: [] }, a = /* @__PURE__ */ new Map();
      for (let n of s.tools) {
        let i = t(n);
        if (i !== void 0) a.set(n.name, i);
      }
      this._toolOutputValidatorIndex = { stamp: r.stamp, byName: a };
    }
    return this._toolOutputValidatorIndex.byName.get(e4);
  }
  _decodeListTools(e4) {
    try {
      let t = JSON.parse(e4.value);
      if (!Array.isArray(t?.tools) || !t.tools.every((r) => r !== null && typeof r === "object")) throw TypeError("cached tools/list document has a malformed tools array");
      return t;
    } catch (t) {
      this._reportError(t);
      return;
    }
  }
};
function Wd(e4) {
  let t;
  try {
    t = JSON.stringify(e4);
  } catch (r) {
    throw TypeError(`cache value is not JSON-serializable: ${r instanceof Error ? r.message : String(r)}`);
  }
  if (typeof t !== "string") throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var Yd = -32022, Xd = /* @__PURE__ */ new Set([-32001, -32020, -32021]);
function Zd(e4, t) {
  switch (e4.kind) {
    case "result":
      return Qd(e4.result, t);
    case "rpc-error":
      return _c(e4, t);
    case "http-error":
      return eh(e4, t);
    case "network-error":
      return ec(e4.error, t);
    case "auth-required":
      return { kind: "error", error: e4.error };
    case "closed":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return ec(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return { kind: "error", error: new Si(ii.RequestTimeout, `Version negotiation probe timed out after ${e4.timeoutMs}ms`, { timeout: e4.timeoutMs }) };
    case "id-mismatch":
    case "malformed":
    case "stream-end":
      return { kind: "legacy" };
  }
}
function Qd(e4, t) {
  let r = Je(lo).validateResult("server/discover", e4);
  if (!r.ok) return { kind: "legacy" };
  let s = r.value.supportedVersions, a = t.clientModernVersions.find((n) => s.includes(n));
  if (a !== void 0) return { kind: "modern", version: a, discover: r.value };
  if (t.fallbackAvailable) return { kind: "legacy" };
  return { kind: "error", error: new co({ supported: [...s], requested: t.requestedVersion }) };
}
function _c(e4, t) {
  let { code: r, message: s, data: a } = e4;
  if (r === Yd) {
    let n = yc(a);
    if (n === void 0) return { kind: "legacy" };
    let i = new co({ supported: n, requested: sh(a) ?? t.requestedVersion }, s), l = rs(n), c = t.clientModernVersions.find((d) => l.includes(d));
    if (c !== void 0) return { kind: "corrective", version: c, error: i };
    if (l.length > 0) return { kind: "error", error: i };
    return t.fallbackAvailable ? { kind: "legacy" } : { kind: "error", error: i };
  }
  if (Xd.has(r)) return { kind: "legacy" };
  return { kind: "legacy" };
}
function eh(e4, t) {
  let r = ah(e4.body);
  if (r !== void 0) return _c(r, t);
  return { kind: "legacy" };
}
function ec(e4, t) {
  if (t.environment === "browser" && th(e4)) return { kind: "legacy" };
  return { kind: "error", error: new Si(ii.EraNegotiationFailed, `Version negotiation probe failed: ${rh(e4)}`, { cause: e4 }) };
}
function th(e4) {
  return e4 instanceof TypeError || e4 instanceof Error && e4.name === "TypeError";
}
function rh(e4) {
  return e4 instanceof Error ? e4.message : String(e4);
}
function yc(e4) {
  if (typeof e4 !== "object" || e4 === null) return;
  let t = e4.supported;
  if (!Array.isArray(t) || t.length === 0 || !t.every((r) => typeof r === "string")) return;
  return t;
}
function sh(e4) {
  if (typeof e4 !== "object" || e4 === null) return;
  let t = e4.requested;
  return typeof t === "string" ? t : void 0;
}
function ah(e4) {
  if (e4 === void 0 || e4 === "") return;
  let t;
  try {
    t = JSON.parse(e4);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let r = t.error;
  if (typeof r !== "object" || r === null) return;
  let { code: s, message: a, data: n } = r;
  if (typeof s !== "number") return;
  return { code: s, message: typeof a === "string" ? a : "", data: n };
}
var oh = "legacy";
function nh(e4, t) {
  let r = e4?.mode ?? oh;
  if (r === "legacy") return { kind: "legacy" };
  let s = e4?.probe ?? {};
  if (typeof r === "object") {
    if (!Ge(r.pin)) throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision — pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
    return { kind: "pin", version: r.pin, probe: s };
  }
  let a = t ? rs(t) : [];
  return { kind: "auto", modernVersions: a.length > 0 ? a : [...sn], fallbackAvailable: t ? an(t).length > 0 : true, probe: s };
}
function tc() {
  let e4 = globalThis;
  return e4.window !== void 0 && e4.document !== void 0 ? "browser" : "node";
}
function rc(e4) {
  return "stderr" in e4 && "pid" in e4 ? "stdio" : "http";
}
var ih = class e3 {
  _pending;
  _probeCounter = 0;
  _transportKind;
  _issuedIds = /* @__PURE__ */ new Set();
  _errorSinceSend;
  _savedOnMessage;
  _savedOnError;
  _savedOnClose;
  _closeDelivered = false;
  constructor(t) {
    this._transport = t, this._savedOnMessage = t.onmessage, this._savedOnError = t.onerror, this._savedOnClose = t.onclose;
  }
  static async open(t, r) {
    let s = new e3(t);
    s._transportKind = r, t.onmessage = (a) => {
      let n = s._pending;
      if (n !== void 0 && (COe(a) || _ve(a)) && a.id === n.id) {
        if (s._pending = void 0, COe(a)) n.resolve({ kind: "response", result: a.result });
        else n.resolve({ kind: "response", error: a.error });
        return;
      }
      if (n !== void 0 && s._transportKind === "http" && (COe(a) || _ve(a)) && !s._issuedIds.has(a.id)) {
        s._pending = void 0;
        let i = sc(JSON.stringify(a.id)), l = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(n.id)}, got ${i}) — treating the server as pre-2026-07-28`);
        l.name = "McpProbeIdMismatchError", s._savedOnError?.(l), n.resolve({ kind: "id-mismatch" });
        return;
      }
    }, t.onerror = (a) => {
      if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = a;
      let n = s._pending;
      if (n !== void 0 && s._transportKind === "http" && ac(a)) setTimeout(() => {
        if (s._pending !== n) return;
        s._pending = void 0;
        let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${sc(a instanceof Error ? a.message : String(a))}) — treating the server as pre-2026-07-28`);
        i.name = "McpProbeMalformedReplyError", s._savedOnError?.(i), n.resolve({ kind: "malformed" });
      }, 0);
      s._savedOnError?.(a);
    }, t.onclose = () => {
      let a = s._pending;
      if (a !== void 0) s._pending = void 0, a.resolve({ kind: "closed" });
      s._closeDelivered = true, s._savedOnClose?.();
    };
    try {
      await t.start();
    } catch (a) {
      throw s.detach(), a;
    }
    return s;
  }
  async exchange(t, r) {
    let s = `server-discover-probe-${++this._probeCounter}`;
    return this._issuedIds.add(s), this._errorSinceSend = void 0, new Promise((a) => {
      let n = false, i = (c) => {
        if (n) return;
        if (n = true, clearTimeout(l), this._pending?.id === s) this._pending = void 0;
        a(c);
      }, l = setTimeout(() => i({ kind: "timeout" }), r);
      this._pending = { id: s, resolve: i }, this._transport.send(t(s), { onRequestStreamEnd: () => {
        setTimeout(() => {
          let c = this._errorSinceSend;
          if (c !== void 0 && !ac(c)) {
            i({ kind: "send-error", error: c instanceof Error ? c : Error(String(c)) });
            return;
          }
          i({ kind: "stream-end" });
        }, 0);
      } }).catch((c) => i({ kind: "send-error", error: c }));
    });
  }
  detach() {
    if (this._pending = void 0, this._transport.onmessage = this._savedOnMessage, this._transport.onerror = this._savedOnError, this._closeDelivered && this._savedOnClose !== void 0) {
      let t = this._savedOnClose, r = this._transport, s = false, a = () => {
        if (!s) {
          s = true;
          return;
        }
        t();
      };
      r.onclose = a, wn.set(r, () => {
        if (r.onclose === a) r.onclose = t;
      });
    } else this._transport.onclose = this._savedOnClose;
  }
  release() {
    this.detach();
    let t = this._transport, r = t.start, s = true;
    t.start = async function() {
      if (s) {
        s = false, t.start = r;
        return;
      }
      return r.call(t);
    };
  }
}, wn = /* @__PURE__ */ new WeakMap();
function sc(e4) {
  let t = String(e4);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}… [truncated]`;
}
function ac(e4) {
  if (e4 instanceof SyntaxError) return true;
  return typeof e4 === "object" && e4 !== null && (e4.name === "ZodError" || Array.isArray(e4.issues));
}
function oc(e4) {
  let t = wn.get(e4);
  wn.delete(e4), t?.();
}
function ch(e4, t, r, s) {
  return { jsonrpc: "2.0", id: e4, method: "server/discover", params: { _meta: Je(t).outboundEnvelope({ protocolVersion: t, clientInfo: r, clientCapabilities: s }) } };
}
function lh(e4, t) {
  switch (e4.kind) {
    case "response":
      return e4.error === void 0 ? { kind: "result", result: e4.result } : { kind: "rpc-error", ...e4.error };
    case "send-error": {
      let r = e4.error;
      if (r instanceof IC) {
        let s = r.data?.text;
        return { kind: "http-error", status: r.data.status, body: typeof s === "string" ? s : void 0 };
      }
      if (r instanceof lO || r instanceof Error && r.name === "UnauthorizedError") return { kind: "auth-required", error: r };
      return { kind: "network-error", error: r };
    }
    case "closed":
      return { kind: "closed" };
    case "id-mismatch":
      return { kind: "id-mismatch" };
    case "malformed":
      return { kind: "malformed" };
    case "stream-end":
      return { kind: "stream-end" };
    case "timeout":
      return { kind: "timeout", timeoutMs: t };
  }
}
async function vc(e4, t) {
  let r = e4.probe.timeoutMs ?? t.defaultTimeoutMs, s = Math.max(0, e4.probe.maxRetries ?? 0), a = e4.kind === "pin" ? [e4.version] : e4.modernVersions, n = e4.kind === "auto" && e4.fallbackAvailable, i = await ih.open(t.transport, t.transportKind), l = async () => {
    let d = a[0], m = false, _ = s;
    for (; ; ) {
      let w = await i.exchange((v) => ch(v, d, t.clientInfo, t.capabilities), r);
      if (w.kind === "timeout" && _ > 0) {
        _--;
        continue;
      }
      let P = lh(w, r);
      if (P.kind === "timeout") t.transport._anthropicProbeTimedOut = true;
      let y = Zd(P, { clientModernVersions: a, requestedVersion: d, fallbackAvailable: n, environment: t.environment, transportKind: t.transportKind });
      switch (y.kind) {
        case "modern":
          return { era: "modern", version: y.version, discover: y.discover };
        case "corrective":
          if (m) throw y.error;
          m = true, d = y.version;
          continue;
        case "legacy": {
          if (P.kind === "id-mismatch" || P.kind === "malformed" || P.kind === "stream-end") t.transport._anthropicProbeLegacyEvidence = P.kind;
          let v = P.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
          if (e4.kind === "pin") throw new Si(ii.EraNegotiationFailed, v === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e4.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${v} before the server offered pinned protocol version ${e4.version} (no fallback in pin mode)`);
          if (!e4.fallbackAvailable) throw new Si(ii.EraNegotiationFailed, v === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${v} and this client supports no pre-2026-07-28 protocol version to fall back to`);
          if (v !== void 0 && t.disposableProbe !== true) throw new Si(ii.EraNegotiationFailed, `Version negotiation failed: ${v} (this transport probed in place — the disposable sibling probe requires the SDK's base StdioClientTransport)`);
          return { era: "legacy" };
        }
        case "error":
          throw y.error;
      }
    }
  }, c;
  try {
    c = await l();
  } catch (d) {
    throw i.detach(), d;
  }
  return i.release(), c;
}
function uh(e4) {
  let t = Object.getPrototypeOf(e4);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let r = e4._serverParams;
  return typeof r === "object" && r !== null && typeof r.command === "string" ? r : void 0;
}
async function dh(e4, t, r, s) {
  let n = new t.constructor({ ...r, stderr: "ignore" }), i = t.close, l = false, c, d = new Promise((_, w) => {
    c = () => w(nc());
  });
  t.close = async function() {
    return l = true, c?.(), i.call(t);
  };
  let m;
  try {
    let _ = vc(e4, { ...s, transport: n, transportKind: "stdio", disposableProbe: true });
    _.catch(() => {
    }), m = await Promise.race([_, d]);
  } finally {
    await hh(n), t.close = i;
  }
  if (l) throw nc();
  return m;
}
function nc() {
  return new Si(ii.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function hh(e4) {
  try {
    let t = e4._dispose;
    await (typeof t === "function" ? t.call(e4) : e4.close());
  } catch {
  }
}
function ic(e4) {
  let t = e4._meta?.[He];
  return $i.Implementation(t) ? t : void 0;
}
function bo(e4, t) {
  if (!e4 || t === null || typeof t !== "object") return;
  if (e4.type === "object" && e4.properties && typeof e4.properties === "object") {
    let r = t, s = e4.properties;
    for (let a of Object.keys(s)) {
      let n = s[a];
      if (r[a] === void 0 && Object.prototype.hasOwnProperty.call(n, "default")) r[a] = n.default;
      if (r[a] !== void 0) bo(n, r[a]);
    }
  }
  if (Array.isArray(e4.anyOf)) {
    for (let r of e4.anyOf) if (typeof r !== "boolean") bo(r, t);
  }
  if (Array.isArray(e4.oneOf)) {
    for (let r of e4.oneOf) if (typeof r !== "boolean") bo(r, t);
  }
}
function mh(e4) {
  if (!e4) return { supportsFormMode: false, supportsUrlMode: false };
  let t = e4.form !== void 0, r = e4.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
function ph(e4) {
  if (typeof e4 === "object" && e4 !== null) {
    if (e4.kind === "legacy" && !("supportedVersions" in e4) && !("discover" in e4)) return e4;
    if (e4.kind === "modern" && aYe.safeParse(e4.discover).success) return e4;
  }
  throw new Si(ii.EraNegotiationFailed, "connect({ prior }): unrecognized prior — expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var cc = { "notifications/tools/list_changed": ["tools/list"], "notifications/prompts/list_changed": ["prompts/list"], "notifications/resources/list_changed": ["resources/list", "resources/templates/list"] }, fh = 64, abo = class extends Ei {
  _serverCapabilities;
  _serverVersion;
  _capabilities;
  _instructions;
  _jsonSchemaValidator;
  _cache;
  _defaultCacheTtlMs;
  _listMaxPages;
  _listChangedDebounceTimers = /* @__PURE__ */ new Map();
  _listChangedConfig;
  _enforceStrictCapabilities;
  _versionNegotiation;
  _supportedProtocolVersionsOption;
  _inputRequiredDriverConfig;
  _listenState = /* @__PURE__ */ new Map();
  _nextListenId = 0;
  _autoOpenedSubscription;
  _discoverResult;
  _resetConnectionState() {
    if (this._negotiatedProtocolVersion = void 0, this._serverCapabilities = void 0, this._serverVersion = void 0, this._instructions = void 0, this._discoverResult = void 0, this._autoOpenedSubscription = void 0, this._listenState.size > 0) {
      let e4 = new Si(ii.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
      for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e4 });
    }
    this._listenState.clear();
    for (let e4 of this._listChangedDebounceTimers.values()) clearTimeout(e4);
    this._listChangedDebounceTimers.clear(), this._cache.resetForReconnect();
  }
  async close() {
    try {
      await super.close();
    } finally {
      this._resetConnectionState();
    }
  }
  constructor(e4, t) {
    super(t);
    if (this._clientInfo = e4, this._capabilities = t?.capabilities ? { ...t.capabilities } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new Etn(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? false, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = bi(t?.inputRequired), this._cache = new Bd(t?.responseCacheStore ?? new Jd(), t?.responseCacheStore !== void 0, (r) => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? fh, t?.listChanged) this._listChangedConfig = t.listChanged;
  }
  buildContext(e4, t) {
    return e4;
  }
  _shouldDropInbound(e4) {
    if (this._negotiatedProtocolVersion !== void 0 && Ge(this._negotiatedProtocolVersion) && $te(e4)) return "drop";
  }
  _outboundMetaEnvelope() {
    let e4 = this._negotiatedProtocolVersion;
    if (e4 === void 0) return;
    return this._wireCodec().outboundEnvelope({ protocolVersion: e4, clientInfo: this._clientInfo, clientCapabilities: this._capabilities });
  }
  _resolveNonCompleteResult(e4, t) {
    if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new Si(ii.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance — pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, { resultType: "input_required", method: t.request.method }));
    return Ti({ getRequestHandler: (r) => this._getRequestHandler(r), buildContext: (r) => this.buildContext(r, void 0), sessionId: this.transport?.sessionId }, this._inputRequiredDriverConfig, e4, t);
  }
  _setupListChangedHandlers(e4) {
    if (e4.tools && this._serverCapabilities?.tools?.listChanged) this._setupListChangedHandler("tools", "notifications/tools/list_changed", e4.tools, async () => (await this.listTools(void 0, { cacheMode: "refresh" })).tools);
    if (e4.prompts && this._serverCapabilities?.prompts?.listChanged) this._setupListChangedHandler("prompts", "notifications/prompts/list_changed", e4.prompts, async () => (await this.listPrompts(void 0, { cacheMode: "refresh" })).prompts);
    if (e4.resources && this._serverCapabilities?.resources?.listChanged) this._setupListChangedHandler("resources", "notifications/resources/list_changed", e4.resources, async () => (await this.listResources(void 0, { cacheMode: "refresh" })).resources);
  }
  registerCapabilities(e4) {
    if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = Pi(this._capabilities, e4);
  }
  setVersionNegotiation(e4) {
    if (this.transport) throw Error("Cannot configure version negotiation after connecting to transport");
    this._versionNegotiation = e4;
  }
  _wrapHandler(e4, t) {
    if (e4 === "elicitation/create") return async (r, s) => {
      let a = Je(this._negotiatedProtocolVersion), n = a.validateRequest("elicitation/create", r);
      if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("elicitation/create", r);
      if (!n.ok) throw new Ad(n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
      let { params: i } = n.value;
      i.mode = i.mode ?? "form";
      let { supportsFormMode: l, supportsUrlMode: c } = mh(this._capabilities.elicitation);
      if (i.mode === "form" && !l) throw new Ad(ta.InvalidParams, "Client does not support form-mode elicitation requests");
      if (i.mode === "url" && !c) throw new Ad(ta.InvalidParams, "Client does not support URL-mode elicitation requests");
      let d = await t(r, s), m = a.validateResult("elicitation/create", d);
      if (!m.ok && m.reason === "not-in-era") m = a.validateInputResponse("elicitation/create", d);
      if (!m.ok) throw new Ad(m.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
      let _ = m.value, w = i.mode === "form" ? i.requestedSchema : void 0;
      if (i.mode === "form" && _.action === "accept" && _.content && w && this._capabilities.elicitation?.form?.applyDefaults) try {
        bo(w, _.content);
      } catch {
      }
      return _;
    };
    if (e4 === "sampling/createMessage") return async (r, s) => {
      let a = Je(this._negotiatedProtocolVersion), n = a.validateRequest("sampling/createMessage", r);
      if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("sampling/createMessage", r);
      if (!n.ok) throw new Ad(n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
      let { params: i } = n.value, l = await t(r, s), c = Boolean(i.tools || i.toolChoice), d = a.samplingResultVariant(c, l);
      if (!d.ok && d.reason === "not-in-era") d = a.validateInputResponse("sampling/createMessage", l);
      if (!d.ok) throw new Ad(d.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
      return d.value;
    };
    return t;
  }
  assertCapability(e4, t) {
    if (!this._serverCapabilities?.[e4]) throw new Si(ii.CapabilityNotSupported, `Server does not support ${e4} (required for ${t})`);
  }
  async connect(e4, t) {
    if (t?.prior != null) return this._connectFromPrior(e4, ph(t.prior), t);
    let r = nh(this._versionNegotiation, this._supportedProtocolVersionsOption);
    if (r.kind !== "legacy") return this._connectNegotiated(e4, r, t);
    return this._connectPlainLegacy(e4, t);
  }
  async _connectPlainLegacy(e4, t) {
    if (await super.connect(e4), e4.sessionId !== void 0) {
      let r = this._negotiatedProtocolVersion;
      if (r !== void 0) e4.setProtocolVersion?.(r);
      return;
    }
    this._resetConnectionState(), await this._legacyHandshake(e4, t);
  }
  async _legacyHandshake(e4, t, r = true) {
    let s = an(this._supportedProtocolVersions);
    try {
      let a = s[0];
      if (a === void 0) throw new Si(ii.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
      let n = await this.request({ method: "initialize", params: { protocolVersion: a, capabilities: this._capabilities, clientInfo: this._clientInfo } }, t);
      if (n === void 0) throw Error(`Server sent invalid initialize result: ${n}`);
      if (!s.includes(n.protocolVersion)) throw Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
      if (this._serverCapabilities = n.capabilities, this._serverVersion = n.serverInfo, this._cache.setServerIdentity(this._deriveServerIdentity(e4)), e4.setProtocolVersion) e4.setProtocolVersion(n.protocolVersion);
      if (this._instructions = n.instructions, await this.notification({ method: "notifications/initialized" }), this._negotiatedProtocolVersion = n.protocolVersion, this._listChangedConfig) this._setupListChangedHandlers(this._listChangedConfig);
    } catch (a) {
      if (r) this.close();
      throw a;
    }
  }
  async _discoverAfterRejectedInitialize(e4, t, r, s) {
    let a = r.kind === "auto" && e4._anthropicProbeTimedOut === true && t instanceof Ad, n = a && t.code === ta.UnsupportedProtocolVersion ? yc(t.data) : void 0, i = !a ? void 0 : n === void 0 ? r.modernVersions[0] : r.modernVersions.find((l) => n.includes(l));
    if (i === void 0) throw this.close(), t;
    try {
      this._negotiatedProtocolVersion = i;
      let l = await this.discover({ ...s, timeout: Math.min(3e3, r.probe.timeoutMs ?? s?.timeout ?? ss) });
      if (!l.supportedVersions.includes(i)) throw Error(`the second server/discover does not offer ${i}`);
      return { era: "modern", version: i, discover: l };
    } catch (l) {
      throw e4._anthropicRediscoverError = l, this._negotiatedProtocolVersion = void 0, this.close(), t;
    }
  }
  async _connectNegotiated(e4, t, r) {
    if (e4.sessionId !== void 0) {
      await super.connect(e4);
      let a = this._negotiatedProtocolVersion;
      if (a !== void 0 && e4.setProtocolVersion) e4.setProtocolVersion(a);
      return;
    }
    this._resetConnectionState();
    let s;
    try {
      let a = rc(e4), n = { clientInfo: this._clientInfo, capabilities: this._capabilities, environment: tc(), defaultTimeoutMs: r?.timeout ?? ss }, i = a === "stdio" ? uh(e4) : void 0;
      s = i === void 0 ? await vc(t, { ...n, transport: e4, transportKind: a }) : await dh(t, e4, i, n);
    } catch (a) {
      throw await e4.close().catch(() => {
      }), oc(e4), a;
    }
    if (oc(e4), await super.connect(e4), s.era === "legacy") try {
      await this._legacyHandshake(e4, r, false);
      return;
    } catch (a) {
      s = await this._discoverAfterRejectedInitialize(e4, a, t, r);
    }
    if (this._serverCapabilities = s.discover.capabilities, this._serverVersion = ic(s.discover), this._cache.setServerIdentity(this._deriveServerIdentity(e4)), this._instructions = s.discover.instructions, this._discoverResult = s.discover, this._negotiatedProtocolVersion = s.version, e4.setProtocolVersion) e4.setProtocolVersion(s.version);
    if (this._listChangedConfig) {
      let a = this._listChangedConfig, n = this._serverCapabilities, i = { ...a.tools && n?.tools?.listChanged && { tools: a.tools }, ...a.prompts && n?.prompts?.listChanged && { prompts: a.prompts }, ...a.resources && n?.resources?.listChanged && { resources: a.resources } }, l = true;
      try {
        this._setupListChangedHandlers(i);
      } catch (d) {
        l = false, this.onerror?.(d instanceof Error ? d : Error(String(d)));
      }
      let c = l ? { ...i.tools && { toolsListChanged: true }, ...i.prompts && { promptsListChanged: true }, ...i.resources && { resourcesListChanged: true } } : {};
      if (Object.keys(c).length > 0) {
        let d = new AbortController(), m = () => d.abort(r?.signal?.reason);
        if (r?.signal?.aborted) m();
        r?.signal?.addEventListener("abort", m);
        try {
          this._autoOpenedSubscription = await this.listen(c, { timeout: r?.timeout, signal: d.signal });
        } catch (_) {
          if (r?.signal?.aborted) throw await this.close().catch(() => {
          }), _;
          this.onerror?.(_ instanceof Error ? _ : Error(String(_)));
        } finally {
          r?.signal?.removeEventListener("abort", m);
        }
      }
    }
  }
  async _connectFromPrior(e4, t, r) {
    if (t.kind === "legacy") return this._connectPlainLegacy(e4, r);
    let s = t.discover;
    this._resetConnectionState();
    let a = this._supportedProtocolVersionsOption, n = (a && rs(a).length > 0 ? rs(a) : sn).find((i) => s.supportedVersions.includes(i));
    if (n === void 0) throw new Si(ii.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
    if (await super.connect(e4), this._discoverResult = s, this._serverCapabilities = s.capabilities, this._serverVersion = ic(s), this._cache.setServerIdentity(this._deriveServerIdentity(e4)), this._instructions = s.instructions, this._negotiatedProtocolVersion = n, e4.setProtocolVersion?.(n), this._listChangedConfig) try {
      this._setupListChangedHandlers(this._listChangedConfig);
    } catch (i) {
      this.onerror?.(i instanceof Error ? i : Error(String(i)));
    }
  }
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  getServerVersion() {
    return this._serverVersion;
  }
  _deriveServerIdentity(e4) {
    let t = this._serverVersion;
    if (t !== void 0) return `${t.name}@${t.version}`;
    return e4.sessionId ?? `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
  getNegotiatedProtocolVersion() {
    return this._negotiatedProtocolVersion;
  }
  getProtocolEra() {
    let e4 = this._negotiatedProtocolVersion;
    if (e4 === void 0) return;
    return Ge(e4) ? "modern" : "legacy";
  }
  getInstructions() {
    return this._instructions;
  }
  getDiscoverResult() {
    return this._discoverResult;
  }
  assertCapabilityForMethod(e4) {
    switch (e4) {
      case "logging/setLevel":
        if (!this._serverCapabilities?.logging) throw new Si(ii.CapabilityNotSupported, `Server does not support logging (required for ${e4})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._serverCapabilities?.prompts) throw new Si(ii.CapabilityNotSupported, `Server does not support prompts (required for ${e4})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!this._serverCapabilities?.resources) throw new Si(ii.CapabilityNotSupported, `Server does not support resources (required for ${e4})`);
        if (e4 === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new Si(ii.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e4})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._serverCapabilities?.tools) throw new Si(ii.CapabilityNotSupported, `Server does not support tools (required for ${e4})`);
        break;
      case "completion/complete":
        if (!this._serverCapabilities?.completions) throw new Si(ii.CapabilityNotSupported, `Server does not support completions (required for ${e4})`);
        break;
      case "initialize":
        break;
      case "server/discover":
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e4) {
    switch (e4) {
      case "notifications/roots/list_changed":
        if (!this._capabilities.roots?.listChanged) throw new Si(ii.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e4})`);
        break;
      case "notifications/initialized":
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e4) {
    switch (e4) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) throw new Si(ii.CapabilityNotSupported, `Client does not support sampling capability (required for ${e4})`);
        break;
      case "elicitation/create":
        if (!this._capabilities.elicitation) throw new Si(ii.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e4})`);
        break;
      case "roots/list":
        if (!this._capabilities.roots) throw new Si(ii.CapabilityNotSupported, `Client does not support roots capability (required for ${e4})`);
        break;
      case "ping":
        break;
    }
  }
  async ping(e4) {
    return this.request({ method: "ping" }, e4);
  }
  async discover(e4) {
    let t = await this._requestWithSchema({ method: "server/discover" }, aYe, e4);
    return this._discoverResult = t, t;
  }
  async complete(e4, t) {
    return this.request({ method: "completion/complete", params: e4 }, t);
  }
  async setLoggingLevel(e4, t) {
    return this.request({ method: "logging/setLevel", params: { level: e4 } }, t);
  }
  async getPrompt(e4, t) {
    return this.request({ method: "prompts/get", params: e4 }, t);
  }
  async listPrompts(e4, t) {
    if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) return console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list"), { prompts: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "prompts/list", params: e4 }, t);
    let r = await this._serveFromCache("prompts/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("prompts/list", e4, t, (s, a) => s.prompts.push(...a.prompts));
  }
  async listResources(e4, t) {
    if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list"), { resources: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "resources/list", params: e4 }, t);
    let r = await this._serveFromCache("resources/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("resources/list", e4, t, (s, a) => s.resources.push(...a.resources));
  }
  async listResourceTemplates(e4, t) {
    if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"), { resourceTemplates: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "resources/templates/list", params: e4 }, t);
    let r = await this._serveFromCache("resources/templates/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("resources/templates/list", e4, t, (s, a) => s.resourceTemplates.push(...a.resourceTemplates));
  }
  async _listAllPages(e4, t, r, s, a) {
    let n = r?.cacheMode === "bypass", i = this._cache.captureGeneration(e4), l = await this.request({ method: e4, ...t && { params: { ...t } } }, r), c = l.nextCursor, d = /* @__PURE__ */ new Set(), m = 1;
    while (c !== void 0 && !d.has(c)) {
      if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new Si(ii.ListPaginationExceeded, `${e4}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, { method: e4, listMaxPages: this._listMaxPages });
      d.add(c);
      let _ = await this.request({ method: e4, params: { ...t, cursor: c } }, r);
      s(l, _), c = _.nextCursor, m++;
    }
    if (delete l.nextCursor, a?.(l), n) return l;
    return await this._cache.write(e4, l, i, this._freshness(l)), l;
  }
  _freshness(e4, t) {
    let r = e4, s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs, a = r.cacheScope === "public" ? "public" : "private";
    return { expiresAt: this._cache.now() + Math.min(Math.max(0, s), Gd), scope: a, params: t };
  }
  async _serveFromCache(e4, t, r) {
    if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
    let s = await this._cache.read(e4, t).catch((a) => void this._reportStoreError(a));
    if (s !== void 0) {
      if (r?.signal?.aborted) {
        let a = r.signal.reason;
        throw a instanceof Si ? a : new Si(ii.RequestTimeout, String(a));
      }
      return s.value;
    }
  }
  _reportStoreError(e4) {
    this.onerror?.(e4 instanceof Error ? e4 : Error(String(e4)));
  }
  _compileOutputValidator(e4) {
    if (!e4.outputSchema) return;
    try {
      return { ok: true, validator: this._jsonSchemaValidator.getValidator(e4.outputSchema) };
    } catch (t) {
      return { ok: false, compileError: t };
    }
  }
  async _resolveXMcpHeaderScan(e4, t) {
    let r = t ?? await this._cache.toolDefinition(e4);
    return r === void 0 ? void 0 : dn(r.inputSchema);
  }
  async readResource(e4, t) {
    let r = await this._serveFromCache("resources/read", e4.uri, t);
    if (r !== void 0) return r;
    let s = this._cache.captureGeneration("resources/read", e4.uri), a = await this.request({ method: "resources/read", params: e4 }, t);
    if (t?.cacheMode !== "bypass") {
      let n = this._freshness(a, e4.uri);
      if (n.expiresAt > this._cache.now()) await this._cache.write("resources/read", a, s, n);
      else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", e4.uri);
    }
    return a;
  }
  async subscribeResource(e4, t) {
    return this.request({ method: "resources/subscribe", params: e4 }, t);
  }
  async unsubscribeResource(e4, t) {
    return this.request({ method: "resources/unsubscribe", params: e4 }, t);
  }
  async listen(e4, t) {
    if (this.transport === void 0) throw new Si(ii.NotConnected, "Not connected");
    let r = this._negotiatedProtocolVersion;
    if (r === void 0 || !Ge(r)) throw new Si(ii.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, { method: "subscriptions/listen", protocolVersion: r });
    if (t?.signal?.aborted) {
      let g = t.signal.reason;
      throw g instanceof Si ? g : new Si(ii.RequestTimeout, String(g));
    }
    let s = new AbortController(), a = `listen:${this._nextListenId++}`, n = "opening", i, l, c, d, m = new Promise((g, f) => {
      c = g, d = f;
    });
    m.catch(() => {
    });
    let _, w = new Promise((g) => {
      _ = g;
    }), P = (g) => {
      if (n === "closed") return;
      let f = n === "opening";
      if (i !== void 0) clearTimeout(i), i = void 0;
      if ("ack" in g) {
        n = "open", c(g.ack);
        return;
      }
      if (n = "closed", l !== void 0) t?.signal?.removeEventListener("abort", l);
      if (this._listenState.delete(a), s.abort(), _(g.cause), f) d(g.error ?? new Si(ii.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
    }, y = async () => {
      s.abort(), await this.notification({ method: "notifications/cancelled", params: { requestId: a } }).catch(() => {
      });
    }, v = async () => {
      if (n === "closed") return;
      P({ cause: "local" }), await y();
    };
    this._listenState.set(a, { settle: P });
    let p = t?.timeout ?? ss;
    if (i = setTimeout(() => {
      P({ cause: "remote", error: new Si(ii.RequestTimeout, "subscriptions/listen ack timed out", { timeout: p }) }), y().catch(() => {
      });
    }, p), t?.signal) {
      let g = t.signal;
      l = () => {
        if (n === "closed") return;
        let f = g.reason;
        P({ cause: "local", error: f instanceof Error ? f : Error(String(f ?? "Aborted")) }), y().catch(() => {
        });
      }, g.addEventListener("abort", l, { once: true });
    }
    let h = { jsonrpc: "2.0", id: a, method: "subscriptions/listen", params: { _meta: { ...this._outboundMetaEnvelope() }, notifications: e4 } };
    try {
      await this.transport.send(h, { requestSignal: s.signal, onRequestStreamEnd: () => P({ cause: "remote", error: Error("subscriptions/listen: stream ended") }) });
    } catch (g) {
      P({ cause: "remote", error: g instanceof Error ? g : Error(String(g)) });
    }
    return { honoredFilter: await m, close: v, closed: w };
  }
  get autoOpenedSubscription() {
    return this._autoOpenedSubscription;
  }
  _onnotification(e4, t) {
    let r = Object.hasOwn(cc, e4.method) ? cc[e4.method] : void 0;
    if (e4.method === "notifications/resources/updated") {
      let s = e4.params?.uri;
      if (typeof s === "string") this._cache.evictKey("resources/read", s);
    } else if (r !== void 0) for (let s of r) this._cache.evict(s);
    if (e4.method === "notifications/subscriptions/acknowledged") {
      let s = e4.params?._meta?.[vr], a = typeof s === "string" ? this._listenState.get(s) : void 0;
      if (a !== void 0) {
        let n = this._wireCodec().validateNotification("notifications/subscriptions/acknowledged", e4);
        a.settle({ ack: n.ok ? n.value.params.notifications : {} });
        return;
      }
    }
    if (e4.method === "notifications/cancelled") {
      let s = e4.params?.requestId, a = typeof s === "string" ? this._listenState.get(s) : void 0;
      if (a !== void 0) {
        a.settle({ cause: "remote", error: Error("subscriptions/listen: server cancelled the subscription") });
        return;
      }
    }
    super._onnotification(e4, t);
  }
  _onresponse(e4) {
    let t = e4.id, r = typeof t === "string" ? this._listenState.get(t) : void 0;
    if (r !== void 0) {
      if (_ve(e4)) r.settle({ cause: "remote", error: Ad.fromError(e4.error.code, e4.error.message, e4.error.data) });
      else r.settle({ cause: "graceful", error: new Si(ii.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging") });
      return;
    }
    super._onresponse(e4);
  }
  _onclose() {
    if (this._listenState.size > 0) {
      let e4 = new Si(ii.ConnectionClosed, "Connection closed");
      for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e4 });
      this._listenState.clear();
    }
    super._onclose();
  }
  async callTool(e4, t) {
    let r = this.getProtocolEra() === "modern" && tc() !== "browser", s = async () => {
      if (!r) return t;
      let c;
      try {
        c = await this._resolveXMcpHeaderScan(e4.name, t?.toolDefinition);
      } catch (m) {
        this._reportStoreError(m);
      }
      if (!c?.valid || c.declarations.length === 0) return t;
      let d = yi(c.declarations, e4.arguments);
      return Object.keys(d).length === 0 ? t : { ...t, headers: { ...t?.headers, ...d } };
    }, a = t?.toolDefinition === void 0 ? await this._cache.outputValidator(e4.name, (c) => this._compileOutputValidator(c)).catch((c) => void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition), n = () => {
      if (a === void 0 || a.ok) return;
      let c = a.compileError, d = (c instanceof Error ? c.message : String(c)).slice(0, 200);
      throw new Ad(ta.InvalidParams, `Tool '${e4.name}' has an invalid outputSchema: ${d}`);
    };
    n();
    let i;
    try {
      i = await this.request({ method: "tools/call", params: e4 }, await s());
    } catch (c) {
      let d = c instanceof Ad && c.code === Jt;
      if (!r || !d || t?.toolDefinition !== void 0) throw c;
      let m = { signal: t?.signal, timeout: t?.timeout, cacheMode: "refresh" };
      await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch((_) => this._reportStoreError(_)), a = await this._cache.outputValidator(e4.name, (_) => this._compileOutputValidator(_)).catch((_) => void this._reportStoreError(_)), n(), i = await this.request({ method: "tools/call", params: e4 }, await s());
    }
    if (t?.allowTask === true && i.resultType === "task") return i;
    let l = a !== void 0 && a.ok ? a.validator : void 0;
    if (l) {
      if (i.structuredContent === void 0 && !i.isError) throw new Ad(ta.InvalidRequest, `Tool ${e4.name} has an output schema but did not return structured content`);
      if (i.structuredContent !== void 0 && !i.isError) try {
        let c = l(i.structuredContent);
        if (!c.valid) throw new Ad(ta.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
      } catch (c) {
        if (c instanceof Ad) throw c;
        throw new Ad(ta.InvalidParams, `Failed to validate structured content: ${c instanceof Error ? c.message : String(c)}`);
      }
    }
    return i;
  }
  async listTools(e4, t) {
    if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) return console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list"), { tools: [] };
    if (e4?.cursor !== void 0) {
      let s = await this.request({ method: "tools/list", params: e4 }, t);
      return this._excludeInvalidXMcpHeaderTools(s), s;
    }
    let r = await this._serveFromCache("tools/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("tools/list", e4, t, (s, a) => s.tools.push(...a.tools), (s) => this._excludeInvalidXMcpHeaderTools(s));
  }
  _excludeInvalidXMcpHeaderTools(e4) {
    if (this.getProtocolEra() !== "modern" || !this.transport || rc(this.transport) === "stdio") return;
    let t = e4.tools.filter((r) => {
      let s = dn(r.inputSchema);
      if (!s.valid) return console.warn(`[mcp-sdk] excluding tool '${r.name}' from tools/list: invalid x-mcp-header declaration — ${s.reason}`), false;
      return true;
    });
    if (t.length !== e4.tools.length) e4.tools = t;
  }
  _setupListChangedHandler(e4, t, r, s) {
    let a = ho(Lr, r);
    if (!a.success) throw Error(`Invalid ${e4} listChanged options: ${a.error.message}`);
    if (typeof r.onChanged !== "function") throw TypeError(`Invalid ${e4} listChanged options: onChanged must be a function`);
    let { autoRefresh: n, debounceMs: i } = a.data, { onChanged: l } = r, c = async () => {
      if (!n) {
        l(null, null);
        return;
      }
      try {
        l(null, await s());
      } catch (m) {
        l(m instanceof Error ? m : Error(String(m)), null);
      }
    }, d = () => {
      if (i) {
        let m = this._listChangedDebounceTimers.get(e4);
        if (m) clearTimeout(m);
        let _ = setTimeout(c, i);
        this._listChangedDebounceTimers.set(e4, _);
      } else c();
    };
    this.setNotificationHandler(t, d);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
};
var hTr = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SseError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ie(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ie(this, e4);
  }
  constructor(e4, t, r) {
    super(`SSE error: ${t}`);
    this.code = e4, this.event = r, bt(this, new.target);
  }
}, Y1n = class {
  _eventSource;
  _endpoint;
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _eventSourceInit;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _protocolVersion;
  onclose;
  onerror;
  onmessage;
  constructor(e4, t) {
    if (this._url = e4, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t?.eventSourceInit, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, hc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = mc(t.authProvider, { skipIssuerMetadataValidation: t.skipIssuerMetadataValidation });
    else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = uHt(t?.fetch, t?.requestInit);
  }
  _last401Response;
  async _commonHeaders() {
    let e4 = {}, t = await this._authProvider?.token();
    if (t) e4.Authorization = `Bearer ${t}`;
    if (this._protocolVersion) e4["mcp-protocol-version"] = this._protocolVersion;
    let r = ts(this._requestInit?.headers);
    return new Headers({ ...e4, ...r });
  }
  _startOrAuth() {
    let e4 = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
    return new Promise((t, r) => {
      this._eventSource = new cYe(this._url.href, { ...this._eventSourceInit, fetch: async (s, a) => {
        let n = await this._commonHeaders();
        n.set("Accept", "text/event-stream");
        let i = await e4(s, { ...a, headers: n });
        if (i.status === 401) {
          if (this._last401Response = i, i.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: l, scope: c } = mBe(i);
            this._resourceMetadataUrl = l, this._scope = c;
          }
        }
        return i;
      } }), this._abortController = new AbortController(), this._eventSource.onerror = (s) => {
        if (s.code === 401 && this._authProvider) {
          if (this._authProvider.onUnauthorized && this._last401Response) {
            let i = this._last401Response;
            this._last401Response = void 0, this._eventSource?.close(), this._authProvider.onUnauthorized({ response: i, serverUrl: this._url, fetchFn: this._fetchWithInit }).then(() => this._startOrAuth().then(t, r), (l) => {
              this.onerror?.(l), r(l);
            });
            return;
          }
          let n = new lO();
          r(n), this.onerror?.(n);
          return;
        }
        let a = new hTr(s.code, s.message, s);
        r(a), this.onerror?.(a);
      }, this._eventSource.onopen = () => {
      }, this._eventSource.addEventListener("endpoint", (s) => {
        let a = s;
        try {
          if (this._endpoint = new URL(a.data, this._url), this._endpoint.origin !== this._url.origin) throw Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
        } catch (n) {
          r(n), this.onerror?.(n), this.close();
          return;
        }
        t();
      }), this._eventSource.onmessage = (s) => {
        let a = s, n;
        try {
          n = Yae.parse(JSON.parse(a.data));
        } catch (i) {
          this.onerror?.(i);
          return;
        }
        this.onmessage?.(n);
      };
    });
  }
  async start() {
    if (this._eventSource) throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return await this._startOrAuth();
  }
  async finishAuth(e4, t) {
    if (!this._oauthProvider) throw new lO("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await pc(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await pHt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new lO("Failed to authorize");
  }
  async close() {
    this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
  }
  async send(e4) {
    return this._send(e4, false);
  }
  async _send(e4, t) {
    if (!this._endpoint) throw new Si(ii.NotConnected, "Not connected");
    try {
      let r = await this._commonHeaders();
      r.set("content-type", "application/json");
      let s = { ...this._requestInit, method: "POST", headers: r, body: JSON.stringify(e4), signal: this._abortController?.signal }, a = await (this._fetch ?? fetch)(this._endpoint, s);
      if (!a.ok) {
        if (a.status === 401 && this._authProvider) {
          if (a.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: i, scope: l } = mBe(a);
            this._resourceMetadataUrl = i, this._scope = l;
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: a, serverUrl: this._url, fetchFn: this._fetchWithInit }), await a.text?.().catch(() => {
          }), this._send(e4, true);
          if (await a.text?.().catch(() => {
          }), t) throw new IC(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: a.statusText });
          throw new lO();
        }
        let n = await a.text?.().catch(() => null);
        throw Error(`Error POSTing to endpoint (HTTP ${a.status}): ${n}`);
      }
      await a.text?.().catch(() => {
      });
    } catch (r) {
      throw this.onerror?.(r), r;
    }
  }
  setProtocolVersion(e4) {
    this._protocolVersion = e4;
  }
}, Sh = 1, gh = { initialReconnectionDelay: 1e3, maxReconnectionDelay: 3e4, reconnectionDelayGrowFactor: 1.5, maxRetries: 2 }, _h = /* @__PURE__ */ new Set(["authorization", "content-type", "mcp-protocol-version", "mcp-method", "mcp-name", "mcp-session-id"]);
function lc(e4, t) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([e4, t]);
  let r = new AbortController();
  if (e4.aborted) return r.abort(e4.reason), r.signal;
  if (t.aborted) return r.abort(t.reason), r.signal;
  let s = () => {
    e4.removeEventListener("abort", a), t.removeEventListener("abort", n);
  };
  function a() {
    s(), r.abort(e4.reason);
  }
  function n() {
    s(), r.abort(t.reason);
  }
  return e4.addEventListener("abort", a, { once: true }), t.addEventListener("abort", n, { once: true }), r.signal;
}
var vtn = class {
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _sessionId;
  _reconnectionOptions;
  _protocolVersion;
  _onInsufficientScope;
  _maxStepUpRetries;
  _serverRetryMs;
  _reconnectionScheduler;
  _cancelReconnection;
  onclose;
  onerror;
  onmessage;
  hasPerRequestStream = true;
  constructor(e4, t) {
    if (this._url = e4, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, hc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = mc(t.authProvider, { skipIssuerMetadataValidation: t.skipIssuerMetadataValidation });
    else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = uHt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? gh, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? Sh);
  }
  async _stepUpAuthorize(e4, t) {
    if (this._onInsufficientScope === "throw") throw new Yi({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (!this._oauthProvider) throw new Yi({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (t >= this._maxStepUpRetries) throw new IC(ii.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, { status: 403, statusText: e4.statusText ?? "Forbidden", text: e4.text });
    if (e4.resourceMetadataUrl) this._resourceMetadataUrl = e4.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(), s = _n(this._scope, r?.scope, e4.scope);
    this._scope = s;
    let a = Ed(s, r?.scope);
    return pHt(this._oauthProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: s, forceReauthorization: a, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation });
  }
  async _commonHeaders() {
    let e4 = {}, t = await this._authProvider?.token();
    if (t) e4.Authorization = `Bearer ${t}`;
    if (this._sessionId) e4["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e4["mcp-protocol-version"] = this._protocolVersion;
    let r = ts(this._requestInit?.headers);
    return new Headers({ ...e4, ...r });
  }
  _applyBodyDerivedHeaders(e4, t) {
    if (Array.isArray(t) || !$te(t)) return;
    let r = t.params?._meta?.[xe];
    if (typeof r !== "string") return;
    e4.set("mcp-protocol-version", r), e4.set("mcp-method", t.method);
    let s = t.params, a = t.method === "resources/read" ? typeof s?.uri === "string" ? s.uri : void 0 : typeof s?.name === "string" ? s.name : void 0;
    if (a !== void 0) e4.set("mcp-name", uo(a));
    let n = t.method.startsWith("tasks/") && typeof s?.taskId === "string" ? s.taskId : void 0;
    if (n !== void 0) e4.set("mcp-name", uo(n));
  }
  _isModernEnvelopedRequest(e4) {
    if (Array.isArray(e4) || !$te(e4)) return false;
    let t = e4.params?._meta?.[xe];
    return typeof t === "string" && Ge(t);
  }
  async _startOrAuthSse(e4, t = false, r = 0) {
    let { resumptionToken: s, requestSignal: a } = e4, n = () => this._abortController?.signal.aborted === true || a?.aborted === true;
    try {
      let i = await this._commonHeaders(), l = [...i.get("accept")?.split(",").map((_) => _.trim().toLowerCase()) ?? [], "text/event-stream"];
      if (i.set("accept", [...new Set(l)].join(", ")), s) i.set("last-event-id", s);
      let c = this._abortController?.signal, d = a !== void 0 && c !== void 0 ? lc(c, a) : a ?? c, m = await (this._fetch ?? fetch)(this._url, { ...this._requestInit, method: "GET", headers: i, signal: d });
      if (!m.ok) {
        if (m.status === 401 && this._authProvider) {
          if (m.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: _, scope: w } = mBe(m);
            this._resourceMetadataUrl = _, this._scope = _n(this._scope, w);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: m, serverUrl: this._url, fetchFn: this._fetchWithInit }), await m.text?.().catch(() => {
          }), this._startOrAuthSse(e4, true, r);
          if (await m.text?.().catch(() => {
          }), t) throw new IC(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: m.statusText });
          throw new lO();
        }
        if (m.status === 403) {
          let { resourceMetadataUrl: _, scope: w, error: P, errorDescription: y } = mBe(m);
          if (P === "insufficient_scope") {
            let v = await m.text?.().catch(() => null);
            if (await this._stepUpAuthorize({ scope: w, resourceMetadataUrl: _, errorDescription: y, statusText: m.statusText, text: v }, r) !== "AUTHORIZED") throw new lO();
            return this._startOrAuthSse(e4, t, r + 1);
          }
        }
        if (await m.text?.().catch(() => {
        }), m.status === 405) {
          e4.onRequestStreamEnd?.();
          return;
        }
        throw new IC(ii.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${m.statusText}`, { status: m.status, statusText: m.statusText });
      }
      this._handleSseStream(m.body, e4, true);
    } catch (i) {
      if (!n()) this.onerror?.(i);
      throw i;
    }
  }
  _getNextReconnectionDelay(e4) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let t = this._reconnectionOptions.initialReconnectionDelay, r = this._reconnectionOptions.reconnectionDelayGrowFactor, s = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(t * Math.pow(r, e4), s);
  }
  _scheduleReconnection(e4, t = 0) {
    let r = this._reconnectionOptions.maxRetries;
    if (t >= r) {
      this.onerror?.(Error(`Maximum reconnection attempts (${r}) exceeded.`)), e4.onRequestStreamEnd?.();
      return;
    }
    let s = this._getNextReconnectionDelay(t), a = () => {
      if (this._cancelReconnection = void 0, this._abortController?.signal.aborted || e4.requestSignal?.aborted) return;
      this._startOrAuthSse(e4).catch((n) => {
        if (this._abortController?.signal.aborted || e4.requestSignal?.aborted) return;
        this.onerror?.(Error(`Failed to reconnect SSE stream: ${n instanceof Error ? n.message : String(n)}`));
        try {
          this._scheduleReconnection(e4, t + 1);
        } catch (i) {
          this.onerror?.(i instanceof Error ? i : Error(String(i)));
        }
      });
    };
    if (this._reconnectionScheduler) {
      let n = this._reconnectionScheduler(a, s, t);
      this._cancelReconnection = typeof n === "function" ? n : void 0;
    } else {
      let n = setTimeout(a, s);
      this._cancelReconnection = () => clearTimeout(n);
    }
  }
  _handleSseStream(e4, t, r) {
    if (!e4) {
      t.onRequestStreamEnd?.();
      return;
    }
    let { onresumptiontoken: s, replayMessageId: a, requestSignal: n, onRequestStreamEnd: i } = t, l = () => this._abortController?.signal.aborted === true || n?.aborted === true, c, d = false, m = false;
    (async () => {
      try {
        let w = e4.pipeThrough(new TextDecoderStream()).pipeThrough(new Htn({ onRetry: (P) => {
          this._serverRetryMs = P;
        } })).getReader();
        while (true) {
          let { value: P, done: y } = await w.read();
          if (y) break;
          if (P.id) c = P.id, d = true, s?.(P.id);
          if (!P.data) continue;
          if (!P.event || P.event === "message") try {
            let v = Yae.parse(JSON.parse(P.data));
            if (COe(v) || _ve(v)) {
              if (m = true, a !== void 0) v.id = a;
            }
            this.onmessage?.(v);
          } catch (v) {
            this.onerror?.(v);
          }
        }
        if ((r || d) && !m && this._abortController && !l()) this._scheduleReconnection({ resumptionToken: c, onresumptiontoken: s, replayMessageId: a, requestSignal: n, onRequestStreamEnd: i }, 0);
        else if (!l()) i?.();
      } catch (w) {
        if (l()) return;
        if (this.onerror?.(Error(`SSE stream disconnected: ${w}`)), (r || d) && !m && this._abortController && !l()) try {
          this._scheduleReconnection({ resumptionToken: c, onresumptiontoken: s, replayMessageId: a, requestSignal: n, onRequestStreamEnd: i }, 0);
        } catch (P) {
          this.onerror?.(Error(`Failed to reconnect: ${P instanceof Error ? P.message : String(P)}`)), i?.();
        }
        else i?.();
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  async finishAuth(e4, t) {
    if (!this._oauthProvider) throw new lO("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await pc(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await pHt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new lO("Failed to authorize");
  }
  async close() {
    try {
      this._cancelReconnection?.();
    } finally {
      this._cancelReconnection = void 0, this._abortController?.abort(), this.onclose?.();
    }
  }
  async send(e4, t) {
    return this._send(e4, t, false);
  }
  async _send(e4, t, r, s = 0) {
    try {
      let { resumptionToken: a, onresumptiontoken: n } = t || {};
      if (a) {
        this._startOrAuthSse({ resumptionToken: a, replayMessageId: $te(e4) ? e4.id : void 0, requestSignal: t?.requestSignal }).catch((p) => this.onerror?.(p));
        return;
      }
      let i = await this._commonHeaders();
      this._applyBodyDerivedHeaders(i, e4);
      let l = Array.isArray(e4) ? e4.some((p) => q1n(p)) : q1n(e4);
      if (l) i.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [p, h] of Object.entries(t.headers)) {
        if (_h.has(p.toLowerCase())) continue;
        i.set(p, h);
      }
      i.set("content-type", "application/json");
      let c = [...i.get("accept")?.split(",").map((p) => p.trim().toLowerCase()) ?? [], "application/json", "text/event-stream"];
      i.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal, m = t?.requestSignal !== void 0 && d !== void 0 ? lc(d, t.requestSignal) : t?.requestSignal ?? d, _ = { ...this._requestInit, method: "POST", headers: i, body: JSON.stringify(e4), signal: m }, w = await (this._fetch ?? fetch)(this._url, _);
      if (l && w.ok) this._sessionId = w.headers.get("mcp-session-id") || void 0;
      if (!w.ok) {
        if (w.status === 401 && this._authProvider) {
          if (w.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: h, scope: g } = mBe(w);
            this._resourceMetadataUrl = h, this._scope = _n(this._scope, g);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({ response: w, serverUrl: this._url, fetchFn: this._fetchWithInit }), await w.text?.().catch(() => {
          }), this._send(e4, t, true, s);
          if (await w.text?.().catch(() => {
          }), r) throw new IC(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: w.statusText });
          throw new lO();
        }
        let p = await w.text?.().catch(() => null);
        if (w.status === 403) {
          let { resourceMetadataUrl: h, scope: g, error: f, errorDescription: R } = mBe(w);
          if (f === "insufficient_scope") {
            if (await this._stepUpAuthorize({ scope: g, resourceMetadataUrl: h, errorDescription: R, statusText: w.statusText, text: p }, s) !== "AUTHORIZED") throw new lO();
            return this._send(e4, t, r, s + 1);
          }
        }
        if (w.status === 400 && typeof p === "string" && this._isModernEnvelopedRequest(e4)) try {
          let h = Yae.parse(JSON.parse(p)), g = (Array.isArray(e4) ? e4 : [e4]).filter((f) => $te(f));
          if (_ve(h) && g.some((f) => f.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {
        }
        throw new IC(ii.ClientHttpNotImplemented, `Error POSTing to endpoint: ${p}`, { status: w.status, statusText: w.statusText, text: p });
      }
      if (w.status === 202) {
        if (await w.text?.().catch(() => {
        }), uTr(e4)) this._startOrAuthSse({ resumptionToken: void 0 }).catch((p) => this.onerror?.(p));
        return;
      }
      let P = (Array.isArray(e4) ? e4 : [e4]).some((p) => "method" in p && "id" in p && p.id !== void 0), y = w.headers.get("content-type"), v = Ci(y);
      if (P) if (v === "text/event-stream") this._handleSseStream(w.body, { onresumptiontoken: n, requestSignal: t?.requestSignal, onRequestStreamEnd: t?.onRequestStreamEnd }, false);
      else if (v === "application/json") {
        let p = await w.json(), h = Array.isArray(p) ? p.map((g) => Yae.parse(g)) : [Yae.parse(p)];
        for (let g of h) this.onmessage?.(g);
      } else throw await w.text?.().catch(() => {
      }), new Si(ii.ClientHttpUnexpectedContent, `Unexpected content type: ${y}`, { contentType: y });
      else await w.text?.().catch(() => {
      });
    } catch (a) {
      if (t?.requestSignal?.aborted !== true) this.onerror?.(a);
      throw a;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let e4 = await this._commonHeaders(), t = { ...this._requestInit, method: "DELETE", headers: e4, signal: this._abortController?.signal }, r = await (this._fetch ?? fetch)(this._url, t);
      if (await r.text?.().catch(() => {
      }), !r.ok && r.status !== 405) throw new IC(ii.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, { status: r.status, statusText: r.statusText });
      this._sessionId = void 0;
    } catch (e4) {
      throw this.onerror?.(e4), e4;
    }
  }
  setProtocolVersion(e4) {
    this._protocolVersion = e4;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(e4, t) {
    await this._startOrAuthSse({ resumptionToken: e4, onresumptiontoken: t?.onresumptiontoken });
  }
};
export {
  $te,
  Ad,
  BRs,
  COe,
  Ept,
  Etn,
  IC,
  K1n,
  Pq,
  Si,
  Stn,
  Xae,
  Y1n,
  Yae,
  _tn,
  _ve,
  aHt,
  aO,
  aYe,
  abo,
  bpt,
  btn,
  cHt,
  cTr,
  dHt,
  dYe,
  fHt,
  fTr,
  gTr,
  gtn,
  hTr,
  htn,
  iHt,
  ibo,
  ii,
  kOe,
  kpt,
  lHt,
  lO,
  lYe,
  mBe,
  mTr,
  mtn,
  oHt,
  obo,
  pHt,
  pTr,
  q1n,
  rbo,
  sHt,
  sbo,
  ta,
  uHt,
  uTr,
  vpt,
  vtn,
  wpt,
  wtn,
  ytn
};
