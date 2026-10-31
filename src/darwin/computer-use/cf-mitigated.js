// darwin/computer-use/cf-mitigated.js — Claude Code 2.1.310（darwin）模块 chunk-3v1bzsfp.js
import { Dt } from "../fs/content-encoding.js";
import { vr } from "../telemetry/anthropic-workspace-id.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { i } from "../shared/environment.js";
import { ee, t } from "../fs/gitlab-runner-authentication-token.js";
import { St, I1 } from "../artifacts/cowritten-artifact-html.js";
import { qrr } from "../mcp/allowed-warning.js";
import { ck, lC } from "../fs/ca-certs-load.js";
import { nl, Ln, al, pa, NF, k } from "../settings/global-config-and-gates.js";
import { Kv } from "../settings/non-string-value.js";
import { dC } from "../shared/chunk-49b6cfae.js";
import { gy } from "../remote/claude-code-remote.js";
import { z } from "../shared/chunk-be29de51.js";
import m from "ws";
var R = '{"type":"KeepAlive"}', U = '{"type":"CloseStream"}', L = "/api/ws/speech_to_text/voice_stream", F = 8e3, x = { safety: 5e3, noData: 1500 };
function A(e, o, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= o && e <= d ? String(e) : "unknown";
}
function D(e) {
  return vr(e)?.toLowerCase() ?? "unknown";
}
var N = 1500;
async function Zmo() {
  if (St() || I1()) return "skipped_privacy";
  try {
    let e = await Dt.get(`${rn().BASE_API_URL}/api/hello`, { headers: { "User-Agent": NF() }, timeout: N, validateStatus: () => true, maxRedirects: 0 }), o = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${o}` : `http_${o}`;
  } catch (e) {
    let o = Dt.isAxiosError(e) ? e.code : void 0;
    return o === "ECONNABORTED" || o === "ETIMEDOUT" ? "timeout" : "fetch_failed";
  }
}
function B() {
  if (i.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return true;
  return k("tengu_brick_follow", false);
}
function ego() {
  if (!nl()) return false;
  let e = Ln();
  return e !== null && e.accessToken !== null;
}
var H = 1024;
function j(e) {
  let o = /* @__PURE__ */ new Set(), d = [], u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim();
    if (!p || o.has(p)) continue;
    let E = p.length + (d.length > 0 ? 1 : 0);
    if (u + E > H) break;
    o.add(p), d.push(p), u += E;
  }
  return d.join(",");
}
function W() {
  return;
}
async function tgo(e, o, d) {
  let u;
  if (z() && d !== void 0) await pa({ credentials: d }), u = await al(d);
  else await pa(), u = Ln();
  if (!u?.accessToken) return t("[voice_stream] No OAuth token available"), null;
  let C = W() ?? rn().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://"), p = B(), E = new URLSearchParams({ encoding: "linear16", sample_rate: "16000", channels: "1", endpointing_ms: "300", utterance_end_ms: "1000", language: o?.language ?? "en", use_conversation_engine: "true", ...p && { forward_interims: "typed" } }), T = `${C}${L}?${E.toString()}`;
  t(`[voice_stream] Connecting to ${T}`);
  let I = { Authorization: `Bearer ${u.accessToken}`, "User-Agent": NF(), "x-app": "cli", "anthropic-client-platform": gy() };
  if (o?.keyterms?.length) {
    let r = j(o.keyterms);
    if (r) I["x-config-keyterms"] = r;
  }
  let V = ck(void 0), P = { headers: I, proxy: lC(T), tls: V || void 0 };
  qrr(T, m);
  let a = new m(T, P), f = null, y = false, w = false, S = false, g = false, O = false, _ = null, v = null, b = { send(r) {
    if (a.readyState !== m.OPEN) return;
    if (S) {
      t(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
      return;
    }
    t(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`), a.send(Buffer.from(r));
  }, finalize() {
    if (g || S) return Promise.resolve("ws_already_closed");
    return g = true, new Promise((r) => {
      let c = setTimeout(() => _?.("safety_timeout"), x.safety), n = setTimeout(() => _?.("no_data_timeout"), x.noData);
      if (v = () => {
        clearTimeout(n), v = null;
      }, _ = (s) => {
        if (clearTimeout(c), clearTimeout(n), _ = null, v = null, l) {
          t(`[voice_stream] Promoting unreported interim before ${s} resolve`);
          let M = l;
          l = "", e.onTranscript(M, true);
        }
        t(`[voice_stream] Finalize resolved via ${s}`), r(s);
      }, a.readyState === m.CLOSED || a.readyState === m.CLOSING) {
        _("ws_already_closed");
        return;
      }
      setTimeout(() => {
        if (S = true, a.readyState === m.OPEN) t("[voice_stream] Sending CloseStream (finalize)"), a.send(U);
      }, 0);
    });
  }, close() {
    if (S = true, f) clearInterval(f), f = null;
    if (y = false, a.readyState === m.OPEN) a.close();
  }, isConnected() {
    return y && a.readyState === m.OPEN;
  } };
  a.on("open", () => {
    t("[voice_stream] WebSocket connected"), y = true, w = true, t("[voice_stream] Sending initial KeepAlive"), a.send(R), f = setInterval((r) => {
      if (r.readyState === m.OPEN) t("[voice_stream] Sending periodic KeepAlive"), r.send(R);
    }, F, a), e.onReady(b);
  });
  let l = "";
  function h(r) {
    if (!l) return;
    t(`[voice_stream] Promoting unreported interim to final (${r})`);
    let c = l;
    l = "", e.onTranscript(c, true);
  }
  return a.on("message", (r) => {
    let c = r.toString();
    t(`[voice_stream] Message received (${String(c.length)} chars)`);
    let n;
    try {
      n = ee(c);
    } catch {
      return;
    }
    switch (n.type) {
      case "TranscriptInterim":
      case "TranscriptText": {
        let s = n.data;
        if (t(`[voice_stream] ${n.type} (${String(s?.length ?? 0)} chars)`), S) v?.();
        if (s) l = s, e.onTranscript(s, false);
        break;
      }
      case "TranscriptEndpoint": {
        t(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
        let s = l;
        if (l = "", s) e.onTranscript(s, true);
        if (S) _?.("post_closestream_endpoint");
        break;
      }
      case "TranscriptError": {
        let s = n.description ?? n.error_code ?? "unknown transcription error";
        if (t(`[voice_stream] TranscriptError: ${s}`), h("TranscriptError"), !g) e.onError(s);
        break;
      }
      case "error": {
        let s = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
        if (t(`[voice_stream] Server error: ${s}`), h("server error"), !g) e.onError(s);
        break;
      }
      default:
        break;
    }
  }), a.on("close", (r, c) => {
    let n = c?.toString() ?? "";
    if (t(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`), y = false, f) clearInterval(f), f = null;
    if (h("ws close"), _?.("ws_close"), !g && !O && r !== 1e3 && r !== 1005) e.onError(`Connection closed: code ${String(r)}${n ? ` — ${n}` : ""}`, w ? void 0 : { connectFailureCode: `ws_closed_${A(r, 1e3, 4999)}` });
    e.onClose();
  }), a.on("unexpected-response", (r, c) => {
    let n = c.statusCode ?? 0;
    if (n === 101) {
      t("[voice_stream] unexpected-response fired with 101; ignoring");
      return;
    }
    if (t(`[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`), O = true, c.resume(), r.destroy?.(), g) return;
    e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, { fatal: n >= 400 && n < 500, connectFailureCode: c.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${A(n, 100, 599)}` : `upgrade_rejected_${A(n, 100, 599)}` });
  }), a.on("error", (r) => {
    if (t(`[voice_stream] WebSocket error: ${r.message}`, { level: "error" }), h("ws error"), !g) e.onError(`Voice stream connection error: ${r.message}`, w ? void 0 : { connectFailureCode: `ws_error_${D(r)}` });
  }), b;
}
export {
  Zmo,
  ego,
  tgo
};
