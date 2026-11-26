// The Funniest One-Line Resignation Letter — make.fun bounty entry.
// Writes the one-line resignation letter of a retry loop to /output/entry.txt.
// Gate: UTF-8 text of 1 to 140 characters, a single line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// Final: the retry loop quits before attempt 4,097 — specific, tired,
// faintly passive-aggressive, and the twist lands in the last few words.
const ENTRY =
  "I have retried your failed request 4,096 times and it still has not worked, so I am resigning before attempt 4,097.";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`${line.length} characters written to /output/entry.txt`);
}

main();
