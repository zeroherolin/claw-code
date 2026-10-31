// linux/shared/chunk-82eb5142.js — Claude Code 2.1.310（linux）模块 chunk-s6nf0zf1.js
import { ur } from "../permissions/turn-abort.js";
import { ac } from "./chunk-53bebec8.js";
function Ts(r, a) {
  let { signalB: o, timeoutMs: i, refTimer: d } = a ?? {}, n = ur();
  if (r?.aborted || o?.aborted) return n.abort(), { signal: n.signal, cleanup: () => {
  } };
  let e, t = () => {
    if (e !== void 0) clearTimeout(e);
    n.abort();
  };
  if (i !== void 0) {
    if (e = setTimeout(t, Math.min(i, ac)), !d) e.unref?.();
  }
  r?.addEventListener("abort", t), o?.addEventListener("abort", t);
  let m = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", t), o?.removeEventListener("abort", t);
  };
  return { signal: n.signal, cleanup: m };
}
export {
  Ts
};
