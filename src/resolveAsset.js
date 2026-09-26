const ASSET_CDN = 'https://dogeub-assets.pages.dev';

/**
 * The dev server proxies /assets/img and /assets-fb to the real asset CDN
 * (see server.proxy in vite.config.js). That proxy only exists while running
 * `vite dev` — a static production build (GitHub Pages, etc.) has no server
 * to do that rewrite, so those paths 404. This resolves them to the real
 * absolute CDN URL so images load in production too. Already-absolute URLs
 * (http/https) are returned unchanged.
 */
export function resolveAsset(path) {
  if (!path || typeof path !== 'string') return path;
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith('/assets/img')) return `${ASSET_CDN}${path.replace('/assets/img', '/img')}`;
  if (path.startsWith('/assets-fb')) return `${ASSET_CDN}${path.replace('/assets-fb', '/img/server')}`;
  return path;
}
