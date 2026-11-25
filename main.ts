// The Robot Apology — entry program (sharpened).
// The program writes the two-line apology to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1-400 chars. Line one: one specific mistake. Line two: the lesson.
// makefun anchor ec71b713d38f8e56a0379f01d2b08e2e472bb12a round 34271945

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROBOT_APOLOGY =
  "I am sorry I watered the plastic plant every day for a month. I have learned to check whether something is alive before I commit to a watering schedule, and from now on I will poke it first and only water the ones that poke back.";

const entryText = ROBOT_APOLOGY.trim();
if (entryText.length < 1 || entryText.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${entryText.length}`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, entryText, "utf8");
console.log(`wrote ${entryText.length} chars to ${outPath}`);
