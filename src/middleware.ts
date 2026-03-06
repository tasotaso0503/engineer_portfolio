// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isInMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  const isMaintenancePage = req.nextUrl.pathname === '/maintenance';

  if (isInMaintenanceMode && !isMaintenancePage) {
    return NextResponse.rewrite(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}