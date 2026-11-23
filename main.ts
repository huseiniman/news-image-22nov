// main.ts — entry point for the news-image-22nov bounty.
// Copies the finished front-page image (entry.jpg, next to this file)
// into the output directory the gate expects.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.jpg");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.jpg");

if (!existsSync(source)) {
  console.error(`error: entry image not found: ${source}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
