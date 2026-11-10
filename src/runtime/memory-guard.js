// 读取记忆目录里的文件，一律先问用户。这是本项目对原版有意做的改动，见 docs/dev.md#读取记忆文件需要确认。
//
// 挂在权限检查链上（core/conversation-engine.js 里 tool.checkPermissions 之后）：任何会读到记忆目录的工具调用，
// 不论权限模式、allow 规则、hook 还是自动模式的分类器怎么判断，都改成必须由用户回答的询问。
// 做法与原版里「读取范围限制」「危险删除」等硬性检查相同：结果带 safetyCheck，断路器名为 memoryRead，
// 该断路器在 core 的断路器表里标为绕不过（bypassImmune），因此 bypassPermissions 模式也照样询问。
//
// 覆盖范围：
//   - 带 getPath 的只读工具（Read 等）：按解析后的真实路径判断，符号链接不能绕开；
//   - Grep / Glob 与常见递归搜索：搜索起点包含已存在的记忆目录时同样确认；
//   - Bash / PowerShell：只能看命令文本，把每个词按真实路径判断，是尽力而为（见 commandMentionsMemory）。
// 不覆盖：Edit、Write 这类写工具，保存记忆需要写入。
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CIRCUIT_BREAKER = "memoryRead";

const AGENT_MEMORY = new Set(["agent-memory", "agent-memory-local"]);

/** 把路径写法统一成绝对路径：展开 ~，相对路径按 cwd 解析 */
function resolveLoose(p, cwd) {
  if (typeof p !== "string" || p === "" || p.includes("\0")) return null;
  if (p === "~" || p.startsWith("~/")) p = path.join(os.homedir(), p.slice(1));
  return path.resolve(cwd, p);
}

/** 一条路径的各种等价写法：字面的绝对路径，以及解析符号链接后的路径（目标不存在时解析最长的已存在前缀） */
function forms(abs) {
  const out = new Set([abs]);
  let cur = abs;
  const rest = [];
  for (;;) {
    try {
      out.add(path.join(fs.realpathSync(cur), ...rest));
      break;
    } catch {
      const parent = path.dirname(cur);
      if (parent === cur) break;
      rest.unshift(path.basename(cur));
      cur = parent;
    }
  }
  return [...out];
}

const under = (p, root) => p === root || p.startsWith(root.endsWith(path.sep) ? root : root + path.sep);

/** 当前进程认定的记忆目录：自动记忆目录、各配置目录下的 agent-memory、远程记忆目录 */
function memoryRoots({ autoMemDir, cwd }) {
  const home = os.homedir();
  const configDir = process.env.CLAUDE_CONFIG_DIR || path.join(home, ".claude");
  const remote = process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  const roots = [
    autoMemDir,
    path.join(configDir, "agent-memory"),
    path.join(configDir, "agent-memory-local"),
    path.join(home, ".claude", "agent-memory"),
    path.join(cwd, ".claude", "agent-memory"),
    path.join(cwd, ".claude", "agent-memory-local"),
    path.join(home, ".claude", "agent-memory-local"),
    ...(remote ? [path.join(remote, "agent-memory"), path.join(remote, "projects")] : []),
  ].filter((r) => typeof r === "string" && r !== "");
  return { roots, configDir };
}

/** 路径是否在某个记忆目录里 */
export function isMemoryPath(p, host) {
  const cwd = host.cwd();
  const abs = resolveLoose(p, cwd);
  if (abs === null) return false;
  const { roots, configDir } = memoryRoots({ autoMemDir: host.autoMemDir, cwd });
  const rootForms = roots.flatMap((r) => forms(path.resolve(r)));
  const projectsRoots = [path.join(configDir, "projects"), path.join(os.homedir(), ".claude", "projects")].flatMap((r) => forms(r));
  for (const cand of forms(abs)) {
    if (rootForms.some((r) => under(cand, r))) return true;
    // 其他项目的自动记忆：<配置目录>/projects/<项目>/memory/…
    for (const pr of projectsRoots) {
      if (!under(cand, pr)) continue;
      const seg = cand.slice(pr.length).split(path.sep).filter(Boolean);
      if (seg[1] === "memory") return true;
    }
    // 其他位置的 .claude/agent-memory[-local]/…（其他项目、其他用户目录）
    const seg = cand.split(path.sep);
    for (let i = 1; i < seg.length; i++) if (seg[i - 1] === ".claude" && AGENT_MEMORY.has(seg[i])) return true;
  }
  return false;
}

