// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config'; // インポートを追加

export async function middleware(req: NextRequest) {
  // Edge Config から値を取得
  // キャッシュが効くため、非常に高速に動作します
  const isInMaintenanceMode = await get<boolean>('isInMaintenanceMode');

  const isMaintenancePage = req.nextUrl.pathname === '/maintenance';

  if (isInMaintenanceMode && !isMaintenancePage) {
    // メンテナンス画面に書き換え（URLはそのまま）
    return NextResponse.rewrite(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}

// 静的ファイルやAPI、メンテナンスページ自体にMiddlewareが適用されないように除外設定
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|maintenance).*)'],
};