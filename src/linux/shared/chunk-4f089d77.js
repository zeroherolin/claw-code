// linux/shared/chunk-4f089d77.js — Claude Code 2.1.310（linux）模块 chunk-xvmrngkh.js
import { FE } from "../fs/files-directories.js";
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { wn } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { hn } from "../fs/async-hooks.7959.js";
import { ot } from "../fs/chunk-86be9585.js";
import { p } from "./chunk-2fe3b2b7.js";
import { Ir } from "../shell/invalid-type.js";
import { Mpe } from "../telemetry/daemon-upgrade-defer-busy.js";
import { x6e, SPt } from "../permissions/daemon-config.js";
import { aD } from "./chunk-f843925d.js";
import { o, T, u, $e } from "../vendor/zod/string-format.js";
import { z } from "./chunk-be29de51.js";
import { stat as C } from "fs/promises";
import { basename as w, dirname as h, normalize as y } from "path";
function x(r) {
  return $e([r, T(r)]).optional().transform((n) => n === void 0 ? [] : Array.isArray(n) ? n : [n]);
}
var g = p(() => {
  let r = Ir(Mpe, (n) => x(n.schema()));
  return u({ $schema: o().optional(), ...r });
});
function Mfr() {
  return g().parse({});
}
async function S5e(r, n) {
  let i;
  if (z() && n !== void 0 && r === aD()) {
    let e = await D(n, r);
    if (!e.ok) return e.result;
    i = e.raw;
  } else try {
    let e = await C(r).catch((l) => E(l) === "ENOENT" ? null : Promise.reject(l));
    if (e && (!e.isFile() || e.size > x6e)) return { ok: false, error: `${r} is not a regular file (or exceeds 1MiB)` };
    i = await hn().read(r);
  } catch (e) {
    if (E(e) === "ENOENT") return { ok: true, config: Mfr(), unknownKeys: [] };
    return { ok: false, error: `failed to read ${r}: ${d(e)}` };
  }
  let s = ot(i, false);
  if (s === null) return { ok: false, error: `failed to parse ${r} as JSON` };
  let f = g().safeParse(s);
  if (!f.success) return { ok: false, error: `config validation failed: ${f.error.message}` };
  let a = new Set(Object.keys(g().shape)), c = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return { ok: true, config: f.data, unknownKeys: c };
}
async function D(r, n) {
  let i = await SPt(r);
  switch (i.kind) {
    case "text":
      return { ok: true, raw: i.text };
    case "absent":
      return { ok: false, result: { ok: true, config: Mfr(), unknownKeys: [] } };
    case "refused":
      return { ok: false, result: { ok: false, error: `${n} is not a regular file (or exceeds 1MiB)` } };
    case "failed":
      return { ok: false, result: { ok: false, error: `failed to read ${n}: ${i.error.code}` } };
    case "threw":
      return { ok: false, result: { ok: false, error: `failed to read ${n}: ${d(i.error)}` } };
  }
}
function Dfr(r, n) {
  let i = h(r), s = y(i), f = w(r), a = FE.watch(i, { persistent: true, ignoreInitial: true, depth: 0, usePolling: O() === "macos", interval: 100, ignored: (c) => {
    let e = y(c);
    return e !== s && w(e) !== f;
  }, awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 }, atomic: true, ignorePermissionErrors: true });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", (c) => t(`[daemon-config] watcher error: ${d(c)}`, { level: "warn" })), () => void a.close().catch(() => {
  });
}
function Eds(r, n) {
  let i = { stop: [], start: [], restart: [] };
  for (let s of Object.keys(Mpe)) {
    let f = r[s] ?? [], a = n[s] ?? [], c = Math.max(f.length, a.length);
    for (let e = 0; e < c; e++) {
      let l = `${s}:${e}`, m = f[e], k = a[e];
      if (m !== void 0 && k === void 0) i.stop.push({ id: l, kind: s, previousConfig: m });
      else if (m === void 0 && k !== void 0) i.start.push({ id: l, kind: s, config: k });
      else if (!wn(m, k)) i.restart.push({ id: l, kind: s, config: k, previousConfig: m });
    }
  }
  return i;
}
export {
  Dfr,
  Eds,
  Mfr,
  S5e
};
