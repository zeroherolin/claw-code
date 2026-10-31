// linux/shared/chunk-5f244a2f.js — Claude Code 2.1.310（linux）模块 chunk-hetc6t05.js
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
function VJs(e) {
  r.register(e);
}
function qJs() {
  return r.isOpen();
}
export {
  VJs,
  qJs
};
