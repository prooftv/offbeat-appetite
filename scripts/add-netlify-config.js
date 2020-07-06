/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const routesConfig = require('../routes-config.js');

// Follows the convention for Netlify's _headers file
// Can't have tailored caching stategies because of https://github.com/zeit/next.js/issues/6303
const _headersContent = `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
${routesConfig
  // replace `[placeholder]` with `:placeholder`
  .map((rc) => rc.route.replace(/\/\[([^/]+)\]/g, '/:$1'))
  .map(
    (routePath) => `${routePath}
  Content-Security-Policy: ${[
    // Only accept same-origin sources by default
    `default-src 'self'`,
    // Allow images from same origin, Sanity, Google Analytics and data scheme (e.g. base64)
    `img-src 'self' https://cdn.sanity.io https://www.google-analytics.com data:`,
    // Allow audio/video from same origin, Sanity and data scheme (e.g. base64)
    `media-src 'self' https://cdn.sanity.io data:`,
    // Allow styles from same origin and inline
    `style-src 'self' 'unsafe-inline'`,
    // No external fonts allowed
    `font-src 'self' data:`,
    // Allow script coming from same origin, inline and Google / Google Analytics (incl. recaptcha)
    `script-src 'self' 'unsafe-inline' https://www.google.com/ https://www.gstatic.com/ https://www.google-analytics.com https://recaptcha.net`,
    // Allow XHR to same origin and Google Analytics
    `connect-src 'self' https://www.google-analytics.com https://*.api.sanity.io`,
    // Allow webmanifest files from same origin
    `manifest-src 'self'`,
    // Allow prefetching files from same origin
    `prefetch-src 'self'`,
    // Allow iframes from google and same origin
    `frame-src 'self' https://www.google.com/recaptcha/`,
  ].join('; ')}
  X-XSS-Protection: 1; mode=block`
  )
  .join('\n')}
/fonts/*
  Cache-Control: public, max-age=31536000
/site.webmanifest
  Content-Type: application/json`;
// /*js
//   Content-Type: application/javascript; charset=utf-8
// /*webmanifest
//   Content-Type: application/manifest+json; charset=utf-8
// `;

console.log('\nGenerating Netlify headers...');

const ROOT_FOLDER = process.cwd();
const OUT_FOLDER = path.join(ROOT_FOLDER, 'out');

fs.writeFileSync(path.join(OUT_FOLDER, '_headers'), _headersContent, {
  encoding: 'utf8',
});

console.log('Generating Netlify redirects...');

const _redirectsContent = `
# These rules will change if you change your site’s custom domains or HTTPS settings

# PRODUCTION: Redirect default Netlify subdomain to primary domain
# (both old netlify.com and new netlify.app)
https://offbeatappetite.netlify.com/* https://offbeatappetite.com/:splat 301!
https://offbeatappetite.netlify.app/* https://offbeatappetite.com/:splat 301!

# STAGING: Redirect default Netlify subdomain to primary domain
# (both old netlify.com and new netlify.app)
https://offbeatappetite-staging.netlify.com/* https://staging.offbeatappetite.com/:splat 301!
https://offbeatappetite-staging.netlify.app/* https://staging.offbeatappetite.com/:splat 301!
`;

fs.writeFileSync(path.join(OUT_FOLDER, '_redirects'), _redirectsContent, {
  encoding: 'utf8',
});

console.log(chalk.blue('Netlify headers and redirects added successfully'));
