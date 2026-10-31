// darwin/shared/chunk-783ec53f.js — Claude Code 2.1.310（darwin）模块 chunk-awt0aew1.js
import { H$ } from "../vendor/mcp-sdk/input-required.88fd.js";
class V7t {
  append(e) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
  }
  readMessage() {
    if (!this._buffer) return null;
    let e = this._buffer.indexOf(`
`);
    if (e === -1) return null;
    let r = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(e + 1), qco(r);
  }
  clear() {
    this._buffer = void 0;
  }
}
function qco(e) {
  return H$.parse(JSON.parse(e));
}
function sDn(e) {
  return JSON.stringify(e) + `
`;
}
export {
  V7t,
  qco,
  sDn
};
