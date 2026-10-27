// fs/bridge-read-file-served.vng3.js — Claude Code 2.1.310 模块 chunk-vng3ch2y.js
import { L, es, xX, J } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { R, Rr, v, Kt } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { In, JAt } from "./node-modules.gp4v.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Hxe, iie, ie, t } from "./gitlab-runner-authentication-token.d7b0.js";
import { U4 } from "../settings/global-config-and-gates.27xj.js";
import { Gw, tkn } from "../git/utf-8.vh7e.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { ut, Ebe, OS, r3e } from "../shell/chunk-tjkwy3jp.js";
import { hs } from "./tempdir-owner-mismatch.5xe1.js";
import { Zt } from "../plugins/skills-dir.cemw.js";
import { mE, BBo, Mu, Pa, jye } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { q0 } from "../shell/sandbox.aet2.js";
import { nF, Qjs, N0 } from "../context/team-memory-sync.0s3j.js";
import { Uf } from "../shared/chunk-td15acp7.js";
import { constants as N } from "fs";
import { lstat as fe, open as me, readlink as he, realpath as G } from "fs/promises";
import { normalize as _e } from "path";
import { normalize as te, parse as ne, sep as k } from "path";
var re = 512, oe = 4096;
function D(e) {
  return Array.isArray(e) && e.length > 0 && e.length <= re && e.every(se) ? e : void 0;
}
function se(e) {
  return typeof e === "string" && e.length <= oe && !e.includes("\0") && r3e(e) && te(e) === e;
}
function C(e, r) {
  return e.some((n) => {
    let o = n.endsWith(k) && ne(n).root !== n ? n.slice(0, -k.length) : n;
    return r === o || r.startsWith(o + k);
  });
}
import { dirname as K, join as ue, resolve as X } from "path";
import { isAbsolute as O, normalize as H, parse as ae, sep as x } from "path";
var le = 32, de = 4096;
async function U(e, { directories: r, unprobedDirectories: n = [], gate: o, heldFiles: s }) {
  try {
    if (e === "" || e !== e.trim() || e.length > de || e.includes("\0") || /^~(?:\/|$)/.test(e) || ae(e).root !== "" && !r3e(e)) return { path: null, why: "unfit_text" };
    let i = r.filter((d) => r3e(d)), p = n.filter((d) => r3e(d)), m = new Set((O(e) ? [e] : i).map((d) => OS(e, d))), l = await I([...m], e, o);
    if (l === null) return { path: null, why: "too_many" };
    let u = new Set(s()), h = new Set(l.flat());
    if ([...m, ...p.map((d) => OS(e, d))].some((d) => u.has(d) && !h.has(d))) return { path: null, why: "held_file_unreadable" };
    let f = l.filter((d) => d.some((y) => u.has(y)));
    if (l.length > 0) return j(f.length > 0 ? f : l, "directories");
    let _ = H(e);
    if (i.length === 0 || O(e) || _.length !== e.length || _.split(x).some((d) => ["", ".", ".."].includes(d))) return { path: null, why: "no_file" };
    let w = M(x + _, u, i), b = new Set(w);
    if (M(x + _, u, p).some((d) => !b.has(d))) return { path: null, why: "held_file_unreadable" };
    if (w.length === 0) return { path: null, why: "needs_file_search" };
    let F = await I(w, e, o);
    return F !== null && F.flat().length < w.length ? { path: null, why: "held_file_unreadable" } : j(F, "file_state");
  } catch (i) {
    if (i instanceof Ebe) return { path: null, why: "unfit_text" };
    try {
      let p = v(i), m = i instanceof Error ? i.name : typeof i;
      t(`resolveAsWrittenPath failed: ${p === void 0 ? m : `${m}/${p}`}`, { level: "error" });
    } catch {
    }
    return { path: null, why: "fault" };
  }
}
async function I(e, r, n) {
  if (e.length > le) return null;
  let o = /* @__PURE__ */ new Map();
  for (let s of e) {
    let i = await n(s, r);
    if (i !== null) o.set(i, [...o.get(i) ?? [], s]);
  }
  return [...o.values()];
}
function j(e, r) {
  if (e === null) return { path: null, why: "too_many" };
  let n = e[0]?.[0];
  return n === void 0 ? { path: null, why: "no_file" } : e.length > 1 ? { path: null, why: "tie" } : { path: n, step: r };
}
function M(e, r, n) {
  let o = /* @__PURE__ */ new Set();
  for (let s of r) if (s.endsWith(e) && r3e(s) && H(s) === s && n.some((i) => Uf(i, s, false))) o.add(s);
  return [...o];
}
async function ce(e, r, n) {
  if (J()) return null;
  let o = X(e);
  if (r.unresolved || r.landing !== In(o)) return null;
  let s = ie();
  for (let i = o; !n(); i = K(i)) {
    let p = await s.lstat(ue(i, ".git")).catch(() => {
      return;
    });
    if (p?.isDirectory() === true || p?.isFile() === true || p?.isSymbolicLink() === true) return In(i);
    if (K(i) === i) return null;
  }
  return null;
}
async function z(e, { heldFiles: r, timeLimitMs: n, stranded: o, whyNotBegin: s }, i, p) {
  if (o.probes > 0) return { path: null, why: "stranded" };
  let m = s();
  if (m !== void 0) return { path: null, why: m };
  let l = pe(), u = (y) => N0(y, i.trustedNetworkDirectories) === void 0, h = performance.now() + n, f = false, _ = () => f || performance.now() >= h, w = 0, b = (y) => (w++, y.finally(() => {
    w--, o.probes -= f ? 1 : 0;
  })), F = { path: null, why: "no_file" }, d = async () => {
    let y = null;
    if (u(l)) {
      let g = await b(iie(X(l)));
      if (_()) return F;
      y = await b(ce(l, g, _));
    }
    if (_()) return F;
    let P = L([l, y ?? l, ...mE(i)]), S = P.filter(u);
    for (let g of S) {
      if (_()) return F;
      if (g !== l) await b(iie(g));
    }
    if (_()) return F;
    return U(e, { directories: S, unprobedDirectories: P.filter((g) => !u(g)), gate: (g, T) => _() ? Promise.resolve(null) : b(p(g, T, i)), heldFiles: r });
  };
  try {
    let y = await Pe(d(), n);
    return y === void 0 || _() ? { path: null, why: "time_limit" } : y;
  } finally {
    f = true, o.probes += w;
  }
}
var ge = 1e6, vpr = N.O_RDONLY | (N.O_NONBLOCK ?? 0) | (N.O_NOCTTY ?? 0) | hs, Q = { realpath: G, lstat: fe, readlink: he }, kpr = 1e7, ye = new W(() => ({ promise: void 0 }));
function we() {
  let e = es(ye);
  return e.promise ??= Promise.all([import("../ui/get-attachments-root.0p6c.js"), import("../shared/drain-synced-files.9dhr.js")]).then(([r, n]) => [...r.FIXED_USER_DATA_ROOTS, n.SYNCED_FILE_ROOT]).catch((r) => {
    throw e.promise = void 0, r;
  }), e.promise;
}
function Re(e, r) {
  if (!r || r.size === 0) return false;
  for (let n of r.values()) if (n.includes(e)) return true;
  return false;
}
async function lxn(e, r) {
  let n = [];
  try {
    n = await we();
  } catch {
  }
  for (let o of mE(r)) {
    if (r.additionalWorkingDirectories.has(o) && !Re(o, r.trustedNetworkDirectories) && await Hxe(o, xX())) continue;
    let s;
    try {
      s = BBo(o) ? o : await G(o);
    } catch {
      continue;
    }
    if (JAt(o, s, xX())) continue;
    if (Mu(e, s, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) return true;
  }
  for (let o of n) if (Mu(e, o, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) return true;
  return jye(e, {}, [e], { remoteSurface: true }).behavior === "allow";
}
var Fe = { nt_namespace: "read_file: NT-namespace path rejected before filesystem access", untrusted_unc: "read_file: untrusted UNC path rejected before filesystem access", untrusted_automount: "read_file: automount path rejected before filesystem access", unvettable_chain: "read_file: unvettable path ancestry rejected before filesystem access", link_text_climbs: 'read_file: path through a symlink whose target has ".." past its leading "../" segments rejected', suspicious_windows_spelling_nt_device_namespace: "read_file: suspicious Windows path spelling rejected (NT device namespace)", suspicious_windows_spelling_colon_past_drive_position: "read_file: suspicious Windows path spelling rejected (colon past the drive-letter position)", suspicious_windows_spelling_tilde_digit: "read_file: suspicious Windows path spelling rejected (tilde followed by a digit)", suspicious_windows_spelling_device_path_prefix: "read_file: suspicious Windows path spelling rejected (device-path prefix)", suspicious_windows_spelling_trailing_dot_or_whitespace: "read_file: suspicious Windows path spelling rejected (trailing dot or whitespace in a segment)", suspicious_windows_spelling_dos_device_suffix: "read_file: suspicious Windows path spelling rejected (DOS device-name suffix)", suspicious_windows_spelling_dot_run_segment: "read_file: suspicious Windows path spelling rejected (dot-run segment)", suspicious_windows_spelling_unc_or_webdav_form: "read_file: suspicious Windows path spelling rejected (UNC-like form: doubled or mixed separators, embedded NT root, or WebDAV marker)" };
function A(e, r = "remote read denied") {
  return new Rr(`read denied: ${Zt(e)}`, r);
}
var E = { refused: true, telemetryMessage: void 0, unsettled: false, openFailure: void 0 }, B = { ...E, unsettled: true };
async function V(e, r, n, o, s, i) {
  let p = i ? await Qjs(e, r, n.trustedNetworkDirectories) : nF(e, r, n.trustedNetworkDirectories);
  if (!p.ok) {
    let l = p.reason === "suspicious_windows_spelling" ? `suspicious_windows_spelling_${p.spelling}` : p.reason;
    return { ...E, telemetryMessage: Fe[l] };
  }
  for (let l of p.pathsToCheck) if (!q0(l, n, "read").allowed || Pa(l, n, "read", "ask") !== null) return E;
  let m;
  try {
    m = await me(r, vpr);
  } catch (l) {
    return { ...E, openFailure: { error: l } };
  }
  try {
    let l = await m.stat({ bigint: true });
    if (!l.isFile()) return E;
    let u;
    try {
      u = await o.realpath(r);
    } catch {
      return B;
    }
    let h = await tkn(m, l, u, o);
    if (h === void 0) return B;
    if (u = h, !q0(u, n, "read").allowed || Pa(u, n, "read", "ask") !== null) return E;
    if (N0(u, n.trustedNetworkDirectories) !== void 0) return E;
    if (!await lxn(u, n)) return E;
    return { refused: false, value: await s({ handle: m, openedStat: l, canonicalPath: u }) };
  } finally {
    await m.close();
  }
}
function Y(e) {
  return e === void 0 ? void 0 : c(e);
}
async function j$e(e, r, n, { encoding: o = "utf-8", anchor: s, telemetrySource: i, containmentFs: p = Q, asWrittenSources: m } = {}) {
  let l = Math.min(r && r > 0 ? r : ge, kpr), u = s?.kind === "as_written", h = u ? "not_served" : void 0;
  try {
    let f = s === void 0 || u ? void 0 : await (await import("../shared/resolve-anchored-read-path.t18r.js")).resolveAnchoredReadPath(e, s);
    if (f === null) throw A(e);
    let _ = () => {
      let S = m?.whyNotServed();
      if (S !== void 0) throw h = S, A(e);
    }, w;
    if (u) {
      if (m === void 0) throw A(e);
      _();
      let S = D(s.within);
      if (S === void 0) throw h = "unfit_within", A(e);
      h = "fault";
      let g = await z(e, m, typeof n === "function" ? n() : n, (T, q, ee) => Se(T, q, ee, p));
      if (h = g.path === null ? g.why : g.step, g.path === null) throw A(e);
      if (!C(S, g.path)) throw h = "outside", A(e);
      w = g.path;
    }
    let b = typeof n === "function" ? n() : n, F = f?.absPath ?? w ?? ut(e), d = await V(e, F, b, p, ({ handle: S, openedStat: g }) => Gw(S, l, g.size), u);
    if (d.refused) throw d.openFailure === void 0 ? A(e, d.telemetryMessage) : d.openFailure.error;
    let { bytes: y, overLimit: P } = d.value;
    if (w !== void 0) _();
    if (i) a("tengu_bridge_read_file_served", { success: true, source: c(i), size_bytes: y.length, requested_max_bytes: l, truncated: P, ext: U4(F), as_written_lookup: Y(h) });
    return { contents: y.toString(o === "base64" ? "base64" : "utf-8"), absPath: F, ...P && { truncated: P }, ...o === "base64" && { encoding: o }, ...f !== void 0 && { anchor: f.kind }, ...w !== void 0 && { anchor: "as_written" } };
  } catch (f) {
    try {
      let _ = f instanceof Error ? "code" in f && typeof f.code === "string" ? `${f.name}/${f.code}` : f.name : typeof f;
      t(`readFileForRemote failed pre-deny: ${_}${h === void 0 ? "" : `, as_written look-up: ${h}`}`, { level: "error" });
    } catch {
    }
    try {
      if (i) a("tengu_bridge_read_file_served", { success: false, source: c(i), as_written_lookup: Y(h) });
    } catch {
    }
    try {
      if (h !== void 0) m?.onRefusal(h);
    } catch {
    }
    if (f instanceof R && f.message.startsWith("read denied: ")) throw f;
    throw A(e);
  }
}
class Z extends Error {
  constructor() {
    super("probeFileForRemote: cannot tell whether the path names a file");
    this.name = "UnsettledRemoteFileError";
  }
}
async function Se(e, r, n, o = Q) {
  if (!r3e(e) || _e(e) !== e) return null;
  let s = await V(r, e, n, o, ({ canonicalPath: i }) => Promise.resolve(i), true);
  if (!s.refused) return s.value;
  if (s.openFailure !== void 0) {
    let { error: i } = s.openFailure;
    if (Kt(i) || ["EISDIR", "ENXIO", "ENOTSUP", "EOPNOTSUPP"].includes(v(i) ?? "")) return null;
    throw i;
  }
  if (s.unsettled) throw new Z();
  return null;
}
export {
  j$e,
  kpr,
  lxn,
  vpr
};
