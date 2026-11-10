# 标识信息与发送位置

本文列出 Claude Code 2.1.310 使用的各种标识：怎么生成、存在哪里、发到哪里。只记录字段和数据流，不记录真实账号、设备或凭据的值。

- 模块路径对两个系统都成立，位置用"路径「特征字符串」"标注，写法同 [architecture.md](architecture.md)。
- 标注"实测"的结论在隔离 HOME 下用假 API 验证过；其余依据源码。OAuth、设备注册和云服务相关的标识没有用真实账号验证。

## 模型请求中的标识

每个 Messages 请求都带 `metadata.user_id`。它是一个 JSON 字符串，内部还有一层对象：

```json
{
  "metadata": {
    "user_id": "{\"device_id\":\"<64 位十六进制>\",\"account_uuid\":\"<账号 UUID 或空串>\",\"session_id\":\"<会话 UUID>\"}"
  }
}
```

- 子会话另带 `parent_session_id`，特定远程路由另带 `tk`，`CLAUDE_CODE_EXTRA_METADATA` 可以附加字段。组装见 `core/system-prompt-blocks.js`「CLAUDE_CODE_EXTRA_METADATA env var must be a JSON object」。
- 默认请求头 `X-Claude-Code-Session-Id` 携带同一个会话 ID，见 `api/anthropic-client.js`「"cli-bg"」。
- 设置 `DISABLE_TELEMETRY` 或 `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 不会去掉这些字段，也不会删除本地保存的标识。

实测：同一个 HOME 连续启动两个会话，`device_id` 都是 64 位十六进制且相同，`session_id` 不同，会话请求头等于 metadata 中的会话 ID；用 API key 而没有登录账号时 `account_uuid` 为空串。

下面这些只在一方端点形态下发送（实测）；自定义 `ANTHROPIC_BASE_URL`（中转站）时都不带：

| 位置 | 内容 |
|---|---|
| 请求头 `x-claude-code-prompt-id` | 这一问的提示 ID（UUID），同一问的工具轮相同 |
| 请求头 `x-client-request-id` | 每个请求各自生成 |
| 系统提示词首段的账单头 `cc_prompt_id` | 同 `x-claude-code-prompt-id` |
| 账单头 `cc_prev_req` | 上一个请求的服务端 `request-id`（`req_…`），第一个请求不带 |
| 账单头 `cc_prompt_index`、`cc_turn_index` | 本会话的第几问、第几轮，由历史算出 |
| 请求体 `thread` | 消息线程：第一个请求为 `create`，之后为 `continue` 并带 `previous_message_id` |
| 请求体 `diagnostics.previous_message_id` | 上一条 API 消息的 ID（`msg_…`），第一个请求为 `null` |

两种形态下账单头都带 `cc_version`，末尾 3 位是由首条用户消息的几个字符算出的指纹，见 `context/team-memory-sync.js`「[4, 7, 20]」。

## 标识一览

| 标识 | 生成与保存 | 用途与发送位置 |
|---|---|---|
| `userID` → `device_id` / `deviceId` | 首次需要时生成 32 个随机字节，编码为 64 位十六进制，保存在全局配置 | 模型请求的 `metadata.user_id.device_id`，也用于遥测。它是安装配置中的随机标识，生成过程不读取 MAC、硬盘序列号或硬件 UUID |
| `machineID` | 另一份独立的 32 字节随机值，保存在全局配置 | 错误上报用其前 12 位作为 `host_name_redacted`。模型请求的 `device_id` 用的是 `userID`，不是这个值 |
| `sessionId` / `session_id` | 新会话默认使用 `crypto.randomUUID()`；恢复会话可沿用原 ID，部分入口允许指定；保存在会话记录中 | 关联会话、续会话、日志、hooks、SDK 输出；随模型请求的 metadata 和默认会话请求头发送。记录文件通常为 `projects/<编码后的目录>/<sessionId>.jsonl` |
| `parent_session_id` | 从父会话、CLI 子会话或团队上下文继承 | 子会话的模型 metadata 用它关联父会话；普通独立会话不带 |
| `accountUuid` / `account_uuid` | 登录资料返回，缓存在全局配置的 `oauthAccount` 等身份状态中；远程入口也可由环境传入 | 模型 metadata 的 `account_uuid`，以及需要账号的 API。没有可用的账号资料时为空串；使用 API key 的请求仍由凭据鉴权 |
| `organizationUuid` / `organization_uuid` | 登录资料返回，缓存在 `oauthAccount` 等身份状态中 | 组织策略、权限、计费和组织 API 路径；不在模型 metadata 的固定字段里 |
| `remoteControlMachineId` → `machine_id` | 全局配置中保存的独立 UUID | Remote Control 注册主机时发送，区别于上面的 `machineID` 和 `device_id` |
| `deviceUUID` / `rowPk` / `bound_device_uuid` | 服务端注册远程设备后返回的 UUID，与本地 P-256 设备密钥关联，按账号保存 | 远程工具执行、设备归属、会话绑定。macOS 优先用 Keychain 的 `Claude Code-device-keys` 项；文件后端路径为 `~/.claude/.device-keys.json` |
| `remoteSessionId`、`environment_id`、`work_id`、容器 ID | 远程服务创建，或由远程运行环境传入 | 云端会话、执行环境、工作项及容器关联；特定路由带 `x-claude-remote-session-id` 和 `x-claude-remote-container-id` |
| `agentId` / `parentAgentId`、团队与 workflow ID | 本地代理运行时或远程服务生成；普通本地代理 ID 为 `a` 加 8 字节随机十六进制，可带类型前缀 | 子代理、团队和 workflow 关联；特定请求带 `x-claude-code-agent-id`、`x-claude-code-parent-agent-id`，相关工具调用和结果也可能带这些字段 |
| 提示 ID、查询链 ID、请求 ID | 提示、查询链和请求分别创建标识；服务端另外返回 `request-id`（`req_…`） | 见上一节的表；服务端 `request-id` 用于响应、排错和重试 |
| 消息 `uuid`、API 消息 `id`、`tool_use.id` | 本地消息 UUID 与 API 的 `msg_…`、`toolu_…` 是不同的标识 | 本地历史关联和去重；工具结果通过 `tool_use_id` 关联模型发出的调用，后续轮次都要发送 |
| MCP `sessionId` / `mcp-session-id` | MCP 服务在初始化时返回，客户端连接实例保存 | 在后续 MCP HTTP 请求的 `mcp-session-id` 头中发送，目的地是对应的 MCP 服务，与对话的会话 ID 无关 |
| `X-Mcp-Client-Session-Id` | 取当前的会话 ID | claude.ai 连接器经官方 MCP 代理调用时的请求头。代理连接在启动时建立，整条连接共用服务端下发的 `mcp-session-id`；工具调用的 `_meta` 带 `claudecode/toolUseId`（即 `tool_use` 的 id），部分连接器还带 `anthropic/requestId` |
| OAuth `CLIENT_ID`、云服务的 workspace / project / tenant ID | OAuth client ID 是应用标识常量，可按配置覆盖；云服务的 ID 来自所选提供方的配置和身份 | 登录、选择工作区或云租户。OAuth client ID 不是每台设备独有的；API key、OAuth token 和设备私钥是凭据，不能当成普通 ID 处理 |
| `summonSidKey` | 全局配置中的 32 字节随机密钥 | 经 HMAC 派生 16 位十六进制的会话标记，见 `tasks/artifact-changed.js`「createHmac」。它是本地密钥，不是可以公开的标识 |

全局配置通常是 `~/.claude.json`，配置目录和存储后端可以改变它的位置。`claw-code` 与已安装的 `claude` 共用配置、会话和登录凭据（见 [runtime.md](runtime.md#安装与共存)），因此也共用上面这些保存在本地的标识；换一个命令名并不建立独立的身份。

`/ultrareview` 的预检请求也在 `X-Claude-Code-Session-Id` 里带会话 ID，见 `git/review-remote-precondition-failed.js`「/v1/ultrareview/preflight」。

## 源码位置

| 内容 | 位置 |
|---|---|
| `userID` 的生成与保存 | `settings/global-config-and-gates.js`「generatedUserID」 |
| `machineID` 的生成与保存 | `settings/global-config-and-gates.js`「generatedMachineID」 |
| `summonSidKey` 的生成与保存 | `settings/global-config-and-gates.js`「generatedSummonSidKey」 |
| `remoteControlMachineId` | `settings/global-config-and-gates.js`「remoteControlMachineId」 |
| `oauthAccount`（账号与组织 UUID） | `settings/global-config-and-gates.js`「oauthAccount」 |
| 会话的创建与当前会话 ID | `context/not-admin-owned.js`「project: { originalCwd」 |
| UUID 与本地代理 ID 的生成 | `shared/chunk-3b9c376b.js`「randomUUID」 |
| 账单头的组装 | `auth/claude-desktop-3p.js`「cc_prev_req」 |
| P-256 设备密钥、按账号的存储与远程设备注册 | `auth/device-key-store.js`「Claude Code-device-keys」；文件后端的文件名在 `shell/sandbox.js`「".device-keys.json"」 |
| 桥接环境与主机注册 | `remote/bridge-env-reregister.js`「machine_id」 |
| 错误上报的 `host_name_redacted` | `remote/claude-code-error-tracking.js`「host_name_redacted」 |
| MCP 传输会话 | `auth/mcp-session-id.js`「mcp-session-id」 |
| claude.ai 连接器代理的客户端会话头 | `mcp/apply-capability-serve-time-miss.fa8e.js`「X-Mcp-Client-Session-Id」，另一份副本在 `mcp/apply-capability-serve-time-miss.848f.js`「X-Mcp-Client-Session-Id」 |
