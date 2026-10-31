// linux/shared/runtime-block-insertion-index.js — Claude Code 2.1.310（linux）模块 chunk-h45q9ewb.js
import "../vendor/parse5/unexpected-character-in-attribute-name.js";
import { lCr, Lwo } from "../vendor/parse5/annotation-xml.35fd.js";
var d = /<\/(?:body|html)[\t\n\f\r />]/i;
function m(n) {
  if (!d.test(n)) return n.length;
  let e = -1, o = () => {
    e = -1;
  }, r = () => {
  }, { tokenizer: a, overBudget: c } = Lwo({ sourceCodeLocationInfo: true }, { onStartTag(t) {
    let i = lCr.get(t.tagName);
    if (i !== void 0) a.state = i, a.lastStartTagName = t.tagName;
    if (t.tagName !== "html") o();
  }, onEndTag(t) {
    if (t.tagName !== "body" && t.tagName !== "html") o();
    else if (e < 0 && t.location) e = t.location.startOffset;
  }, onComment: r, onDoctype: r, onCharacter: o, onNullCharacter: o, onWhitespaceCharacter: r, onEof: r });
  if (a.write(n, true), c()) return;
  return e >= 0 ? e : n.length;
}
export {
  m as runtimeBlockInsertionIndex
};
