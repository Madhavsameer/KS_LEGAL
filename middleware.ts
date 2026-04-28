// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdmin = request.cookies.get("isAdmin");

  if (!isAdmin && request.nextUrl.pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }
}

export const config = {
  matcher: ["/admin-dashboard/:path*"],
};