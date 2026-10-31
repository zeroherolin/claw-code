// 内嵌命令行工具分发。
//
// 原版的内部定制 Bun 把 ripgrep、bfs、ugrep 编译进了同一个可执行文件：进程以 argv0 = rg / bfs / ugrep
// 启动时不运行 JS，直接作为对应工具执行。Claude Code 依赖这一点（Bash 工具 shell 快照中的
// find / grep / rg 函数、ripgrep 的 embedded 模式，见 docs/runtime.md）。
//
// 公开版 Bun 没有这些工具，这里在入口最前面按 argv0 转交给系统里的同名工具；bfs、ugrep 不存在时
// 按原版自己的回退语义改用 find、grep，并去掉它们不认识的参数。
import { spawnSync } from "node:child_process";
import { basename } from "node:path";

const TOOLS = {
  rg: { install: "ripgrep" },
  bfs: { install: "bfs", fallback: "find" },
  ugrep: { install: "ugrep", fallback: "grep" },
};

/** 回退到 find / grep 时去掉 bfs / ugrep 专有的参数 */
function fallbackArgs(tool, args) {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (tool === "bfs" && a === "-S") { i++; continue; } // 搜索策略，带一个值
    if (tool === "bfs" && a === "-regextype" && process.platform === "darwin") { i++; continue; } // BSD find 无此选项
    if (tool === "ugrep" && ["--ignore-files", "--hidden", "-I", "-G"].includes(a)) continue;
    out.push(a);
  }
  return out;
}

/** PATH 中的命令，排除自身（避免回调自己形成递归） */
function which(cmd) {
  const p = Bun.which(cmd);
  return p && p !== process.execPath ? p : null;
}

function exec(file, args, argv0) {
  const r = spawnSync(file, args, { stdio: "inherit", argv0 });
  if (r.error) {
    process.stderr.write(`${argv0}: ${r.error.message}\n`);
    process.exit(127);
  }
  process.exit(r.status ?? (r.signal ? 128 : 1));
}

/** argv0 是内嵌工具名时转交系统工具并退出进程；否则立即返回 */
export function dispatchEmbeddedTool() {
  const name = basename(process.argv0 ?? "");
  const tool = TOOLS[name];
  if (!tool) return;
  const args = process.argv.slice(2); // [bun, 入口脚本, ...参数]
  const own = which(name);
  if (own) exec(own, args, name);
  const fallback = tool.fallback && which(tool.fallback);
  if (fallback) exec(fallback, fallbackArgs(name, args), tool.fallback);
  process.stderr.write(`${name}: not found. Install the ${tool.install} package to use this feature (e.g. \`brew install ${tool.install}\` or \`apt install ${tool.install}\`).\n`);
  process.exit(127);
}
