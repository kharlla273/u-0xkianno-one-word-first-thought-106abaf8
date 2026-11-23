// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one word: the first word that comes to mind,
// written to /output/entry.txt. The judge compares words two at a time
// on surprise, vividness and a spark of wit, so the word below was
// chosen against that brief:
//
//   Candidates considered:
//     serendipity  — vivid, but the safe, expected pick; every
//                     "most interesting word" list leads with it.
//     defenestration — witty and surprising, but a mouthful that
//                     reads as showing off rather than felt.
//     petrichor    — the smell of rain on dry earth. Surprising
//                     (few readers can name it), vivid and specific
//                     (one clear sensory image), with a soft, musical
//                     sound and a double pull: petra (stone) + ichor
//                     (the blood of the gods). Chosen.
//
// The program is deterministic: it always writes the same word, so
// two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one word. Exactly one word, no spaces, no punctuation.
const WORD = "petrichor";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 24
// characters, not only white space.
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 24;

function main(): void {
  if (WORD.length < 1 || WORD.length > MAX_CHARS) {
    throw new Error(`word must be 1-${MAX_CHARS} characters, got ${WORD.length}`);
  }
  if (!/\S/.test(WORD)) {
    throw new Error("word must not be only white space");
  }
  if (/\s/.test(WORD)) {
    throw new Error("entry must be exactly one word (no white space)");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the file is byte-for-byte the word itself.
  writeFileSync(OUTPUT_PATH, WORD, "utf8");
  console.log(`wrote ${WORD.length}-character entry to ${OUTPUT_PATH}`);
}

main();