/** 递归搜索的范围是否包含已存在的记忆目录；不把尚不存在的 agent-memory 当成需要确认的目录。 */
export function containsMemoryPath(p, host) {
  const abs = resolveLoose(p, host.cwd());
  if (abs === null) return false;
  const { roots, configDir } = memoryRoots({ autoMemDir: host.autoMemDir, cwd: host.cwd() });
  const projects = new Set([path.join(configDir, "projects"), path.join(os.homedir(), ".claude", "projects")]);
  for (const projectRoot of projects) {
    try {
      for (const entry of fs.readdirSync(projectRoot, { withFileTypes: true })) {
        if (entry.isDirectory() || entry.isSymbolicLink()) roots.push(path.join(projectRoot, entry.name, "memory"));
      }
    } catch { /* 配置目录可能不存在或不可读 */ }
  }
  // 搜索另一个项目或它的 .claude 目录时，也检查该项目的 agent-memory。
  for (const name of AGENT_MEMORY) roots.push(path.join(abs, ".claude", name), path.join(abs, name));
  const candidates = forms(abs);
  return roots.some((root) => {
    try {
      if (!fs.statSync(root).isDirectory()) return false;
    } catch { return false; }
    return forms(path.resolve(root)).some((r) => candidates.some((candidate) => under(r, candidate)));
  });
}

/** 按 shell 操作符分开命令；保留引号里的空格和操作符。这里只做路径识别，不解释 shell。 */
function commandParts(command) {
  const parts = [[]];
  for (const m of command.matchAll(/"([^"]*)"|'([^']*)'|([;|&()\n]+)|([^\s;|&<>()`]+)/g)) {
    if (m[3]) parts.push([]);
    else parts.at(-1).push(m[1] ?? m[2] ?? m[4]);
  }
  return parts.filter((part) => part.length);
}

/** 词里的 $HOME、${HOME} 展开成真实的 home 目录，其余变量不展开（展开不了的就是识别不了） */
function expandHome(word) {
  return word.replace(/^\$\{HOME\}(?=\/|$)|^\$HOME(?=\/|$)/, () => os.homedir());
}

const SEARCH_VALUE_OPTIONS = new Set(["-e", "--regexp", "-f", "--file", "-g", "--glob", "--iglob", "-t", "--type", "-T", "--type-not", "--include", "--exclude", "--exclude-dir", "-m", "--max-count", "-A", "-B", "-C", "--after-context", "--before-context", "--context", "--max-depth", "--maxdepth", "--encoding", "--sort", "--sortr", "--threads", "-j"]);

/** 常见递归搜索的起点；grep/rg 没写路径时搜索当前目录。 */
function recursiveSearchPaths(words) {
  let first = 0;
  while (first < words.length && (/^[A-Za-z_]\w*=/.test(words[first]) || ["command", "exec", "env", "sudo"].includes(words[first]))) first++;
  const name = path.basename(words[first] ?? "").toLowerCase();
  const args = words.slice(first + 1);
  const find = name === "find" || name === "bfs";
  const powershell = ["get-childitem", "gci", "dir", "ls"].includes(name) && args.some((arg) => /^-(recurse|r)$/i.test(arg));
  const search = ["rg", "ag", "ack"].includes(name) || ["grep", "ugrep"].includes(name) && args.some((arg) => /^-[^-]*[rR]/.test(arg) || /^--(?:dereference-)?recursive$/.test(arg));
  if (!find && !powershell && !search) return [];
  const paths = [];
  let patternOption = args.some((arg) => /^(?:-e|-f|--regexp|--file)(?:=|$)/.test(arg) || /^-[ef].+/.test(arg));
  if (args.includes("--files")) patternOption = true;
  let options = true;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (options && arg === "--") { options = false; continue; }
    if (options && arg.startsWith("-")) {
      if (find) {
        if (["-H", "-L", "-P", "-X"].includes(arg) || /^-O\d+$/.test(arg)) continue;
        if (["-D", "-S", "-regextype"].includes(arg)) { i++; continue; }
        break; // find 的表达式之后不再是起点，-exec 的命令另由直接路径检查处理
      }
      if (SEARCH_VALUE_OPTIONS.has(arg) || powershell && /^-(filter|include|exclude|depth)$/i.test(arg)) i++;
      continue;
    }
    paths.push(arg);
  }
  if (search && !patternOption) paths.shift();
  return paths.length ? paths : ["."];
}

