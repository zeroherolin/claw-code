proxy="$(printf %s "${HTTPS_PROXY:-}" | tr -d '[:space:]')"
authority="${proxy#http://}"
authority="${authority%%[/?#]*}"
case "$proxy" in http://*) hostport="${authority##*@}" ;; *) hostport= ;; esac
case "$hostport" in
  127.0.0.1:*[!0-9]*|127.0.0.1:) hostport= ;;
  127.0.0.1|127.0.0.1:*) ;;
  *) hostport= ;;
esac
if [ -z "$hostport" ]; then
  printf '%s\n' "gh: this session's proxy is not set (HTTPS_PROXY names no proxy on 127.0.0.1), so gh cannot reach GitHub; run gh from this session's own shell, with HTTPS_PROXY as the session set it." >&2
  exit 1
fi
HTTPS_PROXY="$proxy"; https_proxy="$proxy"; export HTTPS_PROXY https_proxy
