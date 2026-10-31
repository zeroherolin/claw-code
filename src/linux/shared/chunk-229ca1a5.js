// linux/shared/chunk-229ca1a5.js — Claude Code 2.1.310（linux）模块 chunk-97te5na4.js
import { L, U, ci, ru } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { ie } from "../fs/gitlab-runner-authentication-token.js";
class i {
  directories = [];
  announced = /* @__PURE__ */ new Set();
  get() {
    return this.directories;
  }
  publish(o) {
    let t = L([...o.additionalWorkingDirectories.values()].map((e) => e.path)).sort(), n = this.directories;
    if (n.length === t.length && n.every((e, s) => e === t[s])) return false;
    return this.directories = t, true;
  }
  noteAnnounced(o) {
    for (let t of o) this.announced.add(t);
  }
  everAnnounced() {
    return [...this.announced];
  }
  reset() {
    this.directories = [], this.announced.clear();
  }
}
var d = new W(() => new i());
function r() {
  return d.of(U().host);
}
function Ite() {
  let o = r(), t = ci(), n = ru();
  return o.noteAnnounced([...t === null ? [] : [t], ...n === null ? [] : [n], ...c(), ...o.get()]), o.get();
}
function nRs() {
  return r().everAnnounced();
}
function uBn(o) {
  return r().publish(o);
}
function c() {
  try {
    return [ie().cwd()];
  } catch {
    return [];
  }
}
export {
  Ite,
  nRs,
  uBn
};
