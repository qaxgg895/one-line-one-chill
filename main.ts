// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488.
// Writes one original sentence of horror to /output/entry.txt.
// No dependencies, no network, deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The dentist found a second set of teeth growing behind mine, and they were already chewing.";

const OUTPUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (/\n/.test(LINE) || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUTPUT}`);
