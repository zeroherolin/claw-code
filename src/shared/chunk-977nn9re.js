// shared/chunk-977nn9re.js — Claude Code 2.1.310 模块 chunk-977nn9re.js
import { Re } from "../settings/global-config-and-gates.27xj.js";
import { zPn } from "../permissions/local-bash.4yg5.js";
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
