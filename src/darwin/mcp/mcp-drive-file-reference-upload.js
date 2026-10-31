// darwin/mcp/mcp-drive-file-reference-upload.js — Claude Code 2.1.310（darwin）模块 chunk-nfj5wr3f.js
import { gu } from "../shared/chunk-b2bcd1a3.js";
import { c } from "../agents/third-party.js";
import { R, L5 } from "../telemetry/anthropic-workspace-id.js";
import { nt, U, J, Il } from "../context/not-admin-owned.js";
import { GCt, jh, Cpe } from "../plugins/skills-dir.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { fp } from "../remote/local-agent.js";
import { nr } from "../remote/moved-directory.js";
import { Nu } from "../models/total-tokens-reminder.js";
import { yd } from "../remote/self-hosted.js";
import { qKo, YKo, KEt, $tr, $Vr, Xk, EE, Ynt, kn, k, Nj } from "../settings/global-config-and-gates.js";
import { zs, mb, u1, ez } from "../shared/chunk-f98598c3.js";
import { Trt, FVt, Kor, Fbn, Tkt } from "./toolbox-mcp-server-id.js";
import { ESe, vSe, _wn, FKe } from "./claude-browser.js";
import { OV } from "../auth/env-quad.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { yU } from "./claudeai-mcp-eligibility.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
function EHe(e) {
  let n = Ie().loadedModules.find((r) => r.name === e);
  return n === void 0 || gu(n);
}
function QNo() {
  let e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  return { list: (t) => EHe(t) ? [...e.get(t)?.values() ?? []] : [], own: (t) => {
    let s = e.get(t) ?? /* @__PURE__ */ new Map();
    return e.set(t, s), s;
  }, serverKey: (t) => n.get(t), ownerOfKey: (t) => [...n.entries()].find(([, s]) => s === t)?.[0], keyed: (t, s) => {
    n.set(t, s), r.add(s);
  }, minted: (t) => r.has(t), forget: (t) => {
    e.delete(t), n.delete(t);
  } };
}
var uF = QNo();
var xKs = "anthropic/chromeUploadFiles", be = "anthropic/chromeUploadMaxBytes", PKs = "anthropic/chromeUploadAutoModeOnly", wHe = new nt(() => ({}));
function u9n(e, n) {
  let r = e?.[be];
  return typeof r === "number" && Number.isInteger(r) && r > 0 ? Math.min(r, n) : n;
}
function u_t(e) {
  return e !== void 0 && GCt(e.type) && e.scope !== "project" && e.relayed !== true && !jh(e);
}
function G0(e, n) {
  if (n.type === "sdk" && u_t(n)) return "sdk";
  if (jh(n) || ce(e, n.scope)) return "plugin";
  return n.scope;
}
function p9n(e) {
  return { name: e.serverName, source: e.source ?? (e.pluginTelemetry !== void 0 || ce(e.serverName, e.scope ?? "dynamic") ? "plugin" : e.serverType === "sdk" ? "sdk" : e.scope ?? "dynamic") };
}
function ce(e, n) {
  return n === "dynamic" && uF.ownerOfKey(e) !== void 0;
}
var rBt = "x-mcp-server-origin", tUr = "x-ccr-owner-slack-user-id";
function TGe(e, n) {
  return Object.entries(e ?? {}).filter(([r]) => r.toLowerCase() === n).map(([, r]) => r);
}
var re = new nt(() => ({}));
var Pe = "anthropic/claudeAiConnector";
function pe(e, n) {
  return e.protocol === "https:" && e.username === "" && e.password === "" && Nu(e.href) && e.pathname === n;
}
function f9n(e, { path: n, serverId: r }) {
  try {
    if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return false;
    let t = e.config, s = Trt(t);
    if (s !== void 0) {
      if (s !== r || t.type !== "http" || J() || i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_ENVIRONMENT_KIND) return false;
      let A = new URL(t.url);
      return A.search === "" && pe(A, n);
    }
    if (t.type === "claudeai-proxy") {
      if (!Cpe(t)) return false;
      return pe(new URL(t.url), n);
    }
    if (t.type === "sdk") return q(e)?.serverId === r;
    let y = i.CLAUDE_CODE_ENVIRONMENT_KIND;
    return i.CLAUDE_CODE_REMOTE === true && (!y || y === "anthropic_cloud") && t.type === "http" && t.scope === "dynamic" && !jh(t) && ESe(t) === r;
  } catch {
    return false;
  }
}
function q(e) {
  try {
    let n = e.config, r = e.capabilities?.experimental?.[Pe];
    if (n.type !== "sdk" || !u_t(n) || J() || i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_ENVIRONMENT_KIND || !fp() || typeof r !== "object" || r === null || !("serverId" in r) || r.serverId !== (n.connectorId ?? e.name)) return;
    return r;
  } catch {
    return;
  }
}
function oBt(e) {
  if (J() && wHe.peek(U())?.host === void 0) return "diskless";
  let n = Oe();
  if (n !== void 0) return n;
  if (u1()) return "policy_not_loaded";
  if (!mb(e.policy)) return "policy_denied";
  if (zs("hipaa")) return "hipaa";
  return;
}
function Oe() {
  let e;
  try {
    e = OV();
  } catch {
    return "policy_not_asked";
  }
  switch (e) {
    case void 0:
    case "prosumer_oauth":
      return;
    case "third_party_provider":
    case "custom_base_url":
      return "policy_never_served";
    default:
      return "policy_not_asked";
  }
}
var _un = [{ path: FKe, serverId: vSe, policy: "allow_cobalt_plinth", uploadPathPrefix: `${FKe}/upload/`, ccrEntryPath: _wn }], Ae = { connectorOrigin: "https://drivemcp.googleapis.com", connectorPath: "/mcp/v1", desktopMark: "googleDriveFill", desktopHostFillMark: "googleDriveHostFill", toolName: "create_file", argument: "base64Content", wrongArguments: ["content"], flag: "tengu_wobbly_dewdrop", policy: "allow_drive_file_references", serviceName: "Google Drive", maxFileBytes: 10485760, maxFileText: "10 MB" }, M = [Ae];
var me = "FILE REFERENCES: to upload a file you can read here, don't type its base64; set base64Content to a file reference, sha256:<64 lowercase hex>:<its absolute path, with / between folders>. The app fills in the file's content once the user approves the call.";
function Re(e) {
  let n = YKo();
  if (n !== null) return n && P(e);
  let r = kn(e.flag, false);
  if (!r.value) {
    if (Nj(r.source)) KEt(false);
    return false;
  }
  let t = oBt(e);
  if (!Nj(r.source) || t === "policy_not_loaded" || t === "policy_not_asked" || ez()) return false;
  let s = t === void 0;
  return KEt(s), s;
}
function YRi(e) {
  let n = e.mcpInfo?.fileReference === true && (!i.CLAUDE_CODE_REMOTE || e.mcpInfo.remoteFileReferenceFill === true) ? M.find((r) => r.toolName === e.mcpInfo?.toolName) : void 0;
  return n !== void 0 && Re(n) ? "FR1:" : "";
}
function he(e, n) {
  if (!M.some((t) => t.toolName === n)) return;
  if (e.config.type === "sdk") {
    let t = q(e);
    return t === void 0 ? void 0 : M.find((s) => s.toolName === n && (z(t, s) === "fill" || z(t, s) === "hostFill"));
  }
  if (yU(e.config) === void 0 || !("url" in e.config) || typeof e.config.url !== "string") return;
  let { url: r } = e.config;
  return M.find((t) => {
    let s = `${t.connectorOrigin}${t.connectorPath}`;
    return t.toolName === n && (r === s || r === `${s}/`);
  });
}
function AGe(e, n) {
  try {
    let r = q(e), t = he(e, n) ?? (r === void 0 ? void 0 : M.find((E) => E.toolName === n && z(r, E) === "conflicting"));
    if (t !== void 0 || i.CLAUDE_CODE_REMOTE !== true || !M.some((E) => E.toolName === n)) return t;
    let { config: s } = e;
    if (s.type !== "http" || s.scope !== "dynamic" || jh(s) || !("url" in s) || typeof s.url !== "string") return;
    let y = new URL(s.url, "https://no-origin.invalid"), A = FVt.find((E) => y.pathname.startsWith(E));
    if (A === void 0 || !/^[^/]+\/mcp$/.test(y.pathname.slice(A.length))) return;
    let F = y.searchParams.getAll("mcp_url");
    return M.find((E) => {
      let S = `${E.connectorOrigin}${E.connectorPath}`;
      return E.toolName === n && F.some((h) => h === S || h === `${S}/`);
    });
  } catch (r) {
    if (i.CLAUDE_CODE_REMOTE !== true) throw r;
    return l(new R(`[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents (${L5(r instanceof Error ? r.name : typeof r)}), so it is treated as one: the text of errors from its upload tool is left out of logs and traces.`, "[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents; it is treated as one")), M.find((t) => t.toolName === n);
  }
}
function Sun(e, n) {
  if (!i.CLAUDE_CODE_REMOTE) {
    let r = he(e, n), t = q(e);
    if (r !== void 0) return t !== void 0 && z(t, r) === "hostFill" ? { ...r, hostFills: true } : r;
    let s = M.find((y) => y.toolName === n);
    if (s === void 0 || t === void 0) return;
    return { ...s, refusesReferences: z(t, s) === "conflicting" ? "conflicting" : "undeclared" };
  }
  try {
    let { config: r } = e, t = Il();
    if (!(nr() || t) || r.type !== "http" || r.scope !== "dynamic" || jh(r) || yd.bridgeCarrier !== void 0 || !Fbn(r.url) || !Ynt(r.url, Kor)) return;
    let s = t ? re.peek(U())?.read?.(e.name, r.url) : r.headers;
    if (s === void 0 || TGe(s, tUr).length > 0) return;
    let y = TGe(s, rBt);
    if (y.length !== 1 || y[0] !== "directory" && y[0] !== "custom") return;
    let A = Tkt(r.url)?.upstreamUrl, F = M.find((h) => {
      let H = `${h.connectorOrigin}${h.connectorPath}`;
      return h.toolName === n && (A === H || A === `${H}/`);
    });
    if (F === void 0) return;
    if (!t) return { ...F, approvalSeesContent: true };
    let { name: E } = e, { url: S } = r;
    return { ...F, approvalSeesContent: true, stillHeld: () => re.peek(U())?.read?.(E, S) !== void 0 };
  } catch {
    return;
  }
}
var De = "anthropic/filledFromFileReference", Ue = "anthropic/hostFillsFileReference";
function bun(e) {
  return e.config.type === "sdk" ? { [De]: "true" } : void 0;
}
function sBt(e, n) {
  return e !== void 0 && ($tr(n) || P(e));
}
function nZe(e, n) {
  return e !== void 0 && (i.CLAUDE_CODE_REMOTE || sBt(e, n));
}
function nUr(e, n) {
  return e.mcpInfo?.fileReference === true && nZe(M.find((r) => r.toolName === e.mcpInfo?.toolName), n);
}
function p_t(e, n, r = "McpToolCallError") {
  return `${r}; its message (${n.length} characters) is not logged because errors from ${e.serviceName}'s ${e.toolName} tool can contain the file being uploaded. The tool result in this session's transcript shows the message, shortened if long.`;
}
var we = /^[\r\n]*[A-Za-z0-9+/_-][A-Za-z0-9+/_\r\n-]*(?:=[\r\n]*){0,2}$/, Le = 100, Ne = 16;
function G(e, n) {
  if (typeof e !== "string") return;
  let r = Buffer.from(e, "base64");
  if (et(r) !== n.split(":")[1]) return;
  let t = (s) => s.replace(/[\s=]/g, "").replace(/-/g, "+").replace(/_/g, "/");
  return t(e) === t(r.toString("base64")) ? r.length : void 0;
}
function wun(e, n, r, t, s) {
  let y = () => import("../ide/check-call.js");
  if (n.refusesReferences) {
    let u = { validateInput: e.validateInput, call: e.call }, o = n.refusesReferences === "conflicting" ? "desktop_drive_fill_declaration_conflict" : "desktop_drive_fill_not_declared";
    e.validateInput = async (d, f) => {
      let v = Ee(n, d, false);
      if (v === void 0) return await u.validateInput?.(d, f) ?? { result: true };
      p("mcp_drive_file_reference", "not_available"), L({ stage: "plan", outcome: "refused", reason: "not_available", detail: o, toolUseId: f.toolUseId });
      let { refusalText: _ } = await y();
      return { result: false, message: _(v, "not_available", {}), errorCode: 2, notAnError: true };
    }, e.call = async (d, f, ...v) => {
      let _ = Ee(n, d, f.toolUseId !== void 0 && $tr(f.toolUseId));
      if (_ === void 0) return u.call(d, f, ...v);
      p("mcp_drive_file_reference", "not_available"), L({ stage: "fill", outcome: "refused", reason: "not_available", detail: o, toolUseId: f.toolUseId, requestId: v[1]?.requestId });
      let { refusalText: b } = await y();
      return { data: b(_, "not_available", {}) };
    };
    return;
  }
  let A = e.prompt;
  e.prompt = async (u) => {
    let o = await A(u);
    if (!Re(n)) return o;
    return o === "" ? me : `${me} ${o}`;
  };
  let F = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), S, h = /* @__PURE__ */ new Map(), H = { validateInput: e.validateInput, call: e.call, askInputPreparer: e.askInputPreparer }, oe = (u) => u !== void 0 && $tr(u) ? r : H;
  if (e.validateInput = async (u, o) => {
    S = void 0;
    let d = h.size > 0 ? u[n.argument] : void 0;
    if (typeof d === "string") {
      let N = et(Buffer.from(d, "base64")), D = h.get(N);
      if (D !== void 0 && !D.toolUses.has(o.toolUseId ?? "") && G(d, D.reference) !== void 0) h.delete(N);
    }
    let f = o.toolUseId === void 0 ? void 0 : F.get(o.toolUseId);
    if (o.toolUseId !== void 0 && f !== void 0 && !(n.approvalSeesContent && G(u[n.argument], f.reference) !== void 0)) F.delete(o.toolUseId);
    if (!P(n)) return await oe(o.toolUseId).validateInput?.(u, o) ?? { result: true };
    let v = await r.validateInput?.(u, o) ?? { result: true };
    if (!v.result) return v;
    $Vr(o.toolUseId);
    let _ = { ...u };
    if (!te(_, n)) return v;
    let { readReferencedFile: b } = await y(), K = Date.now(), C = await b(_, ae(o), "check", n, { session: o.session, signal: o.abortController.signal }), x = Date.now() - K;
    if ("refusal" in C) return L({ stage: C.beforeRead ? "plan" : "check", outcome: "refused", reason: C.refusal, detail: C.detail, fileRefPathKind: C.fileRefPathKind, checkReadMs: x, toolUseId: o.toolUseId }), { result: false, message: C.message, errorCode: 2, ...C.notAnError && { notAnError: C.notAnError } };
    L("buf" in C ? { stage: "check", outcome: "passed", sizeBytes: C.buf.length, checkReadMs: x, toolUseId: o.toolUseId } : { stage: "plan", outcome: "passed", detail: "host_fills", checkReadMs: x, toolUseId: o.toolUseId });
    let B = _[n.argument];
    if (o.toolUseId !== void 0 && typeof B === "string") {
      if (F.size >= Le) {
        let N = F.keys().next().value;
        if (N !== void 0) {
          if (F.delete(N), n.approvalSeesContent) {
            let D = E.values().next().value;
            if (E.size >= qKo && D !== void 0) E.delete(D);
            E.add(N);
          }
        }
      }
      if (E.delete(o.toolUseId), F.set(o.toolUseId, { reference: B, checkReadMs: x }), n.approvalSeesContent && "buf" in C) S = { reference: B, base64: C.buf.toString("base64"), toolUseId: o.toolUseId };
    }
    return v;
  }, n.approvalSeesContent) {
    if (e.mcpInfo !== void 0) e.mcpInfo = { ...e.mcpInfo, remoteFileReferenceFill: true };
    let u = e.backfillObservableInput;
    e.backfillObservableInput = (d) => {
      let f = u?.call(e, d);
      if (S !== void 0 && d[n.argument] === S.reference) {
        if (P(n)) {
          d[n.argument] = S.base64;
          let v = S.reference.split(":")[1] ?? "", _ = h.get(v);
          h.delete(v), h.set(v, { reference: S.reference, toolUses: (_?.toolUses ?? /* @__PURE__ */ new Set()).add(S.toolUseId) });
          let b = h.keys().next().value;
          if (h.size > Ne && b !== void 0) h.delete(b);
        }
        S = void 0;
      }
      return f;
    };
    let o = e.toAutoClassifierInput;
    e.toAutoClassifierInput = (d) => {
      let f = h.size > 0 ? d[n.argument] : void 0, v = typeof f === "string" ? h.get(et(Buffer.from(f, "base64"))) : void 0;
      return o.call(e, v !== void 0 && G(f, v.reference) !== void 0 ? { ...d, [n.argument]: v.reference } : d);
    };
  }
  let Y = r.call;
  if (e.call = async (u, o, ...d) => {
    let { toolUseId: f } = o;
    for (let [I, T] of h) if (T.toolUses.delete(f ?? "") && T.toolUses.size === 0) h.delete(I);
    if (!(f !== void 0 && (F.has(f) || E.has(f) || $tr(f))) && !P(n)) return H.call(u, o, ...d);
    $Vr(f ?? (d[1] === void 0 ? void 0 : t(d[1])));
    let _ = { ...u }, b = f === void 0 ? void 0 : F.get(f), K = te(_, n), C = b !== void 0 && n.approvalSeesContent && !K ? G(_[n.argument], b.reference) : void 0, x = !K && b === void 0 && f !== void 0 && E.has(f) && (!P(n) || oBt(n) !== void 0 || n.stillHeld?.() === false);
    if (C === void 0 && !K && !x) {
      if (YKo() !== true || !P(n)) return Y(_, o, ...d);
      let I = [n.argument, ...n.wrongArguments].map((O) => _[O]).find((O) => typeof O === "string" && we.test(O));
      if (typeof I !== "string") return Y(_, o, ...d);
      let T = 0;
      for (let O = 0; O < I.length; O++) {
        let V = I.charCodeAt(O);
        T += Number(V !== 10 && V !== 13 && V !== 61);
      }
      let w = { stage: "typed_base64", sizeBytes: Math.floor(T * 3 / 4), toolUseId: f, requestId: d[1]?.requestId }, ue = Date.now(), ne;
      try {
        ne = await Y(_, o, ...d);
      } catch (O) {
        let V = Date.now() - ue;
        throw X(() => L({ ...w, result: ge(O, o.abortController.signal), callMs: V })), O;
      }
      let Ce = Date.now() - ue;
      return X(() => L({ ...w, result: ye(ne, o.taskRegistry, f), callMs: Ce })), ne;
    }
    let B = { toolUseId: f, requestId: d[1]?.requestId, checkReadMs: b?.checkReadMs }, { readReferencedFile: N, refusalText: D } = await y(), j = (I, T, w) => L({ ...B, stage: "fill", outcome: "refused", reason: I, detail: T, fileRefPathKind: w });
    if (!P(n)) return p("mcp_drive_file_reference", "not_available"), j("not_available", "flag_off_at_fill"), { data: D(n, "not_available", {}) };
    let ie = C === void 0 && !x ? void 0 : oBt(n) ?? (n.stillHeld?.() === false ? "entry_not_held" : void 0);
    if (ie !== void 0) return p("mcp_drive_file_reference", "not_available"), j("not_available", ie), { data: D(n, "not_available", {}) };
    let Z = _, se, le = C, Q = false;
    if (C === void 0) {
      let I = Date.now(), T = await N(_, ae(o), "send", n, { session: o.session, signal: o.abortController.signal }, b?.reference);
      if (se = Date.now() - I, "refusal" in T) {
        if (j(T.refusal, T.detail, T.fileRefPathKind), T.notAnError) return { data: T.message };
        throw new R(T.message, "file reference refused");
      }
      if ("buf" in T) Z = { ..._, [n.argument]: T.buf.toString("base64") }, le = T.buf.length;
      else if (!P(n)) return p("mcp_drive_file_reference", "not_available"), j("not_available", "flag_off_at_fill"), { data: D(n, "not_available", {}) };
      else Z = _, Q = true;
    }
    let W = Q ? void 0 : { ...B, stage: "fill", outcome: "filled", fillMs: se, sizeBytes: le }, de = Q ? { [Ue]: "true" } : s, fe = Date.now(), ee;
    try {
      ee = await Y(Z, de === void 0 ? o : { ...o, mcpRequestMeta: { ...o.mcpRequestMeta, ...de } }, ...d);
    } catch (I) {
      let T = Date.now() - fe;
      throw X(() => {
        if (W === void 0) return;
        let w = ge(I, o.abortController.signal);
        if (w === "aborted" || w === "auth_failed") p("mcp_drive_file_reference", w);
        else m("mcp_drive_file_reference", w);
        L({ ...W, result: w, callMs: T });
      }), I;
    }
    let ve = Date.now() - fe;
    return X(() => {
      if (W === void 0) return;
      let I = ye(ee, o.taskRegistry, f);
      if (I === "auth_failed") p("mcp_drive_file_reference", I);
      else if (I === "uploaded") g("mcp_drive_file_reference");
      L({ ...W, result: I, callMs: ve });
    }), ee;
  }, H.askInputPreparer !== r.askInputPreparer) e.askInputPreparer = async (u, o, d) => {
    if (!P(n)) return oe(d).askInputPreparer?.(u, o, d);
    return $Vr(d), r.askInputPreparer?.(u, o, d);
  };
}
function X(e) {
  try {
    e();
  } catch {
  }
}
function ge(e, n) {
  if (n.aborted) return "aborted";
  if (xe(e)) return "auth_failed";
  return e instanceof EE ? "error_result" : "call_failed";
}
function ye(e, n, r) {
  if (e.urlElicitationDeclined !== void 0) return "auth_failed";
  return He(n, r) ? "backgrounded" : "uploaded";
}
function xe(e) {
  if (e instanceof Xk) return true;
  if (!(e instanceof Error)) return false;
  if ("code" in e && e.code === "CLAUDEAI_BEARER_REJECTED") return true;
  return e instanceof R && /^(McpError|ProtocolError) -32042$/.test(e.telemetryMessage);
}
function He(e, n) {
  return n !== void 0 && Object.values(e.all()).some((r) => r.type === "mcp_task" && r.toolUseId === n);
}
function L(e) {
  a("tengu_mcp_drive_file_reference_upload", { stage: c(e.stage), ...e.outcome !== void 0 && { outcome: c(e.outcome) }, ...e.reason !== void 0 && { reason: L5(e.reason) }, ...e.detail !== void 0 && { detail: L5(e.detail) }, ...e.fileRefPathKind !== void 0 && { fileRefPathKind: L5(e.fileRefPathKind) }, ...e.result !== void 0 && { result: c(e.result) }, ...e.checkReadMs !== void 0 && { checkReadMs: e.checkReadMs }, ...e.fillMs !== void 0 && { fill_ms: e.fillMs }, ...e.callMs !== void 0 && { callMs: e.callMs }, ...e.sizeBytes !== void 0 && { size_bytes: e.sizeBytes }, toolUseID: _e(e.toolUseId), requestId: _e(e.requestId) });
}
function te(e, n) {
  return [n.argument, ...n.wrongArguments].some((r) => Te(e?.[r]));
}
function Te(e) {
  return typeof e === "string" && e.startsWith("sha256:");
}
var Be = /^sha256:[0-9a-f]{64}:(?:[A-Za-z]:)?\//;
function Ee(e, n, r) {
  return M.find((t) => t.toolName === e.toolName && (r ? te(n, t) : (Te(n?.[t.argument]) || t.wrongArguments.some((s) => {
    let y = n?.[s];
    return typeof y === "string" && Be.test(y);
  })) && P(t)));
}
function z(e, n) {
  let r = Reflect.get(e, n.desktopMark) === true, t = Reflect.get(e, n.desktopHostFillMark);
  if (r && t !== void 0 && t !== false) return "conflicting";
  if (r) return "fill";
  return t === true ? "hostFill" : void 0;
}
function P(e) {
  return k(e.flag, false);
}
var Ke = 1048576, Ve = 40, qe = 3e5;
function Eun(e, n) {
  if (typeof n !== "string" || n.length <= Ke || !M.some(P)) return e;
  return Math.max(e, Math.min(qe, Math.ceil(n.length / Ve)));
}
export {
  AGe,
  EHe,
  Eun,
  G0,
  PKs,
  QNo,
  Sun,
  TGe,
  YRi,
  _un,
  bun,
  f9n,
  nUr,
  nZe,
  oBt,
  p9n,
  p_t,
  rBt,
  sBt,
  tUr,
  u9n,
  uF,
  u_t,
  wHe,
  wun,
  xKs
};
