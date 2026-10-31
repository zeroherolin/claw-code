// linux/permissions/hook-error-during-execution.js — Claude Code 2.1.310（linux）模块 chunk-1ndkfksd.js
function E9t(o) {
  switch (o.type) {
    case "hook_additional_context":
      return o.hookName === "prompt.submit" || o.hookName === "prompt.mention" || o.hookName === "tool.call" ? { kind: "plugin", event: o.hookName } : { kind: "hook", event: o.hookEvent };
    case "hook_blocking_error":
    case "hook_stopped_continuation":
    case "hook_success":
    case "hook_non_blocking_error":
    case "hook_error_during_execution":
    case "hook_system_message":
    case "hook_cancelled":
    case "hook_permission_decision":
    case "hook_deferred_tool":
    case "async_hook_response":
      return { kind: "hook", event: o.hookEvent };
    default:
      return { kind: "engine" };
  }
}
export {
  E9t
};
