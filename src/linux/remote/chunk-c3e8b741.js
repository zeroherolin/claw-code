// linux/remote/chunk-c3e8b741.js — Claude Code 2.1.310（linux）模块 chunk-70kfjmfv.js
import { J } from "../context/not-admin-owned.js";
import { Gf } from "../mcp/toolbox-mcp-server-id.js";
import { hd } from "./self-hosted.js";
import { i } from "../shared/environment.js";
import { PCe } from "../settings/global-config-and-gates.js";
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
  return i.CLAUDE_CODE_REMOTE === true && hd.bridgeCarrier === void 0;
}
var gGt = { metrics: "METRICS", logs: "LOGS", traces: "TRACES" };
function O(r) {
  return !!i.OTEL_EXPORTER_OTLP_HEADERS || !!i[`OTEL_EXPORTER_OTLP_${gGt[r]}_HEADERS`];
}
function PGr(r) {
  if (r === "traces") return null;
  if (!u()) return null;
  let e = i.SESSION_INGRESS_URL, t = i.CLAUDE_CODE_REMOTE_SESSION_ID, s = process.env[`OTEL_EXPORTER_OTLP_${gGt[r]}_ENDPOINT`]?.trim();
  if (!e || !t || !s) return null;
  if (O(r)) return null;
  let f = r === "logs" ? ["customer/logs"] : [...Qet() ? ["customer/metrics"] : [], "metrics"];
  try {
    let E = new URL(e).origin, p = new URL(s).href;
    for (let c of f) {
      let l = `/v1/code/sessions/${t}/worker/otlp/${c}`, n = new URL(`${E}${l}`).href;
      if (o(l, c) && Gf(n) && p === n) return n;
    }
    return null;
  } catch {
    return null;
  }
}
function Qet() {
  return J() && PGr("logs") !== null;
}
function Hgn(r) {
  return Qet() ? PCe(r) : r;
}
function IGr() {
  if (!u()) return null;
  let r = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return null;
  let e;
  try {
    e = new URL(r);
  } catch {
    return null;
  }
  if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !Gf(e.href) || !o(e.pathname, "traces")) return null;
  return e.href;
}
function $Js() {
  let r = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return false;
  try {
    let e = new URL(r);
    return Gf(e.href) && o(e.pathname, "traces");
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
var OGr = new a();
function Zet() {
  return OGr.resolve(() => IGr() !== null);
}
export {
  $Js,
  Hgn,
  IGr,
  OGr,
  PGr,
  Qet,
  Zet,
  gGt
};
