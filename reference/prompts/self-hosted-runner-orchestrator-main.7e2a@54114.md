Usage: claude self-hosted-runner orchestrator [options]

Polls the spawn-hints queue (server returns immediately) and runs ${hooks-dir}/spawn-runner once per
hint. The hook must submit work asynchronously (kubectl create job, EC2
RunInstances, ...) and exit within --hook-timeout. Exit-code contract (session
spawns): 0 = success (no-op); 1 = retryable failure (backoff); >=2 = non-retryable
(circuit-break); stderr tail is forwarded as the nack error. Standby (--min-idle)
spawns: any non-zero exit is logged locally and re-requested after the lease.

Connection:
  --api-url <url>             API base URL (default: https://api.anthropic.com)
  --environment-secret-file <path>
                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)
                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)

Hook:
  --hooks-dir <path>          Directory containing the spawn-runner hook (REQUIRED).
                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]
  --hook-concurrency <n>      Max spawn-runner hooks running in parallel (default: ${Ne}).
                              Also caps how many hints are claimed per poll.
  --hook-timeout <sec>        SIGTERM the hook after <sec> seconds (default: ${…}).
  --expected-spawn-seconds <n>  p99 boot time for runners this orchestrator spawns
                              (default: ${He}). Sent on every Poll as the
                              server-side lease; if the runner doesn't register before then, the
                              session is re-hinted with a fresh jti. HA replicas MUST use the same value.
  --min-idle <n>              Keep at least <n> idle slots free (free capacity across runners, not
                              runner count; default: 0, disabled). The server mints standby
                              work_orders (no session binding) for the gap on every Poll.

SCM connector (optional — standing tunnel so Anthropic-hosted pre-session flows can
reach a GHES host that is only routable from inside your network):
  --scm-connector-host <h[:p]>   GHES hostname to forward to (port defaults to 443).
                                 Setting this enables the connector.
  --scm-connector-id <n>         ghe_configurations.id for this org (REQUIRED with --scm-connector-host).
  --scm-connector-provider <s>   Provider slug (default: ghe).
  --scm-connector-ca-file <path> Extra CA bundle (PEM) for TLS to the GHES host.
  --scm-connector-host-rewrite <from>=<to_host:to_port>
                                 e2e only — redirect the TCP connect while keeping
                                 Host/SNI as --scm-connector-host.

Runtime:
  --shutdown-drain-sec <n>    On SIGTERM, stop polling but give the poll in flight and the running hooks
                              up to <n> seconds to end before they are stopped (default: 0, stop them
                              at once). SIGINT, or a second SIGTERM, stops them at once; a signal after
                              that exits at once, without waiting for them. Set <n> to at least
                              --hook-timeout + 10, and the process manager's kill delay to at least
                              <n> + 15.
  --health-port <port>        Port for /healthz HTTP listener (default: ${ve}). 0 disables.
                              ALWAYS returns 200 (liveness). Body carries connected/last_*/queue_counts/warm_hints_dispatched
                              for readiness/alerting. [env: SELF_HOSTED_RUNNER_HEALTH_PORT]
  --log-level <level>         Log level: info or debug (default: info)
  --agent-proxy-url <url>     Agent proxy for the runners the spawn-runner hook starts. Passed to the
                              hook as SELF_HOSTED_RUNNER_AGENT_PROXY_URL (the hook must pass it on to
                              each runner, as it would the variable); checked here as the runners
                              check it. The flag wins over the variable when both are set.
                              [env: SELF_HOSTED_RUNNER_AGENT_PROXY_URL]

Debug:
  --debug-dir <path>          DEV ONLY — writes each work-order JWT + decoded JSON + hook stderr to
                              <dir>/<jti>.{jwt,json,stderr}. Auto-pruned after 5m.
                              [env: SELF_HOSTED_RUNNER_DEBUG_DIR]

  --help, -h                  Show this help message