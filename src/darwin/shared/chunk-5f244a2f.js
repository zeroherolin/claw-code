// darwin/shared/chunk-5f244a2f.js — Claude Code 2.1.310（darwin）模块 chunk-kr6r0g0n.js
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
