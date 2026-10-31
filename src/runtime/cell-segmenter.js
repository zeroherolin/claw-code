// claw-code 运行时：Bun.ant.CellSegmenter 的纯 JS 实现。
//
// 原版 Claude Code 运行在 Anthropic 内部定制的 Bun（@anthropic-ai/bun-internal）上，
// 终端渲染器把"一行带 ANSI 的文本 → 屏幕格子"这一步交给原生的 Bun.ant.CellSegmenter。
// 公开版 Bun 没有这个 API，这里按 JS 侧的调用约定重新实现（契约见 docs/runtime.md#cellsegmenter）。
//
// 契约（依据 src/terminal/ 中渲染器的调用方式）:
//   new CellSegmenter({ ambiguousIsNarrow, substitute: [[first,last],...], screen?: {...} })
//   .graphemes / .sgrKeys / .sgrCloseKeys / .uris   —— 只增不减的驻留表，index 0 为空项
//   .segment(text, cells, runs, reorder) -> count；数组不够大时返回 -(需要的格数)
//       cells[2i]   = graphemes 下标
//       cells[2i+1] = (run << 10) | (isTab ? 256 : 0) | width(0..255)
//       runs[2r]    = sgrKeys 下标（该 run 生效的 SGR 组合）
//       runs[2r+1]  = uris 下标（OSC 8 超链接，0 = 无）
//   .paint(screenCells, screenWidth, x, y, cells, count, order, charMap, words) -> damage
//   .setCell(screenCells, screenWidth, x, y, charIndex, word) -> damage
//       damage = x1 * 2^20 + x2 * 2^36 + 结束列（paint 的低 20 位为绘制后的光标列）

const ESC = 0x1b;
const CSI_8BIT = 0x9b;

// ---------- 字符宽度 ----------
const ZW_RE = /^[\p{Mn}\p{Me}\p{Cf}\u200b-\u200d\u2060\ufeff]$/u; // 组合符号、格式字符、零宽字符
const CONTROL_RE = /^[\u0000-\u001f\u007f-\u009f]$/;

function graphemeWidth(g, ambiguousIsNarrow) {
  if (g === "\t") return 0;
  const cp = g.codePointAt(0);
  if (cp < 0x20 || (cp >= 0x7f && cp < 0xa0)) return 0;
  if (cp < 0x7f && g.length === 1) return 1; // 键帽 emoji（1️⃣ = "1" + U+FE0F + U+20E3）以 ASCII 开头但占两格
  // 以 Bun 内置的 stringWidth 为准（与原生实现同源的 East Asian Width / emoji 表）
  const w = Bun.stringWidth(g, { ambiguousIsNarrow });
  return w > 255 ? 255 : w;
}

// ---------- SGR / OSC 8 解析 ----------
// 返回 {end, kind:"sgr", params:[...]} 或 {end, kind:"osc8", uri} 或 {end, kind:"other"} 或 null（不完整）
function parseEscape(s, i) {
  const c0 = s.charCodeAt(i);
  let j;
  if (c0 === CSI_8BIT) j = i + 1;
  else if (s.charCodeAt(i + 1) === 0x5b /* [ */) j = i + 2;
  else if (s.charCodeAt(i + 1) === 0x5d /* ] */) {
    // OSC ... (BEL | ESC \)
    let k = i + 2;
    while (k < s.length) {
      const c = s.charCodeAt(k);
      if (c === 0x07) { k += 1; break; }
      if (c === ESC && s.charCodeAt(k + 1) === 0x5c) { k += 2; break; }
      k++;
    }
    const body = s.slice(i + 2, k).replace(/(\x07|\x1b\\)$/, "");
    if (body.startsWith("8;")) {
      const semi = body.indexOf(";", 2);
      return { end: k, kind: "osc8", uri: semi === -1 ? "" : body.slice(semi + 1) };
    }
    return { end: k, kind: "other" };
  } else {
    // 其他两字节转义（ESC x）
    return { end: Math.min(i + 2, s.length), kind: "other" };
  }
  let k = j;
  while (k < s.length) {
    const c = s.charCodeAt(k);
    if (c >= 0x40 && c <= 0x7e) break;
    k++;
  }
  if (k >= s.length) return { end: s.length, kind: "other" };
  const final = s.charCodeAt(k);
  if (final !== 0x6d /* m */) return { end: k + 1, kind: "other" };
  const raw = s.slice(j, k);
  return { end: k + 1, kind: "sgr", params: raw === "" ? ["0"] : raw.split(";") };
}

