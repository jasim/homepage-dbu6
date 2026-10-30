# Website of dbu6

dbu6.com: an Astro site with a homepage at `/` and the documentation in
Starlight under `/docs/`.

The docs' look is shared with nuabase.com and sapporta.com through
`nuaj-agent-docs/theme.css` (Inter, the neutral ramp, link and rule colours);
`src/styles/homepage.css` gives the homepage its own palette, type scale and
layout on top of it. The docs use the `nuaj-agent-docs` Starlight plugin, which
serves every docs page as Markdown at `/<slug>.md`, writes `/llms.txt`,
`/docs/llms.txt` and `/docs/llms-full.txt`, and adds Copy and View as Markdown
buttons. Every docs page needs a `title` and a `description`, and must be
listed in `sidebar.mjs`, or the build fails.

## Docs

The guides under `src/content/docs/docs/` are copies of `docs/*.md` in the
dbu6 repository, which also ship with the package (`npx dbu6 docs`):
`getting-started.md` is `docs/index.md` here, and links between guides point at
`/docs/<page>/`. Copied as of dbu6
`b273d72b8abeefdc29e5315b5d15742b82c90ef2` (2026-10-26); bring them up to date
from `git log b273d72..main -- docs` in that repository.

## Development

```
pnpm install
pnpm dev
```

## Deploying

```
./deploy.sh
```

builds the site into `dist/` and uploads it to the `homepage-dbu6-com`
Cloudflare Pages project with Wrangler. `public/_redirects` sends the old
`/setup.html` to `/docs/`.
