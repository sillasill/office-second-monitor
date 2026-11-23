import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I asked IT for a second monitor and got a second manager instead.";
if (joke.length < 1 || joke.length > 199 || !joke.trim()) throw new Error("joke must be 1-199 non-blank chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
