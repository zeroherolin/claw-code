// 作为 Worker 的 preload 运行（见 pinned-env.js）：Worker 有独立的 process.env 与 Bun.spawn，需要在其中再次固定。
import { pinEnvironment } from "./pinned-env.js";

pinEnvironment();
