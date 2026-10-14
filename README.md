# The Kutting Edge

Website concept for The Kutting Edge in Oxford, Maine. Static HTML, CSS and JavaScript with company photography, photographic service bento, and an accessible photo gallery.

## Build and deploy

- `npm run build` copies the website and assets into `dist/`.
- `npx wrangler deploy` runs the configured build and deploys to the existing `the-kutting-edge` Worker using the authenticated Cloudflare account.
- Cloudflare Workers Builds should use this repository's `main` branch and `npx wrangler deploy` as its deploy command. No account ID or credentials are stored in source.

Contact form is a clearly labeled concept demonstration. Call and Facebook links are active. Stock service photos are separated from the company work gallery. See SOURCES.md for asset origins and supported claims.
