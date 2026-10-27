// remote/bad-server-name.dwp0.js — Claude Code 2.1.310 模块 chunk-dwp0s968.js
import { Zc, M9o, H9o, cai } from "../context/fetch-project-timeline.g27d.js";
import { Akt } from "../mcp/toolbox-mcp-server-id.fewh.js";
import { By } from "../artifacts/chunk-m8t7qekn.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { DOn } from "../permissions/permission-policy.5k6v.js";
var Mvi = "hearth_binding_changed";
function JJr(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e)) return { binding: null, reason: "not_joined" };
  let s = e.hearth;
  if (s === null || typeof s !== "object") return { binding: null, reason: "not_joined" };
  let i = s, l = typeof i.channel_id === "string" ? i.channel_id : "", u = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!M9o.test(l) || !M9o.test(u)) return t("[bridge:projects] binding ids are malformed — no mount", { level: "warn" }), { binding: null, reason: "bad_ids" };
  let a = i.mcp_server;
  if (a === null || typeof a !== "object") return { binding: null, reason: "bad_server_name" };
  let o = a;
  if (o.name !== Zc) return t("[bridge:projects] binding names an unexpected MCP server — no mount", { level: "warn" }), { binding: null, reason: "bad_server_name" };
  if (o.type !== "http" || typeof o.url !== "string") return { binding: null, reason: "not_http" };
  let d = Akt(n.apiBaseUrl);
  if (d === null) return t("[bridge:projects] api base is not an approved ingress origin — no mount", { level: "warn" }), { binding: null, reason: "untrusted_origin" };
  let c = `${d}${H9o(n.sessionId)}`, r;
  try {
    r = new URL(o.url);
  } catch {
    return { binding: null, reason: "url_mismatch" };
  }
  if (r.origin !== d || r.pathname !== H9o(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") return t("[bridge:projects] binding url is not this session’s hearthbot mount on our own api base — no mount", { level: "warn" }), { binding: null, reason: "url_mismatch" };
  let g = DOn(o, Zc);
  if (!g) return { binding: null, reason: "bad_tools" };
  let h = g.filter((_) => cai.has(_));
  return { binding: { channelId: l, threadId: u, mountUrl: c, autoAllowTools: h } };
}
var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;
function Hvi(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    By(n[2], "sessionId");
  } catch {
    return null;
  }
  return { apiBaseUrl: n[1], sessionId: n[2] };
}
export {
  Hvi,
  JJr,
  Mvi
};
