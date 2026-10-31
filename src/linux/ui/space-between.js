// linux/ui/space-between.js — Claude Code 2.1.310（linux）模块 chunk-f0t3awhd.js
import { te } from "../fs/gitlab-runner-authentication-token.js";
import { w } from "./chunk-0ed4c357.js";
import { Ri } from "../fs/async-hooks.7959.js";
import { s, n, ts } from "../telemetry/render-glyph-cardinality.js";
import { Ge } from "./aria-hidden.8741.js";
import { jI } from "../shared/chunk-01d7baee.js";
import { PWn } from "../core/conversation-engine.js";
import { uu } from "../shared/chunk-6adae81c.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { pP } from "./aria-label.0571.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { tv } from "../cli/chunk-631c0fd0.js";
import { x1e } from "../mcp/chunk-30ba4d59.js";
import { XN } from "../shared/action-not-found.4cf4.js";
import { j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function fe(o) {
  let [Re, be] = o;
  return `${Re}: ${be}`;
}
function ce(o) {
  let [ke] = o;
  return F(ke);
}
var y = 1e4;
function uPn(o) {
  let a = o.at(-1);
  if (!a?.data) return e(Ge, { height: 1, children: e(n, { dimColor: true, children: "Running…" }) });
  let { progress: t, total: u } = a.data, l = uu(a.data.progressMessage);
  if (t === void 0) return e(Ge, { height: 1, children: e(n, { dimColor: true, children: "Running…" }) });
  if (u !== void 0 && u > 0) {
    let i = Math.min(1, Math.max(0, t / u)), f = Math.round(i * 100);
    return e(Ge, { children: r(s, { flexDirection: "column", children: [l && e(n, { dimColor: true, children: l }), r(s, { flexDirection: "row", gap: 1, children: [e(pP, { ratio: i, width: 20 }), r(n, { dimColor: true, children: [f, "%"] })] })] }) });
  }
  return e(Ge, { height: 1, children: e(n, { dimColor: true, children: l ?? `Processing… ${t}` }) });
}
function rlt(o, a, { verbose: t, input: u }) {
  let l = o;
  if (!t) {
    let i = b(l, u);
    if (i !== null) return e(Ge, { height: 1, children: r(n, { children: ["Sent a message to", " ", e(ts, { children: tv(i.url, i.channel) })] }) });
  }
  return Eto(l, t);
}
function Eto(o, a) {
  let t = x1e(o), l = t > y ? `${ne.warning} Large MCP response (~${Ri(t)} tokens), this can fill up context quickly` : null, i;
  if (Array.isArray(o)) {
    let f = o.map((m, c) => {
      if (m.type === "image") return e(s, { justifyContent: "space-between", overflowX: "hidden", width: "100%", children: e(Ge, { height: 1, children: e(n, { children: "[Image]" }) }) }, c);
      return e(h, { item: m, verbose: a }, c);
    });
    i = e(s, { flexDirection: "column", width: "100%", children: f });
  } else if (!o) i = e(s, { justifyContent: "space-between", overflowX: "hidden", width: "100%", children: e(Ge, { height: 1, children: e(n, { dimColor: true, children: "(No content)" }) }) });
  else i = e(jI, { content: o, verbose: a });
  if (l) return r(s, { flexDirection: "column", children: [e(Ge, { height: 1, children: e(n, { color: "warning", children: l }) }), i] });
  return i;
}
function h(o) {
  let l = w(3), { item: a, verbose: t } = o, u = a.type === "text" && "text" in a && a.text !== null && a.text !== void 0 ? String(a.text) : "", i;
  if (l[0] !== u || l[1] !== t) i = e(jI, { content: u, verbose: t }), l[0] = u, l[1] = t, l[2] = i;
  else i = l[2];
  return i;
}
function M(o, { maxChars: a, maxKeys: t }) {
  let u = o.trim();
  if (u.length === 0 || u.length > a || u[0] !== "{") return null;
  let l;
  try {
    l = te(u);
  } catch {
    return null;
  }
  if (l === null || typeof l !== "object" || Array.isArray(l)) return null;
  let i = Object.entries(l);
  if (i.length === 0 || i.length > t) return null;
  return i;
}
var R = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;
function b(o, a) {
  let t = o;
  if (Array.isArray(o)) {
    let p = o.find((x) => x.type === "text");
    t = p && "text" in p ? p.text : void 0;
  }
  if (typeof t !== "string" || !t.includes('"message_link"')) return null;
  let l = M(t, { maxChars: 2e3, maxKeys: 6 })?.find(([p]) => p === "message_link")?.[1];
  if (typeof l !== "string") return null;
  let i = R.exec(l);
  if (!i) return null;
  let f = a, m = f?.channel_id ?? f?.channel ?? i[1], c = (typeof m === "string" ? PWn(m) : "") || "slack";
  return { channel: c.startsWith("#") ? c : `#${c}`, url: l };
}
function olt(o, a) {
  let t = a?.columns;
  if (typeof o === "string") return XN(o, t);
  if (Array.isArray(o)) return o.some((u) => u.type === "text" && XN(u.text, t));
  return false;
}
export {
  Eto,
  olt,
  rlt,
  uPn
};
