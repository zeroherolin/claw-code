// linux/permissions/workflow-permission-dialog.53a0.js — Claude Code 2.1.310（linux）模块 chunk-2fakqg90.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { d_, us } from "../shared/chunk-869ced06.js";
var s = us({ kind: "permission_workflow", payload: p(() => d_((o) => typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)), result: p(() => d_((o) => typeof o === "object" && o !== null && "behavior" in o)), default: { behavior: "cancelled" } });
export {
  s as workflowPermissionDialog
};
