// 作为 Worker 的 preload 运行（见 pinned-env.js）：Worker 有自己的 process.env 与 Bun.spawn，需要在其中再固定一次。
import { pinEnvironment } from "./pinned-env.js";

pinEnvironment();
