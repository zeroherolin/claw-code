// 读取记忆目录里的文件时，一律先询问用户。这是本项目对原版有意做的改动，见 docs/dev.md#读取记忆文件需要确认。
//
// 挂在权限检查链上（core/conversation-engine.js 里 tool.checkPermissions 之后）：任何会读取记忆目录的工具调用，
// 不论权限模式、allow 规则、hook 还是自动模式的分类器如何判断，都改为必须由用户回答的询问。
// 做法与原版里「读取范围限制」「危险删除」等硬性检查相同：结果带 safetyCheck，断路器名为 memoryRead，
// 该断路器在断路器表中标记为不可绕过（bypassImmune），因此 bypassPermissions 模式下同样询问。
//
// 覆盖范围：
//   - 带 getPath 的只读工具（Read 等）：按解析后的真实路径判断，符号链接无法绕过；
//   - Grep / Glob 与常见递归搜索：搜索起点包含已存在的记忆目录时同样确认；
//   - Bash / PowerShell：只能依据命令文本，把每个词按真实路径判断，属于尽力而为（见 commandMentionsMemory）。
// 不覆盖：Edit、Write 等写工具，保存记忆需要写入。
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

/** 解析符号链接后的路径，不存在时为 null。realpaths 是一次检查内的缓存（路径 → 结果），没有时每次都解析 */
function realpath(p, realpaths) {
  if (realpaths?.has(p)) return realpaths.get(p);
  let real = null;
  try {
    real = fs.realpathSync(p);
  } catch { /* 不存在或不可访问 */ }
  realpaths?.set(p, real);
  return real;
}

