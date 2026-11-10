// dev 分支有意与原版不同的内容（见 docs/dev.md）。对比测试比较请求前，在两边的请求（序列化成 JSON 字符串之后）上
// 依次套用这里的 [正则, 替换]，其余部分仍逐字比较。每条只匹配一处已知的文字，别处出现任何变化仍会被报告。
//
//   记忆政策段落：系统提示词 `# Memory` 一节之后追加的 "# Memory access policy"。
//   日期：对话里的 "Today's date is YYYY-MM-DD."。dev 固定使用美国太平洋时间，原版用本机时区；
//         在本机时区与太平洋时间相差一天的时段（如东八区的 0 点到 16 点），两边的日期不同。
//         日期的取值由 test/dev/runtime.test.js 的 pinned-env 用例验证，这里只是不让它影响其余内容的比较。

// 记忆政策段落的完整原文；与 src/<系统>/context/org-memory-writes-setting-changed.js 中追加的文字逐字相同，
// 由 test/dev/intentional.test.js 校验两者一致，所以措辞改了而这里没跟着改时测试会失败，而不是悄悄漏掉
export const MEMORY_POLICY = "# Memory access policy\nOnly the paths of memory files are sent to you; their contents are not loaded into this conversation. Do not read, search, or open files in the memory directory unless the user explicitly asks you to. If the user asks you to remember or forget something, you may open just the files needed to do that.";
// 请求被序列化为 JSON 字符串后再替换，所以换行写成字面的 \n 两个字符
const JSON_POLICY = JSON.stringify("\n\n" + MEMORY_POLICY).slice(1, -1);

export const INTENTIONAL = [
  [new RegExp(JSON_POLICY.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), ""],
  [/Today's date is \d{4}-\d{2}-\d{2}\./g, "Today's date is <DATE>."],
];
