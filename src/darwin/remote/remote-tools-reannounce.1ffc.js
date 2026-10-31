// darwin/remote/remote-tools-reannounce.1ffc.js — Claude Code 2.1.310（darwin）模块 chunk-232esn0g.js
class x1e {
  #e = void 0;
  #n = false;
  provide(e) {
    this.#e = e;
  }
  canAsk() {
    return this.#e !== void 0;
  }
  askOnce({ workerEpoch: e, deadlineMs: n }) {
    if (this.#e === void 0 || this.#n) return false;
    return this.#n = true, this.#e({ subtype: "remote_tools_reannounce", worker_epoch: e, deadline_ms: n }, AbortSignal.timeout(n)), true;
  }
}
export {
  x1e
};
