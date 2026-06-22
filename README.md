# OrbitPay Website

Public website for OrbitPay, built with Next.js.

## Release Gate

Production releases are blocked by the `Website release gate` workflow. Required checks:

- `npm run lint`
- `npm run typecheck`
- `npm run check:content`
- `npm run build`

The content integrity gate enforces the canonical `OBP-ORG` GitHub organization, required website governance files, canonical sitemap/robots support, and owner/evidence review for high-risk public claims.

Environment-specific destinations are centralized in `src/lib/site-config.ts`: dashboard, docs, status, and contract explorer URLs.

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run check:content
npm run build
```
