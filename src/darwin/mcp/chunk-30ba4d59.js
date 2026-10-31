// darwin/mcp/chunk-30ba4d59.js — Claude Code 2.1.310（darwin）模块 chunk-15bj870x.js
import { k } from "../settings/global-config-and-gates.js";
import { F } from "../context/not-admin-owned.js";
import { i } from "../shared/environment.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { yi, re } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { GWe } from "../core/conversation-engine.js";
import { Vd } from "../context/tool-result-clearing-after-idle-server-report.js";
import { y4s } from "../telemetry/image-resize-fallback.js";
var y = 0.5, B = 4, x = 1600, E = 25e3;
function c() {
  let e = i.MAX_MCP_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  let r = k("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof r === "number" && Number.isFinite(r) && r > 0) return r;
  return E;
}
function zme(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e, r = false;
  for (let o of n) if (o?.type === "text" && "_meta" in o && o._meta) {
    r = true;
    break;
  }
  if (!r) return e;
  return n.map((o) => {
    if (o?.type === "text" && "_meta" in o && o._meta) {
      let { _meta: s, ...m } = o;
      return m;
    }
    return o;
  });
}
var T = 65536;
function kPs(e) {
  if (!Array.isArray(e)) return e;
  let n = 0;
  for (let r of e) {
    if (r?.type !== "text" || !("_meta" in r) || !r._meta) continue;
    try {
      n += _(r._meta).length;
    } catch {
      n = 1 / 0;
    }
    if (n > T) return t(`MCP result: text blocks' _meta (over ${T} characters of JSON in all, or not serializable) left off the retained result`), zme(e);
  }
  return e;
}
function P(e) {
  return e.type === "text";
}
function C(e) {
  return e.type === "image";
}
function FBe(e) {
  if (!e) return 0;
  if (typeof e === "string") return Vd(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => {
    if (P(r)) return n + Vd(r.text);
    else if (C(r)) return n + x;
    return n;
  }, 0);
}
function Vme() {
  return c() * 4;
}
var A = "[OUTPUT TRUNCATED - exceeded ";
function M(e) {
  return e === 1 ? "[Image left out: it did not fit in the tool output limit]" : `[${e} images left out: they did not fit in the tool output limit]`;
}
function R() {
  return `

${A}${c()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function O(e, n) {
  let r = [], o = 0, s = 0, m, d;
  for (let [g, a] of e.entries()) if (P(a)) {
    let f = n - o;
    if (f <= 0) {
      d = g;
      break;
    }
    if (a.text.length <= f) r.push(a), o += a.text.length;
    else {
      let p = re(a.text, f);
      if (p) {
        let u = { type: "text", text: p };
        if (a._meta) u._meta = a._meta;
        r.push(u);
      }
      d = g + 1;
      break;
    }
  } else if (C(a)) {
    let f = x * 4;
    if (o + f <= n) r.push(a), o += f;
    else {
      let p = n - o, u;
      if (p > 0) {
        let h = Math.floor(p * 0.75);
        u = await y4s(a, h).catch(() => {
          return;
        });
      }
      if (u) r.push(u), o += u.source.type === "base64" ? u.source.data.length : f;
      else {
        if (m === void 0) m = r.length, o += M(1).length;
        s++;
      }
    }
  } else r.push(a);
  if (d !== void 0) s += F(e.slice(d), C);
  if (s > 0) r.splice(m ?? r.length, 0, { type: "text", text: M(s) });
  return r;
}
async function cnn(e, n) {
  if (!e) return false;
  let r = FBe(e);
  if (r <= c() * y) return false;
  if (FBe(typeof e === "string" ? e : e.filter(P)) > c() * B) return true;
  try {
    return (await GWe(typeof e === "string" ? [{ role: "user", content: e }] : [{ role: "user", content: e }], [], void 0, { credentials: n }) ?? r) > c();
  } catch (s) {
    return l(s), r > c();
  }
}
async function unn(e) {
  if (!e) return e;
  let n = Vme(), r = R();
  if (typeof e === "string") return yi(e, n) + r;
  else {
    let o = await O(e, n);
    return o.push({ type: "text", text: r }), o;
  }
}
async function Kme(e, n) {
  if (!await cnn(e, n)) return e;
  return await unn(e);
}
export {
  FBe,
  Kme,
  Vme,
  cnn,
  kPs,
  unn,
  zme
};
