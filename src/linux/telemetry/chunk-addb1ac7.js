// linux/telemetry/chunk-addb1ac7.js — Claude Code 2.1.310（linux）模块 chunk-6dsz7zr0.js
class t {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var o = new t();
function rii(e) {
  return o.register(e);
}
function l() {
  let e = o.reader;
  if (!e) return true;
  try {
    let { value: r, source: a, defaultHost: u } = e("tengu_warm_sunrise", true);
    return r !== false || a !== "payload" || !u;
  } catch {
    return true;
  }
}
function bor(e) {
  return e !== "-rm" || l();
}
class d {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var n = new d();
function oii(e) {
  return n.register(e);
}
function sii() {
  let e = n.reader;
  if (!e) return true;
  try {
    let { value: r, source: a, defaultHost: u } = e("tengu_vast_puddle", true);
    return r !== false || a !== "payload" || !u;
  } catch {
    return true;
  }
}
export {
  bor,
  oii,
  rii,
  sii
};
