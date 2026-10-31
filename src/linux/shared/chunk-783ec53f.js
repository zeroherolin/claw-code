// linux/shared/chunk-783ec53f.js — Claude Code 2.1.310（linux）模块 chunk-zr0dyj0t.js
import { PF } from "../vendor/mcp-sdk/input-required.88fd.js";
class DJt {
  append(e) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
  }
  readMessage() {
    if (!this._buffer) return null;
    let e = this._buffer.indexOf(`
`);
    if (e === -1) return null;
    let r = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(e + 1), kco(r);
  }
  clear() {
    this._buffer = void 0;
  }
}
function kco(e) {
  return PF.parse(JSON.parse(e));
}
function BHn(e) {
  return JSON.stringify(e) + `
`;
}
export {
  BHn,
  DJt,
  kco
};
