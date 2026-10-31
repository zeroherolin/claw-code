// darwin/vendor/parse5/annotation-xml.35fd.js — Claude Code 2.1.310（darwin）模块 chunk-h45ryzw5.js
import { QR, nDt } from "./unexpected-character-in-attribute-name.js";
var W = 4096, F = 2e5, w = 5e7, G = 2e5, j = 64, H = /* @__PURE__ */ new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]), RAr = /* @__PURE__ */ new Map([["script", QR.SCRIPT_DATA], ["style", QR.RAWTEXT], ["xmp", QR.RAWTEXT], ["iframe", QR.RAWTEXT], ["noembed", QR.RAWTEXT], ["noframes", QR.RAWTEXT], ["noscript", QR.RAWTEXT], ["title", QR.RCDATA], ["textarea", QR.RCDATA], ["plaintext", QR.PLAINTEXT]]), q = /* @__PURE__ */ new Set(["foreignobject", "desc", "title"]), K = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext"]), V = /* @__PURE__ */ new Set(["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "svg", "math", "foreignobject", "desc", "title", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]), P = /* @__PURE__ */ new Set(["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "keygen", "li", "link", "listing", "main", "marquee", "menu", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "search", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp", "foreignobject", "desc", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]), U = /* @__PURE__ */ new Set(["b", "big", "blockquote", "body", "br", "center", "code", "dd", "div", "dl", "dt", "em", "embed", "font", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "i", "img", "li", "listing", "menu", "meta", "nobr", "ol", "p", "pre", "ruby", "s", "small", "span", "strong", "strike", "sub", "sup", "table", "tt", "u", "ul", "var"]), B = /* @__PURE__ */ new Set(["a", "b", "big", "code", "em", "font", "i", "nobr", "s", "small", "strike", "strong", "tt", "u"]), Y = 1024, Z = /* @__PURE__ */ new Map([["li", /* @__PURE__ */ new Set(["ul", "ol"])], ["p", /* @__PURE__ */ new Set(["button"])]]), J = /* @__PURE__ */ new Set(["body", "html"]), Q = /* @__PURE__ */ new Set(["caption", "col", "colgroup", "frame", "frameset", "head", "tbody", "td", "tfoot", "th", "thead", "tr", "title"]);
function uEo(s) {
  return ee(s, { depth: W, totalOpens: F }).exceeded;
}
function pEo(s, a) {
  let t = 0, u = false, c = new M(s, a, (T) => {
    if (t += T, t > w) return u = true, c.pause(), false;
    return true;
  });
  return { tokenizer: c, overBudget: () => u };
}
function ee(s, a) {
  let t = [], u = [], c = [], T = [], r = [], p = 0, x = 0, R = 0, C = 0, b = 0, _ = 0, h = 0, I = /* @__PURE__ */ new Set(), O = 0, g = 0, y = 0, D = 0, A = false, v = /* @__PURE__ */ new Map(), k = false;
  function l() {
    k = true, N.pause();
  }
  let S = () => {
  };
  function X() {
    while (t.length > 0 && r.at(-1) === "f") {
      let o = t.pop();
      if (c.pop(), u.pop() === true && _ > 0) {
        if (_--, r.at(-1) === "i") r.pop();
      }
      if (o === "svg" || o === "math") {
        if (b--, T.pop(), r.at(-1) === "f") r.pop();
      } else if (o === "select" && p > 0) p--;
      else if (o === "frameset" && x > 0) x--;
    }
  }
  function L(o) {
    if (o === void 0) return false;
    return o.some((e) => {
      let i = e !== null && typeof e === "object" ? e.name : void 0;
      if (typeof i !== "string") return false;
      let m = i.toLowerCase();
      return m === "color" || m === "face" || m === "size";
    });
  }
  let N = new M({}, { onStartTag(o) {
    if (k) return;
    if (h += t.length + 1 + g, O++, a !== null && (h > w || O > G)) {
      l();
      return;
    }
    let e = o.tagName;
    if (r.at(-1) === "f" && U.has(e) && (e !== "font" || L(o.attrs))) X();
    let i = r.length === 0 || r.at(-1) === "i";
    if (i && (e === "html" || e === "body")) {
      let n = !(t.length <= 2 && t.every((f) => f === "html" || f === "head"));
      for (let f of o.attrs ?? []) I.add((e === "html" ? "h:" : "b:") + f.name);
      if (n) {
        if (h += 8 * I.size, a !== null && h > w) l();
        return;
      }
    }
    if (b > 0 && (e === "mglyph" || e === "malignmark") || !i && p > 0 && (e === "script" || e === "textarea") || r.at(-1) === "f" && (e === "svg" || e === "math") && T.at(-1) !== e) {
      A = true, l();
      return;
    }
    let m = i ? RAr.get(e) : void 0;
    if (m !== void 0 && (x > 0 || p > 0 && e !== "script")) {
      A = true, l();
      return;
    }
    if (m !== void 0) N.state = m, N.lastStartTagName = e;
    if (H.has(e) && i) return;
    if (C++, (e === "svg" || e === "math") && o.selfClosing) return;
    if (!(o.selfClosing && !i)) {
      if (B.has(e)) {
        if (v.set(e, (v.get(e) ?? 0) + 1), g++, g > y) y = g;
        if (a !== null && g > Y) {
          l();
          return;
        }
      }
      if (t.push(e), t.length > R) R = t.length;
      let n = false, f = r.at(-1) === "f";
      if (e === "svg" || e === "math") b++, T.push(e), r.push("f");
      else if (e === "select") p++;
      else if (e === "frameset") x++;
      else if (f) {
        let d = T.at(-1);
        if (d === "svg") n = q.has(e);
        else if (d === "math") n = K.has(e) || e === "annotation-xml" && o.attrs?.some((E) => E.name.toLowerCase() === "encoding" && ["text/html", "application/xhtml+xml"].includes(E.value.toLowerCase())) === true;
        if (n) _++, r.push("i");
      }
      u.push(n), c.push(e === "svg" || e === "math" || f && !n);
    }
    if (a !== null && (t.length > a.depth || C > a.totalOpens)) l();
  }, onEndTag(o) {
    if (k) return;
    if (h += t.length + 1 + g, O++, a !== null && (h > w || O > G)) {
      l();
      return;
    }
    let e = o.tagName;
    if (r.at(-1) === "i" && e !== "p" && e !== "br" && !(t.at(-1) === e && u.at(-1) === true)) {
      for (let n = t.length - 1; n >= 0; n--) if ((c[n] || u[n] === true) && t[n] === e) {
        A = true, l();
        return;
      }
    }
    if (J.has(e)) {
      if (e === "html" && b > 0) {
        for (let n = t.length - 1; n >= 0; n--) if (c[n] && t[n] === "html") {
          A = true, l();
          return;
        }
      }
      return;
    }
    if (p > 0 && r.at(-1) === "f" && (e === "p" || e === "br")) {
      A = true, l();
      return;
    }
    if (p > 0 && !(t.at(-1) === e && (c.at(-1) === true || u.at(-1) === true)) && e !== "select" && e !== "option" && e !== "optgroup" && e !== "template" && e !== "script") return;
    if (r.at(-1) === "f" && (e === "p" || e === "br")) X();
    let i = P.has(e), m = Z.get(e), z = Q.has(e) ? Math.max(0, t.length - 1) : Math.max(0, t.length - j);
    for (let n = t.length - 1; n >= z; n--) {
      let f = t[n];
      if (f === e) {
        if (B.has(e)) {
          let d = v.get(e) ?? 0;
          if (d > 0) {
            if (v.set(e, d - 1), g > 0) g--;
          }
        }
        if (e === "form") {
          t.splice(n, 1), u.splice(n, 1), c.splice(n, 1), D++;
          return;
        }
        for (let d = t.length - 1; d >= n; d--) {
          let E = t[d];
          if (u[d] === true && _ > 0) {
            if (_--, r.at(-1) === "i") r.pop();
          }
          if (E === "svg" || E === "math") {
            if (b > 0) b--;
            if (T.pop(), r.at(-1) === "f") r.pop();
          } else if (E === "select" && p > 0) p--;
          else if (E === "frameset" && x > 0) x--;
        }
        t.length = n, u.length = n, c.length = n;
        return;
      }
      if (V.has(f) || m?.has(f) === true) return;
      if (!i && P.has(f)) return;
    }
  }, onComment(o) {
    if (k || b === 0 || !o.data.startsWith("[CDATA[") || o.data.endsWith("]]")) return;
    let e = N.preprocessor.offset + 1, i = s.indexOf("]]>", e), m = i === -1 ? s.slice(e) : s.slice(e, i);
    if (/<[a-zA-Z!/?]/.test(m)) A = true, l();
  }, onDoctype: S, onCharacter: S, onNullCharacter: S, onWhitespaceCharacter: S, onEof: S, onParseError: S }, (o) => {
    if (h += o, a !== null && h > w) return l(), false;
    return true;
  });
  return N.write(s, true), { exceeded: k, maxDepth: R, totalOpens: C, maxFmtEstimate: y, formSplices: D, failClosed: A };
}
class M extends nDt {
  #e;
  constructor(s, a, t) {
    super(s, a);
    this.#e = t;
  }
  _leaveAttrName() {
    let s = this.currentToken, a = s !== null && "attrs" in s ? s.attrs.length * (1 + (this.currentAttr.name.length >> 6)) : 0;
    if (this.#e(a)) super._leaveAttrName();
  }
}
export {
  RAr,
  pEo,
  uEo
};
