// 检查生成源码上的补丁：补丁新增的行里引用的标识符，须在所在模块中有定义或导入。
//
// 生成源码中的名字是原版混淆后的名字，各系统不同；同一处改动在每个系统的源码里引用的名字各不相同。
// 测试只运行当前系统的构建产物，其他系统的源码里写错的名字（把一个系统的名字用到另一个系统）在运行时才报错：
// 模块顶层引用未定义的名字时，模块加载失败。这里对每个系统的源码都做静态检查。
import fs from "node:fs";
import path from "node:path";
import * as acorn from "acorn";
import * as walk from "acorn-walk";

const ACORN = { ecmaVersion: "latest", sourceType: "module", allowAwaitOutsideFunction: true, locations: true };

/** 补丁中各文件新增的行号：Map<文件, Set<补丁后的行号>> */
export function addedLines(patchText) {
  const out = new Map();
  let lines, n;
  for (const line of patchText.split("\n")) {
    let m;
    if ((m = line.match(/^\+\+\+ b\/(.+)$/))) out.set(m[1], (lines = new Set()));
    else if ((m = line.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/))) n = +m[1];
    else if (lines && line.startsWith("+")) lines.add(n++);
    else if (lines && line.startsWith(" ")) n++;
  }
  return out;
}

function patternNames(pattern, out) {
  if (!pattern) return;
  if (pattern.type === "Identifier") out.add(pattern.name);
  else if (pattern.type === "ObjectPattern") for (const p of pattern.properties) patternNames(p.value ?? p.argument, out);
  else if (pattern.type === "ArrayPattern") for (const p of pattern.elements) patternNames(p, out);
  else if (pattern.type === "AssignmentPattern") patternNames(pattern.left, out);
  else if (pattern.type === "RestElement") patternNames(pattern.argument, out);
}

function declaredNames(statement, out) {
  if (statement.type === "VariableDeclaration") for (const d of statement.declarations) patternNames(d.id, out);
  else if (statement.type === "FunctionDeclaration" || statement.type === "ClassDeclaration") out.add(statement.id.name);
  else if (statement.type === "ImportDeclaration") for (const s of statement.specifiers) out.add(s.local.name);
}

/** 一个语法节点引入的绑定：参数、自身的名字、catch 的参数、块中的声明、for 的循环变量 */
function scopeNames(node, out) {
  for (const p of node.params ?? []) patternNames(p, out);
  if (node.id?.name) out.add(node.id.name);
  if (node.type === "CatchClause") patternNames(node.param, out);
  const body = node.type === "BlockStatement" || node.type === "Program" ? node.body : node.type === "SwitchCase" ? node.consequent : [];
  for (const statement of body) declaredNames(statement, out);
  if (node.type === "ForStatement" && node.init) declaredNames(node.init, out);
  if ((node.type === "ForOfStatement" || node.type === "ForInStatement") && node.left) declaredNames(node.left, out);
}

const NOT_REFERENCES = ["MethodDefinition", "PropertyDefinition", "ImportSpecifier", "ExportSpecifier", "LabeledStatement", "BreakStatement", "ContinueStatement"];
/** 该标识符不是对变量的引用：属性名、对象字面量的键、类成员名、导入导出的名字、标签 */
const notReference = (node, parent) =>
  (parent.type === "MemberExpression" && parent.property === node && !parent.computed) ||
  (parent.type === "Property" && parent.key === node && !parent.computed && !parent.shorthand) ||
  NOT_REFERENCES.includes(parent.type);

/**
 * 源码中位于 lines 这些行上、在模块里找不到定义的标识符。
 * 运行环境提供的全局名字（process、Bun 等）不计。
 * @returns {{ name: string, line: number }[]}
 */
export function undefinedIdentifiers(code, lines) {
  const found = new Map();
  walk.ancestor(acorn.parse(code, ACORN), {
    Identifier(node, _state, ancestors) {
      if (!lines.has(node.loc.start.line) || notReference(node, ancestors.at(-2))) return;
      if (node.name in globalThis || node.name === "undefined" || node.name === "arguments") return;
      const scope = new Set();
      for (const ancestor of ancestors) scopeNames(ancestor, scope);
      if (!scope.has(node.name) && !found.has(node.name)) found.set(node.name, node.loc.start.line);
    },
  });
  return [...found].map(([name, line]) => ({ name, line }));
}

/** 补丁涉及的每个文件中，新增行上未定义的标识符：["路径:行号 名字", ...] */
export function patchUndefinedIdentifiers(patchFile, root) {
  const out = [];
  for (const [file, lines] of addedLines(fs.readFileSync(patchFile, "utf8"))) {
    const code = fs.readFileSync(path.join(root, file), "utf8");
    for (const { name, line } of undefinedIdentifiers(code, lines)) out.push(`${file}:${line} ${name}`);
  }
  return out;
}
