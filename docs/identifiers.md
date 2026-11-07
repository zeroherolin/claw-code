# 标识信息与发送位置

本页依据当前 dev 的源码和隔离 HOME 下的假 API 验证整理。只记录字段和数据流，不记录真实账号、设备或凭据的值。两个平台使用相同的语义路径，下面链接以 macOS 源码为例。

关闭遥测和非必要网络流量不会删除本地标识，也不会去掉模型请求中的标识。普通 Messages 请求仍有：

```json
{
  "metadata": {
    "user_id": "{\"device_id\":\"<64位十六进制>\",\"account_uuid\":\"<账号UUID或空串>\",\"session_id\":\"<会话UUID>\"}"
  }
}
```

`metadata.user_id` 是一个 JSON 字符串，内部还有一层对象。子会话可以增加 `parent_session_id`，特定远程路由可以增加 `tk`；`CLAUDE_CODE_EXTRA_METADATA` 可以附加额外字段。组装见 [system-prompt-blocks.js](../src/darwin/core/system-prompt-blocks.js) 的 `function t2e`。默认请求头 `X-Claude-Code-Session-Id` 也携带当前会话 ID，见 [anthropic-client.js](../src/darwin/api/anthropic-client.js) 的 `function ml`。

| 标识 | 生成与保存 | 用途、发送位置及 dev 行为 |
|---|---|---|
| `userID` → `device_id` / `deviceId` | 首次需要时生成 32 个随机字节，编码为 64 位十六进制，保存在全局配置 | 模型请求 `metadata.user_id.device_id`；原版也用于遥测。dev 仍发送模型请求中的值。它是安装配置中的随机标识，生成过程不读取 MAC、硬盘序列号或硬件 UUID |
| `machineID` | 另一份独立的 32 字节随机值，保存在全局配置 | 错误上报用其前 12 位作为 `host_name_redacted`。dev 关闭该上报；普通请求的 `device_id` 用的是 `userID`，不是这个值 |
| `sessionId` / `session_id` | 新会话默认使用 `crypto.randomUUID()`；恢复会话可沿用原 ID，部分入口允许指定；保存在会话记录中 | 关联会话、续会话、日志、hooks、SDK 输出；随模型请求 metadata 和默认会话请求头发送。通常记录文件为 `projects/<编码后的目录>/<sessionId>.jsonl` |
| `parent_session_id` | 从父会话、CLI 子会话或团队上下文继承 | 子会话的模型 metadata 用它关联父会话；普通独立会话可不带 |
| `accountUuid` / `account_uuid` | 登录资料返回，缓存在全局配置的 `oauthAccount` 等身份状态中；远程入口也可由环境传入 | 模型 metadata 的 `account_uuid`，以及需要账号的 API。无可用账号资料时该 metadata 字段可为空串；使用 API key 的请求仍由凭据鉴权 |
| `organizationUuid` / `organization_uuid` | 登录资料返回，缓存在 `oauthAccount` 等身份状态中 | 组织策略、权限、计费和组织 API 路径；不是普通 metadata 对象中固定包含的字段。关闭遥测不删除它 |
| `remoteControlMachineId` → `machine_id` | 全局配置中保存的独立 UUID | Remote Control 注册主机时发送，区别于上面的 `machineID` 和 `device_id`。dev 的非必要流量开关限制远程功能 |
| `deviceUUID` / `rowPk` / `bound_device_uuid` | 服务端注册远程设备后返回的 UUID，与本地 P-256 设备密钥关联，按账号保存 | 远程工具执行、设备归属、会话绑定。macOS 优先用 Keychain 的 `Claude Code-device-keys` 项；文件后端路径为 `~/.claude/.device-keys.json`。dev 禁止相关注册流量；已有本地记录不会因此删除 |
| `remoteSessionId`、`environment_id`、`work_id`、容器 ID | 远程服务创建，或由远程运行环境传入 | 云端会话、执行环境、工作项及容器关联；特定路由有 `x-claude-remote-session-id` 和 `x-claude-remote-container-id`。dev 的远程功能受非必要流量开关限制 |
| `agentId` / `parentAgentId`、团队与 workflow ID | 本地代理运行时或远程服务生成；普通本地代理 ID 可为 `a` 加 8 字节随机十六进制，并可带类型前缀 | 子代理、团队和 workflow 关联；特定请求携带 `x-claude-code-agent-id`、`x-claude-code-parent-agent-id`。相关工具调用和结果也可能带这些字段 |
| prompt / query chain / request ID | 提示、查询链和请求分别创建标识；服务端还返回 `request-id`，常见值为 `req_…` | `x-claude-code-prompt-id`、`x-client-request-id` 在相应请求路径和开关下发送，用于链路关联；服务端 `request-id` 用于响应、排错和重试。自定义 API 地址下不保证携带全部头 |
| 消息 `uuid`、API 消息 `id`、`tool_use.id` | 本地消息 UUID 与 API 的 `msg_…`、`toolu_…` 是不同标识 | 本地历史关联和去重；工具结果通过 `tool_use_id` 关联模型发出的调用，后续轮次需要发送 |
| MCP `sessionId` / `mcp-session-id` | MCP 服务在初始化时返回；客户端连接实例保存 | 在后续 MCP HTTP 请求的 `mcp-session-id` 头中发送，目的地是对应 MCP 服务，与 Claude 对话会话 ID 独立 |
| OAuth `CLIENT_ID`、云服务 workspace/project/tenant ID | OAuth client ID 是应用标识常量，可按配置覆盖；云服务的 ID 来自所选提供方的配置和身份 | 用于登录、选择工作区或云租户。OAuth client ID 不是每台设备独有的 ID；API key、OAuth token 和设备私钥则是凭据，不能当成普通 ID 处理 |

全局配置通常是 `~/.claude.json`；配置目录和存储后端可改变位置。默认安装的 `claw-code` 与官方 `claude` 共用配置、会话和登录凭据，因此通常也会复用上述持久化 ID。分开命令名本身不建立独立身份。

另有 `summonSidKey`：全局配置中的 32 字节随机密钥，用来通过 HMAC 派生 16 位十六进制的会话标记，见 [artifact-changed.js](../src/darwin/tasks/artifact-changed.js) 的 `createHmac`。这属于本地密钥，不是适合公开的设备 ID。

来源：

- [global-config-and-gates.js](../src/darwin/settings/global-config-and-gates.js)：`function EH`、`function Jvt`、`function z4o`、`remoteControlMachineId`、`oauthAccount`。
- [not-admin-owned.js](../src/darwin/context/not-admin-owned.js)：会话创建 `function Er` 与当前会话 `function V`；[chunk-3b9c376b.js](../src/darwin/shared/chunk-3b9c376b.js)：UUID 和本地代理 ID 的生成。
- [device-key-store.js](../src/darwin/auth/device-key-store.js)：P-256 密钥、账号键控存储与远程设备注册；[bridge-env-reregister.js](../src/darwin/remote/bridge-env-reregister.js)：桥接环境与主机注册。
- [claude-code-error-tracking.js](../src/darwin/remote/claude-code-error-tracking.js)：`host_name_redacted`；[mcp-session-id.js](../src/darwin/auth/mcp-session-id.js)：MCP 传输会话。

隔离验证：同一个临时 HOME 连续启动两个独立会话，确认 `device_id` 都是 64 位且保持相同，`session_id` 改变，会话请求头等于 metadata 中的会话 ID，假 API key 环境的 `account_uuid` 为空串。此验证没有使用真实账号；OAuth、设备注册和云服务 ID 的说明依据源码。
