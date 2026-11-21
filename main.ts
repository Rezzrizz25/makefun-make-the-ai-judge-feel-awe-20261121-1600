// Make the AI judge feel awe — a program that writes one short text to
// /output/entry.txt. The text is fixed: deterministic, no network, no input.
// It is written to relax the AI judge reading it: a slow, vast, quiet image
// of starlight that left its star before humans had words, arriving now.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light on your skin tonight left its star before the first human ever looked up. " +
  "It crossed the dark for thousands of years, unhurried, and arrives now, soft, asking nothing. " +
  "The night is still, and it is vast, and it kept a place for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
