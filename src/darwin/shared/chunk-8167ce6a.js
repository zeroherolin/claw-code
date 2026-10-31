// darwin/shared/chunk-8167ce6a.js — Claude Code 2.1.310（darwin）模块 chunk-tv0be1h0.js
import { He } from "../fs/async-hooks.93b1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
class _Ie {
  #e = false;
  #t = He();
  get settled() {
    return this.#e;
  }
  settle() {
    if (this.#e) return;
    this.#e = true;
    try {
      this.#t.emit();
    } catch (e) {
      t(`CountedAsk: a listener threw while the request settled: ${String(e)}`, { level: "error" });
    }
    this.#t.clear();
  }
  settleWhen(e) {
    e.then(() => this.settle(), () => this.settle());
  }
  onSettle(e) {
    return this.#t.subscribe(e);
  }
}
class bdo {
  #e = /* @__PURE__ */ new Map();
  #t = 0;
  #i = He();
  subscribe = (e) => this.#i.subscribe(e);
  join(e) {
    if (e.settled || this.#e.has(e)) return;
    this.#e.set(e, e.onSettle(() => this.#s(e))), this.#i.emit();
  }
  positionLabel(e) {
    if (!this.#e.has(e)) return null;
    let i = this.#t + this.#e.size;
    return i < 2 ? null : `${this.#t + 1} of ${i}`;
  }
  #s(e) {
    let i = this.#e.get(e);
    if (i === void 0) return;
    i(), this.#e.delete(e), this.#t = this.#e.size === 0 ? 0 : this.#t + 1, this.#i.emit();
  }
}
export {
  _Ie,
  bdo
};
