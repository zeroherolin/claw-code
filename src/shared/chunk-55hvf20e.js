// shared/chunk-55hvf20e.js — Claude Code 2.1.310 模块 chunk-55hvf20e.js
function bjn(e) {
  switch (e.status) {
    case "archived":
      return "archived";
    case "failed":
      return "failed";
    case "paused":
      return e.worker_status === "requires_action" ? "requires_action" : "idle";
    default:
      switch (e.worker_status) {
        case void 0:
        case "":
        case "WORKER_STATUS_UNSPECIFIED":
          return "pending";
        case "running":
          return e.connection_status === "disconnected" ? "idle" : "running";
        case "requires_action":
          return "requires_action";
        default:
          return "idle";
      }
  }
}
export {
  bjn
};
