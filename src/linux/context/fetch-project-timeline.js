// linux/context/fetch-project-timeline.js — Claude Code 2.1.310（linux）模块 chunk-exz0w70z.js
var wkt = "/v2/ccr-sessions/-/meta/mcp", Td = "claude-code-remote", Eii = ["list_triggers", "create_trigger", "update_trigger", "delete_trigger", "fire_trigger", "send_later"], e3o = "send_message", t3o = ["add_repo", "check_repo_access", "list_repos"], Ert = [...t3o, "register_repo_root"], kii = "Claude Code Remote", nse = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a", n3o = "X-MCP-Server-ID";
function vkt(e, s) {
  return { type: "http", url: e, headers: { ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a", "X-Session-UUID": s, "anthropic-version": "2023-06-01" }, alwaysLoad: true };
}
var Qc = "hearthbot", d = { read_thread: "fetch_thread", read_project_chat: "fetch_project_timeline", read_messages_by_id: "fetch_messages", list_threads: "list_thread_sessions", list_prs: "list_project_prs", edit_message: "update_message", request_decision: "ask_decision", update_progress_checklist: "update_status" }, NYr = { post_message: "reply", rename_thread: "set_thread_label" }, l = { start_thread: "start_thread_session" };
function T(e, s) {
  return [...e.map((t) => [t, t]), ...Object.entries(s).flatMap(([t, _]) => {
    let o = e.find((a) => a === _);
    return o === void 0 ? [] : [[t, o]];
  })];
}
function wqe(e, s = d) {
  return T(e, s).map(([t]) => t);
}
function r(e) {
  return `mcp__${Qc}__${e}`;
}
function n(e, s = d) {
  let [, t] = wqe([e], s);
  return r(t ?? e);
}
var $Yr = r("reply"), FYr = n("reply", NYr), u = n("set_thread_label", NYr), g = n("start_thread_session", l), O = r("fetch_messages"), h = r("fetch_thread"), R = r("fetch_project_timeline"), hNe = new Set(wqe(["fetch_messages", "fetch_thread", "fetch_project_timeline"]).map(r));
function W5(e, s) {
  return e.some((t) => s.some((_) => t.name === _ || t.aliases?.includes(_)));
}
var c = r("update_status"), r3o = [c, n("update_status")], UYr = [r("start_thread_session"), g], A = [...UYr, r("start_folder_thread")], Lor = { reply: $Yr, postIsAnswer: false, status: c, reads: { messages: O, thread: h, timeline: R } };
function vqe(e) {
  let s = Lor, t = (i) => {
    let p = n(i.slice(r("").length));
    return W5(e, [p]) && !W5(e, [i]) ? p : i;
  }, _ = W5(e, [FYr]) && !W5(e, [$Yr, c, ...A]), { messages: o, thread: a, timeline: E } = s.reads;
  return { reply: _ ? FYr : s.reply, postIsAnswer: _, status: t(s.status), reads: { messages: t(o), thread: t(a), timeline: t(E) } };
}
var o3o = /^[A-Za-z0-9_-]{1,160}$/;
function s3o(e) {
  return `/v2/ccr-sessions/${e}/hearthbot/mcp`;
}
function Tii(e, s) {
  return { type: "http", url: e, headers: { "X-Session-UUID": s, "anthropic-version": "2023-06-01" }, alwaysLoad: true };
}
var Aii = new Set(wqe(["reply", "update_status", "no_reply_needed", "switch_model", "fetch_thread", "fetch_project_timeline", "fetch_messages", "search_channels", "set_thread_label", "set_thread_resolved", "list_thread_sessions", "list_thread_connectors", "list_project_members", "list_project_artifacts", "list_project_prs", "list_project_files", "read_project_file", "react", "unreact", "update_message", "get_channel_session_id", "get_project_session_id", "read_memory", "update_memory", "report_issue", "set_time_zone", "pin_artifact", "unpin_artifact", "suggest_connectors", "post_widget", "cookie_sign_in_request"])), Cii = new Set(wqe(["update_memory", "update_message", "set_thread_resolved", "switch_model", "pin_artifact", "unpin_artifact", "report_issue", "set_time_zone", "cookie_sign_in_request", "post_widget", "suggest_connectors"]));
export {
  $Yr,
  Aii,
  Cii,
  Eii,
  Ert,
  FYr,
  Lor,
  NYr,
  Qc,
  Td,
  Tii,
  UYr,
  W5,
  e3o,
  hNe,
  kii,
  n3o,
  nse,
  o3o,
  r3o,
  s3o,
  t3o,
  vkt,
  vqe,
  wkt,
  wqe
};
