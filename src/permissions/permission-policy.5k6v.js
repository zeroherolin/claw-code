// permissions/permission-policy.5k6v.js — Claude Code 2.1.310 模块 chunk-5k6v3xp9.js
import { kd } from "../context/fetch-project-timeline.g27d.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { jo, Zot } from "../mcp/always-allow.9m89.js";
var r = /^[a-zA-Z0-9_-]{1,64}$/;
function DOn(i, n = kd) {
  if (!("tools" in i) || i.tools === void 0) return [];
  if (!Array.isArray(i.tools)) return t("[bridge:meta-mcp] meta tools[] is not an array", { level: "warn" }), null;
  let e = [];
  for (let o of i.tools) {
    if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) return t("[bridge:meta-mcp] injected tools[] entry is malformed", { level: "warn" }), null;
    e.push({ name: o.name, ..."permission_policy" in o && typeof o.permission_policy === "string" && { permission_policy: o.permission_policy } });
  }
  let { allow: s } = Zot({ [n]: { type: "http", tools: e } }), l = jo(n, "");
  return s.map((o) => o.startsWith(l) ? o.slice(l.length) : o);
}
export {
  DOn
};
