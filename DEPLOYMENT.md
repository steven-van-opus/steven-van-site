# Cloudflare deployment

This portfolio is a static site. `npm ci && npm run build` copies only the two HTML pages, images, and video into `dist/`. Existing `.html` links are preserved. No Vercel, DNS change, paid binding, or application backend is required.

The proposed Worker name is `steven-van-site`, with the default `workers.dev` address. The connected Cloudflare read-only tool listed no existing portfolio Worker on October 8, 2026. Pages projects and custom domains could not be inspected with the available tools; verify those in the dashboard before creating a new project. Do not assume Creators Toolbox's account or credentials are the intended portfolio deployment access.

To deploy using supported access, connect this GitHub repository in Cloudflare Workers & Pages, select an intended account on the free plan, set build command `npm run build` and deploy command `npx wrangler deploy`. Use the repository's `wrangler.jsonc`; no custom domain is configured. Alternatively, use an already authorized local Cloudflare session and run `npm ci && npm run deploy` from this repository. Do not copy another project's token.

After deployment, record the actual URL and verify `/`, `/productions.html`, `/#opusclip`, mobile layout, assets, tutorial links, and social metadata. No live URL is claimed until deployment and these checks succeed.
