// 脱敏发往服务端分类器的 `safeguards.classifier_context`。这是本项目对原版有意做的改动，见 docs/dev.md#safeguards-脱敏。
//
// 原版在 auto / plan 模式下，每个请求都带一份 classifier_context：权限规则原文、autoMode 槽位的自然语言规则、用户名、
// git 分支与 remote 的 owner/repo、home 目录等。这里在请求发出前统一抹掉可以识别用户、机器和项目的字段，
// 保留分类器判断所需的最小结构：权限模式、平台、当前目录、是否限制读取等标志，以及各字段的形状（字段仍在，值为空），
// 这样服务端的校验（字段必须存在、类型必须对）照常通过。
//
// 抹掉的字段：
//   user_identity                        -> null
//   home_dir                             -> 删除（schema 里可选）
//   rule_roots                           -> {}
//   rules.allow / deny / ask             -> []（权限规则原文，路径里常含用户名和项目名）
//   auto_mode.*                          -> []（用户自己写的自然语言规则）
//   trusted_directories.additional/network -> []（--add-dir 目录和允许的网络域名）
//   git_state.branch / default_branch    -> null
//   git_state.root                       -> null
//   git_state.status.counts              -> 保留 clean 标志，计数置 0 / null
//   git_state.visibility                 -> remotes / visibility_cache 清空，origin 的 host 与 remote 置为占位符
//   chrome_navigation                    -> 只保留 enabled，baselines 置空，tabs 删除（网址与标题）
//   artifacts                            -> 删除
//   prior_turn_context                   -> 同样的 git_state 脱敏；live_cwd 保留
//
// 不抹掉的字段：v、permission_mode、platform、live_cwd、trusted_directories.primary、
//   block_reads_outside_working_directories、restricted、is_remote_mode、classify_all_shell 及其他布尔标志。
// live_cwd 保留是因为分类器要用它判断命令是否在工作目录之内；主请求体里本来就有这个路径。

const PLACEHOLDER = "redacted";

/** 脱敏 git_state；字段形状保持不变 */
function redactGitState(g) {
  if (g === null || typeof g !== "object") return g;
  const out = { ...g, root: null, branch: null, default_branch: null };
  if (g.status !== null && typeof g.status === "object") {
    out.status = {
      ...g.status,
      counts: g.status.counts == null ? g.status.counts : { staged: 0, modified: 0, untracked: null, untracked_normal: null },
      porcelain: null,
    };
  }
  if (g.visibility !== null && typeof g.visibility === "object") {
    const v = g.visibility;
    out.visibility = {
      ...v,
      origin: v.origin == null ? v.origin : { host: PLACEHOLDER, remote: PLACEHOLDER, visibility: v.origin.visibility },
      push_remote: null,
      remotes: [],
      visibility_cache: [],
    };
  }
  return out;
}

/** 脱敏一份 classifier_context，返回新对象；输入不是对象时原样返回 */
export function redactClassifierContext(ctx) {
  if (ctx === null || typeof ctx !== "object") return ctx;
  const out = { ...ctx };
  if ("user_identity" in out) out.user_identity = null;
  delete out.home_dir;
  if ("rule_roots" in out) out.rule_roots = {};
  if (out.rules && typeof out.rules === "object") out.rules = { ...out.rules, allow: [], deny: [], ask: [] };
  if (out.auto_mode && typeof out.auto_mode === "object") {
    out.auto_mode = Object.fromEntries(Object.keys(out.auto_mode).map((k) => [k, Array.isArray(out.auto_mode[k]) ? [] : out.auto_mode[k]]));
  }
  if (out.trusted_directories && typeof out.trusted_directories === "object") {
    out.trusted_directories = { ...out.trusted_directories, additional: [], network: [] };
  }
  if (out.chrome_navigation && typeof out.chrome_navigation === "object") {
    // 浏览器标签页的网址、标题和基线内容：只保留是否启用
    out.chrome_navigation = { enabled: out.chrome_navigation.enabled === true, baselines: {} };
  }
  if ("artifacts" in out) delete out.artifacts; // 工具侧的 artifact 上下文，含工件名称与链接；schema 里可选
  if ("git_state" in out) out.git_state = redactGitState(out.git_state);
  if (Array.isArray(out.prior_turn_context)) {
    out.prior_turn_context = out.prior_turn_context.map((p) =>
      p !== null && typeof p === "object" && p.context !== null && typeof p.context === "object"
        ? { ...p, context: { ...p.context, ...(p.context.git_state !== undefined && { git_state: redactGitState(p.context.git_state) }) } }
        : p,
    );
  }
  return out;
}
