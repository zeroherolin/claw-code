// 分析阶段：用 AST 从原版模块中静态抽取运行逻辑要素，供命名与参考文档使用。
//
//   analyzeStrings  环境变量、遥测事件、斜杠命令、内置 skill、长文本（提示词）
//   analyzeTools    工具定义（工厂调用或对象字面量）
//   analyzeGates    GrowthBook 特性开关及默认值
//   analyzeCli      commander 子命令与选项
//
// 输入均为 { id, code }[]（code 为 lib.formatModule 的输出），位置中的行号相对 code。
import * as walk from "acorn-walk";
import { parse } from "./lib.js";

const asts = new WeakMap();
const astOf = (m) => asts.get(m) ?? asts.set(m, parse(m.code)).get(m);

// ---------- 字符串求值 ----------

function strVal(n, consts) {
  if (!n) return undefined;
  if (n.type === "Literal" && typeof n.value === "string") return n.value;
  if (n.type === "TemplateLiteral") {
    let s = "";
    n.quasis.forEach((q, i) => {
      s += q.value.cooked ?? q.value.raw;
      if (i < n.expressions.length) {
        const e = n.expressions[i];
        const r = e.type === "Identifier" && consts?.get(e.name);
        s += r !== undefined && r !== false ? r : "${" + (e.type === "Identifier" ? e.name : "…") + "}";
      }
    });
    return s;
  }
  if (n.type === "Identifier" && consts?.has(n.name)) return consts.get(n.name);
  if (n.type === "BinaryExpression" && n.operator === "+") {
    const a = strVal(n.left, consts), b = strVal(n.right, consts);
    if (a !== undefined && b !== undefined) return a + b;
  }
  return undefined;
}

function propMap(obj, consts) {
  const out = {};
  for (const p of obj.properties || []) {
    if (p.type !== "Property") continue;
    const k = p.key.type === "Identifier" ? p.key.name : p.key.value;
    if (k === undefined) continue;
    const v = strVal(p.value, consts);
    if (v !== undefined) out[k] = v;
    else if (p.value.type === "Literal") out[k] = p.value.value;
    else if (p.value.type === "ArrayExpression") {
      const arr = p.value.elements.map((e) => strVal(e, consts));
      if (arr.every((x) => x !== undefined)) out[k] = arr;
    } else if (p.value.type === "ArrowFunctionExpression" || p.value.type === "FunctionExpression") {
      const s = p.value.body && strVal(p.value.body, consts);
      out[k] = s !== undefined ? s : "[fn]";
    } else if (p.kind === "get") out[k] = "[getter]";
    else if (p.value.type === "Identifier") out[k] = "<" + p.value.name + ">";
  }
  return out;
}

/** 模块内的字符串常量：先收字面量，再收由字面量拼接 / 模板组成的 */
function moduleConsts(ast) {
  const consts = new Map();
  walk.simple(ast, {
    VariableDeclarator(n) {
      if (n.id.type === "Identifier" && n.init?.type === "Literal" && typeof n.init.value === "string") consts.set(n.id.name, n.init.value);
    },
  });
  walk.simple(ast, {
    VariableDeclarator(n) {
      if (n.id.type !== "Identifier" || !n.init || consts.has(n.id.name)) return;
      const v = strVal(n.init, consts);
      if (v !== undefined) consts.set(n.id.name, v);
    },
  });
  return consts;
}

// ---------- 环境变量 / 遥测 / 命令 / skill / 长文本 ----------