/**
 * 命令是否指向记忆目录。只看命令文本，所以是尽力而为；做法是把每个像路径的词按真实路径判断，
 * 而不是在整段命令里找字样，这样 `git add MEMORY.md`、`grep -rn agent-memory src/` 这类只是提到名字的命令不会被拦：
 *   能识别：词本身是记忆目录里的路径（绝对路径，或 ~、$HOME、相对路径展开后），包括经符号链接指过去的；
 *           `cd <记忆目录>` 之后的相对路径（按命令里最后一个 cd 的目标解析）；
 *   识别不了：用变量或通配符拼出的路径、脚本和解释器内部间接读取。
 * 返回命中的词，没有则返回 undefined。
 */
export function commandMentionsMemory(command, host) {
  if (typeof command !== "string" || command === "") return;
  const parts = commandParts(command);
  const words = parts.flat();
  let base = host.cwd();
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w === "cd" && words[i + 1] !== undefined) {
      const target = resolveLoose(expandHome(words[i + 1]), base);
      if (target !== null) base = target;
      continue;
    }
    if (w.startsWith("-") && !w.includes("/")) continue; // 选项
    const eq = w.indexOf("=");
    const word = expandHome(eq > 0 && /^[A-Za-z_]\w*=/.test(w) ? w.slice(eq + 1) : w); // VAR=path 取等号右边
    if (word === "" || /[*?$`]/.test(word)) continue; // 含通配符或没展开的变量：识别不了
    if (isMemoryPath(word, { ...host, cwd: () => base })) return w;
  }
  base = host.cwd();
  for (const part of parts) {
    if (part[0] === "cd" && part[1] !== undefined) {
      base = resolveLoose(expandHome(part[1]), base) ?? base;
      continue;
    }
    for (const word of recursiveSearchPaths(part)) {
      const expanded = expandHome(word);
      if (/[*?$`]/.test(expanded)) continue;
      if (containsMemoryPath(expanded, { ...host, cwd: () => base })) return word;
    }
  }
}

/** 该工具调用会读到哪个记忆路径 / 命令片段；没有则 undefined */
function findMemoryAccess(tool, input, context, host) {
  const name = tool?.name;
  if (name === "Bash" || name === "PowerShell") {
    const hit = commandMentionsMemory(input?.command, host);
    return hit === undefined ? undefined : { kind: "command", detail: hit };
  }
  if (typeof tool?.getPath !== "function") return;
  try {
    if (tool.isReadOnly?.(input, context) === false) return; // 写工具不在此列
  } catch {
    // 判断不了是否只读时，按读处理
  }
  let p;
  try {
    p = tool.getPath(input);
  } catch {
    return;
  }
  if (typeof p !== "string") return;
  const search = ["Grep", "Glob"].includes(name) || tool.isSearchOrReadCommand?.()?.isSearch === true;
  return isMemoryPath(p, host) || search && containsMemoryPath(p || host.cwd(), host) ? { kind: "path", detail: p || host.cwd() } : undefined;
}

/** 宿主给的函数可能抛错（如没有项目目录时取不到自动记忆目录）：取不到就退回默认值 */
function attempt(fn, fallback) {
  try {
    return fn() ?? fallback;
  } catch {
    return fallback;
  }
}

/**
 * 权限检查链的挂接点。current 是 tool.checkPermissions 及之后各步给出的结果；返回新的结果，或 undefined（不干预）。
 * host: { autoMemDir: () => 自动记忆目录（可能抛错），cwd: () => 当前目录 }
 * 这里的任何失败都按「不干预」处理：判断不了就交给原版的权限流程，不能让守卫自己把工具调用弄坏。
 */
export function memoryReadGuard(tool, input, current, context, host) {
  if (current?.behavior === "deny") return;
  let access;
  try {
    const resolved = { cwd: () => attempt(host.cwd, process.cwd()) || process.cwd(), autoMemDir: attempt(host.autoMemDir, undefined) };
    access = findMemoryAccess(tool, input, context, resolved);
  } catch {
    return;
  }
  if (access === undefined) return;
  const message =
    access.kind === "path"
      ? `Claude wants to read or search ${access.detail}, which is in or contains a memory directory. If you allow it, memory contents may be sent to the model.`
      : `This command can access a memory directory or file (${access.detail}), including through recursive search. If you allow it, what it prints is sent to the model.`;
  return {
    behavior: "ask",
    message,
    updatedInput: input,
    suppressAlwaysAllowRule: true,
    personOnly: true,
    hooksMayAllow: false,
    decisionReason: { type: "safetyCheck", reason: message, classifierApprovable: false, circuitBreaker: CIRCUIT_BREAKER },
  };
}