/** 一条路径的各种等价写法：字面的绝对路径，以及解析符号链接后的路径（目标不存在时解析最长的已存在前缀） */
function forms(abs, realpaths) {
  const out = new Set([abs]);
  let cur = abs;
  const rest = [];
  for (;;) {
    const real = realpath(cur, realpaths);
    if (real !== null) {
      out.add(path.join(real, ...rest));
      break;
    }
    const parent = path.dirname(cur);
    if (parent === cur) break;
    rest.unshift(path.basename(cur));
    cur = parent;
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
  const rootForms = roots.flatMap((r) => forms(path.resolve(r), host.realpaths));
  const projectsRoots = [path.join(configDir, "projects"), path.join(os.homedir(), ".claude", "projects")].flatMap((r) => forms(r, host.realpaths));
  for (const cand of forms(abs, host.realpaths)) {
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

/** 递归搜索的范围是否包含已存在的记忆目录；尚不存在的 agent-memory 不视为需要确认的目录。 */
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
  const candidates = forms(abs, host.realpaths);
  return roots.some((root) => {
    try {
      if (!fs.statSync(root).isDirectory()) return false;
    } catch { return false; }
    return forms(path.resolve(root), host.realpaths).some((r) => candidates.some((candidate) => under(r, candidate)));
  });
}

/** 与 start 处的引号配对的另一半的位置，没有时为 -1；双引号与 $'…' 内反斜杠之后的字符不算 */
function closingQuote(text, start) {
  const quote = text[start];
  if (quote === "'" && text[start - 1] !== "$") return text.indexOf("'", start + 1);
  for (let i = start + 1; i < text.length; i++) {
    if (text[i] === "\\") i++;
    else if (text[i] === quote) return i;
  }
  return -1;
}

// heredoc 的开头：<<、可选的 -、结束标记（可带引号或反斜杠）
const HEREDOC = /<<(-?)[ \t]*(?:'([^'\n]*)'|"([^"\n]*)"|\\?([^\s;|&<>()'"`\\]+))/y;

/** i 处开始的 heredoc：{ delimiter: 结束标记, stripTabs: 是否为 <<-, length: 开头的长度 }；不是 heredoc 时为 null */
function heredocAt(text, i) {
  if (text[i - 1] === "<" || text[i + 2] === "<") return null; // <<< 是 here-string
  HEREDOC.lastIndex = i;
  const m = HEREDOC.exec(text);
  return m && { delimiter: m[2] ?? m[3] ?? m[4], stripTabs: m[1] === "-", length: m[0].length };
}

/** start 起的 heredoc 正文，到只含结束标记的一行为止（没有这一行时到文本末尾）；end 为结束标记所在行的行尾 */
function heredocBody(text, start, { delimiter, stripTabs }) {
  for (let line = start; line < text.length;) {
    let eol = text.indexOf("\n", line);
    if (eol < 0) eol = text.length;
    const content = text.slice(line, eol);
    if ((stripTabs ? content.replace(/^\t+/, "") : content) === delimiter) return { body: text.slice(start, line), end: eol };
    line = eol + 1;
  }
  return { body: text.slice(start), end: text.length };
}

/**
 * 按 POSIX shell 的引用规则把命令切成词：引号与反斜杠只起引用作用，相邻的片段合成一个词（`F="a b"` 是一个词 `F=a b`）；
 * 操作符（; | & ( ) 、反引号与换行）分开各条命令，空白与重定向符分开词。
 * 不成对的引号只分开词，不引用后面的文本：注释（词首的 # 到行尾）中的引号，以及找不到另一半的引号。
 * heredoc 的正文单独切分，其中的引号不与正文之外的引号配对。
 * 这两处不这样处理时，注释或正文里的一个撇号会把之后的命令都当作引号内的文本。
 * 这里只做路径识别，不解释 shell；PowerShell 的命令按同样的规则切分。
 * 返回各条命令的词：{ text: 去掉引号后的词, quoted: 词中引号内的各段 { text, double: 是否为双引号 } }
 */
function commandParts(command) {
  const parts = [[]];
  const heredocs = []; // 当前行中开始的 heredoc，正文从下一行起
  let word = null;
  let comment = false;
  const open = () => (word ??= { text: "", quoted: [] });
  const close = () => {
    if (word) parts.at(-1).push(word);
    word = null;
  };
  for (let i = 0; i < command.length; i++) {
    const ch = command[i];
    if (ch === "\n") comment = false;
    else if (ch === "#" && word === null) comment = true;
    if (ch === "'" || ch === '"') {
      const end = comment ? -1 : closingQuote(command, i);
      if (end < 0) {
        close();
        continue;
      }
      let segment = "";
      for (i++; i < end; i++) {
        if (ch === '"' && command[i] === "\\" && '"\\$`'.includes(command[i + 1])) i++; // 双引号内的反斜杠转义
        segment += command[i];
      }
      open().text += segment;
      word.quoted.push({ text: segment, double: ch === '"' });
    } else if (ch === "\\" && i + 1 < command.length) {
      if (command[++i] !== "\n") open().text += command[i]; // 反斜杠加换行是续行
    } else if (";|&()`\n".includes(ch)) {
      close();
      parts.push([]);
      if (ch !== "\n") continue;
      for (const doc of heredocs.splice(0)) {
        const { body, end } = heredocBody(command, i + 1, doc);
        for (const part of commandParts(body)) parts.push(part);
        parts.push([]);
        i = end;
      }
    } else if (/[\s<>]/.test(ch)) {
      close();
      const doc = ch === "<" && !comment ? heredocAt(command, i) : null;
      if (doc) {
        heredocs.push(doc);
        i += doc.length - 1;
      }
    } else open().text += ch;
  }
  close();
  return parts.filter((part) => part.length);
}

/** 把词中的 $HOME、${HOME} 展开为真实的 home 目录；其余变量不展开，含这类变量的词无法识别 */
function expandHome(word) {
  return word.replace(/^\$\{HOME\}(?=\/|$)|^\$HOME(?=\/|$)/, () => os.homedir());
}

const SEARCH_VALUE_OPTIONS = new Set(["-e", "--regexp", "-f", "--file", "-g", "--glob", "--iglob", "-t", "--type", "-T", "--type-not", "--include", "--exclude", "--exclude-dir", "-m", "--max-count", "-A", "-B", "-C", "--after-context", "--before-context", "--context", "--max-depth", "--maxdepth", "--encoding", "--sort", "--sortr", "--threads", "-j"]);

/** 一条命令的命令名（小写，不含目录）与参数；前面的变量赋值与 command、exec、env、sudo 不计 */
function commandOf(words) {
  let first = 0;
  while (first < words.length && (/^[A-Za-z_]\w*=/.test(words[first]) || ["command", "exec", "env", "sudo"].includes(words[first]))) first++;
  return { name: path.basename(words[first] ?? "").toLowerCase(), args: words.slice(first + 1) };
}

const SHELLS = new Set(["sh", "bash", "zsh", "dash", "ksh"]);

/** 命令交给 shell 再次解释的文本：`eval <文本…>` 与 `sh -c <文本>` */
function shellCode({ name, args }) {
  if (name === "eval") return [args.join(" ")];
  const c = SHELLS.has(name) ? args.findIndex((arg) => /^-[A-Za-z]*c$/.test(arg)) : -1;
  return c >= 0 && args[c + 1] !== undefined ? [args[c + 1]] : [];
}

/** 文本中命令替换的内容：$( … )（按括号配对）与一对反引号之间的部分 */
function substitutions(text) {
  const out = [];
  for (let i = 0; i < text.length; i++) {
    let end;
    if (text[i] === "$" && text[i + 1] === "(") {
      let depth = 0;
      for (end = ++i; end < text.length; end++) {
        if (text[end] === "(") depth++;
        else if (text[end] === ")" && --depth === 0) break;
      }
    } else if (text[i] === "`") {
      end = text.indexOf("`", i + 1);
      if (end < 0) end = text.length;
    } else continue;
    out.push(text.slice(i + 1, end));
    i = end;
  }
  return out;
}

/**
 * 词中可能是路径的部分：`VAR=路径`、`--选项=路径` 取等号右边；`-x路径` 取选项字母之后，
 * 选项字母连写时（`-xf路径`）另取第一个 / 或 ~ 起的部分；不含路径的选项没有候选
 */
function pathCandidates(text) {
  if (/^(?:--?[\w-]+|[A-Za-z_]\w*)=/.test(text)) return [text.slice(text.indexOf("=") + 1)];
  if (!text.startsWith("-")) return [text];
  if (!/[/~]/.test(text)) return [];
  return [...new Set([text.slice(2), text.slice(text.search(/[/~]/))])];
}

/** 常见递归搜索的起点；grep/rg 未给出路径时搜索当前目录。 */
function recursiveSearchPaths({ name, args }) {
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
 * 命令是否指向记忆目录。只依据命令文本，属于尽力而为：把每个形似路径的词按真实路径判断，
 * 而不是在整段命令中查找字样，因此 `git add MEMORY.md`、`grep -rn agent-memory src/` 这类只提到名字的命令不会被拦截：
 *   可识别：词本身是记忆目录里的路径（绝对路径，或 ~、$HOME、相对路径展开后），包括经符号链接指向记忆目录的；
 *           `cd <记忆目录>` 之后的相对路径（按它之前最近的一个 cd 的目标解析）；
 *           `VAR=路径`、`--选项=路径`、`-x路径` 中的路径；
 *           引号内的文本按同样的规则再切分，其中原样写出的路径同样识别（`sh -c "…"`、`eval "…"`、`"$(…)"`、`python -c "…"` 等），
 *           不区分该文本是否会被执行；
 *           递归搜索的范围，包括 `sh -c`、`eval` 与命令替换中的搜索；
 *   不可识别：由变量或通配符拼接的路径、脚本文件内部的读取、解释器的内联代码中计算得出的路径。
 * 返回命中的词，没有则返回 undefined。
 */
export function commandMentionsMemory(command, host) {
  if (typeof command !== "string" || command === "") return;
  host = { ...host, realpaths: new Map() }; // 一条命令中的各个词多次解析相同的目录
  return mentionedMemoryPath(command, host, host.cwd()) ?? searchedMemoryPath(command, host, host.cwd());
}

/** 文本中指向记忆目录的词；base 为解析相对路径的目录，随文本中的 cd 改变 */
function mentionedMemoryPath(text, host, base) {
  const words = commandParts(text).flat();
  for (let i = 0; i < words.length; i++) {
    const w = words[i].text;
    if (w === "cd" && words[i + 1] !== undefined) {
      base = resolveLoose(expandHome(words[i + 1].text), base) ?? base;
      continue;
    }
    for (const candidate of pathCandidates(w)) {
      const word = expandHome(candidate);
      // 含通配符或未展开的变量：无法识别
      if (word !== "" && !/[*?$]/.test(word) && isMemoryPath(word, { ...host, cwd: () => base })) return w;
    }
    for (const quoted of words[i].quoted) {
      const hit = mentionedMemoryPath(quoted.text, host, base);
      if (hit !== undefined) return hit;
    }
  }
}

/**
 * 文本中范围包含记忆目录的递归搜索，返回该范围。只检查会被执行的文本：各条命令本身，以及其中交给 shell 再次解释的部分
 * （`sh -c`、`eval`，以及未加引号或位于双引号内的命令替换）；其他引号内的文本（如 `echo "rg x ."`）不是命令。
 */
function searchedMemoryPath(text, host, base) {
  for (const part of commandParts(text)) {
    const words = part.map((w) => w.text);
    if (words[0] === "cd" && words[1] !== undefined) {
      base = resolveLoose(expandHome(words[1]), base) ?? base;
      continue;
    }
    const command = commandOf(words);
    for (const word of recursiveSearchPaths(command)) {
      const expanded = expandHome(word);
      if (!/[*?$]/.test(expanded) && containsMemoryPath(expanded, { ...host, cwd: () => base })) return word;
    }
    const substituted = part.flatMap((w) => w.quoted.filter((q) => q.double).flatMap((q) => substitutions(q.text)));
    for (const code of [...shellCode(command), ...substituted]) {
      const hit = searchedMemoryPath(code, host, base);
      if (hit !== undefined) return hit;
    }
  }
}

/** 该工具调用会读取的记忆路径或命令片段；没有则为 undefined */
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
    // 无法判断是否只读时，按读取处理
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

/** 宿主提供的函数可能抛错（如没有项目目录时无法取得自动记忆目录）：此时使用默认值 */
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
 * 守卫内部的任何失败都按「不干预」处理：无法判断时交给原版的权限流程，守卫不应导致工具调用失败。
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