const PROMPT_MIN_CHARS = 600;
// 代码高亮关键字表等不是提示词的长字符串
const NOT_PROSE = /^(\(|kSo|style|DOCTYPE|int float|lock rep|if else|abs acf|N0 P0|gl_Max|put abs|export const)/;

export function analyzeStrings(mods) {
  const env = new Map(), telemetry = new Map();
  const commands = [], skills = [], prompts = [];
  const add = (m, k, id) => (m.get(k) ?? m.set(k, new Set()).get(k)).add(id);

  for (const mod of mods) {
    const ast = astOf(mod), consts = moduleConsts(ast);
    walk.full(ast, (n) => {
      if (n.type === "MemberExpression" && n.object.type === "MemberExpression" &&
        n.object.object.type === "Identifier" && n.object.object.name === "process" && n.object.property.name === "env") {
        const k = n.computed ? (n.property.type === "Literal" ? n.property.value : null) : n.property.name;
        if (k) add(env, k, mod.id);
      }
      if (n.type === "Literal" && typeof n.value === "string" && /^tengu_[a-z0-9_]+$/.test(n.value)) add(telemetry, n.value, mod.id);
      if (n.type === "TemplateLiteral" || (n.type === "Literal" && typeof n.value === "string")) {
        const s = strVal(n, consts);
        if (s && s.length >= PROMPT_MIN_CHARS && /[a-z]{3,} [a-z]{3,} [a-z]{3,}/.test(s)) prompts.push({ chunk: mod.id, offset: n.start, text: s });
      }
      if (n.type === "ObjectExpression") {
        const keys = n.properties.filter((p) => p.type === "Property").map((p) => p.key?.name ?? p.key?.value);
        if (keys.includes("type") && keys.includes("name") && (keys.includes("description") || keys.includes("getPromptForCommand"))) {
          const pm = propMap(n, consts);
          if (["local", "local-jsx", "prompt"].includes(pm.type) && typeof pm.name === "string") commands.push({ ...pm, chunk: mod.id });
        }
      }
      if (n.type === "CallExpression" && n.arguments.length === 1 && n.arguments[0].type === "ObjectExpression") {
        const keys = n.arguments[0].properties.filter((p) => p.type === "Property").map((p) => p.key?.name);
        if (keys.includes("name") && keys.includes("getPromptForCommand") && !keys.includes("type")) skills.push({ ...propMap(n.arguments[0], consts), chunk: mod.id });
      }
    });
  }

  // 长文本按开头 2000 字符去重，过滤非散文
  const seen = new Set();
  const uniquePrompts = prompts.filter((p) => {
    const key = p.text.slice(0, 2000);
    if (seen.has(key)) return false;
    seen.add(key);
    p.firstLine = p.text.trim().split("\n")[0].replace(/[^\w\s\-:.,'()`/]/g, "").slice(0, 100);
    return !NOT_PROSE.test(p.firstLine.trim());
  }).sort((a, b) => b.text.length - a.text.length);

  const sorted = (m) => Object.fromEntries([...m.entries()].sort().map(([k, v]) => [k, [...v].sort()]));
  return {
    env: sorted(env),
    telemetry: sorted(telemetry),
    commands: commands.sort((a, b) => a.name.localeCompare(b.name)),
    skills: skills.sort((a, b) => String(a.name).localeCompare(String(b.name))),
    prompts: uniquePrompts,
  };
}

// ---------- 工具 ----------

const TOOL_FLAGS = ["isReadOnly", "isConcurrencySafe", "isDestructive", "isOpenWorld", "isEnabled", "needsPermissions", "requiresUserInteraction"];
const TOOL_SCALARS = ["searchHint", "backgrounding", "maxResultSizeChars", "shouldDefer", "strict", "alwaysLoad", "ruleContentField", "skipAggregateToolResultBudget", "aliases"];

// 动态命名的工具：按源码特征给出描述性名称
const DYNAMIC_TOOL_KINDS = [
  [(s) => /isAuthStub: true/.test(s), "mcp__<server>__authenticate stub"],
  [(s, k) => k.has("mcpInfo") && /serverName/.test(s), "MCP server tool wrapper"],
  [(s) => /x\("call"\)|x\("prompt"\)/.test(s) || (/isEnabled: \(\) => false/.test(s) && /maxResultSizeChars: 0/.test(s)), "unavailable-tool placeholder"],
  [(s) => /subject/.test(s), "list-<subject> tool"],
  [(s) => /discover claude\.ai/.test(s), "search-<noun> tool (claude.ai catalog)"],
  [(s) => /familyParentToolName/.test(s), "Artifact family sub-tool"],
  [(s) => /inputJSONSchema/.test(s), "JSON-schema tool"],
];

function retLiteral(fn) {
  const b = fn.body;
  if (b?.type === "BlockStatement" && b.body.length === 1 && b.body[0].type === "ReturnStatement") {
    const a = b.body[0].argument;
    if (a?.type === "Literal") return a.value;
    if (a?.type === "Identifier") return "<" + a.name + ">";
    return "<expr>";
  }
  if (b?.type === "Literal") return b.value;
  return "<fn>";
}

export function analyzeTools(mods) {
  const relevant = mods.filter((m) => /inputSchema/.test(m.code));
  // 工具名可能是从别的模块导入的字符串常量：先建"导出名 → 常量值"表
  const exportConst = {}, localConst = {}, imports = {};
  for (const mod of relevant) {
    const ast = astOf(mod), lc = {}, ex = {}, im = {};
    walk.simple(ast, {
      VariableDeclarator(n) {
        if (n.id.type === "Identifier" && n.init?.type === "Literal" && typeof n.init.value === "string") lc[n.id.name] = n.init.value;
      },
    });
    for (const node of ast.body) {
      if (node.type === "ExportNamedDeclaration") for (const s of node.specifiers ?? []) if (lc[s.local.name] !== undefined) ex[s.exported.name] = lc[s.local.name];
      if (node.type === "ImportDeclaration") for (const s of node.specifiers) if (s.type === "ImportSpecifier") im[s.local.name] = [node.source.value.replace("/$bunfs/root/", ""), s.imported.name];
    }
    localConst[mod.id] = lc;
    exportConst[mod.id] = ex;
    imports[mod.id] = im;
  }
  for (const { id, code } of mods) {
    if (exportConst[id]) continue;
    const lc = {}, ex = {};
    for (const m of code.matchAll(/(?:var|let|const)\s+([\w$]+)\s*=\s*"([^"\\]{1,60})"/g)) lc[m[1]] = m[2];
    for (const m of code.matchAll(/,\s*([\w$]+)\s*=\s*"([^"\\]{1,60})"/g)) lc[m[1]] ??= m[2];
    for (const m of code.matchAll(/export\s*\{([^}]*)\}/g)) for (const part of m[1].split(",")) {
      const [a, b] = part.trim().split(/\s+as\s+/);
      if (a && lc[a] !== undefined) ex[(b || a).trim()] = lc[a];
    }
    exportConst[id] = ex;
  }
  const resolve = (id, name) => localConst[id]?.[name] ?? (imports[id]?.[name] && exportConst[imports[id][name][0]]?.[imports[id][name][1]]);

  const tools = [];
  for (const mod of relevant) {
    const { id, code } = mod, ast = astOf(mod);
    const handled = new Set(), objVars = {};
    walk.simple(ast, { VariableDeclarator(n) { if (n.id.type === "Identifier" && n.init?.type === "ObjectExpression") objVars[n.id.name] = n.init; } });
    const visit = (n, obj, factory) => {
      if (handled.has(obj)) return;
      // 合并 {...base, ...}（base 为同模块内的对象字面量变量），后者覆盖前者
      const byKey = new Map();
      for (const p of obj.properties) {
        if (p.type === "SpreadElement" && p.argument.type === "Identifier" && objVars[p.argument.name]) {
          handled.add(objVars[p.argument.name]);
          for (const q of objVars[p.argument.name].properties) if (q.type === "Property") byKey.set(q.key.name ?? q.key.value, q);
        } else if (p.type === "Property") byKey.set(p.key.name ?? p.key.value, p);
      }
      const keys = [...byKey.keys()];
      const has = (k) => byKey.has(k);
      if (!has("name") || !(has("inputSchema") || has("prompt")) || (!has("isEnabled") && !has("call") && !has("create"))) return;
      if (!factory && !(has("call") || has("create"))) return;
      handled.add(obj);
      const P = Object.fromEntries(byKey);
      const nv = P.name.value;
      let name = nv.type === "Literal" ? nv.value : nv.type === "Identifier" ? resolve(id, nv.name) ?? "<" + nv.name + ">" : "<expr>";
      if (typeof name !== "string" || name.startsWith("<") || name === "") {
        const snippet = code.slice(obj.start, Math.min(obj.end, obj.start + 1500));
        const kind = DYNAMIC_TOOL_KINDS.find(([test]) => test(snippet, new Set(keys)));
        name = `(dynamic) ${kind ? kind[1] : name || "unnamed"}`;
      }
      const flags = {};
      for (const k of TOOL_FLAGS) {
        if (!P[k]) continue;
        const v = P[k].value;
        flags[k] = v.type === "FunctionExpression" || v.type === "ArrowFunctionExpression" ? retLiteral(v) : v.type === "Literal" ? v.value : "<ref>";
      }
      const scalars = {};
      for (const k of TOOL_SCALARS) {
        if (!P[k]) continue;
        const v = P[k].value;
        scalars[k] = v.type === "Literal" ? v.value
          : v.type === "ArrayExpression" ? v.elements.map((e) => e.value ?? (e.name ? resolve(id, e.name) ?? "<" + e.name + ">" : "?"))
          : v.type === "Identifier" ? resolve(id, v.name) ?? "<" + v.name + ">" : "<expr>";
      }
      tools.push({ name, chunk: id, line: n.loc.start.line, keys, flags, ...scalars });
    };
    walk.simple(ast, {
      CallExpression(n) {
        if (n.callee.type === "Identifier" && n.arguments.length === 1 && n.arguments[0].type === "ObjectExpression") visit(n, n.arguments[0], n.callee.name);
      },
    });
    walk.simple(ast, { ObjectExpression(n) { visit(n, n, null); } });
  }
  return tools.sort((a, b) => String(a.name).localeCompare(String(b.name)));
}

// ---------- 特性开关 ----------
//
// 取值函数是混淆名且随版本变化，按结构特征定位所在模块:
//   基础取值   function B(e, n) { return X(e, n).value; }      X 返回 { value, source }
//   会话固定值 function W(e, n) { let r = …().pinnedFeatureValues …
//   直通包装   function Y(e, n, …) { return B(e, n); }
// 其它模块 import 这些函数后以 f("gate_name", 默认值) 调用。

function locateGateModule(mods) {
  for (const { id, code } of mods) {
    if (!code.includes("pinnedFeatureValues")) continue;
    const base = code.match(/function ([\w$]+)\(e, n2?\) \{\n  return ([\w$]+)\(e, n2?\)\.value;\n\}/);
    if (!base) continue;
    const [, getValue, getWithSource] = base;
    const pinned = code.match(/function ([\w$]+)\(e, n2?\) \{\n  let r2? = [\w$]+\(\)\.pinnedFeatureValues/);
    const exported = new Map((code.match(/export \{([\s\S]*?)\};/)?.[1] ?? "").split(",").map((s) => s.trim()).filter(Boolean).map((s) => {
      const [local, as] = s.split(/\s+as\s+/);
      return [local, as ?? local];
    }));
    const funcs = [getValue, getWithSource, pinned?.[1]].filter(Boolean);
    const passThrough = new RegExp(`function ([\\w$]+)\\(e, n2?(?:, [\\w$]+)*\\) \\{\\n  return ${getValue.replaceAll("$", "\\$")}\\(e, n2?\\);\\n\\}`, "g");
    for (const m of code.matchAll(passThrough)) funcs.push(m[1]);
    return { id, funcs: new Map(funcs.filter((f) => exported.has(f)).map((f) => [exported.get(f), f])) };
  }
  throw new Error("未找到特性开关取值模块（pinnedFeatureValues）");
}

const literalOf = (n) => {
  if (!n) return null;
  if (n.type === "Literal") return n.value;
  if (n.type === "UnaryExpression" && n.argument.type === "Literal") return n.operator === "-" ? -n.argument.value : n.operator === "!" ? !n.argument.value : null;
  if (n.type === "ObjectExpression") return "<object>";
  if (n.type === "ArrayExpression") return "<array>";
  if (n.type === "Identifier") return `<${n.name}>`;
  return "<expr>";
};

export function analyzeGates(mods) {
  const gate = locateGateModule(mods);
  const exportedNames = new Set(gate.funcs.keys());
  const gates = {};
  for (const mod of mods) {
    const { id, code } = mod;
    if (id !== gate.id && !code.includes(`/${gate.id}"`)) continue;
    const ast = astOf(mod);
    const locals = new Map();
    if (id === gate.id) for (const [exp, local] of gate.funcs) locals.set(local, exp);
    for (const node of ast.body) {
      if (node.type !== "ImportDeclaration" || !node.source.value.endsWith(gate.id)) continue;
      for (const s of node.specifiers) if (s.type === "ImportSpecifier" && exportedNames.has(s.imported.name)) locals.set(s.local.name, s.imported.name);
    }
    if (!locals.size) continue;
    walk.simple(ast, {
      CallExpression(n) {
        if (n.callee.type !== "Identifier" || !locals.has(n.callee.name)) return;
        const a0 = n.arguments[0];
        if (a0?.type !== "Literal" || typeof a0.value !== "string") return;
        const g = (gates[a0.value] ??= { defaults: new Set(), chunks: new Set() });
        g.defaults.add(JSON.stringify(literalOf(n.arguments[1])));
        g.chunks.add(id);
      },
    });
  }
  return {
    module: gate.id,
    gates: Object.fromEntries(Object.entries(gates).sort().map(([k, v]) => [k, { defaults: [...v.defaults].map((x) => JSON.parse(x)), chunks: [...v.chunks].sort() }])),
  };
}

// ---------- CLI ----------

const cliStr = (n) => (n?.type === "Literal" && typeof n.value === "string" ? n.value : n?.type === "TemplateLiteral" ? n.quasis.map((q) => q.value.cooked).join("${…}") : undefined);

// a.b(x).c(y) → { root: a, chain: [{ m: "b", args }, { m: "c", args }] }
function flattenChain(n) {
  const chain = [];
  let cur = n;
  while (cur?.type === "CallExpression" && cur.callee.type === "MemberExpression") {
    chain.unshift({ m: cur.callee.property.name, args: cur.arguments, node: cur });
    cur = cur.callee.object;
  }
  return { root: cur, chain };
}

export function analyzeCli(mods) {
  const commands = [], options = [];
  for (const mod of mods) {
    const { id, code } = mod;
    if (!/\.option\("-|\.addOption\(|\.command\("/.test(code)) continue;
    walk.ancestor(astOf(mod), {
      CallExpression(n, _s, anc) {
        const parent = anc[anc.length - 2];
        if (parent?.type === "MemberExpression" && parent.object === n) return; // 只处理链条最外层
        const { root, chain } = flattenChain(n);
        if (!chain.some((c) => ["option", "addOption", "command", "requiredOption"].includes(c.m))) return;
        let cmd = root?.type === "Identifier" ? `<${root.name}>` : "<expr>";
        if (chain.some((c) => c.m === "name" && cliStr(c.args[0]) === "claude")) cmd = "claude";
        for (let i = 0; i < chain.length; i++) {
          const c = chain[i], line = c.node.loc.start.line;
          if (c.m === "command") {
            cmd = cliStr(c.args[0]) ?? "<dyn>";
            const next = chain.slice(i + 1).find((x) => x.m === "description" || x.m === "command");
            commands.push({
              command: cmd, description: next?.m === "description" ? cliStr(next.args[0]) : undefined,
              hidden: c.args[1]?.type === "ObjectExpression" && /hidden/.test(code.slice(c.args[1].start, c.args[1].end)),
              chunk: id, line,
            });
          } else if (c.m === "option" || c.m === "requiredOption") {
            const flags = cliStr(c.args[0]);
            if (flags?.startsWith("-")) options.push({ command: cmd, flags, description: cliStr(c.args[1]), required: c.m === "requiredOption", hidden: false, chunk: id, line });
          } else if (c.m === "addOption") {
            const { root: r2, chain: ch2 } = flattenChain(c.args[0]);
            const ctor = r2?.type === "NewExpression" ? r2 : c.args[0].type === "NewExpression" ? c.args[0] : null;
            if (!ctor) continue;
            const choices = ch2.find((x) => x.m === "choices")?.args[0];
            options.push({
              command: cmd, flags: cliStr(ctor.arguments[0]), description: cliStr(ctor.arguments[1]),
              hidden: ch2.some((x) => x.m === "hideHelp"),
              choices: choices?.type === "ArrayExpression" ? choices.elements.map(cliStr) : undefined,
              chunk: id, line,
            });
          }
        }
      },
    });
  }
  return { commands, options };
}
