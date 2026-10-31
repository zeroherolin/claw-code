// linux/cli/stream-json.js — Claude Code 2.1.310（linux）模块 chunk-sx4xfr26.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { nw, Bit } from "./chunk-af2447be.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { Kt } from "../shared/chunk-3b9c376b.js";
import { sH } from "../api/control-response.js";
var l = 1e3;
function kzt(e = process.argv.slice(2)) {
  return Bit(e) && nw("--output-format", e) === "stream-json";
}
function v_e() {
  return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function Tzt(e, t = process.argv.slice(2)) {
  let r = nw("--session-id", t);
  return (nw("--sdk-url", t) === void 0 ? Kt(r) : r) || e;
}
function OKe({ sessionId: e, message: t, reason: r, resultIndex: n = 0 }) {
  return { ...sH(e, [t]), ...r !== void 0 && { startup_failure_reason: r }, ...n !== null && { result_index: n } };
}
async function kV(e) {
  if (v_e()) await Ntt([OKe({ ...e, sessionId: Tzt(e.sessionId) })]);
}
async function Ntt(e, { goesOn: t = false } = {}) {
  let r = process.stdout;
  if (!kzt() || r.writableEnded || r.destroyed) return false;
  let n = e.map((o) => JSON.stringify(o) + `
`).join(""), s = (o) => {
  }, u = new Promise((o) => {
    s = o;
  }), i = () => s(false);
  r.once("error", i);
  try {
    r.write(n, (o) => s(!o));
  } catch {
    return false;
  }
  let a = await Pe(u, l) ?? false;
  if (t && a) r.off("error", i);
  return a;
}
export {
  Ntt,
  OKe,
  Tzt,
  kV,
  kzt,
  v_e
};
