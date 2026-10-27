// telemetry/chunk-w9t64bcr.js — Claude Code 2.1.310 模块 chunk-w9t64bcr.js
class t {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var o = new t();
function Bii(e) {
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
function Nor(e) {
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
function jii(e) {
  return n.register(e);
}
function Wii() {
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
  Bii,
  Nor,
  Wii,
  jii
};
