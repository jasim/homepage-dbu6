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

Agents that send `Accept: text/markdown` get Markdown at the page's own URL:
`functions/_middleware.js` (the plugin's Cloudflare Pages middleware) answers
a docs page with its `.md` file and the homepage with `/llms.txt`.
`public/_routes.json` keeps the function off every other path. Try it with
`pnpm build && npx wrangler pages dev dist`.

## Docs

The pages under `src/content/docs/docs/` are written for people who are new
to dbu6 and to bookkeeping. `index.md` (What dbu6 does),
`bookkeeping-basics.md`, `install.md`, `first-books.md` and `keeping-up.md`
exist only on this site. `install.md` is also the page the copy-paste install
prompt points coding agents at, as <https://dbu6.com/docs/install.md>, so keep
its commands complete.

`your-books.md`, `statements.md`, `categorization.md` and `reports.md` started
as copies of `docs/*.md` in the dbu6 repository, which also ship with the
package (`npx dbu6 docs`). Links between guides point at `/docs/<page>/`. They
are up to date with dbu6 `7d8b196` (2026-11-02); bring them up to date from
`git log 7d8b196..main -- docs` in that repository.

Screenshots are in `public/assets/docs/`, taken from a project seeded with
dbu6-seed-sample-data.

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
