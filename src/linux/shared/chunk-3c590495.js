// linux/shared/chunk-3c590495.js — Claude Code 2.1.310（linux）模块 chunk-q0e6vzt5.js
import { $_t } from "./invalid-retry.js";
class btn extends TransformStream {
  constructor({ onError: t, onRetry: a, onComment: o } = {}) {
    let s;
    super({ start(e) {
      s = $_t({ onEvent: (r) => {
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
  btn
};
