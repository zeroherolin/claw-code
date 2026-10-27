Usage: gh api <endpoint> [flags]

This gh is Claude Code's built-in GitHub client, not the GitHub CLI:
no GitHub CLI was found on this machine when this session started.
${…}
A GitHub CLI installed during the session takes this one's place once it is on
PATH. On a self-hosted runner that one has only the GitHub credentials the
runner's operator provides and does not go through this session's GitHub proxy.

Flags:${…}
  -X, --method <method>     HTTP method (default GET, or POST with parameters or --input)
  -f, --raw-field key=value String parameter
  -F, --field key=value     Typed parameter: true, false, null and integers become JSON
                            values, {owner} {repo} {branch} are filled in, @file reads a
                            file, @- reads standard input
  -H, --header 'Name: v'    Request header
      --input <file>        File to send as the request body (- for standard input)
  -i, --include             Print the response status line and headers
      --paginate            Follow the response's rel="next" links (GET only)
  -q, --jq <expression>     Filter the response with jq (needs jq on PATH; without it, pipe the
                            output to a JSON tool that is installed)
      --silent              Do not print the response body

{owner}, {repo} and {branch} (or :owner, :repo, :branch) in the endpoint and in
-F values are filled in from GH_REPO, else from the ${…} of the
current repository: upstream, github, origin, then the others by name.${…}

Example: gh api repos/{owner}/{repo}/pulls -f title='Fix' -f head='my-branch' -f base='main'
