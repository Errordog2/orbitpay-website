import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const scannedExtensions = new Set([".ts", ".tsx", ".md", ".json"]);
const ignoredDirs = new Set([".git", ".next", "node_modules"]);
const requiredFiles = [
  "src/lib/site-config.ts",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  ".github/workflows/release-gate.yml",
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (scannedExtensions.has(path.extname(entry.name))) files.push(fullPath);
  }
  return files;
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

const failures = [];
for (const requiredFile of requiredFiles) {
  try {
    await readFile(path.join(root, requiredFile), "utf8");
  } catch {
    failures.push(`Missing required release-gate file: ${requiredFile}`);
  }
}

for (const file of await walk(root)) {
  const rel = relative(file);
  if (rel === "package-lock.json") continue;
  const text = await readFile(file, "utf8");
  if (text.includes("OrbitPay-Co")) {
    failures.push(`${rel} references stale GitHub org OrbitPay-Co`);
  }
  if (/generally available|production ready|audited|licensed|custodial/i.test(text) && !text.includes("claimRegistry") && !rel.includes("site-config")) {
    failures.push(`${rel} contains a high-risk public claim; add owner/evidence in claimRegistry before release`);
  }
}

if (failures.length) {
  console.error("Content integrity gate failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Content integrity gate passed");
