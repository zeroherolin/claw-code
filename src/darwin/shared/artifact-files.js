// darwin/shared/artifact-files.js — Claude Code 2.1.310（darwin）模块 chunk-kwa9rh0q.js
import { v } from "../telemetry/anthropic-workspace-id.js";
import { OE } from "../fs/node-modules.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { dP, Os } from "../fs/utf-8.8f8e.js";
import { pe } from "./async-hooks.5238.js";
import { ut } from "../shell/chunk-8eebd6c6.js";
import { Jt } from "../artifacts/cobalt-plinth-lovage.js";
import { za } from "../vendor/highlight/file-path.js";
import { of, Pw } from "./chunk-0542336f.js";
import { tle, Iq } from "../artifacts/template-instance.js";
import { Eo, YC, QT, hV } from "../context/org-memory-writes-setting-changed.js";
import { unlink as D } from "fs/promises";
import { join as g, normalize as y, sep as w } from "path";
function m(n) {
  let t = n.split("/"), r = O();
  if (r === "windows" && t.some((e) => /[<>"|*]/.test(e) || OE(e) || /[. ]$/.test(e))) return `path ${za(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some((e) => /~\d/.test(e))) return `path ${za(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function r7(n) {
  let t = n, r = (i) => {
    let o = t[i];
    return typeof o === "string" ? o : void 0;
  }, e = Pw(t.paths), s = e === void 0 ? void 0 : e === of ? [] : e.filter((i) => typeof i === "string");
  return { path: r("path"), paths: s, outDir: r("out_dir") };
}
function ome(n, { outDirJudged: t = false } = {}) {
  let { path: r, outDir: e } = r7(n);
  if (r === void 0) return { reason: "read_file requires `path` — a published path from a list_files result" };
  let s = Iq(r);
  if ("errMsg" in s) return { reason: s.errMsg };
  let i = s.key.split("/"), o = m(s.key);
  if (o !== void 0) return { reason: o };
  let d = O(), a = d === "windows" || d === "wsl", l, f = false;
  try {
    if (e === void 0 || e === "") {
      let { url: u } = n, c = typeof u === "string" ? Jt(u) : null, p = c !== null ? a9(c.slug) : null;
      f = p !== null, l = p ?? pe();
    } else l = ut(e);
  } catch {
    return { reason: "out_dir cannot be resolved to a local directory" };
  }
  if (!t && d === "windows" && l.split(w).some((u) => u !== "" && /[. ]$/.test(u))) return { reason: `${e === void 0 || e === "" ? "the default save directory" : `out_dir ${za(e)}`} has a name ending in a dot or space, which Windows would save under a different name` };
  if (!t && a && e !== void 0 && e.split(/[\\/]/).some((u) => /~\d/.test(u))) return { reason: `out_dir ${za(e)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory` };
  return { dest: g(l, ...i), base: l, ...f && { defaultDir: true } };
}
var h = /* @__PURE__ */ new WeakMap();
function v9e(n, t = {}) {
  let r = n, { paths: e, url: s, out_dir: i } = r, o = typeof e === "object" && e !== null ? e : void 0, d = [typeof s === "string" ? s : "", typeof i === "string" ? i : "", t.outDirJudged === true ? "judged" : "", pe(), (YC() ? QT() : null) ?? ""].join("\0"), a = o === void 0 ? void 0 : h.get(o);
  if (a !== void 0 && a.key === d) return a.value;
  let l = b(n, t);
  if (o !== void 0) h.set(o, { key: d, value: l });
  return l;
}
function b(n, t) {
  let { paths: r } = r7(n);
  if (r === void 0 || r.length === 0) return { reason: "read_file requires `path`, or `paths` naming at least one published path" };
  if (r.length > tle) return { reason: `\`paths\` names ${r.length} paths; at most ${tle} can be read in one call` };
  let e = { ...n };
  delete e.paths;
  let s, i = [], o = /* @__PURE__ */ new Map();
  for (let d of r) {
    let a = ome({ ...e, path: d }, t);
    if ("reason" in a) return a;
    let l = Iq(d), f = "key" in l ? l.key : d, u = Eo(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()), c = o.get(u);
    if (c !== void 0) return { reason: c === f ? `\`paths\` names ${za(d)} more than once` : `\`paths\` names ${za(c)} and ${za(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own` };
    o.set(u, f), s ??= { base: a.base, ...a.defaultDir && { defaultDir: a.defaultDir } }, i.push({ path: f, dest: a.dest });
  }
  return { ...s, files: i };
}
var vco = "artifact-files";
function a9(n) {
  let t = YC() ? QT() : null;
  return t === null ? null : g(t, vco, n);
}
function Eae(n) {
  return n.length > 0 && n.every((t) => t.length > 0 && t.every((r) => hV(r)));
}
function k9e(n) {
  let t = YC() ? QT() : null;
  return t !== null && Eo(y(n)).startsWith(Eo(t) + w);
}
class ite extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(n, t, r) {
    super("the staged file could not be moved into place");
    this.partial = n;
    this.renameError = t;
    this.removedEarlier = r;
    this.name = "PartialKeptError";
  }
}
async function C9e(n, t, r) {
  let e = true;
  try {
    await Os(n, t, r);
    return;
  } catch (s) {
    let i = v(s);
    if (i === void 0 || !dP.has(i)) throw s;
    await D(t).catch((o) => {
      if (v(o) !== "ENOENT") throw s;
      e = false;
    });
  }
  try {
    await Os(n, t, r);
  } catch (s) {
    throw new ite(n, s, e);
  }
}
export {
  C9e,
  Eae,
  a9,
  ite,
  k9e,
  ome,
  r7,
  v9e,
  vco
};
