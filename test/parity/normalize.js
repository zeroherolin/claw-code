// 与官方二进制的对比规则：哪些差异属于运行环境（路径、端口、时间、随机 id、动画相位），比较前先归一化。
// 归一化之外的任何差异都视为行为不一致。

const UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g;

/** 同一个 HOME 在输出中的几种写法：原样、去掉 /private 前缀、项目目录名（非字母数字换成 "-"） */
function homeForms(home) {
  const forms = [home, home.replace(/^\/private\//, "/")];
  return [...forms.map((h) => [h.replace(/[^A-Za-z0-9]/g, "-"), "<HP>"]), ...forms.map((h) => [h, "<HOME>"])];
}

/** 文本输出：HOME 路径、UUID、耗时与花费、时间戳、socket 路径、端口 */
export function normalizeText(s, home) {
  for (const [from, to] of homeForms(home)) s = s.split(from).join(to);
  return s
    .replace(UUID, "<UUID>")
    .replace(/"(duration_ms|duration_api_ms|total_cost_usd|ttft_ms|ttft_stream_ms|time_to_request_ms|first_content_frame_ms)":[0-9.e-]+/g, '"$1":0')
    .replace(/"timestamp":"[^"]*"/g, '"timestamp":"<TS>"')
    .replace(/\/tmp\/cc-socks\/\d+\.sock/g, "<SOCK>")
    .replace(/127\.0\.0\.1:\d+/g, "127.0.0.1:<PORT>");
}

/** API 请求：在文本归一化的基础上，再忽略计费哈希、shell 快照文件名、ISO 时间与 metadata.user_id */
export function normalizeRequest(req, home) {
  const s = normalizeText(JSON.stringify(req), home)
    .replace(/\d{4}-\d{2}-\d{2}T[\d:.]+Z?/g, "<TS>")
    .replace(/cch=[0-9a-f]+/g, "cch=<H>")
    .replace(/snapshot-\w+-\d+-\w+\.sh/g, "snapshot.sh");
  const d = JSON.parse(s);
  if (d.body?.metadata?.user_id) d.body.metadata.user_id = "<U>";
  return d;
}

/** 两个 JSON 值的差异路径（最多 limit 条），便于定位 */
export function jsonDiff(a, b, limit = 10, p = "", out = []) {
  if (out.length >= limit) return out;
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b) || (a === null) !== (b === null)) out.push(`${p}: 类型不同`);
  else if (a && typeof a === "object") {
    if (Array.isArray(a) && a.length !== b.length) out.push(`${p}: 长度 ${a.length} ≠ ${b.length}`);
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(k in a) || !(k in b)) out.push(`${p}.${k}: 只在${k in a ? "原版" : "本项目"}中出现`);
      else jsonDiff(a[k], b[k], limit, `${p}.${k}`, out);
    }
  } else if (a !== b) {
    const [x, y] = [String(a), String(b)];
    let i = 0;
    while (i < x.length && x[i] === y[i]) i++;
    out.push(`${p} @${i}: ${JSON.stringify(x.slice(Math.max(0, i - 40), i + 60))} ≠ ${JSON.stringify(y.slice(Math.max(0, i - 40), i + 60))}`);
  }
  return out;
}

// ---------- 屏幕 ----------

// 完成提示中的动词按消息 UUID 哈希选取，时钟时间随运行时刻变化
const VERB_LINE = /\b(Baked|Brewed|Churned|Cogitated|Cooked|Crunched|Sautéed|Worked) for \d+s/;
const CLOCK = /done \d{1,2}:\d{2} [AP]M/;
// 工具执行中，行首的 "⏺" 以闪烁动画显示，截屏时刻可能处于亮或灭的相位
const BLINK = "⏺";
const IN_PROGRESS = /^\s*(Reading|Running|Searching|Fetching|Writing|Editing)/;
const DEFAULT_ATTR = "0.-1/0.-1";

/** 归一化一行：去掉随机文本；返回 { text } 或可逐格比较的 { cells: Map<列, "字符|属性"> } */
function normalizeRow({ text, cells }, home) {
  let t = text;
  for (const [from, to] of homeForms(home)) t = t.split(from).join(to);
  t = t.replace(/127\.0\.0\.1:\d+/g, "127.0.0.1:<PORT>");
  const randomized = t.replace(VERB_LINE, "<VERB> for <N>s").replace(CLOCK, "done <TIME>");
  if (randomized !== t) return { text: randomized.trimEnd() }; // 文本被替换后，属性无法逐格对应，只比文本
  const chars = [...t], out = new Map();
  const width = Math.max(chars.length, ...Object.keys(cells).map((k) => +k + 1));
  for (let x = 0; x < width; x++) {
    let ch = chars[x] ?? " ", a = cells[x];
    if (x <= 1 && (ch === BLINK || (x === 0 && ch === " " && a && a !== DEFAULT_ATTR && IN_PROGRESS.test(t)))) ch = " ", a = undefined;
    if (ch === " " && (!a || a === DEFAULT_ATTR)) continue; // 未写入的格子与默认属性的空格不可区分
    out.set(x, `${ch}|${a}`);
  }
  return { cells: out };
}

/** 比较两份屏幕（renderScreen 的输出），返回差异描述（空数组表示一致） */
export function screenDiff(a, b, homeA, homeB, limit = 8) {
  const diffs = [];
  for (let y = 0; y < Math.max(a.length, b.length) && diffs.length < limit; y++) {
    const ra = normalizeRow(a[y] ?? { text: "", cells: {} }, homeA);
    const rb = normalizeRow(b[y] ?? { text: "", cells: {} }, homeB);
    if (ra.text !== undefined || rb.text !== undefined) {
      if (ra.text !== rb.text) diffs.push(`第 ${y} 行文本: ${JSON.stringify(ra.text ?? "")} ≠ ${JSON.stringify(rb.text ?? "")}`);
      continue;
    }
    const cols = [...new Set([...ra.cells.keys(), ...rb.cells.keys()])].sort((p, q) => p - q).filter((x) => ra.cells.get(x) !== rb.cells.get(x));
    if (cols.length) diffs.push(`第 ${y} 行 ${JSON.stringify((a[y]?.text ?? "").trimEnd().slice(0, 60))}: ` + cols.slice(0, 4).map((x) => `列 ${x} ${ra.cells.get(x) ?? "空"} ≠ ${rb.cells.get(x) ?? "空"}`).join("；"));
  }
  return diffs;
}
