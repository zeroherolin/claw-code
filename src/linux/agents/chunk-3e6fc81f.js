// linux/agents/chunk-3e6fc81f.js — Claude Code 2.1.310（linux）模块 chunk-sw2zm7yp.js
import { Bf, iA } from "../settings/global-config-and-gates.js";
import { am } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { Td } from "../context/fetch-project-timeline.js";
import { Vd, Por } from "../mcp/toolbox-mcp-server-id.js";
import { Df } from "../git/bridge-child-tool-diff.js";
var g = "claudecode/agentId", p = "claudecode/agentType", c = "claudecode/isObserver", d = 128, f = 64;
function rtn(r) {
  let { name: n, config: e } = r;
  if (n !== Td) return false;
  return Vd(e) || e.scope === "dynamic" && "url" in e && typeof e.url === "string" && Por(e.url);
}
function fBn(r, n) {
  let { agentId: e, agentContext: t } = n;
  if (e === void 0 || !rtn(r)) return {};
  if (iA(t) && t.isMainSession === true && t.agentId === e) return {};
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
    if (s !== void 0 && Df(s)) return true;
    if (s !== void 0 && "parentAgentId" in s && typeof s.parentAgentId === "string") t.push(s.parentAgentId);
    if (!Bf(n)) {
      let a = i === n.agentId ? n.parentAgentId : i === r ? n.agentId : void 0;
      if (a !== void 0) t.push(a);
    }
  }
  return false;
}
export {
  fBn,
  rtn
};
