// Answers `Accept: text/markdown` requests with the Markdown the build wrote:
// a docs page with its `.md` twin, the homepage with /llms.txt. Browsers keep
// the HTML. Cloudflare Pages runs this before serving dist/ (see deploy.sh);
// public/_routes.json limits it to the paths that have a Markdown form.
import { createMarkdownMiddleware } from "nuaj-agent-docs/cloudflare-pages";

export const onRequest = createMarkdownMiddleware({
  prefixes: ["docs"],
  variants: { "/": "/llms.txt" },
});
