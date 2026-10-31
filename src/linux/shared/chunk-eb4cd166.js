// linux/shared/chunk-eb4cd166.js — Claude Code 2.1.310（linux）模块 chunk-jhgpf23v.js
class a {
  availability = () => false;
  register(i) {
    this.availability = i;
  }
  isAvailable() {
    return this.availability();
  }
}
var e = new a();
function dqs(i) {
  e.register(i);
}
function bze() {
  return e.isAvailable();
}
export {
  bze,
  dqs
};
