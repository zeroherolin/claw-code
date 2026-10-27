// shared/chunk-t8nq64kw.js — Claude Code 2.1.310 模块 chunk-t8nq64kw.js
import { z_t } from "./invalid-retry.870h.js";
class Htn extends TransformStream {
  constructor({ onError: t, onRetry: a, onComment: o } = {}) {
    let s;
    super({ start(e) {
      s = z_t({ onEvent: (r) => {
        e.enqueue(r);
      }, onError(r) {
        t === "terminate" ? e.error(r) : typeof t == "function" && t(r);
      }, onRetry: a, onComment: o });
    }, transform(e) {
      s.feed(e);
    } });
  }
}
export {
  Htn
};
