// linux/shared/chunk-de23d3ee.js — Claude Code 2.1.310（linux）模块 chunk-ba8g9hsn.js
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
function VAs(i) {
  a.register(i);
}
function pw() {
  return a.isAvailable();
}
export {
  VAs,
  pw
};
