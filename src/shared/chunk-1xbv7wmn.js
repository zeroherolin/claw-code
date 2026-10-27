// shared/chunk-1xbv7wmn.js — Claude Code 2.1.310 模块 chunk-1xbv7wmn.js
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
function XKs(i) {
  e.register(i);
}
function IGe() {
  return e.isAvailable();
}
export {
  IGe,
  XKs
};
