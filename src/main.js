// claw-code 入口：先补齐原版内部定制 Bun 的能力，再加载当前系统的原版 CLI（src/<系统>/cli.js）。
import { dispatchEmbeddedTool } from "./runtime/embedded-tools.js";
import { installBunAnt } from "./runtime/bun-ant.js";
import { PLATFORMS } from "./runtime/platforms.js";

dispatchEmbeddedTool(); // argv0 为 rg / bfs / ugrep 时转交系统工具并退出
const platform = `${process.platform}-${process.arch}`;
if (!PLATFORMS.includes(platform)) {
  process.stderr.write(`claw-code: unsupported platform ${platform} (supported: ${PLATFORMS.join(", ")})\n`);
  process.exit(1);
}
installBunAnt(); // Bun.ant.CellSegmenter
await import(`./${process.platform}/cli.js`);
