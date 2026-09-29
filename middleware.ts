import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdmin = request.cookies.get("isAdmin");
  const userPhone = request.cookies.get("userPhone");

  if (!isAdmin && request.nextUrl.pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  if (!userPhone && request.nextUrl.pathname.startsWith("/user-dashboard")) {
    return NextResponse.redirect(new URL("/user-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*", "/user-dashboard/:path*"],
};
