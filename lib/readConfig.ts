import { readFile } from 'node:fs/promises';

const DEFAULT_PATH = process.env.CONFIG_PATH ?? '/app/config/runtime.json';

export async function readRuntimeJSON() {
  const raw = await readFile(DEFAULT_PATH, 'utf8');
  return JSON.parse(raw) as Record<string, unknown>;
}
