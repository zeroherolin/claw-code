// linux/shared/tool-use.454d.js — Claude Code 2.1.310（linux）模块 chunk-wy5jyeb8.js
import { mmt } from "../core/conversation-engine.js";
function Foo(s, r = []) {
  let t = s.message.content;
  if (!Array.isArray(t)) return "";
  let o = mmt();
  if (o.size === 0) return "";
  return t.flatMap((e) => {
    if (e.type !== "tool_use") return [];
    if (!o.has(e.name)) return r.filter((n) => n.replCallId === e.id).map((n) => n.text);
    let i = e.input?.text;
    return typeof i === "string" ? [i] : [];
  }).filter(Boolean).join(`
`);
}
var p = 8;
class Uoo {
  #t = [];
  note(s, r) {
    let t = r.text;
    if (typeof t !== "string" || !t) return;
    if (this.#t.push({ replCallId: s, text: t }), this.#t.length > p) this.#t.shift();
  }
  take() {
    return this.#t.splice(0);
  }
  clear() {
    this.#t.length = 0;
  }
}
export {
  Foo,
  Uoo
};
