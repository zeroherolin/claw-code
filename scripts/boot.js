// 单文件可执行程序的引导入口（由 scripts/build.js 编译）。
// 源码作为原始文件嵌入在 /$bunfs/root/src，这里在运行期加载入口，保持模块间相对路径不变。
await import(process.platform === "win32" ? "B:/~BUN/root/src/main.js" : "/$bunfs/root/src/main.js");
