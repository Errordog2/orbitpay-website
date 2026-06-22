export const siteConfig = {
  name: "OrbitPay",
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbitpay.obp.org",
  githubOrg: "https://github.com/OBP-ORG",
  urls: {
    dashboard: process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://orbitpay-frontend.vercel.app",
    docs: process.env.NEXT_PUBLIC_DOCS_URL ?? "https://github.com/OBP-ORG/orbitpay-docs",
    status: process.env.NEXT_PUBLIC_STATUS_URL ?? "https://status.obp.org",
    contractExplorer: process.env.NEXT_PUBLIC_CONTRACT_EXPLORER_URL ?? "https://stellar.expert/explorer/testnet",
  },
  releaseGate: {
    requiredChecks: ["lint", "typecheck", "build", "check:content"],
    canonicalGitHubOrg: "OBP-ORG",
    blockedGitHubOrg: "OrbitPay-Co",
  },
} as const;

export const claimRegistry = [
  {
    area: "custody",
    owner: "product-security",
    status: "verified",
    evidence: "docs/security-and-custody.md",
    publicLabel: "Non-custodial Stellar wallet interactions",
  },
  {
    area: "privacy",
    owner: "privacy-review",
    status: "review-required",
    evidence: "src/app/privacy/page.tsx",
    publicLabel: "Privacy policy content must stay dated and versioned",
  },
  {
    area: "licensing",
    owner: "legal-review",
    status: "review-required",
    evidence: "LICENSE or repository policy",
    publicLabel: "Licensing claims require explicit source links",
  },
  {
    area: "availability",
    owner: "engineering",
    status: "preview",
    evidence: "src/lib/site-config.ts",
    publicLabel: "Unreleased capabilities must be labeled preview",
  },
] as const;
