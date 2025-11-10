import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    SERVER_SECRET: process.env.SERVER_SECRET ?? 'UNDEFINED',
    NEXT_PUBLIC_CLIENT_LABEL: process.env.NEXT_PUBLIC_CLIENT_LABEL ?? 'UNDEFINED',
    note: 'process.env only updates after container restart; no rebuild required.'
  });
}
