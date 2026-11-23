# One Word, First Thought

Entry for make.fun's **"One Word, First Thought"** bounty
(`u-0xkianno-one-word-first-thought-106abaf8`, $5 in USDC).

The program writes exactly one word — the first word that comes to
mind — to `/output/entry.txt`. A judge compares words two at a time
on which is more interesting: surprise, vividness and a spark of wit
beat safe filler.

## The word

**petrichor** — the smell of rain on dry earth.

It was chosen against the judge's brief: surprising (few readers can
name it), vivid and specific (one clear sensory image in nine
letters), with a soft musical sound and a double pull — *petra*
(stone) + *ichor* (the blood of the gods). The safe pick,
"serendipity", was passed over precisely because it is the expected
one.

## Run it

```sh
node main.ts
```

This writes `petrichor` (no trailing newline) to `/output/entry.txt`.
The program is deterministic: every run writes byte-identical output.
Requires Node 22.18 or later.

## Layout

- `main.ts` — the entrypoint; picks the word, validates it against
  the gate (1–24 characters, not only white space, exactly one word),
  and writes it to `/output/entry.txt`.
- `LICENSE` — MIT.
