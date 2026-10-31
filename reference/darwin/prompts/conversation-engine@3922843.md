
      # shopt before functions: a body using extglob/globstar syntax only
      # re-parses with the option on.
      echo "# Shopt" >> "$SNAPSHOT_FILE"
      shopt -p | head -n 1000 >> "$SNAPSHOT_FILE"

      echo "# Functions" >> "$SNAPSHOT_FILE"

      # Force autoload all functions first
      declare -f > /dev/null 2>&1

      # Now get user function names - filter completion functions (single underscore prefix)
      # but keep double-underscore helpers (e.g. __zsh_like_cd from mise, __pyenv_init)
      # One eval per function so a body that no longer parses (rc=2, not fatal
      # in non-POSIX bash) drops only itself. The %q literal needs no fork
      # at source time, unlike a base64 command substitution.
      declare -F | cut -d' ' -f3 | grep -vE '^_[^_]' | while read func; do
        printf 'eval %q > /dev/null 2>&1\n' "$(declare -f "$func")" >> "$SNAPSHOT_FILE"
      done
    