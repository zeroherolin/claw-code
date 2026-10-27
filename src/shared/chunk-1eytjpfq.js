// shared/chunk-1eytjpfq.js — Claude Code 2.1.310 模块 chunk-1eytjpfq.js
class e {
  availability = () => false;
  register(i) {
    this.availability = i;
  }
  isAvailable() {
    return this.availability();
  }
}
var a = new e();
function PAs(i) {
  a.register(i);
}
function mw() {
  return a.isAvailable();
}
export {
  PAs,
  mw
};
