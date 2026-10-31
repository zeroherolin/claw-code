// darwin/shared/chunk-4f089d77.js — Claude Code 2.1.310（darwin）模块 chunk-f8kapdn6.js
import { Uv } from "../fs/files-directories.js";
import { d, v } from "../telemetry/anthropic-workspace-id.js";
import { wn } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { hn } from "../fs/async-hooks.7959.js";
import { ot } from "../fs/chunk-86be9585.js";
import { f } from "./chunk-2fe3b2b7.js";
import { Ir } from "../shell/invalid-type.js";
import { Ufe } from "../telemetry/daemon-upgrade-defer-busy.js";
import { P5e, TPt } from "../permissions/daemon-config.js";
import { u0 } from "./chunk-f843925d.js";
import { o, C, u, Fe } from "../vendor/zod/string-format.js";
import { z } from "./chunk-be29de51.js";
import { stat as h } from "fs/promises";
import { basename as w, dirname as x, normalize as y } from "path";
function D(r) {
  return Fe([r, C(r)]).optional().transform((n) => n === void 0 ? [] : Array.isArray(n) ? n : [n]);
}
var p = f(() => {
  let r = Ir(Ufe, (n) => D(n.schema()));
  return u({ $schema: o().optional(), ...r });
});
function Lpr() {
  return p().parse({});
}
async function T4e(r, n) {
  let i;
  if (z() && n !== void 0 && r === u0()) {
    let e = await K(n, r);
    if (!e.ok) return e.result;
    i = e.raw;
  } else try {
    let e = await h(r).catch((m) => v(m) === "ENOENT" ? null : Promise.reject(m));
    if (e && (!e.isFile() || e.size > P5e)) return { ok: false, error: `${r} is not a regular file (or exceeds 1MiB)` };
    i = await hn().read(r);
  } catch (e) {
    if (v(e) === "ENOENT") return { ok: true, config: Lpr(), unknownKeys: [] };
    return { ok: false, error: `failed to read ${r}: ${d(e)}` };
  }
  let s = ot(i, false);
  if (s === null) return { ok: false, error: `failed to parse ${r} as JSON` };
  let c = p().safeParse(s);
  if (!c.success) return { ok: false, error: `config validation failed: ${c.error.message}` };
  let a = new Set(Object.keys(p().shape)), l = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return { ok: true, config: c.data, unknownKeys: l };
}
async function K(r, n) {
  let i = await TPt(r);
  switch (i.kind) {
    case "text":
      return { ok: true, raw: i.text };
    case "absent":
      return { ok: false, result: { ok: true, config: Lpr(), unknownKeys: [] } };
    case "refused":
      return { ok: false, result: { ok: false, error: `${n} is not a regular file (or exceeds 1MiB)` } };
    case "failed":
      return { ok: false, result: { ok: false, error: `failed to read ${n}: ${i.error.code}` } };
    case "threw":
      return { ok: false, result: { ok: false, error: `failed to read ${n}: ${d(i.error)}` } };
  }
}
function Npr(r, n) {
  let i = x(r), s = y(i), c = w(r), a = Uv.watch(i, { persistent: true, ignoreInitial: true, depth: 0, usePolling: O() === "macos", interval: 100, ignored: (l) => {
    let e = y(l);
    return e !== s && w(e) !== c;
  }, awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 }, atomic: true, ignorePermissionErrors: true });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", (l) => t(`[daemon-config] watcher error: ${d(l)}`, { level: "warn" })), () => void a.close().catch(() => {
  });
}
function kds(r, n) {
  let i = { stop: [], start: [], restart: [] };
  for (let s of Object.keys(Ufe)) {
    let c = r[s] ?? [], a = n[s] ?? [], l = Math.max(c.length, a.length);
    for (let e = 0; e < l; e++) {
      let m = `${s}:${e}`, k = c[e], g = a[e];
      if (k !== void 0 && g === void 0) i.stop.push({ id: m, kind: s, previousConfig: k });
      else if (k === void 0 && g !== void 0) i.start.push({ id: m, kind: s, config: g });
      else if (!wn(k, g)) i.restart.push({ id: m, kind: s, config: g, previousConfig: k });
    }
  }
  return i;
}
export {
  Lpr,
  Npr,
  T4e,
  kds
};
