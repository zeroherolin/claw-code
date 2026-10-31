// linux/shared/path-rejected.js — Claude Code 2.1.310（linux）模块 chunk-xbn9v0mz.js
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { X } from "./chunk-57ff8cc1.js";
import { In } from "../fs/node-modules.js";
import { i } from "./environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Z2e, egn } from "./project-docs.js";
import { Hqs, b3n, kHe, xze, Pze, xun } from "../fs/file-upload.js";
import { p } from "./chunk-2fe3b2b7.js";
import { arr, jt } from "../settings/global-config-and-gates.js";
import { YS } from "../shell/chunk-8eebd6c6.js";
import { cet } from "../context/org-memory-writes-setting-changed.js";
import { W8e } from "./not-regular.js";
import { yx } from "./chunk-c60ee8b6.js";
import { o, v, u } from "../vendor/zod/string-format.js";
import { et } from "./chunk-061dbb8e.js";
import { basename as z, join as B, sep as k } from "path";
var y = /* @__PURE__ */ new Set(["x-upload-token", "content-type"]), A = 4096, P = 12e4, D = 4096, U = p(() => u({ sha256: o(), size: v() })), F = { 400: "put_hash_mismatch", 403: "put_refused", 409: "put_already_used", 410: "put_expired", 413: "put_size_mismatch", 429: "put_busy", 503: "put_busy" }, C = 2, O = 2e3, x = 1e4;
async function T(e, a, m, h, n) {
  let _ = arr(e.url), f = _ === void 0 ? void 0 : new URL(e.url);
  if (_ === void 0 || f === void 0 || f.search !== "" || f.hash !== "" || !h.endsWith("/") || !f.pathname.startsWith(h) || !/^[A-Za-z0-9_-]{1,256}$/.test(f.pathname.slice(h.length))) return "put_url_refused";
  let s = { "content-type": "application/octet-stream" };
  for (let [c, r] of Object.entries(e.headers)) {
    if (!y.has(c.toLowerCase()) || r.length > A || /[^\x20-\x7e]/.test(r)) return "put_header_refused";
    s[c.toLowerCase()] = r;
  }
  try {
    for (let c = 0; ; c++) {
      let r = await jt.put(`/${f.pathname.slice(1)}`, a, { auth: "none", baseUrl: _, headers: s, maxRedirects: 0, maxBodyLength: a.length, maxContentLength: D, timeout: P, signal: n, validateStatus: () => true });
      if (!r.ok) return r.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (r.status === 200) {
        let b = U().safeParse(r.data);
        return b.success && b.data.sha256 === m && b.data.size === a.length ? void 0 : "put_bad_answer";
      }
      let l = F[r.status] ?? "put_failed";
      if (l !== "put_busy" || c === C) return l;
      let R = Number(r.response.headers["retry-after"]);
      if (await X(Number.isFinite(R) && R >= 0 ? Math.min(R * 1e3, x) : O, n), n.aborted) return "canceled";
    }
  } catch (c) {
    if (n.aborted) return "canceled";
    return t(`[file inputs] upload threw: ${d(c)}`, { level: "error" }), E(c) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  }
}
function yUn({ screen: e, maxFileBytes: a, maxTotalBytes: m, uploadPathPrefix: h, namesResolvedPaths: n = false }) {
  return { async hash(_, f) {
    let s = [], c = 0;
    for (let r of _) {
      if (f.aborted) return [...s, { path: r, code: "canceled" }];
      let l = await DTr(r, e, a);
      if ("code" in l) return [...s, n ? l : { path: r, code: l.code }];
      if (c += l.buf.length, c > m) return [...s, { path: r, code: "too_large_total" }];
      s.push({ path: r, name: l.name, size: l.buf.length, sha256: l.sha256 });
    }
    return s;
  }, async put(_, f) {
    let s = [], c = 0;
    for (let { path: r, sha256: l, url: R, headers: b } of _) {
      if (f.aborted) return [...s, { path: r, code: "canceled" }];
      let g = await DTr(r, e, a);
      if ("code" in g) return [...s, g.code === "resolves_elsewhere" ? { path: r, code: "changed" } : g];
      if (c += g.buf.length, c > m) return [...s, { path: r, code: "too_large_total" }];
      if (g.sha256 !== l) return [...s, { path: r, code: "changed" }];
      let S = await T({ url: R, headers: b }, g.buf, l, h, f);
      if (S !== void 0) return [...s, { path: r, code: S }];
      s.push({ path: r, ok: true });
    }
    return s;
  } };
}
function H(e, a) {
  let m = YS(e);
  if (m === null) return true;
  return e !== a && w(m) !== w(a) && !(i.CLAUDE_CODE_REMOTE === true && xun(m, a, { product: Z2e, attach: egn }));
}
function w(e) {
  return cet(In(e.length > 1 && e.endsWith(k) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, (a) => a.toUpperCase());
}
async function lbo(e, a, { fromChat: m = false } = {}) {
  return await kHe(e, a) || !m && [e, a].some((h) => b3n(h) || Hqs(h));
}
async function DTr(e, a, m, { followsLinks: h = false } = {}) {
  let n = await a(e);
  if (n === void 0) return { path: e, code: "path_rejected" };
  if (n.requiredDigest === void 0 && await lbo(e, n.realPath, n)) return t("[file inputs] a path was rejected: a credential, or Claude's own"), { path: e, code: "path_rejected" };
  if (!h && H(e, n.realPath) && !(n.requiredDigest !== void 0 && YS(e) === B(yx(), z(n.realPath)))) return { path: e, code: "resolves_elsewhere", resolved: n.realPath };
  let _ = await xze(n.realPath);
  if (W8e.test(_)) return { path: e, code: "name_direction" };
  let f = await Pze(n.realPath, m);
  if (!("buf" in f)) return { path: e, code: f.refusal };
  let s = et(f.buf);
  if (n.requiredDigest !== void 0 && s !== n.requiredDigest) return { path: e, code: "path_rejected" };
  return { buf: f.buf, name: _, sha256: s };
}
export {
  DTr,
  lbo,
  yUn
};
