// darwin/cli/stream-json.js — Claude Code 2.1.310（darwin）模块 chunk-eyx7rcgf.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { Zb, Zst } from "./chunk-af2447be.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { Vt } from "../shared/chunk-3b9c376b.js";
import { dH } from "../api/control-response.js";
var l = 1e3;
function LGt(e = process.argv.slice(2)) {
  return Zst(e) && Zb("--output-format", e) === "stream-json";
}
function x_e() {
  return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function NGt(e, t = process.argv.slice(2)) {
  let r = Zb("--session-id", t);
  return (Zb("--sdk-url", t) === void 0 ? Vt(r) : r) || e;
}
function B6e({ sessionId: e, message: t, reason: r, resultIndex: n = 0 }) {
  return { ...dH(e, [t]), ...r !== void 0 && { startup_failure_reason: r }, ...n !== null && { result_index: n } };
}
async function DV(e) {
  if (x_e()) await Gtt([B6e({ ...e, sessionId: NGt(e.sessionId) })]);
}
async function Gtt(e, { goesOn: t = false } = {}) {
  let r = process.stdout;
  if (!LGt() || r.writableEnded || r.destroyed) return false;
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
  B6e,
  DV,
  Gtt,
  LGt,
  NGt,
  x_e
};
