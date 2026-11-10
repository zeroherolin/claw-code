// 脱敏 auto / plan 模式下发给分类器的上下文。这是本项目对原版有意做的改动，见 docs/dev.md#safeguards-脱敏。
//
// 分类器有两条路径，本模块分别处理：
//   服务端分类器：主请求里的 `safeguards.classifier_context`，由 redactClassifierContext 整体脱敏；
//   本地分类器（端点没有实现服务端分类器时的回退，另发一个请求让模型判断）：提示词里的规则与用户名由生成源码上的
//     补丁去掉，redactRepoVisibility、redactGitStatus 处理插在待判断命令之前的两种元信息行。
//
// 原版在 auto / plan 模式下，每个请求都带一份 classifier_context：权限规则原文、autoMode 槽位的自然语言规则、用户名、
// git 分支与 remote 的 owner/repo、home 目录等。这里在请求发出前统一清除可以识别用户、机器和项目的字段，
// 保留分类器判断所需的最小结构：权限模式、平台、当前目录、是否限制读取等标志，以及各字段的形状（字段仍在，值为空），
// 使服务端的校验（字段必须存在、类型必须正确）仍然通过。
//
// 清除的字段：
//   user_identity                        -> null
//   home_dir                             -> 删除（schema 里可选）
//   rule_roots                           -> {}
//   rules.allow / deny / ask             -> []（权限规则原文，路径里常含用户名和项目名）
//   auto_mode.*                          -> []（用户编写的自然语言规则）
//   trusted_directories.additional/network -> []（--add-dir 目录和允许的网络域名）
//   git_state.branch / default_branch    -> null
//   git_state.root                       -> null
//   git_state.status.counts              -> 保留 clean 标志，计数置 0 / null
//   git_state.visibility                 -> remotes / visibility_cache 清空，origin 的 host 与 remote 置为占位符
//   chrome_navigation                    -> 只保留 enabled，baselines 置空，tabs 删除（网址与标题）
//   artifacts                            -> 删除
//   prior_turn_context                   -> 同样的 git_state 脱敏；live_cwd 保留
//
// 保留的字段：v、permission_mode、platform、live_cwd、trusted_directories.primary、
//   block_reads_outside_working_directories、restricted、is_remote_mode、classify_all_shell 及其他布尔标志。
// live_cwd 保留是因为分类器要用它判断命令是否在工作目录之内；主请求体中已包含这个路径。
//
// 本地分类器的元信息行：
//   repoVisibility  -> remote、branch 只在待判断的命令中原样出现时保留（命令在同一个请求里），否则 remote 替换为占位符、
//        branch 删除；visibility 保留。remote 为空串表示未解析出仓库，原样保留
//   gitStatus       -> porcelain 清单（含文件名）替换为由它统计出的计数；clean 标志与计数原样保留

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

/**
 * 本地分类器的 repoVisibility 元信息：{ remote, branch?, visibility }。
 * @param command 待判断的命令；其中原样出现的仓库名、分支名不属于新增信息，保留后分类器才能把该条目与命令对应
 */
export function redactRepoVisibility(entry, command) {
  if (entry === null || typeof entry !== "object") return entry;
  const shown = (value) => typeof value === "string" && value !== "" && typeof command === "string" && command.includes(value);
  const { branch, ...out } = entry;
  if (typeof out.remote === "string" && out.remote !== "" && !shown(out.remote)) out.remote = PLACEHOLDER;
  if (shown(branch)) out.branch = branch;
  return out;
}

/**
 * 本地分类器的 gitStatus 元信息：{ clean: true }、{ staged, modified, untracked } 或 { porcelain }。
 * 只有 porcelain 带文件名：替换为计数（统计方式与原版相同）。清单非空但无法统计时返回 { clean: false }，
 * 避免把有改动的工作区报告为干净。
 */
export function redactGitStatus(status) {
  if (status === null || typeof status !== "object" || typeof status.porcelain !== "string") return status;
  let staged = 0, modified = 0, untracked = 0;
  for (const line of status.porcelain.split("\n")) {
    if (!/^[ MADRCUT?!]{2} /.test(line)) continue;
    if (line.startsWith("??")) untracked++;
    else {
      if (line[0] !== " ") staged++;
      if (line[1] !== " ") modified++;
    }
  }
  return staged + modified + untracked > 0 ? { staged, modified, untracked } : { clean: false };
}
