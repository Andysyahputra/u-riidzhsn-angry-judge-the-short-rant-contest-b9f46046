// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about a small everyday annoyance
// to /output/entry.txt. Node 22, built-ins only.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The self-checkout accused me of stealing a banana. One banana. It screamed 'unexpected item in the bagging area' while the attendant stared at me like I'd robbed a bank, and there I stood, bagging my own groceries under armed guard — for fruit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
