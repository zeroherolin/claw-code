// darwin/permissions/workflow-permission-dialog.53a0.js — Claude Code 2.1.310（darwin）模块 chunk-hhwkzbpf.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { u_, os } from "../shared/chunk-869ced06.js";
var s = os({ kind: "permission_workflow", payload: f(() => u_((o) => typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)), result: f(() => u_((o) => typeof o === "object" && o !== null && "behavior" in o)), default: { behavior: "cancelled" } });
export {
  s as workflowPermissionDialog
};
