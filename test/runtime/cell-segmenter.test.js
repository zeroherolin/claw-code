// Bun.ant.CellSegmenter 的 JS 实现：契约见 src/runtime/cell-segmenter.js 文件头与 docs/runtime.md。
import { describe, expect, test } from "bun:test";
import { CellSegmenter } from "../../src/runtime/cell-segmenter.js";

// 把 segment() 的打包结果展开成便于断言的结构
function segment(seg, text) {
  const cells = new Int32Array(512);
  const runs = new Int32Array(128);
  const n = seg.segment(text, cells, runs, false);
  const out = [];
  for (let i = 0; i < n; i++) {
    const meta = cells[2 * i + 1];
    out.push({ g: seg.graphemes[cells[2 * i]], run: meta >>> 10, tab: (meta & 256) !== 0, width: meta & 255 });
  }
  const runCount = out.length ? Math.max(...out.map((c) => c.run)) + 1 : 0;
  const runInfo = [];
  for (let r = 0; r < runCount; r++) {
    runInfo.push({ open: seg.sgrKeys[runs[2 * r]], close: seg.sgrCloseKeys[runs[2 * r]], uri: seg.uris[runs[2 * r + 1]] });
  }
  return { n, cells: out, runs: runInfo };
}

describe("CellSegmenter.segment", () => {
  const seg = new CellSegmenter({ ambiguousIsNarrow: true, substitute: [[0xe000, 0xf8ff]] });

  test("驻留表下标 0 为空串", () => {
    const s = new CellSegmenter();
    expect(s.graphemes[0]).toBe("");
    expect(s.sgrKeys[0]).toBe("");
    expect(s.sgrCloseKeys[0]).toBe("");
    expect(s.uris[0]).toBe("");
  });

  test("ASCII 与 CJK 宽度", () => {
    const r = segment(seg, "a你");
    expect(r.cells.map((c) => [c.g, c.width])).toEqual([["a", 1], ["你", 2]]);
  });

  test("字素簇：组合字符与 emoji 修饰符各占一格", () => {
    const r = segment(seg, "é👍🏽");
    expect(r.cells.map((c) => [c.g, c.width])).toEqual([["é", 1], ["👍🏽", 2]]);
  });

  test("tab 标记为 tab 格，宽度 0（由 paint 展开到制表位）", () => {
    const r = segment(seg, "a\tb");
    expect(r.cells[1]).toEqual({ g: " ", run: 0, tab: true, width: 0 });
  });

  test("控制字符不占格", () => {
    expect(segment(seg, "a\u0007b\u0000").cells.map((c) => c.g)).toEqual(["a", "b"]);
  });

  test("substitute 区间内的码点替换为 U+FFFD", () => {
    expect(segment(seg, "").cells[0].g).toBe("�");
  });

  test("SGR：开启/关闭序列成对，按设置顺序排列", () => {
    const r = segment(seg, "\x1b[31;1mX\x1b[0mY");
    expect(r.cells.map((c) => c.run)).toEqual([0, 1]);
    expect(r.runs[0].open).toBe("\x1b[31m\0\x1b[1m");
    expect(r.runs[0].close).toBe("\x1b[39m\0\x1b[22m");
    expect(r.runs[1].open).toBe("");
  });

  test("SGR：22 同时关闭 bold 与 dim；重复设置 bold 不改变顺序", () => {
    expect(segment(seg, "\x1b[1m\x1b[2mA\x1b[22mB").runs.map((r) => r.open)).toEqual(["\x1b[1m\0\x1b[2m", ""]);
    expect(segment(seg, "\x1b[1m\x1b[4m\x1b[1mA").runs[0].open).toBe("\x1b[1m\0\x1b[4m");
  });

  test("SGR：同类颜色重设时替换并移到末尾", () => {
    const r = segment(seg, "\x1b[31m\x1b[1m\x1b[38;5;200mA");
    expect(r.runs[0].open).toBe("\x1b[1m\0\x1b[38;5;200m");
  });

  test("SGR：24 位真彩色", () => {
    expect(segment(seg, "\x1b[38;2;1;2;3mA").runs[0].open).toBe("\x1b[38;2;1;2;3m");
  });

  test("OSC 8 超链接写入 uris，结束后回到 0", () => {
    const r = segment(seg, "\x1b]8;;https://example.com\x07L\x1b]8;;\x07M");
    expect(r.runs.map((x) => x.uri)).toEqual(["https://example.com", ""]);
  });

  test("相同样式复用同一 run", () => {
    expect(segment(seg, "\x1b[1mA\x1b[1mB").cells.map((c) => c.run)).toEqual([0, 0]);
  });

  test("数组不够大时返回负的所需格数，且不写入", () => {
    const cells = new Int32Array(2).fill(-7);
    expect(seg.segment("abc", cells, new Int32Array(8), false)).toBe(-3);
    expect(Array.from(cells)).toEqual([-7, -7]);
  });

  test("reorder：连续 RTL 字符按视觉顺序反转", () => {
    const cells = new Int32Array(64);
    const n = seg.segment("aשלוםb", cells, new Int32Array(8), true);
    const gs = [];
    for (let i = 0; i < n; i++) gs.push(seg.graphemes[cells[2 * i]]);
    expect(gs.join("")).toBe("aםולשb");
  });

  test("构造参数校验", () => {
    expect(() => CellSegmenter()).toThrow(TypeError);
    expect(() => new CellSegmenter({ substitute: [[1]] })).toThrow(TypeError);
    expect(() => new CellSegmenter({ replacement: "" })).toThrow(TypeError);
  });
});

describe("CellSegmenter.paint / setCell", () => {
  const SCREEN = { wide: 1, narrow: 0, spacerTail: 2, spacerHead: 3, spacerCharIndex: 1, tabWidth: 8 };
  const decode = (d) => ({ x1: Math.floor((d % 68719476736) / 1048576), x2: Math.floor(d / 68719476736), col: d % 1048576 });

  function paint(text, width, x = 0) {
    const seg = new CellSegmenter({ screen: SCREEN });
    const cells = new Int32Array(256);
    const n = seg.segment(text, cells, new Int32Array(32), false);
    const screen = new Int32Array(width * 2);
    const charMap = seg.graphemes.map((_, i) => 100 + i); // 字素下标 → 屏幕字符表下标
    const damage = seg.paint(screen, width, x, 0, cells, n, null, charMap, [0]);
    const row = [];
    for (let i = 0; i < width; i++) row.push([screen[2 * i], screen[2 * i + 1]]);
    return { seg, row, damage: decode(damage) };
  }

  test("宽字符占两格：本体 + 尾随占位", () => {
    const { row, damage } = paint("a你", 6);
    expect(row.slice(0, 3)).toEqual([[101, 0], [102, 1], [1, 2]]);
    expect(damage).toEqual({ x1: 0, x2: 3, col: 3 });
  });

  test("行尾放不下的宽字符写入行首占位", () => {
    const { row, damage } = paint("abc你", 4);
    expect(row[3]).toEqual([1, 3]);
    expect(damage.col).toBe(4);
  });

  test("tab 展开到下一个制表位", () => {
    const { damage } = paint("ab\tc", 20);
    expect(damage.col).toBe(9);
  });

  test("setCell 写入单格并返回该格的 damage", () => {
    const seg = new CellSegmenter({ screen: SCREEN });
    const screen = new Int32Array(10 * 2 * 2);
    const d = seg.setCell(screen, 10, 3, 1, 42, 7);
    expect([screen[26], screen[27]]).toEqual([42, 7]);
    expect(decode(d)).toEqual({ x1: 3, x2: 4, col: 0 });
  });
});
