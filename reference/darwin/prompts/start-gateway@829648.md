Absolute path to an executable that prints a single JSON object of environment variables to stdout, e.g. `{"API_KEY": "…"}`. The app runs it before spawning the server and merges the result over `env` (the helper wins on conflict). Use this to pull secrets from a secrets manager instead of storing them inline in `env`.

- If the helper fails, the server does not start; the failure names the helper path in the app log and the diagnostics report.
- A helper with nothing to set must print `{}`. Empty stdout is treated as a failure.
- A helper-emitted `PATH` replaces the static map’s `PATH` and supports the same `${PATH}` placeholder expansion as a static entry.