// linux/permissions/permission-policy.js — Claude Code 2.1.310（linux）模块 chunk-03dzxcns.js
import { Td } from "../context/fetch-project-timeline.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Xo, Kot } from "../mcp/always-allow.js";
var r = /^[a-zA-Z0-9_-]{1,64}$/;
function KIn(i, n = Td) {
  if (!("tools" in i) || i.tools === void 0) return [];
  if (!Array.isArray(i.tools)) return t("[bridge:meta-mcp] meta tools[] is not an array", { level: "warn" }), null;
  let e = [];
  for (let o of i.tools) {
    if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) return t("[bridge:meta-mcp] injected tools[] entry is malformed", { level: "warn" }), null;
    e.push({ name: o.name, ..."permission_policy" in o && typeof o.permission_policy === "string" && { permission_policy: o.permission_policy } });
  }
  let { allow: s } = Kot({ [n]: { type: "http", tools: e } }), l = Xo(n, "");
  return s.map((o) => o.startsWith(l) ? o.slice(l.length) : o);
}
export {
  KIn
};
