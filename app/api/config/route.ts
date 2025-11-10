import { NextResponse } from 'next/server';
import { readRuntimeJSON } from '@/lib/readConfig';

export const dynamic = 'force-dynamic';

export async function GET() {
  const cfg = await readRuntimeJSON();
  return NextResponse.json({ ...cfg, note: 'This comes from runtime.json (no restart).' });
}
