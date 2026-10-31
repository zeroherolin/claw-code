// darwin/agents/chunk-3e6fc81f.js — Claude Code 2.1.310（darwin）模块 chunk-jferzhy1.js
import { Up, lT } from "../settings/global-config-and-gates.js";
import { am } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { kd } from "../context/fetch-project-timeline.js";
import { Kd, qor } from "../mcp/toolbox-mcp-server-id.js";
import { Mp } from "../git/bridge-child-tool-diff.js";
var g = "claudecode/agentId", p = "claudecode/agentType", c = "claudecode/isObserver", d = 128, f = 64;
function otn(r) {
  let { name: n, config: e } = r;
  if (n !== kd) return false;
  return Kd(e) || e.scope === "dynamic" && "url" in e && typeof e.url === "string" && qor(e.url);
}
function E1n(r, n) {
  let { agentId: e, agentContext: t } = n;
  if (e === void 0 || !otn(r)) return {};
  if (lT(t) && t.isMainSession === true && t.agentId === e) return {};
  let o = re(am(n.agentType ?? ""), d);
  return { [g]: e, ...o !== "" && { [p]: o }, ...u(e, n) && { [c]: true } };
}
function u(r, { agentContext: n, taskRegistry: e }) {
  let t = [r], o = /* @__PURE__ */ new Set();
  for (let i = t.pop(); i !== void 0; i = t.pop()) {
    if (o.has(i)) continue;
    if (o.size >= f) return true;
    o.add(i);
    let s = e.get(i);
    if (s !== void 0 && Mp(s)) return true;
    if (s !== void 0 && "parentAgentId" in s && typeof s.parentAgentId === "string") t.push(s.parentAgentId);
    if (!Up(n)) {
      let a = i === n.agentId ? n.parentAgentId : i === r ? n.agentId : void 0;
      if (a !== void 0) t.push(a);
    }
  }
  return false;
}
export {
  E1n,
  otn
};
