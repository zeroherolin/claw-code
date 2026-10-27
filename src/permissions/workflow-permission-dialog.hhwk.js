// permissions/workflow-permission-dialog.hhwk.js — Claude Code 2.1.310 模块 chunk-hhwkzbpf.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { u_, os } from "../shared/chunk-98em9746.js";
var s = os({ kind: "permission_workflow", payload: f(() => u_((o) => typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)), result: f(() => u_((o) => typeof o === "object" && o !== null && "behavior" in o)), default: { behavior: "cancelled" } });
export {
  s as workflowPermissionDialog
};
