// linux/ui/not-connected.js — Claude Code 2.1.310（linux）模块 chunk-7g39756q.js
import { __asset_src } from "../../runtime/assets.js";
import { So, HI, X_ } from "../context/not-admin-owned.js";
import { i, _C } from "../shared/environment.js";
import { tr, Pt } from "../shared/async-hooks.5238.js";
import { I0 } from "../shared/chunk-f98598c3.js";
import { pe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { O$, Ut, kp } from "../settings/global-config-and-gates.js";
import { w } from "./chunk-0ed4c357.js";
import { sl } from "../shared/chunk-9bbd1b38.js";
import { Pr } from "../shared/chunk-be0ce119.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { QB } from "../plugins/allow-channels.js";
import { ha } from "../telemetry/harbor-kite-win.js";
import { Mct } from "../plugins/chunk-05276ae4.js";
import { Jr } from "../shared/chunk-258385dc.js";
import { Zf, TPe } from "./flex-start.7fbd.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { kwe } from "../shared/chunk-72c4b78c.js";
import { zN } from "../core/conversation-engine.js";
import { Xln } from "../context/team-memory-sync.js";
import { gDe, zBs } from "../telemetry/bg-roster-parse-failed.js";
import { KDe } from "../commands/command-web-setup.js";
import { Oyr } from "../artifacts/foreign-owner.js";
import { Y5e, uus, fus, pus, mus, gus, hus, yus, _us, bus, Sus, wus, vus, X5e, wPn, vPn, Eus } from "../context/env-invalid.js";
import { oK } from "../api/not-signed-in.js";
import { mt } from "./aria-label.132c.js";
import { ft } from "../shared/chunk-c602eee2.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { ro, Yr, P, ee, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { l5 } from "../settings/chunk-854b416f.js";
import { Zii, Nkt, XSn, JSn } from "../shared/chunk-d1292a44.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
function Mto(o, t, a) {
  if (Ae() !== "firstParty" || !O$() || !KDe()) return;
  let l = oK.of(o);
  return { current: () => l.peek(t, a), settled: l.read(t, a) };
}
function V(o) {
  switch (o) {
    case "connected":
      return [{ label: "Cloud sessions", value: "GitHub connected" }];
    case "not_connected":
      return [{ label: "Cloud sessions", value: "Not set up · /web-setup to connect GitHub" }];
    case "unknown":
    case void 0:
      return [];
  }
}
function He(A) {
  return A.mainLoopModel;
}
function $e(O) {
  return O.mcp;
}
function Be(B) {
  return B.toolPermissionContext.mode;
}
function We(W) {
  return W.id;
}
function Ue(Ke) {
  return So(Ke).cwd;
}
function Ve(qe) {
  return qe.length > 0;
}
function Ye(ze, U) {
  return [U > 0 && r(Zf.Row, { children: [e(Q, { children: " " }), e(Q, { children: "" })] }, `gap-${U}`), ...ze.map((o, Fe) => {
    let { label: de, value: Je } = o;
    return r(Zf.Row, { children: [e(Q, { children: de !== void 0 ? `${de}:` : "" }), e(k, { value: Je })] }, `${U}-${Fe}`);
  })];
}
function Xe(C, p) {
  return r(s, { flexDirection: "row", gap: 1, paddingX: 1, children: [e(mt, { status: "warning" }), typeof C === "string" ? e(n, { wrap: "wrap", children: C }) : C] }, p);
}
var Dto = " (details in the --debug log)";
function imr({ sessionId: o, cwd: t, accountStatus: a, machineStatus: l, webSetupStatus: c }) {
  let d = i.CLAUDE_CODE_TMUX_SESSION, u = gDe(), C = zBs(), p = tr()?.sessionId, g = zN(o) ?? e(n, { dimColor: true, children: "/rename to add a name" }), h = X_(), m = "";
  if (h.length > 0) {
    let M = h.map((v) => v.kind === "plugin" ? `plugin:${v.name}@${v.marketplace}` : `server:${v.name}`).join(", "), f = Ae() !== "firstParty" ? "not available on third-party providers" : !QB() ? "not currently available" : Mct(pe("policySettings")) ? "blocked by org policy" : void 0;
    m = f ? `Configured but not active (${f}): ${M}` : `Listening for messages from ${M}`;
  }
  return [{ label: "Version", value: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION}${l5()}` }, ...[], { label: "Session name", value: g }, { label: p === o ? "Cloud session ID" : "Session ID", value: o }, ...p !== void 0 && p !== o ? [{ label: "Cloud session ID", value: p }] : [], { label: "Session kind", value: !Ut() ? "interactive" : kp() ? "background job · unattended" : "background job · attached" }, ...d ? [{ label: "tmux session", value: d }] : [], ...m ? [{ label: "Channels", value: m }] : [], ...ha() && _C.CLAUDE_CODE_MESSAGING_SOCKET ? [{ label: "Peer address", value: `uds:${_C.CLAUDE_CODE_MESSAGING_SOCKET}` }] : [], ...ha() && !_C.CLAUDE_CODE_MESSAGING_SOCKET && Oyr() !== void 0 ? [{ label: "Peer address", value: `unavailable — ${Oyr()}${Dto}` }] : [], ...HI() ? [{ label: "Memory", value: Xln() ? "Paused for this session · /pause-memory to resume" : "Paused for this session · see /account-memory" }] : [], ...[], { label: "cwd", value: t }, ...wPn(a), ...V(c), ...Se(), ...vPn()];
}
function Se() {
  let o = I0();
  if (o.length === 0) return [];
  return [{ label: "Organization configuration", value: JSn(o).map((t) => XSn(t) ? Zii(t) : t) }, ...o.includes("hipaa") ? [{ value: e(n, { dimColor: true, children: Nkt }) }] : []];
}
function amr({ mainLoopModel: o, mcp: t, theme: a, ideInstallationStatus: l, permissionMode: c }) {
  return [{ label: "Model", value: Eus(o) }, ...pus(), ...Pt() ? [] : [...mus(t.clients, l, a), ...gus(t.clients, a), ...fus(), ...uus()], ...yus(), ..._us(c), ...bus()];
}
async function Hto(o, t, a) {
  return (await Promise.all([Sus(), vus(t), wus(t), Pt() ? [] : hus(o, t, a)])).flat();
}
function k(o) {
  let a = w(8), { value: t } = o;
  if (Array.isArray(t)) {
    let l;
    if (a[0] !== t) {
      let c2;
      if (a[2] !== t.length) c2 = (d, u) => r(n, { children: [d, u < t.length - 1 ? "," : ""] }, u), a[2] = t.length, a[3] = c2;
      else c2 = a[3];
      l = t.map(c2);
      a[0] = t, a[1] = l;
    } else l = a[1];
    let c;
    if (a[4] !== l) c = e(s, { flexWrap: "wrap", columnGap: 1, flexShrink: 99, children: l }), a[4] = l, a[5] = c;
    else c = a[5];
    return c;
  }
  if (typeof t === "string") {
    let l;
    if (a[6] !== t) l = e(n, { children: t }), a[6] = t, a[7] = l;
    else l = a[7];
    return l;
  }
  return t;
}
function lmr(o) {
  let u = w(26), { credentials: t, ideInstallationStatus: a, diagnosticsPromise: l, getWebSetupRead: c, getMachineStatusRead: d } = o, C;
  if (u[0] !== t) C = () => X5e(t), u[0] = t, u[1] = C;
  else C = u[1];
  let [p] = y(C), E;
  if (u[2] !== d) E = () => d(), u[2] = d, u[3] = E;
  else E = u[3];
  let [g] = y(E), h;
  if (u[4] !== c) h = () => c(), u[4] = c, u[5] = h;
  else h = u[5];
  let [m] = y(h), M;
  if (u[6] !== m) M = () => m?.current(), u[6] = m, u[7] = M;
  else M = u[7];
  let [f, v] = y(M), D, T;
  if (u[8] !== m) D = () => {
    let x = true;
    return m?.settled.then(() => {
      if (x) v(m.current());
    }), () => {
      x = false;
    };
  }, T = [m], u[8] = m, u[9] = D, u[10] = T;
  else D = u[9], T = u[10];
  P(D, T);
  let b = sl() ? 1 : void 0, I;
  if (u[11] !== p || u[12] !== a || u[13] !== g || u[14] !== f) I = e(ro, { fallback: null, children: e(G, { ideInstallationStatus: a, accountStatusRead: p, machineStatusRead: g, webSetupStatus: f }) }), u[11] = p, u[12] = a, u[13] = g, u[14] = f, u[15] = I;
  else I = u[15];
  let A;
  if (u[16] !== l) A = e(ro, { fallback: null, children: e(H, { promise: l }) }), u[16] = l, u[17] = A;
  else A = u[17];
  let O;
  if (u[18] !== b || u[19] !== I || u[20] !== A) O = r(s, { flexDirection: "column", gap: 1, flexGrow: b, children: [I, A] }), u[18] = b, u[19] = I, u[20] = A, u[21] = O;
  else O = u[21];
  let B;
  if (u[22] === S) B = e(n, { dimColor: true, children: e(ft, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }) }), u[22] = B;
  else B = u[22];
  let W;
  if (u[23] !== b || u[24] !== O) W = r(s, { flexDirection: "column", gap: 1, flexGrow: b, children: [O, B] }), u[23] = b, u[24] = O, u[25] = W;
  else W = u[25];
  return W;
}
function G(o) {
  let f = w(17), { ideInstallationStatus: t, accountStatusRead: a, machineStatusRead: l, webSetupStatus: c } = o, d = a === void 0 ? void 0 : Yr(a), u = l === void 0 ? void 0 : Yr(l), C = K(He), p = kwe() ?? C, E = K($e), g = K(Be), [h] = Pr(), m = Jr(We), M = TPe(Jr(Ue)), v;
  if (f[0] !== d || f[1] !== M || f[2] !== t || f[3] !== u || f[4] !== p || f[5] !== E || f[6] !== g || f[7] !== m || f[8] !== h || f[9] !== c) v = Y5e([imr({ sessionId: m, cwd: M, accountStatus: d, machineStatus: u, webSetupStatus: c }), amr({ mainLoopModel: p, mcp: E, theme: h, ideInstallationStatus: t, permissionMode: g })]), f[0] = d, f[1] = M, f[2] = t, f[3] = u, f[4] = p, f[5] = E, f[6] = g, f[7] = m, f[8] = h, f[9] = c, f[10] = v;
  else v = f[10];
  let D = v, T;
  if (f[11] === S) T = Pt() && r(n, { dimColor: true, children: ["Model and cwd are the", " ", tr()?.sessionId ? "cloud" : "remote", " session's; the other rows describe this terminal. /mcp asks the session too."] }), f[11] = T;
  else T = f[11];
  let x;
  if (f[12] === S) x = [{ bold: true }, { width: "fill" }], f[12] = x;
  else x = f[12];
  let b;
  if (f[13] !== D) b = D.filter(Ve).flatMap(Ye), f[13] = D, f[14] = b;
  else b = f[14];
  let I;
  if (f[15] !== b) I = r(s, { flexDirection: "column", gap: 1, children: [T, e(Zf, { columns: x, children: b })] }), f[15] = b, f[16] = I;
  else I = f[16];
  return I;
}
function H(o) {
  let l = w(5), { promise: t } = o, a = Yr(t);
  if (a.length === 0) {
    return null;
  }
  let c;
  if (l[0] === S) c = e(n, { bold: true, children: "System diagnostics" }), l[0] = c;
  else c = l[0];
  let d;
  if (l[1] !== a) d = a.map(Xe), l[1] = a, l[2] = d;
  else d = l[2];
  let u;
  if (l[3] !== d) u = r(s, { flexDirection: "column", paddingBottom: 1, children: [c, d] }), l[3] = d, l[4] = u;
  else u = l[4];
  return u;
}
export {
  Dto,
  Hto,
  Mto,
  amr,
  imr,
  lmr
};
