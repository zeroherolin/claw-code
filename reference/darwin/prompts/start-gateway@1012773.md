`system-openssh`: the app makes every SSH connection by running an OpenSSH `ssh` program — the one `sshClientPath` names, otherwise the first `ssh` on the user's PATH (on Windows, a Win32-OpenSSH `ssh.exe`: the PATH one, else the in-box or Microsoft-installed client) — so the organization's own OpenSSH build, with its Kerberos/GSSAPI, certificate and `ssh_config` support, is what authenticates. The program must be OpenSSH 7.6 or newer (Windows: Win32-OpenSSH 9.4 or newer). When `sshClientPath` is set and that program cannot be used, sessions fail with an error telling the user to ask their IT administrator rather than falling back; when it is unset and Windows has no usable client, the built-in library is used.

`builtin`: the app's built-in SSH library makes the connection, whatever the build's default.

`auto` or unset: the build's default engine.

An explicit value applies to new connections (sessions already connected keep their engine) and overrides the build's default in both directions, including any remote switch-off Anthropic ships for the OpenSSH engine — so with `system-openssh` set, switching back is done here, by setting `builtin`.