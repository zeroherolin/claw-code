// linux/fs/chunk-31bbf3d3.js — Claude Code 2.1.310（linux）模块 chunk-zcdwnz6s.js
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { aee } from "./gitlab-runner-authentication-token.js";
import { No, ot } from "./chunk-86be9585.js";
import { ffi, kxe } from "./not-utf8.js";
import { open as l, realpath as f, stat as g } from "fs/promises";
import { resolve as h } from "path";
var mgs = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.", s = 268435456;
function nMn(t) {
  let e = No(t).trimStart();
  return e.startsWith("{") || ot(e, false) !== null;
}
async function ggs(t) {
  let e = h(t);
  try {
    await using r = await l(e, aee());
    let a = await r.stat({ bigint: true });
    ffi(a, e);
    let o = await f(e).catch(() => e), n = await g(o, { bigint: true });
    if (n.dev !== a.dev || n.ino !== a.ino) return { ok: false, error: `Error: --agents file changed while it was read: ${e}` };
    let { content: i } = await kxe(r, e, s);
    return { ok: true, json: i, filePath: e, realPath: o };
  } catch (r) {
    switch (E(r)) {
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
  ggs,
  mgs,
  nMn
};
