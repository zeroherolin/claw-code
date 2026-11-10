// 有意与原版不同的内容。对比测试比较请求前，对原版与本项目的请求（序列化成 JSON 字符串之后）依次应用
// 下列 [正则, 替换]，其余部分仍逐字比较。
//
// dev 分支登记了两处（见 docs/dev.md#与对比测试的关系）。每条只匹配一处已知的文字，其他位置出现的任何变化仍会被报告。
//   记忆政策段落：系统提示词 `# Memory` 一节之后追加的 "# Memory access policy"。
//   日期：对话里的 "Today's date is YYYY-MM-DD."。dev 固定使用美国太平洋时间，原版使用本机时区；
//         本机时区与太平洋时间相差一天的时段内（如东八区的 0 点到 16 点），日期不同。
//         日期的取值由 test/dev/runtime.test.js 的 pinned-env 用例验证，此处只是避免它影响其余内容的比较。

// 记忆政策段落的完整原文，与 src/<系统>/context/org-memory-writes-setting-changed.js 中追加的文字逐字相同。
// test/dev/intentional.test.js 校验二者一致：补丁中的措辞改动而此处未同步时，测试失败
export const MEMORY_POLICY = "# Memory access policy\nOnly the paths of memory files are sent to you; their contents are not loaded into this conversation. Do not read, search, or open files in the memory directory unless the user explicitly asks you to. If the user asks you to remember or forget something, you may open just the files needed to do that.";
// 请求序列化为 JSON 字符串后再替换，因此换行写成字面的 \n 两个字符
const JSON_POLICY = JSON.stringify("\n\n" + MEMORY_POLICY).slice(1, -1);

export const INTENTIONAL = [
  [new RegExp(JSON_POLICY.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), ""],
  [/Today's date is \d{4}-\d{2}-\d{2}\./g, "Today's date is <DATE>."],
];
