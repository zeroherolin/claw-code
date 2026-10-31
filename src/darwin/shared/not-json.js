// darwin/shared/not-json.js — Claude Code 2.1.310（darwin）模块 chunk-c2t153rr.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { Tye, Mpn, tce } from "./chunk-f0d2d1c6.js";
import { _, ee } from "../fs/gitlab-runner-authentication-token.js";
import { z_t } from "./invalid-retry.js";
import { D } from "./chunk-7027e6d5.js";
var O = new W(() => ({}));
function T() {
  return O.of(U().host);
}
function bye() {
  return T().door !== void 0;
}
var E = 1024, j = 32, I8n = 1024, v = 256, q = /^[-\d"]/, B = 65536, N = 128, k = 16, x = 1024;
function Spn() {
  let { door: i } = T();
  if (i === void 0) return;
  let c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), p = (n) => typeof n === "string" && n.length <= j && !c.has(n) && !a.has(n) ? Number(n) : n, f = (n) => {
    c.delete(n), a.delete(n);
  }, g = (n, s, u = { any: false, lastMayBeShortError: false }) => ({ read(e) {
    let d = e.length;
    u.lastMayBeShortError = s && !u.any && d <= x, u.any = true;
    let r = i.mostMembers(void 0, n);
    if (u.lastMayBeShortError) r = Math.max(r, k);
    let t = !Mpn(e, I8n), o = t ? void 0 : Tye(e, r, Math.min(r, F)), m, l = e;
    if (o === void 0) {
      let M = tce(e, z), h = M?.has("method") ? void 0 : M?.get("id"), w = h !== void 0 && h.length <= v && q.test(h) ? A(h) : void 0, R = p(w), y = c.get(R) ?? a.get(R);
      if (y !== void 0) {
        if (m = { id: w, asked: y }, r = i.mostMembers(y, n), o = t ? void 0 : Tye(e, r), o === void 0 && !t) l = i.withoutWhatIsDropped?.(e, y, n) ?? e;
        if (l !== e) t = !Mpn(l, I8n), o = t ? void 0 : Tye(l, r);
      }
    }
    let S = o === void 0 ? void 0 : A(l);
    if (o !== void 0 && S !== void 0) return { sent: S, size: { ...o, length: d }, ...l !== e && { readInstead: l } };
    if (o !== void 0 && m === void 0) {
      let M = { ...o, length: d };
      if (u.lastMayBeShortError && M.members <= k) return { sent: void 0, size: M };
      return i.chargeUnasked(n, M.members), i.judge(e, void 0, n, M) === void 0 ? { standIn: void 0 } : { sent: void 0, size: M };
    }
    return f(p(m?.id)), { standIn: i.standInForUnparsed(m, n, t ? { reason: "nesting" } : o === void 0 ? { reason: "members", most: r } : { reason: "not_json" }) };
  }, chargeUnasked({ members: e }) {
    i.chargeUnasked(n, e);
  }, judge(e, d, r) {
    let t = D(e) && e.method === void 0 ? p(e.id) : void 0, o = c.get(t), m = o ?? a.get(t);
    if (u.lastMayBeShortError && d.members <= k && !r && m === void 0 && D(e) && e.method === void 0 && (e.result === void 0 || e.result === null)) return e;
    if (o !== void 0) {
      if (c.delete(t), a.size >= E) a.delete(a.keys().next().value);
      a.set(t, { ...o, answeredBefore: true });
    }
    if ((m === void 0 || m.answeredBefore) && !r) i.chargeUnasked(n, d.members);
    let l = i.judge(e, m, n, d);
    if (l !== e) f(t);
    return l;
  } });
  return { noteRequests(n) {
    if (typeof n !== "string") return;
    let s = A(n), u = Array.isArray(s) ? s : [s];
    for (let e of u) {
      if (!D(e)) continue;
      let { id: d, method: r, params: t } = e;
      if (d !== void 0 && typeof r === "string") {
        if (c.size >= E) c.delete(c.keys().next().value);
        let o = r === "tools/call" && D(t) ? t.name : void 0;
        c.set(d, { method: r, ...typeof o === "string" && { tool: o }, ...D(t) && t.cursor !== void 0 && { hasCursor: true } });
      }
    }
  }, judging({ url: n, isGet: s, ok: u, contentType: e }) {
    let d = g(n, !u && !s), r = (e ?? "").toLowerCase();
    if (r.includes("text/event-stream") || s && u) return { through: C(d), contentType: "text/event-stream" };
    return { through: H(d), contentType: r.includes("application/json") ? "application/json" : void 0 };
  } };
}
var z = /* @__PURE__ */ new Set(["id", "method"]), F = 8;
function I(i) {
  return i.replace(/^\uFEFF+/, "");
}
function A(i) {
  try {
    return ee(i);
  } catch {
    return;
  }
}
function b(i, c, a) {
  for (let p of a === void 0 ? c : [new TextEncoder().encode(a)]) i.enqueue(p);
}
function H({ read: i, chargeUnasked: c, judge: a }) {
  let p = [];
  return new TransformStream({ transform(f) {
    p.push(f);
  }, flush(f) {
    let g = i(I(new TextDecoder().decode(Buffer.concat(p))));
    if ("standIn" in g) {
      f.enqueue(new TextEncoder().encode(_(g.standIn ?? null)));
      return;
    }
    let { sent: n, size: s, readInstead: u } = g;
    if (typeof n !== "object" || n === null) {
      b(f, p, u);
      return;
    }
    if (Array.isArray(n)) c(s);
    if (Array.isArray(n) && n.length > N) {
      f.enqueue(new TextEncoder().encode("null"));
      return;
    }
    let e, d;
    if (Array.isArray(n)) {
      let r = n, t = r.map((o) => a(o, s, true)).filter((o) => o !== void 0);
      e = t, d = t.length === r.length && r.every((o, m) => o === t[m]);
    } else e = a(n, s, false), d = e === n;
    if (d) {
      b(f, p, u);
      return;
    }
    f.enqueue(new TextEncoder().encode(_(e ?? null)));
  } });
}
function C({ read: i, judge: c }) {
  let a = new TextDecoder(), p = new TextEncoder(), f = "", g = z_t({ onRetry(s) {
    f += `retry: ${s}

`;
  }, onEvent({ id: s, event: u, data: e }) {
    let d = u, r = e;
    if (e !== "" && (d === void 0 || d === "message")) {
      let t = i(I(e)), o = "standIn" in t ? void 0 : t.sent, m = "standIn" in t ? t.standIn : o === void 0 ? void 0 : c(o, t.size, false);
      if (!("standIn" in t) && o === void 0) r = "!";
      else if (m === void 0) d = "dropped", r = "";
      else if (m !== o) r = _(m);
      else r = (("standIn" in t ? void 0 : t.readInstead) ?? e).replaceAll(`
`, " ");
    } else if (e.length > B) r = "";
    f += (d === void 0 ? "" : `event: ${d}
`) + (s === void 0 ? "" : `id: ${s}
`) + r.split(`
`).map((t) => `data: ${t}
`).join("") + `
`;
  } }), n = (s) => {
    if (f !== "") s.enqueue(p.encode(f)), f = "";
  };
  return new TransformStream({ transform(s, u) {
    g.feed(a.decode(s, { stream: true })), n(u);
  }, flush(s) {
    g.feed(a.decode()), n(s);
  } });
}
export {
  I8n,
  Spn,
  bye
};
