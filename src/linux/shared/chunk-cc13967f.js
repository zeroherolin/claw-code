// linux/shared/chunk-cc13967f.js — Claude Code 2.1.310（linux）模块 chunk-v0wrmzez.js
import { De } from "../fs/async-hooks.93b1.js";
import { nt } from "../context/not-admin-owned.js";
class e {
  #e = { credentialsPersisted: 0, loginCompleted: 0 };
  #t = De();
  subscribe = (t) => this.#t.subscribe(t);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    this.#e = { ...this.#e, credentialsPersisted: this.#e.credentialsPersisted + 1 }, this.#t.emit();
  }
  loginCompleted() {
    this.#e = { ...this.#e, loginCompleted: this.#e.loginCompleted + 1 }, this.#t.emit();
  }
}
var qX = new nt(() => new e());
export {
  qX
};
