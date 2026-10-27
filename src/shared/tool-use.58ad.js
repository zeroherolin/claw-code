// shared/tool-use.58ad.js — Claude Code 2.1.310 模块 chunk-58ad8p5d.js
import { wmt } from "../core/conversation-engine.31gx.js";
function Pso(s, r = []) {
  let t = s.message.content;
  if (!Array.isArray(t)) return "";
  let o = wmt();
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
class Iso {
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
  Iso,
  Pso
};
