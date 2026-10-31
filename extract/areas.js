// 功能区划分：决定每个模块放进 src/ 下的哪个目录。
//
// 判定顺序:
//   1. 已识别出的工具 / 斜杠命令 / skill 模块 → tools/ commands/ skills/
//   2. 导出名命中 EXPORT_NAME_HINTS → 对应区域
//   3. 对源码（大模块取首尾采样）按 VENDOR_RULES 与 APP_RULES 计分：
//      第三方库得分须明显领先（≥ 1.5 倍）才归入 vendor/<库名>，否则取应用区域最高分；
//      含 APP_MARKERS 的模块不参与 vendor 计分
//   4. 都不匹配 → shared/
// 每条计分规则为 [区域, 正则, 权重]；区域名即目录名。
import { HEADER_RE } from "./lib.js";
import { exportNames, isGoodName } from "./naming.js";

const VENDOR_RULES = [
  ["vendor/react", /react\.transitional\.element|__SECRET_INTERNALS|react-reconciler|DetermineComponentFrameRoot|useSyncExternalStore|react\.memo_cache_sentinel/g, 3],
  ["vendor/ink", /ink-virtual-text|kittyGraphics|truncate-middle|truncate-start|ink-text|ink-box/g, 3],
  ["vendor/yoga", /YGNode|yoga|MeasureMode|YGEdge/g, 3],
  ["vendor/zod", /invalid_union|unrecognized_keys|ZodError|invalid_type|not_multiple_of/g, 3],
  ["vendor/highlight", /hljs|beginKeywords|title\.function|variable\.language/g, 3],
  ["vendor/opentelemetry", /opentelemetry|droppedAttributesCount|startTimeUnixNano|aggregationTemporality|OTLP/g, 3],
  ["vendor/grpc", /grpc\.|google\.protobuf|UninterpretedOption|protobufjs|@grpc/g, 3],
  ["vendor/aws-sdk", /smithy|x-amzn|AWS4-HMAC|@aws-sdk|aws-crypto|AWS_CONTAINER_/g, 3],
  ["vendor/google-auth", /googleapis\.com|x-goog-|universe_domain|gaxios|google-auth-library/g, 3],
  ["vendor/azure-identity", /login\.microsoftonline\.com|CredentialUnavailableError|@azure\/|msal/g, 3],
  ["vendor/mcp-sdk", /resources\/templates\/list|notifications\/initialized|sampling\/createMessage|elicitation\/create|completion\/complete/g, 3],
  ["vendor/parse5", /http:\/\/www\.w3\.org\/1999\/xhtml|annotation-xml|LATIN_CAPITAL_A|CARRIAGE_RETURN/g, 3],
  ["vendor/ajv", /\bajv\b|schemaPath|\$dynamicRef|keywordLocation/g, 2],
  ["vendor/yaml", /YAMLException|YAMLParseError|yaml-language/g, 3],
  ["vendor/marked", /marked|blockquote|tokenizer\.|\bmarkdown-it\b/g, 1],
  ["vendor/acorn", /parseDynamicImport|acorn|ecmaVersion/g, 2],
  ["vendor/sharp", /sharp|libvips/g, 3],
  ["vendor/undici", /undici|Sec-WebSocket|WebSocketStream/g, 2],
  ["vendor/semver", /SEMVER_SPEC_VERSION|semver/g, 2],
  ["vendor/jose", /SignJWT|jwtVerify|JWSInvalid|importPKCS8|JWKSNoMatchingKey/g, 3],
  ["vendor/anthropic-sdk", /x-stainless|anthropic-version|class Anthropic\b|APIUserAbortError/g, 2],
  ["vendor/lodash", /lodash|__lodash_hash_undefined__/g, 3],
  ["vendor/chalk", /chalk|ansi256|ansi16m/g, 2],
  ["vendor/commander", /commander|helpOption|allowExcessArguments/g, 1],
];

// Claude Code 自身代码的标志：遥测事件、CLAUDE_CODE_* 环境变量、构建宏、产品名。第三方库不会出现这些；
// 打包时应用代码可能与库代码合进同一个 chunk，这样的模块不归入 vendor/。
// 检查时跳过每个模块开头的法律声明（其中也有 "Claude Code"）
const APP_MARKERS = /\btengu_[a-z0-9_]+|\bCLAUDE_CODE_[A-Z0-9_]+|\bHOOKS_WORKER_URL\b|Claude Code/;

