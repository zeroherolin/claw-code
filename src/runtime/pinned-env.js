// 固定的进程环境：时区统一为美国太平洋时间，遥测统一关闭。这是本项目对原版有意做的改动，见 docs/dev.md#固定的环境变量。
//
// 原版从 process.env 读取时区和遥测开关，运行期还会把 settings.json 的 env、插件 hooks 等写回 process.env。
// 这里在加载原版代码之前写入固定值（或删除），然后把 process.env 换成一个 Proxy，对这些键的写入和删除一律忽略。
//
// 子进程与 Worker：Bun 里不传 env 的 Bun.spawn / spawnSync 和 new Worker，继承进程启动时的环境，不包含运行期对
// process.env 的修改；node:child_process 则显式传入当前的 process.env。这里保持这些语义不变，只在每个子进程和 Worker
// 的环境里套用固定的 TZ（Worker 另外套用全部固定值，并在 Worker 内再次调用 pinEnvironment()）。
// 唯一的例外是对 ps 显式指定的 TZ=UTC：原版用 UTC 解析 ps 的 lstart 输出，结果只在本机使用。
import workerThreads from "node:worker_threads";

/** 固定值；undefined 表示该变量不存在，且不能被设置 */
export const PINNED = {
  TZ: "America/Los_Angeles",
  // 遥测：任一项使隐私级别为 no-telemetry，关闭 1P 事件日志、Datadog、BigQuery 指标、错误上报与 GrowthBook
  DISABLE_TELEMETRY: "1",
  DO_NOT_TRACK: "1",
  DISABLE_ERROR_REPORTING: "1",
  CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY: "1",
  // 非必要网络流量：隐私级别为 essential-traffic，关闭登录引导（bootstrap）、penguin_mode、MCP 官方目录、更新检查、
  // 更新日志、claude.ai 插件同步、远程会话、团队记忆同步等一切不是模型对话必需的请求。它蕴含上面的 no-telemetry 级别
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
  // OpenTelemetry 导出（指标、日志、追踪）与增强遥测各有独立开关，不受上面的隐私级别控制
  CLAUDE_CODE_ENABLE_TELEMETRY: undefined,
  CLAUDE_CODE_ENHANCED_TELEMETRY_BETA: undefined,
  ENABLE_ENHANCED_TELEMETRY_BETA: undefined,
  ENABLE_BETA_TRACING_DETAILED: undefined,
};

const isPinned = (k) => typeof k === "string" && Object.hasOwn(PINNED, k);

/** 进程（或 Worker）启动时的环境，已套用全部固定值（含 TZ）；不传 env 的子进程和 Worker 以它为基础。childEnv、workerOptions 对调用方给出的 env 另行套用 TZ，childEnv 并为 ps 保留 UTC 的例外 */
let startupEnv = {};

/** 在环境对象上套用全部固定值（原地修改并返回） */
function applyPinned(env) {
  for (const [k, v] of Object.entries(PINNED)) {
    if (v === undefined) delete env[k];
    else env[k] = v;
  }
  return env;
}

/** 原版只对 ps 显式指定 TZ=UTC（解析 lstart 输出），保留这一处 */
const isPs = (cmd) => Array.isArray(cmd) && /(^|\/)ps$/.test(String(cmd[0]));

/** 子进程的环境：调用方给出的 env（未给出时为启动时的环境），套用固定的 TZ */
function childEnv(env, cmd) {
  const out = { ...(env ?? startupEnv) };
  if (!(out.TZ === "UTC" && isPs(cmd))) out.TZ = PINNED.TZ;
  return out;
}

/** 包装 Bun.spawn / spawnSync：数组形式与对象形式都套用固定的环境；其他调用形式原样转发 */
function wrapSpawn(spawn) {
  return function (cmdOrOptions, options) {
    if (Array.isArray(cmdOrOptions)) return spawn.call(this, cmdOrOptions, { ...options, env: childEnv(options?.env, cmdOrOptions) });
    if (cmdOrOptions && typeof cmdOrOptions === "object") return spawn.call(this, { ...cmdOrOptions, env: childEnv(cmdOrOptions.env, cmdOrOptions.cmd) }, options);
    return spawn.call(this, cmdOrOptions, options);
  };
}

/** Worker 中最先运行的模块：在 Worker 内再次固定环境，使 Worker 中的 process.env、子进程受同样的约束 */
const WORKER_PRELOAD = new URL("./pinned-env-worker.js", import.meta.url).href;

/** Worker 的选项：环境为调用方给出的 env（未给出时为启动时的环境）套用全部固定值，并加上 preload */
function workerOptions(options) {
  const out = { ...options };
  const env = out.env === undefined ? startupEnv : out.env;
  if (env !== null && typeof env === "object") out.env = applyPinned({ ...env }); // 传 SHARE_ENV 等非对象值时原样保留
  out.preload = [WORKER_PRELOAD, ...[out.preload ?? []].flat()];
  return out;
}

/** 包装 Worker 构造函数；用 Proxy 保持 instanceof、静态成员与原构造函数一致 */
function wrapWorker(Worker) {
  return new Proxy(Worker, {
    construct: (target, args, newTarget) => Reflect.construct(target, [args[0], workerOptions(args[1])], newTarget === undefined ? target : newTarget),
  });
}

const PINNED_MARK = Symbol.for("claw-code.pinned-env");

/** 写入固定值、锁定 process.env 中的这些键，并包装 Bun.spawn / spawnSync / Worker；每个线程调用一次 */
export function pinEnvironment() {
  if (globalThis[PINNED_MARK]) return;
  globalThis[PINNED_MARK] = true;
  const env = process.env;
  startupEnv = applyPinned({ ...env });
  applyPinned(env); // 写入 TZ 会立即改变 Date 与 Intl 的时区
  process.env = new Proxy(env, {
    set: (t, k, v) => (isPinned(k) || Reflect.set(t, k, v), true),
    deleteProperty: (t, k) => isPinned(k) || Reflect.deleteProperty(t, k),
    defineProperty: (t, k, d) => isPinned(k) || Reflect.defineProperty(t, k, d),
  });
  Bun.spawn = wrapSpawn(Bun.spawn);
  Bun.spawnSync = wrapSpawn(Bun.spawnSync);
  globalThis.Worker = wrapWorker(globalThis.Worker);
  workerThreads.Worker = wrapWorker(workerThreads.Worker); // 覆盖 require("worker_threads").Worker；ESM 具名导入不受这一替换影响；生成代码中只有 require 与全局两种用法
}
