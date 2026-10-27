// claw-code 入口：先补齐原版内部定制 Bun 的能力，再加载原版 CLI。
import { dispatchEmbeddedTool } from "./runtime/embedded-tools.js";
import { installBunAnt } from "./runtime/bun-ant.js";

dispatchEmbeddedTool(); // argv0 为 rg / bfs / ugrep 时转交系统工具并退出
installBunAnt(); // Bun.ant.CellSegmenter
await import("./cli.js");
