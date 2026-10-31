// darwin/remote/self-hosted-runner-requeue-session.js — Claude Code 2.1.310（darwin）模块 chunk-08dz8nfx.js
var oGs = "self_hosted_runner_get_pool", sGs = "self_hosted_runner_list_runners", iGs = "self_hosted_runner_list_sessions", aGs = "self_hosted_runner_list_secrets", d4n = "self_hosted_runner_spawn_local", lGs = "self_hosted_runner_read_health", dGs = "self_hosted_runner_read_metrics", cGs = "self_hosted_runner_tail_log", c4n = "self_hosted_runner_requeue_session";
var XHo = `Read a self-hosted environment's aggregate state (alive_runner_count, available_capacity_total, capacity_in_use, pending_session_count, unplaceable_session_count, backing_off_count, circuit_broken_count).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session — secrets never enter the conversation."}`, JHo = `List runners registered to a self-hosted environment, with per-runner lease_expires_at, locked_account_id/email, and assigned_session_count.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session — secrets never enter the conversation."}`, QHo = `List sessions queued/assigned in a self-hosted environment (status, failure_log[], excluded_runner_ids, spawn_attempt, spawn_last_error).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session — secrets never enter the conversation."}`, ZHo = `List environment secrets (jti, label, created_at, revoked, last_used_at). Secret values are never returned — only metadata.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session — secrets never enter the conversation."}`, eDo = "Spawn a self-hosted runner as a detached background process on THIS machine using this binary's `self-hosted-runner` subcommand. Always passes `--base-dir` (the runner's default of /workspace is unwritable on operator laptops) and uses space-separated flags only. Returns {pid, log_path, health_port, command} — `command` is the equivalent shell line for the operator's cheat sheet. This is for the zero→aha proof; production deployment (k8s / docker-compose) is taught, not tooled.", tDo = "GET http://127.0.0.1:{health_port}/healthz on the local runner (2s timeout). Returns the health JSON, or {disabled:true} when health_port is 0, or {unreachable:true,error} when nothing is listening.", nDo = "GET http://127.0.0.1:{health_port}/metrics on the local runner and parse the `claude_code_self_hosted_runner_*` Prometheus gauges into {capacity, active_sessions, last_poll_age_seconds, locked_account_email?}.", rDo = "Read the last N bytes of the runner's --log-file with the shared secret redaction (key=value secrets, sk-ant/Bearer/Basic, URL userinfo, JWTs, and VCS/service PATs — see redact() in src/utils/secretRedaction.ts for the current rule set) applied before the content reaches model context.", oDo = `Requeue an assigned session onto a different runner. Appends the observed runner to the session's excluded_runner_ids so the queue pop doesn't immediately hand it back. Takes session_id + runner_id (the runner the caller observed failing). Only write operation in the doctor tool suite.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session — secrets never enter the conversation."}`;
export {
  JHo,
  QHo,
  XHo,
  ZHo,
  aGs,
  c4n,
  cGs,
  d4n,
  dGs,
  eDo,
  iGs,
  lGs,
  nDo,
  oDo,
  oGs,
  rDo,
  sGs,
  tDo
};
