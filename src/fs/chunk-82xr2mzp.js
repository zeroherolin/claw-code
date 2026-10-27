// fs/chunk-82xr2mzp.js — Claude Code 2.1.310 模块 chunk-82xr2mzp.js
import { d, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { gee } from "./gitlab-runner-authentication-token.d7b0.js";
import { No, ot } from "./chunk-gzs70jxe.js";
import { Ypi, Rxe } from "./not-utf8.sqq6.js";
import { open as l, realpath as f, stat as g } from "fs/promises";
import { resolve as h } from "path";
var Xgs = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.", s = 268435456;
function CMn(t) {
  let e = No(t).trimStart();
  return e.startsWith("{") || ot(e, false) !== null;
}
async function Jgs(t) {
  let e = h(t);
  try {
    await using r = await l(e, gee());
    let a = await r.stat({ bigint: true });
    Ypi(a, e);
    let o = await f(e).catch(() => e), n = await g(o, { bigint: true });
    if (n.dev !== a.dev || n.ino !== a.ino) return { ok: false, error: `Error: --agents file changed while it was read: ${e}` };
    let { content: i } = await Rxe(r, e, s);
    return { ok: true, json: i, filePath: e, realPath: o };
  } catch (r) {
    switch (v(r)) {
      case "ENOENT":
        return { ok: false, error: `Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)` };
      case "ERR_FILE_TOO_LARGE":
        return { ok: false, error: `Error: --agents file is larger than ${s} bytes: ${e}` };
      case "ERR_MULTIPLE_LINKS":
        return { ok: false, error: `Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)` };
      default:
        return { ok: false, error: `Error reading --agents file ${e}: ${d(r)}` };
    }
  }
}
export {
  CMn,
  Jgs,
  Xgs
};
