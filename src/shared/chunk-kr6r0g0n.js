// shared/chunk-kr6r0g0n.js — Claude Code 2.1.310 模块 chunk-kr6r0g0n.js
class o {
  gate = null;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate?.() === true;
  }
}
var r = new o();
function IJs(e) {
  r.register(e);
}
function OJs() {
  return r.isOpen();
}
export {
  IJs,
  OJs
};