const APP_RULES = [
  ["tools", /checkPermissions|renderToolUseMessage|renderToolResultMessage|mapToolResultToToolResultBlockParam|isConcurrencySafe|maxResultSizeChars/g, 3],
  ["commands", /type: "(?:local|local-jsx|prompt)",\s*name:|argumentHint|getPromptForCommand|userInvocable/g, 3],
  ["skills", /SKILL\.md|SKILL_FILES|SKILL_MD|skillDescription|isSkillPreload/g, 3],
  ["plugins", /plugin\.json|marketplace|\.claude-plugin|pluginRoot|installedPlugins/g, 2],
  ["mcp", /mcp__|mcpServers|McpServer|mcp_|claudeai-proxy|\.mcp\.json/g, 2],
  ["permissions", /permission|allowedTools|denied_by_rule|bypassPermissions|acceptEdits|dontAsk|PermissionRequest|ruleBehavior/g, 1],
  ["settings", /policySettings|projectSettings|localSettings|userSettings|managedSettings|settings\.json|flagSettings/g, 1],
  ["hooks", /PreToolUse|PostToolUse|UserPromptSubmit|SessionStart|SubagentStop|PreCompact|hook_event_name|hooksModule/g, 2],
  ["api", /anthropic-beta|content_block_delta|message_start|stop_reason|max_tokens|x-api-key|messages\/count_tokens/g, 2],
  ["models", /claude-opus|claude-sonnet|claude-haiku|claude-fable|modelOptions|effortLevel/g, 1],
  ["auth", /oauth|refresh_token|access_token|keychain|apiKeyHelper|OAUTH_|login\.|logout/g, 1],
  ["agents", /subagent|teammate|in_process_teammate|agentType|agentId|AgentTool|fleet_view/g, 1],
  ["tasks", /task-notification|background task|local_workflow|TaskCreate|TaskList|backgrounding/g, 1],
  ["workflows", /workflow|Workflow/g, 1],
  ["artifacts", /artifact_|Artifact|claude\.ai\/code\/artifact|workshop/g, 1],
  ["remote", /ccr_|remote_|teleport|cloud_headless|session-tunnel|bridge|self_hosted|selfHosted/g, 1],
  ["context", /compact|autocompact|CLAUDE\.md|memory|summar|context_window|contextWindow/gi, 1],
  ["telemetry", /tengu_|growthbook|logEvent|datadog|sentry|telemetry/gi, 1],
  ["ui", /useState|useEffect|useInput|useMemo|flexDirection|dimColor|borderStyle|paddingLeft|marginTop/g, 1],
  ["shell", /\bbash\b|\bzsh\b|PowerShell|spawn\(|child_process|sandbox|seccomp|bwrap/gi, 1],
  ["git", /\bgit\b|\.gitignore|worktree|gh pr|commit|branch/g, 1],
  ["fs", /readFile|writeFile|ripgrep|\brg\b|glob|realpath|lstat|readdir/g, 1],
  ["ide", /vscode|jetbrains|IDE_|ide_|\blsp\b|LSP|languageServer/g, 1],
  ["web", /WebFetch|WebSearch|web_search|turndown|html-to-markdown|cheerio/g, 2],
  ["computer-use", /audio-capture|computer-use|screenshot|voice|microphone/gi, 1],
  ["cli", /process\.argv|\.option\("|\.command\("|--print|--output-format|isTTY/g, 1],
  ["terminal", /\\x1b\[|\\u001b\[|kitty|iTerm|alacritty|TERM_PROGRAM|termios|setRawMode/g, 1],
  ["chrome", /claude-in-chrome|chrome_|Chrome extension|native messaging/gi, 2],
  ["design", /claude\.ai\/design|design-sync|DesignSync|design_system/g, 2],
];

// 由导出名关键字直接决定区域（优先级高于正文打分）
const EXPORT_NAME_HINTS = [
  [/selfHostedRunner/i, "remote"],
  [/remoteControl|teleport|ccr|cloudSession|bridge/i, "remote"],
  [/permission|bypass|autoMode|classifier/i, "permissions"],
  [/setting|config(?!ure)/i, "settings"],
  [/hook/i, "hooks"],
  [/mcp/i, "mcp"],
  [/plugin|marketplace/i, "plugins"],
  [/skill/i, "skills"],
  [/oauth|keychain|apiKey|login|token|auth/i, "auth"],
  [/telemetry|otlp|metric|analytic|logEvent/i, "telemetry"],
  [/worktree|git/i, "git"],
  [/agent|teammate|swarm|fleet/i, "agents"],
  [/workflow/i, "workflows"],
  [/artifact/i, "artifacts"],
  [/compact|memory|claudeMd|context/i, "context"],
  [/model|effort|fastMode/i, "models"],
  [/theme|render|screen|dialog|mount|ink/i, "ui"],
  [/shell|bash|sandbox|spawn|pty/i, "shell"],
  [/ide|lsp|vscode/i, "ide"],
  [/daemon|background|bgSpare|supervisor|routine/i, "tasks"],
  [/onboarding|trust/i, "onboarding"],
  [/argv|cli|startup|preload|fastPath|earlyInput/i, "cli"],
];

const SAMPLE = 300_000;

/**
 * @param id    chunk id
 * @param src   原版模块源码（未格式化）
 * @param owners { tool, command, skill }：各自定义了工具 / 命令 / 用到了 skill 资源的 chunk id 集合
 * @returns 目录名
 */
export function classify(id, src, owners) {
  if (owners.tool.has(id)) return "tools";
  if (owners.command.has(id)) return "commands";
  if (owners.skill.has(id)) return "skills";
  const text = src.length > SAMPLE * 2 ? src.slice(0, SAMPLE) + src.slice(-SAMPLE) : src;
  for (const e of exportNames(src).filter(isGoodName)) for (const [re, area] of EXPORT_NAME_HINTS) if (re.test(e)) return area;
  const score = (rules) => rules.map(([a, re, w]) => [a, (text.match(re) || []).length * w]).filter((x) => x[1] > 0).sort((a, b) => b[1] - a[1]);
  const v = APP_MARKERS.test(src.replace(HEADER_RE, "")) ? [] : score(VENDOR_RULES), a = score(APP_RULES);
  if (v[0] && (!a[0] || v[0][1] >= a[0][1] * 1.5)) return v[0][0];
  if (a[0]) return a[0][0];
  return "shared";
}
