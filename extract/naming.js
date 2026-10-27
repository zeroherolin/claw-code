// 自动命名：为模块生成可读的文件名主体。原版标识符经过混淆，无法恢复真实文件名，
// 按以下优先级取最能说明用途的名字（人工命名 layout/<版本>.json 的 modules 优先于这里）:
//   1. 唯一对应的工具 / 斜杠命令 / skill
//   2. 有意义的导出名（camelCase 函数名或 UPPER_CASE 常量）
//   3. 有意义的声明名（class / function，长度 ≥ 8 且非混淆形式）
//   4. 最常见的语义化遥测事件名 tengu_xxx（去掉前缀）
//   5. 最具代表性的特征字符串（snake_case / kebab-case）
// 调用方在名字后附加 chunk id 前 4 位，保证唯一且可回溯。

const kebab = (s) =>
  s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/[^A-Za-z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase();

// 混淆名特征：短、或者大小写随机混排（如 Gwe、OPt、SYt、kbr、$2e）
const isMangled = (n) => n.length < 6 || /^[\w$]{1,5}$/.test(n) || /\$/.test(n) || /^[a-z]{1,3}[A-Z][a-z]?$/.test(n);
export const isGoodName = (n) =>
  !isMangled(n) && !/^_/.test(n) && !/ForTesting$/.test(n) &&
  (/^[a-z]+[A-Z][a-zA-Z0-9]+$/.test(n) || /^[A-Z][A-Z0-9]*(_[A-Z0-9]+)+$/.test(n) || /^[A-Z][a-z]+[A-Z][A-Za-z]+$/.test(n) || /^[a-z]{8,}$/.test(n));

const GENERIC = new Set([
  "default", "register", "registerHooks", "description", "constructor", "undefined", "function", "toString",
  "available", "unavailable", "requires_action", "local-jsx", "task-notification", "abortController",
  "child_process", "fs/promises", "application/json", "content-type", "content-length", "localSettings",
  "policySettings", "projectSettings", "userSettings", "flagSettings",
]);

export function exportNames(src) {
  const out = [];
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) for (const p of m[1].split(",")) {
    const n = p.trim().split(/\s+as\s+/).pop();
    if (n) out.push(n);
  }
  return out;
}

function declaredNames(src) {
  const out = new Map();
  for (const m of src.matchAll(/^(?:export\s+)?(?:async\s+)?(?:function\*?|class)\s+([A-Za-z_$][\w$]*)/gm)) {
    const n = m[1];
    if (isGoodName(n) && n.length >= 8) out.set(n, (out.get(n) || 0) + 1);
  }
  return [...out.keys()];
}

function topTelemetry(src) {
  const c = new Map();
  for (const m of src.matchAll(/"tengu_([a-z][a-z0-9_]{3,})"/g)) c.set(m[1], (c.get(m[1]) || 0) + 1);
  // 偏好"语义化"的事件名（含至少两个单词、不是代号式的 adjective_noun 组合）
  const ranked = [...c.entries()].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length);
  return ranked.map(([k]) => k).filter((k) => k.split("_").length >= 3)[0] ?? null;
}

function topSignal(src) {
  const c = new Map();
  for (const m of src.matchAll(/"([a-z][a-z0-9]+(?:[_-][a-z0-9]+){1,4})"/g)) {
    const s = m[1];
    if (GENERIC.has(s) || s.startsWith("tengu_") || s.length > 40) continue;
    c.set(s, (c.get(s) || 0) + 1);
  }
  const ranked = [...c.entries()].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length);
  return ranked[0]?.[0] ?? null;
}

/**
 * @param {string} src 原版模块源码（未格式化）
 * @param {{tool?:string, command?:string, skill?:string}} hint 唯一对应的工具 / 命令 / skill 名
 * @returns {string|null} kebab-case 名字；找不到可靠名字时为 null
 */
export function semanticName(src, hint = {}) {
  if (hint.tool) return kebab(hint.tool) + "-tool";
  if (hint.command) return "command-" + kebab(hint.command);
  if (hint.skill) return "skill-" + kebab(hint.skill);
  const exps = exportNames(src).filter(isGoodName);
  const camel = exps.filter((n) => /^[a-z]/.test(n));
  if (camel[0]) return kebab(camel[0]);
  if (exps[0]) return kebab(exps[0]);
  const decl = declaredNames(src);
  if (decl[0]) return kebab(decl[0]);
  const tg = topTelemetry(src);
  if (tg) return kebab(tg);
  const sig = topSignal(src);
  if (sig) return kebab(sig);
  return null;
}
