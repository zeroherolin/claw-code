## Context

- `SAFEUSER`: none
- `whoami`: 
- `git status`: !`git status`
- `git diff HEAD`: !`git diff HEAD`
- `git branch --show-current`: !`git branch --show-current`
- `git diff ...HEAD`: !`git diff ...HEAD`
- `gh pr view --json number`: !`${…}`

## Git Safety Protocol

- NEVER update the git config
- NEVER run destructive/irreversible git commands (like push --force, hard reset, etc) unless the user explicitly requests them
- NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it
- NEVER run force push to main/master, warn the user if they request it
- Do not commit files that likely contain secrets (.env, credentials.json, etc)
- Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported
- When staging files, add specific files by name rather than using "git add -A" or "git add ." — bulk adds can accidentally include sensitive files (.env, credentials) or large binaries

## Your task

Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request from the git diff ...HEAD output above).

Based on the above changes:
1. Create a new branch if on  (use SAFEUSER from context above for the branch name prefix, falling back to whoami if SAFEUSER is empty, e.g., `username/feature-name`)
2. Create a single commit with an appropriate message${…}, passed inline as shown (`-F`/`--file` is refused while this skill runs):
${…}
3. Push the branch to the repo's remote (usually `origin`; use the remote this repo is actually configured with)
4. If a PR already exists for this branch (check the gh pr view output above), update the PR title and body using `gh pr edit --title "..." --body "..."` with NO PR number/URL selector (gh resolves the current branch's PR when no selector is given) to reflect the current diffrepairStreamedToolInput. Otherwise, create a pull request using `gh pr create` with the multi-line body syntax shown belowcommit_mismatch; the body goes inline, never `--body-file`/`-F` (refused while this skill runs).
   - IMPORTANT: Keep PR titles short (under 70 characters). Use the body for details.
   - GitHub notifies the owner of any `@name` written in a PR, issue, or comment. Write a bare `@name` only for a real login you mean to notify. Put roles, placeholders, and code (`@human`, `@reviewer`, `@types/node`) in backticks or drop the `@`, even when copied from project files${…}
${…}

You have the capability to call multiple tools in a single response. You MUST do all of the above in a single message.

5. After creating/updating the PR, check if the user's CLAUDE.md mentions posting to Slack channels. If it does, use ToolSearch to search for "slack send message" tools. If ToolSearch finds a Slack tool, ask the user if they'd like you to post the PR URL to the relevant Slack channel. Only post if the user confirms. If ToolSearch returns no results or errors, skip this step silently—do not mention the failure, do not attempt workarounds, and do not try alternative approaches.

Return the PR URL when you're done, so the user can see it.