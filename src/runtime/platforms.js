// 支持的平台。每个系统有一份生成源码 src/<系统>/，适用于该系统列出的全部架构；
// 第一个架构是提取时的基准，其余架构用于还原源码中硬编码的架构名（见 extract/unfold.js）。
// 第一个系统是跨系统对齐的基准（见 extract/align.js）；新增的系统加在已有系统之后。
export const SYSTEMS = { darwin: ["arm64"], linux: ["x64", "arm64"] };

/** 全部平台名 <系统>-<架构>，如 linux-x64 */
export const PLATFORMS = Object.entries(SYSTEMS).flatMap(([system, arches]) => arches.map((arch) => `${system}-${arch}`));
