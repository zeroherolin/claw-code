// remote/chunk-6rkmrewr.js — Claude Code 2.1.310 模块 chunk-6rkmrewr.js
import { J } from "../context/not-admin-owned.ersa.js";
import { Wp } from "../mcp/toolbox-mcp-server-id.fewh.js";
import { yd } from "./self-hosted.qq4m.js";
import { i } from "../shared/environment.9a41.js";
import { LAe } from "../settings/global-config-and-gates.27xj.js";
var d = /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/worker\/otlp\/((?:customer\/)?[a-z]+)$/;
function o(r, e) {
  let t = d.exec(r);
  return t !== null && t[1] === e;
}
function h(r) {
  let e = r.toLowerCase();
  return e === "localhost" || e === "::1" || e === "[::1]" || /^127(\.\d{1,3}){3}$/.test(e);
}
function u() {
  return i.CLAUDE_CODE_REMOTE === true && yd.bridgeCarrier === void 0;
}
var A2t = { metrics: "METRICS", logs: "LOGS", traces: "TRACES" };
function O(r) {
  return !!i.OTEL_EXPORTER_OTLP_HEADERS || !!i[`OTEL_EXPORTER_OTLP_${A2t[r]}_HEADERS`];
}
function X2r(r) {
  if (r === "traces") return null;
  if (!u()) return null;
  let e = i.SESSION_INGRESS_URL, t = i.CLAUDE_CODE_REMOTE_SESSION_ID, s = process.env[`OTEL_EXPORTER_OTLP_${A2t[r]}_ENDPOINT`]?.trim();
  if (!e || !t || !s) return null;
  if (O(r)) return null;
  let f = r === "logs" ? ["customer/logs"] : [...stt() ? ["customer/metrics"] : [], "metrics"];
  try {
    let E = new URL(e).origin, p = new URL(s).href;
    for (let c of f) {
      let l = `/v1/code/sessions/${t}/worker/otlp/${c}`, n = new URL(`${E}${l}`).href;
      if (o(l, c) && Wp(n) && p === n) return n;
    }
    return null;
  } catch {
    return null;
  }
}
function stt() {
  return J() && X2r("logs") !== null;
}
function Jgn(r) {
  return stt() ? LAe(r) : r;
}
function J2r() {
  if (!u()) return null;
  let r = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return null;
  let e;
  try {
    e = new URL(r);
  } catch {
    return null;
  }
  if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !Wp(e.href) || !o(e.pathname, "traces")) return null;
  return e.href;
}
function EJs() {
  let r = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return false;
  try {
    let e = new URL(r);
    return Wp(e.href) && o(e.pathname, "traces");
  } catch {
    return false;
  }
}
class a {
  armed = false;
  frozen = void 0;
  arm() {
    this.armed = true;
  }
  freeze() {
    this.frozen = this.armed;
  }
  resolve(r) {
    if (this.frozen !== void 0) return this.frozen;
    return this.armed || r();
  }
  reset() {
    this.armed = false, this.frozen = void 0;
  }
}
var Q2r = new a();
function itt() {
  return Q2r.resolve(() => J2r() !== null);
}
export {
  A2t,
  EJs,
  J2r,
  Jgn,
  Q2r,
  X2r,
  itt,
  stt
};
