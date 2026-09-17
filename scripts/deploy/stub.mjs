#!/usr/bin/env node
/**
 * Deploy stub — fill in when 老板 has a server.
 *
 * Intended flow (not implemented):
 *   1. SITE_URL=https://example.com npm run build
 *   2. Upload dist/ via rsync/scp/object storage
 *
 * Env (future): DEPLOY_HOST, DEPLOY_PATH, SITE_URL
 */
console.log('[deploy:stub] No remote deploy configured.');
console.log('Build locally with: npm run build  →  ./dist');
console.log('Set SITE_URL at build time when the domain is ready.');
process.exit(0);