// SGR 状态：按"类别"保存当前生效的开启序列（与渲染器 ansiCodes()/eR 正则约定一致：每项是一个完整的 \x1b[...m）
const CLOSE = {
  1: "22", 2: "22", 3: "23", 4: "24", 5: "25", 7: "27", 8: "28", 9: "29", 53: "55",
};
function sgrSlot(code) {
  const n = +code;
  if (n === 1) return "bold";
  if (n === 2) return "dim";
  if (n === 3) return "italic";
  if (n === 4) return "underline";
  if (n === 5) return "blink";
  if (n === 7) return "inverse";
  if (n === 8) return "hidden";
  if (n === 9) return "strike";
  if (n === 53) return "overline";
  if ((n >= 30 && n <= 37) || (n >= 90 && n <= 97) || n === 38) return "fg";
  if ((n >= 40 && n <= 47) || (n >= 100 && n <= 107) || n === 48) return "bg";
  return null;
}
const OFF = {
  0: ["*"], 22: ["bold", "dim"], 23: ["italic"], 24: ["underline"], 25: ["blink"], 27: ["inverse"],
  28: ["hidden"], 29: ["strike"], 39: ["fg"], 49: ["bg"], 55: ["overline"],
};

function applySgr(state, params) {
  for (let p = 0; p < params.length; p++) {
    const code = params[p] === "" ? "0" : params[p];
    const n = +code;
    if ((n === 38 || n === 48) && params[p + 1] === "5" && p + 2 < params.length) {
      put(state, n === 38 ? "fg" : "bg", { open: `\x1b[${n};5;${params[p + 2]}m`, close: n === 38 ? "\x1b[39m" : "\x1b[49m" });
      p += 2;
      continue;
    }
    if ((n === 38 || n === 48) && params[p + 1] === "2" && p + 4 < params.length) {
      put(state, n === 38 ? "fg" : "bg", { open: `\x1b[${n};2;${params[p + 2]};${params[p + 3]};${params[p + 4]}m`, close: n === 38 ? "\x1b[39m" : "\x1b[49m" });
      p += 4;
      continue;
    }
    if (OFF[n]) {
      if (OFF[n][0] === "*") state.clear();
      else for (const s of OFF[n]) state.delete(s);
      continue;
    }
    const slot = sgrSlot(code);
    if (!slot) continue;
    const close = slot === "fg" ? "\x1b[39m" : slot === "bg" ? "\x1b[49m" : `\x1b[${CLOSE[n]}m`;
    // bold/dim 重复设置不改变顺序（与渲染器 x() 一致），其余类别重设时移到末尾
    if ((slot === "bold" || slot === "dim") && state.has(slot)) continue;
    put(state, slot, { open: `\x1b[${n}m`, close });
  }
}

function put(state, slot, v) {
  state.delete(slot);
  state.set(slot, v);
}

// 与渲染器的 SGR 叠加规则一致：按设置先后排列（同类别重设时移到末尾）
function sgrKeyOf(state) {
  if (state.size === 0) return ["", ""];
  const opens = [], closes = [];
  for (const v of state.values()) opens.push(v.open), closes.push(v.close);
  return [opens.join("\0"), closes.join("\0")];
}

