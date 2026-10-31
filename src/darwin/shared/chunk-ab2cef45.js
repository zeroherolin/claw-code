// darwin/shared/chunk-ab2cef45.js — Claude Code 2.1.310（darwin）模块 chunk-977nn9re.js
import { Re } from "../settings/global-config-and-gates.js";
import { zPn } from "../permissions/local-bash.js";
function Zie({ newState: e, oldState: t }, n, s, p) {
  if (zPn({ newState: e, oldState: t }, n, void 0, s, p), e.expandedView !== t.expandedView) {
    let a = e.expandedView === "tasks";
    Re((o) => {
      if (o.showExpandedTodos === a) return o;
      return { ...o, showExpandedTodos: a };
    }, s);
  }
}
export {
  Zie
};
