// darwin/shared/chunk-e97d1551.js — Claude Code 2.1.310（darwin）模块 chunk-qerwsd8p.js
class l {
  implementation = null;
  isC4EUpsellCommandEnabled() {
    return this.implementation === null ? false : this.implementation();
  }
  register(e) {
    this.implementation = e;
  }
}
var qDo = new l();
function xzs(e) {
  qDo.register(e.isC4EUpsellCommandEnabled);
}
export {
  qDo,
  xzs
};
