// shared/chunk-msm71d2b.js — Claude Code 2.1.310 模块 chunk-msm71d2b.js
import { He } from "../fs/async-hooks.9s1z.js";
import { nt } from "../context/not-admin-owned.ersa.js";
class e {
  #e = { credentialsPersisted: 0, loginCompleted: 0 };
  #t = He();
  subscribe = (t) => this.#t.subscribe(t);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    this.#e = { ...this.#e, credentialsPersisted: this.#e.credentialsPersisted + 1 }, this.#t.emit();
  }
  loginCompleted() {
    this.#e = { ...this.#e, loginCompleted: this.#e.loginCompleted + 1 }, this.#t.emit();
  }
}
var n7 = new nt(() => new e());
export {
  n7
};
