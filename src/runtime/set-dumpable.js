// Bun.ant.setDumpable 的实现（仅 Linux）：prctl(PR_SET_DUMPABLE, flag)。
//
// 原版在代码审查会话中先把进程设为不可转储，使同一用户下的其他进程（如审查时运行的命令）无法经 ptrace 或
// /proc/<pid>/mem 读取内存中的 token；设置失败时拒绝启动。调用约定：setDumpable(flag) → 成功时为 true。
import { dlopen, FFIType } from "bun:ffi";

const PR_SET_DUMPABLE = 4;
let prctl;

export function setDumpable(dumpable) {
  // prctl 的参数是 unsigned long，按 64 位传入，避免高位残留导致内核返回 EINVAL
  prctl ??= dlopen("libc.so.6", { prctl: { args: [FFIType.i32, FFIType.u64, FFIType.u64, FFIType.u64, FFIType.u64], returns: FFIType.i32 } }).symbols.prctl;
  return prctl(PR_SET_DUMPABLE, dumpable ? 1 : 0, 0, 0, 0) === 0;
}
