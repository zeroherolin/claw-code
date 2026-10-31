// linux/vendor/mcp-sdk/not-in-era.js — Claude Code 2.1.310（linux）模块 chunk-ktghwym4.js
import { Stn } from "../../fs/chunk-1ddab6d4.js";
import { n9e } from "../../fs/same-origin.js";
import { btn } from "../../shared/chunk-3c590495.js";
import { vH, Ewi } from "../../shared/chunk-334c8283.js";
import { o6, g$e } from "../zod/unrecognized-keys.js";
import { ost, X3r, o, xci, x4e, v, M, sm, UZ, oe, T, u, yt, $e, Gr, Zbe, me, B, A, wa, gA, Ia } from "../zod/string-format.js";
import { hq } from "../../fs/chunk-41037178.js";
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
var aft = [Ot, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], Wen = "io.modelcontextprotocol/related-task", Fe = "io.modelcontextprotocol/protocolVersion", Nt = "io.modelcontextprotocol/clientInfo", He = "io.modelcontextprotocol/serverInfo", pOe = "io.modelcontextprotocol/clientCapabilities", vr = "io.modelcontextprotocol/subscriptionId", Mt = "io.modelcontextprotocol/logLevel";
var gt = "2.0";
var PUn = -32601;
var Qe = gA(() => $e([o(), v(), M(), sm(), me(o(), Qe), T(Qe)])), de = me(o(), Qe), Eo = T(Qe), br = $e([o(), v().int()]), Rr = o(), Es = u({ ttl: v().optional() }), Gen = u({ taskId: o() }), zr = yt({ progressToken: br.optional(), [Wen]: Gen.optional() }), be = u({ _meta: zr.optional() }), _t = be.extend({ task: Es.optional() }), he = u({ method: o(), params: be.loose().optional() }), Ee = u({ _meta: zr.optional() }), Pe = u({ method: o(), params: Ee.loose().optional() }), wr = yt({ get [He]() {
  return lft.optional().catch(void 0);
} }), tO = yt({ _meta: wr.optional() }), et = $e([o(), v().int()]), $r = u({ jsonrpc: A(gt), id: et, ...he.shape }).strict(), Er = u({ jsonrpc: A(gt), ...Pe.shape }).strict(), jt = u({ jsonrpc: A(gt), id: et, result: tO }).strict(), At = u({ jsonrpc: A(gt), id: et.optional(), error: u({ code: v().int(), message: o(), data: oe().optional() }) }).strict(), Fae = $e([$r, Er, jt, At]), Po = $e([jt, At]), Pr = tO.strict(), Ps = Ee.extend({ requestId: et.optional(), reason: o().optional() }), Tr = Pe.extend({ method: A("notifications/cancelled"), params: Ps }), Ts = u({ src: o(), mimeType: o().optional(), sizes: T(o()).optional(), theme: B(["light", "dark"]).optional() }), tt = u({ icons: T(Ts).optional() }), xe = u({ name: o(), title: o().optional() }), lft = xe.extend({ ...xe.shape, ...tt.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), kc = Zbe(u({ applyDefaults: M().optional() }), de), qc = Ia((e4) => {
  if (e4 && typeof e4 === "object" && !Array.isArray(e4) && Object.keys(e4).length === 0) return { form: {} };
  return e4;
}, Zbe(u({ form: kc.optional(), url: de.optional() }), de.optional())), Cs = yt({ list: de.optional(), cancel: de.optional(), requests: yt({ sampling: yt({ createMessage: de.optional() }).optional(), elicitation: yt({ create: de.optional() }).optional() }).optional() }), ks = yt({ list: de.optional(), cancel: de.optional(), requests: yt({ tools: yt({ call: de.optional() }).optional() }).optional() }), qs = u({ experimental: me(o(), de).optional(), sampling: u({ context: de.optional(), tools: de.optional() }).optional(), elicitation: qc.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: Cs.optional(), extensions: me(o(), de).optional() }), Is = be.extend({ protocolVersion: o(), capabilities: qs, clientInfo: lft }), Cr = he.extend({ method: A("initialize"), params: Is }), MDt = u({ experimental: me(o(), de).optional(), logging: de.optional(), completions: de.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: ks.optional(), extensions: me(o(), de).optional() }), dft = tO.extend({ protocolVersion: o(), capabilities: MDt, serverInfo: lft, instructions: o().optional() }), kr = Pe.extend({ method: A("notifications/initialized"), params: Ee.optional() }), Os = he.extend({ method: A("server/discover"), params: be.optional() }), z8e = tO.extend({ supportedVersions: T(o()), capabilities: MDt, instructions: o().optional() }), qr = he.extend({ method: A("ping"), params: be.optional() }), Ns = u({ progress: v(), total: wa(v()), message: wa(o()) }), Ms = u({ ...Ee.shape, ...Ns.shape, progressToken: br }), Ir = Pe.extend({ method: A("notifications/progress"), params: Ms }), js = be.extend({ cursor: Rr.optional() }), rt = he.extend({ params: js.optional() }), st = tO.extend({ nextCursor: Rr.optional() }), Or = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }), Nr = Or.extend({ text: o() }), To = o().refine((e4) => {
  try {
    return atob(e4), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" }), Mr = Or.extend({ blob: To }), at = B(["user", "assistant"]), Ke = u({ audience: T(at).optional(), priority: v().min(0).max(1).optional(), lastModified: $e([vH({ offset: true }), vH({ offset: true, precision: -1 })]).optional() }), DDt = u({ ...xe.shape, ...tt.shape, uri: o(), description: wa(o()), mimeType: wa(o()), size: wa(v()), annotations: Ke.optional(), _meta: wa(yt({})) }), zen = u({ ...xe.shape, ...tt.shape, uriTemplate: o(), description: wa(o()), mimeType: wa(o()), annotations: Ke.optional(), _meta: wa(yt({})) }), As = rt.extend({ method: A("resources/list") }), K8e = st.extend({ resources: T(DDt) }), Ls = rt.extend({ method: A("resources/templates/list") }), Ken = st.extend({ resourceTemplates: T(zen) }), Lt = be.extend({ uri: o() }), Us = Lt, Ds = he.extend({ method: A("resources/read"), params: Us }), Vs = tO.extend({ contents: T($e([Nr, Mr])) }), xs = Pe.extend({ method: A("notifications/resources/list_changed"), params: Ee.optional() }), Fs = Lt, Hs = he.extend({ method: A("resources/subscribe"), params: Fs }), Ks = Lt, Js = he.extend({ method: A("resources/unsubscribe"), params: Ks }), jr = u({ toolsListChanged: M().optional(), promptsListChanged: M().optional(), resourcesListChanged: M().optional(), resourceSubscriptions: T(o()).optional() }), Gs = be.extend({ notifications: jr }), Bs = he.extend({ method: A("subscriptions/listen"), params: Gs }), Ws = Ee.extend({ notifications: jr }), Ys = Pe.extend({ method: A("notifications/subscriptions/acknowledged"), params: Ws }), Xs = wr.extend({ [vr]: et }), Zs = tO.extend({ _meta: Xs }), Qs = Ee.extend({ uri: o() }), ea = Pe.extend({ method: A("notifications/resources/updated"), params: Qs }), ra = u({ name: o(), description: wa(o()), required: wa(M()) }), Ven = u({ ...xe.shape, ...tt.shape, description: wa(o()), arguments: wa(T(ra)), _meta: wa(yt({})) }), sa = rt.extend({ method: A("prompts/list") }), qen = st.extend({ prompts: T(Ven) }), aa = be.extend({ name: o(), arguments: me(o(), o()).optional() }), oa = he.extend({ method: A("prompts/get"), params: aa }), Ut = u({ type: A("text"), text: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), Dt = u({ type: A("image"), data: To, mimeType: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), Vt = u({ type: A("audio"), data: To, mimeType: o(), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), na = u({ type: A("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), ia = u({ type: A("resource"), resource: $e([Nr, Mr]), annotations: Ke.optional(), _meta: me(o(), oe()).optional() }), ca = DDt.extend({ type: A("resource_link") }), xt = $e([Ut, Dt, Vt, ca, ia]), la = u({ role: at, content: xt }), ua = tO.extend({ description: o().optional(), messages: T(la) }), da = Pe.extend({ method: A("notifications/prompts/list_changed"), params: Ee.optional() }), ha = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), ma = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }), HDt = u({ ...xe.shape, ...tt.shape, description: o().optional(), inputSchema: u({ type: A("object"), properties: me(o(), Qe).optional(), required: T(o()).optional() }).catchall(oe()), outputSchema: yt({ $schema: o().optional() }).optional(), annotations: ha.optional(), execution: ma.optional(), _meta: me(o(), oe()).optional() }), pa = rt.extend({ method: A("tools/list") }), V8e = st.extend({ tools: T(HDt) }), Ar = tO.extend({ content: T(xt).default([]), structuredContent: oe().optional(), isError: M().optional() }), Yen = Ar.or(tO.extend({ toolResult: oe() })), fa = _t.extend({ name: o(), arguments: me(o(), oe()).optional() }), Sa = he.extend({ method: A("tools/call"), params: fa }), ga = Pe.extend({ method: A("notifications/tools/list_changed"), params: Ee.optional() }), Lr = u({ autoRefresh: M().default(true), debounceMs: v().int().nonnegative().default(300) }), Ur = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), _a = be.extend({ level: Ur }), ya = he.extend({ method: A("logging/setLevel"), params: _a }), va = Ee.extend({ level: Ur, logger: o().optional(), data: oe() }), ba = Pe.extend({ method: A("notifications/message"), params: va }), Ra = u({ name: o().optional() }), za = u({ hints: T(Ra).optional(), costPriority: v().min(0).max(1).optional(), speedPriority: v().min(0).max(1).optional(), intelligencePriority: v().min(0).max(1).optional() }), $a = u({ mode: B(["auto", "required", "none"]).optional() }), Ea = u({ type: A("tool_result"), toolUseId: o().describe("The unique identifier for the corresponding tool call."), content: T(xt), structuredContent: oe().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), Pa = Gr("type", [Ut, Dt, Vt]), St = Gr("type", [Ut, Dt, Vt, na, Ea]), Ta = u({ role: at, content: $e([St, T(St)]), _meta: me(o(), oe()).optional() }), Ca = _t.extend({ messages: T(Ta), modelPreferences: za.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: v().optional(), maxTokens: v().int(), stopSequences: T(o()).optional(), metadata: de.optional(), tools: T(HDt).optional(), toolChoice: $a.optional() }), ka = he.extend({ method: A("sampling/createMessage"), params: Ca }), qa = tO.extend({ model: o(), stopReason: wa(B(["endTurn", "stopSequence", "maxTokens"]).or(o())), role: at, content: Pa }), Oa = tO.extend({ model: o(), stopReason: wa(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())), role: at, content: $e([St, T(St)]) }), Dr = u({ type: A("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), Ft = u({ type: A("string"), title: o().optional(), description: o().optional(), minLength: v().optional(), maxLength: v().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), Ht = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: v().optional(), maximum: v().optional(), default: v().optional() }), Vr = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), default: o().optional() }), xr = u({ type: A("string"), title: o().optional(), description: o().optional(), oneOf: T(u({ const: o(), title: o() })), default: o().optional() }), Fr = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), enumNames: T(o()).optional(), default: o().optional() }), Na = $e([Vr, xr]), Hr = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ type: A("string"), enum: T(o()) }), default: T(o()).optional() }), Kr = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ anyOf: T(u({ const: o(), title: o() })) }), default: T(o()).optional() }), Ma = $e([Hr, Kr]), ja = $e([Fr, Na, Ma]), Jr = $e([ja, Dr, Ft, Ht]), Kt = _t.extend({ mode: A("form").optional(), message: o(), requestedSchema: u({ type: A("object"), properties: me(o(), Jr), required: T(o()).optional() }).catchall(oe()) }), LDt = _t.extend({ mode: A("url"), message: o(), elicitationId: o(), url: o().url() }), Xen = $e([Kt, LDt]), Aa = he.extend({ method: A("elicitation/create"), params: Xen }), La = Ee.extend({ elicitationId: o() }), Ua = Pe.extend({ method: A("notifications/elicitation/complete"), params: La }), Da = tO.extend({ action: B(["accept", "decline", "cancel"]), content: Ia((e4) => e4 === null ? void 0 : e4, me(o(), $e([o(), v(), M(), T(o())])).optional()) }), Va = u({ type: A("ref/resource"), uri: o() }), xa = u({ type: A("ref/prompt"), name: o() }), Fa = be.extend({ ref: $e([xa, Va]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }), Ha = he.extend({ method: A("completion/complete"), params: Fa }), Ka = tO.extend({ completion: yt({ values: T(o()).max(100), total: wa(v().int()), hasMore: wa(M()) }) }), Ja = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ga = he.extend({ method: A("roots/list"), params: be.optional() }), Ba = tO.extend({ roots: T(Ja) }), Wa = Pe.extend({ method: A("notifications/roots/list_changed"), params: Ee.optional() }), Co = yt({ ttl: v().optional(), pollInterval: v().optional() }), Ya = B(["working", "input_required", "completed", "failed", "cancelled"]), ot = u({ taskId: o(), status: Ya, ttl: $e([v(), sm()]), createdAt: o(), lastUpdatedAt: o(), pollInterval: wa(v()), statusMessage: wa(o()) }), ko = tO.extend({ task: ot }), Xa = Ee.merge(ot), qo = Pe.extend({ method: A("notifications/tasks/status"), params: Xa }), Io = he.extend({ method: A("tasks/get"), params: be.extend({ taskId: o() }) }), Oo = tO.merge(ot), No = he.extend({ method: A("tasks/result"), params: be.extend({ taskId: o() }) }), Mo = tO.loose(), jo = rt.extend({ method: A("tasks/list") }), Ao = st.extend({ tasks: T(ot) }), Lo = he.extend({ method: A("tasks/cancel"), params: be.extend({ taskId: o() }) }), Uo = tO.merge(ot), Do = $e([qr, Cr, Os, Ha, ya, oa, sa, As, Ls, Ds, Hs, Js, Bs, Sa, pa]), Vo = $e([Tr, Ir, kr, Wa]), xo = $e([Pr, qa, Oa, Da, Ba]), Fo = $e([qr, ka, Aa, Ga]), Ho = $e([Tr, Ir, ba, ea, xs, ga, da, Ys, Ua]), Ko = $e([Pr, dft, z8e, Ka, ua, qen, K8e, Ken, Vs, Ar, V8e, Zs]), ve = x4e().superRefine((e4, t) => {
  if (!URL.canParse(e4)) return t.addIssue({ code: o6.custom, message: "URL must be parseable", fatal: true }), hq;
}).refine((e4) => {
  let t = new URL(e4);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), Br = yt({ resource: o().url(), authorization_servers: T(ve).optional(), jwks_uri: o().url().optional(), scopes_supported: T(o()).optional(), bearer_methods_supported: T(o()).optional(), resource_signing_alg_values_supported: T(o()).optional(), resource_name: o().optional(), resource_documentation: o().optional(), resource_policy_uri: o().url().optional(), resource_tos_uri: o().url().optional(), tls_client_certificate_bound_access_tokens: M().optional(), authorization_details_types_supported: T(o()).optional(), dpop_signing_alg_values_supported: T(o()).optional(), dpop_bound_access_tokens_required: M().optional() }), cft = yt({ issuer: o(), authorization_endpoint: ve, token_endpoint: ve, registration_endpoint: ve.optional(), scopes_supported: T(o()).optional(), response_types_supported: T(o()), response_modes_supported: T(o()).optional(), grant_types_supported: T(o()).optional(), token_endpoint_auth_methods_supported: T(o()).optional(), token_endpoint_auth_signing_alg_values_supported: T(o()).optional(), service_documentation: ve.optional(), revocation_endpoint: ve.optional(), revocation_endpoint_auth_methods_supported: T(o()).optional(), revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(), introspection_endpoint: o().optional(), introspection_endpoint_auth_methods_supported: T(o()).optional(), introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(), code_challenge_methods_supported: T(o()).optional(), client_id_metadata_document_supported: M().optional(), authorization_response_iss_parameter_supported: M().optional().catch(void 0) }), Za = yt({ issuer: o(), authorization_endpoint: ve, token_endpoint: ve, userinfo_endpoint: ve.optional(), jwks_uri: ve, registration_endpoint: ve.optional(), scopes_supported: T(o()).optional(), response_types_supported: T(o()), response_modes_supported: T(o()).optional(), grant_types_supported: T(o()).optional(), acr_values_supported: T(o()).optional(), subject_types_supported: T(o()), id_token_signing_alg_values_supported: T(o()), id_token_encryption_alg_values_supported: T(o()).optional(), id_token_encryption_enc_values_supported: T(o()).optional(), userinfo_signing_alg_values_supported: T(o()).optional(), userinfo_encryption_alg_values_supported: T(o()).optional(), userinfo_encryption_enc_values_supported: T(o()).optional(), request_object_signing_alg_values_supported: T(o()).optional(), request_object_encryption_alg_values_supported: T(o()).optional(), request_object_encryption_enc_values_supported: T(o()).optional(), token_endpoint_auth_methods_supported: T(o()).optional(), token_endpoint_auth_signing_alg_values_supported: T(o()).optional(), display_values_supported: T(o()).optional(), claim_types_supported: T(o()).optional(), claims_supported: T(o()).optional(), service_documentation: o().optional(), claims_locales_supported: T(o()).optional(), ui_locales_supported: T(o()).optional(), claims_parameter_supported: M().optional(), request_parameter_supported: M().optional(), request_uri_parameter_supported: M().optional(), require_request_uri_registration: M().optional(), op_policy_uri: ve.optional(), op_tos_uri: ve.optional(), client_id_metadata_document_supported: M().optional(), authorization_response_iss_parameter_supported: M().optional().catch(void 0) }), NDt = u({ ...Za.shape, ...cft.pick({ code_challenge_methods_supported: true }).shape }), $Dt = u({ access_token: o(), id_token: o().optional(), token_type: o(), expires_in: g$e().optional(), scope: o().optional(), refresh_token: o().optional() }).strip(), Qa = u({ issued_token_type: A("urn:ietf:params:oauth:token-type:id-jag"), access_token: o(), token_type: o().optional(), expires_in: v().optional(), scope: o().optional() }).strip(), FDt = u({ error: o(), error_description: o().optional(), error_uri: o().optional() }), $o = ve.optional().or(A("").transform(() => {
  return;
})), eo = u({ redirect_uris: T(ve), token_endpoint_auth_method: o().optional(), grant_types: T(o()).optional(), response_types: T(o()).optional(), application_type: o().optional(), client_name: o().optional(), client_uri: ve.optional(), logo_uri: $o, scope: o().optional(), contacts: T(o()).optional(), tos_uri: $o, policy_uri: o().optional(), jwks_uri: ve.optional(), jwks: UZ().optional(), software_id: o().optional(), software_version: o().optional(), software_statement: o().optional() }).strip(), to = u({ client_id: o(), client_secret: o().optional(), client_id_issued_at: v().optional(), client_secret_expires_at: v().optional() }).strip(), Wr = eo.merge(to), Jo = u({ error: o(), error_description: o().optional() }).strip(), Go = u({ token: o(), token_type_hint: o().optional() }).strip();
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
function Oe(e4, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e4, "mcpBrand") && typeof e4.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, Zo)) {
      let r = t[Zo];
      if (r && typeof r.has === "function" && r.has(e4.mcpBrand)) return true;
    }
  } catch {
  }
  return Function.prototype[Symbol.hasInstance].call(e4, t);
}
var Uae = (function(e4) {
  return e4.InvalidRequest = "invalid_request", e4.InvalidClient = "invalid_client", e4.InvalidGrant = "invalid_grant", e4.UnauthorizedClient = "unauthorized_client", e4.UnsupportedGrantType = "unsupported_grant_type", e4.InvalidScope = "invalid_scope", e4.AccessDenied = "access_denied", e4.ServerError = "server_error", e4.TemporarilyUnavailable = "temporarily_unavailable", e4.UnsupportedResponseType = "unsupported_response_type", e4.UnsupportedTokenType = "unsupported_token_type", e4.InvalidToken = "invalid_token", e4.MethodNotAllowed = "method_not_allowed", e4.TooManyRequests = "too_many_requests", e4.InvalidClientMetadata = "invalid_client_metadata", e4.InvalidRedirectUri = "invalid_redirect_uri", e4.InsufficientScope = "insufficient_scope", e4.InvalidTarget = "invalid_target", e4;
})({}), y4 = class e extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
  }
  static [Symbol.hasInstance](t) {
    return Oe(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, t);
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
})({}), bi = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
  }
  static [Symbol.hasInstance](e4) {
    return Oe(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, e4);
  }
  constructor(e4, t, r) {
    super(t);
    this.code = e4, this.data = r, this.name = "SdkError", bt(this, new.target);
  }
}, RT = class extends bi {
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
  let e4 = gA(() => $e([o(), v(), M(), sm(), me(o(), e4), T(e4)])), t = me(o(), e4), r = $e([o(), v().int()]), s = o(), a = u({ ttl: v().optional() }), n = u({ taskId: o() }), i = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": n.optional() }), l = u({ _meta: i.optional() }), c = l.extend({ task: a.optional() }), d = u({ method: o(), params: l.loose().optional() }), m = u({ _meta: i.optional() }), _ = u({ method: o(), params: m.loose().optional() }), E = yt({ _meta: i.optional() }), P = $e([o(), v().int()]), y = E.strict(), b = m.extend({ requestId: P.optional(), reason: o().optional() }), p = _.extend({ method: A("notifications/cancelled"), params: b }), h = u({ src: o(), mimeType: o().optional(), sizes: T(o()).optional(), theme: B(["light", "dark"]).optional() }), g = u({ icons: T(h).optional() }), f = u({ name: o(), title: o().optional() }), z = f.extend({ ...f.shape, ...g.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), C = Zbe(u({ applyDefaults: M().optional() }), t), R = Ia((we) => {
    if (we && typeof we === "object" && !Array.isArray(we) && Object.keys(we).length === 0) return { form: {} };
    return we;
  }, Zbe(u({ form: C.optional(), url: t.optional() }), t.optional())), S = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ sampling: yt({ createMessage: t.optional() }).optional(), elicitation: yt({ create: t.optional() }).optional() }).optional() }), k = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional() }), L = u({ experimental: me(o(), t).optional(), sampling: u({ context: t.optional(), tools: t.optional() }).optional(), elicitation: R.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: S.optional(), extensions: me(o(), t).optional() }), H = l.extend({ protocolVersion: o(), capabilities: L, clientInfo: z }), N = d.extend({ method: A("initialize"), params: H }), x = u({ experimental: me(o(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: k.optional(), extensions: me(o(), t).optional() }), W = E.extend({ protocolVersion: o(), capabilities: x, serverInfo: z, instructions: o().optional() }), G = _.extend({ method: A("notifications/initialized"), params: m.optional() }), se = d.extend({ method: A("ping"), params: l.optional() }), le = u({ progress: v(), total: wa(v()), message: wa(o()) }), ie = u({ ...m.shape, ...le.shape, progressToken: r }), Se = _.extend({ method: A("notifications/progress"), params: ie }), ae = l.extend({ cursor: s.optional() }), O = d.extend({ params: ae.optional() }), U = E.extend({ nextCursor: s.optional() }), F = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }), w = F.extend({ text: o() }), I = o().refine((we) => {
    try {
      return atob(we), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), j = F.extend({ blob: I }), J = B(["user", "assistant"]), Y = u({ audience: T(J).optional(), priority: v().min(0).max(1).optional(), lastModified: $e([vH({ offset: true }), vH({ offset: true, precision: -1 })]).optional() }), re = u({ ...f.shape, ...g.shape, uri: o(), description: wa(o()), mimeType: wa(o()), size: wa(v()), annotations: Y.optional(), _meta: wa(yt({})) }), Q = u({ ...f.shape, ...g.shape, uriTemplate: o(), description: wa(o()), mimeType: wa(o()), annotations: Y.optional(), _meta: wa(yt({})) }), ce = O.extend({ method: A("resources/list") }), Te = U.extend({ resources: T(re) }), q = O.extend({ method: A("resources/templates/list") }), D = U.extend({ resourceTemplates: T(Q) }), V = l.extend({ uri: o() }), X = V, Z = d.extend({ method: A("resources/read"), params: X }), ee = E.extend({ contents: T($e([w, j])) }), pe = _.extend({ method: A("notifications/resources/list_changed"), params: m.optional() }), _e = V, Re = d.extend({ method: A("resources/subscribe"), params: _e }), ge = V, ue = d.extend({ method: A("resources/unsubscribe"), params: ge }), Ne = m.extend({ uri: o() }), ye = _.extend({ method: A("notifications/resources/updated"), params: Ne }), De = u({ name: o(), description: wa(o()), required: wa(M()) }), je = u({ ...f.shape, ...g.shape, description: wa(o()), arguments: wa(T(De)), _meta: wa(yt({})) }), Ve = O.extend({ method: A("prompts/list") }), Be = U.extend({ prompts: T(je) }), We = l.extend({ name: o(), arguments: me(o(), o()).optional() }), nt = d.extend({ method: A("prompts/get"), params: We }), it = u({ type: A("text"), text: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), ct = u({ type: A("image"), data: I, mimeType: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), lt = u({ type: A("audio"), data: I, mimeType: o(), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), Gt = u({ type: A("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), Ye = u({ type: A("resource"), resource: $e([w, j]), annotations: Y.optional(), _meta: me(o(), oe()).optional() }), Bt = re.extend({ type: A("resource_link") }), Me = $e([it, ct, lt, Bt, Ye]), Rt = u({ role: J, content: Me }), zt = E.extend({ description: o().optional(), messages: T(Rt) }), ut = _.extend({ method: A("notifications/prompts/list_changed"), params: m.optional() }), Wt = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), wt = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }), dt = u({ ...f.shape, ...g.shape, description: o().optional(), inputSchema: u({ type: A("object"), properties: me(o(), e4).optional(), required: T(o()).optional() }).catchall(oe()), outputSchema: u({ type: A("object"), properties: me(o(), e4).optional(), required: T(o()).optional() }).catchall(oe()).optional(), annotations: Wt.optional(), execution: wt.optional(), _meta: me(o(), oe()).optional() }), $t = O.extend({ method: A("tools/list") }), Et = U.extend({ tools: T(dt) }), Pt = E.extend({ content: T(Me), structuredContent: me(o(), oe()).optional(), isError: M().optional() }), ze = c.extend({ name: o(), arguments: me(o(), oe()).optional() }), Yt = d.extend({ method: A("tools/call"), params: ze }), is = _.extend({ method: A("notifications/tools/list_changed"), params: m.optional() }), Tt = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Xt = l.extend({ level: Tt }), Zt = d.extend({ method: A("logging/setLevel"), params: Xt }), Qt = m.extend({ level: Tt, logger: o().optional(), data: oe() }), er = _.extend({ method: A("notifications/message"), params: Qt }), tr = u({ name: o().optional() }), rr = u({ hints: T(tr).optional(), costPriority: v().min(0).max(1).optional(), speedPriority: v().min(0).max(1).optional(), intelligencePriority: v().min(0).max(1).optional() }), sr = u({ mode: B(["auto", "required", "none"]).optional() }), cs = u({ type: A("tool_result"), toolUseId: o().describe("The unique identifier for the corresponding tool call."), content: T(Me), structuredContent: u({}).loose().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), ar = Gr("type", [it, ct, lt]), Xe = Gr("type", [it, ct, lt, Gt, cs]), or = u({ role: J, content: $e([Xe, T(Xe)]), _meta: me(o(), oe()).optional() }), nr = c.extend({ messages: T(or), modelPreferences: rr.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: v().optional(), maxTokens: v().int(), stopSequences: T(o()).optional(), metadata: t.optional(), tools: T(dt).optional(), toolChoice: sr.optional() }), ir = d.extend({ method: A("sampling/createMessage"), params: nr }), cr = E.extend({ model: o(), stopReason: wa(B(["endTurn", "stopSequence", "maxTokens"]).or(o())), role: J, content: ar }), lr = E.extend({ model: o(), stopReason: wa(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())), role: J, content: $e([Xe, T(Xe)]) }), ur = u({ type: A("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), dr = u({ type: A("string"), title: o().optional(), description: o().optional(), minLength: v().optional(), maxLength: v().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), hr = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: v().optional(), maximum: v().optional(), default: v().optional() }), mr = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), default: o().optional() }), pr = u({ type: A("string"), title: o().optional(), description: o().optional(), oneOf: T(u({ const: o(), title: o() })), default: o().optional() }), fr = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), enumNames: T(o()).optional(), default: o().optional() }), Sr = $e([mr, pr]), ht = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ type: A("string"), enum: T(o()) }), default: T(o()).optional() }), mt = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ anyOf: T(u({ const: o(), title: o() })) }), default: T(o()).optional() }), ls = $e([ht, mt]), us = $e([fr, Sr, ls]), qe = $e([us, ur, dr, hr]), Ie = c.extend({ mode: A("form").optional(), message: o(), requestedSchema: u({ type: A("object"), properties: me(o(), qe), required: T(o()).optional() }).catchall(oe()) }), gr = c.extend({ mode: A("url"), message: o(), elicitationId: o(), url: o().url() }), Ae = $e([Ie, gr]), ds = d.extend({ method: A("elicitation/create"), params: Ae }), hs = m.extend({ elicitationId: o() }), ms = _.extend({ method: A("notifications/elicitation/complete"), params: hs }), ps = E.extend({ action: B(["accept", "decline", "cancel"]), content: Ia((we) => we === null ? void 0 : we, me(o(), $e([o(), v(), M(), T(o())])).optional()) }), fs = u({ type: A("ref/resource"), uri: o() }), Ss = u({ type: A("ref/prompt"), name: o() }), gs = l.extend({ ref: $e([Ss, fs]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }), _r = d.extend({ method: A("completion/complete"), params: gs }), _s = E.extend({ completion: yt({ values: T(o()).max(100), total: wa(v().int()), hasMore: wa(M()) }) }), ys = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ct = d.extend({ method: A("roots/list"), params: l.optional() }), yr = E.extend({ roots: T(ys) }), vs = _.extend({ method: A("notifications/roots/list_changed"), params: m.optional() }), bs = yt({ ttl: v().optional(), pollInterval: v().optional() }), Rs = B(["working", "input_required", "completed", "failed", "cancelled"]), Ze = u({ taskId: o(), status: Rs, ttl: $e([v(), sm()]), createdAt: o(), lastUpdatedAt: o(), pollInterval: wa(v()), statusMessage: wa(o()) }), Ce = E.extend({ task: Ze }), zs = m.merge(Ze), pt = _.extend({ method: A("notifications/tasks/status"), params: zs }), kt = d.extend({ method: A("tasks/get"), params: l.extend({ taskId: o() }) }), qt = E.merge(Ze), It = d.extend({ method: A("tasks/result"), params: l.extend({ taskId: o() }) }), wo = E.loose(), ke = O.extend({ method: A("tasks/list") }), fe = U.extend({ tasks: T(Ze) }), ft = d.extend({ method: A("tasks/cancel"), params: l.extend({ taskId: o() }) });
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, TaskMetadataSchema: a, RelatedTaskMetadataSchema: n, RequestMetaSchema: i, BaseRequestParamsSchema: l, TaskAugmentedRequestParamsSchema: c, RequestSchema: d, NotificationsParamsSchema: m, NotificationSchema: _, ResultSchema: E, RequestIdSchema: P, EmptyResultSchema: y, CancelledNotificationParamsSchema: b, CancelledNotificationSchema: p, IconSchema: h, IconsSchema: g, BaseMetadataSchema: f, ImplementationSchema: z, ClientTasksCapabilitySchema: S, ServerTasksCapabilitySchema: k, ClientCapabilitiesSchema: L, InitializeRequestParamsSchema: H, InitializeRequestSchema: N, ServerCapabilitiesSchema: x, InitializeResultSchema: W, InitializedNotificationSchema: G, PingRequestSchema: se, ProgressSchema: le, ProgressNotificationParamsSchema: ie, ProgressNotificationSchema: Se, PaginatedRequestParamsSchema: ae, PaginatedRequestSchema: O, PaginatedResultSchema: U, ResourceContentsSchema: F, TextResourceContentsSchema: w, BlobResourceContentsSchema: j, RoleSchema: J, AnnotationsSchema: Y, ResourceSchema: re, ResourceTemplateSchema: Q, ListResourcesRequestSchema: ce, ListResourcesResultSchema: Te, ListResourceTemplatesRequestSchema: q, ListResourceTemplatesResultSchema: D, ResourceRequestParamsSchema: V, ReadResourceRequestParamsSchema: X, ReadResourceRequestSchema: Z, ReadResourceResultSchema: ee, ResourceListChangedNotificationSchema: pe, SubscribeRequestParamsSchema: _e, SubscribeRequestSchema: Re, UnsubscribeRequestParamsSchema: ge, UnsubscribeRequestSchema: ue, ResourceUpdatedNotificationParamsSchema: Ne, ResourceUpdatedNotificationSchema: ye, PromptArgumentSchema: De, PromptSchema: je, ListPromptsRequestSchema: Ve, ListPromptsResultSchema: Be, GetPromptRequestParamsSchema: We, GetPromptRequestSchema: nt, TextContentSchema: it, ImageContentSchema: ct, AudioContentSchema: lt, ToolUseContentSchema: Gt, EmbeddedResourceSchema: Ye, ResourceLinkSchema: Bt, ContentBlockSchema: Me, PromptMessageSchema: Rt, GetPromptResultSchema: zt, PromptListChangedNotificationSchema: ut, ToolAnnotationsSchema: Wt, ToolExecutionSchema: wt, ToolSchema: dt, ListToolsRequestSchema: $t, ListToolsResultSchema: Et, CallToolResultSchema: Pt, CallToolRequestParamsSchema: ze, CallToolRequestSchema: Yt, ToolListChangedNotificationSchema: is, LoggingLevelSchema: Tt, SetLevelRequestParamsSchema: Xt, SetLevelRequestSchema: Zt, LoggingMessageNotificationParamsSchema: Qt, LoggingMessageNotificationSchema: er, ModelHintSchema: tr, ModelPreferencesSchema: rr, ToolChoiceSchema: sr, ToolResultContentSchema: cs, SamplingContentSchema: ar, SamplingMessageContentBlockSchema: Xe, SamplingMessageSchema: or, CreateMessageRequestParamsSchema: nr, CreateMessageRequestSchema: ir, CreateMessageResultSchema: cr, CreateMessageResultWithToolsSchema: lr, BooleanSchemaSchema: ur, StringSchemaSchema: dr, NumberSchemaSchema: hr, UntitledSingleSelectEnumSchemaSchema: mr, TitledSingleSelectEnumSchemaSchema: pr, LegacyTitledEnumSchemaSchema: fr, SingleSelectEnumSchemaSchema: Sr, UntitledMultiSelectEnumSchemaSchema: ht, TitledMultiSelectEnumSchemaSchema: mt, MultiSelectEnumSchemaSchema: ls, EnumSchemaSchema: us, PrimitiveSchemaDefinitionSchema: qe, ElicitRequestFormParamsSchema: Ie, ElicitRequestURLParamsSchema: gr, ElicitRequestParamsSchema: Ae, ElicitRequestSchema: ds, ElicitationCompleteNotificationParamsSchema: hs, ElicitationCompleteNotificationSchema: ms, ElicitResultSchema: ps, ResourceTemplateReferenceSchema: fs, PromptReferenceSchema: Ss, CompleteRequestParamsSchema: gs, CompleteRequestSchema: _r, CompleteResultSchema: _s, RootSchema: ys, ListRootsRequestSchema: Ct, ListRootsResultSchema: yr, RootsListChangedNotificationSchema: vs, TaskCreationParamsSchema: bs, TaskStatusSchema: Rs, TaskSchema: Ze, CreateTaskResultSchema: Ce, TaskStatusNotificationParamsSchema: zs, TaskStatusNotificationSchema: pt, GetTaskRequestSchema: kt, GetTaskResultSchema: qt, GetTaskPayloadRequestSchema: It, GetTaskPayloadResultSchema: wo, ListTasksRequestSchema: ke, ListTasksResultSchema: fe, CancelTaskRequestSchema: ft, CancelTaskResultSchema: E.merge(Ze), ClientRequestSchema: $e([se, N, _r, Zt, nt, Ve, ce, q, Z, Re, ue, Yt, $t, kt, It, ke, ft]), ClientNotificationSchema: $e([p, Se, G, vs, pt]), ClientResultSchema: $e([y, cr, lr, ps, yr, qt, fe, Ce]), ServerRequestSchema: $e([se, ir, ds, Ct, kt, It, ke, ft]), ServerNotificationSchema: $e([p, Se, er, ye, pe, is, ut, pt, ms]), ServerResultSchema: $e([y, W, _s, zt, Be, Te, D, ee, Pt, Et, qt, fe, Ce]), CallToolResultWireSchema: oe().superRefine((we, bc) => {
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
  let e4 = gA(() => $e([o(), v(), M(), sm(), me(o(), e4), T(e4)])), t = me(o(), e4), r = $e([o(), v().int()]), s = o(), a = $e([o(), v().int()]), n = B(["user", "assistant"]), i = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), l = o().refine((fe) => {
    try {
      return atob(fe), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), c = u({ ttl: v().optional() }), d = u({ taskId: o() }), m = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": d.optional() }), _ = u({ _meta: m.optional() }), E = _.extend({ task: c.optional() }), P = u({ _meta: m.optional() }), y = u({ method: o(), params: P.loose().optional() }), b = u({ src: o(), mimeType: o().optional(), sizes: T(o()).optional(), theme: B(["light", "dark"]).optional() }), p = u({ icons: T(b).optional() }), h = u({ name: o(), title: o().optional() }), g = h.extend({ ...h.shape, ...p.shape, version: o(), websiteUrl: o().optional(), description: o().optional() }), f = Zbe(u({ applyDefaults: M().optional() }), t), z = Ia((fe) => {
    if (fe && typeof fe === "object" && !Array.isArray(fe) && Object.keys(fe).length === 0) return { form: {} };
    return fe;
  }, Zbe(u({ form: f.optional(), url: t.optional() }), t.optional())), C = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ sampling: yt({ createMessage: t.optional() }).optional(), elicitation: yt({ create: t.optional() }).optional() }).optional() }), R = yt({ list: t.optional(), cancel: t.optional(), requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional() }), S = u({ experimental: me(o(), t).optional(), sampling: u({ context: t.optional(), tools: t.optional() }).optional(), elicitation: z.optional(), roots: u({ listChanged: M().optional() }).optional(), tasks: C.optional(), extensions: me(o(), t).optional() }), k = u({ experimental: me(o(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: u({ listChanged: M().optional() }).optional(), resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(), tools: u({ listChanged: M().optional() }).optional(), tasks: R.optional(), extensions: me(o(), t).optional() }), L = u({ progress: v(), total: wa(v()), message: wa(o()) }), H = u({ ...P.shape, ...L.shape, progressToken: r }), N = y.extend({ method: A("notifications/progress"), params: H }), x = P.extend({ level: i, logger: o().optional(), data: oe() }), W = y.extend({ method: A("notifications/message"), params: x }), G = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }), se = G.extend({ text: o() }), le = G.extend({ blob: l }), ie = u({ audience: T(n).optional(), priority: v().min(0).max(1).optional(), lastModified: $e([vH({ offset: true }), vH({ offset: true, precision: -1 })]).optional() }), Se = u({ ...h.shape, ...p.shape, uri: o(), description: wa(o()), mimeType: wa(o()), size: wa(v()), annotations: ie.optional(), _meta: wa(yt({})) }), ae = u({ ...h.shape, ...p.shape, uriTemplate: o(), description: wa(o()), mimeType: wa(o()), annotations: ie.optional(), _meta: wa(yt({})) }), O = y.extend({ method: A("notifications/resources/list_changed"), params: P.optional() }), U = P.extend({ uri: o() }), F = y.extend({ method: A("notifications/resources/updated"), params: U }), w = u({ name: o(), description: wa(o()), required: wa(M()) }), I = u({ ...h.shape, ...p.shape, description: wa(o()), arguments: wa(T(w)), _meta: wa(yt({})) }), j = y.extend({ method: A("notifications/prompts/list_changed"), params: P.optional() }), J = u({ type: A("text"), text: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Y = u({ type: A("image"), data: l, mimeType: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), re = u({ type: A("audio"), data: l, mimeType: o(), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Q = u({ type: A("tool_use"), name: o(), id: o(), input: me(o(), oe()), _meta: me(o(), oe()).optional() }), ce = u({ type: A("resource"), resource: $e([se, le]), annotations: ie.optional(), _meta: me(o(), oe()).optional() }), Te = Se.extend({ type: A("resource_link") }), q = $e([J, Y, re, Te, ce]), D = u({ role: n, content: q }), V = u({ title: o().optional(), readOnlyHint: M().optional(), destructiveHint: M().optional(), idempotentHint: M().optional(), openWorldHint: M().optional() }), X = y.extend({ method: A("notifications/tools/list_changed"), params: P.optional() }), Z = u({ name: o().optional() }), ee = u({ hints: T(Z).optional(), costPriority: v().min(0).max(1).optional(), speedPriority: v().min(0).max(1).optional(), intelligencePriority: v().min(0).max(1).optional() }), pe = u({ mode: B(["auto", "required", "none"]).optional() }), _e = u({ type: A("boolean"), title: o().optional(), description: o().optional(), default: M().optional() }), Re = u({ type: A("string"), title: o().optional(), description: o().optional(), minLength: v().optional(), maxLength: v().optional(), format: B(["email", "uri", "date", "date-time"]).optional(), default: o().optional() }), ge = u({ type: B(["number", "integer"]), title: o().optional(), description: o().optional(), minimum: v().optional(), maximum: v().optional(), default: v().optional() }), ue = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), default: o().optional() }), Ne = u({ type: A("string"), title: o().optional(), description: o().optional(), oneOf: T(u({ const: o(), title: o() })), default: o().optional() }), ye = u({ type: A("string"), title: o().optional(), description: o().optional(), enum: T(o()), enumNames: T(o()).optional(), default: o().optional() }), De = $e([ue, Ne]), je = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ type: A("string"), enum: T(o()) }), default: T(o()).optional() }), Ve = u({ type: A("array"), title: o().optional(), description: o().optional(), minItems: v().optional(), maxItems: v().optional(), items: u({ anyOf: T(u({ const: o(), title: o() })) }), default: T(o()).optional() }), Be = $e([je, Ve]), We = $e([ye, De, Be]), nt = $e([We, _e, Re, ge]), it = E.extend({ mode: A("form").optional(), message: o(), requestedSchema: u({ type: A("object"), properties: me(o(), nt), required: T(o()).optional() }).catchall(oe()) }), ct = u({ type: A("ref/resource"), uri: o() }), lt = u({ type: A("ref/prompt"), name: o() }), Gt = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }), Ye = S.shape, Bt = u({ experimental: Ye.experimental, sampling: Ye.sampling, elicitation: Ye.elicitation, roots: Ye.roots, extensions: Ye.extensions }), Me = k.shape, Rt = u({ experimental: Me.experimental, logging: Me.logging, completions: Me.completions, prompts: Me.prompts, resources: Me.resources, tools: Me.tools, extensions: Me.extensions }), zt = yt({ progressToken: r.optional(), [Fe]: o(), [Nt]: g.optional(), [pOe]: Bt, [Mt]: i.optional() }), ut = u({ ...h.shape, ...p.shape, description: o().optional(), inputSchema: yt({ $schema: o().optional(), type: A("object") }), outputSchema: yt({ $schema: o().optional() }).optional(), annotations: V.optional(), _meta: me(o(), oe()).optional() }), Wt = u({ type: A("tool_result"), toolUseId: o(), content: T(q), structuredContent: oe().optional(), isError: M().optional(), _meta: me(o(), oe()).optional() }), wt = $e([J, Y, re, Q, Wt]), dt = u({ role: n, content: $e([wt, T(wt)]), _meta: me(o(), oe()).optional() }), $t = o(), Et = yt({ [He]: g.optional().catch(void 0) }), Pt = Et.optional();
  function ze(fe) {
    return yt({ _meta: Pt, resultType: $t.default("complete"), ...fe });
  }
  let Yt = ze({}), is = ze({ nextCursor: s.optional() }), Tt = ze({ content: T(q), structuredContent: oe().optional(), isError: M().optional() }), Xt = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), tools: T(ut), nextCursor: s.optional() }), Zt = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), prompts: T(I), nextCursor: s.optional() }), Qt = ze({ description: o().optional(), messages: T(D) }), er = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), resources: T(Se), nextCursor: s.optional() }), tr = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), resourceTemplates: T(ae), nextCursor: s.optional() }), rr = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), contents: T($e([se, le])) }), sr = ze({ completion: u({ values: T(o()).max(100), total: v().int().optional(), hasMore: M().optional() }).loose() }), cs = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]) }), ar = ze({ ttlMs: v().int().min(0).catch(0), cacheScope: B(["public", "private"]).catch("private"), supportedVersions: T(o()), capabilities: Rt, instructions: o().optional() }), Xe = u({ messages: T(dt), modelPreferences: ee.optional(), systemPrompt: o().optional(), includeContext: B(["none", "thisServer", "allServers"]).optional(), temperature: v().optional(), maxTokens: v().int(), stopSequences: T(o()).optional(), metadata: t.optional(), tools: T(ut).optional(), toolChoice: pe.optional() }), or = u({ method: A("sampling/createMessage"), params: Xe }), nr = u({ method: A("roots/list"), params: u({ _meta: me(o(), oe()).optional() }).optional() }), ir = u({ ...dt.shape, model: o(), stopReason: o().optional() }), cr = u({ roots: T(Gt) }), lr = u({ action: B(["accept", "decline", "cancel"]), content: me(o(), $e([o(), v(), M(), T(o())])).optional() }), ur = u({ mode: A("url"), message: o(), url: o().url() }), dr = $e([it, ur]), hr = u({ method: A("elicitation/create"), params: dr }), mr = $e([or, nr, hr]), pr = $e([ir, cr, lr]), fr = me(o(), mr), Sr = me(o(), pr), ht = ze({ inputRequests: fr.optional(), requestState: o().optional() }), mt = { inputResponses: Sr.optional(), requestState: o().optional() }, ls = u({ _meta: zt, ...mt }), us = yt({ progressToken: r.optional() });
  function qe(fe, ft) {
    return u({ method: A(fe), params: u({ _meta: zt, ...ft }) });
  }
  function Ie(fe, ft) {
    return u({ method: A(fe), params: u({ _meta: us.optional(), ...ft }).optional() });
  }
  let gr = { name: o(), arguments: me(o(), oe()).optional(), ...mt }, Ae = { cursor: s.optional() }, ds = qe("tools/call", gr), hs = qe("tools/list", Ae), ms = qe("prompts/list", Ae), ps = qe("prompts/get", { name: o(), arguments: me(o(), o()).optional(), ...mt }), fs = qe("resources/list", Ae), Ss = qe("resources/templates/list", Ae), gs = qe("resources/read", { uri: o(), ...mt }), _r = { ref: $e([lt, ct]), argument: u({ name: o(), value: o() }), context: u({ arguments: me(o(), o()).optional() }).optional() }, _s = qe("completion/complete", _r), ys = qe("server/discover", {}), Ct = u({ toolsListChanged: M().optional(), promptsListChanged: M().optional(), resourcesListChanged: M().optional(), resourceSubscriptions: T(o()).optional() }), yr = { notifications: Ct }, vs = qe("subscriptions/listen", yr), bs = Et.extend({ "io.modelcontextprotocol/subscriptionId": a }), Rs = yt({ _meta: bs, resultType: $t.default("complete") }), Ze = { "tools/call": Ie("tools/call", gr), "tools/list": Ie("tools/list", Ae), "prompts/get": Ie("prompts/get", { name: o(), arguments: me(o(), o()).optional() }), "prompts/list": Ie("prompts/list", Ae), "resources/list": Ie("resources/list", Ae), "resources/templates/list": Ie("resources/templates/list", Ae), "resources/read": Ie("resources/read", { uri: o() }), "completion/complete": Ie("completion/complete", _r), "server/discover": Ie("server/discover", {}), "subscriptions/listen": Ie("subscriptions/listen", yr) };
  function Ce(fe) {
    return yt({ _meta: Pt, ...fe });
  }
  let zs = { "tools/call": Ce({ content: T(q), structuredContent: oe().optional(), isError: M().optional() }), "tools/list": Ce({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), tools: T(ut), nextCursor: s.optional() }), "prompts/get": Ce({ description: o().optional(), messages: T(D) }), "prompts/list": Ce({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), prompts: T(I), nextCursor: s.optional() }), "resources/list": Ce({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), resources: T(Se), nextCursor: s.optional() }), "resources/templates/list": Ce({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), resourceTemplates: T(ae), nextCursor: s.optional() }), "resources/read": Ce({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]), contents: T($e([se, le])) }), "completion/complete": Ce({ completion: u({ values: T(o()).max(100), total: v().int().optional(), hasMore: M().optional() }).loose() }), "server/discover": Ce({ ttlMs: v().int().min(0).catch(0), cacheScope: B(["public", "private"]).catch("private"), supportedVersions: T(o()), capabilities: Rt, instructions: o().optional() }), "subscriptions/listen": Ce({}) }, pt = yt({ "io.modelcontextprotocol/subscriptionId": a.optional() }), kt = u({ method: A("notifications/subscriptions/acknowledged"), params: u({ _meta: pt.optional(), notifications: Ct }) }), qt = u({ _meta: pt.optional(), requestId: a, reason: o().optional() }), It = u({ method: A("notifications/cancelled"), params: qt }), wo = { "notifications/cancelled": It, "notifications/progress": N, "notifications/message": W, "notifications/resources/updated": F, "notifications/resources/list_changed": O, "notifications/tools/list_changed": X, "notifications/prompts/list_changed": j, "notifications/subscriptions/acknowledged": kt }, ke = (fe) => u({ jsonrpc: A("2.0"), id: $e([o(), v().int()]), result: fe }).strict();
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, RequestIdSchema: a, RoleSchema: n, LoggingLevelSchema: i, TaskMetadataSchema: c, RelatedTaskMetadataSchema: d, RequestMetaSchema: m, BaseRequestParamsSchema: _, TaskAugmentedRequestParamsSchema: E, NotificationsParamsSchema: P, NotificationSchema: y, IconSchema: b, IconsSchema: p, BaseMetadataSchema: h, ImplementationSchema: g, ClientTasksCapabilitySchema: C, ServerTasksCapabilitySchema: R, ClientCapabilitiesSchema: S, ServerCapabilitiesSchema: k, ProgressSchema: L, ProgressNotificationParamsSchema: H, ProgressNotificationSchema: N, LoggingMessageNotificationParamsSchema: x, LoggingMessageNotificationSchema: W, ResourceContentsSchema: G, TextResourceContentsSchema: se, BlobResourceContentsSchema: le, AnnotationsSchema: ie, ResourceSchema: Se, ResourceTemplateSchema: ae, ResourceListChangedNotificationSchema: O, ResourceUpdatedNotificationParamsSchema: U, ResourceUpdatedNotificationSchema: F, PromptArgumentSchema: w, PromptSchema: I, PromptListChangedNotificationSchema: j, TextContentSchema: J, ImageContentSchema: Y, AudioContentSchema: re, ToolUseContentSchema: Q, EmbeddedResourceSchema: ce, ResourceLinkSchema: Te, ContentBlockSchema: q, PromptMessageSchema: D, ToolAnnotationsSchema: V, ToolListChangedNotificationSchema: X, ModelHintSchema: Z, ModelPreferencesSchema: ee, ToolChoiceSchema: pe, BooleanSchemaSchema: _e, StringSchemaSchema: Re, NumberSchemaSchema: ge, UntitledSingleSelectEnumSchemaSchema: ue, TitledSingleSelectEnumSchemaSchema: Ne, LegacyTitledEnumSchemaSchema: ye, SingleSelectEnumSchemaSchema: De, UntitledMultiSelectEnumSchemaSchema: je, TitledMultiSelectEnumSchemaSchema: Ve, MultiSelectEnumSchemaSchema: Be, EnumSchemaSchema: We, PrimitiveSchemaDefinitionSchema: nt, ElicitRequestFormParamsSchema: it, ResourceTemplateReferenceSchema: ct, PromptReferenceSchema: lt, RootSchema: Gt, ClientCapabilities2026Schema: Bt, ServerCapabilities2026Schema: Rt, RequestMetaEnvelopeSchema: zt, ToolSchema: ut, ToolResultContentSchema: Wt, SamplingMessageContentBlockSchema: wt, SamplingMessageSchema: dt, ResultTypeSchema: $t, ResultMetaSchema: Et, ResultSchema: Yt, PaginatedResultSchema: is, CallToolResultSchema: Tt, ListToolsResultSchema: Xt, ListPromptsResultSchema: Zt, GetPromptResultSchema: Qt, ListResourcesResultSchema: er, ListResourceTemplatesResultSchema: tr, ReadResourceResultSchema: rr, CompleteResultSchema: sr, CacheableResultSchema: cs, DiscoverResultSchema: ar, CreateMessageRequestParamsSchema: Xe, CreateMessageRequestSchema: or, ListRootsRequestSchema: nr, CreateMessageResultSchema: ir, ListRootsResultSchema: cr, ElicitResultSchema: lr, ElicitRequestURLParamsSchema: ur, ElicitRequestParamsSchema: dr, ElicitRequestSchema: hr, InputRequestSchema: mr, InputResponseSchema: pr, InputRequestsSchema: fr, InputResponsesSchema: Sr, InputRequiredResultSchema: ht, InputResponseRequestParamsSchema: ls, CallToolRequestSchema: ds, ListToolsRequestSchema: hs, ListPromptsRequestSchema: ms, GetPromptRequestSchema: ps, ListResourcesRequestSchema: fs, ListResourceTemplatesRequestSchema: Ss, ReadResourceRequestSchema: gs, CompleteRequestSchema: _s, DiscoverRequestSchema: ys, SubscriptionFilterSchema: Ct, SubscriptionsListenRequestSchema: vs, SubscriptionsListenResultMetaSchema: bs, SubscriptionsListenResultSchema: Rs, dispatchRequestSchemas: Ze, dispatchResultSchemas: zs, NotificationMetaSchema: pt, SubscriptionsAcknowledgedNotificationSchema: kt, CancelledNotificationParamsSchema: qt, CancelledNotificationSchema: It, notificationSchemas2026: wo, JSONRPCResultResponseSchema: ke(Yt), CallToolResultResponseSchema: ke($e([Tt, ht])), ListToolsResultResponseSchema: ke(Xt), ListPromptsResultResponseSchema: ke(Zt), GetPromptResultResponseSchema: ke($e([Qt, ht])), ListResourcesResultResponseSchema: ke(er), ListResourceTemplatesResultResponseSchema: ke(tr), ReadResourceResultResponseSchema: ke($e([rr, ht])), CompleteResultResponseSchema: ke(sr), DiscoverResultResponseSchema: ke(ar) };
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
})({}), Cd = class e2 extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
  }
  static [Symbol.hasInstance](t) {
    return Oe(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, t);
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
}, oi = class extends Cd {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
  }
  constructor(e4, t = `Resource not found: ${e4}`) {
    super(ta.InvalidParams, t, { uri: e4 });
  }
  get uri() {
    return this.data.uri;
  }
}, ni = class extends Cd {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
  }
  constructor(e4, t = `URL elicitation${e4.length > 1 ? "s" : ""} required`) {
    super(ta.UrlElicitationRequired, t, { elicitations: e4 });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}, co = class extends Cd {
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
}, ci = class extends Cd {
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
  throw new Cd(ta.InternalError, `Handler for ${e4} returned resultType '${String(r)}', but results of ${e4} only support 'complete' on protocol revision 2026-07-28`);
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
  return ao = { request: { "elicitation/create": u({ method: A("elicitation/create"), params: e4.ElicitRequestParamsSchema }), "sampling/createMessage": u({ method: A("sampling/createMessage"), params: e4.CreateMessageRequestParamsSchema }), "roots/list": u({ method: A("roots/list"), params: yt({}).optional() }) }, response: { "elicitation/create": e4.ElicitResultSchema, "sampling/createMessage": e4.CreateMessageResultSchema, "roots/list": e4.ListRootsResultSchema } }, ao;
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
var ul = { ok: false, reason: "not-in-era" }, dl = [Fe, pOe];
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
  return { [Fe]: e4.protocolVersion, [Nt]: e4.clientInfo, [pOe]: e4.clientCapabilities, ...e4.logLevel !== void 0 && { [Mt]: e4.logLevel } };
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
  if (!Zr(t)) return { kind: "invalid", error: new bi(ii.InvalidResult, `Invalid result for ${e4}: not an object`, { method: e4 }) };
  let r = t.resultType;
  if (r === void 0) return { kind: "invalid", error: new bi(ii.InvalidResult, `Invalid result for ${e4}: missing required resultType — servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, { method: e4, violation: "missing-resultType" }) };
  if (typeof r !== "string") return { kind: "invalid", error: new bi(ii.InvalidResult, `Invalid result for ${e4}: non-string resultType`, { method: e4, resultType: r }) };
  if (r === "input_required") {
    let i = t.inputRequests, l = Zr(i) ? i : {}, c = t.requestState;
    if (Object.keys(l).length === 0 && typeof c !== "string") return { kind: "invalid", error: new bi(ii.InvalidResult, `Invalid result for ${e4}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, { method: e4, violation: "input-required-missing-both" }) };
    return { kind: "input_required", inputRequests: l, ...typeof c === "string" && { requestState: c } };
  }
  if (r === "task") return { kind: "task", result: t };
  if (r !== "complete") return { kind: "invalid", error: new bi(ii.UnsupportedResultType, `Unsupported result type '${r}' for ${e4}`, { resultType: r, method: e4 }) };
  let s = Sl(), a = Object.hasOwn(s, e4) ? s[e4] : void 0;
  if (a !== void 0) {
    let i = a.safeParse(t);
    if (!i.success) return { kind: "invalid", error: new bi(ii.InvalidResult, `Invalid result for ${e4}: ${i.error}`, { method: e4 }) };
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
var pi = [nn, un], gl = Pn({ AnnotationsSchema: () => Ke, AudioContentSchema: () => Vt, BaseMetadataSchema: () => xe, BaseRequestParamsSchema: () => be, BlobResourceContentsSchema: () => Mr, BooleanSchemaSchema: () => Dr, CallToolRequestParamsSchema: () => fa, CallToolRequestSchema: () => Sa, CallToolResultSchema: () => Ar, CancelTaskRequestSchema: () => Lo, CancelTaskResultSchema: () => Uo, CancelledNotificationParamsSchema: () => Ps, CancelledNotificationSchema: () => Tr, ClientCapabilitiesSchema: () => qs, ClientNotificationSchema: () => Vo, ClientRequestSchema: () => Do, ClientResultSchema: () => xo, ClientTasksCapabilitySchema: () => Cs, CompatibilityCallToolResultSchema: () => Yen, CompleteRequestParamsSchema: () => Fa, CompleteRequestSchema: () => Ha, CompleteResultSchema: () => Ka, ContentBlockSchema: () => xt, CreateMessageRequestParamsSchema: () => Ca, CreateMessageRequestSchema: () => ka, CreateMessageResultSchema: () => qa, CreateMessageResultWithToolsSchema: () => Oa, CreateTaskResultSchema: () => ko, CursorSchema: () => Rr, DiscoverRequestSchema: () => Os, DiscoverResultSchema: () => z8e, ElicitRequestFormParamsSchema: () => Kt, ElicitRequestParamsSchema: () => Xen, ElicitRequestSchema: () => Aa, ElicitRequestURLParamsSchema: () => LDt, ElicitResultSchema: () => Da, ElicitationCompleteNotificationParamsSchema: () => La, ElicitationCompleteNotificationSchema: () => Ua, EmbeddedResourceSchema: () => ia, EmptyResultSchema: () => Pr, EnumSchemaSchema: () => ja, GetPromptRequestParamsSchema: () => aa, GetPromptRequestSchema: () => oa, GetPromptResultSchema: () => ua, GetTaskPayloadRequestSchema: () => No, GetTaskPayloadResultSchema: () => Mo, GetTaskRequestSchema: () => Io, GetTaskResultSchema: () => Oo, IconSchema: () => Ts, IconsSchema: () => tt, ImageContentSchema: () => Dt, ImplementationSchema: () => lft, InitializeRequestParamsSchema: () => Is, InitializeRequestSchema: () => Cr, InitializeResultSchema: () => dft, InitializedNotificationSchema: () => kr, JSONArraySchema: () => Eo, JSONObjectSchema: () => de, JSONRPCErrorResponseSchema: () => At, JSONRPCMessageSchema: () => Fae, JSONRPCNotificationSchema: () => Er, JSONRPCRequestSchema: () => $r, JSONRPCResponseSchema: () => Po, JSONRPCResultResponseSchema: () => jt, JSONValueSchema: () => Qe, LegacyTitledEnumSchemaSchema: () => Fr, ListChangedOptionsBaseSchema: () => Lr, ListPromptsRequestSchema: () => sa, ListPromptsResultSchema: () => qen, ListResourceTemplatesRequestSchema: () => Ls, ListResourceTemplatesResultSchema: () => Ken, ListResourcesRequestSchema: () => As, ListResourcesResultSchema: () => K8e, ListRootsRequestSchema: () => Ga, ListRootsResultSchema: () => Ba, ListTasksRequestSchema: () => jo, ListTasksResultSchema: () => Ao, ListToolsRequestSchema: () => pa, ListToolsResultSchema: () => V8e, LoggingLevelSchema: () => Ur, LoggingMessageNotificationParamsSchema: () => va, LoggingMessageNotificationSchema: () => ba, ModelHintSchema: () => Ra, ModelPreferencesSchema: () => za, MultiSelectEnumSchemaSchema: () => Ma, NotificationSchema: () => Pe, NotificationsParamsSchema: () => Ee, NumberSchemaSchema: () => Ht, PaginatedRequestParamsSchema: () => js, PaginatedRequestSchema: () => rt, PaginatedResultSchema: () => st, PingRequestSchema: () => qr, PrimitiveSchemaDefinitionSchema: () => Jr, ProgressNotificationParamsSchema: () => Ms, ProgressNotificationSchema: () => Ir, ProgressSchema: () => Ns, ProgressTokenSchema: () => br, PromptArgumentSchema: () => ra, PromptListChangedNotificationSchema: () => da, PromptMessageSchema: () => la, PromptReferenceSchema: () => xa, PromptSchema: () => Ven, ReadResourceRequestParamsSchema: () => Us, ReadResourceRequestSchema: () => Ds, ReadResourceResultSchema: () => Vs, RelatedTaskMetadataSchema: () => Gen, RequestIdSchema: () => et, RequestMetaSchema: () => zr, RequestSchema: () => he, ResourceContentsSchema: () => Or, ResourceLinkSchema: () => ca, ResourceListChangedNotificationSchema: () => xs, ResourceRequestParamsSchema: () => Lt, ResourceSchema: () => DDt, ResourceTemplateReferenceSchema: () => Va, ResourceTemplateSchema: () => zen, ResourceUpdatedNotificationParamsSchema: () => Qs, ResourceUpdatedNotificationSchema: () => ea, ResultMetaObjectSchema: () => wr, ResultSchema: () => tO, RoleSchema: () => at, RootSchema: () => Ja, RootsListChangedNotificationSchema: () => Wa, SamplingContentSchema: () => Pa, SamplingMessageContentBlockSchema: () => St, SamplingMessageSchema: () => Ta, ServerCapabilitiesSchema: () => MDt, ServerNotificationSchema: () => Ho, ServerRequestSchema: () => Fo, ServerResultSchema: () => Ko, ServerTasksCapabilitySchema: () => ks, SetLevelRequestParamsSchema: () => _a, SetLevelRequestSchema: () => ya, SingleSelectEnumSchemaSchema: () => Na, StringSchemaSchema: () => Ft, SubscribeRequestParamsSchema: () => Fs, SubscribeRequestSchema: () => Hs, SubscriptionFilterSchema: () => jr, SubscriptionsAcknowledgedNotificationParamsSchema: () => Ws, SubscriptionsAcknowledgedNotificationSchema: () => Ys, SubscriptionsListenRequestParamsSchema: () => Gs, SubscriptionsListenRequestSchema: () => Bs, SubscriptionsListenResultMetaSchema: () => Xs, SubscriptionsListenResultSchema: () => Zs, TaskAugmentedRequestParamsSchema: () => _t, TaskCreationParamsSchema: () => Co, TaskMetadataSchema: () => Es, TaskSchema: () => ot, TaskStatusNotificationParamsSchema: () => Xa, TaskStatusNotificationSchema: () => qo, TaskStatusSchema: () => Ya, TextContentSchema: () => Ut, TextResourceContentsSchema: () => Nr, TitledMultiSelectEnumSchemaSchema: () => Kr, TitledSingleSelectEnumSchemaSchema: () => xr, ToolAnnotationsSchema: () => ha, ToolChoiceSchema: () => $a, ToolExecutionSchema: () => ma, ToolListChangedNotificationSchema: () => ga, ToolResultContentSchema: () => Ea, ToolSchema: () => HDt, ToolUseContentSchema: () => na, UnsubscribeRequestParamsSchema: () => Ks, UnsubscribeRequestSchema: () => Js, UntitledMultiSelectEnumSchemaSchema: () => Hr, UntitledSingleSelectEnumSchemaSchema: () => Vr });
var Pte = (e4) => $r.safeParse(e4).success, FTr = (e4) => Er.safeParse(e4).success, mOe = (e4) => jt.safeParse(e4).success, sEe = (e4) => At.safeParse(e4).success;
var fi = (e4) => typeof e4 === "object" && e4 !== null && !Array.isArray(e4) && e4.resultType === "input_required";
var IUn = (e4) => Cr.safeParse(e4).success, UTr = (e4) => kr.safeParse(e4).success;
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
      let E = m.toLowerCase(), P = r.get(E);
      if (P !== void 0) return `x-mcp-header '${m}' is not case-insensitively unique (also declared as '${P}')`;
      r.set(E, m), t.push({ path: i, headerName: m, type: _ });
    }
    let d = c.properties;
    if (d !== null && typeof d === "object") for (let [m, _] of Object.entries(d)) {
      let E = s(_, [...i, m], l);
      if (E !== void 0) return E;
    }
    for (let m of bl) {
      let _ = c[m];
      if (_ === void 0) continue;
      let E = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && Rl.has(m) ? Object.values(_) : [_];
      for (let P of E) {
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
var Si = "=?base64?", gi = "?=";
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
  if (e4.startsWith(Si) && e4.endsWith(gi)) return true;
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
  return wl(e4) ? `${Si}${$l(e4)}${gi}` : e4;
}
function El(e4, t) {
  let r = e4;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function _i(e4, t) {
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
  return X3r(e4, t);
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
    s = ost(e4, { target: tn, io: t });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (t === "output") {
    if (s.type !== void 0) return s;
    return yi(s) ? { type: "object", ...s } : s;
  }
  if (s.type !== void 0 && s.type !== "object") throw Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`);
  return { type: "object", ...s };
}
function yi(e4) {
  if ("properties" in e4 || "patternProperties" in e4 || "additionalProperties" in e4 || "required" in e4) return true;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e4[t];
    if (Array.isArray(r) && r.length > 0) return r.every((s) => s !== null && typeof s === "object" && (s.type === "object" || yi(s)));
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
  let t = ost(e4, { target: tn, io: "input" });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var kl = /\\\.\\d\{(\d+)\}/;
function ql(e4) {
  let t = kl.exec(e4), r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [false, true].flatMap((s) => [false, true].flatMap((a) => r.map((n) => vH({ local: s, offset: a, precision: n }))));
}
function Il(e4, t) {
  let r;
  switch (e4) {
    case "email":
      r = [xci()];
      break;
    case "uri":
      r = [x4e()];
      break;
    case "date":
      r = [Ewi()];
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
    throw new Cd(ta.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
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
  if (s.length > 0) throw new Cd(ta.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
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
  if (!s.success) throw new Cd(ta.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Dl(r, s.error.message)}`);
  let a = rn(r, s.data);
  if (a.length > 0) throw new Cd(ta.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
  let n = (s.data.required ?? []).filter((i) => !Object.prototype.hasOwnProperty.call(s.data.properties, i));
  if (n.length > 0) throw new Cd(ta.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
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
    throw t instanceof Cd ? TypeError(t.message, { cause: t }) : t;
  }
}, elicitUrl(e4) {
  return { method: "elicitation/create", params: { ...e4, mode: "url" } };
}, createMessage(e4) {
  return { method: "sampling/createMessage", params: e4 };
}, listRoots() {
  return { method: "roots/list" };
} });
var Fl = true, Hl = 10, Kl = 250;
function vi(e4) {
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
      s(t.reason instanceof bi ? t.reason : new bi(ii.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
      t?.removeEventListener("abort", n), r();
    }, e4), n = () => {
      clearTimeout(a), s(t?.reason instanceof bi ? t.reason : new bi(ii.RequestTimeout, String(t?.reason)));
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
    if (d += 1, d > t.maxRounds) throw new bi(ii.InputRequiredRoundsExceeded, Gl(r, t.maxRounds), { rounds: t.maxRounds, lastResult: { inputRequests: c.inputRequests, ...c.requestState !== void 0 && { requestState: c.requestState } } });
    a.onprogress?.({ progress: d, message: `Fulfilling input required by '${r}' (round ${d})` });
    let m = Object.entries(c.inputRequests ?? {}), _;
    if (m.length > 0) {
      let y = Wl(i);
      try {
        let b = await Promise.all(m.map(async ([p, h]) => {
          try {
            return [p, await n.dispatchInputRequest(p, h, y.signal)];
          } catch (g) {
            throw y.abort(g), g;
          }
        }));
        _ = Object.fromEntries(b);
      } finally {
        y.dispose();
      }
    } else await Bl(Kl, i);
    let E = { ...a.timeout !== void 0 && { timeout: a.timeout } };
    if (a.maxTotalTimeout !== void 0) {
      let y = Date.now() - l, b = a.maxTotalTimeout - y;
      if (b <= 0) throw new bi(ii.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: a.maxTotalTimeout, totalElapsed: y });
      E.maxTotalTimeout = b;
    }
    let P = await n.retry(Jl(s, _, c.requestState), E);
    if (fi(P)) {
      c = { inputRequests: P.inputRequests ?? {}, ...P.requestState !== void 0 && { requestState: P.requestState } };
      continue;
    }
    return P;
  }
}
var Xl = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"], Zl = { IdJagTokenExchangeResponseSchema: Qa, OAuthClientInformationFullSchema: Wr, OAuthClientInformationSchema: to, OAuthClientMetadataSchema: eo, OAuthClientRegistrationErrorSchema: Jo, OAuthErrorResponseSchema: FDt, OAuthMetadataSchema: cft, OAuthProtectedResourceMetadataSchema: Br, OAuthTokenRevocationRequestSchema: Go, OAuthTokensSchema: $Dt, OpenIdProviderDiscoveryMetadataSchema: NDt, OpenIdProviderMetadataSchema: Za }, Ri = {}, zi = {};
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
var ss = 6e4, tu = [Fe, Nt, pOe, Mt], ru = ["inputResponses", "requestState"];
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
    this._options = e4, this._supportedProtocolVersions = e4?.supportedProtocolVersions ?? aft, this.setNotificationHandler("notifications/cancelled", (t) => {
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
    return Promise.reject(new bi(ii.UnsupportedResultType, `Unsupported result type '${e4.kind}' for ${t.request.method}`, { resultType: e4.kind, method: t.request.method }));
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
    if (t.maxTotalTimeout && r >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e4), new bi(ii.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: t.maxTotalTimeout, totalElapsed: r });
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
      if (s?.(a, n), mOe(a) || sEe(a)) this._onresponse(a);
      else if (Pte(a)) this._onrequest(a, n);
      else if (FTr(a)) this._onnotification(a, n);
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
    let r = new bi(ii.ConnectionClosed, "Connection closed");
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
    let n = this._transport, i = (b, p, h) => {
      let g = { jsonrpc: "2.0", id: r.id, error: { code: b, message: p, ...h !== void 0 && { data: h } } };
      n?.send(g).catch((f) => this._onerror(Error(`Failed to send an error response: ${f}`)));
    };
    if (t?.classification !== void 0) {
      let b = Un(t.classification);
      if (b !== a.era) {
        this._onerror(Error(`Era mismatch on inbound request '${r.method}': classified as ${b} but this instance serves ${a.era}`));
        let p = t.classification.revision ?? b;
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
    let d = (b, p) => this._notificationViaCodec(this._resolveOutboundCodec(b.method), b, { ...p, relatedRequestId: r.id }), m = (b, p, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(b.method), b, p, { ...h, relatedRequestId: r.id }), _ = new AbortController();
    this._requestHandlerAbortControllers.set(r.id, _);
    let E = s.inputResponses === void 0 ? void 0 : ou(s.inputResponses), P = { sessionId: n?.sessionId, mcpReq: { id: r.id, method: r.method, _meta: r.params?._meta, ...s.envelope !== void 0 && { envelope: s.envelope }, ...E !== void 0 && { inputResponses: E.accepted }, ...E !== void 0 && E.droppedKeys.length > 0 && { droppedInputResponseKeys: E.droppedKeys }, requestState: s.requestState === void 0 ? su : mn(s.requestState), signal: _.signal, send: (b, p, h) => {
      let g = this._resolveOutboundCodec(b.method);
      if (this._assertOutboundRequestInEra(g, b.method), en(p)) return m(b, p, h);
      let f = Hn(g, b.method);
      if (f === void 0) throw TypeError(`'${b.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
      return m(b, f, p);
    }, notify: d }, http: t?.authInfo ? { authInfo: t.authInfo } : void 0 }, y = this.buildContext(P, t);
    Promise.resolve().then(() => l(r, y)).then(async (b) => {
      if (_.signal.aborted) return;
      let p;
      try {
        p = a.encodeResult(r.method, b, this._outboundServerInfo());
      } catch (g) {
        this._onerror(Error(`Failed to encode result for ${r.method}: ${g}`)), i(ta.InternalError, "Internal error");
        return;
      }
      let h = { result: p, jsonrpc: "2.0", id: r.id };
      await n?.send(h);
    }, async (b) => {
      if (_.signal.aborted) return;
      let p = Number.isSafeInteger(b.code) ? b.code : ta.InternalError, h = { jsonrpc: "2.0", id: r.id, error: { code: a.encodeErrorCode(p), message: b.message ?? "Internal error", ...b.data !== void 0 && { data: b.data } } };
      await n?.send(h);
    }).catch((b) => this._onerror(Error(`Failed to send response: ${b}`))).finally(() => {
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
    if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), mOe(e4)) r(e4);
    else r(Cd.fromError(e4.error.code, e4.error.message, e4.error.data));
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
    if (Wo(t) && !e4.hasRequestMethod(t)) throw new bi(ii.MethodNotSupportedByProtocolVersion, `Method '${t}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t, era: e4.era });
  }
  _requestWithSchema(e4, t, r) {
    let s = this._resolveOutboundCodec(e4.method);
    return this._assertOutboundRequestInEra(s, e4.method), this._requestWithSchemaViaCodec(s, e4, t, r);
  }
  _requestWithSchemaViaCodec(e4, t, r, s) {
    let { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i, headers: l } = s ?? {}, c = Date.now(), d, m;
    return new Promise((_, E) => {
      let P = (R) => {
        E(R);
      };
      if (!this._transport) {
        P(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) try {
        this.assertCapabilityForMethod(t.method);
      } catch (R) {
        P(R);
        return;
      }
      if (s?.signal?.aborted) {
        let R = s.signal.reason;
        throw R instanceof bi ? R : new bi(ii.RequestTimeout, String(R));
      }
      let y = e4.era === lo && this._transport.hasPerRequestStream === true ? new AbortController() : void 0, b = this._requestMessageId++;
      m = b;
      let p = { ...t, jsonrpc: "2.0", id: b };
      if (s?.onprogress) this._progressHandlers.set(b, s.onprogress), p.params = { ...t.params, _meta: { ...t.params?._meta, progressToken: b } };
      let h = this._envelopeOutbound(p), g = false, f = (R) => {
        if (g) return;
        if (this._progressHandlers.delete(b), y === void 0) this._transport?.send(this._envelopeOutbound({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: b, reason: String(R) } }), { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i }).catch((S) => this._onerror(Error(`Failed to send cancellation: ${S}`)));
        else y.abort();
        E(R instanceof bi ? R : new bi(ii.RequestTimeout, String(R)));
      };
      this._responseHandlers.set(b, (R) => {
        if (s?.signal?.aborted) return;
        if (g = true, R instanceof Error) return E(R);
        let S;
        try {
          S = e4.decodeResult(t.method, R.result);
        } catch (L) {
          return E(L instanceof Error ? L : Error(String(L)));
        }
        if (S.kind === "invalid") return E(S.error);
        if (S.kind === "task") {
          if (s?.allowTask === true && this._capabilities?.extensions?.[ml] !== void 0 && fl(S.result)) return _(S.result);
          return E(new bi(ii.UnsupportedResultType, `Unsupported result type 'task' for ${t.method}`, { method: t.method }));
        }
        if (S.kind === "input_required") {
          if (s?.allowInputRequired === true) return _(lu(S));
          let L = { codec: e4, request: t, resultSchema: r, options: s, flowStartedAt: c, retry: (H, N) => this._requestWithSchemaViaCodec(e4, H === void 0 ? { method: t.method } : { method: t.method, params: H }, r, N) };
          return _(this._resolveNonCompleteResult(S, L));
        }
        let k = S.result;
        Xo(r, k).then((L) => {
          if (L.success) _(L.data);
          else E(new bi(ii.InvalidResult, `Invalid result for ${t.method}: ${L.error}`));
        }, E);
      }), d = () => f(s?.signal?.reason), s?.signal?.addEventListener("abort", d, { once: true });
      let z = s?.timeout ?? ss, C = () => f(new bi(ii.RequestTimeout, "Request timed out", { timeout: z }));
      this._setupTimeout(b, z, s?.maxTotalTimeout, C, s?.resetTimeoutOnProgress ?? false), this._transport.send(h, { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i, headers: l, requestSignal: y?.signal }).catch((R) => {
        this._progressHandlers.delete(b), E(R);
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
    if (!this._transport) throw new bi(ii.NotConnected, "Not connected");
    if (Yo(t.method) && !e4.hasNotificationMethod(t.method)) throw new bi(ii.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t.method, era: e4.era });
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
          if (l.reason === "not-in-era") throw new Cd(ta.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(l.message);
        }
        return Promise.resolve(t(l.value, n));
      };
    } else if (r) s = async (a, n) => {
      let i = await Xo(t.params, { ...a.params });
      if (!i.success) throw new Cd(ta.InvalidParams, `Invalid params for ${e4}: ${i.error}`);
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
          if (n.reason === "not-in-era") throw new Cd(ta.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(n.message);
        }
        return Promise.resolve(t(n.value));
      });
      return;
    }
    if (!r) throw TypeError("setNotificationHandler: handler is required");
    this._notificationHandlers.set(e4, async (s) => {
      let a = await Xo(t.params, { ...s.params });
      if (!a.success) throw new Cd(ta.InvalidParams, `Invalid params for notification ${e4}: ${a.error}`);
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
  throw new bi(ii.SendFailed, `ctx.mcpReq.${e4} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function nu(e4, t, r, s, a) {
  return { sessionId: a, mcpReq: { id: e4, method: t, _meta: r?._meta, requestState: mn(void 0), signal: s, send: () => Kn("send"), notify: () => Kn("notify") } };
}
async function iu(e4, t, r, s, a) {
  if (!io(s) || typeof s.method !== "string") throw new bi(ii.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, { key: r });
  let n = s.method;
  if (!t.hasInputRequestMethod(n)) throw new bi(ii.InvalidResult, `Invalid input request '${r}': '${n}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, { key: r, method: n });
  let i = e4.getRequestHandler(n);
  if (i === void 0) throw new bi(ii.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${n}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, { key: r, method: n });
  let l = io(s.params) ? s.params : void 0;
  return await i({ jsonrpc: "2.0", id: r, method: n, ...l !== void 0 && { params: l } }, e4.buildContext(nu(r, n, l, a, e4.sessionId)));
}
function cu(e4, t) {
  return { ...e4?.signal !== void 0 && { signal: e4.signal }, ...e4?.onprogress !== void 0 && { onprogress: e4.onprogress }, ...e4?.resetTimeoutOnProgress !== void 0 && { resetTimeoutOnProgress: e4.resetTimeoutOnProgress }, ...e4?.headers !== void 0 && { headers: e4.headers }, ...t.timeout !== void 0 && { timeout: t.timeout }, ...t.maxTotalTimeout !== void 0 && { maxTotalTimeout: t.maxTotalTimeout }, ...e4?.allowTask === true && { allowTask: true }, allowInputRequired: true };
}
function Ti(e4, t, r, s) {
  let { codec: a, request: n, options: i, flowStartedAt: l } = s, c = { inputRequests: r.inputRequests, ...r.requestState !== void 0 && { requestState: r.requestState } }, d = { dispatchInputRequest: (m, _, E) => iu(e4, a, m, _, E), retry: (m, _) => s.retry(m, cu(i, _)) };
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
      var E, P, y;
      t.lastIndex = d;
      while (P = t.exec(c)) {
        if (P.index !== d) throw TypeError("invalid parameter format");
        if (d += P[0].length, E = P[1].toLowerCase(), y = P[2], y.charCodeAt(0) === 34) {
          if (y = y.slice(1, -1), y.indexOf("\\") !== -1) y = y.replace(r, "$1");
        }
        _.parameters[E] = y;
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
var ki = 10485760, hbo = class {
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
        return BTr(t);
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
function BTr(e4) {
  return Fae.parse(JSON.parse(e4));
}
function ybo(e4) {
  return JSON.stringify(e4) + `
`;
}
function ts(e4) {
  if (!e4) return {};
  if (e4 instanceof Headers) return Object.fromEntries(e4.entries());
  if (Array.isArray(e4)) return Object.fromEntries(e4);
  return { ...e4 };
}
function UDt(e4 = fetch, t) {
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
    let f = [h[0]], z = 0;
    while (z < g.length) l(f, g[z]), f.push(h[++z]);
    return new s(f);
  }
  e4._ = a;
  let n = new s("+");
  function i(h, ...g) {
    let f = [P(h[0])], z = 0;
    while (z < g.length) f.push(n), l(f, g[z]), f.push(n, P(h[++z]));
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
  function E(h) {
    return new s(P(h));
  }
  e4.stringify = E;
  function P(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e4.safeStringify = P;
  function y(h) {
    return typeof h == "string" && e4.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
  }
  e4.getProperty = y;
  function b(h) {
    if (typeof h == "string" && e4.IDENTIFIER.test(h)) return new s(`${h}`);
    throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e4.getEsmExportName = b;
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
      let _ = this.toName(c), { prefix: E } = _, P = (m = d.key) !== null && m !== void 0 ? m : d.ref, y = this._values[E];
      if (y) {
        let h = y.get(P);
        if (h) return h;
      } else y = this._values[E] = /* @__PURE__ */ new Map();
      y.set(P, _);
      let b = this._scope[E] || (this._scope[E] = []), p = b.length;
      return b[p] = d.ref, _.setValue(d, { property: E, itemIndex: p }), _;
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
      let E = t.nil;
      for (let P in c) {
        let y = c[P];
        if (!y) continue;
        let b = m[P] = m[P] || /* @__PURE__ */ new Map();
        y.forEach((p) => {
          if (b.has(p)) return;
          b.set(p, s.Started);
          let h = d(p);
          if (h) {
            let g = this.opts.es5 ? e4.varKinds.var : e4.varKinds.const;
            E = t._`${E}${g} ${p} = ${h};${this.opts._n}`;
          } else if (h = _ === null || _ === void 0 ? void 0 : _(p)) E = t._`${E}${h}${this.opts._n}`;
          else throw new r(p);
          b.set(p, s.Completed);
        });
      }
      return E;
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
    optimizeNames(w, I) {
      return this;
    }
  }, i = class extends n {
    constructor(w, I, j) {
      super();
      this.varKind = w, this.name = I, this.rhs = j;
    }
    render({ es5: w, _n: I }) {
      let j = w ? r.varKinds.var : this.varKind, J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${j} ${this.name}${J};` + I;
    }
    optimizeNames(w, I) {
      if (!w[this.name.str]) return;
      if (this.rhs) this.rhs = G(this.rhs, w, I);
      return this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }, l = class extends n {
    constructor(w, I, j) {
      super();
      this.lhs = w, this.rhs = I, this.sideEffects = j;
    }
    render({ _n: w }) {
      return `${this.lhs} = ${this.rhs};` + w;
    }
    optimizeNames(w, I) {
      if (this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = G(this.rhs, w, I), this;
    }
    get names() {
      return W(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
    }
  }, c = class extends l {
    constructor(w, I, j, J) {
      super(w, j, J);
      this.op = I;
    }
    render({ _n: w }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + w;
    }
  }, d = class extends n {
    constructor(w) {
      super();
      this.label = w, this.names = {};
    }
    render({ _n: w }) {
      return `${this.label}:` + w;
    }
  }, m = class extends n {
    constructor(w) {
      super();
      this.label = w, this.names = {};
    }
    render({ _n: w }) {
      return `break${this.label ? ` ${this.label}` : ""};` + w;
    }
  }, _ = class extends n {
    constructor(w) {
      super();
      this.error = w;
    }
    render({ _n: w }) {
      return `throw ${this.error};` + w;
    }
    get names() {
      return this.error.names;
    }
  }, E = class extends n {
    constructor(w) {
      super();
      this.code = w;
    }
    render({ _n: w }) {
      return `${this.code};` + w;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(w, I) {
      return this.code = G(this.code, w, I), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }, P = class extends n {
    constructor(w = []) {
      super();
      this.nodes = w;
    }
    render(w) {
      return this.nodes.reduce((I, j) => I + j.render(w), "");
    }
    optimizeNodes() {
      let { nodes: w } = this, I = w.length;
      while (I--) {
        let j = w[I].optimizeNodes();
        if (Array.isArray(j)) w.splice(I, 1, ...j);
        else if (j) w[I] = j;
        else w.splice(I, 1);
      }
      return w.length > 0 ? this : void 0;
    }
    optimizeNames(w, I) {
      let { nodes: j } = this, J = j.length;
      while (J--) {
        let Y = j[J];
        if (Y.optimizeNames(w, I)) continue;
        se(w, Y.names), j.splice(J, 1);
      }
      return j.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((w, I) => x(w, I.names), {});
    }
  }, y = class extends P {
    render(w) {
      return "{" + w._n + super.render(w) + "}" + w._n;
    }
  }, b = class extends P {
  }, p = class extends y {
  };
  p.kind = "else";
  var h = class w extends y {
    constructor(I, j) {
      super(j);
      this.condition = I;
    }
    render(I) {
      let j = `if(${this.condition})` + super.render(I);
      if (this.else) j += "else " + this.else.render(I);
      return j;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let I = this.condition;
      if (I === true) return this.nodes;
      let j = this.else;
      if (j) {
        let J = j.optimizeNodes();
        j = this.else = Array.isArray(J) ? new p(J) : J;
      }
      if (j) {
        if (I === false) return j instanceof w ? j : j.nodes;
        if (this.nodes.length) return this;
        return new w(le(I), j instanceof w ? [j] : j.nodes);
      }
      if (I === false || !this.nodes.length) return;
      return this;
    }
    optimizeNames(I, j) {
      var J;
      if (this.else = (J = this.else) === null || J === void 0 ? void 0 : J.optimizeNames(I, j), !(super.optimizeNames(I, j) || this.else)) return;
      return this.condition = G(this.condition, I, j), this;
    }
    get names() {
      let I = super.names;
      if (W(I, this.condition), this.else) x(I, this.else.names);
      return I;
    }
  };
  h.kind = "if";
  var g = class extends y {
  };
  g.kind = "for";
  var f = class extends g {
    constructor(w) {
      super();
      this.iteration = w;
    }
    render(w) {
      return `for(${this.iteration})` + super.render(w);
    }
    optimizeNames(w, I) {
      if (!super.optimizeNames(w, I)) return;
      return this.iteration = G(this.iteration, w, I), this;
    }
    get names() {
      return x(super.names, this.iteration.names);
    }
  }, z = class extends g {
    constructor(w, I, j, J) {
      super();
      this.varKind = w, this.name = I, this.from = j, this.to = J;
    }
    render(w) {
      let I = w.es5 ? r.varKinds.var : this.varKind, { name: j, from: J, to: Y } = this;
      return `for(${I} ${j}=${J}; ${j}<${Y}; ${j}++)` + super.render(w);
    }
    get names() {
      return W(W(super.names, this.from), this.to);
    }
  }, C = class extends g {
    constructor(w, I, j, J) {
      super();
      this.loop = w, this.varKind = I, this.name = j, this.iterable = J;
    }
    render(w) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
    }
    optimizeNames(w, I) {
      if (!super.optimizeNames(w, I)) return;
      return this.iterable = G(this.iterable, w, I), this;
    }
    get names() {
      return x(super.names, this.iterable.names);
    }
  }, R = class extends y {
    constructor(w, I, j) {
      super();
      this.name = w, this.args = I, this.async = j;
    }
    render(w) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
    }
  };
  R.kind = "func";
  var S = class extends P {
    render(w) {
      return "return " + super.render(w);
    }
  };
  S.kind = "return";
  var k = class extends y {
    render(w) {
      let I = "try" + super.render(w);
      if (this.catch) I += this.catch.render(w);
      if (this.finally) I += this.finally.render(w);
      return I;
    }
    optimizeNodes() {
      var w, I;
      return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (I = this.finally) === null || I === void 0 || I.optimizeNodes(), this;
    }
    optimizeNames(w, I) {
      var j, J;
      return super.optimizeNames(w, I), (j = this.catch) === null || j === void 0 || j.optimizeNames(w, I), (J = this.finally) === null || J === void 0 || J.optimizeNames(w, I), this;
    }
    get names() {
      let w = super.names;
      if (this.catch) x(w, this.catch.names);
      if (this.finally) x(w, this.finally.names);
      return w;
    }
  }, L = class extends y {
    constructor(w) {
      super();
      this.error = w;
    }
    render(w) {
      return `catch(${this.error})` + super.render(w);
    }
  };
  L.kind = "catch";
  var H = class extends y {
    render(w) {
      return "finally" + super.render(w);
    }
  };
  H.kind = "finally";
  var N = class {
    constructor(w, I = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...I, _n: I.lines ? `
` : "" }, this._extScope = w, this._scope = new r.Scope({ parent: w }), this._nodes = [new b()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(w) {
      return this._scope.name(w);
    }
    scopeName(w) {
      return this._extScope.name(w);
    }
    scopeValue(w, I) {
      let j = this._extScope.value(w, I);
      return (this._values[j.prefix] || (this._values[j.prefix] = /* @__PURE__ */ new Set())).add(j), j;
    }
    getScopeValue(w, I) {
      return this._extScope.getValue(w, I);
    }
    scopeRefs(w) {
      return this._extScope.scopeRefs(w, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(w, I, j, J) {
      let Y = this._scope.toName(I);
      if (j !== void 0 && J) this._constants[Y.str] = j;
      return this._leafNode(new i(w, Y, j)), Y;
    }
    const(w, I, j) {
      return this._def(r.varKinds.const, w, I, j);
    }
    let(w, I, j) {
      return this._def(r.varKinds.let, w, I, j);
    }
    var(w, I, j) {
      return this._def(r.varKinds.var, w, I, j);
    }
    assign(w, I, j) {
      return this._leafNode(new l(w, I, j));
    }
    add(w, I) {
      return this._leafNode(new c(w, e4.operators.ADD, I));
    }
    code(w) {
      if (typeof w == "function") w();
      else if (w !== t.nil) this._leafNode(new E(w));
      return this;
    }
    object(...w) {
      let I = ["{"];
      for (let [j, J] of w) {
        if (I.length > 1) I.push(",");
        if (I.push(j), j !== J || this.opts.es5) I.push(":"), (0, t.addCodeArg)(I, J);
      }
      return I.push("}"), new t._Code(I);
    }
    if(w, I, j) {
      if (this._blockNode(new h(w)), I && j) this.code(I).else().code(j).endIf();
      else if (I) this.code(I).endIf();
      else if (j) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(w) {
      return this._elseNode(new h(w));
    }
    else() {
      return this._elseNode(new p());
    }
    endIf() {
      return this._endBlockNode(h, p);
    }
    _for(w, I) {
      if (this._blockNode(w), I) this.code(I).endFor();
      return this;
    }
    for(w, I) {
      return this._for(new f(w), I);
    }
    forRange(w, I, j, J, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
      let re = this._scope.toName(w);
      return this._for(new z(Y, re, I, j), () => J(re));
    }
    forOf(w, I, j, J = r.varKinds.const) {
      let Y = this._scope.toName(w);
      if (this.opts.es5) {
        let re = I instanceof t.Name ? I : this.var("_arr", I);
        return this.forRange("_i", 0, t._`${re}.length`, (Q) => {
          this.var(Y, t._`${re}[${Q}]`), j(Y);
        });
      }
      return this._for(new C("of", J, Y, I), () => j(Y));
    }
    forIn(w, I, j, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(w, t._`Object.keys(${I})`, j);
      let Y = this._scope.toName(w);
      return this._for(new C("in", J, Y, I), () => j(Y));
    }
    endFor() {
      return this._endBlockNode(g);
    }
    label(w) {
      return this._leafNode(new d(w));
    }
    break(w) {
      return this._leafNode(new m(w));
    }
    return(w) {
      let I = new S();
      if (this._blockNode(I), this.code(w), I.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(S);
    }
    try(w, I, j) {
      if (!I && !j) throw Error('CodeGen: "try" without "catch" and "finally"');
      let J = new k();
      if (this._blockNode(J), this.code(w), I) {
        let Y = this.name("e");
        this._currNode = J.catch = new L(Y), I(Y);
      }
      if (j) this._currNode = J.finally = new H(), this.code(j);
      return this._endBlockNode(L, H);
    }
    throw(w) {
      return this._leafNode(new _(w));
    }
    block(w, I) {
      if (this._blockStarts.push(this._nodes.length), w) this.code(w).endBlock(I);
      return this;
    }
    endBlock(w) {
      let I = this._blockStarts.pop();
      if (I === void 0) throw Error("CodeGen: not in self-balancing block");
      let j = this._nodes.length - I;
      if (j < 0 || w !== void 0 && j !== w) throw Error(`CodeGen: wrong number of nodes: ${j} vs ${w} expected`);
      return this._nodes.length = I, this;
    }
    func(w, I = t.nil, j, J) {
      if (this._blockNode(new R(w, I, j)), J) this.code(J).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(R);
    }
    optimize(w = 1) {
      while (w-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(w) {
      return this._currNode.nodes.push(w), this;
    }
    _blockNode(w) {
      this._currNode.nodes.push(w), this._nodes.push(w);
    }
    _endBlockNode(w, I) {
      let j = this._currNode;
      if (j instanceof w || I && j instanceof I) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${I ? `${w.kind}/${I.kind}` : w.kind}"`);
    }
    _elseNode(w) {
      let I = this._currNode;
      if (!(I instanceof h)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = I.else = w, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let w = this._nodes;
      return w[w.length - 1];
    }
    set _currNode(w) {
      let I = this._nodes;
      I[I.length - 1] = w;
    }
  };
  e4.CodeGen = N;
  function x(w, I) {
    for (let j in I) w[j] = (w[j] || 0) + (I[j] || 0);
    return w;
  }
  function W(w, I) {
    return I instanceof t._CodeOrName ? x(w, I.names) : w;
  }
  function G(w, I, j) {
    if (w instanceof t.Name) return J(w);
    if (!Y(w)) return w;
    return new t._Code(w._items.reduce((re, Q) => {
      if (Q instanceof t.Name) Q = J(Q);
      if (Q instanceof t._Code) re.push(...Q._items);
      else re.push(Q);
      return re;
    }, []));
    function J(re) {
      let Q = j[re.str];
      if (Q === void 0 || I[re.str] !== 1) return re;
      return delete I[re.str], Q;
    }
    function Y(re) {
      return re instanceof t._Code && re._items.some((Q) => Q instanceof t.Name && I[Q.str] === 1 && j[Q.str] !== void 0);
    }
  }
  function se(w, I) {
    for (let j in I) w[j] = (w[j] || 0) - (I[j] || 0);
  }
  function le(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : t._`!${F(w)}`;
  }
  e4.not = le;
  let ie = U(e4.operators.AND);
  function Se(...w) {
    return w.reduce(ie);
  }
  e4.and = Se;
  let ae = U(e4.operators.OR);
  function O(...w) {
    return w.reduce(ae);
  }
  e4.or = O;
  function U(w) {
    return (I, j) => I === t.nil ? j : j === t.nil ? I : t._`${F(I)} ${w} ${F(j)}`;
  }
  function F(w) {
    return w instanceof t.Name ? w : t._`(${w})`;
  }
}), ne = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.checkStrictMode = e4.getErrorPath = e4.Type = e4.useFunc = e4.setEvaluated = e4.evaluatedPropsToName = e4.mergeEvaluated = e4.eachItem = e4.unescapeJsonPointer = e4.escapeJsonPointer = e4.escapeFragment = e4.unescapeFragment = e4.schemaRefOrVal = e4.schemaHasRulesButRef = e4.schemaHasRules = e4.checkUnknownRules = e4.alwaysValidSchema = e4.toHash = void 0;
  let t = te(), r = mo();
  function s(R) {
    let S = {};
    for (let k of R) S[k] = true;
    return S;
  }
  e4.toHash = s;
  function a(R, S) {
    if (typeof S == "boolean") return S;
    if (Object.keys(S).length === 0) return true;
    return n(R, S), !i(S, R.self.RULES.all);
  }
  e4.alwaysValidSchema = a;
  function n(R, S = R.schema) {
    let { opts: k, self: L } = R;
    if (!k.strictSchema) return;
    if (typeof S === "boolean") return;
    let H = L.RULES.keywords;
    for (let N in S) if (!H[N]) C(R, `unknown keyword: "${N}"`);
  }
  e4.checkUnknownRules = n;
  function i(R, S) {
    if (typeof R == "boolean") return !R;
    for (let k in R) if (S[k]) return true;
    return false;
  }
  e4.schemaHasRules = i;
  function l(R, S) {
    if (typeof R == "boolean") return !R;
    for (let k in R) if (k !== "$ref" && S.all[k]) return true;
    return false;
  }
  e4.schemaHasRulesButRef = l;
  function c({ topSchemaRef: R, schemaPath: S }, k, L, H) {
    if (!H) {
      if (typeof k == "number" || typeof k == "boolean") return k;
      if (typeof k == "string") return t._`${k}`;
    }
    return t._`${R}${S}${(0, t.getProperty)(L)}`;
  }
  e4.schemaRefOrVal = c;
  function d(R) {
    return E(decodeURIComponent(R));
  }
  e4.unescapeFragment = d;
  function m(R) {
    return encodeURIComponent(_(R));
  }
  e4.escapeFragment = m;
  function _(R) {
    if (typeof R == "number") return `${R}`;
    return R.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e4.escapeJsonPointer = _;
  function E(R) {
    return R.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e4.unescapeJsonPointer = E;
  function P(R, S) {
    if (Array.isArray(R)) for (let k of R) S(k);
    else S(R);
  }
  e4.eachItem = P;
  function y({ mergeNames: R, mergeToName: S, mergeValues: k, resultToName: L }) {
    return (H, N, x, W) => {
      let G = x === void 0 ? N : x instanceof t.Name ? (N instanceof t.Name ? R(H, N, x) : S(H, N, x), x) : N instanceof t.Name ? (S(H, x, N), N) : k(N, x);
      return W === t.Name && !(G instanceof t.Name) ? L(H, G) : G;
    };
  }
  e4.mergeEvaluated = { props: y({ mergeNames: (R, S, k) => R.if(t._`${k} !== true && ${S} !== undefined`, () => {
    R.if(t._`${S} === true`, () => R.assign(k, true), () => R.assign(k, t._`${k} || {}`).code(t._`Object.assign(${k}, ${S})`));
  }), mergeToName: (R, S, k) => R.if(t._`${k} !== true`, () => {
    if (S === true) R.assign(k, true);
    else R.assign(k, t._`${k} || {}`), p(R, k, S);
  }), mergeValues: (R, S) => R === true ? true : { ...R, ...S }, resultToName: b }), items: y({ mergeNames: (R, S, k) => R.if(t._`${k} !== true && ${S} !== undefined`, () => R.assign(k, t._`${S} === true ? true : ${k} > ${S} ? ${k} : ${S}`)), mergeToName: (R, S, k) => R.if(t._`${k} !== true`, () => R.assign(k, S === true ? true : t._`${k} > ${S} ? ${k} : ${S}`)), mergeValues: (R, S) => R === true ? true : Math.max(R, S), resultToName: (R, S) => R.var("items", S) }) };
  function b(R, S) {
    if (S === true) return R.var("props", true);
    let k = R.var("props", t._`{}`);
    if (S !== void 0) p(R, k, S);
    return k;
  }
  e4.evaluatedPropsToName = b;
  function p(R, S, k) {
    Object.keys(k).forEach((L) => R.assign(t._`${S}${(0, t.getProperty)(L)}`, true));
  }
  e4.setEvaluated = p;
  let h = {};
  function g(R, S) {
    return R.scopeValue("func", { ref: S, code: h[S.code] || (h[S.code] = new r._Code(S.code)) });
  }
  e4.useFunc = g;
  var f;
  (function(R) {
    R[R.Num = 0] = "Num", R[R.Str = 1] = "Str";
  })(f || (e4.Type = f = {}));
  function z(R, S, k) {
    if (R instanceof t.Name) {
      let L = S === f.Num;
      return k ? L ? t._`"[" + ${R} + "]"` : t._`"['" + ${R} + "']"` : L ? t._`"/" + ${R}` : t._`"/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, t.getProperty)(R).toString() : "/" + _(R);
  }
  e4.getErrorPath = z;
  function C(R, S, k = R.opts.strictSchema) {
    if (!k) return;
    if (S = `strict mode: ${S}`, k === true) throw Error(S);
    R.self.logger.warn(S);
  }
  e4.checkStrictMode = C;
}), Le = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { data: new t.Name("data"), valCxt: new t.Name("valCxt"), instancePath: new t.Name("instancePath"), parentData: new t.Name("parentData"), parentDataProperty: new t.Name("parentDataProperty"), rootData: new t.Name("rootData"), dynamicAnchors: new t.Name("dynamicAnchors"), vErrors: new t.Name("vErrors"), errors: new t.Name("errors"), this: new t.Name("this"), self: new t.Name("self"), scope: new t.Name("scope"), json: new t.Name("json"), jsonPos: new t.Name("jsonPos"), jsonLen: new t.Name("jsonLen"), jsonPart: new t.Name("jsonPart") };
  e4.default = r;
}), fo = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendErrors = e4.resetErrorsCount = e4.reportExtraError = e4.reportError = e4.keyword$DataError = e4.keywordError = void 0;
  let t = te(), r = ne(), s = Le();
  e4.keywordError = { message: ({ keyword: p }) => t.str`must pass "${p}" keyword validation` }, e4.keyword$DataError = { message: ({ keyword: p, schemaType: h }) => h ? t.str`"${p}" keyword must be ${h} ($data)` : t.str`"${p}" keyword is invalid ($data)` };
  function a(p, h = e4.keywordError, g, f) {
    let { it: z } = p, { gen: C, compositeRule: R, allErrors: S } = z, k = _(p, h, g);
    if (f !== null && f !== void 0 ? f : R || S) c(C, k);
    else d(z, t._`[${k}]`);
  }
  e4.reportError = a;
  function n(p, h = e4.keywordError, g) {
    let { it: f } = p, { gen: z, compositeRule: C, allErrors: R } = f;
    if (c(z, _(p, h, g)), !(C || R)) d(f, s.default.vErrors);
  }
  e4.reportExtraError = n;
  function i(p, h) {
    p.assign(s.default.errors, h), p.if(t._`${s.default.vErrors} !== null`, () => p.if(h, () => p.assign(t._`${s.default.vErrors}.length`, h), () => p.assign(s.default.vErrors, null)));
  }
  e4.resetErrorsCount = i;
  function l({ gen: p, keyword: h, schemaValue: g, data: f, errsCount: z, it: C }) {
    if (z === void 0) throw Error("ajv implementation error");
    let R = p.name("err");
    p.forRange("i", z, s.default.errors, (S) => {
      if (p.const(R, t._`${s.default.vErrors}[${S}]`), p.if(t._`${R}.instancePath === undefined`, () => p.assign(t._`${R}.instancePath`, (0, t.strConcat)(s.default.instancePath, C.errorPath))), p.assign(t._`${R}.schemaPath`, t.str`${C.errSchemaPath}/${h}`), C.opts.verbose) p.assign(t._`${R}.schema`, g), p.assign(t._`${R}.data`, f);
    });
  }
  e4.extendErrors = l;
  function c(p, h) {
    let g = p.const("err", h);
    p.if(t._`${s.default.vErrors} === null`, () => p.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`), p.code(t._`${s.default.errors}++`);
  }
  function d(p, h) {
    let { gen: g, validateName: f, schemaEnv: z } = p;
    if (z.$async) g.throw(t._`new ${p.ValidationError}(${h})`);
    else g.assign(t._`${f}.errors`, h), g.return(false);
  }
  let m = { keyword: new t.Name("keyword"), schemaPath: new t.Name("schemaPath"), params: new t.Name("params"), propertyName: new t.Name("propertyName"), message: new t.Name("message"), schema: new t.Name("schema"), parentSchema: new t.Name("parentSchema") };
  function _(p, h, g) {
    let { createErrors: f } = p.it;
    if (f === false) return t._`{}`;
    return E(p, h, g);
  }
  function E(p, h, g = {}) {
    let { gen: f, it: z } = p, C = [P(z, g), y(p, g)];
    return b(p, h, C), f.object(...C);
  }
  function P({ errorPath: p }, { instancePath: h }) {
    let g = h ? t.str`${p}${(0, r.getErrorPath)(h, r.Type.Str)}` : p;
    return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
  }
  function y({ keyword: p, it: { errSchemaPath: h } }, { schemaPath: g, parentSchema: f }) {
    let z = f ? h : t.str`${h}/${p}`;
    if (g) z = t.str`${z}${(0, r.getErrorPath)(g, r.Type.Str)}`;
    return [m.schemaPath, z];
  }
  function b(p, { params: h, message: g }, f) {
    let { keyword: z, data: C, schemaValue: R, it: S } = p, { opts: k, propertyName: L, topSchemaRef: H, schemaPath: N } = S;
    if (f.push([m.keyword, z], [m.params, typeof h == "function" ? h(p) : h || t._`{}`]), k.messages) f.push([m.message, typeof g == "function" ? g(p) : g]);
    if (k.verbose) f.push([m.schema, R], [m.parentSchema, t._`${H}${N}`], [s.default.data, C]);
    if (L) f.push([m.propertyName, L]);
  }
}), hu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.boolOrEmptySchema = e4.topBoolOrEmptySchema = void 0;
  let t = fo(), r = te(), s = Le(), a = { message: "boolean schema is false" };
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
    let { gen: m, data: _ } = c, E = { gen: m, keyword: "false schema", data: _, schema: false, schemaCode: false, schemaValue: false, params: {}, it: c };
    (0, t.reportError)(E, a, void 0, d);
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
    let z = c(f.type);
    if (z.includes("null")) {
      if (f.nullable === false) throw Error("type: null contradicts nullable: false");
    } else {
      if (!z.length && f.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (f.nullable === true) z.push("null");
    }
    return z;
  }
  e4.getSchemaTypes = l;
  function c(f) {
    let z = Array.isArray(f) ? f : f ? [f] : [];
    if (z.every(t.isJSONType)) return z;
    throw Error("type must be JSONType or JSONType[]: " + z.join(","));
  }
  e4.getJSONTypes = c;
  function d(f, z) {
    let { gen: C, data: R, opts: S } = f, k = _(z, S.coerceTypes), L = z.length > 0 && !(k.length === 0 && z.length === 1 && (0, r.schemaHasRulesForType)(f, z[0]));
    if (L) {
      let H = b(z, R, S.strictNumbers, i.Wrong);
      C.if(H, () => {
        if (k.length) E(f, z, k);
        else h(f);
      });
    }
    return L;
  }
  e4.coerceAndCheckDataType = d;
  let m = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function _(f, z) {
    return z ? f.filter((C) => m.has(C) || z === "array" && C === "array") : [];
  }
  function E(f, z, C) {
    let { gen: R, data: S, opts: k } = f, L = R.let("dataType", a._`typeof ${S}`), H = R.let("coerced", a._`undefined`);
    if (k.coerceTypes === "array") R.if(a._`${L} == 'object' && Array.isArray(${S}) && ${S}.length == 1`, () => R.assign(S, a._`${S}[0]`).assign(L, a._`typeof ${S}`).if(b(z, S, k.strictNumbers), () => R.assign(H, S)));
    R.if(a._`${H} !== undefined`);
    for (let x of C) if (m.has(x) || x === "array" && k.coerceTypes === "array") N(x);
    R.else(), h(f), R.endIf(), R.if(a._`${H} !== undefined`, () => {
      R.assign(S, H), P(f, H);
    });
    function N(x) {
      switch (x) {
        case "string":
          R.elseIf(a._`${L} == "number" || ${L} == "boolean"`).assign(H, a._`"" + ${S}`).elseIf(a._`${S} === null`).assign(H, a._`""`);
          return;
        case "number":
          R.elseIf(a._`${L} == "boolean" || ${S} === null
              || (${L} == "string" && ${S} && ${S} == +${S})`).assign(H, a._`+${S}`);
          return;
        case "integer":
          R.elseIf(a._`${L} === "boolean" || ${S} === null
              || (${L} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(H, a._`+${S}`);
          return;
        case "boolean":
          R.elseIf(a._`${S} === "false" || ${S} === 0 || ${S} === null`).assign(H, false).elseIf(a._`${S} === "true" || ${S} === 1`).assign(H, true);
          return;
        case "null":
          R.elseIf(a._`${S} === "" || ${S} === 0 || ${S} === false`), R.assign(H, null);
          return;
        case "array":
          R.elseIf(a._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${S} === null`).assign(H, a._`[${S}]`);
      }
    }
  }
  function P({ gen: f, parentData: z, parentDataProperty: C }, R) {
    f.if(a._`${z} !== undefined`, () => f.assign(a._`${z}[${C}]`, R));
  }
  function y(f, z, C, R = i.Correct) {
    let S = R === i.Correct ? a.operators.EQ : a.operators.NEQ, k;
    switch (f) {
      case "null":
        return a._`${z} ${S} null`;
      case "array":
        k = a._`Array.isArray(${z})`;
        break;
      case "object":
        k = a._`${z} && typeof ${z} == "object" && !Array.isArray(${z})`;
        break;
      case "integer":
        k = L(a._`!(${z} % 1) && !isNaN(${z})`);
        break;
      case "number":
        k = L();
        break;
      default:
        return a._`typeof ${z} ${S} ${f}`;
    }
    return R === i.Correct ? k : (0, a.not)(k);
    function L(H = a.nil) {
      return (0, a.and)(a._`typeof ${z} == "number"`, H, C ? a._`isFinite(${z})` : a.nil);
    }
  }
  e4.checkDataType = y;
  function b(f, z, C, R) {
    if (f.length === 1) return y(f[0], z, C, R);
    let S, k = (0, n.toHash)(f);
    if (k.array && k.object) {
      let L = a._`typeof ${z} != "object"`;
      S = k.null ? L : a._`!${z} || ${L}`, delete k.null, delete k.array, delete k.object;
    } else S = a.nil;
    if (k.number) delete k.integer;
    for (let L in k) S = (0, a.and)(S, y(L, z, C, R));
    return S;
  }
  e4.checkDataTypes = b;
  let p = { message: ({ schema: f }) => `must be ${f}`, params: ({ schema: f, schemaValue: z }) => typeof f == "string" ? a._`{type: ${f}}` : a._`{type: ${z}}` };
  function h(f) {
    let z = g(f);
    (0, s.reportError)(z, p);
  }
  e4.reportTypeError = h;
  function g(f) {
    let { gen: z, data: C, schema: R } = f, S = (0, n.schemaRefOrVal)(f, R, "type");
    return { gen: z, keyword: "type", data: C, schema: R.type, schemaCode: S, schemaValue: S, parentSchema: R, params: {}, it: f };
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
    let E = t._`${m}${(0, t.getProperty)(i)}`;
    if (d) {
      (0, r.checkStrictMode)(n, `default is ignored for: ${E}`);
      return;
    }
    let P = t._`${E} === undefined`;
    if (_.useDefaults === "empty") P = t._`${P} || ${E} === null || ${E} === ""`;
    c.if(P, t._`${E} = ${(0, t.stringify)(l)}`);
  }
}), Ue = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateUnion = e4.validateArray = e4.usePattern = e4.callValidateCode = e4.schemaProperties = e4.allSchemaProperties = e4.noPropertyInData = e4.propertyInData = e4.isOwnProperty = e4.hasPropFunc = e4.reportMissingProp = e4.checkMissingProp = e4.checkReportMissingProp = void 0;
  let t = te(), r = ne(), s = Le(), a = ne();
  function n(f, z) {
    let { gen: C, data: R, it: S } = f;
    C.if(_(C, R, z, S.opts.ownProperties), () => {
      f.setParams({ missingProperty: t._`${z}` }, true), f.error();
    });
  }
  e4.checkReportMissingProp = n;
  function i({ gen: f, data: z, it: { opts: C } }, R, S) {
    return (0, t.or)(...R.map((k) => (0, t.and)(_(f, z, k, C.ownProperties), t._`${S} = ${k}`)));
  }
  e4.checkMissingProp = i;
  function l(f, z) {
    f.setParams({ missingProperty: z }, true), f.error();
  }
  e4.reportMissingProp = l;
  function c(f) {
    return f.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: t._`Object.prototype.hasOwnProperty` });
  }
  e4.hasPropFunc = c;
  function d(f, z, C) {
    return t._`${c(f)}.call(${z}, ${C})`;
  }
  e4.isOwnProperty = d;
  function m(f, z, C, R) {
    let S = t._`${z}${(0, t.getProperty)(C)} !== undefined`;
    return R ? t._`${S} && ${d(f, z, C)}` : S;
  }
  e4.propertyInData = m;
  function _(f, z, C, R) {
    let S = t._`${z}${(0, t.getProperty)(C)} === undefined`;
    return R ? (0, t.or)(S, (0, t.not)(d(f, z, C))) : S;
  }
  e4.noPropertyInData = _;
  function E(f) {
    return f ? Object.keys(f).filter((z) => z !== "__proto__") : [];
  }
  e4.allSchemaProperties = E;
  function P(f, z) {
    return E(z).filter((C) => !(0, r.alwaysValidSchema)(f, z[C]));
  }
  e4.schemaProperties = P;
  function y({ schemaCode: f, data: z, it: { gen: C, topSchemaRef: R, schemaPath: S, errorPath: k }, it: L }, H, N, x) {
    let W = x ? t._`${f}, ${z}, ${R}${S}` : z, G = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, k)], [s.default.parentData, L.parentData], [s.default.parentDataProperty, L.parentDataProperty], [s.default.rootData, s.default.rootData]];
    if (L.opts.dynamicRef) G.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    let se = t._`${W}, ${C.object(...G)}`;
    return N !== t.nil ? t._`${H}.call(${N}, ${se})` : t._`${H}(${se})`;
  }
  e4.callValidateCode = y;
  let b = t._`new RegExp`;
  function p({ gen: f, it: { opts: z } }, C) {
    let R = z.unicodeRegExp ? "u" : "", { regExp: S } = z.code, k = S(C, R);
    return f.scopeValue("pattern", { key: k.toString(), ref: k, code: t._`${S.code === "new RegExp" ? b : (0, a.useFunc)(f, S)}(${C}, ${R})` });
  }
  e4.usePattern = p;
  function h(f) {
    let { gen: z, data: C, keyword: R, it: S } = f, k = z.name("valid");
    if (S.allErrors) {
      let H = z.let("valid", true);
      return L(() => z.assign(H, false)), H;
    }
    return z.var(k, true), L(() => z.break()), k;
    function L(H) {
      let N = z.const("len", t._`${C}.length`);
      z.forRange("i", 0, N, (x) => {
        f.subschema({ keyword: R, dataProp: x, dataPropType: r.Type.Num }, k), z.if((0, t.not)(k), H);
      });
    }
  }
  e4.validateArray = h;
  function g(f) {
    let { gen: z, schema: C, keyword: R, it: S } = f;
    if (!Array.isArray(C)) throw Error("ajv implementation error");
    if (C.some((H) => (0, r.alwaysValidSchema)(S, H)) && !S.opts.unevaluated) return;
    let k = z.let("valid", false), L = z.name("_valid");
    z.block(() => C.forEach((H, N) => {
      let x = f.subschema({ keyword: R, schemaProp: N, compositeRule: true }, L);
      if (z.assign(k, t._`${k} || ${L}`), !f.mergeValidEvaluated(x, L)) z.if((0, t.not)(k));
    })), f.result(k, () => f.reset(), () => f.error(true));
  }
  e4.validateUnion = g;
}), pu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateKeywordUsage = e4.validSchemaType = e4.funcKeywordCode = e4.macroKeywordCode = void 0;
  let t = te(), r = Le(), s = Ue(), a = fo();
  function n(P, y) {
    let { gen: b, keyword: p, schema: h, parentSchema: g, it: f } = P, z = y.macro.call(f.self, h, g, f), C = m(b, p, z);
    if (f.opts.validateSchema !== false) f.self.validateSchema(z, true);
    let R = b.name("valid");
    P.subschema({ schema: z, schemaPath: t.nil, errSchemaPath: `${f.errSchemaPath}/${p}`, topSchemaRef: C, compositeRule: true }, R), P.pass(R, () => P.error(true));
  }
  e4.macroKeywordCode = n;
  function i(P, y) {
    var b;
    let { gen: p, keyword: h, schema: g, parentSchema: f, $data: z, it: C } = P;
    d(C, y);
    let R = m(p, h, !z && y.compile ? y.compile.call(C.self, g, f, C) : y.validate), S = p.let("valid");
    P.block$data(S, k), P.ok((b = y.valid) !== null && b !== void 0 ? b : S);
    function k() {
      if (y.errors === false) {
        if (N(), y.modifying) l(P);
        x(() => P.error());
      } else {
        let W = y.async ? L() : H();
        if (y.modifying) l(P);
        x(() => c(P, W));
      }
    }
    function L() {
      let W = p.let("ruleErrs", null);
      return p.try(() => N(t._`await `), (G) => p.assign(S, false).if(t._`${G} instanceof ${C.ValidationError}`, () => p.assign(W, t._`${G}.errors`), () => p.throw(G))), W;
    }
    function H() {
      let W = t._`${R}.errors`;
      return p.assign(W, null), N(t.nil), W;
    }
    function N(W = y.async ? t._`await ` : t.nil) {
      let G = C.opts.passContext ? r.default.this : r.default.self, se = !("compile" in y && !z || y.schema === false);
      p.assign(S, t._`${W}${(0, s.callValidateCode)(P, R, G, se)}`, y.modifying);
    }
    function x(W) {
      var G;
      p.if((0, t.not)((G = y.valid) !== null && G !== void 0 ? G : S), W);
    }
  }
  e4.funcKeywordCode = i;
  function l(P) {
    let { gen: y, data: b, it: p } = P;
    y.if(p.parentData, () => y.assign(b, t._`${p.parentData}[${p.parentDataProperty}]`));
  }
  function c(P, y) {
    let { gen: b } = P;
    b.if(t._`Array.isArray(${y})`, () => {
      b.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, a.extendErrors)(P);
    }, () => P.error());
  }
  function d({ schemaEnv: P }, y) {
    if (y.async && !P.$async) throw Error("async keyword in sync schema");
  }
  function m(P, y, b) {
    if (b === void 0) throw Error(`keyword "${y}" failed to compile`);
    return P.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, t.stringify)(b) });
  }
  function _(P, y, b = false) {
    return !y.length || y.some((p) => p === "array" ? Array.isArray(P) : p === "object" ? P && typeof P == "object" && !Array.isArray(P) : typeof P == p || b && typeof P > "u");
  }
  e4.validSchemaType = _;
  function E({ schema: P, opts: y, self: b, errSchemaPath: p }, h, g) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g) throw Error("ajv implementation error");
    let f = h.dependencies;
    if (f === null || f === void 0 ? void 0 : f.some((z) => !Object.prototype.hasOwnProperty.call(P, z))) throw Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (h.validateSchema) {
      if (!h.validateSchema(P[g])) {
        let z = `keyword "${g}" value is invalid at path "${p}": ` + b.errorsText(h.validateSchema.errors);
        if (y.validateSchema === "log") b.logger.error(z);
        else throw Error(z);
      }
    }
  }
  e4.validateKeywordUsage = E;
}), fu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendSubschemaMode = e4.extendSubschemaData = e4.getSubschema = void 0;
  let t = te(), r = ne();
  function s(i, { keyword: l, schemaProp: c, schema: d, schemaPath: m, errSchemaPath: _, topSchemaRef: E }) {
    if (l !== void 0 && d !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (l !== void 0) {
      let P = i.schema[l];
      return c === void 0 ? { schema: P, schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}`, errSchemaPath: `${i.errSchemaPath}/${l}` } : { schema: P[c], schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}${(0, t.getProperty)(c)}`, errSchemaPath: `${i.errSchemaPath}/${l}/${(0, r.escapeFragment)(c)}` };
    }
    if (d !== void 0) {
      if (m === void 0 || _ === void 0 || E === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: d, schemaPath: m, topSchemaRef: E, errSchemaPath: _ };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  e4.getSubschema = s;
  function a(i, l, { dataProp: c, dataPropType: d, data: m, dataTypes: _, propertyName: E }) {
    if (m !== void 0 && c !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: P } = l;
    if (c !== void 0) {
      let { errorPath: b, dataPathArr: p, opts: h } = l;
      y(P.let("data", t._`${l.data}${(0, t.getProperty)(c)}`, true)), i.errorPath = t.str`${b}${(0, r.getErrorPath)(c, d, h.jsPropertySyntax)}`, i.parentDataProperty = t._`${c}`, i.dataPathArr = [...p, i.parentDataProperty];
    }
    if (m !== void 0) {
      if (y(m instanceof t.Name ? m : P.let("data", m, true)), E !== void 0) i.propertyName = E;
    }
    if (_) i.dataTypes = _;
    function y(b) {
      i.data = b, i.dataLevel = l.dataLevel + 1, i.dataTypes = [], l.definedProperties = /* @__PURE__ */ new Set(), i.parentData = l.data, i.dataNames = [...l.dataNames, b];
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
  function s(n, i, l, c, d, m, _, E, P, y) {
    if (c && typeof c == "object" && !Array.isArray(c)) {
      i(c, d, m, _, E, P, y);
      for (var b in c) {
        var p = c[b];
        if (Array.isArray(p)) {
          if (b in r.arrayKeywords) for (var h = 0; h < p.length; h++) s(n, i, l, p[h], d + "/" + b + "/" + h, m, d, b, c, h);
        } else if (b in r.propsKeywords) {
          if (p && typeof p == "object") for (var g in p) s(n, i, l, p[g], d + "/" + b + "/" + a(g), m, d, b, c, g);
        } else if (b in r.keywords || n.allKeys && !(b in r.skipKeywords)) s(n, i, l, p, d + "/" + b, m, d, b, c);
      }
      l(c, d, m, _, E, P, y);
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
    if (g !== false) h = E(h);
    return m(p, p.parse(h));
  }
  e4.getFullPath = d;
  function m(p, h) {
    return p.serialize(h).split("#")[0] + "#";
  }
  e4._getFullPath = m;
  let _ = /#\/?$/;
  function E(p) {
    return p ? p.replace(_, "") : "";
  }
  e4.normalizeId = E;
  function P(p, h, g) {
    return g = E(g), p.resolve(h, g);
  }
  e4.resolveUrl = P;
  let y = /^[a-z_][-a-z0-9._]*$/i;
  function b(p, h) {
    if (typeof p == "boolean") return {};
    let { schemaId: g, uriResolver: f } = this.opts, z = E(p[g] || h), C = { "": z }, R = d(f, z, false), S = {}, k = /* @__PURE__ */ new Set();
    return s(p, { allKeys: true }, (N, x, W, G) => {
      if (G === void 0) return;
      let se = R + x, le = C[G];
      if (typeof N[g] == "string") le = ie.call(this, N[g]);
      Se.call(this, N.$anchor), Se.call(this, N.$dynamicAnchor), C[x] = le;
      function ie(ae) {
        let O = this.opts.uriResolver.resolve;
        if (ae = E(le ? O(le, ae) : ae), k.has(ae)) throw H(ae);
        k.add(ae);
        let U = this.refs[ae];
        if (typeof U == "string") U = this.refs[U];
        if (typeof U == "object") L(N, U.schema, ae);
        else if (ae !== E(se)) if (ae[0] === "#") L(N, S[ae], ae), S[ae] = N;
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
    function L(N, x, W) {
      if (x !== void 0 && !r(N, x)) throw H(W);
    }
    function H(N) {
      return Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  e4.getSchemaRefs = b;
}), as = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getData = e4.KeywordCxt = e4.validateFunctionCode = void 0;
  let t = hu(), r = po(), s = Oi(), a = po(), n = mu(), i = pu(), l = fu(), c = te(), d = Le(), m = So(), _ = ne(), E = fo();
  function P(q) {
    if (R(q)) {
      if (k(q), C(q)) {
        h(q);
        return;
      }
    }
    y(q, () => (0, t.topBoolOrEmptySchema)(q));
  }
  e4.validateFunctionCode = P;
  function y({ gen: q, validateName: D, schema: V, schemaEnv: X, opts: Z }, ee) {
    if (Z.code.es5) q.func(D, c._`${d.default.data}, ${d.default.valCxt}`, X.$async, () => {
      q.code(c._`"use strict"; ${f(V, Z)}`), p(q, Z), q.code(ee);
    });
    else q.func(D, c._`${d.default.data}, ${b(Z)}`, X.$async, () => q.code(f(V, Z)).code(ee));
  }
  function b(q) {
    return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${q.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
  }
  function p(q, D) {
    q.if(d.default.valCxt, () => {
      if (q.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`), q.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`), q.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`), q.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`), D.dynamicRef) q.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      if (q.var(d.default.instancePath, c._`""`), q.var(d.default.parentData, c._`undefined`), q.var(d.default.parentDataProperty, c._`undefined`), q.var(d.default.rootData, d.default.data), D.dynamicRef) q.var(d.default.dynamicAnchors, c._`{}`);
    });
  }
  function h(q) {
    let { schema: D, opts: V, gen: X } = q;
    y(q, () => {
      if (V.$comment && D.$comment) G(q);
      if (N(q), X.let(d.default.vErrors, null), X.let(d.default.errors, 0), V.unevaluated) g(q);
      L(q), se(q);
    });
  }
  function g(q) {
    let { gen: D, validateName: V } = q;
    q.evaluated = D.const("evaluated", c._`${V}.evaluated`), D.if(c._`${q.evaluated}.dynamicProps`, () => D.assign(c._`${q.evaluated}.props`, c._`undefined`)), D.if(c._`${q.evaluated}.dynamicItems`, () => D.assign(c._`${q.evaluated}.items`, c._`undefined`));
  }
  function f(q, D) {
    let V = typeof q == "object" && q[D.schemaId];
    return V && (D.code.source || D.code.process) ? c._`/*# sourceURL=${V} */` : c.nil;
  }
  function z(q, D) {
    if (R(q)) {
      if (k(q), C(q)) {
        S(q, D);
        return;
      }
    }
    (0, t.boolOrEmptySchema)(q, D);
  }
  function C({ schema: q, self: D }) {
    if (typeof q == "boolean") return !q;
    for (let V in q) if (D.RULES.all[V]) return true;
    return false;
  }
  function R(q) {
    return typeof q.schema != "boolean";
  }
  function S(q, D) {
    let { schema: V, gen: X, opts: Z } = q;
    if (Z.$comment && V.$comment) G(q);
    x(q), W(q);
    let ee = X.const("_errs", d.default.errors);
    L(q, ee), X.var(D, c._`${ee} === ${d.default.errors}`);
  }
  function k(q) {
    (0, _.checkUnknownRules)(q), H(q);
  }
  function L(q, D) {
    if (q.opts.jtd) return ie(q, [], false, D);
    let V = (0, r.getSchemaTypes)(q.schema);
    ie(q, V, !(0, r.coerceAndCheckDataType)(q, V), D);
  }
  function H(q) {
    let { schema: D, errSchemaPath: V, opts: X, self: Z } = q;
    if (D.$ref && X.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(D, Z.RULES)) Z.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function N(q) {
    let { schema: D, opts: V } = q;
    if (D.default !== void 0 && V.useDefaults && V.strictSchema) (0, _.checkStrictMode)(q, "default is ignored in the schema root");
  }
  function x(q) {
    let D = q.schema[q.opts.schemaId];
    if (D) q.baseId = (0, m.resolveUrl)(q.opts.uriResolver, q.baseId, D);
  }
  function W(q) {
    if (q.schema.$async && !q.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function G({ gen: q, schemaEnv: D, schema: V, errSchemaPath: X, opts: Z }) {
    let ee = V.$comment;
    if (Z.$comment === true) q.code(c._`${d.default.self}.logger.log(${ee})`);
    else if (typeof Z.$comment == "function") {
      let pe = c.str`${X}/$comment`, _e = q.scopeValue("root", { ref: D.root });
      q.code(c._`${d.default.self}.opts.$comment(${ee}, ${pe}, ${_e}.schema)`);
    }
  }
  function se(q) {
    let { gen: D, schemaEnv: V, validateName: X, ValidationError: Z, opts: ee } = q;
    if (V.$async) D.if(c._`${d.default.errors} === 0`, () => D.return(d.default.data), () => D.throw(c._`new ${Z}(${d.default.vErrors})`));
    else {
      if (D.assign(c._`${X}.errors`, d.default.vErrors), ee.unevaluated) le(q);
      D.return(c._`${d.default.errors} === 0`);
    }
  }
  function le({ gen: q, evaluated: D, props: V, items: X }) {
    if (V instanceof c.Name) q.assign(c._`${D}.props`, V);
    if (X instanceof c.Name) q.assign(c._`${D}.items`, X);
  }
  function ie(q, D, V, X) {
    let { gen: Z, schema: ee, data: pe, allErrors: _e, opts: Re, self: ge } = q, { RULES: ue } = ge;
    if (ee.$ref && (Re.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(ee, ue))) {
      Z.block(() => re(q, "$ref", ue.all.$ref.definition));
      return;
    }
    if (!Re.jtd) ae(q, D);
    Z.block(() => {
      for (let ye of ue.rules) Ne(ye);
      Ne(ue.post);
    });
    function Ne(ye) {
      if (!(0, s.shouldUseGroup)(ee, ye)) return;
      if (ye.type) {
        if (Z.if((0, a.checkDataType)(ye.type, pe, Re.strictNumbers)), Se(q, ye), D.length === 1 && D[0] === ye.type && V) Z.else(), (0, a.reportTypeError)(q);
        Z.endIf();
      } else Se(q, ye);
      if (!_e) Z.if(c._`${d.default.errors} === ${X || 0}`);
    }
  }
  function Se(q, D) {
    let { gen: V, schema: X, opts: { useDefaults: Z } } = q;
    if (Z) (0, n.assignDefaults)(q, D.type);
    V.block(() => {
      for (let ee of D.rules) if ((0, s.shouldUseRule)(X, ee)) re(q, ee.keyword, ee.definition, D.type);
    });
  }
  function ae(q, D) {
    if (q.schemaEnv.meta || !q.opts.strictTypes) return;
    if (O(q, D), !q.opts.allowUnionTypes) U(q, D);
    F(q, q.dataTypes);
  }
  function O(q, D) {
    if (!D.length) return;
    if (!q.dataTypes.length) {
      q.dataTypes = D;
      return;
    }
    D.forEach((V) => {
      if (!I(q.dataTypes, V)) J(q, `type "${V}" not allowed by context "${q.dataTypes.join(",")}"`);
    }), j(q, D);
  }
  function U(q, D) {
    if (D.length > 1 && !(D.length === 2 && D.includes("null"))) J(q, "use allowUnionTypes to allow union type keyword");
  }
  function F(q, D) {
    let V = q.self.RULES.all;
    for (let X in V) {
      let Z = V[X];
      if (typeof Z == "object" && (0, s.shouldUseRule)(q.schema, Z)) {
        let { type: ee } = Z.definition;
        if (ee.length && !ee.some((pe) => w(D, pe))) J(q, `missing type "${ee.join(",")}" for keyword "${X}"`);
      }
    }
  }
  function w(q, D) {
    return q.includes(D) || D === "number" && q.includes("integer");
  }
  function I(q, D) {
    return q.includes(D) || D === "integer" && q.includes("number");
  }
  function j(q, D) {
    let V = [];
    for (let X of q.dataTypes) if (I(D, X)) V.push(X);
    else if (D.includes("integer") && X === "number") V.push("integer");
    q.dataTypes = V;
  }
  function J(q, D) {
    let V = q.schemaEnv.baseId + q.errSchemaPath;
    D += ` at "${V}" (strictTypes)`, (0, _.checkStrictMode)(q, D, q.opts.strictTypes);
  }
  var Y = class {
    constructor(q, D, V) {
      if ((0, i.validateKeywordUsage)(q, D, V), this.gen = q.gen, this.allErrors = q.allErrors, this.keyword = V, this.data = q.data, this.schema = q.schema[V], this.$data = D.$data && q.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(q, this.schema, V, this.$data), this.schemaType = D.schemaType, this.parentSchema = q.schema, this.params = {}, this.it = q, this.def = D, this.$data) this.schemaCode = q.gen.const("vSchema", Te(this.$data, q));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, D.schemaType, D.allowUndefined)) throw Error(`${V} value must be ${JSON.stringify(D.schemaType)}`);
      if ("code" in D ? D.trackErrors : D.errors !== false) this.errsCount = q.gen.const("_errs", d.default.errors);
    }
    result(q, D, V) {
      this.failResult((0, c.not)(q), D, V);
    }
    failResult(q, D, V) {
      if (this.gen.if(q), V) V();
      else this.error();
      if (D) {
        if (this.gen.else(), D(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    pass(q, D) {
      this.failResult((0, c.not)(q), void 0, D);
    }
    fail(q) {
      if (q === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(false);
        return;
      }
      if (this.gen.if(q), this.error(), this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    fail$data(q) {
      if (!this.$data) return this.fail(q);
      let { schemaCode: D } = this;
      this.fail(c._`${D} !== undefined && (${(0, c.or)(this.invalid$data(), q)})`);
    }
    error(q, D, V) {
      if (D) {
        this.setParams(D), this._error(q, V), this.setParams({});
        return;
      }
      this._error(q, V);
    }
    _error(q, D) {
      (q ? E.reportExtraError : E.reportError)(this, this.def.error, D);
    }
    $dataError() {
      (0, E.reportError)(this, this.def.$dataError || E.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      (0, E.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(q) {
      if (!this.allErrors) this.gen.if(q);
    }
    setParams(q, D) {
      if (D) Object.assign(this.params, q);
      else this.params = q;
    }
    block$data(q, D, V = c.nil) {
      this.gen.block(() => {
        this.check$data(q, V), D();
      });
    }
    check$data(q = c.nil, D = c.nil) {
      if (!this.$data) return;
      let { gen: V, schemaCode: X, schemaType: Z, def: ee } = this;
      if (V.if((0, c.or)(c._`${X} === undefined`, D)), q !== c.nil) V.assign(q, true);
      if (Z.length || ee.validateSchema) {
        if (V.elseIf(this.invalid$data()), this.$dataError(), q !== c.nil) V.assign(q, false);
      }
      V.else();
    }
    invalid$data() {
      let { gen: q, schemaCode: D, schemaType: V, def: X, it: Z } = this;
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
          let _e = q.scopeValue("validate$data", { ref: X.validateSchema });
          return c._`!${_e}(${D})`;
        }
        return c.nil;
      }
    }
    subschema(q, D) {
      let V = (0, l.getSubschema)(this.it, q);
      (0, l.extendSubschemaData)(V, this.it, q), (0, l.extendSubschemaMode)(V, q);
      let X = { ...this.it, ...V, items: void 0, props: void 0 };
      return z(X, D), X;
    }
    mergeEvaluated(q, D) {
      let { it: V, gen: X } = this;
      if (!V.opts.unevaluated) return;
      if (V.props !== true && q.props !== void 0) V.props = _.mergeEvaluated.props(X, q.props, V.props, D);
      if (V.items !== true && q.items !== void 0) V.items = _.mergeEvaluated.items(X, q.items, V.items, D);
    }
    mergeValidEvaluated(q, D) {
      let { it: V, gen: X } = this;
      if (V.opts.unevaluated && (V.props !== true || V.items !== true)) return X.if(D, () => this.mergeEvaluated(q, c.Name)), true;
    }
  };
  e4.KeywordCxt = Y;
  function re(q, D, V, X) {
    let Z = new Y(q, V, D);
    if ("code" in V) V.code(Z, X);
    else if (Z.$data && V.validate) (0, i.funcKeywordCode)(Z, V);
    else if ("macro" in V) (0, i.macroKeywordCode)(Z, V);
    else if (V.compile || V.validate) (0, i.funcKeywordCode)(Z, V);
  }
  let Q = /^\/(?:[^~]|~0|~1)*$/, ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Te(q, { dataLevel: D, dataNames: V, dataPathArr: X }) {
    let Z, ee;
    if (q === "") return d.default.rootData;
    if (q[0] === "/") {
      if (!Q.test(q)) throw Error(`Invalid JSON-pointer: ${q}`);
      Z = q, ee = d.default.rootData;
    } else {
      let ge = ce.exec(q);
      if (!ge) throw Error(`Invalid JSON-pointer: ${q}`);
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
  e4.getData = Te;
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
  let t = te(), r = go(), s = Le(), a = So(), n = ne(), i = as();
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
    let f = (0, a.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: z, lines: C } = this.opts.code, { ownProperties: R } = this.opts, S = new t.CodeGen(this.scope, { es5: z, lines: C, ownProperties: R }), k;
    if (h.$async) k = S.scopeValue("Error", { ref: r.default, code: t._`require("ajv/dist/runtime/validation_error").default` });
    let L = S.scopeName("validate");
    h.validateName = L;
    let H = { gen: S, allErrors: this.opts.allErrors, data: s.default.data, parentData: s.default.parentData, parentDataProperty: s.default.parentDataProperty, dataNames: [s.default.data], dataPathArr: [t.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: S.scopeValue("schema", this.opts.code.source === true ? { ref: h.schema, code: (0, t.stringify)(h.schema) } : { ref: h.schema }), validateName: L, ValidationError: k, schema: h.schema, schemaEnv: h, rootId: f, baseId: h.baseId || f, schemaPath: t.nil, errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: t._`""`, opts: this.opts, self: this }, N;
    try {
      this._compilations.add(h), (0, i.validateFunctionCode)(H), S.optimize(this.opts.code.optimize);
      let x = S.toString();
      if (N = `${S.scopeRefs(s.default.scope)}return ${x}`, this.opts.code.process) N = this.opts.code.process(N, h);
      let W = Function(`${s.default.self}`, `${s.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(L, { ref: W }), W.errors = null, W.schema = h.schema, W.schemaEnv = h, h.$async) W.$async = true;
      if (this.opts.code.source === true) W.source = { validateName: L, validateCode: x, scopeValues: S._values };
      if (this.opts.unevaluated) {
        let { props: G, items: se } = H;
        if (W.evaluated = { props: G instanceof t.Name ? void 0 : G, items: se instanceof t.Name ? void 0 : se, dynamicProps: G instanceof t.Name, dynamicItems: se instanceof t.Name }, W.source) W.source.evaluated = (0, t.stringify)(W.evaluated);
      }
      return h.validate = W, h;
    } catch (x) {
      if (delete h.validate, delete h.validateName, N) this.logger.error("Error compiling schema, function code:", N);
      throw x;
    } finally {
      this._compilations.delete(h);
    }
  }
  e4.compileSchema = c;
  function d(h, g, f) {
    var z;
    f = (0, a.resolveUrl)(this.opts.uriResolver, g, f);
    let C = h.refs[f];
    if (C) return C;
    let R = P.call(this, h, f);
    if (R === void 0) {
      let S = (z = h.localRefs) === null || z === void 0 ? void 0 : z[f], { schemaId: k } = this.opts;
      if (S) R = new l({ schema: S, schemaId: k, root: h, baseId: g });
    }
    if (R === void 0) return;
    return h.refs[f] = m.call(this, R);
  }
  e4.resolveRef = d;
  function m(h) {
    if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
    return h.validate ? h : c.call(this, h);
  }
  function _(h) {
    for (let g of this._compilations) if (E(g, h)) return g;
  }
  e4.getCompilingSchema = _;
  function E(h, g) {
    return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
  }
  function P(h, g) {
    let f;
    while (typeof (f = this.refs[g]) == "string") g = f;
    return f || this.schemas[g] || y.call(this, h, g);
  }
  function y(h, g) {
    let f = this.opts.uriResolver.parse(g), z = (0, a._getFullPath)(this.opts.uriResolver, f), C = (0, a.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && z === C) return p.call(this, f, h);
    let R = (0, a.normalizeId)(z), S = this.refs[R] || this.schemas[R];
    if (typeof S == "string") {
      let k = y.call(this, h, S);
      if (typeof (k === null || k === void 0 ? void 0 : k.schema) !== "object") return;
      return p.call(this, f, k);
    }
    if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
    if (!S.validate) c.call(this, S);
    if (R === (0, a.normalizeId)(g)) {
      let { schema: k } = S, { schemaId: L } = this.opts, H = k[L];
      if (H) C = (0, a.resolveUrl)(this.opts.uriResolver, C, H);
      return new l({ schema: k, schemaId: L, root: h, baseId: C });
    }
    return p.call(this, f, S);
  }
  e4.resolveSchema = y;
  let b = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function p(h, { baseId: g, schema: f, root: z }) {
    var C;
    if (((C = h.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/") return;
    for (let k of h.fragment.slice(1).split("/")) {
      if (typeof f === "boolean") return;
      let L = f[(0, n.unescapeFragment)(k)];
      if (L === void 0) return;
      f = L;
      let H = typeof f === "object" && f[this.opts.schemaId];
      if (!b.has(k) && H) g = (0, a.resolveUrl)(this.opts.uriResolver, g, H);
    }
    let R;
    if (typeof f != "boolean" && f.$ref && !(0, n.schemaHasRulesButRef)(f, this.RULES)) {
      let k = (0, a.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      R = y.call(this, z, k);
    }
    let { schemaId: S } = this.opts;
    if (R = R || new l({ schema: f, schemaId: S, root: z, baseId: g }), R.schema !== R.root.schema) return R;
  }
}), gu = K((e4, t) => {
  t.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
}), Mi = K((e4, t) => {
  let r = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), s = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function a(y) {
    let b = "", p = 0, h = 0;
    for (h = 0; h < y.length; h++) {
      if (p = y[h].charCodeAt(0), p === 48) continue;
      if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      b += y[h];
      break;
    }
    for (h += 1; h < y.length; h++) {
      if (p = y[h].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      b += y[h];
    }
    return b;
  }
  let n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function i(y) {
    return y.length = 0, true;
  }
  function l(y, b, p) {
    if (y.length) {
      let h = a(y);
      if (h !== "") b.push(h);
      else return p.error = true, false;
      y.length = 0;
    }
    return true;
  }
  function c(y) {
    let b = 0, p = { error: false, address: "", zone: "" }, h = [], g = [], f = false, z = false, C = l;
    for (let R = 0; R < y.length; R++) {
      let S = y[R];
      if (S === "[" || S === "]") continue;
      if (S === ":") {
        if (f === true) z = true;
        if (!C(g, h, p)) break;
        if (++b > 7) {
          p.error = true;
          break;
        }
        if (R > 0 && y[R - 1] === ":") f = true;
        h.push(":");
        continue;
      } else if (S === "%") {
        if (!C(g, h, p)) break;
        C = i;
      } else {
        g.push(S);
        continue;
      }
    }
    if (g.length) if (C === i) p.zone = g.join("");
    else if (z) h.push(g.join(""));
    else h.push(a(g));
    return p.address = h.join(""), p;
  }
  function d(y) {
    if (m(y, ":") < 2) return { host: y, isIPV6: false };
    let b = c(y);
    if (!b.error) {
      let { address: p, address: h } = b;
      if (b.zone) p += "%" + b.zone, h += "%25" + b.zone;
      return { host: p, isIPV6: true, escapedHost: h };
    } else return { host: y, isIPV6: false };
  }
  function m(y, b) {
    let p = 0;
    for (let h = 0; h < y.length; h++) if (y[h] === b) p++;
    return p;
  }
  function _(y) {
    let b = y, p = [], h = -1, g = 0;
    while (g = b.length) {
      if (g === 1) if (b === ".") break;
      else if (b === "/") {
        p.push("/");
        break;
      } else {
        p.push(b);
        break;
      }
      else if (g === 2) {
        if (b[0] === ".") {
          if (b[1] === ".") break;
          else if (b[1] === "/") {
            b = b.slice(2);
            continue;
          }
        } else if (b[0] === "/") {
          if (b[1] === "." || b[1] === "/") {
            p.push("/");
            break;
          }
        }
      } else if (g === 3) {
        if (b === "/..") {
          if (p.length !== 0) p.pop();
          p.push("/");
          break;
        }
      }
      if (b[0] === ".") {
        if (b[1] === ".") {
          if (b[2] === "/") {
            b = b.slice(3);
            continue;
          }
        } else if (b[1] === "/") {
          b = b.slice(2);
          continue;
        }
      } else if (b[0] === "/") {
        if (b[1] === ".") {
          if (b[2] === "/") {
            b = b.slice(2);
            continue;
          } else if (b[2] === ".") {
            if (b[3] === "/") {
              if (b = b.slice(3), p.length !== 0) p.pop();
              continue;
            }
          }
        }
      }
      if ((h = b.indexOf("/", 1)) === -1) {
        p.push(b);
        break;
      } else p.push(b.slice(0, h)), b = b.slice(h);
    }
    return p.join("");
  }
  function E(y, b) {
    let p = b !== true ? escape : unescape;
    if (y.scheme !== void 0) y.scheme = p(y.scheme);
    if (y.userinfo !== void 0) y.userinfo = p(y.userinfo);
    if (y.host !== void 0) y.host = p(y.host);
    if (y.path !== void 0) y.path = p(y.path);
    if (y.query !== void 0) y.query = p(y.query);
    if (y.fragment !== void 0) y.fragment = p(y.fragment);
    return y;
  }
  function P(y) {
    let b = [];
    if (y.userinfo !== void 0) b.push(y.userinfo), b.push("@");
    if (y.host !== void 0) {
      let p = unescape(y.host);
      if (!s(p)) {
        let h = d(p);
        if (h.isIPV6 === true) p = `[${h.escapedHost}]`;
        else p = y.host;
      }
      b.push(p);
    }
    if (typeof y.port === "number" || typeof y.port === "string") b.push(":"), b.push(String(y.port));
    return b.length ? b.join("") : void 0;
  }
  t.exports = { nonSimpleDomain: n, recomposeAuthority: P, normalizeComponentEncoding: E, removeDotSegments: _, isIPv4: s, isUUID: r, normalizeIPv6: d, stringArrayToHexStripped: a };
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
    let k = String(S.scheme).toLowerCase() === "https";
    if (S.port === (k ? 443 : 80) || S.port === "") S.port = void 0;
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
      let [k, L] = S.resourceName.split("?");
      S.path = k && k !== "/" ? k : void 0, S.query = L, S.resourceName = void 0;
    }
    return S.fragment = void 0, S;
  }
  function _(S, k) {
    if (!S.path) return S.error = "URN can not be parsed", S;
    let L = S.path.match(s);
    if (L) {
      let H = k.scheme || S.scheme || "urn";
      S.nid = L[1].toLowerCase(), S.nss = L[2];
      let N = R(`${H}:${k.nid || S.nid}`);
      if (S.path = void 0, N) S = N.parse(S, k);
    } else S.error = S.error || "URN can not be parsed.";
    return S;
  }
  function E(S, k) {
    if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
    let L = k.scheme || S.scheme || "urn", H = S.nid.toLowerCase(), N = R(`${L}:${k.nid || H}`);
    if (N) S = N.serialize(S, k);
    let x = S, W = S.nss;
    return x.path = `${H || k.nid}:${W}`, k.skipEscape = true, x;
  }
  function P(S, k) {
    let L = S;
    if (L.uuid = L.nss, L.nss = void 0, !k.tolerant && (!L.uuid || !r(L.uuid))) L.error = L.error || "UUID is not valid.";
    return L;
  }
  function y(S) {
    let k = S;
    return k.nss = (S.uuid || "").toLowerCase(), k;
  }
  let b = { scheme: "http", domainHost: true, parse: l, serialize: c }, p = { scheme: "https", domainHost: b.domainHost, parse: l, serialize: c }, h = { scheme: "ws", domainHost: true, parse: d, serialize: m }, g = { scheme: "wss", domainHost: h.domainHost, parse: h.parse, serialize: h.serialize }, C = { http: b, https: p, ws: h, wss: g, urn: { scheme: "urn", parse: _, serialize: E, skipNormalize: true }, "urn:uuid": { scheme: "urn:uuid", parse: P, serialize: y, skipNormalize: true } };
  Object.setPrototypeOf(C, null);
  function R(S) {
    return S && (C[S] || C[S.toLowerCase()]) || void 0;
  }
  t.exports = { wsIsSecure: i, SCHEMES: C, isValidSchemeName: n, getSchemeHandler: R };
}), yu = K((e4, t) => {
  let { normalizeIPv6: r, removeDotSegments: s, recomposeAuthority: a, normalizeComponentEncoding: n, isIPv4: i, nonSimpleDomain: l } = Mi(), { SCHEMES: c, getSchemeHandler: d } = _u();
  function m(g, f) {
    if (typeof g === "string") g = y(p(g, f), f);
    else if (typeof g === "object") g = p(y(g, f), f);
    return g;
  }
  function _(g, f, z) {
    let C = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, R = E(p(g, C), p(f, C), C, true);
    return C.skipEscape = true, y(R, C);
  }
  function E(g, f, z, C) {
    let R = {};
    if (!C) g = p(y(g, z), z), f = p(y(f, z), z);
    if (z = z || {}, !z.tolerant && f.scheme) R.scheme = f.scheme, R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = s(f.path || ""), R.query = f.query;
    else {
      if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = s(f.path || ""), R.query = f.query;
      else {
        if (!f.path) if (R.path = g.path, f.query !== void 0) R.query = f.query;
        else R.query = g.query;
        else {
          if (f.path[0] === "/") R.path = s(f.path);
          else {
            if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path) R.path = "/" + f.path;
            else if (!g.path) R.path = f.path;
            else R.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
            R.path = s(R.path);
          }
          R.query = f.query;
        }
        R.userinfo = g.userinfo, R.host = g.host, R.port = g.port;
      }
      R.scheme = g.scheme;
    }
    return R.fragment = f.fragment, R;
  }
  function P(g, f, z) {
    if (typeof g === "string") g = unescape(g), g = y(n(p(g, z), true), { ...z, skipEscape: true });
    else if (typeof g === "object") g = y(n(g, true), { ...z, skipEscape: true });
    if (typeof f === "string") f = unescape(f), f = y(n(p(f, z), true), { ...z, skipEscape: true });
    else if (typeof f === "object") f = y(n(f, true), { ...z, skipEscape: true });
    return g.toLowerCase() === f.toLowerCase();
  }
  function y(g, f) {
    let z = { host: g.host, scheme: g.scheme, userinfo: g.userinfo, port: g.port, path: g.path, query: g.query, nid: g.nid, nss: g.nss, uuid: g.uuid, fragment: g.fragment, reference: g.reference, resourceName: g.resourceName, secure: g.secure, error: "" }, C = Object.assign({}, f), R = [], S = d(C.scheme || z.scheme);
    if (S && S.serialize) S.serialize(z, C);
    if (z.path !== void 0) if (!C.skipEscape) {
      if (z.path = escape(z.path), z.scheme !== void 0) z.path = z.path.split("%3A").join(":");
    } else z.path = unescape(z.path);
    if (C.reference !== "suffix" && z.scheme) R.push(z.scheme, ":");
    let k = a(z);
    if (k !== void 0) {
      if (C.reference !== "suffix") R.push("//");
      if (R.push(k), z.path && z.path[0] !== "/") R.push("/");
    }
    if (z.path !== void 0) {
      let L = z.path;
      if (!C.absolutePath && (!S || !S.absolutePath)) L = s(L);
      if (k === void 0 && L[0] === "/" && L[1] === "/") L = "/%2F" + L.slice(2);
      R.push(L);
    }
    if (z.query !== void 0) R.push("?", z.query);
    if (z.fragment !== void 0) R.push("#", z.fragment);
    return R.join("");
  }
  let b = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function p(g, f) {
    let z = Object.assign({}, f), C = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, R = false;
    if (z.reference === "suffix") if (z.scheme) g = z.scheme + ":" + g;
    else g = "//" + g;
    let S = g.match(b);
    if (S) {
      if (C.scheme = S[1], C.userinfo = S[3], C.host = S[4], C.port = parseInt(S[5], 10), C.path = S[6] || "", C.query = S[7], C.fragment = S[8], isNaN(C.port)) C.port = S[5];
      if (C.host) if (i(C.host) === false) {
        let L = r(C.host);
        C.host = L.host.toLowerCase(), R = L.isIPV6;
      } else R = true;
      if (C.scheme === void 0 && C.userinfo === void 0 && C.host === void 0 && C.port === void 0 && C.query === void 0 && !C.path) C.reference = "same-document";
      else if (C.scheme === void 0) C.reference = "relative";
      else if (C.fragment === void 0) C.reference = "absolute";
      else C.reference = "uri";
      if (z.reference && z.reference !== "suffix" && z.reference !== C.reference) C.error = C.error || "URI is not a " + z.reference + " reference.";
      let k = d(z.scheme || C.scheme);
      if (!z.unicodeSupport && (!k || !k.unicodeSupport)) {
        if (C.host && (z.domainHost || k && k.domainHost) && R === false && l(C.host)) try {
          C.host = URL.domainToASCII(C.host.toLowerCase());
        } catch (L) {
          C.error = C.error || "Host's domain name can not be converted to ASCII: " + L;
        }
      }
      if (!k || k && !k.skipNormalize) {
        if (g.indexOf("%") !== -1) {
          if (C.scheme !== void 0) C.scheme = unescape(C.scheme);
          if (C.host !== void 0) C.host = unescape(C.host);
        }
        if (C.path) C.path = escape(unescape(C.path));
        if (C.fragment) C.fragment = encodeURI(decodeURIComponent(C.fragment));
      }
      if (k && k.parse) k.parse(C, z);
    } else C.error = C.error || "URI can not be parsed.";
    return C;
  }
  let h = { SCHEMES: c, normalize: m, resolve: _, resolveComponent: E, equal: P, serialize: y, parse: p };
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
  let s = go(), a = os(), n = Ii(), i = _o(), l = te(), c = So(), d = po(), m = ne(), _ = gu(), E = vu(), P = (O, U) => new RegExp(O, U);
  P.code = "new RegExp";
  let y = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), p = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, h = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, g = 200;
  function f(O) {
    var U, F, w, I, j, J, Y, re, Q, ce, Te, q, D, V, X, Z, ee, pe, _e, Re, ge, ue, Ne, ye, De;
    let je = O.strict, Ve = (U = O.code) === null || U === void 0 ? void 0 : U.optimize, Be = Ve === true || Ve === void 0 ? 1 : Ve || 0, We = (w = (F = O.code) === null || F === void 0 ? void 0 : F.regExp) !== null && w !== void 0 ? w : P, nt = (I = O.uriResolver) !== null && I !== void 0 ? I : E.default;
    return { strictSchema: (J = (j = O.strictSchema) !== null && j !== void 0 ? j : je) !== null && J !== void 0 ? J : true, strictNumbers: (re = (Y = O.strictNumbers) !== null && Y !== void 0 ? Y : je) !== null && re !== void 0 ? re : true, strictTypes: (ce = (Q = O.strictTypes) !== null && Q !== void 0 ? Q : je) !== null && ce !== void 0 ? ce : "log", strictTuples: (q = (Te = O.strictTuples) !== null && Te !== void 0 ? Te : je) !== null && q !== void 0 ? q : "log", strictRequired: (V = (D = O.strictRequired) !== null && D !== void 0 ? D : je) !== null && V !== void 0 ? V : false, code: O.code ? { ...O.code, optimize: Be, regExp: We } : { optimize: Be, regExp: We }, loopRequired: (X = O.loopRequired) !== null && X !== void 0 ? X : g, loopEnum: (Z = O.loopEnum) !== null && Z !== void 0 ? Z : g, meta: (ee = O.meta) !== null && ee !== void 0 ? ee : true, messages: (pe = O.messages) !== null && pe !== void 0 ? pe : true, inlineRefs: (_e = O.inlineRefs) !== null && _e !== void 0 ? _e : true, schemaId: (Re = O.schemaId) !== null && Re !== void 0 ? Re : "$id", addUsedSchema: (ge = O.addUsedSchema) !== null && ge !== void 0 ? ge : true, validateSchema: (ue = O.validateSchema) !== null && ue !== void 0 ? ue : true, validateFormats: (Ne = O.validateFormats) !== null && Ne !== void 0 ? Ne : true, unicodeRegExp: (ye = O.unicodeRegExp) !== null && ye !== void 0 ? ye : true, int32range: (De = O.int32range) !== null && De !== void 0 ? De : true, uriResolver: nt };
  }
  var z = class {
    constructor(O = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...f(O) };
      let { es5: U, lines: F } = this.opts.code;
      this.scope = new l.ValueScope({ scope: {}, prefixes: b, es5: U, lines: F }), this.logger = x(O.logger);
      let w = O.validateFormats;
      if (O.validateFormats = false, this.RULES = (0, n.getRules)(), C.call(this, p, O, "NOT SUPPORTED"), C.call(this, h, O, "DEPRECATED", "warn"), this._metaOpts = H.call(this), O.formats) k.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords) L.call(this, O.keywords);
      if (typeof O.meta == "object") this.addMetaSchema(O.meta);
      S.call(this), O.validateFormats = w;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: O, meta: U, schemaId: F } = this.opts, w = _;
      if (F === "id") w = { ..._ }, w.id = w.$id, delete w.$id;
      if (U && O) this.addMetaSchema(w, w[F], false);
    }
    defaultMeta() {
      let { meta: O, schemaId: U } = this.opts;
      return this.opts.defaultMeta = typeof O == "object" ? O[U] || O : void 0;
    }
    validate(O, U) {
      let F;
      if (typeof O == "string") {
        if (F = this.getSchema(O), !F) throw Error(`no schema with key or ref "${O}"`);
      } else F = this.compile(O);
      let w = F(U);
      if (!("$async" in F)) this.errors = F.errors;
      return w;
    }
    compile(O, U) {
      let F = this._addSchema(O, U);
      return F.validate || this._compileSchemaEnv(F);
    }
    compileAsync(O, U) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let { loadSchema: F } = this.opts;
      return w.call(this, O, U);
      async function w(Q, ce) {
        await I.call(this, Q.$schema);
        let Te = this._addSchema(Q, ce);
        return Te.validate || j.call(this, Te);
      }
      async function I(Q) {
        if (Q && !this.getSchema(Q)) await w.call(this, { $ref: Q }, true);
      }
      async function j(Q) {
        try {
          return this._compileSchemaEnv(Q);
        } catch (ce) {
          if (!(ce instanceof a.default)) throw ce;
          return J.call(this, ce), await Y.call(this, ce.missingSchema), j.call(this, Q);
        }
      }
      function J({ missingSchema: Q, missingRef: ce }) {
        if (this.refs[Q]) throw Error(`AnySchema ${Q} is loaded but ${ce} cannot be resolved`);
      }
      async function Y(Q) {
        let ce = await re.call(this, Q);
        if (!this.refs[Q]) await I.call(this, ce.$schema);
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
    addSchema(O, U, F, w = this.opts.validateSchema) {
      if (Array.isArray(O)) {
        for (let j of O) this.addSchema(j, void 0, F, w);
        return this;
      }
      let I;
      if (typeof O === "object") {
        let { schemaId: j } = this.opts;
        if (I = O[j], I !== void 0 && typeof I != "string") throw Error(`schema ${j} must be string`);
      }
      return U = (0, c.normalizeId)(U || I), this._checkUnique(U), this.schemas[U] = this._addSchema(O, F, U, w, true), this;
    }
    addMetaSchema(O, U, F = this.opts.validateSchema) {
      return this.addSchema(O, U, true, F), this;
    }
    validateSchema(O, U) {
      if (typeof O == "boolean") return true;
      let F;
      if (F = O.$schema, F !== void 0 && typeof F != "string") throw Error("$schema must be a string");
      if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F) return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let w = this.validate(F, O);
      if (!w && U) {
        let I = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(I);
        else throw Error(I);
      }
      return w;
    }
    getSchema(O) {
      let U;
      while (typeof (U = R.call(this, O)) == "string") O = U;
      if (U === void 0) {
        let { schemaId: F } = this.opts, w = new i.SchemaEnv({ schema: {}, schemaId: F });
        if (U = i.resolveSchema.call(this, w, O), !U) return;
        this.refs[O] = U;
      }
      return U.validate || this._compileSchemaEnv(U);
    }
    removeSchema(O) {
      if (O instanceof RegExp) return this._removeAllSchemas(this.schemas, O), this._removeAllSchemas(this.refs, O), this;
      switch (typeof O) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let U = R.call(this, O);
          if (typeof U == "object") this._cache.delete(U.schema);
          return delete this.schemas[O], delete this.refs[O], this;
        }
        case "object": {
          let U = O;
          this._cache.delete(U);
          let F = O[this.opts.schemaId];
          if (F) F = (0, c.normalizeId)(F), delete this.schemas[F], delete this.refs[F];
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(O) {
      for (let U of O) this.addKeyword(U);
      return this;
    }
    addKeyword(O, U) {
      let F;
      if (typeof O == "string") {
        if (F = O, typeof U == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = F;
      } else if (typeof O == "object" && U === void 0) {
        if (U = O, F = U.keyword, Array.isArray(F) && !F.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (G.call(this, F, U), !U) return (0, m.eachItem)(F, (I) => se.call(this, I)), this;
      ie.call(this, U);
      let w = { ...U, type: (0, d.getJSONTypes)(U.type), schemaType: (0, d.getJSONTypes)(U.schemaType) };
      return (0, m.eachItem)(F, w.type.length === 0 ? (I) => se.call(this, I, w) : (I) => w.type.forEach((j) => se.call(this, I, w, j))), this;
    }
    getKeyword(O) {
      let U = this.RULES.all[O];
      return typeof U == "object" ? U.definition : !!U;
    }
    removeKeyword(O) {
      let { RULES: U } = this;
      delete U.keywords[O], delete U.all[O];
      for (let F of U.rules) {
        let w = F.rules.findIndex((I) => I.keyword === O);
        if (w >= 0) F.rules.splice(w, 1);
      }
      return this;
    }
    addFormat(O, U) {
      if (typeof U == "string") U = new RegExp(U);
      return this.formats[O] = U, this;
    }
    errorsText(O = this.errors, { separator: U = ", ", dataVar: F = "data" } = {}) {
      if (!O || O.length === 0) return "No errors";
      return O.map((w) => `${F}${w.instancePath} ${w.message}`).reduce((w, I) => w + U + I);
    }
    $dataMetaSchema(O, U) {
      let F = this.RULES.all;
      O = JSON.parse(JSON.stringify(O));
      for (let w of U) {
        let I = w.split("/").slice(1), j = O;
        for (let J of I) j = j[J];
        for (let J in F) {
          let Y = F[J];
          if (typeof Y != "object") continue;
          let { $data: re } = Y.definition, Q = j[J];
          if (re && Q) j[J] = ae(Q);
        }
      }
      return O;
    }
    _removeAllSchemas(O, U) {
      for (let F in O) {
        let w = O[F];
        if (!U || U.test(F)) {
          if (typeof w == "string") delete O[F];
          else if (w && !w.meta) this._cache.delete(w.schema), delete O[F];
        }
      }
    }
    _addSchema(O, U, F, w = this.opts.validateSchema, I = this.opts.addUsedSchema) {
      let j, { schemaId: J } = this.opts;
      if (typeof O == "object") j = O[J];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof O != "boolean") throw Error("schema must be object or boolean");
      let Y = this._cache.get(O);
      if (Y !== void 0) return Y;
      F = (0, c.normalizeId)(j || F);
      let re = c.getSchemaRefs.call(this, O, F);
      if (Y = new i.SchemaEnv({ schema: O, schemaId: J, meta: U, baseId: F, localRefs: re }), this._cache.set(Y.schema, Y), I && !F.startsWith("#")) {
        if (F) this._checkUnique(F);
        this.refs[F] = Y;
      }
      if (w) this.validateSchema(O, true);
      return Y;
    }
    _checkUnique(O) {
      if (this.schemas[O] || this.refs[O]) throw Error(`schema with key or id "${O}" already exists`);
    }
    _compileSchemaEnv(O) {
      if (O.meta) this._compileMetaSchema(O);
      else i.compileSchema.call(this, O);
      if (!O.validate) throw Error("ajv implementation error");
      return O.validate;
    }
    _compileMetaSchema(O) {
      let U = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, O);
      } finally {
        this.opts = U;
      }
    }
  };
  z.ValidationError = s.default, z.MissingRefError = a.default, e4.default = z;
  function C(O, U, F, w = "error") {
    for (let I in O) {
      let j = I;
      if (j in U) this.logger[w](`${F}: option ${I}. ${O[j]}`);
    }
  }
  function R(O) {
    return O = (0, c.normalizeId)(O), this.schemas[O] || this.refs[O];
  }
  function S() {
    let O = this.opts.schemas;
    if (!O) return;
    if (Array.isArray(O)) this.addSchema(O);
    else for (let U in O) this.addSchema(O[U], U);
  }
  function k() {
    for (let O in this.opts.formats) {
      let U = this.opts.formats[O];
      if (U) this.addFormat(O, U);
    }
  }
  function L(O) {
    if (Array.isArray(O)) {
      this.addVocabulary(O);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let U in O) {
      let F = O[U];
      if (!F.keyword) F.keyword = U;
      this.addKeyword(F);
    }
  }
  function H() {
    let O = { ...this.opts };
    for (let U of y) delete O[U];
    return O;
  }
  let N = { log() {
  }, warn() {
  }, error() {
  } };
  function x(O) {
    if (O === false) return N;
    if (O === void 0) return console;
    if (O.log && O.warn && O.error) return O;
    throw Error("logger must implement log, warn and error methods");
  }
  let W = /^[a-z_$][a-z0-9_$:-]*$/i;
  function G(O, U) {
    let { RULES: F } = this;
    if ((0, m.eachItem)(O, (w) => {
      if (F.keywords[w]) throw Error(`Keyword ${w} is already defined`);
      if (!W.test(w)) throw Error(`Keyword ${w} has invalid name`);
    }), !U) return;
    if (U.$data && !("code" in U || "validate" in U)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function se(O, U, F) {
    var w;
    let I = U === null || U === void 0 ? void 0 : U.post;
    if (F && I) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: j } = this, J = I ? j.post : j.rules.find(({ type: re }) => re === F);
    if (!J) J = { type: F, rules: [] }, j.rules.push(J);
    if (j.keywords[O] = true, !U) return;
    let Y = { keyword: O, definition: { ...U, type: (0, d.getJSONTypes)(U.type), schemaType: (0, d.getJSONTypes)(U.schemaType) } };
    if (U.before) le.call(this, J, Y, U.before);
    else J.rules.push(Y);
    j.all[O] = Y, (w = U.implements) === null || w === void 0 || w.forEach((re) => this.addKeyword(re));
  }
  function le(O, U, F) {
    let w = O.rules.findIndex((I) => I.keyword === F);
    if (w >= 0) O.rules.splice(w, 0, U);
    else O.rules.push(U), this.logger.warn(`rule ${F} is not defined`);
  }
  function ie(O) {
    let { metaSchema: U } = O;
    if (U === void 0) return;
    if (O.$data && this.opts.$data) U = ae(U);
    O.validateSchema = this.compile(U, true);
  }
  let Se = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function ae(O) {
    return { anyOf: [O, Se] };
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
  let t = os(), r = Ue(), s = te(), a = Le(), n = _o(), i = ne(), l = { keyword: "$ref", schemaType: "string", code(m) {
    let { gen: _, schema: E, it: P } = m, { baseId: y, schemaEnv: b, validateName: p, opts: h, self: g } = P, { root: f } = b;
    if ((E === "#" || E === "#/") && y === f.baseId) return C();
    let z = n.resolveRef.call(g, f, y, E);
    if (z === void 0) throw new t.default(P.opts.uriResolver, y, E);
    if (z instanceof n.SchemaEnv) return R(z);
    return S(z);
    function C() {
      if (b === f) return d(m, p, b, b.$async);
      let k = _.scopeValue("root", { ref: f });
      return d(m, s._`${k}.validate`, f, f.$async);
    }
    function R(k) {
      d(m, c(m, k), k, k.$async);
    }
    function S(k) {
      let L = _.scopeValue("schema", h.code.source === true ? { ref: k, code: (0, s.stringify)(k) } : { ref: k }), H = _.name("valid"), N = m.subschema({ schema: k, dataTypes: [], schemaPath: s.nil, topSchemaRef: L, errSchemaPath: E }, H);
      m.mergeEvaluated(N), m.ok(H);
    }
  } };
  function c(m, _) {
    let { gen: E } = m;
    return _.validate ? E.scopeValue("validate", { ref: _.validate }) : s._`${E.scopeValue("wrapper", { ref: _ })}.validate`;
  }
  e4.getValidate = c;
  function d(m, _, E, P) {
    let { gen: y, it: b } = m, { allErrors: p, schemaEnv: h, opts: g } = b, f = g.passContext ? a.default.this : s.nil;
    if (P) z();
    else C();
    function z() {
      if (!h.$async) throw Error("async schema referenced by sync schema");
      let k = y.let("valid");
      y.try(() => {
        if (y.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), S(_), !p) y.assign(k, true);
      }, (L) => {
        if (y.if(s._`!(${L} instanceof ${b.ValidationError})`, () => y.throw(L)), R(L), !p) y.assign(k, false);
      }), m.ok(k);
    }
    function C() {
      m.result((0, r.callValidateCode)(m, _, f), () => S(_), () => R(_));
    }
    function R(k) {
      let L = s._`${k}.errors`;
      y.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${L} : ${a.default.vErrors}.concat(${L})`), y.assign(a.default.errors, s._`${a.default.vErrors}.length`);
    }
    function S(k) {
      var L;
      if (!b.opts.unevaluated) return;
      let H = (L = E === null || E === void 0 ? void 0 : E.validate) === null || L === void 0 ? void 0 : L.evaluated;
      if (b.props !== true) if (H && !H.dynamicProps) {
        if (H.props !== void 0) b.props = i.mergeEvaluated.props(y, H.props, b.props);
      } else {
        let N = y.var("props", s._`${k}.evaluated.props`);
        b.props = i.mergeEvaluated.props(y, N, b.props, s.Name);
      }
      if (b.items !== true) if (H && !H.dynamicItems) {
        if (H.items !== void 0) b.items = i.mergeEvaluated.items(y, H.items, b.items);
      } else {
        let N = y.var("items", s._`${k}.evaluated.items`);
        b.items = i.mergeEvaluated.items(y, N, b.items, s.Name);
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
  let t = Ue(), r = ne(), s = te(), a = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: n }) => s.str`must match pattern "${n}"`, params: ({ schemaCode: n }) => s._`{pattern: ${n}}` }, code(n) {
    let { gen: i, data: l, $data: c, schema: d, schemaCode: m, it: _ } = n, E = _.opts.unicodeRegExp ? "u" : "";
    if (c) {
      let { regExp: P } = _.opts.code, y = P.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(i, P), b = i.let("valid");
      i.try(() => i.assign(b, s._`${y}(${m}, ${E}).test(${l})`), () => i.assign(b, false)), n.fail$data(s._`!${b}`);
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
  let t = Ue(), r = te(), s = ne(), a = { keyword: "required", type: "object", schemaType: "array", $data: true, error: { message: ({ params: { missingProperty: n } }) => r.str`must have required property '${n}'`, params: ({ params: { missingProperty: n } }) => r._`{missingProperty: ${n}}` }, code(n) {
    let { gen: i, schema: l, schemaCode: c, data: d, $data: m, it: _ } = n, { opts: E } = _;
    if (!m && l.length === 0) return;
    let P = l.length >= E.loopRequired;
    if (_.allErrors) y();
    else b();
    if (E.strictRequired) {
      let g = n.parentSchema.properties, { definedProperties: f } = n.it;
      for (let z of l) if ((g === null || g === void 0 ? void 0 : g[z]) === void 0 && !f.has(z)) {
        let C = `required property "${z}" is not defined at "${_.schemaEnv.baseId + _.errSchemaPath}" (strictRequired)`;
        (0, s.checkStrictMode)(_, C, _.opts.strictRequired);
      }
    }
    function y() {
      if (P || m) n.block$data(r.nil, p);
      else for (let g of l) (0, t.checkReportMissingProp)(n, g);
    }
    function b() {
      let g = i.let("missing");
      if (P || m) {
        let f = i.let("valid", true);
        n.block$data(f, () => h(g, f)), n.ok(f);
      } else i.if((0, t.checkMissingProp)(n, l, g)), (0, t.reportMissingProp)(n, g), i.else();
    }
    function p() {
      i.forOf("prop", c, (g) => {
        n.setParams({ missingProperty: g }), i.if((0, t.noPropertyInData)(i, d, g, E.ownProperties), () => n.error());
      });
    }
    function h(g, f) {
      n.setParams({ missingProperty: g }), i.forOf(g, c, () => {
        i.assign(f, (0, t.propertyInData)(i, d, g, E.ownProperties)), i.if((0, r.not)(f), () => {
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
    let { gen: l, data: c, $data: d, schema: m, parentSchema: _, schemaCode: E, it: P } = i;
    if (!d && !m) return;
    let y = l.let("valid"), b = _.items ? (0, t.getSchemaTypes)(_.items) : [];
    i.block$data(y, p, r._`${E} === false`), i.ok(y);
    function p() {
      let z = l.let("i", r._`${c}.length`), C = l.let("j");
      i.setParams({ i: z, j: C }), l.assign(y, true), l.if(r._`${z} > 1`, () => (h() ? g : f)(z, C));
    }
    function h() {
      return b.length > 0 && !b.some((z) => z === "object" || z === "array");
    }
    function g(z, C) {
      let R = l.name("item"), S = (0, t.checkDataTypes)(b, R, P.opts.strictNumbers, t.DataType.Wrong), k = l.const("indices", r._`{}`);
      l.for(r._`;${z}--;`, () => {
        if (l.let(R, r._`${c}[${z}]`), l.if(S, r._`continue`), b.length > 1) l.if(r._`typeof ${R} == "string"`, r._`${R} += "_"`);
        l.if(r._`typeof ${k}[${R}] == "number"`, () => {
          l.assign(C, r._`${k}[${R}]`), i.error(), l.assign(y, false).break();
        }).code(r._`${k}[${R}] = ${z}`);
      });
    }
    function f(z, C) {
      let R = (0, s.useFunc)(l, a.default), S = l.name("outer");
      l.label(S).for(r._`;${z}--;`, () => l.for(r._`${C} = ${z}; ${C}--;`, () => l.if(r._`${R}(${c}[${z}], ${c}[${C}])`, () => {
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
    let E = d.length >= _.opts.loopEnum, P, y = () => P !== null && P !== void 0 ? P : P = (0, r.useFunc)(i, s.default), b;
    if (E || c) b = i.let("valid"), n.block$data(b, p);
    else {
      if (!Array.isArray(d)) throw Error("ajv implementation error");
      let g = i.const("vSchema", m);
      b = (0, t.or)(...d.map((f, z) => h(g, z)));
    }
    n.pass(b);
    function p() {
      i.assign(b, false), i.forOf("v", m, (g) => i.if(t._`${y()}(${l}, ${g})`, () => i.assign(b, true).break()));
    }
    function h(g, f) {
      let z = d[f];
      return typeof z === "object" && z !== null ? t._`${y()}(${l}, ${g}[${f}])` : t._`${l} === ${z}`;
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
    let E = l.const("len", t._`${d}.length`);
    if (c === false) n.setParams({ len: i.length }), n.pass(t._`${E} <= ${i.length}`);
    else if (typeof c == "object" && !(0, r.alwaysValidSchema)(_, c)) {
      let y = l.var("valid", t._`${E} <= ${i.length}`);
      l.if((0, t.not)(y), () => P(y)), n.ok(y);
    }
    function P(y) {
      l.forRange("i", i.length, E, (b) => {
        if (n.subschema({ keyword: m, dataProp: b, dataPropType: r.Type.Num }, y), !_.allErrors) l.if((0, t.not)(y), () => l.break());
      });
    }
  }
  e4.validateAdditionalItems = a, e4.default = s;
}), Di = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateTuple = void 0;
  let t = te(), r = ne(), s = Ue(), a = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(i) {
    let { schema: l, it: c } = i;
    if (Array.isArray(l)) return n(i, "additionalItems", l);
    if (c.items = true, (0, r.alwaysValidSchema)(c, l)) return;
    i.ok((0, s.validateArray)(i));
  } };
  function n(i, l, c = i.schema) {
    let { gen: d, parentSchema: m, data: _, keyword: E, it: P } = i;
    if (p(m), P.opts.unevaluated && c.length && P.items !== true) P.items = r.mergeEvaluated.items(d, c.length, P.items);
    let y = d.name("valid"), b = d.const("len", t._`${_}.length`);
    c.forEach((h, g) => {
      if ((0, r.alwaysValidSchema)(P, h)) return;
      d.if(t._`${b} > ${g}`, () => i.subschema({ keyword: E, schemaProp: g, dataProp: g }, y)), i.ok(y);
    });
    function p(h) {
      let { opts: g, errSchemaPath: f } = P, z = c.length, C = z === h.minItems && (z === h.maxItems || h[l] === false);
      if (g.strictTuples && !C) {
        let R = `"${E}" is ${z}-tuple, but minItems or maxItems/${l} are not specified or different at path "${f}"`;
        (0, r.checkStrictMode)(P, R, g.strictTuples);
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
  let t = te(), r = ne(), s = Ue(), a = Ui(), n = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: i } }) => t.str`must NOT have more than ${i} items`, params: ({ params: { len: i } }) => t._`{limit: ${i}}` }, code(i) {
    let { schema: l, parentSchema: c, it: d } = i, { prefixItems: m } = c;
    if (d.items = true, (0, r.alwaysValidSchema)(d, l)) return;
    if (m) (0, a.validateAdditionalItems)(i, m);
    else i.ok((0, s.validateArray)(i));
  } };
  e4.default = n;
}), Mu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: a, max: n } }) => n === void 0 ? t.str`must contain at least ${a} valid item(s)` : t.str`must contain at least ${a} and no more than ${n} valid item(s)`, params: ({ params: { min: a, max: n } }) => n === void 0 ? t._`{minContains: ${a}}` : t._`{minContains: ${a}, maxContains: ${n}}` }, code(a) {
    let { gen: n, schema: i, parentSchema: l, data: c, it: d } = a, m, _, { minContains: E, maxContains: P } = l;
    if (d.opts.next) m = E === void 0 ? 1 : E, _ = P;
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
    let b = n.name("valid");
    if (_ === void 0 && m === 1) h(b, () => n.if(b, () => n.break()));
    else if (m === 0) {
      if (n.let(b, true), _ !== void 0) n.if(t._`${c}.length > 0`, p);
    } else n.let(b, false), p();
    a.result(b, () => a.reset());
    function p() {
      let f = n.name("_valid"), z = n.let("count", 0);
      h(f, () => n.if(f, () => g(z)));
    }
    function h(f, z) {
      n.forRange("i", 0, y, (C) => {
        a.subschema({ keyword: "contains", dataProp: C, dataPropType: r.Type.Num, compositeRule: true }, f), z();
      });
    }
    function g(f) {
      if (n.code(t._`${f}++`), _ === void 0) n.if(t._`${f} >= ${m}`, () => n.assign(b, true).break());
      else if (n.if(t._`${f} > ${_}`, () => n.assign(b, false).break()), m === 1) n.assign(b, true);
      else n.if(t._`${f} >= ${m}`, () => n.assign(b, true));
    }
  } };
  e4.default = s;
}), Sn = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateSchemaDeps = e4.validatePropertyDeps = e4.error = void 0;
  let t = te(), r = ne(), s = Ue();
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
      let E = Array.isArray(c[_]) ? d : m;
      E[_] = c[_];
    }
    return [d, m];
  }
  function i(c, d = c.schema) {
    let { gen: m, data: _, it: E } = c;
    if (Object.keys(d).length === 0) return;
    let P = m.let("missing");
    for (let y in d) {
      let b = d[y];
      if (b.length === 0) continue;
      let p = (0, s.propertyInData)(m, _, y, E.opts.ownProperties);
      if (c.setParams({ property: y, depsCount: b.length, deps: b.join(", ") }), E.allErrors) m.if(p, () => {
        for (let h of b) (0, s.checkReportMissingProp)(c, h);
      });
      else m.if(t._`${p} && (${(0, s.checkMissingProp)(c, b, P)})`), (0, s.reportMissingProp)(c, P), m.else();
    }
  }
  e4.validatePropertyDeps = i;
  function l(c, d = c.schema) {
    let { gen: m, data: _, keyword: E, it: P } = c, y = m.name("valid");
    for (let b in d) {
      if ((0, r.alwaysValidSchema)(P, d[b])) continue;
      m.if((0, s.propertyInData)(m, _, b, P.opts.ownProperties), () => {
        let p = c.subschema({ keyword: E, schemaProp: b }, y);
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
  let t = Ue(), r = te(), s = Le(), a = ne(), n = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: i }) => r._`{additionalProperty: ${i.additionalProperty}}` }, code(i) {
    let { gen: l, schema: c, parentSchema: d, data: m, errsCount: _, it: E } = i;
    if (!_) throw Error("ajv implementation error");
    let { allErrors: P, opts: y } = E;
    if (E.props = true, y.removeAdditional !== "all" && (0, a.alwaysValidSchema)(E, c)) return;
    let b = (0, t.allSchemaProperties)(d.properties), p = (0, t.allSchemaProperties)(d.patternProperties);
    h(), i.ok(r._`${_} === ${s.default.errors}`);
    function h() {
      l.forIn("key", m, (R) => {
        if (!b.length && !p.length) z(R);
        else l.if(g(R), () => z(R));
      });
    }
    function g(R) {
      let S;
      if (b.length > 8) {
        let k = (0, a.schemaRefOrVal)(E, d.properties, "properties");
        S = (0, t.isOwnProperty)(l, k, R);
      } else if (b.length) S = (0, r.or)(...b.map((k) => r._`${R} === ${k}`));
      else S = r.nil;
      if (p.length) S = (0, r.or)(S, ...p.map((k) => r._`${(0, t.usePattern)(i, k)}.test(${R})`));
      return (0, r.not)(S);
    }
    function f(R) {
      l.code(r._`delete ${m}[${R}]`);
    }
    function z(R) {
      if (y.removeAdditional === "all" || y.removeAdditional && c === false) {
        f(R);
        return;
      }
      if (c === false) {
        if (i.setParams({ additionalProperty: R }), i.error(), !P) l.break();
        return;
      }
      if (typeof c == "object" && !(0, a.alwaysValidSchema)(E, c)) {
        let S = l.name("valid");
        if (y.removeAdditional === "failing") C(R, S, false), l.if((0, r.not)(S), () => {
          i.reset(), f(R);
        });
        else if (C(R, S), !P) l.if((0, r.not)(S), () => l.break());
      }
    }
    function C(R, S, k) {
      let L = { keyword: "additionalProperties", dataProp: R, dataPropType: a.Type.Str };
      if (k === false) Object.assign(L, { compositeRule: true, createErrors: false, allErrors: false });
      i.subschema(L, S);
    }
  } };
  e4.default = n;
}), Au = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = as(), r = Ue(), s = ne(), a = Vi(), n = { keyword: "properties", type: "object", schemaType: "object", code(i) {
    let { gen: l, schema: c, parentSchema: d, data: m, it: _ } = i;
    if (_.opts.removeAdditional === "all" && d.additionalProperties === void 0) a.default.code(new t.KeywordCxt(_, a.default, "additionalProperties"));
    let E = (0, r.allSchemaProperties)(c);
    for (let h of E) _.definedProperties.add(h);
    if (_.opts.unevaluated && E.length && _.props !== true) _.props = s.mergeEvaluated.props(l, (0, s.toHash)(E), _.props);
    let P = E.filter((h) => !(0, s.alwaysValidSchema)(_, c[h]));
    if (P.length === 0) return;
    let y = l.name("valid");
    for (let h of P) {
      if (b(h)) p(h);
      else {
        if (l.if((0, r.propertyInData)(l, m, h, _.opts.ownProperties)), p(h), !_.allErrors) l.else().var(y, true);
        l.endIf();
      }
      i.it.definedProperties.add(h), i.ok(y);
    }
    function b(h) {
      return _.opts.useDefaults && !_.compositeRule && c[h].default !== void 0;
    }
    function p(h) {
      i.subschema({ keyword: "properties", schemaProp: h, dataProp: h }, y);
    }
  } };
  e4.default = n;
}), Lu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ue(), r = te(), s = ne(), a = ne(), n = { keyword: "patternProperties", type: "object", schemaType: "object", code(i) {
    let { gen: l, schema: c, data: d, parentSchema: m, it: _ } = i, { opts: E } = _, P = (0, t.allSchemaProperties)(c), y = P.filter((C) => (0, s.alwaysValidSchema)(_, c[C]));
    if (P.length === 0 || y.length === P.length && (!_.opts.unevaluated || _.props === true)) return;
    let b = E.strictSchema && !E.allowMatchingProperties && m.properties, p = l.name("valid");
    if (_.props !== true && !(_.props instanceof r.Name)) _.props = (0, a.evaluatedPropsToName)(l, _.props);
    let { props: h } = _;
    g();
    function g() {
      for (let C of P) {
        if (b) f(C);
        if (_.allErrors) z(C);
        else l.var(p, true), z(C), l.if(p);
      }
    }
    function f(C) {
      for (let R in b) if (new RegExp(C).test(R)) (0, s.checkStrictMode)(_, `property ${R} matches pattern ${C} (use allowMatchingProperties)`);
    }
    function z(C) {
      l.forIn("key", d, (R) => {
        l.if(r._`${(0, t.usePattern)(i, C)}.test(${R})`, () => {
          let S = y.includes(C);
          if (!S) i.subschema({ keyword: "patternProperties", schemaProp: C, dataProp: R, dataPropType: a.Type.Str }, p);
          if (_.opts.unevaluated && h !== true) l.assign(r._`${h}[${R}]`, true);
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
  let t = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: Ue().validateUnion, error: { message: "must match a schema in anyOf" } };
  e4.default = t;
}), Vu = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = ne(), s = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: a }) => t._`{passingSchemas: ${a.passing}}` }, code(a) {
    let { gen: n, schema: i, parentSchema: l, it: c } = a;
    if (!Array.isArray(i)) throw Error("ajv implementation error");
    if (c.opts.discriminator && l.discriminator) return;
    let d = i, m = n.let("valid", false), _ = n.let("passing", null), E = n.name("_valid");
    a.setParams({ passing: _ }), n.block(P), a.result(m, () => a.reset(), () => a.error(true));
    function P() {
      d.forEach((y, b) => {
        let p;
        if ((0, r.alwaysValidSchema)(c, y)) n.var(E, true);
        else p = a.subschema({ keyword: "oneOf", schemaProp: b, compositeRule: true }, E);
        if (b > 0) n.if(t._`${E} && ${m}`).assign(m, false).assign(_, t._`[${_}, ${b}]`).else();
        n.if(E, () => {
          if (n.assign(m, true), n.assign(_, b), p) a.mergeEvaluated(p, t.Name);
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
    let _ = i.let("valid", true), E = i.name("_valid");
    if (P(), n.reset(), d && m) {
      let b = i.let("ifClause");
      n.setParams({ ifClause: b }), i.if(E, y("then", b), y("else", b));
    } else if (d) i.if(E, y("then"));
    else i.if((0, t.not)(E), y("else"));
    n.pass(_, () => n.error(true));
    function P() {
      let b = n.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, E);
      n.mergeEvaluated(b);
    }
    function y(b, p) {
      return () => {
        let h = n.subschema({ keyword: b }, E);
        if (i.assign(_, E), n.mergeValidEvaluated(h, _), p) i.assign(p, t._`${b}`);
        else n.setParams({ ifClause: b });
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
  let t = Ui(), r = Ou(), s = Di(), a = Nu(), n = Mu(), i = Sn(), l = ju(), c = Vi(), d = Au(), m = Lu(), _ = Uu(), E = Du(), P = Vu(), y = xu(), b = Fu(), p = Hu();
  function h(g = false) {
    let f = [_.default, E.default, P.default, y.default, b.default, p.default, l.default, c.default, i.default, d.default, m.default];
    if (g) f.push(r.default, a.default);
    else f.push(t.default, s.default);
    return f.push(n.default), f;
  }
  e4.default = h;
}), Ku = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = te(), r = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: s }) => t.str`must match format "${s}"`, params: ({ schemaCode: s }) => t._`{format: ${s}}` }, code(s, a) {
    let { gen: n, data: i, $data: l, schema: c, schemaCode: d, it: m } = s, { opts: _, errSchemaPath: E, schemaEnv: P, self: y } = m;
    if (!_.validateFormats) return;
    if (l) b();
    else p();
    function b() {
      let h = n.scopeValue("formats", { ref: y.formats, code: _.code.formats }), g = n.const("fDef", t._`${h}[${d}]`), f = n.let("fType"), z = n.let("format");
      n.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => n.assign(f, t._`${g}.type || "string"`).assign(z, t._`${g}.validate`), () => n.assign(f, t._`"string"`).assign(z, g)), s.fail$data((0, t.or)(C(), R()));
      function C() {
        if (_.strictSchema === false) return t.nil;
        return t._`${d} && !${z}`;
      }
      function R() {
        let S = P.$async ? t._`(${g}.async ? await ${z}(${i}) : ${z}(${i}))` : t._`${z}(${i})`, k = t._`(typeof ${z} == "function" ? ${S} : ${z}.test(${i}))`;
        return t._`${z} && ${z} !== true && ${f} === ${a} && !${k}`;
      }
    }
    function p() {
      let h = y.formats[c];
      if (!h) {
        C();
        return;
      }
      if (h === true) return;
      let [g, f, z] = R(h);
      if (g === a) s.pass(S());
      function C() {
        if (_.strictSchema === false) {
          y.logger.warn(k());
          return;
        }
        throw Error(k());
        function k() {
          return `unknown format "${c}" ignored in schema at path "${E}"`;
        }
      }
      function R(k) {
        let L = k instanceof RegExp ? (0, t.regexpCode)(k) : _.code.formats ? t._`${_.code.formats}${(0, t.getProperty)(c)}` : void 0, H = n.scopeValue("formats", { key: c, ref: k, code: L });
        if (typeof k == "object" && !(k instanceof RegExp)) return [k.type || "string", k.validate, t._`${H}.validate`];
        return ["string", k, H];
      }
      function S() {
        if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
          if (!P.$async) throw Error("async format in sync schema");
          return t._`await ${z}(${i})`;
        }
        return typeof f == "function" ? t._`${z}(${i})` : t._`${z}.test(${i})`;
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
    let { gen: c, data: d, schema: m, parentSchema: _, it: E } = l, { oneOf: P } = _;
    if (!E.opts.discriminator) throw Error("discriminator: requires discriminator option");
    let y = m.propertyName;
    if (typeof y != "string") throw Error("discriminator: requires propertyName");
    if (m.mapping) throw Error("discriminator: mapping is not supported");
    if (!P) throw Error("discriminator: requires oneOf keyword");
    let b = c.let("valid", false), p = c.const("tag", t._`${d}${(0, t.getProperty)(y)}`);
    c.if(t._`typeof ${p} == "string"`, () => h(), () => l.error(false, { discrError: r.DiscrError.Tag, tag: p, tagName: y })), l.ok(b);
    function h() {
      let z = f();
      c.if(false);
      for (let C in z) c.elseIf(t._`${p} === ${C}`), c.assign(b, g(z[C]));
      c.else(), l.error(false, { discrError: r.DiscrError.Mapping, tag: p, tagName: y }), c.endIf();
    }
    function g(z) {
      let C = c.name("valid"), R = l.subschema({ keyword: "oneOf", schemaProp: z }, C);
      return l.mergeEvaluated(R, t.Name), C;
    }
    function f() {
      var z;
      let C = {}, R = k(_), S = true;
      for (let N = 0; N < P.length; N++) {
        let x = P[N];
        if ((x === null || x === void 0 ? void 0 : x.$ref) && !(0, n.schemaHasRulesButRef)(x, E.self.RULES)) {
          let G = x.$ref;
          if (x = s.resolveRef.call(E.self, E.schemaEnv.root, E.baseId, G), x instanceof s.SchemaEnv) x = x.schema;
          if (x === void 0) throw new a.default(E.opts.uriResolver, E.baseId, G);
        }
        let W = (z = x === null || x === void 0 ? void 0 : x.properties) === null || z === void 0 ? void 0 : z[y];
        if (typeof W != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
        S = S && (R || k(x)), L(W, N);
      }
      if (!S) throw Error(`discriminator: "${y}" must be required`);
      return C;
      function k({ required: N }) {
        return Array.isArray(N) && N.includes(y);
      }
      function L(N, x) {
        if (N.const) H(N.const, x);
        else if (N.enum) for (let W of N.enum) H(W, x);
        else throw Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
      }
      function H(N, x) {
        if (typeof N != "string" || N in C) throw Error(`discriminator: "${y}" values must be unique strings`);
        C[N] = x;
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
  var E = os();
  Object.defineProperty(e4, "MissingRefError", { enumerable: true, get: function() {
    return E.default;
  } });
}), Gi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicAnchor = void 0;
  let t = te(), r = Le(), s = _o(), a = pn(), n = { keyword: "$dynamicAnchor", schemaType: "string", code: (c) => i(c, c.schema) };
  function i(c, d) {
    let { gen: m, it: _ } = c;
    _.schemaEnv.root.dynamicAnchors[d] = true;
    let E = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`, P = _.errSchemaPath === "#" ? _.validateName : l(c);
    m.if(t._`!${E}`, () => m.assign(E, P));
  }
  e4.dynamicAnchor = i;
  function l(c) {
    let { schemaEnv: d, schema: m, self: _ } = c.it, { root: E, baseId: P, localRefs: y, meta: b } = d.root, { schemaId: p } = _.opts, h = new s.SchemaEnv({ schema: m, schemaId: p, root: E, baseId: P, localRefs: y, meta: b });
    return s.compileSchema.call(_, h), (0, a.getValidate)(c, h);
  }
  e4.default = n;
}), Bi = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicRef = void 0;
  let t = te(), r = Le(), s = pn(), a = { keyword: "$dynamicRef", schemaType: "string", code: (i) => n(i, i.schema) };
  function n(i, l) {
    let { gen: c, keyword: d, it: m } = i;
    if (l[0] !== "#") throw Error(`"${d}" only supports hash fragment reference`);
    let _ = l.slice(1);
    if (m.allErrors) E();
    else {
      let y = c.let("valid", false);
      E(y), i.ok(y);
    }
    function E(y) {
      if (m.schemaEnv.root.dynamicAnchors[_]) {
        let b = c.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
        c.if(b, P(b, y), P(m.validateName, y));
      } else P(m.validateName, y)();
    }
    function P(y, b) {
      return b ? () => c.block(() => {
        (0, s.callRef)(i, y), c.let(b, true);
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
  let t = te(), r = ne(), s = Le(), a = { keyword: "unevaluatedProperties", type: "object", schemaType: ["boolean", "object"], trackErrors: true, error: { message: "must NOT have unevaluated properties", params: ({ params: n }) => t._`{unevaluatedProperty: ${n.unevaluatedProperty}}` }, code(n) {
    let { gen: i, schema: l, data: c, errsCount: d, it: m } = n;
    if (!d) throw Error("ajv implementation error");
    let { allErrors: _, props: E } = m;
    if (E instanceof t.Name) i.if(t._`${E} !== true`, () => i.forIn("key", c, (p) => i.if(y(E, p), () => P(p))));
    else if (E !== true) i.forIn("key", c, (p) => E === void 0 ? P(p) : i.if(b(E, p), () => P(p)));
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
    function b(p, h) {
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
      let E = n.var("valid", t._`${m} <= ${d}`);
      n.if((0, t.not)(E), () => _(E, d)), a.ok(E);
    }
    c.items = true;
    function _(E, P) {
      n.forRange("i", P, m, (y) => {
        if (a.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: r.Type.Num }, E), !c.allErrors) n.if((0, t.not)(E), () => n.break());
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
    return [t, r, s, a, n, E(this, i), l, E(this, c)].forEach((P) => this.addMetaSchema(P, void 0, false)), this;
    function E(P, y) {
      return _ ? P.$dataMetaSchema(y, d) : y;
    }
  }
  e4.default = m;
}), fd = K((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.MissingRefError = e4.ValidationError = e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = e4.Ajv2020 = void 0;
  let r = ji(), s = od(), a = Ki(), n = pd(), i = "https://json-schema.org/draft/2020-12/schema";
  var l = class extends r.default {
    constructor(E = {}) {
      super({ ...E, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if (super._addVocabularies(), s.default.forEach((E) => this.addVocabulary(E)), this.opts.discriminator) this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: E, meta: P } = this.opts;
      if (!P) return;
      n.default.call(this, E), this.refs["http://json-schema.org/schema"] = i;
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
  function t(N, x) {
    return { validate: N, compare: x };
  }
  e4.fullFormats = { date: t(n, i), time: t(c(true), d), "date-time": t(E(true), P), "iso-time": t(c(), m), "iso-date-time": t(E(), y), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: h, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: H, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: f, int32: { type: "number", validate: R }, int64: { type: "number", validate: S }, float: { type: "number", validate: k }, double: { type: "number", validate: k }, password: true, binary: true }, e4.fastFormats = { ...e4.fullFormats, date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i), time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d), "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, P), "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m), "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i }, e4.formatNames = Object.keys(e4.fullFormats);
  function r(N) {
    return N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0);
  }
  let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function n(N) {
    let x = s.exec(N);
    if (!x) return false;
    let W = +x[1], G = +x[2], se = +x[3];
    return G >= 1 && G <= 12 && se >= 1 && se <= (G === 2 && r(W) ? 29 : a[G]);
  }
  function i(N, x) {
    if (!(N && x)) return;
    if (N > x) return 1;
    if (N < x) return -1;
    return 0;
  }
  let l = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(N) {
    return function(W) {
      let G = l.exec(W);
      if (!G) return false;
      let se = +G[1], le = +G[2], ie = +G[3], Se = G[4], ae = G[5] === "-" ? -1 : 1, O = +(G[6] || 0), U = +(G[7] || 0);
      if (O > 23 || U > 59 || N && !Se) return false;
      if (se <= 23 && le <= 59 && ie < 60) return true;
      let F = le - U * ae, w = se - O * ae - (F < 0 ? 1 : 0);
      return (w === 23 || w === -1) && (F === 59 || F === -1) && ie < 61;
    };
  }
  function d(N, x) {
    if (!(N && x)) return;
    let W = (/* @__PURE__ */ new Date("2020-01-01T" + N)).valueOf(), G = (/* @__PURE__ */ new Date("2020-01-01T" + x)).valueOf();
    if (!(W && G)) return;
    return W - G;
  }
  function m(N, x) {
    if (!(N && x)) return;
    let W = l.exec(N), G = l.exec(x);
    if (!(W && G)) return;
    if (N = W[1] + W[2] + W[3], x = G[1] + G[2] + G[3], N > x) return 1;
    if (N < x) return -1;
    return 0;
  }
  let _ = /t|\s/i;
  function E(N) {
    let x = c(N);
    return function(G) {
      let se = G.split(_);
      return se.length === 2 && n(se[0]) && x(se[1]);
    };
  }
  function P(N, x) {
    if (!(N && x)) return;
    let W = new Date(N).valueOf(), G = new Date(x).valueOf();
    if (!(W && G)) return;
    return W - G;
  }
  function y(N, x) {
    if (!(N && x)) return;
    let [W, G] = N.split(_), [se, le] = x.split(_), ie = i(W, se);
    if (ie === void 0) return;
    return ie || d(G, le);
  }
  let b = /\/|:/, p = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function h(N) {
    return b.test(N) && p.test(N);
  }
  let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function f(N) {
    return g.lastIndex = 0, g.test(N);
  }
  let z = -2147483648, C = 2147483647;
  function R(N) {
    return Number.isInteger(N) && N <= C && N >= z;
  }
  function S(N) {
    return Number.isInteger(N);
  }
  function k() {
    return true;
  }
  let L = /[^\\]\\Z/;
  function H(N) {
    if (L.test(N)) return false;
    try {
      return new RegExp(N), true;
    } catch (x) {
      return false;
    }
  }
}), gd = K((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.formatLimitDefinition = void 0;
  let t = Ji(), r = te(), s = r.operators, a = { formatMaximum: { okStr: "<=", ok: s.LTE, fail: s.GT }, formatMinimum: { okStr: ">=", ok: s.GTE, fail: s.LT }, formatExclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE }, formatExclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE } }, n = { message: ({ keyword: l, schemaCode: c }) => r.str`should be ${a[l].okStr} ${c}`, params: ({ keyword: l, schemaCode: c }) => r._`{comparison: ${a[l].okStr}, limit: ${c}}` };
  e4.formatLimitDefinition = { keyword: Object.keys(a), type: "string", schemaType: "string", $data: true, error: n, code(l) {
    let { gen: c, data: d, schemaCode: m, keyword: _, it: E } = l, { opts: P, self: y } = E;
    if (!P.validateFormats) return;
    let b = new t.KeywordCxt(E, y.RULES.all.format.definition, "format");
    if (b.$data) p();
    else h();
    function p() {
      let f = c.scopeValue("formats", { ref: y.formats, code: P.code.formats }), z = c.const("fmt", r._`${f}[${b.schemaCode}]`);
      l.fail$data((0, r.or)(r._`typeof ${z} != "object"`, r._`${z} instanceof RegExp`, r._`typeof ${z}.compare != "function"`, g(z)));
    }
    function h() {
      let f = b.schema, z = y.formats[f];
      if (!z || z === true) return;
      if (typeof z != "object" || z instanceof RegExp || typeof z.compare != "function") throw Error(`"${_}": format "${f}" does not define "compare" function`);
      let C = c.scopeValue("formats", { key: f, ref: z, code: P.code.formats ? r._`${P.code.formats}${(0, r.getProperty)(f)}` : void 0 });
      l.fail$data(g(C));
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
    let [_, E] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
    if (c(d, m.formats || r.formatNames, _, E), m.keywords) (0, s.default)(d);
    return d;
  };
  l.get = (d, m = "full") => {
    let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
    if (!_) throw Error(`Unknown format "${d}"`);
    return _;
  };
  function c(d, m, _, E) {
    var P, y;
    (P = (y = d.opts.code).formats) !== null && P !== void 0 || (y.formats = a._`require("ajv-formats/dist/formats").${E}`);
    for (let b of m) d.addFormat(b, _[b]);
  }
  t.exports = e4 = l, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = l;
}), yd = Ji(), vd = fd(), bd = $s(_d(), 1), Rd = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]), zd = bd.default;
function wd() {
  let e4 = new vd.Ajv2020({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
  return zd(e4), e4;
}
var Jen = class {
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
    return Oe(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, e4);
  }
  constructor(e4) {
    super(e4);
    this.name = new.target.name, bt(this, new.target);
  }
}, uft = class extends ns {
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
}, jTr = class extends ns {
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
  let { resourceMetadataUrl: s, scope: a } = o1e(t.response);
  if (await BDt(e4, { serverUrl: t.serverUrl, resourceMetadataUrl: s, scope: a, fetchFn: t.fetchFn, ...r }) !== "AUTHORIZED") throw new nO();
}
function mc(e4, t) {
  return { token: async () => (await e4.tokens())?.access_token, onUnauthorized: async (r) => $d(e4, r, t) };
}
var nO = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnauthorizedError" });
  }
  static [Symbol.hasInstance](e4) {
    return Oe(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, e4);
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
    if (r) throw new uft("authorization_response", t, void 0);
    return;
  }
  if (e4 !== t) throw new uft("authorization_response", t, e4);
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
    l = (await GTr(s, a)).authorizationServerMetadata;
  } catch {
    l = void 0;
  }
  if (!l) throw new nO("Authorization callback failed and the issuer could not be verified");
  zo({ iss: n, expectedIssuer: l.issuer, issParameterSupported: Ro(l) });
  let c = e4.get("error");
  if (c) throw new y4(c, e4.get("error_description") ?? c, e4.get("error_uri") ?? void 0);
  throw new nO("Authorization callback contained neither `code` nor `error`");
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
function kd(e4, t, r, s) {
  let { client_id: a, client_secret: n } = t;
  switch (e4) {
    case "client_secret_basic":
      qd(a, n, r);
      return;
    case "client_secret_post":
      Id(a, n, s);
      return;
    case "none":
      Od(a, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e4}`);
  }
}
function qd(e4, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e4}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function Id(e4, t, r) {
  if (r.set("client_id", e4), t) r.set("client_secret", t);
}
function Od(e4, t) {
  t.set("client_id", e4);
}
function fc(e4) {
  return e4 === "localhost" || e4 === "127.0.0.1" || e4 === "[::1]" || e4 === "::1";
}
function Nd(e4) {
  let t = new URL(String(e4));
  if (t.protocol !== "https:" && !fc(t.hostname)) throw new uc(t.href);
  return t;
}
function Md(e4) {
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
function jd(e4) {
  let t = e4.clientMetadata;
  return { ...t, grant_types: t.grant_types ?? (e4.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]), application_type: t.application_type ?? Md(t.redirect_uris) };
}
async function Zi(e4) {
  let t = e4 instanceof Response ? e4.status : void 0, r = e4 instanceof Response ? await e4.text() : e4;
  try {
    let s = FDt.parse(JSON.parse(r));
    return y4.fromResponse(s);
  } catch (s) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${s}. Raw body: ${r}`;
    return new y4(Uae.ServerError, a);
  }
}
async function BDt(e4, t) {
  try {
    return await bn(e4, t);
  } catch (r) {
    if (r instanceof y4) {
      if (r.code === Uae.InvalidClient || r.code === Uae.UnauthorizedClient) return await e4.invalidateCredentials?.("client"), await e4.invalidateCredentials?.("tokens"), await bn(e4, t);
      else if (r.code === Uae.InvalidGrant) return await e4.invalidateCredentials?.("tokens"), await bn(e4, t);
    }
    throw r;
  }
}
function Ad(e4) {
  let { requestedScope: t, resourceMetadata: r, authServerMetadata: s, clientMetadata: a } = e4, n = t || r?.scopes_supported?.join(" ") || a.scope;
  if (n && s?.scopes_supported?.includes("offline_access") && !n.split(" ").includes("offline_access") && a.grant_types?.includes("refresh_token")) n = `${n} offline_access`;
  return n;
}
async function bn(e4, { serverUrl: t, authorizationCode: r, iss: s, scope: a, resourceMetadataUrl: n, fetchFn: i, skipIssuerMetadataValidation: l, forceReauthorization: c }) {
  let d = jd(e4), m = await e4.discoveryState?.(), _, E, P, y, b = n;
  if (!b && m?.resourceMetadataUrl) b = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (E = m.authorizationServerUrl, _ = m.resourceMetadata, P = m.authorizationServerMetadata ?? await jDt(E, { fetchFn: i, skipIssuerValidation: l }), !_) try {
      _ = await WTr(t, { resourceMetadataUrl: b }, i);
    } catch (N) {
      if (N instanceof TypeError) throw N;
    }
    if (P !== m.authorizationServerMetadata || _ !== m.resourceMetadata) await e4.saveDiscoveryState?.({ authorizationServerUrl: String(E), resourceMetadataUrl: b?.toString(), resourceMetadata: _, authorizationServerMetadata: P });
  } else {
    let N = await GTr(t, { resourceMetadataUrl: b, fetchFn: i, skipIssuerMetadataValidation: l });
    E = N.authorizationServerUrl, P = N.authorizationServerMetadata, _ = N.resourceMetadata, y = { authorizationServerUrl: String(E), resourceMetadataUrl: b?.toString(), resourceMetadata: _, authorizationServerMetadata: P };
  }
  let p = P?.issuer ?? String(E), h = { issuer: p };
  if (await e4.saveAuthorizationServerUrl?.(p), r !== void 0) {
    let N = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (N === void 0) {
      if (e4.saveDiscoveryState !== void 0) throw new gn("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", p);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) — see docs/migration/upgrade-to-v2.md §SEP-2352.");
    } else if (!dc(N, p)) throw new gn(N, p);
  }
  if (y) await e4.saveDiscoveryState?.(y);
  let g = await Ud(t, e4, _);
  if (g) await e4.saveResourceUrl?.(String(g));
  let f = Ad({ requestedScope: a, resourceMetadata: _, authServerMetadata: P, clientMetadata: e4.clientMetadata }), z = await Promise.resolve(e4.clientInformation(h)), C = Xi(z, p, { canPersistStamp: e4.saveClientInformation !== void 0 });
  if (C === void 0 && z?.issuer && e4.saveClientInformation === void 0) throw new gn(z.issuer, p);
  if (C && C.issuer === void 0) C = { ...C, issuer: p }, await e4.saveClientInformation?.(C, h);
  if (!C) {
    if (r !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let N = P?.client_id_metadata_document_supported === true, x = e4.clientMetadataUrl;
    if (x && !Ld(x)) throw new y4(Uae.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${x}`);
    if (N && x) C = { client_id: x, issuer: p }, await e4.saveClientInformation?.(C, h);
    else {
      if (!e4.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      C = { ...await Kd(E, { metadata: P, clientMetadata: d, scope: f, fetchFn: i }), issuer: p }, await e4.saveClientInformation(C, h);
    }
  }
  let R = !e4.redirectUrl;
  if (r !== void 0 || R) {
    if (r !== void 0) zo({ iss: s, expectedIssuer: P?.issuer, issParameterSupported: Ro(P) });
    let N = await Hd(e4, E, { metadata: P, resource: g, authorizationCode: r, iss: s, scope: f, fetchFn: i });
    return await e4.saveTokens({ ...N, issuer: p }, h), "AUTHORIZED";
  }
  let S = Xi(await e4.tokens(h), p);
  if (S && S.issuer === void 0) S = { ...S, issuer: p }, await e4.saveTokens(S, h);
  if (S?.refresh_token && !c) try {
    let N = await bbo(E, { metadata: P, clientInformation: C, refreshToken: S.refresh_token, resource: g, addClientAuthentication: e4.addClientAuthentication, fetchFn: i });
    return await e4.saveTokens({ ...N, issuer: p }, h), "AUTHORIZED";
  } catch (N) {
    if (N instanceof uc) throw N;
    if (!(N instanceof y4) || N.code === Uae.ServerError) ;
    else throw N;
  }
  let k = e4.state ? await e4.state() : void 0, { authorizationUrl: L, codeVerifier: H } = await _bo(E, { metadata: P, clientInformation: C, state: k, redirectUrl: e4.redirectUrl, scope: f, resource: g });
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
function o1e(e4) {
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
async function WTr(e4, t, r = fetch) {
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
async function jDt(e4, { fetchFn: t = fetch, protocolVersion: r = Ot, skipIssuerValidation: s = false } = {}) {
  let a = { "MCP-Protocol-Version": r, Accept: "application/json" }, n = Fd(e4);
  for (let { url: i, type: l } of n) {
    let c = await Sc(i, a, t);
    if (!c) continue;
    if (!c.ok) {
      if (await c.text?.().catch(() => {
      }), c.status >= 400 && c.status < 500 || c.status === 502) continue;
      throw Error(`HTTP ${c.status} trying to load ${l === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`);
    }
    let d = l === "oauth" ? cft.parse(await c.json()) : NDt.parse(await c.json());
    if (!s) {
      let m = typeof e4 === "string" ? e4 : e4.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new uft("metadata", m, d.issuer);
    }
    return d;
  }
}
async function GTr(e4, t) {
  let r, s;
  try {
    if (r = await WTr(e4, { resourceMetadataUrl: t?.resourceMetadataUrl }, t?.fetchFn), r.authorization_servers && r.authorization_servers.length > 0) s = r.authorization_servers[0];
  } catch (n) {
    if (n instanceof TypeError) throw n;
  }
  if (!s) s = String(new URL("/", e4));
  let a = await jDt(s, { fetchFn: t?.fetchFn, skipIssuerValidation: t?.skipIssuerMetadataValidation });
  return { authorizationServerUrl: s, authorizationServerMetadata: a, resourceMetadata: r };
}
async function _bo(e4, { metadata: t, clientInformation: r, redirectUrl: s, scope: a, state: n, resource: i }) {
  let l;
  if (t) {
    if (l = new URL(t.authorization_endpoint), !t.response_types_supported.includes(yn)) throw Error(`Incompatible auth server: does not support response type ${yn}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(vn)) throw Error(`Incompatible auth server: does not support code challenge method ${vn}`);
  } else l = new URL("/authorize", e4);
  let c = await Stn(), { code_verifier: d, code_challenge: m } = c;
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
  let l = Nd(t?.token_endpoint ?? new URL("/token", e4)), c = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
  if (n) r.set("resource", n.href);
  if (a) await a(c, r, l, t);
  else if (s) kd(Td(s, t?.token_endpoint_auth_methods_supported ?? []), s, c, r);
  let d = await (i ?? fetch)(l, { method: "POST", headers: c, body: r });
  if (!d.ok) throw await Zi(d);
  let m = await d.json();
  try {
    return $Dt.parse(m);
  } catch (_) {
    if (typeof m === "object" && m !== null && "error" in m) throw await Zi(JSON.stringify(m));
    throw _;
  }
}
async function YCs(e4, { metadata: t, clientInformation: r, authorizationCode: s, iss: a, codeVerifier: n, redirectUri: i, resource: l, addClientAuthentication: c, fetchFn: d }) {
  return zo({ iss: a, expectedIssuer: t?.issuer, issParameterSupported: Ro(t) }), $n(e4, { metadata: t, tokenRequestParams: gc(s, n, i), clientInformation: r, addClientAuthentication: c, resource: l, fetchFn: d });
}
async function bbo(e4, { metadata: t, clientInformation: r, refreshToken: s, resource: a, addClientAuthentication: n, fetchFn: i }) {
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
  if (!l.ok) throw new jTr({ status: l.status, body: await l.text(), submittedMetadata: i });
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
      return { kind: "error", error: new bi(ii.RequestTimeout, `Version negotiation probe timed out after ${e4.timeoutMs}ms`, { timeout: e4.timeoutMs }) };
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
  return { kind: "error", error: new bi(ii.EraNegotiationFailed, `Version negotiation probe failed: ${rh(e4)}`, { cause: e4 }) };
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
      if (n !== void 0 && (mOe(a) || sEe(a)) && a.id === n.id) {
        if (s._pending = void 0, mOe(a)) n.resolve({ kind: "response", result: a.result });
        else n.resolve({ kind: "response", error: a.error });
        return;
      }
      if (n !== void 0 && s._transportKind === "http" && (mOe(a) || sEe(a)) && !s._issuedIds.has(a.id)) {
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
      if (r instanceof RT) {
        let s = r.data?.text;
        return { kind: "http-error", status: r.data.status, body: typeof s === "string" ? s : void 0 };
      }
      if (r instanceof nO || r instanceof Error && r.name === "UnauthorizedError") return { kind: "auth-required", error: r };
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
      let E = await i.exchange((b) => ch(b, d, t.clientInfo, t.capabilities), r);
      if (E.kind === "timeout" && _ > 0) {
        _--;
        continue;
      }
      let P = lh(E, r);
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
          let b = P.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
          if (e4.kind === "pin") throw new bi(ii.EraNegotiationFailed, b === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e4.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${b} before the server offered pinned protocol version ${e4.version} (no fallback in pin mode)`);
          if (!e4.fallbackAvailable) throw new bi(ii.EraNegotiationFailed, b === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${b} and this client supports no pre-2026-07-28 protocol version to fall back to`);
          if (b !== void 0 && t.disposableProbe !== true) throw new bi(ii.EraNegotiationFailed, `Version negotiation failed: ${b} (this transport probed in place — the disposable sibling probe requires the SDK's base StdioClientTransport)`);
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
  let n = new t.constructor({ ...r, stderr: "ignore" }), i = t.close, l = false, c, d = new Promise((_, E) => {
    c = () => E(nc());
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
  return new bi(ii.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
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
    if (e4.kind === "modern" && z8e.safeParse(e4.discover).success) return e4;
  }
  throw new bi(ii.EraNegotiationFailed, "connect({ prior }): unrecognized prior — expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var cc = { "notifications/tools/list_changed": ["tools/list"], "notifications/prompts/list_changed": ["prompts/list"], "notifications/resources/list_changed": ["resources/list", "resources/templates/list"] }, fh = 64, Sbo = class extends Ei {
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
      let e4 = new bi(ii.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
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
    if (this._clientInfo = e4, this._capabilities = t?.capabilities ? { ...t.capabilities } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new Jen(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? false, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = vi(t?.inputRequired), this._cache = new Bd(t?.responseCacheStore ?? new Jd(), t?.responseCacheStore !== void 0, (r) => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? fh, t?.listChanged) this._listChangedConfig = t.listChanged;
  }
  buildContext(e4, t) {
    return e4;
  }
  _shouldDropInbound(e4) {
    if (this._negotiatedProtocolVersion !== void 0 && Ge(this._negotiatedProtocolVersion) && Pte(e4)) return "drop";
  }
  _outboundMetaEnvelope() {
    let e4 = this._negotiatedProtocolVersion;
    if (e4 === void 0) return;
    return this._wireCodec().outboundEnvelope({ protocolVersion: e4, clientInfo: this._clientInfo, clientCapabilities: this._capabilities });
  }
  _resolveNonCompleteResult(e4, t) {
    if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new bi(ii.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance — pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, { resultType: "input_required", method: t.request.method }));
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
      if (!n.ok) throw new Cd(n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
      let { params: i } = n.value;
      i.mode = i.mode ?? "form";
      let { supportsFormMode: l, supportsUrlMode: c } = mh(this._capabilities.elicitation);
      if (i.mode === "form" && !l) throw new Cd(ta.InvalidParams, "Client does not support form-mode elicitation requests");
      if (i.mode === "url" && !c) throw new Cd(ta.InvalidParams, "Client does not support URL-mode elicitation requests");
      let d = await t(r, s), m = a.validateResult("elicitation/create", d);
      if (!m.ok && m.reason === "not-in-era") m = a.validateInputResponse("elicitation/create", d);
      if (!m.ok) throw new Cd(m.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
      let _ = m.value, E = i.mode === "form" ? i.requestedSchema : void 0;
      if (i.mode === "form" && _.action === "accept" && _.content && E && this._capabilities.elicitation?.form?.applyDefaults) try {
        bo(E, _.content);
      } catch {
      }
      return _;
    };
    if (e4 === "sampling/createMessage") return async (r, s) => {
      let a = Je(this._negotiatedProtocolVersion), n = a.validateRequest("sampling/createMessage", r);
      if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("sampling/createMessage", r);
      if (!n.ok) throw new Cd(n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
      let { params: i } = n.value, l = await t(r, s), c = Boolean(i.tools || i.toolChoice), d = a.samplingResultVariant(c, l);
      if (!d.ok && d.reason === "not-in-era") d = a.validateInputResponse("sampling/createMessage", l);
      if (!d.ok) throw new Cd(d.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
      return d.value;
    };
    return t;
  }
  assertCapability(e4, t) {
    if (!this._serverCapabilities?.[e4]) throw new bi(ii.CapabilityNotSupported, `Server does not support ${e4} (required for ${t})`);
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
      if (a === void 0) throw new bi(ii.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
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
    let a = r.kind === "auto" && e4._anthropicProbeTimedOut === true && t instanceof Cd, n = a && t.code === ta.UnsupportedProtocolVersion ? yc(t.data) : void 0, i = !a ? void 0 : n === void 0 ? r.modernVersions[0] : r.modernVersions.find((l) => n.includes(l));
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
    if (n === void 0) throw new bi(ii.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
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
        if (!this._serverCapabilities?.logging) throw new bi(ii.CapabilityNotSupported, `Server does not support logging (required for ${e4})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._serverCapabilities?.prompts) throw new bi(ii.CapabilityNotSupported, `Server does not support prompts (required for ${e4})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!this._serverCapabilities?.resources) throw new bi(ii.CapabilityNotSupported, `Server does not support resources (required for ${e4})`);
        if (e4 === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new bi(ii.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e4})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._serverCapabilities?.tools) throw new bi(ii.CapabilityNotSupported, `Server does not support tools (required for ${e4})`);
        break;
      case "completion/complete":
        if (!this._serverCapabilities?.completions) throw new bi(ii.CapabilityNotSupported, `Server does not support completions (required for ${e4})`);
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
        if (!this._capabilities.roots?.listChanged) throw new bi(ii.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e4})`);
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
        if (!this._capabilities.sampling) throw new bi(ii.CapabilityNotSupported, `Client does not support sampling capability (required for ${e4})`);
        break;
      case "elicitation/create":
        if (!this._capabilities.elicitation) throw new bi(ii.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e4})`);
        break;
      case "roots/list":
        if (!this._capabilities.roots) throw new bi(ii.CapabilityNotSupported, `Client does not support roots capability (required for ${e4})`);
        break;
      case "ping":
        break;
    }
  }
  async ping(e4) {
    return this.request({ method: "ping" }, e4);
  }
  async discover(e4) {
    let t = await this._requestWithSchema({ method: "server/discover" }, z8e, e4);
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
      if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new bi(ii.ListPaginationExceeded, `${e4}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, { method: e4, listMaxPages: this._listMaxPages });
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
        throw a instanceof bi ? a : new bi(ii.RequestTimeout, String(a));
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
    if (this.transport === void 0) throw new bi(ii.NotConnected, "Not connected");
    let r = this._negotiatedProtocolVersion;
    if (r === void 0 || !Ge(r)) throw new bi(ii.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, { method: "subscriptions/listen", protocolVersion: r });
    if (t?.signal?.aborted) {
      let g = t.signal.reason;
      throw g instanceof bi ? g : new bi(ii.RequestTimeout, String(g));
    }
    let s = new AbortController(), a = `listen:${this._nextListenId++}`, n = "opening", i, l, c, d, m = new Promise((g, f) => {
      c = g, d = f;
    });
    m.catch(() => {
    });
    let _, E = new Promise((g) => {
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
      if (this._listenState.delete(a), s.abort(), _(g.cause), f) d(g.error ?? new bi(ii.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
    }, y = async () => {
      s.abort(), await this.notification({ method: "notifications/cancelled", params: { requestId: a } }).catch(() => {
      });
    }, b = async () => {
      if (n === "closed") return;
      P({ cause: "local" }), await y();
    };
    this._listenState.set(a, { settle: P });
    let p = t?.timeout ?? ss;
    if (i = setTimeout(() => {
      P({ cause: "remote", error: new bi(ii.RequestTimeout, "subscriptions/listen ack timed out", { timeout: p }) }), y().catch(() => {
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
    return { honoredFilter: await m, close: b, closed: E };
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
      if (sEe(e4)) r.settle({ cause: "remote", error: Cd.fromError(e4.error.code, e4.error.message, e4.error.data) });
      else r.settle({ cause: "graceful", error: new bi(ii.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging") });
      return;
    }
    super._onresponse(e4);
  }
  _onclose() {
    if (this._listenState.size > 0) {
      let e4 = new bi(ii.ConnectionClosed, "Connection closed");
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
      let d = _i(c.declarations, e4.arguments);
      return Object.keys(d).length === 0 ? t : { ...t, headers: { ...t?.headers, ...d } };
    }, a = t?.toolDefinition === void 0 ? await this._cache.outputValidator(e4.name, (c) => this._compileOutputValidator(c)).catch((c) => void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition), n = () => {
      if (a === void 0 || a.ok) return;
      let c = a.compileError, d = (c instanceof Error ? c.message : String(c)).slice(0, 200);
      throw new Cd(ta.InvalidParams, `Tool '${e4.name}' has an invalid outputSchema: ${d}`);
    };
    n();
    let i;
    try {
      i = await this.request({ method: "tools/call", params: e4 }, await s());
    } catch (c) {
      let d = c instanceof Cd && c.code === Jt;
      if (!r || !d || t?.toolDefinition !== void 0) throw c;
      let m = { signal: t?.signal, timeout: t?.timeout, cacheMode: "refresh" };
      await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch((_) => this._reportStoreError(_)), a = await this._cache.outputValidator(e4.name, (_) => this._compileOutputValidator(_)).catch((_) => void this._reportStoreError(_)), n(), i = await this.request({ method: "tools/call", params: e4 }, await s());
    }
    if (t?.allowTask === true && i.resultType === "task") return i;
    let l = a !== void 0 && a.ok ? a.validator : void 0;
    if (l) {
      if (i.structuredContent === void 0 && !i.isError) throw new Cd(ta.InvalidRequest, `Tool ${e4.name} has an output schema but did not return structured content`);
      if (i.structuredContent !== void 0 && !i.isError) try {
        let c = l(i.structuredContent);
        if (!c.valid) throw new Cd(ta.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
      } catch (c) {
        if (c instanceof Cd) throw c;
        throw new Cd(ta.InvalidParams, `Failed to validate structured content: ${c instanceof Error ? c.message : String(c)}`);
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
var zTr = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SseError" });
  }
  static [Symbol.hasInstance](e4) {
    return Oe(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, e4);
  }
  constructor(e4, t, r) {
    super(`SSE error: ${t}`);
    this.code = e4, this.event = r, bt(this, new.target);
  }
}, OUn = class {
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
    this._fetch = t?.fetch, this._fetchWithInit = UDt(t?.fetch, t?.requestInit);
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
      this._eventSource = new n9e(this._url.href, { ...this._eventSourceInit, fetch: async (s, a) => {
        let n = await this._commonHeaders();
        n.set("Accept", "text/event-stream");
        let i = await e4(s, { ...a, headers: n });
        if (i.status === 401) {
          if (this._last401Response = i, i.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: l, scope: c } = o1e(i);
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
          let n = new nO();
          r(n), this.onerror?.(n);
          return;
        }
        let a = new zTr(s.code, s.message, s);
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
          n = Fae.parse(JSON.parse(a.data));
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
    if (!this._oauthProvider) throw new nO("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await pc(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await BDt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new nO("Failed to authorize");
  }
  async close() {
    this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
  }
  async send(e4) {
    return this._send(e4, false);
  }
  async _send(e4, t) {
    if (!this._endpoint) throw new bi(ii.NotConnected, "Not connected");
    try {
      let r = await this._commonHeaders();
      r.set("content-type", "application/json");
      let s = { ...this._requestInit, method: "POST", headers: r, body: JSON.stringify(e4), signal: this._abortController?.signal }, a = await (this._fetch ?? fetch)(this._endpoint, s);
      if (!a.ok) {
        if (a.status === 401 && this._authProvider) {
          if (a.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: i, scope: l } = o1e(a);
            this._resourceMetadataUrl = i, this._scope = l;
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: a, serverUrl: this._url, fetchFn: this._fetchWithInit }), await a.text?.().catch(() => {
          }), this._send(e4, true);
          if (await a.text?.().catch(() => {
          }), t) throw new RT(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: a.statusText });
          throw new nO();
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
var Qen = class {
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
    this._fetch = t?.fetch, this._fetchWithInit = UDt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? gh, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? Sh);
  }
  async _stepUpAuthorize(e4, t) {
    if (this._onInsufficientScope === "throw") throw new Yi({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (!this._oauthProvider) throw new Yi({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (t >= this._maxStepUpRetries) throw new RT(ii.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, { status: 403, statusText: e4.statusText ?? "Forbidden", text: e4.text });
    if (e4.resourceMetadataUrl) this._resourceMetadataUrl = e4.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(), s = _n(this._scope, r?.scope, e4.scope);
    this._scope = s;
    let a = Ed(s, r?.scope);
    return BDt(this._oauthProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: s, forceReauthorization: a, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation });
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
    if (Array.isArray(t) || !Pte(t)) return;
    let r = t.params?._meta?.[Fe];
    if (typeof r !== "string") return;
    e4.set("mcp-protocol-version", r), e4.set("mcp-method", t.method);
    let s = t.params, a = t.method === "resources/read" ? typeof s?.uri === "string" ? s.uri : void 0 : typeof s?.name === "string" ? s.name : void 0;
    if (a !== void 0) e4.set("mcp-name", uo(a));
    let n = t.method.startsWith("tasks/") && typeof s?.taskId === "string" ? s.taskId : void 0;
    if (n !== void 0) e4.set("mcp-name", uo(n));
  }
  _isModernEnvelopedRequest(e4) {
    if (Array.isArray(e4) || !Pte(e4)) return false;
    let t = e4.params?._meta?.[Fe];
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
            let { resourceMetadataUrl: _, scope: E } = o1e(m);
            this._resourceMetadataUrl = _, this._scope = _n(this._scope, E);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: m, serverUrl: this._url, fetchFn: this._fetchWithInit }), await m.text?.().catch(() => {
          }), this._startOrAuthSse(e4, true, r);
          if (await m.text?.().catch(() => {
          }), t) throw new RT(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: m.statusText });
          throw new nO();
        }
        if (m.status === 403) {
          let { resourceMetadataUrl: _, scope: E, error: P, errorDescription: y } = o1e(m);
          if (P === "insufficient_scope") {
            let b = await m.text?.().catch(() => null);
            if (await this._stepUpAuthorize({ scope: E, resourceMetadataUrl: _, errorDescription: y, statusText: m.statusText, text: b }, r) !== "AUTHORIZED") throw new nO();
            return this._startOrAuthSse(e4, t, r + 1);
          }
        }
        if (await m.text?.().catch(() => {
        }), m.status === 405) {
          e4.onRequestStreamEnd?.();
          return;
        }
        throw new RT(ii.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${m.statusText}`, { status: m.status, statusText: m.statusText });
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
        let E = e4.pipeThrough(new TextDecoderStream()).pipeThrough(new btn({ onRetry: (P) => {
          this._serverRetryMs = P;
        } })).getReader();
        while (true) {
          let { value: P, done: y } = await E.read();
          if (y) break;
          if (P.id) c = P.id, d = true, s?.(P.id);
          if (!P.data) continue;
          if (!P.event || P.event === "message") try {
            let b = Fae.parse(JSON.parse(P.data));
            if (mOe(b) || sEe(b)) {
              if (m = true, a !== void 0) b.id = a;
            }
            this.onmessage?.(b);
          } catch (b) {
            this.onerror?.(b);
          }
        }
        if ((r || d) && !m && this._abortController && !l()) this._scheduleReconnection({ resumptionToken: c, onresumptiontoken: s, replayMessageId: a, requestSignal: n, onRequestStreamEnd: i }, 0);
        else if (!l()) i?.();
      } catch (E) {
        if (l()) return;
        if (this.onerror?.(Error(`SSE stream disconnected: ${E}`)), (r || d) && !m && this._abortController && !l()) try {
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
    if (!this._oauthProvider) throw new nO("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await pc(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await BDt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new nO("Failed to authorize");
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
        this._startOrAuthSse({ resumptionToken: a, replayMessageId: Pte(e4) ? e4.id : void 0, requestSignal: t?.requestSignal }).catch((p) => this.onerror?.(p));
        return;
      }
      let i = await this._commonHeaders();
      this._applyBodyDerivedHeaders(i, e4);
      let l = Array.isArray(e4) ? e4.some((p) => IUn(p)) : IUn(e4);
      if (l) i.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [p, h] of Object.entries(t.headers)) {
        if (_h.has(p.toLowerCase())) continue;
        i.set(p, h);
      }
      i.set("content-type", "application/json");
      let c = [...i.get("accept")?.split(",").map((p) => p.trim().toLowerCase()) ?? [], "application/json", "text/event-stream"];
      i.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal, m = t?.requestSignal !== void 0 && d !== void 0 ? lc(d, t.requestSignal) : t?.requestSignal ?? d, _ = { ...this._requestInit, method: "POST", headers: i, body: JSON.stringify(e4), signal: m }, E = await (this._fetch ?? fetch)(this._url, _);
      if (l && E.ok) this._sessionId = E.headers.get("mcp-session-id") || void 0;
      if (!E.ok) {
        if (E.status === 401 && this._authProvider) {
          if (E.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: h, scope: g } = o1e(E);
            this._resourceMetadataUrl = h, this._scope = _n(this._scope, g);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({ response: E, serverUrl: this._url, fetchFn: this._fetchWithInit }), await E.text?.().catch(() => {
          }), this._send(e4, t, true, s);
          if (await E.text?.().catch(() => {
          }), r) throw new RT(ii.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: E.statusText });
          throw new nO();
        }
        let p = await E.text?.().catch(() => null);
        if (E.status === 403) {
          let { resourceMetadataUrl: h, scope: g, error: f, errorDescription: z } = o1e(E);
          if (f === "insufficient_scope") {
            if (await this._stepUpAuthorize({ scope: g, resourceMetadataUrl: h, errorDescription: z, statusText: E.statusText, text: p }, s) !== "AUTHORIZED") throw new nO();
            return this._send(e4, t, r, s + 1);
          }
        }
        if (E.status === 400 && typeof p === "string" && this._isModernEnvelopedRequest(e4)) try {
          let h = Fae.parse(JSON.parse(p)), g = (Array.isArray(e4) ? e4 : [e4]).filter((f) => Pte(f));
          if (sEe(h) && g.some((f) => f.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {
        }
        throw new RT(ii.ClientHttpNotImplemented, `Error POSTing to endpoint: ${p}`, { status: E.status, statusText: E.statusText, text: p });
      }
      if (E.status === 202) {
        if (await E.text?.().catch(() => {
        }), UTr(e4)) this._startOrAuthSse({ resumptionToken: void 0 }).catch((p) => this.onerror?.(p));
        return;
      }
      let P = (Array.isArray(e4) ? e4 : [e4]).some((p) => "method" in p && "id" in p && p.id !== void 0), y = E.headers.get("content-type"), b = Ci(y);
      if (P) if (b === "text/event-stream") this._handleSseStream(E.body, { onresumptiontoken: n, requestSignal: t?.requestSignal, onRequestStreamEnd: t?.onRequestStreamEnd }, false);
      else if (b === "application/json") {
        let p = await E.json(), h = Array.isArray(p) ? p.map((g) => Fae.parse(g)) : [Fae.parse(p)];
        for (let g of h) this.onmessage?.(g);
      } else throw await E.text?.().catch(() => {
      }), new bi(ii.ClientHttpUnexpectedContent, `Unexpected content type: ${y}`, { contentType: y });
      else await E.text?.().catch(() => {
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
      }), !r.ok && r.status !== 405) throw new RT(ii.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, { status: r.status, statusText: r.statusText });
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
  $Dt,
  BDt,
  BTr,
  Cd,
  DDt,
  FDt,
  FTr,
  Fae,
  GTr,
  Gen,
  HDt,
  IUn,
  Jen,
  K8e,
  Ken,
  LDt,
  MDt,
  NDt,
  OUn,
  PUn,
  Pte,
  Qen,
  RT,
  Sbo,
  UDt,
  UTr,
  Uae,
  V8e,
  Ven,
  WTr,
  Wen,
  Xen,
  YCs,
  Yen,
  _bo,
  aft,
  bbo,
  bi,
  cft,
  dft,
  hbo,
  ii,
  jDt,
  jTr,
  lft,
  mOe,
  nO,
  o1e,
  pOe,
  qen,
  sEe,
  tO,
  ta,
  uft,
  y4,
  ybo,
  z8e,
  zTr,
  zen
};
