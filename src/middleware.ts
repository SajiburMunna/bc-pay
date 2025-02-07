import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const role = request.cookies.get("role");

  const publicPaths = ["/log-in"];
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);
  if (!role && !isPublicPath) {
    return NextResponse.redirect(new URL("/log-in", request.url));
  }
  if (role?.value.toString() === "hr" && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/hr", request.url));
  }
  if (role?.value.toString() === "ceo" && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/ceo", request.url));
  }
  if (
    role?.value.toString() === "teamlead" &&
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/team-lead", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico/).*)"],
};
