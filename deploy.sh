#!/usr/bin/env bash
#
# Publish the dbu6 homepage to Cloudflare Pages with Wrangler.
#
# An Astro site: `pnpm build` writes it to dist/, and Wrangler uploads that
# folder as-is. The build fails on a docs page missing from sidebar.mjs or
# without a title and description, so nothing broken gets that far.
#
# Usage:
#   ./deploy.sh                       # deploy to production
#   ./deploy.sh --branch preview      # deploy a preview build
#   ./deploy.sh --project-name other  # override the Pages project
#   ./deploy.sh --dry-run             # build the site, print the command, upload nothing
#
# Environment:
#   CLOUDFLARE_API_TOKEN    optional; if unset, Wrangler uses `wrangler login`
#   CLOUDFLARE_ACCOUNT_ID   optional; required when a token has access to
#                           more than one account
#
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PROJECT_NAME="${PROJECT_NAME:-homepage-dbu6-com}"
SITE_DIR="$SCRIPT_DIR/dist"
BRANCH=""
DRY_RUN=0

usage() {
  sed -n '3,16p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
  exit "${1:-0}"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project-name)
      [[ -n "${2:-}" ]] || { echo "error: --project-name needs a value" >&2; exit 2; }
      PROJECT_NAME="$2"; shift 2 ;;
    --branch)
      [[ -n "${2:-}" ]] || { echo "error: --branch needs a value" >&2; exit 2; }
      BRANCH="$2"; shift 2 ;;
    --dry-run)
      DRY_RUN=1; shift ;;
    -h|--help)
      usage 0 ;;
    *)
      echo "error: unknown argument: $1" >&2; usage 2 ;;
  esac
done

# --- Preflight ---------------------------------------------------------------

if [[ "$DRY_RUN" -eq 0 && -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  if ! npx --yes wrangler whoami >/dev/null 2>&1; then
    cat >&2 <<'EOF'
error: not authenticated with Cloudflare.

Either log in once, interactively:

    npx wrangler login

or export an API token (needs the "Cloudflare Pages: Edit" permission):

    export CLOUDFLARE_API_TOKEN=...
    export CLOUDFLARE_ACCOUNT_ID=...   # if the token spans several accounts
EOF
    exit 1
  fi
fi

# --- Build -------------------------------------------------------------------

pnpm install --frozen-lockfile
pnpm build

# --- Deploy ------------------------------------------------------------------

deploy_args=(pages deploy "$SITE_DIR" --project-name "$PROJECT_NAME" --commit-dirty=true)
[[ -n "$BRANCH" ]] && deploy_args+=(--branch "$BRANCH")

echo "Site: $(find "$SITE_DIR" -type f | wc -l | tr -d ' ') files in $SITE_DIR"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo "Dry run: npx wrangler ${deploy_args[*]}"
  exit 0
fi

echo "Deploying to Cloudflare Pages project '$PROJECT_NAME'${BRANCH:+ (branch: $BRANCH)}..."
npx --yes wrangler "${deploy_args[@]}"