// ---------- 驻留表 ----------
function makeTable(first) {
  const list = [first];
  const map = new Map([[first, 0]]);
  return {
    list,
    intern(s) {
      let i = map.get(s);
      if (i === undefined) i = list.length, list.push(s), map.set(s, i);
      return i;
    },
  };
}

const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });

// ---------- 主体 ----------
export class CellSegmenter {
  #ambiguousIsNarrow;
  #substitute; // [[first,last],...]
  #replacement;
  #screen;
  #g;
  #sgr;
  #uri;

  constructor(options = {}) {
    if (!new.target) throw new TypeError("CellSegmenter constructor cannot be invoked without 'new'");
    this.#ambiguousIsNarrow = options.ambiguousIsNarrow !== false;
    const sub = options.substitute ?? [];
    if (!Array.isArray(sub)) throw new TypeError("options.substitute must be a list of [first, last] pairs");
    this.#substitute = sub.map((p) => {
      if (!Array.isArray(p) || p.length !== 2) throw new TypeError("options.substitute[] must be a [first, last] pair");
      return [p[0] | 0, p[1] | 0];
    });
    this.#replacement = options.replacement ?? "\ufffd";
    if (this.#replacement === "") throw new TypeError("CellSegmenter: options.replacement must not be empty");
    this.#screen = options.screen;
    this.#g = makeTable("");
    this.#sgr = makeTable("");
    this.#uri = makeTable("");
    this.graphemes = this.#g.list;
    this.sgrKeys = this.#sgr.list;
    this.sgrCloseKeys = [""]; // 与 sgrKeys 下标一一对应，由 segment() 填充
    this.uris = this.#uri.list;
  }

  #isSubstituted(cp) {
    for (const [a, b] of this.#substitute) if (cp >= a && cp <= b) return true;
    return false;
  }

  segment(text, cells, runs, reorder) {
    text = String(text ?? "");
    const out = []; // [graphemeIdx, word]
    const runList = []; // [sgrIdx, uriIdx]
    const state = new Map();
    let uri = 0;
    let curRun = -1;
    let curKey = null;
    const ensureRun = () => {
      const [open, close] = sgrKeyOf(state);
      const key = open + "\u0001" + uri;
      if (key !== curKey) {
        const si = this.#sgr.intern(open);
        this.sgrCloseKeys[si] = close; // 关闭序列与开启序列共用下标
        runList.push(si, uri);
        curRun = runList.length / 2 - 1;
        curKey = key;
      }
      return curRun;
    };
    let plain = "";
    const flush = () => {
      if (!plain) return;
      for (const { segment: g0 } of segmenter.segment(plain)) {
        let g = g0;
        const cp = g.codePointAt(0);
        if (this.#isSubstituted(cp)) g = this.#replacement;
        if (g === "\t") {
          const r = ensureRun();
          out.push(this.#g.intern(" "), (r << 10) | 256);
          continue;
        }
        if (g.length === 1 && CONTROL_RE.test(g)) continue;
        if (ZW_RE.test(g)) continue;
        const w = graphemeWidth(g, this.#ambiguousIsNarrow);
        if (w === 0) continue;
        const r = ensureRun();
        out.push(this.#g.intern(g), (r << 10) | w);
      }
      plain = "";
    };
    // 转义序列之间的普通文本整段交给字素切分
    for (let i = 0; i < text.length;) {
      const c = text.charCodeAt(i);
      if (c === ESC || c === CSI_8BIT) {
        flush();
        const e = parseEscape(text, i);
        if (e.kind === "sgr") applySgr(state, e.params);
        else if (e.kind === "osc8") uri = e.uri ? this.#uri.intern(e.uri) : 0;
        i = e.end;
        continue;
      }
      let j = i + 1;
      while (j < text.length && text.charCodeAt(j) !== ESC && text.charCodeAt(j) !== CSI_8BIT) j++;
      plain = text.slice(i, j);
      i = j;
    }
    flush();
    const count = out.length / 2;
    if (reorder) this.#reorderBidi(out, count);
    if (cells.length < out.length || runs.length < runList.length) return -Math.max(count, runList.length / 2, 1);
    for (let i = 0; i < out.length; i++) cells[i] = out[i];
    for (let i = 0; i < runList.length; i++) runs[i] = runList[i];
    return count;
  }

  // 简化的视觉重排：把连续的 RTL 字符序列反转（用于不做 bidi 的终端，如 Windows Terminal、VS Code）
  #reorderBidi(out, count) {
    const RTL = /[\u0590-\u08ff\ufb1d-\ufdff\ufe70-\ufeff]/u; // 希伯来文、阿拉伯文及其表现形式
    let i = 0;
    while (i < count) {
      if (!RTL.test(this.graphemes[out[2 * i]])) { i++; continue; }
      let j = i;
      while (j + 1 < count && (RTL.test(this.graphemes[out[2 * (j + 1)]]) || this.graphemes[out[2 * (j + 1)]] === " ")) j++;
      while (j > i && this.graphemes[out[2 * j]] === " ") j--;
      for (let a = i, b = j; a < b; a++, b--) {
        const ta = out[2 * a], wa = out[2 * a + 1];
        out[2 * a] = out[2 * b], out[2 * a + 1] = out[2 * b + 1];
        out[2 * b] = ta, out[2 * b + 1] = wa;
      }
      i = j + 1;
    }
  }

  // 写入屏幕：screenCells 为 Int32Array，每格两个字 [charIndex, word]
  // word = (styleId << 17) | (hyperlinkId << 2) | widthKind(0 窄 / 1 宽 / 2 宽字符尾随占位 / 3 行尾占位)
  paint(screenCells, screenWidth, x, y, cells, count, order, charMap, words) {
    const s = this.#screen;
    const tabWidth = s?.tabWidth ?? 8;
    const wide = s?.wide ?? 1, narrow = s?.narrow ?? 0, spacerTail = s?.spacerTail ?? 2;
    const spacerChar = s?.spacerCharIndex ?? 1;
    const row = y * screenWidth;
    let col = x;
    let x1 = Infinity, x2 = -Infinity;
    const put = (cx, ch, word) => {
      if (cx < 0 || cx >= screenWidth) return;
      const p = (row + cx) << 1;
      screenCells[p] = ch;
      screenCells[p + 1] = word;
      if (cx < x1) x1 = cx;
      if (cx + 1 > x2) x2 = cx + 1;
    };
    for (let k = 0; k < count; k++) {
      const i = order ? order[k] : k;
      const g = cells[2 * i], meta = cells[2 * i + 1];
      const run = meta >>> 10;
      const base = words[run] ?? 0;
      if (meta & 256) {
        const n = tabWidth - (col % tabWidth);
        for (let t = 0; t < n; t++) put(col + t, charMap[this.#g.intern(" ")] ?? 0, base | narrow);
        col += n;
        continue;
      }
      const w = meta & 255;
      const ch = charMap[g] ?? 0;
      if (w >= 2) {
        if (col + 1 >= screenWidth) {
          // 宽字符放不下：行尾放占位
          put(col, spacerChar, base | (s?.spacerHead ?? 3));
          col += 1;
          continue;
        }
        put(col, ch, base | wide);
        put(col + 1, spacerChar, base | spacerTail);
        col += 2;
      } else {
        put(col, ch, base | narrow);
        col += 1;
      }
    }
    if (x1 === Infinity) return col;
    return x1 * 1048576 + x2 * 68719476736 + col;
  }

  setCell(screenCells, screenWidth, x, y, charIndex, word) {
    const p = (y * screenWidth + x) << 1;
    screenCells[p] = charIndex;
    screenCells[p + 1] = word;
    return x * 1048576 + (x + 1) * 68719476736;
  }
}
