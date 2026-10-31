// linux/ui/teleport-resume-session.js — Claude Code 2.1.310（linux）模块 chunk-x4q00mj8.js
import { zYt } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { Qf, d } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { fo } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { bYo } from "../settings/global-config-and-gates.js";
import { gt, d2 } from "../fs/async-hooks.7959.js";
import { Vi } from "../mcp/allowed-warning.js";
import { ist } from "../git/get-url.js";
import { Nje } from "../core/conversation-engine.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { lt } from "../shared/chunk-76877d92.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { ds } from "../shared/chunk-9bbd1b38.js";
import { qs } from "../shared/action-not-found.c239.js";
import { Je } from "./aria-hidden.aa9d.js";
import { Ee } from "./chunk-067d565d.js";
import { ji } from "./spinner-stall-cleared.js";
import { qr } from "./chunk-03aae52e.js";
import { uxn } from "./chunk-6a10765a.js";
import { TA } from "../shared/chunk-9faca596.js";
import { ft } from "../shared/chunk-c602eee2.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { de, P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
function J(h) {
  let C = w(8), [i, R] = y(false), [p, I] = y(null), [u, N] = y(null), K;
  if (C[0] !== h) K = async (l) => {
    R(true), I(null), N(l), a("tengu_teleport_resume_session", { source: c(h), session_id: _e(l.id) });
    ;
    try {
      let m = await fo("teleport_resume", () => Nje(l.id));
      return zYt({ sessionId: l.id }), R(false), m;
    } catch (T2) {
      let x = T2;
      let G = { message: x instanceof Qf ? x.message : d(x), formattedMessage: x instanceof Qf ? x.formattedMessage : void 0, isOperationError: x instanceof Qf };
      return I(G), R(false), null;
    }
  }, C[0] = h, C[1] = K;
  else K = C[1];
  let _ = K, T;
  if (C[2] === S) T = () => {
    I(null);
  }, C[2] = T;
  else T = C[2];
  let X = T, k;
  if (C[3] !== p || C[4] !== i || C[5] !== _ || C[6] !== u) k = { resumeSession: _, isResuming: i, error: p, selectedSession: u, clearError: X }, C[3] = p, C[4] = i, C[5] = _, C[6] = u, C[7] = k;
  else k = C[7];
  return k;
}
j();
var fe = "Updated", ge = "Origin", xe = "Remote Control", le = Math.max(ge.length, xe.length), F = "  ";
function ce({ onSelect: h, onCancel: i, isEmbedded: R = false }) {
  let { rows: p, columns: I } = ds(Te()), [u, N] = y([]), [C, K] = y(null), [l, T] = y(true), [m, x] = y(null), [G, _] = y(null), [X, k] = y(false), [q, H] = y(false), [L, W] = y(1), Y = qs("confirm:no", "Confirmation", "Esc"), D = de(async () => {
    try {
      T(true), x(null);
      let o = await ist();
      K(o), t(`Current repository: ${o || "not detected"}`);
      let f = await bYo(), E = f;
      if (o) E = f.filter((v) => {
        if (!v.repo) return false;
        return `${v.repo.owner.login}/${v.repo.name}` === o;
      }), t(`Filtered ${E.length} sessions for repo ${o} from ${f.length} total`);
      let te = [...E].sort((v, ne) => {
        let De = new Date(v.updated_at);
        return new Date(ne.updated_at).getTime() - De.getTime();
      });
      N(te);
    } catch (o) {
      let f = o instanceof Error ? o.message : String(o);
      if (t(`Error loading code sessions: ${f}`), o instanceof Error && o.name === "CloudSessionAccessError") _(o.message), x("refused");
      else x(Oe(f));
    } finally {
      T(false), k(false);
    }
  }, []), Z = () => {
    k(true), D();
  };
  lt("confirm:no", i, { context: "Confirmation" });
  function g(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), i();
      return;
    }
    if (o.ctrl && o.key === "r" && m) {
      o.preventDefault(), Z();
      return;
    }
    if (m !== null && o.key === "return") {
      o.preventDefault(), i();
      return;
    }
  }
  let b = de(() => {
    H(true), D();
  }, [H, D]);
  if (!q) return e(uxn, { onComplete: b, onCancel: R ? i : void 0 });
  if (l) return e(s, { flexDirection: "column", padding: 1, tabIndex: 0, autoFocus: true, onKeyDown: g, children: e(qr, { message: "Loading Claude Code sessions…", bold: true, subtitle: X ? "Retrying…" : "Fetching your Claude Code sessions…" }) });
  if (m) return r(s, { flexDirection: "column", padding: 1, tabIndex: 0, autoFocus: true, onKeyDown: g, children: [e(n, { bold: true, color: "error", children: "Error loading Claude Code sessions" }), Pe(m, G), r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: "Ctrl+R" }), " to retry · Press", " ", e(n, { bold: true, children: Y }), " to cancel"] })] });
  if (u.length === 0) return r(s, { flexDirection: "column", padding: 1, tabIndex: 0, autoFocus: true, onKeyDown: g, children: [r(n, { bold: true, children: ["No Claude Code sessions found", C && r(n, { children: [" for ", C] })] }), e(s, { marginTop: 1, children: r(n, { dimColor: true, children: ["Press ", e(n, { bold: true, children: Y }), " to cancel"] }) })] });
  let z = u.map((o) => ({ ...o, timeString: d2(new Date(o.updated_at)) })), O = Math.max(fe.length, ...z.map((o) => o.timeString.length)), ee = u.some((o) => o.environment_kind === "bridge"), Se = ee ? le + F.length : 0, ue = String(u.length).length + 2, ye = I - 4 - ue - O - F.length - Se, pe = z.map(({ timeString: o, title: f, id: E, environment_kind: te }) => {
    let v = o.padEnd(O, " ");
    return { label: r(Q, { children: [v, F, ee && r(Q, { children: [e(n, { dimColor: true, children: (te === "bridge" ? xe : "").padEnd(le, " ") }), F] }), gt(Vi(f).replace(/\s+/g, " ").trim(), ye)] }), value: E };
  }), oe = 7, re = Math.max(1, R ? Math.min(u.length, 5, p - 6 - oe) : Math.min(u.length, p - 1 - oe)), Re = re + oe, be = u.length > re;
  return r(s, { flexDirection: "column", padding: 1, height: Re, tabIndex: 0, autoFocus: true, onKeyDown: g, children: [r(n, { bold: true, children: ["Select a session to resume", be && r(n, { dimColor: true, children: [" ", "(", L, " of ", u.length, ")"] }), C && r(n, { dimColor: true, children: [" (", C, ")"] }), ":"] }), r(s, { flexDirection: "column", marginTop: 1, flexGrow: 1, children: [e(s, { marginLeft: 2 + ue, children: r(n, { bold: true, children: [fe.padEnd(O, " "), F, ee && ge.padEnd(le, " ") + F, "Session Title"] }) }), e(Je, { visibleOptionCount: re, options: pe, onChange: (o) => {
    let f = u.find((E) => E.id === o);
    if (f) h(f);
  }, onFocus: (o) => {
    let f = pe.findIndex((E) => E.value === o);
    if (f >= 0) W(f + 1);
  } })] }), e(s, { flexDirection: "row", children: e(n, { dimColor: true, children: r(Ee, { children: [e(V, { chord: ["up", "down"], action: "select" }), e(V, { chord: "enter", action: "confirm" }), e(ft, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })] }) }) })] });
}
function Oe(h) {
  let i = h.toLowerCase();
  if (i.includes("fetch") || i.includes("network") || i.includes("timeout")) return "network";
  if (i.includes("auth") || i.includes("token") || i.includes("permission") || i.includes("oauth") || i.includes("not authenticated") || i.includes("/login") || i.includes("console account") || i.includes("403")) return "auth";
  if (i.includes("api") || i.includes("rate limit") || i.includes("500") || i.includes("529")) return "api";
  return "other";
}
function Pe(h, i) {
  switch (h) {
    case "refused":
      return e(s, { marginY: 1, flexDirection: "column", children: e(n, { dimColor: true, children: i }) });
    case "network":
      return e(s, { marginY: 1, flexDirection: "column", children: e(n, { dimColor: true, children: "Check your internet connection" }) });
    case "auth":
      return r(s, { marginY: 1, flexDirection: "column", children: [e(n, { dimColor: true, children: "Teleport requires a Claude account" }), r(n, { dimColor: true, children: ["Run ", e(n, { bold: true, children: "/login" }), ' and select "Claude account with subscription"'] })] });
    case "api":
      return e(s, { marginY: 1, flexDirection: "column", children: e(n, { dimColor: true, children: "Sorry, Claude encountered an error" }) });
    case "other":
      return e(s, { marginY: 1, flexDirection: "row", children: e(n, { dimColor: true, children: "Sorry, Claude Code encountered an error" }) });
  }
}
function Aat(h) {
  let m = w(30), { onComplete: i, onCancel: R, onError: p, isEmbedded: I, source: u } = h, N = I === void 0 ? false : I, { resumeSession: C, isResuming: K, error: l, selectedSession: T } = J(u), x, G;
  if (m[0] !== u) x = () => {
    a("tengu_teleport_started", { source: c(u) });
  }, G = [u], m[0] = u, m[1] = x, m[2] = G;
  else x = m[1], G = m[2];
  P(x, G);
  let _;
  if (m[3] !== l || m[4] !== i || m[5] !== p || m[6] !== C) _ = async (X) => {
    let k = await C(X);
    if (k) i(k);
    else if (l) {
      if (p) p(l.message, l.formattedMessage);
    }
  }, m[3] = l, m[4] = i, m[5] = p, m[6] = C, m[7] = _;
  else _ = m[7];
  let q = _, H;
  if (m[8] !== R) H = () => {
    a("tengu_teleport_cancelled", {}), R();
  }, m[8] = R, m[9] = H;
  else H = m[9];
  let L = H;
  const W = !!l && !p;
  let Y;
  if (m[10] !== W) Y = { context: "Global", isActive: W }, m[10] = W, m[11] = Y;
  else Y = m[11];
  lt("app:interrupt", L, Y);
  let D;
  if (m[12] !== l || m[13] !== p) D = !!l && !p && TA(), m[12] = l, m[13] = p, m[14] = D;
  else D = m[14];
  let Z;
  if (m[15] !== D) Z = { context: "Confirmation", isActive: D }, m[15] = D, m[16] = Z;
  else Z = m[16];
  if (lt("confirm:no", L, Z), K && T) {
    let g2;
    if (m[17] === S) g2 = r(s, { flexDirection: "row", children: [e(ji, {}), e(n, { bold: true, children: "Resuming session…" })] }), m[17] = g2;
    else g2 = m[17];
    let b;
    if (m[18] !== T.title) b = r(s, { flexDirection: "column", padding: 1, children: [g2, r(n, { dimColor: true, children: ['Loading "', T.title, '"…'] })] }), m[18] = T.title, m[19] = b;
    else b = m[19];
    return b;
  }
  if (l && !p) {
    let g2;
    if (m[20] === S) g2 = e(n, { bold: true, color: "error", children: "Failed to resume session" }), m[20] = g2;
    else g2 = m[20];
    let b;
    if (m[21] !== l.message) b = e(n, { dimColor: true, children: l.message }), m[21] = l.message, m[22] = b;
    else b = m[22];
    let z;
    if (m[23] === S) z = e(s, { marginTop: 1, children: e(n, { dimColor: true, italic: true, children: e(V, { chord: "escape", action: "cancel" }) }) }), m[23] = z;
    else z = m[23];
    let O;
    if (m[24] !== b) O = r(s, { flexDirection: "column", padding: 1, children: [g2, b, z] }), m[24] = b, m[25] = O;
    else O = m[25];
    return O;
  }
  let g;
  if (m[26] !== L || m[27] !== q || m[28] !== N) g = e(ce, { onSelect: q, onCancel: L, isEmbedded: N }), m[26] = L, m[27] = q, m[28] = N, m[29] = g;
  else g = m[29];
  return g;
}
export {
  Aat
};
