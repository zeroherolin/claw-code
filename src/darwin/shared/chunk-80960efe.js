// darwin/shared/chunk-80960efe.js — Claude Code 2.1.310（darwin）模块 chunk-gvhdvyy0.js
import { V7t, sDn } from "./chunk-783ec53f.js";
import e from "process";
class R9e {
  constructor(t = e.stdin, r = e.stdout) {
    this._stdin = t, this._stdout = r, this._readBuffer = new V7t(), this._started = false, this._ondata = (s) => {
      this._readBuffer.append(s), this.processReadBuffer();
    }, this._onerror = (s) => {
      this.onerror?.(s);
    };
  }
  async start() {
    if (this._started) throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    this._started = true, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    while (true) try {
      let t = this._readBuffer.readMessage();
      if (t === null) break;
      this.onmessage?.(t);
    } catch (t) {
      this.onerror?.(t);
    }
  }
  async close() {
    if (this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), this._stdin.listenerCount("data") === 0) this._stdin.pause();
    this._readBuffer.clear(), this.onclose?.();
  }
  send(t) {
    return new Promise((r) => {
      let s = sDn(t);
      if (this._stdout.write(s)) r();
      else this._stdout.once("drain", r);
    });
  }
}
export {
  R9e
};
