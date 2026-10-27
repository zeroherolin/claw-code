// 补齐内部定制 Bun 才有的 Bun.ant.* 原生 API。
//
// 原版运行在 @anthropic-ai/bun-internal 上，代码通过 Bun.ant.* 调用 12 个原生能力。
// 公开版 Bun 没有 Bun.ant；其中 11 个调用点自带回退（try/catch 或 typeof 检查后降级），
// 只有 CellSegmenter 没有回退——终端渲染器的每一行输出都依赖它。因此这里只需补这一个。
//
//   CellSegmenter              终端渲染：文本 → 屏幕格子        → 本项目 JS 实现（cell-segmenter.js）
//   ttyName / loginTty         后台会话的控制终端               → 原版回退：跳过
//   getPeerPid / getPeerUid    daemon UDS 对端校验               → 原版回退：返回 null（只记录警告）
//   memoryPressureLevel        macOS 内存压力（后台任务降载）    → 原版回退：改用 os.freemem()
//   posixFsAt                  macOS 沙箱 anchor 后端           → 原版回退：该后端不启用（记录警告）
//   waitForUrlEvent            claude:// 深链接（.app 内运行时） → 原版回退：返回 null
//   windows*                   仅 Windows                        → 非 Windows 平台不调用
import { CellSegmenter } from "./cell-segmenter.js";

/** 在公开版 Bun 上安装 Bun.ant.CellSegmenter；不覆盖已有成员，在内部定制 Bun 上不做任何事 */
export function installBunAnt() {
  if (typeof Bun.ant?.CellSegmenter === "function") return;
  const ant = Object.assign(Bun.ant ?? {}, { CellSegmenter });
  Object.defineProperty(Bun, "ant", { value: ant, configurable: true, writable: true, enumerable: false });
}
