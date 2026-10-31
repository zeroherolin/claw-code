// linux/shared/chunk-ab2cef45.js — Claude Code 2.1.310（linux）模块 chunk-5htn7psj.js
import { Re } from "../settings/global-config-and-gates.js";
import { YPn } from "../permissions/local-bash.js";
function Kie({ newState: e, oldState: t }, n, s, p) {
  if (YPn({ newState: e, oldState: t }, n, void 0, s, p), e.expandedView !== t.expandedView) {
    let a = e.expandedView === "tasks";
    Re((o) => {
      if (o.showExpandedTodos === a) return o;
      return { ...o, showExpandedTodos: a };
    }, s);
  }
}
export {
  Kie
};
